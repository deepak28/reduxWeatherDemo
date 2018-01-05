import { connect } from 'react-redux'
import CitiesList from '../components/CitiesList'

const getCities = (cities, filter) => {
    
  switch (filter) {
    case 'SHOW_ALL':
        return cities
    default:
      return cities
  }
}

const mapStateToProps = state => {
    //console.log("sds====",state)
  return {
    cities: getCities(state, 'SHOW_ALL')
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onCityClick: id => {
              
    }
  }
}

const ViewCitiesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CitiesList)

export default ViewCitiesList