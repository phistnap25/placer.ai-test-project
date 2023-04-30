import React, {useState} from "react";
import {Form, Button, SelectOption} from '@app/components';
import './Signup.css';
import {getSignupFormItems} from "./SignupFormItems";

type ISignupData = {
    firstName: string;
    lastName: string;
    state: string;
    city: string;
    email: string;
    password: string;
}

const initialSignupData: ISignupData = {
    firstName: '',
    lastName: '',
    state: '',
    city: '',
    email: '',
    password:''
}

const mockStateData = [
    {label: 'state1', value: 'state1'},
    {label: 'state2', value: 'state2'}
]

const mockCityData = [
    {label: 'city1', value: 'city1'},
    {label: 'city2', value: 'city2'}
]

function Signup() {
    const [signupData, setSignupData] = useState<ISignupData>(initialSignupData);
    const [stateOptions, setStateOptions] = useState<Array<SelectOption>>(mockStateData);
    const [cityOptions, setCityOptions] = useState<Array<SelectOption>>(mockCityData);

    const onSubmitForm = (formData: any)=>{
        console.log('Form submitted with the data', formData);
    }


    return <div className={'signup-container'}>
        <h1>Singup Form</h1>
        <Form
            onSubmit={onSubmitForm}
            initialFormValues={signupData}
            formItems={getSignupFormItems({
                stateOptions, cityOptions
            })}
            submitButton={<Button>Signup</Button>}/>
    </div>
}
export default Signup;
