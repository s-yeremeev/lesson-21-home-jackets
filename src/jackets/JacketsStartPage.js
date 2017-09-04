import React from "react";
import "./index.scss";
import { Link } from "react-router";
import JacketComponent from "./Jacket"
import data from "./data.json"

export default class JacketsAllContainer extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        const {children} = this.props
        return (
            <section>
            <nav className="product-filter">
                <h1>Jackets</h1>

                <div className="sort">
                    <div className="collection-sort">
                        <label>Filter by:</label>
                        <select>
                            <option value="/">All Jackets</option>
                            <option value="/">2016</option>
                            <option value="/">jacket</option>
                            <option value="/">Jackets</option>
                            <option value="/">layers</option>
                            <option value="/">Obermeyer</option>
                            <option value="/">Roxy</option>
                            <option value="/">womens</option>
                        </select>
                    </div>

                    <div className="collection-sort">
                        <label>Sort by:</label>
                        <select>
                            <option value="/">Featured</option>
                            <option value="/">Best Selling</option>
                            <option value="/">Alphabetically, A-Z</option>
                            <option value="/">Alphabetically, Z-A</option>
                            <option value="/">Price, low to high</option>
                            <option value="/">Price, high to low</option>
                            <option value="/">Date, new to old</option>
                            <option value="/">Date, old to new</option>
                        </select>
                    </div>
                </div>
            </nav>
            <section className="products">
            {
                data.map(({ id, name, price, img, handleItemClick }, index) => (
                      <div 
                      key={id}
                      className="product-card">
                        <JacketComponent
                            img={img}
                            name={name}
                            price={price}
                          handleItemClick={handleItemClick}
                        />
                      </div>
                    ))
                  }       
                  </section>
            {children}
            </section>
                                                    )
}
}