import React, { useState } from "react";
import "./product.css";
import { useNavigate } from "react-router-dom";
function Product({
  id,
  image,
  title,
  description,
  category,
  rating,
  
}) {
  const navigate = useNavigate();
  const breaf = (text) => {
    const breafText = text.slice(0, 15);
    return breafText;
  };

  const [dote, setDote] = useState(breaf(description));
  const kopBtn = () => {
    setDote(description);
  };
  const kamBtn = () => {
    setDote(breaf(description));
  };
  const goToInfo = () => {
    navigate(`/productDetail/${id}`);
    
  };
  return (
    <div className="productList">
      <img onClick={goToInfo} height={"400px"}  src={image} alt={title} />
      <h5>
        name: <p>{title}</p>
      </h5>
      <h5>
        description:
        <p>
          {dote}
          {dote.length > 16 ? (
            <span onClick={kamBtn}> / </span>
          ) : (
            <span onClick={kopBtn}>...</span>
          )}
        </p>
      </h5>
      
     
    </div>
  );
}

export default Product;
