import{c as g,f as l,e as C,o as _,j as e,a as c,b as j,a7 as b,a8 as N,a9 as w,M as y,n as v,B as S,x as P,r as k,J as R,l as L,a5 as A,aa as F,ab as W,ac as E,L as H,F as M}from"./index-28b5ef4f.js";var[O,x]=g({name:"TableStylesContext",errorMessage:`useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" `}),p=l((s,a)=>{const t=C("Table",s),{className:r,layout:i,...n}=_(s);return e.jsx(O,{value:t,children:e.jsx(c.table,{ref:a,__css:{tableLayout:i,...t.table},className:j("chakra-table",r),...n})})});p.displayName="Table";var B=l((s,a)=>{const t=x();return e.jsx(c.thead,{...s,ref:a,__css:t.thead})}),m=l((s,a)=>{const t=x();return e.jsx(c.tr,{...s,ref:a,__css:t.tr})}),I=l((s,a)=>{var t;const{overflow:r,overflowX:i,className:n,...h}=s;return e.jsx(c.div,{ref:a,className:j("chakra-table__container",n),...h,__css:{display:"block",whiteSpace:"nowrap",WebkitOverflowScrolling:"touch",overflowX:(t=r??i)!=null?t:"auto",overflowY:"hidden",maxWidth:"100%"}})}),G=l((s,a)=>{const t=x();return e.jsx(c.tbody,{...s,ref:a,__css:t.tbody})}),u=l(({isNumeric:s,...a},t)=>{const r=x();return e.jsx(c.td,{...a,ref:t,__css:r.td,"data-is-numeric":s})}),D=l((s,a)=>{const t=x();return e.jsx(c.tfoot,{...s,ref:a,__css:t.tfoot})}),d=l(({isNumeric:s,...a},t)=>{const r=x();return e.jsx(c.th,{...a,ref:t,__css:r.th,"data-is-numeric":s})});function X(){const{pathname:s}=b();return e.jsxs("div",{className:"w-[60%] mx-auto flex flex-col justify-center items-center space-y-8 my-28",children:[e.jsx("span",{className:"sm:text-6xl text-4xl text-gray-800",children:s==="/wishlist"?e.jsx(N,{}):e.jsx(w,{})}),e.jsxs("h1",{className:"sm:text-2xl text-lg text-lightGray text-center",children:["No items found in",s==="/wishlist"?" wishlist":" cart"]}),e.jsx(y,{children:e.jsx(v,{to:"/shop",children:"SHOP NOW"})})]})}function Y(s){const{TBodyContent:a,THeadContent:t,TFootContent:r,products:i}=s,n=S(),{pathname:h}=b(),f=o=>{n(h==="/cart"?A(o.id):F(o.id))},T=()=>{n(h==="/cart"?W():E())};return e.jsx(e.Fragment,{children:i.length>0?e.jsx(I,{border:"1px solid #dbd9d9",borderRadius:"20px",children:e.jsxs(p,{style:{borderCollapse:"separate",borderSpacing:"1rem"},variant:"simple",colorScheme:"blackAlpha",children:[e.jsx(B,{children:e.jsxs(m,{children:[e.jsx(d,{children:"PRODUCT"}),e.jsx(d,{children:"PRICE"}),e.jsx(t,{})]})}),e.jsx(G,{className:"!space-y-10",children:e.jsx(P,{children:i.map(o=>k.createElement(m,{as:R.tr,...J,layout:!0,key:o.id},e.jsx(u,{children:e.jsx(z,{pro:o})}),e.jsxs(u,{fontWeight:"semibold",children:["$",o.price.toLocaleString("en")]}),e.jsx(a,{product:o}),e.jsx(u,{children:e.jsx(U,{"aria-label":"remove-product",onClick:()=>f(o),children:e.jsx(L,{})})})))})}),e.jsx(D,{children:e.jsxs(m,{children:[e.jsx(d,{}),e.jsx(d,{}),e.jsx(d,{}),e.jsx(r,{}),e.jsx(d,{children:e.jsx(y,{children:e.jsx("button",{onClick:T,children:h==="/cart"?"CLEAR CART":"CLEAR WISHLIST"})})})]})})]})}):e.jsx(X,{})})}const z=({pro:s})=>e.jsxs("div",{className:"flex items-center gap-x-8 [&>span]:!w-auto ",children:[e.jsx(v,{to:"/shop/"+s.id,children:e.jsx(H,{effect:!0,styles:"!w-24 !h-32 object-cover",src:s.thumbnail})}),e.jsxs("div",{children:[e.jsx("h1",{className:"font-semibold",children:s.title}),e.jsx("h1",{className:"font-sm text-lightGray",children:s.brand})]})]}),J={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},U=M.button`
border 
border-lightGray
hover:border-thickRed 
[&>svg]:hover:text-thickRed 
p-3
rounded-sm
mx-auto
`;export{Y as P,d as T,u as a};