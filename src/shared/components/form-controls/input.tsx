import React from "react";

type InputProps = {
    value: string,
    onChange: (newValue: string)=> void
}

export function Input({value, onChange}: InputProps){
    const onChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>)=>{
        const newValue = event.target.value;
        onChange(newValue);
    }

    return <input value={value} onChange={onChangeInputValue}/>
}
