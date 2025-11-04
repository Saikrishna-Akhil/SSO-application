import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/addUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const text = await response.text();
      alert(text);
      if (response.ok) navigate("/login");
    } catch (error) {
      alert("❌ Error connecting to backend!");
      console.error(error);
    }
  };

  const handleGoogle = () => {
    alert("Continue with Google clicked!");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome</h2>
        <p style={styles.subtitle}>Create details</p>

        <form style={styles.form} onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Full Name" style={styles.input} required onChange={handleChange} />
          <input name="email" type="email" placeholder="Email" style={styles.input} required onChange={handleChange} />
          <input name="password" type="password" placeholder="Password" style={styles.input} required onChange={handleChange} />
          <button type="submit" style={styles.button}>Sign Up</button>
        </form>

        <div style={styles.divider}>or</div>

        <button style={styles.googleButton} onClick={handleGoogle}>
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google"
            style={styles.googleIcon}
          />
          <span style={{ color: "#000" }}>Continue with Google</span>
        </button>

        <p style={styles.loginText}>
          Already have an account?{" "}
          <Link to="/login" style={styles.loginLink}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg, #764ba2, #667eea)",
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
    backgroundColor: "#764ba2",
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
  loginText: { marginTop: "20px", fontSize: "14px", color: "#555" },
  loginLink: { color: "#764ba2", fontWeight: "600", textDecoration: "none" },
};
