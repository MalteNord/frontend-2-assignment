import React, { useEffect, useState } from "react";
import Card from "./card";
import "../index.css"
import useFetch from "../hooks/useFetch";


const FeaturedProducts = () => {

  const {data} = useFetch(`/products?filters[IsNew][$eq]=true&populate=*`)
  
    return (
        <div className="ml-12 mr-12 mb-12 border-b">
            <div className="flex justify-center space-x-10">
            {data?.map((item)=><Card item={item} key={item.id}/>)}
            </div>
        </div>
        
    )
}

export default FeaturedProducts