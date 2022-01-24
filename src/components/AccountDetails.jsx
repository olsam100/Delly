import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from './Button';

const CStyles = styled.div`
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
        max-width: 428px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
        height: 100%;
    }

    h1{
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        padding-right: 78px;
        line-height: 40px;
        color: #526475;
        font-family: "Graphik";
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
        line-height: 24px;
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
    @media (min-width: 320px) and (max-width: 480px){
        input{
        border: 1px solid #E5EFFF;
        height: 46px;
        border-radius: 6px;
        background-color: #ffffff;
        margin-top: 16px;
        color: #073763;
        width: 100%;
        }
    }
    @media (min-width: 481px) and (max-width: 720px){
        input{
        border: 1px solid #E5EFFF;
        height: 46px;
        border-radius: 6px;
        background-color: #ffffff;
        margin-top: 16px;
        color: #073763;
        width: 100%;
        }
    }
    @media (min-width: 721px) and (max-width: 1024px){
        input{
        border: 1px solid #E5EFFF;
        height: 46px;
        border-radius: 6px;
        background-color: #ffffff;
        margin-top: 16px;
        color: #073763;
        width: 100%;
        }
    }
    @media (min-width: 1025px) and (max-width: 1200px){
        input{
        border: 1px solid #E5EFFF;
        height: 46px;
        border-radius: 6px;
        background-color: #ffffff;
        margin-top: 16px;
        color: #073763;
        width: 100%;
        }
    }
    @media (min-width: 1201px){
        input{
            width: 100%;
            border: 1px solid #E5EFFF;
            height: 46px;
            border-radius: 6px;
            background-color: #ffffff;
            margin-top: 16px;
            color: #073763;
            padding-left: 16px;
        }
    }
    
    input::placeholder{
        color: #7F92A4; 
        opacity: 70%;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        font-family: "Graphik";
    }

    .acc{
        padding-top: 16px;
    }

    a{
        text-decoration: none;
    }
    .clicks{
        font-family: "Graphik";
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 15px;
        margin-top: 16px;
    }
    .terms{
        color: #00378A;
        font-size: 12px;
        font-weight: 400;
        font-style: normal;
    }
    .but{
        margin-top: 16px;
    }
    .buttons{
        display: flex;
        gap: 16px;
        /* height: 46px; */
        margin-bottom: 16px;
    }

    .small-button{
        /* width: 50%; */
        height: 46px;
    }
`;

const AccountDetails = ({name, email, welcome}) => {
  return (
    <CStyles>
        <h1>Create your <br/> <strong>account</strong></h1>
        <p className="log">Enter the information below to create your account.</p>
        <input type="text" placeholder={name}/>
        <input type="email" placeholder={email}/>
        <input type="text" placeholder={welcome}/>
        <div className="buttons">
            <input className='small-button' type="text" placeholder='Username'/>
            <input className='small-button' type="password" placeholder='Password'/>
        </div>
        <p className="clicks">By Clicking Sign Up, you agree to accept our <strong className='terms'>Terms and Conditions</strong> and <strong className='terms'> Privacy Policy.</strong></p>
        <div className='but'>
            <Button name="Sign Up" className="sign" />

        </div>

        <Link to="/login">
            <p className='acc'>Already have an account? <strong>Log In</strong> </p>
        </Link>
    </CStyles>
  );
};

export default AccountDetails;
