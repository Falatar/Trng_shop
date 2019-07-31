import React from "react"

function Product(props) {
    return (
        <div className="productBlock">
            <h3><font color="#3AC1EF">{props.product.name}</font></h3>
            <img align="center" src={props.product.imgUrl}/>
            <p> {props.product.description}</p>
            <p> {props.product.tag}</p>
            <h3><font color="#3AC1EF">{props.product.price}</font></h3>
        </div>
    )
}

export default Product