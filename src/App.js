import React, { useEffect, useReducer } from 'react';
import './css/App.css';
import AppRouter from './components/routers/AppRouter';
import { UserContext } from './context/UserContext';
import { authReducer } from './components/auth/authReducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fb } from './services/firebase';

function App() {
    const init = () => {
        return (
            JSON.parse(localStorage.getItem('user')) || {
                logged: false,
            }
        );
    };
    /* const [state, dispatch] = useReducer(reducer, initialState, init) */
    const [user, dispatch] = useReducer(authReducer, {}, init);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);
    useEffect(() => {
        fb.firestore
            .collection('chatUsers')
            .where('userName', '==', 'alerincons')
            .get()
            .then(res => {
                const user = res.docs[0]?.data();
                console.log(user);
            });
    }, []);
    return (
        <div className="App">
            <UserContext.Provider value={{ user, dispatch }}>
                <AppRouter />
            </UserContext.Provider>
        </div>
    );
}

export default App;
