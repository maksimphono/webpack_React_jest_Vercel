import React from 'react'
import { Link } from 'react-router-dom'
import "./Styles/Navbar.scss"
export default function Navbar() {
  return (
    <div className = {"navbar-wrapper"}>
      <nav className = {"navbar"}>
        <a href="/" className = "brand"></a>
        <ul className = "nav-menu">
            <li><a href="/">Home</a></li>
            <li><a href="/add">Add</a></li>
        </ul>
      </nav>
    </div>
  )
}