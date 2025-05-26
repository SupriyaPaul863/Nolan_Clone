import { useState } from 'react';
import { FaRegCalendarAlt, FaClipboardList, FaComments, FaClock, FaChartBar, FaThumbsUp } from 'react-icons/fa';
import { MdCameraRoll, MdAnalytics } from 'react-icons/md';

const tabData = {
  Screenwriters: [
    {
      icon: <FaClipboardList className="text-blue-500 text-2xl" />,
      text: 'Streamline your preparation with our automated breakdown, saving days of manual work and allowing more time for creative decisions.',
    },
    {
      icon: <MdCameraRoll className="text-blue-500 text-2xl" />,
      text: 'Utilize our impressive storyboard features that assist with detailed camera directions and render high-quality AI-generated images to visualize scenes vividly.',
    },
    {
      icon: <MdCameraRoll className="text-blue-500 text-2xl" />,
      text: 'Utilize our impressive storyboard features that assist with detailed camera directions and render high-quality AI-generated images to visualize scenes vividly.',
    },
    {
      icon: <MdCameraRoll className="text-blue-500 text-2xl" />,
      text: 'Utilize our impressive storyboard features that assist with detailed camera directions and render high-quality AI-generated images to visualize scenes vividly.',
    },
    {
      icon: <MdCameraRoll className="text-blue-500 text-2xl" />,
      text: 'Utilize our impressive storyboard features that assist with detailed camera directions and render high-quality AI-generated images to visualize scenes vividly.',
    },
    {
      icon: <FaComments className="text-blue-500 text-2xl" />,
      text: 'Facilitate effective communication and instant feedback within your team through an integrated platform designed to keep everyone updated and engaged.',
    },
  ],
  Producers: [
    {
      icon: <FaRegCalendarAlt className="text-blue-500 text-2xl" />,
      text: 'Manage production timelines efficiently with our integrated calendar and auto-updating milestones.',
    },
    {
      icon: <FaChartBar className="text-blue-500 text-2xl" />,
      text: 'Access budget tracking and resource management tools to ensure streamlined production flow.',
    },
      {
      icon: <FaChartBar className="text-blue-500 text-2xl" />,
      text: 'Access budget tracking and resource management tools to ensure streamlined production flow.',
    },
      {
      icon: <FaChartBar className="text-blue-500 text-2xl" />,
      text: 'Access budget tracking and resource management tools to ensure streamlined production flow.',
    },
      {
      icon: <FaChartBar className="text-blue-500 text-2xl" />,
      text: 'Access budget tracking and resource management tools to ensure streamlined production flow.',
    },
    {
      icon: <FaComments className="text-blue-500 text-2xl" />,
      text: 'Collaborate with departments in real-time using smart feedback loops and shared dashboards.',
    },
  ],
  Directors: [
    {
      icon: <FaClock className="text-blue-500 text-2xl" />,
      text: 'Benefit from scheduling that’s directly linked to your script breakdown, with seamless adjustments as script changes occur, ensuring constant alignment with your production team.',
    },
    {
      icon: <MdAnalytics className="text-blue-500 text-2xl" />,
      text: 'Gain deep insights with advanced analytics that review your script to identify any gaps or elements that might be missing, enhancing the narrative and technical robustness.',
    },
     {
      icon: <MdAnalytics className="text-blue-500 text-2xl" />,
      text: 'Gain deep insights with advanced analytics that review your script to identify any gaps or elements that might be missing, enhancing the narrative and technical robustness.',
    },
     {
      icon: <MdAnalytics className="text-blue-500 text-2xl" />,
      text: 'Gain deep insights with advanced analytics that review your script to identify any gaps or elements that might be missing, enhancing the narrative and technical robustness.',
    },
     {
      icon: <MdAnalytics className="text-blue-500 text-2xl" />,
      text: 'Gain deep insights with advanced analytics that review your script to identify any gaps or elements that might be missing, enhancing the narrative and technical robustness.',
    },
    {
      icon: <FaThumbsUp className="text-blue-500 text-2xl" />,
      text: 'Maintain artistic integrity while leveraging technology to refine scenes, enhance pacing, and perfect shot compositions with intuitive tools that support your directorial vision.',
    },
  ],
};

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('Directors');

  return (
    <div className=" text-white px-4 py-12 md:px-12">
      {/* Tabs */}
      <div className="flex justify-center space-x-6 text-xl font-medium tracking-wide">
        {Object.keys(tabData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 border-b-2 transition-all duration-300 ${
              activeTab === tab
                ? 'text-blue-500 border-blue-500 font-extrabold tracking-wider '
                : 'border-transparent hover:text-blue-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-700" />

      {/* Tab Content */}
      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {tabData[activeTab].map((item, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="bg-gray-800 rounded-full p-3 flex items-center justify-center shadow-lg">
              {item.icon}
            </div>
            <p className="text-sm md:text-base leading-relaxed tracking-wide">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-12 flex justify-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-md tracking-wide transition-all">
          All Features →
        </button>
      </div>
    </div>
  );
}
