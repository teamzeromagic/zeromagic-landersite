const TextBlock = () => {
  return (
    <div class="relative bg-white pb-[12vmin] pt-[11vmin] px-4 sm:px-6">
      <div class="max-w-8xl mx-auto">
        <p
          class="max-w-8xl text-2xl md:text-5xl font-bold text-black tracking-tight"
          style={{lineHeight:1.35}}
        >
      ZeroMagic is a low-code platform that builds backend microservices super fast.
      Now building, deploying & scaling your application happen in minutes, saving you time and getting things done faster.
      {/* ZeroMagic is a low-code platform that empowers users to effortlessly create and deploy 
      integratable microservices within minutes, saving time and scaling complexities. */}
        </p>
        <a
          class="text-darkblue font-bold text-xl lg:text-4xl inline-block mt-[4vmin] tracking-tight"
          href="#"
        >
          Try Zeromagic completely free →
        </a>
      </div>
    </div>
  );
};

export default TextBlock;

// ZeroMagic makes it easy for anyone to create microservices
