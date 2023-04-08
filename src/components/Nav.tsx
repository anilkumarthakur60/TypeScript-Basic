import React, {

    ReactNode,
    Dispatch,
    SetStateAction,
} from 'react'


type PropsType = {
    children?: ReactNode,
    viewCart: boolean,
    setViewCart: Dispatch<SetStateAction<boolean>>
}

export default function Nav({ viewCart,
    setViewCart,
    children = ''
}: PropsType) {



    const button = viewCart ?
        <button
            onClick={() => setViewCart(false)}
        >
            View Products
        </button>
        :
        <button
            onClick={() => setViewCart(true)}
        >
            View Cart
        </button>

    const content = (
        <nav className='nav'>
            <div className="nav_title">
                <h1>Acme Co.</h1>
            </div>
            <div className="nav_button">
                {button}
            </div>
        </nav>
    )



    return content
}
