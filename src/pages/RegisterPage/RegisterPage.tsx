import { Link } from "react-router-dom";
import { FormEvent } from "react";
import { Toaster, toast } from 'sonner'
import './registerpage.css';

//Components
import InputShared from '../../components/Shared/InputShared/InputShared';

//API
import { registerUser } from "../../api/auth";

function RegisterPage() {

  const handleSubmitRegisterPage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    const passwordRepeated = (e.currentTarget.elements[2] as HTMLInputElement).value;
    if (!username || !password || !passwordRepeated){
      toast.error('Por favor llena todos los campos');
      return;
    }else {
      if (password !== passwordRepeated) {
        toast.error('Las contraseñas no coinciden');
        return;
      }
      try {
        const response = await registerUser(username, password);
        toast.success(response.data.message)
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      }
    }
}
  

  return (
    <div className='mainContainerRegisterPage'>
      <Toaster position="top-right"/>
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