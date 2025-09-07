import React from 'react';

const CustomerReviews = ({ reviews }) => {

  return (
    <div className="border-t pt-8 mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Ratings</h2>
      
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-start space-x-4">
              <img
                // src={review.avatar}
                alt={review.userName}
                className="w-12 h-12 rounded-full object-cover"
              />
              
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="font-medium text-gray-900">{review.userName}</h3>
                </div>
                
                <p className="text-gray-700 mb-3">{review.comment}</p>
                
                {review.images && review.images.length > 0 && (
                  <div className="flex space-x-2">
                    {review.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Review image ${index + 1}`}
                        className="w-16 h-16 rounded object-cover"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
