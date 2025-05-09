import React from 'react'
import topIcon from '/img/icon_top.svg'
import './styles/RightQuick.scss'
const RightQuick = ({isScrolled, onClick}) => {
  return (
    <div id='right_quick' className={isScrolled? "up":""}>
      <a href="#" className='top_btn' onClick={onClick}>
        <img src={topIcon} alt="icon" />
      </a>
      <div className="talk">
      </div>
    </div>
  )
}

export default RightQuick