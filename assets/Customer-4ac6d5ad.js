import{F as a,r as i,j as e,R as l,M as j,N as g,C as b}from"./index-993e3273.js";import{P as y}from"./PageHero-43f31543.js";function c(t){const{bg:x,title:m,text:d,btn:p,children:u}=t,[E,h]=i.useState({}),o=i.useRef([]),f=s=>{s.preventDefault(),o.current.map(n=>{h(r=>({...r,[n.name]:n.value}))})};return e.jsxs(C,{className:x,children:[e.jsx("h1",{className:"text-4xl",children:m}),e.jsx("h1",{className:"text-lightGray",children:d}),e.jsxs("form",{onSubmit:f,className:"flex w-[80%] flex-col",children:[e.jsx(v,{children:l.Children.map(u,(s,n)=>l.cloneElement(s,{ref:r=>o.current[n]=r}))}),e.jsx(j,{children:e.jsx("button",{children:p})})]})]})}const C=a.div`
p-10
flex
flex-col
items-center
space-y-12
`,v=a.div`
[&>input]:outline-none
[&>input]:border-b-2
[&>input]:bg-transparent
[&>input:hover]:border-black
[&>input:focus]:border-black
flex 
flex-col
gap-y-14
mt-8
mb-16
`;function k(){return e.jsxs(g,{children:[e.jsx(y,{title:"Customer Login",children:e.jsx("h1",{className:"text-lightGray",children:"Register & Login"})}),e.jsxs(b,{children:["im still working on it mate:)",e.jsxs(w,{children:[e.jsx(N,{}),e.jsx(R,{})]})]})]})}const N=()=>{const t={bg:"bg-[#f7f7f7]",title:"Login",text:"Good to have you back!",btn:"LOGIN"};return e.jsxs(c,{...t,children:[e.jsx("input",{name:"name",type:"text",placeholder:"Username or email address"}),e.jsx("input",{name:"password",type:"text",placeholder:"Password"})]})},R=()=>{const t={bg:"",title:"Register",text:"If you don’t have an account, register now!",btn:"CREATE ACCOUNT"};return e.jsxs(c,{...t,children:[e.jsx("input",{name:"name",type:"text",placeholder:"Username"}),e.jsx("input",{name:"email",type:"text",placeholder:"Email address"}),e.jsx("input",{name:"password",type:"text",placeholder:"Password"})]})},w=a.div`
grid 
grid-cols-2
gap-x-20
`;export{k as default};
