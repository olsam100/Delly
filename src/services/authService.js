const baseUrl = "https://delly-app.herokuapp.com/";
const appEndpoint = baseUrl + "user";

export function login(email, password){
  return fetch(appEndpoint, { email, password })
    
}