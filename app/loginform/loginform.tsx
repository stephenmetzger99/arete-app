// import React from 'react'

import { useState } from "react"
import { useNavigate } from "react-router";


export default function LoginForm() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try{
            const baseUrl = import.meta.env.VITE_API_BASE_URL;

            const response = await fetch(`${baseUrl}/api/auth/login`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    email,
                    password
                })
            });
        
        if (response.ok) {
            navigate("/dashboard");
        } else if (response.status === 401) {
            setError("Invalid email or password.");
        } else {
            setError("Unexpected error. Please try again.");
        }
          

          
        }
        catch (err){
            console.error("Error logging in:", err);
        }
    }
    


    return (
        <form onSubmit={handleLogin}
            className="rounded w-full max-w-lg p-6 justify-content-center bg-gray-800"
            >
            <div className="mb-2">
                <label className="block mb-2" htmlFor="email" >Email</label>
                <input 
                    className="arete-input" 
                    type="email" 
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="mb-2">   
                <label className="block mb-2" htmlFor="password" >Password</label>
                <input className="arete-input"
                 type="password" 
                 id="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <p className="text-red-500 mb-2">{error}</p>
            <div className="mb-2 justify-content-center text-center">
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded w-full">Sign In</button>
            </div>
              <div className="mb-2">
                <a className="text-blue-600 currsor-pointer hover:underline" 
                onClick={() => navigate("/register")}>
                    Don't have an account? Register here.
                </a>
            </div>
        </form>
      
    )

   
}