import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Search from "./Search";

const user = {
  name: "Arling Holguin",
  email: "hello@arling.pro",
  imageUrl:"https://media-exp1.licdn.com/dms/image/C5603AQH-nrvGE91JoA/profile-displayphoto-shrink_200_200/0/1648692082224?e=1671667200&v=beta&t=3CjClqVsBrcfokO0Wzwwo-7con2VCk_JduTeiDQo5Lg",
};
const navigation = [
  { name: "CryptApp", href: "#", current: true },
  //   { name: "Team", href: "#", current: false },
  //   { name: "Projects", href: "#", current: false },
  //   { name: "Calendar", href: "#", current: false },
  //   { name: "Reports", href: "#", current: false },
];
const userNavigation = [
  { name: "Linkedin", href: "https://www.linkedin.com/in/arlin-holguin/" },
  { name: "Portafolio", href: "https://arling.pro" },
  { name: "GitHub", href: "https://github.com/ArlingHolguin/" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  return (
    <>
      
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-8 w-8"
                        src="data:image/png;base64,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"
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "px-3 py-2 rounded-md text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={user.imageUrl}
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pt-4 pb-3">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className="bg-white shadow">
          <div className="grid md:flex justify-center items-center mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            
            <div>              
              <div className="py-4 mb-8">
                <Search/>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <p className="text-xs">CrytoApp 2022</p>
          </div>
        </main>
      </div>
    </>
  );
}
