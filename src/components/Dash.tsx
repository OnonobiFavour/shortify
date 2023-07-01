import React, {useState} from 'react'
import firebase from 'firebase/app';
import CopyToClipboard  from 'react-copy-to-clipboard'
import db from '../config/config'
import 'firebase/firestore'
// import axios from 'axios'
import './Dash.css'
import {AiOutlineQrcode} from 'react-icons/ai'
import {HiOutlineScissors} from 'react-icons/hi'
import {MdOutlineDomainAdd} from 'react-icons/md'
import {BiCustomize} from 'react-icons/bi'
import {RxExit} from 'react-icons/rx'
import TinyUniqueId from 'tiny-unique-id';

const Dash = () => {
    const [originalUrl, setOriginalUrl] = useState('');
    const [copied, setCopied] = useState(false)
    const [shortenedUrl, setShortenedUrl] = useState('');
    const [count, setCount] = useState(0)
  
    const handleShorten = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const slug = TinyUniqueId.unique()
        await db.collection('urls').add({
            url: originalUrl,
            slug: slug
        })
        setShortenedUrl(`${window.location.origin}/${slug}`)
    };

    const clickCount = () =>{
        setCount(count +1)
    }
  return (
    <section className = 'dashboard'>
        <div className="side_bar">
          <h1>Dashboard</h1>
            <ul>
                <ol><a href="#"><HiOutlineScissors className='icons' size={30}></HiOutlineScissors>Trim Url</a></ol>
                <ol><a href="/QRgeneration"><AiOutlineQrcode className='icons' size={30}></AiOutlineQrcode>Create QR</a></ol>
                <ol><a href="#"><BiCustomize className='icons' size={30}></BiCustomize>Custom Url</a></ol>
                <ol><a href="/Pricing"><MdOutlineDomainAdd className = 'icons' size={30}></MdOutlineDomainAdd>Domain</a></ol>
                <ol><a href="/"><RxExit className = 'icons' size={30}></RxExit>Exit</a></ol>
            </ul>
        </div>
        <main>
            <h2>Dashboard administrator</h2>
            <div className="inputs">   
                <div className="input_wrapper">

                 <form onSubmit={handleShorten}>
                    <input
                    type="text" className = 'Trim_inputs'
                    placeholder="Enter a long URL"
                    value={originalUrl}
                    onChange={(event) => setOriginalUrl(event.target.value)}
                    />
                    <button type="submit" className='shorten'>Shorten</button>
                </form>
                    {/* <input className = 'Trim_inputs' type="text" placeholder="Paste Your Url" /> */}
                    
                </div>
                <div className="flex">

                    <div className="_flex1">
                        <div className="trims">
                            <p>Your Trims</p>
                            <br />
                            <h3>{count}</h3>
                        </div>
                        <div className="trims">
                            <p>QR code Generated</p>
                            <br />
                            <h3>0</h3>
                        </div>
                    </div>

                    <div className="_flex1">
                        <div className="trims">
                            <p>Domain Generated</p>
                            <br />
                            <h3>0</h3>
                        </div>
                        <div className="trims">
                            <p>Customised Link</p>
                            <br />
                            <h3>0</h3>
                        </div>
                    </div>
                    {shortenedUrl && (
                        <div className='emails'>
                            <input type="text" className="Trim_inputs" placeholder='Shortened link' value={shortenedUrl}/>
                            {/* <p>Short URL: <a href={shortenedUrl}>{shortenedUrl}</a></p> */}
                            <CopyToClipboard text ={shortenedUrl}>
                                <button className="Clip" onClick={clickCount} onCopy={() =>setCopied(true)}>Copy to clipboard</button>
                            </CopyToClipboard>
                        </div>
                    )}
                    {/* <button className="email">create</button> */}
                </div>
            </div>
        </main>
    </section>
  )
}

export default Dash