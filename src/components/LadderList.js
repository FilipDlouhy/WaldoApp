import React from 'react'
import { useEffect } from 'react'
function LadderList(props) {
  console.log(props.list)

 
  return (
<div className='neco'>
  <p>
    {props.list[0].lvl}
  </p>
</div>
  )
}

export default LadderList