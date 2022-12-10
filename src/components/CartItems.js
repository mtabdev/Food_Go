import React from 'react'

export default function CartItems({imgSrc,pdt_id,pdt_name,pdt_qty}) {
  return (
    <div>
        
        <div>
                    <h3>{pdt_name}</h3>
                    <img src={imgSrc} style={{"width":"100px","height":"100px"}}></img>
                    {/* <button onClick={()=>decrement(pdt_id)}> - </button> */}
                    <p>{pdt_qty}</p>
                    <button onClick={()=>increment(pdt_id)}> + </button>
                    <hr/>
                    <button onClick={()=>deleteHandler(pdt_id)}> Delete </button>
                                        
                </div>
        
        
    </div>
  )
}
