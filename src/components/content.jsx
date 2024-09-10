import Authentication from "../assets/graphql-workflow.png"

export default function Content() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-8xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-16">
            <div className="lg:max-w-lg"> 
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            From <span className="text-red font-extrabold">loging</span> to <span className="text-darkblue font-extrabold">logout</span>, simplify authentication
        </h1>
             <p className="mt-6 text-lg leading-8 text-gray-600">
             Build trust with your users through hassle-free authentication, no coding skills necessary
              </p>
              
            </div>
          </div>
          <img
            src={Authentication}
            // src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Product screenshot"
            className="lg:w-[48rem] sm:w-[40rem]  md:w-[40rem] w-[25rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
