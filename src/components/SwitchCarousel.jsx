import React from "react";

const SwitchCarousel = () => {
  const ImageData = [
    [
      {
        path: "/image1.webp",
        alt: "SemaPhoneDiamond",
      },
      {
        path: "/image2.webp",
        alt: "BlueReg",
      },
    ],
    [
      {
        path: "/image3.webp",
        alt: "SemaPhoneDiamond",
      },
      {
        path: "/image4.webp",
        alt: "BlueReg",
      },
    ],
  ];
  return (
    <div className="w-screen  h-fit py-10 mb-4">
      <h1 className="text-5xl sm:text-6xl  font-semibold text-gray-800 italic tracking-wider px-4 py-2 shadow-lg shadow-gray-400/50">
        Our Popular Products
      </h1>

      <div className="w-screen min-h-[80vh] grid grid-cols-1 md:grid-cols-2 ">
        {ImageData.map((imageSet, index) => (
          <div key={index} className=" h-fit w-full  relative group">
            {imageSet.map((image, idx) => (
              <div
                className={`w-full h-[80vh] ease-in-out  duration-500 md:absolute cursor-pointer top-0 transition-all ${
                  idx == 1 && "md:group-hover:opacity-0"
                } left-0`}
              >
                <div className="relative w-full h-full">
                  <h1 className="text-white absolute left-1/2 top-1/2 brightness-140 -translate-x-1/2 italic font-bold text-5xl  tracking-wider">
                    {image.alt}
                  </h1>
                  <img
                    className="w-full h-full  object-cover"
                    src={image.path}
                    key={idx}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwitchCarousel;
