import React from 'react'
import './styles/NavModal.scss'
import Util from './Util'
import Nav from './Nav'
import joinData from '../data/joinData'
const NavModal = ({ modalOpen, modalOpenClick }) => {
  return (
    <div className={`navModal ${modalOpen ? 'open' : ''}`}>
      <div className="inner">
        <Util />
        <a href="#" onClick={modalOpenClick} className='nav-modal-close'>
          <img src="./levis-img/close.png" alt="" />
        </a>
      </div>
      <Nav />
      <ul className="join-wrap">
        {joinData.map((data, i) => (
          <li key={i}>
            <a href={data.link}>
              {data.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavModal