import React from 'react'
import { Link } from 'react-router-dom'

function Lvls(props) {
  props.text1("Chose")
  props.text2("your")
  props.text3("LVL")
  return (
    <div className='lvls '>
        <Link  to='/ps2'><div className='div1'>  </div></Link>
        <Link  to='/ps1' ><div className='div2'>  </div></Link>
        <Link to='/ps3' ><div className='div3'>  </div></Link>
        <Link to='/ps4' ><div className='div4'>  </div></Link>
    </div>
  )
}

export default Lvls