import React from 'react'
import { addTocartHandler } from '../screens/Home';
import { toast } from 'react-hot-toast';
export default function FoodItem(props) {
    
    // var imgsrc="https://media.istockphoto.com/id/488481490/photo/fish-biryani-with-basmati-rice-indian-food.jpg?s=612x612&w=0&k=20&c=9xEw3VOQSz9TP8yQr60L47uExyKF9kogRhQdlghlC00="
    let idd=props.food_id
    let imagesrc=props.imagesrc
    let tt=props.foodname
    let option=props.options

   // console.log(option);
    var keys = [];
    for (var k in option) keys.push(k);
    
    // option=JSON.parse(option)
    // console.log(option);
    // let sopt=Object.keys(option)
const handlerinvalid=()=>{
  toast.error('Please Log in')
}

  return (
    
    <div>

        <div className="card m-3 " style={{"width": "18rem"}}>
          <img className="card-img-top img-fluid" style={{"height":"220px","width":"220"}} src={props.imagesrc} alt="Some Food Image"/>
            <div className="card-body">
              <h5 className="card-title mx-2">{props.foodname}</h5>
              {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
              <div className='d-flex justify-content-start'>
                <select className='m-2 bg-success rounded p-1 '>
                  {
                    Array.from(Array(10),(e,i)=>{
                      return (
                        <option value={i+1} key={i+1} > {i+1} </option>
                      )
                    })
                  }
                </select>

                <select className='m-2 bg-light rounded p-1 '>
                  
                       {
                       keys.map((data)=>{
                        
                         return <option key={data} value={data}>{data}</option>
                       })
                       }
                     
                </select>


              </div>
              <div className='inline mt-2 mx-2 align-self-start'>Price :</div>
              <hr/>
              {
                localStorage.getItem('authToken')?(
                  <button className='btn btn-danger btn-sm' onClick={()=>props.handler({idd,imagesrc,tt,quantity:1})}>Add to cart</button>

                ):
                <button className='btn btn-danger btn-sm' onClick={handlerinvalid}>Add to cart</button>
              }
             
            </div>
        </div>


      </div>



  )
}
