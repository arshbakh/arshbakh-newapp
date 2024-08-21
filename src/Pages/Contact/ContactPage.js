import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactPage.scss";
import Navbar from "../../Navbar/NavbarPage";
import Logo from '../../assets/images/ABLogo.png'
import {Link} from 'react-router-dom'

function ContactPage() {


    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setSubmitted(true);
    }

  return (
    <div>
          <div className="outterNav-div">
      
      <div className="innerNav-div">
        <div className="img-div">
          <a href="/">
          <img className="mainLogo" src={Logo} />
          </a>
        </div>
        <div className="quicktap">

          <Link to = '/resume' className="navbarTags">resume</Link>
        </div>
    </div>
  </div>
      <div className="contactStyling">
<h3>Contact</h3>
<form


          className="formField"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            width: "50%",
          }}
          action="https://formspree.io/f/mpzgwnvd"    
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
          
        >

            <h3> Contact</h3>
          <input
            type="text"
            name="name"
            id="name"
            class="form-control"
            placeholder="Name"
            aria-required="true"
            required=""
          />
            <input
            type="text"
            name="name"
            id="name"
            class="form-control"
            placeholder="Email"
            aria-required="true"
            required=""
          />
          <textarea
            name="message"
            id="message"
            rows="5"
            class="form-control"
            placeholder="Message..."
            aria-required="true"
            required=""
  
          />
          <center>
          <div className="sendContainer" style={{ marginTop: "unset" }}>
            <button className="contactBtn" type="submit" value="Send">
              Send
            </button>
          </div>
          </center>
        </form>
        </div>
        </div>
  )
        }
export default ContactPage;
