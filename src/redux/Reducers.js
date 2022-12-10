import {createReducer} from '@reduxjs/toolkit'

export const cartReducer=createReducer({

    cartItems:[],

    total:0,

},{

addToCart:(state,action)=>{
    const item=action.payload
    //console.log(item);
    const doesitexists=state.cartItems.find((i)=>i.idd===item.id)
    if(doesitexists){
        state.cartItems.forEach(i=>{
            if(i.idd===item.id)i.quantity+=1
        })
    }
    else{
        state.cartItems.push(item)
    }

},

// increaseit:(state,action)=>{
//     const incitem=action.payload.id
//     console.log(action.payload);
// },







// decrement:(state,action)=>{
//     const item=action.payload

//     const it=state.cartItems.find((i)=>i._id===item._id)
//     if(item.quantity>1){
//         state.cartItems.forEach(i=>{
//             if(i.idd===item.idd){
//                 i.quantity-=1;
//             }
//         });
//     }

// },
deleteFromCart:(state,action)=>{
    state.cartItems=state.cartItems.filter((i)=>i.idd!==action.payload);
}

});