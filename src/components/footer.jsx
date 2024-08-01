import Logo from "../assets/logo-full.svg";
import { AUTHENTICATION, BLOG_URL, DOC_URL, GRAPHQL, INTEGRATIONS, MAGIC_AI, REST_API } from "../constants";
export default function Footer() {
  
  const learn = [
    {
      id: 0,
      title: "Magic AI",
      link: {MAGIC_AI},
    },
    {
      id: 1,
      title: "Documentation",
      link: {DOC_URL},
    },
    {
      id: 2,
      title: "Blogs",
      link: {BLOG_URL},
    }

  ];

  const product = [
    {
      id: 1,
      title: "Rest API",
      link: {REST_API},
    },
    {
      id: 2,
      title: "GraphQL",
      link: {GRAPHQL},
    },
    {
      id: 3,
      title: "Authentication",
      link: {AUTHENTICATION},
    },
    {
      id: 4,
      title: "Integrations",
      link: {INTEGRATIONS},
    },
  ];

  const policies = [
    {
      id: 1,
      title: "Terms & Conditions",
      link: "#",
    },
    {
      id: 2,
      title: "Privacy Policy",
      link: "#",
    },
    {
      id: 3,
      title: "Security",
      link: "#",
    },
    {
      id: 4,
      title: "Compilance",
      link: "#",
    },
  ];

  const contact = [
    {
      id: 1,
      title: "ndrohith@zeromagic.in",
      link: "mailto:ndrohith@zeromagic.in",
    },
  ];
  const currentYear = new Date().getFullYear();

  return (
    <div id="footer" className="relative isolate overflow-hidden bg-white pt-16 sm:pt-20">
      <div className="mx-auto max-w-8xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-md lg:max-w-sm">
            <img
              className="col-span-3 max-h-8 w-full object-contain lg:col-span-1"
              src={Logo}
              alt="zeromagic-logo"
            />
          </div>
          <dl className="grid  grid-cols-3 gap-x-8 gap-y-10 sm:grid-cols-3 lg:pt-2">
           
            <ul className="flex items-start flex-col ">
              <li className="text-md text-gray-900 font-bold mb-1">Product</li>
              {product.map((item) => (
                <li>
                  <a
                    className="block py-2 text-slate-700 leading-tight hover:text-white"
                    href={item.link}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="flex items-start flex-col">
              <li className="text-md text-gray-900 font-bold mb-1">Learn</li>
              {learn.map((item) => (
                <li>
                  <a className="block py-2 text-slate-700 leading-tight hover:text-white" href={item.link}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            {/* <ul className="flex items-start text-white flex-col">
              <li className="text-md text-white font-bold mb-1">Policies</li>
              {policies.map((item) => (
                <li>
                  <a className="block py-2 text-slate-700 leading-tight hover:text-white" href={item.link}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul> */}
            <ul className="flex items-start flex-col">
              <li className="text-md text-gray-900 font-bold mb-1">
                Connect with us
              </li>
              {contact.map((item) => (
                <li>
                  <a className="block py-2 text-slate-700 leading-tight hover:text-white" href={item.link}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </dl>
        </div>
      </div>
      <p className="flex h-10 mt-10 items-center  justify-center leading-tight text-sm font-medium text-gray-900 sm:px-6 lg:px-8">
       Zeromagic Labs Pvt. Ltd. © {currentYear}
      </p>
    </div>
  );
}
