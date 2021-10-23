import md5 from 'md5';
import _ from 'lodash';
import swal from 'sweetalert';
import { userApiclient } from '../../services/userApiClient'
import { useState } from 'react';

const useForm = (inputs, validate) => {
    const initValues = {};
    inputs.forEach(input => initValues[input]='' );

    const [values, setValues] = useState( initValues );
    const [errors, setErrors] = useState({});

    const setCurrentUser = () =>{
        const{ carnet, email, password, programa } = values;
        const nombre = email.split('@')[0];
        return {
            idUsuario : parseInt(carnet),
            correo : email,
            nombreCompleto : nombre,
            contraseña: md5(password),
            url:'',
            programa: programa
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

            userApiclient.postUser( user )
            .then( () => {
                swal({title: "Registro", icon:"success", text: "Usuario registrado", timer:"6000"})
                  .then( () => window.location.href = "/login");
              })
            .catch( () => swal({title: "Error", icon:"error", text: "Error al registrar el usuario", timer:"6000"}));
        }
    }

    return { handleChange, values, handleSubmit, errors };
}

export default useForm; 
