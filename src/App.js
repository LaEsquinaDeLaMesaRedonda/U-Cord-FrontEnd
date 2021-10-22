import React from 'react';
import './css/App.css';
import AppRouter from './components/routers/AppRouter';
import { UserContext } from './context/UserContext';

function App() {
  return (
    <div className="App">
        <UserContext.Provider value={{}} >
          <AppRouter />
        </UserContext.Provider>       
    </div>
  );
}

export default App;
