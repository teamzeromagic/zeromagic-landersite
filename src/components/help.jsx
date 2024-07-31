import Docs from "../assets/docs.png"
import { DOC_URL } from "../constants";
const Help = () => {
  return (
    <div id="help" class="relative bg-white pt-[8vmin] pb-[10vmin] px-4 sm:px-6 overflow-hidden">
      <div class="max-w-8xl mx-auto"><h2 class="text-xs text-yellow uppercase font-bold tracking-widest flex justify-between items-center">
        <span class="flex-shrink-0">Documentation</span>
          <div class="w-full h-[2px] ml-5 bg-black opacity-10"></div>
            </h2>
            <div class="grid gap-[4vmin] grid-cols-12 items-center">
              <div class="col-span-12">
                <p class="mt-10 text-2xl lg:text-4xl font-bold text-black tracking-tight leading-none">Start building your Magic</p>
                <p class="max-w-3xl mt-6 text-xl lg:text-xl md:text-4xl leading-normal font-normal text-slate-700 tracking-tight">Discover the spellbook for building brilliant software</p>
              </div>
            </div>
      </div>
      <div class="max-w-8xl mx-auto">
        <div class="grid gap-[4vmin] grid-cols-12 items-center" style={{ 'display': 'none' }}>
          <div class="col-span-12">
            <p class="mt-12 text-[6vmin] font-bold text-black tracking-tight leading-[0.9] -indent-1">
              Help getting started.
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-[3vmin] mt-12 items-center">


          <div class="lg:col-span-2 text-white bg-base rounded-lg flex flex-col-reverse lg:flex-row items-center sm:text-center lg:text-left">
            <div class="relative z-10 self-end">
              <img
                src={Docs}
                alt="Docs"
                className="w-5/6 rounded-lg object-cover h-full"
                loading="lazy"
              />
            </div>
            <div class="h-full mx-auto lg:w-[41%] px-[6vmin] pt-[8vmin] lg:p-0 lg:py-[6vmin] lg:pr-[8vmin] relative z-10">
              <h3 class="text-3xl md:text-5xl leading-none font-bold tracking-tight">
                Developer documentation.
              </h3>
              <p class="max-w-lg mt-5 text-lg md:text-2xl font-normal text-slate-200">
                Dive into this comprehensive documentation for tutorials and resources to build applications efficiently.
              </p>
              <a
                href={DOC_URL}
                target="blank"
                class="inline-block mt-7 whitespace-nowrap px-4 py-2 border rounded-md text-md font-semibold text-white border-white hover:text-black hover:bg-white transition-all"
              >
                Check Docs →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
