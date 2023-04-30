import React, {useEffect, useState} from "react";
import { VALIDATION_MESSAGES, VALIDATION_TYPES} from "./validation-utils";
import './FormItem.css';

type FormItemProps = {
    control: any,
    label: string,
    onChange: (newValue: any)=>void,
    value: any,
    isSubmitted: boolean,
    isRequired?: boolean,
    pattern?: string,
    controlProps?: any
}

export interface IFormItem {
    controlKey: string,
    control: any,
    label: string,
    isRequired?: boolean,
    pattern?: string,
    controlProps?: any
}



export function FormItem({
                             control: Control,
                             label,
                             onChange,
                             value,
                             isRequired = false,
                             isSubmitted,
                             pattern='',
    controlProps= {}
}: FormItemProps){
    const [validationErrors, setValidationErrors] = useState<any>({});
    const [isFieldDirty, setIsFieldDirty] = useState(false);
    const isFieldInvalid = (isSubmitted || isFieldDirty) && Object.keys(validationErrors).length;

    useEffect(()=>{
        validateFieldItem();
    }, [isSubmitted, value])

    const onUpdateControlValue = (newValue: any)=>{
        setIsFieldDirty(true);
        onChange(newValue);
    }

    const validateFieldItem = ()=>{
        console.log(value);
        const updatedValidationErrors = {...validationErrors};
        if(isRequired) {
            if(!value){
                updatedValidationErrors[VALIDATION_TYPES.IS_REQUIRED] = true;
            } else {
                delete updatedValidationErrors[VALIDATION_TYPES.IS_REQUIRED];
            }
        }
        if(value && pattern){
            if(!value.match(new RegExp(pattern))){
                updatedValidationErrors[VALIDATION_TYPES.PATTERN] = true;
            } else {
                delete updatedValidationErrors[VALIDATION_TYPES.PATTERN];
            }
        } else {
            delete updatedValidationErrors[VALIDATION_TYPES.PATTERN];
        }
        setValidationErrors(updatedValidationErrors);
    }

    const renderValidationMessage = ()=>{
        if(!isFieldInvalid){
            return null;
        }
        return <div className={'error-messages'}>
            {Object.keys(validationErrors).map((errorType)=>{
                const validationMessageUnFormatted = VALIDATION_MESSAGES[errorType];
                const validationMessageFormatted = validationMessageUnFormatted.replace('${field}', label);
                return <div className={'error-message'} key={errorType}>
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
            <Control onChange={onUpdateControlValue} value={value} controlProps={controlProps}/>
        </div>
        {renderValidationMessage()}
    </div>
}
