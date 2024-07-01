import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Connect with Us</h2>
            <div className="flex items-center space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61552216812052&mibextid=ZbWKwL" className="text-white hover:text-gray-400 transition duration-300">
                <FaFacebook size={45} />
              </a>
              <a href="#" className="text-white hover:text-gray-400 transition duration-300">
                <FaTwitter size={45} />
              </a>
              <a href="https://www.instagram.com/poshinda.co?igsh=MTZlYmF6OG16MnY0MQ==" className="text-white hover:text-gray-400 transition duration-300">
                <FaInstagram size={45} />
              </a>
              <a href="#" className="text-white hover:text-gray-400 transition duration-300">
                <FaLinkedin size={45} />
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-2">Walani, Pauni, Bhandara, Maharashtra, 441910.</p>
            <p className="mb-2">Email: info.poshinda@gmail.com</p>
            <p className="mb-2">Phone: +91 8080864740</p>
          </div>
        </div>
        <hr className="border-gray-700 my-8" />
        <div className="text-center">
          <p>&copy; 2024 Poshinda.co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
