
import React, { useEffect, useState } from 'react';

function Card({ Item,displayItem }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; 

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Item.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(Item.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
useEffect(() => {
    setCurrentPage(1);
}, [displayItem]);
  return (
    <>
      <div className='product-card'>
        {currentItems.map((data, index) => {
          const { name, image, price, description } = data;

          return (
            <div key={index}>
              <div className='product-item'>
                <h2>{index + 1 + (currentPage - 1) * itemsPerPage}. {name}</h2> 
                <div className='product-image'>
                  <img className='img' src={image} alt={name} />
                </div>
                <div className='product-price-description'>

                <p><b>Price:</b> {price}</p>
                <p className='product-description'><b>Description:</b> {description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {totalPages > 1 && (
      <div className='pagination'>
       
        
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div> )}
    </>
  );
}

export default Card;
