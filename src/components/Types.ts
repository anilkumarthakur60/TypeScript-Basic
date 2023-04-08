import { ReactNode, Dispatch, SetStateAction } from "react"
export type PropsType = {
    children?: ReactNode,
    viewCart: boolean,
    setViewCart: Dispatch<SetStateAction<boolean>>
}