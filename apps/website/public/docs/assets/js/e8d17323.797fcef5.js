"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1530],{3341:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>h,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=t(4848),a=t(8453);const r={sidebar_position:1,title:"General API Information",description:"Get started with Auth APIS!",sidebar_label:"General Information"},s="General Information",o={id:"authentication/apireference/generalinfo",title:"General API Information",description:"Get started with Auth APIS!",source:"@site/docs/authentication/apireference/generalinfo.md",sourceDirName:"authentication/apireference",slug:"/authentication/apireference/generalinfo",permalink:"/docs/authentication/apireference/generalinfo",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/authentication/apireference/generalinfo.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"General API Information",description:"Get started with Auth APIS!",sidebar_label:"General Information"},sidebar:"magicSidebar",previous:{title:"Users",permalink:"/docs/authentication/quickstart/users"},next:{title:"Email Password",permalink:"/docs/authentication/apireference/basicauth/emailpassword"}},h={},c=[{value:"Get Started with Base URL",id:"get-started-with-base-url",level:2},{value:"Basic Authentication - Available APIs",id:"basic-authentication---available-apis",level:2},{value:"Email with password API",id:"email-with-password-api",level:3},{value:"Mobile number with otp API",id:"mobile-number-with-otp-api",level:3},{value:"Username with password API",id:"username-with-password-api",level:3},{value:"Email with otp API",id:"email-with-otp-api",level:3},{value:"Social Authentication - Available APIs",id:"social-authentication---available-apis",level:2},{value:"Support Social Providers",id:"support-social-providers",level:3}];function l(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"general-information",children:"General Information"}),"\n",(0,n.jsxs)(i.p,{children:["The Zeromagic Auth API Reference allows to create and manage users using ",(0,n.jsx)(i.code,{children:"REST API"}),". These apis are great place to start if you want to build authentication system for your application. You can start consuming to the pre-built endpoints from your client application. We support both Basic and Social authentication methods."]}),"\n",(0,n.jsx)(i.h2,{id:"get-started-with-base-url",children:"Get Started with Base URL"}),"\n",(0,n.jsxs)(i.p,{children:["The authentication has separate url which can be found in the ",(0,n.jsx)(i.code,{children:"Environments"})," section in the dashboard. The base url can be found in the name of ",(0,n.jsx)(i.code,{children:"Auth URL"})," under Environments. To make an api call to the below authentication endpoint, the uri is in the format or ",(0,n.jsx)(i.code,{children:"{base_auth_url}/{authentication_endpoint}"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["For example, if ",(0,n.jsx)(i.code,{children:"https://api.zeromagic.in/auth/353d1499ab5149e194a53cf0f6c837f4/development/"})," is your authentication base url and you have to make a request to ",(0,n.jsx)(i.code,{children:"/email-password-signup"})," endpoint, then your uri will be ",(0,n.jsx)(i.code,{children:"https://api.zeromagic.in/auth/353d1499ab5149e194a53cf0f6c837f4/development/email-password-signup"})]}),"\n",(0,n.jsx)(i.admonition,{title:"Important",type:"info",children:(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Environments"})," are required for making an api call. When you make an api call to the url mentioned in the environments, the database operations is performed over the ",(0,n.jsx)(i.strong,{children:"Database binded to the Environment"}),"."]})}),"\n",(0,n.jsx)(i.h2,{id:"basic-authentication---available-apis",children:"Basic Authentication - Available APIs"}),"\n",(0,n.jsx)(i.h3,{id:"email-with-password-api",children:"Email with password API"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"API \xa0 \xa0 \xa0 \xa0"}),(0,n.jsx)(i.th,{children:"Path \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Sign-up \xa0 \xa0"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"/authentication/apireference/basicauth/emailpassword#sign-up",children:"/email-password-signup"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Login   \xa0 \xa0"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"/authentication/apireference/basicauth/emailpassword#login-api",children:"/email-password-login"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Reset \xa0"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"/authentication/apireference/basicauth/emailpassword#password-reset-api",children:"/email-password-reset"})})]})]})]}),"\n",(0,n.jsx)(i.h3,{id:"mobile-number-with-otp-api",children:"Mobile number with otp API"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"API \xa0 \xa0 \xa0 \xa0"}),(0,n.jsx)(i.th,{children:"Path \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Sign-up \xa0 \xa0"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"/authentication/apireference/basicauth/phoneotp#signup-api",children:"/mobile-otp-signup"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Login   \xa0 \xa0"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"/authentication/apireference/basicauth/phoneotp#login-api",children:"/mobile-otp-login"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Verify OTP \xa0"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"/authentication/apireference/basicauth/phoneotp#verify-otp-api",children:"/mobile-otp-verify"})})]})]})]}),"\n",(0,n.jsx)(i.h3,{id:"username-with-password-api",children:"Username with password API"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"API \xa0 \xa0 \xa0 \xa0"}),(0,n.jsx)(i.th,{children:"Path \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Sign-up \xa0 \xa0"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"/authentication/apireference/basicauth/usernamepass#signup-api",children:"/username-password-signup"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Login   \xa0 \xa0"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"/authentication/apireference/basicauth/usernamepass#login-api",children:"/username-password-login"})})]})]})]}),"\n",(0,n.jsx)(i.h3,{id:"email-with-otp-api",children:"Email with otp API"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"API \xa0 \xa0 \xa0 \xa0"}),(0,n.jsx)(i.th,{children:"Path \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Sign-up \xa0 \xa0"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"/authentication/apireference/basicauth/emailotp#signup-api",children:"/email-otp-signup"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Login   \xa0 \xa0"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"/authentication/apireference/basicauth/emailotp#login-api",children:"/email-otp-login"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Verify OTP \xa0"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"/authentication/apireference/basicauth/emailotp#verify-otp-api",children:"/email-otp-verify"})})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"social-authentication---available-apis",children:"Social Authentication - Available APIs"}),"\n",(0,n.jsxs)(i.p,{children:["The endpoint ",(0,n.jsx)(i.code,{children:"/oauth"})," is common for all social authentication methods"]}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"API \xa0 \xa0 \xa0 \xa0"}),(0,n.jsx)(i.th,{children:"Path \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"OAuth \xa0 \xa0"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"/authentication/apireference/socialconnection",children:"/oauth"})})]})})]}),"\n",(0,n.jsx)(i.h3,{id:"support-social-providers",children:"Support Social Providers"}),"\n",(0,n.jsxs)(i.p,{children:["To know about the supported social providers, visit here - ",(0,n.jsx)(i.a,{href:"/authentication/quickstart/methods/social#supported-social-providers",children:"Supported Social Providers"})]})]})}function d(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>o});var n=t(6540);const a={},r=n.createContext(a);function s(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);