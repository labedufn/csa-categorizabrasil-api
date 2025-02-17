export function generateInvitationEmailTemplate(params: {
  userName: string;
  userEmail: string;
  invitationLink: string;
  frontendUrl: string;
}): string {
  const { userName, userEmail, invitationLink, frontendUrl } = params;
  return `
      <section style="max-width: 32rem; padding: 2rem 1.5rem; margin: 0 auto; background-color: white;">
        <header>
          <a href="${frontendUrl}">
            <img style="height: 3.8rem;" src="https://painel.categorizabrasil.com.br/assets/0ec52c6b-ace1-40ff-b35f-f711687144cd.png" alt="Logo">
          </a>
        </header>
       
        <main style="margin-top: 2rem;">
          <h2 style="color: #374151;">Olá ${userName},</h2>
         
          <p style="margin-top: 0.5rem; line-height: 1.75; color: #4B5563;">
            Você foi convidado para se cadastrar no 
            <span style="font-weight: 600;">CSA - Cultura de Segurança dos Alimentos</span>.
            Clique no botão abaixo para aceitar o convite e completar seu cadastro.
          </p>
         
          <div style="margin-top: 1rem; text-align: left;">
            <a href="${invitationLink}"
               style="display: inline-block; padding: 0.5rem 1.5rem; font-size: 0.875rem;
                      font-weight: 500; letter-spacing: 0.05em; color: white;
                      background-color: #003963; border-radius: 0.5rem;
                      text-decoration: none; transition: background-color 0.3s;">
              Aceitar Convite
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
            Se você não reconhece este convite, por favor ignore-o.
          </p>
          <p style="margin-top: 0.75rem; color: #6B7280; font-size: 0.875rem;">
            © ${new Date().getFullYear()} Categoriza Brasil
          </p>
        </footer>
      </section>
    `;
}
