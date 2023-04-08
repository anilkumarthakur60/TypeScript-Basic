import React, { useReducer, useMemo, createContext } from 'react'

export type CartItemType = {
    sku: string,
    name: string,
    price: number,
    qty: number,
}

type CartStateType = { cart: CartItemType[] }
export type ReducerActionType = typeof REDUCER_ACTION_TYPE

export type ReducerAction = {
    type: string,
    payload?: CartItemType

}

const initCartState: CartStateType = { cart: [] }


const REDUCER_ACTION_TYPE = {
    add: 'add',
    remove: 'remove',
    qty: 'qty',
    submit: 'submit'
}


const reducer = (state: CartStateType, action: ReducerAction): CartStateType => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.add: {
            if (!action.payload) {
                throw new Error('action.payload missing in ADD action')
            }

            const { sku, name, price } = action.payload

            const filteredCart: CartItemType[] = state.cart.filter(item => item.sku !== sku)

            const itemExists: CartItemType | undefined = state.cart.find(item => item.sku === sku)

            const qty: number = itemExists ? itemExists.qty + 1 : 1

            return { ...state, cart: [...filteredCart, { sku, name, price, qty }] };
        }

        case REDUCER_ACTION_TYPE.remove: {
            if (!action.payload) {
                throw new Error('action payload missing to remove')
            }


            const { sku } = action.payload
            const filteredCart: CartItemType[] = state.cart.filter(item => item.sku !== sku)
            const itemExists: CartItemType | undefined = state.cart.find(item => item.sku === sku)
            const qty: number = itemExists ? itemExists.qty - 1 : 0
            return { ...state, cart: [...filteredCart] };


        }

        case REDUCER_ACTION_TYPE.qty: {

            if (!action.payload) {
                throw new Error('action.payload missing in QUANTITY action')
            }

            const { sku, qty } = action.payload

            const itemExists: CartItemType | undefined = state.cart.find(item => item.sku === sku)

            if (!itemExists) {
                throw new Error('Item must exist in order to update quantity')
            }

            const updatedItem: CartItemType = { ...itemExists, qty }

            const filteredCart: CartItemType[] = state.cart.filter(item => item.sku !== sku)

            return { ...state, cart: [...filteredCart, updatedItem] }


        }
        case REDUCER_ACTION_TYPE.submit:

            return { ...state, cart: [] }
        default:
            return state
    }
}

const useCartContext = (initCartState: CartStateType) => {

    const [state, dispatch] = useReducer(reducer, initCartState)

    const REDUCER_ACTIONS = useMemo(() => {
        return REDUCER_ACTION_TYPE
    }, [])

    const totalItems = state.cart.reduce((previousValue: number, cartItem: CartItemType) => {
        return previousValue + cartItem.qty
    }, 0)

    const totalPrice = new Intl.NumberFormat('en-us', {
        style: 'currency',
        currency: 'USD'
    }).format(
        state.cart.reduce((previousValue: number, cartItem: CartItemType) => {
            return previousValue + cartItem.qty * cartItem.price
        }, 0)
    )

    const cart = state.cart.sort((a, b) => {

        const itemA = Number(a.sku.slice(-4))
        const itemB = Number(a.sku.slice(-4))

        return itemA - itemB

    })

    return { cart, totalItems, totalPrice, dispatch, REDUCER_ACTIONS }
}



export type UseCartContextType = ReturnType<typeof useCartContext>


const initCartContextState: UseCartContextType = {
    dispatch: () => { },
    REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
    cart: [],
    totalItems: 0,
    totalPrice: '$0.00'
}

export const CartContext = createContext<UseCartContextType>(initCartContextState)

type ChildrenType = {
    children?: React.ReactElement | React.ReactElement[]
}

export const CartProvider = ({ children }: ChildrenType) => {


    return (
        <CartContext.Provider value={useCartContext(initCartState)}>
            {children}
        </CartContext.Provider>
    )
}
