import React from 'react'
import './Button1.css'

export default function Button1(props) {
    return (
        <button className="btn1">
            {props.children}
        </button>
    )
}
