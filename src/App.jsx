import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import { setLocalStorage } from './utils/localStorage'

function App() {

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const {userData} = useContext(AuthContext);

  const handleLogin = (email, password) => {
    if (userData) {

      // Admin login
      const admin = userData.admins.find((e) => email === e.email && password === e.password);
      if (admin) {
        setUser('admin')
        setLoggedInUserData(admin);
        localStorage.setItem("loggedInUser", JSON.stringify({
          role: 'admin',
          email: admin.email
        }))
      }

      // Employee login
      const employee = userData.employees.find((e) => email === e.email && password === e.password);
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({
          role: 'employee',
          email: employee.email
        }))
      }

      // Invalid Crendentials
      if (!admin && !employee) {
        alert("Invalid credentials");
      }
    }
  }

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (storedUser && userData) {
      const { role, email } = storedUser;

      if (role === 'admin') {
        const admin = userData.admins.find(a => a.email === email);
        if (admin) {
          setUser('admin');
          setLoggedInUserData(admin);
        }
        return;
      }
      
      if (role === 'employee') {
        const employee = userData.employees.find(e => e.email === email);
        if (employee) {
          setUser('employee');
          setLoggedInUserData(employee);
        }
        return;
      }
    }
  }, [userData]);


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : user === 'admin' ? <AdminDashboard loggedInUserData={loggedInUserData}/> : <EmployeeDashboard loggedInUserData={loggedInUserData} />}
    </>
  )
}

export default App
