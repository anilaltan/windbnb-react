import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: var(--maxWidth);
`;

export const Content = styled.div`
    width: 33.33%;
    margin-top: 45px;
    padding-left: 26px;
    box-sizing: border-box;
    p{
        display: flex;
        flex-direction: column;
        font-family: "Mulish", sans-serif;
        font-weight: 400;
        font-size: 14px;
        color: #bdbdbd;
        strong{
            color: var(--black);
            font-weight: 700;
        }
    }
    @media screen and (max-width: 600px){
        width: 100%;
    }
`;

export const Box = styled.div`
    display: flex;
    align-items: center;
    column-gap: 15px;
    margin-top: 12px;
    button{
        width: fit-content;
        min-width: 0;
        padding: 0;
        height: 23px;
        width: 23px;
        border: 1px solid #828282;
        box-sizing: border-box;
        border-radius: 4px;
        cursor: pointer;
        background: var(--white);
        .icon{
            color: #828282;
            font-size: 20px;
            padding: 1px;
            &:hover{
                color: var(--black);
            }
        }
    }
`;