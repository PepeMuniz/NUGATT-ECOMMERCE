import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const phoneModels = {
  Apple: {
    'iPhone 13 Pro Max': ['128GB', '256GB', '512GB', '1TB'],
    'iPhone 13 Pro': ['128GB', '256GB', '512GB', '1TB'],
    'iPhone 13': ['128GB', '256GB', '512GB'],
    'iPhone 13 Mini': ['128GB', '256GB', '512GB'],
    'iPhone 12 Pro Max': ['128GB', '256GB', '512GB'],
    'iPhone 12 Pro': ['128GB', '256GB', '512GB'],
    'iPhone 12': ['64GB', '128GB', '256GB'],
    'iPhone 12 Mini': ['64GB', '128GB', '256GB'],
    'iPhone 11 Pro Max': ['64GB', '256GB', '512GB'],
    'iPhone 11 Pro': ['64GB', '256GB', '512GB'],
    'iPhone 11': ['64GB', '128GB', '256GB'],
    'iPhone XS Max': ['64GB', '256GB', '512GB'],
    'iPhone XS': ['64GB', '256GB', '512GB'],
    'iPhone XR': ['64GB', '128GB', '256GB'],
    'iPhone X': ['64GB', '256GB'],
    'iPhone 8 Plus': ['64GB', '256GB'],
    'iPhone 8': ['64GB', '256GB'],
  },
  Samsung: {
    'Galaxy S21 Ultra': ['128GB', '256GB', '512GB'],
    'Galaxy S21+': ['128GB', '256GB'],
    'Galaxy S21': ['128GB', '256GB'],
    'Galaxy S20 Ultra': ['128GB', '256GB', '512GB'],
    'Galaxy S20+': ['128GB', '256GB', '512GB'],
    'Galaxy S20': ['128GB'],
    'Galaxy Note 20 Ultra': ['256GB', '512GB'],
    'Galaxy Note 20': ['256GB'],
    'Galaxy A52': ['128GB', '256GB'],
    'Galaxy A72': ['128GB', '256GB'],
    'Galaxy Z Fold3': ['256GB', '512GB'],
    'Galaxy Z Flip3': ['128GB', '256GB'],
  }
};

const Quoter: React.FC = () => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [storage, setStorage] = useState('');
  const [color, setColor] = useState('');
  const [condition, setCondition] = useState('');
  const [quote, setQuote] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para calcular la cotización
    setQuote(Math.floor(Math.random() * 500) + 100); // Cotización aleatoria para demostración
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary">Convierte tu antiguo smartphone en dinero</h1>
      <div className="max-w-md mx-auto bg-surface p-8 rounded-lg shadow-sm">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="brand" className="block text-sm font-medium text-text-secondary mb-1">Marca</label>
            <div className="relative">
              <select
                id="brand"
                value={brand}
                onChange={(e) => {
                  setBrand(e.target.value);
                  setModel('');
                  setStorage('');
                }}
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
                required
              >
                <option value="">Selecciona una marca</option>
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="other">Otro</option>
              </select>
              <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="model" className="block text-sm font-medium text-text-secondary mb-1">Modelo</label>
            {brand && brand !== 'other' ? (
              <div className="relative">
                <select
                  id="model"
                  value={model}
                  onChange={(e) => {
                    setModel(e.target.value);
                    setStorage('');
                  }}
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
                  required
                >
                  <option value="">Selecciona un modelo</option>
                  {Object.keys(phoneModels[brand as keyof typeof phoneModels]).map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            ) : (
              <input
                type="text"
                id="customModel"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="block w-full pl-3 pr-3 py-2 text-base border border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
                required
                placeholder={brand === 'other' ? "Ingresa el modelo" : "Primero selecciona una marca"}
                disabled={!brand}
              />
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="storage" className="block text-sm font-medium text-text-secondary mb-1">Almacenamiento</label>
            {brand && brand !== 'other' && model ? (
              <div className="relative">
                <select
                  id="storage"
                  value={storage}
                  onChange={(e) => setStorage(e.target.value)}
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
                  required
                >
                  <option value="">Selecciona el almacenamiento</option>
                  {phoneModels[brand as keyof typeof phoneModels][model]?.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            ) : (
              <input
                type="text"
                id="customStorage"
                value={storage}
                onChange={(e) => setStorage(e.target.value)}
                className="block w-full pl-3 pr-3 py-2 text-base border border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
                required
                placeholder={brand === 'other' ? "Ingresa el almacenamiento" : "Primero selecciona marca y modelo"}
                disabled={!brand || (brand !== 'other' && !model)}
              />
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="color" className="block text-sm font-medium text-text-secondary mb-1">Color</label>
            <input
              type="text"
              id="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="block w-full pl-3 pr-3 py-2 text-base border border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="condition" className="block text-sm font-medium text-text-secondary mb-1">Estado</label>
            <div className="relative">
              <select
                id="condition"
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
                required
              >
                <option value="">Selecciona el estado</option>
                <option value="excelente">Excelente</option>
                <option value="bueno">Bueno</option>
                <option value="regular">Regular</option>
                <option value="malo">Malo</option>
              </select>
              <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <button type="submit" className="w-full bg-primary text-white font-bold py-2 px-4 rounded-md hover:bg-primary-light transition-colors">
            Obtener cotización
          </button>
        </form>

        {quote !== null && (
          <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
            <p className="font-semibold">Cotización estimada:</p>
            <p className="text-2xl font-bold">${quote}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quoter;