import { pgTable, text, serial, integer, boolean, timestamp, decimal, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const claims = pgTable("claims", {
  id: serial("id").primaryKey(),
  claimNumber: text("claim_number").notNull().unique(),
  patientName: text("patient_name").notNull(),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  status: text("status").notNull(), // 'submitted', 'approved', 'denied', 'pending'
  payerName: text("payer_name").notNull(),
  serviceDate: timestamp("service_date").notNull(),
  submittedDate: timestamp("submitted_date").notNull(),
  processedDate: timestamp("processed_date"),
  denialReason: text("denial_reason"),
  cptCodes: jsonb("cpt_codes"), // array of CPT codes
  icdCodes: jsonb("icd_codes"), // array of ICD codes
});

export const patients = pgTable("patients", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email"),
  phone: text("phone"),
  dateOfBirth: timestamp("date_of_birth"),
  insuranceProvider: text("insurance_provider"),
  policyNumber: text("policy_number"),
  outstandingBalance: decimal("outstanding_balance", { precision: 10, scale: 2 }),
});

export const revenueMetrics = pgTable("revenue_metrics", {
  id: serial("id").primaryKey(),
  date: timestamp("date").notNull(),
  totalRevenue: decimal("total_revenue", { precision: 12, scale: 2 }).notNull(),
  claimsProcessed: integer("claims_processed").notNull(),
  denialRate: decimal("denial_rate", { precision: 5, scale: 2 }).notNull(),
  avgCollectionTime: decimal("avg_collection_time", { precision: 5, scale: 2 }).notNull(),
  cleanClaimRate: decimal("clean_claim_rate", { precision: 5, scale: 2 }).notNull(),
});

export const contactRequests = pgTable("contact_requests", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  organization: text("organization"),
  message: text("message"),
  requestType: text("request_type").notNull(), // 'demo', 'contact', 'consultation'
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertClaimSchema = createInsertSchema(claims).omit({
  id: true,
});

export const insertPatientSchema = createInsertSchema(patients).omit({
  id: true,
});

export const insertRevenueMetricSchema = createInsertSchema(revenueMetrics).omit({
  id: true,
});

export const insertContactRequestSchema = createInsertSchema(contactRequests).omit({
  id: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertClaim = z.infer<typeof insertClaimSchema>;
export type Claim = typeof claims.$inferSelect;

export type InsertPatient = z.infer<typeof insertPatientSchema>;
export type Patient = typeof patients.$inferSelect;

export type InsertRevenueMetric = z.infer<typeof insertRevenueMetricSchema>;
export type RevenueMetric = typeof revenueMetrics.$inferSelect;

export type InsertContactRequest = z.infer<typeof insertContactRequestSchema>;
export type ContactRequest = typeof contactRequests.$inferSelect;
