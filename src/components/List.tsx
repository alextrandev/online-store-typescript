import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks"
import Product from './Product';
import { fetchProducts } from "../features/productSlice";
import { calculateTotalPrice } from "../utils/utils";

export default function List() {
  const products = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h2>Total: {calculateTotalPrice(products)}</h2>
      {products.map((product) =>
        <Product {...product} />
      )
      }
    </div >
  )
}
