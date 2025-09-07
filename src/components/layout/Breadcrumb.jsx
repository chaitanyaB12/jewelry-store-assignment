import React from 'react';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = ({ items }) => {
  return (
    <nav className="flex items-center space-x-1 text-sm text-gray-600 mb-6">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <span className={index === items.length - 1 ? 'text-gray-900 font-medium' : 'hover:text-primary cursor-pointer'}>
            {item}
          </span>
          {index < items.length - 1 && <ChevronRight className="h-4 w-4 text-gray-400" />}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
