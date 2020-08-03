import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { isEmail } from 'validator';
import './register.css';

class RegisterEspanol extends Component{

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

    getInitialState = () =>({
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
    });

    handleChange = (event) =>{
        this.setState({
            data:{
                ...this.state.data,
                [event.target.name]: event.target.value
            },
            errors:{
                ...this.state.errors,
                [event.target.name]: ''
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
        if(data.phoneNumber === '') errors.loanAmount = 'Phone number can not be blank.';
        if(data.loanAmount === '') errors.loanAmount = 'Loan amount can not be empty.';
        
        return errors;
    }

    isFormValid = (errors) =>{
        const validate = this.validate();
        if(Object.entries(validate).length !== 0){
            return false;
        }else{
            return true;
        }
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        const { data } = this.state;
        const errors = this.validate();

        console.log(Object.keys(errors));

        if(Object.entries(errors).length === 0){
            console.log(data)
            //resetting the form
            this.setState(this.getInitialState());
        }else{
            console.log(errors);
            this.setState({ errors });
        }
    }

    render(){
        const { data, errors } = this.state;
        const isFormValid = this.isFormValid(errors);
        
        return(
            <div className = "register">
                <div className="row">

                <div className="column-left"></div>
                <div className="column-center">

                    <Form className = "form" onSubmit={this.handleSubmit}>
                        
                        <FormGroup>
                        <Label id="labelforinput">Cuéntanos un poco sobre ti y tus necesidades de préstamos comerciales</Label>
                        </FormGroup>

                        <FormGroup>
                        <p className = "req">* required</p>
                        </FormGroup>

                        <FormGroup>
                            <Label id="labelforinput" for="firstName" className="required">Nombre</Label>
                            <Input type="tex" style={{ width: '30em' }}  name="firstName" id="firstName" placeholder="" value={data.firstName} invalid = {errors.firstName ? true : false} onChange= { this.handleChange }/>
                            <FormFeedback>{errors.firstName}</FormFeedback>
                        </FormGroup>

                        <FormGroup>
                            <Label id="labelforinput" for="lastName" className="required">Apellido</Label>
                            <Input type="tex" style={{ width: '30em' }}  name="lastName" id="lastName" placeholder="" value={data.lastName} invalid = {errors.lastName ? true : false} onChange= { this.handleChange }/>
                            <FormFeedback>{errors.lastName}</FormFeedback>
                        </FormGroup>

                        <FormGroup>
                            <Label id="labelforinput" for="email" className="required">Correo Electrónico Principal </Label>
                            <Input type="email" style={{ width: '30em' }}  name="email" id="email" placeholder="" value={data.email} invalid = {errors.email ? true : false} onChange= { this.handleChange }/>
                            <FormFeedback>{errors.email}</FormFeedback>
                        </FormGroup>

                        <FormGroup>
                            <Label id="labelforinput" for="phoneNumber" className="required">Teléfono Celular (Formato aceptado: 123-456-7890)</Label>
                            <Input type="tel" style={{ width: '30em' }}  name="phoneNumber" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                             placeholder="" value={data.phoneNumber} invalid = {errors.phoneNumber ? true : false} onChange= { this.handleChange }/>
                            <FormFeedback>{errors.phoneNumber}</FormFeedback>
                        </FormGroup>

                        <Label id="labelforinput" for="ownaBusiness"  className="required">Tienes un negocio?</Label>
                        <div className ="radio-btn">
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="ownaBusiness" value ="yes" onChange= { this.handleChange }/>{' '}
                                        Yes
                                </Label>
                            </FormGroup>
                            </div>
                            <p></p>
                            <div className ="radio-btn">
                            <FormGroup check>   
                            <Label check>
                                <Input type="radio" name="ownaBusiness" value ="no" onChange= { this.handleChange }/>{' '}
                                        No
                            </Label>
                        </FormGroup>
                        </div>

                        <FormGroup>
                            <Label id="labelforinput" for="businessName" className="required">Nombre de su Negocio</Label>
                            <Input type="tex" style={{ width: '30em' }}  name="businessName" id="businessName" placeholder="" value={data.businessName} invalid = {errors.businessName ? true : false} onChange= { this.handleChange }/>
                            <FormFeedback>{errors.businessName}</FormFeedback>
                        </FormGroup>

                        <FormGroup>
                            <Label id="labelforinput" for="loanAmout" className="required">Cantidad del Préstamo Deseado</Label>
                            <input type="number" style={{ width: '30em' }} name="loanAmount" className="form-control currency" placeholder="$" min="1" maxLength="12"  onChange= { this.handleChange }/>
                            <FormFeedback>{errors.loanAmount}</FormFeedback>
                        </FormGroup>

                        <FormGroup>
                            <Label id="labelforinput" for="loanPurpose" className="required">Uso del Préstamo</Label>
                            <Input type="select" style={{ width: '30em' }}  name="loanPurpose" id="loanPurpose" onChange= { this.handleChange }>
                            <option hidden>Select Loan Purpose</option>
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

                        <Label id="labelforinput" for="nineMonths" className="required">Has estado en el negocio durante al menos 9 meses?</Label>
                        <div className ="radio-btn">
                            <FormGroup check>
                            <Label check>
                                <Input type="radio" name="nineMonths" value ="yes" onChange= { this.handleChange }/>{' '}
                                        Yes
                                </Label>
                            </FormGroup>
                            </div>
                            <p></p>

                            <div className ="radio-btn">
                            <FormGroup check>
                            <Label check>
                                <Input type="radio" name="nineMonths" value ="no"  onChange= { this.handleChange } />{' '}
                                        No
                                </Label>
                            </FormGroup>
                        </div>
                        <br />

                        <Button color="primary" style={{width : '480px'}} size="lg" block disabled = {!isFormValid} >
                        próximo</Button>
                    </Form>
                    </div>
                <div className="column-right"></div>
                </div>
            </div>
        )
    }
}

export default RegisterEspanol;