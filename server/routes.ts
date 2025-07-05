import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactRequestSchema } from "@shared/schema";
import { z } from "zod";
import { 
  validateClaim, 
  analyzeDenialReason, 
  generateRevenueInsights, 
  chatAssistant,
  generatePatientMessage 
} from "./ai";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactRequestSchema.parse(req.body);
      const contactRequest = await storage.createContactRequest(validatedData);
      res.json({ success: true, id: contactRequest.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid form data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to submit contact request" });
      }
    }
  });

  // Get revenue metrics
  app.get("/api/metrics", async (req, res) => {
    try {
      const metrics = await storage.getRevenueMetrics();
      res.json(metrics);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch metrics" });
    }
  });

  // Get claims data
  app.get("/api/claims", async (req, res) => {
    try {
      const claims = await storage.getClaims();
      res.json(claims);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch claims" });
    }
  });

  // Get patients data
  app.get("/api/patients", async (req, res) => {
    try {
      const patients = await storage.getPatients();
      res.json(patients);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch patients" });
    }
  });

  // AI-powered claim validation
  app.post("/api/ai/validate-claim", async (req, res) => {
    try {
      const claimData = req.body;
      const validation = await validateClaim(claimData);
      res.json(validation);
    } catch (error) {
      res.status(500).json({ error: "Failed to validate claim with AI" });
    }
  });

  // AI-powered denial analysis
  app.post("/api/ai/analyze-denial", async (req, res) => {
    try {
      const { denialReason, claimData } = req.body;
      const analysis = await analyzeDenialReason(denialReason, claimData);
      res.json(analysis);
    } catch (error) {
      res.status(500).json({ error: "Failed to analyze denial with AI" });
    }
  });

  // AI-powered revenue insights
  app.post("/api/ai/revenue-insights", async (req, res) => {
    try {
      const metricsData = req.body.metrics || [];
      const insights = await generateRevenueInsights(metricsData);
      res.json(insights);
    } catch (error) {
      res.status(500).json({ error: "Failed to generate revenue insights" });
    }
  });

  // AI chat assistant
  app.post("/api/ai/chat", async (req, res) => {
    try {
      const { message, context } = req.body;
      const response = await chatAssistant(message, context);
      res.json({ response });
    } catch (error) {
      res.status(500).json({ error: "Failed to process chat request" });
    }
  });

  // AI patient communication
  app.post("/api/ai/patient-message", async (req, res) => {
    try {
      const { patient, messageType } = req.body;
      const message = await generatePatientMessage(patient, messageType);
      res.json({ message });
    } catch (error) {
      res.status(500).json({ error: "Failed to generate patient message" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
