const CountryInfo = () => {
    const name = 'Finland';
    const capital = 'Helsinki'
    const area = '338424';
    const languages = [{name: "Finnish"}, {name: "Swedish"}]
    return (
        <div>
            <h1> {name} </h1>
            <p>Capital: {capital} </p>
            <p>Area: {area} </p>
            <strong>Languages: </strong>
            <ul>
                {languages.map(language => 
                    <li key={language.name}> 
                        {language.name}   
                    </li>
                )}
            </ul>:
            <img src="https://flagcdn.com/w320/fi.png" alt="flag" ></img>
        </div>
    );
} 

export default CountryInfo