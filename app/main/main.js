import React, { useState } from 'react';
import { TextInput, Button } from 'react-native-paper';
import { Item } from './item';

export const Main = () => {
  const date = new Date();
  const [state, setState] = useState({
    text: '',
    name: '',
    picture: '',
    title: '',
    temp: '',
    sunrise: '',
    sunset: '',
    pressure: '',
    icon: '',
    date: '',
    time: '',
    error: '',
  });

  const sendRequest = async name => {
    try {
      const apiKey = 'appid=601099ce5e97a2c3d3163cf10dbfd3f4';
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${name}&${apiKey}`;

      fetch(url)
        .then(response => response.json())
        .then(async data => {
          const { main, weather, sys } = data;
          let newIcon;
          console.log(weather[0]);
          switch (weather[0].id) {
            case 803:
              newIcon = 'weather-partly-cloudy';
              break;
            case 802:
              newIcon = 'weather-cloudy';
              break;
            case 801:
              newIcon = 'folder';
              break;
            case 800:
              newIcon = 'weather-sunny';
              break;
            case 520:
              newIcon = 'weather-pouring';
              break;
            default:
              newIcon = undefined;
              break;
          }

          setState({
            ...state,
            pressure: main.pressure,
            temp: (Number(main.temp) - 273.15).toFixed(2),
            title: weather[0].description,
            sunset: new Date(sys.sunset).toLocaleTimeString(),
            sunrise: new Date(sys.sunrise).toLocaleTimeString(),
            date: date.toLocaleDateString(),
            time: date.toLocaleTimeString(),
            icon: newIcon,
            city: name,
          });
        });
    } catch (e) {
      setState({
        ...state,
        error: 'Invalid input',
      });
    }
  };

  return (
    <>
      <TextInput
        label="Pick a city"
        placeholder="City"
        value={state.text}
        onChangeText={text => setState({ ...state, text })}
        error={state.error}
      />
      <Button
        onPress={() => sendRequest(state.text)}
        mode="outlined"
        color="#4d2c91">
        Search
      </Button>
      <Item
        city={state.city}
        title={state.title}
        temperature={state.temp}
        sunrise={state.sunrise}
        sunset={state.sunset}
        pressure={state.pressure}
        date={state.date}
        time={state.time}
        icon={state.icon}
      />
    </>
  );
};
