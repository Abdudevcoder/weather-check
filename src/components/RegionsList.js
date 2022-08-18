import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { SetWeatherData } from "../redux/actions/weatherAction";

import {
  apiBase,
  apiKey
} from "../service";

const RegionsList = () => {
  const regions = useSelector(state => state.regions);
  const keys = Object.keys(regions);
  keys.pop();
  const dispatch = useDispatch();

  const getData = region => {
    axios({
      method: "get",
      url: apiBase,
      params: {
        lat: region.lat,
        lon: region.lon,
        appid: apiKey
      }
    }).then((response) => {
      const responseData = response.data;
      const data = {
        name: region.name,
        temperature: responseData.main.temp - 273.15,
        cloud: responseData.clouds.all,
        humidity: responseData.main.humidity,
        wind: responseData.wind.speed,
        rain: responseData.rain ? responseData.rain['1h'] : 0
      };
      dispatch(SetWeatherData(data));
    });
  };

  return (
    <div>
      {keys.map((key) => {
        const region = regions[key];
        return (
          <div key={region.id} className="region">
            <h3>{region.name}</h3>
            <button onClick={() => getData(region)}>Show</button>
          </div>
        )
      })}
    </div>
  )
};

export default RegionsList;
