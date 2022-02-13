const baseUrl = "https://delly-app.herokuapp.com/user";
const appEndpoint = baseUrl + "/auth";

export function login(email, password){
  return fetch(appEndpoint, { email, password })
    
}