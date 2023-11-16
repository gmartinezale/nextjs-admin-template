interface ISidebarProps {
  toggleOpen?: boolean;
}

export default function Sidebar({ toggleOpen = true }: ISidebarProps) {
  return (
    <>
      <aside
        id="sidebar"
        className={`fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 hidden ${
          toggleOpen ? "w-64" : "w-16"
        } h-full pt-16 font-normal duration-75 lg:flex transition-width`}
        aria-label="Sidebar"
      >
        <div className="relative flex flex-col flex-1 min-h-0 pt-0 border-r bg-gray-800 border-gray-700 transition-all duration-300 ease-in-out">
          <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
            <div className="flex-1 px-3 space-y-1 bg-gray-800 divide-gray-700">
              <ul className="pb-2 space-y-2">
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-base rounded-lg group text-gray-200 hover:bg-gray-700"
                  >
                    <svg
                      className="w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                    {toggleOpen && (
                      <span className="ml-3">
                        Dashboard
                      </span>
                    )}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
      <div
        className="fixed inset-0 z-10 hidden bg-gray-900/90"
        id="sidebarBackdrop"
      ></div>
    </>
  );
}
