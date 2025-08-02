import{Z as l,j as t,N as o,C as x,k as d,l as m,_ as h,a1 as j,F as T,a2 as f,a3 as u,$ as C}from"./index-b1778874.js";import{P as g}from"./ProductsTable-7729a522.js";import{P as N}from"./PageHero-b2c2d557.js";import{T as i,a as r}from"./chunk-MGVPL3OH-5ab86880.js";import"./index-36ef8543.js";function F(){const{auth:e}=l(),s=Math.floor(e.cart.reduce((n,a)=>n+a.price*a.QTY,0)).toLocaleString("en");return t.jsxs(o,{children:[t.jsx(N,{title:"My cart",children:t.jsx("h1",{className:"text-lightGray",children:"cart"})}),t.jsxs(x,{children:[t.jsx(g,{TBodyContent:Q,THeadContent:y,TFootContent:b,products:e.cart}),t.jsxs(P,{children:[t.jsx("h1",{className:"sm:text-4xl text-lg font-medium",children:"Cart totals"}),t.jsxs("div",{className:"flex gap-y-5 items-center w-full justify-between ",children:[t.jsx("h1",{children:"SUBTOTAL:"}),t.jsxs("h1",{className:"sm:text-4xl font-semibold",children:["$",s]})]}),t.jsx(d,{children:t.jsx(m,{to:"/checkout",className:"tracking-wider",children:"PROCEED TO CHECKOUT"})})]})]})]})}const y=()=>t.jsxs(t.Fragment,{children:[t.jsx(i,{children:"QUANTITY"}),t.jsx(i,{children:"TOTAL"})]}),Q=({product:e})=>{const s=h(),n=e.stock-(e.QTY??0),a=()=>{e.QTY===1?s(f(e.id)):s(u(e.id))},c=()=>{s(C({product:e}))};return t.jsxs(t.Fragment,{children:[t.jsx(r,{children:t.jsx(j,{cartMinus:a,cartPlus:c,cartQty:e.QTY,foundInCart:e,availableQTY:n})}),t.jsxs(r,{className:"font-semibold",children:["$",(e.QTY*e.price).toLocaleString("en")]})]})},b=()=>t.jsx(t.Fragment,{children:t.jsx(r,{className:"text-xl font-bold text-thickRed"})}),P=T.div`
bg-[#f7f7f7] 
tracking-widest
py-10 
px-20 
flex 
flex-col
items-center
md:w-fit 
justify-between 
space-y-10
`;export{F as default};
