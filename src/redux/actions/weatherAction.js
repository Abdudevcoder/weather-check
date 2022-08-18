import { ActionTypes } from "../constants/actionTypes";

export const SetWeatherData = (data) => {
  return {
    type: ActionTypes.SET_WEATHER_DATA,
    payload: data,
  };
};
