import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Ladder() {
  const [datas,setData] = useState()
   useEffect(()=>{
  
fetchData()



 },[])
 const fetchData = async ()=>{
  const {data} = await axios.get( 'https://waldoapp-b68a2-default-rtdb.europe-west1.firebasedatabase.app/.json')
  setData()

  Object.values(data.user).map(run=>{

let container = document.querySelector(".ladder")
let div = document.createElement("div");

div.innerHtml = div.innerHTML = ` <p>
Lvl: ${run.lvl}
    </p>
    <p>
    Name: ${run.name}
      </p>
      <p>
      Time: ${run.time}
      </p>`;
      container.appendChild(div)







  })
 }
  return (
    <div className='ladder'>
    
    </div>
  )
}

export default Ladder

/*map((run)=>{
      let ladder = document.querySelector("ladder")
let div = document.createElement("div")
div.innerHTML = ` <p>
Lvl:${run.lvl}
    </p>
    <p>
    Name:${run.name}
      </p>
      <p>
      Time: ${run.time}
      </p>`;
      ladder.appendChild(div)
  })*/