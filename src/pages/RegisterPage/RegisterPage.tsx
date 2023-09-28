import { Link } from "react-router-dom";
import { FormEvent } from "react";
import './registerpage.css';

//Components
import InputShared from '../../components/Shared/InputShared/InputShared';

function RegisterPage() {

  const handleSubmitRegisterPage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log((e.currentTarget.elements[0] as HTMLInputElement).value);
    console.log((e.currentTarget.elements[1] as HTMLInputElement).value);
    console.log((e.currentTarget.elements[2] as HTMLInputElement).value);
  } 

  return (
    <div className='mainContainerRegisterPage'>
      <form className='registerContainer' onSubmit={handleSubmitRegisterPage}>
        <div className='inputFieldsContainer'>
          <InputShared
            inputField='Usuario'
            type='text'
            placeholder='username'
            name='username'
            toHandleChange={(data) => { console.log(data) }}
          />
          <InputShared
            inputField='Contraseña'
            type='password'
            placeholder='**********'
            name='password'
            toHandleChange={(data) => { console.log(data) }}
          />
          <InputShared
            inputField='Repetir Contraseña'
            type='password'
            placeholder='**********'
            name='passwordRepeated'
            toHandleChange={(data) => { console.log(data) }}
          />
        </div>
        <button className='btnRegister'>Registrarse</button>
        <div className="toLoginContainer">
          <Link to='/login' className="toLogin">Ya tenes cuenta?</Link>
        </div>
      </form>
    </div>
  )
}

export default RegisterPage