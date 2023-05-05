import React from 'react'
import './Tables4.css'
function Tables4({tableno,book}) {
  return (
    <div className="Tables4">
        <div className="tab4">
            <p className="Tno">{tableno}</p>
        </div>
        <div className={'1'===book ? 'chair1 booked' : 'chair1 '}></div>
        <div className={'1'===book ? 'chair2 booked' : 'chair2 '}></div>
        <div className={'1'===book ? 'chair3 booked' : 'chair3 '}></div>
        <div className={'1'===book ? 'chair4 booked' : 'chair4 '}></div>
    </div>
  )
}

export default Tables4