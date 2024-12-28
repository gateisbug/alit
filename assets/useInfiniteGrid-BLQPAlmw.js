var Ut=Object.defineProperty,kt=Object.defineProperties;var Dt=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var bt=Object.prototype.hasOwnProperty,gt=Object.prototype.propertyIsEnumerable;var vt=e=>{throw TypeError(e)};var pt=(e,t,s)=>t in e?Ut(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,T=(e,t)=>{for(var s in t||(t={}))bt.call(t,s)&&pt(e,s,t[s]);if(q)for(var s of q(t))gt.call(t,s)&&pt(e,s,t[s]);return e},Rt=(e,t)=>kt(e,Dt(t));var mt=(e,t)=>{var s={};for(var i in e)bt.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(e!=null&&q)for(var i of q(e))t.indexOf(i)<0&&gt.call(e,i)&&(s[i]=e[i]);return s};var Z=(e,t,s)=>t.has(e)||vt("Cannot "+s);var r=(e,t,s)=>(Z(e,t,"read from private field"),s?s.call(e):t.get(e)),v=(e,t,s)=>t.has(e)?vt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),l=(e,t,s,i)=>(Z(e,t,"write to private field"),i?i.call(e,s):t.set(e,s),s),f=(e,t,s)=>(Z(e,t,"access private method"),s);import{S as jt,p as yt,o as I,s as tt,q as K,t as _t,v as et,w as Ct,x as Pt,y as Lt,z as Mt,A as St,B as Qt,r as p,C as At,j as z,d as Bt}from"./index-COo1f1DW.js";var C,o,$,m,k,L,F,E,W,M,A,D,j,U,B,h,N,st,rt,it,nt,at,ot,ct,Tt,Ot,Ht=(Ot=class extends jt{constructor(t,s){super();v(this,h);v(this,C);v(this,o);v(this,$);v(this,m);v(this,k);v(this,L);v(this,F);v(this,E);v(this,W);v(this,M);v(this,A);v(this,D);v(this,j);v(this,U);v(this,B,new Set);this.options=s,l(this,C,t),l(this,E,null),l(this,F,yt()),this.options.experimental_prefetchInRender||r(this,F).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(s)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(r(this,o).addObserver(this),xt(r(this,o),this.options)?f(this,h,N).call(this):this.updateResult(),f(this,h,nt).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return ht(r(this,o),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return ht(r(this,o),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,f(this,h,at).call(this),f(this,h,ot).call(this),r(this,o).removeObserver(this)}setOptions(t,s){const i=this.options,u=r(this,o);if(this.options=r(this,C).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof I(this.options.enabled,r(this,o))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");f(this,h,ct).call(this),r(this,o).setOptions(this.options),i._defaulted&&!tt(this.options,i)&&r(this,C).getQueryCache().notify({type:"observerOptionsUpdated",query:r(this,o),observer:this});const a=this.hasListeners();a&&Et(r(this,o),u,this.options,i)&&f(this,h,N).call(this),this.updateResult(s),a&&(r(this,o)!==u||I(this.options.enabled,r(this,o))!==I(i.enabled,r(this,o))||K(this.options.staleTime,r(this,o))!==K(i.staleTime,r(this,o)))&&f(this,h,st).call(this);const n=f(this,h,rt).call(this);a&&(r(this,o)!==u||I(this.options.enabled,r(this,o))!==I(i.enabled,r(this,o))||n!==r(this,U))&&f(this,h,it).call(this,n)}getOptimisticResult(t){const s=r(this,C).getQueryCache().build(r(this,C),t),i=this.createResult(s,t);return zt(this,i)&&(l(this,m,i),l(this,L,this.options),l(this,k,r(this,o).state)),i}getCurrentResult(){return r(this,m)}trackResult(t,s){const i={};return Object.keys(t).forEach(u=>{Object.defineProperty(i,u,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(u),s==null||s(u),t[u])})}),i}trackProp(t){r(this,B).add(t)}getCurrentQuery(){return r(this,o)}refetch(s={}){var t=mt(s,[]);return this.fetch(T({},t))}fetchOptimistic(t){const s=r(this,C).defaultQueryOptions(t),i=r(this,C).getQueryCache().build(r(this,C),s);return i.fetch().then(()=>this.createResult(i,s))}fetch(t){var s;return f(this,h,N).call(this,Rt(T({},t),{cancelRefetch:(s=t.cancelRefetch)!=null?s:!0})).then(()=>(this.updateResult(),r(this,m)))}createResult(t,s){var dt;const i=r(this,o),u=this.options,a=r(this,m),n=r(this,k),S=r(this,L),y=t!==i?t.state:r(this,$),{state:b}=t;let c=T({},b),w=!1,g;if(s._optimisticResults){const R=this.hasListeners(),_=!R&&xt(t,s),P=R&&Et(t,i,s,u);(_||P)&&(c=T(T({},c),Mt(b.data,t.options))),s._optimisticResults==="isRestoring"&&(c.fetchStatus="idle")}let{error:H,errorUpdatedAt:Q,status:O}=c;if(s.select&&c.data!==void 0)if(a&&c.data===(n==null?void 0:n.data)&&s.select===r(this,W))g=r(this,M);else try{l(this,W,s.select),g=s.select(c.data),g=St(a==null?void 0:a.data,g,s),l(this,M,g),l(this,E,null)}catch(R){l(this,E,R)}else g=c.data;if(s.placeholderData!==void 0&&g===void 0&&O==="pending"){let R;if(a!=null&&a.isPlaceholderData&&s.placeholderData===(S==null?void 0:S.placeholderData))R=a.data;else if(R=typeof s.placeholderData=="function"?s.placeholderData((dt=r(this,A))==null?void 0:dt.state.data,r(this,A)):s.placeholderData,s.select&&R!==void 0)try{R=s.select(R),l(this,E,null)}catch(_){l(this,E,_)}R!==void 0&&(O="success",g=St(a==null?void 0:a.data,R,s),w=!0)}r(this,E)&&(H=r(this,E),g=r(this,M),Q=Date.now(),O="error");const J=c.fetchStatus==="fetching",X=O==="pending",Y=O==="error",lt=X&&J,ft=g!==void 0,x={status:O,fetchStatus:c.fetchStatus,isPending:X,isSuccess:O==="success",isError:Y,isInitialLoading:lt,isLoading:lt,data:g,dataUpdatedAt:c.dataUpdatedAt,error:H,errorUpdatedAt:Q,failureCount:c.fetchFailureCount,failureReason:c.fetchFailureReason,errorUpdateCount:c.errorUpdateCount,isFetched:c.dataUpdateCount>0||c.errorUpdateCount>0,isFetchedAfterMount:c.dataUpdateCount>y.dataUpdateCount||c.errorUpdateCount>y.errorUpdateCount,isFetching:J,isRefetching:J&&!X,isLoadingError:Y&&!ft,isPaused:c.fetchStatus==="paused",isPlaceholderData:w,isRefetchError:Y&&ft,isStale:ut(t,s),refetch:this.refetch,promise:r(this,F)};if(this.options.experimental_prefetchInRender){const R=V=>{x.status==="error"?V.reject(x.error):x.data!==void 0&&V.resolve(x.data)},_=()=>{const V=l(this,F,x.promise=yt());R(V)},P=r(this,F);switch(P.status){case"pending":t.queryHash===i.queryHash&&R(P);break;case"fulfilled":(x.status==="error"||x.data!==P.value)&&_();break;case"rejected":(x.status!=="error"||x.error!==P.reason)&&_();break}}return x}updateResult(t){const s=r(this,m),i=this.createResult(r(this,o),this.options);if(l(this,k,r(this,o).state),l(this,L,this.options),r(this,k).data!==void 0&&l(this,A,r(this,o)),tt(i,s))return;l(this,m,i);const u={},a=()=>{if(!s)return!0;const{notifyOnChangeProps:n}=this.options,S=typeof n=="function"?n():n;if(S==="all"||!S&&!r(this,B).size)return!0;const d=new Set(S!=null?S:r(this,B));return this.options.throwOnError&&d.add("error"),Object.keys(r(this,m)).some(y=>{const b=y;return r(this,m)[b]!==s[b]&&d.has(b)})};(t==null?void 0:t.listeners)!==!1&&a()&&(u.listeners=!0),f(this,h,Tt).call(this,T(T({},u),t))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&f(this,h,nt).call(this)}},C=new WeakMap,o=new WeakMap,$=new WeakMap,m=new WeakMap,k=new WeakMap,L=new WeakMap,F=new WeakMap,E=new WeakMap,W=new WeakMap,M=new WeakMap,A=new WeakMap,D=new WeakMap,j=new WeakMap,U=new WeakMap,B=new WeakMap,h=new WeakSet,N=function(t){f(this,h,ct).call(this);let s=r(this,o).fetch(this.options,t);return t!=null&&t.throwOnError||(s=s.catch(_t)),s},st=function(){f(this,h,at).call(this);const t=K(this.options.staleTime,r(this,o));if(et||r(this,m).isStale||!Ct(t))return;const i=Pt(r(this,m).dataUpdatedAt,t)+1;l(this,D,setTimeout(()=>{r(this,m).isStale||this.updateResult()},i))},rt=function(){var t;return(t=typeof this.options.refetchInterval=="function"?this.options.refetchInterval(r(this,o)):this.options.refetchInterval)!=null?t:!1},it=function(t){f(this,h,ot).call(this),l(this,U,t),!(et||I(this.options.enabled,r(this,o))===!1||!Ct(r(this,U))||r(this,U)===0)&&l(this,j,setInterval(()=>{(this.options.refetchIntervalInBackground||Lt.isFocused())&&f(this,h,N).call(this)},r(this,U)))},nt=function(){f(this,h,st).call(this),f(this,h,it).call(this,f(this,h,rt).call(this))},at=function(){r(this,D)&&(clearTimeout(r(this,D)),l(this,D,void 0))},ot=function(){r(this,j)&&(clearInterval(r(this,j)),l(this,j,void 0))},ct=function(){const t=r(this,C).getQueryCache().build(r(this,C),this.options);if(t===r(this,o))return;const s=r(this,o);l(this,o,t),l(this,$,t.state),this.hasListeners()&&(s==null||s.removeObserver(this),t.addObserver(this))},Tt=function(t){Qt.batch(()=>{t.listeners&&this.listeners.forEach(s=>{s(r(this,m))}),r(this,C).getQueryCache().notify({query:r(this,o),type:"observerResultsUpdated"})})},Ot);function Nt(e,t){return I(t.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&t.retryOnMount===!1)}function xt(e,t){return Nt(e,t)||e.state.data!==void 0&&ht(e,t,t.refetchOnMount)}function ht(e,t,s){if(I(t.enabled,e)!==!1){const i=typeof s=="function"?s(e):s;return i==="always"||i!==!1&&ut(e,t)}return!1}function Et(e,t,s,i){return(e!==t||I(i.enabled,e)===!1)&&(!s.suspense||e.state.status!=="error")&&ut(e,s)}function ut(e,t){return I(t.enabled,e)!==!1&&e.isStaleByTime(K(t.staleTime,e))}function zt(e,t){return!tt(e.getCurrentResult(),t)}var Ft=p.createContext(!1),$t=()=>p.useContext(Ft);Ft.Provider;function Wt(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var Vt=p.createContext(Wt()),qt=()=>p.useContext(Vt);function Gt(e,t){return typeof e=="function"?e(...t):!!e}function It(){}var Kt=(e,t)=>{(e.suspense||e.throwOnError||e.experimental_prefetchInRender)&&(t.isReset()||(e.retryOnMount=!1))},Jt=e=>{p.useEffect(()=>{e.clearReset()},[e])},Xt=({result:e,errorResetBoundary:t,throwOnError:s,query:i})=>e.isError&&!t.isReset()&&!e.isFetching&&i&&Gt(s,[e.error,i]),Yt=e=>{e.suspense&&(e.staleTime===void 0&&(e.staleTime=1e3),typeof e.gcTime=="number"&&(e.gcTime=Math.max(e.gcTime,1e3)))},Zt=(e,t)=>e.isLoading&&e.isFetching&&!t,te=(e,t)=>(e==null?void 0:e.suspense)&&t.isPending,wt=(e,t,s)=>t.fetchOptimistic(e).catch(()=>{s.clearReset()});function ee(e,t,s){var b,c,w,g,H;const i=At(),u=$t(),a=qt(),n=i.defaultQueryOptions(e);(c=(b=i.getDefaultOptions().queries)==null?void 0:b._experimental_beforeQuery)==null||c.call(b,n),n._optimisticResults=u?"isRestoring":"optimistic",Yt(n),Kt(n,a),Jt(a);const S=!i.getQueryCache().get(n.queryHash),[d]=p.useState(()=>new t(i,n)),y=d.getOptimisticResult(n);if(p.useSyncExternalStore(p.useCallback(Q=>{const O=u?It:d.subscribe(Qt.batchCalls(Q));return d.updateResult(),O},[d,u]),()=>d.getCurrentResult(),()=>d.getCurrentResult()),p.useEffect(()=>{d.setOptions(n,{listeners:!1})},[n,d]),te(n,y))throw wt(n,d,a);if(Xt({result:y,errorResetBoundary:a,throwOnError:n.throwOnError,query:i.getQueryCache().get(n.queryHash)}))throw y.error;if((g=(w=i.getDefaultOptions().queries)==null?void 0:w._experimental_afterQuery)==null||g.call(w,n,y),n.experimental_prefetchInRender&&!et&&Zt(y,u)){const Q=S?wt(n,d,a):(H=i.getQueryCache().get(n.queryHash))==null?void 0:H.promise;Q==null||Q.catch(It).finally(()=>{d.updateResult()})}return n.notifyOnChangeProps?y:d.trackResult(y)}function he(e,t){return ee(e,Ht)}function se(e){const{src:t,alt:s,height:i,width:u,placeholder:a,priority:n=!1,defaultImage:S="assets/noImage.svg"}=e,[d,y]=p.useState(a!=null?a:t),b=p.useRef(null);return p.useEffect(()=>{if(!a)return;const c=new IntersectionObserver(w=>{if(w[0].isIntersecting){const g=new window.Image;g.src=t,g.onload=()=>{y(t)},c.disconnect()}},{threshold:.25});return b.current&&c.observe(b.current),()=>{b.current&&c.unobserve(b.current)}},[a,t]),z.jsx("img",{ref:b,src:d,loading:n?"eager":"lazy",onError:c=>{c.target.src=S,c.target.width=32,c.target.height=32},alt:s,width:u,height:i})}const re=Bt.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  box-sizing: border-box;
  padding: 5px;
  border-width: 3px;
  border-style: solid;
  border-color: var(--portrait-lc);
  background-color: var(--portrait-bc);

  user-select: none;

  &[data-stroke='default'] {
    --portrait-lc: #7e5475;
  }
  &[data-stroke='red'] {
    --portrait-lc: #e4002b;
  }
  &[data-stroke='yellow'] {
    --portrait-lc: #f3e500;
  }
  &[data-stroke='blue'] {
    --portrait-lc: #0047bb;
  }
  &[data-stroke='violet'] {
    --portrait-lc: #ea27c2;
  }

  &[data-tier='N'] {
    --portrait-bc: #ddd;
  }
  &[data-tier='R'] {
    --portrait-bc: #9fe8ff;
  }
  &[data-tier='SR'],
  &[data-tier='E'] {
    --portrait-bc: #c4adff;
  }
  &[data-tier='SSR'] {
    --portrait-bc: #ee9;
  }
  &[data-tier='UR'] {
    --portrait-bc: transparent;
    background: linear-gradient(120deg, #fbffca, #baffbf, #a7efff, #ffabff);
  }
`;function ue({path:e,lqip:t,tier:s="SSR",stroke:i="default",size:u=48,width:a,height:n}){return z.jsx(re,{"data-tier":s,"data-stroke":i,className:"portrait",children:z.jsx(se,{src:e,alt:"images",width:a!=null?a:u,height:n!=null?n:u,placeholder:t})})}function ie(e){return e==null}function le(e,t){if(ie(t))return e;const s=e.split(new RegExp(`(${t})`,"gi"));return z.jsx("span",{children:s.map((i,u)=>i.includes(t)?z.jsx("mark",{children:i},`${e}_${i}_${u}`):i)})}function ne(e){const t=p.useRef(null);return p.useEffect(()=>{const s=new IntersectionObserver(i=>{i[0].isIntersecting&&e()},{threshold:.2});return t.current&&s.observe(t.current),()=>{t.current&&s.unobserve(t.current)}},[e]),t}const G=10;function fe(e){const[t,s]=p.useState([]),[i,u]=p.useState(G),a=ne(()=>{u(n=>n+G)});return p.useEffect(()=>{s(e.slice(0,i))},[i,e]),p.useEffect(()=>()=>{s([]),u(G)},[e]),{current:t,visibleCount:i,loaderRef:a,LOADER:G}}export{se as I,ue as P,fe as a,re as b,le as h,he as u};
