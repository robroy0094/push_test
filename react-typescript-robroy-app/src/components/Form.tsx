import React from "react";

type FormPropsType = {
    setCity : React.Dispatch<React.SetStateAction<string>>;
    getWeather: (e:React.FormEvent<HTMLFormElement>) => void;
}

const Form = (props : any) => {
    return(
        <form onSubmit={props.getWeather}>
            <input type='text' name='city' placeholder='都市名' onChange={e => props.setCity(e.target.value)}/>
            <button type='submit' onClick={props.getWeather}>Get Weather</button>
        </form>
    );
};

export default Form;