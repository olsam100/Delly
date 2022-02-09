import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { Link } from 'react-router-dom';

const AStyles = styled.div`
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

    .material-textfield {
        position: relative;  
        margin-top: 24px;
        display: flex;
    }

    .input-fields{
        /* display: flex; */
        gap: 16px;
        margin-bottom: 16px;
        /* position: relative;   */
        /* margin-top: 24px; */
    }

    .small-field{
        height: 46px;
        width: 100%;
        padding: 20px 0;
    }

    label {
        position: absolute;
        font-size: 14px;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        background-color: white;
        color: gray;
        padding: 0 0.3rem;
        margin: 0 0.5rem;
        transition: .1s ease-out;
        transform-origin: left top;
        pointer-events: none;
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
            font-size: 14px;
            outline: none;
            border: 1px solid #E5EFFF;
            border-radius: 6px;  
            padding-left: 16px;
            color: #073763;
            transition: 0.1s ease-out;
            width: 100%;    
            height: 46px;
            background-color: #ffffff;
        }
    }
    @media (min-width: 481px) and (max-width: 720px){
        input{
            font-size: 14px;
            outline: none;
            border: 1px solid #E5EFFF;
            border-radius: 6px;  
            padding-left: 16px;
            color: #073763;
            transition: 0.1s ease-out;
            width: 100%;    
            height: 46px;
            background-color: #ffffff;
        }
    }
    @media (min-width: 721px) and (max-width: 1024px){
        input{
            font-size: 14px;
            outline: none;
            border: 1px solid #E5EFFF;
            border-radius: 6px;  
            color: #073763;
            transition: 0.1s ease-out;
            width: 100%;    
            height: 46px;
            background-color: #ffffff;
            padding-left: 16px;
        }
    }
    @media (min-width: 1201px){
        input {
            max-width: 410px;
            font-size: 14px;
            outline: none;
            border: 1px solid #E5EFFF;
            border-radius: 6px; 
            color: #073763;
            transition: 0.1s ease-out;
            width: 100%;    
            height: 46px;
            background-color: #ffffff;
            padding-left: 16px;
        }        
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
    a{
        text-decoration: none;
    }
    .acc{
        padding-top: 16px;
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
    .fields{
        margin: 30px 0;
    }
    .group{
        max-width: 410px;
        display: grid;
        grid-template-columns: repeat(2, 50%);
        justify-content: space-between;
        gap: 16px;
      }
      .small{
          /* width: 176px; */
          height: 44px;
      }
`;




 

const AccountForm = ({name, email, welcome, username, password}) => {
    
    const [nam, setName] = useState('')
    const [mail, setEmail] = useState('')
    const [come, setWelcome] = useState('')
    const [user, setUser] = useState('')
    const [word, setWord] = useState('')
    
    let details = {nam, mail, come, user, word}
    async function registerUser() {
        let result = await fetch('https://delly-app.herokuapp.com/user/register', {
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
        e.preventDefault()
        await registerUser(details)
    }
  return (
    <AStyles>
    <form onSubmit={handleSubmit}>
          <h1>Create your <br/> <strong>account</strong></h1>
          <p className="log">Enter the information below to create your account.</p>
          <div className="material-textfield">
              <input 
                  placeholder=" " 
                  type="text"
                  value={nam} 
                  onChange={(e) => setName(e.target.value)}
                  name='Full name'
                  autoComplete=''
              />
            <label>{name}</label>
          </div>
          <div className="material-textfield">
              <input 
                  placeholder=" " 
                  type="email"
                  value={mail} 
                  onChange={(e) => setEmail(e.target.value)}
                  name='Email'
              />
              <label>{email}</label>
          </div>
          <div className="material-textfield">
              <input 
                  placeholder=" " 
                  type="text"
                  value={come} 
                  onChange={(e) => setWelcome(e.target.value)}
                  name='Welcome'
              />
              <label>{welcome}</label>
          </div>
          <div className="group">
              <div className='material-textfield'>
                  <input 
                      placeholder=" " 
                      type="text" 
                      className='small'
                      value={user} 
                      onChange={(e) => setUser(e.target.value)}
                      name='Username'
                  />
                  <label>{username}</label>
              </div>
              <div className='material-textfield'>
                  <input 
                      placeholder=" " 
                      type="password" 
                      className='small'
                      value={word} 
                      onChange={(e) => setWord(e.target.value)}
                      name='Password'
                  />
                  <label>{password}</label>
              </div>
          </div>
          <p className="clicks">By Clicking Sign Up, you agree to accept our <strong className='terms'>Terms and Conditions</strong> and <strong className='terms'> Privacy Policy.</strong></p>
          
          <Button name="Sign Up" />

          <Link to="/">
              <p className='acc'>Already have an account? <strong>Log In</strong> </p>
          </Link>
     
    </form>
</AStyles>);
};

export default AccountForm;

