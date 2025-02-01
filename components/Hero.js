// import React from "react";
// import { Search, ShoppingCart, Heart, ChevronDown, Mic } from "lucide-react";

// const Hero = () => {
//   return (
//     <div
//       className="min-h-screen bg-black text-white bg-cover bg-center"
//       style={{
//         backgroundImage: "url('/BIN.jpg')",
//       }}
//     >
//       {/* Navigation */}
//       <nav className="flex items-center justify-between p-4 lg:px-8">
//         <div className="flex items-center space-x-2">
//           <div className="text-xl font-bold">TradeBin NTR</div>
//           <button className="hidden md:block px-3 py-1 text-sm">All</button>
//         </div>

//         <div className="hidden md:flex space-x-6">
//           {["Home", "Home", "Home", "Home"].map((item, index) => (
//             <button key={index} className="hover:text-blue-500">
//               {item}
//             </button>
//           ))}
//         </div>

//         <div className="flex items-center space-x-4">
//           <div className="relative">
//             <ShoppingCart className="w-6 h-6" />
//             <span className="absolute -top-2 -right-2 bg-blue-600 text-xs rounded-full w-5 h-5 flex items-center justify-center">
//               1
//             </span>
//           </div>
//           <Heart className="w-6 h-6" />
//           <button className="bg-transparent border border-white px-4 py-1 rounded">
//             Login
//           </button>
//           <div className="flex space-x-2">
//             <button className="bg-blue-600 px-4 py-1 rounded">BUY</button>
//             <button className="bg-transparent border border-white px-4 py-1 rounded">
//               SELL
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Search Section */}
//       <div className="max-w-4xl mx-auto px-4 pt-8">
//         <div className="bg-gray-800 rounded-lg p-6">
//           <div className="relative mb-4">
//             <input
//               type="text"
//               placeholder="What are you looking for today..."
//               className="w-full bg-cream-100 text-black rounded-full py-3 px-10"
//             />
//             <Search className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
//             <Mic className="absolute right-3 top-3 w-5 h-5 text-blue-600" />
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
//             {[
//               "Recently Bought",
//               "Daily Essentials",
//               "Popular Items",
//               "New Arrivals",
//             ].map((item, index) => (
//               <button
//                 key={index}
//                 className="bg-cream-100 text-black rounded-lg py-2 px-4 text-sm flex items-center justify-between"
//               >
//                 {item}
//                 <ChevronDown className="w-4 h-4" />
//               </button>
//             ))}
//             <button className="bg-blue-600 text-white rounded-lg py-2 px-4 text-sm">
//               More
//             </button>
//           </div>
//         </div>

//         {/* Categories */}
//         <div className="flex flex-wrap gap-2 justify-center my-6">
//           {[
//             "ESSENTIALS",
//             "FURNITURE",
//             "ELECTRONICS",
//             "CLOTHING",
//             "SPORTS",
//             "STUDY",
//             "HEALTH",
//           ].map((category) => (
//             <button
//               key={category}
//               className="bg-white text-blue-600 rounded-full px-4 py-1 text-sm hover:bg-blue-100"
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Hero Section */}
//         <div className="text-center py-16">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">
//             Buy. Sell. Swap.
//           </h1>
//           <p className="text-2xl md:text-4xl italic mb-6">
//             Simplify Your Campus Life!
//           </p>
//           <p className="text-xl mb-8">
//             FIND WHAT YOU NEED, SELL WHAT YOU DON'T!
//           </p>
//           <ChevronDown className="w-8 h-8 mx-auto animate-bounce" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
"use client";

import React from "react";
import { useState } from "react";
import {
  Search,
  ShoppingCart,
  Heart,
  ChevronDown,
  Mic,
  Menu,
} from "lucide-react";
import CategoryButtons from "./CategoryButtons";

