var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function u(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function s(t){t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function f(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e){t.value=null==e?"":e}let m;function h(t){m=t}const g=[],$=[],v=[],b=[],k=Promise.resolve();let x=!1;function y(t){v.push(t)}let P=!1;const H=new Set;function _(){if(!P){P=!0;do{for(let t=0;t<g.length;t+=1){const e=g[t];h(e),w(e.$$)}for(h(null),g.length=0;$.length;)$.pop()();for(let t=0;t<v.length;t+=1){const e=v[t];H.has(e)||(H.add(e),e())}v.length=0}while(g.length);for(;b.length;)b.pop()();x=!1,P=!1,H.clear()}}function w(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(y)}}const E=new Set;function L(t,e){t&&t.i&&(E.delete(t),t.i(e))}function T(t,n,u,a){const{fragment:i,on_mount:s,on_destroy:c,after_update:l}=t.$$;i&&i.m(n,u),a||y((()=>{const n=s.map(e).filter(r);c?c.push(...n):o(n),t.$$.on_mount=[]})),l.forEach(y)}function z(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function K(t,e){-1===t.$$.dirty[0]&&(g.push(t),x||(x=!0,k.then(_)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function j(e,r,u,a,i,c,l=[-1]){const f=m;h(e);const d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:r.context||[]),callbacks:n(),dirty:l,skip_bound:!1};let p=!1;if(d.ctx=u?u(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&i(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),p&&K(e,t)),n})):[],d.update(),p=!0,o(d.before_update),d.fragment=!!a&&a(d.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);d.fragment&&d.fragment.l(t),t.forEach(s)}else d.fragment&&d.fragment.c();r.intro&&L(e.$$.fragment),T(e,r.target,r.anchor,r.customElement),_()}h(f)}class A{$destroy(){z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function N(e){let n,o,r,u=O(e[0])+"";return{c(){n=c("main"),o=l("this is your food consumed per hour: "),r=l(u),d(n,"class","svelte-u9qvfs")},m(t,e){i(t,n,e),a(n,o),a(n,r)},p(t,[e]){1&e&&u!==(u=O(t[0])+"")&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(r,u)},i:t,o:t,d(t){t&&s(n)}}}function O(t){var e;let n=(t.dmgTaken*(1==(e=t.zone)?300:2==e?500:600)-t.afkKillsPerHour*t.maxHP*t.hemoLevelPercentages*.01)/(o=t.maxHP,r=t.foodHealing,o<r?o:r);var o,r;return n<=0?0:n}function q(t,e,n){let{props:o}=e;return t.$$set=t=>{"props"in t&&n(0,o=t.props)},[o]}class C extends A{constructor(t){super(),j(this,t,q,N,u,{props:0})}}function S(t){let e,n,r,u,m,h,g,$,v,b,k,x,y,P,H,_,w,K,j,A,N,O,q,S;return N=new C({props:{props:t[0]}}),{c(){var t;e=c("main"),n=l("dmg taken\n\t"),r=c("input"),u=c("br"),m=l("\n\tzone (1,2,3)\n\t"),h=c("input"),g=c("br"),$=l("\n\tmax hp\n\t"),v=c("input"),b=c("br"),k=l("\n\tfood healing value\n\t"),x=c("input"),y=c("br"),P=l("\n\themo %\n\t"),H=c("input"),_=c("br"),w=l("\n\tafk kills/hr\n\t"),K=c("input"),j=c("br"),A=l(" "),(t=N.$$.fragment)&&t.c(),d(e,"class","svelte-1tky8bj")},m(o,s){i(o,e,s),a(e,n),a(e,r),p(r,t[0].dmgTaken),a(e,u),a(e,m),a(e,h),p(h,t[0].zone),a(e,g),a(e,$),a(e,v),p(v,t[0].maxHP),a(e,b),a(e,k),a(e,x),p(x,t[0].foodHealing),a(e,y),a(e,P),a(e,H),p(H,t[0].hemoLevelPercentages),a(e,_),a(e,w),a(e,K),p(K,t[0].afkKillsPerHour),a(e,j),a(e,A),T(N,e,null),O=!0,q||(S=[f(r,"input",t[1]),f(h,"input",t[2]),f(v,"input",t[3]),f(x,"input",t[4]),f(H,"input",t[5]),f(K,"input",t[6])],q=!0)},p(t,[e]){1&e&&r.value!==t[0].dmgTaken&&p(r,t[0].dmgTaken),1&e&&h.value!==t[0].zone&&p(h,t[0].zone),1&e&&v.value!==t[0].maxHP&&p(v,t[0].maxHP),1&e&&x.value!==t[0].foodHealing&&p(x,t[0].foodHealing),1&e&&H.value!==t[0].hemoLevelPercentages&&p(H,t[0].hemoLevelPercentages),1&e&&K.value!==t[0].afkKillsPerHour&&p(K,t[0].afkKillsPerHour);const n={};1&e&&(n.props=t[0]),N.$set(n)},i(t){O||(L(N.$$.fragment,t),O=!0)},o(t){!function(t,e,n,o){if(t&&t.o){if(E.has(t))return;E.add(t),(void 0).c.push((()=>{E.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}(N.$$.fragment,t),O=!1},d(t){t&&s(e),z(N),q=!1,o(S)}}}function B(t,e,n){let o={dmgTaken:0,zone:0,maxHP:0,foodHealing:0,hemoLevelPercentages:0,afkKillsPerHour:0};return[o,function(){o.dmgTaken=this.value,n(0,o)},function(){o.zone=this.value,n(0,o)},function(){o.maxHP=this.value,n(0,o)},function(){o.foodHealing=this.value,n(0,o)},function(){o.hemoLevelPercentages=this.value,n(0,o)},function(){o.afkKillsPerHour=this.value,n(0,o)}]}return new class extends A{constructor(t){super(),j(this,t,B,S,u,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
