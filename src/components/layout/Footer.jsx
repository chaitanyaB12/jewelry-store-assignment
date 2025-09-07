import React from 'react';
import { Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-16 py-12">
      <hr className='border-red-700'/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-red-400 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary">Our Blogs</a></li>
              <li><a href="#" className="hover:text-primary">Store Locator</a></li>
              <li><a href="#" className="hover:text-primary">Jewellery Care</a></li>
              <li><a href="#" className="hover:text-primary">Join Us</a></li>
            </ul>
          </div>

          {/* Details */}
          <div>
            <h3 className="font-semibold text-red-400 mb-4">Details</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary">International Shipping</a></li>
              <li><a href="#" className="hover:text-primary">FAQs and Support</a></li>
              <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
            </ul>
          </div>

          {/* More Details */}
          <div>
            <h3 className="font-semibold text-red-400 mb-4">Details</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary">International Shipping</a></li>
              <li><a href="#" className="hover:text-primary">FAQs and Support</a></li>
              <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold text-red-400 mb-4">Contact Us</h3>
            <div className="text-sm text-gray-600 space-y-2">
              <p>Elegant Jewels</p>
              <p>Survey No 10,abcdefg,fgfg<br />Sector 14,abcdefg fghjik ghi </p>
              <p>For any suggestions, queries or<br />complaints, please contact us:</p>
              <p>abcdefg@gmail.com</p>
              <p>+91 1111 123 4567</p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-3 mt-4">
              <Linkedin className="h-5 w-5 text-gray-600 hover:text-primary cursor-pointer" />
              <Facebook className="h-5 w-5 text-gray-600 hover:text-primary cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-600 hover:text-primary cursor-pointer" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
          © 2025 Elegant Jewels. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;