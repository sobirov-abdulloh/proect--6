import React from "react";
import { useParams } from "react-router-dom";
import "./ProduktDetails.css"
import Product from "../../components/product/Product";
function PruductDetails({
  data,
  error,

}) {
  const { id } = useParams();
  const chosenProduct = data.find((item) => item.id === Number(id));
  const filter = data.filter(
    (item) => item.category === chosenProduct?.category && item.id !==chosenProduct.id
  );

  return (
    <div className="pruductDetails">
      <div>
        <img
          width={"400px"}
          height={"450px"}
          src={chosenProduct?.image}
          alt={chosenProduct?.title}
        />
        <p>{chosenProduct?.title}</p>
        <p>{chosenProduct?.price}</p>
        <p>{chosenProduct?.category}</p>
      </div>
      <div className="products_list">
        {filter.length > 0 ? (
          filter.map((product) => <Product key={product.id} {...product} />)
        ) : (
          <h2>{error ? error : "Loading..."}</h2>
        )}
      </div>
    </div>
  );
}

export default PruductDetails;
