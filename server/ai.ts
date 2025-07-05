import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// AI-powered claim validation and analysis
export async function validateClaim(claimData: any): Promise<{
  isValid: boolean;
  confidence: number;
  issues: string[];
  suggestions: string[];
}> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `You are a medical billing expert specializing in healthcare revenue cycle management. Analyze the provided claim data for accuracy, completeness, and potential issues. Respond with JSON in this format:
          {
            "isValid": boolean,
            "confidence": number (0-1),
            "issues": ["list of issues found"],
            "suggestions": ["list of improvement suggestions"]
          }`
        },
        {
          role: "user",
          content: `Analyze this medical claim:
          Claim Number: ${claimData.claimNumber}
          Patient: ${claimData.patientName}
          Amount: $${claimData.amount}
          Payer: ${claimData.payerName}
          Service Date: ${claimData.serviceDate}
          CPT Codes: ${JSON.stringify(claimData.cptCodes)}
          ICD Codes: ${JSON.stringify(claimData.icdCodes)}
          Status: ${claimData.status}`
        }
      ],
      response_format: { type: "json_object" }
    });

    return JSON.parse(response.choices[0].message.content || "{}");
  } catch (error) {
    console.error("AI claim validation error:", error);
    return {
      isValid: false,
      confidence: 0,
      issues: ["AI analysis unavailable"],
      suggestions: ["Manual review required"]
    };
  }
}

// AI-powered denial reason analysis
export async function analyzeDenialReason(denialReason: string, claimData: any): Promise<{
  category: string;
  severity: string;
  appealChance: number;
  recommendedActions: string[];
  appealLetter?: string;
}> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `You are a healthcare denial management expert. Analyze denial reasons and provide actionable insights. Respond with JSON in this format:
          {
            "category": "string (e.g., 'Prior Authorization', 'Coding Error', 'Missing Documentation')",
            "severity": "string (Low/Medium/High)",
            "appealChance": number (0-1),
            "recommendedActions": ["list of specific actions to take"]
          }`
        },
        {
          role: "user",
          content: `Analyze this denial:
          Denial Reason: ${denialReason}
          Claim Details: ${JSON.stringify(claimData)}`
        }
      ],
      response_format: { type: "json_object" }
    });

    const analysis = JSON.parse(response.choices[0].message.content || "{}");
    
    // Generate appeal letter if high appeal chance
    if (analysis.appealChance > 0.7) {
      const appealResponse = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: "You are a medical billing specialist. Generate a professional appeal letter for the denied claim based on the denial reason and claim details."
          },
          {
            role: "user",
            content: `Generate an appeal letter for:
            Denial Reason: ${denialReason}
            Claim: ${claimData.claimNumber}
            Patient: ${claimData.patientName}
            Service Date: ${claimData.serviceDate}`
          }
        ]
      });
      
      analysis.appealLetter = appealResponse.choices[0].message.content;
    }

    return analysis;
  } catch (error) {
    console.error("AI denial analysis error:", error);
    return {
      category: "Unknown",
      severity: "Medium",
      appealChance: 0.5,
      recommendedActions: ["Manual review required"]
    };
  }
}

// AI-powered revenue insights
export async function generateRevenueInsights(metricsData: any[]): Promise<{
  summary: string;
  trends: string[];
  recommendations: string[];
  forecast: string;
}> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `You are a healthcare financial analyst with expertise in revenue cycle management. Analyze the provided revenue metrics and generate actionable insights. Respond with JSON in this format:
          {
            "summary": "brief overall assessment",
            "trends": ["list of key trends identified"],
            "recommendations": ["specific actionable recommendations"],
            "forecast": "revenue forecast prediction"
          }`
        },
        {
          role: "user",
          content: `Analyze these revenue metrics: ${JSON.stringify(metricsData)}`
        }
      ],
      response_format: { type: "json_object" }
    });

    return JSON.parse(response.choices[0].message.content || "{}");
  } catch (error) {
    console.error("AI revenue insights error:", error);
    return {
      summary: "Analysis unavailable",
      trends: [],
      recommendations: [],
      forecast: "Unable to generate forecast"
    };
  }
}

// AI chat assistant for healthcare RCM
export async function chatAssistant(message: string, context?: any): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `You are Stellar.AI, an intelligent assistant for StellarOne Health's Revenue Cycle Management platform. You help healthcare providers with:
          - Claim status inquiries
          - Denial management guidance
          - Revenue cycle optimization
          - Billing process questions
          - Compliance information
          
          Be helpful, professional, and provide specific actionable advice. Always maintain HIPAA compliance and avoid sharing sensitive patient information.`
        },
        {
          role: "user",
          content: context ? `${message}\n\nContext: ${JSON.stringify(context)}` : message
        }
      ]
    });

    return response.choices[0].message.content || "I'm sorry, I couldn't process your request at the moment.";
  } catch (error) {
    console.error("AI chat assistant error:", error);
    return "I'm experiencing technical difficulties. Please try again later.";
  }
}

// AI-powered patient communication
export async function generatePatientMessage(patient: any, messageType: 'billing_reminder' | 'payment_plan' | 'insurance_update'): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `You are a healthcare communication specialist. Generate professional, empathetic patient communications that are clear and actionable. The message should be personalized and maintain a caring tone while being informative.`
        },
        {
          role: "user",
          content: `Generate a ${messageType} message for:
          Patient: ${patient.name}
          Outstanding Balance: $${patient.outstandingBalance}
          Insurance: ${patient.insuranceProvider}
          
          Keep it professional, empathetic, and under 200 words.`
        }
      ]
    });

    return response.choices[0].message.content || "Standard message could not be generated.";
  } catch (error) {
    console.error("AI patient message error:", error);
    return "Standard message template unavailable.";
  }
}