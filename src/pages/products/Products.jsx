import ProductCard from "../../components/product-card/ProductCard";
import { useProducts } from "../../context/Store";

const Products = () => {
  const { items, itemsLoading, itemsError } = useProducts();

  return (
    <div className="flex flex-col justify-center items-center py-[4em] space-y-8">
      <h1 className="text-3xl text-indigo-800 font-bold">ITEMS</h1>

      {itemsLoading && "loading"}

      {itemsError && "erro"}

      <div className="flex flex-wrap gap-5 items-center justify-center">
        {items.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
