import React from 'react'
import useCart from '../hooks/useCart'
import { UserProductContextType } from '../context/ProductProvider';
import useProducts from '../hooks/useProduct';
import Product from './Product';

export default function ProductList() {

    const { dispatch, REDUCER_ACTIONS, cart } = useCart()
    const { products } = useProducts()

    let pageContent: React.ReactElement | React.ReactElement[] = <p>Loading </p>


    if (products?.length) {
        pageContent = products.map((product) => {

            const inCart: boolean = cart.some(item => item.sku === product.sku)

            return (
                <Product key={product.sku}
                    product={product}
                    inCart={inCart}
                    dispatch={dispatch}
                    REDUCER_ACTIONS={REDUCER_ACTIONS}
                />
            )
        })

    }

    const content = (
        <div className="main main main--products">
            {pageContent}
        </div>
    )

    return content
}
