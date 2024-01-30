import React from "react";

const Card = ({item}) => {
    return (
        <div>
            <div>
                <img src={item.img} alt="" />
            </div>
            <h2 className="text-base font-thin ">{item.title}</h2>
            <div className="flex gap-3">
                <h3 className="text-gray line-through ">${item.oldPrice}</h3>
                <h3>${item.price}</h3>
            </div>
        </div>
    )
}

export default Card