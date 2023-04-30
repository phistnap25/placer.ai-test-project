import React, {useState} from "react";
import { Form } from '@app/components';

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


    return <div>
        Signup form here...
        <Form initialFormValues={signupData}/>
        {/*<form>*/}
        {/*    <pre>{JSON.stringify(signupData, null, 4)}</pre>*/}
        {/*   <div className={'form-item'}>*/}
        {/*       <label>First Name</label>*/}
        {/*       <input value={signupData.firstName} onChange={onChangeFormValue('firstName')}/>*/}
        {/*   </div>*/}
        {/*</form>*/}
    </div>
}
export default Signup;
