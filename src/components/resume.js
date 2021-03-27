import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import avatar from '../static/avatar.jpg'

class Resume extends Component {
    arrowClickHandler = (e) => {
        var arrow = document.getElementById("arrow-icon");
        arrow.classList.toggle("open");
        e.preventDefault();
        var right_col = document.getElementById("resume-right-col");
        if (arrow.classList.contains("open")) {
            right_col.scrollTo({ left: 0, top: 2000, behavior: 'smooth' });
        }
        else {
            right_col.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
        }
    }

    render() {
        return (
            <div>
                <Grid className="resume-grid">
                    <Cell col={4} style={{ color: 'grey' }} className="resume-left-col" >
                        <div style={{ textalign: 'center', display: "flex", flexDirection: "column", alignItems: "center" }}>
                            {/* <img
                                src="https://www.zivarentals.com/wp-content/uploads/2017/09/avatar-1606916_960_720-1.png"
                                alt="avatar"
                                style={{ height: '200px' }}
                                className="avatar-img"
                            /> */}
                            <img
                                src={avatar}
                                alt="avatar"
                                style={{ height: '200px' }}
                                className="avatar-img"
                            />
                            <h2 style={{ paddingTop: '0.6em', color: 'white' }}>Jian Sen</h2>
                        </div>
                        <h4 style={{ color: 'white' }}>Software Engineer</h4>
                        <hr style={{ borderTop: '1px solid #bdc3c7', width: '100%' }} />
                        <p>
                            <p>More creatively than an engineer, more practically than a designer. In the core I'm a creator, discovering and merging meaningful products to change our life.</p>
                            <p>
                                Good products combines with Design and Engineering, which bring excellent experience - that's all what I'm pursuing and creating.
                                During my years of engineering experiences, I worked on different layers of the Web Developement from UI/UX, Frontend to Backend.
                            </p>

                        </p>
                        <hr style={{ borderTop: '1px solid #bdc3c7', width: '100%' }} />
                        <h5 style={{ color: 'white' }}>Address</h5>
                        <p>Address_1: 321 W 3th St #F, Downtown Los Angeles, CA 90013</p>
                        <p>Address_2: 666 Susan St #205, Costa Mesa, CA 92626</p>
                        <h5 style={{ color: 'white' }}>Phone</h5>
                        <p>626-265-6782</p>
                        <h5 style={{ color: 'white' }}>Email</h5>
                        <p>hjszioncode@gmail.com</p>
                        <h5 style={{ color: 'white' }}>Website</h5>
                        <p>www.hjscode.com</p>
                        <hr style={{ borderTop: '3px solod #833fb2', width: '100%' }} />
                    </Cell>
                    <Cell className="resume-right-col" id="resume-right-col" col={8}
                    >
                        <a class="arrow-icon" id="arrow-icon" onClick={this.arrowClickHandler}>
                            <span class="left-bar"></span>
                            <span class="right-bar"></span>
                        </a>
                        <h2>Skills</h2>
                        <hr style={{ borderTop: '1.5px solid white', width: "97%" }} />
                        <h5>Languages</h5>
                        <Skills
                            skill="JAVA"
                            progress={90}
                        />
                        <Skills
                            skill="Python"
                            progress={90}
                        />
                        <Skills
                            skill="JavaScript ES6 & NodeJS"
                            progress={87}
                        />
                        <Skills
                            skill="C#"
                            progress={84}
                        />
                        <Skills
                            skill="HTML5"
                            progress={96}
                        />
                        <Skills
                            skill="CSS3 & Sass"
                            progress={87}
                        />
                        <hr style={{ borderTop: '1px dashed #bdc3c7', width: "89%", left: 0 }} />
                        <h5>Web Frameworks</h5>
                        <Skills
                            skill="Spring"
                            progress={80}
                        />
                        <Skills
                            skill="React"
                            progress={80}
                        />
                        <Skills
                            skill="Angular"
                            progress={72}
                        />
                        <Skills
                            skill="ASP.NET Core"
                            progress={75}
                        />
                        <Skills
                            skill="Django"
                            progress={80}
                        />
                        <Skills
                            skill="Flask"
                            progress={45}
                        />
                        <Skills
                            skill="Express"
                            progress={55}
                        />
                        <hr style={{ borderTop: '1px dashed #bdc3c7', width: "89%", left: 0 }} />
                        <h5>Database</h5>
                        <Skills
                            skill="MongoDB"
                            progress={60}
                        />
                        <Skills
                            skill="SQLite"
                            progress={66}
                        />
                        <hr style={{ borderTop: '1px dashed #bdc3c7', width: "89%", left: 0 }} />
                        <h5>Package Managers</h5>
                        <Skills
                            skill="NPM"
                            progress={55}
                        />
                        <Skills
                            skill="NuGet"
                            progress={35}
                        />
                        <hr style={{ borderTop: '1px dashed #bdc3c7', width: "89%", left: 0 }} />
                        <h5>Other</h5>
                        <Skills
                            skill="WebPack"
                            progress={45}
                        />
                        <Skills
                            skill="Gulp"
                            progress={60}
                        />
                        <Skills
                            skill="React-Redux"
                            progress={50}
                        />
                        <Skills
                            skill="GitHub"
                            progress={84}
                        />
                        <Skills
                            skill="GitLab"
                            progress={75}
                        />

                        <h2>Work Experiences</h2>
                        <hr style={{ borderTop: '1.5px solid white', width: "97%" }} />
                        <Experience
                            startYear={2018}
                            endYear={2020}
                            experienceName="Frontend Developer & UI/UX"
                            experienceDescription="2018 to 2020 I worked as a Frontend Developer & UI/UX designer. I work closely with Baby Phat, Galore, Enchanted Diamond, Dwell .etc to design their website&app and build the front end application for these client."
                            link="https://instinct.is/"
                        />
                        <Experience
                            startYear={2018}
                            endYear={2019}
                            experienceName="yU+co"
                            experienceDescription="yU+co is a Digital Innovation Studio Crafting Content & Design. Between 2018 to 2019 I was a Graphic Desiner(2d&3d) at yU+co, creating content for the entertainment industry. From the experience there I spent more time in graphic design and I taught myself fornt-end web-development. After that I got more deep into web-development, I work as freelancer for UI/UX design and front-end developer."
                            link="https://www.yuco.com/"
                        />
                        <Experience
                            startYear={2014}
                            endYear={2016}
                            experienceName="Urbanus Architecture"
                            experienceDescription="Urbanus Architecture is one of China's Toptier Architecture Firm, I worked there for nearly 2 years as an architect before I came to USA to futher my education in Design."
                            link="http://www.urbanus.com.cn/"
                        />
                        <h2>Education</h2>
                        <hr style={{ borderTop: '1.5px solid white', width: "97%" }} />
                        <Education
                            startYear={2019}
                            endYear={2020}
                            schoolName="Coding Dojo"
                            schoolDescription="Coding Dojo is a place where student can learn Multi-Stack development, it has 10 years of Leanrning Science & Curriculum Refinement experiences. I study here for 5 month learning&practicing 5 MVC Framework, and I got all the black-belt rewards for each Framework I studied."
                            link="https://www.codingdojo.com/"
                        />
                        <Education
                            startYear={2016}
                            endYear={2018}
                            schoolName="Sci-Arc"
                            schoolDescription="SCI-Arc is a world-renowned center of innovation and one of the nation's few boutiques design schools. The school is located in a quarter-mile-long former freight depot in the Arts District of Los Angeles. It is distinguished by the vibrant atmosphere of its studios, which provides students with a uniquely inspiring environment in which to study design and architecture. I studied here for nearly 2 years, mostly on design and animation, and I got a master degree from the school."
                            link="https://www.sciarc.edu/"
                        />
                    </Cell>
                </Grid>
            </div >
        )
    }
}

export default Resume;