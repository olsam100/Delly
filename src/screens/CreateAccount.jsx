import React from 'react';
import styled from 'styled-components';
// import AccountDetails from '../components/AccountDetails';
import RegisterForm from '../components/RegisterForm';
import Page from './Page';

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
        /* display: grid;
        grid-template-columns: repeat(2, 50%);
        width: 100%;
        margin: 0 auto;
        max-width: 1440px; */

        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`;
const DivTwo = styled.div`
    background-color: #ffffff;
`;

const CreateAccount = () => {
    return (
        <Page>
            <CreateAccountStyles>
                <DivTwo>
                    <RegisterForm />
                </DivTwo>
            </CreateAccountStyles>
        </Page>
    )
}
export default CreateAccount;
