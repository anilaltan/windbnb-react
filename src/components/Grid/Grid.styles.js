import styled from 'styled-components';

export const Wrapper = styled.div`
    /* max-width: var(--maxWidth);
    margin: 0 auto; */
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
        display: inline;
        color: var(--black);
        font-family: "Montserrat", sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
    }
    p{
        display: inline;
        align-self: right;
        font-family: "Montserrat", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #4F4F4F;
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(395px, 1fr));
    grid-gap: 2rem;
    @media screen and (max-width: 1250px){
        grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
    }
`;