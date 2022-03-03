import React from 'react';
import NBLogo from '../images/NB-logo.svg';
import GTBLogo from '../images/GTB-logo.svg';
import RiteLogo from '../images/Rite-logo.svg';
import HeinekenLogo from '../images/Heineken.svg';
import styled from 'styled-components';


const FooterStyles = styled.footer`
    @media (max-width: 319px){
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        padding-top: 25px;
        padding-bottom: 12px;
        p{
            margin: 0 auto;
        }
        .logos{
            display: flex;
            justify-content: space-between;
        }
        img{
            max-width: 100%;
        }
    }
    @media (min-width: 320px) and (max-width: 480px){
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-top: 25px;
        padding-bottom: 12px;
    }
    @media (min-width: 481px) and (max-width: 720px){
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-top: 25px;
        padding-bottom: 12px;
    }
    @media (min-width: 721px) and (max-width: 1024px){
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-top: 25px;
        padding-bottom: 12px;
    }
    @media (min-width: 1025px) and (max-width: 1200px){
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-top: 25px;
        padding-bottom: 12px;
    }
    @media (min-width: 1201px){
        /* width: 100%; */
        display: flex;
        flex-direction: column;
        padding-top: 106px;
        padding-bottom: 12px;
        /* width: 720px; */
    
    }
    @media (min-width: 320px) and (max-width: 480px){
        p{
        border-bottom: 1px solid #7F92A4;
        color: #7F92A4;
        font-size: 12px;
        opacity: 80%;
        font-family: "Graphik";
        font-weight: 400;
        padding-bottom: 15px;
        text-align: center;
        }
    }
    @media (min-width: 481px) and (max-width: 720px){
        p{
        border-bottom: 1px solid #7F92A4;
        color: #7F92A4;
        font-size: 12px;
        opacity: 80%;
        font-family: "Graphik";
        font-weight: 400;
        padding-bottom: 15px;
        text-align: center;
        }
    }
    @media (min-width: 721px) and (max-width: 1024px){
        p{
        border-bottom: 1px solid #7F92A4;
        color: #7F92A4;
        font-size: 12px;
        opacity: 80%;
        font-family: "Graphik";
        font-weight: 400;
        padding-bottom: 15px;
        text-align: center;
        }
    }
    @media (min-width: 1025px) and (max-width: 1200px){
        p{
        border-bottom: 1px solid #7F92A4;
        color: #7F92A4;
        font-size: 12px;
        opacity: 80%;
        font-family: "Graphik";
        font-weight: 400;
        padding-bottom: 15px;
        text-align: center;
        }
    }
    @media (min-width: 1201px){
        p{
            border-bottom: 1px solid #7F92A4;
            color: #7F92A4;
            font-size: 12px;
            opacity: 80%;
            font-family: "Graphik";
            font-weight: 400;
            padding-bottom: 15px;
            text-align: center;
        }
    }
    @media (min-width: 320px) and (max-width: 480px){
        .logos{
            width: 90%;
            display: flex;
            justify-content: space-between;
            margin: 0 auto;
            padding-top: 16px;
        }
        /* 
        checkout the Rite logo from the design
         */
    }
    @media (min-width: 481px) and (max-width: 720px){
        .logos{
            width: 90%;
            display: flex;
            margin: 0 auto;
            justify-content: space-between;
            padding-top: 16px;
        }
    }
    @media (min-width: 721px) and (max-width: 1024px){
        .logos{
            display: flex;
            justify-content: space-between;
            margin: 0 auto;
            padding-top: 16px;
            width: 90%;
        }
    }
    @media (min-width: 1025px) and (max-width: 1200px){
        .logos{
            display: flex;
            justify-content: space-between;
            width: 476px;
            margin: 0 auto;
            padding-top: 16px;
        }
    }
    @media (min-width: 1201px){
        .logos{
            display: flex;
            justify-content: space-between;
            width: 476px;
            margin: 0 auto;
            padding-top: 16px;
        }
    }
`;

const Footer = () => {
    return (
        <FooterStyles>
            <p>Trusted by your favourite brands</p>
            <div className='logos'>
                <img src={NBLogo} alt="Nigeria Brewery logo" />
                <img src={GTBLogo} alt="GTB logo" />
                <img src={RiteLogo} alt="Rite logo" />
                <img src={HeinekenLogo} alt="Heineken logo" />
            </div>
        </FooterStyles>
    )
}

export default Footer
