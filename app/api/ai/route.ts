import { NextRequest, NextResponse } from "next/server";
import { ai } from "@/lib/gemini";

export async function POST(req: NextRequest) {
  try {
    const { task } = await req.json();

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
You are FlowShield AI.

Analyze this task:

${task}

Return ONLY valid JSON.

{
  "flowScore": 92,
  "deadlineProbability": 87,
  "estimatedTime": "5 hours",
  "priority": "High",
  "taskBreakdown": [
    "Research",
    "Frontend",
    "Backend",
    "Testing",
    "Deployment"
  ],
  "biggestDistraction": "Social Media",
  "nextAction": "Start with the highest priority task.",
  "recoveryTip": "Work in 50-minute focus sessions with 10-minute breaks.",
  "motivation": "You're closer than you think. Finish one task at a time."
}

Return ONLY JSON.
Do not use markdown.
Do not explain anything.
`,
    });

    const text = response.text ?? "";

    // Remove markdown code fences if Gemini adds them
    const cleaned = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    try {
      const data = JSON.parse(cleaned);
      return NextResponse.json(data);
    } catch {
      return NextResponse.json({
        raw: cleaned,
      });
    }
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "AI request failed.",
      },
      {
        status: 500,
      }
    );
  }
}