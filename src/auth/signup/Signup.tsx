import React, {useEffect, useState} from "react";
import {Form, Button, SelectOption} from '@app/components';
import './Signup.css';
import {getSignupFormItems} from "./SignupFormItems";
import {getCityListFromState, getStateList} from "./shared/location-service";

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
    const [stateOptions, setStateOptions] = useState<Array<SelectOption>>([]);
    const [cityOptions, setCityOptions] = useState<Array<SelectOption>>([]);
    const userState = signupData.state;

    useEffect(()=>{
        getStateData();
    }, []);

    useEffect(()=>{
        console.log('inside the get city data');
        getCityData();
    }, [userState]);

    const getStateData = async ()=>{
        const stateData = await getStateList();
        setStateOptions(stateData);
    }

    const getCityData = async ()=>{
        setSignupData({...signupData, city: ''});
        const cityData = await getCityListFromState(signupData.state);
        setCityOptions(cityData);
    }

    const onSubmitForm = (formData: any)=>{
        console.log('Form submitted with the data', formData);
    }

    const onChangeFormValue = (newFormData: any)=>{
        setSignupData(newFormData);
    }

    return <div className={'signup-container'}>
        <h1>Singup Form</h1>
        <Form
            onSubmit={onSubmitForm}
            formData={signupData}
            onUpdate={onChangeFormValue}
            formItems={getSignupFormItems({
                stateOptions, cityOptions
            })}
            submitButton={<Button>Signup</Button>}/>
    </div>
}
export default Signup;
