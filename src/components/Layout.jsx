import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';

const LayoutStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 50%);
    min-height: 100vh;
`;

const DivOne = styled.div`
    background-color: #F8F9FD;
;
`;

const DivTwo = styled.div`
    background-color: #ffffff;
`;


const Layout = ({children}) => {
    return (
        <LayoutStyles>
            <DivOne>
                
                <Footer />
            </DivOne>
            <DivTwo>
                {children}
            </DivTwo>
        </LayoutStyles>
    )
}

export default Layout
