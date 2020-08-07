import React from 'react'

export default function List({ list }) {
    if (list === null) return <li></li>;

    return (
        list.map(item => {
            return <li>{item}</li>
        })
    )
}
