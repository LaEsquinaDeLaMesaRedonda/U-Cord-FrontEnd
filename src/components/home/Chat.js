import { ChatEngine, ChatEngineContext } from 'react-chat-engine';
import { UserContext } from '../../context/UserContext';
import React, { useContext } from 'react';
import { chatEngineApiClient } from '../../services/chatEngineApiClient';
import "../../css/Chat.css";

const Chat = () => {

    const { user } = useContext(UserContext);

    const {activeChat} = useContext(ChatEngineContext);

    const getChats = () => {
        chatEngineApiClient.getChatsByUser(user);
    }

    const salirChat = () => {
        if (window.confirm("¿Estas seguro de querer abandonar esta sala de chat?")) chatEngineApiClient.darDeBaja(user, activeChat);
    };

    const noImplementado = () => {
        window.alert("Función aun no implementada, lamentamos las molestias.");
    }

    return (
        <ChatEngine
            //Chat functionality options
            projectID = "f2835e2c-343d-4ab3-9944-7e92dc3c6e98"
            userName = {user.correo}
            userSecret = {user.contraseña}
            offset = {-5}

            //Chat custom UI options
            height = "88.3vh"
            renderChatSettings={(chatAppState) => 
            <div
            align = "center">
                <button
                type = "button"
                className = "glow-on-hover"
                onClick = {noImplementado} >
                    Mostrar integrantes.
                </button>
                
                <button
                type = "button"
                className = "glow-on-hover"
                onClick = {noImplementado} >
                    Mi perfil.
                </button>

                <button 
                type = "button"
                className = "glow-on-hover"
                onClick = {getChats} >
                    Mostrar chats (consola).
                </button>
                <button 
                type = "button"
                className = "glow-on-hover"
                onClick = {salirChat} >
                    Salir del chat.
                </button>
            </div>
            }
        />
    );
}

export default Chat;
