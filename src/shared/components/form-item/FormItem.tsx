import React, {useEffect, useState} from "react";
import { VALIDATION_MESSAGES, VALIDATION_TYPES} from "./validation-utils";
import './FormItem.css';

type FormItemProps = {
    control: any,
    label: string,
    onChange: (newValue: any)=>void,
    value: any,
    isSubmitted: boolean,
    isRequired?: boolean
}

export interface IFormItem {
    controlKey: string,
    control: any,
    label: string,
    isRequired?: boolean
}



export function FormItem({control: Control, label, onChange, value, isRequired = false, isSubmitted}: FormItemProps){
    const [validationErrors, setValidationErrors] = useState<any>({});
    const [isFieldDirty, setIsFieldDirty] = useState(false);
    const isFieldInvalid = (isSubmitted || isFieldDirty) && Object.keys(validationErrors).length;

    useEffect(()=>{
        validateFieldItem();
    }, [isSubmitted])

    const onUpdateControlValue = (value: any)=>{
        setIsFieldDirty(true);
        validateFieldItem();
        onChange(value);
    }

    const validateFieldItem = ()=>{
        if(isRequired) {
            if(value){
                const updatedValidationErrors = {...validationErrors};
                delete updatedValidationErrors[VALIDATION_TYPES.IS_REQUIRED];
                setValidationErrors(updatedValidationErrors);
            } else {
                setValidationErrors({
                    ...validationErrors,
                    [VALIDATION_TYPES.IS_REQUIRED]: true
                });
            }
        }
    }

    const renderValidationMessage = ()=>{
        if(!isFieldInvalid){
            return null;
        }
        return <div className={'error-messages'}>
            {Object.keys(validationErrors).map((errorType)=>{
                const validationMessageUnFormatted = VALIDATION_MESSAGES[errorType];
                const validationMessageFormatted = validationMessageUnFormatted.replace('${field}', label);
                return <div className={'error-message'}>
                    {validationMessageFormatted}
                </div>
            })}
        </div>
    }

    return <div className={`form-item ${isFieldInvalid ? 'has-error': ''}`}>
        <label>
            {label}
            {isRequired ? <span className={'required-star'}>*</span>: null}
        </label>
        <div className={'control-container'}>
            <Control onChange={onUpdateControlValue} value={value}/>
        </div>
        {renderValidationMessage()}
    </div>
}
