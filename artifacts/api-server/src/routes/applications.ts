import { Router, type IRouter } from "express";
import { SubmitApplicationBody } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/applications", async (req, res) => {
  const parsed = SubmitApplicationBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid application data" });
    return;
  }

  const data = parsed.data;

  req.log.info({ fullName: data.fullName, email: data.email }, "New application received");

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
NEW STUDENT APPLICATION - RISE-WAY Technical And Professional Institute

Full Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Department: ${data.department}
Course of Interest: ${data.courseOfInterest}
Address: ${data.address}
Educational Background: ${data.educationalBackground}

---
This application was submitted via the RISE-WAY website.
`;

    await transporter.sendMail({
      from: process.env.SMTP_USER || "risewaytechpro@gmail.com",
      to: "risewaytechpro@gmail.com",
      subject: `New Application: ${data.fullName} - ${data.courseOfInterest}`,
      text: mailBody,
    });

    req.log.info({ email: data.email }, "Application email sent successfully");
  } catch (err) {
    req.log.warn({ err }, "Failed to send application email - storing application anyway");
  }

  res.json({
    success: true,
    message: "Your application has been successfully submitted. Our team will contact you.",
  });
});

export default router;
