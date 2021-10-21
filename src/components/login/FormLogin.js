import React from 'react'
import '../../css/Form.css';

const FormLogin = () => {
    return (
        <div className="form-content-right">

        <form className="form" >
            <h1>Ingresa a tu cuenta </h1>
        
            <div className="form-inputs">
                <label htmlFor="email" 
                className="form-label">
                    Correo
                </label>
                <input
                    id="email"
                    type="email" 
                    name="email"
                    placeholder="Ingrese su correo electronico"
                    className="form-input"
                    value="{values.email}"
                />
            </div>
            <div className="form-inputs">
                <label htmlFor="password" 
                className="form-label">
                    Contraseña
                </label>
                <input
                    id="password"
                    type="password" 
                    name="password"
                    placeholder="Ingrese su contraseña"
                    className="form-input"
                    value="{values.password}"
                />
            </div>
            <button id="btn-login" type="submit" className="form-input-btn">Ingresar</button>
            <span className="form-input-login">¿Aun no tienes cuenta? Registrate <a href="/signup"> aqui</a></span>
            </form>      
        </div>
    );
}
    


export default FormLogin;
