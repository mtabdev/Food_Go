import React from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
//import CartItems from './CartItems'
export default function Cart() {

    const dispatch = useDispatch()
    const { cartItems } = useSelector(state => state.cart)
    const inc = (id) => {
        dispatch({
            type: "addToCart",
            payload: { id }
        })
    }
    // const dec=(id)=>{
    //     dispatch({
    //         type:"decrement",
    //         payload:{id}
    //     })
    // }
    const del = (id) => {

        dispatch({
            type: "deleteFromCart",
            payload: id
        })

    }

    return (
        <div>
            <Navbar />
            <div className='container'>
                {/* need to pass props to cart items */}
                {
                    cartItems.length > 0 ? (
                        cartItems.map(i => {
                            // console.log(i);
                            return <CartItems key={i.idd} imgSrc={i.imagesrc} pdt_id={i.idd} pdt_qty={i.quantity} pdt_name={i.tt} increment={inc} deleteHandler={del} />
                        })
                    ) : <h1>No items Exists</h1>

                }
            </div>
            {/* <aside>
            Subtotal = 200
         </aside> */}
        </div>
    )
}


// 
const CartItems = ({ imgSrc, pdt_id, pdt_name, pdt_price, pdt_qty, increment, decrement, deleteHandler, }) => {
    return (
        <div className='row d-flex justify-content-center mt-3'>
            <hr />
            <div className='col-12 col-lg-6 col-md-6 col '>
                <h3>{pdt_name}</h3>

                <img src={imgSrc} style={{ "width": "100px", "height": "100px" }}></img>
                <button onClick={() => increment(pdt_id)} className="mx-3 p-1 btn btn-success" style={{ "width": "30px" }}> + </button>
                {/* <button onClick={()=>decrement(pdt_id)}> - </button> */}
            </div>
            <div className='col-lg-3 col-12 col text-center' >
                <h4>Quantity</h4>
                <p className='text-center mt-3'>{pdt_qty}</p>
            </div>
            <div className='col-lg-3 col-12 col text-center'>
                <button onClick={() => deleteHandler(pdt_id)} className="mx-3 p-1 btn btn-danger"> Delete </button>
                 

            </div>
            {/* <hr className='mx-2' /> */}
        </div>
    )
}