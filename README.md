# Desafio Técnico – Backend + Mobile

Este repositório contém a implementação do **backend** e do **mobile** desenvolvidos para o desafio técnico de Desenvolvedor(a) Sênior Mobile.

O foco da solução está em **arquitetura**, **boas práticas**, **organização de código**, **testabilidade** e **clareza nas decisões técnicas**, não em design visual ou quantidade de funcionalidades.

---

## 🧠 Visão Geral da Solução

A solução foi pensada em um modelo **backend-first**, onde:

- O backend expõe uma **API REST bem estruturada**
- O mobile consome essa API de forma **desacoplada**
- Configurações dinâmicas são fornecidas pelo servidor
- As camadas possuem **responsabilidades bem definidas**

---

## 📦 Tecnologias Utilizadas

### Backend

- Node.js
- TypeScript
- Fastify
- Zod (validação)
- Jest (testes unitários)

### Mobile

- React Native
- TypeScript
- Axios
- Zustand
- React Navigation

---

## 🏗️ Arquitetura do Backend

Arquitetura inspirada em **Clean Architecture** e **ADR (Action–Domain–Responder)**.

### Estrutura

```
src/
├── api/
├── app/
│   ├── modules/
│   └── core/
└── tests/
```

Separação clara entre:

- HTTP
- Regras de negócio
- Acesso a dados

---

## 🚀 Como rodar o Backend

```bash
cd backend
npm install
npm run dev
```

Servidor:

```
http://localhost:3000
```

---

## 📱 Arquitetura do Mobile

Arquitetura baseada em **Clean + MVVM**.

Fluxo:

```
Screen → Hook (ViewModel) → Service → API → Backend
```

---

## 🔮 Evoluções Futuras

- Autenticação JWT
- Testes de integração
- Escalabilidade e cache
- Versionamento de API
