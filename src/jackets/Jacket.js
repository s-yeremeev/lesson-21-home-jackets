import React from "react"
import "./index.scss"
import { Link } from "react-router";

export default ({
    id,
    name,
    price,
    img
}) => {
    const link =`/jacket/${id}/`;

    return (
        <Link to={link}>
        <div
             className="product-image">
            <img src={img} />
            <div className="product-info">
                <h5>{name}</h5>
                <h6>{price}</h6>
            </div>
        </div>
        </Link>
    )
}