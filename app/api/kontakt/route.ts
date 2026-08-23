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
  buildingAddress?: string;
  managementType?: string;
  szStatus?: string;
  apartmentsCount?: string;
  lokaliCount?: string;
  garazeCount?: string;
  yearBuilt?: string;
  currentProblems?: string;
  existingManagerProblem?: string;
  needsMeetingPresence?: string;
};

const MANAGEMENT_TYPES = ["stanari", "profesionalni", "nema"] as const;
const SZ_STATUSES = ["nova", "postojeca"] as const;
const MEETING_PRESENCE = ["da", "ne", "nije-sigurno"] as const;

function toNullableInt(value: string | undefined) {
  if (!value || value.trim() === "") return null;
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : null;
}

function validate(payload: Payload) {
  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const phone = payload.phone?.trim() ?? "";
  const buildingAddress = payload.buildingAddress?.trim() ?? "";
  const managementType = payload.managementType?.trim() ?? "";
  const szStatus = payload.szStatus?.trim() ?? "";
  const currentProblems = payload.currentProblems?.trim() ?? "";

  if (name.length < 2) return "name is required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "valid email is required";
  if (phone.length < 6) return "phone is required";
  if (buildingAddress.length < 4) return "buildingAddress is required";
  if (!MANAGEMENT_TYPES.includes(managementType as (typeof MANAGEMENT_TYPES)[number])) {
    return "managementType is required";
  }
  if (!SZ_STATUSES.includes(szStatus as (typeof SZ_STATUSES)[number])) {
    return "szStatus is required";
  }
  if (currentProblems.length < 5) return "currentProblems is required";

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
        message: payload.message?.trim() || null,
        buildingAddress: payload.buildingAddress!.trim(),
        managementType: payload.managementType!.trim(),
        szStatus: payload.szStatus!.trim(),
        apartmentsCount: toNullableInt(payload.apartmentsCount),
        lokaliCount: toNullableInt(payload.lokaliCount),
        garazeCount: toNullableInt(payload.garazeCount),
        yearBuilt: toNullableInt(payload.yearBuilt),
        currentProblems: payload.currentProblems!.trim(),
        existingManagerProblem: payload.existingManagerProblem?.trim() || null,
        needsMeetingPresence: MEETING_PRESENCE.includes(
          payload.needsMeetingPresence as (typeof MEETING_PRESENCE)[number],
        )
          ? payload.needsMeetingPresence!.trim()
          : null,
      })
      .returning();

    return Response.json({ lead: { id: lead.id } }, { status: 201 });
  } catch (error) {
    return Response.json({ error: toRouteErrorMessage(error) }, { status: 500 });
  }
}
