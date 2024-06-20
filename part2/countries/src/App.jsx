import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'
import CountryInfo from './components/CountryInfo'
import countriesService from './services/countries'

function App() {

  const [filterText, setFilterText] = useState('')
  const [countries, setCountries] =useState([])
  const [filteredCountries, setFilteredCountries] =useState([])
  const [show,setShow] = useState(false)

  useEffect(() => {
    countriesService
      .getAll()
      .then(countries => {
        console.log(countries);
        setCountries(countries)
      })
      .catch(() => console.log('not finding countries'))
  }, [])

  useEffect(() => {
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(filterText.toLowerCase())
    );
    setFilteredCountries(filtered);
  
  }, [countries, filterText]);


  const handleFilterTextChange = (event) => {
    console.log('filter text', event.target.value);
    setFilterText(event.target.value);

  }
  const handleShow = () => {
    console.log('show to be updated');
    setShow(!show)
  }
  
  return(
    <div>
      <Filter
        filterText={filterText}
        handleFilterTextChange={handleFilterTextChange} />     
    
        <Countries 
          countries={filteredCountries} 
          handleShow={handleShow}/>
        {show? <CountryInfo />:null}
    </div>
  )
  
}

export default App
