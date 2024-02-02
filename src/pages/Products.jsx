import React, { useState } from "react";
import List from "../components/list";
import { useParams } from "react-router-dom";
import "../index.css"

const Products = () => {

    const catId = parseInt(useParams().id)
    const [maxPrice,setMaxPrice] = useState(100000)
    const [sort,setSort] = useState(null)

    return (
        <div className="px-10 flex mt-12 ml-12">
            <div className="flex-1 sticky top-12 h-full">
                <div className="mb-8 ">
                    <h2 className="font-bold mb-5">Product Categories</h2>
                    <div className="mb-3">
                        <input type="checkbox" id="1" value={1}/>
                        <label htmlFor="1">Budget</label>
                    </div>
                    <div className="mb-3">
                        <input type="checkbox" id="2" value={2}/>
                        <label htmlFor="2">Standard</label>
                    </div>
                    <div className="mb-3">
                        <input type="checkbox" id="3" value={3}/>
                        <label htmlFor="3">Premium</label>
                    </div>
                </div>
                <div className="mb-8">
                    <h2>Filter By Price</h2>
                    <div className="mb-3">
                        <span>0</span>
                        <input type="range" min={0} max={100000} onChange={(e)=>setMaxPrice(e.target.value)} />
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className="mb-8">
                    <h2 className="font-bold mb-5 ">Sortera efter</h2>
                    <div className="mb-3">
                        <input type="radio" id="asc" value="asc" name="price" onChange={e=>setSort("asc")}/>
                        <label htmlFor="asc">Billigaste</label>
                    </div>
                    <div>
                        <input type="radio" id="desc" value="desc" name="price" onChange={e=>setSort("desc)")}/>
                        <label htmlFor="desc">Dyraste</label>
                    </div>
                </div>
            </div>
            <div className="flex-auto">
                <List catId={catId} maxPrice={maxPrice} sort={sort}/>
            </div>
        </div>
    )
}
 

export default Products;