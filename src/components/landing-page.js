import React from 'react'
import MainText from '../Assets/tonight-main.png'
import '../styles/landing-page.css'


const LandingPage = () => {
    return(
        <div className="landing-page-container">
            <h3 className="WhatsOn">WHATS ON..</h3>
            <img className="tonight-text" src={MainText} alt="tonight-logo"></img>
            <form className="search-form">
                <input className="search-bar" type="text" placeholder="Enter Your City Here"></input>
                <button className="submit" type="submit">WHATS ON?</button>
            </form>
        </div>
    )
}
  export default LandingPage