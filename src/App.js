
import React, { useState } from 'react';
import menu from './data'
import Categories from './Categories';
import Menu from './Menu';
import "./App.css"
function App() {
  const [menuItems, setMemuItems] = useState(menu);
  
  const filterItems = (category) => {
    if(category ==='all'){
       const returny= setMemuItems(menu)
      return returny
    }
    const newItems = menu.filter((item) => item.category === category);
    setMemuItems(newItems);
  };
  return (
    <div className="App">
    <section className='menu'>
      <h2> our menu</h2>
      <Categories filterItems={filterItems}/>
      <Menu items= {menuItems}/>
    </section>
    </div>
  );
}

export default App; 
