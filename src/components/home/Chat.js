import { ChatEngine, ChatEngineContext } from 'react-chat-engine';
import { UserContext } from '../../context/UserContext';
import React, { useContext } from 'react';
import { chatEngineApiClient } from '../../services/chatEngineApiClient';
import "../../css/Chat.css";

const Chat = () => {

    const { user } = useContext(UserContext);

    const { activeChat } = useContext(ChatEngineContext);

    const getChats = () => {
        chatEngineApiClient.getChatsByUser(user);
    }

    const salirChat = () => {
        if (window.confirm("¿Estas seguro de querer abandonar esta sala de chat?")) chatEngineApiClient.darDeBaja(user, activeChat);
    };

    const noImplementado = () => {
        window.alert("Función aun no implementada, lamentamos las molestias.");
    }

    const sortMembers = () => {
        const members = getMembers();
        const list = members.map;
        /*const list = members.person.map((member) => <li>member.userName</li>);
        return list;*/
    }
    const getMembers = () => {
        //chatEngineApiClient.getUsersByChat(user, activeChat);
        return chatEngineApiClient.getUsersByChat(activeChat);
    }

    return (
        <ChatEngine
            //Chat functionality options
            projectID = "f2835e2c-343d-4ab3-9944-7e92dc3c6e98"
            userName = {user.correo}
            userSecret = {user.contraseña}
            offset = {-5}

            //Chat custom UI options
            height = "88vh"
            renderNewChatForm = {(creds) => {}}
            renderChatSettings = {(chatAppState) => 
            <div
            align = "center">

                    <button
                    type = "button"
                    className = "glow-on-hover"
                    onClick = {sortMembers} >
                        Buscar sala de estudio.
                    </button>

                <renderOptionsSettings>

                    <button
                    type = "button"
                    className = "glow-on-hover"
                    onClick = {noImplementado} >
                        Mi perfil.
                    </button>

                    <button 
                    type = "button"
                    className = "glow-on-hover"
                    onClick = {salirChat} >
                        Salir del chat.
                    </button>

                </renderOptionsSettings>

            </div>
            }
        />
    );
}

export default Chat;
