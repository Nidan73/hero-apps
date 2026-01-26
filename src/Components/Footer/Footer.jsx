import { FaXTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#071C2F] to-[#041423] text-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Top Row */}
        <div className="flex items-start justify-between">
          {/* Left Brand */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="HERO.IO" className="h-8 w-8" />
            <span className="font-semibold tracking-wide">HERO.IO</span>
          </div>

          {/* Right Social */}
          <div className="text-right">
            <h4 className="text-sm font-semibold mb-2">Social Links</h4>
            <div className="flex justify-end gap-3">
              <a
                href="#"
                className="h-6 w-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
                aria-label="X"
              >
                <FaXTwitter className="text-xs" />
              </a>
              <a
                href="#"
                className="h-6 w-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-xs" />
              </a>
              <a
                href="#"
                className="h-6 w-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-xs" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-6 border-t border-white/15" />

        {/* Bottom Text */}
        <p className="mt-6 text-center text-sm text-white/80">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
