import React, { Component } from 'react';
//CONPONENTS
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
import Dropzone from 'react-dropzone'
import DatePicker from 'react-datepicker';
import moment from 'moment';
 
import 'react-datepicker/dist/react-datepicker.css';

// SERVICES
import verifApi from '../api'
// STYLE
import 'react-day-picker/lib/style.css';

class Indent extends Component {
	constructor(props, context) {
		super(props, context);
	
		this.handleChange = this.handleChange.bind(this);
	
		this.state = {
			value: '',
			frontSidePhoto: [],
			backSidePhoto: [],
			documentTypeId: null,
			idDocumentTypes: [],
			documentNumber: null,
			issueDate: null,
			expiryDate: null
		};
	}

	componentWillMount = () => {
		let self = this

		verifApi.getIdDocumentTypes().then(function(data){
			self.setState({ idDocumentTypes: data.items });
		})

		verifApi.getIdentificationVerification().then(function(data){
			self.setState({ 
				documentNumber: data.documentNumber, 
				documentTypeId: data.documentTypeId,
				issueDate: moment(data.issueDate), 
				expiryDate: moment(data.expiryDate) 
			});
		})

	}

	getValidationState() {
		const length = this.state.value.length;
		if (length > 10) return 'success';
		else if (length > 5) return 'warning';
		else if (length > 0) return 'error';
		return null;
	}
	
	handleChange(e, key) {
		this.setState({ [key]: e.target.value });
	}

	setIssueDate(d) {
		this.setState({ issueDate: d });
	}

	setExpiryDate(d) {
		this.setState({ expiryDate: d });
	}
	
	onDrop(side, files) {
		this.setState({
			[side] : files
		});

	}

	uploadDocumentSignature(){
		const formData = new FormData();
		formData.append('frontSidePhoto', this.state.frontSidePhoto[0])
		formData.append('backSidePhoto', this.state.backSidePhoto[0])
		formData.append('documentNumber', this.state.documentNumber)
		formData.append('documentTypeId', this.state.documentTypeId)
		if(this.state.issueDate != null) {
			formData.append('issueDate', this.state.issueDate.format())
		}
		
		if(this.state.expiryDate != null) {
			formData.append('expiryDate', this.state.expiryDate.format())
		}
		
		
		verifApi.uploadIdentificationVerification(formData).then((data) => {
			console.log(data)
		})
	}


	render(){
		return (
			<Row className="ver-indent of no-margin">
				<Col mdOffset={2} md={8} xsOffset={1}	xs={10} className='app-card'>
						<Row className="no-margin">
							<Col className="b-text black left m-bottom-40">Identification Verification</Col>
						</Row>
						<Row>
							<Col md={6} xs={12}>
								
								<Col className='left p-r-50 m-bottom-20' >
									<FormGroup controlId="formControlsFile">
										<ControlLabel className='grey m-bottom'>FRONT SIDE PHOTO ID DOCUMENT</ControlLabel>
										<section>
											<div className="dropzone">
												<Dropzone onDrop={this.onDrop.bind(this, 'frontSidePhoto')}>
													<p className='app-dz-text'>Try dropping some files here, or click to select files to upload.</p>
												</Dropzone>
											</div>
											<aside>
											<h5 className='bold'>Dropped files</h5>
											<ul>
												{
												this.state.frontSidePhoto.map(f => <li className='blue bold' key={f.name}>{f.name} - {f.size} bytes</li>)
												}
											</ul>
											</aside>
										</section>
									</FormGroup>
								</Col>

								<Col className='left p-r-50 m-bottom-20' >
									<FormGroup controlId="formControlsFile">
										<ControlLabel className='grey m-bottom'>BACK SIDE PHOTO ID DOCUMENT</ControlLabel>
										<section>
											<div className="dropzone">
												<Dropzone onDrop={this.onDrop.bind(this, 'backSidePhoto')}>
													<p className='app-dz-text'>Try dropping some files here, or click to select files to upload.</p>
												</Dropzone>
											</div>
											<aside>
											<h5 className='bold'>Dropped files</h5>
											<ul>
												{
													this.state.backSidePhoto.map(f => <li className='blue bold' key={f.name}>{f.name} - {f.size} bytes</li>)
												}
											</ul>
											</aside>
										</section>
									</FormGroup>
								</Col>

								<Col className='left p-r-50 m-bottom-20' >
									<FormGroup
									controlId="formBasicText">
										<ControlLabel className='grey m-bottom'>ID DOCUMENT TYPE</ControlLabel>
										<FormControl
											componentClass="select"
											className='input-noaddon'
											value={this.state.documentTypeId}
											onChange={(e) => this.handleChange(e, 'documentTypeId')}>
											<option value="select">select</option>
											{
												this.state.idDocumentTypes.map((c) => {
													return <option value={c.id}>{c.term}</option>
												})
											}
										</FormControl>
									</FormGroup>
								</Col>

								<Col className='left p-r-50 m-bottom-20' >
									<FormGroup
									controlId="formBasicText"
									validationState={this.getValidationState()}>
										<ControlLabel className='grey m-bottom'>ID DOCUMENT NUMBER</ControlLabel>
										<FormControl
											type="text"
											value={this.state.documentNumber}
											placeholder="ID DOCUMENT NUMBER"
											onChange={(e) => this.handleChange(e, 'documentNumber')}
											className='input-noaddon'
										/>
									</FormGroup>
								</Col>

								<Col className='left m-bottom-20' >
									<FormGroup controlId="formBasicText">
										<ControlLabel className='grey m-bottom '>ISSUE DATE</ControlLabel>
										<DatePicker peekNextMonth
											showMonthDropdown
											showYearDropdown
											dropdownMode="select"
											selected={this.state.issueDate}
											onChange={(d) => this.setIssueDate(d)}
											className="form-control" />
									</FormGroup>
								</Col>

								<Col className='left m-bottom-40' >
									<FormGroup controlId="formBasicText">
										<ControlLabel className='grey m-bottom '>EXPIRY DATE</ControlLabel>
										<DatePicker peekNextMonth
											showMonthDropdown
											showYearDropdown
											dropdownMode="select"
											selected={this.state.expiryDate}
											onChange={(e) => this.setExpiryDate(e)}
											className="form-control" />
									</FormGroup>
								</Col>
							</Col>	

							<Col md={6} xs={12} className='black'>
								<p className='left m-bottom-20'>
								Valid Government-Issued Identification Documents include: 
								</p>
								<p className='left m-bottom-20'>
								Valid Government-Issued Identification Documents include: 
								</p>
								<p className='left m-bottom-20'>
								High Quality Photos Or Scanned Images Of These Documents Are Acceptable (less than 10MB each).  
								</p>
								<p className='left m-bottom-20'>
								HIGH QUALITY (colour images, 300dpi resolution or higher). VISIBLE IN THEIR ENTIRETY (watermarks are permitted). VALID, with the expiry date clearly visible.	 
								</p>
								<p className='left m-bottom-20'>
								Limitations On Acceptable Document Types May Apply.
								</p>
							</Col>
						</Row>
				</Col>	
										
				<Col mdOffset={7} md={3} xsOffset={1} xs={10}>
					<div className='verif-save-btn app-btn white m-bottom-40' onClick={this.uploadDocumentSignature.bind(this)}>SAVE SECTION</div>
				</Col>
			</Row>
		)
	}
}

export default Indent