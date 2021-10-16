import React, { Component } from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

class CountryDetails extends Component {

    render() {
        // console.log(this.props);
        const countryId = this.props.match.params.cca3;
        const countryDetails = this.props.countries.find(
            (country) => country.cca3 === countryId
        );
        // console.log(countryId);
        // console.log(countryDetails);

        const neighbors = countryDetails.borders.map(cca3 => {
            return countries.find(country => cca3 === country.cca3
            )
        })
        return (
            <div className = 'countryDetails'>
                <h5>{countryDetails.capital}</h5>
                <h5>{countryDetails.area}</h5>

                <ul>{neighbors.map(country => {
                    return (
                        <Link key={country.cca3} to={`/${country.cca3}`}>
                        <li>{country.name.common}</li>
                        </Link>
                    );
                })}
                </ul>
            </div>
        );
    }

}

export default CountryDetails;