import React, { useState } from "react";
import "../index.css";
import { AiFillCloseCircle} from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

function ShoppingCart({
    visibility,
    products,
    onProductRemove,
    onClose,
    onQuantityChange,
}) {
    return (
<>
<div style={{
            display: visibility
            ? "block" 
            : "none",
            }}>
                <div>
                    <h2>Kundvagn</h2>
                    <button onClick={onClose}>
                    <AiFillCloseCircle size={30}/>
                    </button>
                </div>
                <div>
                    {products.length === 0 && (<span>
                    Din varukorg är tom  
                    </span>
                    )}
                    {products.map(product => (
                        <div key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <div>
                                <h3>{product.name}</h3>
                                <span>
                                    {product.price * product.count}SEK
                                </span>
                            </div>
                            <select value={product.count} onChange={(event) => 
                            {onQuantityChange(product.id, event.target.value);
                            }}>
                                {[
                                    ...Array(10).keys(),
                                ].map(number => {const num = number + 1;
                                return <option value={num} key={num}>{ num }
                                </option>
                                })
                                }
                            </select>
                            <button onClick={() => onProductRemove(product)
                            }>
                                <RiDeleteBin6Line size={20} />
                            </button>
                        </div>
                    ))}
                    {products.length > 0 && <button>Fortsätt till betalning</button>}
                </div>
            </div>
</>
    )
} 

export default ShoppingCart;