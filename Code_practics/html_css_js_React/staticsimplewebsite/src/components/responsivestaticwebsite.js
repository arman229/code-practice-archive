import React from 'react';
import './responsivestaticwebsite.css';

const ResponsiveLayout = () => {
    return (
        <div>
            <div id="header">
                <h1>Responsive Zig Zag Layout Example</h1>
                <p>Resize the browser window to see the effect.</p>
            </div>
            <div id="container">
                <div className="row">
                    <div className="column66" style={{ marginRight: '16px' }}>
                        <h1 style={{ fontSize: '4em' }}>The App</h1>
                        <h1 style={{ fontSize: '4em', color: 'aquamarine' }}>Why buy it?</h1>
                        <p>
                            <span style={{ fontSize: '4em' }}>Take photos like a pro.</span> You should buy this app because lorem ipsum consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>
                        <button className="btn">Download Application</button>
                    </div>
                    <div className="column33" style={{ marginRight: '16px' }}>
                        <img src={require('./images/handphone.jpg')}  alt="" />
                    </div>
                </div>
                <div className="row" style={{ backgroundColor: 'gray' }}>
                    <div className="column33" style={{ marginRight: '16px' }}>
                        <img style={{ marginTop: '14px' }} src={require('./images/img_app.jpg')}  alt="" />
                    </div>
                    <div className="column66">
                        <h1 style={{ fontSize: '4em' }}>Clarity</h1>
                        <h1 style={{ fontSize: '4em', color: 'red' }}>Pixels, who?</h1>
                        <p>
                            <span style={{ fontSize: '4em' }}>A revolution in resolution.</span> Sharp and clear photos with the world's best photo
                            engine, incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquipex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.
                        </p>
                        <button className="btn" style={{ backgroundColor: 'red' }}>Read More</button>
                    </div>
                </div>
                <div className="row">
                    <div className="column66" style={{ marginRight: '16px' }}>
                        <h1 style={{ fontSize: '4em' }}>The App</h1>
                        <h1 style={{ fontSize: '4em', color: 'aquamarine' }}>Why buy it?</h1>
                        <p>
                            <span style={{ fontSize: '4em' }}>Take photos like a pro.</span> You should buy this app because lorem ipsum consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>
                        <button className="btn">Download Application</button>
                    </div>
                    <div className="column33" style={{ marginRight: '16px' }}>
                        <img src={require('./images/handphone.jpg')}  alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResponsiveLayout;
