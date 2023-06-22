import { useNavigate } from 'react-router-dom'
import Nav from './Nav'
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
                    <p>Shortify allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirect</p>
                </div>
                <div className="box1">
                    <AiOutlineQrcode className = 'icon1' size={10}></AiOutlineQrcode>
                    <h4>QR code</h4>
                    <p>Shortify allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirect</p>
                </div>
                <div className="box1">
                    <AiOutlineQrcode className = 'icon1' size={10}></AiOutlineQrcode>
                    <h4>QR code</h4>
                    <p>Shortify allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirect</p>
                </div>
            </div>
        </div>
        <div className="features">
            {
                // data.map((item:any)=>{
                //     return(
                //         <div className="feature_list">
                //             <p>{item.feature}</p>
                //         </div>
                //     )
                // })
            }
        </div>
    </section>
  )
}

export default Home