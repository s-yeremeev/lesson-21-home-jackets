import React from "react";
import "./index.scss";

export default class JacketsAllContainer extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
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
                <div className="product-card">
                    <div className="product-image">
                        <img src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"/>
			</div>
                    <div className="product-info">
                        <h5>Winter Jacket</h5>
                        <h6>$99.99</h6>
                    </div>
                </div>

                <div className="product-card">
                    <div className="product-image">
                        <img src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"/>
			</div>
                    <div className="product-info">
                        <h5>Winter Jacket</h5>
                        <h6>$99.99</h6>
                    </div>
                </div>

                <div className="product-card">
                    <div className="product-image">
                        <img src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"/>
			</div>
                    <div className="product-info">
                        <h5>Winter Jacket</h5>
                        <h6>$99.99</h6>
                    </div>
                </div>

                <div className="product-card">
                    <div className="product-image">
                        <img src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"/>
			</div>
                        <div className="product-info">
                            <h5>Winter Jacket</h5>
                            <h6>$99.99</h6>
                        </div>
                    </div>

                    <div className="product-card">
                        <div className="product-image">
                            <img src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"/>
			</div>
                        <div className="product-info">
                            <h5>Winter Jacket</h5>
                            <h6>$99.99</h6>
                        </div>
                    </div>

                    <div className="product-card">
                        <div className="product-image">
                            <img src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"/>
			</div>
                        <div className="product-info">
                            <h5>Winter Jacket</h5>
                            <h6>$99.99</h6>
                        </div>
                    </div>

                    <div className="product-card">
                        <div className="product-image">
                            <img src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"/>
			</div>
                        <div className="product-info">
                            <h5>Winter Jacket</h5>
                            <h6>$99.99</h6>
                        </div>
                    </div>

                    <div className="product-card">
                        <div className="product-image">
                            <img src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"/>
			</div>
                            <div className="product-info">
                                <h5>Winter Jacket</h5>
                                <h6>$99.99</h6>
                            </div>
                        </div>
                        <div className="product-card">
                            <div className="product-image">
                                <img src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"/>
			</div>
                        <div className="product-info">
                            <h5>Winter Jacket</h5>
                            <h6>$99.99</h6>
                        </div>
                        </div>

                        <div className="product-card">
                            <div className="product-image">
                                <img src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"/>
			</div>
                        <div className="product-info">
                            <h5>Winter Jacket</h5>
                            <h6>$99.99</h6>
                        </div>
                    </div>	
            </section>
            </section>
                                                    )
}
}