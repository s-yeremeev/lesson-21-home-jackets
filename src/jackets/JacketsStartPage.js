import React from "react";
import "./index.scss";
import JacketComponent from "./Jacket"
import data from "./data.json"

export default class JacketsAllContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            filters: null,
            sorting: null,
            handler: null
        };
    };

    onchangeFilter = (event) => {
        const filterValue = event.target.value
        this.setState({
            filters: filterValue,
        });
    };

    onchangeSort = (event) => {
        const sortingValue = event.target.value
        this.setState({
            sorting: sortingValue
        });
    };

     handlerclick = (event) => {
        this.setState({
            handler: event
        });
    };


    render() {
        let filteredData = data
        if (this.state.filters) {
            filteredData = data.filter((item) => {
                return item.filtered == this.state.filters;
            });
        } else {
            filteredData = data
        };
        
        if (this.state.handler) {
            filteredData = data.filter((item) => {
                return item.id == this.state.handler;
            }); 
        };

        switch(this.state.sorting) {
            case "low" :
                filteredData.sort(function(a, b){
                    let c = a.price, d = b.price;            
                    if( c < d ) return -1;
                    else if( c > d ) return 1;
                    return 0;
                });
                break
            case "high" :
                    let sortArr = filteredData.sort(function(a, b){
                        let c = a.price, d = b.price;            
                        if( c > d ) return -1;
                        else if( c < d ) return 1;
                        return 0;
                    });
                break
            case "" :
                    filteredData.sort(function(a, b){
                        let c = a.id, d = b.id;            
                        if( c < d ) return -1;
                        else if( c > d ) return 1;
                        return 0;
                    });
             break
        };

        return (
            <section>
                <nav className="product-filter">
                    <h1>Jackets</h1>

                    <div className="sort">
                        <div className="collection-sort">
                            <label>Filter by:</label>
                            <select
                                onChange={this.onchangeFilter}
                            >
                                <option value="">All Jackets</option>
                                <option value="2016">2016</option>
                                <option value="jacket">jacket</option>
                                <option value="Obermeyer">Obermeyer</option>
                            </select>
                        </div>

                        <div className="collection-sort">
                            <label>Sort by:</label>
                            <select
                                onChange={this.onchangeSort}
                            >
                                <option value="">Default</option>
                                <option value="low">Price, low to high</option>
                                <option value="high">Price, high to low</option>
                            </select>
                        </div>
                    </div>
                </nav>
                <section className="products">
                    {
                        filteredData.map(({ id, name, price, img, handlerclick }, index) => (
                            <div
                                key={id}
                                className="product-card">
                                <JacketComponent
                                    id={id}
                                    img={img}
                                    name={name}
                                    price={price}
                                    handlerclick={this.handlerclick}
                                />
                            </div>
                        ))
                    }
                </section>
            </section>
        )
    }
}