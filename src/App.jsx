import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Loginform";
import RegisterForm from "./RegisterForm";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="*" element={<LoginForm />} /> {/* default route */}
      </Routes>
    </BrowserRouter>
  );
}


const styles = {
  nav: {
    padding: "15px",
    textAlign: "center",
    backgroundColor: "#667eea",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px",
  },
};
