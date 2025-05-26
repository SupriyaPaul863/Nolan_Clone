import React, { useState } from "react";
import { FaImdb, FaGlobe, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Boubkar Benzabat",
    title: "Director of Photography • Editor • Producer • Director",
    image: "/boubkar.webp",
    icons: [<FaImdb key="imdb" />, <FaGlobe key="globe" />],
    text: "NOLANAI is the best value-for-money AI tool you can find for preparing and developing your movie. What impresses me most is the Pitch Deck creator tool. NOLANAI makes it fun, easy, fast, and creative!",
  },
  {
    name: "Jane Smith",
    title: "Screenwriter • Editor",
    image: "DSCF2954.webp",
    icons: [<FaImdb key="imdb" />, <FaGlobe key="globe" />],
    text: "This tool helped me shape my scripts better than ever. The coverage and feedback features are brilliant!",
  },
  {
    name: "David Lee",
    title: "Producer • Creative Director",
    image: "mike_profile.webp",
    icons: [<FaImdb key="imdb" />, <FaGlobe key="globe" />],
    text: "Highly responsive team, powerful features, and an intuitive UI. This is a game changer for the film industry.",
  },
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className=" text-white py-12 px-4 md:px-16  flex flex-col items-center justify-center">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
        What our customers say
      </h2>

      {/* Carousel Wrapper */}
      <div className="relative w-full max-w-7xl overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out ml-8"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-full flex flex-col md:flex-row items-center gap-8 px-4"
            >
              {/* Image with rings */}
              <div className="relative w-80 h-80 flex items-center justify-center">
                {/* Radial Background */}
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(72,72,72,0.5)_0%,_#0f111a_70%)]"></div>
                <div className="absolute w-72 h-72 rounded-full border border-gray-700 opacity-50"></div>
                <div className="absolute w-60 h-60 rounded-full border border-gray-600 opacity-30"></div>
                <div className="absolute w-48 h-48 rounded-full border border-gray-500 opacity-20"></div>

                <div className="relative z-10 w-44 h-44 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Text content */}
              <div className="text-left max-w-2xl">
                <h3 className="text-2xl font-semibold">{testimonial.name}</h3>
                <p className="text-gray-400 mb-2">{testimonial.title}</p>

                {/* Icons */}
                <div className="flex items-center gap-4 text-2xl text-white mb-4">
                  {testimonial.icons.map((icon) => icon)}
                </div>

                <p className="text-lg leading-relaxed text-gray-200">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition "
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition"
          >
            <FaArrowRight />
          </button>

      
      </div>
        {/* Button */}
        <button className="mt-10 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 px-6 rounded-full flex items-center gap-2">
          All Testimonials <FaArrowRight />
        </button>



    </div>
  );
};

export default TestimonialCarousel;









// import { useState } from 'react';
// import { ArrowLeft, ArrowRight } from 'lucide-react';

// const testimonials = [
//   {
//     image: '/boubkar.webp',
//     name: 'Boubkar Benzabat',
//     role: 'Director of Photography • Editor • Producer • Director',
//     icons: [
//       'https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg',
//       'https://www.svgrepo.com/show/331496/world-web-www.svg',
//     ],
//     quote:
//       'NOLANAI is the best value-for-money AI tool you can find for preparing and developing your movie. It’s exciting to be part of a pioneering adventure that will shape the future of the film industry...'
//   },
//   {
//     image: 'DSCF2954.webp',
//     name: 'Alice Walker',
//     role: 'Screenwriter • Story Consultant',
//     icons: [
//       'https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg',
//       'https://www.svgrepo.com/show/331496/world-web-www.svg',
//     ],
//     quote:
//       'The script analysis features are unlike anything I’ve seen. The interface is friendly and responsive, and I particularly enjoy using the Plot Hole feature!'
//   },
//   {
//     image: 'mike_profile.webp',
//     name: 'Daniel Cruz',
//     role: 'Producer • Filmmaker • Director',
//     icons: [
//       'https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg',
//       'https://www.svgrepo.com/show/331496/world-web-www.svg',
//     ],
//     quote:
//       'Using NOLANAI has transformed how I approach my projects. From coverage to pitch decks, it saves me hours every day!'
//   }
// ];

// export default function TestimonialSection() {
//   const [current, setCurrent] = useState(0);

//   const nextTestimonial = () => {
//     setCurrent((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   const { image, name, role, icons, quote } = testimonials[current];

//   return (
//     <div className=" text-white min-h-screen flex flex-col items-center justify-center px-4 py-10">
//       <h1 className="text-4xl font-bold mb-10">What our customers say</h1>

//       <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-10">
//         <button
//           onClick={prevTestimonial}
//           className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full z-10"
//         >
//           <ArrowLeft className="text-white" />
//         </button>

// <div className="relative w-80 h-80 flex items-center justify-center">
//   {/* Radial Gradient Background */}
//   <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(72,72,72,0.5)_0%,_#0f111a_70%)]"></div>

//   {/* Grey Concentric Circles */}
//   <div className="absolute w-72 h-72 rounded-full border border-gray-700 opacity-50"></div>
//   <div className="absolute w-60 h-60 rounded-full border border-gray-600 opacity-30"></div>
//   <div className="absolute w-48 h-48 rounded-full border border-gray-500 opacity-20"></div>

//   {/* Main Profile Image */}
//   <div className="relative z-10 w-44 h-44 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
//     <img src={image} alt={name} className="object-cover w-full h-full" />
//   </div>
// </div>

//         <div className="text-center md:text-left max-w-2xl">
//           <h2 className="text-xl font-bold mb-1">{name}</h2>
//           <p className="text-gray-400 mb-4">{role}</p>
//           <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
//             {icons.map((icon, idx) => (
//               <img key={idx} src={icon} alt="icon" className="w-6 h-6" />
//             ))}
//           </div>
//           <p className="text-sm md:text-base leading-relaxed">{quote}</p>
//         </div>

//         <button
//           onClick={nextTestimonial}
//           className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full z-10"
//         >
//           <ArrowRight className="text-white" />
//         </button>
//       </div>

//       <button className="mt-10 px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 font-semibold flex items-center gap-2">
//         All Testimonials <ArrowRight size={18} />
//       </button>
//     </div>
//   );
// }
