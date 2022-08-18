import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  name: "",
  temperature: "",
  cloud: "",
  humidity: "",
  wind: "",
  rain: ""
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_WEATHER_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default weatherReducer;
