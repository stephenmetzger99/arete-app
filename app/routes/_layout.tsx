import { Outlet } from "react-router";
import BmrForm from '~/bmrform/bmrform';
import OneRepMax from '~/onerepmaxform/onerepmaxform';
import About from '~/routes/about';
import Login from '~/loginform/loginform';


export default function Layout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Arete</h2>
        <nav className="space-y-2">
          <a href="/onerepmax" className="block hover:underline">1RM</a>
          <a href="/bmr" className="block hover:underline">BMR</a>
          <a href="/about" className="block hover:underline">About</a>
          <a href="/login" className="block hover:underline">Login</a>
          <a href="/dashboard" className="block hover:underline">Dashboard</a>


        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-700 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}