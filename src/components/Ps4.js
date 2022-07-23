import React from 'react'
import ps4 from '../img/ps4.jpg'
function Ps4(props) {
  props.can(true)
  props.text1("Arthur")
  props.text2("Atreus")
  props.text3("Spiderman")
  props.container(".ps4")
  props.lvl("Ps4")
  return (
    <div className='ps4'>
      
      <div id='arthur'></div>
      <div id='atreus'></div>
      <div id='spiderman'></div>
      
      
      <img className={props.canS ? "show":"unshow"}  src={ps4}></img> </div>
  )
}

export default Ps4