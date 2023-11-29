import{F as a,j as e,S as n,i as r,k as c,l as d,L as h,n as m,p as u,q as x,N as p,C as g,P as j,r as y,M as f,s as b}from"./index-bb20ff4f.js";import{P as v}from"./PageHero-1a90bcf1.js";const N=[{description:"I can say your dedication is second to none. I like the fact that you are strongly proud of your work in every way.",name:"Sally Ramsey",role:"Reporter",img:"/about/employee-1.png"},{description:"This has already been my fifth-time purchasing their theme. I have been highly satisfied with their work.",name:"Lois Thompson",role:"Actor",img:"/about/employee-2.png"},{description:"There's nothing would satisfy me much more than a worry-free clean and responsive theme for my high-traffic site.",name:"Florence Pittman",role:"Model",img:"/about/employee-3.png"},{description:"Five-star for good customer support. They have the ability to resolve any issue in less than the time for a coffee cup.",name:"Anais Coulon",role:"Model",img:"/about/employee-4.png"}],w=[{contact:"ADDRESS",info:"1800 Abbot Kinney Blvd. Unit D & E Venice"},{contact:"PHONE",info:"Mobile: (+20) – 2000"},{contact:"EMAIL",info:"contact@osama.com"}],C=["/about/logos/logo-1.png","/about/logos/logo-2.png","/about/logos/logo-3.png","/about/logos/logo-4.png","/about/logos/logo-5.png","/about/logos/logo-6.png"];function S(){return e.jsx(O,{children:e.jsxs("div",{className:"mx-auto w-[60%] space-y-16",children:[e.jsx("h1",{className:"text-5xl text-center",children:"Testimonial"}),e.jsx(k,{})]})})}const k=()=>e.jsx(n,{...A,children:N.map(({description:t,name:s,role:i,img:o})=>e.jsx(r,{children:e.jsxs("div",{className:"grid grid-rows-2 space-y-10",children:[e.jsx("h1",{className:"font-semibold leading-loose text-lightGray",children:t}),e.jsxs("div",{className:"flex gap-x-4",children:[e.jsx("img",{src:o,className:"w-16 h-16 rounded-full",alt:""}),e.jsxs("div",{className:"font-semibold",children:[e.jsx("h1",{className:"font-bold",children:s}),e.jsxs("h1",{className:"text-lightGray",children:["/ ",i]})]})]})]})},s))}),A={slidesPerView:3,centeredSlides:!0,spaceBetween:40,loop:!0,grabCursor:!0,autoplay:{delay:2e3},modules:[c]},O=a.div`
py-28
bg-[url('/about/testimonials-bg.png')]
`;function T(){const{onOpen:t,isOpen:s,onClose:i}=d();return e.jsxs(P,{children:[e.jsx(l,{className:"-left-10 rotate-[-90deg]",children:"link"}),e.jsxs(L,{children:[e.jsx("div",{className:"absolute img-wrapper -z-10 h-full",children:e.jsx(h,{effect:!0,src:"/about/video-thumbnail.png",styles:"h-full -z-10"})}),e.jsx("button",{onClick:t,className:"hover:[&>svg]:scale-125 text-8xl",children:e.jsx(m,{})}),e.jsx("h1",{className:"tracking-widest",children:" OUR STORY"})]}),e.jsx(l,{className:"rotate-[90deg] -right-10",children:"link"}),e.jsxs(u,{onOpen:t,isOpen:s,onClose:i,children:[e.jsx("div",{className:"relative"}),e.jsx("button",{onClick:i,className:"absolute -top-12 text-white right-0 text-4xl",children:e.jsx(x,{})}),e.jsx("div",{className:"h-[70vh]",children:e.jsx("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/QX43QTYyV-8?autoplay=1&quality=low",title:"im sorry",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})})]})]})}const l=a.button`
opinter
text-lightGray
hover:text-black
scale-125
transition-all
absolute
top-1/2
-translate-y-1/2
`,L=a.div`
relative
h-full 
w-full
flex 
flex-col
gap-y-10
text-5xl
text-white
items-center
justify-center
[&>.img-wrapper]:brightness-75
[&>.img-wrapper]:transition-all
[&>.img-wrapper]:hover:!brightness-100
`,P=a.div`
my-1
relative 
flex 
items-center 
gap-x-6 
h-[80dvh]
`;function G(){return e.jsxs(p,{children:[e.jsx(v,{title:"About Us",children:e.jsx("h1",{className:"text-lightGray",children:"About"})}),e.jsx(E,{})]})}const E=()=>e.jsxs(e.Fragment,{children:[e.jsxs(g,{className:"",children:[e.jsx("h1",{className:"text-[#333333] text-center font-semibold",children:"SIMPLY OR WHITE"}),e.jsx(j,{title:"Clever & unique ideas"}),e.jsx(T,{}),e.jsx(M,{})]}),e.jsx(S,{}),e.jsx(I,{})]}),I=()=>e.jsxs("div",{className:"my-32 space-y-20 text-center",children:[e.jsx("h1",{className:"text-5xl",children:"Our Brands"}),e.jsx("ul",{className:"flex justify-evenly gap-x-20",children:C.map((t,s)=>e.jsx("li",{children:e.jsx("img",{src:t,alt:"brand-"+s})},s))})]}),M=()=>e.jsxs("div",{className:"grid grid-cols-2 gap-x-28",children:[e.jsx("ul",{className:"space-y-6 text-sm font-semibold",children:w.map(({contact:t,info:s},i)=>e.jsxs(y.Fragment,{children:[e.jsx("li",{children:t}),e.jsx("li",{className:"text-lightGray",children:s})]},i))}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("h1",{className:"font-semibold leading-loose text-lightGray",children:"Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse suscipit sagittis leo sit estibulum issim Lorem ipsum dolor sit amet, consectetur cing elit. ipsum dolor sit amet, consectetur cing elit. Suspe ndisse suscipit sagittis leo sit es"}),e.jsx(f,{children:e.jsx(b,{to:"/shop",children:"+ ONLINE STORE"})})]})]});export{G as default};
