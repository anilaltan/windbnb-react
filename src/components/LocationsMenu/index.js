import React from "react";
import RoomIcon from '@mui/icons-material/Room';
import { Wrapper, Content } from "./LocationsMenu.styles";

const LocationsMenu = ({cities, pickCity}) => {

    return(
        <Wrapper>
            {cities && [...cities].map((city, index) => {
                return(
                    <Content key={index} onClick={() => pickCity(city)}>
                        <button><RoomIcon className="roomIcon"/>{city}, Finland</button>
                    </Content>
                );
            })}
        </Wrapper>
    );
};

export default LocationsMenu;