import React from 'react'
import './Footer.css'

// react icons

import { FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
  return (
     <div className="global_container_footer" id='footer'>
         

       <div className='container_log'>
        <div className="logo">
             <img src="../components/pictures_folder/logo_changed_version.jpg" alt="" />
        </div>

       <div className="right_content">
           
            <div className="contact_info">
              <h2>Services</h2>
              <ul className="services_list">
                <li>Jacuzzi à domicile</li>
                <li>Installation rapide</li>
                <li>Propre et sécurisée</li>
                <li>Événements spéciaux</li>
                <li>Idéal pour anniversaires</li>
                <li>Soirées et moments en famille</li>
              </ul>

            </div>

           

            
            <div className="contact_info">
                <h2>About</h2>
                <p>
                 Offrez-vous un moment  <br /> de détente à domicile. <br />
                 Votre confort est notre priorité. <br />
                 Une expérience spa unique, chez vous.

                </p>
            </div>

            
            <div className="contact_info">
                <h2 >Location</h2>
                <p>
                    <span style={{color:"#B8860B"}}><FaLocationDot /></span> 
                  Algiers, Algeria <br/>
                  Location jacuzzi dz

                </p>
            </div>

    


        </div>
       </div>

       <hr id='line'/>

             <div class="contact_nous">
                <h2>Contactez-nous</h2>
            
               <div className="contact_paragraph">
             
                
                 <p><span><BsFillTelephoneFill /></span>0551 48 74 73</p> 
                 <p> <span><BsFillTelephoneFill /></span>05 50 92 56 00  </p>
                 <p><span><IoLogoWhatsapp /></span> 055 148 74 73</p> 
                 <p><span><FaInstagram /> </span> @spa_chez_vous_jacuzzi </p>

                 <br/>
              
               </div>
               
              <p> &copy; 2026 Spa Chez Vous  Jacuzzi à domicile. Tous droits réservés.</p>

            </div>

       



     </div>
  )
}

export default Footer