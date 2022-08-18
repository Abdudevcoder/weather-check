import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import regionReducer from "./regionReducer";
import weatherReducer from "./weatherReducer";

const regionPersistConfig = {
  key: "region",
  storage
};

const weatherPersistConfig = {
  key: "weather",
  storage
};

const rootReducer = combineReducers({
  regions: persistReducer(regionPersistConfig, regionReducer),
  weatherData: persistReducer(weatherPersistConfig, weatherReducer),
});

export default rootReducer;
