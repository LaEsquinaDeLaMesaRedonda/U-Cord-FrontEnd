import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { types } from '../types/types';
import Chat from './Chat';
import "../../css/Main.css";
import { ChatEngineWrapper } from 'react-chat-engine';
import { chatEngineApiClient } from '../../services/chatEngineApiClient';

const HomeScreen = () => {
    const { user, dispatch } = useContext( UserContext );
    const [url, setUrl] = useState("");

    const handleClick = () => {
        const action = {
            type: types.logout,
        }
        dispatch( action );
    }

    return (
        <div>
            <div className="flex-container">
                <h1> Bienvenido a U-cord: { user.nombreCompleto }.</h1>
                <button 
                    type="button" 
                    className="glow-on-hover" 
                    onClick={handleClick}
                    > Cerrar Sesión </button>
                <input type="text" onChange={ (event) =>{
                    setUrl(event.target.value);
                }}></input>
                <button onClick={ (event)=> {
                    chatEngineApiClient.updatePasswdByUser(user, url);
                }}>click</button>
            </div>
            <div>
                <ChatEngineWrapper>
                    <Chat />           
                </ChatEngineWrapper> 
            </div>
            
        </div>
    );
}

export default HomeScreen;
