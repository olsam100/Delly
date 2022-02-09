import React from 'react'
import Login from './screens/Login';
import { Routes, Route } from 'react-router-dom'
import Password from './screens/Password';
import CreateAccount from './screens/CreateAccount';
import AccountSuccess from './screens/AccountSuccess';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Login /> } exact/>
        <Route path="/password" element={ <Password /> }/>
        <Route path="/create-account" element={ <CreateAccount /> } />
        <Route path="/account-success" element={ <AccountSuccess /> }/>
       
      </Routes>
    </>
  )
}
export default App;
