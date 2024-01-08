import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { updateOnOkayAction } from '../redux/Reducers/DrawerReducer'
import { useDispatch } from 'react-redux'

const Register = () => {
  const frmRegis = useFormik({
    initialValues:{
      "email": "",
      "password": "",
      "name": "",
      "gender": true,
      "phone": ""
    },
    onSubmit:(values) => {
        console.log('handle register')
    }
  })
  const dispatch = useDispatch()
  useEffect(()=>{
    const action = updateOnOkayAction(frmRegis.handleSubmit);
    dispatch(action)
  },[])  


  return (
    <form className='container' onSubmit={frmRegis.handleSubmit}>
        <h3>Register</h3>
        <div className='form-group'>
          <p>Email</p>
          <input className='form-control' id='email' name='email' onChange={frmRegis.handleChange} />
        </div>
        <div className='form-group'>
          <p>password</p>
          <input className='form-control' id='password' name='password' type="password" onChange={frmRegis.handleChange}/>
        </div>
        <div className='form-group'>
          <p>Name</p>
          <input className='form-control' id='name' name='name' onChange={frmRegis.handleChange}/>
        </div>
        <div className='form-group'>
          <p>phone</p>
          <input className='form-control' id='phone' name='phone' onChange={frmRegis.handleChange} />
        </div>
        <div className='form-group'>
          <p>Gender</p>
          <select className='form-control' id='gender' name='gender' onChange={frmRegis.handleChange}>
            <option value={true}>Male</option>
            <option value={false}>Female</option>
          </select>
        </div>
        <div className='form-group'>
          <button className='btn btn-primary mt-2'>Register</button>
        </div>
    </form>
  )
}

export default Register