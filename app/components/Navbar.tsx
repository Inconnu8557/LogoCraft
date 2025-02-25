"use client"
import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav className="shadow-md bg-base-100">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <a href="/" className="text-2xl font-bold cursor-pointer">eLogo</a>
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="font-bold cursor-pointer hover:text-secondary">Accueil</a>
          </li>
          <li>
            <a href="/about" className="font-bold cursor-pointer hover:text-secondary">À propos</a>
          </li>
          <li>
            <a href="/contact" className="font-bold cursor-pointer hover:text-secondary">Se connecter</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;