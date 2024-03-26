import React from 'react'
import { useDispatch } from 'react-redux'
import { closeModal } from '../redux/features/modal/modalSlice'
import { clearCart } from '../redux/features/cart/cartSlice';


function Modal() {


    const dispatch = useDispatch();



    const handleConfirm = () => {
        dispatch(clearCart());
        dispatch(closeModal());
    }

    const handleCancel = () => {
        dispatch(closeModal());
    }


  return (
    <aside className='modal-container'>
        <div className='modal'>
            <h4>Remove all items from your shopping cart?</h4>
            <div className='btn-container'>
                <button type='button' className='btn confirm-btn' onClick={handleConfirm}>Confirm</button>
                <button type='button' className='btn clear-btn' onClick={handleCancel}>
                    Cancel
                </button>
            </div>
        </div>

    </aside>
  )
}

export default Modal
