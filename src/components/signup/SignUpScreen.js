import React, { useState } from 'react'
import FormSignUp from './FormSignUp';
import FormSuccess from './FormSuccess';

const SignUpScreen = () => {

    const [isSubmitted, setIsSubmitted] = useState( false );

    function submitForm( value = true ) {
        setIsSubmitted(value);
    }
    return (
        <>
        <div className='form-container'>
          <div className='form-content-left'>
            <img className='form-img' src='img/img-2.svg' alt='spaceship' />
          </div>
          
          { isSubmitted ? <FormSuccess /> : <FormSignUp submitForm={submitForm} />}
          
        </div>
      </>
    );
};

export default SignUpScreen;
