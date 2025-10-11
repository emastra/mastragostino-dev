'use client';
import React from 'react';

// Header Component
const Header: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      {/* Placeholder for Logo */}
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-400 shadow-md dark:bg-yellow-500 dark:shadow-gray-800">
        <span className="dark:text-black text-2xl font-bold text-gray-900">
          M
        </span>{' '}
        {/* Or an actual SVG/Image */}
      </div>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300">
        Available in early 2025
      </p>
    </div>
  );
};

// Early Access Section Component
const EarlyAccessSection: React.FC = () => {
  return (
    <div className="p-4 text-center">
      <h1 className="text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-5xl">
        Get early access
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-base text-gray-600 dark:text-gray-300 md:text-lg">
        Be amongst the first to experience Walt and launch a viral waitlist.
        Sign up to be notified when we launch!
      </p>
      <div className="mt-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <label htmlFor="email-input" className="sr-only">
          Email address
        </label>
        <input
          id="email-input"
          type="email"
          placeholder="Email"
          className="dark:bg-black w-full rounded-lg border border-gray-300 bg-white px-5 py-3 text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:shadow-gray-800 dark:focus:ring-yellow-400 sm:w-80"
          aria-label="Enter your email address"
        />
        <button
          type="submit"
          className="dark:text-black dark:focus:ring-offset-black w-full rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-gray-900 shadow-md transition duration-300 ease-in-out hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:bg-yellow-500 dark:shadow-gray-800 dark:hover:bg-yellow-400 dark:focus:ring-yellow-400 sm:w-auto"
        >
          Join waitlist
        </button>
      </div>
    </div>
  );
};

// Main Waitlist Page Component
const Waitlist2: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-12 px-4 font-sans">
      <div className="dark:bg-black w-full max-w-4xl rounded-xl border bg-white p-8 dark:border-gray-700 dark:shadow-gray-800 lg:p-12">
        <Header />
        <EarlyAccessSection />
        {/* The WaitlistStats and VideoSection components have been removed */}
      </div>
    </div>
  );
};

export default Waitlist2;
