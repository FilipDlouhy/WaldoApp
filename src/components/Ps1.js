import React from 'react'
import ps1 from '../img/ps1.jpg'
function Ps1(props) {
  props.text1("Crash")
  props.text2("Sparky")
  props.text3("Snake")
  props.can(true)
  props.container(".ps1")
  props.lvl("Ps1")
  return (
    <div className='ps1'> 
    <div id='crash'>

    </div>
    
    <div id='sparky'>

</div>

<div id='snake'>

    </div>
    <img className={props.canS ? "show":"unshow"}  src={ps1}></img> </div>
  )
}

export default Ps1