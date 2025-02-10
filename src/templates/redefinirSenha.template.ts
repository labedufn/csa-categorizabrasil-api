export function generatePasswordResetEmailTemplate(params: {
  userName: string;
  userEmail: string;
  resetLink: string;
  frontendUrl: string;
}) {
  const { userName, userEmail, resetLink, frontendUrl } = params;
  return `
      <section style="max-width: 32rem; padding: 2rem 1.5rem; margin: 0 auto; background-color: white;">
        <header>
          <a href="${frontendUrl}">
            <img style="height: 3.8rem;" src="https://i.imgur.com/Gs8N9aB.png" alt="Logo">
          </a>
        </header>
       
        <main style="margin-top: 2rem;">
          <h2 style="color: #374151;">Olá ${userName},</h2>
         
          <p style="margin-top: 0.5rem; line-height: 1.75; color: #4B5563;">
            Recebemos uma solicitação para redefinir a senha da sua conta no
            <span style="font-weight: 600;">CSA - Cultura de Segurança dos Alimentos</span>.
            Se você não solicitou uma redefinição de senha, pode ignorar este e-mail.
          </p>
         
          <div style="margin-top: 1rem; text-align: left;">
            <a href="${resetLink}"
               style="display: inline-block; padding: 0.5rem 1.5rem; font-size: 0.875rem;
                      font-weight: 500; letter-spacing: 0.05em; color: white;
                      background-color: #003963; border-radius: 0.5rem;
                      text-decoration: none; transition: background-color 0.3s;">
              Redefinir Senha
            </a>
          </div>
         
          <p style="margin-top: 2rem; color: #4B5563;">
            Este link expirará em 15 minutos.<br><br>
            Atenciosamente,<br>
            Equipe Categoriza Brasil
          </p>
        </main>
       
        <footer style="margin-top: 2rem; border-top: 1px solid #E5E7EB; padding-top: 1rem;">
          <p style="color: #6B7280; font-size: 0.875rem;">
            Este email foi enviado para ${userEmail}.<br>
            Se você não solicitou este email, por favor ignore-o.
          </p>
          <p style="margin-top: 0.75rem; color: #6B7280; font-size: 0.875rem;">
            © ${new Date().getFullYear()} Categoriza Brasil
          </p>
        </footer>
      </section>
    `;
}
