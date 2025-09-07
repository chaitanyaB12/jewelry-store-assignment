import React from 'react';

const OfferBanner = () => {
  return (
    <div className="bg-pink-bg text-center py-3 px-4 border-b">
      <p className="text-sm font-medium text-gray-800">
        <span className="text-primary font-bold">30% off</span> on all items 
        <span className="mx-2">•</span> 
        Only Limited Time Deal 
        <span className="mx-2">•</span>
        Offer pending in <span className="font-bold text-primary">05:04:25</span>
      </p>
    </div>
  );
};

export default OfferBanner;
