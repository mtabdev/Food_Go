import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import Navbar from '../components/Navbar';
import toast from 'react-hot-toast'

export default function Login() {

const [error,setError]=useState('');


const navigate=useNavigate()
  const [credentials, setcredentials] = useState({

    email: "",
    password: "",

  })
  const handleSubmit = async (e) => {

    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'

      },
      body: JSON.stringify({

        email: credentials.email,
        password: credentials.password,

      })
    })

    const json = await response.json()
    console.log(json);
    if (!json.success) {
      alert("Enter valid credentials")
      setError(json.errors)
    }
    if (json.success) {

      localStorage.setItem("authToken",json.authToken);
      console.log(localStorage.getItem("authToken"));
      toast.success("Logged in success")
      navigate("/")
    }
  }
  const onchange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }


  return (
    <>
      <Navbar/>
      <div className='container '>

      <p className="alert" role="alert" style={{"color":"red","display":"inline","padding":"10px"}}>{error}</p>


        <form onSubmit={handleSubmit}>



          <div className="mb-3">
          <i className="fa fa-envelope mx-2"></i>
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" onChange={onchange} aria-describedby="emailHelp" name='email' value={credentials.email} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
          <i className="fa fa-lock mx-2" ></i>
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" onChange={onchange} name='password' value={credentials.password} />
          </div>


          <button type="submit" className="mx-3 btn btn-success">Submit</button>
          <Link to="/createUser" className='btn btn-danger'>I am New</Link>
        </form>
      </div>



    </>
  )
}
