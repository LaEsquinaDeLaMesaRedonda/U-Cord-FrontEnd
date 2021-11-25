import { UserContext } from 'context/UserContext';
import { useContext, useEffect, useRef, useState } from 'react';
import { Icon, IconGroup, Image, Loader } from 'semantic-ui-react';
import { fb } from 'services';
import ImageUpload from './ImageUpload';

const Avatar = () => {
    const { user } = useContext(UserContext);
    const { correo } = user;
    const inputRef = useRef(null);
    const [image, setImage] = useState();

    useEffect(() => {}, [image]);

    const onFileAttach = file => {
        setImage(file);
    };

    return (
        <>
            <input
                type="file"
                ref={inputRef}
                className="file-input"
                accept="image/jpeg,image/png,image/jpg"
                onChange={e => {
                    const file = e.target?.files?.[0];
                    if (file) {
                        onFileAttach(file);
                    }
                }}
            />

            {image && (
                <ImageUpload
                    crop
                    file={image}
                    header="Escoge tu perfil"
                    mode="message"
                    onSubmit={croppedImage => {
                        const storageRef = fb.storage.ref();
                        const uploadRef = storageRef.child(
                            `${correo}_avatar.jpg`,
                        );
                        console.log(uploadRef);
                        uploadRef.put(croppedImage).then(() => {
                            uploadRef.getDownloadURL().then(url => {
                                console.log('oas');
                                console.log(url);
                                fb.firestore
                                    .collection('chatUsers')
                                    .doc(correo)
                                    .update({ avatar: url })
                                    .then(() => {
                                        setImage(null);
                                    });
                            });
                        });
                    }}
                    close={() => setImage(null)}
                />
            )}

            <div className="left-rail-header">
                <Icon
                    onClick={() => fb.auth.signOut()}
                    className="sign-out"
                    name="sign out"
                />
                {user.url ? (
                    <div className="current-user-info">
                        <IconGroup
                            onClick={() => {
                                const input = inputRef.current;
                                if (input) {
                                    input.value = '';
                                    input.click();
                                }
                            }}
                            className="user-avatar"
                            size="large"
                        >
                            {user.url ? (
                                <Image src={user.url} avatar />
                            ) : (
                                <div className="empty-avatar">
                                    {correo.toUpperCase()}
                                </div>
                            )}

                            <Icon corner name="camera" inverted circular />
                        </IconGroup>

                        <div className="current-username">{correo}</div>
                    </div>
                ) : (
                    <div className="user-loading">
                        <Loader active size="small" />
                    </div>
                )}
            </div>
        </>
    );
};

export default Avatar;
