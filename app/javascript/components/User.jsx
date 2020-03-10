import React from "react"

export default function User(props) {
    const { name, title, direct_reports, image } = props
    return (
        <>
            <img src={image} alt=""/>
            <h2>{name}</h2>
            <h3>{title}</h3>
            <p>{direct_reports}</p>
        </>
    )
}