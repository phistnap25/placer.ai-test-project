import React, {useState} from "react";

type FormProps = {
    initialFormValues: any;
}

export function Form({initialFormValues}: FormProps){
    const [formData, setFormData] = useState(initialFormValues);
    const onChangeFormValue = (formDataKey: string) => (event: React.ChangeEvent<HTMLInputElement>)=>{
        const newValue = event.target.value;
        setFormData({
            ...formData,
            [formDataKey]: newValue
        });
    }

    return <form>
        <pre>{JSON.stringify(formData, null, 4)}</pre>
        <div className={'form-item'}>
            <label>First Name</label>
            <input value={formData.firstName} onChange={onChangeFormValue('firstName')}/>
        </div>
    </form>
}
