-- CreateTable
CREATE TABLE "Estabelecimento" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "cnae" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "pessoalOcupado" INTEGER NOT NULL,
    "numeroRefeicoes" INTEGER NOT NULL,
    "possuiAlvaraSanitario" INTEGER NOT NULL,
    "possuiResponsavelBoasPraticas" INTEGER NOT NULL,
    "alteradoPor" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "dataAlteracao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Estabelecimento_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Estabelecimento_cnpj_key" ON "Estabelecimento"("cnpj");
