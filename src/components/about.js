import React, { Component } from 'react';
import bg_animation from "../video/bg_animation.mp4";

class About extends Component {
    render() {
        return (
            <div style={{ width: "100%", height: "100%" }}>
                <video className='videoTag' autoPlay loop muted
                       style={{ width: "100%" }}
                >
                    <source src={bg_animation} type='video/mp4' />
                </video>
            </div>
        )
    }
}

export default About;

