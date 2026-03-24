import { use, useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import { setLocalStorage } from './utils/localStorage'

function App() {

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const authData = useContext(AuthContext);

  const handleLogin = (email, password) => {
    if (authData && authData.admins.find((e) => email === e.email && password === e.password)) {
      setUser('admin')
    } else if (authData) {
      const employee = authData.employees.find((e) => email === e.email && password === e.password);
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee);
      }
    } else {
      alert('Invalid Credentials');
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : user === 'admin' ? <AdminDashboard loggedInUserData={loggedInUserData}/> : <EmployeeDashboard loggedInUserData={loggedInUserData}/>}
    </>
  )
}

export default App
