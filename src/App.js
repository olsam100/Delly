import React from 'react'
import Login from './screens/Login';
import { Routes, Route } from 'react-router-dom'
import LoginInput from './screens/LoginInput';
import Password from './screens/Password';
import PasswordInput from './screens/PasswordInput';
import CreateAccount from './screens/CreateAccount';
import CreateAccountInput from './screens/CreateAccountInput';
import AccountSuccess from './screens/AccountSuccess';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Login /> }/>
        <Route path="/login" element={ <LoginInput /> }/>
        <Route path="/password" element={ <Password /> }/>
        <Route path="/password-input" element={ <PasswordInput /> }/>
        <Route path="/login/create-account" element={ <CreateAccount /> } />
        <Route path="/create-account-input" element={ <CreateAccountInput /> }/>
        <Route path="/account-success" element={ <AccountSuccess /> }/>
       
      </Routes>
    </>
  )
}
export default App;
