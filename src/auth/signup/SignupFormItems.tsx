import {Input, Select} from "@app/components";

export const getSignupFormItems = ({stateOptions, cityOptions}: any)=>{
    return [
        {
            controlKey: 'email',
            control: Input,
            label: 'Email',
            isRequired: true,
            pattern: '^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|.(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
        },
        {
            controlKey: 'password',
            control: Input,
            label: 'Password',
            isRequired: true,
        },
        {
            controlKey: 'firstName',
            control: Input,
            label: 'First Name',
            isRequired: true,
        },
        {
            controlKey: 'lastName',
            control: Input,
            label: 'Last Name',
            isRequired: true,
        },
        {
            controlKey: 'state',
            control: Select,
            label: 'State',
            isRequired: true,
            controlProps: {
                options: stateOptions
            }
        },
        {
            controlKey: 'city',
            control: Select,
            label: 'City',
            isRequired: true,
            controlProps: {
                options: cityOptions
            }
        }
    ];
}
