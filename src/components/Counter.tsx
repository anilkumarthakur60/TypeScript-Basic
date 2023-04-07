import React, { ReactElement, useState, ReactNode } from 'react'

type CounterProps = {

    setCount: React.Dispatch<React.SetStateAction<number>>
    children: ReactNode

}

const Counter = ({ setCount, children }: CounterProps) => {

    return (
        <div className="">
            {children}
            <button onClick={() => setCount((val) => val + 1)}>+</button>

            <button onClick={() => setCount((val) => val - 1)}>-</button>
        </div>
    )
}

export default Counter
