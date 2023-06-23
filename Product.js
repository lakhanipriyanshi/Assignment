import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((response) => {
        setProducts(response.data.products);
        console.log(response.data);
      })
  }, []);

  return (
     <div>
    <h1 className='title' style={{alignItems:"center",margin:"30px",display:"flex"}}>Our Products</h1>
    <div className='d-flex  flex-wrap' style={{margin:"30px"}}>
  {products.map((product) => {
    const productDesc =
      product.description.length > 50
        ? `${product.description.substring(0, 50)}...`
        : product.description;

    return (
    
<div class="card" style={{width:"18rem",backgroundColor:"Lightblue",margin:"35px"}}>
  <img class="card-img-top"   src={product.thumbnail} alt="Card image cap" style={{width:"253px",height:"180px"}}/>
  <div class="card-body">
    <h5 class="card-title">{product.title.substring(0, 20)}</h5>
    <p class="card-text">{productDesc}</p>
    <Link to={`/Api/${product.id}`} style={{backgroundColor:"darkslateblue",color:"Lightblue"}} className="btn">
            BUY NOW
          </Link>
  </div>
</div>
    );
  })}
</div>
</div>
  );
};

export default Product;