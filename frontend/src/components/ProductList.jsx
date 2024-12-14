import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/productos/')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {product.title}
          </h3>
          <div className="space-y-1">
            <p className="text-gray-500 line-through text-sm">
              ${product.originalPrice}
            </p>
            <p className="text-2xl font-bold text-gray-900">
              ${product.price}
            </p>
            <span className="inline-block bg-red-100 text-red-600 text-sm font-semibold px-2 py-1 rounded">
              -{product.discount}% OFF
            </span>
          </div>
          <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 font-semibold">
            Comprar
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;