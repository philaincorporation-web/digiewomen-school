import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { profile, ...data } = body;

    if (!profile) {
      return NextResponse.json({ error: "Profil manquant" }, { status: 400 });
    }

    // 1. SheetDB integration (server-side only)
    const sheetdbUrl = process.env.SHEETDB_URL;
    if (sheetdbUrl) {
      await fetch(sheetdbUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: [
            {
              profile,
              ...data,
              date: new Date().toISOString(),
            },
          ],
        }),
      });
    }

    // 2. Email notification (using Resend, Nodemailer, or similar)
    // Example with fetch to a service like Resend:
    const emailApiKey = process.env.EMAIL_API_KEY;
    const notifyEmail = process.env.NOTIFY_EMAIL || "digiewomen@gmail.com";

    if (emailApiKey) {
      // Placeholder: integrate with your email provider
      // await fetch("https://api.resend.com/emails", { ... })
      console.log("Email notification would be sent to", notifyEmail, "with data:", { profile, ...data });
    } else {
      // Log for development
      console.log("[Contact Form]", { profile, ...data });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Erreur lors du traitement de la demande" },
      { status: 500 }
    );
  }
}