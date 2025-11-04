import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/loginUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });
      const text = await response.text();
      alert(text);
    } catch (error) {
      alert("❌ Unable to reach backend!");
      console.error(error);
    }
  };

  const handleGoogle = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome</h2>
        <p style={styles.subtitle}>Login details</p>

        <form style={styles.form} onSubmit={handleSubmit}>
          <input name="email" type="email" placeholder="Email" style={styles.input} required onChange={handleChange} />
          <input name="password" type="password" placeholder="Password" style={styles.input} required onChange={handleChange} />
          <button type="submit" style={styles.button}>Login</button>
        </form>

        <div style={styles.divider}>or</div>

        <button style={styles.googleButton} onClick={handleGoogle}>
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google"
            style={styles.googleIcon}
          />
          <span>Continue with Google</span>
        </button>

        <p style={styles.signupText}>
          Don’t have an account?{" "}
          <Link to="/register" style={styles.signupLink}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Segoe UI, sans-serif",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "15px",
    padding: "40px",
    width: "360px",
    boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  title: { fontSize: "24px", marginBottom: "10px", color: "#333" },
  subtitle: { color: "#666", marginBottom: "25px" },
  form: { display: "flex", flexDirection: "column" },
  input: {
    padding: "12px",
    margin: "8px 0",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  button: {
    backgroundColor: "#667eea",
    color: "#fff",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "10px",
    fontSize: "16px",
  },
  divider: { margin: "20px 0", fontSize: "14px", color: "#999" },
  googleButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    width: "100%",
    color: "#000",
    fontWeight: "500",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  googleIcon: { width: "20px", height: "20px", marginRight: "8px" },
  signupText: { marginTop: "20px", fontSize: "14px", color: "#555" },
  signupLink: { color: "#667eea", fontWeight: "600", textDecoration: "none" },
};
