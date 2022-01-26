import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';

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
        border-radius: 6px;
        background-color: #ffffff;
        margin-top: 16px;
        color: #073763;
        width: 100%;
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
        }
    }
    @media (min-width: 1201px){
            input {
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
    }
    .field{
        margin-bottom: 16px;
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

// handleClick () {
//     console.log('I am clicked')
// }

const LoginForm = ({name, password}) => {
  return (
    <H>
        <form>
            <h1>Welcome back to <strong>Delly</strong></h1>
            <p className="log">Log in to your account.</p>
            <div className="material-textfield field">
                <input placeholder=" " type="email" />
                <label>{name}</label>            
            </div>
            <div className="material-textfield">
                <input placeholder=" " type="password" />
                <label>{password}</label>            
            </div>
            <Link to="/password">
                <p className='acc'><strong>Forgot Password?</strong> </p>
            </Link>
            <Button name="Log In"/>
            <Link to="login/create-account">
                <p className='acc'>Don't have an account? <strong>Sign Up</strong> </p>
            </Link>
        </form>
    </H>
  );
};

export default LoginForm;
 

