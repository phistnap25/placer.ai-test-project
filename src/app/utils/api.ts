
const baseURL = 'http://localhost:3000/api'
export type APIParams = {
    url: string
}
export async function api({url}: APIParams){
    const finalUrl = `${baseURL}${url}`;
    try{
        const response = await fetch(finalUrl,{
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJwb3dlcmZ1bGhpc3RvcnkyNUBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiJvZ25JVFBzZmoyZXlqRy1EYXN1Yk1RcmNESk5mUnRnLXFiS1BNM19tUkZWc2szbElVbUtmOVhmRTZDOWVTbVRzQl9nIn0sImV4cCI6MTY4MzA0MTAzMn0.SC2DQRiXesII8jUcLZftXyivxtMmGJ6J7OdvPz-7gVA'
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
