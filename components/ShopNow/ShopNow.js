import { useState } from "react";

export default function Example({heading,description}) {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="py-24 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
           {heading}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-gray-500">
           {description}
          </p>
        </div>
      </div>
    </div>
  );
}
