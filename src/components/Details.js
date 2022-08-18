import { useSelector } from "react-redux";

const Details = () => {
  const weatherData = useSelector(state => state.weatherData);

  return (
    <div className="details">
      <h2>Details</h2>
      <h3>{weatherData.name}</h3>
      <p>Temperature: {weatherData.temperature}</p>
      <p>Cloud: {weatherData.cloud}</p>
      <p>Humidity: {weatherData.humidity}</p>
      <p>Wind: {weatherData.wind}</p>
      <p>Rain: {weatherData.rain}</p>
    </div>
  )
};

export default Details;
