"use client";
import React, { useState } from "react";

const ContentBlog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      img: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg",
      category: "Lifestyle",
      date: "March 21, 2020",
      title: "How to build coffee inside your home in 5 minutes.",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
    {
      img: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-2.jpg",
      category: "Marketing",
      date: "April 04, 2020",
      title: "7 Tips to run your remote team faster and better.",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
    {
      img: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg",
      category: "Productivity",
      date: "May 12, 2020",
      title: "5 Productivity tips to write faster in the morning.",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
    {
      img: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg",
      category: "Productivity",
      date: "May 12, 2020",
      title: "5 Productivity tips to write faster in the morning.",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
    {
      img: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg",
      category: "Productivity",
      date: "May 12, 2020",
      title: "5 Productivity tips to write faster in the morning.",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center lg:text-left mb-10">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Latest from blog
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <div className="relative">
            <div className="flex space-x-2">
              {slides.map((slide, index) => (
                <div key={index} className="flex-shrink-0 w-full sm:w-1/4">
                  <div className="p-4 bg-white rounded shadow">
                    <div className="relative">
                      <a
                        href="#"
                        title=""
                        className="block aspect-w-4 aspect-h-3"
                      >
                        <img
                          className="object-cover w-full h-full"
                          src={slide.img}
                          alt={slide.title}
                        />
                      </a>
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
                          {slide.category}
                        </span>
                      </div>
                    </div>
                    <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                      {slide.date}
                    </span>
                    <p className="mt-5 text-2xl font-semibold">
                      <a href="#" title="" className="text-black">
                        {slide.title}
                      </a>
                    </p>
                    <p className="mt-4 text-base text-gray-600">
                      {slide.description}
                    </p>
                    <a
                      href="#"
                      title=""
                      className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
                    >
                      Continue Reading
                      <svg
                        className="w-5 h-5 ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex absolute bottom-[600px] gap-5 right-4 transform -translate-y-1/2  ">
              <button
                type="button"
                onClick={handlePrev}
                className="bg-white p-2 rounded-full shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="bg-white p-2 rounded-full shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentBlog;
