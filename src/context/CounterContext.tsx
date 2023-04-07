import React, { createContext, ChangeEvent, useReducer, ReactElement, useCallback } from 'react';


const enum reducerActionType {
    increment,
    decrement,
    newInput

}

type ReducerAction = {
    type: reducerActionType,
    payload?: string

}

type StateType = {
    count: number,
    text: string
}
export const initialState: StateType = {
    count: 0,
    text: ''
}

const reducer = (state: StateType, action: ReducerAction): StateType => {
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

const useConterContext = (initialState: StateType) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const increment = useCallback(() => {
        dispatch({
            type: reducerActionType.increment
        })

        const decrement = useCallback(() => {
            dispatch({
                type: reducerActionType.decrement
            })
        }, [])

        const handleInputChange =

            useCallback(() => {
                ({ target }: ChangeEvent<HTMLInputElement>) => {
                    dispatch({
                        type: reducerActionType.newInput,
                        payload: target.value
                    })
                }
            }, [])

        return {
            state,
            increment,
            decrement,
            handleInputChange,
            dispatch
        }
    }


    type UseCounterContextType = ReturnType<typeof useConterContext>

    const initialContextState: UseCounterContextType = {

        state: initialState,
        increment: () => {
        },
        decrement: () => {
        },
        handleInputChange: (e: ChangeEvent<HTMLInputElement>) => {
        },
        dispatch: (action: ReducerAction) => {
        }
    }

    export const CounterContext = createContext<UseCounterContextType>(initialContextState)

    type ChildrenType = {
        children?: ReactElement | undefined
    }


    export const CounterProvider = ({
        children, ...initialState
    }: ChildrenType & StateType): ReactElement => {


        return (
            <CounterContext.Provider value={contextState}>
                {children}
            </CounterContext.Provider>
        )
    }