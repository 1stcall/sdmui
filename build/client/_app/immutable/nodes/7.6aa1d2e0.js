import{s as X,f as m,a as C,g as v,F as A,c as E,h as T,d as h,j as o,i as b,K as F,C as Y,l as K,m as O,x as k,y as N,n as R,N as U}from"../chunks/scheduler.ff2daed6.js";import{e as G}from"../chunks/each.e59479a4.js";import{S as Z,i as $}from"../chunks/index.61e6c943.js";function J(t,e,n){const l=t.slice();return l[6]=e[n].name,l[7]=e[n].description,l[8]=e[n].selected,l[9]=e[n].editable,l[10]=e[n].hasArgument,l[11]=e[n].argumentType,l[12]=e[n].argumentValue,l[13]=e,l[14]=n,l}function x(t){let e,n="";return{c(){e=m("td"),e.innerHTML=n},l(l){e=v(l,"TD",{"data-svelte-h":!0}),A(e)!=="svelte-171oj0u"&&(e.innerHTML=n)},m(l,a){b(l,e,a)},p:F,d(l){l&&h(e)}}}function ee(t){let e;function n(r,i){if(r[11]=="text")return ie;if(r[11]=="file")return ne;if(r[11]=="ipAddress")return le;if(r[11]=="multiFile")return te}let l=n(t),a=l&&l(t);return{c(){e=m("td"),a&&a.c(),this.h()},l(r){e=v(r,"TD",{class:!0});var i=T(e);a&&a.l(i),i.forEach(h),this.h()},h(){o(e,"class","col svelte-1wp0dc")},m(r,i){b(r,e,i),a&&a.m(e,null)},p(r,i){l===(l=n(r))&&a?a.p(r,i):(a&&a.d(1),a=l&&l(r),a&&(a.c(),a.m(e,null)))},d(r){r&&h(e),a&&a.d()}}}function te(t){let e,n,l,a;function r(){t[5].call(e,t[13],t[14])}return{c(){e=m("input"),this.h()},l(i){e=v(i,"INPUT",{type:!0}),this.h()},h(){o(e,"type","file"),e.disabled=n=!t[8],e.multiple=!0},m(i,d){b(i,e,d),l||(a=N(e,"change",r),l=!0)},p(i,d){t=i,d&1&&n!==(n=!t[8])&&(e.disabled=n)},d(i){i&&h(e),l=!1,a()}}}function le(t){let e,n,l,a;function r(){t[4].call(e,t[13],t[14])}return{c(){e=m("input"),this.h()},l(i){e=v(i,"INPUT",{type:!0,minlength:!0,maxlength:!0,size:!0,pattern:!0}),this.h()},h(){o(e,"type","text"),e.disabled=n=!t[8],o(e,"minlength","7"),o(e,"maxlength","15"),o(e,"size","15"),o(e,"pattern","^((\\d2|1\\d\\d|2[0-4]\\d|25[0-5])\\.)3(\\d2|1\\d\\d|2[0-4]\\d|25[0-5])$")},m(i,d){b(i,e,d),U(e,t[12]),l||(a=N(e,"input",r),l=!0)},p(i,d){t=i,d&1&&n!==(n=!t[8])&&(e.disabled=n),d&1&&e.value!==t[12]&&U(e,t[12])},d(i){i&&h(e),l=!1,a()}}}function ne(t){let e,n,l,a;function r(){t[3].call(e,t[13],t[14])}return{c(){e=m("input"),this.h()},l(i){e=v(i,"INPUT",{type:!0}),this.h()},h(){o(e,"type","file"),e.disabled=n=!t[8]},m(i,d){b(i,e,d),l||(a=N(e,"change",r),l=!0)},p(i,d){t=i,d&1&&n!==(n=!t[8])&&(e.disabled=n)},d(i){i&&h(e),l=!1,a()}}}function ie(t){let e,n,l,a;function r(){t[2].call(e,t[13],t[14])}return{c(){e=m("input"),this.h()},l(i){e=v(i,"INPUT",{type:!0}),this.h()},h(){o(e,"type","text"),e.disabled=n=!t[8]},m(i,d){b(i,e,d),U(e,t[12]),l||(a=N(e,"input",r),l=!0)},p(i,d){t=i,d&1&&n!==(n=!t[8])&&(e.disabled=n),d&1&&e.value!==t[12]&&U(e,t[12])},d(i){i&&h(e),l=!1,a()}}}function Q(t){let e,n,l,a=t[6]+"",r,i,d,c,s,u,p,f,w,P,I=t[7]+"",V,L,S,H;function W(){t[1].call(s,t[13],t[14])}function M(y,_){return y[10]==!0?ee:x}let D=M(t),g=D(t);return{c(){e=m("div"),n=m("td"),l=m("label"),r=K(a),d=C(),c=m("td"),s=m("input"),f=C(),g.c(),w=C(),P=m("p"),V=K(I),L=C(),this.h()},l(y){e=v(y,"DIV",{class:!0});var _=T(e);n=v(_,"TD",{class:!0});var j=T(n);l=v(j,"LABEL",{for:!0});var z=T(l);r=O(z,a),z.forEach(h),j.forEach(h),d=E(_),c=v(_,"TD",{class:!0});var q=T(c);s=v(q,"INPUT",{id:!0,type:!0}),q.forEach(h),f=E(_),g.l(_),w=E(_),P=v(_,"P",{});var B=T(P);V=O(B,I),B.forEach(h),L=E(_),_.forEach(h),this.h()},h(){o(l,"for",i=t[6]),o(n,"class","firstcol svelte-1wp0dc"),o(s,"id",u=t[6]),o(s,"type","checkbox"),s.disabled=p=!t[9],o(c,"class","col svelte-1wp0dc"),o(e,"class","row svelte-1wp0dc")},m(y,_){b(y,e,_),k(e,n),k(n,l),k(l,r),k(e,d),k(e,c),k(c,s),s.checked=t[8],k(e,f),g.m(e,null),k(e,w),k(e,P),k(P,V),k(e,L),S||(H=N(s,"change",W),S=!0)},p(y,_){t=y,_&1&&a!==(a=t[6]+"")&&R(r,a),_&1&&i!==(i=t[6])&&o(l,"for",i),_&1&&u!==(u=t[6])&&o(s,"id",u),_&1&&p!==(p=!t[9])&&(s.disabled=p),_&1&&(s.checked=t[8]),D===(D=M(t))&&g?g.p(t,_):(g.d(1),g=D(t),g&&(g.c(),g.m(e,w))),_&1&&I!==(I=t[7]+"")&&R(V,I)},d(y){y&&h(e),g.d(),S=!1,H()}}}function ae(t){let e,n="Switches list",l,a,r="This is the Switches list page for sdmui.",i,d,c=G(t[0].switches),s=[];for(let u=0;u<c.length;u+=1)s[u]=Q(J(t,c,u));return{c(){e=m("h1"),e.textContent=n,l=C(),a=m("p"),a.textContent=r,i=C(),d=m("form");for(let u=0;u<s.length;u+=1)s[u].c();this.h()},l(u){e=v(u,"H1",{"data-svelte-h":!0}),A(e)!=="svelte-elugta"&&(e.textContent=n),l=E(u),a=v(u,"P",{"data-svelte-h":!0}),A(a)!=="svelte-wpwm9"&&(a.textContent=r),i=E(u),d=v(u,"FORM",{class:!0});var p=T(d);for(let f=0;f<s.length;f+=1)s[f].l(p);p.forEach(h),this.h()},h(){o(d,"class","switches svelte-1wp0dc")},m(u,p){b(u,e,p),b(u,l,p),b(u,a,p),b(u,i,p),b(u,d,p);for(let f=0;f<s.length;f+=1)s[f]&&s[f].m(d,null)},p(u,[p]){if(p&1){c=G(u[0].switches);let f;for(f=0;f<c.length;f+=1){const w=J(u,c,f);s[f]?s[f].p(w,p):(s[f]=Q(w),s[f].c(),s[f].m(d,null))}for(;f<s.length;f+=1)s[f].d(1);s.length=c.length}},i:F,o:F,d(u){u&&(h(e),h(l),h(a),h(i),h(d)),Y(s,u)}}}function se(t,e,n){let{data:l}=e;function a(s,u){s[u].selected=this.checked,n(0,l)}function r(s,u){s[u].argumentValue=this.value,n(0,l)}function i(s,u){s[u].argumentValue=this.value,n(0,l)}function d(s,u){s[u].argumentValue=this.value,n(0,l)}function c(s,u){s[u].argumentValue=this.value,n(0,l)}return t.$$set=s=>{"data"in s&&n(0,l=s.data)},[l,a,r,i,d,c]}class fe extends Z{constructor(e){super(),$(this,e,se,ae,X,{data:0})}}export{fe as component};