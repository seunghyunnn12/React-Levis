import React, { useEffect } from 'react'
import './styles/Section5.scss'
import instaData from '../data/instaData'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Section5 = () => {
    useEffect(() => {

        Aos.init({
            duration: 1000
        })
    }, [])

    return (
        <section className='sc5'>
            <div className="inner">
                <div className="t-wrap">
                    <h2 className="con_tit">
                        <span>LEVI'S</span>REDTAB
                    </h2>
                    <h3>member program</h3>
                    <p className="txt_5">
                        본 페이지에 명시된 red tab 멤버십 혜택은 변동될 수 있습니다. 자세한 내용은 Red Tab T&C를 참고해 주세요
                    </p>
                    <a href="#" className="con_btn">
                        view more
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Section5