import{_ as t,a as n,b as a,c as r,i as s,d as e,S as o,s as c,e as u,t as f,f as i,g as l,h,j as p,k as v,l as d,H as m,m as y,n as R,o as M,p as g,q as P,r as x,u as z}from"./client.09afcda5.js";function B(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,e=n(t);if(r){var o=n(this).constructor;s=Reflect.construct(e,arguments,o)}else s=e.apply(this,arguments);return a(this,s)}}function E(t){var n,a,r,s,e,o,c,B,E,b;return{c:function(){n=u("p"),a=f("Planet #"),r=f(t[1]),s=f(" is "),o=i(),c=u("button"),B=f("Randomize"),this.h()},l:function(e){n=l(e,"P",{class:!0});var u=h(n);a=p(u,"Planet #"),r=p(u,t[1]),s=p(u," is "),u.forEach(v),o=d(e),c=l(e,"BUTTON",{});var f=h(c);B=p(f,"Randomize"),f.forEach(v),this.h()},h:function(){e=new m(null),y(n,"class","svelte-f1x1z9")},m:function(u,f){R(u,n,f),M(n,a),M(n,r),M(n,s),e.m(t[0],n),R(u,o,f),R(u,c,f),M(c,B),E||(b=g(c,"click",t[2]),E=!0)},p:function(t,n){var a=P(n,1)[0];2&a&&x(r,t[1]),1&a&&e.p(t[0])},i:z,o:z,d:function(t){t&&v(n),t&&v(o),t&&v(c),E=!1,b()}}}function b(t,n,a){var r=["Mercury","Venus","<strong>Earth</strong>","Mars","Jupiter","Saturn","Uranus","Neptune","<del>Pluto</del>"],s=Math.floor(Math.random()*r.length),e=r[s],o=s+1;return[e,o,function(){var t=Math.floor(Math.random()*r.length);a(0,e=r[t]),a(1,o=t+1)}]}var j=function(n){t(u,o);var a=B(u);function u(t){var n;return r(this,u),n=a.call(this),s(e(n),t,b,E,c,{}),n}return u}();export default j;
