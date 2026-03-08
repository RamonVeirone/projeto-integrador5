# projeto-integrador5
Este repositório é voltado para a entrega do projeto integrador do último semestre de ADS

Membros: 
- João Guilherme de Luna Pontes
- Pedro Heryc Monte Araujo
- Ramon Alves da Silva
- Tiago Renato Messias

# CareTrack - Sistema de Gestão Hospitalar

Bem-vindo ao repositório do projeto CareTrack. Este sistema é composto por um frontend em React (Vite) com um Design System em Dark Mode e um backend em Node.js suportado por um banco de dados SQLite.

## Pré-requisitos

Certifique-se de que você possui as seguintes ferramentas instaladas no seu computador:
- **Node.js** (versão 20 ou superior recomendada)
- **NPM** (Node Package Manager)

## Como rodar o projeto localmente

O projeto está dividido em duas partes principais: o Backend (API) e o Frontend (Interface). Para que o sistema funcione completamente, você precisa rodar ambos ao mesmo tempo (utilize duas abas do terminal).

### 1. Iniciando o Banco de Dados e o Backend

O backend é responsável por fornecer as informações de pacientes e rotinas pelo banco de dados SQLite.

1. Abra um terminal do PowerShell (ou CMD).
2. Navegue até a pasta do backend:
   ```bash
   cd \projeto-integrador5\backend
   ```
3. Instale as dependências (caso seja a primeira vez):
   ```bash
   npm install
   ```
4. Se for a primeira vez, popule o banco de dados inicial:
   ```bash
   node seed.js
   ```
5. Inicie o servidor:
   ```bash
   node server.js
   ```
   *Se tudo estiver certo, você verá a mensagem: `Backend rodando com sucesso em http://localhost:3000`*

### 2. Iniciando a Interface Frontend

O frontend é a interface visual onde o usuário interage.

1. Abra uma **nova guia** (aba) do terminal e mantenha a do backend rodando na anterior.
2. Navegue até a pasta do frontend:
   ```bash
   cd \projeto-integrador5\frontend
   ```
3. Instale as dependências (caso seja a primeira vez):
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento do Vite:
   ```bash
   npm run dev
   ```
   *Você verá uma mensagem como: `Local: http://localhost:5173/`*

### 3. Acessando o Sistema

Com ambos os terminais rodando:
1. Abra o seu navegador preferido (Chrome, Edge, Firefox).
2. Digite a URL: **http://localhost:5173**
3. O sistema será carregado!
   - Navegue pelo Menu Lateral. 
   - Ao acessar "Lista de Pacientes", a lista será carregada dinamicamente do servidor Node.js.
   - Ao clicar em "Ver Detalhes", as informações de histórico e timeline de um paciente virão direto do SQLite.

## Observações

- **Parando os servidores:** Para desligar os servidores locais, vá no terminal correspondente e pressione `Ctrl + C`, e depois `S` (ou `Y`) para confirmar.
- O banco de dados (`caretrack.sqlite`) já fica embutido na pasta backend, então você não precisa configurar servidores externos (como MySQL ou PostgreSQL). Tudo fica arquivado localmente.