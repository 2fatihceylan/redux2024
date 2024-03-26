import NavBar from "./components/NavBar";
import CartContainer from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { calculateTotals, getCartItems } from "./redux/features/cart/cartSlice";
import Modal from "./components/Modal";



function App() {



  const {cartItems, isLoading} = useSelector((state)=>state.cart);
  const {isOpen} = useSelector((state)=>state.modal);

  
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(calculateTotals());
  },[cartItems]);


  useEffect(()=>{
    dispatch(getCartItems());
  },[])





  if(isLoading) {
    return(
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }


  return (
    <main>
      <NavBar/>
      <CartContainer/>
      {isOpen&&<Modal/>}
    </main>
  )
}
export default App;
