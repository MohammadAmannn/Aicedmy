import React from 'react';
import _Footer from "./Footer";
import Image from 'next/image';

function _Hero() {
  return (
    <section className="relative py-12 overflow-hidden bg-black sm:pb-16 lg:pb-20 xl:pb-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Connecting Students with Smart Education
            </h1>
            <p className="mt-4 text-lg font-normal text-gray-400 sm:mt-8">
              Welcome to our platform, where we connect students with smart
              education. Our platform is designed to help students find the
              best education options for their needs. Whether you're looking
              for a traditional classroom setting or an online learning
              experience, we have a wide range of options to choose from{" "}
              <span className="text-orange-400 text-xl">
                Custom Learning Paths, Powered by AI
              </span>
            </p>

            <div className="mt-8 sm:mt-12">
              <p className="text-lg font-normal text-white">
                Trusted by 50k+ users
              </p>
            </div>
          </div>

          {/* Image Alignment */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/stu.jpg"
              alt="Students learning"
              height={500}
              width={500}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <_Footer />
    </section>
  );
}

export default _Hero;
