import React from 'react';
import SpinNer from './components/Spinner';
export default function Loading() {
  return (
    <div className="flex items-center  justify-center w-full h-screen ">
      <div className='flex items-center justify-center gap-4'>
        <h2 className="text-2xl">Loading </h2>
        <SpinNer />
      </div>
    </div>
  );
}
