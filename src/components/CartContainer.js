import React from 'react'
import CartItem from './CartItem'
import { useSelector, useDispatch } from 'react-redux'
import { openModal } from '../redux/features/modal/modalSlice';

function CartContainer() {


    //reducerdan cart sliceını çekmek
    const {cartItems, total, amount} = useSelector((store)=>store.cart)



    //reducerdan fonksiyon kullanmak için
    const dispatch = useDispatch();

    const handleClear = ()=> {
        dispatch(openModal())
    }




    if(amount <1) {
        return(
            <section className='cart'>
                <header>
                    <h2>Your Bag</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
            </section>
        )
    }


  return (
    <section className='cart'>
        <header>
            <h2>Your Bag</h2>
        </header>
        <div>
            {cartItems.map((item,index)=>(
                <CartItem {...item} key={item.id} />
            ))}
        </div>
        <footer>
            <hr/>
            <div className='cart-total'>
            <h4>
                total <span>${total.toFixed(2)}</span>
            </h4>
            </div>
            <button className='btn clear-btn' onClick={handleClear}>Clear Cart</button>
        </footer>
    </section>
  )
}

export default CartContainer