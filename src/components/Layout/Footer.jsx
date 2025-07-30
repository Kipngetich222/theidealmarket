export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark-700 shadow-inner mt-8">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              © 2025 theIdealmarket.shop. All rights reserved.
            </span>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

