# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Backend (run from repo root)
```bash
npm run server          # Start backend with nodemon (auto-reload)
```

### Frontend (run from `frontend/`)
```bash
npm run dev             # Start Vite dev server (http://localhost:5173)
npm run build           # Production build
npm run lint            # ESLint
npm run preview         # Preview production build
```

Both servers must run concurrently for the app to function.

## Environment Variables

Create a `.env` file in the **repo root** (next to `backend/`):
```
MONGO_URI=your_mongo_connection_string
JWT_SECRET_KEY=your_secret_key
PORT=5000
```

## Architecture

**Monorepo** with two separate packages:
- `/` — Backend (Node.js/Express), `package.json` with `type: "module"` (ESM)
- `frontend/` — React/Vite SPA, its own `package.json`

### Backend (`backend/`)

```
server.js               ← Entry point; mounts routes, starts http server
socket/socket.js        ← Socket.io server; exports { app, io, server }
routes/                 ← auth.route.js, message.route.js, user.route.js
controllers/            ← Business logic per route group
models/                 ← Mongoose schemas: User, Conversation, Message
middleware/protectRoute.js  ← JWT cookie verification; attaches req.user
db/connectToDatabase.js ← Mongoose connection
```

The Express `app` is created inside `socket/socket.js` (not in `server.js`) so that Socket.io can share the same `http.Server` instance. `server.js` imports and uses this `app`.

**Auth flow:** JWT is stored in an HTTP-only cookie (`jwt`). `protectRoute` middleware reads `req.cookies.jwt` and populates `req.user`.

**Online presence:** `socket/socket.js` maintains an in-memory `userSocketMap` (`{ userId: socketId }`). On connect/disconnect it broadcasts `getOnlineUsers` with all currently connected user IDs.

### Frontend (`frontend/src/`)

```
App.jsx                 ← Route definitions; auth-guarded navigation
context/AuthContext.js           ← React context object
context/AuthContextProvider.jsx  ← Provides { authUser, setAuthUser }; persists to localStorage key "chat-user"
context/SocketContext.jsx        ← Opens socket.io connection when authUser exists; provides { socket, onlineUsers }
zustand/useConversation.js       ← Global store: { selectedConversation, messages }
hooks/                  ← One hook per server interaction (useLogin, useSignup, useLogout, useSendMessage, useGetConversations, useGetMessage, useListenMessages)
pages/                  ← Home, Login, Signup
components/             ← Sidebar, conversation list, message thread, skeletons
```

**State management split:**
- **React Context** (`AuthContextProvider`, `SocketContextProvider`) — session-wide singletons wrapping the app
- **Zustand** (`useConversation`) — currently selected conversation and its messages; shared between sidebar and message pane without prop drilling

**Real-time messages:** `useListenMessages` hook subscribes to the `newMessage` socket event and appends incoming messages to the Zustand store.

**Profile pictures:** Auto-assigned via avatar URL based on the user's `gender` field (`male`/`female`).

## API Routes

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| POST | `/api/auth/signup` | No | Register user |
| POST | `/api/auth/login` | No | Login, sets JWT cookie |
| POST | `/api/auth/logout` | No | Clears JWT cookie |
| GET | `/api/users` | Yes | Get all users except self (sidebar) |
| GET | `/api/message/:id` | Yes | Get messages with a user |
| POST | `/api/message/send/:id` | Yes | Send message to a user |
