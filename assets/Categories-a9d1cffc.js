import{F as L,E as ne,j as o,s as q,L as se,_ as re,$ as ie,r as B,N as ae,P as oe,B as ce}from"./index-c5e3681c.js";import{P as ue}from"./PageHero-fe19a256.js";function le(l){const{cat:h,thumbnail:f}=l,S=ne().filter($=>$.category===h);return o.jsxs(o.Fragment,{children:[o.jsx(de,{thumbnail:f}),o.jsxs("div",{className:"flex items-center justify-between h-[20%]",children:[o.jsxs("div",{className:"text-xl btn-visible transition-all duration-700 leading-6",children:[o.jsx("h1",{className:"text-lightGray duration-700 transition-all",children:h}),o.jsx(q,{to:"/shop",className:"text-thickRed opacity-0 duration-700",children:"+ Online store"})]}),o.jsxs("div",{className:"flex items-center gap-x-4",children:[o.jsx(fe,{}),o.jsx("small",{children:S.length})]})]})]})}const de=({thumbnail:l})=>o.jsxs(q,{to:"/shop",className:"h-[80%] relative overflow-hidden",children:[o.jsx(he,{}),o.jsx("div",{className:"h-[600px] relative",children:o.jsx(se,{styles:"!object-center !absolute !top-0 !w-full !h-full !transition-all !duration-700",placeholder:!0,effect:!0,src:l})})]}),he=L.div`
img-border
w-[80%]
h-[80%]
absolute
left-1/2
top-1/2
z-[69]
-translate-x-1/2
-translate-y-1/2
transition-all
duration-500
border
border-transparent
`,fe=L.span`
w-10
h-[1px]
bg-[#777777]
block
`;var Q={exports:{}};(function(l,h){(function(f,w){l.exports=w()})(re,function(){var f=1e3,w=6e4,S=36e5,$="millisecond",j="second",C="minute",k="hour",M="day",R="week",v="month",z="quarter",b="year",T="date",J="Invalid Date",K=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,X=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,ee={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(r){var n=["th","st","nd","rd"],e=r%100;return"["+r+(n[(e-20)%10]||n[e]||n[0])+"]"}},F=function(r,n,e){var s=String(r);return!s||s.length>=n?r:""+Array(n+1-s.length).join(e)+r},te={s:F,z:function(r){var n=-r.utcOffset(),e=Math.abs(n),s=Math.floor(e/60),t=e%60;return(n<=0?"+":"-")+F(s,2,"0")+":"+F(t,2,"0")},m:function r(n,e){if(n.date()<e.date())return-r(e,n);var s=12*(e.year()-n.year())+(e.month()-n.month()),t=n.clone().add(s,v),i=e-t<0,a=n.clone().add(s+(i?-1:1),v);return+(-(s+(e-t)/(i?t-a:a-t))||0)},a:function(r){return r<0?Math.ceil(r)||0:Math.floor(r)},p:function(r){return{M:v,y:b,w:R,d:M,D:T,h:k,m:C,s:j,ms:$,Q:z}[r]||String(r||"").toLowerCase().replace(/s$/,"")},u:function(r){return r===void 0}},Y="en",_={};_[Y]=ee;var U="$isDayjsObject",G=function(r){return r instanceof A||!(!r||!r[U])},W=function r(n,e,s){var t;if(!n)return Y;if(typeof n=="string"){var i=n.toLowerCase();_[i]&&(t=i),e&&(_[i]=e,t=i);var a=n.split("-");if(!t&&a.length>1)return r(a[0])}else{var u=n.name;_[u]=n,t=u}return!s&&t&&(Y=t),t||!s&&Y},m=function(r,n){if(G(r))return r.clone();var e=typeof n=="object"?n:{};return e.date=r,e.args=arguments,new A(e)},c=te;c.l=W,c.i=G,c.w=function(r,n){return m(r,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var A=function(){function r(e){this.$L=W(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[U]=!0}var n=r.prototype;return n.parse=function(e){this.$d=function(s){var t=s.date,i=s.utc;if(t===null)return new Date(NaN);if(c.u(t))return new Date;if(t instanceof Date)return new Date(t);if(typeof t=="string"&&!/Z$/i.test(t)){var a=t.match(K);if(a){var u=a[2]-1||0,d=(a[7]||"0").substring(0,3);return i?new Date(Date.UTC(a[1],u,a[3]||1,a[4]||0,a[5]||0,a[6]||0,d)):new Date(a[1],u,a[3]||1,a[4]||0,a[5]||0,a[6]||0,d)}}return new Date(t)}(e),this.init()},n.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},n.$utils=function(){return c},n.isValid=function(){return this.$d.toString()!==J},n.isSame=function(e,s){var t=m(e);return this.startOf(s)<=t&&t<=this.endOf(s)},n.isAfter=function(e,s){return m(e)<this.startOf(s)},n.isBefore=function(e,s){return this.endOf(s)<m(e)},n.$g=function(e,s,t){return c.u(e)?this[s]:this.set(t,e)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(e,s){var t=this,i=!!c.u(s)||s,a=c.p(e),u=function(O,x){var D=c.w(t.$u?Date.UTC(t.$y,x,O):new Date(t.$y,x,O),t);return i?D:D.endOf(M)},d=function(O,x){return c.w(t.toDate()[O].apply(t.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(x)),t)},g=this.$W,p=this.$M,y=this.$D,H="set"+(this.$u?"UTC":"");switch(a){case b:return i?u(1,0):u(31,11);case v:return i?u(1,p):u(0,p+1);case R:var N=this.$locale().weekStart||0,I=(g<N?g+7:g)-N;return u(i?y-I:y+(6-I),p);case M:case T:return d(H+"Hours",0);case k:return d(H+"Minutes",1);case C:return d(H+"Seconds",2);case j:return d(H+"Milliseconds",3);default:return this.clone()}},n.endOf=function(e){return this.startOf(e,!1)},n.$set=function(e,s){var t,i=c.p(e),a="set"+(this.$u?"UTC":""),u=(t={},t[M]=a+"Date",t[T]=a+"Date",t[v]=a+"Month",t[b]=a+"FullYear",t[k]=a+"Hours",t[C]=a+"Minutes",t[j]=a+"Seconds",t[$]=a+"Milliseconds",t)[i],d=i===M?this.$D+(s-this.$W):s;if(i===v||i===b){var g=this.clone().set(T,1);g.$d[u](d),g.init(),this.$d=g.set(T,Math.min(this.$D,g.daysInMonth())).$d}else u&&this.$d[u](d);return this.init(),this},n.set=function(e,s){return this.clone().$set(e,s)},n.get=function(e){return this[c.p(e)]()},n.add=function(e,s){var t,i=this;e=Number(e);var a=c.p(s),u=function(p){var y=m(i);return c.w(y.date(y.date()+Math.round(p*e)),i)};if(a===v)return this.set(v,this.$M+e);if(a===b)return this.set(b,this.$y+e);if(a===M)return u(1);if(a===R)return u(7);var d=(t={},t[C]=w,t[k]=S,t[j]=f,t)[a]||1,g=this.$d.getTime()+e*d;return c.w(g,this)},n.subtract=function(e,s){return this.add(-1*e,s)},n.format=function(e){var s=this,t=this.$locale();if(!this.isValid())return t.invalidDate||J;var i=e||"YYYY-MM-DDTHH:mm:ssZ",a=c.z(this),u=this.$H,d=this.$m,g=this.$M,p=t.weekdays,y=t.months,H=t.meridiem,N=function(x,D,P,E){return x&&(x[D]||x(s,i))||P[D].slice(0,E)},I=function(x){return c.s(u%12||12,x,"0")},O=H||function(x,D,P){var E=x<12?"AM":"PM";return P?E.toLowerCase():E};return i.replace(X,function(x,D){return D||function(P){switch(P){case"YY":return String(s.$y).slice(-2);case"YYYY":return c.s(s.$y,4,"0");case"M":return g+1;case"MM":return c.s(g+1,2,"0");case"MMM":return N(t.monthsShort,g,y,3);case"MMMM":return N(y,g);case"D":return s.$D;case"DD":return c.s(s.$D,2,"0");case"d":return String(s.$W);case"dd":return N(t.weekdaysMin,s.$W,p,2);case"ddd":return N(t.weekdaysShort,s.$W,p,3);case"dddd":return p[s.$W];case"H":return String(u);case"HH":return c.s(u,2,"0");case"h":return I(1);case"hh":return I(2);case"a":return O(u,d,!0);case"A":return O(u,d,!1);case"m":return String(d);case"mm":return c.s(d,2,"0");case"s":return String(s.$s);case"ss":return c.s(s.$s,2,"0");case"SSS":return c.s(s.$ms,3,"0");case"Z":return a}return null}(x)||a.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(e,s,t){var i,a=this,u=c.p(s),d=m(e),g=(d.utcOffset()-this.utcOffset())*w,p=this-d,y=function(){return c.m(a,d)};switch(u){case b:i=y()/12;break;case v:i=y();break;case z:i=y()/3;break;case R:i=(p-g)/6048e5;break;case M:i=(p-g)/864e5;break;case k:i=p/S;break;case C:i=p/w;break;case j:i=p/f;break;default:i=p}return t?i:c.a(i)},n.daysInMonth=function(){return this.endOf(v).$D},n.$locale=function(){return _[this.$L]},n.locale=function(e,s){if(!e)return this.$L;var t=this.clone(),i=W(e,s,!0);return i&&(t.$L=i),t},n.clone=function(){return c.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},r}(),Z=A.prototype;return m.prototype=Z,[["$ms",$],["$s",j],["$m",C],["$H",k],["$W",M],["$M",v],["$y",b],["$D",T]].forEach(function(r){Z[r[1]]=function(n){return this.$g(n,r[0],r[1])}}),m.extend=function(r,n){return r.$i||(r(n,A,m),r.$i=!0),m},m.locale=W,m.isDayjs=G,m.unix=function(r){return m(1e3*r)},m.en=_[Y],m.Ls=_,m.p={},m})})(Q);var me=Q.exports;const V=ie(me);function ge(l){const h=V(l),f=V();return{seconds:pe(f,h),minutes:xe(f,h),hours:$e(f,h),days:ye(f,h)}}const pe=(l,h)=>h.diff(l,"seconds")%60,xe=(l,h)=>h.diff(l,"minutes")%60,$e=(l,h)=>h.diff(l,"hours")%24,ye=(l,h)=>h.diff(l,"days");function ve(){return o.jsxs(Me,{children:[o.jsx("img",{src:"/categories/countdown.jpg",className:"h-[400px] ",alt:"countdown-img"}),o.jsxs("div",{className:"text-center space-y-10 ",children:[o.jsx("h1",{className:"text-5xl",children:"Deal of the day"}),o.jsx(je,{timeStamp:1731276e6})]})]})}const je=({timeStamp:l})=>{const[h,f]=B.useState({days:"00",hours:"00",minutes:"00",seconds:"00"});B.useEffect(()=>{const $=setInterval(()=>{w(l)},1e3);return()=>{clearInterval($)}},[l]);const w=$=>{f(ge($))},S=["days","hours","minutes","seconds"];return o.jsx("div",{className:"flex justify-center",children:o.jsx("div",{className:"flex gap-x-8 items-center",children:S.map(($,j)=>o.jsxs("div",{className:"flex gap-x-8",children:[o.jsxs(we,{children:[o.jsx("span",{className:"text-3xl",children:h[$]}),o.jsx("span",{className:"uppercase",children:$})]}),j!==S.length-1&&o.jsx("span",{className:"text-2xl",children:":"})]},j))})})},we=L.div`
flex 
flex-col 
gap-y-6 
text-center
text-[#7e7e7e]
`,Me=L.div`
my-52
w-[95%]
mx-auto
flex
justify-evenly
gap-x-20
bg-[#f8f8f8]
items-center
`,be=["/categories/smartphones.jpg","/categories/laptops.png","/categories/fragrances.webp","/categories/furnitures.jpg","/categories/mens-shirts.jpg","/categories/mens-shoes.jpg","/categories/mens-watches.jpg","/categories/womens-watches.jpg","/categories/womens-bags.webp","/categories/womens-jewellery.webp","/categories/sunglasses.webp","/categories/lighting.jpg"];function Ce(){return o.jsxs(ae,{children:[o.jsx(ue,{title:"Product Categories",children:o.jsx("h1",{className:"text-lightGray",children:"Categories"})}),o.jsx(oe,{text:"This is where to find your satisfactory products",title:"Categories"}),o.jsx(De,{}),o.jsx(ve,{})]})}const De=()=>{const l=localStorage.categories?JSON.parse(localStorage.categories):null;return o.jsx(Se,{children:l!=null?l.map((h,f)=>o.jsx(_e,{className:f%2==0?"flex-col-reverse":"flex-col",children:o.jsx(le,{thumbnail:be[f],cat:h})},f)):o.jsx("span",{className:"h-screen flex justify-center items-center",children:o.jsx(ce,{})})})},Se=L.div`
grid
grid-cols-4
gap-x-10
gap-y-20
w-[95%]
mx-auto
`,_e=L.div`
[&_.btn-visible]:hover:-translate-y-4
[&_h1]:hover:opacity-0
[&_h1]:hover:invisible
[&_a]:hover:!opacity-100
[&_img]:hover:scale-150
[&_img]:hover:brightness-50
[&_.img-border]:hover:border-white
flex
`;export{Ce as default};
