const ADD_CITY =  'ADD_CITY'
let nextCityId = 1;
//console.log("text",nextCityId)
export const addCity = text => {return {type: ADD_CITY, id: nextCityId++, text}}
