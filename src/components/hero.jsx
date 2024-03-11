import  Workflow from "../assets/workflow.svg"
export const Hero = () => {
return (
    <div className="overflow-hidden bg-white py-10">

<div class="relative px-4 sm:px-6">
  <div class="max-w-8xl mx-auto rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden relative z-10">
  {/* <img
          src={Workflow}
          alt="Product screenshot"
          // className="lg:w-[80rem] sm:w-[40rem]  md:w-[50rem] w-[25rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10"
      
        /> */}
      <video 
      autoPlay={true}
      style={{ borderRadius : '20px' , border : '8px solid #15171A'}}
      class="video w-full object-cover"
      src="https://firebasestorage.googleapis.com/v0/b/zeromagicsite.appspot.com/o/minimock.mp4?alt=media&token=fc44b839-a81c-4d88-aba7-16f7acfed12c"
      preload="none" 
      // poster={Workflow}
      muted={true}
      loop={true}> 
      </video>
      
      </div>
      <div class="absolute left-0 right-0 bottom-0 -mb-16 z-0 h-3/5 bg-darkblue"></div></div>

    {/* <div className="mx-auto max-w-8xl">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
       
        <img
          src={Workflow}
          alt="Product screenshot"
          className="lg:w-[80rem] sm:w-[40rem]  md:w-[50rem] w-[25rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10"
      
        />

<div class="absolute left-0 right-0 bottom-0 z-0 h-1/2 bg-pink-900"></div>
      </div>
    </div> */}
  </div>
);
}