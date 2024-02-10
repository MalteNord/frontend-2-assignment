import React, { useContext, useRef } from "react";
import { CartContext } from "../App";
import { Link } from "react-router-dom";

function CheckoutCart() {

  const { cart, removeProductFromCart, addProductToCart } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, product) => {
    return acc + parseFloat(product.data.attributes?.Price) * product.quantity;
  }, 0);

  return (
    <section className="h-max py-12 sm:py-16 lg:py-20">
      <div className="font-poppins mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl">Varukorg</h1>
        </div>
        <div className="mx-auto mt-8 max-w-md md:mt-12">
          <div className="rounded-3xl shadow-lg shadow-gray">
            <div className="px-4 py-6 sm:px-8 sm:py-10">
              <div className="flow-root">
                <ul className="-my-8">
                  <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                    <div className="shrink-0 relative">
                      {cart.map((product, index) => {
                        console.log(product)
                        return (
                          <div key={index}>
                            <div className="flex justify-end space-x-10">
                              <div>Antal: {product.quantity}</div>
                              <button className="font-poppins bg-blue hover:bg-cyan text-white p-2 rounded-md" onClick={() => removeProductFromCart(product)}>-</button>
                              <button className="font-poppins bg-blue hover:bg-cyan text-white p-2 rounded-md" onClick={() => addProductToCart(product)}>+</button>
                            </div>
                            <img
                              className="h-28 w-34 max-w-full rounded-lg object-cover"
                              src={
                                import.meta.env.VITE_STRAPI_UPLOAD_URL +
                                product.data.attributes?.Image?.data?.attributes
                                  ?.url
                              }
                              alt=""
                            />

                            <div className="relative flex flex-1 flex-col justify-between">
                              <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                                <div className="pr-8 sm:pr-5">
                                  <p className="text-base font-semibold text-gray-900">
                                    {product.data.attributes?.Title}
                                  </p>
                                  <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
                                    {product.data.attributes?.Description}
                                  </p>
                                </div>
                                <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                                  <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                                    {product.data.attributes?.Price} SEK
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mt-6 space-y-3 border-t border-b py-8">
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Total</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    <span className="text-xs font-normal text-gray-400">
                      SEK
                    </span>{" "}
                    {totalPrice.toFixed(2)}
                  </p>
                </div>
                <div className="mt-6 text-center">
                  <Link to="/confirmation">
                    <button
                      type="button"
                      className="group inline-flex items-center justify-center rounded-md bg-orange-500 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                    >
                      Lägg beställning
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="group-hover:ml-6 ml-2 h-6 w-6 transition-all"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CheckoutCart;