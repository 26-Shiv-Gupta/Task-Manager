import data from './database.json'

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(data.employees));
    localStorage.setItem("admins", JSON.stringify(data.admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admins = JSON.parse(localStorage.getItem("admins"));

    return {employees, admins};
}