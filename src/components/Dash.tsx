import React, {useState} from 'react'
import axios from 'axios'
import './Dash.css'
import {AiOutlineQrcode} from 'react-icons/ai'
import {HiOutlineScissors} from 'react-icons/hi'
import {MdOutlineDomainAdd} from 'react-icons/md'
import {BiCustomize} from 'react-icons/bi'
import {RxExit} from 'react-icons/rx'


const Dash = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/shorten', { longUrl });
      setShortUrl(response.data.shortUrl);
    } catch (error) {
      console.error('Error generating short URL:', error);
    }
};
  return (
    <section className = 'dashboard'>
        <div className="side_bar">
          <h1>Dashboard</h1>
            <ul>
                <ol><a href="#"><HiOutlineScissors className='icons' size={30}></HiOutlineScissors>Trim Url</a></ol>
                <ol><a href="/QR_generation"><AiOutlineQrcode className='icons' size={30}></AiOutlineQrcode>Create QR</a></ol>
                <ol><a href="#"><BiCustomize className='icons' size={30}></BiCustomize>Custom Url</a></ol>
                <ol><a href="#"><MdOutlineDomainAdd className = 'icons' size={30}></MdOutlineDomainAdd>Domain</a></ol>
                <ol><a href="/"><RxExit className = 'icons' size={30}></RxExit>Exit</a></ol>
            </ul>
        </div>
        <main>
            <h2>Dashboard administrator</h2>
            <div className="inputs">   
                <div className="input_wrapper">

                 <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    placeholder="Enter a long URL"
                    value={longUrl}
                    onChange={(event) => setLongUrl(event.target.value)}
                    className = 'Trim_inputs'
                    />
                    <button type="submit">Shorten</button>
                </form>
                    {/* <input className = 'Trim_inputs' type="text" placeholder="Paste Your Url" /> */}
                    {shortUrl && (
                        <div>
                        <p>Short URL: <a href={shortUrl}>{shortUrl}</a></p>
                        </div>
                    )}
                </div>
                <div className="flex">

                    <div className="_flex1">
                        <div className="trims">
                            <p>Your Trims</p>
                            <br />
                            <h3>0</h3>
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
                    <button className="email">create</button>
                </div>
            </div>
        </main>
    </section>
  )
}

export default Dash