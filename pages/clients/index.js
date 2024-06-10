
//components
import WorkSlider from '../../components/WorkSlider';


//framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

const Clients = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-10">
          {/* text */}
          <div className="">
            <motion.h2 
              variants={fadeIn('up',0.2)} 
              initial='hidden' 
              animate='show' 
              exit='hidden' 
              className="h2 xl:mt-8"
            >
              Our Clients <span className="text-orange-500">.</span>
            </motion.h2>
            <motion.p 
              variants={fadeIn('up',0.4)} 
              initial='hidden' 
              animate='show' 
              exit='hidden' 
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Here are some of our major clients:
            </motion.p>
          </div>
          <motion.div 
            variants={fadeIn('down',0.6)} 
            initial='hidden' 
            animate='show' 
            exit='hidden' 
            className="w-full xl:max-w-[65%]">
            {/* slider */}
            <WorkSlider />
          </motion.div>
        </div>
      </div>
    </div>
  )
};

export default Clients;
