import React from "react";  
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai'


export const ListingIndexItem = ({ listing}) => {
  return (

  <Link to={`/listings/${listing.id}`}>
  <div className="listing-item">
      <div>
        <img src={listing.photoUrl[0]} alt="" />
      </div>
    <div className="listing-info">
      <span>
        <p>{listing.era_theme} theme experience</p>
        <h3>{listing.title}</h3>
      </span>
      <p className="listing-descrip">{listing.description.split(" ").slice(0, 30).join(" ")+"..."}</p>
      <p className="listing-item-address-">{listing.address}</p>
      <p>
        Beds {listing.num_bedrms}{" "},
        <span> Baths {listing.num_baths}</span>
      </p>
      <div className="rating-price-cont">
          <p className="special item-price">${listing.price}/night</p>
          {listing.reviews.length ? (
            <div className="special" id="rating">
              <AiFillStar className="star"/> 
              <h4>{getAvgRating(listing.reviews)} ({listing.reviews.length} {listing.reviews.length > 1 ? "reviews" : "review"})</h4>
            </div>
          ) : (

            null
          )}
      </div>
    </div>
  </div>
   </Link>

  )
}


export const getAvgRating = (reviews) => {

  if (reviews.length){
    
    return (
  
      (reviews.map((review) => review.rating)
             .reduce((acc, curVal) => acc + curVal) 
             / reviews.length) * 0.1 * 10).toFixed(1) 
      
  }
  }


