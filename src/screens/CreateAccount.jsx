import React from 'react';
import styled from 'styled-components';
// import AccountDetails from '../components/AccountDetails';
import RegisterForm from '../components/RegisterForm';
import Easy from '../components/Easy';
import Footer from '../components/Footer';

const CreateAccountStyles = styled.div`
   @media (min-width: 320px) and (max-width: 480px){
        width: 100%;
        display: flex;
        flex-direction: column-reverse;
    }
    @media (min-width: 481px) and (max-width: 720px){
        width: 100%;
        display: flex;
        flex-direction: column-reverse;
    }
    @media (min-width: 721px) and (max-width: 1024px){
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 50%);
    }
    @media (min-width: 1025px) and (max-width: 1200px){
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 50%);
    }
    @media (min-width: 1201px){
        display: grid;
        grid-template-columns: repeat(2, 50%);
        width: 100%;
        margin: 0 auto;
        max-width: 1440px;
    }
`;

const DivOne = styled.div`
    background-color: #F8F9FD;
;
`;

const DivTwo = styled.div`
    background-color: #ffffff;
`;

const CreateAccount = () => {
    return (
        <CreateAccountStyles>
        <DivOne>
            <Easy />
            <Footer />
        </DivOne>
        <DivTwo>
            <RegisterForm />
        </DivTwo>
    </CreateAccountStyles>
    )
}
export default CreateAccount;
