import { Product } from "../features/productSlice";

export const calculateTotalPrice = (products: Product[]): number => {
  const total = products.reduce(
    (acc, currProduct) => acc + currProduct.price,
    0
  );
  return parseFloat(total.toFixed(2));
}