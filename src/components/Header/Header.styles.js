import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: var(--maxWidth);
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 0;
    margin-block: 40px 83px;
    @media screen and (max-width: 600px){
        margin-block: 22px 37px;
    }
`;

export const BnbLogoButton = styled.button`
    background-color: transparent;
    cursor: pointer;
    border: none;
    padding: 0;
`;

export const LocationButton = styled.button`
    font-family: "Mulish", sans-serif;
    min-width: 80px;
    height: 55px;
    background: var(--white);
    border: none;
    border-radius: 16px 0 0 16px;
    color: var(--lightGrey);
    cursor: pointer;
    &:hover{
        background: rgba(239, 239, 239, 0.5);
    }
    .location{
        color: var(--black);
        font-family: "Mulish", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
        padding: 0 16px;
    }
`;

export const GuestButton = styled.button`
    font-family: "Mulish", sans-serif;
    border: none;
    min-width: 106px;
    height: 55px;
    color: var(--lightGrey);
    background: var(--white);
    cursor: pointer;
    &:hover{
        background: rgba(239, 239, 239, 0.5);
    }
    .numGuests{
        color: var(--black);
        font-family: "Mulish", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
    }
`;

export const SearchButton = styled.div`
    position: relative;
    cursor: pointer;
    height: 55px;
    width: 53px;
    border-radius: 0 16px 16px 0;
    img {
        position: absolute;
        top: 18px;
        left: 18px;
        width: 20px;
        height: 20px;
    }
    &:hover{
        background: rgba(239, 239, 239, 0.5);
    }
`;

export const NavBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    background: var(--white);
    border-radius: 16px;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
`;