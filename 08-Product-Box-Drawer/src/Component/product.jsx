import React from 'react';
import productjson from './productitem.json';
import Productlist from './productlist';
console.log('productjson', productjson);
function product() {
  return (
    <div className='container mt-5'>
        <div className='row'>
      {productjson.map((item, index) => (
        <div className='col-md-4 mt-4 mb-4' key={index}>
          <Productlist country={item.country} image={item.image} pl={item.place} number= {index+1} />
        </div>
        )
    )}
    </div>
    </div>
  );
}

export default product;
