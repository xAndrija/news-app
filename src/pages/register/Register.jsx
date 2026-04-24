import { useNavigate } from "react-router-dom";
import "./Register.css";
import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { registerUser } from "../../firebase/auth";
import { logoutUser } from "../../firebase/auth";

function Register() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !surname || !email || !password) {
            alert("You need to fill in all the fields!");
            return;
        }

        try {
            await registerUser(email, password, name, surname);
            await logoutUser();
            alert("User created successfully!");

            navigate("/login");
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div className="main">
            <Header />

            <div className="register-page">
                <form className="register-form" onSubmit={handleSubmit}>
                    <h1>Register</h1>

                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Surname"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit">Register</button>

                    <p style={{ fontSize: "20px" }}>
                        Already have an account?{" "}
                        <span
                            style={{ cursor: "pointer", color: "blue", fontSize: "20px" }}
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </span>
                    </p>
                </form>
            </div>

            <Footer />
        </div>
    );
}

export default Register;