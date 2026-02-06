# Desafio Técnico – Backend + Mobile (React Native)

Este repositório contém a implementação completa do **backend** e do **aplicativo mobile** desenvolvidos para o desafio técnico de **Desenvolvedor(a) Sênior Mobile**.

O foco da solução está em **arquitetura**, **boas práticas**, **organização de código**, **testabilidade** e **clareza nas decisões técnicas**, conforme solicitado no desafio.

---

## Visão Geral da Solução

A solução foi construída seguindo um modelo **backend-first**, onde:

- O backend expõe uma **API REST desacoplada e bem estruturada**
- O mobile consome a API sem dependências diretas da UI
- Configurações dinâmicas são fornecidas pelo servidor
- As camadas possuem **responsabilidades claras e bem definidas**

---

## Tecnologias Utilizadas

### Backend

- Node.js
- TypeScript
- Fastify
- Zod (validação de dados)
- Jest (testes unitários)

### Mobile

- React Native
- TypeScript
- Axios
- Zustand (gerenciamento de estado)
- React Navigation

---

## Arquitetura do Backend

O backend segue uma abordagem inspirada em **Clean Architecture** e **ADR (Action–Domain–Responder)**.

### Estrutura de pastas (Backend)

```
backend/
└── src/
    ├── api/
    │   └── v1/
    │       ├── tasks/
    │       └── config/
    ├── app/
    │   └── modules/
    └── tests/
```

### Responsabilidades

- **Routes / Controllers**: camada HTTP (request/response)
- **Services**: regras de negócio
- **Repositories**: acesso a dados (em memória neste desafio)

---

## 🚀 Como rodar o Backend

```bash
cd backend
npm install
npm run dev
```

Servidor disponível em:

```
http://localhost:3000
```

---

## Arquitetura do Mobile (React Native)

O mobile foi desenvolvido em **React Native com TypeScript**, utilizando uma arquitetura inspirada em **Clean Architecture + MVVM**.

### Estrutura de pastas (Mobile)

```
mobile/
└── src/
    ├── screens/
    ├── app/
    │   ├── modules/
    │   │   ├── tasks/
    │   │   └── config/
    │   └── shared/
    └── App.tsx
```

### Fluxo de dados

```
Screen → Hook (ViewModel) → Service → API → Backend
```

---

## Como rodar o Mobile

```bash
cd mobile
npm install
npx react-native run-android
```

---
