import data from './database.json'

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(data.employees));
    localStorage.setItem("admin", JSON.stringify(data.admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));
}