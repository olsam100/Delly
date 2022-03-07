const baseUrl = "https://delly-app.herokuapp.com/";
const appEndpoint = baseUrl + "user/forgot-password";

export function reset(email){
  return fetch(appEndpoint, { email })
    
}