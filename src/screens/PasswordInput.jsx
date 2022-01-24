import React from 'react';
import styled from 'styled-components';
import Easy from '../components/Easy';
import Footer from '../components/Footer';
import PasswordDetails from '../components/PasswordDetails';

const PasswordInputStyles = styled.div`
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

const PasswordInput = () => {
    return (
        <PasswordInputStyles>
        <DivOne>
            <Easy />
            <Footer />
        </DivOne>
        <DivTwo>
            <PasswordDetails name="example@xyz.com"/>
        </DivTwo>
    </PasswordInputStyles>
    )
}
export default PasswordInput;
