import React from 'react'
import './Destinations.css'
import khi from './assets/khi.jpeg'
import isb from './assets/isb.jpg'
import lhr from './assets/lhr.jpg'
import sial from './assets/sial.jpg'
import pes from './assets/pes.png'





const Destinations = () => {
  return (
    <div className="destination">
        <h2> Our Destinations</h2>
        <div className="cities">
            <div className="city">
                <img src={khi} alt=""/>
                <h3>Karachi</h3>

            </div>

            <div className="city">
                <img src={isb} alt=""/>
                <h3>Islamabad</h3>

            </div>


            <div className="city">
                <img src={lhr} alt=""/>
                <h3>Lahore</h3>

            </div>



            <div className="city">
                <img src={sial} alt=""/>
                <h3>Sialkot</h3>

            </div>


            <div className="city">
                <img src={pes} alt=""/>
                <h3>Peshawar</h3>

            </div>





            </div>
      
    </div>
  )
}

export default Destinations 