const menuItems = ["Home", "Home", "Home", "Home"];

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-black bg-center bg-cover bg-no-repeat"
        // style={{
        //   backgroundImage:
        //     "url('/SaveClip.App_102380985_264096801329810_2510297726349260076_n (2).png')",
        // }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content (with relative positioning to appear above background) */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex items-center justify-between p-4 lg:px-8">
          <div className="flex items-center space-x-2">
            <img
              src="/Frame 13921.png"
              alt="TradeBin NITR"
              className="h-6 md:h-7"
            />
            <button className="hidden md:block px-3 py-1 text-sm"></button>
          </div>

          <div className="hidden lg:flex space-x-6">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="hover:text-[#0D00FF] font-italic text-xl text-[#F5F5DC]"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4 gap-4">
            <div className="relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                1
              </span>
            </div>
            {/* <Heart className="w-6 h-6" /> */}
            <button className="bg-transparent border border-[#0D00FF] px-4 py-1 rounded-xl hover:bg-[#F5F5DC] hover:text-[#0D00FF]">
              Login
            </button>
            <div className="flex space-x-2">
              <button className="px-4 py-1 rounded bg-[#0D00FF] text-[#F5F5DC]">
                BUY
              </button>
              <button className="bg-transparent border border-white px-4 py-1 rounded">
                SELL
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute right-0 top-16 w-64 bg-black border border-gray-700 rounded-lg shadow-lg p-4 z-10">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="block w-full text-left px-4 py-2 hover:bg-gray-800 rounded text-[] font-italic"
              >
                {item}
              </button>
            ))}
            <hr className="my-2 border-gray-700" />
            <div className="space-y-2">
              <div className="flex items-center justify-between px-4 py-2">
                <ShoppingCart className="w-6 h-6" />
                <span className="bg-blue-600 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  1
                </span>
              </div>
              <button className="w-full px-4 py-2 hover:bg-gray-800 rounded flex items-center">
                <Heart className="w-6 h-6 mr-2" />
                Wishlist
              </button>
              <button className="w-full bg-transparent border border-[#0D00FF] px-4 py-1 rounded-xl mt-2">
                Login
              </button>
              <div className="flex flex-col space-y-2 mt-2">
                <button className="w-full bg-[#0D00FF] px-4 py-1 rounded bg-[]">
                  BUY
                </button>
                <button className="w-full bg-transparent border border-white px-4 py-1 rounded">
                  SELL
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Search Section */}
        <div className="max-w-4xl mx-auto px-4 pt-8 border-[#F5F5DC] m-8">
          <div
            className="  rounded-xl p-6 border-[#F5F5DC] border-2"
            style={{
              backgroundImage: "url('/Frame 36768 (2).png')",
            }}
          >
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="What are you looking for today..."
                className="w-full bg-cream-100 text-black rounded-full py-3 px-10"
              />
              <Search className="absolute left-3 top-3 w-5 h-5 text-blue-600" />
              <Mic className="absolute right-3 top-3 w-5 h-5 text-blue-600" />
            </div>

            <CategoryButtons />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-4 py-2 justify-center my-6">
            {[
              "ESSENTIALS",
              "FURNITURE",
              "ELECTRONICS",
              "CLOTHING",
              "SPORTS",
              "STUDY",
              "HEALTH",
            ].map((category) => (
              <button
                key={category}
                className="  bg-[#F5F5DC] backdrop-blur-sm text-[#0D00FF] rounded-full px-4 py-3 text-sm hover:bg-[#0D00FF] font-helvetica hover:text-[#F5F5DC]  hidden md:block"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Hero Section */}
          <div className="text-center md:py-7">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#F5F5DC] font-helvetica">
              Buy. Sell. Swap.
            </h1>
            <p className="text-2xl md:text-4xl font-italic mb-6 text-[#F5F5DC] ">
              Simplify Your Campus Life!
            </p>
            <p className="text-xl mb-8 text-[#F5F5DC]">
              FIND WHAT YOU NEED, SELL WHAT YOU DON'T!
            </p>
            <ChevronDown className="w-8 h-8 mx-auto animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
