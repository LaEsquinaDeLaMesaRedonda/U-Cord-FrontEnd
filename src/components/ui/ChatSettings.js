import InfoUser from 'components/home/InfoUser';
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
        window.alert('Función aun no implementada, lamentamos las molestias.');
    };

    return (
        <div align="center">
            <br />
            <Avatar />
            <div>
                <button
                    type="button"
                    className="glow-on-hover"
                    onClick={() => {}}
                >
                    Mi perfil.
                </button>

                <button
                    type="button"
                    className="glow-on-hover"
                    onClick={noImplementado}
                >
                    Mostrar integrantes.
                </button>
                <button
                    type="button"
                    className="glow-on-hover"
                    onClick={noImplementado}
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
