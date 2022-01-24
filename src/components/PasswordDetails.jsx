import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
// import Input from './Input';

const H = styled.div`
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

    @media (min-width: 320px) and (max-width: 480px){
        p{
            color: #7F92A4;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            font-family: "Graphik";
            line-height: 24px;
        }
    }
    @media (min-width: 481px) and (max-width: 720px){
        p{
            color: #7F92A4;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            font-family: "Graphik";
            line-height: 24px;
        }
    }
    @media (min-width: 721px) and (max-width: 1024px){
        p{
            color: #7F92A4;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            font-family: "Graphik";
            line-height: 24px;
        }
    }
    @media (min-width: 1025px) and (max-width: 1200px){
        p{
            color: #7F92A4;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            font-family: "Graphik";
            line-height: 24px;
        }
    }
    @media (min-width: 1201px){
        p{
            color: #7F92A4;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            font-family: "Graphik";
            line-height: 24px;
        }
    }
    @media (min-width: 320px) and (max-width: 480px){
        .log{
            margin: 16px 0;
        }
    }
    @media (min-width: 481px) and (max-width: 720px){
        .log{
            margin: 16px 0;
        }
    }
    @media (min-width: 721px) and (max-width: 1024px){
        .log{
            margin: 16px 0;
        }
    }
    @media (min-width: 1025px) and (max-width: 1200px){
        .log{
            margin: 16px 0;
        }
    }
    @media (min-width: 1201px){
        .log{
            margin: 16px 0;
        }
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
            border: 1px solid #E5EFFF;
            height: 46px;
            border-radius: 6px;
            background-color: #ffffff;
            margin-top: 16px;
            color: #073763;
        }
    }
    
    input::placeholder{
        color: #7F92A4; 
        opacity: 70%;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        font-family: "Graphik";
        padding-left: 16px;
    }

    .acc{
        padding-top: 16px;
    }

    a{
        text-decoration: none;
    }

`;

const PasswordDetails = ({name}) => {
  return (
    <H>
        <h1>Forgot your <strong>Password</strong></h1>
        <p className="log">Enter your email address and we will send you instructions to reset your password.</p>
        <p className="log"> For security reasons, we do NOT store your password. So rest assured that we will never send your password via email.</p>
        {/* <input type="email" placeholder="Email Address" /> */}
        <input type="email" placeholder={name}/>
        {/* <Input name={name}/> */}
        <Button name="Send Password Instructions"/>
        <Link to="/login">
            <p className='acc'><strong>Back to Login</strong> </p>
        </Link>
    </H>
  );
};

export default PasswordDetails;


