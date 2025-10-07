'use client';

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 16 16"
    fill="currentColor"
  >
    <path d="M9.352,6.913L14.72,0h-1.32L9.014,6.082L5.432,0H0l5.626,8.125L0,15.1h1.32l4.634-5.594L10.01,15.1h5.432L9.352,6.913z M7.91,8.455l-0.64-0.908L2.26,1.077h2.05l3.87,5.52l0.64,0.908l5.24,7.47h-2.05L7.91,8.455z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M14.449 13.5h-13.449v-3h13.449l-4.449-4.449 2.121-2.121 7.879 7.879-7.879 7.879-2.121-2.121z" />
  </svg>
);

// --- Main App Component ---

export default function Portfolio4() {
  return (
    <div className="dark:bg-black ease-[cubic-bezier(0.34,1.56,0.64,1)] mx-auto max-w-7xl bg-white p-8 md:p-12">
      <div className="flex flex-col gap-12 md:flex-row">
        {/* Left Column: Text Content */}
        <div className="md:w-2/3">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-3 w-3 animate-pulse rounded-full bg-green-500"></div>
            <span className="text-xs font-medium text-green-700 dark:text-green-400">
              Available for work
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-light tracking-tight text-gray-900 dark:text-white md:text-5xl">
            I craft{' '}
            <span className="relative inline-block font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-slate-900 after:transition-all after:duration-300 after:content-[''] hover:after:w-full dark:after:bg-slate-100">
              digital experiences
            </span>{' '}
            with purpose.
          </h1>
          <p className="mb-8 max-w-2xl leading-relaxed text-gray-600 dark:text-gray-300">
            Product designer & frontend developer focused on creating
            accessible, human-centered interfaces. Currently building tools for
            creators at
            <span className="font-medium text-gray-800 dark:text-gray-200">
              {' '}
              Sera UI
            </span>
            .
          </p>
          <div className="mb-10 flex flex-wrap gap-3">
            <a
              href="#"
              className="btn btn-dark dark:text-black rounded-lg border border-slate-200 bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-800 dark:border-slate-700 dark:bg-slate-100 dark:hover:bg-slate-200"
            >
              View Projects
            </a>
            <a
              href="#"
              className="btn btn-light dark:hover:text-black flex items-center gap-2 rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium text-gray-900 transition-colors hover:bg-slate-900 hover:text-white dark:border-slate-700 dark:text-white dark:hover:bg-slate-100"
            >
              Contact Me <ArrowRightIcon />
            </a>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">Connect:</p>
            <div className="flex gap-3">
              <a
                href="#"
                className="social-link flex h-8 w-8 items-center justify-center rounded-full text-gray-600 transition-transform hover:-translate-y-0.5 hover:bg-slate-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                <GithubIcon />
              </a>
              <a
                href="#"
                className="social-link flex h-8 w-8 items-center justify-center rounded-full text-gray-600 transition-transform hover:-translate-y-0.5 hover:bg-slate-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                <LinkedinIcon />
              </a>
              <a
                href="#"
                className="social-link flex h-8 w-8 items-center justify-center rounded-full text-gray-600 transition-transform hover:-translate-y-0.5 hover:bg-slate-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>
        {/* Right Column: Profile Image */}
        <div className="flex items-center justify-center md:w-1/3">
          <div className="relative">
            <div className="flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border-2 border-dashed border-gray-300 bg-gray-200 dark:border-gray-700 dark:bg-gray-800 md:h-48 md:w-48">
              <img
                src="https://i.pinimg.com/736x/d6/8a/12/d68a121e960094f99ad8acd37505fb7d.jpg"
                alt="Profile"
                className="h-full w-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src =
                    'https://placehold.co/192x192/e2e8f0/475569?text=Image';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
