import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import Logo from "../assets/logo-full-light.svg"
export default function Footer() {

  const product = [
    {
      'id' : 1,
      'title' : 'Overview',
      'link' : "#"
    },
    {
      'id' : 2,
      'title' : 'Features',
      'link' : "#"
    },
    {
      'id' :3,
      'title' : 'Resources',
      'link' : "#"
    },
  ]

  const policies = [
    {
      'id' : 1,
      'title' : 'Terms & Conditions',
      'link' : "#"
    },
    {
      'id' : 2,
      'title' : 'Privacy Policy',
      'link' : "#"
    },
    {
      'id' :3,
      'title' : 'Security',
      'link' : "#"
    },
    {
      'id' :4,
      'title' : 'Compilance',
      'link' : "#"
    },
  ]

  const contact = [
    {
      'id' : 1,
      'title' : 'zeromagic@gmail.com',
      'link' : "#"
    }
  ]
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 pt-16 sm:pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-md lg:max-w-sm">
             <img className='col-span-3 max-h-8 w-full object-contain lg:col-span-1' src={Logo} />
          </div>
          <dl className="grid  grid-cols-3 gap-x-8 gap-y-10 sm:grid-cols-3 lg:pt-2">
              <ul className='flex items-start text-white flex-col space-y-2 '>
                <li className='text-base text-gray-100 font-bold'>Product</li>
                {product.map(item => (
                <li><a className="text-sm hover:underline" href={item.link}>{item.title}</a></li>
               ))} 
                </ul>  
                <ul className='flex items-start text-white flex-col space-y-2 '>
                <li className='text-base text-gray-100 font-bold'>Policies</li>
                {policies.map(item => (
                <li><a className="text-sm hover:underline" href={item.link}>{item.title}</a></li>
               ))}  
                </ul>  
               <ul className='flex items-start text-white flex-col space-y-2 '>
                <li className='text-base text-gray-100 font-bold'>Connect with us</li>
                {contact .map(item => (
                <li><a className="text-sm hover:underline" href={item.link}>{item.title}</a></li>
               ))} 
                </ul>  
             
          </dl>
          
        </div>
      </div> 
      <p className="flex h-10 mt-10 items-center justify-center mt-12 mb-5 text-xs font-medium text-white sm:px-6 lg:px-8">
      © 2024, Zeromagic Labs Pvt. Ltd. All Rights Reserved.
        </p>
    </div>

  )
}
