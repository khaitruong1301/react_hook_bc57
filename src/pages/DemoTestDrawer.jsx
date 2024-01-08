import React from 'react'
import { useDispatch } from 'react-redux'
import { handleDrawerAction, updateContentDrawerAction } from '../redux/Reducers/DrawerReducer';
import Login from './Login'
import Home from './Home';
import Register from './Register';
const DemoTestDrawer = () => {
    const dispatch = useDispatch();

    const handleLoginForm = () => {
        //Đưa dữ liệu form lên redux và open drawer
        const action = updateContentDrawerAction(<Login />)
        dispatch(action)  
    }

    const handleRegister = () => {
        const action = updateContentDrawerAction(<Register />)
        dispatch(action)
    }

  return (
    <div className='container'>
        <button className='btn btn-success mt-2' onClick={handleLoginForm}>Login</button>

        <button className='btn btn-primary mx-2 mt-2' onClick={handleRegister}>Register</button>

    </div>
  )
}

export default DemoTestDrawer