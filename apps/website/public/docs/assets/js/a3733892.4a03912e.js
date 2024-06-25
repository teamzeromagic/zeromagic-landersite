"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[677],{6505:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>o,frontMatter:()=>d,metadata:()=>l,toc:()=>h});var t=i(4848),s=i(8453);const d={sidebar_position:4,title:"Email with otp API",description:"Quick Start with Basic Connections!",sidebar_label:"Email with OTP"},r="Email with OTP - Basic Authentication",l={id:"authentication/apireference/basicauth/emailotp",title:"Email with otp API",description:"Quick Start with Basic Connections!",source:"@site/docs/authentication/apireference/basicauth/emailotp.md",sourceDirName:"authentication/apireference/basicauth",slug:"/authentication/apireference/basicauth/emailotp",permalink:"/docs/authentication/apireference/basicauth/emailotp",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/authentication/apireference/basicauth/emailotp.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Email with otp API",description:"Quick Start with Basic Connections!",sidebar_label:"Email with OTP"},sidebar:"magicSidebar",previous:{title:"Username Password",permalink:"/docs/authentication/apireference/basicauth/usernamepass"},next:{title:"Social Authentication",permalink:"/docs/authentication/apireference/socialconnection"}},a={},h=[{value:"Signup API",id:"signup-api",level:2},{value:"Path",id:"path",level:4},{value:"Header",id:"header",level:4},{value:"Body Data",id:"body-data",level:4},{value:"Response Body Data",id:"response-body-data",level:4},{value:"Request Example",id:"request-example",level:4},{value:"Response Example",id:"response-example",level:4},{value:"Login API",id:"login-api",level:2},{value:"Path",id:"path-1",level:4},{value:"Header",id:"header-1",level:4},{value:"Body Data",id:"body-data-1",level:4},{value:"Response Body Data",id:"response-body-data-1",level:4},{value:"Request Example",id:"request-example-1",level:4},{value:"Response Example",id:"response-example-1",level:4},{value:"Verify Otp API",id:"verify-otp-api",level:2},{value:"Path",id:"path-2",level:4},{value:"Header",id:"header-2",level:4},{value:"Body Data",id:"body-data-2",level:4},{value:"Response Body Data",id:"response-body-data-2",level:4},{value:"Request Example",id:"request-example-2",level:4},{value:"Response Example",id:"response-example-2",level:4}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"email-with-otp---basic-authentication",children:"Email with OTP - Basic Authentication"}),"\n",(0,t.jsxs)(n.p,{children:["The Email with OTP authentication allows your client to authenticate using OTP method. The endpoints are pre-built and are easy to manage your authentication flow and users. To get your ",(0,t.jsx)(n.code,{children:"{auth_base_url}"}),", check it out here - ",(0,t.jsx)(n.a,{href:"/authentication/apireference/generalinfo#get-started-with-base-url",children:"Get started with base url"}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Note : ",(0,t.jsx)(n.strong,{children:"APP-KEY"})," ",(0,t.jsx)(n.em,{children:"to be passed in Headers can be obtained from the settings in the project dashboard"})]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Important",type:"info",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Sending Email OTP"})," - Currently, we don't support additional custom SMTP configuration. We send emails from our SMTP server. No configuration is needed for email setup"]})}),"\n",(0,t.jsx)(n.h2,{id:"signup-api",children:"Signup API"}),"\n",(0,t.jsx)(n.p,{children:"This endpoints allows you to create a new user using the email address and otp method."}),"\n",(0,t.jsx)(n.h4,{id:"path",children:"Path"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Method"}),(0,t.jsx)(n.th,{children:"Endpoint"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"POST"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"{auth_base_url}/email-otp-signup"})})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"header",children:"Header"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Key"}),(0,t.jsx)(n.th,{children:"Datatype"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"APP-KEY"})," *"]}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"App key of the particular project"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"body-data",children:"Body Data"}),"\n",(0,t.jsxs)(n.p,{children:["POST the data in the ",(0,t.jsx)(n.strong,{children:"application/json"})," format."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param"}),(0,t.jsx)(n.th,{children:"Datatype"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"email"})," *"]}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"Email of the user"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"response-body-data",children:"Response Body Data"}),"\n",(0,t.jsxs)(n.p,{children:["The response with ",(0,t.jsx)(n.strong,{children:"201 CREATED"})," status code represents that user is created and the OTP is sent to the email address"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param"}),(0,t.jsx)(n.th,{children:"Datatype"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"user_id"})}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"User Id of the new created user"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"email"})}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"Email of the user"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"request-example",children:"Request Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'POST https://api.zeromagic.in/auth/353d1499ab5149e194a53cf0f6c837f4/development/email-otp-signup \nHTTP/1.1\nAPP-KEY : ldM6yPAAE3PRTZbHXrjqGGzZY2Yjm7GwjAyjbNqWH48\n\n{\n    "email":"user@zeromagic.in"\n}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"response-example",children:"Response Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'HTTP/1.1 \n201 CREATED\n\n{\n    "user_id": "1",\n    "email":"user@zeromagic.in"\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"login-api",children:"Login API"}),"\n",(0,t.jsx)(n.p,{children:"This endpoints allows you to login a user using the email and otp method."}),"\n",(0,t.jsx)(n.h4,{id:"path-1",children:"Path"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Method"}),(0,t.jsx)(n.th,{children:"Endpoint"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"POST"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"{auth_base_url}/email-otp-login"})})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"header-1",children:"Header"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Key"}),(0,t.jsx)(n.th,{children:"Datatype"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"APP-KEY"})," *"]}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"App key of the particular project"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"body-data-1",children:"Body Data"}),"\n",(0,t.jsxs)(n.p,{children:["POST the data in the ",(0,t.jsx)(n.strong,{children:"application/json"})," format."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param"}),(0,t.jsx)(n.th,{children:"Datatype"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"email"})," *"]}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"Email of the user"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"response-body-data-1",children:"Response Body Data"}),"\n",(0,t.jsxs)(n.p,{children:["The response with ",(0,t.jsx)(n.strong,{children:"200 OK"})," status code represents that the OTP is sent to the email address"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param"}),(0,t.jsx)(n.th,{children:"Datatype"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"user_id"})}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"User Id of the user"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"email"})}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"Email of the user"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"request-example-1",children:"Request Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'POST https://api.zeromagic.in/auth/353d1499ab5149e194a53cf0f6c837f4/development/email-otp-login \nHTTP/1.1\nAPP-KEY : ldM6yPAAE3PRTZbHXrjqGGzZY2Yjm7GwjAyjbNqWH48\n\n{\n    "email":"user@zeromagic.in"\n}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"response-example-1",children:"Response Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'HTTP/1.1 \n200 OK\n\n{\n    "user_id": "1",\n    "email":"user@zeromagic.in"\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"verify-otp-api",children:"Verify Otp API"}),"\n",(0,t.jsx)(n.p,{children:"This endpoints allows you to verify the otp of the respective email address."}),"\n",(0,t.jsx)(n.h4,{id:"path-2",children:"Path"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Method"}),(0,t.jsx)(n.th,{children:"Endpoint"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"POST"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"{auth_base_url}/email-otp-verify"})})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"header-2",children:"Header"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Key"}),(0,t.jsx)(n.th,{children:"Datatype"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"APP-KEY"})," *"]}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"App key of the particular project"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"body-data-2",children:"Body Data"}),"\n",(0,t.jsxs)(n.p,{children:["POST the data in the ",(0,t.jsx)(n.strong,{children:"application/json"})," format."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param"}),(0,t.jsx)(n.th,{children:"Datatype"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"email"})," *"]}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"Email of the user"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"otp_code"})," *"]}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"Otp sent to the email address"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"response-body-data-2",children:"Response Body Data"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param"}),(0,t.jsx)(n.th,{children:"Datatype"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"user_id"})}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"User Id of the user"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"email"})," *"]}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"Email of the user"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"access_token"})}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"JWT access token is returned"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"token_type"})}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsxs)(n.td,{children:["Value is ",(0,t.jsx)(n.em,{children:"bearer"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"expires_in"})}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"Currently no expiry time for token, Returns null"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"request-example-2",children:"Request Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'POST https://api.zeromagic.in/auth/353d1499ab5149e194a53cf0f6c837f4/development/email-otp-login \nHTTP/1.1\nAPP-KEY : ldM6yPAAE3PRTZbHXrjqGGzZY2Yjm7GwjAyjbNqWH48\n\n{\n    "email":"user@zeromagic.in"\n    "otp_code" : 1234\n}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"response-example-2",children:"Response Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'HTTP/1.1 \n200 OK\n\n{\n   "user_id": "1",\n   "email":"user@zeromagic.in"\n   "access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNDU2Nzg5LCJuYW1lIjoiSm9zZXBoIn0.OpOSSw7e485LOP5PrzScxHb7SR6sAOMRckfFwi4rp7o",\n   "token_type" :"bearer",\n   "expires_in" : null\n}\n'})})]})}function o(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var t=i(6540);const s={},d=t.createContext(s);function r(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);