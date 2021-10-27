import React from "react";

import { Wrapper, Content, Header} from './Grid.styles';

const Stays = ({ header, number, children }) => (
    <Wrapper>
        <Header>
            <h1>{header}</h1>
            <p>{number} Stays</p>
        </Header>
        <Content>{children}</Content>
    </Wrapper>
);

export default Stays;