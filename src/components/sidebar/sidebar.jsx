import React from 'react';
import { useState, useContext } from "react";
import { CategoriesContext } from "../../App";

const Sidebar = (props) => {
  const categoriesData  = useContext(CategoriesContext);
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filterBy = (e) => {
    setSelectedCategory(e.target.innerText);
    props.filterBy(e.target.dataset.id);
    setDropdownOpen(!dropdownOpen);
  }

  const toggleDropdownOpen = () => {
    setDropdownOpen(!dropdownOpen);
  }
  
  return (
    <div className='sidebar'>
      <div className={`sidebar__listItemSelector ${dropdownOpen ? 'open' : 'close'}`} onClick= {toggleDropdownOpen}>{selectedCategory}</div>
      <ul className={`sidebar__list ${dropdownOpen ? 'open' : 'close'}`}>
        {
          categoriesData.map(category => {
            return <li className='sidebar__listItem' key= {category.id} data-id={category.id}><span onClick={filterBy} data-id={category.id}>{category.name}</span></li>
          })
        }
      </ul>
    </div>
  )
}

export default Sidebar
