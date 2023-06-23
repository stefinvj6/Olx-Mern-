import React, { Fragment, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import axios from 'axios';

const Create = () => {
  const [title, setTitle] = useState('');
  const [description,setDescription] = useState('');
  const [price,setPrice] = useState('');
  const [image,setImage] = useState('');
  const [location,setLocation] = useState('');
  const [categories,setCategories] = useState('');

  const handlesubmit = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:7777/product',{title,description,price,image,location,categories})
    .then((response) => {
      console.log(response.data)
    }).catch((err) => {
      console.log(err)
    });
  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form onSubmit={handlesubmit}>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="title"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              // defaultValue="John"
            />
            <br />

            <label htmlFor="fname">Description</label>
            <br />
            <input className="input" type="text" id="fname" name="description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
            <br />


            <label htmlFor="fname">Price</label>
            <br /> 
            <input className="input" type="number" id="fname" name="price" value={price} onChange={(e)=>setPrice(e.target.value)} />
            <br />

            <label htmlFor="fname">Image</label>
            <br />
            <input className="input" type="text" id="fname" name="image" value={image} onChange={(e)=>setImage(e.target.value)} />
            <br />



            <label htmlFor="fname">Location</label>
            <br />
            <input className="input" type="text" id="fname" name="location" value={location} onChange={(e)=>setLocation(e.target.value)}/>
            <br />

            
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="categories"
              value={categories} onChange={(e)=>setCategories(e.target.value)}
              // defaultValue="John"
            />
            <br />

            <button  className="uploadBtn">upload and Submit</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
