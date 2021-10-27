import React, { useState } from "react";
import LocationsMenu from '../LocationsMenu';
import GuestsMenu from '../GuestsMenu';
import { Divider, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Wrapper, NavBox, LocationButton, GuestButton, SearchButton, PhoneSearchButton } from "./DrawerFilter.styles";

const DrawerFilter = ({
    cities,
    location,
    toggleDrawer,
    changeCity,
    menu,
    adults,
    children,
    changeAdultsNum,
    changeChildrenNum,
    getFilteredData}) => {

    const [pickedLocation, setPickedLocation] = useState(location);
    const [pickedMenu, setPickedMenu] = useState(menu);
      
    const [numAdults, setNumAdults] = useState(adults);
    const [numChildren, setNumChildren] = useState(children);

    return(
        <Wrapper>
            {/* <button onClick={() => toggleDrawer(false)}></button> */}
            <NavBox>
                <LocationButton onClick={() => setPickedMenu("locationMenu")}>
                    <p>LOCATION</p>
                    {pickedLocation ? <p className="location">{pickedLocation}, Finland</p> : "Add City"}
                </LocationButton>
                <Divider orientation="vertical" flexItem />
                <GuestButton onClick={() => setPickedMenu("guestsMenu")}>
                    <p>GUESTS</p>
                    {numAdults === 0 && numChildren === 0
                    ? "Add guests"
                    : <p className="numGuests">{numAdults + numChildren} guests</p>}
                </GuestButton>
                <Divider orientation="vertical" flexItem />
                <SearchButton>
                    <button onClick={() => {
                    toggleDrawer(false);
                    changeCity(pickedLocation);
                    changeAdultsNum(numAdults);
                    changeChildrenNum(numChildren);
                    getFilteredData(numAdults, numChildren, pickedLocation);}}><SearchIcon className="searchIcon"/>Search</button>
                </SearchButton>
            </NavBox>
            {pickedMenu === "locationMenu" ? (
                <LocationsMenu cities={cities} pickCity={(city) => setPickedLocation(city)}/>
            ) : (
                <GuestsMenu 
                    adults={numAdults}
                    children={numChildren}
                    changeAdults={(num) => setNumAdults(num)}
                    changeChildren={(num) => setNumChildren(num)}/>
            )}

                <PhoneSearchButton>
                    <Button className="phoneSearchBtn"
                        onClick={() => {
                            toggleDrawer(false);
                            changeCity(pickedLocation);
                            changeAdultsNum(numAdults);
                            changeChildrenNum(numChildren);
                            getFilteredData(numAdults, numChildren, pickedLocation);
                        }}
                            variant="contained"
                            sx={{
                                boxShadow: 0,
                            }}
                            startIcon={<SearchIcon />}>
                        Search
                    </Button>
                </PhoneSearchButton>
        </Wrapper>
    );
};

export default DrawerFilter;