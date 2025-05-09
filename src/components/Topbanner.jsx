import React from 'react'
import './styles/Topbanner.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
const Topbanner = ({ onClick }) => {
    return (
        <div className='top_banner'>
            <Swiper
                direction='vertical'
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                modules={[Autoplay]}
                className='tb_slider'
            >
                <SwiperSlide>
                    <a href="#">
                    RED TAB™ 신규 가입 후, 첫 구매 시 10% 할인</a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="#">
                    RED TAB™ 신규 가입 후, 첫 구매 시 10% 할인</a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="#">
                    RED TAB™ 신규 가입 후, 첫 구매 시 10% 할인</a>
                </SwiperSlide>
            </Swiper>
            <div className="close" onClick={onClick}>click</div>
        </div>
    )
}

export default Topbanner