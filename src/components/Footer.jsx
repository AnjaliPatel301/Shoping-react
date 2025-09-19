import React from 'react';

const Footer = () => {
  return (
  <footer className="bg-gradient-to-r from-blue-700 to-purple-700 text-white py-10 mt-10 shadow-lg">
  <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
    {/* Left: Logo and Brand */}
    <div className="flex items-center mb-4md:mb-0">
      <img src="https://user-images.githubusercontent.com/10260230/93533501-53aa0d80-f943-11ea-90d1-e6e70eca2e29.gif" alt="Logo" className="h-10 w-10 rounded-full mr-3 " />
      <span className="font-bold text-2xl tracking-wide">MyShop</span>
    </div>

    {/* Center: Links */}
    <div className="flex space-x-6 mb-4 md:mb-0">
      <a href="#" className="hover:text-yellow-300 transition">Home</a>
      <a href="#" className="hover:text-yellow-300 transition">Products</a>
      <a href="#" className="hover:text-yellow-300 transition">About</a>
      <a href="#" className="hover:text-yellow-300 transition">Contact</a>
    </div>

    {/* Right: Socials */}
    <div className="flex space-x-4">
      <a href="#" className="hover:text-pink-400 transition"><i className="fab fa-instagram"></i> Instagram</a>
      <a href="#" className="hover:text-blue-400 transition"><i className="fab fa-twitter"></i> Twitter</a>
      <a href="#" className="hover:text-blue-600 transition"><i className="fab fa-facebook"></i> Facebook</a>
    </div>
  </div>

  {/* Bottom Note */}
  <div className="text-center mt-6 text-sm text-gray-200">
    &copy; {new Date().getFullYear()} MyShop. All rights reserved.
  </div>
</footer>

  );
};

export default Footer;
