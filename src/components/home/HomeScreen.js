import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext';
import "../../css/Main.css"
import Chat from './Chat';
const HomeScreen = () => {
    const { user } = useContext( UserContext );
    return (
        <div>
            <center><h1> Bienvenido a U-cord, { user.nombreCompleto}</h1></center>
            <Chat />            
        </div>
    );
}

export default HomeScreen;
