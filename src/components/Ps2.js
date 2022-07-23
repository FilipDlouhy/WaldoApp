import React from 'react'
import ps2 from '../img/ps2.jpg'
function Ps2(props) {
  props.can(true)
  props.text1("Kratos")
  props.text2("Ratchet")
  props.text3("Jak")
  props.container(".ps2")
  props.lvl("Ps2")
  return (
    <div className='ps2'>
      <div id='kratos'></div>
      <div id="jak">
      </div>
      <div id='ratchet'></div>
      
       <img className={props.canS ? "show":"unshow"} src={ps2}></img> </div>
  )
}

export default Ps2