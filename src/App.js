import { useEffect, useReducer } from "react";
import "./App.css";
import { cartReducer } from "./reducers/cartReducer";
import  ProductsData  from './components/Products'
import  Cart  from './components/Cart'

export default function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: []
  });

  const Products = [
    { id: 1, name: "Product-1", price: 100 },
    { id: 2, name: "Product-2", price: 200 },
    { id: 3, name: "Product-3", price: 300 }
  ];

  console.log(state);


  useEffect(()=>{
    dispatch({
      type: "ADD_PRODUCTS",
      payload: Products
    })
  },[]);

  return (
    <div style={{display:'flex'}}>
     <ProductsData state={state} dispatch={dispatch} />
     <Cart state={state} dispatch={dispatch} />
    </div>
  );
}