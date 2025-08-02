// src/components/Footer.tsx
import React from "react";
import "./Styles.css";
const Footer: React.FC = () => {
  return (
    <footer className="app-footer fixed bottom-0 left-0 w-full z-5  text-gray p-3 text-center">
      <div className="flex flex-column md:flex-row justify-content-between align-items-center gap-2 px-4">
        <span>&copy; 2025 My Retail App</span>
        <span className="text-sm">Built with PrimeReact & PrimeFlex</span>
      </div>
    </footer>
  );
};

export default Footer;
