import React, {useEffect} from "react";

export type SelectOption = {
    value: string,
    label: string
}

type SelectProps = {
    value: string,
    onChange: (newValue: string)=> void,
    controlProps: {
        options: Array<SelectOption>
    }
}


export function Select({value, onChange, controlProps}: SelectProps){
    const options = controlProps?.options || [];

    useEffect(()=>{
        const hasEmptyOption = options.find(({value})=>value === '');
        if(!value){
            //set the empty option
            if(!hasEmptyOption){
                options.unshift({label:'', value: ''});
            }
        } else {
            if(hasEmptyOption){
                options.shift();
            }
        }
    }, [value]);

    const onChangeSelectValue = (event: React.ChangeEvent<HTMLSelectElement>)=>{
        const newValue = event.target.value;
        onChange(newValue);
    }

    return <select value={value} onChange={onChangeSelectValue}>
        {options.map(({label, value})=>{
            return <option value={value} key={value}>
                {label}
            </option>
        })}
    </select>
}
