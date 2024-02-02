import React from "react";
import Card from "./card";
import "../index.css"

const List = () => {

    const data = [
        {
          id: 1,
          img: "https://img.freepik.com/free-photo/television-houseplants-room-scene-generative-ai_188544-12145.jpg",
          title: "20inch TV",
          isNew: true,
          oldPrice: 19,
          price: 12,
        },  
  
        {
          id: 2,
          img: "https://img.freepik.com/free-photo/television-houseplants-room-scene-generative-ai_188544-12145.jpg",
          title: "30inch TV",
          isNew: true,
          oldPrice: 20,
          price: 15,
        },
        
        {
          id: 3,
          img: "https://img.freepik.com/free-photo/television-houseplants-room-scene-generative-ai_188544-12145.jpg",
          title: "40inch TV 4K",
          isNew: true,
          oldPrice: 25,
          price: 20,
        },  
  
        {
          id: 4,
          img: "https://img.freepik.com/free-photo/television-houseplants-room-scene-generative-ai_188544-12145.jpg",
          title: "50inch TV 4K",
          isNew: true,
          oldPrice: 30,
          price: 25,
        },  
  
        {
          id: 5,
          img: "https://img.freepik.com/free-photo/television-houseplants-room-scene-generative-ai_188544-12145.jpg",
          title: "80inch TV 8K",
          isNew: true,
          oldPrice: 55,
          price: 45,
        },  
      ]
    
      return (
        <div className="flex content-between flex-wrap mx-12 p-12 gap-12 ">{data?.map(item=>(
            <Card item={item} key={item.id}/>
        ))}</div>
    )
}

export default List