"use client";

export function Header() {
  return (
    <nav className=" bg-primary-bgHeader">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          /> */}
          <img src="./Logo.svg" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            GestãoProPet
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          {/* <span className="sr-only">Open main menu</span> */}
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </a>
            </li>
            <li>
              <button
                type="button"
                className="flex gap-1 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-white dark:hover:border-primary-menuSelecionado dark:text-white dark:hover:text-white dark:hover:bg-primary-menuSelecionado dark:focus:ring-primary-menuSelecionado"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_21_869)">
                    <mask
                      id="mask0_21_869"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                    >
                      <path d="M20 0H0V20H20V0Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_21_869)">
                      <path
                        d="M15.4166 20.0001H10.8616C9.30059 20.0274 7.75105 19.7295 6.31149 19.1253C4.87192 18.5212 3.57386 17.6241 2.49988 16.4909C1.59115 15.4975 0.902597 14.3233 0.479374 13.0451C0.0561501 11.7669 -0.0921984 10.4138 0.0440502 9.07426C0.250791 6.89484 1.16564 4.84305 2.64871 3.23267C4.13177 1.62229 6.10144 0.541933 8.25655 0.1568C9.67234 -0.105808 11.1288 -0.0499385 12.5203 0.320355C13.9119 0.690649 15.2035 1.36608 16.3016 2.29764C17.464 3.2748 18.3977 4.49529 19.0368 5.87287C19.6758 7.25045 20.0046 8.75151 19.9999 10.2701V15.4168C19.9983 16.6319 19.5149 17.7968 18.6558 18.656C17.7966 19.5152 16.6317 19.9986 15.4166 20.0001ZM10.0249 2.50014C8.15364 2.49852 6.34905 3.19484 4.9639 4.453C3.57876 5.71116 2.71265 7.44068 2.53488 9.30343C2.43293 10.2971 2.54206 11.3011 2.85513 12.2497C3.1682 13.1982 3.67815 14.0699 4.35155 14.8076C5.19083 15.6831 6.20292 16.3745 7.3236 16.838C8.44425 17.3015 9.64909 17.527 10.8616 17.5001H15.4166C15.9691 17.5001 16.499 17.2807 16.8897 16.8899C17.2804 16.4993 17.4999 15.9693 17.4999 15.4168V10.2701C17.5038 9.11668 17.2545 7.97634 16.7699 6.92959C16.2853 5.88284 15.5769 4.95512 14.6949 4.2118C13.3911 3.10442 11.7355 2.49761 10.0249 2.50014ZM9.99992 5.00014C9.66834 5.00014 9.35042 5.13183 9.116 5.36625C8.88159 5.60067 8.74992 5.91861 8.74992 6.25014C8.74992 6.58165 8.88159 6.89959 9.116 7.13402C9.35042 7.36844 9.66834 7.50014 9.99992 7.50014C10.3314 7.50014 10.6493 7.36844 10.8838 7.13402C11.1182 6.89959 11.2499 6.58165 11.2499 6.25014C11.2499 5.91861 11.1182 5.60067 10.8838 5.36625C10.6493 5.13183 10.3314 5.00014 9.99992 5.00014ZM10.4166 15.8334C10.085 15.8334 9.76709 15.7018 9.53267 15.4673C9.29825 15.2329 9.16659 14.915 9.16659 14.5834V10.8334H8.74992C8.41834 10.8334 8.10042 10.7018 7.866 10.4673C7.63158 10.2329 7.49989 9.91501 7.49989 9.58343C7.49989 9.25193 7.63158 8.93401 7.866 8.69959C8.10042 8.46518 8.41834 8.33343 8.74992 8.33343H9.58325C10.1358 8.33343 10.6657 8.55293 11.0563 8.94368C11.4471 9.33434 11.6666 9.86426 11.6666 10.4168V14.5834C11.6666 14.915 11.5348 15.2329 11.3004 15.4673C11.066 15.7018 10.7481 15.8334 10.4166 15.8334Z"
                        fill="white"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_21_869">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>Informações</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
