import { AUTHORIZATION } from "./constant";

export const setCookie = (name: string, value: string, days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

export const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return parts.pop()?.split(';').shift();
    }
}

export const getAuth = () =>{
    return getCookie(AUTHORIZATION);
}

export const deleteAuth = () =>{
    deleteCookie(AUTHORIZATION);
}

export const deleteCookie = (name: string) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

export const isTokenValid  = () : boolean=>{
    const token = getCookie(AUTHORIZATION);
    if(token){
        return true;
    }
    return false;
}