import React, { useState } from "react"
import UserForm from "./UserForm"

export default function User(props) {
    const { first_name, last_name, title, image, id, manager_id, deleteUser, editUser } = props
    const [toggleForm, setToggleForm] = useState(false)

    return (
        <div className="user">
            { !toggleForm ?
            <>
                <img className="user-img" src={image} alt=""/>
                <h2>{first_name + ' ' + last_name}</h2>
                <h3>{title}</h3>
                <button className="btn edit-btn" onClick={() => setToggleForm(prevToggle => !prevToggle)}>Edit</button>
                <button className="btn delete-btn" onClick={() => deleteUser(id)}>Delete</button>
            </>
            :
            <>
            <UserForm 
                first_name={first_name} 
                last_name={last_name} 
                title={title} 
                id={id} 
                submit={editUser} 
                btnTxt="Submit Edit" />
            <button className="btn close-btn" onClick={() => setToggleForm(prevToggle => !prevToggle)}>Close</button>
            </>
            }
        </div>
    )
}