import styled from 'styled-components';

export const Wrapper = styled.div`
    /* display: flex;
    flex-direction: column;
    align-items: flex-start; */
    margin-top: 42px;
    height: 222px;
    width: 100%;
    max-width: var(--maxWidth);
`;

export const Content = styled.div`
    
    button{
        display: flex;
        align-items: center;
        text-align: left;
        width: 1250px;
        padding: 14px 27px;
        border: none;
        cursor: pointer;
        font-family: "Mulish", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
        color: #4F4F4F;
        background: var(--white);
        &:hover{
            background: rgba(239, 239, 239, 0.5);
        }
        .roomIcon{
            margin-right: 10px;
        }
    }
`;