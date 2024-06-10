//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'


//import swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'


//icons
import { CgTrees } from "react-icons/cg";
import { SlEnergy } from "react-icons/sl";
import { FaFireExtinguisher } from "react-icons/fa";
import { IoBandageOutline } from "react-icons/io5";
import { SiOxygen } from "react-icons/si";
import { GiHazardSign } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import { MdOutlineFactory } from "react-icons/md";
import { MdModelTraining } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";

//import required module
import { FreeMode, Pagination } from 'swiper';


// service data
const serviceData = [
  {
    icon: <IoBandageOutline />,
    title: 'First Aid Training',
    description: "Equip your team with life-saving skills through our First Aid Training at Mvono Consultants—enroll today for a safer workplace! #FirstAidTraining #SafetyFirst #MvonoConsultants",
  },
  {
    icon: <FaFireExtinguisher />,
    title: 'Fire Safety Training',
    description: "Protect your business with expert Fire Safety Training at Mvono Consultants—ensure a safer workplace environment by enrolling now! #FireSafetyTraining #SafetyFirst #MvonoConsultants",
  },
  {
    icon: <SiOxygen />,
    title: 'Air Quality and Occupational Noise Survey',
    description: "Prioritize your team's health with meticulous Air Quality and Occupational Noise Surveys at Mvono Consultants—safeguard your employees' well-being today! #AirQualitySurvey #OccupationalNoise #MvonoConsultants #WorkplaceHealth",
  },
  {
    icon: <GiHazardSign />,
    title: 'Risk Assesment',
    description: "Mitigate potential threats with comprehensive Risk Assessment services at Mvono Consultants—enhance resilience and secure your business's future today! #RiskAssessment #BusinessSecurity #MvonoConsultants",
  },
  {
    icon: <MdOutlineFactory />,
    title: 'Statutory Inspections',
    description: "Ensure compliance and operational safety with meticulous Statutory Inspections at Mvono Consultants—trust us for thorough inspections that keep your business running smoothly! #StatutoryInspections #Compliance #MvonoConsultants",
  },
  {
    icon: <MdHealthAndSafety />,
    title: 'Safety Audits',
    description: "Enhance workplace safety and efficiency with comprehensive Safety Audit services at Mvono Consultants—secure your business and employees' well-being today! #SafetyAudits #WorkplaceSafety #MvonoConsultants",
  },
  {
    icon: <FaFireExtinguisher />,
    title: 'Fire Safety Audits',
    description: "Prioritize fire safety and compliance with specialized Fire Safety Audit services at Mvono Consultants—stay proactive in fire prevention and protection! #FireSafetyAudits #PreventionIsKey #MvonoConsultants",
  },
  {
    icon: <MdModelTraining />,
    title: 'OSHA Training',
    description: "Empower your team with essential workplace safety skills through our OSHA Training at Mvono Consultants—enroll now for comprehensive OSHA Training! #OSHATraining #WorkplaceSafety #MvonoConsultants",
  },
  {
    icon: <SlEnergy />,
    title: 'Energy Audits',
    description: "Optimize your energy efficiency and reduce costs with comprehensive Energy Audit services at Mvono Consultants—start saving energy and money today! #EnergyAudits #EfficiencyMatters #MvonoConsultants",
  },
  {
    icon: <CgTrees />,
    title: 'NEMA Audits',
    description: "Ensure environmental compliance and sustainability with thorough NEMA Audits at Mvono Consultants—secure your environmental compliance and contribute to a greener future! #NEMAAudits #MvonoConsultants",
  },
];


const ServiceSlider = () => {
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
        serviceData.map((item,index)=>{
          return(
            <SwiperSlide key={index}>
              <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
                {/* icon */}
                <div className='text-4xl text-orange-500 mb-4'>{item.icon}</div>
                {/* title & desc */}
                <div className='mb-8'>
                  <div className='mb-2 text-lg'>{item.title}</div>
                  <p className='max-w-[350px] leading-normal'>{item.description}</p>
                </div>
                {/* arrow */}
                <div>
                  <FiArrowUpRight className='group-hover:rotate-45 group-hover:text-orange-500 transition-all duration-300' />
                </div>
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
};

export default ServiceSlider;
