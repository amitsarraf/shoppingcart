import React, { useState } from 'react'

const Cart = ({state, dispatch}) => {

    const {cart} = state
    const[total, setTotal] = useState(0)

  return (
    <div style={{display:"flex", flexDirection:'column', margin: 10, padding:10, width:'20%'}}>

        <b style={{fontSize:30, alignSelf:'center'}}>Cart</b>
        <b style={{ alignSelf:'center'}}>Total : {total}</b>
        {console.log(cart, "cart")}
        {cart.length>0?<>
            {cart.map((el)=>{
                return (
                    <ul>
                        <li>{el.name}{" "}{" "}{el.price}</li>
                    </ul>
                )
                   
            })}
        
        </>: <b>No Product found</b>}
    </div>
  )
}

export default Cart