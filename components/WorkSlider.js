

//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'

//next image
import Image from 'next/image'


//import swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'


//icons
import { FiArrowUpRight } from "react-icons/fi";

//import required module
import { FreeMode, Pagination } from 'swiper';


// client data
const clientData = [
  {
    image: <Image 
      src={'/slide-1.png'}
      width={500} 
      height={250} 
      alt='' 
    />
  },
  {
    image: <Image 
    src={'/slide-2.png'}
    width={500} 
    height={250} 
    alt='' 
  />
  },
  {
    image: <Image 
      src={'/slide-19.png'}
      width={500} 
      height={250} 
      alt='' 
    />
  },
  {
    image: <Image 
      src={'/slide-4.png'}
      width={500} 
      height={250} 
      alt='' 
    />
  },
  {
    image: <Image 
      src={'/slide-5.png'}
      width={500} 
      height={250} 
      alt='' 
    />
  },
  {
    image: <Image 
      src={'/slide-6.png'}
      width={500} 
      height={250} 
      alt='' 
    />
  },
  {
    image: <Image 
      src={'/slide-7.png'}
      width={500} 
      height={250} 
      alt='' 
    />
  },
  {
    image: <Image 
      src={'/slide-8.png'}
      width={500} 
      height={250} 
      alt='' 
    />
  },
  {
    image: <Image 
      src={'/slide-9.png'}
      width={500} 
      height={250}  
      alt='' 
    />
  },
  {
    image: <Image 
      src={'/slide-10.png'}
      width={500} 
      height={250} 
      alt='' 
    />
  },
  {
    image: <Image 
      src={'/slide-11.png'}
      width={500} 
      height={250}  
      alt='' 
    />
  },
  {
    image: <Image 
      src={'/slide-12.png'}
      width={500} 
      height={250}  
      alt='' 
    />
  },
  {
    image: <Image 
      src={'/slide-13.png'}
      width={500} 
      height={250} 
      alt='' 
    />
  },
  {
    image: <Image 
      src={'/slide-14.png'}
      width={500} 
      height={250} 
      alt='' 
    />
  },
  {
    image: <Image 
      src={'/slide-15.png'}
      width={500} 
      height={250}  
      alt='' 
    />
  },
  {
    image: <Image 
      src={'/slide-16.png'}
      width={500} 
      height={250}  
      alt='' 
    />
  },
  {
    image: <Image 
      src={'/slide-17.png'}
      width={500} 
      height={250}  
      alt='' 
    />
  },
  {
    image: <Image 
      src={'/slide-18.png'}
      width={500} 
      height={250}  
      alt='' 
    />
  },
];


const WorkSlider = () => {
  return(
    <Swiper breakpoints={{
      320:{
        slidesPerView: 1,
        spaceBetween: 15
      },

      640:{
        slidesPerView: 2,
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
        clientData.map((item,index)=>{
          return(
            <SwiperSlide key={index}>
              <div className='bg-[rgb(253,253,255)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(255,255,255,0.88)] transition-all duration-300'>
                {/* image */}
                <div className='text-4xl text-orange-500 mb-4'>{item.image}</div>
                {/* arrow */}
                <div>
                  <FiArrowUpRight className='text-orange-500 group-hover:rotate-45 group-hover:text-orange-500 transition-all duration-300' />
                </div>
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
};

export default WorkSlider;

