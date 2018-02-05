import React, { Component } from 'react';

import Moment from 'react-moment';
import { Row, 
	Col,
	form, 
	FormGroup,
	FormControl, 
	InputGroup, 
	Glyphicon,
	Modal,
	Button, 
	Panel,
	PanelBody,
	HelpBlock
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//components
//services
import purchaseApi from '../Purchase/api'
//styling
import './Purchase.css';

class Contribution extends Component {
	constructor(){
		super()

		this.state = {
			currencies: [],
			contri: {},
			contributionStat: []
		}
	}
	
	componentWillMount = () => {
		let self = this;
		let t = new Date();

		purchaseApi.getCurrencies().then(function(data){
			self.setState({ currencies: data })
		})

		purchaseApi.getPrices().then(function(data){
			self.setState({ prices: data })
			self.setState({ curPrice: data[0] })
		})

		purchaseApi.getContributionStat().then((data) => {
			self.setState({ contributionStat: data })
		})
	}

	componentDidMount(){
		console.log(this.props.num)
	}

	render() {
		const style = {
			text:{
				marginBottom: '10px'
			},

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
					paddingTop: '25px',
					height: '100%',
					display: 'InlineBlock',
				}
			},
		}

		return (
			<div>
				<Row className="no-margin pur-coins of">
					<Col md={8} mdOffset={2} xs={12} className='no-padding'>
						{
							this.state.contributionStat.length !== 0 ? this.state.contributionStat.items.map((s) => {
								return (
									<Col md={2} xs={8} className="app-card f-left bg-light-blue white pur-l-card m-right-20">
										<div className='n-text m-bottom'>{s.currency}</div>
										<div className='light'>${s.amountUsd} USD</div>
										<div className='light'> {s.amount} Coins</div>
									</Col>
								)
							}) : null
						}
					</Col>
				</Row>

				<Row className="no-margin pur-wallet of white">
					<Col md={8} mdOffset={2} xs={10} xsOffset={1} className="pur-l-card app-card bg-light-blue">
						<Row className="no-margin">
							<Col className='no-padding  m-bottom-0' md={1} xs={12}>
								<div className='bold b-text m-top-10'>12</div>
								<div className='light'>jan 2018</div>
							</Col>
							<Col className='no-padding left m-bottom-20 ' md={3} xs={12}>
								<div className='bold m-top-10'>PURCHASING USING FIAT</div>
								<div className='light'>2.00 USD</div>
							</Col>
							<Col className='no-padding left m-bottom-20' md={3} xs={12}>
								<div className='bold m-top-10'>UNFULFILLED</div>
								<div className='light'>No Blockchain Transaction</div>
							</Col>
							<Col className='no-padding left m-bottom-20' md={3} xs={12}>
								<div className='bold m-top-10'>NO TOKENS</div>
								<div className='light'>No Blockchain Transaction</div>
							</Col>
							<Col className='no-padding' md={2} xs={12} className='f-left bg-red pur-btn'>
								WALLET INFORMATION
							</Col>
						</Row>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Contribution;