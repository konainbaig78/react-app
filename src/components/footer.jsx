import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
        <div>
          <a href="#privacy" className="text-light mx-2">
            Privacy Policy
          </a>
          |
          <a href="#terms" className="text-light mx-2">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
