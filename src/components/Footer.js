import React from 'react'
import './Footer.css'
import airsial from './assets/airsiallogo.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="column">
          <img src={airsial} alt="" />
          <input type="text" id="lname" name="lname" placeholder="Enter Your Email"/>
        <button>SUBSCRIBE TO OUR NEWSLETTER</button>
     </div>

    <div className="column">
            <h4>OUR SERVICES</h4>
            <p>Where We Fly</p>
            <p>Flight Status</p>
            <p>Cargo</p>
            <p>Baggage</p>
            <p>Agent Portal</p>
            <p>Our Fleet</p>



    </div>

    <div className="column">
            <h4>ABOUT US</h4>
            <p>Company Information</p>
            <p>Board Of Management</p>
            <p>About</p>
          


    </div>

    <div className="column">
            <h4>CUSTOMER SERVICES</h4>

            <p> Careers</p> 
            <p> FAQs</p> 
            <p>  Terms And Conditions</p> 
            <p>  Privacy Policy</p> 
            <p>  Conditions Of Carriage</p> 
            <p>  Call Center</p> 
           


    </div>



    </div>
  )
}

export default Footer


