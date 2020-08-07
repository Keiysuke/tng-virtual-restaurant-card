import React from 'react'

import DishList from './DishList';

import divider from '../pictures/divider.png';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            desc: null,
            price: 0,
            dishes: [],
            comment: null,
        }
    }

    componentDidMount() {
        this.setState(this.props.data);
    }

    render() {
        if (this.state.name === null) return <article className="menu"></article>;

        const key = this.state.name.concat("-dishes");
        return (
            <article className="menu">
                <section className="block-menu">
                    <h2>{this.state.name}</h2>
                    <hr className="separ" />
                    <p>{this.state.desc}</p>
                    <p>{this.state.price}€</p>
                    <img className="menu-separ-pict" src={divider} alt="sépateur" />
                </section>

                <ul className="dishes">
                    <DishList key={key} list={this.state.dishes} />
                </ul>

                <footer className="comment">{this.state.comment}</footer>
            </article>
        )
    }
}
