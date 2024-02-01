import React from "react";
import List from "../components/list";
import { useParams } from "react-router-dom";

const Products = () => {

    const param = useParams()

    console.log(param)
    
    return (
        <div>
            <div>
                <div>
                    <h2>Product Categories</h2>
                    <div>
                        <input type="checkbox" id="1" value={1}/>
                        <label htmlFor="1">Budget</label>
                    </div>
                    <div>
                        <input type="checkbox" id="2" value={2}/>
                        <label htmlFor="2">Standard</label>
                    </div>
                    <div>
                        <input type="checkbox" id="3" value={3}/>
                        <label htmlFor="3">Premium</label>
                    </div>
                </div>
                <div>
                    <h2>Filter By Price</h2>
                    <div>
                        <span>0</span>
                        <input type="range" min={0} max={100000} />
                        <span>100000</span>
                    </div>
                </div>
                <div>
                    <h2>Sort By</h2>
                    <div>
                        <input type="radio" id="asc" value="asc" name="price"/>
                        <label htmlFor="asc">Pris (Billigaste först)</label>
                    </div>
                    <div>
                        <input type="radio" id="desc" value="desc" name="price"/>
                        <label htmlFor="desc">Pris (Dyraste först)</label>
                    </div>
                </div>
            </div>
            <div>
                <List/>
            </div>
        </div>
    )
}
 

export default Products;