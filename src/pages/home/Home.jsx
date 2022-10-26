import React, { useState, useEffect } from "react";
import "./home.css";
import Product from "../../components/product/Product";
import Button from "../../components/button/Button";

function Home({data ,error,setChosenCategories,chosenCategories}) {
  
  const categoryMap = data?.map((item) => item.category);
  const allCategores = ["all", ...new Set(categoryMap)];

  return (
    <div className="home">
      <div className="category">
        {allCategores.map((item, index) => (
          <Button
          data={data}
            setChosenCategories={setChosenCategories}
            category={item}
            key={index}
          />
        ))}
      </div>
      <div className="products_list">
        {chosenCategories.length > 0 ? (
          chosenCategories.map((product) => <Product key={product.id} {...product} setChosenCategories={setChosenCategories} />)
        ) : (
          <h2>{error ? error : "Loading..."}</h2>
        )}
      </div>
    </div>
  );
}

export default Home;
