
const VID_URL = "https://firebasestorage.googleapis.com/v0/b/zeromagicsite.appspot.com/o/Zeromagic-product-demo-compressed.mp4?alt=media&token=990297d9-fdef-4de0-bd10-d5b8f31fb9e0"

export const DemoVideo = () => {
    return (
    <div class="py-[8vmin] flex justify-center items-center bg-primaryBg relative px-4 sm:px-6 overflow-hidden" id="demo"> 
        <video width="100%" height="100%" controls className="max-w-2xl">
          <source src={VID_URL} type="video/mp4" />
          Your browser does not support the video tag.
        </video> 
      </div>
    );
}