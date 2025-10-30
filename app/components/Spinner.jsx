"use client"
import React from 'react';
import { Spinner } from '@heroui/react';

export default function SpinNer() {
  return (
    <div>
      <Spinner
        classNames={{ label: 'text-foreground -mb-7' }}
        label="dots"
        variant="dots"
      />
    </div>
  );
}
