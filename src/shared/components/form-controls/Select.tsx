import React from "react";

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
    const onChangeSelectValue = (event: React.ChangeEvent<HTMLSelectElement>)=>{
        const newValue = event.target.value;
        onChange(newValue);
    }

    return <select value={value} onChange={onChangeSelectValue}>
        {controlProps.options.map(({label, value})=>{
            return <option value={value} key={value}>
                {label}
            </option>
        })}
    </select>
}
