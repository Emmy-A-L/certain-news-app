import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-purple-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <img
              src="/certain-news-logo-transparent.png"
              alt="Certain news Logo"
              className="w-12 h-12 mx-auto md:mx-0"
            />
            <p className="text-purple-200 mt-2">
              Your centralized news platform
            </p>
          </div>
          <div className="flex space-x-4">
            <Link
              to="#"
              className="hover:text-purple-400 text-purple-200 transition-colors"
            >
              About
            </Link>
            <Link
              to="#"
              className="hover:text-purple-400 text-purple-200 transition-colors"
            >
              Contact
            </Link>
            <Link
              to="#"
              className="hover:text-purple-400 text-purple-200 transition-colors"
            >
              Privacy
            </Link>
          </div>
        </div>
        <div className="border-t border-purple-700 mt-6 pt-6 text-center text-purple-300 text-sm">
          &copy; {new Date().getFullYear()} NewsCentral. All rights reserved. 
          <span className="italic text-sm">This site was built for educational purposes only.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
