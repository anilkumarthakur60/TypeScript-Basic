import React, { ReactElement } from 'react'

type Title = {
    title: string
}

const Heading = ({ title }: Title): ReactElement => {
    return (
        <h1>{title}</h1>
    )
}

export default Heading
