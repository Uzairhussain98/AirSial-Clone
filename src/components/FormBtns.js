import React from 'react'
import './Formbtns.css'
import plane from './assets/plane.png'
import book from './assets/bookings.png'
import clock from './assets/schedule.png'




const FormBtns = () => {

  return (
    <div>
    <div className="btns">


        <div className="btn">
        <img className="icon" src={plane} alt=""></img>
        <h4>Book Flight</h4>
        </div>

        <div className="btn"  >
        <img className="icon" src={book} alt=""></img>
        <h4>Bookings</h4>
        </div>

<div className="btn">
<img className="icon" src={clock} alt=""></img>
<h4>Schedule</h4>
</div>



      
    


    </div>

    </div>

  )
}


export default FormBtns
