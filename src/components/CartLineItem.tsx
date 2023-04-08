import React from 'react'
import { useState } from 'react';
import { ReducerAction, CartItemType, ReducerActionType } from '../context/CartProvider';


type PropsType = {
    item: CartItemType,
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS: ReducerActionType

}

export default function CartLineItem({
    item,
    dispatch,
    REDUCER_ACTIONS
}: PropsType) {


    const lineTotal: number = (item?.qty * item?.price)

    const highestQuantity: number = 20 > item.qty ? 20 : item.qty

    const optionValue: number[] = [...Array(highestQuantity).keys()].map(i => i + 1)


    const options: React.ReactElement[] = optionValue.map(item => {
        return (
            <option key={`opt${item}`} value={item}>{item}</option>
        )
    })


    const onChangeQty = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch({
            type: REDUCER_ACTIONS.qty,
            payload: {
                ...item,
                qty: Number(e.target.value)
            }
        })
    }

    const onRemove = () => dispatch({
        type: REDUCER_ACTIONS.remove,
        payload: item
    })


    const content = (
        <li className="cart__item">

            <div aria-label='Item Name' >{item.name}</div>

            <div aria-label='Price Per Item' >{
                new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD'
                }).format(item.price)
            }</div>

            <label htmlFor='itemQty' className='offscreen'>Item Quantity</label>
            <select
                name='itemQty'
                id='itemQty'
                value={item.qty}
                className='cart__select'
                aria-label='Item Quantity'
                onChange={onChangeQty}
            >
                {options}
            </select>

            <div className="cart__item-subtotal" aria-label='Line Item Subtotal'>

                {
                    new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(lineTotal)
                }
            </div>

            <button
                className='cart__button'
                onClick={onRemove}
                aria-label='Remove Item'
                title='Remove Item'
            >
                Remove
            </button>

        </li>
    )

    return content
}
