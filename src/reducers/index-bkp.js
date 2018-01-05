const cities = (state = [], action) => {
    console.log("test=",action)
    switch (action.type){
        case 
            'ADD_CITY':
                return getWeather(state,action.text,action.id)
              
            default:
                return state
        }
}

const getWeather = (state = [], cityName, id) => {
    const API_KEY = '881e5cfb2b59db252b06f24d269ad3c2'
    const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`
    const wurl = `${ROOT_URL}&q=${cityName}`
    fetch(wurl)
        .then((result) => {
                console.log("test1==")
                return result.json();
        }).then((jsonResult) => {
            console.log(jsonResult);
                return [
                    ...state,
                    {
                        id: id,
                        text: cityName,
                        weather : jsonResult.main.temp
                    }
                ]
//            return state.map(city =>(city.id === id)? {...city, weather: ''} : city)
        })
}
 
//}
export default cities