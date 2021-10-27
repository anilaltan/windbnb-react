import styled from 'styled-components';

export const Wrapper = styled.div`
    /* max-width: var(--maxWidth); */
    margin: 93px 70px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 600px){
        margin: 18px 24px;
    }
`;

export const NavBox = styled.div`
    display: flex;
    width: 100%;
    max-width: var(--maxWidth);
    background: var(--white);
    border-radius: 16px;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    @media screen and (max-width: 600px){
        flex-direction: column;
        align-items: flex-start;
    } 
`;

export const LocationButton = styled.button`
    font-family: "Mulish", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 27px;
    width: 33%;
    height: 55px;
    border: none;
    background: var(--white);
    color: var(--lightGrey);
    cursor: pointer;
    border-radius: 16px 0 0 16px;
    &:hover{
        background: rgba(239, 239, 239, 0.5);
    }
    &:focus{
        border: 1px solid var(--black);
        box-sizing: border-box;
        filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.1));
        border-radius: 16px;
    }
    P{
        color: var(--black);
        font-family: "Mulish", sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 9px;
        line-height: 11px;
        text-transform: uppercase;
    }
    .location{
        position: absolute;
        color: var(--black);
        font-family: "Mulish", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
        padding-top: 13px;
    }
    @media screen and (max-width: 600px){
        width: 100%;
    }
`;

export const GuestButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 27px;
    font-family: "Mulish", sans-serif;
    width: 33%;
    height: 55px;
    color: var(--lightGrey);
    background: var(--white);
    cursor: pointer;
    border: none;
    &:hover{
        background: rgba(239, 239, 239, 0.5);
    }
    &:focus{
        border: 1px solid var(--black);
        box-sizing: border-box;
        filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.1));
        border-radius: 16px;
    }
    p{
        color: var(--black);
        font-family: "Mulish", sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 9px;
        line-height: 11px;
        text-transform: uppercase;
    }
    .numGuests{
        position: absolute;
        color: var(--black);
        font-family: "Mulish", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
        padding-top: 13px;
    }
    @media screen and (max-width: 600px){
        width: 100%;
    }
`;

export const SearchButton = styled.div`
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    .searchIcon{
        height: 17px;
        width: 17px;
        top: 15px;
    }

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        cursor: pointer;
        color: white;
        padding: 16px 27px;
        margin-left: 50%;
        border: none;
        width: 127px;
        height: 48px;
        background: rgb(235, 87, 87);
        box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
        border-radius: 16px;
        transform: translateX(-50%);
        &:hover{
        background: rgba(235, 87, 87, 0.5);
        }
    }
    @media screen and (max-width: 600px){
        display: none;
    } 
`;

export const PhoneSearchButton = styled.div`
    display: flex;
    margin-top: 12px;
    justify-content: center;

    .phoneSearchBtn{
        padding: 15px 25px;
        border-radius: 16px;
        background: rgb(235, 87, 87);
    }

    @media screen and (min-width: 600px){
        display: none;
    }
`;