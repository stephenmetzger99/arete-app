import React, { useState } from 'react';
import Bmr from '~/bmr/bmr';
import OneRepMax from '~/onerepmax/onerepmax';
import About from '~/about/about';

const App: React.FC = () => {
  const [menuOption, setMenuOption] = useState(1);

  const handleClick = (option: number) => {
    setMenuOption(option);
  };

  return (
    <>
<div className="flex min-h-screen">
  <aside className="w-64 bg-gray-800 text-white p-4">
    <h2 className="text-xl font-bold mb-4">Arete</h2>
    <ul className="space-y-2">
      <li><a className="block hover:bg-gray-700 p-2 rounded" onClick={() => handleClick(1)}>1RM</a></li>
      <li><a className="block hover:bg-gray-700 p-2 rounded" onClick={() => handleClick(2)}>BMR</a></li>
      <li><a className="block hover:bg-gray-700 p-2 rounded" onClick={() => handleClick(3)}>About</a></li>
    </ul>
  </aside>

  <main className="flex-1 p-6 bg-gray-700">
  
    {menuOption === 1 && <OneRepMax/>}
    {menuOption === 2 && <Bmr/>  }
    {menuOption === 3 && <About/>  }

 
  </main>
</div>

    </>
 

   
  );
};

export default App;
