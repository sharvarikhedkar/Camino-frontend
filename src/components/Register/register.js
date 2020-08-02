import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css';

class Register extends Component{
    render(){
        return(
            <div className = "register">
                <div class="row">

                    <div class="column-left"></div>
                    <div class="column-center">

                        <Form className = "form">
                            
                            <FormGroup>
                            <Label id="labelforinput" for="firstName">Tell us a bit about yourself and your business loan needs</Label>
                            </FormGroup>

                            <FormGroup>
                                <Label id="labelforinput" for="firstName">First Name</Label>
                                <Input type="tex" style={{ width: '30em' }}  name="firstName" id="firstName" placeholder="" required/>
                            </FormGroup>

                            <FormGroup>
                                <Label id="labelforinput" for="lastName">Last Name</Label>
                                <Input type="tex" style={{ width: '30em' }}  name="lastName" id="lastName" placeholder="" required/>
                            </FormGroup>

                            <FormGroup>
                                <Label id="labelforinput" for="email">Best contact Email</Label>
                                <Input type="email" style={{ width: '30em' }}  name="email" id="email" placeholder="" />
                            </FormGroup>

                            <FormGroup>
                                <Label id="labelforinput" for="phoneNumber">Mobile Phone Number (Accepted Format: 123-456-7890)</Label>
                                <Input type="tel" style={{ width: '30em' }}  name="phoneNumber" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                required placeholder=""/>
                            </FormGroup>

                            <Label id="labelforinput" for="ownBusiness">Do you own a business?</Label>
                            <div className ="radio-btn">
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio1" />{' '}
                                            Yes
                                    </Label>
                                </FormGroup>
                                </div>
                                <p></p>
                                <div className ="radio-btn">
                                <FormGroup check>   
                                <Label check>
                                    <Input type="radio" name="radio1" />{' '}
                                            No
                                </Label>
                            </FormGroup>
                            </div>

                            <FormGroup>
                                <Label id="labelforinput" for="businessName">Business Name</Label>
                                <Input type="tex" style={{ width: '30em' }}  name="businessName" id="businessName" placeholder="" required/>
                            </FormGroup>

                            <FormGroup>
                                <Label id="labelforinput" for="loanAmout">Desired Loan Amount</Label>
                                <input type="number" style={{ width: '30em' }} class="form-control currency" placeholder="$" name="amount" min="1" maxlength="12" />
                            </FormGroup>

                            <FormGroup>
                                <Label id="labelforinput" for="loanPurpose">Purpose of Loan</Label>
                                <Input type="select" style={{ width: '30em' }}  name="loanPurpose" id="loanPurpose">
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

                            <Label id="labelforinput" for="beenBusiness">Have you been in business for at least 9 months?</Label>
                            <div className ="radio-btn">
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio1" />{' '}
                                            Yes
                                    </Label>
                                </FormGroup>
                                </div>
                                <p></p>
                                <div className ="radio-btn">
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio1" />{' '}
                                            No
                                    </Label>
                                </FormGroup>
                            </div>
                            <br />
                            <Button color="primary" style={{width : '480px'}}size="lg" block>Next</Button>
                        </Form>
                        </div>
                    <div class="column-right"></div>
                    </div>
            </div>
        )
    }
}

export default Register;