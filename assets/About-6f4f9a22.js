import{F as a,j as e,S as r,g as n,A as c,h as d,L as m,i as h,k as x,l as u,N as p,C as g,P as b,r as y,M as j,n as f}from"./index-14fa09f1.js";import{P as w}from"./PageHero-ba77276f.js";const v=[{description:"I can say your dedication is second to none. I like the fact that you are strongly proud of your work in every way.",name:"Sally Ramsey",role:"Reporter",img:"about/employee-1.webp"},{description:"This has already been my fifth-time purchasing their theme. I have been highly satisfied with their work.",name:"Lois Thompson",role:"Actor",img:"about/employee-2.webp"},{description:"There's nothing would satisfy me much more than a worry-free clean and responsive theme for my high-traffic site.",name:"Florence Pittman",role:"Model",img:"about/employee-3.webp"},{description:"Five-star for good customer support. They have the ability to resolve any issue in less than the time for a coffee cup.",name:"Anais Coulon",role:"Model",img:"about/employee-4.webp"}],N=[{contact:"ADDRESS",info:"1800 Abbot Kinney Blvd. Unit D & E Venice"},{contact:"PHONE",info:"Mobile: (+20) – 2000"},{contact:"EMAIL",info:"contact@osama.com"}],C=["about/logos/logo-1.webp","about/logos/logo-2.webp","about/logos/logo-3.webp","about/logos/logo-4.webp","about/logos/logo-5.webp","about/logos/logo-6.webp"];function S(){return e.jsx(O,{children:e.jsxs("div",{className:"mx-auto 2xl:w-[65%] xl:w-[80%] lg:w-[90%] md:w-[95%] container space-y-16",children:[e.jsx("h1",{className:"text-3xl text-center sm:text-5xl",children:"Testimonial"}),e.jsx(k,{})]})})}const k=()=>e.jsx(r,{...A,children:v.map(({description:t,name:s,role:i,img:o})=>e.jsx(n,{children:e.jsxs("div",{className:"grid grid-rows-2 space-y-10",children:[e.jsx("h1",{className:"font-semibold leading-loose text-lightGray",children:t}),e.jsxs("div",{className:"flex gap-x-4",children:[e.jsx("img",{src:o,loading:"lazy",className:"w-16 h-16 rounded-full",alt:i}),e.jsxs("div",{className:"font-semibold",children:[e.jsx("h1",{className:"font-bold",children:s}),e.jsxs("h1",{className:"text-lightGray",children:["/ ",i]})]})]})]})},s))}),A={centeredSlides:!0,spaceBetween:40,loop:!0,grabCursor:!0,autoplay:{delay:2e3},breakpoints:{1024:{slidesPerView:3},764:{slidesPerView:2}},modules:[c]},O=a.div`
py-28
bg-[url('/about/testimonials-bg.webp')]
`;function P(){const{onOpen:t,isOpen:s,onClose:i}=d();return e.jsxs(L,{children:[e.jsx(l,{className:"md:-left-6 rotate-[-90deg]",children:"link"}),e.jsxs(T,{children:[e.jsx("div",{className:"absolute h-full img-wrapper -z-10",children:e.jsx(m,{effect:!0,src:"about/video-thumbnail.webp",styles:"h-full -z-10"})}),e.jsx("button",{"aria-label":"open-video-modal",onClick:t,className:"hover:[&>svg]:scale-125 sm:text-8xl text-4xl",children:e.jsx(h,{})}),e.jsx("h1",{className:"tracking-widest",children:" OUR STORY"})]}),e.jsx(l,{className:"rotate-[90deg] md:-right-6 right-0",children:"link"}),e.jsxs(x,{onOpen:t,isOpen:s,onClose:i,children:[e.jsx("div",{className:"relative"}),e.jsx("button",{"aria-label":"close-video-modal",onClick:i,className:"absolute right-0 text-4xl text-white -top-12",children:e.jsx(u,{})}),e.jsx("div",{className:"h-[70vh]",children:e.jsx("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/QX43QTYyV-8?autoplay=1&quality=low",title:"im sorry",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})})]})]})}const l=a.button`
opinter
text-lightGray
hover:text-black
scale-125
transition-all
absolute
top-1/2
-translate-y-1/2
`,T=a.div`
relative
h-full 
w-full
flex 
flex-col
gap-y-10
sm:text-5xl
text-4xl
text-white
items-center
justify-center
[&>.img-wrapper]:brightness-75
[&>.img-wrapper]:transition-all
[&>.img-wrapper]:hover:!brightness-100
`,L=a.div`
my-1
relative 
flex 
items-center 
gap-x-6 
h-[80dvh]
`;function B(){return e.jsxs(p,{children:[e.jsx(w,{title:"About Us",children:e.jsx("h1",{className:"text-lightGray",children:"About"})}),e.jsx(E,{})]})}const E=()=>e.jsxs(e.Fragment,{children:[e.jsxs(g,{children:[e.jsx("h1",{className:"text-[#333333] text-center font-semibold",children:"SIMPLY OR WHITE"}),e.jsx(b,{title:"Clever & unique ideas"}),e.jsx(P,{}),e.jsx(M,{})]}),e.jsx(S,{}),e.jsx(I,{})]}),I=()=>e.jsxs("div",{className:"my-32 space-y-20 text-center",children:[e.jsx("h1",{className:"text-3xl sm:text-5xl",children:"Our Brands"}),e.jsx(R,{children:C.map((t,s)=>e.jsx("li",{className:"flex justify-center",children:e.jsx("img",{src:t,className:"w-24 sm:w-auto",loading:"lazy",alt:"brand-"+s})},s))})]}),M=()=>e.jsxs("div",{className:"grid gap-x-4 gap-y-12 md:grid-cols-2",children:[e.jsx("ul",{className:"space-y-6 text-sm font-semibold",children:N.map(({contact:t,info:s},i)=>e.jsxs(y.Fragment,{children:[e.jsx("li",{children:t}),e.jsx("li",{className:"text-lightGray",children:s})]},i))}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("h1",{className:"font-semibold leading-loose text-lightGray",children:"Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse suscipit sagittis leo sit estibulum issim Lorem ipsum dolor sit amet, consectetur cing elit. ipsum dolor sit amet, consectetur cing elit. Suspe ndisse suscipit sagittis leo sit es"}),e.jsx(j,{children:e.jsx(f,{to:"/shop",children:"+ ONLINE STORE"})})]})]}),R=a.div`
grid 
items-center 
md:grid-cols-6 
grid-cols-3

space-y-2 
justify-evenly 
lg:gap-x-20
sm:gap-x-10 
`;export{B as default};
