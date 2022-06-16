import React from 'react'
import { Link } from 'react-router-dom'

export default function TodoCard({singleTodo}) {
  return (
    <div> 
        <div className="card   bg-info mt-3 ">
                <div className='card-body'>
                     <div className='d-flex justify-content-between'>
                        <div>
                        <Link className='nav-link' to={`/task-detail/${singleTodo._id}`}><h1>{singleTodo.title}</h1></Link>
                            <p className='text-muted'>{singleTodo .shortDesc}</p>
                        </div>
                     <div className='align-item-center'>                      
                     </div>
                     </div>
                </div>
            </div>
    </div>
  )
}
