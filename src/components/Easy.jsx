import React from 'react';
import styled from 'styled-components';
import Image from '../images/Cards.svg';

const EasyStyles = styled.div`
   width: 458px;
   height: 559px;
   margin: 0 auto;
    @media (max-width: 319px){
        .image-wrapper{
            width: 100%;
            text-align: center;
            display: block;
            padding-top: 80px;
        }
        img{
            max-width: 100%;
            margin: 0 auto;
            width: 80%;
        }
        .texts{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-top: 30px;
        }
        h3{
        color: #073763;
        font-size: 16px;
        font-weight: 500;
        font-family: "Graphik";
        text-align: center;
        padding: 0 25px;
        line-height: 24px;
        }
        .crm-text{
        font-size: 16px;
        text-align: center;
        color: #43536A;
        line-height: 26px;
        font-weight: 400;
        font-family: "Graphik";
        padding-top: 16px;
        }
    }
    @media (min-width: 320px) and (max-width: 480px){
        .image-wrapper{
            width: 100%;
            text-align: center;
            display: block;
            padding-top: 80px;
        }
        img{
            max-width: 100%;
            margin: 0 auto;
            width: 80%;
        }
    }
    @media (min-width: 481px) and (max-width: 720px){
        .image-wrapper{
            width: 100%;
            text-align: center;
            display: block;
            padding-top: 70px;
        }
        img{
            max-width: 100%;
            margin: 0 auto;
            width: 80%;
        }
    }
    @media (min-width: 721px) and (max-width: 1024px){
        .image-wrapper{
            width: 100%;
            text-align: center;
            padding-top: 80px;
        }
        img{
            max-width: 90%;
        }
    }
    @media (min-width: 1025px) and (max-width: 1200px){
        .image-wrapper{
            width: 100%;
            text-align: center;
        }
    }
    @media (min-width: 1201px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 125px;
        .image-wrapper{
            display: block;
            text-align: center;
            padding-bottom: 32px;
        }
    }

    @media (min-width: 320px) and (max-width: 480px){
        .texts{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-top: 30px;
        }
    }
    @media (min-width: 481px) and (max-width: 720px){
        .texts{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        }
    }    
    @media (min-width: 721px) and (max-width: 1024px){
        .texts{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        }
    }
    @media (min-width: 1025px) and (max-width: 1200px){
        .texts{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }
    @media (min-width: 1201px){
        .texts{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin: 0 auto;
        }
    }
    @media (min-width: 320px) and (max-width: 480px){
        h3{
        color: #073763;
        font-size: 16px;
        font-weight: 500;
        font-family: "Graphik";
        text-align: center;
        line-height: 24px;
        padding: 0 20px;
        }
    }
    @media (min-width: 481px) and (max-width: 720px){
        h3{
        color: #073763;
        font-size: 16px;
        font-weight: 500;
        font-family: "Graphik";
        text-align: center;
        padding: 0 40px;
        line-height: 24px;
        }
    }
    @media (min-width: 721px) and (max-width: 1024px){
        h3{
        color: #073763;
        font-size: 16px;
        font-weight: 500;
        font-family: "Graphik";
        text-align: center;
        padding: 0 40px;
        line-height: 24px;
        }
    }
    @media (min-width: 1025px) and (max-width: 1200px){
        h3{
        color: #073763;
        font-size: 16px;
        font-weight: 500;
        font-family: "Graphik";
        text-align: center;
        padding: 0 40px;
        line-height: 24px;
        }
    }
    @media (min-width: 1201px){
        h3{
            color: #073763;
            font-size: 16px;
            font-weight: 500;
            font-family: "Graphik";
            text-align: center;
            padding: 0 120px;
        }
    }
    @media (max-width: 319px){
        .crm-text{
        font-size: 16px;
        text-align: center;
        color: #43536A;
        line-height: 26px;
        font-weight: 400;
        font-family: "Graphik";
        padding-top: 16px;
        padding-left: 30px;
        padding-right: 30px;
        }
    }
    @media (min-width: 320px) and (max-width: 480px){
        .crm-text{
        font-size: 16px;
        text-align: center;
        color: #43536A;
        line-height: 26px;
        font-weight: 400;
        font-family: "Graphik";
        padding-top: 16px;
        padding-left: 30px;
        padding-right: 30px;
        }
    }
    @media (min-width: 481px) and (max-width: 720px){
        .crm-text{
        font-size: 16px;
        text-align: center;
        color: #43536A;
        line-height: 26px;
        font-weight: 400;
        font-family: "Graphik";
        padding-top: 16px;
        padding-left: 30px;
        padding-right: 30px;
        }
    }
    @media (min-width: 721px) and (max-width: 1024px){
        .crm-text{
        font-size: 16px;
        text-align: center;
        color: #43536A;
        line-height: 26px;
        font-weight: 400;
        font-family: "Graphik";
        padding-top: 16px;
        padding-left: 30px;
        padding-right: 30px;
        }
    }
    @media (min-width: 1025px) and (max-width: 1200px){
        .crm-text{
        font-size: 16px;
        text-align: center;
        color: #43536A;
        line-height: 26px;
        font-weight: 400;
        font-family: "Graphik";
        padding-top: 16px;
        padding-left: 30px;
        padding-right: 30px;
        }
    }
    @media (min-width: 1201px){
        .crm-text{
        font-size: 16px;
        text-align: center;
        color: #43536A;
        line-height: 26px;
        font-weight: 400;
        font-family: "Graphik";
        padding-top: 16px;
    }
}
    
`;


const Easy = () => {
  return (
    <EasyStyles>
        <div className="image-wrapper">
            <img src={Image} alt="" />
        </div>
        <div className='texts'>
            <h3>Easy and efficient way to send your goods</h3>
            <p className='crm-text'>Reward Engine will adjust the configuration of your CRM as well as maintain the data integrity. Getting the right data is no longer a problem.</p>
        </div>
    </EasyStyles>
  );
};

export default Easy;
