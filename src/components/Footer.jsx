import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#cbd3cb] text-gray-800  py-10">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-medium mb-4">About Us</h3>
          <p>
            We are a leading Technical College high-quality courses
            tailored to your needs. Our commitment is to deliver the best
            services to our customers.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">About</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Services</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">Contact Us</h3>
          <p className="mb-2">Email: info@gct.com</p>
          <p className="mb-2">Phone: +123 456 7890</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com/GCT.SITE.Karachi/" target="_blank" className="text-5xl transition-all hover:scale-125">
            <FaFacebook />
            </a>
            <a href="https://www.instagram.com/explore/locations/892538190879989/govt-college-of-technology-site-karachi/" target="_blank" className="text-5xl transition-all hover:scale-125">
            <FaInstagramSquare />
            </a>
            <a href="https://www.linkedin.com/company/gctkarachiofficial/" target="_blank"  className="text-5xl transition-all hover:scale-125">
            <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-center mt-8">
        <p>&copy; 2025 G.C.T. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
