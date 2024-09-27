import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks"
import Product from './Product';
import { fetchProducts } from "../features/productSlice";

export default function List() {
  const products = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      {products.map((product) =>
        <Product {...product} />
      )
      }
    </div >
  )
}
