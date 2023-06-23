import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Api = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, []);
  return (
    <div>
      
<div class="card" style={{width:"700px",height:"500px",backgroundColor:"Lightblue",margin:"100px"}}>
 
      <div className="flex flex-wrap" style={{ width: "50rem" }} key={product.id}>
        <img
          width="200px"
          height="200px"
         
          src={product.thumbnail}
          alt=""
        />
        </div>
        <div className="d-flex flex-wrap">
          <h1 className="card2-title">{product.title}</h1>
          <p className="card2-price"> ${product.price}</p>
          <p className="card2-text">{product.description}</p>
          <p className="card2-text">{product.discountPercentage} %OFF</p>
          <p className="card2-text">
            <i class="fa-solid fa-star"></i> {product.rating}
          </p>
          <div style={{ display: "flex", gap: "7px" }}>
            <button className="btn1"> BUY NOW</button>
           
          </div>
        </div>
 
 </div>     </div>
  );
};

export default Api;