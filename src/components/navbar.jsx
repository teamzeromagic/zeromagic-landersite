import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from "../assets/logo.svg"
import LogoFull from "../assets/logo-full.svg"

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Resource', href: '#' },
  { name: 'Contact', href: '#' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      

      {/* <header className="relative bg-white">
        <div className='px-4 sm:px-6'>
          <div className='flex justify-between items-center max-w-8xl mx-auto py-[3vmin] md:justify-start md:space-x-10'>
            <div className='flex justify-start'>
            <a href="/" className="-m-1.5 p-1.5">
              <img
                className="h-5 w-auto" 
                src={Logo}
                alt="Logo"
              />
            </a> 
            </div>

          <nav className='hidden md:flex space-x-10'>
          <a href="/explore/" className="text-md text-gray-500 font-medium hover:text-gray-900">Explore</a>
          <a href="/explore/" className="text-md text-gray-500 font-medium hover:text-gray-900">Explore</a>
          <a href="/explore/" className="text-md text-gray-500 font-medium hover:text-gray-900">Explore</a>
          <a href="/pricing/" className="text-md text-gray-500 font-medium hover:text-gray-900">Pricing</a>
          </nav>


          <div className="hidden md:flex items-center gap-7 justify-end md:flex-1 lg:w-0">
           <a href="https://account.ghost.org/signin/" className="whitespace-nowrap text-md text-gray-500 font-medium hover:text-gray-900">Sign in</a>
            <a href="https://account.ghost.org/signup/?view=fc5364bf9dbfa34954526becad136d4b" 
            className="plausible-event-name=Signup-CTA-clicked whitespace-nowrap px-4 py-2 border border-transparent rounded-md shadow-sm text-sm text-white bg-primary plausible-event-trial_onboarding_test=control"><strong class="font-semibold">Get Started</strong> — free</a></div>

          </div>
        </div>
      </header> */} 
        {/* <div className='flex justify-between items-center max-w-8xl mx-auto py-[3vmin] md:justify-start md:space-x-10'> */}
      <header className="absolute inset-x-0 top-0 z-50"> 
        <div className=' max-w-8xl mx-auto overflow-hidden relative z-10  '>
        <nav className="flex py-[3vmin] items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex items-center space-x-4 lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <img
                className="h-5 w-auto" 
                src={Logo}
                alt="Logo"
              />
            </a> 
              <span className='text-2xl font-bold tracking-tight text-slate-800' >zeromagic</span>
          </div>
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
          <div className="hidden lg:flex lg:gap-x-12"> 
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-base font-semibold leading-6 text-gray-500 hover:text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center space-x-4">
  <a href="#" className="whitespace-nowrap text-md text-gray-500 font-medium hover:text-gray-900">Sign in</a>

  <a href="#" className="whitespace-nowrap px-4 py-2 border border-transparent rounded-md shadow-sm text-sm text-white bg-base">
    <strong className="font-bold">Get Started</strong>
  </a> 
</div>

        </nav>

        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only text-2xl font-bold tracking-tight text-slate-800">Zeromagic</span>
                <img
                  className="h-8 w-auto"
                  src={LogoFull}
                  alt="Logo"
                />
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
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6 space-x-4"> 
                <a href="#" className="whitespace-nowrap text-md text-gray-500 font-medium hover:text-gray-900">Sign in</a>

<a href="#" className="whitespace-nowrap px-4 py-2 border border-transparent rounded-md shadow-sm text-sm text-white bg-base">
  <strong className="font-bold">Get Started</strong>
</a> 
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
        </div>
      </header>
    {/* </div> */}
    </div>
  )
}
