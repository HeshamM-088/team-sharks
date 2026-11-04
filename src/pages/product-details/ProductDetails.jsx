import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useProducts } from "../../context/Store";

const ProductDetails = () => {
  const { productID } = useParams();
  const { productDetails, item, itemError, itemLoading } = useProducts();

  useEffect(() => {
    productDetails(productID);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center py-[4em] space-y-8">
      <h1>ProductDetails</h1>

      {itemLoading && "loading"}

      {itemError && "erro"}

      {item?.id}
      {item?.title}

      <Link to="/products">back</Link>
    </div>
  );
};

export default ProductDetails;
