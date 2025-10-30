import React from 'react';

export default function Hero() {
  return (

    // Hero Section
    <div className="bg-[url(/images/hero.jpeg)]   bg-cover bg-center w-full sm:h-screen h-[70vh]">
      <div className='flex flex-col sm:h-screen h-[70vh] items-center justify-center '>

        <div className='space-y-3 md:space-y-6 bg-amber-300/30 rounded-tl-2xl py-2 px-4 rounded-br-4xl rounded-md shadow'>

          <h3 className='font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white'>জামিয়াতু্স সুন্নাহ</h3>
        <p className='text-gray-300 text-lg md:text-2xl'>দক্ষিণকান্দি, বাহাদুরপুর, শিবচর, মাদারীপুর</p>
        </div>
      </div>
    </div>
  );
}
