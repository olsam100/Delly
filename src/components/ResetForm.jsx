// import axios from 'axios';
import React, { useState } from 'react';
// import { Link, Navigate } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
import Input from './Input';

const H = styled.div`
    @media (max-width: 319px){
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        padding-top: 40px;
        width: 100%;
    }
    @media (min-width: 320px) and (max-width: 480px){
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        padding-top: 40px;
    }
    @media (min-width: 481px) and (max-width: 720px){
        width: 60%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-wrap: wrap;
        height: 100%;
        padding-top: 60px;
    }
    @media (min-width: 721px) and (max-width: 1024px){
        width: 50%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        flex-wrap: wrap;
        padding-top: 50px;
    }
    @media (min-width: 1025px) and (max-width: 1200px){
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-wrap: wrap;
        flex-basis: 100%;
        flex-grow: 1;
        /* height: 100%; */
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
            font-family: 'Graphik';
        }
        h1{
            padding-right: 0;
        }
    }
    @media (max-width: 319px){
        input{
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
              font-size: 16px;
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
              /* max-width: 382px; */
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
              max-width: 382px;
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
              max-width: 382px;
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
        height: 48px;
        margin-top: 16px;
        display: flex;
        max-width: 400px;
    }
    .field{
        /* margin-bottom: 16px; */
        margin-top: 24px;
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
      button {
          max-width: 400px;
      }
`;



const ResetForm = (props) => {
    const navigate = useNavigate();
    
    const [password, setPassword] = useState('')
    const [resetPassword, setResetPassword] = useState('')
    const [errors, setErrors] = useState('')
    const [redirect, setRedirect] = useState(false)

    const onPasswordChange = (event) => {
        const newPasswordValue = event.currentTarget.value;
        setPassword(newPasswordValue);
    }

    const onResetPasswordChange = (event) => {
        const newPasswordValue = event.currentTarget.value;
        setResetPassword(newPasswordValue);
    }
    let details = {
        token: props.match.params.token,
        password,
        password_confirm: resetPassword
    }
    async function reset() {
        let baseUrl = 'https://delly-app.herokuapp.com/user/password/reset'
         let result = await fetch(baseUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json"
          },
          body: JSON.stringify(details)
        })
        result = await result.json()
        localStorage.setItem('user-info', JSON.stringify(result))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await reset(details);
            // navigate('/')
        } catch (ex) {
            if(ex.response && ex.response.status === 400) {
                const error = {errors}
                error.email = ex.response.data;
                setErrors({ errors })
            }
        }
        setRedirect(true)
    }
    if(redirect){
        navigate('/');
    }
     
  return (
    <H>
        <h1>Reset your <strong>Password</strong></h1>
        <form onSubmit={handleSubmit}>
            
            <Input 
                type='password'  
                onChange={onPasswordChange}
                value={password}
                name='New Password'
                autoComplete='current-password'
                label='New Password'
            />
            <Input 
                type='password'  
                onChange={onResetPasswordChange}
                value={resetPassword}
                name='Confirm Password'
                label='Confirm Password'
            />
           
            <Button name="Reset Password" type="submit" post/>
            <p className='acc'>
                <Link to="/create-account">
                    Don't have an account? 
                    <strong> Sign Up</strong> 
                </Link>
            </p>
        </form>
    </H>
  );
};

export default ResetForm;
 

