import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);

  async sendMail(to: string, subject: string, body: string): Promise<void> {
    this.logger.log(`
      --- MOCK EMAIL ---
      To: ${to}
      Subject: ${subject}
      Body: ${body}
      --- END MOCK EMAIL ---
    `);
    // Em um ambiente de produção, aqui estaria a lógica para
    // se conectar a um provedor de e-mail como SendGrid, SES, etc.
  }
}