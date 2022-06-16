import React,{useState,useEffect} from 'react'
import axios from 'axios'
import{useSelector,useDispatch}from 'react-redux'
import { getAllTodoAction } from '../actions/todo-action'

export default function AddTask({history}) {
    const [formData, setformData] = useState({
        title:"",
        shortDesc:"",
        desc:"",
        publish:""
    })  
    const [result, setresult] = useState(false)
    const dispatch=useDispatch()
    const {userInfo}=useSelector(state=>state.user)
    const addData=async(e)=>{
        e.preventDefault()
        console.log(formData);
        const config = {
            headers: {
                authorization:userInfo.token
            }
       }
        const result=await axios.post(`${process.env.REACT_APP_URL}/api/v1/todo`,formData,config)
        console.log(result);
        setresult(result.data.success)
        setformData( {
            title:"",
            shortDesc:"",
            desc:"",
            publish:""
    
        })
        await dispatch(getAllTodoAction())
        history.push(`/task/${userInfo.id}`)
    }
  return (
    <div> 
        <div className='container'>
            <div className="row">
                <div className="col-sm-8 offset-sm-2  ">
                    <div className="card mt-3">
                        <div className="card-header bg-info">
                            <h3 className='text-center'>Add Todo</h3>
                        </div>
                        <div className="card-body bg-dark text-light">
                            {result && <div className='alert alert-success'>Blog Added</div>}
                            <form onSubmit={addData}>
                            <input type="text" onChange={(e)=>{
                                setformData({...formData,title:e.target.value})
                            }} className="form-control" maxLength={50}  required placeholder='Enter Todo Title' /><br />
                            <input type="text" onChange={(e)=>{
                                setformData({...formData,shortDesc:e.target.value})
                            }} className="form-control" required placeholder='Enter Short Description' /><br />
                            <input type="text" onChange={(e)=>{
                                setformData({...formData,desc:e.target.value})
                            }} className="form-control" maxLength={120} required placeholder='Enter Description' /><br />
                            <select  onChange={(e)=>{
                                setformData({...formData,publish:e.target.value})
                            }} className='form-select' required>
                                <option value="">Select any one</option>
                                <option value="true">true</option>
                                <option value="false">false</option>
                            </select><br />
                            <button className="btn btn-info  w-100">Add Blog</button>
                            </form>
                        </div>
                    </div>                     
                </div>
            </div>     
        </div> 
    </div>
  )
}
