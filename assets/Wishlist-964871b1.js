import{e,j as t,N as d,C as h,h as x,M as u,a5 as j,a6 as m}from"./index-4c0e8422.js";import{P as C}from"./PageHero-fd4d88ee.js";import{P as T}from"./ProductsTable-8fc1472d.js";import{T as a,a as p}from"./chunk-MGVPL3OH-28fd16d3.js";import"./index-6223acf0.js";function w(){const{auth:s}=e();return t.jsxs(d,{children:[t.jsx(C,{title:"My wishlist",children:t.jsx("h1",{className:"text-lightGray",children:"wishlist"})}),t.jsx(h,{children:t.jsx(T,{TBodyContent:A,THeadContent:f,TFootContent:g,products:s.wishlist})})]})}const f=()=>t.jsxs(t.Fragment,{children:[t.jsx(a,{}),t.jsx(a,{})]}),A=({product:s})=>{const i=x(),{auth:r}=e(),n=r.cart.find(l=>l.id===s.id),o={title:s.title,state:"cart",action:"add"},c=()=>{n||(i(j({product:s})),m(o))};return t.jsx(t.Fragment,{children:t.jsx(p,{children:t.jsx("span",{className:"flex justify-center",children:t.jsx(u,{children:t.jsx("button",{onClick:c,children:n?"ALREADY IN CART":"ADD TO CART"})})})})})},g=()=>null;export{w as default};