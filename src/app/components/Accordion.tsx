'use client';

import { useState } from 'react';

const Accordion = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto border border-red-300 rounded-lg overflow-hidden">
      <button
        className="w-full text-left p-4 bg-red-100 hover:bg-red-200 font-semibold text-red-800 transition"
        onClick={() => setOpen(!open)}
      >
        {open ? '🔽 Cerrar menú' : '▶️ Ver menú completo'}
      </button>
      {open && (
        <div className="p-4 bg-white text-gray-700">
          <ul className="list-disc pl-5 space-y-1">
            <li>Tacos al pastor</li>
            <li>Enchiladas verdes</li>
            <li>Pozole rojo</li>
            <li>Chiles en nogada</li>
            <li>Agua de horchata y jamaica</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Accordion;
