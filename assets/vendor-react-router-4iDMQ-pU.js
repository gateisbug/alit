import{r as n}from"./vendor-react-BgBXYHvm.js";import{i as v,g as U,r as O,j as P,c as T,m as S,A as z,p as w,s as V,a as $}from"./vendor-@remix-run-DIosy_T7.js";/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},N.apply(this,arguments)}const F=n.createContext(null),q=n.createContext(null),x=n.createContext(null),j=n.createContext(null),C=n.createContext({outlet:null,matches:[],isDataRoute:!1}),D=n.createContext(null);function ue(e,t){let{relative:r}=t===void 0?{}:t;R()||v(!1);let{basename:a,navigator:i}=n.useContext(x),{hash:s,pathname:o,search:d}=X(e,{relative:r}),c=o;return a!=="/"&&(c=o==="/"?a:P([a,o])),i.createHref({pathname:c,search:d,hash:s})}function R(){return n.useContext(j)!=null}function B(){return R()||v(!1),n.useContext(j).location}function J(e){n.useContext(x).static||n.useLayoutEffect(e)}function G(){let{isDataRoute:e}=n.useContext(C);return e?oe():K()}function K(){R()||v(!1);let e=n.useContext(F),{basename:t,future:r,navigator:a}=n.useContext(x),{matches:i}=n.useContext(C),{pathname:s}=B(),o=JSON.stringify(U(i,r.v7_relativeSplatPath)),d=n.useRef(!1);return J(()=>{d.current=!0}),n.useCallback(function(f,u){if(u===void 0&&(u={}),!d.current)return;if(typeof f=="number"){a.go(f);return}let l=O(f,JSON.parse(o),s,u.relative==="path");e==null&&t!=="/"&&(l.pathname=l.pathname==="/"?t:P([t,l.pathname])),(u.replace?a.replace:a.push)(l,u.state,u)},[t,a,o,s,e])}const Q=n.createContext(null);function W(e){let t=n.useContext(C).outlet;return t&&n.createElement(Q.Provider,{value:e},t)}function X(e,t){let{relative:r}=t===void 0?{}:t,{future:a}=n.useContext(x),{matches:i}=n.useContext(C),{pathname:s}=B(),o=JSON.stringify(U(i,a.v7_relativeSplatPath));return n.useMemo(()=>O(e,JSON.parse(o),s,r==="path"),[e,o,s,r])}function ce(e,t,r,a){R()||v(!1);let{navigator:i}=n.useContext(x),{matches:s}=n.useContext(C),o=s[s.length-1],d=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let f=B(),u;u=f;let l=u.pathname||"/",h=l;if(c!=="/"){let p=c.replace(/^\//,"").split("/");h="/"+l.replace(/^\//,"").split("/").slice(p.length).join("/")}let m=S(e,{pathname:h});return te(m&&m.map(p=>Object.assign({},p,{params:Object.assign({},d,p.params),pathname:P([c,i.encodeLocation?i.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?c:P([c,i.encodeLocation?i.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,r,a)}function Y(){let e=ne(),t=$(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return n.createElement(n.Fragment,null,n.createElement("h2",null,"Unexpected Application Error!"),n.createElement("h3",{style:{fontStyle:"italic"}},t),r?n.createElement("pre",{style:i},r):null,null)}const Z=n.createElement(Y,null);class H extends n.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?n.createElement(C.Provider,{value:this.props.routeContext},n.createElement(D.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ee(e){let{routeContext:t,match:r,children:a}=e,i=n.useContext(F);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),n.createElement(C.Provider,{value:t},a)}function te(e,t,r,a){var i;if(t===void 0&&(t=[]),r===void 0&&(r=null),a===void 0&&(a=null),e==null){var s;if(!r)return null;if(r.errors)e=r.matches;else if((s=a)!=null&&s.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,d=(i=r)==null?void 0:i.errors;if(d!=null){let u=o.findIndex(l=>l.route.id&&(d==null?void 0:d[l.route.id])!==void 0);u>=0||v(!1),o=o.slice(0,Math.min(o.length,u+1))}let c=!1,f=-1;if(r&&a&&a.v7_partialHydration)for(let u=0;u<o.length;u++){let l=o[u];if((l.route.HydrateFallback||l.route.hydrateFallbackElement)&&(f=u),l.route.id){let{loaderData:h,errors:m}=r,g=l.route.loader&&h[l.route.id]===void 0&&(!m||m[l.route.id]===void 0);if(l.route.lazy||g){c=!0,f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}return o.reduceRight((u,l,h)=>{let m,g=!1,p=null,E=null;r&&(m=d&&l.route.id?d[l.route.id]:void 0,p=l.route.errorElement||Z,c&&(f<0&&h===0?(g=!0,E=null):f===h&&(g=!0,E=l.route.hydrateFallbackElement||null)));let I=t.concat(o.slice(0,h+1)),k=()=>{let y;return m?y=p:g?y=E:l.route.Component?y=n.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=u,n.createElement(ee,{match:l,routeContext:{outlet:u,matches:I,isDataRoute:r!=null},children:y})};return r&&(l.route.ErrorBoundary||l.route.errorElement||h===0)?n.createElement(H,{location:r.location,revalidation:r.revalidation,component:p,error:m,children:k(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):k()},null)}var _=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(_||{}),b=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(b||{});function re(e){let t=n.useContext(F);return t||v(!1),t}function M(e){let t=n.useContext(q);return t||v(!1),t}function ae(e){let t=n.useContext(C);return t||v(!1),t}function A(e){let t=ae(),r=t.matches[t.matches.length-1];return r.route.id||v(!1),r.route.id}function de(){return M(b.UseNavigation).navigation}function fe(){let{matches:e,loaderData:t}=M(b.UseMatches);return n.useMemo(()=>e.map(r=>T(r,t)),[e,t])}function ne(){var e;let t=n.useContext(D),r=M(b.UseRouteError),a=A(b.UseRouteError);return t!==void 0?t:(e=r.errors)==null?void 0:e[a]}function oe(){let{router:e}=re(_.UseNavigateStable),t=A(b.UseNavigateStable),r=n.useRef(!1);return J(()=>{r.current=!0}),n.useCallback(function(i,s){s===void 0&&(s={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,N({fromRouteId:t},s)))},[e,t])}function pe(e){let{to:t,replace:r,state:a,relative:i}=e;R()||v(!1);let{future:s,static:o}=n.useContext(x),{matches:d}=n.useContext(C),{pathname:c}=B(),f=G(),u=O(t,U(d,s.v7_relativeSplatPath),c,i==="path"),l=JSON.stringify(u);return n.useEffect(()=>f(JSON.parse(l),{replace:r,state:a,relative:i}),[f,l,i,r,a]),null}function ve(e){return W(e.context)}function le(e){v(!1)}function he(e){let{basename:t="/",children:r=null,location:a,navigationType:i=z.Pop,navigator:s,static:o=!1,future:d}=e;R()&&v(!1);let c=t.replace(/^\/*/,"/"),f=n.useMemo(()=>({basename:c,navigator:s,static:o,future:N({v7_relativeSplatPath:!1},d)}),[c,d,s,o]);typeof a=="string"&&(a=w(a));let{pathname:u="/",search:l="",hash:h="",state:m=null,key:g="default"}=a,p=n.useMemo(()=>{let E=V(u,c);return E==null?null:{location:{pathname:E,search:l,hash:h,state:m,key:g},navigationType:i}},[c,u,l,h,m,g,i]);return p==null?null:n.createElement(x.Provider,{value:f},n.createElement(j.Provider,{children:r,value:p}))}new Promise(()=>{});function L(e,t){t===void 0&&(t=[]);let r=[];return n.Children.forEach(e,(a,i)=>{if(!n.isValidElement(a))return;let s=[...t,i];if(a.type===n.Fragment){r.push.apply(r,L(a.props.children,s));return}a.type!==le&&v(!1),!a.props.index||!a.props.children||v(!1);let o={id:a.props.id||s.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(o.children=L(a.props.children,s)),r.push(o)}),r}function me(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:n.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:n.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:n.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}export{F as D,x as N,ve as O,he as R,G as a,fe as b,de as c,q as d,ce as e,ue as f,X as g,L as h,le as i,pe as j,me as m,B as u};
