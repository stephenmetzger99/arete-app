import {useState} from 'react'
import { useNavigate } from 'react-router';



export const RegisterForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const Navigate = useNavigate();

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        const fetchRegister = async () => {
            try{
                const base = import.meta.env.VITE_API_BASE_URL;
                const response = await fetch(`${base}/api/auth/register`,
                {
                    method: "POST",
                    headers : {
                        "Content-Type" : "application/json"
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                }
                );

                if(response.ok){
                    Navigate("/dashboard");  
                }
                else if (response.status === 409){
                    setError("A user with this email already exists.");
                }
                else {
                    setError("Unexpected error. Please try again.");
                }
                
            }
            catch(err){

            }
            
        }

        if (password == confirmPassword)
            fetchRegister();
        else
            setError("Passwords must match");
    }

    return (
        <form onSubmit={handleRegister}
            className="rounded w-full max-w-lg p-6 justify-content-center bg-gray-800">
            <div className="mb-2">
                <label className="block mb-2" htmlFor="email" >Email</label>
                <input 
                    className="border border-gray-400 rounded w-full p-2" 
                    type="email" 
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="mb-2">   
                <label className="block mb-2" htmlFor="password" >Password</label>
                <input 
                className="border border-gray-400 rounded w-full p-2" 
                type="password" 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="mb-2">   
                <label className="block mb-2" htmlFor="password">Confirm Password</label>
                <input 
                className="border border-gray-400 rounded w-full p-2" 
                type="password" 
                id="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}/>
            </div>
            <p className="text-red-500 mb-2">{error}</p>

            <div className="mb-2 justify-content-center text-center">
                <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full">Register</button>
            </div>
          
        </form>
      
    )

  
}

export default RegisterForm;