import React from 'react'
import "./Player.css"
import { AiOutlineHeart} from 'react-icons/ai';
import { useLocation} from "react-router-dom";

import { useEffect,useState } from 'react';
const imgcard="../../img/5887794b0637567447e71fa127a79508-1.jpg"

 function Playerdefault() {
 

 
  return (
    <div className='spe flex'>

<div className='right-part'>

    <div className='coontrol'>
    <h1> سُورَةُ ٱلْفَاتِحَةِ</h1>

<div className="controls-wrapper flex">

                  <audio autoPlay preload="auto" src="http://download.quranicaudio.com/quran/ahmed_ibn_3ali_al-3ajamy/001.mp3" className='voice' controls={true} />

  
       
        </div>

</div>
</div>


<div className='left-part'>

<div className='card'>

<img src={imgcard} alt="" />

<div className='text-card'>
<div className='text-icon flex'>
<h4>سُورَةُ ٱلْفَاتِحَةِ</h4>
<span><AiOutlineHeart /></span>

</div>
<p> آيـاتها : 7</p> 
<p> نزلت فى : 'مكة'</p>
</div> 

</div>
</div>

    </div>
  )
}
export default Playerdefault;
