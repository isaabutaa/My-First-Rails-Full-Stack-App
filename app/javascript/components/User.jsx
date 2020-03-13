import React from "react"

export default function User(props) {
    const { first_name, last_name, title, image, id, manager_id, deleteUser } = props
    return (
        <div className="user">
            <img className="user-img" src={image} alt=""/>
            <h2>{first_name + ' ' + last_name}</h2>
            <h3>{title}</h3>
            <button className="btn edit-btn">Edit</button>
            <button className="btn delete-btn" onClick={() => deleteUser(id)}>Delete</button>
        </div>
    )
}