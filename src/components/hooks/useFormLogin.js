import md5 from 'md5';
import swal from 'sweetalert';
import _ from 'lodash';
import { useState } from 'react';
import { userApiclient } from '../../services/userApiClient';

const useFormLogin = ( validate ) => {
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
                    swal({title: "Login", icon:"error", text: "Usuario o contraseña incorrecta", timer:"5000"})
                    return ;
                }
                window.location.href = "/main";
                
            })
            .catch( () => {
                swal({title: "Login", icon:"error", text: "El usuario ingresado no se encuentra registrado", timer:"5000"});
              });
            
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const currentErrors = await validate(values);
        setErrors( currentErrors );
        
        if( _.isEqual({},currentErrors)  ) {
            login();
        }
/*         .then( () => {
            swal({title: "Registro", icon:"success", text: "Usuario registrado", timer:"6000"})
                .then( () => window.location.href = "/login");
            })
        .catch( () => swal({title: "Error", icon:"error", text: "Error al registrar el usuario", timer:"6000"}));
        } */
    }

    return { handleChange, values, handleSubmit, errors };
}

export default useFormLogin; 

