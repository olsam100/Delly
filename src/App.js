import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import jwtDecode from 'jwt-decode';
import Login from './screens/Login';
import Password from './screens/Password';
import CreateAccount from './screens/CreateAccount';
import AccountSuccess from './screens/AccountSuccess';
import ResetPassword from './screens/ResetPassword';

const App = () => {
  // const [user, setUser] = useState();

  // useEffect(() => {
  //   try {
  //     const jwt = localStorage.getItem('token');
  //     const user = jwtDecode(jwt);
  //     setUser({user});
  //     console.log(user);
  //   } catch (error) {
      
  //   }
  // },[])
  
  return (
    <>
      <Routes>
        <Route path="/" element={ <Login /> } exact />
        <Route path="/password" element={ <Password /> }/>
        <Route path="/reset-password/:token" element={ <ResetPassword /> }/>
        <Route path="/create-account" element={ <CreateAccount /> } />
        <Route path="/account-success" element={ <AccountSuccess /> }/>
       
      </Routes>
    </>
  )
}
export default App;
