import { useState } from "react";
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';
import './App.css';


type ResultsStateType = {
  country: string;
  cityname:string;
  temperature:string;
  conditionText:string;
  icon:string;
}

function App() {

  const [city, setCity] = useState<string>('');
  const [results,setResults] = useState<ResultsStateType>({
    country: '',
    cityname:'',
    temperature:'',
    conditionText:'',
    icon:'',
});

    const getWeather = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch(`https://api.weatherapi.com/v1/current.json?key=b94f192bce2c484c93790803232404&q=${city}&aqi=no`)
            .then(res => res.json())
            .then(data => {
              setResults({
              country: data.location.country,
              cityname: data.location.name,  
              temperature: data.current.temp_c,  
              conditionText: data.current.condition.text,  
              icon: data.current.condition.icon
            })
          })
    }

  return (
    <div className="wrapper">
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Results results = {results}/>
    </div>
  );
}

export default App;
