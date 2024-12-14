import React from "react";

const ProductList = () => {
  const products = [
    {
      id: 1,
      title: "Bolsa De Mano Grande Para Mujer",
      price: 3848,
      originalPrice: 4089,
      discount: 5,
      image: "https://via.placeholder.com/200",
    },
    // Agrega más productos aquí
  ];

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
          <h3 className="product-title">{product.title}</h3>
          <p className="product-price">
            <span className="product-original-price">
              ${product.originalPrice}
            </span>
            <span className="current-price">${product.price}</span>
            <span className="discount">-{product.discount}%</span>
          </p>
          <button className="buy-button">Comprar</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
