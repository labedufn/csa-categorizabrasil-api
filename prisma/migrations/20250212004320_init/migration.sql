-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "instituicao" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Convite" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "idCriador" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "instituicao" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiraEm" TIMESTAMP(3) NOT NULL,
    "usado" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Convite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RedefinirSenha" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "idUsuario" TEXT NOT NULL,
    "expiraEm" TIMESTAMP(3) NOT NULL,
    "usado" BOOLEAN NOT NULL DEFAULT false,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RedefinirSenha_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Estabelecimento" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "cnae" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "pessoalOcupado" INTEGER NOT NULL,
    "numeroRefeicoes" INTEGER NOT NULL,
    "possuiAlvaraSanitario" INTEGER NOT NULL,
    "possuiResponsavelBoasPraticas" INTEGER NOT NULL,
    "alteradoPor" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "alteradoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Estabelecimento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gestores" (
    "id" TEXT NOT NULL,
    "idAvaliacao" TEXT NOT NULL,
    "criadoEm" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alteradoEm" TIMESTAMPTZ(3) NOT NULL,
    "informacoes" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Gestores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ManipuladorAlimento" (
    "id" TEXT NOT NULL,
    "idAvaliacao" TEXT NOT NULL,
    "criadoEm" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alteradoEm" TIMESTAMPTZ(3) NOT NULL,
    "informacoes" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "ManipuladorAlimento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ListaVerificacao" (
    "id" TEXT NOT NULL,
    "informacoes" TEXT NOT NULL,
    "idAvaliacao" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "criadoEm" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alteradoEm" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "ListaVerificacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnaliseQualitativa" (
    "id" TEXT NOT NULL,
    "idAvaliacao" TEXT NOT NULL,
    "informacoes" TEXT NOT NULL,
    "criadoEm" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alteradoEm" TIMESTAMPTZ(3) NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "AnaliseQualitativa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Triangulacao" (
    "id" TEXT NOT NULL,
    "idAvaliacao" TEXT NOT NULL,
    "informacoes" TEXT NOT NULL,
    "criadoEm" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alteradoEm" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "Triangulacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resultado" (
    "id" TEXT NOT NULL,
    "idEstabelecimento" TEXT NOT NULL,
    "idTriangulacao" TEXT NOT NULL,
    "idAvaliacao" TEXT NOT NULL,
    "informacoes" TEXT NOT NULL,

    CONSTRAINT "Resultado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnaliseQuantitativa" (
    "id" TEXT NOT NULL,
    "idAvaliacao" TEXT NOT NULL,
    "caracteristicasSocioDemograficas" TEXT NOT NULL,
    "resultadosAvaliacaoQuantitativasCsa" TEXT NOT NULL,
    "viesOtimista" TEXT NOT NULL,
    "criadoEm" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alteradoEm" TIMESTAMPTZ(3) NOT NULL,
    "ativo" INTEGER NOT NULL DEFAULT 1,
    "manipuladorAlimentoId" TEXT,

    CONSTRAINT "AnaliseQuantitativa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Avaliacao" (
    "id" TEXT NOT NULL,
    "idEstabelecimento" TEXT NOT NULL,
    "criadoEm" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alteradoEm" TIMESTAMPTZ(3) NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Avaliacao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_cpf_key" ON "Usuario"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Convite_token_key" ON "Convite"("token");

-- CreateIndex
CREATE UNIQUE INDEX "RedefinirSenha_token_key" ON "RedefinirSenha"("token");

-- CreateIndex
CREATE UNIQUE INDEX "Estabelecimento_cnpj_key" ON "Estabelecimento"("cnpj");

-- AddForeignKey
ALTER TABLE "Convite" ADD CONSTRAINT "Convite_idCriador_fkey" FOREIGN KEY ("idCriador") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RedefinirSenha" ADD CONSTRAINT "RedefinirSenha_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estabelecimento" ADD CONSTRAINT "Estabelecimento_alteradoPor_fkey" FOREIGN KEY ("alteradoPor") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gestores" ADD CONSTRAINT "Gestores_idAvaliacao_fkey" FOREIGN KEY ("idAvaliacao") REFERENCES "Avaliacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ManipuladorAlimento" ADD CONSTRAINT "ManipuladorAlimento_idAvaliacao_fkey" FOREIGN KEY ("idAvaliacao") REFERENCES "Avaliacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListaVerificacao" ADD CONSTRAINT "ListaVerificacao_idAvaliacao_fkey" FOREIGN KEY ("idAvaliacao") REFERENCES "Avaliacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnaliseQualitativa" ADD CONSTRAINT "AnaliseQualitativa_idAvaliacao_fkey" FOREIGN KEY ("idAvaliacao") REFERENCES "Avaliacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Triangulacao" ADD CONSTRAINT "Triangulacao_idAvaliacao_fkey" FOREIGN KEY ("idAvaliacao") REFERENCES "Avaliacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resultado" ADD CONSTRAINT "Resultado_idTriangulacao_fkey" FOREIGN KEY ("idTriangulacao") REFERENCES "Triangulacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resultado" ADD CONSTRAINT "Resultado_idEstabelecimento_fkey" FOREIGN KEY ("idEstabelecimento") REFERENCES "Estabelecimento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resultado" ADD CONSTRAINT "Resultado_idAvaliacao_fkey" FOREIGN KEY ("idAvaliacao") REFERENCES "Avaliacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnaliseQuantitativa" ADD CONSTRAINT "AnaliseQuantitativa_idAvaliacao_fkey" FOREIGN KEY ("idAvaliacao") REFERENCES "Avaliacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnaliseQuantitativa" ADD CONSTRAINT "AnaliseQuantitativa_manipuladorAlimentoId_fkey" FOREIGN KEY ("manipuladorAlimentoId") REFERENCES "ManipuladorAlimento"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_idEstabelecimento_fkey" FOREIGN KEY ("idEstabelecimento") REFERENCES "Estabelecimento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
