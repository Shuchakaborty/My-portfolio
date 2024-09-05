import React from 'react';

function Footer(){
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Flowa</h3>
            <p className="text-gray-400">
              Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta
              donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet
              volutpat consequat mauris nunc congue.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Useful Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white">Photography</a></li>
              <li><a href="#" className="hover:text-white">Web Design</a></li>
              <li><a href="#" className="hover:text-white">Woocommerce</a></li>
              <li><a href="#" className="hover:text-white">Brand Image</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">
              A108 Adam Street<br />
              New York, NY 535022<br />
              United States<br />
              <strong>Phone:</strong> +1 5589 55488 55<br />
              <strong>Email:</strong> info@example.com<br />
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-4 text-center">
          <p className="text-gray-400">&copy; Copyright CodexUnicTheme | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
