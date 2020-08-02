import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { isEmail, isNumeric } from 'validator';
import './register.css';

class Register extends Component{

    constructor(props){
        super(props);

        this.state = {
            data: {
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                ownaBusiness: '',
                businessName: '',
                loanAmount: '',
                loanPurpose: '',
                nineMonths: ''
            },
            errors: {}
        }
    }

    handleChange = (event) =>{
        this.setState({
            data:{
                ...this.state.data,
                [event.target.name]: event.target.value
            }
        })
    }

    validate = () => {
        const { data } = this.state;
        let errors = {};

        if(data.firstName === '') errors.firstName = 'First Name can not be blank.';
        if(data.lastName === '') errors.lastName = 'Last Name can not be blank.';
        if(!isEmail(data.email)) errors.email = 'Email must be valid.';
        if(data.email === '') errors.email = 'Email can not be blank.';
        if(data.businessName === '') errors.businessName = 'Business name can not be blank.'
        if(!isNumeric(data.loanAmount)) errors.loanAmount = 'Loan amount must be valid (Numeric value).';
        if(data.loanAmount === '') errors.loanAmount = 'Loan amount can not be blank.';
        
        return errors;
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        const { data } = this.state;
        const error = this.validate();
        console.log(data,error);
    }

    render(){
        return(
            <div className = "register">
                <div className="row">

                    <div className="column-left"></div>
                    <div className="column-center">

                        <Form className = "form" onSubmit={this.handleSubmit}>
                            
                            <FormGroup>
                            <Label id="labelforinput">Tell us a bit about yourself and your business loan needs</Label>
                            </FormGroup>

                            <FormGroup>
                                <Label id="labelforinput" for="firstName">First Name</Label>
                                <Input type="tex" style={{ width: '30em' }}  name="firstName" id="firstName" placeholder="" onChange= { this.handleChange }/>
                            </FormGroup>

                            <FormGroup>
                                <Label id="labelforinput" for="lastName">Last Name</Label>
                                <Input type="tex" style={{ width: '30em' }}  name="lastName" id="lastName" placeholder="" onChange= { this.handleChange }/>
                            </FormGroup>

                            <FormGroup>
                                <Label id="labelforinput" for="email">Best contact Email</Label>
                                <Input type="email" style={{ width: '30em' }}  name="email" id="email" placeholder="" onChange= { this.handleChange }/>
                            </FormGroup>

                            <FormGroup>
                                <Label id="labelforinput" for="phoneNumber">Mobile Phone Number (Accepted Format: 123-456-7890)</Label>
                                <Input type="tel" style={{ width: '30em' }}  name="phoneNumber" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                 placeholder="" onChange= { this.handleChange }/>
                            </FormGroup>

                            <Label id="labelforinput" for="ownBusiness">Do you own a business?</Label>
                            <div className ="radio-btn">
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" value ="yes" name="ownBusiness" onChange= { this.handleChange }/>{' '}
                                            Yes
                                    </Label>
                                </FormGroup>
                                </div>
                                <p></p>
                                <div className ="radio-btn">
                                <FormGroup check>   
                                <Label check>
                                    <Input type="radio" value= "no" name="ownBusiness" onChange= { this.handleChange }/>{' '}
                                            No
                                </Label>
                            </FormGroup>
                            </div>

                            <FormGroup>
                                <Label id="labelforinput" for="businessName">Business Name</Label>
                                <Input type="tex" style={{ width: '30em' }}  name="businessName" id="businessName" placeholder="" onChange= { this.handleChange }/>
                            </FormGroup>

                            <FormGroup>
                                <Label id="labelforinput" for="loanAmout">Desired Loan Amount</Label>
                                <input type="number" style={{ width: '30em' }} className="form-control currency" placeholder="$" name="loanAmmount" min="1" maxLength="12" onChange= { this.handleChange }/>
                            </FormGroup>

                            <FormGroup>
                                <Label id="labelforinput" for="loanPurpose">Purpose of Loan</Label>
                                <Input type="select" style={{ width: '30em' }}  name="loanPurpose" id="loanPurpose" onChange= { this.handleChange }>
                                <option>Working Capital</option>
                                <option>Growth</option>
                                <option>Inventory</option>
                                <option>Equipment</option>
                                <option>Startup</option>
                                <option>Debt Refinance</option>
                                <option>A/R Finance</option>
                                <option>Acquisition/Buyout Capital</option>
                                <option>Other</option>
                                </Input>
                            </FormGroup>

                            <Label id="labelforinput" for="nineMonths">Have you been in business for at least 9 months?</Label>
                            <div className ="radio-btn">
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" value="yes" name="nineMonths" onChange= { this.handleChange }/>{' '}
                                            Yes
                                    </Label>
                                </FormGroup>
                                </div>
                                <p></p>
                                <div className ="radio-btn">
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" value="no" name="nineMonths" onChange= { this.handleChange }/>{' '}
                                            No
                                    </Label>
                                </FormGroup>
                            </div>
                            <br />
                            <Button color="primary" style={{width : '480px'}}size="lg" block>Next</Button>
                        </Form>
                        </div>
                    <div className="column-right"></div>
                    </div>
            </div>
        )
    }
}

export default Register;