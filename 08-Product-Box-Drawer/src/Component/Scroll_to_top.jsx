import React, { useEffect, useState } from 'react';

function Scroll_to_top() {
  const [visible, setVisible] = useState(false);

  const scrolltotop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setVisible(false)
  };

  const toggleVisibility = () => {
    if (window.pageYOffset >100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []); 

  return (
    visible && (
      <button className='btn btn-primary scroll-to-top' onClick={scrolltotop}>
        &#8679;
      </button>
    )
  );
}

export default Scroll_to_top;
