import React, { useRef, useState, useEffect } from 'react'
import './styles/Section2.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import sc2Data from '../data/sc2Data'
const Section2 = () => {
    const HoverImage = ({ image, hoverImage }) => {
        const [src, setSrc] = useState(image)

        return (
            <img
                src={src}
                alt="img"
                onMouseEnter={() => setSrc(hoverImage)}
                onMouseLeave={() => setSrc(image)}
            />
        )
    }

    const prevRef = useRef(null)
    const nextRef = useRef(null)
    const swiperRef = useRef(null)
    const paginationRef = useRef(null)


    useEffect(() => {
        if (swiperRef.current &&
            swiperRef.current.params &&
            prevRef.current &&
            nextRef.current &&
            paginationRef
        ) {
            swiperRef.current.params.navigation.prevEl = prevRef.current
            swiperRef.current.params.navigation.nextEl = nextRef.current
            swiperRef.current.navigation.destroy()
            swiperRef.current.navigation.init()
            swiperRef.current.navigation.update()

            swiperRef.current.params.pagination.el = paginationRef.current
            swiperRef.current.pagination.destroy()
            swiperRef.current.pagination.init()
            swiperRef.current.pagination.update()
        }

    }, [])
    return (
        <section className='sc2'>
            <div className="inner">
                <div className="t-wrap">
                    <h2 className="con_tit">
                        LEVI'S RECOMMEND
                    </h2>
                </div>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        686: {
                            slidesPerView: 2
                        },
                        1111: {
                            slidesPerView: 3
                        }
                    }}
                    modules={[Navigation, Pagination]}
                    className='s2_slider'
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    pagination={{
                        type: 'progressbar',
                        el:'.pagination',
                    }}
                    loop={true}
                >
                    {sc2Data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <a href="#">
                                <div className="img-wrap">
                                    <HoverImage image={item.image} hoverImage={item.hoverImage} />
                                </div>
                                <div className="info-wrap">
                                    <div className='s2-btn'>{item.title}</div>
                                    <div className='name'>{item.name}</div>
                                    <div className='kname'>{item.kname}</div>
                                </div>
                            </a>
                        </SwiperSlide>
                    ))}

                </Swiper>
                <button className='custom-prev' ref={prevRef} type='button' />
                <button className='custom-next' ref={nextRef} type='button' />
            <div className="pagination" ref={paginationRef}></div>
            </div>
        </section>
    )
}

export default Section2