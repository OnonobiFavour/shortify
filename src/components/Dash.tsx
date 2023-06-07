import React from 'react'
import './Dash.css'

const Dash = () => {
  return (
    <section className = 'dashboard'>
        <div className="side_bar">
          <h1>Dashboard</h1>
            <ul>
                <ol><a href="#">Trim Url</a></ol>
                <ol><a href="#">Create QR code</a></ol>
                <ol><a href="#">Custom Url</a></ol>
                <ol><a href="#">Domain Integration</a></ol>
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
                    <button className="email">Send as Mail</button>
                </div>
            </div>
        </main>
    </section>
  )
}

export default Dash