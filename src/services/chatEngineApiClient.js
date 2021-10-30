import axios from 'axios';
import md5 from 'md5';
/* https://chatengine.io/docs/backend
https://axios-http.com/docs/post_example */

export const chatEngineApiClient =( () =>{
    const URL = 'https://api.chatengine.io/';
    const PRIVATE_KEY = '434dfcfb-f05c-47c3-80b9-94ad38bed2f4';
    const PROJECT_ID = 'f2835e2c-343d-4ab3-9944-7e92dc3c6e98'; 

    const authHeader = {
        'PRIVATE-KEY': PRIVATE_KEY,
    }
    
    const setData = user => {
        const { correo, contraseña:password, nombreCompleto } = user;
        const name = nombreCompleto.split(".");
        
        return {
            "username": correo,
            "secret": password,
            "email": correo,
            "first_name": name[0],
            "last_name": name[1],
        };
    }

    return {
        postUser : async user =>{
            const data = setData( user );
            
            var config = {
                method: 'post',
                url: URL+'users/',
                headers: authHeader,
                data : data
            };

            await axios(config)
                .then( response => {
                    console.log(JSON.stringify(response.data));
                });
        },

        getUser : async ( {email, password} ) => {
            const auth0 = {
                            'Project-ID': PROJECT_ID, 
                            'User-Name': email.toString, 
                            'User-Secret': md5(password).toString
            };

            await axios.get(`${URL}/chats`, {headers: auth0})
                .then( response => {
                    console.log(JSON.stringify(response.data));
                });
        }
    }
    
})();


