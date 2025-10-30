"use client"
import React from 'react'
import {Spinner} from "@heroui/react";
export default function loading() {
  return (
    <div className='flex items-center  justify-center w-full h-screen'>
      <h2>Loading...</h2>
      <Spinner classNames={{label: "text-foreground mt-4"}} label="dots" variant="dots" />
    </div>
  )
}
