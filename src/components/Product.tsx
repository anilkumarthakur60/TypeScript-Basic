import {ReducerAction, ReducerActionType} from "../context/CartProvider"
import {memo, ReactElement} from "react"
import {ProductType} from "../context/ProductProvider"

type PropsType = {
    product: ProductType,
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS: ReducerActionType,
    inCart: boolean,
}

const Product = ({ product, dispatch, REDUCER_ACTIONS, inCart }: PropsType): ReactElement => {


    const onAddToCart = () => dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } })

    const itemInCart = inCart ? ' → Item in Cart: ✔️' : null

    return <article className="product">
        <h3>{product.name}</h3>
        <p>{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(product.price)}{itemInCart}</p>
        <button onClick={onAddToCart}>Add to Cart</button>
    </article>
}

function areProductsEqual({ product: prevProduct, inCart: prevInCart }: PropsType, { product: nextProduct, inCart: nextInCart }: PropsType) {
    return (
        Object.keys(prevProduct).every(key => {
            return prevProduct[key as keyof ProductType] ===
                nextProduct[key as keyof ProductType]
        }) && prevInCart === nextInCart
    )
}
const MemoizedProduct = memo<typeof Product>(Product, areProductsEqual)

export default MemoizedProduct