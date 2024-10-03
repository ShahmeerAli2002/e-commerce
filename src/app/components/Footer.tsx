import React from "react";
import { FaFacebookSquare, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0a2e73] via-[#5078f0] to-[#a3caff] text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      
        <div>
          <h3 className="font-bold text-2xl mb-4 text-white">Toy World</h3>
          <p className="text-blue-100 mt-4">
            Discover the best toys and games from our store. We offer a wide range of educational and fun products to keep your children entertained and learning.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-blue-100 hover:text-white transition">Home</a></li>
            <li><a href="/Shop" className="text-blue-100 hover:text-white transition">Shop</a></li>
            <li><a href="/Blog" className="text-blue-100 hover:text-white transition">Blog</a></li>
            <li><a href="/contact" className="text-blue-100 hover:text-white transition">Contact</a></li>
            <li><a href="/Activity" className="text-blue-100 hover:text-white transition">Activity</a></li>
          </ul>
        </div>

      
        <div>
          <h3 className="font-bold text-xl mb-4 text-white">Contact Us</h3>
          <p className="text-blue-100">123 Toy Street,karachi,pakistan</p>
          <p className="text-blue-100">Phone: (0321) 6094104</p>
          <p className="text-blue-100">Email: problemssolve196@gmail.com</p>
        </div>

   
        <div>
          <h3 className="font-bold text-xl mb-4 text-white">Follow Us</h3>
          <ul className="flex space-x-4">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition">
                <FaFacebookSquare size={24} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition">
                <FaTwitter size={24} />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition">
                <FaInstagram size={24} />
              </a>
            </li>
            <li>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition">
                <FaYoutube size={24} />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition">
                <FaLinkedin size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-8 border-t border-blue-400 pt-4 text-center">
        <p className="text-blue-100">© {new Date().getFullYear()} Shahmeer Ali. All Rights Reserved.</p>
      </div>

      <div className="overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee animate-news-headline text-sm sm:text-base">
          <span className="mx-4">🚂 Choo Choo! New Train Sets Available!</span>
          <span className="mx-4">🧸 Cuddly Teddy Bears on Sale!</span>
          <span className="mx-4">🎨 Unleash Creativity with Art Supplies!</span>
          <span className="mx-4">🏎️ Race into Fun with Remote Control Cars!</span>
          <span className="mx-4">🧩 Challenge Your Mind with Puzzles!</span>
        </div>
        <div className="inline-block animate-marquee">
          <span className="mx-4">🚂 Choo Choo! New Train Sets Available!</span>
          <span className="mx-4">🧸 Cuddly Teddy Bears on Sale!</span>
          <span className="mx-4">🎨 Unleash Creativity with Art Supplies!</span>
          <span className="mx-4">🏎️ Race into Fun with Remote Control Cars!</span>
          <span className="mx-4">🧩 Challenge Your Mind with Puzzles!</span>
        </div>
        <style jsx>{`
        @keyframes news-headline {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-news-headline {
          animation: news-headline 20s linear infinite;
          white-space: nowrap;
        }
      `}</style>
      </div>
    </footer>
  );
};

export default Footer;