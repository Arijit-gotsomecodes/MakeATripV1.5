import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-blue-700 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <span className="text-3xl text-white font-bold tracking-tight">
            MyMakeTrip.com
          </span>
          <p className="text-white mt-2">
            Discover and book amazing travel experiences with ease.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:gap-10">
          <div className="text-white font-bold tracking-tight flex flex-col gap-2 mb-6 md:mb-0">
            <p className="cursor-pointer">About Us</p>
            <p className="cursor-pointer">Contact</p>
            <p className="cursor-pointer">FAQs</p>
          </div>
          <div className="text-white font-bold tracking-tight flex flex-col gap-2 mb-6 md:mb-0">
            <p className="cursor-pointer">Privacy Policy</p>
            <p className="cursor-pointer">Terms of Service</p>
            <p className="cursor-pointer">Sitemap</p>
          </div>
          <div className="text-white font-bold tracking-tight flex flex-col gap-2 mb-6 md:mb-0">
            <p className="cursor-pointer">Careers</p>
            <p className="cursor-pointer">Blog</p>
            <p className="cursor-pointer">Press</p>
          </div>
          <div className="flex gap-4">
            <FaFacebook className="text-white cursor-pointer" size={24} />
            <FaTwitter className="text-white cursor-pointer" size={24} />
            <FaInstagram className="text-white cursor-pointer" size={24} />
            <FaLinkedin className="text-white cursor-pointer" size={24} />
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-10 text-center">
        <span className="text-white text-sm">
          &copy; {new Date().getFullYear()} MyMakeTrip.com. All rights reserved.
        </span>
        <p className="text-white text-sm mt-2">
          Made by Arijit, Abir, Aman, Keyon, and Jennifer with 💖
        </p>
      </div>
    </div>
  );
};

export default Footer;
