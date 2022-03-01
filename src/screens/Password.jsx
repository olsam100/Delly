import React from 'react';
import styled from 'styled-components';
import PasswordDetails from '../components/PasswordDetails';
import Page from './Page';

const PasswordStyles = styled.div`
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
        width: 100%;
        margin: 0 auto;
        max-width: 1440px;
    }
`;

const DivTwo = styled.div`
    background-color: #ffffff;
    width: 100%;
    margin: 0 auto;
`;


const Password = () => {
    return (
        <Page>
            <PasswordStyles>
            
                <DivTwo>
                    <PasswordDetails 
                    name="Email Address"
                    />
                </DivTwo>
            </PasswordStyles>
        </Page>
    )
}
export default Password;
