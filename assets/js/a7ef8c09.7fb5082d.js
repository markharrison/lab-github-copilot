"use strict";(self.webpackChunklab_github_copilot=self.webpackChunklab_github_copilot||[]).push([[344],{840:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>r});var t=s(4848),i=s(8453);const o={sidebar_label:"Develop API WebApp",slug:"/dev-api"},l="Develop API WebApp",d={id:"Copilot for Business/dev-api",title:"Develop API WebApp",description:"The objective is to create an API WebApp for handling color objects.",source:"@site/docs/02-Copilot for Business/03-dev-api.md",sourceDirName:"02-Copilot for Business",slug:"/dev-api",permalink:"/lab-github-copilot/dev-api",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Develop API WebApp",slug:"/dev-api"},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/lab-github-copilot/start"},next:{title:"Unit Tests",permalink:"/lab-github-copilot/unit-test"}},c={},r=[{value:"Scaffold the basic solution",id:"scaffold-the-basic-solution",level:2},{value:"Add Data model",id:"add-data-model",level:2},{value:"Add API routes",id:"add-api-routes",level:2},{value:"Add Utility function",id:"add-utility-function",level:2},{value:"Run the API WebApp",id:"run-the-api-webapp",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"develop-api-webapp",children:"Develop API WebApp"}),"\n",(0,t.jsx)(n.p,{children:"The objective is to create an API WebApp for handling color objects."}),"\n",(0,t.jsx)(n.h2,{id:"scaffold-the-basic-solution",children:"Scaffold the basic solution"}),"\n",(0,t.jsx)(n.p,{children:"Lets use GitHub Copilot Chat to help scaffold a basic API WebApp.  The better the prompt, the better suggestion returned by GitHub Copilot."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"From the previous section, we have already started VSCode and opened an empty folder"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Ask Copilot Chat the following"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'I want to create dotnet 8.0 project usinng webapi template  - also need a MSTest unit Test project.\nI need a project reference from Test project to API project.\nThe files should be called "Colors".  \nList together the dotnet commands to scaffold a solution. \n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"alt text",src:s(1973).A+"",width:"1280",height:"1198"})}),"\n",(0,t.jsx)(n.p,{children:"Response will be something like this :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"# Create a new solution\ndotnet new sln -n Colors\n\n# Create a new Web API project\ndotnet new webapi -n Colors.API\n\n# Create a new MSTest project\ndotnet new mstest -n Colors.Tests\n\n# Add the projects to the solution\ndotnet sln Colors.sln add Colors.API/Colors.API.csproj\ndotnet sln Colors.sln add Colors.Tests/Colors.Tests.csproj\n\n# Add a project reference from the test project to the API project\ncd Colors.Tests\ndotnet add reference ../Colors.API/Colors.API.csproj\n\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Within VSCode open up terminal.  Use the commands suggested by Copilot Chat.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Notice the files created. Two projects (API and Test)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(4622).A+"",width:"1280",height:"1198"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Open Solution file - use F1 ",(0,t.jsx)(n.code,{children:".NET Open Solution"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(2935).A+"",width:"1280",height:"1198"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Open ",(0,t.jsx)(n.code,{children:"Program.cs"})," - remove existing Routes & Model (things to do with weather)"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"alt text",src:s(7768).A+"",width:"1280",height:"1198"})}),"\n",(0,t.jsx)(n.p,{children:"We now have our basic API skeleton code - we shall now add the logic for our Colors API"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"alt text",src:s(5633).A+"",width:"1280",height:"1198"})}),"\n",(0,t.jsx)(n.h2,{id:"add-data-model",children:"Add Data model"}),"\n",(0,t.jsx)(n.p,{children:"We first define the schema for our ColorsItem object"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create ",(0,t.jsx)(n.code,{children:"ColorsItem.cs"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Ask Copilot Chat the following"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Create colors model called ColorsItem to include a name and hexcode.\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Insert code into ",(0,t.jsx)(n.code,{children:"ColorsItem.cs"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(5466).A+"",width:"1280",height:"1198"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Switch back to ",(0,t.jsx)(n.code,{children:"Program.cs"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Ask Copilot Chat the following"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'Intialize a list of ColorsItem with  "red", "yellow", "black" \n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Insert code into ",(0,t.jsx)(n.code,{children:"Program.cs"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(3043).A+"",width:"1280",height:"1198"})}),"\n",(0,t.jsx)(n.h2,{id:"add-api-routes",children:"Add API routes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ask Copilot Chat the following"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"using ColorsItem - create two API routes.\nFirst - an API to return all colors.   \nSecond - an API to insert a new color.\nim using .NET 8 minimal APIs\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(5380).A+"",width:"1280",height:"1198"})}),"\n",(0,t.jsx)(n.p,{children:"You can also prompt using an inline comment"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"//add a route to return a random color\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(5325).A+"",width:"1280",height:"1198"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Hit ",(0,t.jsx)(n.code,{children:"Tab"})," to accept the suggestion.  Or use ",(0,t.jsx)(n.code,{children:"Alt ["})," and ",(0,t.jsx)(n.code,{children:"Alt ]"})," to view alternatives"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"add-utility-function",children:"Add Utility function"}),"\n",(0,t.jsx)(n.p,{children:"Wwe shall now add some logic to validate the hexcode passed in the API call to add a new color."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create file ",(0,t.jsx)(n.code,{children:"ColorUtilities.cs"})," and add code"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Ask Copilot Chat the following"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"I want a new static class called ColorUtilities.\nI want a ValidateHexCode function using Regex - add to static class  ColorUtilities.\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Insert code into ",(0,t.jsx)(n.code,{children:"ColorUtilities.cs"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(977).A+"",width:"1280",height:"1198"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Irrespective of the code suggested, for lab purposes only check for 6 character hexcodes - we will fix this later"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'  string pattern = @"^#([A-Fa-f0-9]{6})$";   // 6 character \n  string pattern = @"^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$";   // 3 or 6 character \n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Try this inline comment"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"// function to test for shade of red\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Switch back to  ",(0,t.jsx)(n.code,{children:"Program.cs"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add Hexcode validation to the Insert new Color route .  Might need encouragement / prompting to use our validation utility function."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"// hexcode validation\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"alt text",src:s(8936).A+"",width:"1280",height:"1198"})}),"\n",(0,t.jsx)(n.h2,{id:"run-the-api-webapp",children:"Run the API WebApp"}),"\n",(0,t.jsx)(n.p,{children:"Our API code is now complete"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Use F5 to run the application"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"alt text",src:s(917).A+"",width:"1280",height:"842"})}),"\n",(0,t.jsx)(n.p,{children:"Use the Swagger UI to test the WebApi"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Get all Colors"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add a new color - use valid hexcode"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add a new color - use invalid hexcode ... check for error status code"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Get a random color"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"alt text",src:s(5166).A+"",width:"1280",height:"1369"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1973:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/devapi1-1fd1329ed60a1c4c2ddbff472f29cb72.png"},977:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/devapi10-76baa9af1fa6f51a1866a0fbc4471a91.png"},8936:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/devapi11-bb1216790899e84650133a3215d52dd9.png"},4622:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/devapi2-7994fcad7abb98ce99c94623ffb0b08d.png"},2935:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/devapi3-b7c6eb6d69434ccc226d5c503fdbd48f.png"},7768:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/devapi4-bb4619d09b356ee5607b1cb3594e9286.png"},5633:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/devapi5-4c84a14346e59385a707ad37889cc613.png"},5466:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/devapi6-dd09f3bc07cf0788a3e9df5e0cdf2c92.png"},3043:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/devapi7-aa8879ce8fce1e1258a465ef2ec6505b.png"},5380:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/devapi8-32753d73f211459c33644ca4ad8d5fe3.png"},5325:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/devapi9-45767390a36566958f46cf5a7322a834.png"},917:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/run1-4380a3e6234c31602f4eafb3cc4ab556.png"},5166:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/run2-4a515bd1c6987c33f4adf519e6dbef19.png"},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var t=s(6540);const i={},o=t.createContext(i);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);