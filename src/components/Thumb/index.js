import React from "react";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Image, SuperHostImg, Type, Rating, Title, Wrapper, Content } from './Thumb.styles';

const Thumb = ({ image, superHost, type, beds,rating, title}) => (
    <div>
        {superHost ? (
            <Wrapper>
                <Image src={image} alt='apartment photo'/>
                <Content>
                    <SuperHostImg>super host</SuperHostImg>
                    <Type>{type}{beds && `. ${beds} ${beds > 1 ? "beds" : "bed"}`}</Type>
                    <Rating><StarRateRoundedIcon className="icon"/>{rating}</Rating>
                </Content>
                <Title>{title}</Title>
            </Wrapper>
        ) : (
            <Wrapper>
                <Image src={image} alt='apartment photo'/>
                <Content>
                    <Type>{type}{beds && `. ${beds} ${beds > 1 ? "beds" : "bed"}`}</Type>
                    <Rating><StarRateRoundedIcon className="icon"/>{rating}</Rating>
                </Content>
                <Title>{title}</Title>
            </Wrapper>
        )}
    </div>
);

export default Thumb;
