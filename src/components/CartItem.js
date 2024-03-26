import React from 'react'
import {ChevronDown, ChevronUp} from '../icons';
import { useDispatch } from 'react-redux';
import { removeItem, increase, decrease, calculateTotals } from '../redux/features/cart/cartSlice';



function CartItem({id, img, title, price, amount}) {


    const dispatch = useDispatch();





    const handleRemove =()=>{
        dispatch(removeItem(id));
    }


    const handleIncrease = () => {
        dispatch(increase({id}))
    }

    const handleDecrease = () => {
        if(amount === 1){
            dispatch(removeItem(id));
            return;
        }
        dispatch(decrease({id}))
    }



  return (
    <article className='cart-item'>
        <img src={img} alt={title} />
        <div>
            <h4>
                {title}
            </h4>
            <h4 className='item-price'>
                ${price}
            </h4>
            <button className='remove-btn' onClick={handleRemove}>Remove</button>
        </div>
        <div>
            <button className='amount-btn' onClick={handleIncrease}><ChevronUp/></button>
            <p className='amount'>{amount}</p>
            <button className='amount-btn' onClick={handleDecrease}><ChevronDown/></button>
        </div>
    </article>
  )
}

export default CartItem