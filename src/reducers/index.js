const cities = (state = [], action) => {
    console.log("test=",action)
    const API_KEY = '881e5cfb2b59db252b06f24d269ad3c2'
    const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`
    const wurl = `${ROOT_URL}&q=${action.text}`
    let wthr = '0';
    switch (action.type){
        case 
            'ADD_CITY':
                fetch(wurl)
                    .then((result) => {
                            console.log("test1==")
                            
                            return result.json();
                    }).then((jsonResult) => {
                            //console.log("test1==")
                            //console.log(jsonResult);
                            wthr = jsonResult.main.temp;
                            console.log("Wthr===",wthr);
                            return;
                    })
                return [
                    ...state,
                    {
                        id: action.id,
                        text: action.text,
                        weather : wthr
                    }
                ]
                
            default:
                return state
        }
}

export default cities