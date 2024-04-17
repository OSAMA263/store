import{F as Y,Q as ne,j as o,y as Q,s as se,a4 as re,g as ie,r as V,N as ae,P as oe,O as ce}from"./index-f7601ce7.js";import{P as ue}from"./PageHero-e5da8fe6.js";import"./index-cfe56cde.js";function le(l){const{cat:h,thumbnail:f}=l,S=ne().filter($=>$.category===h);return o.jsxs(o.Fragment,{children:[o.jsx(de,{thumbnail:f}),o.jsxs("div",{className:"flex items-center justify-between h-[20%]",children:[o.jsxs("div",{className:"leading-6 transition-all duration-700 sm:text-xl btn-visible",children:[o.jsx("h1",{className:"transition-all duration-700 text-lightGray",children:h}),o.jsx(Q,{to:"/shop",className:"duration-700 opacity-0 text-thickRed",children:"+ Online store"})]}),o.jsxs("div",{className:"flex items-center gap-x-4",children:[o.jsx(fe,{}),o.jsx("small",{children:S.length})]})]})]})}const de=({thumbnail:l})=>o.jsxs(Q,{to:"/shop",className:"h-[80%] relative overflow-hidden",children:[o.jsx(he,{}),o.jsx("div",{className:"xl:h-[600px] md:h-[400px] h-[300px] relative",children:o.jsx(se,{styles:"!object-center !absolute !top-0 !w-full !h-full !transition-all !duration-700",placeholder:!0,effect:!0,src:l})})]}),he=Y.div`
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
`,fe=Y.span`
w-10
h-[1px]
bg-[#777777]
hidden
sm:block
`;var q={exports:{}};(function(l,h){(function(f,b){l.exports=b()})(re,function(){var f=1e3,b=6e4,S=36e5,$="millisecond",w="second",k="minute",C="hour",j="day",W="week",v="month",G="quarter",M="year",T="date",J="Invalid Date",K=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,X=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,ee={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(r){var n=["th","st","nd","rd"],e=r%100;return"["+r+(n[(e-20)%10]||n[e]||n[0])+"]"}},z=function(r,n,e){var s=String(r);return!s||s.length>=n?r:""+Array(n+1-s.length).join(e)+r},te={s:z,z:function(r){var n=-r.utcOffset(),e=Math.abs(n),s=Math.floor(e/60),t=e%60;return(n<=0?"+":"-")+z(s,2,"0")+":"+z(t,2,"0")},m:function r(n,e){if(n.date()<e.date())return-r(e,n);var s=12*(e.year()-n.year())+(e.month()-n.month()),t=n.clone().add(s,v),i=e-t<0,a=n.clone().add(s+(i?-1:1),v);return+(-(s+(e-t)/(i?t-a:a-t))||0)},a:function(r){return r<0?Math.ceil(r)||0:Math.floor(r)},p:function(r){return{M:v,y:M,w:W,d:j,D:T,h:C,m:k,s:w,ms:$,Q:G}[r]||String(r||"").toLowerCase().replace(/s$/,"")},u:function(r){return r===void 0}},L="en",_={};_[L]=ee;var U="$isDayjsObject",E=function(r){return r instanceof P||!(!r||!r[U])},A=function r(n,e,s){var t;if(!n)return L;if(typeof n=="string"){var i=n.toLowerCase();_[i]&&(t=i),e&&(_[i]=e,t=i);var a=n.split("-");if(!t&&a.length>1)return r(a[0])}else{var u=n.name;_[u]=n,t=u}return!s&&t&&(L=t),t||!s&&L},m=function(r,n){if(E(r))return r.clone();var e=typeof n=="object"?n:{};return e.date=r,e.args=arguments,new P(e)},c=te;c.l=A,c.i=E,c.w=function(r,n){return m(r,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var P=function(){function r(e){this.$L=A(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[U]=!0}var n=r.prototype;return n.parse=function(e){this.$d=function(s){var t=s.date,i=s.utc;if(t===null)return new Date(NaN);if(c.u(t))return new Date;if(t instanceof Date)return new Date(t);if(typeof t=="string"&&!/Z$/i.test(t)){var a=t.match(K);if(a){var u=a[2]-1||0,d=(a[7]||"0").substring(0,3);return i?new Date(Date.UTC(a[1],u,a[3]||1,a[4]||0,a[5]||0,a[6]||0,d)):new Date(a[1],u,a[3]||1,a[4]||0,a[5]||0,a[6]||0,d)}}return new Date(t)}(e),this.init()},n.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},n.$utils=function(){return c},n.isValid=function(){return this.$d.toString()!==J},n.isSame=function(e,s){var t=m(e);return this.startOf(s)<=t&&t<=this.endOf(s)},n.isAfter=function(e,s){return m(e)<this.startOf(s)},n.isBefore=function(e,s){return this.endOf(s)<m(e)},n.$g=function(e,s,t){return c.u(e)?this[s]:this.set(t,e)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(e,s){var t=this,i=!!c.u(s)||s,a=c.p(e),u=function(O,p){var D=c.w(t.$u?Date.UTC(t.$y,p,O):new Date(t.$y,p,O),t);return i?D:D.endOf(j)},d=function(O,p){return c.w(t.toDate()[O].apply(t.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(p)),t)},g=this.$W,x=this.$M,y=this.$D,H="set"+(this.$u?"UTC":"");switch(a){case M:return i?u(1,0):u(31,11);case v:return i?u(1,x):u(0,x+1);case W:var N=this.$locale().weekStart||0,I=(g<N?g+7:g)-N;return u(i?y-I:y+(6-I),x);case j:case T:return d(H+"Hours",0);case C:return d(H+"Minutes",1);case k:return d(H+"Seconds",2);case w:return d(H+"Milliseconds",3);default:return this.clone()}},n.endOf=function(e){return this.startOf(e,!1)},n.$set=function(e,s){var t,i=c.p(e),a="set"+(this.$u?"UTC":""),u=(t={},t[j]=a+"Date",t[T]=a+"Date",t[v]=a+"Month",t[M]=a+"FullYear",t[C]=a+"Hours",t[k]=a+"Minutes",t[w]=a+"Seconds",t[$]=a+"Milliseconds",t)[i],d=i===j?this.$D+(s-this.$W):s;if(i===v||i===M){var g=this.clone().set(T,1);g.$d[u](d),g.init(),this.$d=g.set(T,Math.min(this.$D,g.daysInMonth())).$d}else u&&this.$d[u](d);return this.init(),this},n.set=function(e,s){return this.clone().$set(e,s)},n.get=function(e){return this[c.p(e)]()},n.add=function(e,s){var t,i=this;e=Number(e);var a=c.p(s),u=function(x){var y=m(i);return c.w(y.date(y.date()+Math.round(x*e)),i)};if(a===v)return this.set(v,this.$M+e);if(a===M)return this.set(M,this.$y+e);if(a===j)return u(1);if(a===W)return u(7);var d=(t={},t[k]=b,t[C]=S,t[w]=f,t)[a]||1,g=this.$d.getTime()+e*d;return c.w(g,this)},n.subtract=function(e,s){return this.add(-1*e,s)},n.format=function(e){var s=this,t=this.$locale();if(!this.isValid())return t.invalidDate||J;var i=e||"YYYY-MM-DDTHH:mm:ssZ",a=c.z(this),u=this.$H,d=this.$m,g=this.$M,x=t.weekdays,y=t.months,H=t.meridiem,N=function(p,D,R,F){return p&&(p[D]||p(s,i))||R[D].slice(0,F)},I=function(p){return c.s(u%12||12,p,"0")},O=H||function(p,D,R){var F=p<12?"AM":"PM";return R?F.toLowerCase():F};return i.replace(X,function(p,D){return D||function(R){switch(R){case"YY":return String(s.$y).slice(-2);case"YYYY":return c.s(s.$y,4,"0");case"M":return g+1;case"MM":return c.s(g+1,2,"0");case"MMM":return N(t.monthsShort,g,y,3);case"MMMM":return N(y,g);case"D":return s.$D;case"DD":return c.s(s.$D,2,"0");case"d":return String(s.$W);case"dd":return N(t.weekdaysMin,s.$W,x,2);case"ddd":return N(t.weekdaysShort,s.$W,x,3);case"dddd":return x[s.$W];case"H":return String(u);case"HH":return c.s(u,2,"0");case"h":return I(1);case"hh":return I(2);case"a":return O(u,d,!0);case"A":return O(u,d,!1);case"m":return String(d);case"mm":return c.s(d,2,"0");case"s":return String(s.$s);case"ss":return c.s(s.$s,2,"0");case"SSS":return c.s(s.$ms,3,"0");case"Z":return a}return null}(p)||a.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(e,s,t){var i,a=this,u=c.p(s),d=m(e),g=(d.utcOffset()-this.utcOffset())*b,x=this-d,y=function(){return c.m(a,d)};switch(u){case M:i=y()/12;break;case v:i=y();break;case G:i=y()/3;break;case W:i=(x-g)/6048e5;break;case j:i=(x-g)/864e5;break;case C:i=x/S;break;case k:i=x/b;break;case w:i=x/f;break;default:i=x}return t?i:c.a(i)},n.daysInMonth=function(){return this.endOf(v).$D},n.$locale=function(){return _[this.$L]},n.locale=function(e,s){if(!e)return this.$L;var t=this.clone(),i=A(e,s,!0);return i&&(t.$L=i),t},n.clone=function(){return c.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},r}(),Z=P.prototype;return m.prototype=Z,[["$ms",$],["$s",w],["$m",k],["$H",C],["$W",j],["$M",v],["$y",M],["$D",T]].forEach(function(r){Z[r[1]]=function(n){return this.$g(n,r[0],r[1])}}),m.extend=function(r,n){return r.$i||(r(n,P,m),r.$i=!0),m},m.locale=A,m.isDayjs=E,m.unix=function(r){return m(1e3*r)},m.en=_[L],m.Ls=_,m.p={},m})})(q);var me=q.exports;const B=ie(me);function ge(l){const h=B(l),f=B();return{seconds:xe(f,h),minutes:pe(f,h),hours:$e(f,h),days:ye(f,h)}}const xe=(l,h)=>h.diff(l,"seconds")%60,pe=(l,h)=>h.diff(l,"minutes")%60,$e=(l,h)=>h.diff(l,"hours")%24,ye=(l,h)=>h.diff(l,"days");function ve(){return o.jsxs(je,{children:[o.jsx("img",{src:"categories/countdown.webp",className:"max-h-[360px] lg:block hidden",loading:"lazy",alt:"countdown-img"}),o.jsxs("div",{className:"space-y-10 text-center ",children:[o.jsx("h1",{className:"text-3xl md:text-5xl",children:"Deal of the day"}),o.jsx(we,{timeStamp:17356824e5})]})]})}const we=({timeStamp:l})=>{const[h,f]=V.useState({days:"00",hours:"00",minutes:"00",seconds:"00"});V.useEffect(()=>{const $=setInterval(()=>{b(l)},1e3);return()=>{clearInterval($)}},[l]);const b=$=>{f(ge($))},S=["days","hours","minutes","seconds"];return o.jsx("div",{className:"flex justify-center",children:o.jsx("div",{className:"flex items-center md:gap-x-8",children:S.map(($,w)=>o.jsxs("div",{className:"flex gap-x-8",children:[o.jsxs(be,{children:[o.jsx("span",{children:h[$]}),o.jsx("span",{className:"uppercase",children:$})]}),w!==S.length-1&&o.jsx("span",{className:"text-2xl",children:":"})]},w))})})},be=Y.div`
flex 
flex-col 
gap-y-6 
text-center
text-[#7e7e7e]
text-lg 
md:text-3xl
`,je=Y.div`
my-52
w-[95%]
mx-auto
py-4
flex
justify-evenly
bg-[#f8f8f8]
items-center
`,Me=["categories/smartphones.webp","categories/laptops.webp","categories/fragrances.webp","categories/furnitures.webp","categories/mens-shirts.webp","categories/mens-shoes.webp","categories/mens-watches.webp","categories/womens-watches.webp","categories/womens-bags.webp","categories/womens-jewellery.webp","categories/sunglasses.webp","categories/lighting.webp"];function Ce(){return o.jsxs(ae,{children:[o.jsx(ue,{title:"Product Categories",children:o.jsx("h1",{className:"text-lightGray",children:"Categories"})}),o.jsx(oe,{text:"This is where to find your satisfactory products",title:"Categories"}),o.jsx(De,{}),o.jsx(ve,{})]})}const De=()=>{const l=localStorage.categories?JSON.parse(localStorage.categories):null;return o.jsx(Se,{children:l!=null?l.map((h,f)=>o.jsx(_e,{className:f%2==0?"flex-col-reverse":"flex-col",children:o.jsx(le,{thumbnail:Me[f],cat:h})},f)):o.jsx("span",{className:"flex items-center justify-center h-screen",children:o.jsx(ce,{})})})},Se=Y.div`
grid
lg:grid-cols-4
sm:grid-cols-3
grid-cols-2
gap-x-10
gap-y-20
w-[95%]
mx-auto
`,_e=Y.div`
[&_.btn-visible]:hover:-translate-y-4
[&_h1]:hover:opacity-0
[&_h1]:hover:invisible
[&_a]:hover:!opacity-100
[&_img]:hover:scale-150
[&_img]:hover:brightness-50
[&_.img-border]:hover:border-white
flex

`;export{Ce as default};
