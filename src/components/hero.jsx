import Graphql from "../assets/graphql-workflow.png";
import Mock1 from "../assets/mock1.png";
import Users from "../assets/users.png";
import Template from "../assets/template configuration.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

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

          <Carousel
            infiniteLoop={true}
            showArrows={true}
            autoPlay={true}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            swipeable={true}
            autoFocus={true}
          >

          <div class="relative">
              <img
                src={Mock1}
                alt="Magic Work flow"
                class="lg:w-[90rem] sm:w-[40rem]  md:w-[50rem] w-[25rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10"
              />

              <div class="absolute inset-0 flex flex-col justify-end overflow-hidden">
                <div class="h-[35rem] bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>
              <div class="absolute inset-x-0 bottom-3 flex justify-center items-center ">
                <p class="my-10 text-xl sm:text-md lg:text-3xl font-bold text-white/95 tracking-normal leading-none">
                Create APIs in Minutes Without Code
                </p>
              </div>
            </div>

            <div class="relative">
              <img
                src={Graphql}
                alt="Graphql Work flow"
                class="lg:w-[90rem] sm:w-[40rem]  md:w-[50rem] w-[25rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10"
              />

              <div class="absolute inset-0 flex flex-col justify-end overflow-hidden">
                <div class="h-[35rem] bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>
              <div class="absolute inset-x-0 bottom-3 flex justify-center items-center ">
                <p class="my-10 text-xl sm:text-md lg:text-3xl font-bold text-white/95 tracking-normal leading-none">
                Create Graphql by connecting multiple datasources
                </p>
              </div>
            </div>

           

            <div class="relative">
              <img
                src={Users}
                alt="Manage users"
                class="lg:w-[90rem] sm:w-[40rem]  md:w-[50rem] w-[25rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10"
              />

              <div class="absolute inset-0 flex flex-col justify-end overflow-hidden">
                <div class="h-[35rem] bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>
              <div class="absolute inset-x-0 bottom-3 flex justify-center items-center ">
                <p class="my-10 text-xl sm:text-md lg:text-3xl font-bold text-white/95 tracking-normal leading-none">
                Simplify user management with secure auth options 
                </p>
              </div>
            </div>  

            <div class="relative">
              <img
                src={Template}
                alt="Authentication"
                class="lg:w-[90rem] sm:w-[40rem]  md:w-[50rem] w-[25rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10"
              />

              <div class="absolute inset-0 flex flex-col justify-end overflow-hidden">
                <div class="h-[35rem] bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>
              <div class="absolute inset-x-0 bottom-3 flex justify-center items-center ">
                <p class="my-10 text-xl sm:text-md lg:text-3xl font-bold text-white/95 tracking-normal leading-none">
                Create customized templates for a more engaging user experience 
                </p>
              </div>
            </div>

         
            
            {/* 
<div class="relative"> 
  <img
    src={Workflow}
    alt="Product screenshot"
    class="lg:w-[90rem] sm:w-[40rem] md:w-[50rem] w-[25rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10"
  />
   
   <div class="absolute inset-0 rounded-xl overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
  </div>
  
  <div class="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
    Your Text Here
  </div>
</div> */}

            {/* <div class="relative">
        <img
          src={Workflow}
          alt="Product screenshot"
          class="lg:w-[90rem] sm:w-[40rem]  md:w-[50rem] w-[25rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10"
        />
        <div class="absolute inset-0 bg-black/50 opacity-75 flex justify-center items-center">
        
          <h3 class="text-white text-xl font-bold">Powerful Integrations Made Easy</h3>
        </div>
      </div> */}

            {/* <img
          src={Workflow}
          alt="Product screenshot"
          className="lg:w-[90rem] sm:w-[40rem]  md:w-[50rem] w-[25rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10"
      
        /> */}

            {/* <img
          src={Auth}
          alt="Product screenshot"
          className="lg:w-[90rem] sm:w-[40rem]  md:w-[50rem] w-[25rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10"
      
        />
        <img
          src={Workflow1}
          alt="Product screenshot"
          className="lg:w-[90rem] sm:w-[40rem]  md:w-[50rem] w-[25rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10"
      
        /> */}
          </Carousel>

          {/* <video 
      autoPlay={true}
      style={{ borderRadius : '20px' , border : '8px solid #15171A'}}
      class="video w-full object-cover"
      src="https://firebasestorage.googleapis.com/v0/b/zeromagicsite.appspot.com/o/minimock.mp4?alt=media&token=fc44b839-a81c-4d88-aba7-16f7acfed12c"
      preload="none" 
      // poster={Workflow}
      muted={true}
      loop={true}> 
      </video> */}
        </div>
        <div class="absolute left-0 right-0 bottom-0 -mb-16 z-0 h-3/5 bg-darkblue"></div>
      </div>

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
};
