import React, { useEffect, useState } from 'react'
import './styles/Header.scss'
import Nav from './Nav'
import Util from './Util'
const Header = ({isScrolled,modalOpenClick}) => {


  // const [isScrolled, setIsScrolled] = useState(false)

  // useEffect(() => {

  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY
  //     setIsScrolled(scrollTop > 0)
  //   }

  //   window.addEventListener('scroll', handleScroll)

  //   return () => window.removeEventListener('scroll', handleScroll)

  // }, [])
  return (
    <header className={isScrolled ? 'scroll' : ''}>
      <div className="inner">
        <div className="logo-wrap">
        
        <div className="mob_btn" onClick={modalOpenClick}>
          <img src="./levis-img/ham-white.png" alt="nav" />
        </div>
        <h1 className="logo">
          <a href="#">
            <img src="./img/levis-logo-small.png" alt="" />
          </a>
        </h1>
        <Nav />
        </div>
        <Util />
      </div>
    </header>
  )
}

export default Header