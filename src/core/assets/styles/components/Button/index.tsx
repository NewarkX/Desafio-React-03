import React from 'react';
import './styles.scss';
// import { Container } from './styles';

type Props = {
    text: string;
}

const Button = ({text}: Props) => (
    <button className="btn btn-primary btn">
        <h5>{text}</h5>
    </button>
);

export default Button;