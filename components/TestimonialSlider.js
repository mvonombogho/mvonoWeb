// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    company: 'Lafarge',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    company: 'AgaKhan University Hospital',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    company: 'Mombasa Cement',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];



//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'

//next image
import Image from 'next/image'


//import swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'


//icons
import { FaQuoteLeft } from "react-icons/fa";

//import required module
import { FreeMode, Pagination } from 'swiper';




const TestimonialSlider = () => {
  return(
    <Swiper breakpoints={{
      320:{
        slidesPerView: 1,
        spaceBetween: 15
      },

      640:{
        slidesPerView: 1,
        spaceBetween: 15
      },
    }}
    freeMode={true}
    pagination={{
      clickable:true
    }}
    modules={[FreeMode, Pagination]}
    className='h-[240px] sm:h-[340px]'
    >
      {
        testimonialData.map((person,index)=>{
          return(
            <SwiperSlide key={index}>
              <div className='flex'>
                {/* avatar, name, position */}
                <div className='w-full max-w-[300px]'>
                  <div>
                    {/* avatar */}
                    <div>avatar image</div>
                    {/* name */}
                    <div>name</div>
                    {/* position */}
                    <div>position</div>
                  </div>
                </div>
                {/* quote & message */}
                <div className='bg-orange-500/10 flex-1 flex flex-col justify-center 
                                before:w-[1px] xl:before:bg-white/20 xl:before:absolute
                                xl:before:left xl:before:h-[200px] relative xl:pl-20'>
                  {/* quote icon */}
                  <div className='mb-4'>
                    <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                  </div>
                  {/* message */}
                  <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
                </div>
              </div>
              

            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
};

export default TestimonialSlider;



