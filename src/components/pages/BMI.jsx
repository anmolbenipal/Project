import React from 'react';
import '../styles.css/bmi.css';
import '../javascript/bmi.js';

const BMI = () => {
  return <section className='bmi'>
    <section className="calulation">
          <div className="calculation_container container grid">
            <div className="calulation_content">
              <div className="section_titles">
                <h1 className="section_title-border" style={{fontWeight: 800}}>CALCULATE</h1>
                <h1 className="section_title">BMI</h1>
              </div>
              <p className="calculation_description">
                The Body Mass Index (BMI) calculator calculates body mass index from your weight and height.
              </p>
              <form action className="calculation_form" id="calculation_form" style={{justifyContent: 'center'}}>
                <div className="calculation_box">
                  <input type="number" placeholder="Height" className="calculation_input" id="calculation_cm" />
                  <label htmlFor className="calculation_label">cm</label>
                </div>
                <div className="calculation_box">
                  <input type="number" placeholder="Weight" className="calculation_input" id="calculation_kg" />
                  <label htmlFor className="calculation_label">kg</label>
                </div>
                <button className="btn btn-outline-light btn-lg" type="submit">
                  Calculate Now <i className="ri-arrow-right-line" />
                </button>
              </form>
              <p className="calculation_message" id="calculation_message" />
            </div>
          </div>
        </section>
  </section>
}

export default BMI