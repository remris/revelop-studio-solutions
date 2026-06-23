import { defineEventHandler, readBody } from "h3";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  type: z.string().min(1),
  message: z.string().min(1),
});

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const data = schema.parse(body);

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { error: "Konfigurationsfehler" };
  }

  const resend = new Resend(apiKey);

  await resend.emails.send({
    from: "Kontaktformular re:velop <noreply@re-velop.de>",
    to: "kontakt@re-velop.de",
    replyTo: data.email,
    subject: `Neue Anfrage: ${data.type} — ${data.name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#0a0a0a;color:#e5e5e5;border-radius:12px">
        <h2 style="margin:0 0 24px;font-size:20px;color:#ffffff">Neue Projektanfrage</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#888;width:120px;vertical-align:top">Name</td><td style="padding:8px 0;color:#e5e5e5">${data.name}</td></tr>
          <tr><td style="padding:8px 0;color:#888;vertical-align:top">E-Mail</td><td style="padding:8px 0"><a href="mailto:${data.email}" style="color:#6366f1">${data.email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#888;vertical-align:top">Projekttyp</td><td style="padding:8px 0;color:#e5e5e5">${data.type}</td></tr>
          <tr><td style="padding:8px 0;color:#888;vertical-align:top">Nachricht</td><td style="padding:8px 0;color:#e5e5e5;white-space:pre-wrap">${data.message}</td></tr>
        </table>
        <hr style="border:none;border-top:1px solid #2a2a2a;margin:24px 0"/>
        <p style="margin:0;font-size:12px;color:#555">re-velop.de · Kontaktformular</p>
      </div>
    `,
  });

  return { success: true };
});
