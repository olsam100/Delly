import React from 'react'
import Button from './Button'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import Welcome from './Welcome';

const FormStyles = styled.form`
    @media (max-width: 319px){
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        padding-top: 40px;
    }
    @media (min-width: 320px) and (max-width: 480px){
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        padding-top: 40px;
    }
    @media (min-width: 481px) and (max-width: 720px){
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-wrap: wrap;
        height: 100%;
        padding-top: 60px;
    }
    @media (min-width: 721px) and (max-width: 1024px){
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-wrap: wrap;
        height: 100%;
    }
    @media (min-width: 1025px) and (max-width: 1200px){
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-wrap: wrap;
        height: 100%;
    }
    @media (min-width: 1201px){
        max-width: 400px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
        height: 100%;
    }
    @media (min-width: 320px) and (max-width: 480px){
        h1{
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        /* padding-right: 78px; */
        line-height: 40px;
        color: #526475;
        font-family: "Graphik";
        }
    }
    @media (min-width: 1201px){
        h1{
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
            padding-right: 78px;
            line-height: 40px;
            color: #526475;
            font-family: "Graphik";
        }
    }

    strong{
        color: #00378A;
    }
    p{
        color: #7F92A4;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        font-family: "Graphik";
    }

    .log{
        margin: 16px 0;
    }

    @media (max-width: 319px){
        input{
            width: 100%;
        }
        h1{
            padding-right: 0;
        }
    }
    input{
        border: 1px solid #E5EFFF;
        height: 44px;
        border-radius: 6px;
        background-color: #ffffff;
        margin-top: 16px;
        color: #073763;
        padding-left: 16px;
    }
    
    input::placeholder{
        color: #7F92A4; 
        opacity: 70%;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        font-family: "Graphik";
    }

    h3{
        color: #00378A;
        font-weight: 500;
        font-size: 14px;
        font-family: "Graphik";
    }
    
    a{
        text-decoration: none;
        margin: 16px 0;
    }
    .acc{
        margin-top: 16px;
    }

    .email{
        height: 46px;
    }
`;

const LoginForm = ({name, password}) => {
    return (
        <FormStyles>
            <h1>Welcome back to <strong>Delly</strong></h1>
            <p className='log'>Log in to your account</p>
            <input type="email" placeholder={name} className='email'/>
            <input type="password" placeholder={password} />
            <Link to="/password">
                <h3>Forgot Password?</h3>
            </Link>

            <Button name="Log in" />
            <Link to="create-account">
            <p className='acc'>Don’t have an account? <strong>Sign Up</strong> </p>
            </Link>

        </FormStyles>
    )
}

export default LoginForm
