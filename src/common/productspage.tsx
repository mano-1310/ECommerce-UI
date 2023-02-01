import React from "react";
import products from "./products";
import { Link } from "react-router-dom";
const Productspage = () => {
  return (
    <div className="min-h-screen">
      <div>
        <h1>Products</h1>
        {products.map((product) => (
          <div key={product.id}>
            {
              <div>
                <h3>
                  <Link to={`/products/${product.id}`}>
                    {product.product_name}
                  </Link>
                </h3>
              </div>
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productspage;
