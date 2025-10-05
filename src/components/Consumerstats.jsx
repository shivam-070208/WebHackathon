import React from "react";

const CustomerDashboard = () => {
  return (
    <div className="bg-gradient-to-br from-[#fff4f2] to-[#fff7ea]  p-10 ">
      <h1 className="text-neutral-500 text-5xl italic mb-3 font-semibold">
        Our Previous Stats
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-full w-full">
        {/* Card 1: Total Customers */}
        <div className="bg-white group bg-opacity-80 rounded-xl p-6 cursor-pointer  transition-all hover:shadow-xl">
          <div className="text-sm text-gray-600 font-semibold mb-2">
            Total Customers
          </div>
          <div className="flex justify-between items-end mb-4">
            <div className="text-4xl font-semibold text-gray-900">45,048</div>
            <div className="text-sm text-red-600 flex items-center">
              ▲ 16% growth from 2023
            </div>
          </div>

          {/* Bars */}
          <div className="text-sm">2024</div>
          <div className="h-1 bg-gray-300 rounded-md mb-2">
            <div
              className="h-full bg-red-400 rounded-md"
              style={{ width: "100%" }}
            ></div>
          </div>
          <div className="text-sm">2023</div>
          <div className="h-1 bg-gray-300 rounded-md mb-2">
            <div
              className="h-full bg-red-300 rounded-md"
              style={{ width: "86%" }}
            ></div>
          </div>
          <div className="text-sm">2022</div>
          <div className="h-1 bg-gray-300 rounded-md mb-2">
            <div
              className="h-full bg-red-200 rounded-md"
              style={{ width: "70%" }}
            ></div>
          </div>
          <div className="text-sm">2021</div>
          <div className="h-1 bg-gray-300 rounded-md mb-2">
            <div
              className="h-full bg-red-100 rounded-md"
              style={{ width: "60%" }}
            ></div>
          </div>

          {/* Footer */}
          <div className="flex justify-between text-sm text-gray-500 mt-4">
            <a href="#" className="hover:text-gray-700">
              View customer details
            </a>
            <a href="#" className="hover:text-gray-700">
              Download report
            </a>
          </div>
        </div>

        {/* Card 2: Customer Satisfaction Score */}
        <div className="bg-white bg-opacity-80 rounded-xl p-6  cursor-pointertransition-all hover:shadow-xl">
          <div className="text-sm text-gray-600 font-semibold mb-2">
            Customer Satisfaction Score
          </div>
          <div className="flex justify-between items-end mb-4">
            <div className="text-4xl font-semibold text-gray-900">92%</div>
            <div className="text-sm text-green-600 flex items-center">
              ▼ 4% from last year
            </div>
          </div>

          {/* Bars */}
          <div className="text-sm">2024</div>
          <div className="h-1 bg-gray-300 rounded-md mb-2">
            <div
              className="h-full bg-green-400 rounded-md"
              style={{ width: "100%" }}
            ></div>
          </div>
          <div className="text-sm">2023</div>
          <div className="h-1 bg-gray-300 rounded-md mb-2">
            <div
              className="h-full bg-green-300 rounded-md"
              style={{ width: "100%" }}
            ></div>
          </div>
          <div className="text-sm">2022</div>
          <div className="h-1 bg-gray-300 rounded-md mb-2">
            <div
              className="h-full bg-green-200 rounded-md"
              style={{ width: "100%" }}
            ></div>
          </div>
          <div className="text-sm">2021</div>
          <div className="h-1 bg-gray-300 rounded-md mb-2">
            <div
              className="h-full bg-green-100 rounded-md"
              style={{ width: "100%" }}
            ></div>
          </div>

          {/* Footer */}
          <div className="flex justify-between text-sm text-gray-500 mt-4">
            <a href="#" className="hover:text-gray-700">
              See feedback
            </a>
            <a href="#" className="hover:text-gray-700">
              Export results
            </a>
          </div>
        </div>

        {/* Card 3: Total Revenue */}
        <div className="bg-white bg-opacity-80 rounded-xl p-6  cursor-pointer transition-all hover:shadow-xl">
          <div className="text-sm text-gray-600 font-semibold mb-2">
            Total Revenue
          </div>
          <div className="flex justify-between items-end mb-4">
            <div className="text-4xl font-semibold text-gray-900">$4.78M</div>
            <div className="text-sm text-red-600 flex items-center">
              ▲ 27% increase from 2023
            </div>
          </div>

          {/* Bars */}
          <div className="text-sm">2024</div>
          <div className="h-1 bg-gray-300 rounded-md mb-2">
            <div
              className="h-full bg-red-400 rounded-md"
              style={{ width: "100%" }}
            ></div>
          </div>
          <div className="text-sm">2023</div>
          <div className="h-1 bg-gray-300 rounded-md mb-2">
            <div
              className="h-full bg-red-300 rounded-md"
              style={{ width: "78%" }}
            ></div>
          </div>
          <div className="text-sm">2022</div>
          <div className="h-1 bg-gray-300 rounded-md mb-2">
            <div
              className="h-full bg-red-200 rounded-md"
              style={{ width: "64%" }}
            ></div>
          </div>
          <div className="text-sm">2021</div>
          <div className="h-1 bg-gray-300 rounded-md mb-2">
            <div
              className="h-full bg-red-100 rounded-md"
              style={{ width: "50%" }}
            ></div>
          </div>

          {/* Footer */}
          <div className="flex justify-between text-sm text-gray-500 mt-4">
            <a href="#" className="hover:text-gray-700">
              View financials
            </a>
            <a href="#" className="hover:text-gray-700">
              Download data
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
