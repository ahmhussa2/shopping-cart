import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Banner = (props) => {
  const { alignment, category } = props;
  return (
    <div key={category.id} className={`banner ${alignment === 'reverse' ? 'reverse' : ''}`}>
      <div className="banner__imgWrapper">
        <LazyLoadImage src={`http://localhost:3000${category.imageUrl}`} alt={category.name} />
      </div>
      <div className="banner__descriptionWrapper">
        <h2 className="banner__heading">{category.name}</h2>
        <p className="banner__description">{category.description}</p>
        <button className="banner__exploreButton">{`Explore ${category.name}`}</button>
      </div>
    </div>
  )
}

export default Banner;