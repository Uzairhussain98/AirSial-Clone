import React from 'react'
import './Boxes.css'
import pak from './assets/pak.jpg'
import cargo from './assets/Cargo.jpg'
import crew from './assets/Crew.jpg'
import food from './assets/food.jpg'
import Baggage from './assets/Baggage.png'



const Boxes = () => {
  return (
    <div className="container__boxes" >
        <div className="big__box">
        <h1>Where we fly</h1>
        <h3>Our destinations are the most visited places in Pakistan
</h3>
            <img className="image" src={pak} alt=""/>
            </div>

<div className="small">

            <div className="small__container">
            <div className="small__box">
            <h3>Inflight Meal And Beverages</h3>
            <h5>Food is our common Ground, A Universal Experience, Fresh and healthy</h5>
            <img className="img2" src={food} alt=""/>

            </div>
            <div className="small__box">
            <h3>Cargo</h3>
            <h5>Demand Speed And relaibility for the transport of food and goods</h5>
            <img className="img2" src={cargo} alt=""/>

            </div>


            </div>

            <div className="small__container2">
            <div className="small__box">
                <h3>Baggage</h3>
                <h5>Safe And Secure Baggage Trasportation</h5>
                <h3></h3>
                <h3></h3>

                <img className="img2" style={{marginTop: "15px" }} src={Baggage} alt=""/>

            </div>
            <div className="small__box">
            <h3>Our Crew</h3>
            <h5>We hire the most qualified and experienced crew for the passenger safety purpose</h5>
            <img className="img2"  src={crew} alt=""/>

            </div>


            </div>
            </div>



    </div>
  )
}

export default Boxes
