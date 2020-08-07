import React from 'react'

import List from './List';

export default class Plat extends React.Component {
    constructor() {
        super();
        this.state = {
            name: null,
            desc: [],
            price: [],
        }
    }

    componentDidMount() {
        this.setState(this.props.data);
    }

    render() {
        return (
            <li className="dish">
                <h5>{this.state.name}</h5>
                <div className="price-block">
                    <span className="price">{this.state.price}</span>
                    <span className="size">{this.state.size}</span>
                </div>
                <ul className="desc"><List list={this.state.desc} /></ul>
                <hr className="separ-dish" />
            </li>
        )
    }
}
