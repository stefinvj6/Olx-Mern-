import React, { useEffect, useState } from 'react'
import './Cart.css'
import axios from '../../axios';
import Heart from '../../assets/Heart';



function Cart() {

  if(!document.cookie){
    window.location.href='/signup'
    // return
  }
  const tokenCookie=document.cookie
  const tokenCookieSplit = tokenCookie.split("=")
  const token =tokenCookieSplit[1]
  console.log(token)
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {

    axios.get("cart" ,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    .then((response) => {
      console.log(response.data)
      setWishlist(response.data)
    }).catch((err) => {
      console.log(err)
    });
  }, []);

  const handleCartDelete = (id) =>{
    setWishlist(wishlist.filter((obj)=>obj._id !== id))
    axios.delete(`cart/${id}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log(response)
    }).catch((err) => {
      console.log(err)
    });
  }
  return (
    <div className='cartParentDiv'>    
      <div className='cart-head'>
        
        <div className="cart-header">
          <h3 className="title">Your Carted Items</h3>
        </div>
    {
    wishlist.length >0?
    (
        <div className="image-grid">
          {wishlist.map((obj)=>
          <>

            <div className="image-card" key={obj._id}>
            <div onClick={()=>handleCartDelete(obj._id)} className="favorite-cart">
              <Heart></Heart>
            </div>
              <img className='img' src={obj.wishlist.image} alt="" />
              <div className="image-details">
              <h3>{obj.wishlist.title}</h3>
              <p>{obj.wishlist.price}</p>
              </div>
            </div>
            </>
          )}
        </div>
):
<p className='no-images'>No Product Found</p>
}
      </div>
    </div>
  )
}

export default Cart