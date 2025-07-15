import { useState } from "react";
import axios from "axios";

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin(event) {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/api/auth/login", {
                userName,
                password,
            });
            console.log(response.data);
            alert("Login Successful");
        } catch (e) {
            console.log("Login Error", e);
            alert("Invalid Credentials");
        }
        console.log("Form Submitted");
    }

    return (
        <div style={styles.container}>
            <div style={styles.formCard}>
                <h2 style={styles.title}>Login</h2>
                <form onSubmit={handleLogin} style={styles.form}>
                    <label htmlFor="userName" style={styles.label}>User Name</label>
                    <input
                        id="userName"
                        name="userName"
                        value={userName}
                        type="text"
                        onChange={(e) => setUserName(e.target.value)}
                        style={styles.input}
                    />
                    <label htmlFor="password" style={styles.label}>Password</label>
                    <input
                        id="password"
                        name="password"
                        value={password}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        style={styles.input}
                    />
                    <button type="submit" style={styles.button}>Login</button>
                </form>
            </div>
        </div>
    );
};

const styles = {
    container: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f4f8",
    },
    formCard: {
        backgroundColor: "#ffffff",
        padding: "30px 40px",
        borderRadius: "10px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        width: "300px",
    },
    title: {
        textAlign: "center",
        marginBottom: "20px",
        color: "#333",
    },
    form: {
        display: "flex",
        flexDirection: "column",
    },
    label: {
        marginBottom: "5px",
        color: "#555",
        fontWeight: "500",
    },
    input: {
        padding: "10px",
        marginBottom: "15px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        outline: "none",
        fontSize: "14px",
    },
    button: {
        padding: "10px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontWeight: "bold",
    },
};

export default Login;
