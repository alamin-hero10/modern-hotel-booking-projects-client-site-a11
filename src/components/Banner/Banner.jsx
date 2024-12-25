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
                                    <h1 className="mb-5 text-3xl md:text-5xl font-bold">Experience Comfort and Luxury Like Never Before</h1>
                                    <p className="mb-5">
                                        Welcome to Modern Hotel, your gateway to unforgettable stays. Whether you're traveling for leisure or business, our exquisite accommodations and top-notch services ensure a seamless and delightful experience. Book your stay today and let us redefine comfort for you.
                                    </p>
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
                                    <h1 className="mb-5 text-3xl md:text-5xl font-bold">Escape to a World of Luxury and Relaxation</h1>
                                    <p className="mb-5">
                                        At Modern Hotel, we offer a perfect retreat where luxury meets tranquility. Whether for a weekend getaway or an extended stay, experience unmatched comfort and hospitality designed to rejuvenate your senses.
                                    </p>
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
                                    <h1 className="mb-5 text-3xl md:text-5xl font-bold">Where Every Stay Feels Like Home</h1>
                                    <p className="mb-5">
                                        Step into Modern Hotel, where comfort meets elegance. Our thoughtfully designed rooms and personalized services make every guest feel at home, whether you're here for business or leisure.
                                    </p>
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
                                    <h1 className="mb-5 text-3xl md:text-5xl font-bold">Your Journey to Comfort Begins Here</h1>
                                    <p className="mb-5">
                                        Modern Hotel is your ideal destination for a seamless and memorable stay. Discover a world of modern amenities, impeccable service, and an ambiance crafted for your utmost satisfaction.
                                    </p>
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
                                    <h1 className="mb-5 text-3xl md:text-5xl font-bold">Indulge in the Art of Hospitality</h1>
                                    <p className="mb-5">
                                        At Modern Hotel, we believe every guest deserves the best. From luxurious rooms to world-class dining, let us elevate your travel experience with unparalleled care and attention.
                                    </p>
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
                                    <h1 className="mb-5 text-3xl md:text-5xl font-bold">Relax, Refresh, Rejuvenate</h1>
                                    <p className="mb-5">
                                        Escape the ordinary at Modern Hotel. Unwind in our serene spaces, enjoy gourmet dining, and let us take care of every detail to make your stay extraordinary.
                                    </p>
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
                                    <h1 className="mb-5 text-3xl md:text-5xl font-bold">A Stay Beyond Expectations</h1>
                                    <p className="mb-5">
                                        Welcome to Modern Hotel, where every detail is crafted to perfection. Enjoy a harmonious blend of luxury, convenience, and personalized service tailored to make your visit unforgettable.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;