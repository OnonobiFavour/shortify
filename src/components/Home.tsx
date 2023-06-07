// import {data } from './data'
import { useNavigate } from 'react-router-dom'
// import {data} from './data'
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

                <div className="box">
                    
                </div>
            </div>
        </header>

        <h1>Why chosse <span>shortify</span></h1>
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