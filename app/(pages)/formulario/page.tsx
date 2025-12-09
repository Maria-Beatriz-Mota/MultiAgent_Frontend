'use client';

import Header from '../../components/Header';
import FormularioClinico from '../../components/FormularioClinico';
import { FaPaw } from 'react-icons/fa';

export default function FormularioPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-green-100 via-green-50 to-green-200 relative overflow-hidden">
      {/* Patinhas decorativas */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <FaPaw className="absolute top-20 left-10 w-12 h-12 text-green-700 rotate-12" />
        <FaPaw className="absolute top-40 right-20 w-10 h-10 text-green-600 -rotate-45" />
        <FaPaw className="absolute bottom-32 left-1/4 w-14 h-14 text-green-700 rotate-90" />
        <FaPaw className="absolute top-60 left-1/2 w-11 h-11 text-green-600 -rotate-12" />
        <FaPaw className="absolute bottom-20 right-1/3 w-12 h-12 text-green-700 rotate-45" />
        <FaPaw className="absolute top-1/3 right-10 w-12 h-12 text-green-600 rotate-180" />
        <FaPaw className="absolute bottom-40 left-20 w-10 h-10 text-green-700 -rotate-90" />
        <FaPaw className="absolute top-1/2 right-1/4 w-11 h-11 text-green-600" style={{ transform: 'rotate(30deg)' }} />
      </div>
      <Header />
      <div className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <FormularioClinico />
        </div>
      </div>
    </div>
  );
}