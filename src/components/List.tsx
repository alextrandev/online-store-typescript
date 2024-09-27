import { useAppSelector } from "../hooks/hooks"
import Product from './Product';


export default function List() {
  const products = useAppSelector((state) => state.products.products);
  return (
    <div>
      {products.map((product) =>
        <Product {...product} />
      )
      }
    </div >
  )
}
