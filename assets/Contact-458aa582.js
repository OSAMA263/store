import{j as e,z as c,B as d,D as x,E as m,F as t,P as o,M as j,N as p,C as f}from"./index-f7601ce7.js";import{P as u}from"./PageHero-e5da8fe6.js";import"./index-cfe56cde.js";const h=[{title:"ADDRESS",content:[{icon:e.jsx(c,{}),info:["1800 Abbot Kinney Blvd. Unit D & E Venice"]}]},{title:"CONTACT",content:[{icon:e.jsx(d,{}),info:["Mobile: (+88) – 1990 – 6886","Hotline: 1800 – 1102"]},{icon:e.jsx(x,{}),info:["Mail: contact@okipull.com"]}]},{title:"HOUR OF OPERATION",content:[{icon:e.jsx(m,{}),info:["Sunday & Saturday: 10:30 – 22:00","Monday – Friday : 09:00 – 20:00"]}]}];function g(){return e.jsx(y,{children:h.map(({content:n,title:a})=>e.jsxs("div",{className:"space-y-6",children:[e.jsx("h1",{className:"font-semibold",children:a}),n.map(({icon:l,info:r},s)=>e.jsxs(C,{children:[e.jsx("div",{className:"text-2xl",children:l}),e.jsx("div",{children:r.map(i=>e.jsx("h1",{children:i},i+s))})]},"info"+s))]},a))})}const y=t.div`
grid
sm:grid-cols-3
grid-cols-1
gap-y-8
justify-between
gap-x-4
`,C=t.div`
flex
text-lightGray
gap-x-4
`;function M(){return e.jsxs(v,{children:[e.jsx(o,{title:"Get in touch",text:""}),e.jsxs(b,{onSubmit:n=>n.preventDefault(),children:[e.jsxs("div",{className:"flex gap-x-4",children:[e.jsx("input",{type:"text",name:"name",required:!0,autoComplete:"off",placeholder:"First Name *"}),e.jsx("input",{type:"email",name:"email",required:!0,autoComplete:"off",placeholder:"Email *"})]}),e.jsx("input",{type:"text",name:"subject",placeholder:"Subject",autoComplete:"off"}),e.jsx("textarea",{rows:6,name:"message",placeholder:"Message",autoComplete:"off"}),e.jsx(j,{children:e.jsx("button",{children:"SUBMIT"})})]})]})}const v=t.div`
text-center
[&_input]:w-full
[&_textarea]:w-full
`,b=t.form`
flex
flex-col
sm:gap-y-20
gap-y-6
`;function O(){return e.jsxs(p,{children:[e.jsx(u,{title:"Contact Us",children:e.jsx("h1",{className:"text-lightGray",children:"Contact"})}),e.jsxs(f,{children:[e.jsx(o,{title:"Contact detail",text:"COME HAVE A LOOK"}),e.jsx(g,{}),e.jsx(w,{}),e.jsx(M,{})]})]})}const w=()=>e.jsx("div",{className:"flex justify-center",children:e.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12075.373648696992!2d-74.084402!3d40.831403!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f866a80dcc27%3A0x3e3160910d4d5045!2sHoliday%20Inn%20Express%20%26%20Suites%20Meadowlands%20Area%2C%20an%20IHG%20Hotel!5e0!3m2!1sen!2seg!4v1699765025146!5m2!1sen!2seg",width:"100%",height:"600",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})});export{O as default};
