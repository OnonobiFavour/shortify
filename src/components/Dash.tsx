import React from 'react'
import './Dash.css'
import {AiOutlineQrcode} from 'react-icons/ai'
import {HiOutlineScissors} from 'react-icons/hi'
import {MdOutlineDomainAdd} from 'react-icons/md'
import {BiCustomize} from 'react-icons/bi'
import {GoMail} from 'react-icons/go'
import {RxExit} from 'react-icons/rx'

const Dash = () => {
  return (
    <section className = 'dashboard'>
        <div className="side_bar">
          <h1>Dashboard</h1>
            <ul>
                <ol><a href="#"><HiOutlineScissors className='icons' size={20}></HiOutlineScissors>Trim Url</a></ol>
                <ol><a href="#"><AiOutlineQrcode className='icons' size={20}></AiOutlineQrcode>Create QR code</a></ol>
                <ol><a href="#"><BiCustomize className='icons' size={20}></BiCustomize>Custom Url</a></ol>
                <ol><a href="#"><MdOutlineDomainAdd className = 'icons' size={20}></MdOutlineDomainAdd>Domain Integration</a></ol>
                <ol><a href="#"><RxExit className = 'icons' size={20}></RxExit>Exit</a></ol>
            </ul>
        </div>
        <main>
            <h2>Dashboard administrator</h2>
            <div className="inputs">   
                <div className="input_wrapper">
                    <input className = 'Trim_inputs' type="text" placeholder="Paste Your Url" />
                </div>
                <div className="flex">

                    <div className="flex1">
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

                    <div className="flex2">
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
                    <button className="email">Send as Mail <GoMail size={20}></GoMail></button>
                </div>
            </div>
        </main>
    </section>
  )
}

export default Dash