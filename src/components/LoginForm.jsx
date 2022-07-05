import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
import Input from './Input';
// import { login } from '../services/authService'

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
          cursor: pointer;
      }
`;

const LoginForm = ({Login, error}) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('')

    
    const onChange = (event) => {
        const newInputValue = event.currentTarget.value;
        setEmail(newInputValue);
    }

    const onPasswordChange = (event) => {
        const newPasswordValue = event.currentTarget.value;
        setPassword(newPasswordValue);
    }
    

    let details = {email, password}
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
        localStorage.setItem('token', JSON.stringify(result))
        localStorage.setItem('user-info', JSON.stringify(result))
    }
 
    // const handleSubmit = async ( e ) => {
    //     e.preventDefault();
    //     try {
    //         const { data: jwt } = await loginUser(details)
    //         localStorage.setItem('token', jwt);
    //         navigate('/');
    //     } catch (ex) {
    //         if(ex.response && ex.response.status === 400){
    //             const error = {errors}
    //             error.email = ex.response.data;
    //             setErrors({ errors })
    //         }
    //     }
    // }

    const getSubmit = async (req, res) => {
        try {
            const {id: tokenID} = req.params;
            const getID = await loginUser.findOne({_id: tokenID})
            localStorage.setItem('token', getID)
            navigate('/');
        } catch (error) {
            res.status(500).JSON({msg: error})
        }
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        getSubmit();
    }
     
  return (
    <H>
        <form onSubmit={handleSubmit}>
            <h1>Welcome back to <strong>Delly</strong></h1>
            <p className="log">Log in to your account.</p>
            <Input  
                onChange={onChange}
                value={email}
                name='Email'
                autoComplete='true'
                label='Email Address'
            />
            <Input 
                type='password'  
                onChange={onPasswordChange}
                value={password}
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
 

