import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import {useDispatch,useSelector}from 'react-redux'
import { userRegisterAction } from '../actions/user-action';

export default function Register({history}) {
    const [user, setuser] = useState({
        name:"",
        email:"",
        password:""
    });
    const dispatch=useDispatch()
    const onSubmitUserData=(e)=>{
        e.preventDefault()
        console.log(user);
        dispatch(userRegisterAction(user))
        history.push("/")
    }
  return <div className='container'>
      <div className="row">
          <div className="col-sm-6 offset-sm-3">
              <div className="card mt-3">
                  <div className="card-header">Register</div>
                  <div className="card-body">
                      <form onSubmit={onSubmitUserData}>
                          <input type="text"  onChange={e=> setuser({...user,name:e.target.value})} placeholder='Enter Name' required className="form-control" /><br />
                          <input type="email"   onChange={e=> setuser({...user,email:e.target.value})} placeholder='Enter Email' required className="form-control" /><br />
                          <input type="password" pattern=".{6,}" title="Six"  onChange={e=>setuser({...user,password:e.target.value})} placeholder='Enter Password' required className="form-control" /><br />
                          <button className="btn btn-success w-100">Login</button><br /><br />

                          <h5> Aleready Register? <Link to="/login" className='text-decoration-none'>Login</Link> </h5>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>;
}
