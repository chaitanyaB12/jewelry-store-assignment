import React, { useState } from 'react';
import { Star, Truck, Shield, Award, Gem } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

const ProductInfo = ({ product }) => {
  const [pincode, setPincode] = useState('');
  
  return (
    <div className="space-y-6">
      {/* Product Title & Rating */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
        <p className="text-gray-600 mt-1 text-lg">{product.subtitle}</p>
        
        <div className="flex items-center mt-3">
          <div className="flex items-center bg-green-100 px-2 py-1 rounded">
            <Star className="h-4 w-4 text-green-600 fill-current" />
            <span className="ml-1 text-sm font-medium text-green-600">{product.rating}</span>
          </div>
          <span className="ml-2 text-sm text-gray-600">({product.reviewCount})</span>
        </div>
      </div>
      
      {/* Price */}
      <div className="flex items-center space-x-3">
        <span className="text-3xl font-bold text-gray-900">₹ {product.price.toLocaleString()}</span>
        <span className="text-xl text-gray-500 line-through">₹ {product.originalPrice.toLocaleString()}</span>
        <Badge variant="success">({product.discount}% off)</Badge>
      </div>
      
      {/* Features */}
      <div className="grid grid-cols-2 gap-4">
        {product.features.map((feature, index) => {
          const icons = [
            <Truck className="h-4 w-4 text-gray-600" />, 
            <Shield className="h-4 w-4 text-gray-600" />, 
            <Award className="h-4 w-4 text-gray-600" />, 
            <Gem className="h-4 w-4 text-gray-600" />
          ];
          return (
            <div key={index} className="flex items-center space-x-2 text-sm text-gray-700">
              <div className="bg-gray-100 p-1 rounded">
                {icons[index] || <Star className="h-4 w-4 text-gray-600" />}
              </div>
              <span>{feature}</span>
            </div>
          );
        })}
      </div>
      
      {/* Actions */}
      <div className="flex flex-row-reverse justify-center items-center gap-2">
        <Button className="w-full" size="lg">BUY NOW</Button>
        <Button variant="outline" className="w-full" size="lg">ADD TO CART</Button>
      </div>
      
      {/* Delivery Info */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-3">Estimated Delivery Time</h3>
        <div className="flex space-x-2">
          <input 
            type="text" 
            placeholder="Enter Pincode" 
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
          />
          <button className="text-red-400 font-medium px-4 py-2 border border-primary rounded-md hover:bg-red-400 hover:text-white transition-colors">
            Check
          </button>
        </div>
      </div>
      
      {/* Offers */}
      <div className="p-4  rounded-lg">
        <span>Offers <span className='text-sm text-gray-500'>
          2 Available     
        </span>
         </span>      
        <button className='text-sm float-end font-medium hover:text-red-600  text-red-400'>Check</button>
      </div>
       <p className="p-4 text-sm text-black-500">Coupon can be applied at checkout</p>
    </div>
  );
};

export default ProductInfo;
