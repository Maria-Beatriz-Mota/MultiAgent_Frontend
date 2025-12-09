'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaCat } from 'react-icons/fa';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (username === 'maria.mota' && password === '123456') {
      setError('');
      router.push('/formulario');
    } else {
      setError('Usuário ou senha inválidos!');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-green-50 via-white to-green-100">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Main content */}
      <main className="flex items-center justify-center p-4 relative z-10">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
            {/* Header */}
            <div className="text-center space-y-2">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-linear-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <FaCat className="w-12 h-12 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Standing Cat</h2>
              <p className="text-gray-500">Sistema Inteligente de Gestão Veterinária</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Usuário
                </label>
                <div className="relative w-full">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Digite seu usuário"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-3 pl-12 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 text-gray-800 placeholder-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Senha
                </label>
                <div className="relative w-full">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <input
                    type="password"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 pl-12 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 text-gray-800 placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center text-gray-600 cursor-pointer">
                  <input type="checkbox" className="mr-2 rounded" />
                  Lembrar-me
                </label>
                <a href="#" className="text-green-600 hover:text-green-700 font-medium">
                  Esqueceu a senha?
                </a>
              </div>

              {error && (
                <div className="text-red-600 text-sm text-center font-medium">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] bg-linear-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl"
              >
                Entrar
              </button>
            </form>

            {/* Footer */}
            <div className="text-center pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Não tem uma conta?{' '}
                <a href="#" className="text-green-600 hover:text-green-700 font-semibold">
                  Cadastre-se
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
