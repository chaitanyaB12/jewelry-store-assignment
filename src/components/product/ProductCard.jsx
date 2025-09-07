import React from 'react';
import { Heart, Star } from 'lucide-react';
import Badge from '../ui/Badge';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <Badge className="absolute top-2 left-2 z-10" variant="primary">
          BestSeller
        </Badge>
        <button className="absolute top-2 right-2 z-10 p-1 bg-white rounded-full hover:bg-gray-100 transition-colors">
          <Heart className="h-4 w-4 text-gray-600" />
        </button>
        
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
        
        <div className="flex items-center mb-2">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
          <span className="ml-1 text-sm text-gray-500">({product.reviewCount})</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">₹ {product.price.toLocaleString()}</span>
            <span className="text-sm text-gray-500 line-through">₹ {product.originalPrice.toLocaleString()}</span>
          </div>
        </div>
        
        <button className="w-full mt-3 bg-primary-light text-white py-2 rounded-md hover:bg-primary transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
