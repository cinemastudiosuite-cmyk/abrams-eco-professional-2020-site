import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const leads = sqliteTable("leads", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  message: text("message"),
  buildingAddress: text("building_address"),
  managementType: text("management_type"),
  szStatus: text("sz_status"),
  apartmentsCount: integer("apartments_count"),
  lokaliCount: integer("lokali_count"),
  garazeCount: integer("garaze_count"),
  yearBuilt: integer("year_built"),
  currentProblems: text("current_problems"),
  existingManagerProblem: text("existing_manager_problem"),
  needsMeetingPresence: text("needs_meeting_presence"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});
