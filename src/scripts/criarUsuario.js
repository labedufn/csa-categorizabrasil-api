const { PrismaClient } = require("@prisma/client");
const readline = require("readline-sync");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  console.log("=== Criar Novo Usuário ===");

  const nome = readline.question("Nome: ");
  const sobrenome = readline.question("Sobrenome: ");
  const cpf = readline.question("CPF: ");
  const email = readline.question("Email: ");
  const senha = readline.question("Senha: ", { hideEchoBack: true });
  const instituicao = readline.question("Instituição: ");
  const tipo = readline.question("Tipo (ADMINISTRADOR/GESTOR/USUARIO): ");

  const hashSenha = await bcrypt.hash(senha, 10);

  try {
    const usuario = await prisma.usuario.create({
      data: {
        nome,
        sobrenome,
        cpf,
        email,
        senha: hashSenha,
        instituicao,
        tipo,
        ativo: true,
      },
    });

    console.log("\n✅ Usuário criado com sucesso!");
    console.log(usuario);
  } catch (error) {
    console.error("\n❌ Erro ao criar usuário:", error.message);
  } finally {
    await prisma.$disconnect();
  }
}

main();
