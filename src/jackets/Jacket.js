import React from "react"
import "./index.scss"

export default ({
    id,
    name,
    price,
    img,
    handleItemClick
}) => {

    return (
        <div
            onClick={() => handleItemClick(id)}
            className="product-image">
            <img src={img} />
            <div className="product-info">
                <h5>{name}</h5>
                <h6>{price}</h6>
            </div>
        </div>
    )
}