import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import FoodItem from '../components/FoodItem'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'





export default function Home() {



   const AddTocartHandler=(options)=>{



    console.log(options);
    dispatch({
      type:"addToCart",
      payload:options
    })
    toast.success("Added to cart")
    
    }












  const [catdata, setcatdata] = useState([])
  const [search, setSearch] = useState('')
  const [fooddata, setfooddata] = useState([])

  const loadDatafromendpoint = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'

      }
    });
    response = await response.json()
    // console.log(response[0],response[1]);
    setcatdata(response[1])
    setfooddata(response[0])

  }


  useEffect(() => {
    loadDatafromendpoint()
  }, [])

  


  const dispatch=useDispatch()


  return (
    <div>
      <Navbar />

      <div className="input-group d-flex justify-content-center">
        <div className="form-outline">
        <label className="form-label d-flex justify-content-center" htmlFor="form1">Search</label>
          <input type="search" id="form1" className="form-control border border-dark" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
          
        </div>

      </div>

      <div className='container'>

        {
          catdata !== [] ? catdata.map(cdata => {
            return (
              <div className='row mb-3' key={cdata._id}>
                <div key={cdata._id} className="fs-3 m-3">
                  {cdata.CategoryName}
                </div>
                <hr />
                {
                  fooddata !== [] ? fooddata.filter((fooditem) => (fooditem.CategoryName === cdata.CategoryName) && fooditem.name.toLowerCase().includes(search.toLowerCase())  ).map(filtered_items => {
                    return (
                      <div key={filtered_items._id} className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
                        <FoodItem foodname={filtered_items.name} options={filtered_items.options[0]}
                          imagesrc={filtered_items.img} handler={AddTocartHandler} food_id={filtered_items._id}
                        />
                      </div>
                    )
                  }) : ""
                }

              </div>
            )
          }) : ""
        }




        <FoodItem />
      </div>



      <Footer />
    </div>
  )
}
