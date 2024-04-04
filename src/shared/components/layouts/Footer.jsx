// components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#ffce9f] text-amber-950 py-4">
      <div className="container mx-auto flex flex-col items-center">
        {/* <div className="mb-4">
          <h3 className="text-2xl font-bold">Connect with Us</h3>
          <div className="flex items-center mt-2 space-x-4">
            <a href="#" className="text-white hover:text-black">
              <span className="material-icons">facebook</span>
            </a>
            <a href="#" className="text-white hover:text-black">
              <span className="material-icons">twitter</span>
            </a>
            <a href="#" className="text-white hover:text-black">
              <span className="material-icons">instagram</span>
            </a>
          </div>
        </div> */}
        <div>
          <p>Copyright&copy;Soft2dt 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
