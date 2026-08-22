import { getDb } from "../../../db";
import { leads } from "../../../db/schema";

function toRouteErrorMessage(error: unknown) {
  const message = error instanceof Error ? error.message : "Unexpected error";
  const detail =
    error instanceof Error && error.cause instanceof Error ? error.cause.message : "";
  const combined = `${message}\n${detail}`;

  if (combined.includes("no such table") || combined.includes('from "leads"')) {
    return "The leads table is unavailable. Generate the migration locally with `npm run db:generate`, then deploy so the platform can apply the generated SQL to the real D1 database.";
  }

  return message;
}

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

function validate(payload: Payload) {
  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const phone = payload.phone?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (name.length < 2) return "name is required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "valid email is required";
  if (phone.length < 6) return "phone is required";
  if (message.length < 12) return "message is required";

  return null;
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Payload;
    const validationError = validate(payload);
    if (validationError) {
      return Response.json({ error: validationError }, { status: 400 });
    }

    const db = getDb();
    const [lead] = await db
      .insert(leads)
      .values({
        name: payload.name!.trim(),
        email: payload.email!.trim(),
        phone: payload.phone!.trim(),
        message: payload.message!.trim(),
      })
      .returning();

    return Response.json({ lead: { id: lead.id } }, { status: 201 });
  } catch (error) {
    return Response.json({ error: toRouteErrorMessage(error) }, { status: 500 });
  }
}
