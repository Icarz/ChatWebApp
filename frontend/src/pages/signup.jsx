import { Link } from "react-router-dom";
import Gender from "../components/Gender";
import { useState } from "react";
import useSignup from "../hooks/useSignup";

const Signup = () => {
  const [input, setInput] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmedPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInput({ ...input, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(input);
  };

  return (
    <div className="auth-layout">
      <div className="auth-orb auth-orb-1" />
      <div className="auth-orb auth-orb-2" />
      <div className="auth-orb auth-orb-3" />

      <div
        className="auth-card animate-fade-up"
        style={{ maxWidth: "460px", padding: "36px 44px" }}
      >
        {/* Header */}
        <div style={{ marginBottom: "28px" }}>
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
              fontSize: "1.9rem",
              color: "var(--text-primary)",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Create account
          </h1>
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.88rem",
              color: "var(--text-secondary)",
              marginTop: "8px",
            }}
          >
            Join and start chatting
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 16px" }}>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="input-custom"
                value={input.fullName}
                onChange={(e) => setInput({ ...input, fullName: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Username</label>
              <input
                type="text"
                placeholder="john_doe"
                className="input-custom"
                value={input.userName}
                onChange={(e) => setInput({ ...input, userName: e.target.value })}
              />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 16px" }}>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                placeholder="••••••••••"
                className="input-custom"
                value={input.password}
                onChange={(e) => setInput({ ...input, password: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Confirm</label>
              <input
                type="password"
                placeholder="••••••••••"
                className="input-custom"
                value={input.confirmedPassword}
                onChange={(e) =>
                  setInput({ ...input, confirmedPassword: e.target.value })
                }
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Gender</label>
            <Gender
              onCheckboxChange={handleCheckboxChange}
              selectedGender={input.gender}
            />
          </div>

          <div style={{ marginTop: "8px" }}>
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
                "Create Account"
              )}
            </button>
          </div>

          <p
            style={{
              textAlign: "center",
              marginTop: "20px",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.84rem",
              color: "var(--text-secondary)",
            }}
          >
            Already have an account?{" "}
            <Link
              to="/login"
              style={{
                color: "var(--accent)",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
