import{r as a,c as O,m as g,ah as x}from"./index-4c0e8422.js";var P=Object.defineProperty,T=(e,t,n)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,r=(e,t,n)=>(T(e,typeof t!="symbol"?t+"":t,n),n);function N(e){return e.sort((t,n)=>{const s=t.compareDocumentPosition(n);if(s&Node.DOCUMENT_POSITION_FOLLOWING||s&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(s&Node.DOCUMENT_POSITION_PRECEDING||s&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(s&Node.DOCUMENT_POSITION_DISCONNECTED||s&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0})}var p=e=>typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function m(e,t,n){let s=e+1;return n&&s>=t&&(s=0),s}function v(e,t,n){let s=e-1;return n&&s<0&&(s=t),s}var I=typeof window<"u"?a.useLayoutEffect:a.useEffect,l=e=>e,S=class{constructor(){r(this,"descendants",new Map),r(this,"register",e=>{if(e!=null)return p(e)?this.registerNode(e):t=>{this.registerNode(t,e)}}),r(this,"unregister",e=>{this.descendants.delete(e);const t=N(Array.from(this.descendants.keys()));this.assignIndex(t)}),r(this,"destroy",()=>{this.descendants.clear()}),r(this,"assignIndex",e=>{this.descendants.forEach(t=>{const n=e.indexOf(t.node);t.index=n,t.node.dataset.index=t.index.toString()})}),r(this,"count",()=>this.descendants.size),r(this,"enabledCount",()=>this.enabledValues().length),r(this,"values",()=>Array.from(this.descendants.values()).sort((t,n)=>t.index-n.index)),r(this,"enabledValues",()=>this.values().filter(e=>!e.disabled)),r(this,"item",e=>{if(this.count()!==0)return this.values()[e]}),r(this,"enabledItem",e=>{if(this.enabledCount()!==0)return this.enabledValues()[e]}),r(this,"first",()=>this.item(0)),r(this,"firstEnabled",()=>this.enabledItem(0)),r(this,"last",()=>this.item(this.descendants.size-1)),r(this,"lastEnabled",()=>{const e=this.enabledValues().length-1;return this.enabledItem(e)}),r(this,"indexOf",e=>{var t,n;return e&&(n=(t=this.descendants.get(e))==null?void 0:t.index)!=null?n:-1}),r(this,"enabledIndexOf",e=>e==null?-1:this.enabledValues().findIndex(t=>t.node.isSameNode(e))),r(this,"next",(e,t=!0)=>{const n=m(e,this.count(),t);return this.item(n)}),r(this,"nextEnabled",(e,t=!0)=>{const n=this.item(e);if(!n)return;const s=this.enabledIndexOf(n.node),i=m(s,this.enabledCount(),t);return this.enabledItem(i)}),r(this,"prev",(e,t=!0)=>{const n=v(e,this.count()-1,t);return this.item(n)}),r(this,"prevEnabled",(e,t=!0)=>{const n=this.item(e);if(!n)return;const s=this.enabledIndexOf(n.node),i=v(s,this.enabledCount()-1,t);return this.enabledItem(i)}),r(this,"registerNode",(e,t)=>{if(!e||this.descendants.has(e))return;const n=Array.from(this.descendants.keys()).concat(e),s=N(n);t!=null&&t.disabled&&(t.disabled=!!t.disabled);const i={node:e,index:-1,...t};this.descendants.set(e,i),this.assignIndex(s)})}};function y(){const e=a.useRef(new S);return I(()=>()=>e.current.destroy()),e.current}var[M,C]=O({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"});function U(e){const t=C(),[n,s]=a.useState(-1),i=a.useRef(null);I(()=>()=>{i.current&&t.unregister(i.current)},[]),I(()=>{if(!i.current)return;const d=Number(i.current.dataset.index);n!=d&&!Number.isNaN(d)&&s(d)});const o=l(e?t.register(e):t.register);return{descendants:t,index:n,enabledIndex:t.enabledIndexOf(i.current),register:g(o,i)}}function w(){return[l(M),()=>l(C()),()=>y(),i=>U(i)]}function A(e){const{value:t,defaultValue:n,onChange:s,shouldUpdate:i=(u,b)=>u!==b}=e,o=x(s),d=x(i),[E,_]=a.useState(n),h=t!==void 0,c=h?t:E,D=x(u=>{const f=typeof u=="function"?u(c):u;d(c,f)&&(h||_(f),o(f))},[h,o,c,d]);return[c,D]}export{w as c,A as u};
