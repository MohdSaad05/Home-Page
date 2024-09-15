import React from 'react'
import "./styles.css";
import Button from '../Button';
import cashflow from "../../assets/cashflow-img4.png"
function Main() {
  return (
    <div className='main'>
    <div className='main-left'>
        <div className='heading'>
        <h1 className='heading-1'>Simple way</h1>
        <h1 className='heading-2'>to manage</h1>
        <h1 className='heading-1'>personal finances.</h1>

        </div>
        
        <div className='btn-main'>
            <Button text={"LOG IN"}/>
            <Button text={'Share'}/>
        </div>
    </div>
    <div className='img-container'>
        <img className='img' src={cashflow}/>
    </div>
    </div>
  )
}

export default Main