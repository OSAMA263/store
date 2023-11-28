import{a0 as l,j as t,N as o,C as x,M as d,s as h,D as m,Y as j,F as T,a3 as f,a4 as u,a1 as C}from"./index-c5e3681c.js";import{P as g,T as i,a as r}from"./ProductsTable-c80daf8f.js";import{P as N}from"./PageHero-fe19a256.js";function w(){const{cart:e}=l(),s=Math.floor(e.reduce((n,a)=>n+a.price*a.QTY,0)).toLocaleString("en");return t.jsxs(o,{children:[t.jsx(N,{title:"My cart",children:t.jsx("h1",{className:"text-lightGray",children:"cart"})}),t.jsxs(x,{children:[t.jsx(g,{TBodyContent:Q,THeadContent:y,TFootContent:Y,products:e}),t.jsxs(b,{children:[t.jsx("h1",{className:"text-4xl font-medium",children:"Cart totals"}),t.jsxs("div",{className:"flex gap-y-5 items-center w-full justify-between ",children:[t.jsx("h1",{children:"SUBTOTAL:"}),t.jsxs("h1",{className:"text-4xl font-semibold",children:["$",s]})]}),t.jsx(d,{children:t.jsx(h,{to:"/checkout",className:"tracking-wider",children:"PROCEED TO CHECKOUT"})})]})]})]})}const y=()=>t.jsxs(t.Fragment,{children:[t.jsx(i,{children:"QUANTITY"}),t.jsx(i,{children:"TOTAL"})]}),Q=({product:e})=>{const s=m(),n=e.stock-(e.QTY??0),a=()=>{e.QTY===1?s(f(e.id)):s(u(e.id))},c=()=>{s(C({product:e}))};return t.jsxs(t.Fragment,{children:[t.jsx(r,{children:t.jsx(j,{cartMinus:a,cartPlus:c,cartQty:e.QTY,foundInCart:e,availableQTY:n})}),t.jsxs(r,{className:"font-semibold",children:["$",(e.QTY*e.price).toLocaleString("en")]})]})},Y=()=>t.jsx(t.Fragment,{children:t.jsx(r,{className:"text-xl font-bold text-thickRed"})}),b=T.div`
bg-[#f7f7f7] 
tracking-widest
py-10 
px-20 
flex 
flex-col
items-center
w-fit 
justify-between 
space-y-10
`;export{w as default};
