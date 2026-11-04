import { createContext, useContext, useEffect, useState } from "react";

export const Store = createContext({});

const StoreContext = ({ children }) => {
  const [items, setItems] = useState([]);
  const [itemsLoading, setItemsLoading] = useState(true);
  const [itemsError, setItemsError] = useState("");

  //////

  const [item, setItem] = useState(null);
  const [itemLoading, setItemLoading] = useState(true);
  const [itemError, setItemError] = useState("");

  const getData = async () => {
    setItemsLoading(true);

    try {
      const req = await fetch("https://fakestoreapi.com/products");
      const res = await req.json();
      setItemsLoading(false);
      setItems(res);
    } catch (e) {
      setItemsLoading(false);
      setItemsError(e.message);
    }
  };

  const productDetails = async (productID) => {
    setItemLoading(true);

    try {
      const req = await fetch(`https://fakestoreapi.com/products/${productID}`);
      const res = await req.json();
      setItemLoading(false);
      setItem(res);
    } catch (e) {
      setItemLoading(false);
      setItemError(e.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Store.Provider
      value={{
        items,
        itemsLoading,
        itemsError,
        item,
        itemError,
        itemLoading,
        productDetails,
      }}
    >
      {children}
    </Store.Provider>
  );
};

export default StoreContext;

export const useProducts = () => useContext(Store);
