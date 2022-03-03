import React from 'react';
import Easy from '../components/Easy';
import Footer from '../components/Footer';
import styled from 'styled-components';

const SectionStyles = styled.section`
    .section__left{
            background-color: #F8F9FD;
        }
    .section__right{
        background-color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media (max-width: 319px){
       .section__left{
           display: none;
       }
       .section__right{
           width: 80%;
           margin: 0 auto;
           display: flex;
           justify-content: center;
       }
    }
    @media (min-width: 320px) and (max-width: 480px){
        display: flex;
        flex-direction: column-reverse;
        .section__left{
            display: none;
        }
    }
    @media (min-width: 481px) and (max-width: 720px){
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        flex-wrap: wrap;
        height: 100%;
    }
    @media (min-width: 721px) and (max-width: 1024px){
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        height: 100%;
    }
    @media (min-width: 1025px) and (max-width: 1200px){
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 50%);
    }
    @media (min-width: 1201px){
        display: grid;
        grid-template-columns: 720px 1fr;
        margin: 0 auto;
        /* height: 100vh;  */
    }
`;

const Page = ({children}) => {
    return (
        
        <SectionStyles>
                <div className='section__left'>
                    <Easy />
                    <Footer />
                </div>
                <div className='section__right'>
                    {children}
                </div>
        </SectionStyles>
    );
   
};

export default Page;