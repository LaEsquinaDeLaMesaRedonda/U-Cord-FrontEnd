import Avatar from 'components/ImageUpload/Avatar';
import { UserContext } from 'context/UserContext';
import React, { useContext } from 'react';
import { ChatEngineContext } from 'react-chat-engine';
import { chatEngineApiClient } from 'services/chatEngineApiClient';

const ChatSettings = () => {
    const { user } = useContext(UserContext);
    const { activeChat } = useContext(ChatEngineContext);
    const message = '¿Estas seguro de querer abandonar esta sala de chat?';

    const salirChat = () => {
        if (window.confirm(message))
            chatEngineApiClient.darDeBaja(user, activeChat);
    };

    const noImplementado = () => {
        console.log(user);
        chatEngineApiClient.updatePictureByUser(user, user.url);
    };
    
    const addUserToChat = () => {
        let siglas = prompt("Ingresa siglas de la materia.", "ARSW");
        if (siglas === null || siglas === ""){
            console.log("Unable to create a request with an empty parameter.");
        }else{
            chatEngineApiClient.getChatByName(user, siglas);
        }
    };

    return (
        <div id="chat-setting-container" align="center">
            <br />
            <Avatar />
            <div>
                <button
                    type="button"
                    className="glow-on-hover"
                    onClick={noImplementado}
                >
                    Mi perfil.
                </button>
                <button
                    type="button"
                    className="glow-on-hover"
                    onClick={addUserToChat}
                >
                    Buscar sala de estudio.
                </button>
                <button
                    type="button"
                    className="glow-on-hover"
                    onClick={salirChat}
                >
                    Salir del chat.
                </button>
            </div>
        </div>
    );
};

export default ChatSettings;
