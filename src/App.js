import React from 'react';
import { useState, useEffect } from 'react';

import './App.css';

import Header from './components/Header';
import Grid from './components/Grid';
import Thumb from './components/Thumb';
import { GlobalStyle } from './GlobalStyle';
import stays from "./data/stays.json";

const App = () => {
  const [location, setLocation] = useState(null);
  const [items, setItems] = useState([]);

  const changeCity = (city) => {
    setLocation(city);
  };

  const getAllProperties = () => {
    setLocation(null);
    setItems(stays);
  };

  useEffect(() => {
    getAllProperties();
  }, []);

  const getFilteredData = (children, adults, city) => {
    const totalGuests = children + adults;

    if (totalGuests === 0) {
      setItems(stays.filter((property) => property.city === city));
    }

    if (totalGuests !== 0) {
      if (!city)
        setItems(
          stays.filter((property) => property.maxGuests === totalGuests)
        );
      else {
        setItems(
          stays.filter(
            (property) =>
              property.maxGuests === totalGuests && property.city === city
          )
        );
      }
    }

    if (totalGuests === 0 && city === null) getAllProperties();
  };

  return(
    <>
      <Header 
        place={location}
        changeCity={(val) => changeCity(val)}
        getFilteredData={(children, adults, city) =>
          getFilteredData(children, adults, city)
        }
        showAll={() => getAllProperties()}
      />
      <Grid header={"Stays in Finland"} number={items.length}>
              {items.map((item) => (
                <Thumb 
                    key={item.title}
                    image={item.photo}
                    superHost={item.superHost}
                    type={item.type}
                    beds={item.beds}
                    rating={item.rating}
                    title={item.title}
                />))}
        </Grid>
      <GlobalStyle />
      <p className="footer">Created by <a href="https://github.com/anilaltan" className="dev">Anıl Altan</a> - <a href="https://devchallenges.io/" className="dev">devChallenges.io</a></p>
    </>
  )
};

export default App;
