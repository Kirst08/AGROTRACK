import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./layout";
import RegisterForm from "./register";
import LoginForm from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/Register" element={<RegisterForm />} />
        <Route path="login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}
export default App;
