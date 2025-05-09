import React, { useEffect } from 'react'
import './styles/Section1.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Section1 = () => {


    useEffect(() => {
        Aos.init({ duration: 1000 })
    })
    return (
        <section className='sc1'>
            <div className="inner">
                <div className="img-wrap" data-aos="fade-right">
                <img src="./levis-img/section1-img-levis.png" alt="intro" />

                </div>
                <div className="t-wrap" data-aos="fade-left">
                    <h2 className="con_tit">
                    LOOSE FIT COLLECTION
                    </h2>
                    <p className="txt">
                    2025년 S/S 시즌, 리바이스에서 새로운 루즈핏 컬렉션을 선보입니다. <br /> 여유롭고 편안한 캐주얼 무드의 이번 컬렉션은 90년대의 향수를 불러 <br /> 일으키면서도 세련된 디테일을 자랑합니다.
                    </p>
                    <a href="#" className="con_btn">view more</a>
                </div>
            </div>
        </section>
    )
}

export default Section1