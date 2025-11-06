# Web Chat Application 

A modern, real-time chat application built with the **MERN** stack and powered by **Socket.io**, featuring elegant UI built with **TailwindCSS** and **Daisy UI**.

## ✨ Features
- 🔐 **Authentication & Authorization** using JWT
- 💬 **Real-time messaging** with Socket.io
- 🟢 **Online user presence** powered by Socket.io & React Context
- 🌍 **Global state management** using Zustand
- 🐞 Robust **error handling** on both client & server

## 🌟 Tech Stack
### Frontend
- React
- TailwindCSS
- Daisy UI
- Zustand
- Socket.io Client

### Backend
- Node.js
- Express.js
- MongoDB & Mongoose
- Socket.io
- JWT Authentication

## 🚀 Getting Started

### Prerequisites
- Node.js
- MongoDB

### Installation
```bash
git clone <repository-url>
cd <project-folder>

# Install dependencies for server
cd server
npm install

# Install dependencies for client
cd ../client
npm install
```

### Environment Variables
Create a `.env` file in the `server` folder and add the following:
```
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
```

## ▶️ Running the Project
### Start Backend
```bash
cd server
npm run dev
```

### Start Frontend
```bash
cd client
npm run dev
```

## 🧠 Architecture Overview
```
client/   → React, TailwindCSS, Zustand, Socket.io Client
server/   → Express, MongoDB, JWT, Socket.io Server
```

## 📌 Roadmap
- ✅ User Authentication (JWT)
- ✅ Real-time messaging
- ✅ Online presence
- ⏳ Group chats
- ⏳ File/image sharing
- ⏳ Push notifications

## 🤝 Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License
MIT License

---
Made with ❤️ using MERN + Socket.io
