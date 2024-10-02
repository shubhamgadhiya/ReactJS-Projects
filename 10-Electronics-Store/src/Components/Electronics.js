import React, {useState} from 'react';
import Item from './Item.json';
import Navbar from './Navbar';
import Card from './Card';

const Electronics = () => {
  const [displayItem, setDisplayItem] = useState(Item);

  console.log('displayItem', displayItem);

  const Category = Item.map(category => {
    return category.category;
  });

  const uniqueList = [...new Set(Category), 'All'];

  const filterItem = (category) => {
     if(category === 'All'){
       setDisplayItem(Item);
       return;
     }
      const updatedList = Item.filter((curElem) => {
        return curElem.category === category;
      });
      setDisplayItem(updatedList);

  }

  return (
    <>
      <Navbar List={uniqueList} filterItem={filterItem}/>
      <Card Item={displayItem}  displayItem={displayItem} />
    </>
  );
};

export default Electronics;
