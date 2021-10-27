import React, { useState, useEffect } from "react";
import { Wrapper, Content, Box } from "./GuestsMenu.styles";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const GuestsMenu = ({ changeAdults, changeChildren, adults, children}) => {
    const [numAdults, setNumAdults] = useState(adults);
    const [numChildren, setNumChildren] = useState(children);

    useEffect(() => {
        changeAdults(numAdults);
        changeChildren(numChildren);
      }, [numChildren, numAdults, changeAdults, changeChildren]);

    return(
        <Wrapper>
            <Content>
                <p><strong>Adults</strong> Ages 13 or above</p>
                <Box>
                    <button onClick={() => numAdults > 0 && setNumAdults(numAdults - 1)}><RemoveIcon className="icon"/></button>
                    <span>{numAdults}</span>
                    <button onClick={() => setNumAdults(numAdults + 1)}><AddIcon className="icon"/></button>
                </Box>
            </Content>
            <Content>
                <p><strong>Children</strong> Ages 2-12</p>
                <Box>
                    <button onClick={() => numChildren > 0 && setNumChildren(numChildren - 1)}><RemoveIcon className="icon"/></button>
                    <span>{numChildren}</span>
                    <button onClick={() => setNumChildren(numChildren + 1)}><AddIcon className="icon"/></button>
                </Box>
            </Content>
        </Wrapper>
    );
};

export default GuestsMenu;