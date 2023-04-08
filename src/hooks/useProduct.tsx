import React, { useContext } from "react"
import ProductsContext from "../context/ProductProvider"
import { UserProductContextType } from '../context/ProductProvider';


const useProduct = (): UserProductContextType => {

    return useContext(ProductsContext)
}


export default useProduct
