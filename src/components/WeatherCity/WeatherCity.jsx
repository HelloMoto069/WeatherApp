import { useEffect, useState, useContext } from 'react';
import { createPortal } from 'react-dom';
import { SearchBar } from '../Searchbar/Searchbar';
import {
  WeatherBar,
  BlockBtn,
  Title,
  ListBtn,
  CloseBtn,
} from './WeatherCity.styled';
import { WeatherList } from '../WeatherList/WeatherList';
import {
  apiServiceSearchData,
  apiServiceForecastData,
  // apiServiceWeatherMaps,
} from '../../Api/apiService';
import { Loader } from '../Loader/Loader';

import { WeatherCityClose, CorrectListImg } from '../../icons/IconComponent';
import { HomePageContext } from '../../pages/Homepage';

export const WeatherCity = ({
  weather,
  forecastCities,
  setForecastCities,
  isOpen,
  setIsOpen,
}) => {
  const [searchCity, setSearchCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(-100);
  const [onCloseBtn, setOnCloseBtn] = useState(false);
  const [cityId, setCityId] = useState(0);

  const { weatherCities, setWeatherCities } = useContext(HomePageContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mobilePortal = document.getElementById('mobile-portal');

  useEffect(() => {
    if (isOpen) {
      return setOffset(0);
    }
  }, [isOpen]);

  useEffect(() => {
    if (searchCity.trim() === '') {
      return;
    }
    const LoweredCase = searchCity.toLowerCase().trim();
    const weatherCity = weatherCities.some(
      city => city.name.toLowerCase().trim() === LoweredCase
    );

    if (weatherCity) {
      alert(`${searchCity} is already in contacts`);
      return;
    }

    setIsLoading(true);

    apiServiceSearchData(searchCity)
      .then(data => {
        setWeatherCities([...weatherCities, { ...data }]);

        const { lat, lon } = data.coord;

        apiServiceForecastData(lat, lon)
          .then(forecast =>
            setForecastCities([...forecastCities, { ...forecast }])
          )
          .catch(error => console.error(error));
      })
      .catch(() => alert('City not found'))
      .finally(() => setIsLoading(false));
  }, [searchCity]);

  localStorage.setItem('weatherCities', JSON.stringify(weatherCities));
  localStorage.setItem('forecastCities', JSON.stringify(forecastCities));

  const onDeleteCard = cityId => {
    setCityId(cityId);

    setWeatherCities(weatherCities.filter(({ id }) => id !== cityId));
    setForecastCities(forecastCities.filter(({ city }) => city.id !== cityId));
  };

  const content = (
    <WeatherBar dataOffset={offset}>
      <BlockBtn>
        <ListBtn
          type="button"
          aria-label="list"
          title="List"
          onClick={() => {
            setOnCloseBtn(!onCloseBtn);
          }}
        >
          <CorrectListImg />
        </ListBtn>
        <CloseBtn
          type="button"
          aria-label="close"
          title="Close"
          onClick={() => {
            setOffset(-100);
            setIsOpen(!isOpen);
          }}
        >
          <WeatherCityClose />
        </CloseBtn>
      </BlockBtn>
      <Title>Weather</Title>
      <SearchBar setSearchCity={setSearchCity} weather={weather} />
      <WeatherList onCloseBtn={onCloseBtn} onDeleteCard={onDeleteCard} />
      {isLoading && <Loader />}
    </WeatherBar>
  );

  if (windowWidth <= 767 && mobilePortal) {
    return createPortal(content, mobilePortal);
  }

  return content;
};
