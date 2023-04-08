import React, { createContext } from 'react';
import { useEffect } from 'react';

export type ProductType = {

    sku: string,
    name: string,
    price: number,
}
type ChildrenType = { children?: React.ReactElement | React.ReactElement[] }
export type UserProductContextType = {
    products: ProductType[],
}


// const initState: ProductType[] = []

const initState: ProductType[] = [
    {
        "sku": "item0001",
        "name": "Widget",
        "price": 9.99
    },
    {
        "sku": "item0002",
        "name": "Premium Widget",
        "price": 19.99
    },
    {
        "sku": "item0003",
        "name": "Deluxe Widget",
        "price": 29.99
    }
]


const initContextState: UserProductContextType = {
    products: []
}


const ProductsContext = createContext<UserProductContextType>(initContextState)





export const ProductsProvider = ({ children }: ChildrenType): React.ReactElement => {
    const [products, setProducts] = React.useState<ProductType[]>(initState);


    // useEffect(() => {

    //     const fetchProducts = async (): Promise<ProductType[]> => {
    //         const data = await fetch('http://localhost:3500/product').then(res => {
    //             if (res.status === 200) {
    //                 return res.json()
    //             } else {
    //                 throw new Error('Something went wrong')
    //             }
    //         }).catch(error => {
    //             if (error instanceof Error) console.log(error);

    //         })
    //         setProducts(data)
    //         return data
    //     }

    //     fetchProducts()


    // }, [])

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContext 