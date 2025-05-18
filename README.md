# 🚀 Scalable Chat App

A full-stack, modular, and scalable chat application built with:

- ⚛️ **React (Vite)** – modern, fast frontend
- 🔁 **Redux** – state management (coming soon)
- 🧩 **Express.js** – RESTful backend
- 🔄 **Kafka** – event-driven microservice communication (planned)
- ⚡ **Socket.IO** – real-time messaging
- 📦 **Monorepo** – using NPM workspaces

---

## 📁 Folder Structure

```

scalable_chat_app/
├── client/        # Frontend (React + Vite)
├── server/        # Backend (Express + Socket.IO)
├── package.json   # Root workspace controller
└── README.md      # You're here!

````

---

## 🛠 Features

- 🔒 Modular architecture (ideal for microservices or micro-frontends)
- 💬 Real-time chat using WebSockets
- 🧠 Planned state management via Redux
- 🛰 Event streaming with Kafka (coming soon)
- 🔧 Docker-ready architecture (planned)

---

## 📦 Install Dependencies

### 🔧 Prerequisites

- Node.js >= 18.x
- npm >= 8.x
- Kafka setup (optional for now)
- MongoDB or PostgreSQL (planned)
- Redis (optional)

### 📥 Install All Packages

```bash
npm install
````

> Uses NPM Workspaces to install both `client/` and `server/` dependencies.

---

## 🚀 Running the App in Development

```bash
npm run dev
```

This will concurrently start:

* **Client**: [http://localhost:5173](http://localhost:5173)
* **Server**: [http://localhost:3000](http://localhost:3000)

---

## 📜 Available Scripts

| Script          | Description                                     |
| --------------- | ----------------------------------------------- |
| `npm install`   | Install all dependencies (client + server)      |
| `npm run dev`   | Run both client and server (via `concurrently`) |
| `npm run build` | Build frontend assets                           |
| `npm run start` | Start server in production mode                 |

---

## 🧠 Tech Stack

### Frontend (client/)

* React + Vite
* Redux (upcoming)
* Bootstrap CSS
* Socket.IO Client
* Axios

### Backend (server/)

* Express.js
* Socket.IO
* Kafka (event streaming - upcoming)
* MongoDB (planned)
* dotenv
* CORS, Helmet, Logger middleware
---

## 🏗️ Architecture diagram

![Chat App Architecture](./chat-architecture.png)

This chat app includes:

- 👤 Users connected to application servers  
- 🖥️ Multiple Node.js servers running Express and Socket.IO  
- 🔴 Redis Pub/Sub for scalable real-time message delivery  
- 📡 Horizontal scaling across servers  


---

## 🧱 Architecture Goals

* 📦 **Modular design** per feature (chat, auth, notifications)
* 🔄 Kafka for real-time pub/sub between services
* 🧪 Easily testable (unit + integration tests)
* 🚀 Deployable via Docker or CI/CD
* 🔌 Microservice-ready for long-term scale

---

## ✅ TODO

* [x] Set up monorepo with Vite + Express
* [x] Add chat UI with message input and auto-scroll
* [ ] Integrate Redux for global chat state
* [ ] Implement Kafka producer/consumer flows
* [ ] Add MongoDB or PostgreSQL backend
* [ ] Create user auth module (login/register)
* [ ] Dockerize frontend and backend
* [ ] Add unit tests (Jest + React Testing Library)
---

## 📚 Read More

For the full blog post on building this scalable chat app with Socket.IO, Express, and Redis Pub/Sub, check out my blog here:

👉 [Building a Scalable Chat App - My Blog on Hashnode](https://blog.kawaljain.com/building-a-scalable-chat-app)

👉 [Building a Scalable Chat App - My Blog on Medium](https://kawaljain.medium.com/building-a-scalable-chat-app-9fabdab2bd45)

---

## 🔗 Other Resources

You can also explore the live demo and code on Errasor.io here:

👉 [Errasor.io Chat App Demo & Code](https://app.eraser.io/workspace/LU14XzUDu6CVz3OMoxjG?origin=share)
---

## 🧑‍💻 Author

**Kawal Jain**
🔗 GitHub: [@kawaljain](https://github.com/kawaljain)  
🌐 Website: [https://kawaljain.com](https://kawaljain.com)  
📝 Blog: [https://blog.kawaljain.com](https://blog.kawaljain.com)
---

## 📄 License

Licensed under the **ISC License**. See [`LICENSE`](./LICENSE) for more details.
---

## 🐛 Issues

Found a bug or want to request a feature?
Open an issue here: [https://github.com/kawaljain/scalable_chat_app/issues](https://github.com/kawaljain/scalable_chat_app/issues)

