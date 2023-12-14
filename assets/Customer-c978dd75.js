import{F as o,r as i,j as e,R as l,M as j,N as b,C as y}from"./index-28b5ef4f.js";import{P as C}from"./PageHero-fddd23c3.js";function c(t){const{bg:x,title:m,text:d,btn:p,children:u}=t,[h,g]=i.useState({}),a=i.useRef([]),f=s=>{s.preventDefault(),a.current.map(n=>{g(r=>({...r,[n.name]:n.value}))}),console.log(h)};return e.jsxs(v,{className:x,children:[e.jsx("h1",{className:"text-4xl",children:m}),e.jsx("h1",{className:"text-lightGray",children:d}),e.jsxs("form",{onSubmit:f,className:"flex w-[80%] flex-col",children:[e.jsx(N,{children:l.Children.map(u,(s,n)=>l.cloneElement(s,{ref:r=>a.current[n]=r}))}),e.jsx(j,{children:e.jsx("button",{children:p})})]})]})}const v=o.div`
p-10
flex
flex-col
items-center
space-y-12
`,N=o.div`
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
`;function k(){return e.jsxs(b,{children:[e.jsx(C,{title:"Customer Login",children:e.jsx("h1",{className:"text-lightGray",children:"Register & Login"})}),e.jsxs(y,{children:["im still working on it mate:)",e.jsxs(E,{children:[e.jsx(R,{}),e.jsx(w,{})]})]})]})}const R=()=>{const t={bg:"bg-[#f7f7f7]",title:"Login",text:"Good to have you back!",btn:"LOGIN"};return e.jsxs(c,{...t,children:[e.jsx("input",{name:"name",type:"text",placeholder:"Username or email address"}),e.jsx("input",{name:"password",type:"text",placeholder:"Password"})]})},w=()=>{const t={bg:"",title:"Register",text:"If you don’t have an account, register now!",btn:"CREATE ACCOUNT"};return e.jsxs(c,{...t,children:[e.jsx("input",{name:"name",type:"text",placeholder:"Username"}),e.jsx("input",{name:"email",type:"text",placeholder:"Email address"}),e.jsx("input",{name:"password",type:"text",placeholder:"Password"})]})},E=o.div`
grid 
md:grid-cols-2
gap-y-8
lg:gap-x-20
gap-x-3
`;export{k as default};
