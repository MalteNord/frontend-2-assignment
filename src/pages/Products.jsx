import React, { useState } from "react";
import List from "../components/list";
import { useParams } from "react-router-dom";
import "../index.css";
import useFetch from "../hooks/useFetch";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [selectedCat, setSelectedCat] = useState([]);

  // const {data} = useFetch(`/products?&populate=*&[filters][Category][id][$eq]=${catId}`)
  // console.log(data)

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedCat(
      isChecked
        ? [...selectedCat, value]
        : selectedCat.filter((item) => item !== value)
    );
  };

  console.log(selectedCat);

  return (
    <div className="px-10 flex mt-12 ml-12">
      <div className="flex-1 sticky top-12 h-full">
        <div className="mb-8 ">
          <h2 className="font-bold mb-5 font-poppins">Product Categories</h2>
          <div className="mb-3">
            <input type="checkbox" id="1" value={1} onChange={handleChange} />
            <label htmlFor="1" className="font-poppins">Standard</label>
          </div>
          <div className="mb-3">
            <input type="checkbox" id="2" value={2} onChange={handleChange} />
            <label htmlFor="2" className="font-poppins">Budget</label>
          </div>
          <div className="mb-3">
            <input type="checkbox" id="3" value={3} onChange={handleChange} className=""/>
            <label htmlFor="3" className="font-poppins">Premium</label>
          </div>
        </div>
      </div>
      <div className="flex-auto ml-6">
        <List catId={catId} selectedCat={selectedCat} />
      </div>
    </div>
  );
};

export default Products;
