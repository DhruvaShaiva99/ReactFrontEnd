import React from 'react';
import './ViewProfile.css'
import Sidebar from './Sidebar/Sidebar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import AuthenticationServiceRec from '../Service/AuthenticationServiceRec'
import Axios from 'axios';

export default class ViewProfile extends React.Component{

    constructor() {
        super();
        this.state = { 
            users: []
         };
      }
    

    // componentDidMount(){
    //     const username=AuthenticationServiceRec.getLoggedInUserName();
    //     console.log(username)
    //     const user=sessionStorage.getItem('userId');
    //     console.log(user)
    //     Axios.get(`http://localhost:8080/api/Recruiter/${username}`)
    //     .then((res)=>
    //         this.setState({ users:res.data })
    //     );
    // }

    componentDidMount(){
        
        const username=AuthenticationServiceRec.getLoggedInUserName();
        console.log(username)
        const user=sessionStorage.getItem('userId');
        console.log(user)
        Axios.get(`http://localhost:8080/api/Recruiter/${username}/getRecruiter`)
        .then((res)=>
            this.setState({ users:res.data })
        );
    }

    handleSubmit = event => {
        document.getElementById("fullnameid").contentEditable = true;
        document.getElementById("usernameid").contentEditable = true;
        document.getElementById("emailaddressid").contentEditable = true;
        document.getElementById("mobilenumberid").contentEditable = true;
        // document.getElementById("addressid").contentEditable = true;
        // document.getElementById("categoryid").contentEditable = true;
        document.getElementById("companynameid").contentEditable = true;
        document.getElementById("companyaddressid").contentEditable = true;
        document.getElementById("companydescid").contentEditable = true;
        document.getElementById("sociallinksid").contentEditable = true;
        document.getElementById("currentpasswordid").contentEditable = true;
        document.getElementById("newpasswordid").contentEditable = true;
        document.getElementById("retypepasswordid").contentEditable = true;

        document.getElementById("spbtnrec").style.visibility = "visible";
    }

    handleSubmit1 = event => {
        document.getElementById("fullnameid").contentEditable = false;
        document.getElementById("usernameid").contentEditable = false;
        document.getElementById("emailaddressid").contentEditable = false;
        document.getElementById("mobilenumberid").contentEditable = false;
        // document.getElementById("addressid").contentEditable = false;
        // document.getElementById("categoryid").contentEditable = false;
        document.getElementById("companynameid").contentEditable = false;
        document.getElementById("companyaddressid").contentEditable = false;
        document.getElementById("companydescid").contentEditable = false;
        document.getElementById("sociallinksid").contentEditable = false;
        document.getElementById("currentpasswordid").contentEditable = false;
        document.getElementById("newpasswordid").contentEditable = false;
        document.getElementById("retypepasswordid").contentEditable = false;

        document.getElementById("spbtnrec").style.visibility = "hidden";
    }

    render(){
        const userid=this.props.match.params.uid;
        console.log(userid);
        return(
            <Row className="no-gutters">
                <Sidebar/>
                <Col className="resume-page1">
                    <Col>
                        {/* <Row>
                        <img className="thumb" src="https://themerail.com/html/oficiona/dashboard/images/user-1.jpg"/>
                        </Row><br/> */}
                        <Row>
                            <Col>
                                <h3 className="recbasicinfo">Basic Info</h3>
                            </Col>

                            <Col>
                                <Button onClick={this.handleSubmit} variant="primary" className="recupdateprofilebtn">Update Profile</Button>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <div className="resume1">
                                    <input className="input13" placeholder="Full Name" readOnly></input>
                                </div>
                                
                                <div className="resume2">
                                    <p id="fullnameid" className="two">{this.state.users.firstname} {this.state.users.lastname}</p>
                                </div>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <div className="resume1">
                                    <input className="input13" placeholder="Username" readOnly></input>
                                </div>
                                
                                <div className="resume2">
                                    <p id="usernameid" className="two">{this.state.users.userName}</p>
                                </div>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <div className="resume1">
                                    <input className="input13" placeholder="Email Address" readOnly></input>
                                </div>
                                
                                <div className="resume2">
                                    <p id="emailaddressid" className="two">{this.state.users.email}</p>
                                </div>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <div className="resume1">
                                    <input className="input13" placeholder="Mobile Number" readOnly></input>
                                </div>
                                
                                <div className="resume2">
                                    <p id="mobilenumberid" className="two">{this.state.users.phoneno}</p>
                                </div>
                            </Col>
                        </Row>
                        <br/>
                        {/* <Row>
                            <Col>
                                <div className="resume1">
                                    <input className="input13" placeholder="Address" readOnly></input>
                                </div>
                                
                                <div className="resume2">
                                    <p id="addressid" className="input1-vprec">Address</p>
                                </div>
                            </Col>
                        </Row>
                        <br/><br/>
                        <Row>
                            <Col>
                                <div className="resume1">
                                    <input className="input13" placeholder="Category" readOnly></input>
                                </div>
                                
                                <div className="resume2">
                                    <p id="categoryid" className="input1-vprec">Category</p>
                                </div>
                            </Col>
                        </Row>
                        <br/><br/> */}
                        <Row>
                            <h3 className="recbasicinfo">Company Details</h3>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <div className="resume1">
                                    <input className="input13" placeholder="Company Name" readOnly></input>
                                </div>
                                
                                <div className="resume2">
                                    <p id="companynameid" className="input1-vp input1">Enter your company name</p>
                                </div>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <div className="resume1">
                                    <input className="input13" placeholder="Company Address" readOnly></input>
                                </div>
                                
                                <div className="resume2">
                                    <p id="companyaddressid" className="input1-vp input1">Enter your company address</p>
                                </div>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <div className="resume1">
                                    <input className="input13" placeholder="Company Description" readOnly></input>
                                </div>
                                
                                <div className="resume2">
                                    <p id="companydescid" className="input1-vp input1">Enter your company description</p>
                                </div>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <h3>Social Networks</h3>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <div className="resume1">
                                    <input className="input13" placeholder="Social Links" readOnly></input>
                                </div>
                                
                                <div className="resume2">
                                    <p id="sociallinksid" className="input1-vp input1">Enter your social links</p>
                                </div>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <h3>Change Password</h3>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <div className="resume1">
                                    <input className="input13" placeholder="Current Password" readOnly></input>
                                </div>
                                
                                <div className="resume2">
                                    <p id="currentpasswordid" className="input1-vp input1">Enter your current password</p>
                                </div>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <div className="resume1">
                                    <input className="input13" placeholder="New Password" readOnly></input>
                                </div>
                                
                                <div className="resume2">
                                    <p id="newpasswordid" className="input1-vp input1">Enter your new password</p>
                                </div>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <div className="resume1">
                                    <input className="input13" placeholder="Re-Type Password" readOnly></input>
                                </div>
                                
                                <div className="resume2">
                                    <p id="retypepasswordid" className="input1-vp input1">Re-type your new password</p>
                                </div>
                            </Col>
                        </Row>
                        <br/>
                    </Col><br/>
                    <Button onClick={this.handleSubmit1} id="spbtnrec" className="saveprofilebtn" variant="primary">Save Profile</Button>
                    <hr/>
                    <button type="button" className="res-btn btn-danger">Submit</button><br/><br/>
                </Col>
            </Row>
        )
    }
}