import styled from 'styled-components';

export const Wrapper = styled.div`
 background: var(--DarkGrey);
 padding: 0 20px; 
`;

export const Content = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 max-width: var(--maxWidth);
 padding: 25px 0;
 margin: 0 auto;
`;

export const LogoImg = styled.img`
 width: 200px;

 @media screen and (max-width: 500px) {
    width: 160px;
 }
`;


export const TMDBLogoImg = styled.img`
 width: 100px;

 @media screen and (max-Width: 500px) {
    width: 80px;
 }

`;