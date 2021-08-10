import React, { useState } from 'react'
import Headshot from '../images/HeadshotTwo.jpg'
function Home() {
    const [flip, setFlip] = useState(false);
    return (
        <div id="landingPage" className="homeRow row">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img className="img-fluid headshot" src={Headshot} alt="Travis Headshot" />
                    </div>
                    <div className="flip-card-back">
                        <p>Baseball stats, y'all.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home