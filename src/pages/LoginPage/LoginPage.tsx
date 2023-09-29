import { Link } from "react-router-dom";
import { FormEvent } from "react";
import { Toaster, toast } from 'sonner'
import { useAuthStore } from "../../store/auth.store";
import './loginpage.css';

//Components
import InputShared from '../../components/Shared/InputShared/InputShared';

//API
import { loginUser } from "../../api/auth.api";

function LoginPage() {

  const setToken = useAuthStore(state => state.setToken);
  const setProfile = useAuthStore(state => state.setProfile);

  const handleSubmitLoginPage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    if (!username || !password) {
      return toast.error('Por favor llena todos los campos');
    }
    try {
      const response =  await loginUser(username, password);
      setToken(response.data.token);
      setProfile(response.data.profile);
      console.log(response);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  } 

  return (
    <div className='mainContainerRegisterPage'>
      <Toaster position="top-right"/>
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