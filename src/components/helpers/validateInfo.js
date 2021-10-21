const validateInfo = values => {
    const errors = {};
    const { carnet, email, password, password2 } = values
    const regularExp = /^[-\w.%+]{1,64}@(?:mail\.)*escuelaing.edu.co$/i;
    //Carnet
    if( !carnet.trim() ) errors.carnet = "Carnet obligatorio";

    //Email
    if( !email ) errors.email = "Correo obligatorio";
    else if ( !regularExp.test(email) ) errors.email = "Correo invalido";

    //Passwd
    if ( password.length < 5 ) errors.password = "Contraseña debe ser minimo de 5 caracteres";
    if ( !password ) errors.password = "Contraseña obligatoria";
    if ( !password2 ) errors.password2 = "Contraseña obligatoria";

    
    if( password !== password2 ) errors.password2 = "Las contraseñas deben coincidir";

    return errors;
}

export default validateInfo;