import React from 'react';

const About = () => {
  return (
    <div className="container py-5 text-light">
      <h1 className="display-4 text-center">About Us</h1>
      <p className="lead text-center">
        We are a passionate team dedicated to providing the best service. Our mission is to solve real-world problems through innovative solutions.
      </p>
      <div className="row">
        <div className="col-md-6">
          <h3>Our Mission</h3>
          <p>We strive to bring our clients the best products and services, ensuring their success and satisfaction every step of the way.</p>
        </div>
        <div className="col-md-6">
          <h3>Our Vision</h3>
          <p>We envision a future where technology and creativity collide to create impactful solutions for businesses worldwide.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
