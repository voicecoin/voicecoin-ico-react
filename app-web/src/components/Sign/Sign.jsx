import React, { Component } from 'react';
//libs
import { Grid, 
		Row, 
		Col, 
		form, 
		FormGroup,
		FormControl, 
		InputGroup, 
		Glyphicon,
		Modal,
		Button,
		Checkbox,
		HelpBlock } from 'react-bootstrap';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'

import Header from '../Header/Header'
import Register from '../../components/Sign/Register'
import Login from '../../components/Sign/Login'

//services
import signApi from './services/api'
//style
import './Sign.css';
import Logo from '../../vendor/img/logo.png'

class Sign extends Component {
	constructor(){
		super();

		this.state = {

		}
	}

	componentDidMount(){
		let self = this;
		if(this.props.match.params.key){
			signApi.activate(this.props.match.params.key)
			.then(function(data){
				self.setState({ showActivationModel: true });
			})
		}
	}

	handleActivationHide = () => {
		this.setState({ showActivationModel: false });
		this.props.history.push('../')
	}
	
  render() {
    const style = {
			menu: {
				color: '#fff',
				backgroundColor: '#0065ae',
				height: '70px',
				logo: {
					paddingTop: '10px',
					height: '100%',
					float: 'left'
				},
				items: {
					padding: '0px',
					height: '100%'
				},
				item: {
					paddingTop: '20px',
					height: '100%',
					display: 'InlineBlock'
				}
			},

			wrapper: {
				color: '#fff'
			}
    }

    return (
			<Row>
				<Col className='of m-bottom-60'>
					<Row className='no-margin'>
						<div style={style.menu}>
							<Col md={4} style={style.menu.logo} >
								<img className='home-menu-logo' src={Logo} alt="#"/>
							</Col>
							<Col mdOffset={4} md={2} style={style.menu.items} >
								{this.state.showLogout ? <div style={style.menu.item} className='app-btn f-right m-right-20 bold' onClick={this.logout}>LOGOUT</div> : null}
							</Col>
						</div>
					</Row>

					<Header/>

					<div style={style.wrapper}>
						<Col mdOffset={2} md={4} xsOffset={1} xs={10}>
							<Login />
						</Col>

						<Col mdOffset={0} md={4} xsOffset={1} xs={10}>
							<Register />
						</Col>
					
					</div>
				</Col>
			</Row>
    );
  }
}

export default Sign;