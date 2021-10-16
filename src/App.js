import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';
import { Route, Switch } from "react-router-dom";

function App() {

  return (

    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
        <div class="col-5">
          <CountriesList countries={countries} />
          </div>
          <div class ="col-7">
          <Switch>
            <Route path="/" exact />
            <Route
              path="/:cca3"
              render={(props) => <CountryDetails countries={countries} {...props} />}
            />
          </Switch>
          </div>
        </div>
      </div>
    </div>

  )}

export default App;
