import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 395px;
`;

export const Image = styled.img`
    width: 100%;
    object-fit: cover;
    max-width: 395px;
    height: 269px;
    border-radius: 24px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    padding-inline: 0;
`;

export const SuperHostImg = styled.div`
    width: fit-content;
    height: 28px;
    border: 1px solid #4F4F4F;
    padding: 7px 9px;
    margin-right: 11px;
    box-sizing: border-box;
    border-radius: 12px;
    text-align: center;

    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    text-transform: uppercase;
    color: #4F4F4F;
`;

export const Type = styled.div`
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #828282;
    margin-right: auto;
`;

export const Rating = styled.div`
    display: flex;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #4F4F4F;

    .icon{
        color: #EB5757;
        margin: 3px;
    }
`;

export const Title = styled.span`
    text-overflow: ellipsis;
    width: 80%;
    float: left;
    white-space: nowrap;
    overflow: hidden;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #333333;
`;