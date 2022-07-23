import React from 'react'
import ps3 from '../img/ps3.jpg'
function Ps3(props) {
  props.can(true)
  props.text1("Noel")
  props.text2("Suckboy")
  props.text3("Princess")
  props.container(".ps3")
  props.lvl("Ps3")
  return (
    <div className='ps3'>
      <div id='noel'></div>
      <div id='suckboy'></div>
      <div id='princess'></div>
       <img  className={props.canS ? "show":"unshow"} src={ps3}></img> </div>
  )
}

export default Ps3