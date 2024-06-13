import Link from "next/link";

const Footer = () => {
  const websiteName = "StudyNest";

  const date = new Date().getFullYear();

  return (
    <footer className="p-6 dark:bg-gray-800 dark:text-gray-100 mt-12">
      <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">Getting started</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
            <Link href="/" className="hover:link">
              Installation
            </Link>
            <Link href="/" className="hover:link">
              Release Notes
            </Link>
            <Link href="/" className="hover:link">
              Upgrade Guide
            </Link>
            <Link href="/" className="hover:link">
              Using with Preprocessors
            </Link>
            <Link href="/" className="hover:link">
              Optimizing for Production
            </Link>
            <Link href="/" className="hover:link">
              Browser Support
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">Core Concepts</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
            <Link href="/" className="hover:link">
              Utility-First
            </Link>
            <Link href="/" className="hover:link">
              Responsive Design
            </Link>
            <Link href="/" className="hover:link">
              Hover, Focus, &amp; Other States
            </Link>
            <Link href="/" className="hover:link">
              Dark Mode
            </Link>
            <Link href="/" className="hover:link">
              Adding Base Styles
            </Link>
            <Link href="/" className="hover:link">
              Extracting Components
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">Customization</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
            <Link href="/" className="hover:link">
              Configuration
            </Link>
            <Link href="/" className="hover:link">
              Theme Configuration
            </Link>
            <Link href="/" className="hover:link">
              Breakpoints
            </Link>
            <Link href="/" className="hover:link">
              Customizing Colors
            </Link>
            <Link href="/" className="hover:link">
              Colors
            </Link>
            <Link href="/" className="hover:link">
              Modify Theme
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">Community</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
            <a
              target="_blank"
              className="hover:link"
              href="https://github.com/yusuf-khan-swd/study-nest-client"
              title="Click to view github code"
              rel="noreferrer"
            >
              GitHub
            </a>
            <Link href="/" className="hover:link">
              Discord
            </Link>
            <Link href="/" className="hover:link">
              Twitter
            </Link>
            <Link href="/" className="hover:link">
              YouTube
            </Link>
            <Link href="/" className="hover:link">
              LinkedIn
            </Link>
            <Link href="/" className="hover:link">
              Slack
            </Link>
          </div>
        </div>
      </div>
      <div className="text-sm dark:bg-gray-700 mt-6 py-6 rounded-lg">
        <div className="items-center grid-flow-col text-center">
          <p className="pb-2">
            &copy; {date} {websiteName} . All right reserved
          </p>
        </div>
        <div className="flex justify-center">
          <Link
            target="_blank"
            href="https://github.com/yusuf-khan-swd/study-nest-client"
            title="Click to view github code"
            className="mr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </Link>
          <Link href="/" className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </Link>
          <Link href="/" className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </Link>
          <Link href="/" className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
