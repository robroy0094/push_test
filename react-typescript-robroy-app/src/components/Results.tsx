type ResultsPropsType ={
    results:{
        country: string,
        cityname:string,
        temperature:string,
        conditionText:string,
        icon:string,
    }
}

const Results = (props:ResultsPropsType) => {
    return(
        <div>
                {props.results.country && <div className='results-county'>{props.results.country} </div>}
                {props.results.cityname && <div className='results-city'>{props.results.cityname} </div>}
                {props.results.temperature && <div className='results-temp'>{props.results.temperature} <span>℃</span></div>}
                {props.results.conditionText && 
                <div className='results-condition'>
                    <img src={props.results.icon} alt='icon'/>
                    <span>{props.results.conditionText}</span>
                </div>
                }
        </div>
    );
};

export default Results;