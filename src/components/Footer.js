import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/category" className="hover:text-blue-400 transition-colors">
                  Danh mục
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-blue-400 transition-colors">
                  Giỏ hàng
                </Link>
              </li>
              <li>
                <Link to="/account" className="hover:text-blue-400 transition-colors">
                  Tài khoản
                </Link>
              </li>
            </ul>
          </div>
         
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Liên hệ</h3>
            <ul className="space-y-2">
              <li>Email: support@stylezone.com</li>
              <li>Điện thoại: +84 877452334</li>
              <li>Địa chỉ: Hà Nội</li>
            </ul>
          </div>
      
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Theo dõi chúng tôi</h3>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-6 w-6 hover:text-blue-400 transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6 hover:text-blue-400 transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-6 w-6 hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} StyleZone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;