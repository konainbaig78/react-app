import React from 'react';

const Hero = () => {
  return (
    <section className="bg-dark text-light py-5">
      <div className="container text-center">
        <h1 className="display-4 font-weight-bold mb-4">
          Welcome to Preline Agency
        </h1>
        <p className="lead mb-5">
          Transforming ideas into reality with creativity, design, and technology.
        </p>
        <a href="#services" className="btn btn-primary btn-lg">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
