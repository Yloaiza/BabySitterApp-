import {useNavigate} from 'react-router-dom'


export function TaskCard({reservations}) {

    const navigate = useNavigate()

  return (
    <div 
    className='bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer'
    onClick={()=> {
        navigate(`/tasks/${reservations.id}`)
    }} >
    <h1 className='font-bold uppercase'>Padre: {reservations.user}</h1>
    <p className='text-slate-400'>Niñera: {reservations.nanny}</p>
    <p className='text-slate-400'>Inicio reserva: {reservations.dateStart}</p>
    <p className='text-slate-400'>Fin reserva: {reservations.dateEnd}</p>
  </div>
  )
}

