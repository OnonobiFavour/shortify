import React from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from './Nav'


const Home = () => {
    const Navigate = useNavigate();
    const Handleclick = () =>{
        Navigate('/Signup')
    }
  return (
    <section className="header_wrapper">
        <Nav></Nav>
        <header className="header">
            <div className="text">
                <h1>Optimize Your Online Experinence with Our Advanced <span>URL Shortening</span> solution</h1>
                <p>Personalize your shortened URLs to align with your board identity. utilize custom slugs branded links, and domain customization option to reinforce your brand presence and enhance user engaement.</p>

                <div className="header-btn">
                    <button className="signUp" onClick={Handleclick}>sign Up</button>
                    <button className="learn-more">Learn more</button>
                </div>
            </div>
           
        </header>
    </section>
  )
}

export default Home