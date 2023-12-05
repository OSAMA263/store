import{r as d,c as P,f as x,b as _,j as e,a as u,e as E,o as L,n as I,R,F as N}from"./index-ca8fdd72.js";function C(l){return d.Children.toArray(l).filter(r=>d.isValidElement(r))}var[H,B]=P({name:"BreadcrumbStylesContext",errorMessage:`useBreadcrumbStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Breadcrumb />" `}),k=x(function(r,s){const{isCurrentPage:a,as:t,className:i,href:n,...p}=r,o=B(),m={ref:s,as:t,className:_("chakra-breadcrumb__link",i),...p};return a?e.jsx(u.span,{"aria-current":"page",__css:o.link,...m}):e.jsx(u.a,{__css:o.link,href:n,...m})});k.displayName="BreadcrumbLink";var g=x(function(r,s){const{spacing:a,...t}=r,i=B(),n={mx:a,...i.separator};return e.jsx(u.span,{ref:s,role:"presentation",...t,__css:n})});g.displayName="BreadcrumbSeparator";var f=x(function(r,s){const{isCurrentPage:a,separator:t,isLastChild:i,spacing:n,children:p,className:o,...m}=r,b=C(p).map(c=>c.type===k?d.cloneElement(c,{isCurrentPage:a}):c.type===g?d.cloneElement(c,{spacing:n,children:c.props.children||t}):c),h={display:"inline-flex",alignItems:"center",...B().item},y=_("chakra-breadcrumb__list-item",o);return e.jsxs(u.li,{ref:s,className:y,...m,__css:h,children:[b,!i&&e.jsx(g,{spacing:n,children:t})]})});f.displayName="BreadcrumbItem";var S=x(function(r,s){const a=E("Breadcrumb",r),t=L(r),{children:i,spacing:n="0.5rem",separator:p="/",className:o,listProps:m,...j}=t,b=C(i),v=b.length,h=b.map((c,w)=>d.cloneElement(c,{separator:p,spacing:n,isLastChild:v===w+1})),y=_("chakra-breadcrumb",o);return e.jsx(u.nav,{ref:s,"aria-label":"breadcrumb",className:y,__css:a.container,...j,children:e.jsx(H,{value:a,children:e.jsx(u.ol,{className:"chakra-breadcrumb__list",...m,__css:{display:"flex",alignItems:"center",...a.list},children:h})})})});S.displayName="Breadcrumb";function F({title:l,children:r}){return e.jsx(M,{children:e.jsxs(V,{children:[e.jsx("h1",{className:"text-xl lg:text-5xl sm:text-3xl",children:l}),e.jsxs(S,{children:[e.jsx(f,{children:e.jsx(I,{to:"/",children:"Home"})}),R.Children.map(r,s=>e.jsx(f,{children:d.cloneElement(s)}))]})]})})}const M=N.div`
bg-[url('/home/page-hero-bg.webp')]
bg-cover 
bg-center
py-28
overflow-hidden
relative
`,V=N.div`
2xl:w-[65%]
xl:w-[80%]
lg:w-[90%]
md:w-[95%]
container
sm:mx-auto 
mx-4
space-y-10
`;export{F as P,C as g};
