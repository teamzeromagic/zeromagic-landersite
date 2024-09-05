import { WAITINGLIST_FORM } from '../constants';

const TextBlock = () => {
  return (
    <div id="product" class="relative bg-white pb-[4vmin] pt-[10vmin] px-4 sm:px-6">
      <div class="max-w-6xl mx-auto">
        <p
          class="max-w-8xl text-2xl md:text-4xl font-bold text-black tracking-tight"
          style={{lineHeight:1.35}}
        >
      ZeroMagic is a <span class="text-green">AI-powered low-code</span> platform that builds backend microservices super fast.
      Now building, deploying & scaling your application happen in minutes, saving you time and getting things done faster.
         </p>
        <a
          class="text-darkblue font-bold text-xl lg:text-3xl inline-block mt-[4vmin] tracking-tight"
          href={WAITINGLIST_FORM}
        >
          Try Zeromagic for free till you like →
        </a>
      </div> 
    </div>
  );
};

export default TextBlock;

// ZeroMagic makes it easy for anyone to create microservices
