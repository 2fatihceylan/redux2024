import {CartIcon} from '../icons';
import { useSelector } from 'react-redux';

import React from 'react'

function NavBar() {


   /* console.log(
        useSelector((store)=>{
            console.log(store);
        })
    )*/



    //store dosyasındaki cart adına sahip reducera ulaşır ve amount değerini alır

    const amount = useSelector((state)=>state.cart.amount);




  return (
    <nav>
        <div className='nav-center'>
            <h3>redux toolkit</h3>
            <div className='nav-container'>
                <CartIcon />
                <div className='amount-container'>
                    <p className='total-amount'>{amount}</p>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar