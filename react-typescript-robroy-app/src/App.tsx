import { useState } from "react";
import Title from './components/Title';
import Form from './components/Form';
import './App.css';
import Results from './components/Results';

function App() {

  const [city, setCity] = useState<string>('');
    const getWeather = (e : any) => {
        e.preventDefault();
        fetch('https://api.weatherapi.com/v1/current.json?key=b94f192bce2c484c93790803232404&q=London&aqi=no')
            .then(res => res.json())
            .then(data => console.log(data))
    }

  return (
    <div className="test">
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Results />
    </div>
  );
}

export default App;
