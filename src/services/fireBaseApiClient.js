import { chatEngineApiClient } from './chatEngineApiClient';
import { fb } from './firebase';

export const fireBaseApiClient = (() => {
    return {
        postUser: async user => {
            const { correo, contraseña: password } = user;
            fb.auth
                .createUserWithEmailAndPassword(correo, password)
                .then(res => {
                    if (res?.user?.uid) {
                        chatEngineApiClient.postUser(user).then(() => {
                            fb.firestore
                                .collection('chatUsers')
                                .doc(res.user.uid)
                                .set({ userName: correo, avatar: '' });
                        });
                    }
                });
        },
    };
})();
