import{a1 as e,j as t,N as d,C as h,D as x,M as j,a2 as u,a3 as m}from"./index-993e3273.js";import{P as C}from"./PageHero-43f31543.js";import{P as T,T as a,a as f}from"./ProductsTable-d7847509.js";function y(){const{wishlist:s}=e();return t.jsxs(d,{children:[t.jsx(C,{title:"My wishlist",children:t.jsx("h1",{className:"text-lightGray",children:"wishlist"})}),t.jsx(h,{children:t.jsx(T,{TBodyContent:A,THeadContent:p,TFootContent:g,products:s})})]})}const p=()=>t.jsxs(t.Fragment,{children:[t.jsx(a,{}),t.jsx(a,{})]}),A=({product:s})=>{const i=x(),{cart:r}=e(),n=r.find(l=>l.id===s.id),o={title:s.title,state:"cart",action:"add"},c=()=>{n||(i(u({product:s})),m(o))};return t.jsx(t.Fragment,{children:t.jsx(f,{children:t.jsx("span",{className:"flex justify-center",children:t.jsx(j,{children:t.jsx("button",{onClick:c,children:n?"ALREADY IN CART":"ADD TO CART"})})})})})},g=()=>null;export{y as default};