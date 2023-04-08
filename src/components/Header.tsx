import React, { ReactNode, Dispatch, SetStateAction } from 'react'
import Nav from './Nav'
import { PropsType } from './Types'
import useCart from '../hooks/useCart'


export default function Header({
    viewCart,
    setViewCart,
    children = ''
}: PropsType) {

    const { totalItems, totalPrice } = useCart()

    const content = (
        <header>
            <div className="header_title">
                <h1>Acme Co.</h1>
            </div>
            <div className="header_price_box">
                <p>Total Items {totalItems}</p>
                <p>Total Price {totalPrice}</p>
            </div>
            <Nav viewCart={viewCart} setViewCart={setViewCart} />
        </header>
    )




    return content
}
