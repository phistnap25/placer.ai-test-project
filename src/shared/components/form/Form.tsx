import React, {useState} from "react";
import {FormItem, IFormItem} from "../form-item/FormItem";
import './Form.css';

type FormProps = {
    initialFormValues: any;
    formItems: Array<IFormItem>;
    onSubmit?: (formData: any)=>void,
    submitButton?: any
}

export function Form({initialFormValues, formItems, onSubmit, submitButton}: FormProps){
    const [formData, setFormData] = useState(initialFormValues);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const onChangeFormValue = (formDataKey: string) => (newValue: any)=>{
        setFormData({
            ...formData,
            [formDataKey]: newValue
        });
    }

    const onSubmitForm = (event: React.SyntheticEvent)=>{
        event.preventDefault();
        console.log('here....');
        setIsSubmitted(true);
        onSubmit && onSubmit(formData);
    }

    return <form onSubmit={onSubmitForm}>
        <pre>{JSON.stringify(formData, null, 4)}</pre>
        {formItems.map((record)=>{
            const {controlKey} = record;
            return <FormItem
                {...record}
                key={controlKey}
                value={formData[controlKey]}
                onChange={onChangeFormValue(controlKey)}
                isSubmitted={isSubmitted}
            />
        })}
        {submitButton ?
            <div className={'submit-button-container'}>
                {submitButton}
            </div>
             : null }
    </form>
}
