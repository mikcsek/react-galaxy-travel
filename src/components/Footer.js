import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaMailBulk, FaSearchLocation, FaPhone } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer-container">
            <div className="left-class">

                <div className="location">
                    <FaSearchLocation size={20} style={{color: "#fff", marginRight: '2rem'}} />
                    <div>
                        <p>Űr utca 1.</p>
                        <h4>1094 Budapest</h4>
                    </div>
                </div>

                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color: "#fff", marginRight: '2rem'}}/>
                        06-80-123-4567
                    </h4>
                </div>

                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color: "#fff", marginRight: '2rem'}}/>
                        utazas@galaxytravel.hu
                    </h4>
                </div>

            </div>

            <div className="right">

                <h4>Rólunk</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quia adipisci molestias delectus quos soluta vel accusantium quibusdam magnam, repellat hic ex sint quam sit dicta obcaecati sequi. Nulla rem sapiente nemo pariatur consequuntur doloremque et ratione qui, maxime obcaecati similique delectus, assumenda ut unde facere, aperiam neque corrupti amet?</p>
                <div className="social">
                    <FaFacebook size={30} style={{color: "#fff", marginRight: '1rem'}}/>
                    <FaTwitter size={30} style={{color: "#fff", marginRight: '1rem'}}/>
                    <FaLinkedin size={30} style={{color: "#fff", marginRight: '1rem'}}/>
                    
                </div>
            </div>


        </div>
    </footer>
  )
}

export default Footer