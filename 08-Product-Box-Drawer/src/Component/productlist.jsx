import React from 'react';

const ProductCard = ({ image, country, place, number }) => {

  return (
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={country} height="200px" />
    
        <div className="card-body text-center">
          <h5 className="card-title">{number}. {country}</h5>
          <p className="card-text">{place}</p>
          <button className="btn btn-primary">Visit</button>
        </div>
    </div>
  );
};

export default ProductCard;
