//aqui debo hacer el registro y la reserva
import {useForm} from 'react-hook-form'
import { createUsers,} from '../api/user.api';
import {useNavigate,Link} from 'react-router-dom'

import {toast} from 'react-hot-toast'

export function Register() {
  const {register,handleSubmit , formState: {errors}} = useForm()
  const navigate = useNavigate()

   const onSubmit = handleSubmit(async (data) =>{
      await  createUsers(data)
      toast.success('user creada',{
        position: 'bottom-right',
        style:{
          background: '#101010',
          color: '#fff'
        }
      })
    
    navigate('/login')

  });



  return (
    <div className='max-w-xl mx-auto'>
      <form onSubmit={onSubmit}>

      <textarea name="" id="" rows='3' placeholder="ingrese su nombre"
          className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
        {...register("name",{required:true})} ></textarea>
         {errors.name && <span>this field is required</span>}


         <textarea name="" id="" rows='3' placeholder="ingrese su email"
          className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
        {...register("email",{required:true})} ></textarea>
         {errors.email && <span>this field is required</span>}

        <input type="text" placeholder="ingrese su telefono" 
        className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
        {...register("phone",{required:true})} />
        {errors.phone && <span>this field is required</span>}
        


        <textarea name="" id="" rows='3' placeholder="ingrese su contrasena"
          className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
        {...register("password",{required:true})} ></textarea>
         {errors.password && <span>this field is required</span>}


        <button  className='bg-zinc-500 p-3 rounded-lg block w-full mt-3'>register</button>
      </form>
      <button  className='bg-zinc-500 p-3 rounded-lg block w-full mt-3'> <Link to="/login">Login</Link></button>
        

    </div>
  )
}

