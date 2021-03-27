import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent, Dialog, DialogTitle, DialogContent, DialogActions, Button, ProgressBar, Textfield } from 'react-mdl';
import axios from 'axios';
import dialogPolyfill from 'dialog-polyfill'
import avatar from '../static/avatar.jpg'

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: ""
        };
        this.submitForm = this.submitForm.bind(this);

        this.handleOpenDialog = this.handleOpenDialog.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
    }
    componentDidMount() {
        var dialog = document.querySelector('dialog');
        dialogPolyfill.registerDialog(dialog);
    }
    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/jiansen");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }

    handleOpenDialog() {
        this.setState({
            openDialog: true
        });
    }

    handleCloseDialog() {
        this.setState({
            openDialog: false
        });
    }


    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        {/* <img
                            src="https://www.zivarentals.com/wp-content/uploads/2017/09/avatar-1606916_960_720-1.png"
                            alt="avatar"
                            style={{ height: '240px' }} className="avatar-img"
                        /> */}
                        <img
                            src={avatar}
                            alt="avatar"
                            style={{ height: '240px' }} className="avatar-img"
                        />
                        <h2>Jian Sen</h2>
                        <p style={{
                            width: '90%', paddingTop: '0.5em', fontSize: '15px',
                            fontFamily: 'DistrictDemi'
                        }}>
                            <p>
                                Good products combines with Design and Engineering, which bring excellent experience - that's all what I'm pursuing and creating.
                                During my years of engineering experiences, I worked on different layers of the Web Developement from UI/UX, Frontend to Backend.
                                I help to combine experiences together and coordinates the team work together smoothly.
                            </p>
                            <p>Contact me if you wanna hire a experienced SDE or you wanna me to develop your next Application!</p>
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr className={'dashed-line'} />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent className={'contact-list-item'}>
                                        <i className="fa fa-phone-square" aria-hidden="true"
                                            style={{ fontSize: '30px' }} />
                                        (626)-265-6782
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className={'contact-list-item'}>
                                        <i className="fa fa-envelope" aria-hidden="true"
                                            style={{ fontSize: '30px' }} />
                                        hjszioncode@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className={'contact-list-item'}>
                                        <i className="fa fa-whatsapp" aria-hidden="true"
                                            style={{ fontSize: '30px' }} />
                                        jiansen 626-265-6782
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className={'contact-list-item'}>
                                        <i className="fa fa-map-marker" aria-hidden="true"
                                            style={{ fontSize: '30px' }} />
                                        Los Angeles CA   &nbsp; Irvine CA
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                        <div className={'contact-send-wrapper'}>
                            <Button className={'contact-send-btn'}  colored onClick={this.handleOpenDialog} raised ripple>Send A Message</Button>
                            <Dialog className="contact-dialog-container" open={this.state.openDialog}>
                                <i className="fa fa-envelope-open-o" aria-hidden="true" style={{ fontSize: '60px', marginTop: "45px" }} />
                                <i className="fa fa-close" aria-hidden="true"
                                   style={{ fontSize: '30px', position: "absolute", right: "9px", top: "5px", cursor: "pointer" }}
                                   onClick={this.handleCloseDialog} />
                                <DialogTitle>Let's Chat!</DialogTitle>
                                <DialogContent className="dialog-content-container">
                                    <p>Provide your basic infomation here and I'll contact you back soon!.</p>
                                    <ProgressBar indeterminate />
                                    <form className="contact-form" action="https://formspree.io/mrgkgnpv" id="contact-form" method="post" target="_blank">
                                        <Textfield className="form-textfield"
                                                   onChange={() => { }}
                                                   floatingLabel
                                                   name="name"
                                                   label="Your name here..."
                                                   style={{ width: '100%' }}
                                        />
                                        <Textfield className="form-textfield"
                                                   onChange={() => { }}
                                                   floatingLabel
                                                   name="number"
                                                   type="number"
                                                   label="Your contact number..."
                                                   style={{ width: '100%' }}
                                        />
                                        <Textfield className="form-textfield"
                                                   onChange={() => { }}
                                                   floatingLabel
                                                   pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
                                                   error="Input is not a correct email!"
                                                   name="email"
                                                   label="Your email here..."
                                                   style={{ width: '100%' }}
                                        />
                                        <Textfield className="form-textfield form-textfield-area"
                                                   onChange={() => { }}
                                                   floatingLabel
                                                   name="message"
                                                   label="Your messages here in detail..."
                                                   style={{ width: '100%' }}
                                        />
                                        <Button className={'dialog-send-btn'} type='submit' form="contact-form" >Send</Button>
                                    </form>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;
