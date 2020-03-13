import React, { useState, useEffect } from "react"
import axios from "axios"
import JSONPretty from "react-json-pretty"

export default function UsersJSON() {
    const [JSONdata, setJSONData] = useState([])

    useEffect(() => {
        getJSONData()
    }, [])

    function getJSONData() {
        axios.get("/api/v1/users/index")
            .then(res => {
                setJSONData([res.data.reverse()])
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <JSONPretty id="json-pretty" data={JSON.stringify(JSONdata)}></JSONPretty>
        </div>
    )
}