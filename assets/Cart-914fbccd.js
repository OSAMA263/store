import{e as l,j as t,N as o,C as x,M as d,y as m,h,a7 as j,F as T,a8 as f,a9 as u,a5 as C}from"./index-1cd7af32.js";import{P as g}from"./ProductsTable-695ab609.js";import{P as y}from"./PageHero-83e1823f.js";import{T as i,a as r}from"./chunk-MGVPL3OH-ca483806.js";import"./index-e9b69283.js";function F(){const{auth:e}=l(),s=Math.floor(e.cart.reduce((n,a)=>n+a.price*a.QTY,0)).toLocaleString("en");return t.jsxs(o,{children:[t.jsx(y,{title:"My cart",children:t.jsx("h1",{className:"text-lightGray",children:"cart"})}),t.jsxs(x,{children:[t.jsx(g,{TBodyContent:Q,THeadContent:N,TFootContent:b,products:e.cart}),t.jsxs(P,{children:[t.jsx("h1",{className:"sm:text-4xl text-lg font-medium",children:"Cart totals"}),t.jsxs("div",{className:"flex gap-y-5 items-center w-full justify-between ",children:[t.jsx("h1",{children:"SUBTOTAL:"}),t.jsxs("h1",{className:"sm:text-4xl font-semibold",children:["$",s]})]}),t.jsx(d,{children:t.jsx(m,{to:"/checkout",className:"tracking-wider",children:"PROCEED TO CHECKOUT"})})]})]})]})}const N=()=>t.jsxs(t.Fragment,{children:[t.jsx(i,{children:"QUANTITY"}),t.jsx(i,{children:"TOTAL"})]}),Q=({product:e})=>{const s=h(),n=e.stock-(e.QTY??0),a=()=>{e.QTY===1?s(f(e.id)):s(u(e.id))},c=()=>{s(C({product:e}))};return t.jsxs(t.Fragment,{children:[t.jsx(r,{children:t.jsx(j,{cartMinus:a,cartPlus:c,cartQty:e.QTY,foundInCart:e,availableQTY:n})}),t.jsxs(r,{className:"font-semibold",children:["$",(e.QTY*e.price).toLocaleString("en")]})]})},b=()=>t.jsx(t.Fragment,{children:t.jsx(r,{className:"text-xl font-bold text-thickRed"})}),P=T.div`
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
