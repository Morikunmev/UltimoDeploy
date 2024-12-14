import React from "react";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Productos
        </h1>
        <ProductList />
      </div>
    </div>
  );
};

export default App;
