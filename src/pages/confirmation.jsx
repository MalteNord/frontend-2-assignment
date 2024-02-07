import React, { useContext } from "react";
import { CartContext } from "../App";
import "../index.css";

function Confirmation() {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, product) => {
    return acc + parseFloat(product.data.attributes?.Price);
  }, 0);
  return (
    <>
      <section className="h-max py-12 sm:py-16 lg:py-20 overflow-y-auto">
        <div className="font-poppins mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl">Tack för din beställning</h1>
          </div>
          <div className="mx-auto mt-8 max-w-md md:mt-12">
            <div className="rounded-3xl shadow-lg shadow-gray">
              <div className="px-4 py-6 sm:px-8 sm:py-10">
                <div className="flow-root">
                  <ul className="-my-8">
                    <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                      <div className="shrink-0 relative">
                        {cart.map((product, index) => (
                          <div key={index}>
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
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 space-y-3 border-t py-8">
                  <div className="mt-6 text-center">
                    <p className="mx-0 mt-1 mb-0 text-lg text-gray-400">
                        Bekräftelse kommer på e-post!
                    </p>
                    <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Total</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    <span className="text-xs font-normal text-gray-400">
                      SEK
                    </span>{" "}
                    {totalPrice.toFixed(2)}
                  </p>
                </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Confirmation;
