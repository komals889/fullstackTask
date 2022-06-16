import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useDispatch,useSelector}from 'react-redux'
import { userLoginAction } from '../actions/auth-action';
export default function Login({history}) {
    const [errorMessage, setErrorMessage] = React.useState("");
    const [errorMessagePass, setErrorMessagePass] = React.useState("");
    const [login, setlogin] = useState({
        email:"",
        password:""
    });
    const dispatch=useDispatch()
    const {userInfo}=useSelector(state=>state.user)
    const {userRegister}=useSelector(state=>state.register)
    const onSubmitUserLogin=(e)=>{
        e.preventDefault()
        console.log(login);
        if(login.email!=userRegister.email){

            setErrorMessage("Enter correct email")
        }
        if(login.password!=userRegister.password){

            setErrorMessagePass("Enter correct password")
        }
        dispatch(userLoginAction(login))
        
    }
    useEffect(() => {
        if(userInfo){
          if(userInfo?.employeeInfo?.isAdmin===true){
            history.push("/admin")
          }else{
            history.push(`/home`)
          }
        }
      }, [userInfo])
  return <div className='container'>
      <div className="row">
          <div className="col-sm-6 offset-sm-3">
              <div className="card mt-3">
                  <div className="card-header">Login</div>
                  <div className="card-body">
                      <form onSubmit={onSubmitUserLogin}>
                          <input type="text"  onChange={e=>setlogin({...login,email:e.target.value})} placeholder='Enter Email' required className="form-control" /><br />
                          {errorMessage? <div className="error"> {errorMessage} </div>:<></>} 
                          <input type="password"  onChange={e=>setlogin({...login,password:e.target.value})} placeholder='Enter Password' required className="form-control" /><br />
                          {errorMessage? <div className="error"> {errorMessagePass} </div>:<></>} 
                          <button className="btn btn-success w-100">Login</button><br /><br />
                          <h5>New User? <Link to="/register" className='text-decoration-none'>Register</Link> </h5>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>;
}
