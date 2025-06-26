import { FaTwitter, FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
        <Link to='/'>
                  <h1 className="text-white text-2xl font-semibold mb-4">cyber</h1>
        
        </Link>
          <p className="text-gray-400 max-w-xs">
            We are a residential interior design firm located in Portland. Our boutique-studio offers more than
          </p>
          <div className="flex items-center gap-6 mt-8 text-xl text-gray-400">
            <FaTwitter className="hover:text-white transition duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white transition duration-300 cursor-pointer" />
            <FaTiktok className="hover:text-white transition duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white transition duration-300 cursor-pointer" />
          </div>
        </div>

        <div>
          <h2 className="text-white font-semibold mb-4">Services</h2>
          <ul className="text-gray-400 space-y-2">
            <li className="hover:text-white transition duration-300 cursor-pointer">Bonus program</li>
            <li className="hover:text-white transition duration-300 cursor-pointer">Gift cards</li>
            <li className="hover:text-white transition duration-300 cursor-pointer">Credit and payment</li>
            <li className="hover:text-white transition duration-300 cursor-pointer">Service contracts</li>
            <li className="hover:text-white transition duration-300 cursor-pointer">Non-cash account</li>
            <li className="hover:text-white transition duration-300 cursor-pointer">Payment</li>
          </ul>
        </div>

        <div>
          <h2 className="text-white font-semibold mb-4">Assistance to the buyer</h2>
          <ul className="text-gray-400 space-y-2">
            <li className="hover:text-white transition duration-300 cursor-pointer">Find an order</li>
            <li className="hover:text-white transition duration-300 cursor-pointer">Terms of delivery</li>
            <li className="hover:text-white transition duration-300 cursor-pointer">Exchange and return of goods</li>
            <li className="hover:text-white transition duration-300 cursor-pointer">Guarantee</li>
            <li className="hover:text-white transition duration-300 cursor-pointer">Frequently asked questions</li>
            <li className="hover:text-white transition duration-300 cursor-pointer">Terms of use of the site</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
