'use client';

import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#1e293b] text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">El Sazón Mexicano</h1>
      <ul className="flex gap-6 text-sm">
        <li>
          <Link href="/" className="hover:underline">Inicio</Link>
        </li>
        <li>
          <Link href="/Servicios" className="hover:underline">Servicios</Link>
        </li>
        <li>
          <Link href="/Contacto" className="hover:underline">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
