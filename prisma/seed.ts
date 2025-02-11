import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Iniciando a seed do banco de dados...");

  const senhaHash = await bcrypt.hash("admin123", 10);

  const admin = await prisma.usuario.upsert({
    where: { email: "admin@example.com" },
    update: {},
    create: {
      nome: "Administrador",
      sobrenome: "Sistema",
      cpf: "00000000000",
      email: "admin@email.com",
      senha: senhaHash,
      instituicao: "UFN",
      tipo: "ADMINISTRADOR",
      ativo: true,
    },
  });

  console.log(`✅ Usuário administrador criado: ${admin.email}`);

  console.log("🎉 Seed finalizado!");
}

main()
  .catch((error) => {
    console.error("🚨 Erro ao rodar o seed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
