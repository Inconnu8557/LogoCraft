"use client"
import React from "react";
import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <nav className="shadow-md bg-base-100">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <Link href="/">
          <span className="text-2xl font-bold cursor-pointer">LogoCraft</span>
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/">
              <span className="font-bold cursor-pointer hover:text-secondary">Accueil</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="font-bold cursor-pointer hover:text-secondary">À propos</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="font-bold cursor-pointer hover:text-secondary">Se connecter</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;