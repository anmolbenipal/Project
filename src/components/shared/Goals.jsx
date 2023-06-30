import React from 'react';
import '../styles.css/goals.css';


const Goals = () => {
  return <section className="goals" id='goals'>
    <h3 className="end">SET THE GOALS</h3>
    <h3 className="end">LOG WORKOUTS</h3>
    <h3 className="end of">STAY ON TRACK</h3>
    <button type="button" className="btn btn-lg btn-dark download-btn"><i
          className="ri-apple-fill"></i> Download</button>
        <button type="button" className="btn btn-lg btn-outline-light download-btn"><i
          className="ri-google-play-fill"></i> Download</button>

  </section>
}

export default Goals