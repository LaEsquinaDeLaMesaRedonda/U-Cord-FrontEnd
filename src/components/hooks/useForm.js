import md5 from 'md5';
import _ from 'lodash';
import swal from 'sweetalert';
import { postUser } from '../../services/userApiClient';
import { useState } from 'react';

const useForm = (inputs, validate) => {
    const initValues = {};
    inputs.forEach(input => initValues[input]='' );

    const [values, setValues] = useState( initValues );
    const [errors, setErrors] = useState({});

    const setCurrentUser = () =>{
        const{ carnet, email, password} = values;
        const nombre = email.split('@')[0];
        return {
            idUsuario : carnet,
            correo : email,
            nombreCompleto : nombre,
            contraseña: md5(password),
            url:''
        }
        
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setValues( {
            ...values,
            [name]: value
        });
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const currentErrors = await validate(values);
        setErrors( currentErrors );
        
        if( _.isEqual({},currentErrors)  ) {
            const user = setCurrentUser();
            console.log(user);
            postUser( user )
            .then( () => {
                swal({title: "Registro", icon:"success", text: "Usuario registrado", timer:"5000"})
                  .then( () => window.location.href = "/main");
              })
              .catch( () => swal({title: "Error", icon:"error", text: "Error al registrar el usuario", timer:"5000"}))
        }
    }

    return { handleChange, values, handleSubmit, errors };
}

export default useForm; 
