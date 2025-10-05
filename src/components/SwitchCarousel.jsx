import React from "react";

const SwitchCarousel = () => {
  const ImageData = [
    [
      {
        id: 1,
        imageUrl:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        title: "Image 1",
      },
      {
        id: 2,
        imageUrl:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        title: "Image 2",
      },
    ],
    [],
  ];
  return (
    <div className="w-screen  grid grid-cols-1 md:grid-cols-2">
      <div className="w-full h-screen transition-all"></div>
    </div>
  );
};

export default SwitchCarousel;
