import React from 'react'
import './styles/Section3.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
const Section3 = () => {

  const slideClasses=[
    's3_sl_1',
    's3_sl_2',
    's3_sl_3',
    's3_sl_4'
  ]
  return (
    <section className='sc3'>
      <div className="inner">
        <div className="t-wrap">
          <h2 className="con_tit">
          ONLINE EXCLUSIVE
          </h2>
          <p className="txt">
          오직 리바이스 공식 온라인 스토어에서만 만나볼 수 있는 단독 상품들을 소개합니다.
          </p>
          <a href="#" className="con_btn">
            view more
          </a>
        </div>
        <div className="s3_sl_wrap">
          <div className="in">
            <Swiper
            spaceBetween={30}
            slidesPerView={2}
            >
              {slideClasses.map((slide,index)=>(
                <SwiperSlide key={index}>
                  <div className={slide}></div>
                </SwiperSlide>

              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section3