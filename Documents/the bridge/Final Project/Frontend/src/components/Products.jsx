import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://backend-project-break-be6y.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Productos</h2>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;