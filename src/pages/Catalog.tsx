import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { formatPrice, calculateDiscountedPrice } from '../utils/priceUtils';
import CategoriesSection from '../components/CategoriesSection';

export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
}

export const allProducts: Product[] = [
  {
    id: 'NGLG0002-A',
    title: 'Celular LG K22 / 32 Gb Expandible / Ram 2 Gb / Grado A',
    price: 2625,
    image: 'https://example.com/images/lg-k22.jpg',
    category: 'Smartphone',
  },
  // Add more products here...
];

const Catalog: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    if (category) {
      setFilteredProducts(allProducts.filter(product => product.category.toLowerCase() === category.toLowerCase()));
    } else {
      setFilteredProducts(allProducts);
    }
  }, [location]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Catálogo de Productos</h1>
      
      <CategoriesSection />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-600 mb-2">{product.category}</p>
              <p className="text-lg font-bold text-blue-600">
                <span className="line-through text-gray-400 mr-2">${formatPrice(product.price)}</span>
                ${formatPrice(calculateDiscountedPrice(product.price))}
              </p>
            </div>
          </Link>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-600 mt-8">No hay productos disponibles en esta categoría.</p>
      )}
    </div>
  );
};

export default Catalog;