import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = ({ 
  children, 
  title, 
  showArrows = true, 
  itemsPerView = 4, 
  gap = 16,
  className = '' 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollRef = useRef(null);
  
  const childrenArray = React.Children.toArray(children);
  const totalItems = childrenArray.length;
  
  useEffect(() => {
    const updateScrollButtons = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
      }
    };
    
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', updateScrollButtons);
      updateScrollButtons(); // Initial check
      
      return () => {
        scrollContainer.removeEventListener('scroll', updateScrollButtons);
      };
    }
  }, []);
  
  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.clientWidth / itemsPerView;
      const scrollPosition = index * (itemWidth + gap);
      scrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };
  
  const scrollLeft = () => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  
  const scrollRight = () => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <div className={`relative ${className}`}>
      {/* Header with Title and Arrows */}
      {(title || showArrows) && (
        <div className="flex items-center justify-between mb-6">
          {title && (
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          )}
          
          {showArrows && (
            <div className="flex space-x-2">
              <button
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                className={`p-2 border rounded-full transition-all ${
                  canScrollLeft 
                    ? 'border-gray-300 hover:bg-gray-100 text-gray-700' 
                    : 'border-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={scrollRight}
                disabled={!canScrollRight}
                className={`p-2 border rounded-full transition-all ${
                  canScrollRight 
                    ? 'border-gray-300 hover:bg-gray-100 text-gray-700' 
                    : 'border-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      )}
      
      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-hide pb-4"
        style={{ 
          gap: `${gap}px`,
          scrollSnapType: 'x mandatory'
        }}
      >
        {childrenArray.map((child, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ 
              scrollSnapAlign: 'start',
              width: `calc((100% - ${gap * (itemsPerView - 1)}px) / ${itemsPerView})`
            }}
          >
            {child}
          </div>
        ))}
      </div>
      
      {/* Dots Indicator (Optional) */}
      {totalItems > itemsPerView && (
        <div className="flex justify-center space-x-2 mt-4">
          {Array.from({ length: Math.ceil(totalItems / itemsPerView) }, (_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i * itemsPerView)}
              className={`w-2 h-2 rounded-full transition-colors ${
                Math.floor(currentIndex / itemsPerView) === i 
                  ? 'bg-primary' 
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
