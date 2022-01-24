import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Butt = styled.button`
    width: 400px;
    width: 100%;
    height: 48px;
    border-radius: 6px;
    background-color: #00378A;
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
    font-family: "Graphik";
    margin-top: 16px;
`;

const Button = ({name}) => {
    return (
        <div>
            <Link to="/">
                <Butt>{name}</Butt>
            </Link>
        </div>
    )
}

export default Button
