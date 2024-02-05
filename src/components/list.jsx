import React from "react";
import Card from "./card";
import "../index.css"
// import { useState, useEffect } from "react";
// import axios from "axios";
import useFetch from "../hooks/useFetch";

const List = ({catId, selectedCat, maxPrice}) => {

  // const [data, setData] = useState([]);

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try{
    //       const res = await axios.get('http://localhost:1338/api/products?&populate=*',);
          
    //       setData(res.data.data)
    //       console.log(res)
    //     }catch(err){
    //       console.log(err)
    //     }
    //   };
    //   fetchData();
    // },[]);

    const {data} = useFetch(
      `/products?&populate=*&${selectedCat.map((item) => `&[filters][Category][id][$eq]=${item}`)}&[filters][price][$lte]=${maxPrice}`
    );
    
      return (
        <div className="flex flex-wrap justify-center">
          {data?.map((item) => (<div className="w-1/3 p-2">< Card item={item} key={item.id} /></div>))}
        </div>
    )
}

export default List