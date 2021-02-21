import React from 'react'
import './Form.css'

const Form = () => {
  return (
      <div className="container">
    <div className="form">

        <div className="box">
            <h4>ORIGIN</h4>
            <select className="options" placeholder="Select Origin">
            <option value="" disabled selected>Select your option</option>
             <option value="khi">Karachi</option>
  <option value="lhr">Lahore</option>
  <option value="isb">Islamabad</option>
  <option value="sial">Sialkot</option>
  <option value="peshwar">Peshawar</option>

</select>

        </div>


        <div className="box">
            <h4>DESTINATION</h4>
            <select className="options">
            <option value="" disabled selected>Select your option</option>

  <option value="khi">Karachi</option>
  <option value="lhr">Lahore</option>
        </select>

        </div>


        <div className="box">
            <h4>DEPARTURE DATE</h4>
      <input type="date" className="options"/>

        </div>


        <div className="box">
            <h4>RETURN DATE</h4>
      <input type="date" className="options"/>

        </div>


        <div className="box">
            <h4>ONE WAY</h4>
      <input type="radio" className="options-radio" name="answer"/>
      

        </div>



        <div className="box">
            <h4>TWO WAY</h4>
      <input type="radio" className="options-radio" name="answer"/>

        </div>
        
        
        
            </div>

    <div className="form">

            <div className="box">
            <h4>PASSENGERS</h4>
            <select className="options">
            <option value="" disabled selected>Select your option</option>

  <option value="khi">Adult</option>
  <option value="lhr">Child</option>
  <option value="lhr2">Infant</option>

        </select>

        </div>

        <button className="btn_search" >Search</button>

        </div>


            </div>
  )}

export default Form 
