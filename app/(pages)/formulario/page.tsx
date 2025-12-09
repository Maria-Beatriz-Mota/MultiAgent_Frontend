'use client';

import Header from '../../components/Header';
import FormularioClinico from '../../components/FormularioClinico';

export default function FormularioPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-green-100 via-green-50 to-green-200 relative overflow-hidden">
      <Header />
      <div className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <FormularioClinico />
        </div>
      </div>
    </div>
  );
}