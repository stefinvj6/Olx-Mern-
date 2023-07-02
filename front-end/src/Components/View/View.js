import React ,{useState,useEffect} from 'react';
import './View.css';
import axios from '../../axios';

function View() {

  const [product, setProduct] = useState(null);
  const url = new URL(document.URL);
  const searchParams = url.pathname;

  useEffect(() => {
    axios
      .get('product/' + searchParams)
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {product ? (
    <div className="viewParentDiv">

      <div className="imageShowDiv">
        <img
          src={product.image}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>{product.price}</p>
          <span>{product.title}</span>
          <p>{product.categories}</p>
          <span>Tue May 04 2021</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>demo</p>
          <p>123456789</p>
        </div>
      </div>
      
    </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
export default View;
