import{c as P,f as x,b as _,j as e,a as m,r as b,u as E,o as L,y as I,R,F as N}from"./index-28aa2f6c.js";import{g as C}from"./index-ce5ae199.js";var[H,B]=P({name:"BreadcrumbStylesContext",errorMessage:`useBreadcrumbStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Breadcrumb />" `}),k=x(function(r,s){const{isCurrentPage:a,as:t,className:l,href:n,...u}=r,i=B(),o={ref:s,as:t,className:_("chakra-breadcrumb__link",l),...u};return a?e.jsx(m.span,{"aria-current":"page",__css:i.link,...o}):e.jsx(m.a,{__css:i.link,href:n,...o})});k.displayName="BreadcrumbLink";var g=x(function(r,s){const{spacing:a,...t}=r,l=B(),n={mx:a,...l.separator};return e.jsx(m.span,{ref:s,role:"presentation",...t,__css:n})});g.displayName="BreadcrumbSeparator";var f=x(function(r,s){const{isCurrentPage:a,separator:t,isLastChild:l,spacing:n,children:u,className:i,...o}=r,p=C(u).map(c=>c.type===k?b.cloneElement(c,{isCurrentPage:a}):c.type===g?b.cloneElement(c,{spacing:n,children:c.props.children||t}):c),h={display:"inline-flex",alignItems:"center",...B().item},y=_("chakra-breadcrumb__list-item",i);return e.jsxs(m.li,{ref:s,className:y,...o,__css:h,children:[p,!l&&e.jsx(g,{spacing:n,children:t})]})});f.displayName="BreadcrumbItem";var S=x(function(r,s){const a=E("Breadcrumb",r),t=L(r),{children:l,spacing:n="0.5rem",separator:u="/",className:i,listProps:o,...j}=t,p=C(l),v=p.length,h=p.map((c,w)=>b.cloneElement(c,{separator:u,spacing:n,isLastChild:v===w+1})),y=_("chakra-breadcrumb",i);return e.jsx(m.nav,{ref:s,"aria-label":"breadcrumb",className:y,__css:a.container,...j,children:e.jsx(H,{value:a,children:e.jsx(m.ol,{className:"chakra-breadcrumb__list",...o,__css:{display:"flex",alignItems:"center",...a.list},children:h})})})});S.displayName="Breadcrumb";function q({title:d,children:r}){return e.jsx(M,{children:e.jsxs(F,{children:[e.jsx("h1",{className:"text-xl lg:text-5xl sm:text-3xl",children:d}),e.jsxs(S,{children:[e.jsx(f,{children:e.jsx(I,{to:"/",children:"Home"})}),R.Children.map(r,s=>e.jsx(f,{children:b.cloneElement(s)}))]})]})})}const M=N.div`
bg-[url('/home/page-hero-bg.webp')]
bg-cover 
bg-center
py-28
overflow-hidden
relative
`,F=N.div`
2xl:w-[65%]
xl:w-[80%]
lg:w-[90%]
md:w-[95%]
container
sm:mx-auto 
mx-4
space-y-10
`;export{q as P};
