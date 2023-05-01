import React, {useEffect, useState} from "react";
import {FormItem, IFormItem} from "../form-item/FormItem";
import './Form.css';

type FormProps = {
    formData: any;
    formItems: Array<IFormItem>;
    onSubmit?: (formData: any)=>void,
    onUpdate?: (formData: any)=>void,
    submitButton?: any
}

export function Form({formData, formItems, onSubmit, onUpdate, submitButton}: FormProps){
    const [formDataState, setFormDataState] = useState(formData);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    useEffect(()=>{
        setFormDataState(formData);
    }, [formData])

    const onChangeFormValue = (formDataKey: string) => (newValue: any)=>{
        const newFormData = {
            ...formDataState,
            [formDataKey]: newValue
        };
        setFormDataState(newFormData);
        onUpdate && onUpdate(newFormData);
    }

    const onSubmitForm = (event: React.SyntheticEvent)=>{
        event.preventDefault();
        setIsSubmitted(true);
        onSubmit && onSubmit(formDataState);
    }

    return <form onSubmit={onSubmitForm}>
        {formItems.map((record)=>{
            const {controlKey} = record;
            return <FormItem
                {...record}
                key={controlKey}
                value={formDataState[controlKey]}
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
