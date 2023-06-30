import React  from 'react'
import '../styles.css/home.css';
import Pricing from '../shared/Pricing';
import Goals from '../shared/Goals';
import Testimonial from '../Testimonial/Testimonial';
import Yellow from '../Yellow/Yellow';
import Searchbar from '../shared/Searchbar';
import Footer from '../Footer/Footer';


const Home = () => {
  return <section className='Hero' id="Hero">
    <div className="hero">
        <div className="hero-content">
            <h1>REACH YOUR BEST</h1>
            <p>Track your workouts , set goals , and monitor your progress.</p>
            <button className='btn'>Get Started</button>
            
        </div>
    </div>
    <Pricing/>
    <Goals/>
    <Yellow/>
    <Searchbar/>
    <Testimonial/>
    <Footer/>
    </section>
    
  
}

export default Home