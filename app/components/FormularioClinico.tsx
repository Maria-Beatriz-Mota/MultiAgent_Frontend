'use client';

import { useState } from 'react';

interface FormularioClinicoProps {
  onSubmit?: (data: any) => void;
}

export default function FormularioClinico({ onSubmit }: FormularioClinicoProps) {
  const [formData, setFormData] = useState({
    nome: '',
    sdma: '',
    creatinina: '',
    idade: '',
    sexo: '',
    peso: '',
    pressaoArterial: '',
    upc: '',
    sintomas: '',
    comorbidades: '',
    pergunta: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados clínicos:', formData);
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8">
      {/* Header do Formulário */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Formulário Clínico</h1>
        <p className="text-gray-600">Forneça os dados clínicos do paciente</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nome */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Nome do Paciente
          </label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Digite o nome do animal"
            className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 text-gray-800 placeholder-gray-400"
            required
          />
        </div>

        {/* Grid de dados clínicos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* SDMA */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              SDMA (µg/dL)
            </label>
            <input
              type="text"
              name="sdma"
              value={formData.sdma}
              onChange={handleChange}
              placeholder="Ex: 14"
              className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 text-gray-800 placeholder-gray-400"
            />
          </div>

          {/* Creatinina */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Creatinina (mg/dL)
            </label>
            <input
              type="text"
              name="creatinina"
              value={formData.creatinina}
              onChange={handleChange}
              placeholder="Ex: 1.2"
              className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 text-gray-800 placeholder-gray-400"
            />
          </div>

          {/* Idade */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Idade (anos)
            </label>
            <input
              type="text"
              name="idade"
              value={formData.idade}
              onChange={handleChange}
              placeholder="Ex: 5"
              className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 text-gray-800 placeholder-gray-400"
            />
          </div>

          {/* Sexo */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Sexo
            </label>
            <select
              name="sexo"
              value={formData.sexo}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 text-gray-800"
            >
              <option value="">Selecione</option>
              <option value="Macho">Macho</option>
              <option value="Fêmea">Fêmea</option>
            </select>
          </div>

          {/* Peso */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Peso (kg)
            </label>
            <input
              type="text"
              name="peso"
              value={formData.peso}
              onChange={handleChange}
              placeholder="Ex: 25.5"
              className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 text-gray-800 placeholder-gray-400"
            />
          </div>

          {/* Pressão Arterial */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Pressão Arterial (mmHg)
            </label>
            <input
              type="text"
              name="pressaoArterial"
              value={formData.pressaoArterial}
              onChange={handleChange}
              placeholder="Ex: 120/80"
              className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 text-gray-800 placeholder-gray-400"
            />
          </div>

          {/* UPC */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              UPC
            </label>
            <input
              type="text"
              name="upc"
              value={formData.upc}
              onChange={handleChange}
              placeholder="Ex: 0.5"
              className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 text-gray-800 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Sintomas */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Sintomas (separados por vírgula)
          </label>
          <input
            type="text"
            name="sintomas"
            value={formData.sintomas}
            onChange={handleChange}
            placeholder="Ex: letargia, vômito, perda de apetite"
            className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 text-gray-800 placeholder-gray-400"
          />
        </div>

        {/* Comorbidades */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Comorbidades (separadas por vírgula)
          </label>
          <input
            type="text"
            name="comorbidades"
            value={formData.comorbidades}
            onChange={handleChange}
            placeholder="Ex: diabetes, hipertensão"
            className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 text-gray-800 placeholder-gray-400"
          />
        </div>

        {/* Pergunta */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Pergunta
          </label>
          <textarea
            name="pergunta"
            value={formData.pergunta}
            onChange={handleChange}
            placeholder="Digite sua pergunta ou observações sobre o caso..."
            rows={4}
            className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 text-gray-800 placeholder-gray-400 resize-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] bg-linear-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl"
          >
            Enviar Dados
          </button>
          <button
            type="button"
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-lg font-semibold transition-all duration-200 bg-gray-200 hover:bg-gray-300 text-gray-800"
          >
            Voltar
          </button>
        </div>
      </form>
    </div>
  );
}
