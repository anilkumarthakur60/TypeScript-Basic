import React from 'react'
import useCart from '../hooks/useCart'
import { PropsType } from './Types';

export default function Footer({ viewCart }: PropsType) {

    const { totalItems, totalPrice } = useCart()

    const year: number = new Date().getFullYear()

    const pageContent = viewCart ?
        <p>Shopping Cart @</p>
        : (
            <>
                <p>Total Item :{totalItems}</p>

                <p>Total Price :{totalPrice}</p>

                <p>Shopping Cart  @copy: {year}</p>
            </>
        )

    const content = (
        <footer className='footer'>
            {pageContent}
        </footer>
    )

    return content
}
