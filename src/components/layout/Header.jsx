import React, { useState } from 'react';
import { Menu, Search, Heart, ShoppingCart } from 'lucide-react';
import Sidebar from './Sidebar'; // Adjust path if needed

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Offer Banner */}
      <div className="bg-red-300 text-center py-2 text-sm font-medium">
        30% off on all items Only Limited Time Deal Offer pending in 05:04:25
      </div>

      {/* Main Header */}
      <header className="bg-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 rounded-md"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6 text-gray-700" />
            </button>

            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">LOGO</h1>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Collections</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Categories</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Hot Picks</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Gifts</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Shop All</a>
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center space-x-2">
              <button className="bg-red-400 text-white px-4 py-1 rounded text-md hover:bg-red-300 transition-colors">
                LOGIN
              </button>
              <button className="border border-red-400 text-red-400 px-4 py-1 rounded text-md hover:bg-primary hover:bg-red-200 transition-colors">
                REGISTER
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar Drawer */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default Header;
