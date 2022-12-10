import React ,{useState}from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
export default function Signup() {
   const navigator=useNavigate()
    const [credentials, setcredentials] = useState({
        name:"",
        email:"",
        password:"",
        location:""
    })
    const handleSubmit=async(e)=>{

        e.preventDefault();
        const response=await fetch("http://localhost:5000/api/createUser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'

            },
            body:JSON.stringify({
                name:credentials.name,
                email:credentials.email,
                password:credentials.password,
                location:credentials.location
            })
        })

        const json=await response.json()
        console.log(json);
        if(!json.success){
            alert("Enter valid credentials")
        }
        else{
            toast.success("Successfully registered")
            navigator('/login')
        }
    }
const onchange=(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
}


    return (
        <>
        <Navbar/>
        <div className='container'>
            <form onSubmit={handleSubmit}>

            <div className="mb-3">
                    <i class="fa fa-user mx-2"></i>
                    <label htmlFor="name" className="form-label">Name (min characters 5)</label>
                    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onchange}/>
                   
                </div>

                <div className="mb-3">
                    <i class="fa fa-envelope mx-2"></i>
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" onChange={onchange} aria-describedby="emailHelp" name='email' value={credentials.email}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <i class="fa fa-lock mx-2" ></i>
                    <label htmlFor="exampleInputPassword1" className="form-label">Password (min characters 7) </label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={onchange} name='password' value={credentials.password}/>
                </div>
                <div className="mb-3">
                <i class="fa fa-map-marker mx-2"></i>
                    <label htmlFor="exampleInputLocation" className="form-label">Location</label>
                    <input type="password" className="form-control" id="exampleInputLocation" onChange={onchange} name='location' value={credentials.location}/>
                </div>

                <button type="submit" className="mx-3 btn btn-success">Submit</button>
                <Link to="/login" className='btn btn-danger'>Already a user</Link>
            </form>
            </div>

        </>
    )
}
