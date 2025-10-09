'use client';
import React from 'react';

const GitHubIcon = ({ size = 24, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.835 2.809 1.305 3.492.998.108-.776.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const TwitterIcon = ({ size = 24, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.594 0-6.492 2.901-6.492 6.492 0 .512.057 1.01.173 1.496-5.405-.271-10.187-2.86-13.387-6.795-.56.96-.883 2.077-.883 3.256 0 2.254 1.147 4.243 2.887 5.419-.847-.025-1.649-.26-2.35-.647-.029.749.208 1.45.746 2.005.679.679 1.574 1.186 2.603 1.307-.207.056-.424.086-.647.086-.159 0-.315-.015-.467-.045.767 2.405 2.989 4.168 5.636 4.217-2.868 2.247-6.49 3.586-10.462 3.586-.681 0-1.35-.039-2.006-.118 3.692 2.378 8.016 3.766 12.692 3.766 15.232 0 23.52-12.69 23.52-23.52 0-.357-.012-.71-.031-1.063z" />
  </svg>
);

const LinkedInIcon = ({ size = 24, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="dark:to-black font-inter border-t border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 py-12 px-4 text-gray-900 dark:border-gray-800 dark:from-gray-900 dark:text-white">
      <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 200 200"
              width="40"
              height="40"
              className="coolshapes flower-1"
            >
              <g clipPath="url(#cs_clip_1_flower-1)">
                <mask
                  id="cs_mask_1_flower-1"
                  style={{ maskType: 'alpha' }}
                  width="200"
                  height="186"
                  x="0"
                  y="7"
                  maskUnits="userSpaceOnUse"
                >
                  <path
                    fill="#fff"
                    d="M150.005 128.863c66.681 38.481-49.997 105.828-49.997 28.861 0 76.967-116.658 9.62-49.997-28.861-66.681 38.481-66.681-96.207 0-57.727-66.681-38.48 49.997-105.827 49.997-28.86 0-76.967 116.657-9.62 49.997 28.86 66.66-38.48 66.66 96.208 0 57.727z"
                  ></path>
                </mask>
                <g mask="url(#cs_mask_1_flower-1)">
                  <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                  <path
                    fill="url(#paint0_linear_748_4711)"
                    d="M200 0H0v200h200V0z"
                  ></path>
                  <g filter="url(#filter0_f_748_4711)">
                    <path fill="#FF58E4" d="M130 0H69v113h61V0z"></path>
                    <path
                      fill="#0CE548"
                      fillOpacity="0.35"
                      d="M196 91H82v102h114V91z"
                    ></path>
                    <path
                      fill="#FFE500"
                      fillOpacity="0.74"
                      d="M113 80H28v120h85V80z"
                    ></path>
                  </g>
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_f_748_4711"
                  width="278"
                  height="310"
                  x="-27"
                  y="-55"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    result="effect1_foregroundBlur_748_4711"
                    stdDeviation="27.5"
                  ></feGaussianBlur>
                </filter>
                <linearGradient
                  id="paint0_linear_748_4711"
                  x1="186.5"
                  x2="37"
                  y1="37"
                  y2="186.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0E6FFF" stopOpacity="0.51"></stop>
                  <stop
                    offset="1"
                    stopColor="#00F0FF"
                    stopOpacity="0.59"
                  ></stop>
                </linearGradient>
                <clipPath id="cs_clip_1_flower-1">
                  <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
              </defs>
              <g
                style={{ mixBlendMode: 'overlay' }}
                mask="url(#cs_mask_1_flower-1)"
              >
                <path
                  fill="gray"
                  stroke="transparent"
                  d="M200 0H0v200h200V0z"
                  filter="url(#cs_noise_1_flower-1)"
                ></path>
              </g>
              <defs>
                <filter
                  id="cs_noise_1_flower-1"
                  width="100%"
                  height="100%"
                  x="0%"
                  y="0%"
                  filterUnits="objectBoundingBox"
                >
                  <feTurbulence
                    baseFrequency="0.6"
                    numOctaves="5"
                    result="out1"
                    seed="4"
                  ></feTurbulence>
                  <feComposite
                    in="out1"
                    in2="SourceGraphic"
                    operator="in"
                    result="out2"
                  ></feComposite>
                  <feBlend
                    in="SourceGraphic"
                    in2="out2"
                    mode="overlay"
                    result="out3"
                  ></feBlend>
                </filter>
              </defs>
            </svg>
            <h3 className="text-3xl font-extrabold text-blue-600 dark:text-teal-400">
              Emiliano Dev
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            Innovating for a better tomorrow. We are committed to delivering
            high-quality solutions that empower businesses and individuals.
          </p>
          <div className="flex space-x-5 pt-2">
            <a
              href="#"
              className="transform text-gray-500 transition-transform hover:scale-110 hover:text-blue-600 dark:text-gray-400 dark:hover:text-teal-400"
            >
              <GitHubIcon size={28} />
            </a>
            <a
              href="#"
              className="transform text-gray-500 transition-transform hover:scale-110 hover:text-blue-600 dark:text-gray-400 dark:hover:text-teal-400"
            >
              <TwitterIcon size={28} />
            </a>
            <a
              href="#"
              className="transform text-gray-500 transition-transform hover:scale-110 hover:text-blue-600 dark:text-gray-400 dark:hover:text-teal-400"
            >
              <LinkedInIcon size={28} />
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 hover:text-blue-600 dark:text-gray-300 dark:hover:text-teal-400"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 hover:text-blue-600 dark:text-gray-300 dark:hover:text-teal-400"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 hover:text-blue-600 dark:text-gray-300 dark:hover:text-teal-400"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 hover:text-blue-600 dark:text-gray-300 dark:hover:text-teal-400"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 hover:text-blue-600 dark:text-gray-300 dark:hover:text-teal-400"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Resources
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 hover:text-blue-600 dark:text-gray-300 dark:hover:text-teal-400"
              >
                Support
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 hover:text-blue-600 dark:text-gray-300 dark:hover:text-teal-400"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 hover:text-blue-600 dark:text-gray-300 dark:hover:text-teal-400"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 hover:text-blue-600 dark:text-gray-300 dark:hover:text-teal-400"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 hover:text-blue-600 dark:text-gray-300 dark:hover:text-teal-400"
              >
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Contact Us
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            123 Tech Avenue, Innovation City, 98765
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Email: info@yourbrand.com
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Phone: +1 (555) 123-4567
          </p>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-200 pt-10 text-center text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Your Brand. All rights reserved.
        </p>
        <p className="mt-1">
          Designed with <span className="text-red-500">&hearts;</span> by Your
          Company
        </p>
      </div>
    </footer>
  );
};

export default Footer;

// // FOOTER MINIMAL

// 'use client';
// import React from 'react';

// function Footer2() {
//   const navLinks = [
//     { name: 'Features', href: '#' },
//     { name: 'Solution', href: '#' },
//     { name: 'Customers', href: '#' },
//     { name: 'Pricing', href: '#' },
//     { name: 'Help', href: '#' },
//     { name: 'About', href: '#' },
//   ];

//   const socialIcons = [
//     {
//       name: 'X',
//       href: '#',
//       svg: (
//         <svg
//           className="size-6 transition-transform duration-200 hover:scale-110"
//           xmlns="http://www.w3.org/2000/svg"
//           width="1em"
//           height="1em"
//           viewBox="0 0 24 24"
//         >
//           <path
//             fill="currentColor"
//             d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
//           ></path>
//         </svg>
//       ),
//     },
//     {
//       name: 'LinkedIn',
//       href: '#',
//       svg: (
//         <svg
//           className="size-6 transition-transform duration-200 hover:scale-110"
//           xmlns="http://www.w3.org/2000/svg"
//           width="1em"
//           height="1em"
//           viewBox="0 0 24 24"
//         >
//           <path
//             fill="currentColor"
//             d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
//           ></path>
//         </svg>
//       ),
//     },
//     {
//       name: 'Facebook',
//       href: '#',
//       svg: (
//         <svg
//           className="size-6 transition-transform duration-200 hover:scale-110"
//           xmlns="http://www.w3.org/2000/svg"
//           width="1em"
//           height="1em"
//           viewBox="0 0 24 24"
//         >
//           <path
//             fill="currentColor"
//             d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
//           ></path>
//         </svg>
//       ),
//     },
//     {
//       name: 'Threads',
//       href: '#',
//       svg: (
//         <svg
//           className="size-6 transition-transform duration-200 hover:scale-110"
//           xmlns="http://www.w3.org/2000/svg"
//           width="1em"
//           height="1em"
//           viewBox="0 0 24 24"
//         >
//           <path
//             fill="none"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="1.5"
//             d="M19.25 8.505c-1.577-5.867-7-5.5-7-5.5s-7.5-.5-7.5 8.995s7.5 8.996 7.5 8.996s4.458.296 6.5-3.918c.667-1.858.5-5.573-6-5.573c0 0-3 0-3 2.5c0 .976 1 2 2.5 2s3.171-1.027 3.5-3c1-6-4.5-6.5-6-4"
//           ></path>
//         </svg>
//       ),
//     },
//     {
//       name: 'Instagram',
//       href: '#',
//       svg: (
//         <svg
//           className="size-6 transition-transform duration-200 hover:scale-110"
//           xmlns="http://www.w3.org/2000/svg"
//           width="1em"
//           height="1em"
//           viewBox="0 0 24 24"
//         >
//           <path
//             fill="currentColor"
//             d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
//           ></path>
//         </svg>
//       ),
//     },
//     {
//       name: 'TikTok',
//       href: '#',
//       svg: (
//         <svg
//           className="size-6 transition-transform duration-200 hover:scale-110"
//           xmlns="http://www.w3.org/2000/svg"
//           width="1em"
//           height="1em"
//           viewBox="0 0 24 24"
//         >
//           <path
//             fill="currentColor"
//             d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"
//           ></path>
//         </svg>
//       ),
//     },
//   ];

//   return (
//     <footer className="font-inter relative overflow-hidden py-10 px-4 sm:px-6 lg:px-8 ">
//       <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center">
//         <div className="mb-6 flex items-center justify-center">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 200 200"
//             width="48"
//             height="48"
//             className="coolshapes flower-3 mr-3 drop-shadow-lg"
//           >
//             <g clipPath="url(#cs_clip_1_flower-3)">
//               <mask
//                 id="cs_mask_1_flower-3"
//                 style={{ maskType: 'alpha' }}
//                 width="200"
//                 height="200"
//                 x="0"
//                 y="0"
//                 maskUnits="userSpaceOnUse"
//               >
//                 <path
//                   fill="#fff"
//                   d="M200 50c0-27.614-22.386-50-50-50s-50 22.386-50 50c0-27.614-22.386-50-50-50S0 22.386 0 50s22.386 50 50 50c-27.614 0-50 22.386-50 50s22.386 50 50 50 50-22.386 50-50c0 27.614 22.386 50 50 50s50-22.386 50-50c0-27.608-22.375-49.989-49.98-50C177.625 99.99 200 77.608 200 50z"
//                 ></path>
//               </mask>
//               <g mask="url(#cs_mask_1_flower-3)">
//                 <path fill="#fff" d="M200 0H0v200h200V0z"></path>
//                 <path
//                   fill="url(#paint0_linear_748_4691)"
//                   fillOpacity="0.55"
//                   d="M200 0H0v200h200V0z"
//                 ></path>
//                 <g filter="url(#filter0_f_748_4691)">
//                   <path fill="#18A0FB" d="M131 3H-12v108h143V3z"></path>
//                   <path fill="#FF58E4" d="M190 109H0v116h190V109z"></path>
//                   <ellipse
//                     cx="153.682"
//                     cy="64.587"
//                     fill="#FFD749"
//                     rx="83"
//                     ry="57"
//                     transform="rotate(-33.875 153.682 64.587)"
//                   ></ellipse>
//                 </g>
//               </g>
//             </g>
//             <defs>
//               <filter
//                 id="filter0_f_748_4691"
//                 width="361.583"
//                 height="346.593"
//                 x="-72"
//                 y="-61.593"
//                 colorInterpolationFilters="sRGB"
//                 filterUnits="userSpaceOnUse"
//               >
//                 <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//                 <feBlend
//                   in="SourceGraphic"
//                   in2="BackgroundImageFix"
//                   result="shape"
//                 ></feBlend>
//                 <feGaussianBlur
//                   result="effect1_foregroundBlur_748_4691"
//                   stdDeviation="30"
//                 ></feGaussianBlur>
//               </filter>
//               <linearGradient
//                 id="paint0_linear_748_4691"
//                 x1="200"
//                 x2="0"
//                 y1="0"
//                 y2="200"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stopColor="#FF1F00"></stop>
//                 <stop offset="1" stopColor="#FFD600"></stop>
//               </linearGradient>
//               <clipPath id="cs_clip_1_flower-3">
//                 <path fill="#fff" d="M0 0H200V200H0z"></path>
//               </clipPath>
//             </defs>
//             <g
//               style={{ mixBlendMode: 'overlay' }}
//               mask="url(#cs_mask_1_flower-3)"
//             >
//               <path
//                 fill="gray"
//                 stroke="transparent"
//                 d="M200 0H0v200h200V0z"
//                 filter="url(#cs_noise_1_flower-3)"
//               ></path>
//             </g>
//             <defs>
//               <filter
//                 id="cs_noise_1_flower-3"
//                 width="100%"
//                 height="100%"
//                 x="0%"
//                 y="0%"
//                 filterUnits="objectBoundingBox"
//               >
//                 <feTurbulence
//                   baseFrequency="0.6"
//                   numOctaves="5"
//                   result="out1"
//                   seed="4"
//                 ></feTurbulence>
//                 <feComposite
//                   in="out1"
//                   in2="SourceGraphic"
//                   operator="in"
//                   result="out2"
//                 ></feComposite>
//                 <feBlend
//                   in="SourceGraphic"
//                   in2="out2"
//                   mode="overlay"
//                   result="out3"
//                 ></feBlend>
//               </filter>
//             </defs>
//           </svg>
//           <span className="text-3xl font-extrabold tracking-wide text-gray-900 dark:text-white">
//             Sera UI
//           </span>
//         </div>

//         <nav className="mb-6 w-full">
//           <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-base font-medium">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <a
//                   href={link.href}
//                   className="relative text-gray-600 transition-all duration-300 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-gray-900 after:transition-all after:duration-300 hover:text-gray-900 hover:after:w-full dark:text-gray-400 dark:after:bg-white dark:hover:text-white"
//                 >
//                   {link.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         <div className="my-6 flex flex-wrap justify-center gap-4 text-sm">
//           {socialIcons.map((icon) => (
//             <a
//               key={icon.name}
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label={icon.name}
//               className="text-gray-600 transition-colors duration-300 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
//               href={icon.href}
//             >
//               {icon.svg}
//             </a>
//           ))}
//         </div>

//         <p className="mt-4 text-center text-xs text-gray-500 dark:text-gray-500">
//           &copy; {new Date().getFullYear()} seraui. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// }

// export default Footer2;
