import React, { useState } from "react"

export default function UserForm(props) {
    const { submit, btnTxt } = props
    const initInputs = {first_name: "", last_name: "", title: ""}
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        submit(inputs)
        setInputs(initInputs)
    }

    return (
        <form className="user-form" onSubmit={handleSubmit}>
            <input 
                onChange={handleChange} 
                type="text" 
                name="first_name" 
                value={inputs.first_name} 
                placeholder="First Name"/>
            <input 
                onChange={handleChange} 
                type="text" 
                name="last_name" 
                value={inputs.last_name} 
                placeholder="Last Name"/>
            <input 
                onChange={handleChange} 
                type="text" 
                name="title" 
                value={inputs.title} 
                placeholder="Position/Title"/>
            <button className="btn submit-btn">{btnTxt}</button>
        </form>
    )
}