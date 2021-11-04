import { ChatEngine, ChatEngineContext } from 'react-chat-engine';
import { UserContext } from '../../context/UserContext';
import React, { useContext } from 'react';
import { chatEngineApiClient } from '../../services/chatEngineApiClient';

const Chat = () => {

    const { user } = useContext(UserContext);

    const {activeChat} = useContext(ChatEngineContext);

    const getChats = () => {
        chatEngineApiClient.getChatsByUser(user);
    }

    const salirChat = () => {
        chatEngineApiClient.darDeBaja(user, activeChat);
    };

    return (
        <ChatEngine
            height = "80vh"
            projectID = "f2835e2c-343d-4ab3-9944-7e92dc3c6e98"
            userName = {user.correo}
            userSecret = {user.contraseña}
            renderChatSettings={(chatAppState) => 
            <div>
                <button onClick = {getChats}>
                    Mostrar chats (consola).
                </button>
                <button onClick = {salirChat} >
                    Salir del chat.
                </button>
            </div>
            }
            offset = {-5}
        />
    );
}

export default Chat;
