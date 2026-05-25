# 🚘 DriveX

Aplicativo mobile voltado para motoristas de aplicativo que querem ter controle real sobre as finanças e a saúde do veículo — tudo em um só lugar.

> ⚠️ **Projeto em desenvolvimento ativo.** Funcionalidades sendo implementadas.

---

## 📸 Screenshots

<!-- Substitua cada bloco abaixo pela captura de tela correspondente -->
<!-- Sugestão de caminho: docs/screenshots/nome-da-tela.png -->

**Tela Inicial**
![home](docs/screenshots/home.png)

---

**Tela de finanças**
![gastos](docs/screenshots/gastos.png)

---

**Login**
![metas](docs/screenshots/metas.png)

---


## 💡 Sobre o projeto

Motoristas de aplicativo lidam com despesas variáveis, manutenções frequentes e obrigações veiculares que se acumulam sem um controle centralizado. O DriveX resolve isso oferecendo:

- **Controle de gastos** — registro e acompanhamento de todas as despesas do veículo (combustível, lavagens, reparos, etc.)
- **Metas financeiras** — definição e acompanhamento de objetivos de renda e economia
- **Manutenções preventivas** — lembretes automáticos disparados por quilometragem e/ou tempo desde a última manutenção
- **Alertas inteligentes** — notificações de vencimentos e obrigações como IPVA, seguro, troca de pneus e revisões periódicas

---

## 🏗️ Arquitetura

```
┌─────────────────────────────────────────┐
│              DriveX                     │
│                                         │
│  [App Mobile - React Native]            │
│         │ REST                          │
│         ▼                               │
│  [API - Spring Boot / Java]             │
│         │                               │
│         ▼                               │
│  [Banco de Dados]                       │
└─────────────────────────────────────────┘
```

- **Frontend:** este repositório — React Native + TypeScript
- **Backend:** [Projeto-de-Sistemas-Computacionais---backend](https://github.com/NathanDoile/Projeto-de-Sistemas-Computacionais---backend) — Java + Spring Boot

---

## 🛠️ Stack

| Camada | Tecnologia |
|---|---|
| Framework | React Native (Expo) |
| Linguagem | TypeScript |
| Navegação | Expo Router |
| Backend | Java / Spring Boot |
| Build | Maven |

---

## 🚦 Status das funcionalidades

- [ ] Autenticação de usuário
- [ ] Cadastro e gestão de veículos
- [ ] Controle de gastos
- [ ] Receita diária
- [ ] Metas financeiras
- [ ] Lembretes de manutenção por km / tempo
- [ ] Alertas de IPVA, seguro e outros vencimentos
- [ ] Relatórios e resumo financeiro (dia / semana / mês)

---

## 🚀 Como rodar localmente

### Pré-requisitos

- Node.js
- Expo CLI
- Emulador Android/iOS ou dispositivo físico com Expo Go
- Backend rodando localmente — veja as instruções em [Projeto-de-Sistemas-Computacionais---backend](https://github.com/NathanDoile/Projeto-de-Sistemas-Computacionais---backend)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/arielcBR/DriveX-frontend.git

# Acesse a pasta do projeto
cd DriveX-frontend

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env-example .env
# Edite o .env com a URL da API

# Inicie o servidor de desenvolvimento
npx expo start
```

---

## 🗂️ Estrutura do projeto

```text
Projeto-de-Sistemas-Computacionais---frontend/
├── docs/                    # Documentação e diagramas
├── src/
│   ├── app/                 # Configuração de rotas e navegação
│   ├── assets/              # Imagens, ícones e arquivos estáticos
│   ├── components/          # Componentes reutilizáveis globais
│   ├── config/              # Configurações da aplicação
│   ├── constants/           # Constantes e enums
│   ├── hooks/               # Hooks customizados
│   ├── screens/             # Telas da aplicação
│   │   ├── EditProfile/
│   │   ├── Finance/
│   │   ├── Home/
│   │   ├── Profile/
│   │   ├── RegisterDriver/
│   │   ├── RegisterVehicle/
│   │   └── SignIn/
│   ├── services/            # Comunicação com API e serviços
│   ├── types/               # Tipagens TypeScript
│   └── utils/               # Funções utilitárias
├── app.json
├── package.json
├── tsconfig.json
└── CONTRIBUTING.md
```

---

## 🤝 Contribuindo

Este projeto é desenvolvido em equipe no âmbito do curso de ADS no [IFSul — Campus Sapucaia do Sul](https://www.sapucaia.ifsul.edu.br/). Consulte o [Guia de Contribuição](./CONTRIBUTING.md) para entender o fluxo de branches, padrão de commits e organização de componentes antes de abrir um PR.

---

## 👤 Autor

**Ariel Campos**
[![LinkedIn](https://img.shields.io/badge/LinkedIn-campos--ariel-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/campos-ariel/)
[![GitHub](https://img.shields.io/badge/GitHub-arielcBR-black?style=flat&logo=github)](https://github.com/arielcBR)
