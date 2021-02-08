import axios from 'axios';
import React, { useEffect } from 'react';
import { makeRequest } from '../../../../utils/request';
import Button from '../Button';
import './styles.scss';
// import { Container } from './styles';

const BlueContainer = () => {

    useEffect(() => {
        makeRequest({url: '/users/washingtonsoares'})
            .then(response => console.log(response));
    })

    return(
        <div className="search-container">
        <div className="search-content">
            Encontre um perfil Github
        </div>
        <div className="search-input" >
            <input type="text" placeholder="Usuário GitHub" />
        </div>
        <div className="search-btn">
            <Button text="Encontrar"/>
        </div>
    </div>
    );
};

export default BlueContainer;