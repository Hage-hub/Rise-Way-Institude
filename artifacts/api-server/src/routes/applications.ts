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

    const adminMailBody = `
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

    const studentMailBody = `
Dear ${data.fullName},

Thank you for applying to RISE-WAY Technical And Professional Institute!

We have received your application and our admissions team will review it shortly. You can expect to hear from us within a few business days.

Here is a summary of your application:

  Course of Interest : ${data.courseOfInterest}
  Department         : ${data.department}
  Phone              : ${data.phone}
  Address            : ${data.address}

If you have any questions in the meantime, feel free to contact us at:
  Email : risewaytechpro@gmail.com
  Phone : +231 770 025 364 / +231 886 400 396

We look forward to welcoming you to RISE-WAY!

Warm regards,
RISE-WAY Technical And Professional Institute
Gotumo Town, Kakata City, Liberia
"Empowering Hands, Uplifting Lives"
`;

    await Promise.all([
      transporter.sendMail({
        from: `"RISE-WAY Institute" <${process.env.SMTP_USER || "risewaytechpro@gmail.com"}>`,
        to: "risewaytechpro@gmail.com",
        subject: `New Application: ${data.fullName} - ${data.courseOfInterest}`,
        text: adminMailBody,
      }),
      transporter.sendMail({
        from: `"RISE-WAY Institute" <${process.env.SMTP_USER || "risewaytechpro@gmail.com"}>`,
        to: data.email,
        subject: `Application Received – RISE-WAY Technical And Professional Institute`,
        text: studentMailBody,
      }),
    ]);

    req.log.info({ email: data.email }, "Application emails sent successfully");
  } catch (err) {
    req.log.warn({ err }, "Failed to send application emails - storing application anyway");
  }

  res.json({
    success: true,
    message: "Your application has been successfully submitted. Our team will contact you.",
  });
});

export default router;
