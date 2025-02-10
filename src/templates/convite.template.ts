export function generateInvitationEmailTemplate(params: {
  userName: string;
  userEmail: string;
  invitationLink: string;
  frontendUrl: string;
}): string {
  const { userName, userEmail, invitationLink, frontendUrl } = params;
  return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Convite para Cadastro - CSA</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
          font-family: Arial, sans-serif;
        }
        .container {
          max-width: 600px;
          margin: 2rem auto;
          background: #ffffff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .header {
          text-align: center;
          padding-bottom: 20px;
          border-bottom: 1px solid #e0e0e0;
        }
        .header img {
          max-height: 60px;
        }
        .content {
          padding: 20px 0;
        }
        .content h2 {
          color: #333333;
          margin-bottom: 10px;
        }
        .content p {
          font-size: 16px;
          line-height: 1.5;
          color: #555555;
        }
        .btn {
          display: block;
          width: 220px;
          margin: 20px auto;
          text-align: center;
          background-color: #28a745;
          color: #ffffff;
          padding: 12px;
          border-radius: 5px;
          text-decoration: none;
          font-size: 16px;
          font-weight: bold;
        }
        .footer {
          text-align: center;
          font-size: 12px;
          color: #999999;
          border-top: 1px solid #e0e0e0;
          padding-top: 15px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <a href="${frontendUrl}">
            <img src="https://i.imgur.com/Gs8N9aB.png" alt="Logo Categoriza Brasil">
          </a>
        </div>
        <div class="content">
          <h2>Olá, ${userName}!</h2>
          <p>
            Você foi convidado a se cadastrar no sistema CSA - Cultura de Segurança dos Alimentos.
            Clique no botão abaixo para aceitar o convite e completar seu cadastro.
          </p>
          <a class="btn" href="${invitationLink}">Aceitar Convite</a>
          <p>
            Atenção: este link expirará em 15 minutos.
          </p>
        </div>
        <div class="footer">
          <p>Este email foi enviado para ${userEmail}.</p>
          <p>© ${new Date().getFullYear()} Categoriza Brasil</p>
        </div>
      </div>
    </body>
    </html>
    `;
}
