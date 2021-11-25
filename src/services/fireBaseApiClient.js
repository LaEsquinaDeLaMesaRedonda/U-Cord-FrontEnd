import { chatEngineApiClient } from './chatEngineApiClient';
import { fb } from './firebase';

export const fireBaseApiClient = (() => {
    return {
        postUser: async user => {
            const { correo: userName, contraseña: password } = user;
            fb.auth
                .createUserWithEmailAndPassword(userName, password)
                .then(res => {
                    if (res?.user?.uid) {
                        console.log('paseeeeee');
                        const data = { userName, avatar: '' };
                        console.table(data);
                        chatEngineApiClient.postUser(user).then(() => {
                            fb.firestore
                                .collection('chatUsers')
                                .doc(res.user.id)
                                .set(data);
                        });
                    }
                })
                .catch(() => {});
        },
    };
})();
