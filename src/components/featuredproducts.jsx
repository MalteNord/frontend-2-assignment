import React, { useEffect, useState } from "react";
import Card from "./card";
import "../index.css"
import axios from "axios";
import { filterNewProducts } from "../../utils/strapi/filter";


const FeaturedProducts = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try{
          const res = await axios.get('http://localhost:1338/api/products?filters[IsNew][$eq]=true&populate=*',);
          
          setData(res.data.data)
          console.log(res)
        }catch(err){
          console.log(err)
        }
      };
      fetchData();
    },[]);

    return (
        <div className="ml-12 mr-12 mb-12">
            <div className="flex justify-center gap-12">
            {data.map(item=>(
                <Card item={item} key={item.id}/>
            ))}
            </div>
        </div>
    )
}

export default FeaturedProducts