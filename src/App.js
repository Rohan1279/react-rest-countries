import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
     <Countries></Countries>
    </div>
  ); 
}

// function LoadCountries() {
//   const [countries, setCountries] = useState(0)
//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))
//   },[])
//   return(
//     <div>
//       <h2>Visiting every country of the world!!!</h2>
//       <h3>Number of countries: {countries.length}</h3>
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
//       }
//     </div>
//   )
// }
// function Country(props) {
//   return(
//     <div>
//       <h2>{props.name}</h2>
//       <h3>{props.population}</h3>
//     </div>
//   )
// }
export default App;
