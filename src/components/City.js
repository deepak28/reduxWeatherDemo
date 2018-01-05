import React from 'react'
import PropTypes from 'prop-types'

const City = ({onClick, text, weather}) => (
	    <li onClick={onClick} > {text} - {weather} </li>
    );

City.propTypes = {
    onClick: PropTypes.func.isRequired,
    /*type: PropTypes.string.isRequired,*/
    weather: PropTypes.string.isRequired
}

export default City;