import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#213944] via-black to-black">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4 border-b border-custom-gray-2">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Navigation
            </h2>
            <ul className="text-xs text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline hover:text-white">
                  Browse Popular
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline hover:text-white">
                  Browse Simulcasts
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline hover:text-white">
                  Release Calendar
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline hover:text-white">
                  News
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline hover:text-white">
                  Games
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Connect With Us
            </h2>
            <ul className="text-xs text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4 flex items-center">
                <a
                  href="#"
                  className="flex items-center hover:underline hover:text-white"
                >
                  <svg
                    className="w-4 h-4 mr-2 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    aria-labelledby="youtube-svg"
                    aria-hidden="true"
                    role="img"
                  >
                    <title id="youtube-svg">YouTube</title>
                    <path
                      fill="currentColor"
                      d="M15.666,4.124A2.01,2.01,0,0,0,14.251,2.7,47.511,47.511,0,0,0,8,2.364,47.511,47.511,0,0,0,1.749,2.7,2.01,2.01,0,0,0,.334,4.124,21.09,21.09,0,0,0,0,8a21.09,21.09,0,0,0,.334,3.876A2.01,2.01,0,0,0,1.749,13.3,47.509,47.509,0,0,0,8,13.636a47.509,47.509,0,0,0,6.251-.337,2.01,2.01,0,0,0,1.415-1.424A21.09,21.09,0,0,0,16,8,21.09,21.09,0,0,0,15.666,4.124Zm-9.3,6.255V5.621L10.545,8Z"
                    ></path>
                  </svg>
                  YouTube
                </a>
              </li>

              <li className="mb-4">
                <a
                  href="#"
                  className="flex items-center hover:underline hover:text-white"
                >
                  <svg
                    className="w-4 h-4 mr-2 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    aria-labelledby="facebook-svg"
                    aria-hidden="true"
                    role="img"
                  >
                    <title id="facebook-svg">Facebook</title>
                    <path
                      fill="currentColor"
                      d="M15.1169,0 L0.8829,0 C0.3949,0 -0.0001,0.395 -0.0001,0.883 L-0.0001,15.117 C-0.0001,15.605 0.3949,16 0.8829,16 L8.5459,16 L8.5459,9.804 L6.4609,9.804 L6.4609,7.389 L8.5459,7.389 L8.5459,5.608 C8.5459,3.542 9.8079,2.417 11.6519,2.417 C12.5349,2.417 13.2939,2.482 13.5149,2.512 L13.5149,4.671 L12.2369,4.672 C11.2339,4.672 11.0399,5.148 11.0399,5.848 L11.0399,7.389 L13.4309,7.389 L13.1199,9.804 L11.0399,9.804 L11.0399,16 L15.1169,16 C15.6049,16 15.9999,15.605 15.9999,15.117 L15.9999,0.883 C15.9999,0.395 15.6049,0 15.1169,0"
                    ></path>
                  </svg>
                  Facebook
                </a>
              </li>

              <li className="mb-4">
                <a
                  href="#"
                  className="flex items-center hover:underline hover:text-white"
                >
                  <svg
                    className="w-4 h-4 mr-2 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    aria-labelledby="twitter-svg"
                    aria-hidden="true"
                    role="img"
                  >
                    <title id="twitter-svg">Twitter</title>
                    <path
                      fill="currentColor"
                      d="M5,14.5a9.28,9.28,0,0,0,9.34-9.34c0-.14,0-0.28,0-0.42A6.68,6.68,0,0,0,16,3a6.55,6.55,0,0,1-1.89.52,3.29,3.29,0,0,0,1.44-1.82,6.58,6.58,0,0,1-2.08.8,3.29,3.29,0,0,0-5.59,3A9.32,9.32,0,0,1,1.11,2.1a3.29,3.29,0,0,0,1,4.38A3.26,3.26,0,0,1,.64,6.07s0,0,0,0A3.28,3.28,0,0,0,3.28,9.33a3.28,3.28,0,0,1-1.48.06,3.29,3.29,0,0,0,3.07,2.28A6.59,6.59,0,0,1,.78,13.07,6.68,6.68,0,0,1,0,13,9.29,9.29,0,0,0,5,14.5"
                    ></path>
                  </svg>
                  Twitter
                </a>
              </li>

              <li className="mb-4">
                <a
                  href="#"
                  className="flex items-center hover:underline hover:text-white"
                >
                  <svg
                    className="w-4 h-4 mr-2 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    aria-labelledby="instagram-svg"
                    aria-hidden="true"
                    role="img"
                  >
                    <title id="instagram-svg">Instagram</title>
                    <path
                      fill="currentColor"
                      d="M8,1.44c2.14,0,2.39,0,3.23,0a4.43,4.43,0,0,1,1.49.28,2.48,2.48,0,0,1,.92.6,2.48,2.48,0,0,1,.6.92,4.43,4.43,0,0,1,.28,1.49c0,0.84,0,1.1,0,3.23s0,2.39,0,3.23a4.43,4.43,0,0,1-.28,1.49,2.65,2.65,0,0,1-1.52,1.52,4.43,4.43,0,0,1-1.49.28c-0.84,0-1.1,0-3.23,0s-2.39,0-3.23,0a4.43,4.43,0,0,1-1.49-.28,2.48,2.48,0,0,1-.92-0.6,2.48,2.48,0,0,1-.6-0.92,4.43,4.43,0,0,1-.28-1.49c0-.84,0-1.1,0-3.23s0-2.39,0-3.23a4.43,4.43,0,0,1,.28-1.49,2.48,2.48,0,0,1,.6-0.92,2.48,2.48,0,0,1,.92-0.6,4.43,4.43,0,0,1,1.49-.28c0.84,0,1.1,0,3.23,0M8,0C5.83,0,5.55,0,4.7,0A5.87,5.87,0,0,0,2.76.42a3.92,3.92,0,0,0-1.42.92A3.92,3.92,0,0,0,.42,2.76,5.87,5.87,0,0,0,0,4.7C0,5.55,0,5.83,0,8s0,2.45,0,3.3a5.87,5.87,0,0,0,.37,1.94,3.92,3.92,0,0,0,.92,1.42,3.92,3.92,0,0,0,1.42.92A5.87,5.87,0,0,0,4.7,16c0.85,0,1.13,0,3.3,0s2.45,0,3.3,0a5.87,5.87,0,0,0,1.94-.37,4.09,4.09,0,0,0,2.34-2.34A5.87,5.87,0,0,0,16,11.3c0-.85,0-1.13,0-3.3s0-2.45,0-3.3a5.87,5.87,0,0,0-.37-1.94,3.92,3.92,0,0,0-.92-1.42A3.92,3.92,0,0,0,13.24.42,5.87,5.87,0,0,0,11.3,0C10.45,0,10.17,0,8,0H8Z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M8,3.89A4.11,4.11,0,1,0,12.11,8,4.11,4.11,0,0,0,8,3.89Zm0,6.77A2.67,2.67,0,1,1,10.67,8,2.67,2.67,0,0,1,8,10.67Z"
                    ></path>
                    <circle cx="12.27" cy="3.73" r="0.96"></circle>
                  </svg>
                  Instagram
                </a>
              </li>

              <li className="mb-4">
                <a
                  href="#"
                  className="flex items-center hover:underline hover:text-white"
                >
                  <svg
                    className="w-4 h-4 mr-2 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    aria-labelledby="tiktok-svg"
                    aria-hidden="true"
                    role="img"
                  >
                    <title id="tiktok-svg">TikTok</title>
                    <path
                      fill="currentColor"
                      d="M14.095 0H1.905C.855 0 0 .854 0 1.905v12.19C0 15.145.854 16 1.905 16h12.19c1.05 0 1.905-.854 1.905-1.905V1.905C16 .855 15.146 0 14.095 0m-1.521 6.98a2.854 2.854 0 0 1-2.651-1.277v4.395A3.248 3.248 0 1 1 6.674 6.85c.068 0 .134.006.201.01v1.6c-.067-.007-.132-.02-.2-.02a1.658 1.658 0 0 0 0 3.316c.915 0 1.724-.721 1.724-1.637l.016-7.465h1.531a2.853 2.853 0 0 0 2.63 2.547v1.78"
                    ></path>
                  </svg>
                  TikTok
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul className="text-xs text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline hover:text-white">
                  Crunchyroll
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#"
                  className="flex items-center hover:underline text-premium-icon hover:text-white"
                >
                  <svg
                    className="w-6 h-6 text-premium-icon mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    aria-labelledby="premium-filled-svg"
                    aria-hidden="true"
                    role="img"
                  >
                    <title id="premium-filled-svg">Premium</title>
                    <path
                      fill="currentColor"
                      d="M2.419 13L0 4.797 4.837 6.94 8 2l3.163 4.94L16 4.798 13.581 13z"
                    ></path>
                  </svg>
                  Start a Free Trial
                </a>
              </li>

              <li className="mb-4">
                <a href="#" className="hover:underline hover:text-white">
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline hover:text-white">
                  Help Center
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline hover:text-white">
                  Terms of Use
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline hover:text-white">
                  AdChoices
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline hover:text-white">
                  Do Not Sell or Share My Personal Information
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline hover:text-white">
                  Cookie Consent Tool
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline hover:text-white">
                  Press Inquiries
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline hover:text-white">
                  Get the Apps
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline hover:text-white">
                  Redeem Gift Card
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline hover:text-white">
                  Jobs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Account
            </h2>
            <ul className="text-xs text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline hover:text-white">
                  Create Account
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline hover:text-white">
                  Log In
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-6  md:flex md:items-center md:justify-between">
          <div className="flex justify-start items-center">
            <img
              src="/footer/sony.png"
              alt="sony icon"
              className="p-2 max-w-[28%]"
            />
            <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-500 sm:py-2 sm:mt-0">
              © Crunchyroll, LLC
            </p>
          </div>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <p>ENGLISH(US)</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
