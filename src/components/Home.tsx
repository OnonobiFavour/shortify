import { useNavigate } from 'react-router-dom'
import Nav from './Nav'
import {useState} from 'react'
import Footer from './Footer'
import {BsBoxes} from 'react-icons/bs'
import {TbBrandGoogleAnalytics} from 'react-icons/tb'
import {CiBoxes} from 'react-icons/ci'
import {AiOutlineQrcode} from 'react-icons/ai'
import { BiMessageAltEdit } from 'react-icons/bi'

const Home = () => {

    const Navigate = useNavigate();
    const Handleclick = () =>{
        Navigate('/Signup')
    }
    
    const tryForFree = () =>{
        Navigate('/Login')
    }

    const Pricing = () =>{
        Navigate('/Pricing')
    }
  return (
    <section className="header_wrapper">
        <Nav></Nav>
        <header className="header">
            <div className="text">
                <h1 className='header_h1'>Shorten links for <span>Cleaner</span> online presence</h1>
                <p>Personalize your shortened URLs to align with your board identity. utilize custom slugs branded links, and domain customization option to reinforce your brand presence and enhance user engaement.</p>

                <div className="header-btn">
                    <button className="signUp" onClick={Handleclick}>sign Up</button>
                    <button className="learn-more">Learn more</button>
                </div>

                <div className="box">
                    <div className='icon_wrapper'><BsBoxes size={40}></BsBoxes> &rarr; <CiBoxes size={40}></CiBoxes></div>
                    <p>Lets create easily accessible links, QR codes and customized domain with shortify</p>
                </div>
            </div>
        </header>

        <div className="why_choose">
            <div className="flex1">
                <div className="box1" id='QR'>
                    <h1>Why choose <span>shortify</span></h1>
                    <p>Shortify can make it easier to share a more comprehensive and shorter link online, improve click-through rates, and provide useful tracking and analytics features.</p>
                </div>
                <div className="box1" >
                    <BsBoxes className = 'icon1' size={10}></BsBoxes>
                    <h4>URL shortening</h4>
                    <p>Shortify allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirect</p>
                </div>
                <div className="box1" >
                    <BiMessageAltEdit className = 'icon1' size={10}></BiMessageAltEdit>
                    <h4>Custom URL</h4>
                    <p>Shortify allows you to customize the shortened link with your own branding or keywords.This can help your link more memorable and helping you build your brand.</p>
                </div>
            </div>

            <div className="flex1">
                <div className="box1" >
                    <TbBrandGoogleAnalytics className = 'icon1' size={10}></TbBrandGoogleAnalytics>
                    <h4>Analytics</h4>
                    <p>Shortify helps users with tracking analysis. It gives account to every click a user might have performed</p>
                </div>
                <div className="box1">
                    <AiOutlineQrcode className = 'icon1' size={10}></AiOutlineQrcode>
                    <h4>QR code</h4>
                    <p>Generating QRcodes for the shortened link would be made smooth and easy with shortify, granting users an easy access to the created QR code.</p>
                </div>
                <div className="box1">
                    <AiOutlineQrcode className = 'icon1' size={10}></AiOutlineQrcode>
                    <h4>QR code</h4>
                    <p>Shortify allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirect</p>
                </div>
            </div>
        </div>


        <h1 className='pricingH1'>Choose <span>Pricing</span></h1>
        <div className="Price_tags">
            <div className="tag1">
                <h3>Zero Payment for 3months</h3>
                <p>Shorten your link for free for the first 3months of rgisteration.</p>
                <button onClick={tryForFree}>Try for free&rarr;</button>
            </div>

            <div className="tag2">
                <h3>$9/month subscription</h3>
                <p>For creation of links after 3 months of membership, User gets to pay $9 after the 3months free trial expires</p>
                <button onClick={Pricing}>Pricng&rarr;</button>
            </div>

            <div className="tag1">
                <h3>Pay $50 to Get Infinite Access</h3>
                <p>You can Create as much link as you can On shortify Platinum Access.</p>
                <button onClick={Pricing}>Try Offer&rarr;</button>
            </div>
        </div>

        <Footer></Footer>
    </section>
  )
}

export default Home