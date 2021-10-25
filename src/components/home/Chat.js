import { ChatEngine } from 'react-chat-engine';
import { UserContext } from '../../context/UserContext';
import React, { useContext } from 'react';

const Chat = () => {
    const { user } = useContext(UserContext);

    return (
        <ChatEngine
            height = "80vh"
            projectID = "f2835e2c-343d-4ab3-9944-7e92dc3c6e98"
            userName = {user.correo}
            userSecret = {user.contraseña}
        />
    );
}

export default Chat;
