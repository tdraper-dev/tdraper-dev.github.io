(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{143:function(e,t,a){"use strict";a.r(t);var s=a(2),c=a.n(s),n=a(67),o=a.n(n),r=(a(74),a.p,a.p,a.p,a(75),a.p,a(76),a(9)),i=a(5),l=a(8),j=a(1),b=function(e){var t=e.path,a=Object(s.useRef)(),c=Object(i.f)().pathname.substring(1);return Object(j.jsx)("li",{className:"nav-item mx-lg-3",children:Object(j.jsx)(r.b,{onClick:function(){var e=document.getElementsByClassName("activated")[0]||null;e&&e.classList.remove("activated"),a.current.classList.add("activated")},ref:a,to:"/".concat(t),className:"nav-link ".concat(c===t?"activated":""),children:t||"Home"})})},d=function(){return Object(j.jsxs)(r.b,{to:"/",className:"navbar-brand",children:[Object(j.jsxs)("span",{className:"otherTitleSpecial",style:{color:"white"},children:[Object(j.jsx)("span",{className:"t-letter",children:"t"}),"Draper"]}),Object(j.jsx)("div",{className:"period",style:{color:"rgba(226, 78, 66)",display:"inline-block"},children:"."}),Object(j.jsx)("div",{className:"titleSpecial",style:{color:"rgb(233, 128, 0)"},children:"dev"})]})};var m=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(j.jsxs)("nav",{id:"navbar",className:"navbar navbar-expand-lg navbar-dark",children:[Object(j.jsx)(d,{}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button",onClick:function(){var e=document.getElementById("navBarDropDown");e.className=" navbar-collapse ".concat(a?"collapsing":"expanding"," "),setTimeout((function(){c(!a),e.className="navbar-collapse collapse ".concat(a?"":"show"," ")}),300)},children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse ".concat(a?"show":""),id:"navBarDropDown",children:Object(j.jsxs)("ul",{className:"navbar-nav",children:[Object(j.jsx)(b,{path:""}),Object(j.jsx)(b,{path:"About"}),Object(j.jsx)(b,{path:"Projects"}),Object(j.jsx)(b,{path:"Blog"}),Object(j.jsx)(b,{path:"Contact"})]})})]})};var h=function(e){return Object(j.jsxs)("div",{className:"iconTitle",children:[Object(j.jsx)("h1",{className:"pageTitle mb-2",children:e.title}),e.children]})},u=a(10),x=a.p+"static/media/DungeonMapLogin(resized).301cb910.png",g=a.p+"static/media/DungeonMapDashboard(resized).2f680e47.png",p=a.p+"static/media/DungeonMapGameBoard(resized).bf74850f.png",O=a.p+"static/media/CurrencyConverterHome(resized).3ae8198a.png",f=a.p+"static/media/CurrencyConverterDisplay(resized).3560a60c.png",v=a.p+"static/media/CurrencyConverterInfo(resized).6f2eb8a8.png",y=a.p+"static/media/DawdHome(resized).4638fc76.png",N=a.p+"static/media/DawdActive(resized).c4b1ae25.png",w=a.p+"static/media/DawdComplete(resized).b4bb24c6.png",k=function(e){var t=e.direction,a=e.style,s=e.arrowClick;return Object(j.jsx)("div",{style:a,className:"arrowBox",onClick:s,children:t})},I=function(e){var t=e.image,a=e.website,s=e.icons;return Object(j.jsxs)("div",{className:"imageSlide",children:[Object(j.jsx)("a",{className:"websiteLink",rel:"noreferrer",href:a,target:"_blank",children:Object(j.jsx)("img",{alt:"Project Slide",src:t,className:"noselect img-fluid img"})}),s?Object(j.jsx)("div",{className:"homeIconImages",children:s}):null]})},S=c.a.forwardRef((function(e,t){return Object(j.jsx)("div",{ref:t,className:"carousel row",children:e.images.map((function(t,a){return Object(j.jsx)(I,{image:t,website:e.website[a]||e.website[0],icons:e.icons[a]||null},Math.random())}))})})),M=function(e){var t=e.images,a=e.website,c=e.icons,n=void 0===c?[]:c,o=e.classname,r=Object(s.useRef)(null),i=Object(s.useState)(0),b=Object(l.a)(i,2),d=b[0],m=b[1];return Object(j.jsxs)("div",{className:o,title:"Click to see the site",children:[Object(j.jsx)(k,{arrowClick:function(){Math.abs(d)<100||(r.current.style.transform="translateX(".concat(d+100,"%)"),m((function(e){return e+100})))},direction:Object(j.jsx)(u.a,{color:"white"}),style:{left:0}}),Object(j.jsx)(S,{icons:n,website:a,images:t,ref:r}),Object(j.jsx)(k,{arrowClick:function(){Math.abs(d)>=100*(t.length-1)||(r.current.style.transform="translateX(".concat(d-100,"%)"),m((function(e){return e-100})))},direction:Object(j.jsx)(u.b,{color:"white"}),style:{right:0}})]})},T=function(e){var t=e.word;return Object(j.jsx)("p",{className:"keyword mx-1 my-1",children:t})},B=function(e){var t=e.keywords;return Object(j.jsx)("div",{className:"keyWordsBox",children:t.map((function(e){return Object(j.jsx)(T,{word:e},Math.random())}))})},C=function(e){var t=e.title,a=e.font,s=void 0===a?0:a;return Object(j.jsx)("h3",{style:{fontFamily:s.family,fontSize:s.fontSize},className:"projectTitle",children:t})},D=function(){return Object(j.jsx)(r.b,{className:"noLink",to:"/Blog",children:Object(j.jsx)("div",{className:"learnMoreButton",children:"Learn More"})})},F=function(e){var t=e.blurb;return Object(j.jsx)("div",{className:"projectBlurb",children:t})},R=function(e){e.text;var t=e.children;return Object(j.jsx)("div",{className:"col-12 col-xl-6 textBox",children:t})};function L(e){var t=e.reverse,a=void 0!==t&&t,s=e.images,c=e.text,n=e.textTitle,o=e.font,r=e.website,i=e.keywords;return Object(j.jsxs)("div",{className:"d-flex projectStrip",children:[a?null:Object(j.jsx)(M,{images:s,website:r,classname:"col-12 col-xl-6 imageBox"}),Object(j.jsxs)(R,{children:[Object(j.jsx)(C,{font:o,title:n}),Object(j.jsx)(F,{blurb:c}),Object(j.jsx)(D,{}),Object(j.jsx)(B,{keywords:i})]}),a?Object(j.jsx)(M,{images:s,website:r,classname:"col-12 col-xl-6 imageBox"}):null]})}function E(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(L,{images:[x,g,p],text:"A MERN fullstack application with user subscription and token authorization that integrates Socket.IO live data emission and draggable element UI to simulate a live DnD Dungeon Master board. All wrapped in that nostalgic wood-paneled visual to bring us back to DnD'ing in mom's basement.",textTitle:"Dungeon Map!",reverse:!1,font:{family:"dungeonFont",fontSize:"40px"},website:["https://thedungeonmap.herokuapp.com/login"],keywords:["MERN","NodeJs","Express","React","React-Router","React Hooks","Bootstrap","Socket.IO","Token Authentication","MongoDB","Mongoose","Image Scaling","Draggable Elements","Chat Functionality"]}),Object(j.jsx)(L,{images:[O,f,v],text:"This is a currency converter app",textTitle:"TravelMoney",reverse:window.innerWidth>1200,font:{fontSize:"30px"},website:["https://powerful-tor-29629.herokuapp.com/"],keywords:["Frontend","React","React Legacy","React-Router","Bootstrap","API Requests","Wikipedia"]}),Object(j.jsx)(L,{images:[y,N,w],text:"This is a to-do app",textTitle:"Dawdlist",reverse:!1,font:{family:"grutchFont",fontSize:"40px"},website:["https://dawdlist.netlify.app/"],keywords:["JQuery","DOM Manipulation","Bootstrap","HTTP Polling"]})]})}var P=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"projectsRow row",children:Object(j.jsx)(h,{title:"My Projects",margin:"mb-5"})}),Object(j.jsx)("div",{className:"projectContainer row",children:Object(j.jsx)(E,{})})]})},z=a(32),A=a(34),H=a(33),J=a(21),q=a(3),_=a.p+"static/media/Travis_Taiwan.c9def77b.jpg",W=function(e){var t=e.type,a=e.typeIcon,s=e.children,c=e.iconStyles,n=void 0===c?"":c,o=e.headerStyles,r=void 0===o?"":o,i=e.containerStyles,l=void 0===i?"":i;return console.log(typeof a),Object(j.jsxs)("div",{className:"stackContainer ".concat(l),children:[Object(j.jsxs)("div",{className:"stackHeader ".concat(r),children:[Object(j.jsx)("div",{id:t,className:"displayIcon",children:"string"===typeof a?Object(j.jsx)("img",{className:"imageSpecial",alt:"my face",src:a}):a}),Object(j.jsx)("h3",{className:"ps-1 mt-2",children:t})]}),Object(j.jsx)("div",{className:"iconBox iconSource d-flex ".concat(n),children:s})]})};var Q=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"aboutMeRow row",children:[Object(j.jsx)(h,{title:"About Me",margin:"my-0",children:Object(j.jsxs)("p",{className:"mb-0",children:[Object(j.jsx)("span",{style:{color:"rgb(238, 146, 34)"},className:"specialText",children:" web developer"}),Object(j.jsx)("span",{style:{fontSize:"20px"},children:" | "}),Object(j.jsx)("span",{style:{color:"rgb(238, 101, 89) "},className:"specialText",children:" devising artist"})]})}),Object(j.jsxs)("div",{className:" col-md-12 col-lg-6 aboutTextBox mb-5",children:["\xa0\xa0\xa0\xa0\xa0My name is Travis Draper. I am a devising artist and web developer living and working out of Durham, North Carolina. My history with devising and theatrical performance stretches back over a decade, but my work with web development began more recently in early 2020. My study began as a curiosity about the work, inspired by both my undergraduate history with STEM and my web developer friends. I\u2019ve discovered, however, that development offers just as much fulfillment, frustration, and creative outlet as devising an original piece of theatre. The integration and ultimate coalescence of the front and back ends, 3rd party libraries, frameworks, and APIs do spark a genuinely wonderful performance. Banging your head against a wall for three hours to solve a problem before having that ",Object(j.jsx)("span",{className:"noselect Aha",style:{color:"rgb(232, 110, 128)"},children:"\u201cAha!\u201d "})," moment gives the same rush -- and bruises -- as figuring out the final beat of an act two climax.  It\u2019s good work. It\u2019s hard work. That\u2019s what makes web development fulfilling work.",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"\xa0\xa0\xa0\xa0\xa0Since finding my passion for development, I've put everything I have into learning this field and developing my coding sense. After completing two fullstack training courses and creating multiple projects, including an original self-led MERN stack project, I feel ready to present this portfolio as an an ever growing work-in-progress. As a lover of learning and a student of failure, I\u2019m proud to share these applications with you. I feel they represent my self-taught journey from nothing to a confident humility and showcase my hobbies and curiosities. Enjoy at your leisure. If you\u2019d like to ask any questions regarding these projects, my history of collaborative building, or working with your team, feel free to drop a line ",Object(j.jsx)(r.b,{to:"/Contact",className:"aboutTextLink",children:"here"}),". Thanks!",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"signature",children:["Programmatically Yours,",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{style:{color:"rgb(233, 128, 0)",fontWeight:"600"},children:"Travis"})]})]}),Object(j.jsx)("div",{className:"mb-5 mb-lg-0 col-md-12 col-lg-6 taiwanBox",children:Object(j.jsx)("img",{alt:"Travis Draper in Taiwan",className:"taiwanPhoto img-fluid",src:_})}),Object(j.jsx)("hr",{className:"lineRest"})]}),Object(j.jsxs)("div",{className:"iconRow row",children:[Object(j.jsx)(h,{title:"My Tech Stack",children:Object(j.jsx)("hr",{size:"10",className:"lineBreak mb-5"})}),Object(j.jsxs)(W,{type:"Frontend",typeIcon:Object(j.jsx)(z.a,{}),iconStyles:"mb-5",children:[Object(j.jsx)(J.a,{title:"HTML5",className:"icon",color:"rgb(227, 76, 38)"}),Object(j.jsx)(q.b,{title:"CSS3",className:"icon",color:"rgb(38, 77, 228)"}),Object(j.jsx)(q.d,{title:"Javascript",className:"icon",style:{backgroundColor:"rgb(50, 51, 48)",color:"rgb(240,219,79)"}}),Object(j.jsx)(q.f,{title:"jQuery",className:"icon",color:"rgb(0, 109, 176)"}),Object(j.jsx)(u.e,{title:"React",className:"icon",color:"rgb(97, 219, 251)"}),Object(j.jsx)(q.h,{title:"Redux",className:"icon",color:"rgb(118, 74, 188)"}),Object(j.jsx)(q.j,{title:"Typescript",className:"icon",color:"rgb(0, 122, 204)"})]}),Object(j.jsxs)(W,{type:"Backend",typeIcon:Object(j.jsx)(H.a,{}),iconStyles:"mb-5",children:[Object(j.jsx)(u.d,{title:"Nodejs",className:"icon",color:"rgb(60, 135, 58)"}),Object(j.jsx)(q.g,{title:"MongoDB",className:"icon",color:"rgb(77, 179, 61)"}),Object(j.jsx)(q.c,{title:"GraphyQl",className:"icon",color:"rgb(229, 53, 171)"}),Object(j.jsx)(q.i,{title:"Socket.IO",className:"icon"})]}),Object(j.jsxs)(W,{type:"Tools",typeIcon:Object(j.jsx)(A.a,{}),iconStyles:"mb-5",children:[Object(j.jsx)(q.a,{title:"Bootstrap",className:"icon",color:"rgb(86, 61, 124)"}),Object(j.jsx)(q.e,{title:"Jest",className:"icon",color:"rgb(153, 66, 91)"})]})]})]})},G=[[Object(j.jsx)(J.a,{title:"HTML5",className:"homeIcon",color:"rgb(227, 76, 38)"},0),Object(j.jsx)(q.b,{className:"homeIcon",title:"CSS3",color:"rgb(38, 77, 228)"},1),Object(j.jsx)(q.d,{className:"homeIcon",title:"Javascript",style:{backgroundColor:"rgb(50, 51, 48)",color:"rgb(240,219,79)"}},2),Object(j.jsx)(u.e,{className:"homeIcon",title:"React",color:"rgb(97, 219, 251)"},3),Object(j.jsx)(u.d,{title:"Nodejs",className:"homeIcon",color:"rgb(60, 135, 58)"},4),Object(j.jsx)(q.g,{title:"MongoDB",className:"homeIcon",color:"rgb(77, 179, 61)"},5),Object(j.jsx)(q.i,{title:"Socket.IO",className:"homeIcon"},6),Object(j.jsx)(q.a,{title:"Bootstrap",className:"homeIcon",color:"rgb(86, 61, 124)"},7)],[Object(j.jsx)(J.a,{title:"HTML5",className:"homeIcon",color:"rgb(227, 76, 38)"},0),Object(j.jsx)(q.b,{className:"homeIcon",title:"CSS3",color:"rgb(38, 77, 228)"},1),Object(j.jsx)(q.d,{className:"homeIcon",title:"Javascript",style:{backgroundColor:"rgb(50, 51, 48)",color:"rgb(240,219,79)"}},2),Object(j.jsx)(u.e,{className:"homeIcon",title:"React",color:"rgb(97, 219, 251)"},3),Object(j.jsx)(q.a,{title:"Bootstrap",className:"homeIcon",color:"rgb(86, 61, 124)"},4)],[Object(j.jsx)(J.a,{title:"HTML5",className:"homeIcon",color:"rgb(227, 76, 38)"},0),Object(j.jsx)(q.b,{className:"homeIcon",title:"CSS3",color:"rgb(38, 77, 228)"},1),Object(j.jsx)(q.d,{className:"homeIcon",title:"Javascript",style:{backgroundColor:"rgb(50, 51, 48)",color:"rgb(240,219,79)"}},2),Object(j.jsx)(q.f,{title:"jQuery",className:"homeIcon",color:"rgb(0, 109, 176)"},3),Object(j.jsx)(q.a,{title:"Bootstrap",className:"homeIcon",color:"rgb(86, 61, 124)"},4)]],U=function(e){var t=e.title,a=e.style,s=e.type,c=void 0===s?"":s,n=e.children;return Object(j.jsxs)("div",{style:a,className:"homeProjectContainer ".concat(c),children:[Object(j.jsx)("h1",{className:"homeHeader",children:t}),n]})};var X=function(){return Object(s.useEffect)((function(){var e=document.getElementById("navbar");return e.style.paddingBottom="400px",function(){e.style.paddingBottom="200px"}}),[]),Object(j.jsx)("div",{className:"container-fluid",children:Object(j.jsxs)("div",{className:"homeRow row",children:[Object(j.jsx)(h,{title:"",margin:"mb-3"}),Object(j.jsxs)("div",{className:"col-s-12 col-md-10 col-lg-12 landingBox d-flex",children:[Object(j.jsx)(W,{containerStyles:"imageStack",typeIcon:_}),Object(j.jsxs)("p",{className:"col-10 col-xl-12 landingGreeting",children:["I'm ",Object(j.jsx)("span",{className:"boldBig",children:"Travis Draper"}),",",Object(j.jsx)("br",{})," a full stack web designer, theater artist, and puppeteer from Durham, NC."]})]}),Object(j.jsxs)(U,{type:"projectStack col-12 col-xl-4 fadeLeft",children:[Object(j.jsxs)(W,{type:"Frontend",typeIcon:Object(j.jsx)(z.a,{}),iconStyles:"col-5",children:[Object(j.jsx)(J.a,{title:"HTML5",className:"icon",color:"rgb(227, 76, 38)"}),Object(j.jsx)(q.b,{title:"CSS3",className:"icon",color:"rgb(38, 77, 228)"}),Object(j.jsx)(q.d,{title:"Javascript",className:"icon",style:{backgroundColor:"rgb(50, 51, 48)",color:"rgb(240,219,79)"}}),Object(j.jsx)(q.f,{title:"jQuery",className:"icon",color:"rgb(0, 109, 176)"}),Object(j.jsx)(u.e,{title:"React",className:"icon",color:"rgb(97, 219, 251)"}),Object(j.jsx)(q.h,{title:"Redux",className:"icon",color:"rgb(118, 74, 188)"}),Object(j.jsx)(q.j,{title:"Typescript",className:"icon",color:"rgb(0, 122, 204)"})]}),Object(j.jsxs)(W,{type:"Backend",typeIcon:Object(j.jsx)(H.a,{}),children:[Object(j.jsx)(u.d,{title:"Nodejs",className:"icon",color:"rgb(60, 135, 58)"}),Object(j.jsx)(q.g,{title:"MongoDB",className:"icon",color:"rgb(77, 179, 61)"}),Object(j.jsx)(q.c,{title:"GraphyQl",className:"icon",color:"rgb(229, 53, 171)"}),Object(j.jsx)(q.i,{title:"Socket.IO",className:"icon"})]}),Object(j.jsxs)(W,{type:"Tools",typeIcon:Object(j.jsx)(A.a,{}),headerStyles:"ps-xl-5",children:[Object(j.jsx)(q.a,{title:"Bootstrap",className:"icon",color:"rgb(86, 61, 124)"}),Object(j.jsx)(q.e,{title:"Jest",className:"icon",color:"rgb(153, 66, 91)"})]})]}),Object(j.jsx)(U,{type:"projectPeak fadeRight col-10 col-xl-7 ",children:Object(j.jsx)(M,{images:[x,O,y],website:["https://thedungeonmap.herokuapp.com/login","https://powerful-tor-29629.herokuapp.com/","https://dawdlist.netlify.app/"],icons:G,classname:"imageBox imageBoxHome"})})]})})},Z=[{title:"MERN Stackin' DnD Map with Socket.IO",content:Object(j.jsxs)("p",{children:["\xa0\xa0\xa0\xa0\xa0Diving into work on my web app ",Object(j.jsx)(r.b,{className:"aboutTextLink",to:"/Projects",children:Object(j.jsx)("i",{children:"Dungeon Map!"})})," was initially a rehashing of a project I built early on in the pandemic of 2020. My friends and I had to swap over to Discord for our biweekly Dungeons & Dragons sessions. That humble project, inspired by our Dungeon Master saying Beyond20's map interface was too convoluted, can be found ",Object(j.jsx)("a",{className:"aboutTextLink",rel:"noreferrer",href:"https://dungeonmap.netlify.app/",target:"_blank",children:"here"}),". It was my first attempt at building an original web application with zero guidance. I used the only tools I had in my belt at the time -- Bootstrap and JQuery -- to tape together a site that utilized draggable elements and HTTP polling in order to replicate the online feel of a live Dungeon Master board.",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"\xa0\xa0\xa0\xa0\xa0Fast-forward to July of 2021, and I chose to give the application a complete rebuild. I knew I could make an entirely ",Object(j.jsx)("i",{children:"new"})," project with a different purpose, but my original Dungeon Map was a gift to a friend, and I felt like I had more to give. By this point, too, I had certainly acquired a lot more skills. My superordinate goal was to maintain that ",Object(j.jsx)("span",{className:"textFlavor",children:"simple UI"})," in order to create an ",Object(j.jsx)("span",{className:"textFlavor",children:"easy-to-use UX"}),". After all, the original gift was a simple map tool for a friend. I wanted to expand it, however, so other dungeon masters could use the tool which meant establishing a database and login functionality. Get in here ",Object(j.jsx)("span",{className:"textFlavor",children:"MongoDB"}),". Furthermore, I wanted a dungeon master to be able to use this thing on their phone, so that even if they took a road trip they might still engage in remote play with their friends. Okay, so add a goal of ",Object(j.jsx)("span",{className:"textFlavor",children:"complete mobile-responsiveness"})," to the list. Not only that, but if they were hosting a session on their phone, the dungeon master couldn't just be tabbing in and out of the app to send a message, so I needed to add ",Object(j.jsx)("span",{className:"textFlavor",children:"live chat functionality"})," to the build...",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(j.jsxs)("i",{children:[Object(j.jsx)("a",{style:{fontWeight:"400"},className:"textFlavor",rel:"noreferrer",href:"https://socket.io/",target:"_blank",children:"Socket.IO"})," has entered the chat..."]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"\xa0\xa0\xa0\xa0\xa0We'll throw on top of that ",Object(j.jsx)("span",{className:"textFlavor",children:"React, Nodejs, Express"})," and that's the soup we have simmering."]}),date:"August 3rd, 2021",id:1},{title:"Working with React and Class Components",content:Object(j.jsx)("p",{children:"TravelMoney"}),date:"June 3rd, 2021",id:2},{title:"To-Do's and old school polling",content:Object(j.jsx)("p",{children:"Dawdlist"}),date:"April 22nd, 2021",id:3}],Y=function(e){var t=e.rotate;return Object(j.jsx)("div",{title:"Click to read more",className:"blogArrow ",children:Object(j.jsx)(u.c,{className:"blogArrowIcon ".concat(t?"":"rotate")})})},$=function(e){var t=e.color,a=e.date;return Object(j.jsx)("div",{style:{backgroundColor:"".concat("rgb(0, 143, 149)"===t?"rgb(233, 128, 0)":"rgb(0, 143, 149)")},className:"noselect col-1 dateBox",children:a})},K=function(e){var t=e.title,a=e.color,s=e.rotate,c=e.date;return Object(j.jsxs)("div",{className:"blogTitle pt-2 d-flex",style:{backgroundColor:a},children:[Object(j.jsx)("p",{className:"blogTitleText col-10 my-0",children:t}),Object(j.jsx)($,{color:a,date:c}),Object(j.jsx)(Y,{rotate:s})]})},V=function(e){var t=e.content,a=e.rotate;return Object(j.jsx)("div",{className:"blogContent ".concat(a?"expanded":"hidden"),children:t})};function ee(e){var t=e.content,a=e.title,c=e.color,n=e.date,o=Object(s.useState)(!1),r=Object(l.a)(o,2),i=r[0],b=r[1];return Object(j.jsxs)("div",{onClick:function(){return b(!i)},className:"col-12 blogEntry",children:[Object(j.jsx)(K,{rotate:i,title:a,color:c,date:n}),Object(j.jsx)(V,{rotate:i,content:t})]})}function te(e){var t=e.blogs;return Object(j.jsx)(j.Fragment,{children:t.map((function(e,t){return Object(j.jsx)(ee,{color:t%2===0?"rgb(0, 143, 149)":"rgb(233, 128, 0)",title:e.title,content:e.content,date:e.date},e.id)}))})}var ae=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"blogRow row",children:[Object(j.jsx)(h,{title:"Working Blog",margin:"mb-5"}),Object(j.jsx)(te,{blogs:Z})]})})},se=a(24);var ce=function(){return Object(j.jsxs)("div",{id:"footer",className:"row",children:[Object(j.jsx)("div",{className:"webIcon ",children:Object(j.jsx)("a",{href:"#",className:"github",target:"_blank",children:Object(j.jsx)(se.a,{})})}),Object(j.jsx)("div",{className:"webIcon ",children:Object(j.jsx)("a",{href:"#",className:"linkedIn",target:"_blank",children:Object(j.jsx)(se.b,{})})}),Object(j.jsx)("div",{className:"webIcon ",children:Object(j.jsx)(r.b,{to:"/Contact",className:"mail",children:Object(j.jsx)(se.c,{})})})]})},ne=a(35),oe=(a(83),a(69)),re=a(46);function ie(){var e=Object(s.useState)("000000"),t=Object(l.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)("Message"),o=Object(l.a)(n,2),r=o[0],i=o[1],b=Object(oe.a)(),d=b.register,m=b.handleSubmit,h=b.formState.errors,u=function(){var e="000000"+(1e6*Math.random()|0);c(e.substring(e.length-6))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{id:"statusMessage",className:"status-message",children:r}),Object(j.jsxs)("form",{id:"contactMeForm",className:"col-11 emailForm",onSubmit:m((function(e){var t=document.getElementById("contactMeForm"),a=document.getElementById("statusMessage");u(),Object(re.b)("default_service","template_ktdvhxs","#contactMeForm").then((function(e){t.reset(),i("Message sent!"),a.className="status-message success",setTimeout((function(){a.className="status-message"}),5e3)})).catch((function(e){i("Failed to send message! Please try again later."),a.className="status-message failure",setTimeout((function(){a.className="status-message"}),5e3)}))})),children:[Object(j.jsx)("input",{type:"hidden",name:"contact_number",value:a}),h.username&&"required"===h.username.type&&Object(j.jsx)("div",{className:"issue mt-4 ",role:"alert",children:"Name is required"}),h.username&&"minLength"===h.username.type&&Object(j.jsx)("div",{className:"issue mt-4 ",role:"alert",children:"Please use full name"}),Object(j.jsxs)("label",{htmlFor:"username",className:"formLabel",children:["Name",Object(j.jsx)("span",{className:"accent",children:":"})]}),Object(j.jsx)("input",Object(ne.a)({name:"username",id:"username",className:"usernameInput",type:"text"},d("username",{required:!0,minLength:"5"}))),h.email&&"required"===h.email.type&&Object(j.jsx)("div",{className:"issue mt-4 ",role:"alert",children:"Email is required"}),h.email&&"validate"===h.email.type&&Object(j.jsx)("div",{className:"issue mt-4 ",role:"alert",children:"Please enter valid email"}),Object(j.jsxs)("label",{htmlFor:"emailInput",className:"mt-4 formLabel",children:["Email Address",Object(j.jsx)("span",{className:"accent",children:":"})]}),Object(j.jsx)("input",Object(ne.a)({name:"email",id:"emailInput",className:"emailInput"},d("email",{required:!0,validate:function(e){return/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(e)}}))),h.emailContent&&"required"===h.emailContent.type&&Object(j.jsx)("div",{className:"issue mt-4 ",role:"alert",children:"Please write a message"}),h.emailContent&&"minLength"===h.emailContent.type&&Object(j.jsx)("div",{className:"issue mt-4 ",role:"alert",children:"Please write more"}),Object(j.jsxs)("label",{htmlFor:"contentInput",className:"mt-4 formLabel",children:["Message",Object(j.jsx)("span",{className:"accent",children:":"})]}),Object(j.jsx)("textarea",Object(ne.a)({name:"emailContent",id:"contentInput",style:{resize:"none"},type:"text",className:"contentArea ",placeholder:"How can I help you?"},d("emailContent",{required:!0,minLength:"10"}))),Object(j.jsx)("button",{type:"submit",className:"formSubmitButton mt-4",children:"Send"})]})]})}Object(re.a)("user_vD4eEJLC3HZB2ZNi1Eehq");var le=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"contactRow row",children:[Object(j.jsx)(h,{title:"Contact Me",margin:"mb-3"}),Object(j.jsx)(ie,{})]})})};function je(){return Object(j.jsx)("div",{children:"NOT FOUND!"})}function be(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{path:"/About",component:Q}),Object(j.jsx)(i.a,{path:"/Projects",component:P}),Object(j.jsx)(i.a,{path:"/Blog",component:ae}),Object(j.jsx)(i.a,{path:"/Contact",component:le}),Object(j.jsx)(i.a,{component:je})]})})}var de=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(m,{}),Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{exact:!0,path:"/",component:X}),Object(j.jsx)(be,{})]}),Object(j.jsx)(ce,{})]})};var me=function(){return Object(j.jsx)(r.a,{basename:"/tdraper.dev",children:Object(j.jsx)(de,{})})},he=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,144)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,o=t.getTTFB;a(e),s(e),c(e),n(e),o(e)}))};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(me,{})}),document.getElementById("root")),he()},75:function(e,t,a){},76:function(e,t,a){}},[[143,1,2]]]);
//# sourceMappingURL=main.5493800a.chunk.js.map