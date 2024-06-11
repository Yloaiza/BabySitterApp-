//aqui debo hacer el registro y la reserva
import {useForm} from 'react-hook-form'
import { getUserByEmail,} from '../api/user.api';
import {useNavigate,Link} from 'react-router-dom'

import {toast} from 'react-hot-toast'


export function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
  
    const onSubmit = handleSubmit(async (data) => {
      try {
        const response = await getUserByEmail(data.email);
        const user = response.data.find(user => user.email === data.email);
  
        if (user && user.password === data.password) {
          toast.success('Usuario autenticado', {
            position: 'bottom-right',
            style: {
              background: '#101010',
              color: '#fff'
            }
          });
          navigate('/dashboard'); // Redirigir a un panel de control o otra página
        } else {
          throw new Error('Credenciales incorrectas');
        }
      } catch (error) {
        toast.error('Error de autenticación', {
          position: 'bottom-right',
          style: {
            background: '#101010',
            color: '#fff'
          }
        });
      }
    });
  
    return (
      <div className='max-w-xl mx-auto'>
        <form onSubmit={onSubmit}>
          <input 
            type="email" 
            placeholder="Ingrese su email" 
            className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
            {...register("email", { required: true })}
          />
          {errors.email && <span>Este campo es obligatorio</span>}
  
          <input 
            type="password" 
            placeholder="Ingrese su contraseña" 
            className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
            {...register("password", { required: true })}
          />
          {errors.password && <span>Este campo es obligatorio</span>}
  
          <button className='bg-zinc-500 p-3 rounded-lg block w-full mt-3'>Login</button>
        </form>
   





        <button className='bg-zinc-500 p-3 rounded-lg block w-full mt-3'>
          <Link to="/register">Register</Link>
        </button>
      </div>
    );
  }