'use client';

import { FaCat } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <header className="bg-linear-to-r from-green-500 to-green-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo e Nome */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
              <FaCat className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-xl font-bold text-white">Standing Cat</span>
          </div>

          {/* Saudação e Sair */}
          <div className="flex items-center gap-6">
            <span className="text-white font-medium">Olá, Maria!</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-semibold text-white hover:bg-green-700 rounded-lg transition-all duration-200 border border-white/30"
            >
              Sair
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
