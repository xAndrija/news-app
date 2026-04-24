import "./Login.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { loginUser } from "../../firebase/auth";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        if (!email || !password) {
            alert("Error! Fields can't be empty.");
            return;
        }

        try {
            await loginUser(email, password);

            alert("Login successful!");
            navigate("/");
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div className="main">
            <Header />

            <div className="login-page">
                <form className="login-form" onSubmit={handleLogin}>
                    <h1>Login</h1>

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        autoComplete="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit">Login</button>

                    <p style={{ fontSize: "20px" }}>
                        Don't have an account?{" "}
                        <span
                            style={{ cursor: "pointer", color: "blue", fontSize: "20px" }}
                            onClick={() => navigate("/register")}
                        >
                            Register
                        </span>
                    </p>
                </form>
            </div>

            <Footer />
        </div>
    );
}

export default Login