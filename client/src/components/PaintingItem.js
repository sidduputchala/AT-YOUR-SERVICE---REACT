import React from 'react'
import './css/PaintingItem.css'


function PaintingItem(props) {
  return (
    <div>
      <div className="painting-comp" style={{width:"300px",height:"350px",display: 'flex', flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        <img src={props.img} style={{width:"280px",height:"165px",marginBottom:"20px",borderRadius:"10px"}}/>
        <h3>{props.name}</h3>
        <p><i class="fa fa-star" style={{marginTop:"1px",marginRight:"5px"}}  aria-hidden="true"></i>{props.rating}({props.size})</p>
        <p style={{marginTop:"1px",fontSize:"30px"}} aria-hidden="true">{props.price}</p>
        
      
    </div>

    </div>
  )
}

export default PaintingItem
