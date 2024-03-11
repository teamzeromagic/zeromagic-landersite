import Authentication from "../assets/Authentication.png";
import ServiceModules from "../assets/service-modules.svg"
import Gif from "../assets/prototype.gif";
import Rapid from "../assets/rapid.jpg";
import Customization from "../assets/customization.png";
import Deploy from "../assets/deploy.jpg";
import Scalability from "../assets/scale.png";

export const Content2 = () => {
  return (
    <div class="py-[8vmin] bg-base relative px-4 sm:px-6 overflow-hidden">
      <div class="max-w-8xl mx-auto text-gray-400">
        <h2 class="text-xs font-semibold text-green uppercase tracking-widest">
        Focus on Your Vision
        </h2>
        <div class="font-semibold">
          <div class="max-w-[400px] md:max-w-[600px]">
            <p class="mt-6 text-2xl md:text-4xl tracking-tight leading-tight">
             
              Our platform lets you focus on what matters, while we handle the complexity.
            </p>
            <p class="mt-6 text-2xl md:text-4xl tracking-tight leading-tight">
              <span class="text-white font-bold">
                Build smarter, not harder
              </span>
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-12 w-full max-w-8xl mx-auto mt-10">
        <img
          class="rounded-md md:rounded-xl lg:rounded-2xl"
          sizes="(max-width: 1400px) 1400px, 100vw"
          src={ServiceModules}
          alt="Service Modules"
          width="3600"
          height="1992"
          loading="lazy"
        />
      </div>
      <div class="py-[8vmin] mt-10 text-center bg-base text-gray-400 font-semibold">
        <div class="max-w-8xl mx-auto flex flex-col items-center gap-6">
          <h2 class="text-xs font-semibold text-yellow uppercase tracking-widest">
            Launch your Backend
          </h2>
          <p class="text-2xl md:text-4xl tracking-tight leading-tight">
          Thousands are already <span class="text-white font-bold">creating</span> innovative  
            <br />
            solution with low code tool.
          </p>
          <p class="text-2xl md:text-4xl tracking-tight leading-tight">
            <span class="text-white font-bold">Join the movement!</span>
          </p>
          <a
            class="plausible-event-name=Signup-CTA-clicked mt-10 text-xl text-black font-medium tracking-tight py-4 px-6 rounded-lg bg-yellow plausible-event-trial_onboarding_test=variant"
            href="#"
          >
            Get started now — free
          </a>
        </div>
      </div>

      <div
        id="coupon-modal"
        class="fixed top-0 right-0 bottom-0 left-0 z-50 flex-col items-center bg-[rgba(34,52,59,.15)] backdrop-blur-sm hidden"
        x-data="couponModal()"
        x-show="showCouponModal"
        aria-expanded="false"
        style={{ display: "none" }}
      >
        <section class="gh-modal absolute overflow-hidden mt-0 mx-auto mb-10 md:my-[25vh] max-w-[40rem] p-0 max-h-[50rem] outline-none bg-white rounded-xl shadow-2xl">
          <div class="gh-modal-content relative h-auto w-auto border-none text-midgrey bg-white text-center">
            <header class="flex justify-center items-center bg-gradient-to-r from-white to-[#f8bfd5] py-10">
              <div
                class="uppercase text-[#FF237D] text-[2.6rem] font-bold leading-[3.2rem] rounded-md tracking-wider py-2 px-6 border-2 border-[#FF237D]"
                x-text="coupon"
              ></div>
            </header>
            <div class="gh-modal-body p-9 flex items-center justify-center flex-col">
              <h2 class="tracking-tight text-base text-2xl font-semibold leading-11 mb-3">
                You've been referred!
              </h2>
              <p class="text-[1.9rem] leading-[2.5rem] max-w-[300px] mb-8 font-[500]">
                A special offer has automatically been applied to this visit.
              </p>
              <p
                class="text-xl font-semibold mb-9 max-w-[300px] text-base leading-[2.6rem]"
                x-html="description"
              ></p>
              <button
                class="gh-btn gh-btn-black w-full text-[1.8rem]"
                // x-on:click="closeCouponModal"
                aria-label="Close modal"
                role="button"
              >
                Continue →
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export const Content3 = () => {
  return (
    <div class="relative bg-slate-900 px-4 sm:px-6 overflow-hidden">
      <div class="max-w-8xl mx-auto">
        <div class="grid gap-[8vmin] grid-cols-12 items-center">
          <div class="col-span-12 lg:col-span-5 mt-12">
            <h2 class="text-xs text-green uppercase font-bold tracking-widest flex justify-between items-center">
              <span class="flex-shrink-0">Happy Users, Happy You</span>
            </h2>
            <p class="mt-6 text-2xl lg:text-5xl font-bold text-white tracking-tight">
              From loging to logout , simplify authentication
            </p>
            <p class="mt-6 text-xl lg:text-2xl text-slate-300 tracking-tight">
            Our authentication process is designed to build trust effortlessly, requiring no coding skills from your end. 
              
            </p>
            <p class="mt-6 text-xl lg:text-2xl text-slate-300 tracking-tight">
              Enjoy hassle-free access management and provide your users with a smooth and secure journey, enhancing their overall satisfaction.
            </p>
            <p class="mt-6 text-xl lg:text-2xl text-slate-300 tracking-tight">
            Enjoy peace of mind knowing your authentication needs are covered with simplicity at its core."
            </p>
            <a
              class="inline-block mt-6 text-xl lg:text-2xl text-green font-semibold tracking-tight hover:underline"
              href="#"
            >
              Explore Authentication →
            </a>
          </div>
          <div class="col-span-7">
            <div class="w-screen h-auto mt-12">
              <div class="max-w-7xl rounded-3xl overflow-hidden bg-white">
                <img
                  src={Authentication}
                  alt="Ghost screenshot"
                  loading="lazy"
                />

                {/* <video class="video w-full" src="/videos/themes.mp4" poster="/images/home/themes.webp" preload="none" muted="" loop=""></video> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Content4 = () => {
  return (
    <div class="relative bg-white py-[8vmin] px-4 sm:px-6 overflow-hidden">
      <div class="max-w-8xl mx-auto">
        <h2 class="text-xs text-red uppercase font-bold tracking-widest flex justify-between items-center">
          <span class="flex-shrink-0">Run your business</span>
          <div class="w-full h-[2px] ml-5 bg-black opacity-10"></div>
        </h2>
        <div class="grid gap-[4vmin] grid-cols-12 items-center">
          <div class="col-span-12">
            <p class="mt-12 text-2xl lg:text-5xl font-bold text-black tracking-tight leading-none">
              Transform concepts into reality
            </p>
            <p class="max-w-3xl mt-6 text-xl lg:text-2xl md:text-4xl leading-normal font-normal text-slate-700 tracking-tight">
              Swiftly transfer from design to deployment
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div class="max-w-8xl mx-auto">
        <div class="grid gap-[6vmin] grid-cols-1 md:grid-cols-12 items-start">
          <div class="col-span-6">
            <img
              src={Rapid}
              alt="Rapid Prototyping"
              className="rounded-lg object-cover w-full h-80"
              loading="lazy"
            />
            <h3 class="mt-10 text-2xl lg:text-3xl font-bold text-black tracking-tight leading-none">
              Rapid Prototyping.
            </h3>
            <p class="max-w-xl mt-6 text-xl md:text-2xl leading-normal font-normal text-slate-700 tracking-tight">
              Quickly create functional prototypes of your applications without
              writing a single line of code, allowing you to iterate and refine
              your ideas faster.
            </p>
          </div>
          <div class="col-span-6">
            <img
              src={Customization}
              alt="Customization"
              className="rounded-lg object-cover w-full h-80"
              loading="lazy"
            />
            <h3 class="mt-10 text-2xl lg:text-3xl font-bold text-black tracking-tight leading-none">
              Customization
            </h3>
            <p class="max-w-xl mt-6 text-xl md:text-2xl leading-normal font-normal text-slate-700 tracking-tight">
              Customize applications to meet specific business requirements and
              user needs without requiring extensive coding expertise, enabling
              rapid iteration and flexibility.
            </p>
          </div>

          <div class="col-span-6">
            <img
              src={Deploy}
              alt="Deploy"
              className="rounded-lg object-cover w-full h-80"
              loading="lazy"
            />
            <h3 class="mt-10 text-2xl lg:text-3xl font-bold text-black tracking-tight leading-none">
              Push to deploy
            </h3>
            <p class="max-w-xl mt-6 text-xl md:text-2xl leading-normal font-normal text-slate-700 tracking-tight">
              Deploy your applications instantly with the click of a button,
              eliminating the need for manual configuration and deployment
              processes, and getting your product to market faster.
            </p>
          </div>

          <div class="col-span-6">
            <img
              src={Scalability}
              alt="Scalability"
              className="rounded-lg object-fill w-full h-80"
              loading="lazy"
            />
            <h3 class="mt-10 text-2xl lg:text-3xl font-bold text-black tracking-tight leading-none">
              Scalability
            </h3>
            <p class="max-w-xl mt-6 text-xl md:text-2xl leading-normal font-normal text-slate-700 tracking-tight">
              Build applications that can effortlessly scale to accommodate
              growing user bases and increased demand, ensuring a seamless user
              experience regardless of workload
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Content5 = () => {
  return (
    <div class="relative bg-slate-900 py-[8vmin] px-4 sm:px-6 overflow-hidden">
      <div class="max-w-8xl mx-auto">
        <div class="grid gap-[4vmin] grid-cols-12 items-center">
          <div class="flex justify-center col-span-12 md:col-span-7 h-auto md:h-[800px] relative">
            <div class="relative h-full w-full overflow-hidden bg-white rounded-lg md:rounded-xl lg:rounded-2xl flex flex-col justify-center">
            <video 
      autoPlay={true} 
      class="video w-full object-cover"
      src="https://firebasestorage.googleapis.com/v0/b/zeromagicsite.appspot.com/o/addblock.mp4?alt=media&token=7b004866-3dd6-4069-a056-218ca503c6c0"       
      preload="none" 
      // poster={Workflow}
      muted={true}
      loop={true}> 
      </video> 

              {/* <video
                class="video w-full"
                src="/videos/portal.mp4"
                poster="/images/home/portal.webp"
                preload="none"
                muted=""
                loop=""
              ></video> */}
            </div>
          </div>
          <div class="col-span-12 md:col-span-5 mt-12">
            <h2 class="text-xs text-yellow uppercase font-bold tracking-widest flex justify-between items-center">
              <span class="flex-shrink-0">Click Your Way to Innovation</span>
            </h2>
            <p class="mt-6 text-2xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Transform your clicks into features.
            </p>
            <p class="mt-6 text-xl lg:text-2xl text-slate-300 tracking-tight">
            Our platform enables anyone to build features with a click, accelerating your time to market and delivering business value faster.
            </p>
           
            <p class="mt-6 text-xl lg:text-2xl text-slate-300 tracking-tight">
            Business users can now contribute to building the functionalities they need, promoting collaboration and innovation within your organization.
            </p>
          
            <a
              class="inline-block mt-6 text-xl lg:text-2xl text-yellow font-semibold tracking-tight hover:underline"
              href="#"
            >
              Explore Features →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
