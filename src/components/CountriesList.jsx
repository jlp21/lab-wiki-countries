import React, { Component } from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

class CountriesList extends Component {

    render() {
        // console.log(countries)
        return countries.map((country) => {
            // console.log(country.name.common)
            return (
                <div>
                    <div key={country.cca3}>
                        <h5>
                            <Link to={`/${country.cca3}`}>{country.name.common}</Link>
                        </h5>
                    </div>
                </div>
            )
        })
    }
}

export default CountriesList;
