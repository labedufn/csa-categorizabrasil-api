import { throwHandledError } from "@utils/throwHandledError";
import { post } from "axios";

interface SendEmailParams {
  to: string;
  subject: string;
  html: string;
}

export class EmailService {
  /**
   * Envia um e-mail.
   * @param to - O destinatário do e-mail.
   * @param subject - O assunto do e-mail.
   * @param html - O conteúdo do e-mail.
   */
  async sendEmail({ to, subject, html }: SendEmailParams): Promise<void> {
    try {
      await post(
        process.env.EMAIL_API_URL || "http://localhost:3001",
        { to, subject, html },
        {
          headers: {
            Authorization: `Bearer ${process.env.EMAIL_API_TOKEN}`,
          },
        },
      );
    } catch (error) {
      throwHandledError("Erro ao enviar e-mail", error);
    }
  }
}
