import { useState, ReactNode, useReducer } from "react";




const initialState: {
    count: number
} = {
    count: 0
}

const enum reducerActionType {
    INCREMENT,
    DECREMENT
}

type ReducerAction = {
    type: reducerActionType

}


const reducer = (state: typeof initialState, action: ReducerAction): typeof initialState => {
    switch (action.type) {
        default:
            throw new Error('error')

        case reducerActionType.INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case reducerActionType.DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }

    }
}


type ChildrenType = {
    children: (num: number) => ReactNode
}

function Counter({ children }: ChildrenType) {

    const [state, dispatch] = useReducer(reducer, initialState)

    const increment = () => {
        dispatch({ type: reducerActionType.INCREMENT })

    }

    const decrement = () => {
        dispatch({ type: reducerActionType.DECREMENT })
    }



    return (
        <div>
            <p>You clicked {children(state.count)} times</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;

