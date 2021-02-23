import React from 'react'
import './Covid.css'
import covid from './assets/Covid.png'

const Covid = () => {
  return (
    <div className="covid">
        <div className="text">
            <h2>TRAVEL ASSISTANCE DURING COVID-19</h2>
            <p >&#128681;Avoid travelling to affected areas unless necessary.</p>
            <p>&#128681;Make sure you have all necessary vaccinations and travel medication.</p>
            <p>&#128681;Seek advice from your healthcare provider.</p>
            <p>&#128681;Don't travel if you have fever and cough.</p>
            <p>&#128681;If you become sick while travelling seek medical care immediately.</p>
            
                        </div>

                        <img src={covid} alt=""  className="image5"/>
    </div>
  )
}

export default Covid
