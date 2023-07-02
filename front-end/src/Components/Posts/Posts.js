import React, { useState,useEffect } from 'react';
import Heart from '../../assets/Heart';
import './Post.css';
import { Link } from 'react-router-dom';
import axios from '../../axios'



function Posts({selectCategory}) {

  const [product,setProduct] = useState([])
  
  const tokenCookie = document.cookie;
  const tokenCookieSplit = tokenCookie.split("=");
  const token = tokenCookieSplit[1];
  console.log(token);

  useEffect(() => {
    const fetchProducts = async () =>{
      try {
        const response = await axios.get(`/product/${selectCategory}`);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    if (selectCategory) {
      fetchProducts();
    }else{
      axios.get('/product')
      .then((response) => {
        console.log(response.data)
        setProduct(response.data)
      }).catch((err) => {
        console.log(err)
      });
    }
  }, [selectCategory]);

  const handleCart = (id,user) => {

    const userId =  user && user._id;
    axios
      .post("/cart", { wishlist: id ,user: userId}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  
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
      
    </div>
  );
}

export default Posts;