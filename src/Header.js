import React, {Component} from 'react'
import './Header.css'
import logo from './YL STUDIO LOGO.png';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="language">
                    <a>HE</a>
                    <span>|</span>
                    <a>EN</a>
                </div>
                <img className="logoHeader" alt="logo" src={logo}/>
                <div className="divider"/>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid nav">
                            <a class="active" href="#">HOME</a>
                            <a href="#">ABOUT US</a>
                            <a href="#">CONTACT</a>
                            <a href="#">SERVICES</a>
                            <a href="#">GALLERY</a>
                            <a href="#">GEAR</a>

                            {/*<div className="navbar-header">*/}
                            {/*    <a className="navbar-brand" href="#">home</a>*/}
                            {/*</div>*/}
                    </div>
                </nav>
            </div>

        )

    }
}

export default Header;