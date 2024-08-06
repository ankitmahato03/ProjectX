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
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-center">
        <div>
          <div className="mb-4">
            {/* <img src="/path/to/logo.png" alt="Steiner.io" className="h-10" /> */}
            <h1 className="text-2xl font-bold font-mono">
              Steiner.<span className="text-teal-500">io</span>
            </h1>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur. Suspendisse dictumst turpis
            consequat libero eget turpis at mauris integer.
          </p>
        </div>
        <div>
          <h3 className="mb-2 font-bold text-neutral-500">Contents</h3>
          <ul className="space-y-2 text-stone-200 text-sm">
            <li>
              <a href="#expertise" className="hover:text-gray-300">
                Expertise
              </a>
            </li>
            <li>
              <a href="#team" className="hover:text-gray-300">
                Team
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 font-bold text-neutral-500">Company</h3>
          <ul className="space-y-2 text-stone-200 text-sm">
            <li>
              <a href="#terms" className="hover:text-gray-300">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-gray-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#refund" className="hover:text-gray-300">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="#cookies" className="hover:text-gray-300">
                Cookies Policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 font-bold text-neutral-500">Get In Touch</h3>
          <ul className="space-y-2 text-stone-200 text-sm">
            <li className="flex gap-2">
              <span>
                <MdLocationOn size={25} />
              </span>
              3 The Mount, London W3 9NW, United Kingdom
            </li>
            <li className="flex gap-2">
              <span>
                <FaPhoneAlt size={25} />
              </span>
              0208 993 4500
            </li>
            <li className="flex gap-2">
              <span>
                <MdEmail size={25} />
              </span>
              info@steiner.io
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-6" />
      <div className="flex flex-col gap-5 md:flex-row justify-between items-center">
        <p className="text-sm">&copy; 2023. All Rights Reserved.</p>
        <div className="flex space-x-4">
          <a href="#facebook" className="hover:text-gray-300">
            <FaFacebook size={25} />
          </a>
          <a href="#linkedin" className="hover:text-gray-300">
            <FaLinkedin size={25} />
          </a>
          <a href="#instagram" className="hover:text-gray-300">
            <FaInstagram size={25} />
          </a>
          <a href="#youtube" className="hover:text-gray-300">
            <FaYoutube size={25} />
          </a>
          <a href="#twitter" className="hover:text-gray-300">
            <FaXTwitter size={25} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
