import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Heart from '../../assets/Heart';
import './Post.css';
import { Link } from 'react-router-dom';

function Posts({selectCategory}) {
  const [product,setProduct] = useState([])
  useEffect(() => {
    const fetchProducts = async () =>{
      try {
        const response = await axios.get(`http://localhost:7777/product/${selectCategory}`);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    if (selectCategory) {
      fetchProducts();
    }else{
      axios.get('http://localhost:7777/product')
      .then((response) => {
        console.log(response.data)
        setProduct(response.data)
      }).catch((err) => {
        console.log(err)
      });
    }
  }, [selectCategory]);


  const handleCart = (id)=>{
    axios.post("http://localhost:7777/cart",{wishlist:id})
    .then((response) => {
      console.log(response.data)
    }).catch((err) => {
      console.log(err)
    });
  }

  
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">   
        {product.map((obj)=>

            <div className="card" key={obj._id}>
              <div onClick={() => handleCart(obj._id)} className="favorite">
                <Heart></Heart>
              </div>
              <Link to={`product/${obj._id}`}> 
              <div className="image"> 
               
                <img src={obj.image} alt="" />  
              </div>
              <div className="content">
                <p className="rate">{obj.price}</p>
                {/* <p className="rate">&#x20B9; 250000</p> */}
                <span className="kilometer">{obj.categories} </span>
                <p className="name"> {obj.title} </p>
              </div>
              <div className="date">
                <span>Tue May 04 2021</span>
              </div>
              </Link>
            </div>
         
        )}
        </div>
      </div>

      {/* <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
        {product.map((obj)=>
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={obj.image} alt="" />
            </div>
            <div className="content">
              <p className="rate">{obj.price}</p>
              <span className="kilometer">{obj.categories.title}</span>
              <p className="name">{obj.title}</p>
            </div>
            <div className="date">
              <span>Tue May 04 2021</span>
            </div>
          </div>
        )}
        </div>    
      </div> */}
    </div>
  );
}

export default Posts;
