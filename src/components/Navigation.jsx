import {Link} from 'react-router-dom'

export function Navigation() {
  return (
      <div className='flex justify-between py-3'>
      <Link to="/index">
        <h1 className='font-bold text-3x1 mb-4'>BabySitter app</h1></Link>
        <button className='bg-indigo-500 px-3 py-2 rounded-lg '> <Link to="/tasks-create">create a reservation</Link></button>
        <button className='bg-indigo-500 px-3 py-2 rounded-lg '> <Link to="/login">Login/Register</Link></button>
      </div>
  );
}
