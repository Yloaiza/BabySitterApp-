//aqui debo hacer el registro y la reserva
import {useForm} from 'react-hook-form'
import { createReservation,deleteReservation,updateReservation,getReservation } from '../api/reservations.api';
import {useNavigate,useParams} from 'react-router-dom'
import {useEffect} from 'react'
import {toast} from 'react-hot-toast'

export function TaskFormPage() {
  const {register,handleSubmit , formState: {errors},setValue} = useForm()
  const navigate = useNavigate()
  const params = useParams()

   const onSubmit = handleSubmit(async (data) =>{
    if (params.id) {
      await updateReservation(params.id,data)
      toast.success('Tarea actualizada',{
        position: 'bottom-right',
        style:{
          background: '#101010',
          color: '#fff'
        }
      })
    }else {
      await  createReservation(data)
      toast.success('Tarea creada',{
        position: 'bottom-right',
        style:{
          background: '#101010',
          color: '#fff'
        }
      })
    }
    navigate('/tasks')

  });


useEffect(()=> {
  async function loadReservation() {
    if (params.id) {
      const {data} = await  getReservation(params.id);
      setValue('nanny',data.nanny)
      setValue('user',data.user)
      setValue('dateStart',data.dateStart)
      setValue('dateEnd',data.dateEnd)
    }
  }
  console.log(loadReservation);
  loadReservation();
 },[]);

  return (
    <div className='max-w-xl mx-auto'>
      <form onSubmit={onSubmit}>

      <textarea name="" id="" rows='3' placeholder="date start fecha/mes/dia"
          className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
        {...register("dateStart",{required:true})} ></textarea>
         {errors.dateStart && <span>this field is required</span>}


         <textarea name="" id="" rows='3' placeholder="date end fecha/mes/dia"
          className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
        {...register("dateEnd",{required:true})} ></textarea>
         {errors.dateEnd && <span>this field is required</span>}

        <input type="text" placeholder="id Nanny" 
        className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
        {...register("nanny",{required:true})} />
        {errors.nanny && <span>this field is required</span>}
        


        <textarea name="" id="" rows='3' placeholder="id User"
          className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
        {...register("user",{required:true})} ></textarea>
         {errors.user && <span>this field is required</span>}


        <button  className='bg-zinc-500 p-3 rounded-lg block w-full mt-3'>Save</button>
      </form>

        {
          params.id && (
            <div className='flex justify-end'>
                        <button
            className='bg-red-500 p-3 rounded-lg block w-48 mt-3'
          onClick={async ()=> {const accepted = window.confirm('estas seguro')
              if(accepted){
                await  deleteReservation(params.id)
                toast.success('Tarea borrada',{
                  position: 'bottom-right',
                  style:{
                    background: '#101010',
                    color: '#fff'
                  }
                })
                navigate("/tasks");
              }           
          }}>
            delete</button>
            </div> 
       ) }

    </div>
  )
}

