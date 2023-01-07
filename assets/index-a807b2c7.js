(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function p(){}const Le=t=>t;function Me(t,e){for(const n in e)t[n]=e[n];return t}function Ie(t){return t&&typeof t=="object"&&typeof t.then=="function"}function ve(t){return t()}function ie(){return Object.create(null)}function S(t){t.forEach(ve)}function ee(t){return typeof t=="function"}function O(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let D;function J(t,e){return D||(D=document.createElement("a")),D.href=e,t===D.href}function Se(t){return Object.keys(t).length===0}function we(t,e,n,l){if(t){const r=$e(t,e,n,l);return t[0](r)}}function $e(t,e,n,l){return t[1]&&l?Me(n.ctx.slice(),t[1](l(e))):n.ctx}function Ee(t,e,n,l){if(t[2]&&l){const r=t[2](l(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],i=Math.max(e.dirty.length,r.length);for(let c=0;c<i;c+=1)o[c]=e.dirty[c]|r[c];return o}return e.dirty|r}return e.dirty}function Ce(t,e,n,l,r,o){if(r){const i=$e(e,n,l,o);t.p(i,r)}}function Be(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let l=0;l<n;l++)e[l]=-1;return e}return-1}function ze(t){const e={};for(const n in t)e[n]=!0;return e}const Ne=typeof window<"u";let Fe=Ne?()=>window.performance.now():()=>Date.now(),te=Ne?t=>requestAnimationFrame(t):p;const P=new Set;function Pe(t){P.forEach(e=>{e.c(t)||(P.delete(e),e.f())}),P.size!==0&&te(Pe)}function Re(t){let e;return P.size===0&&te(Pe),{promise:new Promise(n=>{P.add(e={c:t,f:n})}),abort(){P.delete(e)}}}function $(t,e){t.appendChild(e)}function Te(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Ye(t){const e=v("style");return De(Te(t),e),e.sheet}function De(t,e){return $(t.head||t,e),e.sheet}function k(t,e,n){t.insertBefore(e,n||null)}function y(t){t.parentNode&&t.parentNode.removeChild(t)}function je(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function V(t){return document.createTextNode(t)}function L(){return V(" ")}function ne(){return V("")}function le(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function h(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function He(t){return Array.from(t.childNodes)}function Oe(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function se(t,e,n,l){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,l?"important":"")}function Ke(t,e,{bubbles:n=!1,cancelable:l=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,l,e),r}const Q=new Map;let U=0;function Ge(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Je(t,e){const n={stylesheet:Ye(e),rules:{}};return Q.set(t,n),n}function Qe(t,e,n,l,r,o,i,c=0){const s=16.666/l;let a=`{
`;for(let C=0;C<=1;C+=s){const N=e+(n-e)*o(C);a+=C*100+`%{${i(N,1-N)}}
`}const f=a+`100% {${i(n,1-n)}}
}`,_=`__svelte_${Ge(f)}_${c}`,u=Te(t),{stylesheet:d,rules:m}=Q.get(u)||Je(u,t);m[_]||(m[_]=!0,d.insertRule(`@keyframes ${_} ${f}`,d.cssRules.length));const w=t.style.animation||"";return t.style.animation=`${w?`${w}, `:""}${_} ${l}ms linear ${r}ms 1 both`,U+=1,_}function ce(t,e){const n=(t.style.animation||"").split(", "),l=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),r=n.length-l.length;r&&(t.style.animation=l.join(", "),U-=r,U||Ue())}function Ue(){te(()=>{U||(Q.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&y(e)}),Q.clear())})}let M;function E(t){M=t}function qe(){if(!M)throw new Error("Function called outside component initialization");return M}function Ve(t){qe().$$.on_mount.push(t)}function ue(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(l=>l.call(this,e))}const A=[],fe=[],K=[],ae=[],We=Promise.resolve();let x=!1;function Xe(){x||(x=!0,We.then(re))}function I(t){K.push(t)}const Z=new Set;let H=0;function re(){const t=M;do{for(;H<A.length;){const e=A[H];H++,E(e),Ze(e.$$)}for(E(null),A.length=0,H=0;fe.length;)fe.pop()();for(let e=0;e<K.length;e+=1){const n=K[e];Z.has(n)||(Z.add(n),n())}K.length=0}while(A.length);for(;ae.length;)ae.pop()();x=!1,Z.clear(),E(t)}function Ze(t){if(t.fragment!==null){t.update(),S(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}let q;function xe(){return q||(q=Promise.resolve(),q.then(()=>{q=null})),q}function _e(t,e,n){t.dispatchEvent(Ke(`${e?"intro":"outro"}${n}`))}const G=new Set;let B;function T(){B={r:0,c:[],p:B}}function j(){B.r||S(B.c),B=B.p}function g(t,e){t&&t.i&&(G.delete(t),t.i(e))}function b(t,e,n,l){if(t&&t.o){if(G.has(t))return;G.add(t),B.c.push(()=>{G.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}const et={duration:0};function tt(t,e,n){const l={direction:"in"};let r=e(t,n,l),o=!1,i,c,s=0;function a(){i&&ce(t,i)}function f(){const{delay:u=0,duration:d=300,easing:m=Le,tick:w=p,css:C}=r||et;C&&(i=Qe(t,0,1,d,u,m,C,s++)),w(0,1);const N=Fe()+u,Ae=N+d;c&&c.abort(),o=!0,I(()=>_e(t,!0,"start")),c=Re(X=>{if(o){if(X>=Ae)return w(1,0),_e(t,!0,"end"),a(),o=!1;if(X>=N){const oe=m((X-N)/d);w(oe,1-oe)}}return o})}let _=!1;return{start(){_||(_=!0,ce(t),ee(r)?(r=r(l),xe().then(f)):f())},invalidate(){_=!1},end(){o&&(a(),o=!1)}}}function de(t,e){const n=e.token={};function l(r,o,i,c){if(e.token!==n)return;e.resolved=c;let s=e.ctx;i!==void 0&&(s=s.slice(),s[i]=c);const a=r&&(e.current=r)(s);let f=!1;e.block&&(e.blocks?e.blocks.forEach((_,u)=>{u!==o&&_&&(T(),b(_,1,1,()=>{e.blocks[u]===_&&(e.blocks[u]=null)}),j())}):e.block.d(1),a.c(),g(a,1),a.m(e.mount(),e.anchor),f=!0),e.block=a,e.blocks&&(e.blocks[o]=a),f&&re()}if(Ie(t)){const r=qe();if(t.then(o=>{E(r),l(e.then,1,e.value,o),E(null)},o=>{if(E(r),l(e.catch,2,e.error,o),E(null),!e.hasCatch)throw o}),e.current!==e.pending)return l(e.pending,0),!0}else{if(e.current!==e.then)return l(e.then,1,e.value,t),!0;e.resolved=t}}function nt(t,e,n){const l=e.slice(),{resolved:r}=t;t.current===t.then&&(l[t.value]=r),t.current===t.catch&&(l[t.error]=r),t.block.p(l,n)}function W(t){t&&t.c()}function z(t,e,n,l){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),l||I(()=>{const i=t.$$.on_mount.map(ve).filter(ee);t.$$.on_destroy?t.$$.on_destroy.push(...i):S(i),t.$$.on_mount=[]}),o.forEach(I)}function F(t,e){const n=t.$$;n.fragment!==null&&(S(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function lt(t,e){t.$$.dirty[0]===-1&&(A.push(t),Xe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function R(t,e,n,l,r,o,i,c=[-1]){const s=M;E(t);const a=t.$$={fragment:null,ctx:[],props:o,update:p,not_equal:r,bound:ie(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:ie(),dirty:c,skip_bound:!1,root:e.target||s.$$.root};i&&i(a.root);let f=!1;if(a.ctx=n?n(t,e.props||{},(_,u,...d)=>{const m=d.length?d[0]:u;return a.ctx&&r(a.ctx[_],a.ctx[_]=m)&&(!a.skip_bound&&a.bound[_]&&a.bound[_](m),f&&lt(t,_)),u}):[],a.update(),f=!0,S(a.before_update),a.fragment=l?l(a.ctx):!1,e.target){if(e.hydrate){const _=He(e.target);a.fragment&&a.fragment.l(_),_.forEach(y)}else a.fragment&&a.fragment.c();e.intro&&g(t.$$.fragment),z(t,e.target,e.anchor,e.customElement),re()}E(s)}class Y{$destroy(){F(this,1),this.$destroy=p}$on(e,n){if(!ee(n))return p;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const r=l.indexOf(n);r!==-1&&l.splice(r,1)}}$set(e){this.$$set&&!Se(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function rt(t){let e,n,l;return{c(){e=v("button"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="-35.20005 -41.33325 305.0671 247.9995"><path d="M229.763 25.817c-2.699-10.162-10.65-18.165-20.748-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.553 7.652 7.6 15.655 4.903 25.817 0 44.236 0 82.667 0 82.667s0 38.429 4.903 56.85C7.6 149.68 15.553 157.681 25.65 160.4c18.3 4.934 91.682 4.934 91.682 4.934s73.383 0 91.682-4.934c10.098-2.718 18.049-10.72 20.748-20.882 4.904-18.421 4.904-56.85 4.904-56.85s0-38.431-4.904-56.85" fill="red"></path><path d="M93.333 117.559l61.333-34.89-61.333-34.894z" fill="#fff"></path></svg>',h(e,"class","svelte-qc0w97")},m(r,o){k(r,e,o),n||(l=le(e,"click",t[4]),n=!0)},p,i:p,o:p,d(r){r&&y(e),n=!1,l()}}}function ot(t){let e,n,l,r;const o=t[2].default,i=we(o,t,t[1],null);return{c(){e=v("div"),i&&i.c(),h(e,"class","play-button svelte-qc0w97")},m(c,s){k(c,e,s),i&&i.m(e,null),n=!0,l||(r=le(e,"click",t[3]),l=!0)},p(c,s){i&&i.p&&(!n||s&2)&&Ce(i,o,c,c[1],n?Ee(o,c[1],s,null):Be(c[1]),null)},i(c){n||(g(i,c),n=!0)},o(c){b(i,c),n=!1},d(c){c&&y(e),i&&i.d(c),l=!1,r()}}}function it(t){let e,n,l,r;const o=[ot,rt],i=[];function c(s,a){return s[0]?0:1}return e=c(t),n=i[e]=o[e](t),{c(){n.c(),l=ne()},m(s,a){i[e].m(s,a),k(s,l,a),r=!0},p(s,[a]){let f=e;e=c(s),e===f?i[e].p(s,a):(T(),b(i[f],1,1,()=>{i[f]=null}),j(),n=i[e],n?n.p(s,a):(n=i[e]=o[e](s),n.c()),g(n,1),n.m(l.parentNode,l))},i(s){r||(g(n),r=!0)},o(s){b(n),r=!1},d(s){i[e].d(s),s&&y(l)}}}function st(t,e,n){let{$$slots:l={},$$scope:r}=e,{isCustomPlayButton:o}=e;function i(s){ue.call(this,t,s)}function c(s){ue.call(this,t,s)}return t.$$set=s=>{"isCustomPlayButton"in s&&n(0,o=s.isCustomPlayButton),"$$scope"in s&&n(1,r=s.$$scope)},[o,r,l,i,c]}class ct extends Y{constructor(e){super(),R(this,e,st,it,O,{isCustomPlayButton:0})}}function ut(t){const e=t-1;return e*e*e+1}function ft(t,{delay:e=0,duration:n=400,easing:l=ut,start:r=0,opacity:o=0}={}){const i=getComputedStyle(t),c=+i.opacity,s=i.transform==="none"?"":i.transform,a=1-r,f=c*(1-o);return{delay:e,duration:n,easing:l,css:(_,u)=>`
			transform: ${s} scale(${1-a*u});
			opacity: ${c-f*u}
		`}}function at(t){let e,n,l;return{c(){e=v("iframe"),J(e.src,n="https://www.youtube.com/embed/"+t[1]+"?autoplay=1&rel=0")||h(e,"src",n),h(e,"title",t[0]),h(e,"frameborder","0"),h(e,"allow","autoplay; picture-in-picture; clipboard-write"),e.allowFullscreen=!0,h(e,"class","svelte-11gebsu")},m(r,o){k(r,e,o)},p(r,[o]){o&2&&!J(e.src,n="https://www.youtube.com/embed/"+r[1]+"?autoplay=1&rel=0")&&h(e,"src",n),o&1&&h(e,"title",r[0])},i(r){l||I(()=>{l=tt(e,ft,{delay:500,duration:800}),l.start()})},o:p,d(r){r&&y(e)}}}function _t(t,e,n){let{title:l=""}=e,{id:r=""}=e;return t.$$set=o=>{"title"in o&&n(0,l=o.title),"id"in o&&n(1,r=o.id)},[l,r]}class dt extends Y{constructor(e){super(),R(this,e,_t,at,O,{title:0,id:1})}}function me(t){let e,n,l;return{c(){e=v("img"),J(e.src,n="https://i.ytimg.com/vi/"+t[0]+"/"+(t[2]?"hqdefault":"maxresdefault")+".jpg")||h(e,"src",n),h(e,"title",t[1]),h(e,"alt",l="Youtube video: "+t[1]),h(e,"referrerpolicy","no-referrer"),h(e,"class","svelte-hw9fhp")},m(r,o){k(r,e,o)},p(r,o){o&5&&!J(e.src,n="https://i.ytimg.com/vi/"+r[0]+"/"+(r[2]?"hqdefault":"maxresdefault")+".jpg")&&h(e,"src",n),o&2&&h(e,"title",r[1]),o&2&&l!==(l="Youtube video: "+r[1])&&h(e,"alt",l)},d(r){r&&y(e)}}}function mt(t){let e=t[3],n,l=me(t);return{c(){l.c(),n=ne()},m(r,o){l.m(r,o),k(r,n,o)},p(r,[o]){o&8&&O(e,e=r[3])?(l.d(1),l=me(r),l.c(),l.m(n.parentNode,n)):l.p(r,o)},i:p,o:p,d(r){r&&y(n),l.d(r)}}}function ht(t,e,n){let{id:l=""}=e,{title:r=""}=e,{altThumb:o=""}=e,{play:i=!1}=e;return t.$$set=c=>{"id"in c&&n(0,l=c.id),"title"in c&&n(1,r=c.title),"altThumb"in c&&n(2,o=c.altThumb),"play"in c&&n(3,i=c.play)},[l,r,o,i]}class pt extends Y{constructor(e){super(),R(this,e,ht,mt,O,{id:0,title:1,altThumb:2,play:3})}}function he(t){t[10]=t[13].title,t[11]=t[13].width,t[12]=t[13].height}function gt(t){return{c:p,m:p,p,i:p,o:p,d:p}}function bt(t){he(t);let e,n,l,r,o,i;const c=[kt,yt],s=[];function a(_,u){return _[3]?0:1}n=a(t),l=s[n]=c[n](t);let f=!t[3]&&pe(t);return{c(){e=v("div"),l.c(),r=L(),f&&f.c(),h(e,"class","you__tube svelte-1u7a0y3"),se(e,"--aspect-ratio",t[11]/t[12]||"16/9"),h(e,"title",o=t[10])},m(_,u){k(_,e,u),s[n].m(e,null),$(e,r),f&&f.m(e,null),i=!0},p(_,u){he(_);let d=n;n=a(_),n===d?s[n].p(_,u):(T(),b(s[d],1,1,()=>{s[d]=null}),j(),l=s[n],l?l.p(_,u):(l=s[n]=c[n](_),l.c()),g(l,1),l.m(e,r)),_[3]?f&&(T(),b(f,1,1,()=>{f=null}),j()):f?(f.p(_,u),u&8&&g(f,1)):(f=pe(_),f.c(),g(f,1),f.m(e,null)),(!i||u&4)&&se(e,"--aspect-ratio",_[11]/_[12]||"16/9"),(!i||u&4&&o!==(o=_[10]))&&h(e,"title",o)},i(_){i||(g(l),g(f),i=!0)},o(_){b(l),b(f),i=!1},d(_){_&&y(e),s[n].d(),f&&f.d()}}}function yt(t){let e,n,l,r,o,i,c=t[10]+"",s,a,f,_;return e=new pt({props:{id:t[0],title:t[10],altThumb:t[1],play:t[3]}}),{c(){W(e.$$.fragment),n=L(),l=v("div"),r=L(),o=v("div"),i=v("h3"),s=V(c),h(l,"class","b__overlay svelte-1u7a0y3"),h(i,"class","svelte-1u7a0y3"),h(o,"class","v__title svelte-1u7a0y3")},m(u,d){z(e,u,d),k(u,n,d),k(u,l,d),k(u,r,d),k(u,o,d),$(o,i),$(i,s),a=!0,f||(_=le(l,"click",t[6]),f=!0)},p(u,d){const m={};d&1&&(m.id=u[0]),d&4&&(m.title=u[10]),d&2&&(m.altThumb=u[1]),d&8&&(m.play=u[3]),e.$set(m),(!a||d&4)&&c!==(c=u[10]+"")&&Oe(s,c)},i(u){a||(g(e.$$.fragment,u),a=!0)},o(u){b(e.$$.fragment,u),a=!1},d(u){F(e,u),u&&y(n),u&&y(l),u&&y(r),u&&y(o),f=!1,_()}}}function kt(t){let e,n;return e=new dt({props:{play:t[3],id:t[0],title:t[10]}}),{c(){W(e.$$.fragment)},m(l,r){z(e,l,r),n=!0},p(l,r){const o={};r&8&&(o.play=l[3]),r&1&&(o.id=l[0]),r&4&&(o.title=l[10]),e.$set(o)},i(l){n||(g(e.$$.fragment,l),n=!0)},o(l){b(e.$$.fragment,l),n=!1},d(l){F(e,l)}}}function pe(t){let e,n;return e=new ct({props:{isCustomPlayButton:t[4],$$slots:{default:[vt]},$$scope:{ctx:t}}}),e.$on("click",t[7]),{c(){W(e.$$.fragment)},m(l,r){z(e,l,r),n=!0},p(l,r){const o={};r&256&&(o.$$scope={dirty:r,ctx:l}),e.$set(o)},i(l){n||(g(e.$$.fragment,l),n=!0)},o(l){b(e.$$.fragment,l),n=!1},d(l){F(e,l)}}}function vt(t){let e;const n=t[5].default,l=we(n,t,t[8],null);return{c(){l&&l.c()},m(r,o){l&&l.m(r,o),e=!0},p(r,o){l&&l.p&&(!e||o&256)&&Ce(l,n,r,r[8],e?Ee(n,r[8],o,null):Be(r[8]),null)},i(r){e||(g(l,r),e=!0)},o(r){b(l,r),e=!1},d(r){l&&l.d(r)}}}function wt(t){return{c:p,m:p,p,i:p,o:p,d:p}}function $t(t){let e,n,l,r={ctx:t,current:null,token:null,hasCatch:!1,pending:wt,then:bt,catch:gt,value:13,blocks:[,,,]};return de(n=t[2],r),{c(){e=ne(),r.block.c()},m(o,i){k(o,e,i),r.block.m(o,r.anchor=i),r.mount=()=>e.parentNode,r.anchor=e,l=!0},p(o,[i]){t=o,r.ctx=t,i&4&&n!==(n=t[2])&&de(n,r)||nt(r,t,i)},i(o){l||(g(r.block),l=!0)},o(o){for(let i=0;i<3;i+=1){const c=r.blocks[i];b(c)}l=!1},d(o){o&&y(e),r.block.d(o),r.token=null,r=null}}}function Et(t,e,n){let{$$slots:l={},$$scope:r}=e;const o=ze(l);let{id:i=null}=e,{altThumb:c=!1}=e,s={};s=fetch(`//www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${i}&format=json`).then(d=>d.json());let a=!1;const f=o.default,_=()=>n(3,a=!0),u=()=>n(3,a=!0);return t.$$set=d=>{"id"in d&&n(0,i=d.id),"altThumb"in d&&n(1,c=d.altThumb),"$$scope"in d&&n(8,r=d.$$scope)},[i,c,s,a,f,l,_,u,r]}class Ct extends Y{constructor(e){super(),R(this,e,Et,$t,O,{id:0,altThumb:1})}}function ge(t,e,n){const l=t.slice();return l[1]=e[n].name,l[2]=e[n].list,l[4]=n,l}function be(t,e,n){const l=t.slice();return l[5]=e[n],l}function ye(t){let e,n;return e=new Ct({props:{id:t[5]}}),{c(){W(e.$$.fragment)},m(l,r){z(e,l,r),n=!0},p(l,r){const o={};r&1&&(o.id=l[5]),e.$set(o)},i(l){n||(g(e.$$.fragment,l),n=!0)},o(l){b(e.$$.fragment,l),n=!1},d(l){F(e,l)}}}function ke(t){let e,n,l=t[1]+"",r,o,i,c,s,a=t[2],f=[];for(let u=0;u<a.length;u+=1)f[u]=ye(be(t,a,u));const _=u=>b(f[u],1,1,()=>{f[u]=null});return{c(){e=v("article"),n=v("h2"),r=V(l),o=L(),i=v("div");for(let u=0;u<f.length;u+=1)f[u].c();c=L(),h(n,"class","vid-group__title"),h(i,"class","vid-list")},m(u,d){k(u,e,d),$(e,n),$(n,r),$(e,o),$(e,i);for(let m=0;m<f.length;m+=1)f[m].m(i,null);$(e,c),s=!0},p(u,d){if((!s||d&1)&&l!==(l=u[1]+"")&&Oe(r,l),d&1){a=u[2];let m;for(m=0;m<a.length;m+=1){const w=be(u,a,m);f[m]?(f[m].p(w,d),g(f[m],1)):(f[m]=ye(w),f[m].c(),g(f[m],1),f[m].m(i,null))}for(T(),m=a.length;m<f.length;m+=1)_(m);j()}},i(u){if(!s){for(let d=0;d<a.length;d+=1)g(f[d]);s=!0}},o(u){f=f.filter(Boolean);for(let d=0;d<f.length;d+=1)b(f[d]);s=!1},d(u){u&&y(e),je(f,u)}}}function Bt(t){let e,n,l=t[0],r=[];for(let i=0;i<l.length;i+=1)r[i]=ke(ge(t,l,i));const o=i=>b(r[i],1,1,()=>{r[i]=null});return{c(){e=v("main");for(let i=0;i<r.length;i+=1)r[i].c()},m(i,c){k(i,e,c);for(let s=0;s<r.length;s+=1)r[s].m(e,null);n=!0},p(i,[c]){if(c&1){l=i[0];let s;for(s=0;s<l.length;s+=1){const a=ge(i,l,s);r[s]?(r[s].p(a,c),g(r[s],1)):(r[s]=ke(a),r[s].c(),g(r[s],1),r[s].m(e,null))}for(T(),s=l.length;s<r.length;s+=1)o(s);j()}},i(i){if(!n){for(let c=0;c<l.length;c+=1)g(r[c]);n=!0}},o(i){r=r.filter(Boolean);for(let c=0;c<r.length;c+=1)b(r[c]);n=!1},d(i){i&&y(e),je(r,i)}}}const Nt="https://api.npoint.io/221ca8132b538eb32182";function Pt(t,e,n){let l=[];return Ve(async function(){const o=await(await fetch(Nt)).json();console.log(o),n(0,l=o)}),[l]}class Tt extends Y{constructor(e){super(),R(this,e,Pt,Bt,O,{})}}new Tt({target:document.getElementById("app")});