import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import User from "../components/User"

export default function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("/api/v1/users/index")
            .then(res => {
                setUsers(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h1>Users list</h1>
            {users.map((user, i) => <User key={i} {...user} />)}
        </div>
    )
}