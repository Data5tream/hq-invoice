import{f as u}from"./util.51cf7948.js";import{b as f,T as i,g as r,D as _,h as y,a as D}from"./balm.591669ac.js";import{U as N,M as S,a as d,b as T,i as l,j as e,x as v,k as x,u as t,N as s,t as o,V as k,W as p,d as B}from"./vue.3871716e.js";import{_ as b}from"./index.cad00c0d.js";const g=a=>(k("data-v-1898596d"),a=a(),p(),a),w=g(()=>B("h2",null,"Gesamtwerte",-1)),I=N({__name:"HqTotals",props:{totals:{type:Object,default:()=>({hours:0,value:0})},tax:{type:Number,default:0}},setup(a){const h=D(),c=m=>({text:m,success:()=>{h("Daten kopiert")}});return(m,V)=>{const n=S("copy");return d(),T("div",null,[w,l(t(y),{class:"totals-list"},{default:e(()=>[v((d(),x(t(r),null,{default:e(()=>[l(t(f),null,{default:e(()=>[s(o(a.totals.hours.toFixed(2)),1)]),_:1}),l(t(i),null,{default:e(()=>[s(" Std. ")]),_:1})]),_:1})),[[n,c(a.totals.hours.toFixed(2))]]),v((d(),x(t(r),null,{default:e(()=>[l(t(f),null,{default:e(()=>[s(o(t(u)(a.totals.value*(1-a.tax/100))),1)]),_:1}),l(t(i),null,{default:e(()=>[s(" Netto ("+o(100-a.tax)+"%) ",1)]),_:1})]),_:1})),[[n,c(t(u)(a.totals.value*(1-a.tax/100)))]]),v((d(),x(t(r),null,{default:e(()=>[l(t(f),null,{default:e(()=>[s(o(t(u)(a.totals.value*a.tax/100)),1)]),_:1}),l(t(i),null,{default:e(()=>[s(" Steuern ("+o(a.tax)+"%) ",1)]),_:1})]),_:1})),[[n,c(t(u)(a.totals.value*a.tax/100))]]),l(t(_)),v((d(),x(t(r),null,{default:e(()=>[l(t(f),null,{default:e(()=>[s(o(t(u)(a.totals.value)),1)]),_:1}),l(t(i),null,{default:e(()=>[s(" Brutto ")]),_:1})]),_:1})),[[n,c(t(u)(a.totals.value))]])]),_:1})])}}});const E=b(I,[["__scopeId","data-v-1898596d"]]);export{E as default};
