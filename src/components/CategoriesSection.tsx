import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Laptop, Headphones, Gamepad, Monitor, Watch, Tablet, Camera } from 'lucide-react';

const categories = [
  { name: 'Smartphones', icon: Smartphone, link: '/catalog?category=smartphones' },
  { name: 'Laptops', icon: Laptop, link: '/catalog?category=laptops' },
  { name: 'Smartwatches', icon: Watch, link: '/catalog?category=smartwatches' },
  { name: 'Auriculares', icon: Headphones, link: '/catalog?category=auriculares' },
  { name: 'Consolas', icon: Gamepad, link: '/catalog?category=consolas' },
  { name: 'Computadoras', icon: Monitor, link: '/catalog?category=computadoras' },
  { name: 'Tablets', icon: Tablet, link: '/catalog?category=tablets' },
  { name: 'Cámaras', icon: Camera, link: '/catalog?category=camaras' },
];

const CategoriesSection: React.FC = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl mb-6 text-primary text-center">Categorías</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.link}
              className="flex flex-col items-center group"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <category.icon className="w-6 h-6" />
              </div>
              <span className="mt-2 text-xs text-center text-text-secondary group-hover:text-primary transition-colors">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;