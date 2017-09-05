import React from "react"
import "./index.scss"
import { Link } from "react-router";

export default ({
    id,
    name,
    price,
    img,
    handlerclick
}) => {
    const link =`/jacket/${id}/`;

    return (
        <Link to = {link}>
        <div
            onClick = {() => handlerclick(id)} 
             className="product-image">
            <img src={img} />
            <div className="product-info">
                <h5>{name}</h5>
                <h4>{price}€</h4>
            </div>
        </div>
        </Link>
    )
}