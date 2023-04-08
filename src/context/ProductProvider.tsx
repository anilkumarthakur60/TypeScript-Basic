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
        "sku": "sku1",
        "name": "Product 1",
        "price": 100
    },
    {
        "sku": "sku2",
        "name": "Product 2",
        "price": 200
    },
    {
        "sku": "sku3",
        "name": "Product 3",
        "price": 300
    }
];


const initContextState: UserProductContextType = {
    products: []
}


const ProductsContext = createContext<UserProductContextType>(initContextState)





export const ProductsContextProvider = ({ children }: ChildrenType): React.ReactElement => {
    const [products, setProducts] = React.useState<ProductType[]>(initState);


    useEffect(() => {

        const fetchProducts = async (): Promise<ProductType[]> => {
            const data = await fetch('https://localhost:3500/products').then(res => {
                if (res.status === 200) {
                    return res.json()
                } else {
                    throw new Error('Something went wrong')
                }
            }).catch(error => {
                if (error instanceof Error) console.log(error);

            })
            return data
        }

        fetchProducts().then(products => {
            setProducts(products)
        })
    }, [])

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContext 