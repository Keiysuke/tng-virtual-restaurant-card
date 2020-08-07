import React from 'react'

export default class Navbar extends React.Component {
    render() {
        return (
            <nav id="navbar">
                <ul>
                    <li>Avis</li>
                    <li>évènements</li>
                    <li>Presse</li>
                    <li>Biographie du chef</li>
                    <li>Menu Réveillon</li>
                    <li>Oh clique</li>
                    <li>Accès/Contact</li>
                    <li><a href="#"><input type="button" name="reserve" value="Réserver" /></a></li>
                    <li><a href="#"><input type="button" name="vouchers" value="Bons d'achats" /></a></li>
                </ul>
            </nav>
        )
    }
}
