import Login from "./pages/Login";
import Signup from "./pages/signup";
import Home from "./pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContextProvider";

function App() {
  const { authUser } = useAuthContext();
  return (
    <>
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup />} />
      </Routes>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#111520",
            color: "#e6ecf5",
            border: "1px solid rgba(255,255,255,0.07)",
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.88rem",
            borderRadius: "10px",
          },
        }}
      />
    </>
  );
}

export default App;
