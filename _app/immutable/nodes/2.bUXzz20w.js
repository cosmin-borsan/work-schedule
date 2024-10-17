import{s as $,n as V,o as N}from"../chunks/scheduler.BvLojk_z.js";import{S as W,i as z,e as b,c as w,d as T,g as p,m as k,j as y,n as H,b as E,s as M,f as F,h as S,k as D,o as P}from"../chunks/index.BmMF69ck.js";function I(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function L(n,e,c){const t=n.slice();return t[9]=e[c],t[11]=c,t}function A(n,e,c){const t=n.slice();return t[12]=e[c],t}function J(n,e,c){const t=n.slice();return t[15]=e[c],t}function O(n){let e,c=n[15]+"",t;return{c(){e=b("div"),t=E(c),this.h()},l(l){e=w(l,"DIV",{class:!0});var h=T(e);t=F(h,c),h.forEach(p),this.h()},h(){k(e,"class","day-header svelte-10e22o6")},m(l,h){y(l,e,h),D(e,t)},p:V,d(l){l&&p(e)}}}function B(n){let e,c=n[12].date.getDate()+"",t;return{c(){e=b("p"),t=E(c),this.h()},l(l){e=w(l,"P",{class:!0});var h=T(e);t=F(h,c),h.forEach(p),this.h()},h(){k(e,"class","svelte-10e22o6")},m(l,h){y(l,e,h),D(e,t)},p:V,d(l){l&&p(e)}}}function G(n){let e,c='<div class="half-right svelte-10e22o6"></div>';return{c(){e=b("div"),e.innerHTML=c,this.h()},l(t){e=w(t,"DIV",{class:!0,"data-svelte-h":!0}),P(e)!=="svelte-1uvij5p"&&(e.innerHTML=c),this.h()},h(){k(e,"class","half-cell")},m(t,l){y(t,e,l)},d(t){t&&p(e)}}}function K(n){let e,c='<div class="half-left svelte-10e22o6"></div>';return{c(){e=b("div"),e.innerHTML=c,this.h()},l(t){e=w(t,"DIV",{class:!0,"data-svelte-h":!0}),P(e)!=="svelte-qikw8a"&&(e.innerHTML=c),this.h()},h(){k(e,"class","half-cell")},m(t,l){y(t,e,l)},d(t){t&&p(e)}}}function j(n){let e,c,t,l=n[12].type!=="empty"&&B(n),h=n[12].type==="night-start"&&G(),i=n[12].type==="night-end"&&K();return{c(){e=b("div"),l&&l.c(),c=M(),h&&h.c(),t=M(),i&&i.c(),this.h()},l(r){e=w(r,"DIV",{class:!0});var u=T(e);l&&l.l(u),c=S(u),h&&h.l(u),t=S(u),i&&i.l(u),u.forEach(p),this.h()},h(){k(e,"class","day "+(n[12].type==="day"?"shift-day":n[12].type==="night-start"||n[12].type==="night-end"?"":n[12].type==="rest"?"rest":"empty")+" svelte-10e22o6")},m(r,u){y(r,e,u),l&&l.m(e,null),D(e,c),h&&h.m(e,null),D(e,t),i&&i.m(e,null)},p(r,u){r[12].type!=="empty"&&l.p(r,u)},d(r){r&&p(e),l&&l.d(),h&&h.d(),i&&i.d()}}}function q(n){let e,c=n[9]+"",t,l,h,i,r,u,_,v=I(n[3]),o=[];for(let a=0;a<v.length;a+=1)o[a]=O(J(n,v,a));let m=I(n[4](n[11]+n[1],n[0])),d=[];for(let a=0;a<m.length;a+=1)d[a]=j(A(n,m,a));return{c(){e=b("div"),t=E(c),l=M(),h=E(n[0]),i=M(),r=b("div");for(let a=0;a<o.length;a+=1)o[a].c();u=M();for(let a=0;a<d.length;a+=1)d[a].c();_=M(),this.h()},l(a){e=w(a,"DIV",{class:!0});var g=T(e);t=F(g,c),l=S(g),h=F(g,n[0]),g.forEach(p),i=S(a),r=w(a,"DIV",{class:!0});var s=T(r);for(let f=0;f<o.length;f+=1)o[f].l(s);u=S(s);for(let f=0;f<d.length;f+=1)d[f].l(s);_=S(s),s.forEach(p),this.h()},h(){k(e,"class","day-header svelte-10e22o6"),k(r,"class","calendar svelte-10e22o6")},m(a,g){y(a,e,g),D(e,t),D(e,l),D(e,h),y(a,i,g),y(a,r,g);for(let s=0;s<o.length;s+=1)o[s]&&o[s].m(r,null);D(r,u);for(let s=0;s<d.length;s+=1)d[s]&&d[s].m(r,null);D(r,_)},p(a,g){if(g&8){v=I(a[3]);let s;for(s=0;s<v.length;s+=1){const f=J(a,v,s);o[s]?o[s].p(f,g):(o[s]=O(f),o[s].c(),o[s].m(r,u))}for(;s<o.length;s+=1)o[s].d(1);o.length=v.length}if(g&19){m=I(a[4](a[11]+a[1],a[0]));let s;for(s=0;s<m.length;s+=1){const f=A(a,m,s);d[s]?d[s].p(f,g):(d[s]=j(f),d[s].c(),d[s].m(r,_))}for(;s<d.length;s+=1)d[s].d(1);d.length=m.length}},d(a){a&&(p(e),p(i),p(r)),H(o,a),H(d,a)}}}function Q(n){let e,c=I(n[2].slice(n[1],12)),t=[];for(let l=0;l<c.length;l+=1)t[l]=q(L(n,c,l));return{c(){e=b("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=w(l,"DIV",{class:!0});var h=T(e);for(let i=0;i<t.length;i+=1)t[i].l(h);h.forEach(p),this.h()},h(){k(e,"class","month-group svelte-10e22o6")},m(l,h){y(l,e,h);for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(e,null)},p(l,[h]){if(h&31){c=I(l[2].slice(l[1],12));let i;for(i=0;i<c.length;i+=1){const r=L(l,c,i);t[i]?t[i].p(r,h):(t[i]=q(r),t[i].c(),t[i].m(e,null))}for(;i<t.length;i+=1)t[i].d(1);t.length=c.length}},i:V,o:V,d(l){l&&p(e),H(t,l)}}}let R=9;function U(n,e){return new Date(e,n+1,0).getDate()}function X(n,e){return(new Date(e,n,1).getDay()+6)%7}function Z(n){const e={start:"07:00",end:"19:00",color:"lightblue"},c={start:"19:00",end:"07:00",color:"lightgray"};let t=new Date().getFullYear();const l=new Date().getMonth(),h=["January","February","March","April","May","June","July","August","September","October","November","December"],i=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];function r(_,v){const o=U(_,v),m=[],d=new Date(t,9,16),a=new Date(v,_,1);let s=(Math.floor((a.getTime()-d.getTime())/(1e3*60*60*24))%4+4)%4,f=1;const Y=X(_,v);for(let C=0;C<Y;C++)m.push({date:new Date(v,_,C),type:"empty"});for(;f<=o;){switch(s){case 0:f<=o&&(m.push({date:new Date(v,_,f),shift:e,type:"day"}),f++);break;case 1:f<=o&&(m.push({date:new Date(v,_,f),shift:c,type:"night-start"}),f++);break;case 2:f<=o&&(m.push({date:new Date(v,_,f),shift:c,type:"night-end"}),f++);break;case 3:f<=o&&(m.push({date:new Date(v,_,f),type:"rest"}),f++);break}s=(s+1)%4}return m}function u(){r(R,t)}return N(()=>{u()}),[t,l,h,i,r]}class te extends W{constructor(e){super(),z(this,e,Z,Q,$,{})}}export{te as component};
