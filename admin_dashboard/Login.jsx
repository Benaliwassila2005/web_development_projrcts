import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();

 

    const handleLogin = async (e) => {
       e.preventDefault();

    const response = await fetch("http://localhost:5000/admin/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
            username,
            password,
        }),
    });

    const data = await response.json();
    
     if(data.success){
        navigate('/dashboard'); }
        
     else {
    alert(data.message);
}   
    };


    return (

        <div className="login_container">

            <form className="login_form" onSubmit={handleLogin}>

                <h2>Admin Login</h2>

                <input
                    type="text"
                    placeholder="Username"
                    onChange={(e)=>setUsername(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e)=>setPassword(e.target.value)}
                />

                <button type="submit">
                    Login
                </button>

            </form>

        </div>

    );};


export default Login;