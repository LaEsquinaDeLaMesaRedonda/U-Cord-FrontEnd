import md5 from 'md5';
import swal from 'sweetalert';
import _ from 'lodash';
import { useContext, useState } from 'react';
import { userApiclient } from '../../services/userApiClient';
import { UserContext } from '../../context/UserContext';
import { types } from '../types/types';
import axios from 'axios';


const useFormLogin = ( validate ) => {
    const { dispatch } = useContext( UserContext );

    const [values, setValues] = useState( {
        email: '',
        password: ''
    } );
    const [errors, setErrors] = useState({});

    const handleChange = event => {
        const { name, value } = event.target;
        setValues( {
            ...values,
            [name]: value
        });
    }

    const login = () => {
        const { email, password } = values;
        
        userApiclient.getUserByMail( email )
            .then( user => {
                const { contraseña:uPassword } = user;

                if( uPassword !== md5(password) ) {
                    swal({title: "Login", icon:"error", text: "Usuario o contraseña incorrecta", timer:"5000"});
                    return ;
                }
                const action = {
                    type: types.login,
                    payload: user
                }
                dispatch( action );
                window.location.href = "/main";
                
            })
            .catch( () => {
                swal({title: "Login", icon:"error", text: "El usuario ingresado no se encuentra registrado", timer:"5000"});
            });
            
        return values;

    }

    const handleSubmit = async event => {
        event.preventDefault();
        const currentErrors = await validate(values);
        setErrors( currentErrors );
        if( _.isEqual({},currentErrors)  ) {
            const { email, password } = login();
            const auth0 = {'Project-ID': "f2835e2c-343d-4ab3-9944-7e92dc3c6e98", 'User-Name': email.toString, 'User-Secret': md5(password).toString};
            try{
                await axios.get('https://api.chatengine.io/chats', {headers: auth0});
            }catch (e){
                
            }
        }
    }

    return { handleChange, values, handleSubmit, errors };
}

export default useFormLogin; 

