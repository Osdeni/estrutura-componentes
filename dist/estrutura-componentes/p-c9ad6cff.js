const e="estrutura-componentes";let t,n,l,o=!1,s=!1,r=!1,i=!1,c=!1;const f="undefined"!=typeof window?window:{},a=f.CSS,u=f.document||{head:{}},d={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},p=(()=>(u.head.attachShadow+"").indexOf("[native")>-1)(),$=e=>Promise.resolve(e),b=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),m=(e,t,n)=>{n&&n.map(([n,l,o])=>{const s=h(e,n),r=y(t,o),i=w(n);d.ael(s,l,r,i),(t.o=t.o||[]).push(()=>d.rel(s,l,r,i))})},y=(e,t)=>n=>{256&e.t?e.s[t](n):(e.i=e.i||[]).push([t,n])},h=(e,t)=>8&t?f:e,w=e=>0!=(2&e),g="http://www.w3.org/1999/xlink",v=new WeakMap,k=e=>"sc-"+e.u,j={},_=e=>"object"==(e=typeof e)||"function"===e,O="undefined"!=typeof Deno,S=!(O||"undefined"==typeof global||"function"!=typeof require||!global.process||"string"!=typeof __filename||global.origin&&"string"==typeof global.origin),C=(O&&Deno,S?process:O&&Deno,S?process:O&&Deno,(e,t,...n)=>{let l=null,o=null,s=null,r=!1,i=!1,c=[];const f=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?f(l):null!=l&&"boolean"!=typeof l&&((r="function"!=typeof e&&!_(l))&&(l+=""),r&&i?c[c.length-1].p+=l:c.push(r?M(null,l):l),i=r)};if(f(n),t){t.key&&(o=t.key),t.name&&(s=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,c,R);const a=M(e,null);return a.$=t,c.length>0&&(a.m=c),a.h=o,a.g=s,a}),M=(e,t)=>({t:0,v:e,p:t,k:null,m:null,$:null,h:null,g:null}),x={},R={forEach:(e,t)=>e.map(D).forEach(t),map:(e,t)=>e.map(D).map(t).map(P)},D=e=>({vattrs:e.$,vchildren:e.m,vkey:e.h,vname:e.g,vtag:e.v,vtext:e.p}),P=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),C(e.vtag,t,...e.vchildren||[])}const t=M(e.vtag,e.vtext);return t.$=e.vattrs,t.m=e.vchildren,t.h=e.vkey,t.g=e.vname,t},T=(e,t,n,l,o,s)=>{if(n!==l){let i=ye(e,t),c=t.toLowerCase();if("class"===t){const t=e.classList,o=N(n),s=N(l);t.remove(...o.filter(e=>e&&!s.includes(e))),t.add(...s.filter(e=>e&&!o.includes(e)))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(i||"o"!==t[0]||"n"!==t[1]){const f=_(l);if((i||f&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{let o=null==l?"":l;"list"===t?i=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(r){}let a=!1;c!==(c=c.replace(/^xlink\:?/,""))&&(t=c,a=!0),null==l||!1===l?!1===l&&""!==e.getAttribute(t)||(a?e.removeAttributeNS(g,t):e.removeAttribute(t)):(!i||4&s||o)&&!f&&(l=!0===l?"":l,a?e.setAttributeNS(g,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):ye(f,c)?c.slice(2):c[2]+t.slice(3),n&&d.rel(e,t,n,!1),l&&d.ael(e,t,l,!1)}},E=/\s/,N=e=>e?e.split(E):[],U=(e,t,n,l)=>{const o=11===t.k.nodeType&&t.k.host?t.k.host:t.k,s=e&&e.$||j,r=t.$||j;for(l in s)l in r||T(o,l,s[l],void 0,n,t.t);for(l in r)T(o,l,s[l],r[l],n,t.t)},q=(e,s,c,f)=>{let a,d,p,$=s.m[c],b=0;if(o||(r=!0,"slot"===$.v&&(t&&f.classList.add(t+"-s"),$.t|=$.m?2:1)),null!==$.p)a=$.k=u.createTextNode($.p);else if(1&$.t)a=$.k=u.createTextNode("");else{if(i||(i="svg"===$.v),a=$.k=u.createElementNS(i?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&$.t?"slot-fb":$.v),i&&"foreignObject"===$.v&&(i=!1),U(null,$,i),null!=t&&a["s-si"]!==t&&a.classList.add(a["s-si"]=t),$.m)for(b=0;b<$.m.length;++b)d=q(e,$,b,a),d&&a.appendChild(d);"svg"===$.v?i=!1:"foreignObject"===a.tagName&&(i=!0)}return a["s-hn"]=l,3&$.t&&(a["s-sr"]=!0,a["s-cr"]=n,a["s-sn"]=$.g||"",p=e&&e.m&&e.m[c],p&&p.v===$.v&&e.k&&A(e.k,!1)),a},A=(e,t)=>{d.t|=1;const n=e.childNodes;for(let o=n.length-1;o>=0;o--){const e=n[o];e["s-hn"]!==l&&e["s-ol"]&&(V(e).insertBefore(e,W(e)),e["s-ol"].remove(),e["s-ol"]=void 0,r=!0),t&&A(e,t)}d.t&=-2},F=(e,t,n,o,s,r)=>{let i,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(c.shadowRoot&&c.tagName===l&&(c=c.shadowRoot);s<=r;++s)o[s]&&(i=q(null,n,s,e),i&&(o[s].k=i,c.insertBefore(i,W(t))))},H=(e,t,n,l,o)=>{for(;t<=n;++t)(l=e[t])&&(o=l.k,K(l),s=!0,o["s-ol"]?o["s-ol"].remove():A(o,!0),o.remove())},L=(e,t)=>e.v===t.v&&("slot"===e.v?e.g===t.g:e.h===t.h),W=e=>e&&e["s-ol"]||e,V=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,z=(e,t)=>{const n=t.k=e.k,l=e.m,o=t.m,s=t.v,r=t.p;let c;null===r?(i="svg"===s||"foreignObject"!==s&&i,"slot"===s||U(e,t,i),null!==l&&null!==o?((e,t,n,l)=>{let o,s,r=0,i=0,c=0,f=0,a=t.length-1,u=t[0],d=t[a],p=l.length-1,$=l[0],b=l[p];for(;r<=a&&i<=p;)if(null==u)u=t[++r];else if(null==d)d=t[--a];else if(null==$)$=l[++i];else if(null==b)b=l[--p];else if(L(u,$))z(u,$),u=t[++r],$=l[++i];else if(L(d,b))z(d,b),d=t[--a],b=l[--p];else if(L(u,b))"slot"!==u.v&&"slot"!==b.v||A(u.k.parentNode,!1),z(u,b),e.insertBefore(u.k,d.k.nextSibling),u=t[++r],b=l[--p];else if(L(d,$))"slot"!==u.v&&"slot"!==b.v||A(d.k.parentNode,!1),z(d,$),e.insertBefore(d.k,u.k),d=t[--a],$=l[++i];else{for(c=-1,f=r;f<=a;++f)if(t[f]&&null!==t[f].h&&t[f].h===$.h){c=f;break}c>=0?(s=t[c],s.v!==$.v?o=q(t&&t[i],n,c,e):(z(s,$),t[c]=void 0,o=s.k),$=l[++i]):(o=q(t&&t[i],n,i,e),$=l[++i]),o&&V(u.k).insertBefore(o,W(u.k))}r>a?F(e,null==l[p+1]?null:l[p+1].k,n,l,i,p):i>p&&H(t,r,a)})(n,l,t,o):null!==o?(null!==e.p&&(n.textContent=""),F(n,null,t,o,0,o.length-1)):null!==l&&H(l,0,l.length-1),i&&"svg"===s&&(i=!1)):(c=n["s-cr"])?c.parentNode.textContent=r:e.p!==r&&(n.data=r)},B=e=>{let t,n,l,o,s,r,i=e.childNodes;for(n=0,l=i.length;n<l;n++)if(t=i[n],1===t.nodeType){if(t["s-sr"])for(s=t["s-sn"],t.hidden=!1,o=0;o<l;o++)if(i[o]["s-hn"]!==t["s-hn"])if(r=i[o].nodeType,""!==s){if(1===r&&s===i[o].getAttribute("slot")){t.hidden=!0;break}}else if(1===r||3===r&&""!==i[o].textContent.trim()){t.hidden=!0;break}B(t)}},G=[],I=e=>{let t,n,l,o,r,i,c=0,f=e.childNodes,a=f.length;for(;c<a;c++){if(t=f[c],t["s-sr"]&&(n=t["s-cr"]))for(l=n.parentNode.childNodes,o=t["s-sn"],i=l.length-1;i>=0;i--)n=l[i],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(J(n,o)?(r=G.find(e=>e.j===n),s=!0,n["s-sn"]=n["s-sn"]||o,r?r._=t:G.push({_:t,j:n}),n["s-sr"]&&G.map(e=>{J(e.j,n["s-sn"])&&(r=G.find(e=>e.j===n),r&&!e._&&(e._=r._))})):G.some(e=>e.j===n)||G.push({j:n}));1===t.nodeType&&I(t)}},J=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,K=e=>{e.$&&e.$.ref&&e.$.ref(null),e.m&&e.m.map(K)},Q=e=>$e(e).O,X=(e,t,n)=>{const l=Q(e);return{emit:e=>Y(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},Y=(e,t,n)=>{const l=d.ce(t,n);return e.dispatchEvent(l),l},Z=(e,t)=>{t&&!e.S&&t["s-p"]&&t["s-p"].push(new Promise(t=>e.S=t))},ee=(e,t)=>{if(e.t|=16,!(4&e.t))return Z(e,e.C),Me(()=>te(e,t));e.t|=512},te=(e,t)=>{const n=e.s;return t&&(e.t|=256,e.i&&(e.i.map(([e,t])=>ie(n,e,t)),e.i=null)),ce(void 0,()=>ne(e,n,t))},ne=(e,i,c)=>{const f=e.O,a=f["s-rc"];c&&(e=>{const t=e.M,n=e.O,l=t.t,o=((e,t)=>{let n=k(t),l=ve.get(n);if(e=11===e.nodeType?e:u,l)if("string"==typeof l){let t,o=v.get(e=e.head||e);o||v.set(e,o=new Set),o.has(n)||(t=u.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(p&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(e);((e,i)=>{const c=e.O,f=e.M,a=e.R||M(null,null),$=(e=>e&&e.v===x)(i)?i:C(null,null,i);if(l=c.tagName,f.D&&($.$=$.$||{},f.D.map(([e,t])=>$.$[t]=c[e])),$.v=null,$.t|=4,e.R=$,$.k=a.k=c.shadowRoot||c,t=c["s-sc"],n=c["s-cr"],o=p&&0!=(1&f.t),s=!1,z(a,$),d.t|=1,r){let e,t,n,l,o,s;I($.k);let r=0;for(;r<G.length;r++)e=G[r],t=e.j,t["s-ol"]||(n=u.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(r=0;r<G.length;r++)if(e=G[r],t=e.j,e._){for(l=e._.parentNode,o=e._.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(s=n["s-nr"],s&&s["s-sn"]===t["s-sn"]&&l===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){o=s;break}(!o&&l!==t.parentNode||t.nextSibling!==o)&&t!==o&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,o))}else 1===t.nodeType&&(t.hidden=!0)}s&&B($.k),d.t&=-2,G.length=0})(e,le(e,i)),a&&(a.map(e=>e()),f["s-rc"]=void 0);{const t=f["s-p"],n=()=>oe(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},le=(e,t)=>{try{t=t.render(),e.t&=-17,e.t|=2}catch(n){he(n)}return t},oe=e=>{const t=e.O,n=e.C;ie(e.s,"componentDidRender"),64&e.t||(e.t|=64,fe(t),e.P(t),n||re()),e.T(t),e.S&&(e.S(),e.S=void 0),512&e.t&&Ce(()=>ee(e,!1)),e.t&=-517},se=e=>{{const t=$e(e),n=t.O.isConnected;return n&&2==(18&t.t)&&ee(t,!1),n}},re=()=>{fe(u.documentElement),Ce(()=>Y(f,"appload",{detail:{namespace:"estrutura-componentes"}}))},ie=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(l){he(l)}},ce=(e,t)=>e&&e.then?e.then(t):t(),fe=e=>e.classList.add("hydrated"),ae=(e,t,n)=>{if(t.N){e.watchers&&(t.U=e.watchers);const l=Object.entries(t.N),o=e.prototype;if(l.map(([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(o,e,{get(){return((e,t)=>$e(this).q.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=$e(e),s=o.q.get(t),r=o.t,i=o.s;if(n=((e,t)=>null==e||_(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.N[t][0]),!(8&r&&void 0!==s||n===s)&&(o.q.set(t,n),i)){if(l.U&&128&r){const e=l.U[t];e&&e.map(e=>{try{i[e](n,s,t)}catch(l){he(l)}})}2==(18&r)&&ee(o,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(o,e,{value(...t){const n=$e(this);return n.A.then(()=>n.s[e](...t))}})}),1&n){const n=new Map;o.attributeChangedCallback=function(e,t,l){d.jmp(()=>{const t=n.get(e);this[t]=(null!==l||"boolean"!=typeof this[t])&&l})},e.observedAttributes=l.filter(([e,t])=>15&t[0]).map(([e,l])=>{const o=l[1]||e;return n.set(o,e),512&l[0]&&t.D.push([e,o]),o})}}return e},ue=e=>{ie(e,"connectedCallback")},de=(e,t={})=>{const n=[],l=t.exclude||[],o=f.customElements,s=u.head,r=s.querySelector("meta[charset]"),i=u.createElement("style"),c=[];let a,$=!0;Object.assign(d,t),d.l=new URL(t.resourcesUrl||"./",u.baseURI).href,e.map(e=>e[1].map(t=>{const s={t:t[0],u:t[1],N:t[2],F:t[3]};s.N=t[2],s.F=t[3],s.D=[],s.U={},!p&&1&s.t&&(s.t|=8);const r=s.u,i=class extends HTMLElement{constructor(e){super(e),me(e=this,s),1&s.t&&(p?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){a&&(clearTimeout(a),a=null),$?c.push(this):d.jmp(()=>(e=>{if(0==(1&d.t)){const t=$e(e),n=t.M,l=()=>{};if(1&t.t)m(e,t,n.F),ue(t.s);else{t.t|=1,12&n.t&&(e=>{const t=e["s-cr"]=u.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){Z(t,t.C=n);break}}n.N&&Object.entries(n.N).map(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),Ce(()=>(async(e,t,n,l,o)=>{if(0==(32&t.t)){{if(t.t|=32,(o=ge(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(n.U=o.watchers,ae(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(i){he(i)}t.t&=-9,t.t|=128,e(),ue(t.s)}if(o.style){let e=o.style;const t=k(n);if(!ve.has(t)){const l=()=>{};8&n.t&&(e=await __sc_import_estrutura_componentes("./p-ebb4d602.js").then(n=>n.scopeCss(e,t,!1))),((e,t,n)=>{let l=ve.get(e);b&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,ve.set(e,l)})(t,e,!!(1&n.t)),l()}}}const s=t.C,r=()=>ee(t,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(0,t,n))}l()}})(this))}disconnectedCallback(){d.jmp(()=>(()=>{if(0==(1&d.t)){const e=$e(this),t=e.s;e.o&&(e.o.map(e=>e()),e.o=void 0),ie(t,"disconnectedCallback")}})())}forceUpdate(){se(this)}componentOnReady(){return $e(this).H}};s.L=e[0],l.includes(r)||o.get(r)||(n.push(r),o.define(r,ae(i,s,1)))})),i.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",i.setAttribute("data-styles",""),s.insertBefore(i,r?r.nextSibling:s.firstChild),$=!1,c.length?c.map(e=>e.connectedCallback()):d.jmp(()=>a=setTimeout(re,30))},pe=new WeakMap,$e=e=>pe.get(e),be=(e,t)=>pe.set(t.s=e,t),me=(e,t)=>{const n={t:0,O:e,M:t,q:new Map};return n.A=new Promise(e=>n.T=e),n.H=new Promise(e=>n.P=e),e["s-p"]=[],e["s-rc"]=[],m(e,n,t.F),pe.set(e,n)},ye=(e,t)=>t in e,he=e=>console.error(e),we=new Map,ge=e=>{const t=e.u.replace(/-/g,"_"),n=e.L,l=we.get(n);return l?l[t]:__sc_import_estrutura_componentes(`./${n}.entry.js`).then(e=>(we.set(n,e),e[t]),he)},ve=new Map,ke=[],je=[],_e=(e,t)=>n=>{e.push(n),c||(c=!0,t&&4&d.t?Ce(Se):d.raf(Se))},Oe=e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){he(t)}e.length=0},Se=()=>{Oe(ke),Oe(je),(c=ke.length>0)&&d.raf(Se)},Ce=e=>$().then(e),Me=_e(je,!0);export{a as C,x as H,e as N,$ as a,de as b,X as c,u as d,se as f,Q as g,C as h,d as p,be as r,f as w}