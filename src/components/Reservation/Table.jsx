import {useState,useEffect} from 'react'
import Tables2 from "./Tables/Tables2"
import Tables4 from "./Tables/Tables4"
import './Table.css'
function Table() {
  const [clicked,setClicked] = useState(false);
  function click() {
    setClicked(!clicked)
  }

  return (
    <div className="table">
      <div className="t2">
        <div className="room2">
          <Tables4 tableno="01" book="1"/>
        </div>
        <div className="room2">
          <Tables2 tableno="02" book="1"/>
        </div>
        <div className="room2">
          <Tables2 tableno="03"/>
        </div>
        <div className="room2">
          <Tables4 tableno="04"/>
        </div>
        <div className="room2">
          <Tables4 tableno="05"/>
        </div>
        <div className="room2">
          <Tables2 tableno="06"/>
        </div>

        <div className="room2">
          <Tables2 tableno="07"/>
        </div>
        <div className="room2">
          <Tables4 tableno="08"/>
        </div>
        <div className="room2">
          <Tables4 tableno="09"/>
        </div>
        <div className="room2">
          <Tables2 tableno="10"/>
        </div>
        <div className="room2">
          <Tables2 tableno="11"/>
        </div>
        <div className="room2">
          <Tables4 tableno="12"/>
        </div>
        <div className="room2">
          <Tables4 tableno="13"/>
        </div>
        <div className="room2">
          <Tables2 tableno="14"/>
        </div>
        <div className="room2">
          <Tables2 tableno="15"/>
        </div>
        <div className="room2">
          <Tables4 tableno="16"/>
        </div>

      </div>
    </div>
  )
}

export default Table