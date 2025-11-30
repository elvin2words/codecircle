import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { sendContactEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      
      const contactSubmission = await storage.createContactSubmission(validatedData);
      
      await sendContactEmail(validatedData);
      
      res.json({ success: true, data: contactSubmission });
    } catch (error: any) {
      if (error.name === "ZodError") {
        res.status(400).json({ 
          success: false, 
          error: "Validation failed", 
          details: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          error: "Failed to submit contact form" 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
