import React, { useState, useEffect } from "react";
import Card from "./card";
import "../index.css"
// import { useState, useEffect } from "react";
// import axios from "axios";
import useFetch from "../hooks/useFetch";

const List = ({catId, selectedCat}) => {

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

    let stringBuilder = '/products?populate=*'

    if(selectedCat.includes("1")) stringBuilder = stringBuilder + '&[filters][Category][id][$eq]=1'
    if(selectedCat.includes("2")) stringBuilder = stringBuilder + '&[filters][Category][id][$eq]=2'
    if(selectedCat.includes("3")) stringBuilder = stringBuilder + '&[filters][Category][id][$eq]=3'

    const {data} = useFetch(stringBuilder)
   
    
      return (
        <div className="flex flex-wrap justify-center">
          {data?.map((item) => (<div className="w-1/3 p-4 border-b" key={item.id}>< Card item={item} /></div>))}
        </div>
    )
}

export default List