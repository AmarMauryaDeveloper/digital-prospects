import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";
import { HiLocationMarker, HiMail } from "react-icons/hi";
import logo from '../../assets/logo.png'
export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 ">
     
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

      
        <div>
          <div className="flex items-center gap-3 mb-6">
            {/* <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">

              </div> */}
              <img src={logo} alt="" />
          </div>

          <p className="text-gray-300 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          </p>

          <div className="flex gap-4">
            {[
              <FaFacebookF />,
              <FaTwitter />,
              <FaLinkedinIn />,
              <FaYoutube />,
            ].map((icon, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center cursor-pointer hover:bg-green-500 hover:text-white transition"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* ---------- QUICK LINKS ---------- */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            <li>Software Team</li>
            <li>Technologies</li>
            <li>Resources</li>
            <li>Company</li>
            <li>Contact us</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* ---------- SERVICES ---------- */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Services</h3>
          <ul className="space-y-3 text-gray-300">
            <li>Dedicated Development</li>
            <li>Staff Augmentation Services</li>
            <li>Software Development</li>
            <li>Development Center</li>
          </ul>
        </div>

        {/* ---------- CONTACT US ---------- */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>

          <div className="space-y-5 text-gray-300">
            <p className="flex items-start gap-3">
              <HiLocationMarker className="text-green-500 text-xl" />
              Envato, Level 13, 2 Elizabeth<br />Victoria 3000 India
            </p>

            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-500 text-xl" />
              +91 861 944 1176
            </p>

            <p className="flex items-center gap-3">
              <HiMail className="text-green-500 text-xl" />
              ezyoga@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* ---------- BOTTOM GREEN BAR ---------- */}
      <div className="w-full bg-green-300 text-center py-4 mt-16">
        <p className="text-black font-semibold tracking-wide">
          logoname. 2023. All rights reserved
        </p>
      </div>
    </footer>
  );
}
