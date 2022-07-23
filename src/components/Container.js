import React, { useState,useEffect } from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import Lvls from './Lvls'
import Ps1 from './Ps2'
import Ps2 from './Ps1'
import Ps3 from './Ps3'
import Ps4 from './Ps4'
import Ladder from './Ladder'

function Container() {

const [click1,setClick1] = useState()
const [index,setIndex] = useState([])
const [lvl,setLvl] =useState()
 const [containero, setContainer] =useState(" ")
  const [text1,setText1]= useState("Choose ")
  const [text2,setText2]= useState("your")
  const [text3,setText3]= useState("LVL")
  const [heroes,setHeroes] = useState([])
const [can, setCan] = useState(false)
const [modal,setModal] =useState(false)


const [time, setTime] = React.useState(0);
const [timerOn, setTimerOn] = useState(false);


React.useEffect(() => {
  let interval = null;

  if (timerOn) {
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);
  } else if (!timerOn) {
    clearInterval(interval);
  }

  return () => clearInterval(interval);
}, [timerOn]);

useEffect(()=>{
  if(can){
    setTimerOn(true)
  }
  else{
    setTimerOn(false)
  }
  if(index.length>2){
    setTimerOn(false)
setCan(false);
}
})

 function getHero(event){
  setTimerOn(0)
  if(can === false){
setHeroes([])
  }else{


 if(event.target.id === "ceckLi"){

let classClick=event.target.className

heroes.map(hero=>{
  if(hero.toUpperCase()===click1){
    console.log(hero)
    console.log(hero)
    if(hero=== classClick){
      let herid = document.querySelector(`#${classClick}`)
      let herclass = document.querySelector(`.${classClick}`)
      herid.classList.add("chosen")
      herclass.classList.add("chosen")
      let arr = heroes
      let indexes = index
      arr.map((hero,index) =>{
      if(hero.toUpperCase() ===click1 ){
       indexes.push(index)
      }
      })
      setIndex(index)
      console.log(indexes)
      if(indexes.length >2){
        console.log("aaa")
        setTimerOn(false)
      setModal(true)
      let time = document.getElementById("time")
      let timer = document.getElementById("timer")
      time.textContent = timer.textContent
      let lediv = document.querySelector(".heroes-div")
      lediv.remove()
      }
    }

  }
})
  

 }

 else{
  setClick1( event.target.id.toUpperCase())
if(heroes.length === 0){
setHeroes([text1,text2,text3])
}

  let container = document.querySelector(containero)
      container.lastChild.remove()
      let div = document.createElement('div')
      div.classList.add("heroes-div")
      let check =index.length;

 if(check === 1){
  if(index.includes(0)){
    div.innerHTML = `<ul>
    <li id="ceckLi" class="${text1} chosen">${text1} </li>
    <li id="ceckLi" class="${text2}">${text2}  </li>
    <li id="ceckLi" class="${text3}">${text3}  </li>
    </ul> `
  }
  else if(index.includes(1)){
    div.innerHTML = `<ul>
    <li id="ceckLi" class="${text1}">${text1} </li>
    <li id="ceckLi" class="${text2} chosen">${text2}  </li>
    <li  id="ceckLi"class="${text3}">${text3}  </li>
    </ul> `
  
  }
  else if(index.includes(2)){
    div.innerHTML = `<ul>
    <li  id="ceckLi"class="${text1}">${text1} </li>
    <li id="ceckLi" class="${text2}">${text2}  </li>
    <li id="ceckLi" class="${text3} chosen">${text3}  </li>
    </ul> `
  
  }
 }     

else if(check == 2){

   if(index.includes(2)&&index.includes(0)){
    div.innerHTML = `<ul>
    <li id="ceckLi" class="${text1} chosen">${text1} </li>
    <li id="ceckLi" class="${text2}">${text2}  </li>
    <li id="ceckLi" class="${text3} chosen">${text3}  </li>
    </ul> `
}else   if(index.includes(0)&&index.includes(1)){
  div.innerHTML = `<ul>
  <li  id="ceckLi"class="${text1} chosen">${text1} </li>
  <li  id="ceckLi"class="${text2} chosen">${text2}  </li>
  <li  id="ceckLi"class="${text3}">${text3}  </li>
  </ul> `
}
else   if(index.includes(1)&&index.includes(2)){
  div.innerHTML = `<ul>
  <li  id="ceckLi"class="${text1}">${text1} </li>
  <li id="ceckLi" class="${text2} chosen">${text2}  </li>
  <li id="ceckLi" class="${text3} chosen">${text3}  </li>
  </ul> `
}
}
else if (check===3){
  div.innerHTML = `<ul>
  <li id="ceckLi" class="${text1} chosen">${text1} </li>
  <li id="ceckLi"  id="ceckLi"class="${text2} chosen ">${text2}  </li>
  <li class="${text3} chosen">${text3}  </li>
  </ul> `
}
else{

  div.innerHTML = `<ul>
  <li id="ceckLi" class="${text1}">${text1} </li>
  <li id="ceckLi" class="${text2}">${text2}  </li>
  <li id="ceckLi" class="${text3}">${text3}  </li>
  </ul> `
}

  container.appendChild(div)
      div.style.left = event.screenX+80+'px';
      div.style.top = event.screenY+80+'px';
  

    }
 }
 
 }

  return (
    <Router>
  <div className='container' onClick={getHero}>

        <header>
            <ul>
               <Link to='/ladder'><li className={can ? "unshow li": "show li"}>
                    Leaderboard
                </li></Link>

                <li >
    <ul className={can ? "hero-ul":"aaaa"}>
  <li className='headertext' id={text1} >
{text1}
<img  className={can ?"show" : "unshow"} src={ ` ./img/${text1}.jpg ` }></img>
</li>
<li className='headertext' id={text2}>
    {text2}
    <img  className={can ?"show" : "unshow"} src={ ` ./img/${text2}.jpg ` }></img> 
</li>
<li className='headertext' id={text3}>
{text3}
<img  className={can ?"show" : "unshow"} src={ ` ./img/${text3}.jpg ` }></img> 
</li>
    </ul>
    </li>
                <li className='li'>
                <Link to='/lvl' onClick={()=>{setCan(false) 
             
                let headers= document.querySelectorAll(".headertext")
          headers.map(text=>text.classList.remove("chosen"))                
                
                if(can ){
                  setTimerOn(true)
                }else{
                  setTimerOn(false)
                }
                
                
                
                }}> Find gaming characters</Link>    
                </li>
        <li id='timer' className={can ?"show" : "unshow"}> <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span></li>
            </ul>
        </header>

        <form className={modal?"win-modal show": "unshow"}> 
    <input name="name" id="name" onChange={(event)=>{console.log(event.target.value)}} type="text" placeholder="enter your name"></input>
<p id="time" type="text"> </p>
<button onClick={(event)=>{
  event.preventDefault()
let name = document.getElementById("name")
let time = document.getElementById("time")

let objetct = {
  name:name.value
  ,time:time.textContent
}

console.log(objetct)
fetch('https://waldoapp-b68a2-default-rtdb.europe-west1.firebasedatabase.app/user.json',{
  method:'POST',
  headers:{
    "Content-type":"application/json"
  },
  body:JSON.stringify({
    name:name.value
    ,time:time.textContent,
    lvl:lvl
  })
})
setModal(false)
}} id="formBTN"> Send </button>
</form>
    <Routes>
    <Route path='/lvl' element={<Lvls text1={setText1} can={setCan} timer={setTimerOn}  text2={setText2}  text3={setText3} />} />
    <Route path='/ladder' element={<Ladder />} />
    <Route path='/ps1' element={<Ps1  lvl={setLvl} canS={can} container={setContainer} timer={setTimerOn}  text1={setText1} can={setCan} text2={setText2}  text3={setText3} />} />
  <Route path='/ps2' element={<Ps2 lvl={setLvl} canS={can} container={setContainer}  timer={setTimerOn}  text1={setText1} can={setCan} text2={setText2}  text3={setText3} />} />
  <Route path='/ps3' element={<Ps3 lvl={setLvl} canS={can} container={setContainer}  timer={setTimerOn}  text1={setText1} can={setCan} text2={setText2}  text3={setText3} />} />
  <Route path='/ps4' element={<Ps4  lvl={setLvl} canS={can} container={setContainer} timer={setTimerOn}  text1={setText1} can={setCan} text2={setText2}  text3={setText3} />} />
 
    </Routes>



    </div>
    </Router>
  
  )
}

export default Container

/* <Route path='/info' element={<Info/>} />
*/