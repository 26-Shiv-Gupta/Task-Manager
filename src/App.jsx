import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import { setLocalStorage } from './utils/localStorage'

function App() {

  const [user, setUser] = useState(null);

  const authData = useContext(AuthContext);
  
  const handleLogin = (email, password) => {
    if (authData && authData.admins.find((e) => email === e.email && password === e.password)) {
      setUser('admin')
    } else if (authData && authData.employees.find((e) => email === e.email && password === e.password)) {
      setUser('employee')
    } else {
      alert('Invalid Credentials');
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : user === 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  )
}

export default App
