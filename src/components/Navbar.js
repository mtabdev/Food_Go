import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
//import toast from 'react-hot-toast'
export default function Navbar() {

const navigator=useNavigate()
const logoutuser=()=>{
  localStorage.removeItem("authToken")
  //toast.error("Logged out sccuessfully")
  navigator("/login")
}

  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-white rounded">
        <Link className="navbar-brand fs-1" to="/">Food Go</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home </Link>
            </li>
            {(localStorage.getItem("authToken"))?
            <li className="nav-item active">
              <Link className="nav-link" to="/cart">My Orders </Link>
            </li>
            :""
          }

          </ul>
          <div className='d-flex'>
            {(!(localStorage.getItem("authToken")))?
            <div className='d-flex justify-content-center'>
              <Link className="nav-link mx-1 " to="/login">Login</Link>
              <Link className="nav-link mx-1 " to="/createUser">Sign Up</Link>
              </div>
            :<div className='d-flex justify-content-center'>
              <Link className='nav nav-link mx-2 p-1' to="/cart">Cart
              </Link>
              <div className='nav-link btn btn-danger mx-2 p-1' onClick={logoutuser}>
                Logout
              </div>

            </div>
            }
          </div>
        </div>
      </nav>

    </>
  )
}
