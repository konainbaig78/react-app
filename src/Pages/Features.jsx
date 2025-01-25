import React from 'react';

const Features = () => {
  return (
    <div className="container py-5 text-light">
      <h1 className="display-4 text-center">Features</h1>
      <p className="lead text-center">Discover the amazing features of our product that will transform your business.</p>
      <div className="row">
        <div className="col-md-4">
          <div className="card bg-dark text-light mb-4">
            <div className="card-body">
              <h5 className="card-title">Feature One</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non risus urna.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-dark text-light mb-4">
            <div className="card-body">
              <h5 className="card-title">Feature Two</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non risus urna.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-dark text-light mb-4">
            <div className="card-body">
              <h5 className="card-title">Feature Three</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non risus urna.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
