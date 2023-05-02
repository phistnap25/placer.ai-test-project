
const baseURL = 'http://localhost:3000/api'
export type APIParams = {
    url: string
}
export async function api({url}: APIParams){
    const finalUrl = `${baseURL}${url}`;
    try{
        const response = await fetch(finalUrl,{
            headers: {
                'Authorization': process.env.REACT_APP_TOKEN || ''
            },
        });
        const responseJSON = await response.json();
        return responseJSON;
    } catch(e){
        //TODO we can set the handler for setting the popup for the error message
        console.error(e);
        throw e;
    }

}
