const mockStateData = [
    {label: 'state1', value: 'state1'},
    {label: 'state2', value: 'state2'}
];

const mockCityData = [
    {label: 'city1', value: 'city1'},
    {label: 'city2', value: 'city2'}
];

const sleep = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(null);
        }, 3000);
    })

}

export const getStateList = async ()=>{
    await sleep();
    return mockStateData;
}

export const getCityListFromState = async (state: string)=>{
    console.log(state);
    await sleep();
    return mockCityData;
}
