import React from 'react'
import "./About.css";
import abtUs1 from "../../assets/about-us.webp";
import abtUs2 from "../../assets/about-us2.jpeg";

function About() {
    return (
        <section className='About' id='about-us'>
            <div className="abt-first">
                <div className="abt-content">
                    <h2 className='abt-heading'>About Us</h2>

                    <p className='abt-subheading'>CoreAssist is a results-driven digital marketing agency committed to helping brands connect with their audience and grow online. Our expert team combines creativity, data, and technology to create impactful campaigns tailored to your unique goals.</p>
                </div>

                <img className="abt-img" src={abtUs1} alt="about-img1" />
            </div>

            <div className="abt-second">
                <img className="abt-img" src={abtUs2} alt="about-img2" />

                <div className="abt-content">
                    <h3 className='abt-heading'>Our Mission - Helping businesses thrive through smart, scalable digital marketing solutions.</h3>

                    <p className='abt-subheading'>Whether you're a startup or a seasoned enterprise, we provide transparent, effective strategies that focus on delivering real, measurable outcomes. We believe in working closely with our clients as a true extension of their team.</p>
                </div>
            </div>
        </section>
    )
}

export default About