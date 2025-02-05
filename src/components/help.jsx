import Docs from "../assets/magicai.png" 

import {  MAGIC_AI} from "../constants";
const Help = () => {
  return (
    <div id="help" class="relative bg-primaryBg pt-[8vmin] pb-[10vmin] px-4 sm:px-6 overflow-hidden">
      <div class="max-w-8xl mx-auto">
        <div class="grid gap-[4vmin] grid-cols-12 items-center">


          <div class="col-span-12">
            <p class="mt-12 text-5xl font-bold text-black tracking-tight leading-[0.9] -indent-1">
            <span className="text-darkblue"> Magic AI</span>  - Where Code Meets Magic 
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-[3vmin] mt-12 items-center">


          <div class="lg:col-span-2 text-gray-900 bg-white rounded-xl flex flex-col-reverse lg:flex-row items-center sm:text-center lg:text-left">
            <div class="relative z-10 self-end">
              <img
                src={Docs}
                alt="Docs"
                className="w-5/6 rounded-l-lg object-cover h-full"
                loading="lazy"
              />
            </div>
            <div class="h-full mx-auto  px-[6vmin] pt-[8vmin] lg:p-0 lg:py-[6vmin] lg:pr-[8vmin] relative z-10">
              <h3 class="text-3xl md:text-5xl leading-none font-bold tracking-tight">
              Automate <span className="text-primary">API Tasks</span> with ease .
              </h3>
              <p class="max-w-lg mt-5 text-lg md:text-2xl font-normal text-gray-600">
              From GraphQL to REST, let Magic AI handle the heavy lifting, freeing you to focus on innovation.
              </p>

              <a 
                href={MAGIC_AI}
                target="blank"
                className="flex mt-8 items-center text-md">
                  <div className="relative z-10 rounded-full text-blue bg-blueBg px-5 py-1.5 font-bold">
                  Check Magic AI →
                  </div>
                </a>

              {/* <a
                href={DOC_URL}
                target="blank"
                class="inline-block mt-7 whitespace-nowrap px-4 py-2 border rounded-md text-md font-semibold text-primary border-primary hover:text-black hover:bg-primary transition-all"
              >
                Check Magic AI →
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
