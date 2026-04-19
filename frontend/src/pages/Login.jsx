import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(userName, password);
  };

  return (
    <div className="auth-layout">
      <div className="auth-orb auth-orb-1" />
      <div className="auth-orb auth-orb-2" />
      <div className="auth-orb auth-orb-3" />

      <div className="auth-card animate-fade-up">
        {/* Header */}
        <div style={{ marginBottom: "32px" }}>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.68rem",
              color: "var(--accent)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            Webb Chat
          </p>
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "2rem",
              color: "var(--text-primary)",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Welcome back
          </h1>
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.88rem",
              color: "var(--text-secondary)",
              marginTop: "8px",
            }}
          >
            Sign in to your account
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Username</label>
            <input
              type="text"
              placeholder="your_username"
              className="input-custom"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              placeholder="••••••••••"
              className="input-custom"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div style={{ marginTop: "28px" }}>
            <button className="btn-accent" type="submit" disabled={loading}>
              {loading ? (
                <span
                  className="animate-spin-btn"
                  style={{
                    width: "16px",
                    height: "16px",
                    border: "2.5px solid #040810",
                    borderTopColor: "transparent",
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                />
              ) : (
                "Sign In"
              )}
            </button>
          </div>

          <p
            style={{
              textAlign: "center",
              marginTop: "22px",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.84rem",
              color: "var(--text-secondary)",
            }}
          >
            No account?{" "}
            <Link
              to="/signup"
              style={{
                color: "var(--accent)",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Create one
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
