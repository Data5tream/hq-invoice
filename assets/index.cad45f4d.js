import{U as S,a as y,k as P,j as b,i as d,u as m,V as J,W as K,d as w,b as O,g as Y,e as T,w as Z,n as me,m as ee,X as D,N as _e,Y as B,F as R,Z as ve,Q as be}from"./vue.3871716e.js";import{E,C as G,f as te,n as he,c as ye}from"./balm.e747ba89.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();const ge="modulepreload",we=function(e){return"/hq-invoice/"+e},X={},z=function(i,r,t){return!r||r.length===0?i():Promise.all(r.map(n=>{if(n=we(n),n in X)return;X[n]=!0;const a=n.endsWith(".css"),s=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${s}`))return;const o=document.createElement("link");if(o.rel=a?"stylesheet":ge,a||(o.as="script",o.crossOrigin=""),o.href=n,document.head.appendChild(o),a)return new Promise((c,u)=>{o.addEventListener("load",c),o.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>i())},Te=e=>(J("data-v-c8fcd579"),e=e(),K(),e),xe=Te(()=>w("h2",null,"Einstellungen",-1)),ke=S({__name:"HqConfig",props:{rate:{type:Number,default:10},tax:{type:Number,default:20}},emits:["update:rate","update:tax"],setup(e,{emit:i}){const r=n=>{i("update:rate",Number(n))},t=n=>{i("update:tax",Number(n))};return(n,a)=>(y(),P(m(te),{class:"config-container"},{default:b(()=>[d(m(E),{columns:"12"},{default:b(()=>[xe]),_:1}),d(m(E),{columns:"12"},{default:b(()=>[d(m(G),{label:"\u20AC/h",inputType:"number",modelValue:e.rate,"onUpdate:modelValue":r,outlined:""},null,8,["modelValue"])]),_:1}),d(m(E),{columns:"12"},{default:b(()=>[d(m(G),{label:"Steuern (%)",inputType:"number",modelValue:e.tax,"onUpdate:modelValue":t,outlined:""},null,8,["modelValue"])]),_:1})]),_:1}))}});const N=(e,i)=>{const r=e.__vccOpts||e;for(const[t,n]of i)r[t]=n;return r},Ee=N(ke,[["__scopeId","data-v-c8fcd579"]]);function Oe(e,i,r=t=>t){const t=Object.create(null);t.options=i||{},t.reviver=r,t.value="",t.entry=[],t.output=[],t.col=1,t.row=1;const n=/"|,|\r\n|\n|\r|[^",\r\n]+/y,a=/^(\r\n|\n|\r)$/;let s=[],o="",c=0;for(;(s=n.exec(e))!==null;)switch(o=s[0],c){case 0:switch(!0){case o==='"':c=3;break;case o===",":c=0,g(t);break;case a.test(o):c=0,g(t),C(t);break;default:t.value+=o,c=2;break}break;case 2:switch(!0){case o===",":c=0,g(t);break;case a.test(o):c=0,g(t),C(t);break;default:throw c=4,Error(`CSVError: Illegal state [row:${t.row}, col:${t.col}]`)}break;case 3:switch(!0){case o==='"':c=4;break;default:c=3,t.value+=o;break}break;case 4:switch(!0){case o==='"':c=3,t.value+=o;break;case o===",":c=0,g(t);break;case a.test(o):c=0,g(t),C(t);break;default:throw Error(`CSVError: Illegal state [row:${t.row}, col:${t.col}]`)}break}return t.entry.length!==0&&(g(t),C(t)),t.output}function g(e){const i=e.options.typed?Ne(e.value):e.value;e.entry.push(e.reviver(i,e.row,e.col)),e.value="",e.col++}function C(e){e.output.push(e.entry),e.entry=[],e.row++,e.col=1}function Ne(e){const i=/.\./;switch(!0){case e==="true":case e==="false":return e==="true";case i.test(e):return parseFloat(e);case isFinite(e):return parseInt(e);default:return e}}const j=e=>Date.parse(`20${e.substring(6,8)}-${e.substring(3,5)}-${e.substring(0,2)} ${e.substring(9,14)}`),$e=e=>{let i="";const r=new Uint8Array(e),t=r.byteLength;for(let s=0;s<t;s++)i+=String.fromCharCode(r[s]);const n=Oe(i),a=n.shift();return JSON.stringify(a)!=='["Projekt","Aufgabe","Beschreibung","Startdatum","Enddatum","Arbeitszeit (hh:mm)"]'?(console.log("format changed!!!"),console.log(a),[]):n.map(s=>({project:s[0],activity:s[1],note:s[2],startTime:j(s[3]),endTime:j(s[3]),duration:(j(s[4])-j(s[3]))/36e5}))},Ce={class:"hq-upload"},je=S({__name:"HqUpload",emits:["update"],setup(e,{emit:i}){const r=t=>{const n=new FileReader;n.onload=function(a){i("update",$e(a.target.result))},n.readAsArrayBuffer(t[0].sourceFile)};return(t,n)=>(y(),O("div",Ce,[d(m(he),{text:"CSV Datei ausw\xE4hlen",accept:"text/csv",onChange:r})]))}});const Q=N(je,[["__scopeId","data-v-81ae6a56"]]);const Se={},oe=e=>(J("data-v-01473e11"),e=e(),K(),e),Ae=oe(()=>w("div",null,[w("span",null,"\xA9 Simon Barth, 2022"),w("a",{href:"https://github.com/Data5tream/hq-invoice",target:"_blank",rel:"nofollow"},"Github"),w("span",null,"Licensed under GNU AGPLv3")],-1)),Ve=oe(()=>w("span",null,"v0.1.0",-1)),Ie=[Ae,Ve];function Pe(e,i){return y(),O("footer",null,Ie)}const Me=N(Se,[["render",Pe],["__scopeId","data-v-01473e11"]]),I=Y({notificationVisible:!1,showNotification(){this.notificationVisible=!0},hideNotification(){this.notificationVisible=!1}}),qe=S({__name:"HqNotification",setup(e){const i=T(!1),r=T(!1),t=T(0),n=()=>{r.value=!1,I.hideNotification(),t.value=setTimeout(()=>{i.value=!1},1e3)};return Z(()=>I.notificationVisible,()=>{I.notificationVisible&&(i.value=!0,clearTimeout(t.value),setTimeout(()=>{r.value=!0,setTimeout(n,2e3)},100))}),(a,s)=>i.value?(y(),O("div",{key:0,class:me(["notification",{visible:r.value}])}," Daten kopiert ",2)):ee("",!0)}});const Le=N(qe,[["__scopeId","data-v-508f8f95"]]),Ue=(e,i)=>{const r=[];return e.forEach(t=>{const n=r.find(s=>s.name===t.project),a=Number(t.duration.toFixed(2));n?(n.totalTime+=a,n.value+=a*i,n.sets.push(t)):r.push({name:t.project,totalTime:a,value:a*i,sets:[t]})}),r.sort((t,n)=>t.name===n.name?0:t.name>n.name?1:-1)},Fe=S({__name:"App",setup(e){const i=D(()=>z(()=>import("./HqContent.c8c6c6c7.js"),["assets/HqContent.c8c6c6c7.js","assets/HqContent.ef313fba.css","assets/util.2224115a.js","assets/balm.e747ba89.js","assets/vue.3871716e.js"])),r=D(()=>z(()=>import("./HqTotals.661dad8f.js"),["assets/HqTotals.661dad8f.js","assets/HqTotals.7e3df109.css","assets/util.2224115a.js","assets/balm.e747ba89.js","assets/vue.3871716e.js"])),t=T(!1),n=T(10),a=T(20),s=Y({raw:[],prepared:[],totals:{hours:0,value:0}}),o=u=>{t.value=!0,s.raw=u,s.prepared=Ue(u,n.value),c(n.value)},c=u=>{s.totals.hours=0,s.totals.value=0,s.prepared.forEach(p=>{p.value=p.totalTime*u,s.totals.hours+=p.totalTime,s.totals.value+=p.value})};return Z(n,u=>{c(u)}),(u,p)=>(y(),O(R,null,[d(m(ye),{contentSelector:"main",navIcon:!1},{default:b(()=>[_e(" HQ Invoice ")]),_:1}),w("main",null,[d(m(te),{class:"app-content"},{default:b(()=>[d(m(E),{columns:"4"},{default:b(()=>[d(Ee,{rate:n.value,"onUpdate:rate":p[0]||(p[0]=h=>n.value=h),tax:a.value,"onUpdate:tax":p[1]||(p[1]=h=>a.value=h)},null,8,["rate","tax"]),d(B,{name:"fade"},{default:b(()=>[t.value?(y(),O(R,{key:0},[d(m(r),{totals:s.totals,tax:a.value},null,8,["totals","tax"]),d(Q,{key:"loader",onUpdate:o})],64)):ee("",!0)]),_:1})]),_:1}),d(m(E),{columns:"8"},{default:b(()=>[d(B,{name:"fade"},{default:b(()=>[t.value?(y(),P(m(i),{key:"content",data:s.prepared},null,8,["data"])):(y(),P(Q,{key:"loader",onUpdate:o}))]),_:1})]),_:1})]),_:1})]),d(Me),d(Le)],64))}});const He=N(Fe,[["__scopeId","data-v-53057896"]]);var ne=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function De(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Be(e){var i=e.default;if(typeof i=="function"){var r=function(){return i.apply(this,arguments)};r.prototype=i.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})}),r}var ae={exports:{}};(function(e,i){(function(r,t){e.exports=t()})(typeof self<"u"?self:ne,function(){return function(){var r={d:function(o,c){for(var u in c)r.o(c,u)&&!r.o(o,u)&&Object.defineProperty(o,u,{enumerable:!0,get:c[u]})},o:function(o,c){return Object.prototype.hasOwnProperty.call(o,c)}},t={};r.d(t,{default:function(){return s}});const n=/(?:^\[object\s(.*?)\]$)/;var a=o=>Object.prototype.toString.call(o).replace(n,"$1").toLowerCase(),s={name:"copy",beforeMount(o,c){let{value:u}=c;if(a(u)!=="object")throw new Error("[v-copy]: The 'value' must be an object ({ text: string; success: Function; error?: Function })");{const{text:p,success:h,error:$}=u;a(h)!=="function"&&console.warn("[v-copy]: The 'success' must be a function"),o.$value=p,o.handler=()=>{if(!o.$value)return void($&&$());const _=document.createElement("textarea");_.readOnly="readonly",_.style.position="absolute",_.style.left="-9999px",_.value=o.$value,document.body.appendChild(_),_.select(),document.execCommand("copy")&&h(),document.body.removeChild(_)},o.addEventListener("click",o.handler)}},updated(o,c){let{value:u}=c;o.$value=u.text},unmounted(o){o.removeEventListener("click",o.handler)}};return t=t.default}()})})(ae);const W=ae.exports;var re={exports:{}};const Re=Be(ve);(function(e,i){(function(r,t){e.exports=t(Re)})(typeof self<"u"?self:ne,function(r){return function(){var t={895:function(o){o.exports=r}},n={};function a(o){var c=n[o];if(c!==void 0)return c.exports;var u=n[o]={exports:{}};return t[o](u,u.exports,a),u.exports}a.d=function(o,c){for(var u in c)a.o(c,u)&&!a.o(o,u)&&Object.defineProperty(o,u,{enumerable:!0,get:c[u]})},a.o=function(o,c){return Object.prototype.hasOwnProperty.call(o,c)},a.r=function(o){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})};var s={};return function(){a.r(s),a.d(s,{default:function(){return le},install:function(){return F},useToast:function(){return ue}});var o=a(895),c=typeof window>"u"?o.createSSRApp:o.createApp;const u=/(?:^\[object\s(.*?)\]$)/;var p=f=>Object.prototype.toString.call(f).replace(u,"$1").toLowerCase();function h(f,l){let v=Object.assign({},f);return p(l)==="string"?v.message="".concat(l):p(l)==="object"&&(v=Object.assign({},v,l)),v}function $(f){return document.getElementById(f)||function(l){const v=document.createElement("div");return v.id=l,document.body.appendChild(v),v}(f)}const _="balmui-toast",x={MIN:2e3,MAX:3500,DEFAULTS:2750},se={TOP:"top",BOTTOM:"bottom",CENTER:"center"},q={className:"",timeoutMs:x.DEFAULTS,message:"",position:se.BOTTOM};let A,L,ce,U=q;function ie(f){return $(_),c({name:"Toast",expose:["render"],setup(){const l=(0,o.reactive)({open:!1,opening:!0,opened:!1,options:f}),v=(0,o.computed)(()=>["top","center"].includes(l.options.position)?"mdc-toast--".concat(l.options.position):""),de=(0,o.computed)(()=>["mdc-snackbar","mdc-toast",v.value,l.options.className,{"mdc-snackbar--opening":l.opening,"mdc-snackbar--open":l.opened}]),pe=(0,o.computed)(()=>l.options.message);function fe(){l.open=!0,L=setTimeout(()=>{l.open=!1},l.options.timeoutMs)}function H(k){if(!(k.timeoutMs<=x.MAX&&k.timeoutMs>=x.MIN))throw new Error("[$toast]: The timeoutMs of the toast must be between ".concat(x.MIN," and ").concat(x.MAX));l.options=k,fe()}return(0,o.watch)(()=>l.open,k=>{k?setTimeout(()=>{l.opened=!0,setTimeout(()=>{l.opening=!1},150)},150):(l.opening=!0,l.opened=!1)}),(0,o.onMounted)(()=>H(f)),{className:de,message:pe,render:H}},template:`<div :class="className">
  <div class="mdc-snackbar__surface">
    <div class="mdc-snackbar__label" v-text="message"></div>
  </div>
</div>`})}function V(){let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const l=h(U,f);A?(clearTimeout(L),clearTimeout(ce),A.render(l)):A=ie(l).mount("#".concat(_))}function F(f){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};U=Object.assign({},q,l),f.config.globalProperties.$toast=V,f.provide("toast",V)}const ue=()=>V;var le={install:F}}(),s}()})})(re);const Ge=De(re.exports),M=be(He);M.directive(W.name,W);M.use(Ge);M.mount("#app");export{N as _,I as s};