import MicrosoftStartup from "../assets/ms-startups.jpg"

export default function Partner() {
    return (
        <div class="py-[7vmin] text-center bg-slate-900 text-gray-400 font-semibold">
        <div class="max-w-8xl mx-auto flex flex-col items-center gap-6">
          <h2 class="text-xs font-semibold text-green uppercase tracking-widest">
          Meet Our Partners
          </h2>
          <p class="text-2xl md:text-4xl tracking-tight leading-tight">
          {" "}
            <span class="text-white font-bold">Partners Backing Our No-Code Platform</span> 
          </p> 
        </div>

        <div class="max-w-8xl mx-auto mt-10 flex flex-col items-center gap-6">
        <img
              className="max-h-32 w-auto rounded object-contain"
              src={MicrosoftStartup}
              alt="MicrosoftStartup" 
            />
        </div> 
      </div>

    //   <div className="bg-white py-24 sm:py-32">
    //     <div className="mx-auto max-w-7xl px-6 lg:px-8">
    //       <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
    //         Trusted by the world’s most innovative teams
    //       </h2>
         
    //     </div>
    //   </div>
    )
  }
  