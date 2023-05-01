import {api} from "../../../app/utils/api";

export const getStateList = async ()=>{
    const responseData = await api({url: '/states/United States'});
    return responseData.map(({state_name}: any)=>{
        return {value: state_name, label: state_name};
    });
}

export const getCityListFromState = async (state: string)=>{
    const responseData = await api({url: `/cities/${state}`});
    return responseData.map(({city_name}: any)=>{
        return {value: city_name, label: city_name};
    });
}
