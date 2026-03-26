import { Router, type IRouter } from "express";
import { SubmitContactBody } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/contact", async (req, res) => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid contact data" });
    return;
  }

  const data = parsed.data;

  req.log.info({ name: data.name, email: data.email }, "New contact message received");

  try {
    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailBody = `
NEW CONTACT MESSAGE - RISE-WAY Technical And Professional Institute

From: ${data.name}
Email: ${data.email}

Message:
${data.message}

---
This message was submitted via the RISE-WAY website contact form.
`;

    await transporter.sendMail({
      from: process.env.SMTP_USER || "risewaytechpro@gmail.com",
      to: "risewaytechpro@gmail.com",
      subject: `Contact Message from ${data.name}`,
      text: mailBody,
    });

    req.log.info({ email: data.email }, "Contact email sent successfully");
  } catch (err) {
    req.log.warn({ err }, "Failed to send contact email");
  }

  res.json({
    success: true,
    message: "Your message has been sent. We will get back to you shortly.",
  });
});

export default router;
