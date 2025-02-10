import axios from "axios";

interface SendEmailParams {
  to: string;
  subject: string;
  html: string;
}

export class EmailService {
  async sendEmail({ to, subject, html }: SendEmailParams): Promise<void> {
    await axios.post(
      process.env.EMAIL_API_URL || "http://localhost:3001",
      {
        to,
        subject,
        html,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.EMAIL_API_TOKEN}`,
        },
      },
    );
  }
}
