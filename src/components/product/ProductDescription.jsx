import React from 'react';

const ProductDescription = ({ product }) => {
  return (
    <div className="border-t pt-8 mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Description</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Material:</span>
            <span className="font-medium">{product.material}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Plating:</span>
            <span className="font-medium">{product.plating}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Weight:</span>
            <span className="font-medium">{product.weight}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Stone Type:</span>
            <span className="font-medium">{product.stoneType}</span>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Shipping</h3>
          <p className="text-gray-600">{product.shipping}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
