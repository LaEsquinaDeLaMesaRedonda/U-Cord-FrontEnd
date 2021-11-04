import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { types } from '../types/types';
import Chat from './Chat';
import "../../css/Main.css";
import { ChatEngineWrapper } from 'react-chat-engine';

const HomeScreen = () => {
    const { user, dispatch } = useContext( UserContext );

    const handleClick = () => {
        const action = {
            type: types.logout,
        }
        dispatch( action );
    }

    return (
        <div>
            <div className="flex-container">
                <h1> Bienvenido a U-cord: { user.nombreCompleto}</h1>
                <button 
                    type="button" 
                    className="btn btn-dark" 
                    onClick={handleClick}
                    > Logout </button>
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
