import { useState, useEffect } from "react";
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import BnbLogo from '../../images/logo.png';
import SearchImg from '../../images/icons8-search.svg';
import FilterDrawer from "../DrawerFilter";
import stays from "../../data/stays.json";

import { Wrapper, Content, BnbLogoButton, LocationButton, GuestButton, SearchButton, NavBox } from './Header.styles';


const Header = ({ place, getFilteredData, showAll }) => {
    const [drawer, setDrawer] = useState(false);
    const [cities, setCities] = useState([]);
    const [location, setLocation] = useState(place);
    const [menu, setMenu] = useState(null);

    const [numAdults, setNumAdults] = useState(0);
    const [numChildren, setNumChildren] = useState(0);

    const toggleDrawer = (open) => (event) => {
        setDrawer(open);
    };

    const openAndSetMenu = (menuVal) => {
        setMenu(menuVal);
        setDrawer(true);
    };

    useEffect(() => {
        setCities(new Set(stays.map((item) => item.city)));
    }, [])
    return(
        <>
            <Wrapper>
                <Content>
                        <BnbLogoButton onClick={() => {
                            setLocation(null);
                            setNumAdults(0);
                            setNumChildren(0);
                            showAll();}}><img src={BnbLogo} alt='bnb-logo' /></BnbLogoButton>
                    <NavBox>
                        <LocationButton type='button' onClick={() => openAndSetMenu("locationMenu")}>
                            {location ? <p className="location">{location}, Finland</p> : "Add city"}
                        </LocationButton>
                        <Divider orientation="vertical" flexItem />
                        <GuestButton type='button' onClick={() => openAndSetMenu("guestsMenu")}>
                            {numChildren === 0 && numAdults === 0
                                ? "Add guests"
                                : <p className="numGuests">{numAdults + numChildren} guests</p>}
                        </GuestButton>
                        <Divider orientation="vertical" flexItem />
                        <SearchButton onClick={toggleDrawer(true)}>
                            <img src={SearchImg} alt='search-icon' />
                        </SearchButton>
                    </NavBox>
                </Content>
            </Wrapper>
            <Drawer
                anchor={"top"}
                open={drawer}
                onClose={toggleDrawer(false)}
                sx={{
                    marginBlock: 5,
                    boxShadow: 0,
                    height: 460,
                  }}>   
                    <FilterDrawer
                        cities={cities}
                        toggleDrawer={(val) => {
                        setDrawer(val);
                        }}
                        changeCity={(val) => {
                        setLocation(val);
                        }}
                        location={location}
                        menu={menu}
                        adults={numAdults}
                        children={numChildren}
                        changeAdultsNum={(num) => setNumAdults(num)}
                        changeChildrenNum={(num) => setNumChildren(num)}
                        getFilteredData={(numAdults, numChildren, pickedLocation) =>
                            getFilteredData(numAdults, numChildren, pickedLocation)
                          }/>     
            </Drawer>
        </>
    );
};

export default Header;
