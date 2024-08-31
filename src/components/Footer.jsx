import { MdLocationOn, MdEmail } from "react-icons/md";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6">
      <div className="mx-auto md:ml-20 md:mr-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="mb-4">
            <h1 className="text-2xl font-bold font-mono">
              OC<span className="text-gray-400">tech</span>
            </h1>
          </div>
          <p className="text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur. Suspendisse dictumst turpis
            consequat libero eget turpis at mauris integer.
          </p>
        </div>
        <div>
          <h3 className="mb-2 font-bold text-gray-400">Useful Links</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li>
              <a href="#terms" className="hover:text-gray-400">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#refund" className="hover:text-gray-400">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="#cookies" className="hover:text-gray-400">
                Cookies Policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 font-bold text-gray-400">Get In Touch</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li className="flex gap-2 items-center">
              <MdLocationOn size={25} className="text-gray-400" />
              India , kol street 78 , India
            </li>
            <li className="flex gap-2 items-center">
              <FaPhoneAlt size={25} className="text-gray-400" />
              0208 993 4500
            </li>
            <li className="flex gap-2 items-center">
              <MdEmail size={25} className="text-gray-400" />
              info@steiner.io
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-6 border-gray-700" />
      <div className="flex flex-col gap-5 md:flex-row justify-between items-center">
        <p className="text-sm"> ProjectX &copy; 2018. All Rights Reserved.</p>
        <div className="flex space-x-4">
          <a href="#facebook" className="text-gray-400 hover:text-gray-300">
            <FaFacebook size={25} />
          </a>
          <a href="#linkedin" className="text-gray-400 hover:text-gray-300">
            <FaLinkedin size={25} />
          </a>
          <a href="#instagram" className="text-gray-400 hover:text-gray-300">
            <FaInstagram size={25} />
          </a>
          <a href="#youtube" className="text-gray-400 hover:text-gray-300">
            <FaYoutube size={25} />
          </a>
          <a href="#twitter" className="text-gray-400 hover:text-gray-300">
            <FaXTwitter size={25} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
