import React, { Dispatch } from 'react'
import useProducts from '../hooks/useProduct';
import { ProductType } from '../context/ProductProvider';
import { ReducerAction, ReducerActionType } from '../context/CartProvider';

type PropsType = {
    product: ProductType,
    inCart: boolean,
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS: ReducerActionType
}
export default function Product({ product,
    inCart,
    dispatch,
    REDUCER_ACTIONS }: PropsType): React.ReactElement {

    console.log(product);

    const onAddCart = () => dispatch({
        type: REDUCER_ACTIONS.add,
        payload: {
            ...product,
            qty: 1
        }
    })

    const itemInCart = inCart ? '-> Item in cart' : null

    const content =
        <article className='product'>
            <h3>{product?.name}</h3>
            <p>Price: {product?.price}</p>
            <p>
                {
                    new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(product?.price)
                }
                {
                    itemInCart
                }
            </p>
            <p>{itemInCart}</p>
            <button onClick={onAddCart}>Add to cart</button>


        </article>

    return content;
}
