import React from 'react';
import {Link} from 'react-router-dom'
import{useDispatch,useSelector} from 'react-redux'
import { userLogoutAction } from '../actions/auth-action';

export default function Navbar({history}) {
    const dispatch=useDispatch()
    const {userInfo}=useSelector(state=>state.user)
    const onClickLogout=async(e)=>{
        // e.preventDefault()
        // await dispatch(userLogoutAction())
        // await history.push("/login")
    }
  return <div  >
          <nav className="navbar navbar-expand-sm navbar-light bg-primary">
              <div className="container-fluid">
                  <a className="navbar-brand" href="#">Task</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarID"
                      aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  
                  <div className="collapse navbar-collapse" id="navbarID">
                      <div className="navbar-nav">
                           <ul className='navbar-nav ms-auto'>
                            
                            {
                                userInfo? <div className='dropdown'>
                                    <button  className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{userInfo.name}</button>
                                    <ul className='dropdown-menu'>
                                    <li><Link className="dropdown-item " aria-current="page" to='/LogOut' >Logout</Link></li>
                                    <li><Link className="dropdown-item " aria-current="page" to='/home' >Home</Link></li>
                                    <li><Link className="dropdown-item " aria-current="page" to='/add-task' >Add Todo</Link></li>
                                    </ul>
                                </div>:
                                <Link className="nav-link active" aria-current="page" to='/'>Login</Link>
                            }
                           </ul>
                           
                      </div>
                  </div>
              </div>
          </nav>
  </div>;
}
