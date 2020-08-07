import React from 'react'

import Dish from './Dish';

export default class DishList extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            dishesNumber: props.list.length,
            dishes: props.list
        }
    }

    componentDidMount() {
        this.setState({ dishesNumber: this.props.list.length, dishes: this.props.list });

        console.log(this.state);
    }

    render() {
        return (
            this.state.dishes.map(dish => {
                return <Dish key={dish.name} data={dish} />
            })
        )
    }
}
