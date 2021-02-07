import React from 'react';
import './styles.scss';
// import { Container } from './styles';

const NavBar = () => (
    <nav className="row bg-primary main-nav" >
        <div className="col-2">
            <a href="link" className="nav-logo-text" >
                <h4>BootCamp DevSuperior</h4>
            </a>
        </div>
    </nav>
);

export default NavBar;