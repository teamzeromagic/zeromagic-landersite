import { Typewriter } from 'react-simple-typewriter'
import { WAITINGLIST_FORM } from './content2';

export const Header = () => {
  return (
    <div className="relative isolate px-6 lg:px-8">
      {/* <div
      className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      aria-hidden="true"
    >
      <div
        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
      />
    </div> */} 

      <div class="mt-[18vmin] mx-auto max-w-7xl px-4 flex flex-col items-center gap-3 text-center">
        <h1 class="text-[9vmin] md:text-[6vmin] tracking-tight leading-[1] font-bold text-gray-900">
        <span class="block">AI-Powered <span class="text-darkblue font-bold">
          <Typewriter 
          cursor
          // cursorBlinking
          delaySpeed={2000}
          deleteSpeed={100}
          loop={0}
          typeSpeed={100}
          words={[
            ' API builder',
            ' Rest API', 
            ' GraphQL',  
          ]}    
      /> </span>for modern <span class="text-darkblue font-bold">Apps</span>
          </span>

     
          <span class="mt-6 block text-3xl font-semibold text-slate-700">
          Build In Days. Scale For Years
          </span>
    
        </h1>
{/* 
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Announcing our next round of funding.{' '}
          <a href="#" className="font-semibold text-green">
            <span className="absolute inset-0" aria-hidden="true" />
            Read more <span aria-hidden="true">&rarr;</span>
          </a>
        </div> */}

        <div className="my-6 flex items-center justify-center gap-x-6">
            <a
              class="text-xl text-white font-medium tracking-tight py-4 px-6 rounded-lg  bg-primary"
              href={WAITINGLIST_FORM}
            >
              Join the waiting list
            </a>
          </div>

           
      </div>

      {/* <div className="mx-auto max-w-2xl pt-32 sm:pt-30 sm:pb-20 lg:pt-40 lg:pb-10">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
         
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Build APIs in minutes,{" "}
            <span className="text-darkblue font-extrabold">
              No code required{" "}
            </span>
          </h1>
           <p className="mt-6 text-lg leading-8 text-gray-600">
        Build, deploy, and scale backend services effortlessly with our no-code solution
        </p> 
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              class="text-xl text-white font-medium tracking-tight py-4 px-6 rounded-lg border border-base bg-base"
              href="https://account.ghost.org/signup/?view=aa7ac8cd5e0a6993a177746279cc00d2"
            >
              Join the waiting list
            </a>
          </div>
        </div>
      </div> */}
      {/* <div
      className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      aria-hidden="true"
    >
      <div
        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
      />
    </div> */}
    </div>
  );
};
