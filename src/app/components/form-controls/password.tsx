import React from "react";

type PasswordProps = {
    value: string,
    onChange: (newValue: string)=> void
}

export function Password({value, onChange}: PasswordProps){
    const onChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>)=>{
        const newValue = event.target.value;
        onChange(newValue);
    }

    return <input type={'password'} value={value} onChange={onChangeInputValue}/>
}
