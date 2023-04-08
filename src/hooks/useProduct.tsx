import React, { useContext } from "react"
import ProductsContext from "../context/ProductProvider"
import { UserProductContextType } from '../context/ProductProvider';


const useProducts = (): UserProductContextType => {

    return useContext(ProductsContext)
}


export default useProducts
