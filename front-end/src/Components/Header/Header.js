import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';

function Header() {

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <Link to={'/'}>
          <OlxLogo></OlxLogo>
          </Link>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"          
              name='categories'
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <Link to={'/cart'}>
          <span> WISHLIST </span>
          </Link>
          {/* <Arrow></Arrow> */}
        </div>
        <div className="loginPage">
          <Link to={'./signup'}>
          <span>Login</span>
          </Link>
          <hr />
        </div>
        
        <div className="sellMenu">
          <Link to={'./create'}>
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;