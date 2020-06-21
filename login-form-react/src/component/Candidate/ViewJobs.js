import React from 'react';
import './ViewJobs.css';
import Sidebar from './../Candidate/Sidebar/Sidebar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import Axios from 'axios'

export default class ViewJob extends React.Component{

    constructor(props) {
        super(props);
        this.state = { jobdetails : [] };
      }

    componentDidMount(){
        const jobId=this.props.match.params.id;
        console.log(jobId)
        Axios.get(`http://localhost:8080/api/jobspost/${jobId}`)
        .then((response)=>(
            console.log(response.data),
            this.setState({ jobdetails : response.data })
        )
        ); 
    }

    render(){
        return(
            <Row className="no-gutters">
                <Sidebar />
                <Col className="resume-page1">
                    <Col key={this.state.jobdetails.jobpostId}>

                        <Row>
                            <svg viewBox="0 -44 512.00075 512" width="40" height="40" xmlns="http://www.w3.org/2000/svg"><path d="m310.964844 423.113281h-198.816406c-61.9375 0-112.148438-50.210937-112.148438-112.148437v-198.8125c0-61.941406 50.210938-112.152344 112.148438-112.152344h198.816406c61.9375 0 112.148437 50.210938 112.148437 112.152344v198.8125c0 61.9375-50.210937 112.148437-112.148437 112.148437zm0 0" fill="#fcf2d0"/><path d="m162.535156 0h-50.386718c-61.9375 0-112.148438 50.210938-112.148438 112.152344v198.8125c0 61.9375 50.210938 112.148437 112.148438 112.148437h198.816406c1.300781 0 2.589844-.054687 3.878906-.097656-136.246094-91.921875-185.355469-287.308594-152.308594-423.015625zm0 0" fill="#f6e3a3"/><g fill="#4e5660"><path d="m332.089844 87.257812h-241.066406c-4.140626 0-7.5-3.355468-7.5-7.5 0-4.140624 3.359374-7.5 7.5-7.5h241.066406c4.140625 0 7.5 3.359376 7.5 7.5 0 4.144532-3.359375 7.5-7.5 7.5zm0 0"/><path d="m332.089844 139.753906h-241.066406c-4.140626 0-7.5-3.355468-7.5-7.5 0-4.140625 3.359374-7.5 7.5-7.5h241.066406c4.140625 0 7.5 3.359375 7.5 7.5 0 4.144532-3.359375 7.5-7.5 7.5zm0 0"/><path d="m332.089844 192.25h-241.066406c-4.140626 0-7.5-3.355469-7.5-7.5 0-4.140625 3.359374-7.5 7.5-7.5h241.066406c4.140625 0 7.5 3.359375 7.5 7.5 0 4.144531-3.359375 7.5-7.5 7.5zm0 0"/></g><path d="m503.066406 79.003906-236.933594 236.933594c-13.238281 13.238281-28.617187 24.148438-45.488281 32.269531l-45.6875 21.992188c-21.167969 10.1875-43.34375-11.988281-33.152343-33.15625l21.988281-45.683594c8.121093-16.871094 19.03125-32.25 32.269531-45.488281l236.933594-236.9375c11.914062-11.910156 31.226562-11.910156 43.140625 0l26.929687 26.929687c11.910156 11.914063 11.910156 31.226563 0 43.140625zm0 0" fill="#f7ef87"/><path d="m298.472656 143.457031-102.410156 102.410157c-13.238281 13.242187-24.148438 28.621093-32.269531 45.492187l-21.988281 45.683594c-10.191407 21.167969 11.984374 43.34375 33.152343 33.152343l45.683594-21.988281c16.871094-8.121093 32.25-19.03125 45.492187-32.269531l56.433594-56.4375c-28.597656-33.714844-39.609375-70.511719-24.09375-116.042969zm0 0" fill="#efd176"/><path d="m288.5 231c-1.917969 0-3.839844-.734375-5.300781-2.195312-2.929688-2.929688-2.929688-7.679688 0-10.609376l58.910156-58.910156c2.925781-2.925781 7.675781-2.925781 10.605469 0 2.929687 2.929688 2.929687 7.679688 0 10.609375l-58.910156 58.910157c-1.464844 1.460937-3.382813 2.195312-5.304688 2.195312zm0 0" fill="#6a96d7"/><path d="m432.996094 8.933594-26.199219 26.203125 70.066406 70.066406 26.203125-26.203125c11.914063-11.910156 11.914063-31.226562 0-43.136719l-26.929687-26.929687c-11.914063-11.910156-31.226563-11.910156-43.140625 0zm0 0" fill="#eda1ab"/><path d="m476.867188 105.203125-30.003907 30.003906-70.066406-70.066406 30.003906-30.003906zm0 0" fill="#6a96d7"/><path d="m192.703125 249.375c-11.722656 12.425781-21.492187 26.574219-28.910156 41.984375l-21.988281 45.683594c-10.191407 21.167969 11.984374 43.34375 33.152343 33.15625l45.6875-21.992188c15.410157-7.417969 29.554688-17.1875 41.984375-28.910156zm0 0" fill="#e1b89a"/><path d="m174.957031 370.195312 22.074219-10.625c-5.875-8.175781-12.738281-16.296874-20.519531-24.078124-7.785157-7.785157-15.902344-14.648438-24.082031-20.523438l-10.625 22.074219c-10.191407 21.167969 11.984374 43.34375 33.152343 33.152343zm0 0" fill="#4e5660"/></svg>
                            <h3>Job Details</h3>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <div className="resume1">
                                    <p className="input13">Job Title</p>
                                </div>
                                
                                <div className="resume2">
                                    <input className="input1" readOnly></input>
                                </div>
                            </Col>
                        </Row>
                        <br/><br/>
                        <Row>
                            <Col>
                                <div className="resume1">
                                    <p className="input13">Job Summary</p>
                                </div>
                                
                                <Dropdown>
                                    <Card className="resume2 border-0">
                                        <Row>
                                            <Col>
                                                <input className="input-type-date1" variant="light" id="dropdown-item-button" title="Job Category">
                                                    
                                                </input>
                                            </Col>

                                            <Col>
                                                <input className="input-type-date1" variant="light" id="dropdown-item-button" title="Job Type">
                                                   
                                                </input>
                                            </Col> 
                                        </Row>                                    
                                        <br/>
                                        <Row>
                                            <Col>
                                                <input className="input-type-date1" variant="light" id="dropdown-item-button" title="Experience (Optional)">
                                                    
                                                </input>
                                            </Col>

                                            <Col>
                                                <input className="input-type-date1" variant="light" id="dropdown-item-button" title="Qualification">
                                                
                                                </input>
                                            </Col>
                                        </Row>
                                        <br/>
                                    </Card>
                                </Dropdown>
                            </Col>
                        </Row>
                        <br/><br/>
                        <Row>
                            <Col>
                                <div className="resume1">
                                    <p className="input13">Job Description</p>
                                </div>
                                
                                <div className="resume2">
                                    <input className="input1" readOnly>{this.state.jobdetails.jobpostjobdesc}</input>
                                </div>
                            </Col>
                        </Row>
                        <br/><br/>
                        <Row>
                            <Col>
                                <div className="resume1">
                                    <p className="input13" placeholder="Responsibilities" readOnly>Job Responsibilities</p>
                                </div>
                                
                                <div className="resume2">
                                    <input className="input1" readOnly></input>
                                </div>
                            </Col>
                        </Row>
                       { /* <br/><br/>
                        <Row>
                            <Col>
                                <div className="resume1">
                                    <input className="input13" placeholder="Education" readOnly></input>
                                </div>
                                
                                <div className="resume2">
                                    <input className="input1" placeholder=""></input>
                                </div>
                            </Col>
                       </Row>*/}
                        <br/><br/> 
                        <Row>
                            <Col>
                                <div className="resume1">
                                    <p className="input13" placeholder="Other Benefits" readOnly>Other Benifits</p>
                                </div>
                                
                                <div className="resume2">
                                    <input className="input1" readOnly></input>
                                </div>
                            </Col>
                        </Row>
                        <br/><br/>
                        <Row>
                            <Col>
                                <div className="resume1">
                                    <p className="input13" placeholder="About Company" readOnly>About Company</p>
                                </div>
                                
                                <div className="resume2">
                                    <input className="input1-1"></input>
                                    <input className="input1-2"></input><br/><br/><br/>
                                    <input className="input1"></input>
                                </div>
                            </Col>
                        </Row>
                        <br/><br/>

                    </Col>
                    <br/>
                </Col>
            </Row>
        )
    }
}