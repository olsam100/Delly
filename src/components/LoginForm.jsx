// import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
import Input from './Input';
import { login } from '../services/authService'
// import Joi from 'joi-browser';

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
        flex-wrap: wrap;
        /* width: 100%; */
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
`;



const LoginForm = () => {
    
    const [mail, setEmail] = useState('')
    const [word, setWord] = useState('')
    // const [errors, catchError] = useState({})

    const onChange = (event) => {
        const newInputValue = event.currentTarget.value;
        setEmail(newInputValue);
    }

    const onPasswordChange = (event) => {
        const newPasswordValue = event.currentTarget.value;
        setWord(newPasswordValue);
    }


    let details = {mail, word}
    async function loginUser() {
        let result = await fetch('https://delly-app.herokuapp.com/user/login', {
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
            await loginUser(details); 
           const { jwt } = await login(mail, word);
           localStorage.setItem('token', jwt);
           this.props.history.push('/'); 
           console.log(jwt)   
        } catch (ex) {
            if(ex.response && ex.response.status === 400) {
               
            }
        }
    }
     
  return (
    <H>
        <h1>Welcome back to <strong>Delly</strong></h1>
        <p className="log">Log in to your account.</p>
        <form onSubmit={handleSubmit}>
            <Input  
                onChange={onChange}
                value={mail}
                name='Email'
                autoComplete='true'
                label='Email Address'
            />
            <Input 
                type='password'  
                onChange={onPasswordChange}
                value={word}
                name='Password'
                autoComplete='current-password'
                label='Password'
            />
           
            <p className='acc'>
                <Link to="/password">
                    <strong>Forgot Password?
                    </strong> 
                </Link>
            </p>

            <Button name="Log In" type="submit" post/>
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

export default LoginForm;
 

