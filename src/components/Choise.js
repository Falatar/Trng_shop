import React from "react"

function Choise(props) {
    return (
        <div className="menuChoise">
            <input type="radio"></input>
            <p> {props.name}</p>
        </div>
    )
}

export default Choise