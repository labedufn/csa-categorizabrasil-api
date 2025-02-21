import { mongooseConnection } from "@config/mongoose";
import { usuario } from "@models/usuario.model";
import { question } from "readline-sync";
import { hash } from "bcryptjs";
import { config } from "dotenv";

config();

async function criarUsuario() {
  try {
    if (mongooseConnection.connection.readyState === 0) {
      await mongooseConnection.connect(process.env.MONGODB_URI!);
    }

    console.log("✅ Conexão com o MongoDB estabelecida.\n\n");

    console.log("Digite os dados do usuário:\n");
    const nome = question("Digite o nome: ");
    const sobrenome = question("Digite o sobrenome: ");
    const cpf = question("Digite o CPF: ");
    const email = question("Digite o email: ");
    const senha = question("Digite a senha: ", { hideEchoBack: true });
    const instituicao = question("Digite a instituição: ");
    const tipo = question("Digite o tipo (ADMINISTRADOR, GESTOR, AVALIADOR): ");

    const senhaCriptografada = await hash(senha, 10);

    const novoUsuario = await usuario.create({
      nome,
      sobrenome,
      cpf,
      email,
      senha: senhaCriptografada,
      instituicao,
      tipo,
    });

    console.log("\n✅ Usuário criado com sucesso:", novoUsuario);
    process.exit(0);
  } catch (error: any) {
    console.error("\n❌ Erro ao criar usuário teste:", error.message);
    process.exit(1);
  }
}

criarUsuario();
