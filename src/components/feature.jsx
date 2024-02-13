import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, CodeBracketIcon,ArrowTrendingUpIcon } from '@heroicons/react/24/outline'


const features = [
  {
    name: 'Rapid Prototyping',
    description:
      'Quickly create functional prototypes of your applications without writing a single line of code, allowing you to iterate and refine your ideas faster.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Customization',
    description:
      'Customize applications to meet specific business requirements and user needs without requiring extensive coding expertise, enabling rapid iteration and flexibility.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Push to deploy',
    description:
      'Deploy your applications instantly with the click of a button, eliminating the need for manual configuration and deployment processes, and getting your product to market faster.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Scalability',
    description:
      'Build applications that can effortlessly scale to accommodate growing user bases and increased demand, ensuring a seamless user experience regardless of workload',
    icon: ArrowTrendingUpIcon,
  },

]

export default function Feature() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Transform concepts into reality, swiftly from <span className="text-green font-extrabold">design</span> to <span className="text-darkblue font-extrabold">deployment</span>
          </p> 
          <br />
        </div>
        <div className="mx-auto  mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg ">
                    <feature.icon className="h-8 w-8 text-darkblue" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
