import React, {useEffect, useState} from "react";

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
    const controlOptions = controlProps?.options;
    const [options, setOptions] = useState<Array<SelectOption>>([]);

    useEffect(()=>{
        setOptions(controlOptions);
    }, [controlOptions]);

    useEffect(()=>{
        const hasEmptyOption = options.find(({value}) => value === '');
        if (!value) {
            //set the empty option
            if (!hasEmptyOption) {
                const newOptions = [...options];
                newOptions.unshift({label: '', value: ''});
                setOptions(newOptions);
            }
        } else {
            if (hasEmptyOption) {
                const newOptions = [...options];
                newOptions.shift();
                setOptions(newOptions);
            }
        }
    }, [value, options]);

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
