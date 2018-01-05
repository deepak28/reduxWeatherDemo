import React from 'react'
import PropTypes from 'prop-types'
import City from './City'

const CitiesList = ({cities,onCityClick}) => (
    <ul>
        {cities.map(city => (
               <City key={city.id} {...city} onClick={() => onCityClick(city.id)} /> /* {} */
    ))}
    </ul>
    );
        
CitiesList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            weather: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onCityClick: PropTypes.func.isRequired
}

export default CitiesList;