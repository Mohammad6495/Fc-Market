import React from "react";

const AddProduct = (props) => {

  const addProductHandler = async () => {
    const data = {
      name: "Laptop",
      price: 500,
      count: 0,
    };
    props.add(data)
  };

  return (
    <div>
      <button classNameName="btn btn-success btn-sm" onClick={addProductHandler}>
        AddProduct
      </button>
    </div>
  );
};

export default AddProduct;
