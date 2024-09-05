import { useState } from "react";
import { Dialog, Disclosure, Popover } from "@headlessui/react";
import { 
  Bars3Icon,
  SparklesIcon,
  SquaresPlusIcon,
  XMarkIcon,
  CodeBracketIcon,
  CloudIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import {
  AcademicCapIcon,
  BookOpenIcon,
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon, 
} from "@heroicons/react/20/solid";
import Logo from "../assets/logo.svg";
import { WAITINGLIST_FORM } from '../constants';
import { AUTHENTICATION, BLOG_URL, DOC_URL, GRAPHQL, INTEGRATIONS, REST_API } from "../constants";

const products = [
  // {
  //   name: "Learn",
  //   description: "Get a better understanding of your traffic",
  //   href: "/docs/blog/",
  //   icon: AcademicCapIcon,
  // },
  // {
  //   name: "Documentation",
  //   description: "Get started with our docs",
  //   href: "/docs/getting-started/overview/",
  //   icon: DocumentTextIcon,
  // },
  {
    name: "Rest API",
    description: "Explore our REST API",
    href: REST_API,
    icon: CodeBracketIcon,
  },
  {
    name: "GraphQL",
    description: "Discover GraphQL features",
    href: GRAPHQL,
    icon: CloudIcon,
  },

  {
    name: "Authentication",
    description: "Secure your application with Auth",
    href: AUTHENTICATION,
    icon: LockClosedIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: INTEGRATIONS,
    icon: SquaresPlusIcon,
  },
  {
    name: "Magic AI",
    description: "Explore features of Magic AI",
    href: "/docs/getting-started/overview/",
    icon: SparklesIcon,
  }
];
const callsToAction = [
  { name: "Watch demo", href: "#demo", icon: PlayCircleIcon },
  { name: "Resources", href: "#resources", icon: AcademicCapIcon  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavbarExample() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      {/* <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global"> */}
      <div className=" max-w-8xl mx-auto relative z-10  ">
        <nav
          className="flex py-[3vmin] items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center space-x-4 lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <img className="h-5 w-auto" src={Logo} alt="Logo" />
            </a>
            <span className="text-2xl font-bold tracking-tight text-slate-800">
              zeromagic
            </span>
          </div>
          {/* <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div> */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-base font-semibold leading-6 text-gray-600 hover:text-gray-900">
                Product
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-600"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Popover.Panel
                transition
                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-gray-700"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          target="blank"
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Popover> 
            
            <a
              href={DOC_URL}
              target="blank"
              className="text-base font-semibold leading-6 text-gray-600 hover:text-gray-900"
            >
              Documentation
            </a>

            <a
              target="blank"
              href={BLOG_URL}
              className="text-base font-semibold leading-6 text-gray-600 hover:text-gray-900"
            >
              Blogs
            </a>

            {/* <a
              href="#"
              className="text-base font-semibold leading-6 text-gray-600 hover:text-gray-900"
            >
              Community
            </a> */}

            <a
              href="#"
              className="text-base font-semibold leading-6 text-gray-600 hover:text-gray-900"
            >
              Contact
            </a>
          </Popover.Group>
          <div className="hidden space-x-2 items-center lg:flex lg:flex-1 lg:justify-end">

            <a
              target="blank"
              href={WAITINGLIST_FORM}
              className="whitespace-nowrap px-4 border border-transparent rounded-md shadow-sm text-base text-gray-600"
            >
              <strong className="font-bold">Sign up</strong>
            </a>

            <a
              target="blank"
              href={WAITINGLIST_FORM}
              className="whitespace-nowrap px-4 py-2 border border-transparent rounded-md shadow-sm text-sm text-white bg-primary"
            >
              <strong className="font-bold">Login</strong>
            </a>
         
          </div>
        </nav>
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">zeromagic</span>
              <img className="h-5 w-auto" src={Logo} alt="Logo" /> 
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-50">
                          Product
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...products].map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-normal leading-7 text-gray-700 hover:bg-gray-50"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-50"
                  >
                    Pricing
                  </a>
                  <a 
                    href={DOC_URL}
              target="blank"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-50"
                  >
                    Documentation
                  </a>
                  <a 
                  href={BLOG_URL}
              target="blank"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-50"
                  >
                    Blogs
                  </a>

                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-50"
                  >
                    Contact
                  </a>
                </div>
                <div className="py-6">
                <a
              href={WAITINGLIST_FORM}
              target="blank"
              className="whitespace-nowrap px-4 py-2 border border-transparent rounded-md shadow-sm text-sm text-white bg-base"
            >
              <strong className="font-bold">Login</strong>
            </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </header>
  );
}
