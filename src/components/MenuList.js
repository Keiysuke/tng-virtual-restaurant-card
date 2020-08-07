import React from 'react'

import Menu from './Menu';

import menus from './../datas/menus.json';

export default class MenuList extends React.Component {
    constructor() {
        super();
        this.state = {
            menusNumber: menus.length,
            menus: menus
        };
    }

    render() {
        return (
            menus.map(menu => {
                return <Menu key={menu.nom} data={menu} />
            })
        )
    }
}