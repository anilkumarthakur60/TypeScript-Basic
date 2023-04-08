import React from 'react'
import CartLineItem from './CartLineItem'
import { useState } from 'react';
import useCart from '../hooks/useCart';

export default function Cart() {


    const [confirm, setConfirm] = useState<boolean>(false)
    const { dispatch, REDUCER_ACTIONS, cart, totalItems, totalPrice } = useCart()


    const onSubmit = () => {
        dispatch({
            type: REDUCER_ACTIONS.submit
        })
        setConfirm(true)
    }



    const pageContent = confirm ? <h2>
        Thank you for your purchase!
    </h2> :
        <>
            <h2 className='offscreen'>Cart</h2>
            <ul className="cart">
                {
                    cart.map((item) => {
                        return (
                            <CartLineItem
                                key={item.sku}
                                item={item}
                                dispatch={dispatch}
                                REDUCER_ACTIONS={REDUCER_ACTIONS}
                            />

                        )
                    })
                }
            </ul>
            <div className="cart__totals">
                <p>Total Items: {totalItems}</p>
                <p>Total Price: {totalPrice}</p>
                <button
                    className='cart__submit'
                    onClick={onSubmit}
                    disabled={!totalItems}
                >
                    Submit
                </button>
            </div>
        </>

    const content = (
        <main className="main main--cart">
            {pageContent}
        </main>
    )

    return content
}
