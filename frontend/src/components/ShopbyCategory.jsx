import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import Title from './Title';

const categories = [
  {
    id: 1,
    name: 'Smart Watches',
    image: assets.watchcate,
    path: '/shop/smart-watches'
  },
  {
    id: 2,
    name: 'Earbuds',
    image: assets.earbudscat,
    path: '/shop/earbuds'
  },
  {
    id: 3,
    name: 'Headphones',
    image: assets.headphonecat,
    path: '/shop/headphones'
  },
  {
    id: 4,
    name: 'Drones',
    image: assets.dronecat,
    path: '/shop/drones'
  },
  {
    id: 5,
    name: 'Accessories',
    image: assets.accesscate,
    path: '/shop/accessories'
  }
];

export default function ShopCategories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const getVisibleItems = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 4;
    }
    return 4;
  };

  useEffect(() => {
    // Fade in animation on mount
    setIsVisible(true);

    // Auto-sliding functionality
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === categories.length - getVisibleItems() ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className={`mt-8 sm:mt-12 md:mt-16 transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-12 text-center text-3xl">
          <Title text1={'SHOP BY'} text2={'CATEGORY'}/>
          <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            Discover our curated selection of premium products across various categories.
            Find the perfect tech accessories and fashion items for your lifestyle.
          </p>
        </div>

        <div className="bg-gray-50 rounded-3xl py-12 px-8">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${(currentIndex * 100) / getVisibleItems()}%)`
                }}
              >
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-3"
                  >
                    <div className="group h-full">
                      <Link
                        to={category.path}
                        className="block h-full"
                      >
                        <div className="bg-white rounded-2xl p-4 shadow-sm transition-all duration-300 hover:shadow-lg h-full">
                          <div className="relative aspect-square overflow-hidden rounded-xl mb-4">
                            <img
                              src={category.image}
                              alt={category.name}
                              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                          </div>
                          <div className="text-center">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              {category.name}
                            </h3>
                            <button className="inline-flex items-center justify-center gap-2 text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                              Shop Now
                              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </button>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}