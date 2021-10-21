import React from 'react';
import './css/App.css';
import LoginScreen from './components/login/LoginScreen';
import AppRouter from './components/routers/AppRouter';
import { UserContext } from './UserContext';

function App() {
  return (
    <div className="App">
        {/* <LoginScreen />
        <hr /> */}
        <UserContext.Provider >
          <AppRouter />
        </UserContext.Provider>       
    </div>
  );
}

export default App;
