import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
export default function ClinetSection() {
    return (
        <div className='client-senction'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="client-title">
                            <h4>5,000+ high-impact teams rely on Fieldx</h4>
                        </div>
                    </div>
                    <div className="client-content">
                        <div className="row">
                            <div className="col-md-12">
                                <Swiper
                                    slidesPerView={2}
                                    spaceBetween={30}
                                    loop={true}
                                    autoplay={{
                                        delay: 1000,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 2,
                                            spaceBetween: 20,
                                        },
                                        768: {
                                            slidesPerView: 4,
                                            spaceBetween: 40,
                                        },
                                        1024: {
                                            slidesPerView: 5,
                                            spaceBetween: 50,
                                        },
                                    }}
                                    modules={[Autoplay]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide><img src="/assets/img/clinet1.png" alt="" className='img-fluid' /></SwiperSlide>
                                    <SwiperSlide><img src="/assets/img/Amara.png" alt="" className='img-fluid' /></SwiperSlide>
                                    <SwiperSlide><img src="/assets/img/Circle.png" alt="" className='img-fluid' /></SwiperSlide>
                                    <SwiperSlide><img src="/assets/img/Kyan.png" alt="" className='img-fluid' /></SwiperSlide>
                                    <SwiperSlide><img src="/assets/img/Treva.png" alt="" className='img-fluid' /></SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
