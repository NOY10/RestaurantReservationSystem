import React from 'react'
import "./Userinfo.css"
function Userbill({key,name,NoofOr,price,tolprice}) {
  return (
    <div key={key}>
      <div className="UMe">
        <p className='Up1'>{name}</p>
        <p className='Up2'>{NoofOr}</p>
        <p className='Up3'>{price}</p>
        <p className='Up4'>{tolprice}</p>
        <div className="UserMeB"></div>
      </div>
    </div>
  )
}

export default Userbill