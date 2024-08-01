import { MdLockOutline, MdOutlineCloud } from "react-icons/md";
import Authentication from "../assets/authentication.png";
import Graphql from "../assets/graphql.png";

import { useState } from "react";
import { TiFlowMerge } from "react-icons/ti";
import { BiLogoGraphql } from "react-icons/bi";
import { GrConnect } from "react-icons/gr";
import { LuDatabase } from "react-icons/lu";

export const StepFeatures = () => {

  const [count, setCount] = useState(0);
  
  const updateCount = (count) => {
    setCount(count);
  };

  const myFeatures = [
    {
      'title' : 'Simplify Auth from Login to Logout', // Auth Feature
      "desc" : 'Built-in authentication handles login, logout, and user management, ensuring a secure and user-friendly system.',
      "icon" : <MdLockOutline className="w-8 h-8" />,
      "image" : Authentication,
      "active" : count === 0,
    }, 
    {
      'title' : 'Visual REST API Flow Builder', // Rest API Flow builder Feature
      "desc" : 'Build robust features with a click, speeding up your time to market and delivering business value faster.',
      "icon" : <TiFlowMerge className="w-8 h-8" />,
      "image" : Authentication,
      "active" : count === 1,
    },
    {
      'title' : 'Precise Data Fetching with GraphQL', // Graphql Feature
      "desc" : 'No more unnecessary data transfer. Receive only the data you desire for a faster, more efficient experience',
      "icon" : <BiLogoGraphql className="w-8 h-8" />,
      "image" : Authentication,
      "active" : count === 2,
    },
    {
      'title' : 'Extended Integrations', // Integrations support in RestAPI
      "desc" : 'Connect to a wide range of services and APIs to expand your application capabilities',
      "icon" : <GrConnect className="w-8 h-8" />,
      "image" : Authentication,
      "active" : count === 3,
    },
    {
      'title' : 'Connect to multiple Datasources', // multiple datasource
      "desc" : 'Connect to multiple data sources and manage them efficiently from a single platform',
      "icon" : <LuDatabase className="w-8 h-8" />,
      "image" : Authentication,
      "active" : count === 4,
    },
    {
      'title' : 'Hassle-Free Deployment', // One click depoyment and multiple environments to manage deployment 
      "desc" : 'Our platform handles the complexities, allowing you to deploy your applications with ease and confidence',
      "icon" : <MdOutlineCloud className="w-8 h-8" />,
      "image" : Authentication,
      "active" : count === 5,
    },
  ]

    return (
      <div
        id="authentication"
        class="relative bg-white mb-12 px-4 sm:px-6 overflow-hidden"
      >
   
          {/* <h2 class="text-xs text-green uppercase font-bold tracking-widest flex justify-between items-center">
            <span class="flex-shrink-0">Hassle-Free Development</span>
            <div class="w-full h-[2px] ml-5 bg-black opacity-10"></div>
          </h2> */}
          <div class="items-center"> 
              <p class="mt-10 text-center text-2xl lg:text-5xl font-bold text-black tracking-tight leading-none">
              Simplify Your <span className="text-darkblue">Development</span> Process
              </p> 
          </div> 
        <br />
        <br /> 
  
        <div class="max-w-6xl mx-auto">
          <div class="grid gap-[3vmin] grid-cols-12 items-center">
            <div class="col-span-12 space-y-6 lg:col-span-6">      
  
              {myFeatures.map((feature, idx) => (               
              <div className={`p-4 cursor-pointer hover:bg-primaryBg ${feature.active ? 'bg-primaryBg' : 'bg-white'} rounded-xl grid grid-cols-7 gap-4`}
              onClick={() => updateCount(idx)}
              >
              <div className="col-span-1 justify-self-center">
                  <div className={`flex justify-center items-center ${feature.active ? 'text-white bg-primary' : 'text-slate-900'} rounded-full p-2 h-12 w-12`}>
                    {feature.icon} 
                    </div> 
                </div>
  
                <div className="col-span-6">      
              <p class={`mt-2 text-2xl font-bold ${feature.active ? 'text-primary' : 'text-slate-900' } tracking-tight`}>     
                {feature.title}
              </p>
              {feature.active && (
              <p class="mt-3 text-xl text-slate-900 tracking-tight"> 
                {feature.desc}
              </p>
              )}

              </div>
              </div> 
              ))}

              {/* <div className="p-4 cursor-pointer hover:bg-primaryBg bg-white rounded-xl grid grid-cols-7 gap-4">
              <div className="col-span-1 justify-self-center">
                  <div className="flex justify-center items-center rounded-full p-2 h-12 w-12">
                    <MdLockOutline className="h-8 w-8 text-slate-900" />
                  </div>
                </div>

              
  
                <div className="col-span-6">      
              <p class="mt-2 text-2xl font-bold text-slate-900 tracking-tight">
                From loging to logout , simplify authentication
              </p>
          
              </div>
              </div>
  
              <div className="p-4 cursor-pointer hover:bg-primaryBg bg-white rounded-xl grid grid-cols-7 gap-4">
              <div className="col-span-1 justify-self-center">
                  <div className="flex justify-center items-center rounded-full p-2 h-12 w-12">
                    <MdLockOutline className="h-8 w-8 text-slate-900" />
                  </div>
                </div>
  
                <div className="col-span-6">      
              <p class="mt-2 text-2xl font-bold text-slate-900 tracking-tight">
                From loging to logout , simplify authentication
              </p>
           
              </div>
              </div>
    */}
  
            </div>
  
            <div class="col-span-6">
              <div class="w-screen h-auto my-12">
                <div class="max-w-3xl rounded-xl overflow-hidden bg-white">
                  {count === 0 && (
                    <img src={Authentication} alt="Authentication" loading="lazy" />
                  )}

                  {count === 1 && (
                    <img src={Graphql} alt="Graphql" loading="lazy" />
                  )}
  
                  {count === 2 && (
                    <img src={Authentication} alt="Authentication" loading="lazy" />
                  )}

{count === 3 && (
                    <img src={Graphql} alt="Graphql" loading="lazy" />
                  )}
  
                  {/* <video class="video w-full" src="/videos/themes.mp4" poster="/images/home/themes.webp" preload="none" muted="" loop=""></video> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };