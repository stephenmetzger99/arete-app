import React, { useState, useEffect } from 'react';


const Dashboard = () => {

  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
  const fetchUserInfo = async () => {
    if (email !== null) return;

    try{
      const base = import.meta.env.VITE_API_BASE_URL;

      const response = await fetch(`${base}/api/auth/me`,
        {
          method: "GET",
          headers: {"Content-Type" : "application/json"},
          credentials: "include"
        }
      );

      if (response.ok){
        const data = await response.json()
        setEmail(data.email);
      }

    }
    catch (err){

    }
  }

  fetchUserInfo();
  },[email]);

  return (
    <>
    <div className="mb-2">
      <p className="text-3xl">Dashboard</p>
      <p>Hello, {email}!</p>
    </div>
 
    <div className="mb-2">
      <p className="text-3xl">Workout Sessions</p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded shadow">New Workout Session</button>

    </div>
    </>
 

   
  );
};

export default Dashboard;
