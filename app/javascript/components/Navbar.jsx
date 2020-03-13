import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <div className="navbar">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/users">Users</Link>
            <Link className="nav-link" to="/users-json">Users JSON</Link>
        </div>
    )
}