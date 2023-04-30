import React, {useState} from "react";
import {Form, IFormItem, Button, Input} from '@app/components';
import './Signup.css';

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

function Signup() {
    const [signupData, setSignupData] = useState<ISignupData>(initialSignupData);
    const formItems: Array<IFormItem> = [
        {
            controlKey: 'email',
            control: Input,
            label: 'Email',
            isRequired: true,
            pattern: '^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|.(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
        },
        {
            controlKey: 'password',
            control: Input,
            label: 'Password',
            isRequired: true,
        },
        {
            controlKey: 'firstName',
            control: Input,
            label: 'First Name',
            isRequired: true,
        },
        {
            controlKey: 'lastName',
            control: Input,
            label: 'Last Name',
            isRequired: true,
        },
        {
            controlKey: 'state',
            control: Input,
            label: 'State',
            isRequired: true,
        },
        {
            controlKey: 'city',
            control: Input,
            label: 'City',
            isRequired: true,
        }
    ];

    const onSubmitForm = (formData: any)=>{
        console.log('Form submitted with the data', formData);
    }


    return <div className={'signup-container'}>
        <h1>Singup Form</h1>
        <Form
            onSubmit={onSubmitForm}
            initialFormValues={signupData} formItems={formItems}
            submitButton={<Button>Signup</Button>}/>
    </div>
}
export default Signup;
