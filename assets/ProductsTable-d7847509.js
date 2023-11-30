import{c as C,f as l,h as _,o as g,j as e,a as c,b as j,a6 as b,a7 as N,a8 as w,M as y,s as v,D as S,A as P,r as k,e as R,q as A,a4 as L,a9 as F,aa as W,ab as E,L as H,F as M}from"./index-993e3273.js";var[O,x]=C({name:"TableStylesContext",errorMessage:`useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" `}),p=l((s,a)=>{const t=_("Table",s),{className:r,layout:i,...o}=g(s);return e.jsx(O,{value:t,children:e.jsx(c.table,{ref:a,__css:{tableLayout:i,...t.table},className:j("chakra-table",r),...o})})});p.displayName="Table";var I=l((s,a)=>{const t=x();return e.jsx(c.thead,{...s,ref:a,__css:t.thead})}),u=l((s,a)=>{const t=x();return e.jsx(c.tr,{...s,ref:a,__css:t.tr})}),B=l((s,a)=>{var t;const{overflow:r,overflowX:i,className:o,...h}=s;return e.jsx(c.div,{ref:a,className:j("chakra-table__container",o),...h,__css:{display:"block",whiteSpace:"nowrap",WebkitOverflowScrolling:"touch",overflowX:(t=r??i)!=null?t:"auto",overflowY:"hidden",maxWidth:"100%"}})}),D=l((s,a)=>{const t=x();return e.jsx(c.tbody,{...s,ref:a,__css:t.tbody})}),m=l(({isNumeric:s,...a},t)=>{const r=x();return e.jsx(c.td,{...a,ref:t,__css:r.td,"data-is-numeric":s})}),G=l((s,a)=>{const t=x();return e.jsx(c.tfoot,{...s,ref:a,__css:t.tfoot})}),d=l(({isNumeric:s,...a},t)=>{const r=x();return e.jsx(c.th,{...a,ref:t,__css:r.th,"data-is-numeric":s})});function X(){const{pathname:s}=b();return e.jsxs("div",{className:"w-[60%] mx-auto flex flex-col justify-center items-center space-y-8 my-28",children:[e.jsx("span",{className:"text-6xl text-gray-800",children:s==="/wishlist"?e.jsx(N,{}):e.jsx(w,{})}),e.jsxs("h1",{className:"text-2xl text-lightGray",children:["No items found in",s==="/wishlist"?" wishlist":" cart"]}),e.jsx(y,{children:e.jsx(v,{to:"/shop",children:"SHOP NOW"})})]})}function Y(s){const{TBodyContent:a,THeadContent:t,TFootContent:r,products:i}=s,o=S(),{pathname:h}=b(),f=n=>{o(h==="/cart"?L(n.id):F(n.id))},T=()=>{o(h==="/cart"?W():E())};return e.jsx(e.Fragment,{children:i.length>0?e.jsx(B,{border:"1px solid #dbd9d9",borderRadius:"20px",children:e.jsxs(p,{style:{borderCollapse:"separate",borderSpacing:"1rem"},variant:"simple",colorScheme:"blackAlpha",children:[e.jsx(I,{children:e.jsxs(u,{children:[e.jsx(d,{children:"PRODUCT"}),e.jsx(d,{children:"PRICE"}),e.jsx(t,{})]})}),e.jsx(D,{className:"!space-y-10",children:e.jsx(P,{children:i.map(n=>k.createElement(u,{as:R.tr,...z,layout:!0,key:n.id},e.jsx(m,{children:e.jsx(q,{pro:n})}),e.jsxs(m,{fontWeight:"semibold",children:["$",n.price.toLocaleString("en")]}),e.jsx(a,{product:n}),e.jsx(m,{children:e.jsx(U,{"aria-label":"remove-product",onClick:()=>f(n),children:e.jsx(A,{})})})))})}),e.jsx(G,{children:e.jsxs(u,{children:[e.jsx(d,{}),e.jsx(d,{}),e.jsx(d,{}),e.jsx(r,{}),e.jsx(d,{children:e.jsx(y,{children:e.jsx("button",{onClick:T,children:h==="/cart"?"CLEAR CART":"CLEAR WISHLIST"})})})]})})]})}):e.jsx(X,{})})}const q=({pro:s})=>e.jsxs("div",{className:"flex items-center gap-x-8 [&>span]:!w-auto ",children:[e.jsx(v,{to:"/shop/"+s.id,children:e.jsx(H,{effect:!0,styles:"!w-24 !h-32 object-cover",src:s.thumbnail})}),e.jsxs("div",{children:[e.jsx("h1",{className:"font-semibold",children:s.title}),e.jsx("h1",{className:"font-sm text-lightGray",children:s.brand})]})]}),z={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},U=M.button`
border 
border-lightGray
hover:border-thickRed 
[&>svg]:hover:text-thickRed 
p-3
rounded-sm
mx-auto
`;export{Y as P,d as T,m as a};