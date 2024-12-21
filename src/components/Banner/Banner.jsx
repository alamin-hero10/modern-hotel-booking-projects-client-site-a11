// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import slider images
import hotelImg1 from "../../assets/hotel1.png"
import hotelImg2 from "../../assets/hotel2.jpg"
import hotelImg3 from "../../assets/hotel3.jpg"
import hotelImg4 from "../../assets/hotel4.jpg"
import hotelImg5 from "../../assets/hotel5.jpg"
import hotelImg6 from "../../assets/hotel6.jpg"
import hotelImg7 from "../../assets/hotel7.png"



const Banner = () => {
    return (
        <div>
            {/* Slider */}
            <div className="">
                <Swiper
                    spaceBetween={0}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {/* Swiper-Slide 01 */}
                    <SwiperSlide>
                        <div className="hero place-items-stretch">
                            <div>
                                <img className='w-full h-[600px]' src={hotelImg1} alt="" />
                            </div>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content max-w-none text-neutral-content text-center">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                    <p className="mb-5">
                                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                                    </p>
                                    <button className="btn btn-primary">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Swiper-Slide 02 */}
                    <SwiperSlide>
                        <div className="hero place-items-stretch h-[600px]">
                            <div>
                                <img className='w-full h-[700px]' src={hotelImg2} alt="" />
                            </div>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content max-w-none text-neutral-content text-center">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                    <p className="mb-5">
                                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                                    </p>
                                    <button className="btn btn-primary">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Swiper-Slide 03 */}
                    <SwiperSlide>
                        <div className="hero place-items-stretch h-[600px]">
                            <div>
                                <img className='w-full h-[700px]' src={hotelImg3} alt="" />
                            </div>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content max-w-none text-neutral-content text-center">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                    <p className="mb-5">
                                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                                    </p>
                                    <button className="btn btn-primary">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Swiper-Slide 04 */}
                    <SwiperSlide>
                        <div className="hero place-items-stretch h-[600px]">
                            <div>
                                <img className='w-full h-[700px]' src={hotelImg4} alt="" />
                            </div>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content max-w-none text-neutral-content text-center">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                    <p className="mb-5">
                                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                                    </p>
                                    <button className="btn btn-primary">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Swiper-Slide 05 */}
                    <SwiperSlide>
                        <div className="hero place-items-stretch h-[600px]">
                            <div>
                                <img className='w-full h-[700px]' src={hotelImg5} alt="" />
                            </div>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content max-w-none text-neutral-content text-center">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                    <p className="mb-5">
                                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                                    </p>
                                    <button className="btn btn-primary">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Swiper-Slide 06 */}
                    <SwiperSlide>
                        <div className="hero place-items-stretch h-[600px]">
                            <div>
                                <img className='w-full h-[700px]' src={hotelImg6} alt="" />
                            </div>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content max-w-none text-neutral-content text-center">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                    <p className="mb-5">
                                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                                    </p>
                                    <button className="btn btn-primary">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Swiper-Slide 07 */}
                    <SwiperSlide>
                        <div className="hero place-items-stretch h-[600px]">
                            <div>
                                <img className='w-full h-[700px]' src={hotelImg7} alt="" />
                            </div>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content max-w-none text-neutral-content text-center">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                    <p className="mb-5">
                                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                                    </p>
                                    <button className="btn btn-primary">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* ---------------------------------------------------- */}
            {/* ---------------------------------------------------- */}
            {/* <div className="w-full h-[700px] bg-gradient-to-r from-white via-white to-white">
                <div className="grid grid-cols-2 items-center">
                    <div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro molestias unde doloribus eum reiciendis voluptatibus nesciunt dignissimos cum nam. Ut explicabo animi placeat. Aliquam, repudiandae.</p>
                    </div>
                    <div>
                        <img
                            className="h-80"
                            src={bannerImg3} alt="" />
                    </div>
                </div>
                <div className="flex gap-5 items-center">
                    <button className="btn btn-success">Apply Now</button>
                    <button className="btn btn-success">Contact Me</button>
                </div>
            </div> */}
        </div>
    );
};

export default Banner;