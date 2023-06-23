import React, { useState } from 'react';
import './Banner.css';
import Arrow from '../../assets/Arrow'
import Posts from '../Posts/Posts';

function Banner() {
  const [selectCategory,SetselectCategory] = useState([])
  const handleQuickOptionClick = (category) =>{
    SetselectCategory(category)
  }

  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <span>ALL CATEGORIES</span>
            <Arrow></Arrow> 
          </div>
          <div className="otherQuickOptions">
            <span onClick={()=>handleQuickOptionClick('Car')}>Car</span>
            <span onClick={()=>handleQuickOptionClick('Bike')}>Bike</span>
            <span onClick={()=>handleQuickOptionClick('Mobile')}>Mobile</span>
            <span onClick={()=>handleQuickOptionClick('Laptop')}>Laptop</span>
            <span onClick={()=>handleQuickOptionClick('For Sale:Houses & Apartments')}>For Sale:Houses & Apart...</span>
            <span onClick={()=>handleQuickOptionClick('Scooter')}>Scoot...</span>
            <span onClick={()=>handleQuickOptionClick('Commercial & Other Ve...')}>Commercial & Other Ve...</span>
            <span onClick={()=>handleQuickOptionClick('For Rent: House & Apart...')}>For Rent: House & Apart...</span>
          </div>
        </div>
        <div className="banner">
          <img
            src="../../../Images/banner copy.png"
            alt=""
          />
        </div>
      </div>
      <Posts selectCategory={selectCategory} />
    </div>
  );
}

export default Banner;