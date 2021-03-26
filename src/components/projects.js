import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import '../App.css';

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0};
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/* Project 01 */}
                    <Card shadow={5} className={'projects-card'}>
                        <CardTitle id="card-title" style={{ color: "#fff", height: '360px', background: 'url(https://i0.wp.com/instinct.is/wp-content/uploads/2017/08/woman-cart-grocery-iphone-2.jpg?resize=2000%2C900&ssl=1) center/cover' }}
                        >Clark.io Website</CardTitle>
                        <CardText style={{ height: "120px", overflow: "auto" }}>
                            Clark.io is a subsidiary of The Lion'Esque Group. It provides a virtual shopping-cart product based RFID chip.
                            <li>HOC - Higher Order Components (for fetching data)</li>
                            <li>SPA (single page app) or PWA (Progressive web app)</li>
                            <li>Meteor, React, Styled Components, Animate.css</li>
                            <li>Material-UI for styles and pre-styled components</li>
                            <li>Meteor-up for deployment</li>
                            <li>AWS for hosting</li>
                            <li>MailChimp newsletter signup</li>
                            <li>Contact form email sending</li>
                        </CardText>
                        <CardActions border>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}><a href="https://github.com/zionhung/Clark.io.git" target="_blank" style={{ textDecoration: "none", color: "#005C97" }}>Github</a></Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}>CodeCamp</Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}><a href="https://instinct.is/clients/clark/" target="_blank" style={{ textDecoration: "none", color: "#005C97" }}>LiveDemo</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" href="http://field-test.co" target="_blank" />
                        </CardMenu>
                    </Card >

                    {/* Project 02 */}
                    <Card shadow={5} className={'projects-card'}>
                        <CardTitle style={{ color: "#bdc3c7", height: '360px', background: 'url(https://yt3.ggpht.com/a/AGF-l78E1OeuCR4yXJORN0Ojy3bjcZKzsb0jqrMsgg=s240-c-k-c0xffffffff-no-rj-mo) center/cover' }}>Galore TV App</CardTitle>
                        <CardText style={{ height: "120px", overflow: "auto" }}>
                            Galore TV App - A video blog for Galore Brand.
                            <li>SPA (single page app)</li>
                            <li>Meteor, React, FlowRouter, MongoDB, YouTube API</li>
                            <li>Meteor-up for deployment</li>
                            <li>AWS for hosting</li>
                            <li>MailChimp newsletter signup</li>
                            <li>Contact form email sending</li>
                        </CardText>
                        <CardActions border>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}><a href="https://github.com/zionhung/Galore.TV.git" target="_blank" style={{ textDecoration: "none", color: "#005C97" }}>GitHub</a></Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}>CodeCamp</Button>
                            <Button colored><a href="https://galoremag.com/" target="_blank" style={{ textDecoration: "none", color: "#005C97" }}>LiveDemo</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" href="http://tv.instinct.is" target="_blank" colored />
                        </CardMenu>
                    </Card >

                    {/* Project 03 */}
                    <Card shadow={5} className={'projects-card'}>
                        <CardTitle style={{ color: "#fff", height: '360px', background: 'url(https://dcassetcdn.com/design_img/2496504/580863/580863_13211572_2496504_7a53dddf_thumbnail.png) center/cover' }}>Zion's Website</CardTitle>
                        <CardText style={{ height: "120px", overflow: "auto" }}>
                            My personal website which is a collection of my Full-Stack-Works/Designs/Life.
                            <li>React&NodeJS for MVC use</li>
                            <li>React.mdl for styling&layout</li>
                            <li>JavaScript&CSS3 for DOM animation</li>
                            <li>AWS-EC2 for deployment</li>
                            <li>AWS for hosting</li>
                            <li>Contact form email sending</li>
                        </CardText>
                        <CardActions border>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}><a href="https://github.com/zionhung/ZionWebsite.git" target="_blank" style={{ textDecoration: "none", color: "#005C97" }}>GitHub</a></Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}>CodeCamp</Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}><a href="http://zionhung.com" target="_blank" style={{ textDecoration: "none", color: "#005C97" }}>LiveDemo</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" href="http://www.hjszioncode.com" target="_blank" />
                        </CardMenu>
                    </Card >
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    {/* Project 01 */}
                    <Card shadow={5} className={'projects-card'}>
                        <CardTitle id="card-title" style={{ color: "#fff", height: '360px', background: 'url(https://i.pinimg.com/originals/d3/e4/1f/d3e41fcda53faa7b6da198ad21dedc9d.jpg) center/cover' }}
                        >Calendar App</CardTitle>
                        <CardText style={{ height: "120px", overflow: "auto" }}>
                            A calendar built based of Django’s HTMLCalendar. The end user can CRUD events on this calendar. The calendar allows the user to navigate to the next and previous month, along with a yearly view to navigate to the specific month and year indicated.
                    </CardText>
                        <CardActions border>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}><a href="https://github.com/zionhung/Calendar.git" target="_blank" style={{ textDecoration: "none", color: "#005C97" }}>GitHub</a></Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}>CodeCamp</Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}><a href="http://54.215.250.166/calendar/" target="_blank" style={{ textDecoration: "none", color: "#005C97" }}>LiveDemo</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" href="http://54.215.250.166/calendar/" target="_blank" />
                        </CardMenu>
                    </Card >

                    {/* Project 02 */}
                    <Card shadow={5} className={'projects-card'}>
                        <CardTitle id="card-title" style={{ color: "#fff", height: '360px', background: 'url(https://eezee.sg/blog/wp-content/uploads/2018/06/Artboard-3@3x-1024x461.png) center/330%' }}
                        >Employee Backend Management System</CardTitle>
                        <CardText style={{ height: "120px", overflow: "auto" }}>
                            Try login as Admin -- Or create new user<p style={{ color: "#3d72b4" }}>UserName: adminuser@gmail.com PW:adminuser</p>
                            Built an employee management system to support employee to clock in/out, write reports for achievements and support employer to track performance, decide rewards and provide feedbacks.
                            <li>Designed and implemented the backend service to support all the CRUD operations with authentication and authorization by using Python, Django ORM, BCrypt & MySQL. </li>
                            <li>Designed and implement a web front-end by using JavaScript and Bootstrap. </li>
                            <li>Deployed and hosted the web app on AWS EC2.</li>
                        </CardText>
                        <CardActions border>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}><a href="https://github.com/zionhung/EmployeeManagementSystem.git" target="_blank" style={{ textDecoration: "none", color: "#005C97" }}>GitHub</a></Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}><a href="https://www.maipdf.com/pdf/?email=enifj1/5F6oMs" target="_blank" style={{ textDecoration: "none", color: "#005C97" }}>WireFrame</a></Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}><a href="http://52.53.232.172/" target="_blank" style={{ textDecoration: "none", color: "#005C97" }}>LiveDemo</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" href="http://52.53.232.172/" target="_blank" />
                        </CardMenu>
                    </Card >
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    {/* Project 01 */}
                    <Card shadow={5} className={'projects-card'}>
                        <CardTitle id="card-title" style={{ color: "#fff", height: '360px', background: 'url(https://pbs.twimg.com/profile_images/1069715216307376128/_1uSHYr1_400x400.jpg) bottom/cover' }}
                        >Art-Galaxy Website&System</CardTitle>
                        <CardText>
                            A website and company assets management App was built with C#&ASP.NET.
                            User can login as client or manager. Customer can view product by its category and send request to server to get quote. Manage can upload content and classify the content based on OOP Model, also do some basic CRUD for the content and employees.
                    </CardText>
                        <CardActions border>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}>GitHub</Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}>CodeCamp</Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}><a href="http://www.artgalaxy.org/" target="_blank" style={{ textDecoration: "none", color: "#005C97" }}>LiveDemo</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" href="http://www.artgalaxy.org/" target="_blank" />
                        </CardMenu>
                    </Card >
                </div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div className="projects-grid">
                    {/* Project 01 */}
                    <Card shadow={5} className={'projects-card'}>
                        <CardTitle id="card-title" style={{ color: "#fff", height: '360px', background: 'url(https://www.qwoptechnologies.com/images/student-management.jpg) top/180%' }}
                        >Student Management System</CardTitle>
                        <CardText style={{ height: "120px", overflow: "auto" }}>
                            Try login as Admin -- Or create new user<p style={{ color: "#3d72b4" }}>UserName: admin PW:admin</p>
                            Try login as User -- Or create new user<p style={{ color: "#3d72b4" }}>UserName: user PW:user</p>
                            A student management system built based of Angular&NodeJS. Admin can manage all user and courses do the full CRUD manipulation.
                            <li>Worked on team to develop a web app to support course & student management. </li>
                            <li>Developed a front-end web UX by using Angular & TypeScript.</li>
                            <li>Leveraged Socket.io to use WebSocket to commute with Angular’s SPA to reflect data-changing in real-time.</li>

                        </CardText>
                        <CardActions border>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}><a href="https://github.com/zionhung/StudentManagement.git" target="_blank" style={{ textDecoration: "none", color: "#005C97" }}>GitHub</a></Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}>CodeCamp</Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}><a href="http://54.215.250.166/calendar/" target="_blank" style={{ textDecoration: "none", color: "#005C97" }}>LiveDemo</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" href="http://54.215.250.166/calendar/" target="_blank" />
                        </CardMenu>
                    </Card >
                    {/* Project 02 */}
                    <Card shadow={5} className={'projects-card'}>
                        <CardTitle id="card-title" style={{ color: "#010101", height: '360px', background: 'url(https://assets.materialup.com/uploads/347c48be-3ed3-4e80-87a0-3353405f0239/0x0ss-85.jpg) top/180%' }}
                        >NBA-Visual</CardTitle>
                        <CardText style={{ height: "120px", overflow: "auto" }}>
                            ReactJS & NodeJSbased NBA Player Stats Visualization Application, showing NBA player data in real time.
                            <li>Implemented a dashboard using React, D3 and Ant Design to visualize player stats and ratings. Developed a shot chart and a user profile view for individual players.</li>
                            <li>Fetched player data from stats.nba.com APIs.</li>
                            <li>Created 4 extra filters and 2 shot themes (hexbin and scatter) to provide more customized visualization on the shot chart.</li>
                            <li>Developed a player search bar. Improved user experience by providing autocompletion and  player suggestion functionalities.</li>

                        </CardText>
                        <CardActions border>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}><a href="https://github.com/hjszion/NBAProject" target="_blank" style={{ textDecoration: "none", color: "#005C97" }}>GitHub</a></Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}>CodeCamp</Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}><a href="https://drive.google.com/file/d/1YUwKiv0GMAdYND30syjPTxVPVuS5wEjK/view" target="_blank" style={{ textDecoration: "none", color: "#005C97" }}>LiveDemo</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" href="https://drive.google.com/file/d/1YUwKiv0GMAdYND30syjPTxVPVuS5wEjK/view" target="_blank" />
                        </CardMenu>
                    </Card >
                </div>
            )
        } else if (this.state.activeTab == 4) {
            return (
                <div className="projects-grid">
                    {/* Project 01 */}
                    <Card shadow={5} className={'projects-card'}>
                        <CardTitle id="card-title" style={{ color: "#010101", height: '360px', background: 'url(https://image.freepik.com/free-vector/job-offer-text-email-envelope-document-flat-cartoon-icon_101884-493.jpg) top/180%' }}
                        >Job Recommendation System</CardTitle>
                        <CardText style={{ height: "120px", overflow: "auto" }}>
                            <li>Designed and implemented an interactive web application for users to search  and apply available job positions.</li>
                            <li>Performed front-end web UI design and implementation using HTML/CSS/JavaScript.</li>
                            <li>Implemented RESTful APIs using Java servlets, retrieved job descriptions using Github API and stored data in MySQL.</li>
                            <li>Explored multiple recommendation algorithms and extracted keywords from job descriptions to implement a Content-based algorithm.</li>
                            <li>Deployed the service to AWS EC2.</li>

                        </CardText>
                        <CardActions border>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}><a href="https://github.com/hjszion/JobRecommandSystem" target="_blank" style={{ textDecoration: "none", color: "#005C97" }}>GitHub</a></Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}>CodeCamp</Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}><a href="http://54.215.250.166/calendar/" target="_blank" style={{ textDecoration: "none", color: "#005C97" }}>LiveDemo</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" href="http://54.215.250.166/calendar/" target="_blank" />
                        </CardMenu>
                    </Card >

                    {/* Project 02 */}
                    <Card shadow={5} className={'projects-card'}>
                        <CardTitle id="card-title" style={{ color: "#fff", height: '360px', background: 'url(https://cdn.dribbble.com/users/13395/screenshots/6455348/screen_shot_2019-05-08_at_3.32.42_pm.png) top/180%' }}
                        >Travel Formula</CardTitle>
                        <CardText style={{ height: "120px", overflow: "auto" }}>
                            <li>Designed and implemented an interactive web application to generate&recommend travel plans for user</li>
                            <li>Performed front-end web UI design and implementation using React&Antd&HTML&CSS</li>
                            <li>Implemented RESTful APIs using Spring Request to support CRUD request in MongoDB database</li>
                            <li>Implemented GeoLocation API and Google Map API to support query for places and display data in the map.</li>
                            <li>Explored multiple recommendation algorithms and extracted keywords from job descriptions to implement a Content-based algorithm.</li>
                            <li>Explored distance algorithms to generate shortest-path for each travel-paln.</li>
                            <li>Deployed the service to AWS EC2.</li>

                        </CardText>
                        <CardActions border>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}><a href="https://github.com/hjszion/TravelFormula" target="_blank" style={{ textDecoration: "none", color: "#005C97" }}>GitHub</a></Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}>CodeCamp</Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}><a href="http://54.215.250.166/calendar/" target="_blank" style={{ textDecoration: "none", color: "#005C97" }}>LiveDemo</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" href="http://54.215.250.166/calendar/" target="_blank" />
                        </CardMenu>
                    </Card >
                </div>
            )
        } else if (this.state.activeTab == 5) {
            return (
                <div className="projects-grid">
                    {/* Project 01 */}
                    <Card shadow={5} className={'projects-card'}>
                        <CardTitle id="card-title" style={{ color: "#696969", height: '360px', background: 'url(https://www.pngitem.com/pimgs/m/506-5061206_social-media-marketing-icon-png-customers-on-social.png) top/180%' }}
                        >Circle +</CardTitle>
                        <CardText style={{ height: "120px", overflow: "auto" }}>
                            <li>Built a geo-based social network web application with React JS. </li>
                            <li>Implemented basic token based registration/login/logout flow with React Router v4 and server-side user authentication with JWT. </li>
                            <li>Implemented features such as "Create Post", "Nearby Posts As Gallery" and "Nearby Posts In Map" with Ant Design, GeoLocation API and Google Map API.</li>
                            <li>Built a scalable web service in Go to handle posts and deployed to Google Cloud (GKE) for better scaling</li>

                        </CardText>
                        <CardActions border>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}><a href="https://github.com/hjszion/Around" target="_blank" style={{ textDecoration: "none", color: "#005C97" }}>GitHub</a></Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}>CodeCamp</Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}><a href="https://drive.google.com/file/d/1YbZ_nNB3BdVqCKNM_RqtB3-OIXB7QWDT/view" target="_blank" style={{ textDecoration: "none", color: "#005C97" }}>LiveDemo</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" href="https://drive.google.com/file/d/1YbZ_nNB3BdVqCKNM_RqtB3-OIXB7QWDT/view" target="_blank" />
                        </CardMenu>
                    </Card >
                </div>
            )
        } else if (this.state.activeTab == 6) {
            return (
                <div className="projects-grid">
                    {/* Project 01 */}
                    <Card shadow={5} className={'projects-card'}>
                        <CardTitle id="card-title" style={{ color: "#696969", height: '360px', background: 'url(https://cdn3.iconfinder.com/data/icons/ballicons-reloaded-free/512/icon-70-512.png) top/180%' }}
                        >Tin News</CardTitle>
                        <CardText style={{ height: "120px", overflow: "auto" }}>
                            <li>Designed the Instagram Flavor News app based on Google Component Architectural MVVM Pattern </li>
                            <li>Implemented the bottom bar & page navigation using JetPack navigation component. </li>
                            <li>Utilized Mindorks’s PlaceHolderView to support swipe gestures for liking/disliking the news. </li>
                            <li>Built the Room Database with LiveData & ViewModel to support local cache and offline model. </li>
                            <li>Integrated Retrofit and Rxjava to pull the latest news data from a RESTFUL endpoint  (newsapi.org) </li>

                        </CardText>
                        <CardActions border>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}><a href="https://github.com/hjszion/tinNews_Project" target="_blank" style={{ textDecoration: "none", color: "#005C97" }}>GitHub</a></Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}>CodeCamp</Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}><a href="https://drive.google.com/file/d/1YbZ_nNB3BdVqCKNM_RqtB3-OIXB7QWDT/view" target="_blank" style={{ textDecoration: "none", color: "#005C97" }}>LiveDemo</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" href="https://drive.google.com/file/d/1YbZ_nNB3BdVqCKNM_RqtB3-OIXB7QWDT/view" target="_blank" />
                        </CardMenu>
                    </Card >
                </div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs className={'hidden-mobile'} id="tabs" activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                <Tab className="tab" style={{ color: '#7d7d7d' }}>
                    React & JSX
                </Tab>
                <Tab className="tab" style={{ color: '#7d7d7d' }}>
                    Django & Python
                </Tab>
                <Tab className="tab" style={{ color: '#7d7d7d' }}>
                    ASP.NET Core & C#
                </Tab>
                <Tab className="tab" style={{ color: '#7d7d7d' }}>
                    Angular & Node.JS
                </Tab>
                <Tab className="tab" style={{ color: '#7d7d7d' }}>
                    Java & Spring
                </Tab>
                <Tab className="tab" style={{ color: '#7d7d7d' }}>
                    Go
                </Tab>
                <Tab className="tab" style={{ color: '#7d7d7d' }}>
                    Android
                </Tab>
            </Tabs>
                <Tabs className={'hidden-pc-ipad'} id="tabs" activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab className="tab" style={{ color: '#7d7d7d' }}>
                        React & JSX
                    </Tab>
                    <Tab className="tab" style={{ color: '#7d7d7d' }}>
                        Django & Python
                    </Tab>
                    <Tab className="tab" style={{ color: '#7d7d7d' }}>
                        ASP.NET Core & C#
                    </Tab>
                </Tabs>
                <Tabs className={'hidden-pc-ipad tab-no-border'} id="tabs" activeTab={this.state.activeTab-3} onChange={(tabId) => this.setState({ activeTab: tabId+3 })} ripple>
                    <Tab className="tab" style={{ color: '#7d7d7d' }}>
                        Angular & Node.JS
                    </Tab>
                    <Tab className="tab" style={{ color: '#7d7d7d' }}>
                        Java & Spring
                    </Tab>
                    <Tab className="tab" style={{ color: '#7d7d7d' }}>
                        Go
                    </Tab>
                    <Tab className="tab" style={{ color: '#7d7d7d' }}>
                        Android
                    </Tab>
                </Tabs>
                <section className="projects-section">
                    <Grid className="projects-section-inner">
                        <Cell col={12}>
                            <div className="project-content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </section>
            </div >
        )
    }
}

export default Projects;
