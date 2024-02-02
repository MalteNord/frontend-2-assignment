import React from "react";
import "../index.css"
import { Link } from "react-router-dom";

const Card = ({item}) => {

    
    return (
        <Link to={`/product/${item.id}`}>
        <div className="size-72">
            <div>
                <img src={import.meta.env.VITE_STRAPI_UPLOAD_URL + item.attributes.Image?.data.attributes.url} alt="" />
            </div>
            <h2 className="text-base font-thin ">{item?.attributes.Title}</h2>
            <h3>{item.attributes.Category?.data.attributes.Title} </h3>
            <div className="flex gap-3 mb-10">
                <h3 className="text-gray line-through ">{item.oldPrice || parseInt(item?.attributes.Price) + 2500} SEK</h3>
                <h3>{item?.attributes.Price} SEK</h3>
            </div>
        </div>
        </Link>
    )
}

export default Card