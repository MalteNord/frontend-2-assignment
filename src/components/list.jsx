import React from "react";
import Card from "./card";
import "../index.css"
import { useState, useEffect } from "react";
import axios from "axios";

const List = () => {

    // const data = [
    //     {
    //       id: 1,
    //       img: "https://img.freepik.com/free-photo/television-houseplants-room-scene-generative-ai_188544-12145.jpg",
    //       title: "20inch TV",
    //       isNew: true,
    //       oldPrice: 19,
    //       price: 12,
    //     },  
  
    //     {
    //       id: 2,
    //       img: "https://img.freepik.com/free-photo/television-houseplants-room-scene-generative-ai_188544-12145.jpg",
    //       title: "30inch TV",
    //       isNew: true,
    //       oldPrice: 20,
    //       price: 15,
    //     },
        
    //     {
    //       id: 3,
    //       img: "https://img.freepik.com/free-photo/television-houseplants-room-scene-generative-ai_188544-12145.jpg",
    //       title: "40inch TV 4K",
    //       isNew: true,
    //       oldPrice: 25,
    //       price: 20,
    //     },  
  
    //     {
    //       id: 4,
    //       img: "https://img.freepik.com/free-photo/television-houseplants-room-scene-generative-ai_188544-12145.jpg",
    //       title: "50inch TV 4K",
    //       isNew: true,
    //       oldPrice: 30,
    //       price: 25,
    //     },  
  
    //     {
    //       id: 5,
    //       img: "https://img.freepik.com/free-photo/television-houseplants-room-scene-generative-ai_188544-12145.jpg",
    //       title: "80inch TV 8K",
    //       isNew: true,
    //       oldPrice: 55,
    //       price: 45,
    //     },  
    //   ]

    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try{
          const res = await axios.get('http://localhost:1338/api/products?&populate=*',);
          
          setData(res.data.data)
          console.log(res)
        }catch(err){
          console.log(err)
        }
      };
      fetchData();
    },[]);
    
      return (
        <div className="flex flex-wrap justify-center">
          {data.map(item=>(
            <Card item={item} key={item.id}/>
        ))}</div>
    )
}

export default List