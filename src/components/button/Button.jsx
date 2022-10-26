import React from "react";

function Button({ category, setChosenCategories, data }) {
  const categoryHandler = () => {
    // alert(category);
    const filtered = data.filter((item) => item.category === category);
    setChosenCategories(filtered);
    if (category === "all") {
      setChosenCategories(data);
      return;
    }
  };
  return <button onClick={categoryHandler}>{category}</button>;
}

export default Button;
