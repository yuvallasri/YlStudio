import React, {Component} from 'react'
import './Header.css'
import logo from './YL STUDIO LOGO.png';
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                <div className="language">
                    <a>HE</a>
                    <span>|</span>
                    <a>EN</a>
                </div>
                <div>
                <Link  to='/home'><img className="logoHeader" alt="logo" src={logo}/></Link>
                </div>
                    <div className="divider"/>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid nav">
                        <Link to='/home'><a>home</a></Link>
                        <Link to='/about'><a>About</a></Link>
                        <Link to='/gear'><a>Gear</a></Link>
                        <Link to='/gallery'><a>GALLERY</a></Link>
                    </div>
                </nav>
            </div>

        )

    }
}

export default Header;
