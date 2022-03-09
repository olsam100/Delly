// import { validate } from 'joi-browser';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';
import Input from './Input';
import styled from 'styled-components';
import ResetForm from './ResetForm';


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
        align-items: center;
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
    @media (max-width: 319px){
        input{
        width: 100%;
        font-size: 16px;
        outline: none;
        border: 1px solid #E5EFFF;
        border-radius: 6px;  
        color: #073763;
        transition: 0.1s ease-out;
        background-color: #ffffff;
        padding-left: 16px;
        height: 46px;
        }
    }
    @media (min-width: 320px) and (max-width: 480px){
        input{
            width: 100%;
            font-size: 16px;
            outline: none;
            border: 1px solid #E5EFFF;
            border-radius: 6px;  
            color: #073763;
            transition: 0.1s ease-out;
            background-color: #ffffff;
            padding-left: 16px;
            height: 46px;
            font-family: 'Graphik';
        }
    }
    @media (min-width: 481px) and (max-width: 720px){
            input {
              /* max-width: 400px; */
              width: 100%;
              font-size: 1rem;
              outline: none;
              border: 1px solid #E5EFFF;
              border-radius: 6px;  
              color: #073763;
              transition: 0.1s ease-out;
              background-color: #ffffff;
              padding-top: 16px;
              padding-bottom: 16px;
              padding-left: 16px;
              font-family: 'Graphik';
          }
        
    }
    @media (min-width: 721px) and (max-width: 1024px){
            input {
              /* max-width: 400px; */
              width: 100%;
              font-size: 1rem;
              outline: none;
              border: 1px solid #E5EFFF;
              border-radius: 6px;  
              color: #073763;
              transition: 0.1s ease-out;
              background-color: #ffffff;
              padding-top: 16px;
              padding-bottom: 16px;
              padding-left: 16px;
              font-family: 'Graphik';
          }
    }
    @media (min-width: 1025px) and (max-width: 1200px){
        input{
              max-width: 400px;
              width: 100%;
              font-size: 1rem;
              outline: none;
              border: 1px solid #E5EFFF;
              border-radius: 6px;  
              color: #073763;
              transition: 0.1s ease-out;
              background-color: #ffffff;
              padding-top: 16px;
              padding-bottom: 16px;
              padding-left: 16px;
              font-family: 'Graphik';
        }
    }
    @media (min-width: 1201px){
            input {
              /* max-width: 382px; */
              width: 100%;
              font-size: 16px;
              outline: none;
              border: 1px solid #E5EFFF;
              border-radius: 6px;  
              color: #073763;
              transition: 0.1s ease-out;
              background-color: #ffffff;
              padding-left: 16px;
              height: 46px;
              font-family: 'Graphik';
        }
    }  
    .acc{
        padding-top: 16px;
    }

    a{
        text-decoration: none;
    }

    .material-textfield {
        position: relative;  
        height: 46px;
        margin-top: 16px;
        margin-bottom: 16px;
        display: flex;
    }

    label {
          position: absolute;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          font-family: "Graphik";
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          background-color: white;
          color: #7F92A4; 
          padding: 0 0.3rem;
          margin: 0 0.5rem;
          transition: .1s ease-out;
          transform-origin: left top;
          pointer-events: none;
      }
      form{
          width: 100%;
      }
      
      input:focus {
          border-color: #7F92A4;  
      }
      input:focus + label {
          color: #7F92A4;
          top: 0;
          transform: translateY(-50%) scale(.9);
      }
      input:not(:placeholder-shown) + label {
          top: 0;
          transform: translateY(-50%) scale(.9);
      }
    .alert{
        background-color: #FAD173;
    }
`;


const PasswordDetails = () => {
    const [email, setEmail] = useState('')
    // const navigate = useNavigate();

    let detail = {email}
    async function forgotPassword() {
        let result = await fetch('https://delly-app.herokuapp.com/user/forgot-password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json"
          },
          body: JSON.stringify(detail)
        })
        result = await result.json()
        localStorage.setItem('user-info', JSON.stringify(result))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await forgotPassword(email);
        // navigate('/reset-password'); 
    }
    
  return (
    <H>
        <h1>Forgot your <strong>Password</strong></h1>
        <p className="log">Enter your email address and we will send you instructions to reset your password.</p>
        <p className="log"> For security reasons, we do NOT store your password. So rest assured that we will never send your password via email.</p>
        <form onSubmit={handleSubmit} onClick={<ResetForm />}>
                <Input 
                    type="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    name='name'
                    autoComplete='true'
                    label='Email Address'
                />
            {/* <Link to='/reset-password'>
            </Link> */}
            <Button name="Send Password Instructions" />
        <p className='acc'>
            <Link to="/">
                <strong>Back to Login</strong> 
            </Link>
        </p>
        </form>
    </H>
  );
};

export default PasswordDetails;



