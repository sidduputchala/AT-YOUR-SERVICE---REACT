import React from 'react'

function CartItem(props) {
  return (
    <div style={{width:"200px",height:"250px",display: 'flex', flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        <img src={props.img} style={{marginBottom:"30px",width:"180px",height:"120px",marginBottom:"20px",borderRadius:"10px"}}/>
        <h4>{props.name}</h4>
        {/* <p><i class="fa fa-star" style={{marginTop:"5px",marginRight:"5px"}}  aria-hidden="true"></i>{props.rating}({props.size})</p> */}
        <p style={{marginTop:"5px",marginBottom:"15px",fontSize:"30px"}}>{props.price}</p>
    </div>
  )
}

export default CartItem
