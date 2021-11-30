import { UserContext } from 'context/UserContext';
import React, { useContext } from 'react';
import { Image, Modal } from 'semantic-ui-react';

const InfoUser = () => {
    const { user } = useContext(UserContext);
    const { url: imageSrc, correo } = user;
    console.log(user);
    return (
        <Modal open={true}>
            <Modal.Header>hola</Modal.Header>
            <Modal.Content image>
                <Image wrapped size="medium" src={imageSrc} alt="preview" />

                <Modal.Description>
                    <center>
                        <h1>{correo}</h1>
                        <p>
                            Hemos encontrado la siguiente imagen de avatar
                            asociada a tu dirección de correo electrónico.
                        </p>
                        <b>
                            <i>
                                <p>¿Está bien usar esta foto?</p>
                            </i>
                        </b>
                    </center>
                </Modal.Description>
            </Modal.Content>

            <Modal.Actions>
                <div className="image-upload-actions">
                    <button className="ui red button">Cancelar</button>
                    <button className="ui primary button">Actualizar</button>
                </div>
            </Modal.Actions>
        </Modal>
    );
};

export default InfoUser;
