import React from 'react'
import Page from './Page';
import styled from 'styled-components';
import ResetForm from '../components/ResetForm'

const LoginStyles = styled.div`
    @media (max-width: 319px){
        display: flex;
        flex-direction: column-reverse;
        width: 100%;
    }
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
    }
    @media (min-width: 1025px) and (max-width: 1200px){
        /* width: 100%; */
        display: flex;
        justify-content: center;
        align-items: center;
        flex-basis: 100%;
        /* flex-wrap: nowrap; */
    }
    @media (min-width: 1201px){
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        /* height: 100%; */
    }
`;


const ResetPassword = () => {
    return (
        <Page>
            <LoginStyles>
                <div>
                    <ResetForm />
                </div>
            </LoginStyles>
        </Page>
    )
}
export default ResetPassword;
