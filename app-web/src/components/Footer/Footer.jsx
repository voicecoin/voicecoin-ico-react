import React, { Component } from 'react';

import { Row, 
	Col,
	form, 
	FormGroup,
	FormControl, 
	InputGroup, 
	Glyphicon,
	ControlLabel,
	HelpBlock
} from 'react-bootstrap';

import 'font-awesome/css/font-awesome.min.css';
import './Footer.css'

class Footer extends Component {
	constructor() {
		super();
	}

	render(){
		return (
            <div>
                <Row className='no-margin of bg-l-black p-t-50'>
                    <Col 
                    mdOffset={1} 
                    md={10} 
                    xs={12}
                    className='ft-wrapper left white'>
                        <Col md={3} xs={12} className='p-r-50 m-bottom-60'>
                            <h4 className='m-bottom-20'>ABOUT US</h4>
                            <div className='ft-s-line m-bottom-40'></div>
                            <p>The first decentralized digital currency to be backed by a financial guarantee that scales with the size of the ICO, built on a proven infrastructure, with an equitable revenue share structure, all designed to optimize and implement the goals of the global financial revolution. The future has arrived.</p>
                        </Col>
                        <Col md={3} xs={12} className='p-r-50 m-bottom-60'>
                            <h4 className='m-bottom-20'>PAPPERS</h4>
                            <div className='ft-s-line m-bottom-40'></div>
                            <div className='m-bottom-10'>Teaser</div>
                            <div className='ft-l-line m-bottom-10'></div>
                            <div className='m-bottom-10'>Primer</div>
                            <div className='ft-l-line m-bottom-10'></div>
                            <div className='m-bottom-10'>Proof of Majority</div>
                            <div className='ft-l-line m-bottom-10'></div>
                        </Col>
                        <Col md={3} xs={12} className='p-r-50 m-bottom-60'>
                            <h4 className='m-bottom-20'>DOCUMENTS</h4>
                            <div className='ft-s-line m-bottom-40'></div>
                            <div className='m-bottom-10'>White Papper</div>
                            <div className='ft-l-line m-bottom-10'></div>
                            <div className='m-bottom-10'>SAFT</div>
                            <div className='ft-l-line m-bottom-10'></div>
                        </Col>
                        <Col md={3} xs={12} className='p-r-50 m-bottom-60'>
                            <h4 className='m-bottom-20'>CONTACT</h4>
                            <div className='ft-s-line m-bottom-40'></div>
                            <div className='m-bottom-20'>
                                <p>Suite 1, Burns House</p>
                                <p>19 Town Range, Gibraltar</p>
                            </div>

                            <div className='m-bottom-20'>
                                <p>support@voiccoin.com</p>
                                <p>www.voicecoin.com</p>
                            </div>
                        </Col>
                    </Col>
                </Row>
                <Row className='no-margin of bg-black'>
                    <Col
                    mdOffset={1} 
                    md={10} 
                    xs={12}
                    className='white bg-black'>
                        <Col md={8} xs={12}>
                            <h5 className='m-top-20 m-bottom-20 left'>Voiceweb Foundation, 2018 © All Rights Reserved. Privacy Policy  |  Terms of Use</h5>
                        </Col>
                        <Col className='ft-icons' md={4} xs={12}>
                            <i className="fa fa-linkedin ft-icon"></i>
                            <i className="fa fa-twitter ft-icon"></i>
                            <i className="fa fa-instagram ft-icon"></i>
                            <i className="fa fa-facebook ft-icon"></i>
                            <i className="fa fa-weibo ft-icon"></i>
                        </Col>
                    </Col>
                </Row>
            </div>

		)
	}
}

export default Footer