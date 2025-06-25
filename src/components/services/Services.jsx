import React from 'react';
import "./Services.css";
import { FaChartLine } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa6";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa6";

function Services() {
    return (
        <div className='Services' id='services-offered'>
            <h2 className="services-heading">Services Offered</h2>

            <div className="services-offered">
                <div className="service-card">
                    <div className="card-icon"><FaChartLine /></div>
                    <h3 className="card-heading">SEO Optimization</h3>
                    <p className='card-info'>Enhance your website's ranking and drive organic traffic with our in-depth SEO strategies.</p>
                    <button className='view-more-btn'>View More</button>
                </div>

                <div className="service-card">
                    <div className="card-icon second-icon"><FaHashtag /></div>
                    <h3 className="card-heading">Social Media Management</h3>
                    <p className='card-info'>Grow and engage your audience with creative content and consistent brand messaging.</p>
                    <button className='view-more-btn'>View More</button>
                </div>

                <div className="service-card">
                    <div className="card-icon third-icon"><FaEnvelopeOpenText /></div>
                    <h3 className="card-heading">Email Marketing</h3>
                    <p className='card-info'>Keep your customers informed and coming back with professional, conversion-focused emails.</p>
                    <button className='view-more-btn'>View More</button>
                </div>

                <div className="service-card">
                    <div className="card-icon fourth-icon"><FaLaptopCode /></div>
                    <h3 className="card-heading">Web Design & Development</h3>
                    <p className='card-info'>Get a responsive, fast, and stunning website that turns visitors into customers.</p>
                    <button className='view-more-btn'>View More</button>
                </div>
            </div>
        </div>
    )
}

export default Services