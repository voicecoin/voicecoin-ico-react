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


class Declar extends Component {
	constructor(props, context) {
		super(props, context);
	
		this.handleChange = this.handleChange.bind(this);
	
		this.state = {
		  value: ''
		};
	}

	getValidationState() {
		const length = this.state.value.length;
		if (length > 10) return 'success';
		else if (length > 5) return 'warning';
		else if (length > 0) return 'error';
		return null;
	  }
	
	  handleChange(e) {
		this.setState({ value: e.target.value });
	  }


	render(){
		return (
            <div className="ver-perinfo">
				<Col 
				mdOffset={1} 
				md={10} 
				xsOffset={1}
				xs={10}
				className='app-card'
				>
					<div className="b-text black left m-bottom-40">
						Personal Information
					</div>

					<Col md={6} xs={12} className='left p-r-50 m-bottom-40' >
						<FormGroup
						controlId="formBasicText"
						validationState={this.getValidationState()}
						 
						>
							<ControlLabel className='grey m-bottom '>GIVEN NAME</ControlLabel>
							<FormControl
								type="text"
								value={this.state.value}
								placeholder="Enter text"
								onChange={this.handleChange}
								className='input-noaddon'
							/>
							<FormControl.Feedback />
							<HelpBlock>Validation is based on string length.</HelpBlock>
						</FormGroup>
					</Col>

					
					<Col md={6} xs={12} className='left p-r-50 m-bottom-40' >
						<FormGroup
						controlId="formBasicText"
						validationState={this.getValidationState()}
						 
						>
							<ControlLabel className='grey m-bottom '>SUR NAME</ControlLabel>
							<FormControl
								type="text"
								value={this.state.value}
								placeholder="Enter text"
								onChange={this.handleChange}
								className='input-noaddon'
							/>
							<FormControl.Feedback />
							<HelpBlock>Validation is based on string length.</HelpBlock>
						</FormGroup>
					</Col>

					
					<Col md={12} xs={12} className='left p-r-50 m-bottom-40' >
						<FormGroup
						controlId="formBasicText"
						validationState={this.getValidationState()}
						 
						>
							<ControlLabel className='grey m-bottom '>ADDRESS</ControlLabel>
							<FormControl
								type="text"
								value={this.state.value}
								placeholder="Enter text"
								onChange={this.handleChange}
								className='input-noaddon'
							/>
							<FormControl.Feedback />
							<HelpBlock>Validation is based on string length.</HelpBlock>
						</FormGroup>
					</Col>


					
					<Col md={6} xs={12} className='left p-r-50 m-bottom-40' >
						<FormGroup
						controlId="formBasicText"
						validationState={this.getValidationState()}
						 
						>
							<ControlLabel className='grey m-bottom '>POSTAL CODE</ControlLabel>
							<FormControl
								type="text"
								value={this.state.value}
								placeholder="Enter text"
								onChange={this.handleChange}
								className='input-noaddon'
							/>
							<FormControl.Feedback />
							<HelpBlock>Validation is based on string length.</HelpBlock>
						</FormGroup>
					</Col>

					
					<Col md={6} xs={12} className='left p-r-50 m-bottom-40' >
						<FormGroup
						controlId="formBasicText"
						validationState={this.getValidationState()}
						 
						>
							<ControlLabel className='grey m-bottom '>CITY</ControlLabel>
							<FormControl
								type="text"
								value={this.state.value}
								placeholder="Enter text"
								onChange={this.handleChange}
								className='input-noaddon'
							/>
							<FormControl.Feedback />
							<HelpBlock>Validation is based on string length.</HelpBlock>
						</FormGroup>
					</Col>

					<Col md={6} xs={12} className='left p-r-50 m-bottom-40' >
						<FormGroup
						controlId="formBasicText"
						validationState={this.getValidationState()}
						 
						>
							<ControlLabel className='grey m-bottom '>COUNTRY</ControlLabel>
							<FormControl
								componentClass="select"
								className='input-noaddon'
							>
								<option value="select">select</option>
        						<option value="other">...</option>
							</FormControl>
						</FormGroup>
					</Col>

					<Col md={6} xs={12} className='left p-r-50 m-bottom-40' >
						<FormGroup
						controlId="formBasicText"
						validationState={this.getValidationState()}
						 
						>
							<ControlLabel className='grey m-bottom' >STATE</ControlLabel>
							<FormControl
								componentClass="select"
								className='input-noaddon'
							>
								<option value="select">select</option>
        						<option value="other">...</option>
							</FormControl>
						</FormGroup>
					</Col>

					<Col md={6} xs={12} className='left p-r-50 m-bottom-40' >
						<FormGroup
						controlId="formBasicText"
						validationState={this.getValidationState()}
						 
						>
							<ControlLabel className='grey m-bottom'>NATIONALITY</ControlLabel>
							<FormControl
								componentClass="select"
								className='input-noaddon'
							>
								<option value="select">select</option>
        						<option value="other">...</option>
							</FormControl>
						</FormGroup>
					</Col>

					<Col md={2} xs={12} className='left m-bottom-40' >
						<FormGroup
						controlId="formBasicText"
						validationState={this.getValidationState()}
						 
						>
							<ControlLabel className='grey m-bottom '>BIRTH DATE</ControlLabel>
							<FormControl
								componentClass="select"
								className='input-noaddon'
							>
								<option value="select">select</option>
        						<option value="other">...</option>
							</FormControl>
						</FormGroup>
					</Col>

					<Col md={2} xs={12} className='left m-bottom-40' >
						<FormGroup
						controlId="formBasicText"
						validationState={this.getValidationState()}
						 
						>
							<ControlLabel className='grey m-bottom '>MONTH</ControlLabel>
							<FormControl
								componentClass="select"
								className='input-noaddon'
							>
								<option value="select">select</option>
        						<option value="other">...</option>
							</FormControl>
						</FormGroup>
					</Col>

					<Col md={2} xs={12} className='left m-bottom-40' >
						<FormGroup
						controlId="formBasicText"
						validationState={this.getValidationState()}
						 
						>
							<ControlLabel className='grey m-bottom '>DAY </ControlLabel>
							<FormControl
								componentClass="select"
								className='input-noaddon'
							>
								<option value="select">select</option>
        						<option value="other">...</option>
							</FormControl>
						</FormGroup>
					</Col>

				</Col>	
			</div>
		)
	}
}

export default Declar