import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-empowerkind-darkPurple text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-bold">
              Empower<span className="text-empowerkind-coral">Kind</span>
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              Supporting specially-abled children with love, care, and community outreach.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/donate" className="text-gray-300 hover:text-white transition-colors">Donate</Link></li>
              <li><Link to="/stories" className="text-gray-300 hover:text-white transition-colors">Success Stories</Link></li>
              <li><Link to="/get-involved" className="text-gray-300 hover:text-white transition-colors">Get Involved</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Our Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Education Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Healthcare Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Family Assistance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Recreational Activities</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Skill Development</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-empowerkind-coral" />
                <span>Near Zhansi Rani Metro Station, North Ambazari Rd, Opposite Madan Gopal Agrawal Highschool, Sitabuldi, Nagpur, Maharashtra 440010</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-empowerkind-coral" />
                <span>0712-2522393, 0712-2523596</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>hello@empowerkind.org</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-8">
          <p className="text-center text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} EmpowerKind. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
