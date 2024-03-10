const TextBlock = () => {
  return (
    <div class="relative bg-white pb-[12vmin] pt-[11vmin] px-4 sm:px-6">
      <div class="max-w-8xl mx-auto">
        <p
          class="max-w-8xl text-2xl md:text-5xl font-bold text-black tracking-tight"
          style={{lineHeight:1.35}}
        >

      ZeroMagic is a low-code platform that empowers users to effortlessly create and deploy 
      integratable microservices within minutes, saving time and scaling complexities.
        </p>
        <a
          class="plausible-event-name=Signup-CTA-clicked text-darkblue font-bold text-xl lg:text-4xl inline-block mt-[4vmin] tracking-tight plausible-event-trial_onboarding_test=control"
          href="https://account.ghost.org/signup/?view=fc5364bf9dbfa34954526becad136d4b"
        >
          Try Zeromagic completely free for 14 days →
        </a>
      </div>
    </div>
  );
};

export default TextBlock;