import React, { useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CartContext } from "../App";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:1338/api/products/${productId}?populate=*`);
        setProduct(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProduct();
  }, [productId]);



  if (!product) {
    return <div>Laddar...</div>;
  }

  return (
    <div className="font-poppins container mx-auto mt-8">
      <h1 className="text-3xl flex justify-center">{product.data.attributes?.Title || 'Title not available'}</h1>
      <div className="flex justify-center size-54 mt-10">
        <img src={import.meta.env.VITE_STRAPI_UPLOAD_URL + product.data.attributes?.Image?.data?.attributes?.url} alt="" />
      </div>
      <div className="">
      <h2 className="text-2xl">Lagerstatus:</h2>
      <p>{product.data.attributes?.Quantity}+</p>
      </div>

      <div className="mt-20">
        <ul className="flex justify-center space-x-10">
          <li>Översikt</li>
          <button onClick={CartContext.addProductToCart} className="hover:underline">Lägg till i varukorg</button>
        </ul>
      </div>
      <div className="flex justify-center mt-10">
        <h3>{product.data.attributes?.Description}</h3>
      </div>
    </div>
  );
};

export default ProductDetail;
