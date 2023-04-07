import { useState, ReactNode, useReducer, ChangeEvent } from "react";




const initialState = {
    count: 0,
    text: ''
}

const enum reducerActionType {
    increment,
    decrement,
    newInput

}

type ReducerAction = {
    type: reducerActionType,
    payload?: string

}


const reducer = (state: typeof initialState, action: ReducerAction): typeof initialState => {
    switch (action.type) {
        default:
            throw new Error('error')

        case reducerActionType.increment:
            return {
                ...state,
                count: state.count + 1
            }
        case reducerActionType.decrement:
            return {
                ...state,
                count: state.count - 1
            }
        case reducerActionType.newInput:
            return {
                ...state,
                text: action.payload ?? ''
            }

    }
}


type ChildrenType = {
    children: (num: number) => ReactNode
}

function Counter({ children }: ChildrenType) {

    const [state, dispatch] = useReducer(reducer, initialState)

    const increment = () => {
        dispatch({
            type: reducerActionType.increment
        })

    }

    const decrement = () => {
        dispatch({
            type: reducerActionType.decrement
        })
    }

    const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: reducerActionType.newInput,
            payload: target.value
        })
    }



    return (
        <div>
            <p>You clicked {children(state.count)} times</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <input type="text" onChange={handleInputChange} />
        </div>
    );
}

export default Counter;

