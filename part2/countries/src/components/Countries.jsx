
const Countries = ({ countries, handleShow }) => {
    return (
      (countries.length<11)?
        <ul>
        {countries.map(Country => 
            <li key={Country.name.common}> 
                {Country.name.common} {Country.name.official} 
                <button onClick={() => handleShow(Country)}>show</button> 
            </li>
        )}
      </ul>:
      <p>Too many matches, add more filter</p>
    )
  }
  
  export default Countries