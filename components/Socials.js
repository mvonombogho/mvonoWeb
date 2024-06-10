
//links
import Link from "next/link";

//icons
import{
  RiInstagramLine, 
  RiFacebookLine, 
  RiLinkedinLine,
} from 'react-icons/ri'

const Socials = () => {
  return(
    <div className="flex items-center gap-x-5 text-lg">
      {/* Linkedin icon */}
      <Link href={''} className="hover:text-orange-500 transition-all duration-300">
        <RiLinkedinLine />
      </Link>
      {/* Instagram icon */}
      <Link href={''} className="hover:text-orange-500 transition-all duration-300">
        <RiInstagramLine />
      </Link>
      {/* Facebook icon */}
      <Link href={''} className="hover:text-orange-500 transition-all duration-300">
        <RiFacebookLine />
      </Link>
    </div>
  )
};

export default Socials;
