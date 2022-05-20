import axios from 'axios';

const API_URL = "";
const register = ( username , email , password ) => {
    return axios.post ( API_URL + "user/register/" , {
        username ,
        email ,
        password ,
    } );
};

const login = ( email , password ) => {
    return axios.post ( API_URL + "user/login/" , {
        email ,
        password ,
    } ).then ( ( response ) => {
        if (response.data.accessToken) {
            localStorage.setItem ( "user" , JSON.stringify ( response.data ) );
        }
        return response.data
    } );
};

const logout = () => {
    localStorage.removeItem ( "user" );
    return axios.get ( API_URL + "user/logout/" , {} )
};
export default {
    register ,
    login ,
    logout ,
}