import { useEffect, useState } from "react";
import '../App.css';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://backend-project-break-be6y.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data.data); // mi api es un objetoclear
        
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="products-container">
      <h2>Productos:</h2>
      {products.map((product) => (
        <div className="products-card" key={product._id}>
          <p>{product.nombre}</p>
          <p>{product.precio} €</p>
          <img src={product.imagen} alt={product.nombre} width="150"/>
        </div>
      ))}
    </div>
  );
}

export default Products;