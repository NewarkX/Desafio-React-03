import React from 'react';
import Button from '../Button';
import './styles.scss';
// import { Container } from './styles';

const BlueContainer = () => (
    <div className="search-container">
        <div className="search-content">
            Encontre um perfil Github
        </div>
        <div className="search-input" >
            <input type="text" placeholder="Usuário GitHub" />
        </div>
        <div className="search-btn">
            <Button text="Encontrar" />
        </div>
    </div>
);

export default BlueContainer;