"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7252],{494:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=a(4848),s=a(8453);const o={sidebar_position:3,title:"Dataconnectors",description:"Learn to about Dataconnectors!",sidebar_label:"Dataconnectors"},i="Data Connectors",r={id:"graphql/dataconnectors",title:"Dataconnectors",description:"Learn to about Dataconnectors!",source:"@site/docs/graphql/dataconnectors.md",sourceDirName:"graphql",slug:"/graphql/dataconnectors",permalink:"/docs/graphql/dataconnectors",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphql/dataconnectors.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Dataconnectors",description:"Learn to about Dataconnectors!",sidebar_label:"Dataconnectors"},sidebar:"magicSidebar",previous:{title:"Quick Start",permalink:"/docs/graphql/quickstart"},next:{title:"Overview",permalink:"/docs/restapi/overview"}},l={},c=[{value:"How Data Connectors Work ?",id:"how-data-connectors-work-",level:2},{value:"1. Data Sources",id:"1-data-sources",level:3},{value:"2. Tables within Data Sources",id:"2-tables-within-data-sources",level:3},{value:"3. Creating Logical Models",id:"3-creating-logical-models",level:3},{value:"4. Schema Generation",id:"4-schema-generation",level:3},{value:"5. Edit logical model",id:"5-edit-logical-model",level:3},{value:"Benefits of Data Connectors ?",id:"benefits-of-data-connectors-",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"data-connectors",children:"Data Connectors"}),"\n",(0,n.jsx)(t.p,{children:"Data Connectors are essential for integrating your data sources with your GraphQL endpoint. They allow you to seamlessly bind your data schema to the GraphQL API, enabling efficient data retrieval and manipulation."}),"\n",(0,n.jsx)(t.h2,{id:"how-data-connectors-work-",children:"How Data Connectors Work ?"}),"\n",(0,n.jsx)(t.p,{children:"Zeromagic's Data Connector page provides a central location to manage your data connections."}),"\n",(0,n.jsx)(t.h3,{id:"1-data-sources",children:"1. Data Sources"}),"\n",(0,n.jsxs)(t.p,{children:["Upon navigating to the Data Connectors page, you'll be presented with a list of available data sources. All the data sources available in the ",(0,n.jsx)(t.code,{children:"Database"})," section of the project console will be displayed here."]}),"\n",(0,n.jsx)(t.admonition,{title:"Data sources",type:"info",children:(0,n.jsxs)(t.p,{children:["Refer the docs to learn about ",(0,n.jsx)(t.a,{href:"/datasources/introduction/",children:"data sources"})]})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"datamanager",src:a(2683).A+"",width:"1135",height:"300"})}),"\n",(0,n.jsx)(t.h3,{id:"2-tables-within-data-sources",children:"2. Tables within Data Sources"}),"\n",(0,n.jsxs)(t.p,{children:["When you click on a specific data source, you'll be prompted to a ",(0,n.jsx)(t.code,{children:"Data Manager Page"}),". This page consists of ",(0,n.jsx)(t.code,{children:"List"})," and ",(0,n.jsx)(t.code,{children:"Not Listed"})," tabs."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Listed:"})," Shows all the tables which have logical models that are listed in that data source."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"listed-tables",src:a(1293).A+"",width:"1058",height:"500"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Not Listed:"})," Shows all the tables which are not listed within that data source."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"notlisted-tables",src:a(6774).A+"",width:"1077",height:"400"})}),"\n",(0,n.jsx)(t.h3,{id:"3-creating-logical-models",children:"3. Creating Logical Models"}),"\n",(0,n.jsx)(t.p,{children:"Logical models represent the structure and relationships of your data, enabling you to define how data should be queried and manipulated through the GraphQL API."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Select a Table:"})," In the ",(0,n.jsx)(t.code,{children:"Not Listed"})," table select a table, click on ",(0,n.jsx)(t.code,{children:"list"})," to create a logical model."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Define Logical Model:"})," Provide the necessary details for the logical model, such as field names, data types, and relationships with other models."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Create Logical Model:"})," Create the logical model to generate the corresponding schema"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"logical-model",src:a(6151).A+"",width:"996",height:"386"})}),"\n",(0,n.jsx)(t.h3,{id:"4-schema-generation",children:"4. Schema Generation"}),"\n",(0,n.jsx)(t.p,{children:"Once a logical model is created, the system automatically generates the GraphQL schema for mutations and queries based on the model. This schema allows you to perform CRUD (Create, Read, Update, Delete) operations on the data through the GraphQL API."}),"\n",(0,n.jsx)(t.h3,{id:"5-edit-logical-model",children:"5. Edit logical model"}),"\n",(0,n.jsxs)(t.p,{children:["In the ",(0,n.jsx)(t.code,{children:"Listed"})," tab, you can find all the tables that have been listed. Click on a specific table to ",(0,n.jsx)(t.em,{children:"view and manage"})," its logical model. This page displays comprehensive information about the model, allowing you to edit fields and define or modify relationships. Use this functionality to refine and optimize your data structure for seamless integration with your GraphQL endpoint."]}),"\n",(0,n.jsx)(t.h2,{id:"benefits-of-data-connectors-",children:"Benefits of Data Connectors ?"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Automatic Schema Generation:"})," Logical models are converted into GraphQL schemas automatically, saving time and reducing errors."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Enhanced Data Management:"})," Logical models provide a clear and organized structure for your data, making it easier to manage and query."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Simplified Data Access:"})," Data connectors provide a unified interface for accessing data from various sources through GraphQL."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{title:"Troubleshooting",type:"warning",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Tables Not Listing:"})," Ensure you have selected a valid data source and that the table is not already listed."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Schema Generation Issues:"})," Verify that all fields and relationships in the logical model are correctly defined."]}),"\n"]})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},2683:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/datamanager-15e17b20686a0125f6f022331055f9b9.png"},1293:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/listed-tables-05fc2ac21d7d6b112e347484055abdd6.png"},6151:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/logical-model-dbc1c94e462504f0d761bc8632eb391f.png"},6774:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/notlisted-tables-35499c3092ea4771f1503e357b0f30e3.png"},8453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>r});var n=a(6540);const s={},o=n.createContext(s);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);