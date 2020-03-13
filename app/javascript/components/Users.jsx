import React, { useState, useEffect } from "react"
// import { Link } from "react-router-dom"
import axios from "axios"
import User from "./User"
import UserForm from "./UserForm"

const token = document.querySelector('meta[name="csrf-token"]').content
const headersObj = {headers: {"X-CSRF-Token": token, "Content-Type": "application/json"}}

export default function Users() {
    const [users, setUsers] = useState([])
    const [toggleAddUserForm, setToggleAddUserForm] = useState(false)
    const allUsers = users.reverse().map(user => <User key={user.id} {...user} deleteUser={deleteUser} />)

    useEffect(() => {
        getUsers()
    }, [])

    function getUsers() {
        axios.get("/api/v1/users/index")
            .then(res => {
                setUsers(res.data)
            })
            .catch(err => console.log(err))
    }

    function createUser(newUser) {
        axios.post("/api/v1/users/create", newUser, headersObj)
            .then(res => {
                setUsers(prevUsers => ([
                    ...prevUsers,
                    res.data
                ]))
            })
            .catch(err => console.log(err))
    }

    function deleteUser(userId) {
        axios.delete(`api/v1/users/destroy/${userId}`, headersObj)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    function handleToggleAddForm() {
        setToggleAddUserForm(prev => !prev)
    }

    return (
        <div className="users-page">
            <h1>Users List</h1>
            <p className="add-user-link" onClick={handleToggleAddForm}>Add a new User</p>
            {toggleAddUserForm && <UserForm submit={createUser} btnTxt="Add User"/>}
            <div className="users-list">
                { allUsers }
            </div>
        </div>
    )
}