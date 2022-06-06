import React from 'react'
import { useContext } from "react";
import { CategoriesContext } from "../../App";
import Banner from './banner';

const Banners = () => {

  const categoriesData  = useContext(CategoriesContext);

  return (
    <div className="container">
      {
        categoriesData.map((category, index) => {
          return <Banner key= {category.id} alignment= {index % 2 === 0 ? 'reverse' : ''} category= {category}/>
        })
      }
    </div>
  )
}

export default Banners;