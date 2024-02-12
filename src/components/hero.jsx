import  Workflow from "../assets/Workflow.png"
export const Hero = () => {
return (
    <div className="overflow-hidden bg-white py-10">
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
       
        <img
          src={Workflow}
          alt="Product screenshot"
          className="w-[80rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10"
        //   width={2432}
        //   height={1442}
        />
      </div>
    </div>
  </div>
);
}