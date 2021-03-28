import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from '../static/avatar.jpg'

class LandingPage extends Component {
    render() {
        return (
            <div className="landing-container">
                <Grid className="landing-grid">
                    <Cell col={12}>
                        {/* <img src="https://www.zivarentals.com/wp-content/uploads/2017/09/avatar-1606916_960_720-1.png" alt="avatar" className="avatar-img"></img> */}
                        <img src={avatar} alt="avatar" className="avatar-img"></img>
                        <h1 style={{ color: "white", margin: 0 }}>Jian Sen</h1>
                        <div className="banner-text">
                            <h1>Software Engineer</h1>
                            <hr />
                            <p>Java | Python | JavaScript&NodeJS | C# | React | Spring | Django | Flask | Express | Angular | ASP.NET Core (MEAN) | Kubernetes | Apache Kafka | Redis | MongoDB | SQLite | Cassandra | NPM | NuGet | Webpack | Gulp | Redux | HTML/CSS | Bootstrap | JQuery</p>
                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="www.linkedin.com/in/jiansen" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                {/* GitHub */}
                                <a href="https://github.com/zionhjs" target="_blank" rel="noopener noreferrer" title="Github">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                {/* LeetCode */}
                                <a href="https://leetcode.com/hjscoder/" target="_blank" rel="noopener noreferrer" title="LeetCode" >
                                    <i className="fa fa-code" aria-hidden="true" />
                                </a>
                                {/* YouTube */}
                                <a href="/#" rel="noopener noreferrer">
                                    <i className="fa fa-youtube-square" aria-hidden="true" title="YouTube" />
                                </a>
                            </div>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;
