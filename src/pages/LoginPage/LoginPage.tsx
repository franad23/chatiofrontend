import { Link } from "react-router-dom";
import { FormEvent } from "react";
import './loginpage.css';

//Components
import InputShared from '../../components/Shared/InputShared/InputShared';

function LoginPage() {

  const handleSubmitLoginPage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log((e.currentTarget.elements[0] as HTMLInputElement).value);
    console.log((e.currentTarget.elements[1] as HTMLInputElement).value);
  } 

  return (
    <div className='mainContainerRegisterPage'>
      <form className='registerContainer' onSubmit={handleSubmitLoginPage}>
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
        </div>
        <button className='btnRegister'>Entrar</button>
        <div className="toLoginContainer">
          <Link to='/register' className="toLogin">Aun no tenes cuenta?</Link>
        </div>
      </form>
    </div>
  )
}

export default LoginPage