import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import './Nevbar.css'

export default function Nevbar() {
  const navigate = useNavigate()
  const [token, setToken] = useState('')

  const Login=() =>{
    navigate('/login')
  }

  const Logout=() =>{
    localStorage.removeItem('token')
    localStorage.removeItem('userInfo')
    setToken('')
  }
  useEffect(() => {
    async function getToken() {
        let data = localStorage.getItem('token') || ''
        setToken(data)
    }
    getToken() 
  },[])

    return (
    <div> 
      <nav className="navbar navbar-expand-lg bg">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/'>Coders</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active"  to ='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to='/about'>About</Link>
        </li>
        {token.length !== 0 && <li className="nav-item">
          <Link className="nav-link active" to = "/todo" >Todo</Link>
        </li> }
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-success searchbt" type="submit">Search</button>
        {token.length === 0 && <button className="btn btn-primary" onClick={Login} >Login</button>}
        {token.length > 0 && <button className="btn btn-primary" onClick={Logout} >Logout</button>}
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}


