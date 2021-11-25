import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { types } from '../types/types';
import Chat from './Chat';
import '../../css/Main.css';
import { ChatEngineWrapper } from 'react-chat-engine';
import Avatar from 'components/ImageUpload/Avatar';

const HomeScreen = () => {
    const { user, dispatch } = useContext(UserContext);

    const handleClick = () => {
        const action = {
            type: types.logout,
        };
        dispatch(action);
    };

    return (
        <div>
            <div className="flex-container">
                <h1> Bienvenido a U-cord: {user.nombreCompleto}.</h1>
                <button
                    type="button"
                    className="glow-on-hover"
                    onClick={handleClick}
                >
                    Cerrar Sesión{' '}
                </button>
            </div>
            <div>
                <ChatEngineWrapper>
                    <Chat />
                    <Avatar></Avatar>
                </ChatEngineWrapper>
            </div>
        </div>
    );
};

export default HomeScreen;
