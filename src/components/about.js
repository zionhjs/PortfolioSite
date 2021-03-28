import React, { Component } from 'react';
import bg_animation from "../video/bg_animation.mp4";

class About extends Component {
    render() {
        return (
            <div className={'video-container'}>
                <video className='videoTag' autoPlay loop muted
                >
                    <source src={bg_animation} type='video/mp4' />
                </video>
            </div>
        )
    }
}

export default About;

