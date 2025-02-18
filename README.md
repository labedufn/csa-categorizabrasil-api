# CSA - Cultura de Segurança dos Alimentos API

## Sobre o Projeto
O CSA - Cultura de Segurança dos Alimentos é uma API desenvolvida para o projeto Categoriza Brasil da Categorização dos Serviços de Alimentação da Região Central. A API foi construída com Node.js e TypeScript, utilizando o framework Fastify, Prisma como ORM e MongoDB como banco de dados.

## Regra de Negócio
A API tem como objetivo principal gerenciar a Cultura de Segurança dos Alimentos dentro do projeto Categoriza Brasil. No contexto da categorização dos serviços de alimentação da Região Central, a API permite a gestão de usuários, estabelecimentos e avaliações.

A estrutura das avaliações é organizada com base no vínculo entre os estabelecimentos e os avaliadores. Cada avaliação está associada a um estabelecimento específico, e o tipo de usuário **Gestor** é responsável por administrar as avaliações dentro de suas respectivas instituições.

Os convites são utilizados para permitir a entrada de novos usuários na plataforma. Apenas usuários com os tipos **Administrador** ou **Gestor** podem enviar convites, com as seguintes restrições:

- **Administradores** podem convidar qualquer tipo de usuário: **Administrador, Gestor ou Avaliador**.
- **Gestores** podem convidar apenas **Gestores ou Avaliadores**.

Além disso, ao enviar um convite, é necessário definir a instituição à qual o novo usuário pertencerá:
- **Administradores** podem escolher qualquer instituição.
- **Gestores** só podem convidar usuários para a mesma instituição em que estão vinculados.

## Documentação
A documentação completa da API: [api.csa.categorizabrasil.com.br/docs](https://api.csa.categorizabrasil.com.br/docs)

## Funcionalidades
Organizadas nas seguintes categorias:

### Autenticação
- Login de usuários.
- Cadastro de novos usuários através de um link de convite.

### Redefinição de Senha
- Permite que o usuário redefina sua senha em caso de esquecimento.

### Usuários
- Listar todos os usuários.
- Buscar usuário por ID.
- Atualizar dados do próprio usuário.
- Alterar status do usuário (ativo/desativado) (Apenas para os administradores/gestores).
- Alterar sua senha.
- Modificar o tipo de usuário (ADMINISTRADOR, GESTOR, AVALIADOR) (Apenas para os administradores/gestores).

### Convites
- Administradores e Gestores podem enviar convites para novos usuários.
- Administradores podem convidar qualquer um dos 3 tipos de usuário (ADMINISTRADOR, GESTOR, AVALIADOR) e definir sua instituição.
- Gestores podem convidar apenas usuários da sua própria instituição, herdando a instituição do gestor que enviou o convite.

### Estabelecimentos
- Criar estabelecimentos.
- Listar estabelecimentos.
- Buscar estabelecimento por ID.
- Desativar estabelecimento.

### Avaliações
- Listar todas as avaliações.
- Criar uma avaliação vinculada a um estabelecimento.
- Desativar uma avaliação.

### Gestores
- Criar uma avaliação específica para gestores.
- Buscar gestor por ID.
- Listar todos os gestores de uma avaliação.
- Editar e deletar um gestor vinculado a uma avaliação.

### Manipuladores de Alimentos
- Funcionalidade semelhante aos gestores, porém com um questionário específico para manipuladores de alimentos.