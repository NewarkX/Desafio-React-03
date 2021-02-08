import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
// import { Container } from './styles';

const NavBar = () => (
    <nav className="row bg-primary main-nav" >
        <div className="col-2">
            <Link to="/" className="nav-logo-text" >
                BootCamp DevSuperior
            </Link>
        </div>
        
    </nav>
);

export default NavBar;