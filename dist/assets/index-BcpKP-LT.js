(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const m of f)if(m.type==="childList")for(const b of m.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&c(b)}).observe(document,{childList:!0,subtree:!0});function l(f){const m={};return f.integrity&&(m.integrity=f.integrity),f.referrerPolicy&&(m.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?m.credentials="include":f.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function c(f){if(f.ep)return;f.ep=!0;const m=l(f);fetch(f.href,m)}})();function Yf(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var cl={exports:{}},Ar={},dl={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pc;function Xf(){if(pc)return X;pc=1;var i=Symbol.for("react.element"),s=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),b=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),I=Symbol.iterator;function j(g){return g===null||typeof g!="object"?null:(g=I&&g[I]||g["@@iterator"],typeof g=="function"?g:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,w={};function L(g,P,Y){this.props=g,this.context=P,this.refs=w,this.updater=Y||M}L.prototype.isReactComponent={},L.prototype.setState=function(g,P){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,P,"setState")},L.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function Q(){}Q.prototype=L.prototype;function le(g,P,Y){this.props=g,this.context=P,this.refs=w,this.updater=Y||M}var ie=le.prototype=new Q;ie.constructor=le,C(ie,L.prototype),ie.isPureReactComponent=!0;var de=Array.isArray,ke=Object.prototype.hasOwnProperty,he={current:null},ve={key:!0,ref:!0,__self:!0,__source:!0};function ze(g,P,Y){var Z,te={},re=null,fe=null;if(P!=null)for(Z in P.ref!==void 0&&(fe=P.ref),P.key!==void 0&&(re=""+P.key),P)ke.call(P,Z)&&!ve.hasOwnProperty(Z)&&(te[Z]=P[Z]);var ue=arguments.length-2;if(ue===1)te.children=Y;else if(1<ue){for(var be=Array(ue),tn=0;tn<ue;tn++)be[tn]=arguments[tn+2];te.children=be}if(g&&g.defaultProps)for(Z in ue=g.defaultProps,ue)te[Z]===void 0&&(te[Z]=ue[Z]);return{$$typeof:i,type:g,key:re,ref:fe,props:te,_owner:he.current}}function Oe(g,P){return{$$typeof:i,type:g.type,key:P,ref:g.ref,props:g.props,_owner:g._owner}}function mn(g){return typeof g=="object"&&g!==null&&g.$$typeof===i}function zn(g){var P={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(Y){return P[Y]})}var se=/\/+/g;function Se(g,P){return typeof g=="object"&&g!==null&&g.key!=null?zn(""+g.key):P.toString(36)}function Be(g,P,Y,Z,te){var re=typeof g;(re==="undefined"||re==="boolean")&&(g=null);var fe=!1;if(g===null)fe=!0;else switch(re){case"string":case"number":fe=!0;break;case"object":switch(g.$$typeof){case i:case s:fe=!0}}if(fe)return fe=g,te=te(fe),g=Z===""?"."+Se(fe,0):Z,de(te)?(Y="",g!=null&&(Y=g.replace(se,"$&/")+"/"),Be(te,P,Y,"",function(tn){return tn})):te!=null&&(mn(te)&&(te=Oe(te,Y+(!te.key||fe&&fe.key===te.key?"":(""+te.key).replace(se,"$&/")+"/")+g)),P.push(te)),1;if(fe=0,Z=Z===""?".":Z+":",de(g))for(var ue=0;ue<g.length;ue++){re=g[ue];var be=Z+Se(re,ue);fe+=Be(re,P,Y,be,te)}else if(be=j(g),typeof be=="function")for(g=be.call(g),ue=0;!(re=g.next()).done;)re=re.value,be=Z+Se(re,ue++),fe+=Be(re,P,Y,be,te);else if(re==="object")throw P=String(g),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.");return fe}function Ke(g,P,Y){if(g==null)return g;var Z=[],te=0;return Be(g,Z,"","",function(re){return P.call(Y,re,te++)}),Z}function We(g){if(g._status===-1){var P=g._result;P=P(),P.then(function(Y){(g._status===0||g._status===-1)&&(g._status=1,g._result=Y)},function(Y){(g._status===0||g._status===-1)&&(g._status=2,g._result=Y)}),g._status===-1&&(g._status=0,g._result=P)}if(g._status===1)return g._result.default;throw g._result}var ye={current:null},D={transition:null},G={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:D,ReactCurrentOwner:he};function U(){throw Error("act(...) is not supported in production builds of React.")}return X.Children={map:Ke,forEach:function(g,P,Y){Ke(g,function(){P.apply(this,arguments)},Y)},count:function(g){var P=0;return Ke(g,function(){P++}),P},toArray:function(g){return Ke(g,function(P){return P})||[]},only:function(g){if(!mn(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},X.Component=L,X.Fragment=l,X.Profiler=f,X.PureComponent=le,X.StrictMode=c,X.Suspense=_,X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,X.act=U,X.cloneElement=function(g,P,Y){if(g==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+g+".");var Z=C({},g.props),te=g.key,re=g.ref,fe=g._owner;if(P!=null){if(P.ref!==void 0&&(re=P.ref,fe=he.current),P.key!==void 0&&(te=""+P.key),g.type&&g.type.defaultProps)var ue=g.type.defaultProps;for(be in P)ke.call(P,be)&&!ve.hasOwnProperty(be)&&(Z[be]=P[be]===void 0&&ue!==void 0?ue[be]:P[be])}var be=arguments.length-2;if(be===1)Z.children=Y;else if(1<be){ue=Array(be);for(var tn=0;tn<be;tn++)ue[tn]=arguments[tn+2];Z.children=ue}return{$$typeof:i,type:g.type,key:te,ref:re,props:Z,_owner:fe}},X.createContext=function(g){return g={$$typeof:b,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},g.Provider={$$typeof:m,_context:g},g.Consumer=g},X.createElement=ze,X.createFactory=function(g){var P=ze.bind(null,g);return P.type=g,P},X.createRef=function(){return{current:null}},X.forwardRef=function(g){return{$$typeof:S,render:g}},X.isValidElement=mn,X.lazy=function(g){return{$$typeof:R,_payload:{_status:-1,_result:g},_init:We}},X.memo=function(g,P){return{$$typeof:E,type:g,compare:P===void 0?null:P}},X.startTransition=function(g){var P=D.transition;D.transition={};try{g()}finally{D.transition=P}},X.unstable_act=U,X.useCallback=function(g,P){return ye.current.useCallback(g,P)},X.useContext=function(g){return ye.current.useContext(g)},X.useDebugValue=function(){},X.useDeferredValue=function(g){return ye.current.useDeferredValue(g)},X.useEffect=function(g,P){return ye.current.useEffect(g,P)},X.useId=function(){return ye.current.useId()},X.useImperativeHandle=function(g,P,Y){return ye.current.useImperativeHandle(g,P,Y)},X.useInsertionEffect=function(g,P){return ye.current.useInsertionEffect(g,P)},X.useLayoutEffect=function(g,P){return ye.current.useLayoutEffect(g,P)},X.useMemo=function(g,P){return ye.current.useMemo(g,P)},X.useReducer=function(g,P,Y){return ye.current.useReducer(g,P,Y)},X.useRef=function(g){return ye.current.useRef(g)},X.useState=function(g){return ye.current.useState(g)},X.useSyncExternalStore=function(g,P,Y){return ye.current.useSyncExternalStore(g,P,Y)},X.useTransition=function(){return ye.current.useTransition()},X.version="18.3.1",X}var hc;function vl(){return hc||(hc=1,dl.exports=Xf()),dl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mc;function Jf(){if(mc)return Ar;mc=1;var i=vl(),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,f=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function b(S,_,E){var R,I={},j=null,M=null;E!==void 0&&(j=""+E),_.key!==void 0&&(j=""+_.key),_.ref!==void 0&&(M=_.ref);for(R in _)c.call(_,R)&&!m.hasOwnProperty(R)&&(I[R]=_[R]);if(S&&S.defaultProps)for(R in _=S.defaultProps,_)I[R]===void 0&&(I[R]=_[R]);return{$$typeof:s,type:S,key:j,ref:M,props:I,_owner:f.current}}return Ar.Fragment=l,Ar.jsx=b,Ar.jsxs=b,Ar}var gc;function Zf(){return gc||(gc=1,cl.exports=Jf()),cl.exports}var k=Zf(),J=vl();const ae=Yf(J);var ai={},fl={exports:{}},en={},pl={exports:{}},hl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vc;function ep(){return vc||(vc=1,function(i){function s(D,G){var U=D.length;D.push(G);e:for(;0<U;){var g=U-1>>>1,P=D[g];if(0<f(P,G))D[g]=G,D[U]=P,U=g;else break e}}function l(D){return D.length===0?null:D[0]}function c(D){if(D.length===0)return null;var G=D[0],U=D.pop();if(U!==G){D[0]=U;e:for(var g=0,P=D.length,Y=P>>>1;g<Y;){var Z=2*(g+1)-1,te=D[Z],re=Z+1,fe=D[re];if(0>f(te,U))re<P&&0>f(fe,te)?(D[g]=fe,D[re]=U,g=re):(D[g]=te,D[Z]=U,g=Z);else if(re<P&&0>f(fe,U))D[g]=fe,D[re]=U,g=re;else break e}}return G}function f(D,G){var U=D.sortIndex-G.sortIndex;return U!==0?U:D.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var m=performance;i.unstable_now=function(){return m.now()}}else{var b=Date,S=b.now();i.unstable_now=function(){return b.now()-S}}var _=[],E=[],R=1,I=null,j=3,M=!1,C=!1,w=!1,L=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,le=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ie(D){for(var G=l(E);G!==null;){if(G.callback===null)c(E);else if(G.startTime<=D)c(E),G.sortIndex=G.expirationTime,s(_,G);else break;G=l(E)}}function de(D){if(w=!1,ie(D),!C)if(l(_)!==null)C=!0,We(ke);else{var G=l(E);G!==null&&ye(de,G.startTime-D)}}function ke(D,G){C=!1,w&&(w=!1,Q(ze),ze=-1),M=!0;var U=j;try{for(ie(G),I=l(_);I!==null&&(!(I.expirationTime>G)||D&&!zn());){var g=I.callback;if(typeof g=="function"){I.callback=null,j=I.priorityLevel;var P=g(I.expirationTime<=G);G=i.unstable_now(),typeof P=="function"?I.callback=P:I===l(_)&&c(_),ie(G)}else c(_);I=l(_)}if(I!==null)var Y=!0;else{var Z=l(E);Z!==null&&ye(de,Z.startTime-G),Y=!1}return Y}finally{I=null,j=U,M=!1}}var he=!1,ve=null,ze=-1,Oe=5,mn=-1;function zn(){return!(i.unstable_now()-mn<Oe)}function se(){if(ve!==null){var D=i.unstable_now();mn=D;var G=!0;try{G=ve(!0,D)}finally{G?Se():(he=!1,ve=null)}}else he=!1}var Se;if(typeof le=="function")Se=function(){le(se)};else if(typeof MessageChannel<"u"){var Be=new MessageChannel,Ke=Be.port2;Be.port1.onmessage=se,Se=function(){Ke.postMessage(null)}}else Se=function(){L(se,0)};function We(D){ve=D,he||(he=!0,Se())}function ye(D,G){ze=L(function(){D(i.unstable_now())},G)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(D){D.callback=null},i.unstable_continueExecution=function(){C||M||(C=!0,We(ke))},i.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Oe=0<D?Math.floor(1e3/D):5},i.unstable_getCurrentPriorityLevel=function(){return j},i.unstable_getFirstCallbackNode=function(){return l(_)},i.unstable_next=function(D){switch(j){case 1:case 2:case 3:var G=3;break;default:G=j}var U=j;j=G;try{return D()}finally{j=U}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(D,G){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var U=j;j=D;try{return G()}finally{j=U}},i.unstable_scheduleCallback=function(D,G,U){var g=i.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?g+U:g):U=g,D){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=U+P,D={id:R++,callback:G,priorityLevel:D,startTime:U,expirationTime:P,sortIndex:-1},U>g?(D.sortIndex=U,s(E,D),l(_)===null&&D===l(E)&&(w?(Q(ze),ze=-1):w=!0,ye(de,U-g))):(D.sortIndex=P,s(_,D),C||M||(C=!0,We(ke))),D},i.unstable_shouldYield=zn,i.unstable_wrapCallback=function(D){var G=j;return function(){var U=j;j=G;try{return D.apply(this,arguments)}finally{j=U}}}}(hl)),hl}var yc;function np(){return yc||(yc=1,pl.exports=ep()),pl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bc;function tp(){if(bc)return en;bc=1;var i=vl(),s=np();function l(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,f={};function m(e,n){b(e,n),b(e+"Capture",n)}function b(e,n){for(f[e]=n,e=0;e<n.length;e++)c.add(n[e])}var S=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_=Object.prototype.hasOwnProperty,E=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,R={},I={};function j(e){return _.call(I,e)?!0:_.call(R,e)?!1:E.test(e)?I[e]=!0:(R[e]=!0,!1)}function M(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function C(e,n,t,r){if(n===null||typeof n>"u"||M(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function w(e,n,t,r,o,a,u){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=a,this.removeEmptyString=u}var L={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){L[e]=new w(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];L[n]=new w(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){L[e]=new w(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){L[e]=new w(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){L[e]=new w(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){L[e]=new w(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){L[e]=new w(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){L[e]=new w(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){L[e]=new w(e,5,!1,e.toLowerCase(),null,!1,!1)});var Q=/[\-:]([a-z])/g;function le(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Q,le);L[n]=new w(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Q,le);L[n]=new w(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Q,le);L[n]=new w(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){L[e]=new w(e,1,!1,e.toLowerCase(),null,!1,!1)}),L.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){L[e]=new w(e,1,!1,e.toLowerCase(),null,!0,!0)});function ie(e,n,t,r){var o=L.hasOwnProperty(n)?L[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(C(n,t,o,r)&&(t=null),r||o===null?j(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var de=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ke=Symbol.for("react.element"),he=Symbol.for("react.portal"),ve=Symbol.for("react.fragment"),ze=Symbol.for("react.strict_mode"),Oe=Symbol.for("react.profiler"),mn=Symbol.for("react.provider"),zn=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),Se=Symbol.for("react.suspense"),Be=Symbol.for("react.suspense_list"),Ke=Symbol.for("react.memo"),We=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),D=Symbol.iterator;function G(e){return e===null||typeof e!="object"?null:(e=D&&e[D]||e["@@iterator"],typeof e=="function"?e:null)}var U=Object.assign,g;function P(e){if(g===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);g=n&&n[1]||""}return`
`+g+e}var Y=!1;function Z(e,n){if(!e||Y)return"";Y=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(x){var r=x}Reflect.construct(e,[],n)}else{try{n.call()}catch(x){r=x}e.call(n.prototype)}else{try{throw Error()}catch(x){r=x}e()}}catch(x){if(x&&r&&typeof x.stack=="string"){for(var o=x.stack.split(`
`),a=r.stack.split(`
`),u=o.length-1,d=a.length-1;1<=u&&0<=d&&o[u]!==a[d];)d--;for(;1<=u&&0<=d;u--,d--)if(o[u]!==a[d]){if(u!==1||d!==1)do if(u--,d--,0>d||o[u]!==a[d]){var p=`
`+o[u].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=u&&0<=d);break}}}finally{Y=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?P(e):""}function te(e){switch(e.tag){case 5:return P(e.type);case 16:return P("Lazy");case 13:return P("Suspense");case 19:return P("SuspenseList");case 0:case 2:case 15:return e=Z(e.type,!1),e;case 11:return e=Z(e.type.render,!1),e;case 1:return e=Z(e.type,!0),e;default:return""}}function re(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ve:return"Fragment";case he:return"Portal";case Oe:return"Profiler";case ze:return"StrictMode";case Se:return"Suspense";case Be:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case zn:return(e.displayName||"Context")+".Consumer";case mn:return(e._context.displayName||"Context")+".Provider";case se:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ke:return n=e.displayName||null,n!==null?n:re(e.type)||"Memo";case We:n=e._payload,e=e._init;try{return re(e(n))}catch{}}return null}function fe(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(n);case 8:return n===ze?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ue(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function be(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function tn(e){var n=be(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,a=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(u){r=""+u,a.call(this,u)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(u){r=""+u},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Qr(e){e._valueTracker||(e._valueTracker=tn(e))}function bl(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=be(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Yr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function vi(e,n){var t=n.checked;return U({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function xl(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=ue(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function wl(e,n){n=n.checked,n!=null&&ie(e,"checked",n,!1)}function yi(e,n){wl(e,n);var t=ue(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?bi(e,n.type,t):n.hasOwnProperty("defaultValue")&&bi(e,n.type,ue(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function kl(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function bi(e,n,t){(n!=="number"||Yr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Xt=Array.isArray;function St(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+ue(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function xi(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(l(91));return U({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Sl(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(l(92));if(Xt(t)){if(1<t.length)throw Error(l(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:ue(t)}}function El(e,n){var t=ue(n.value),r=ue(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function _l(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Ol(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wi(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Ol(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xr,Cl=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Xr=Xr||document.createElement("div"),Xr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Xr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Jt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Zt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ed=["Webkit","ms","Moz","O"];Object.keys(Zt).forEach(function(e){ed.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Zt[n]=Zt[e]})});function Pl(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Zt.hasOwnProperty(e)&&Zt[e]?(""+n).trim():n+"px"}function Nl(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=Pl(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var nd=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ki(e,n){if(n){if(nd[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(l(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(l(61))}if(n.style!=null&&typeof n.style!="object")throw Error(l(62))}}function Si(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ei=null;function _i(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Oi=null,Et=null,_t=null;function zl(e){if(e=wr(e)){if(typeof Oi!="function")throw Error(l(280));var n=e.stateNode;n&&(n=wo(n),Oi(e.stateNode,e.type,n))}}function Tl(e){Et?_t?_t.push(e):_t=[e]:Et=e}function Rl(){if(Et){var e=Et,n=_t;if(_t=Et=null,zl(e),n)for(e=0;e<n.length;e++)zl(n[e])}}function Ml(e,n){return e(n)}function jl(){}var Ci=!1;function Dl(e,n,t){if(Ci)return e(n,t);Ci=!0;try{return Ml(e,n,t)}finally{Ci=!1,(Et!==null||_t!==null)&&(jl(),Rl())}}function er(e,n){var t=e.stateNode;if(t===null)return null;var r=wo(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(l(231,n,typeof t));return t}var Pi=!1;if(S)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){Pi=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{Pi=!1}function td(e,n,t,r,o,a,u,d,p){var x=Array.prototype.slice.call(arguments,3);try{n.apply(t,x)}catch(N){this.onError(N)}}var tr=!1,Jr=null,Zr=!1,Ni=null,rd={onError:function(e){tr=!0,Jr=e}};function od(e,n,t,r,o,a,u,d,p){tr=!1,Jr=null,td.apply(rd,arguments)}function id(e,n,t,r,o,a,u,d,p){if(od.apply(this,arguments),tr){if(tr){var x=Jr;tr=!1,Jr=null}else throw Error(l(198));Zr||(Zr=!0,Ni=x)}}function ut(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Al(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Il(e){if(ut(e)!==e)throw Error(l(188))}function ad(e){var n=e.alternate;if(!n){if(n=ut(e),n===null)throw Error(l(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===t)return Il(o),e;if(a===r)return Il(o),n;a=a.sibling}throw Error(l(188))}if(t.return!==r.return)t=o,r=a;else{for(var u=!1,d=o.child;d;){if(d===t){u=!0,t=o,r=a;break}if(d===r){u=!0,r=o,t=a;break}d=d.sibling}if(!u){for(d=a.child;d;){if(d===t){u=!0,t=a,r=o;break}if(d===r){u=!0,r=a,t=o;break}d=d.sibling}if(!u)throw Error(l(189))}}if(t.alternate!==r)throw Error(l(190))}if(t.tag!==3)throw Error(l(188));return t.stateNode.current===t?e:n}function Ll(e){return e=ad(e),e!==null?Fl(e):null}function Fl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Fl(e);if(n!==null)return n;e=e.sibling}return null}var Ul=s.unstable_scheduleCallback,ql=s.unstable_cancelCallback,ld=s.unstable_shouldYield,sd=s.unstable_requestPaint,Pe=s.unstable_now,ud=s.unstable_getCurrentPriorityLevel,zi=s.unstable_ImmediatePriority,Hl=s.unstable_UserBlockingPriority,eo=s.unstable_NormalPriority,cd=s.unstable_LowPriority,$l=s.unstable_IdlePriority,no=null,_n=null;function dd(e){if(_n&&typeof _n.onCommitFiberRoot=="function")try{_n.onCommitFiberRoot(no,e,void 0,(e.current.flags&128)===128)}catch{}}var gn=Math.clz32?Math.clz32:hd,fd=Math.log,pd=Math.LN2;function hd(e){return e>>>=0,e===0?32:31-(fd(e)/pd|0)|0}var to=64,ro=4194304;function rr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function oo(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,u=t&268435455;if(u!==0){var d=u&~o;d!==0?r=rr(d):(a&=u,a!==0&&(r=rr(a)))}else u=t&~o,u!==0?r=rr(u):a!==0&&(r=rr(a));if(r===0)return 0;if(n!==0&&n!==r&&!(n&o)&&(o=r&-r,a=n&-n,o>=a||o===16&&(a&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-gn(n),o=1<<t,r|=e[t],n&=~o;return r}function md(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gd(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var u=31-gn(a),d=1<<u,p=o[u];p===-1?(!(d&t)||d&r)&&(o[u]=md(d,n)):p<=n&&(e.expiredLanes|=d),a&=~d}}function Ti(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bl(){var e=to;return to<<=1,!(to&4194240)&&(to=64),e}function Ri(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function or(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-gn(n),e[n]=t}function vd(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-gn(t),a=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~a}}function Mi(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-gn(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var ce=0;function Wl(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Vl,ji,Gl,Kl,Ql,Di=!1,io=[],qn=null,Hn=null,$n=null,ir=new Map,ar=new Map,Bn=[],yd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yl(e,n){switch(e){case"focusin":case"focusout":qn=null;break;case"dragenter":case"dragleave":Hn=null;break;case"mouseover":case"mouseout":$n=null;break;case"pointerover":case"pointerout":ir.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ar.delete(n.pointerId)}}function lr(e,n,t,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},n!==null&&(n=wr(n),n!==null&&ji(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function bd(e,n,t,r,o){switch(n){case"focusin":return qn=lr(qn,e,n,t,r,o),!0;case"dragenter":return Hn=lr(Hn,e,n,t,r,o),!0;case"mouseover":return $n=lr($n,e,n,t,r,o),!0;case"pointerover":var a=o.pointerId;return ir.set(a,lr(ir.get(a)||null,e,n,t,r,o)),!0;case"gotpointercapture":return a=o.pointerId,ar.set(a,lr(ar.get(a)||null,e,n,t,r,o)),!0}return!1}function Xl(e){var n=ct(e.target);if(n!==null){var t=ut(n);if(t!==null){if(n=t.tag,n===13){if(n=Al(t),n!==null){e.blockedOn=n,Ql(e.priority,function(){Gl(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ao(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ii(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Ei=r,t.target.dispatchEvent(r),Ei=null}else return n=wr(t),n!==null&&ji(n),e.blockedOn=t,!1;n.shift()}return!0}function Jl(e,n,t){ao(e)&&t.delete(n)}function xd(){Di=!1,qn!==null&&ao(qn)&&(qn=null),Hn!==null&&ao(Hn)&&(Hn=null),$n!==null&&ao($n)&&($n=null),ir.forEach(Jl),ar.forEach(Jl)}function sr(e,n){e.blockedOn===n&&(e.blockedOn=null,Di||(Di=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,xd)))}function ur(e){function n(o){return sr(o,e)}if(0<io.length){sr(io[0],e);for(var t=1;t<io.length;t++){var r=io[t];r.blockedOn===e&&(r.blockedOn=null)}}for(qn!==null&&sr(qn,e),Hn!==null&&sr(Hn,e),$n!==null&&sr($n,e),ir.forEach(n),ar.forEach(n),t=0;t<Bn.length;t++)r=Bn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Bn.length&&(t=Bn[0],t.blockedOn===null);)Xl(t),t.blockedOn===null&&Bn.shift()}var Ot=de.ReactCurrentBatchConfig,lo=!0;function wd(e,n,t,r){var o=ce,a=Ot.transition;Ot.transition=null;try{ce=1,Ai(e,n,t,r)}finally{ce=o,Ot.transition=a}}function kd(e,n,t,r){var o=ce,a=Ot.transition;Ot.transition=null;try{ce=4,Ai(e,n,t,r)}finally{ce=o,Ot.transition=a}}function Ai(e,n,t,r){if(lo){var o=Ii(e,n,t,r);if(o===null)ea(e,n,r,so,t),Yl(e,r);else if(bd(o,e,n,t,r))r.stopPropagation();else if(Yl(e,r),n&4&&-1<yd.indexOf(e)){for(;o!==null;){var a=wr(o);if(a!==null&&Vl(a),a=Ii(e,n,t,r),a===null&&ea(e,n,r,so,t),a===o)break;o=a}o!==null&&r.stopPropagation()}else ea(e,n,r,null,t)}}var so=null;function Ii(e,n,t,r){if(so=null,e=_i(r),e=ct(e),e!==null)if(n=ut(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Al(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return so=e,null}function Zl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ud()){case zi:return 1;case Hl:return 4;case eo:case cd:return 16;case $l:return 536870912;default:return 16}default:return 16}}var Wn=null,Li=null,uo=null;function es(){if(uo)return uo;var e,n=Li,t=n.length,r,o="value"in Wn?Wn.value:Wn.textContent,a=o.length;for(e=0;e<t&&n[e]===o[e];e++);var u=t-e;for(r=1;r<=u&&n[t-r]===o[a-r];r++);return uo=o.slice(e,1<r?1-r:void 0)}function co(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function fo(){return!0}function ns(){return!1}function rn(e){function n(t,r,o,a,u){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=u,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(t=e[d],this[d]=t?t(a):a[d]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?fo:ns,this.isPropagationStopped=ns,this}return U(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=fo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=fo)},persist:function(){},isPersistent:fo}),n}var Ct={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fi=rn(Ct),cr=U({},Ct,{view:0,detail:0}),Sd=rn(cr),Ui,qi,dr,po=U({},cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$i,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==dr&&(dr&&e.type==="mousemove"?(Ui=e.screenX-dr.screenX,qi=e.screenY-dr.screenY):qi=Ui=0,dr=e),Ui)},movementY:function(e){return"movementY"in e?e.movementY:qi}}),ts=rn(po),Ed=U({},po,{dataTransfer:0}),_d=rn(Ed),Od=U({},cr,{relatedTarget:0}),Hi=rn(Od),Cd=U({},Ct,{animationName:0,elapsedTime:0,pseudoElement:0}),Pd=rn(Cd),Nd=U({},Ct,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zd=rn(Nd),Td=U({},Ct,{data:0}),rs=rn(Td),Rd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Md={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=jd[e])?!!n[e]:!1}function $i(){return Dd}var Ad=U({},cr,{key:function(e){if(e.key){var n=Rd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=co(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Md[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$i,charCode:function(e){return e.type==="keypress"?co(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?co(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Id=rn(Ad),Ld=U({},po,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),os=rn(Ld),Fd=U({},cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$i}),Ud=rn(Fd),qd=U({},Ct,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hd=rn(qd),$d=U({},po,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bd=rn($d),Wd=[9,13,27,32],Bi=S&&"CompositionEvent"in window,fr=null;S&&"documentMode"in document&&(fr=document.documentMode);var Vd=S&&"TextEvent"in window&&!fr,is=S&&(!Bi||fr&&8<fr&&11>=fr),as=" ",ls=!1;function ss(e,n){switch(e){case"keyup":return Wd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function us(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pt=!1;function Gd(e,n){switch(e){case"compositionend":return us(n);case"keypress":return n.which!==32?null:(ls=!0,as);case"textInput":return e=n.data,e===as&&ls?null:e;default:return null}}function Kd(e,n){if(Pt)return e==="compositionend"||!Bi&&ss(e,n)?(e=es(),uo=Li=Wn=null,Pt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return is&&n.locale!=="ko"?null:n.data;default:return null}}var Qd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Qd[e.type]:n==="textarea"}function ds(e,n,t,r){Tl(r),n=yo(n,"onChange"),0<n.length&&(t=new Fi("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var pr=null,hr=null;function Yd(e){Ns(e,0)}function ho(e){var n=Mt(e);if(bl(n))return e}function Xd(e,n){if(e==="change")return n}var fs=!1;if(S){var Wi;if(S){var Vi="oninput"in document;if(!Vi){var ps=document.createElement("div");ps.setAttribute("oninput","return;"),Vi=typeof ps.oninput=="function"}Wi=Vi}else Wi=!1;fs=Wi&&(!document.documentMode||9<document.documentMode)}function hs(){pr&&(pr.detachEvent("onpropertychange",ms),hr=pr=null)}function ms(e){if(e.propertyName==="value"&&ho(hr)){var n=[];ds(n,hr,e,_i(e)),Dl(Yd,n)}}function Jd(e,n,t){e==="focusin"?(hs(),pr=n,hr=t,pr.attachEvent("onpropertychange",ms)):e==="focusout"&&hs()}function Zd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ho(hr)}function ef(e,n){if(e==="click")return ho(n)}function nf(e,n){if(e==="input"||e==="change")return ho(n)}function tf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var vn=typeof Object.is=="function"?Object.is:tf;function mr(e,n){if(vn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!_.call(n,o)||!vn(e[o],n[o]))return!1}return!0}function gs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vs(e,n){var t=gs(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=gs(t)}}function ys(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?ys(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function bs(){for(var e=window,n=Yr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Yr(e.document)}return n}function Gi(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function rf(e){var n=bs(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&ys(t.ownerDocument.documentElement,t)){if(r!==null&&Gi(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=vs(t,a);var u=vs(t,r);o&&u&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(n),e.extend(u.node,u.offset)):(n.setEnd(u.node,u.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var of=S&&"documentMode"in document&&11>=document.documentMode,Nt=null,Ki=null,gr=null,Qi=!1;function xs(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Qi||Nt==null||Nt!==Yr(r)||(r=Nt,"selectionStart"in r&&Gi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gr&&mr(gr,r)||(gr=r,r=yo(Ki,"onSelect"),0<r.length&&(n=new Fi("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Nt)))}function mo(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var zt={animationend:mo("Animation","AnimationEnd"),animationiteration:mo("Animation","AnimationIteration"),animationstart:mo("Animation","AnimationStart"),transitionend:mo("Transition","TransitionEnd")},Yi={},ws={};S&&(ws=document.createElement("div").style,"AnimationEvent"in window||(delete zt.animationend.animation,delete zt.animationiteration.animation,delete zt.animationstart.animation),"TransitionEvent"in window||delete zt.transitionend.transition);function go(e){if(Yi[e])return Yi[e];if(!zt[e])return e;var n=zt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in ws)return Yi[e]=n[t];return e}var ks=go("animationend"),Ss=go("animationiteration"),Es=go("animationstart"),_s=go("transitionend"),Os=new Map,Cs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vn(e,n){Os.set(e,n),m(n,[e])}for(var Xi=0;Xi<Cs.length;Xi++){var Ji=Cs[Xi],af=Ji.toLowerCase(),lf=Ji[0].toUpperCase()+Ji.slice(1);Vn(af,"on"+lf)}Vn(ks,"onAnimationEnd"),Vn(Ss,"onAnimationIteration"),Vn(Es,"onAnimationStart"),Vn("dblclick","onDoubleClick"),Vn("focusin","onFocus"),Vn("focusout","onBlur"),Vn(_s,"onTransitionEnd"),b("onMouseEnter",["mouseout","mouseover"]),b("onMouseLeave",["mouseout","mouseover"]),b("onPointerEnter",["pointerout","pointerover"]),b("onPointerLeave",["pointerout","pointerover"]),m("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),m("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),m("onBeforeInput",["compositionend","keypress","textInput","paste"]),m("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sf=new Set("cancel close invalid load scroll toggle".split(" ").concat(vr));function Ps(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,id(r,n,void 0,e),e.currentTarget=null}function Ns(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var a=void 0;if(n)for(var u=r.length-1;0<=u;u--){var d=r[u],p=d.instance,x=d.currentTarget;if(d=d.listener,p!==a&&o.isPropagationStopped())break e;Ps(o,d,x),a=p}else for(u=0;u<r.length;u++){if(d=r[u],p=d.instance,x=d.currentTarget,d=d.listener,p!==a&&o.isPropagationStopped())break e;Ps(o,d,x),a=p}}}if(Zr)throw e=Ni,Zr=!1,Ni=null,e}function me(e,n){var t=n[aa];t===void 0&&(t=n[aa]=new Set);var r=e+"__bubble";t.has(r)||(zs(n,e,2,!1),t.add(r))}function Zi(e,n,t){var r=0;n&&(r|=4),zs(t,e,r,n)}var vo="_reactListening"+Math.random().toString(36).slice(2);function yr(e){if(!e[vo]){e[vo]=!0,c.forEach(function(t){t!=="selectionchange"&&(sf.has(t)||Zi(t,!1,e),Zi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[vo]||(n[vo]=!0,Zi("selectionchange",!1,n))}}function zs(e,n,t,r){switch(Zl(n)){case 1:var o=wd;break;case 4:o=kd;break;default:o=Ai}t=o.bind(null,n,t,e),o=void 0,!Pi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function ea(e,n,t,r,o){var a=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var u=r.tag;if(u===3||u===4){var d=r.stateNode.containerInfo;if(d===o||d.nodeType===8&&d.parentNode===o)break;if(u===4)for(u=r.return;u!==null;){var p=u.tag;if((p===3||p===4)&&(p=u.stateNode.containerInfo,p===o||p.nodeType===8&&p.parentNode===o))return;u=u.return}for(;d!==null;){if(u=ct(d),u===null)return;if(p=u.tag,p===5||p===6){r=a=u;continue e}d=d.parentNode}}r=r.return}Dl(function(){var x=a,N=_i(t),z=[];e:{var O=Os.get(e);if(O!==void 0){var A=Fi,q=e;switch(e){case"keypress":if(co(t)===0)break e;case"keydown":case"keyup":A=Id;break;case"focusin":q="focus",A=Hi;break;case"focusout":q="blur",A=Hi;break;case"beforeblur":case"afterblur":A=Hi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=ts;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=_d;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=Ud;break;case ks:case Ss:case Es:A=Pd;break;case _s:A=Hd;break;case"scroll":A=Sd;break;case"wheel":A=Bd;break;case"copy":case"cut":case"paste":A=zd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=os}var H=(n&4)!==0,Ne=!H&&e==="scroll",v=H?O!==null?O+"Capture":null:O;H=[];for(var h=x,y;h!==null;){y=h;var T=y.stateNode;if(y.tag===5&&T!==null&&(y=T,v!==null&&(T=er(h,v),T!=null&&H.push(br(h,T,y)))),Ne)break;h=h.return}0<H.length&&(O=new A(O,q,null,t,N),z.push({event:O,listeners:H}))}}if(!(n&7)){e:{if(O=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",O&&t!==Ei&&(q=t.relatedTarget||t.fromElement)&&(ct(q)||q[Tn]))break e;if((A||O)&&(O=N.window===N?N:(O=N.ownerDocument)?O.defaultView||O.parentWindow:window,A?(q=t.relatedTarget||t.toElement,A=x,q=q?ct(q):null,q!==null&&(Ne=ut(q),q!==Ne||q.tag!==5&&q.tag!==6)&&(q=null)):(A=null,q=x),A!==q)){if(H=ts,T="onMouseLeave",v="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(H=os,T="onPointerLeave",v="onPointerEnter",h="pointer"),Ne=A==null?O:Mt(A),y=q==null?O:Mt(q),O=new H(T,h+"leave",A,t,N),O.target=Ne,O.relatedTarget=y,T=null,ct(N)===x&&(H=new H(v,h+"enter",q,t,N),H.target=y,H.relatedTarget=Ne,T=H),Ne=T,A&&q)n:{for(H=A,v=q,h=0,y=H;y;y=Tt(y))h++;for(y=0,T=v;T;T=Tt(T))y++;for(;0<h-y;)H=Tt(H),h--;for(;0<y-h;)v=Tt(v),y--;for(;h--;){if(H===v||v!==null&&H===v.alternate)break n;H=Tt(H),v=Tt(v)}H=null}else H=null;A!==null&&Ts(z,O,A,H,!1),q!==null&&Ne!==null&&Ts(z,Ne,q,H,!0)}}e:{if(O=x?Mt(x):window,A=O.nodeName&&O.nodeName.toLowerCase(),A==="select"||A==="input"&&O.type==="file")var B=Xd;else if(cs(O))if(fs)B=nf;else{B=Zd;var W=Jd}else(A=O.nodeName)&&A.toLowerCase()==="input"&&(O.type==="checkbox"||O.type==="radio")&&(B=ef);if(B&&(B=B(e,x))){ds(z,B,t,N);break e}W&&W(e,O,x),e==="focusout"&&(W=O._wrapperState)&&W.controlled&&O.type==="number"&&bi(O,"number",O.value)}switch(W=x?Mt(x):window,e){case"focusin":(cs(W)||W.contentEditable==="true")&&(Nt=W,Ki=x,gr=null);break;case"focusout":gr=Ki=Nt=null;break;case"mousedown":Qi=!0;break;case"contextmenu":case"mouseup":case"dragend":Qi=!1,xs(z,t,N);break;case"selectionchange":if(of)break;case"keydown":case"keyup":xs(z,t,N)}var V;if(Bi)e:{switch(e){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else Pt?ss(e,t)&&(K="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(K="onCompositionStart");K&&(is&&t.locale!=="ko"&&(Pt||K!=="onCompositionStart"?K==="onCompositionEnd"&&Pt&&(V=es()):(Wn=N,Li="value"in Wn?Wn.value:Wn.textContent,Pt=!0)),W=yo(x,K),0<W.length&&(K=new rs(K,e,null,t,N),z.push({event:K,listeners:W}),V?K.data=V:(V=us(t),V!==null&&(K.data=V)))),(V=Vd?Gd(e,t):Kd(e,t))&&(x=yo(x,"onBeforeInput"),0<x.length&&(N=new rs("onBeforeInput","beforeinput",null,t,N),z.push({event:N,listeners:x}),N.data=V))}Ns(z,n)})}function br(e,n,t){return{instance:e,listener:n,currentTarget:t}}function yo(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=er(e,t),a!=null&&r.unshift(br(e,a,o)),a=er(e,n),a!=null&&r.push(br(e,a,o))),e=e.return}return r}function Tt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ts(e,n,t,r,o){for(var a=n._reactName,u=[];t!==null&&t!==r;){var d=t,p=d.alternate,x=d.stateNode;if(p!==null&&p===r)break;d.tag===5&&x!==null&&(d=x,o?(p=er(t,a),p!=null&&u.unshift(br(t,p,d))):o||(p=er(t,a),p!=null&&u.push(br(t,p,d)))),t=t.return}u.length!==0&&e.push({event:n,listeners:u})}var uf=/\r\n?/g,cf=/\u0000|\uFFFD/g;function Rs(e){return(typeof e=="string"?e:""+e).replace(uf,`
`).replace(cf,"")}function bo(e,n,t){if(n=Rs(n),Rs(e)!==n&&t)throw Error(l(425))}function xo(){}var na=null,ta=null;function ra(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var oa=typeof setTimeout=="function"?setTimeout:void 0,df=typeof clearTimeout=="function"?clearTimeout:void 0,Ms=typeof Promise=="function"?Promise:void 0,ff=typeof queueMicrotask=="function"?queueMicrotask:typeof Ms<"u"?function(e){return Ms.resolve(null).then(e).catch(pf)}:oa;function pf(e){setTimeout(function(){throw e})}function ia(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),ur(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);ur(n)}function Gn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function js(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Rt=Math.random().toString(36).slice(2),On="__reactFiber$"+Rt,xr="__reactProps$"+Rt,Tn="__reactContainer$"+Rt,aa="__reactEvents$"+Rt,hf="__reactListeners$"+Rt,mf="__reactHandles$"+Rt;function ct(e){var n=e[On];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Tn]||t[On]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=js(e);e!==null;){if(t=e[On])return t;e=js(e)}return n}e=t,t=e.parentNode}return null}function wr(e){return e=e[On]||e[Tn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function wo(e){return e[xr]||null}var la=[],jt=-1;function Kn(e){return{current:e}}function ge(e){0>jt||(e.current=la[jt],la[jt]=null,jt--)}function pe(e,n){jt++,la[jt]=e.current,e.current=n}var Qn={},Ue=Kn(Qn),Qe=Kn(!1),dt=Qn;function Dt(e,n){var t=e.type.contextTypes;if(!t)return Qn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in t)o[a]=n[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ye(e){return e=e.childContextTypes,e!=null}function ko(){ge(Qe),ge(Ue)}function Ds(e,n,t){if(Ue.current!==Qn)throw Error(l(168));pe(Ue,n),pe(Qe,t)}function As(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(l(108,fe(e)||"Unknown",o));return U({},t,r)}function So(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qn,dt=Ue.current,pe(Ue,e),pe(Qe,Qe.current),!0}function Is(e,n,t){var r=e.stateNode;if(!r)throw Error(l(169));t?(e=As(e,n,dt),r.__reactInternalMemoizedMergedChildContext=e,ge(Qe),ge(Ue),pe(Ue,e)):ge(Qe),pe(Qe,t)}var Rn=null,Eo=!1,sa=!1;function Ls(e){Rn===null?Rn=[e]:Rn.push(e)}function gf(e){Eo=!0,Ls(e)}function Yn(){if(!sa&&Rn!==null){sa=!0;var e=0,n=ce;try{var t=Rn;for(ce=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Rn=null,Eo=!1}catch(o){throw Rn!==null&&(Rn=Rn.slice(e+1)),Ul(zi,Yn),o}finally{ce=n,sa=!1}}return null}var At=[],It=0,_o=null,Oo=0,un=[],cn=0,ft=null,Mn=1,jn="";function pt(e,n){At[It++]=Oo,At[It++]=_o,_o=e,Oo=n}function Fs(e,n,t){un[cn++]=Mn,un[cn++]=jn,un[cn++]=ft,ft=e;var r=Mn;e=jn;var o=32-gn(r)-1;r&=~(1<<o),t+=1;var a=32-gn(n)+o;if(30<a){var u=o-o%5;a=(r&(1<<u)-1).toString(32),r>>=u,o-=u,Mn=1<<32-gn(n)+o|t<<o|r,jn=a+e}else Mn=1<<a|t<<o|r,jn=e}function ua(e){e.return!==null&&(pt(e,1),Fs(e,1,0))}function ca(e){for(;e===_o;)_o=At[--It],At[It]=null,Oo=At[--It],At[It]=null;for(;e===ft;)ft=un[--cn],un[cn]=null,jn=un[--cn],un[cn]=null,Mn=un[--cn],un[cn]=null}var on=null,an=null,xe=!1,yn=null;function Us(e,n){var t=hn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function qs(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,on=e,an=Gn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,on=e,an=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=ft!==null?{id:Mn,overflow:jn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=hn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,on=e,an=null,!0):!1;default:return!1}}function da(e){return(e.mode&1)!==0&&(e.flags&128)===0}function fa(e){if(xe){var n=an;if(n){var t=n;if(!qs(e,n)){if(da(e))throw Error(l(418));n=Gn(t.nextSibling);var r=on;n&&qs(e,n)?Us(r,t):(e.flags=e.flags&-4097|2,xe=!1,on=e)}}else{if(da(e))throw Error(l(418));e.flags=e.flags&-4097|2,xe=!1,on=e}}}function Hs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;on=e}function Co(e){if(e!==on)return!1;if(!xe)return Hs(e),xe=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ra(e.type,e.memoizedProps)),n&&(n=an)){if(da(e))throw $s(),Error(l(418));for(;n;)Us(e,n),n=Gn(n.nextSibling)}if(Hs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){an=Gn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}an=null}}else an=on?Gn(e.stateNode.nextSibling):null;return!0}function $s(){for(var e=an;e;)e=Gn(e.nextSibling)}function Lt(){an=on=null,xe=!1}function pa(e){yn===null?yn=[e]:yn.push(e)}var vf=de.ReactCurrentBatchConfig;function kr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(l(309));var r=t.stateNode}if(!r)throw Error(l(147,e));var o=r,a=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===a?n.ref:(n=function(u){var d=o.refs;u===null?delete d[a]:d[a]=u},n._stringRef=a,n)}if(typeof e!="string")throw Error(l(284));if(!t._owner)throw Error(l(290,e))}return e}function Po(e,n){throw e=Object.prototype.toString.call(n),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Bs(e){var n=e._init;return n(e._payload)}function Ws(e){function n(v,h){if(e){var y=v.deletions;y===null?(v.deletions=[h],v.flags|=16):y.push(h)}}function t(v,h){if(!e)return null;for(;h!==null;)n(v,h),h=h.sibling;return null}function r(v,h){for(v=new Map;h!==null;)h.key!==null?v.set(h.key,h):v.set(h.index,h),h=h.sibling;return v}function o(v,h){return v=ot(v,h),v.index=0,v.sibling=null,v}function a(v,h,y){return v.index=y,e?(y=v.alternate,y!==null?(y=y.index,y<h?(v.flags|=2,h):y):(v.flags|=2,h)):(v.flags|=1048576,h)}function u(v){return e&&v.alternate===null&&(v.flags|=2),v}function d(v,h,y,T){return h===null||h.tag!==6?(h=ol(y,v.mode,T),h.return=v,h):(h=o(h,y),h.return=v,h)}function p(v,h,y,T){var B=y.type;return B===ve?N(v,h,y.props.children,T,y.key):h!==null&&(h.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===We&&Bs(B)===h.type)?(T=o(h,y.props),T.ref=kr(v,h,y),T.return=v,T):(T=Jo(y.type,y.key,y.props,null,v.mode,T),T.ref=kr(v,h,y),T.return=v,T)}function x(v,h,y,T){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=il(y,v.mode,T),h.return=v,h):(h=o(h,y.children||[]),h.return=v,h)}function N(v,h,y,T,B){return h===null||h.tag!==7?(h=wt(y,v.mode,T,B),h.return=v,h):(h=o(h,y),h.return=v,h)}function z(v,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=ol(""+h,v.mode,y),h.return=v,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ke:return y=Jo(h.type,h.key,h.props,null,v.mode,y),y.ref=kr(v,null,h),y.return=v,y;case he:return h=il(h,v.mode,y),h.return=v,h;case We:var T=h._init;return z(v,T(h._payload),y)}if(Xt(h)||G(h))return h=wt(h,v.mode,y,null),h.return=v,h;Po(v,h)}return null}function O(v,h,y,T){var B=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return B!==null?null:d(v,h,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ke:return y.key===B?p(v,h,y,T):null;case he:return y.key===B?x(v,h,y,T):null;case We:return B=y._init,O(v,h,B(y._payload),T)}if(Xt(y)||G(y))return B!==null?null:N(v,h,y,T,null);Po(v,y)}return null}function A(v,h,y,T,B){if(typeof T=="string"&&T!==""||typeof T=="number")return v=v.get(y)||null,d(h,v,""+T,B);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case ke:return v=v.get(T.key===null?y:T.key)||null,p(h,v,T,B);case he:return v=v.get(T.key===null?y:T.key)||null,x(h,v,T,B);case We:var W=T._init;return A(v,h,y,W(T._payload),B)}if(Xt(T)||G(T))return v=v.get(y)||null,N(h,v,T,B,null);Po(h,T)}return null}function q(v,h,y,T){for(var B=null,W=null,V=h,K=h=0,Ie=null;V!==null&&K<y.length;K++){V.index>K?(Ie=V,V=null):Ie=V.sibling;var oe=O(v,V,y[K],T);if(oe===null){V===null&&(V=Ie);break}e&&V&&oe.alternate===null&&n(v,V),h=a(oe,h,K),W===null?B=oe:W.sibling=oe,W=oe,V=Ie}if(K===y.length)return t(v,V),xe&&pt(v,K),B;if(V===null){for(;K<y.length;K++)V=z(v,y[K],T),V!==null&&(h=a(V,h,K),W===null?B=V:W.sibling=V,W=V);return xe&&pt(v,K),B}for(V=r(v,V);K<y.length;K++)Ie=A(V,v,K,y[K],T),Ie!==null&&(e&&Ie.alternate!==null&&V.delete(Ie.key===null?K:Ie.key),h=a(Ie,h,K),W===null?B=Ie:W.sibling=Ie,W=Ie);return e&&V.forEach(function(it){return n(v,it)}),xe&&pt(v,K),B}function H(v,h,y,T){var B=G(y);if(typeof B!="function")throw Error(l(150));if(y=B.call(y),y==null)throw Error(l(151));for(var W=B=null,V=h,K=h=0,Ie=null,oe=y.next();V!==null&&!oe.done;K++,oe=y.next()){V.index>K?(Ie=V,V=null):Ie=V.sibling;var it=O(v,V,oe.value,T);if(it===null){V===null&&(V=Ie);break}e&&V&&it.alternate===null&&n(v,V),h=a(it,h,K),W===null?B=it:W.sibling=it,W=it,V=Ie}if(oe.done)return t(v,V),xe&&pt(v,K),B;if(V===null){for(;!oe.done;K++,oe=y.next())oe=z(v,oe.value,T),oe!==null&&(h=a(oe,h,K),W===null?B=oe:W.sibling=oe,W=oe);return xe&&pt(v,K),B}for(V=r(v,V);!oe.done;K++,oe=y.next())oe=A(V,v,K,oe.value,T),oe!==null&&(e&&oe.alternate!==null&&V.delete(oe.key===null?K:oe.key),h=a(oe,h,K),W===null?B=oe:W.sibling=oe,W=oe);return e&&V.forEach(function(Qf){return n(v,Qf)}),xe&&pt(v,K),B}function Ne(v,h,y,T){if(typeof y=="object"&&y!==null&&y.type===ve&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ke:e:{for(var B=y.key,W=h;W!==null;){if(W.key===B){if(B=y.type,B===ve){if(W.tag===7){t(v,W.sibling),h=o(W,y.props.children),h.return=v,v=h;break e}}else if(W.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===We&&Bs(B)===W.type){t(v,W.sibling),h=o(W,y.props),h.ref=kr(v,W,y),h.return=v,v=h;break e}t(v,W);break}else n(v,W);W=W.sibling}y.type===ve?(h=wt(y.props.children,v.mode,T,y.key),h.return=v,v=h):(T=Jo(y.type,y.key,y.props,null,v.mode,T),T.ref=kr(v,h,y),T.return=v,v=T)}return u(v);case he:e:{for(W=y.key;h!==null;){if(h.key===W)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){t(v,h.sibling),h=o(h,y.children||[]),h.return=v,v=h;break e}else{t(v,h);break}else n(v,h);h=h.sibling}h=il(y,v.mode,T),h.return=v,v=h}return u(v);case We:return W=y._init,Ne(v,h,W(y._payload),T)}if(Xt(y))return q(v,h,y,T);if(G(y))return H(v,h,y,T);Po(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(t(v,h.sibling),h=o(h,y),h.return=v,v=h):(t(v,h),h=ol(y,v.mode,T),h.return=v,v=h),u(v)):t(v,h)}return Ne}var Ft=Ws(!0),Vs=Ws(!1),No=Kn(null),zo=null,Ut=null,ha=null;function ma(){ha=Ut=zo=null}function ga(e){var n=No.current;ge(No),e._currentValue=n}function va(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function qt(e,n){zo=e,ha=Ut=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Xe=!0),e.firstContext=null)}function dn(e){var n=e._currentValue;if(ha!==e)if(e={context:e,memoizedValue:n,next:null},Ut===null){if(zo===null)throw Error(l(308));Ut=e,zo.dependencies={lanes:0,firstContext:e}}else Ut=Ut.next=e;return n}var ht=null;function ya(e){ht===null?ht=[e]:ht.push(e)}function Gs(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,ya(n)):(t.next=o.next,o.next=t),n.interleaved=t,Dn(e,r)}function Dn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Xn=!1;function ba(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ks(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function An(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Jn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ne&2){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,Dn(e,t)}return o=r.interleaved,o===null?(n.next=n,ya(r)):(n.next=o.next,o.next=n),r.interleaved=n,Dn(e,t)}function To(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Mi(e,t)}}function Qs(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,a=null;if(t=t.firstBaseUpdate,t!==null){do{var u={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};a===null?o=a=u:a=a.next=u,t=t.next}while(t!==null);a===null?o=a=n:a=a.next=n}else o=a=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ro(e,n,t,r){var o=e.updateQueue;Xn=!1;var a=o.firstBaseUpdate,u=o.lastBaseUpdate,d=o.shared.pending;if(d!==null){o.shared.pending=null;var p=d,x=p.next;p.next=null,u===null?a=x:u.next=x,u=p;var N=e.alternate;N!==null&&(N=N.updateQueue,d=N.lastBaseUpdate,d!==u&&(d===null?N.firstBaseUpdate=x:d.next=x,N.lastBaseUpdate=p))}if(a!==null){var z=o.baseState;u=0,N=x=p=null,d=a;do{var O=d.lane,A=d.eventTime;if((r&O)===O){N!==null&&(N=N.next={eventTime:A,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var q=e,H=d;switch(O=n,A=t,H.tag){case 1:if(q=H.payload,typeof q=="function"){z=q.call(A,z,O);break e}z=q;break e;case 3:q.flags=q.flags&-65537|128;case 0:if(q=H.payload,O=typeof q=="function"?q.call(A,z,O):q,O==null)break e;z=U({},z,O);break e;case 2:Xn=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,O=o.effects,O===null?o.effects=[d]:O.push(d))}else A={eventTime:A,lane:O,tag:d.tag,payload:d.payload,callback:d.callback,next:null},N===null?(x=N=A,p=z):N=N.next=A,u|=O;if(d=d.next,d===null){if(d=o.shared.pending,d===null)break;O=d,d=O.next,O.next=null,o.lastBaseUpdate=O,o.shared.pending=null}}while(!0);if(N===null&&(p=z),o.baseState=p,o.firstBaseUpdate=x,o.lastBaseUpdate=N,n=o.shared.interleaved,n!==null){o=n;do u|=o.lane,o=o.next;while(o!==n)}else a===null&&(o.shared.lanes=0);vt|=u,e.lanes=u,e.memoizedState=z}}function Ys(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(l(191,o));o.call(r)}}}var Sr={},Cn=Kn(Sr),Er=Kn(Sr),_r=Kn(Sr);function mt(e){if(e===Sr)throw Error(l(174));return e}function xa(e,n){switch(pe(_r,n),pe(Er,e),pe(Cn,Sr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:wi(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=wi(n,e)}ge(Cn),pe(Cn,n)}function Ht(){ge(Cn),ge(Er),ge(_r)}function Xs(e){mt(_r.current);var n=mt(Cn.current),t=wi(n,e.type);n!==t&&(pe(Er,e),pe(Cn,t))}function wa(e){Er.current===e&&(ge(Cn),ge(Er))}var Ee=Kn(0);function Mo(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ka=[];function Sa(){for(var e=0;e<ka.length;e++)ka[e]._workInProgressVersionPrimary=null;ka.length=0}var jo=de.ReactCurrentDispatcher,Ea=de.ReactCurrentBatchConfig,gt=0,_e=null,Re=null,De=null,Do=!1,Or=!1,Cr=0,yf=0;function qe(){throw Error(l(321))}function _a(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!vn(e[t],n[t]))return!1;return!0}function Oa(e,n,t,r,o,a){if(gt=a,_e=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,jo.current=e===null||e.memoizedState===null?kf:Sf,e=t(r,o),Or){a=0;do{if(Or=!1,Cr=0,25<=a)throw Error(l(301));a+=1,De=Re=null,n.updateQueue=null,jo.current=Ef,e=t(r,o)}while(Or)}if(jo.current=Lo,n=Re!==null&&Re.next!==null,gt=0,De=Re=_e=null,Do=!1,n)throw Error(l(300));return e}function Ca(){var e=Cr!==0;return Cr=0,e}function Pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?_e.memoizedState=De=e:De=De.next=e,De}function fn(){if(Re===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var n=De===null?_e.memoizedState:De.next;if(n!==null)De=n,Re=e;else{if(e===null)throw Error(l(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},De===null?_e.memoizedState=De=e:De=De.next=e}return De}function Pr(e,n){return typeof n=="function"?n(e):n}function Pa(e){var n=fn(),t=n.queue;if(t===null)throw Error(l(311));t.lastRenderedReducer=e;var r=Re,o=r.baseQueue,a=t.pending;if(a!==null){if(o!==null){var u=o.next;o.next=a.next,a.next=u}r.baseQueue=o=a,t.pending=null}if(o!==null){a=o.next,r=r.baseState;var d=u=null,p=null,x=a;do{var N=x.lane;if((gt&N)===N)p!==null&&(p=p.next={lane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),r=x.hasEagerState?x.eagerState:e(r,x.action);else{var z={lane:N,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null};p===null?(d=p=z,u=r):p=p.next=z,_e.lanes|=N,vt|=N}x=x.next}while(x!==null&&x!==a);p===null?u=r:p.next=d,vn(r,n.memoizedState)||(Xe=!0),n.memoizedState=r,n.baseState=u,n.baseQueue=p,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do a=o.lane,_e.lanes|=a,vt|=a,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Na(e){var n=fn(),t=n.queue;if(t===null)throw Error(l(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,a=n.memoizedState;if(o!==null){t.pending=null;var u=o=o.next;do a=e(a,u.action),u=u.next;while(u!==o);vn(a,n.memoizedState)||(Xe=!0),n.memoizedState=a,n.baseQueue===null&&(n.baseState=a),t.lastRenderedState=a}return[a,r]}function Js(){}function Zs(e,n){var t=_e,r=fn(),o=n(),a=!vn(r.memoizedState,o);if(a&&(r.memoizedState=o,Xe=!0),r=r.queue,za(tu.bind(null,t,r,e),[e]),r.getSnapshot!==n||a||De!==null&&De.memoizedState.tag&1){if(t.flags|=2048,Nr(9,nu.bind(null,t,r,o,n),void 0,null),Ae===null)throw Error(l(349));gt&30||eu(t,n,o)}return o}function eu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=_e.updateQueue,n===null?(n={lastEffect:null,stores:null},_e.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function nu(e,n,t,r){n.value=t,n.getSnapshot=r,ru(n)&&ou(e)}function tu(e,n,t){return t(function(){ru(n)&&ou(e)})}function ru(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!vn(e,t)}catch{return!0}}function ou(e){var n=Dn(e,1);n!==null&&kn(n,e,1,-1)}function iu(e){var n=Pn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pr,lastRenderedState:e},n.queue=e,e=e.dispatch=wf.bind(null,_e,e),[n.memoizedState,e]}function Nr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=_e.updateQueue,n===null?(n={lastEffect:null,stores:null},_e.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function au(){return fn().memoizedState}function Ao(e,n,t,r){var o=Pn();_e.flags|=e,o.memoizedState=Nr(1|n,t,void 0,r===void 0?null:r)}function Io(e,n,t,r){var o=fn();r=r===void 0?null:r;var a=void 0;if(Re!==null){var u=Re.memoizedState;if(a=u.destroy,r!==null&&_a(r,u.deps)){o.memoizedState=Nr(n,t,a,r);return}}_e.flags|=e,o.memoizedState=Nr(1|n,t,a,r)}function lu(e,n){return Ao(8390656,8,e,n)}function za(e,n){return Io(2048,8,e,n)}function su(e,n){return Io(4,2,e,n)}function uu(e,n){return Io(4,4,e,n)}function cu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function du(e,n,t){return t=t!=null?t.concat([e]):null,Io(4,4,cu.bind(null,n,e),t)}function Ta(){}function fu(e,n){var t=fn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&_a(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function pu(e,n){var t=fn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&_a(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function hu(e,n,t){return gt&21?(vn(t,n)||(t=Bl(),_e.lanes|=t,vt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Xe=!0),e.memoizedState=t)}function bf(e,n){var t=ce;ce=t!==0&&4>t?t:4,e(!0);var r=Ea.transition;Ea.transition={};try{e(!1),n()}finally{ce=t,Ea.transition=r}}function mu(){return fn().memoizedState}function xf(e,n,t){var r=tt(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},gu(e))vu(n,t);else if(t=Gs(e,n,t,r),t!==null){var o=Ge();kn(t,e,r,o),yu(t,n,r)}}function wf(e,n,t){var r=tt(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(gu(e))vu(n,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=n.lastRenderedReducer,a!==null))try{var u=n.lastRenderedState,d=a(u,t);if(o.hasEagerState=!0,o.eagerState=d,vn(d,u)){var p=n.interleaved;p===null?(o.next=o,ya(n)):(o.next=p.next,p.next=o),n.interleaved=o;return}}catch{}finally{}t=Gs(e,n,o,r),t!==null&&(o=Ge(),kn(t,e,r,o),yu(t,n,r))}}function gu(e){var n=e.alternate;return e===_e||n!==null&&n===_e}function vu(e,n){Or=Do=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function yu(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Mi(e,t)}}var Lo={readContext:dn,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useInsertionEffect:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useSyncExternalStore:qe,useId:qe,unstable_isNewReconciler:!1},kf={readContext:dn,useCallback:function(e,n){return Pn().memoizedState=[e,n===void 0?null:n],e},useContext:dn,useEffect:lu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ao(4194308,4,cu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ao(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ao(4,2,e,n)},useMemo:function(e,n){var t=Pn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Pn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=xf.bind(null,_e,e),[r.memoizedState,e]},useRef:function(e){var n=Pn();return e={current:e},n.memoizedState=e},useState:iu,useDebugValue:Ta,useDeferredValue:function(e){return Pn().memoizedState=e},useTransition:function(){var e=iu(!1),n=e[0];return e=bf.bind(null,e[1]),Pn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=_e,o=Pn();if(xe){if(t===void 0)throw Error(l(407));t=t()}else{if(t=n(),Ae===null)throw Error(l(349));gt&30||eu(r,n,t)}o.memoizedState=t;var a={value:t,getSnapshot:n};return o.queue=a,lu(tu.bind(null,r,a,e),[e]),r.flags|=2048,Nr(9,nu.bind(null,r,a,t,n),void 0,null),t},useId:function(){var e=Pn(),n=Ae.identifierPrefix;if(xe){var t=jn,r=Mn;t=(r&~(1<<32-gn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Cr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=yf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Sf={readContext:dn,useCallback:fu,useContext:dn,useEffect:za,useImperativeHandle:du,useInsertionEffect:su,useLayoutEffect:uu,useMemo:pu,useReducer:Pa,useRef:au,useState:function(){return Pa(Pr)},useDebugValue:Ta,useDeferredValue:function(e){var n=fn();return hu(n,Re.memoizedState,e)},useTransition:function(){var e=Pa(Pr)[0],n=fn().memoizedState;return[e,n]},useMutableSource:Js,useSyncExternalStore:Zs,useId:mu,unstable_isNewReconciler:!1},Ef={readContext:dn,useCallback:fu,useContext:dn,useEffect:za,useImperativeHandle:du,useInsertionEffect:su,useLayoutEffect:uu,useMemo:pu,useReducer:Na,useRef:au,useState:function(){return Na(Pr)},useDebugValue:Ta,useDeferredValue:function(e){var n=fn();return Re===null?n.memoizedState=e:hu(n,Re.memoizedState,e)},useTransition:function(){var e=Na(Pr)[0],n=fn().memoizedState;return[e,n]},useMutableSource:Js,useSyncExternalStore:Zs,useId:mu,unstable_isNewReconciler:!1};function bn(e,n){if(e&&e.defaultProps){n=U({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Ra(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:U({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Fo={isMounted:function(e){return(e=e._reactInternals)?ut(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Ge(),o=tt(e),a=An(r,o);a.payload=n,t!=null&&(a.callback=t),n=Jn(e,a,o),n!==null&&(kn(n,e,o,r),To(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Ge(),o=tt(e),a=An(r,o);a.tag=1,a.payload=n,t!=null&&(a.callback=t),n=Jn(e,a,o),n!==null&&(kn(n,e,o,r),To(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ge(),r=tt(e),o=An(t,r);o.tag=2,n!=null&&(o.callback=n),n=Jn(e,o,r),n!==null&&(kn(n,e,r,t),To(n,e,r))}};function bu(e,n,t,r,o,a,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,u):n.prototype&&n.prototype.isPureReactComponent?!mr(t,r)||!mr(o,a):!0}function xu(e,n,t){var r=!1,o=Qn,a=n.contextType;return typeof a=="object"&&a!==null?a=dn(a):(o=Ye(n)?dt:Ue.current,r=n.contextTypes,a=(r=r!=null)?Dt(e,o):Qn),n=new n(t,a),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Fo,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),n}function wu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Fo.enqueueReplaceState(n,n.state,null)}function Ma(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},ba(e);var a=n.contextType;typeof a=="object"&&a!==null?o.context=dn(a):(a=Ye(n)?dt:Ue.current,o.context=Dt(e,a)),o.state=e.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(Ra(e,n,a,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&Fo.enqueueReplaceState(o,o.state,null),Ro(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function $t(e,n){try{var t="",r=n;do t+=te(r),r=r.return;while(r);var o=t}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:n,stack:o,digest:null}}function ja(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Da(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var _f=typeof WeakMap=="function"?WeakMap:Map;function ku(e,n,t){t=An(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Vo||(Vo=!0,Ya=r),Da(e,n)},t}function Su(e,n,t){t=An(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){Da(e,n)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(t.callback=function(){Da(e,n),typeof r!="function"&&(et===null?et=new Set([this]):et.add(this));var u=n.stack;this.componentDidCatch(n.value,{componentStack:u!==null?u:""})}),t}function Eu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new _f;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=Ff.bind(null,e,n,t),n.then(e,e))}function _u(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ou(e,n,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=An(-1,1),n.tag=2,Jn(t,n,1))),t.lanes|=1),e)}var Of=de.ReactCurrentOwner,Xe=!1;function Ve(e,n,t,r){n.child=e===null?Vs(n,null,t,r):Ft(n,e.child,t,r)}function Cu(e,n,t,r,o){t=t.render;var a=n.ref;return qt(n,o),r=Oa(e,n,t,r,a,o),t=Ca(),e!==null&&!Xe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,In(e,n,o)):(xe&&t&&ua(n),n.flags|=1,Ve(e,n,r,o),n.child)}function Pu(e,n,t,r,o){if(e===null){var a=t.type;return typeof a=="function"&&!rl(a)&&a.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=a,Nu(e,n,a,r,o)):(e=Jo(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(a=e.child,!(e.lanes&o)){var u=a.memoizedProps;if(t=t.compare,t=t!==null?t:mr,t(u,r)&&e.ref===n.ref)return In(e,n,o)}return n.flags|=1,e=ot(a,r),e.ref=n.ref,e.return=n,n.child=e}function Nu(e,n,t,r,o){if(e!==null){var a=e.memoizedProps;if(mr(a,r)&&e.ref===n.ref)if(Xe=!1,n.pendingProps=r=a,(e.lanes&o)!==0)e.flags&131072&&(Xe=!0);else return n.lanes=e.lanes,In(e,n,o)}return Aa(e,n,t,r,o)}function zu(e,n,t){var r=n.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(Wt,ln),ln|=t;else{if(!(t&1073741824))return e=a!==null?a.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,pe(Wt,ln),ln|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:t,pe(Wt,ln),ln|=r}else a!==null?(r=a.baseLanes|t,n.memoizedState=null):r=t,pe(Wt,ln),ln|=r;return Ve(e,n,o,t),n.child}function Tu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Aa(e,n,t,r,o){var a=Ye(t)?dt:Ue.current;return a=Dt(n,a),qt(n,o),t=Oa(e,n,t,r,a,o),r=Ca(),e!==null&&!Xe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,In(e,n,o)):(xe&&r&&ua(n),n.flags|=1,Ve(e,n,t,o),n.child)}function Ru(e,n,t,r,o){if(Ye(t)){var a=!0;So(n)}else a=!1;if(qt(n,o),n.stateNode===null)qo(e,n),xu(n,t,r),Ma(n,t,r,o),r=!0;else if(e===null){var u=n.stateNode,d=n.memoizedProps;u.props=d;var p=u.context,x=t.contextType;typeof x=="object"&&x!==null?x=dn(x):(x=Ye(t)?dt:Ue.current,x=Dt(n,x));var N=t.getDerivedStateFromProps,z=typeof N=="function"||typeof u.getSnapshotBeforeUpdate=="function";z||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(d!==r||p!==x)&&wu(n,u,r,x),Xn=!1;var O=n.memoizedState;u.state=O,Ro(n,r,u,o),p=n.memoizedState,d!==r||O!==p||Qe.current||Xn?(typeof N=="function"&&(Ra(n,t,N,r),p=n.memoizedState),(d=Xn||bu(n,t,d,r,O,p,x))?(z||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=p),u.props=r,u.state=p,u.context=x,r=d):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{u=n.stateNode,Ks(e,n),d=n.memoizedProps,x=n.type===n.elementType?d:bn(n.type,d),u.props=x,z=n.pendingProps,O=u.context,p=t.contextType,typeof p=="object"&&p!==null?p=dn(p):(p=Ye(t)?dt:Ue.current,p=Dt(n,p));var A=t.getDerivedStateFromProps;(N=typeof A=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(d!==z||O!==p)&&wu(n,u,r,p),Xn=!1,O=n.memoizedState,u.state=O,Ro(n,r,u,o);var q=n.memoizedState;d!==z||O!==q||Qe.current||Xn?(typeof A=="function"&&(Ra(n,t,A,r),q=n.memoizedState),(x=Xn||bu(n,t,x,r,O,q,p)||!1)?(N||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,q,p),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,q,p)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||d===e.memoizedProps&&O===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&O===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=q),u.props=r,u.state=q,u.context=p,r=x):(typeof u.componentDidUpdate!="function"||d===e.memoizedProps&&O===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&O===e.memoizedState||(n.flags|=1024),r=!1)}return Ia(e,n,t,r,a,o)}function Ia(e,n,t,r,o,a){Tu(e,n);var u=(n.flags&128)!==0;if(!r&&!u)return o&&Is(n,t,!1),In(e,n,a);r=n.stateNode,Of.current=n;var d=u&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&u?(n.child=Ft(n,e.child,null,a),n.child=Ft(n,null,d,a)):Ve(e,n,d,a),n.memoizedState=r.state,o&&Is(n,t,!0),n.child}function Mu(e){var n=e.stateNode;n.pendingContext?Ds(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ds(e,n.context,!1),xa(e,n.containerInfo)}function ju(e,n,t,r,o){return Lt(),pa(o),n.flags|=256,Ve(e,n,t,r),n.child}var La={dehydrated:null,treeContext:null,retryLane:0};function Fa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Du(e,n,t){var r=n.pendingProps,o=Ee.current,a=!1,u=(n.flags&128)!==0,d;if((d=u)||(d=e!==null&&e.memoizedState===null?!1:(o&2)!==0),d?(a=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),pe(Ee,o&1),e===null)return fa(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(u=r.children,e=r.fallback,a?(r=n.mode,a=n.child,u={mode:"hidden",children:u},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=u):a=Zo(u,r,0,null),e=wt(e,r,t,null),a.return=n,e.return=n,a.sibling=e,n.child=a,n.child.memoizedState=Fa(t),n.memoizedState=La,e):Ua(n,u));if(o=e.memoizedState,o!==null&&(d=o.dehydrated,d!==null))return Cf(e,n,u,r,d,o,t);if(a){a=r.fallback,u=n.mode,o=e.child,d=o.sibling;var p={mode:"hidden",children:r.children};return!(u&1)&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=p,n.deletions=null):(r=ot(o,p),r.subtreeFlags=o.subtreeFlags&14680064),d!==null?a=ot(d,a):(a=wt(a,u,t,null),a.flags|=2),a.return=n,r.return=n,r.sibling=a,n.child=r,r=a,a=n.child,u=e.child.memoizedState,u=u===null?Fa(t):{baseLanes:u.baseLanes|t,cachePool:null,transitions:u.transitions},a.memoizedState=u,a.childLanes=e.childLanes&~t,n.memoizedState=La,r}return a=e.child,e=a.sibling,r=ot(a,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Ua(e,n){return n=Zo({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Uo(e,n,t,r){return r!==null&&pa(r),Ft(n,e.child,null,t),e=Ua(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Cf(e,n,t,r,o,a,u){if(t)return n.flags&256?(n.flags&=-257,r=ja(Error(l(422))),Uo(e,n,u,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(a=r.fallback,o=n.mode,r=Zo({mode:"visible",children:r.children},o,0,null),a=wt(a,o,u,null),a.flags|=2,r.return=n,a.return=n,r.sibling=a,n.child=r,n.mode&1&&Ft(n,e.child,null,u),n.child.memoizedState=Fa(u),n.memoizedState=La,a);if(!(n.mode&1))return Uo(e,n,u,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var d=r.dgst;return r=d,a=Error(l(419)),r=ja(a,r,void 0),Uo(e,n,u,r)}if(d=(u&e.childLanes)!==0,Xe||d){if(r=Ae,r!==null){switch(u&-u){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|u)?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,Dn(e,o),kn(r,e,o,-1))}return tl(),r=ja(Error(l(421))),Uo(e,n,u,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=Uf.bind(null,e),o._reactRetry=n,null):(e=a.treeContext,an=Gn(o.nextSibling),on=n,xe=!0,yn=null,e!==null&&(un[cn++]=Mn,un[cn++]=jn,un[cn++]=ft,Mn=e.id,jn=e.overflow,ft=n),n=Ua(n,r.children),n.flags|=4096,n)}function Au(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),va(e.return,n,t)}function qa(e,n,t,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(a.isBackwards=n,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=t,a.tailMode=o)}function Iu(e,n,t){var r=n.pendingProps,o=r.revealOrder,a=r.tail;if(Ve(e,n,r.children,t),r=Ee.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Au(e,t,n);else if(e.tag===19)Au(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(pe(Ee,r),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&Mo(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),qa(n,!1,o,t,a);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&Mo(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}qa(n,!0,t,null,a);break;case"together":qa(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function qo(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function In(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),vt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(l(153));if(n.child!==null){for(e=n.child,t=ot(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=ot(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Pf(e,n,t){switch(n.tag){case 3:Mu(n),Lt();break;case 5:Xs(n);break;case 1:Ye(n.type)&&So(n);break;case 4:xa(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;pe(No,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(pe(Ee,Ee.current&1),n.flags|=128,null):t&n.child.childLanes?Du(e,n,t):(pe(Ee,Ee.current&1),e=In(e,n,t),e!==null?e.sibling:null);pe(Ee,Ee.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Iu(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),pe(Ee,Ee.current),r)break;return null;case 22:case 23:return n.lanes=0,zu(e,n,t)}return In(e,n,t)}var Lu,Ha,Fu,Uu;Lu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},Ha=function(){},Fu=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,mt(Cn.current);var a=null;switch(t){case"input":o=vi(e,o),r=vi(e,r),a=[];break;case"select":o=U({},o,{value:void 0}),r=U({},r,{value:void 0}),a=[];break;case"textarea":o=xi(e,o),r=xi(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=xo)}ki(t,r);var u;t=null;for(x in o)if(!r.hasOwnProperty(x)&&o.hasOwnProperty(x)&&o[x]!=null)if(x==="style"){var d=o[x];for(u in d)d.hasOwnProperty(u)&&(t||(t={}),t[u]="")}else x!=="dangerouslySetInnerHTML"&&x!=="children"&&x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(f.hasOwnProperty(x)?a||(a=[]):(a=a||[]).push(x,null));for(x in r){var p=r[x];if(d=o!=null?o[x]:void 0,r.hasOwnProperty(x)&&p!==d&&(p!=null||d!=null))if(x==="style")if(d){for(u in d)!d.hasOwnProperty(u)||p&&p.hasOwnProperty(u)||(t||(t={}),t[u]="");for(u in p)p.hasOwnProperty(u)&&d[u]!==p[u]&&(t||(t={}),t[u]=p[u])}else t||(a||(a=[]),a.push(x,t)),t=p;else x==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,d=d?d.__html:void 0,p!=null&&d!==p&&(a=a||[]).push(x,p)):x==="children"?typeof p!="string"&&typeof p!="number"||(a=a||[]).push(x,""+p):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&(f.hasOwnProperty(x)?(p!=null&&x==="onScroll"&&me("scroll",e),a||d===p||(a=[])):(a=a||[]).push(x,p))}t&&(a=a||[]).push("style",t);var x=a;(n.updateQueue=x)&&(n.flags|=4)}},Uu=function(e,n,t,r){t!==r&&(n.flags|=4)};function zr(e,n){if(!xe)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function He(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Nf(e,n,t){var r=n.pendingProps;switch(ca(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(n),null;case 1:return Ye(n.type)&&ko(),He(n),null;case 3:return r=n.stateNode,Ht(),ge(Qe),ge(Ue),Sa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Co(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,yn!==null&&(Za(yn),yn=null))),Ha(e,n),He(n),null;case 5:wa(n);var o=mt(_r.current);if(t=n.type,e!==null&&n.stateNode!=null)Fu(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(l(166));return He(n),null}if(e=mt(Cn.current),Co(n)){r=n.stateNode,t=n.type;var a=n.memoizedProps;switch(r[On]=n,r[xr]=a,e=(n.mode&1)!==0,t){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(o=0;o<vr.length;o++)me(vr[o],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":xl(r,a),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},me("invalid",r);break;case"textarea":Sl(r,a),me("invalid",r)}ki(t,a),o=null;for(var u in a)if(a.hasOwnProperty(u)){var d=a[u];u==="children"?typeof d=="string"?r.textContent!==d&&(a.suppressHydrationWarning!==!0&&bo(r.textContent,d,e),o=["children",d]):typeof d=="number"&&r.textContent!==""+d&&(a.suppressHydrationWarning!==!0&&bo(r.textContent,d,e),o=["children",""+d]):f.hasOwnProperty(u)&&d!=null&&u==="onScroll"&&me("scroll",r)}switch(t){case"input":Qr(r),kl(r,a,!0);break;case"textarea":Qr(r),_l(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=xo)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{u=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ol(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=u.createElement(t,{is:r.is}):(e=u.createElement(t),t==="select"&&(u=e,r.multiple?u.multiple=!0:r.size&&(u.size=r.size))):e=u.createElementNS(e,t),e[On]=n,e[xr]=r,Lu(e,n,!1,!1),n.stateNode=e;e:{switch(u=Si(t,r),t){case"dialog":me("cancel",e),me("close",e),o=r;break;case"iframe":case"object":case"embed":me("load",e),o=r;break;case"video":case"audio":for(o=0;o<vr.length;o++)me(vr[o],e);o=r;break;case"source":me("error",e),o=r;break;case"img":case"image":case"link":me("error",e),me("load",e),o=r;break;case"details":me("toggle",e),o=r;break;case"input":xl(e,r),o=vi(e,r),me("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=U({},r,{value:void 0}),me("invalid",e);break;case"textarea":Sl(e,r),o=xi(e,r),me("invalid",e);break;default:o=r}ki(t,o),d=o;for(a in d)if(d.hasOwnProperty(a)){var p=d[a];a==="style"?Nl(e,p):a==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,p!=null&&Cl(e,p)):a==="children"?typeof p=="string"?(t!=="textarea"||p!=="")&&Jt(e,p):typeof p=="number"&&Jt(e,""+p):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(f.hasOwnProperty(a)?p!=null&&a==="onScroll"&&me("scroll",e):p!=null&&ie(e,a,p,u))}switch(t){case"input":Qr(e),kl(e,r,!1);break;case"textarea":Qr(e),_l(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ue(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?St(e,!!r.multiple,a,!1):r.defaultValue!=null&&St(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=xo)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return He(n),null;case 6:if(e&&n.stateNode!=null)Uu(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(l(166));if(t=mt(_r.current),mt(Cn.current),Co(n)){if(r=n.stateNode,t=n.memoizedProps,r[On]=n,(a=r.nodeValue!==t)&&(e=on,e!==null))switch(e.tag){case 3:bo(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&bo(r.nodeValue,t,(e.mode&1)!==0)}a&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[On]=n,n.stateNode=r}return He(n),null;case 13:if(ge(Ee),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(xe&&an!==null&&n.mode&1&&!(n.flags&128))$s(),Lt(),n.flags|=98560,a=!1;else if(a=Co(n),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(l(318));if(a=n.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(l(317));a[On]=n}else Lt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;He(n),a=!1}else yn!==null&&(Za(yn),yn=null),a=!0;if(!a)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||Ee.current&1?Me===0&&(Me=3):tl())),n.updateQueue!==null&&(n.flags|=4),He(n),null);case 4:return Ht(),Ha(e,n),e===null&&yr(n.stateNode.containerInfo),He(n),null;case 10:return ga(n.type._context),He(n),null;case 17:return Ye(n.type)&&ko(),He(n),null;case 19:if(ge(Ee),a=n.memoizedState,a===null)return He(n),null;if(r=(n.flags&128)!==0,u=a.rendering,u===null)if(r)zr(a,!1);else{if(Me!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(u=Mo(e),u!==null){for(n.flags|=128,zr(a,!1),r=u.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)a=t,e=r,a.flags&=14680066,u=a.alternate,u===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=u.childLanes,a.lanes=u.lanes,a.child=u.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=u.memoizedProps,a.memoizedState=u.memoizedState,a.updateQueue=u.updateQueue,a.type=u.type,e=u.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return pe(Ee,Ee.current&1|2),n.child}e=e.sibling}a.tail!==null&&Pe()>Vt&&(n.flags|=128,r=!0,zr(a,!1),n.lanes=4194304)}else{if(!r)if(e=Mo(u),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),zr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!u.alternate&&!xe)return He(n),null}else 2*Pe()-a.renderingStartTime>Vt&&t!==1073741824&&(n.flags|=128,r=!0,zr(a,!1),n.lanes=4194304);a.isBackwards?(u.sibling=n.child,n.child=u):(t=a.last,t!==null?t.sibling=u:n.child=u,a.last=u)}return a.tail!==null?(n=a.tail,a.rendering=n,a.tail=n.sibling,a.renderingStartTime=Pe(),n.sibling=null,t=Ee.current,pe(Ee,r?t&1|2:t&1),n):(He(n),null);case 22:case 23:return nl(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?ln&1073741824&&(He(n),n.subtreeFlags&6&&(n.flags|=8192)):He(n),null;case 24:return null;case 25:return null}throw Error(l(156,n.tag))}function zf(e,n){switch(ca(n),n.tag){case 1:return Ye(n.type)&&ko(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ht(),ge(Qe),ge(Ue),Sa(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return wa(n),null;case 13:if(ge(Ee),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(l(340));Lt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ge(Ee),null;case 4:return Ht(),null;case 10:return ga(n.type._context),null;case 22:case 23:return nl(),null;case 24:return null;default:return null}}var Ho=!1,$e=!1,Tf=typeof WeakSet=="function"?WeakSet:Set,F=null;function Bt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Ce(e,n,r)}else t.current=null}function $a(e,n,t){try{t()}catch(r){Ce(e,n,r)}}var qu=!1;function Rf(e,n){if(na=lo,e=bs(),Gi(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{t.nodeType,a.nodeType}catch{t=null;break e}var u=0,d=-1,p=-1,x=0,N=0,z=e,O=null;n:for(;;){for(var A;z!==t||o!==0&&z.nodeType!==3||(d=u+o),z!==a||r!==0&&z.nodeType!==3||(p=u+r),z.nodeType===3&&(u+=z.nodeValue.length),(A=z.firstChild)!==null;)O=z,z=A;for(;;){if(z===e)break n;if(O===t&&++x===o&&(d=u),O===a&&++N===r&&(p=u),(A=z.nextSibling)!==null)break;z=O,O=z.parentNode}z=A}t=d===-1||p===-1?null:{start:d,end:p}}else t=null}t=t||{start:0,end:0}}else t=null;for(ta={focusedElem:e,selectionRange:t},lo=!1,F=n;F!==null;)if(n=F,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,F=e;else for(;F!==null;){n=F;try{var q=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(q!==null){var H=q.memoizedProps,Ne=q.memoizedState,v=n.stateNode,h=v.getSnapshotBeforeUpdate(n.elementType===n.type?H:bn(n.type,H),Ne);v.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=n.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(T){Ce(n,n.return,T)}if(e=n.sibling,e!==null){e.return=n.return,F=e;break}F=n.return}return q=qu,qu=!1,q}function Tr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&$a(n,t,a)}o=o.next}while(o!==r)}}function $o(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Ba(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Hu(e){var n=e.alternate;n!==null&&(e.alternate=null,Hu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[On],delete n[xr],delete n[aa],delete n[hf],delete n[mf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $u(e){return e.tag===5||e.tag===3||e.tag===4}function Bu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$u(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wa(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=xo));else if(r!==4&&(e=e.child,e!==null))for(Wa(e,n,t),e=e.sibling;e!==null;)Wa(e,n,t),e=e.sibling}function Va(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Va(e,n,t),e=e.sibling;e!==null;)Va(e,n,t),e=e.sibling}var Le=null,xn=!1;function Zn(e,n,t){for(t=t.child;t!==null;)Wu(e,n,t),t=t.sibling}function Wu(e,n,t){if(_n&&typeof _n.onCommitFiberUnmount=="function")try{_n.onCommitFiberUnmount(no,t)}catch{}switch(t.tag){case 5:$e||Bt(t,n);case 6:var r=Le,o=xn;Le=null,Zn(e,n,t),Le=r,xn=o,Le!==null&&(xn?(e=Le,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Le.removeChild(t.stateNode));break;case 18:Le!==null&&(xn?(e=Le,t=t.stateNode,e.nodeType===8?ia(e.parentNode,t):e.nodeType===1&&ia(e,t),ur(e)):ia(Le,t.stateNode));break;case 4:r=Le,o=xn,Le=t.stateNode.containerInfo,xn=!0,Zn(e,n,t),Le=r,xn=o;break;case 0:case 11:case 14:case 15:if(!$e&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,u=a.destroy;a=a.tag,u!==void 0&&(a&2||a&4)&&$a(t,n,u),o=o.next}while(o!==r)}Zn(e,n,t);break;case 1:if(!$e&&(Bt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(d){Ce(t,n,d)}Zn(e,n,t);break;case 21:Zn(e,n,t);break;case 22:t.mode&1?($e=(r=$e)||t.memoizedState!==null,Zn(e,n,t),$e=r):Zn(e,n,t);break;default:Zn(e,n,t)}}function Vu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Tf),n.forEach(function(r){var o=qf.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function wn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var a=e,u=n,d=u;e:for(;d!==null;){switch(d.tag){case 5:Le=d.stateNode,xn=!1;break e;case 3:Le=d.stateNode.containerInfo,xn=!0;break e;case 4:Le=d.stateNode.containerInfo,xn=!0;break e}d=d.return}if(Le===null)throw Error(l(160));Wu(a,u,o),Le=null,xn=!1;var p=o.alternate;p!==null&&(p.return=null),o.return=null}catch(x){Ce(o,n,x)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Gu(n,e),n=n.sibling}function Gu(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(wn(n,e),Nn(e),r&4){try{Tr(3,e,e.return),$o(3,e)}catch(H){Ce(e,e.return,H)}try{Tr(5,e,e.return)}catch(H){Ce(e,e.return,H)}}break;case 1:wn(n,e),Nn(e),r&512&&t!==null&&Bt(t,t.return);break;case 5:if(wn(n,e),Nn(e),r&512&&t!==null&&Bt(t,t.return),e.flags&32){var o=e.stateNode;try{Jt(o,"")}catch(H){Ce(e,e.return,H)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,u=t!==null?t.memoizedProps:a,d=e.type,p=e.updateQueue;if(e.updateQueue=null,p!==null)try{d==="input"&&a.type==="radio"&&a.name!=null&&wl(o,a),Si(d,u);var x=Si(d,a);for(u=0;u<p.length;u+=2){var N=p[u],z=p[u+1];N==="style"?Nl(o,z):N==="dangerouslySetInnerHTML"?Cl(o,z):N==="children"?Jt(o,z):ie(o,N,z,x)}switch(d){case"input":yi(o,a);break;case"textarea":El(o,a);break;case"select":var O=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var A=a.value;A!=null?St(o,!!a.multiple,A,!1):O!==!!a.multiple&&(a.defaultValue!=null?St(o,!!a.multiple,a.defaultValue,!0):St(o,!!a.multiple,a.multiple?[]:"",!1))}o[xr]=a}catch(H){Ce(e,e.return,H)}}break;case 6:if(wn(n,e),Nn(e),r&4){if(e.stateNode===null)throw Error(l(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(H){Ce(e,e.return,H)}}break;case 3:if(wn(n,e),Nn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{ur(n.containerInfo)}catch(H){Ce(e,e.return,H)}break;case 4:wn(n,e),Nn(e);break;case 13:wn(n,e),Nn(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(Qa=Pe())),r&4&&Vu(e);break;case 22:if(N=t!==null&&t.memoizedState!==null,e.mode&1?($e=(x=$e)||N,wn(n,e),$e=x):wn(n,e),Nn(e),r&8192){if(x=e.memoizedState!==null,(e.stateNode.isHidden=x)&&!N&&e.mode&1)for(F=e,N=e.child;N!==null;){for(z=F=N;F!==null;){switch(O=F,A=O.child,O.tag){case 0:case 11:case 14:case 15:Tr(4,O,O.return);break;case 1:Bt(O,O.return);var q=O.stateNode;if(typeof q.componentWillUnmount=="function"){r=O,t=O.return;try{n=r,q.props=n.memoizedProps,q.state=n.memoizedState,q.componentWillUnmount()}catch(H){Ce(r,t,H)}}break;case 5:Bt(O,O.return);break;case 22:if(O.memoizedState!==null){Yu(z);continue}}A!==null?(A.return=O,F=A):Yu(z)}N=N.sibling}e:for(N=null,z=e;;){if(z.tag===5){if(N===null){N=z;try{o=z.stateNode,x?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(d=z.stateNode,p=z.memoizedProps.style,u=p!=null&&p.hasOwnProperty("display")?p.display:null,d.style.display=Pl("display",u))}catch(H){Ce(e,e.return,H)}}}else if(z.tag===6){if(N===null)try{z.stateNode.nodeValue=x?"":z.memoizedProps}catch(H){Ce(e,e.return,H)}}else if((z.tag!==22&&z.tag!==23||z.memoizedState===null||z===e)&&z.child!==null){z.child.return=z,z=z.child;continue}if(z===e)break e;for(;z.sibling===null;){if(z.return===null||z.return===e)break e;N===z&&(N=null),z=z.return}N===z&&(N=null),z.sibling.return=z.return,z=z.sibling}}break;case 19:wn(n,e),Nn(e),r&4&&Vu(e);break;case 21:break;default:wn(n,e),Nn(e)}}function Nn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if($u(t)){var r=t;break e}t=t.return}throw Error(l(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Jt(o,""),r.flags&=-33);var a=Bu(e);Va(e,a,o);break;case 3:case 4:var u=r.stateNode.containerInfo,d=Bu(e);Wa(e,d,u);break;default:throw Error(l(161))}}catch(p){Ce(e,e.return,p)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Mf(e,n,t){F=e,Ku(e)}function Ku(e,n,t){for(var r=(e.mode&1)!==0;F!==null;){var o=F,a=o.child;if(o.tag===22&&r){var u=o.memoizedState!==null||Ho;if(!u){var d=o.alternate,p=d!==null&&d.memoizedState!==null||$e;d=Ho;var x=$e;if(Ho=u,($e=p)&&!x)for(F=o;F!==null;)u=F,p=u.child,u.tag===22&&u.memoizedState!==null?Xu(o):p!==null?(p.return=u,F=p):Xu(o);for(;a!==null;)F=a,Ku(a),a=a.sibling;F=o,Ho=d,$e=x}Qu(e)}else o.subtreeFlags&8772&&a!==null?(a.return=o,F=a):Qu(e)}}function Qu(e){for(;F!==null;){var n=F;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:$e||$o(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!$e)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:bn(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=n.updateQueue;a!==null&&Ys(n,a,r);break;case 3:var u=n.updateQueue;if(u!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Ys(n,u,t)}break;case 5:var d=n.stateNode;if(t===null&&n.flags&4){t=d;var p=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":p.autoFocus&&t.focus();break;case"img":p.src&&(t.src=p.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var x=n.alternate;if(x!==null){var N=x.memoizedState;if(N!==null){var z=N.dehydrated;z!==null&&ur(z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}$e||n.flags&512&&Ba(n)}catch(O){Ce(n,n.return,O)}}if(n===e){F=null;break}if(t=n.sibling,t!==null){t.return=n.return,F=t;break}F=n.return}}function Yu(e){for(;F!==null;){var n=F;if(n===e){F=null;break}var t=n.sibling;if(t!==null){t.return=n.return,F=t;break}F=n.return}}function Xu(e){for(;F!==null;){var n=F;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{$o(4,n)}catch(p){Ce(n,t,p)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(p){Ce(n,o,p)}}var a=n.return;try{Ba(n)}catch(p){Ce(n,a,p)}break;case 5:var u=n.return;try{Ba(n)}catch(p){Ce(n,u,p)}}}catch(p){Ce(n,n.return,p)}if(n===e){F=null;break}var d=n.sibling;if(d!==null){d.return=n.return,F=d;break}F=n.return}}var jf=Math.ceil,Bo=de.ReactCurrentDispatcher,Ga=de.ReactCurrentOwner,pn=de.ReactCurrentBatchConfig,ne=0,Ae=null,Te=null,Fe=0,ln=0,Wt=Kn(0),Me=0,Rr=null,vt=0,Wo=0,Ka=0,Mr=null,Je=null,Qa=0,Vt=1/0,Ln=null,Vo=!1,Ya=null,et=null,Go=!1,nt=null,Ko=0,jr=0,Xa=null,Qo=-1,Yo=0;function Ge(){return ne&6?Pe():Qo!==-1?Qo:Qo=Pe()}function tt(e){return e.mode&1?ne&2&&Fe!==0?Fe&-Fe:vf.transition!==null?(Yo===0&&(Yo=Bl()),Yo):(e=ce,e!==0||(e=window.event,e=e===void 0?16:Zl(e.type)),e):1}function kn(e,n,t,r){if(50<jr)throw jr=0,Xa=null,Error(l(185));or(e,t,r),(!(ne&2)||e!==Ae)&&(e===Ae&&(!(ne&2)&&(Wo|=t),Me===4&&rt(e,Fe)),Ze(e,r),t===1&&ne===0&&!(n.mode&1)&&(Vt=Pe()+500,Eo&&Yn()))}function Ze(e,n){var t=e.callbackNode;gd(e,n);var r=oo(e,e===Ae?Fe:0);if(r===0)t!==null&&ql(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&ql(t),n===1)e.tag===0?gf(Zu.bind(null,e)):Ls(Zu.bind(null,e)),ff(function(){!(ne&6)&&Yn()}),t=null;else{switch(Wl(r)){case 1:t=zi;break;case 4:t=Hl;break;case 16:t=eo;break;case 536870912:t=$l;break;default:t=eo}t=lc(t,Ju.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Ju(e,n){if(Qo=-1,Yo=0,ne&6)throw Error(l(327));var t=e.callbackNode;if(Gt()&&e.callbackNode!==t)return null;var r=oo(e,e===Ae?Fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Xo(e,r);else{n=r;var o=ne;ne|=2;var a=nc();(Ae!==e||Fe!==n)&&(Ln=null,Vt=Pe()+500,bt(e,n));do try{If();break}catch(d){ec(e,d)}while(!0);ma(),Bo.current=a,ne=o,Te!==null?n=0:(Ae=null,Fe=0,n=Me)}if(n!==0){if(n===2&&(o=Ti(e),o!==0&&(r=o,n=Ja(e,o))),n===1)throw t=Rr,bt(e,0),rt(e,r),Ze(e,Pe()),t;if(n===6)rt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Df(o)&&(n=Xo(e,r),n===2&&(a=Ti(e),a!==0&&(r=a,n=Ja(e,a))),n===1))throw t=Rr,bt(e,0),rt(e,r),Ze(e,Pe()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(l(345));case 2:xt(e,Je,Ln);break;case 3:if(rt(e,r),(r&130023424)===r&&(n=Qa+500-Pe(),10<n)){if(oo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ge(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=oa(xt.bind(null,e,Je,Ln),n);break}xt(e,Je,Ln);break;case 4:if(rt(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var u=31-gn(r);a=1<<u,u=n[u],u>o&&(o=u),r&=~a}if(r=o,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jf(r/1960))-r,10<r){e.timeoutHandle=oa(xt.bind(null,e,Je,Ln),r);break}xt(e,Je,Ln);break;case 5:xt(e,Je,Ln);break;default:throw Error(l(329))}}}return Ze(e,Pe()),e.callbackNode===t?Ju.bind(null,e):null}function Ja(e,n){var t=Mr;return e.current.memoizedState.isDehydrated&&(bt(e,n).flags|=256),e=Xo(e,n),e!==2&&(n=Je,Je=t,n!==null&&Za(n)),e}function Za(e){Je===null?Je=e:Je.push.apply(Je,e)}function Df(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],a=o.getSnapshot;o=o.value;try{if(!vn(a(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function rt(e,n){for(n&=~Ka,n&=~Wo,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-gn(n),r=1<<t;e[t]=-1,n&=~r}}function Zu(e){if(ne&6)throw Error(l(327));Gt();var n=oo(e,0);if(!(n&1))return Ze(e,Pe()),null;var t=Xo(e,n);if(e.tag!==0&&t===2){var r=Ti(e);r!==0&&(n=r,t=Ja(e,r))}if(t===1)throw t=Rr,bt(e,0),rt(e,n),Ze(e,Pe()),t;if(t===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,xt(e,Je,Ln),Ze(e,Pe()),null}function el(e,n){var t=ne;ne|=1;try{return e(n)}finally{ne=t,ne===0&&(Vt=Pe()+500,Eo&&Yn())}}function yt(e){nt!==null&&nt.tag===0&&!(ne&6)&&Gt();var n=ne;ne|=1;var t=pn.transition,r=ce;try{if(pn.transition=null,ce=1,e)return e()}finally{ce=r,pn.transition=t,ne=n,!(ne&6)&&Yn()}}function nl(){ln=Wt.current,ge(Wt)}function bt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,df(t)),Te!==null)for(t=Te.return;t!==null;){var r=t;switch(ca(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ko();break;case 3:Ht(),ge(Qe),ge(Ue),Sa();break;case 5:wa(r);break;case 4:Ht();break;case 13:ge(Ee);break;case 19:ge(Ee);break;case 10:ga(r.type._context);break;case 22:case 23:nl()}t=t.return}if(Ae=e,Te=e=ot(e.current,null),Fe=ln=n,Me=0,Rr=null,Ka=Wo=vt=0,Je=Mr=null,ht!==null){for(n=0;n<ht.length;n++)if(t=ht[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,a=t.pending;if(a!==null){var u=a.next;a.next=o,r.next=u}t.pending=r}ht=null}return e}function ec(e,n){do{var t=Te;try{if(ma(),jo.current=Lo,Do){for(var r=_e.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Do=!1}if(gt=0,De=Re=_e=null,Or=!1,Cr=0,Ga.current=null,t===null||t.return===null){Me=1,Rr=n,Te=null;break}e:{var a=e,u=t.return,d=t,p=n;if(n=Fe,d.flags|=32768,p!==null&&typeof p=="object"&&typeof p.then=="function"){var x=p,N=d,z=N.tag;if(!(N.mode&1)&&(z===0||z===11||z===15)){var O=N.alternate;O?(N.updateQueue=O.updateQueue,N.memoizedState=O.memoizedState,N.lanes=O.lanes):(N.updateQueue=null,N.memoizedState=null)}var A=_u(u);if(A!==null){A.flags&=-257,Ou(A,u,d,a,n),A.mode&1&&Eu(a,x,n),n=A,p=x;var q=n.updateQueue;if(q===null){var H=new Set;H.add(p),n.updateQueue=H}else q.add(p);break e}else{if(!(n&1)){Eu(a,x,n),tl();break e}p=Error(l(426))}}else if(xe&&d.mode&1){var Ne=_u(u);if(Ne!==null){!(Ne.flags&65536)&&(Ne.flags|=256),Ou(Ne,u,d,a,n),pa($t(p,d));break e}}a=p=$t(p,d),Me!==4&&(Me=2),Mr===null?Mr=[a]:Mr.push(a),a=u;do{switch(a.tag){case 3:a.flags|=65536,n&=-n,a.lanes|=n;var v=ku(a,p,n);Qs(a,v);break e;case 1:d=p;var h=a.type,y=a.stateNode;if(!(a.flags&128)&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(et===null||!et.has(y)))){a.flags|=65536,n&=-n,a.lanes|=n;var T=Su(a,d,n);Qs(a,T);break e}}a=a.return}while(a!==null)}rc(t)}catch(B){n=B,Te===t&&t!==null&&(Te=t=t.return);continue}break}while(!0)}function nc(){var e=Bo.current;return Bo.current=Lo,e===null?Lo:e}function tl(){(Me===0||Me===3||Me===2)&&(Me=4),Ae===null||!(vt&268435455)&&!(Wo&268435455)||rt(Ae,Fe)}function Xo(e,n){var t=ne;ne|=2;var r=nc();(Ae!==e||Fe!==n)&&(Ln=null,bt(e,n));do try{Af();break}catch(o){ec(e,o)}while(!0);if(ma(),ne=t,Bo.current=r,Te!==null)throw Error(l(261));return Ae=null,Fe=0,Me}function Af(){for(;Te!==null;)tc(Te)}function If(){for(;Te!==null&&!ld();)tc(Te)}function tc(e){var n=ac(e.alternate,e,ln);e.memoizedProps=e.pendingProps,n===null?rc(e):Te=n,Ga.current=null}function rc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=zf(t,n),t!==null){t.flags&=32767,Te=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,Te=null;return}}else if(t=Nf(t,n,ln),t!==null){Te=t;return}if(n=n.sibling,n!==null){Te=n;return}Te=n=e}while(n!==null);Me===0&&(Me=5)}function xt(e,n,t){var r=ce,o=pn.transition;try{pn.transition=null,ce=1,Lf(e,n,t,r)}finally{pn.transition=o,ce=r}return null}function Lf(e,n,t,r){do Gt();while(nt!==null);if(ne&6)throw Error(l(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var a=t.lanes|t.childLanes;if(vd(e,a),e===Ae&&(Te=Ae=null,Fe=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Go||(Go=!0,lc(eo,function(){return Gt(),null})),a=(t.flags&15990)!==0,t.subtreeFlags&15990||a){a=pn.transition,pn.transition=null;var u=ce;ce=1;var d=ne;ne|=4,Ga.current=null,Rf(e,t),Gu(t,e),rf(ta),lo=!!na,ta=na=null,e.current=t,Mf(t),sd(),ne=d,ce=u,pn.transition=a}else e.current=t;if(Go&&(Go=!1,nt=e,Ko=o),a=e.pendingLanes,a===0&&(et=null),dd(t.stateNode),Ze(e,Pe()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(Vo)throw Vo=!1,e=Ya,Ya=null,e;return Ko&1&&e.tag!==0&&Gt(),a=e.pendingLanes,a&1?e===Xa?jr++:(jr=0,Xa=e):jr=0,Yn(),null}function Gt(){if(nt!==null){var e=Wl(Ko),n=pn.transition,t=ce;try{if(pn.transition=null,ce=16>e?16:e,nt===null)var r=!1;else{if(e=nt,nt=null,Ko=0,ne&6)throw Error(l(331));var o=ne;for(ne|=4,F=e.current;F!==null;){var a=F,u=a.child;if(F.flags&16){var d=a.deletions;if(d!==null){for(var p=0;p<d.length;p++){var x=d[p];for(F=x;F!==null;){var N=F;switch(N.tag){case 0:case 11:case 15:Tr(8,N,a)}var z=N.child;if(z!==null)z.return=N,F=z;else for(;F!==null;){N=F;var O=N.sibling,A=N.return;if(Hu(N),N===x){F=null;break}if(O!==null){O.return=A,F=O;break}F=A}}}var q=a.alternate;if(q!==null){var H=q.child;if(H!==null){q.child=null;do{var Ne=H.sibling;H.sibling=null,H=Ne}while(H!==null)}}F=a}}if(a.subtreeFlags&2064&&u!==null)u.return=a,F=u;else e:for(;F!==null;){if(a=F,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Tr(9,a,a.return)}var v=a.sibling;if(v!==null){v.return=a.return,F=v;break e}F=a.return}}var h=e.current;for(F=h;F!==null;){u=F;var y=u.child;if(u.subtreeFlags&2064&&y!==null)y.return=u,F=y;else e:for(u=h;F!==null;){if(d=F,d.flags&2048)try{switch(d.tag){case 0:case 11:case 15:$o(9,d)}}catch(B){Ce(d,d.return,B)}if(d===u){F=null;break e}var T=d.sibling;if(T!==null){T.return=d.return,F=T;break e}F=d.return}}if(ne=o,Yn(),_n&&typeof _n.onPostCommitFiberRoot=="function")try{_n.onPostCommitFiberRoot(no,e)}catch{}r=!0}return r}finally{ce=t,pn.transition=n}}return!1}function oc(e,n,t){n=$t(t,n),n=ku(e,n,1),e=Jn(e,n,1),n=Ge(),e!==null&&(or(e,1,n),Ze(e,n))}function Ce(e,n,t){if(e.tag===3)oc(e,e,t);else for(;n!==null;){if(n.tag===3){oc(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(et===null||!et.has(r))){e=$t(t,e),e=Su(n,e,1),n=Jn(n,e,1),e=Ge(),n!==null&&(or(n,1,e),Ze(n,e));break}}n=n.return}}function Ff(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Ge(),e.pingedLanes|=e.suspendedLanes&t,Ae===e&&(Fe&t)===t&&(Me===4||Me===3&&(Fe&130023424)===Fe&&500>Pe()-Qa?bt(e,0):Ka|=t),Ze(e,n)}function ic(e,n){n===0&&(e.mode&1?(n=ro,ro<<=1,!(ro&130023424)&&(ro=4194304)):n=1);var t=Ge();e=Dn(e,n),e!==null&&(or(e,n,t),Ze(e,t))}function Uf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),ic(e,t)}function qf(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(l(314))}r!==null&&r.delete(n),ic(e,t)}var ac;ac=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Qe.current)Xe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Xe=!1,Pf(e,n,t);Xe=!!(e.flags&131072)}else Xe=!1,xe&&n.flags&1048576&&Fs(n,Oo,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;qo(e,n),e=n.pendingProps;var o=Dt(n,Ue.current);qt(n,t),o=Oa(null,n,r,e,o,t);var a=Ca();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ye(r)?(a=!0,So(n)):a=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ba(n),o.updater=Fo,n.stateNode=o,o._reactInternals=n,Ma(n,r,e,t),n=Ia(null,n,r,!0,a,t)):(n.tag=0,xe&&a&&ua(n),Ve(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(qo(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=$f(r),e=bn(r,e),o){case 0:n=Aa(null,n,r,e,t);break e;case 1:n=Ru(null,n,r,e,t);break e;case 11:n=Cu(null,n,r,e,t);break e;case 14:n=Pu(null,n,r,bn(r.type,e),t);break e}throw Error(l(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:bn(r,o),Aa(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:bn(r,o),Ru(e,n,r,o,t);case 3:e:{if(Mu(n),e===null)throw Error(l(387));r=n.pendingProps,a=n.memoizedState,o=a.element,Ks(e,n),Ro(n,r,null,t);var u=n.memoizedState;if(r=u.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},n.updateQueue.baseState=a,n.memoizedState=a,n.flags&256){o=$t(Error(l(423)),n),n=ju(e,n,r,t,o);break e}else if(r!==o){o=$t(Error(l(424)),n),n=ju(e,n,r,t,o);break e}else for(an=Gn(n.stateNode.containerInfo.firstChild),on=n,xe=!0,yn=null,t=Vs(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Lt(),r===o){n=In(e,n,t);break e}Ve(e,n,r,t)}n=n.child}return n;case 5:return Xs(n),e===null&&fa(n),r=n.type,o=n.pendingProps,a=e!==null?e.memoizedProps:null,u=o.children,ra(r,o)?u=null:a!==null&&ra(r,a)&&(n.flags|=32),Tu(e,n),Ve(e,n,u,t),n.child;case 6:return e===null&&fa(n),null;case 13:return Du(e,n,t);case 4:return xa(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ft(n,null,r,t):Ve(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:bn(r,o),Cu(e,n,r,o,t);case 7:return Ve(e,n,n.pendingProps,t),n.child;case 8:return Ve(e,n,n.pendingProps.children,t),n.child;case 12:return Ve(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,a=n.memoizedProps,u=o.value,pe(No,r._currentValue),r._currentValue=u,a!==null)if(vn(a.value,u)){if(a.children===o.children&&!Qe.current){n=In(e,n,t);break e}}else for(a=n.child,a!==null&&(a.return=n);a!==null;){var d=a.dependencies;if(d!==null){u=a.child;for(var p=d.firstContext;p!==null;){if(p.context===r){if(a.tag===1){p=An(-1,t&-t),p.tag=2;var x=a.updateQueue;if(x!==null){x=x.shared;var N=x.pending;N===null?p.next=p:(p.next=N.next,N.next=p),x.pending=p}}a.lanes|=t,p=a.alternate,p!==null&&(p.lanes|=t),va(a.return,t,n),d.lanes|=t;break}p=p.next}}else if(a.tag===10)u=a.type===n.type?null:a.child;else if(a.tag===18){if(u=a.return,u===null)throw Error(l(341));u.lanes|=t,d=u.alternate,d!==null&&(d.lanes|=t),va(u,t,n),u=a.sibling}else u=a.child;if(u!==null)u.return=a;else for(u=a;u!==null;){if(u===n){u=null;break}if(a=u.sibling,a!==null){a.return=u.return,u=a;break}u=u.return}a=u}Ve(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,qt(n,t),o=dn(o),r=r(o),n.flags|=1,Ve(e,n,r,t),n.child;case 14:return r=n.type,o=bn(r,n.pendingProps),o=bn(r.type,o),Pu(e,n,r,o,t);case 15:return Nu(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:bn(r,o),qo(e,n),n.tag=1,Ye(r)?(e=!0,So(n)):e=!1,qt(n,t),xu(n,r,o),Ma(n,r,o,t),Ia(null,n,r,!0,e,t);case 19:return Iu(e,n,t);case 22:return zu(e,n,t)}throw Error(l(156,n.tag))};function lc(e,n){return Ul(e,n)}function Hf(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hn(e,n,t,r){return new Hf(e,n,t,r)}function rl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $f(e){if(typeof e=="function")return rl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===se)return 11;if(e===Ke)return 14}return 2}function ot(e,n){var t=e.alternate;return t===null?(t=hn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Jo(e,n,t,r,o,a){var u=2;if(r=e,typeof e=="function")rl(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case ve:return wt(t.children,o,a,n);case ze:u=8,o|=8;break;case Oe:return e=hn(12,t,n,o|2),e.elementType=Oe,e.lanes=a,e;case Se:return e=hn(13,t,n,o),e.elementType=Se,e.lanes=a,e;case Be:return e=hn(19,t,n,o),e.elementType=Be,e.lanes=a,e;case ye:return Zo(t,o,a,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case mn:u=10;break e;case zn:u=9;break e;case se:u=11;break e;case Ke:u=14;break e;case We:u=16,r=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return n=hn(u,t,n,o),n.elementType=e,n.type=r,n.lanes=a,n}function wt(e,n,t,r){return e=hn(7,e,r,n),e.lanes=t,e}function Zo(e,n,t,r){return e=hn(22,e,r,n),e.elementType=ye,e.lanes=t,e.stateNode={isHidden:!1},e}function ol(e,n,t){return e=hn(6,e,null,n),e.lanes=t,e}function il(e,n,t){return n=hn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Bf(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ri(0),this.expirationTimes=Ri(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ri(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function al(e,n,t,r,o,a,u,d,p){return e=new Bf(e,n,t,d,p),n===1?(n=1,a===!0&&(n|=8)):n=0,a=hn(3,null,null,n),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ba(a),e}function Wf(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:he,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function sc(e){if(!e)return Qn;e=e._reactInternals;e:{if(ut(e)!==e||e.tag!==1)throw Error(l(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ye(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(l(171))}if(e.tag===1){var t=e.type;if(Ye(t))return As(e,t,n)}return n}function uc(e,n,t,r,o,a,u,d,p){return e=al(t,r,!0,e,o,a,u,d,p),e.context=sc(null),t=e.current,r=Ge(),o=tt(t),a=An(r,o),a.callback=n??null,Jn(t,a,o),e.current.lanes=o,or(e,o,r),Ze(e,r),e}function ei(e,n,t,r){var o=n.current,a=Ge(),u=tt(o);return t=sc(t),n.context===null?n.context=t:n.pendingContext=t,n=An(a,u),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Jn(o,n,u),e!==null&&(kn(e,o,u,a),To(e,o,u)),u}function ni(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ll(e,n){cc(e,n),(e=e.alternate)&&cc(e,n)}var dc=typeof reportError=="function"?reportError:function(e){console.error(e)};function sl(e){this._internalRoot=e}ti.prototype.render=sl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(l(409));ei(e,n,null,null)},ti.prototype.unmount=sl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;yt(function(){ei(null,e,null,null)}),n[Tn]=null}};function ti(e){this._internalRoot=e}ti.prototype.unstable_scheduleHydration=function(e){if(e){var n=Kl();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Bn.length&&n!==0&&n<Bn[t].priority;t++);Bn.splice(t,0,e),t===0&&Xl(e)}};function ul(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ri(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fc(){}function Vf(e,n,t,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var x=ni(u);a.call(x)}}var u=uc(n,r,e,0,null,!1,!1,"",fc);return e._reactRootContainer=u,e[Tn]=u.current,yr(e.nodeType===8?e.parentNode:e),yt(),u}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var d=r;r=function(){var x=ni(p);d.call(x)}}var p=al(e,0,!1,null,null,!1,!1,"",fc);return e._reactRootContainer=p,e[Tn]=p.current,yr(e.nodeType===8?e.parentNode:e),yt(function(){ei(n,p,t,r)}),p}function oi(e,n,t,r,o){var a=t._reactRootContainer;if(a){var u=a;if(typeof o=="function"){var d=o;o=function(){var p=ni(u);d.call(p)}}ei(n,u,e,o)}else u=Vf(t,n,e,o,r);return ni(u)}Vl=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=rr(n.pendingLanes);t!==0&&(Mi(n,t|1),Ze(n,Pe()),!(ne&6)&&(Vt=Pe()+500,Yn()))}break;case 13:yt(function(){var r=Dn(e,1);if(r!==null){var o=Ge();kn(r,e,1,o)}}),ll(e,1)}},ji=function(e){if(e.tag===13){var n=Dn(e,134217728);if(n!==null){var t=Ge();kn(n,e,134217728,t)}ll(e,134217728)}},Gl=function(e){if(e.tag===13){var n=tt(e),t=Dn(e,n);if(t!==null){var r=Ge();kn(t,e,n,r)}ll(e,n)}},Kl=function(){return ce},Ql=function(e,n){var t=ce;try{return ce=e,n()}finally{ce=t}},Oi=function(e,n,t){switch(n){case"input":if(yi(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=wo(r);if(!o)throw Error(l(90));bl(r),yi(r,o)}}}break;case"textarea":El(e,t);break;case"select":n=t.value,n!=null&&St(e,!!t.multiple,n,!1)}},Ml=el,jl=yt;var Gf={usingClientEntryPoint:!1,Events:[wr,Mt,wo,Tl,Rl,el]},Dr={findFiberByHostInstance:ct,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Kf={bundleType:Dr.bundleType,version:Dr.version,rendererPackageName:Dr.rendererPackageName,rendererConfig:Dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:de.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ll(e),e===null?null:e.stateNode},findFiberByHostInstance:Dr.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ii=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ii.isDisabled&&ii.supportsFiber)try{no=ii.inject(Kf),_n=ii}catch{}}return en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gf,en.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ul(n))throw Error(l(200));return Wf(e,n,null,t)},en.createRoot=function(e,n){if(!ul(e))throw Error(l(299));var t=!1,r="",o=dc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=al(e,1,!1,null,null,t,!1,r,o),e[Tn]=n.current,yr(e.nodeType===8?e.parentNode:e),new sl(n)},en.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=Ll(n),e=e===null?null:e.stateNode,e},en.flushSync=function(e){return yt(e)},en.hydrate=function(e,n,t){if(!ri(n))throw Error(l(200));return oi(null,e,n,!0,t)},en.hydrateRoot=function(e,n,t){if(!ul(e))throw Error(l(405));var r=t!=null&&t.hydratedSources||null,o=!1,a="",u=dc;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),n=uc(n,null,e,1,t??null,o,!1,a,u),e[Tn]=n.current,yr(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new ti(n)},en.render=function(e,n,t){if(!ri(n))throw Error(l(200));return oi(null,e,n,!1,t)},en.unmountComponentAtNode=function(e){if(!ri(e))throw Error(l(40));return e._reactRootContainer?(yt(function(){oi(null,null,e,!1,function(){e._reactRootContainer=null,e[Tn]=null})}),!0):!1},en.unstable_batchedUpdates=el,en.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!ri(t))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return oi(e,n,t,!1,r)},en.version="18.3.1-next-f1338f8080-20240426",en}var xc;function rp(){if(xc)return fl.exports;xc=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(s){console.error(s)}}return i(),fl.exports=tp(),fl.exports}var wc;function op(){if(wc)return ai;wc=1;var i=rp();return ai.createRoot=i.createRoot,ai.hydrateRoot=i.hydrateRoot,ai}var ip=op();function ap({title:i,titleId:s,...l},c){return J.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:c,"aria-labelledby":s},l),i?J.createElement("title",{id:s},i):null,J.createElement("path",{fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",clipRule:"evenodd"}))}const lp=J.forwardRef(ap);function sp({title:i,titleId:s,...l},c){return J.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:c,"aria-labelledby":s},l),i?J.createElement("title",{id:s},i):null,J.createElement("path",{fillRule:"evenodd",d:"M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z",clipRule:"evenodd"}))}const up=J.forwardRef(sp);function cp({title:i,titleId:s,...l},c){return J.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:c,"aria-labelledby":s},l),i?J.createElement("title",{id:s},i):null,J.createElement("path",{fillRule:"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z",clipRule:"evenodd"}))}const dp=J.forwardRef(cp);function fp({title:i,titleId:s,...l},c){return J.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:c,"aria-labelledby":s},l),i?J.createElement("title",{id:s},i):null,J.createElement("path",{fillRule:"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z",clipRule:"evenodd"}))}const pp=J.forwardRef(fp);function hp({title:i,titleId:s,...l},c){return J.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:c,"aria-labelledby":s},l),i?J.createElement("title",{id:s},i):null,J.createElement("path",{fillRule:"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z",clipRule:"evenodd"}))}const Hr=J.forwardRef(hp),mp=i=>{let s;const l=new Set,c=(E,R)=>{const I=typeof E=="function"?E(s):E;if(!Object.is(I,s)){const j=s;s=R??(typeof I!="object"||I===null)?I:Object.assign({},s,I),l.forEach(M=>M(s,j))}},f=()=>s,S={setState:c,getState:f,getInitialState:()=>_,subscribe:E=>(l.add(E),()=>l.delete(E))},_=s=i(c,f,S);return S},gp=i=>mp(i),vp=i=>i;function yp(i,s=vp){const l=ae.useSyncExternalStore(i.subscribe,()=>s(i.getState()),()=>s(i.getInitialState()));return ae.useDebugValue(l),l}const bp=i=>{const s=gp(i),l=c=>yp(s,c);return Object.assign(l,s),l},xp=i=>bp(i),$r=xp(i=>({showFormCard:!1,words:JSON.parse(localStorage.getItem("words"))||[],selectedWord:null,warning:{type:"",boolean:!1},playMemory:!1,showcard:!1,showMoreDetails:"",setShowFormCard:()=>i(s=>({showFormCard:!s.showFormCard})),addClickWord:s=>i(l=>({words:[...l.words,s]})),showDetailCard:(s,l)=>i(()=>({selectedWord:{word:s,translate:l},showcard:!0})),setWarning:(s,l)=>i(()=>({warning:{type:s,boolean:l}})),closeCard:()=>i(()=>({showcard:!1,mounted:!1})),closeMoreDetails:()=>i(()=>({showMoreDetails:""})),deleteWord:()=>i(s=>({words:s.words.filter(c=>c.word!==s.selectedWord.word),showcard:!s.showcard,mounted:!s.mounted})),setShowMoreDetails:()=>i(s=>({showMoreDetails:s.selectedWord.word})),setPlayMemory:()=>i(s=>({playMemory:!s.playMemory}))})),wp=()=>{const[i,s]=J.useState(!1),{words:l,addClickWord:c,setWarning:f,setShowFormCard:m}=$r(),b=S=>{if(S.preventDefault(),S.target.word.value===""||S.target.translate.value===""){s(!0);return}const _=S.target.word.value,E=S.target.translate.value,R={word:_,translate:E};if(l.find(j=>j.word===_)){f("addWrong",!0),m();return}c(R),m(),f("addSuccess",!0),console.log(l)};return k.jsxs(k.Fragment,{children:[k.jsx("div",{className:"h-[100vh] w-[100vw] z-40 fixed top-0 left-0 bg-[rgba(0,0,0,0.7)]"}),k.jsxs("form",{onSubmit:b,className:"flex  fixed top-1/2 z-40 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[400px]  justify-between flex-col gap-5 bg-slate-100 rounded-lg p-5 ",children:[k.jsx("button",{className:"absolute top-2 right-2",onClick:()=>m(),children:k.jsx(Hr,{className:"w-10 h-10 text-red-600 hover:text-red-700"})}),k.jsxs("div",{className:"flex flex-[1] flex-col gap-5 pt-5",children:[i&&k.jsx("p",{className:"text-red-600",children:"Todos los campos son obligatorios"}),k.jsx("label",{className:"text-lg",htmlFor:"word",children:"Palabra"}),k.jsx("input",{className:"rounded-lg p-2 bg-white",type:"text",name:"word",placeholder:"Escribe tu palabra"}),k.jsx("label",{className:"text-lg",htmlFor:"translate",children:"Traduccion"}),k.jsx("input",{className:"rounded-lg p-2 bg-white",type:"text",name:"translate",placeholder:"Escribe la traduccion"})]}),k.jsx("button",{className:"bg-blue-600 hover:bg-blue-700 text-white font-bold p-3 mt-3 rounded-full",type:"submit",children:"Agregar"})]})]})},kp=()=>{const{selectedWord:i,deleteWord:s,setWarning:l,closeCard:c,setShowMoreDetails:f}=$r(),m=()=>{s(),l("delete",!0)};return k.jsxs("div",{className:" flex flex-col justify-between p-4 gap-4 w-full h-full ",children:[k.jsx("button",{className:"absolute top-2 right-2",onClick:c,children:k.jsx(Hr,{className:"w-10 h-10 text-red-600 hover:text-red-700"})}),k.jsxs("div",{className:"flex flex-col justify-center items-center gap-2 flex-1",children:[k.jsx("h1",{className:"text-3xl font-bold text-center text-black ",children:i.word}),k.jsx("p",{className:"text-2xl font-bold text-center text-orange-500",children:i.translate})]}),k.jsxs("div",{className:"flex justify-center items-center w-full gap-2 ",children:[k.jsx("button",{onClick:m,className:"bg-red-500 hover:bg-red-600 p-3 flex justify-center items-center rounded-full",children:k.jsx(pp,{className:"w-6 h-6 text-white"})}),k.jsxs("button",{onClick:()=>f(),className:"bg-blue-600 w-full hover:bg-blue-700 text-white font-bold p-3 rounded-full",children:["Saber más"," "]})]})]})},Sp=()=>{const{words:i,setWarning:s,setPlayMemory:l}=$r(),[c,f]=J.useState(i[Math.floor(Math.random()*i.length)]),[m,b]=J.useState(i),[S,_]=J.useState(!1),E=()=>{const I=m.filter(M=>M.word!==c.word);if(I.length===0){l(),s("successPlay",!0);return}const j=I[Math.floor(Math.random()*I.length)];b(I),f(j),_(!1)},R=()=>{f(m[Math.floor(Math.random()*m.length)]),_(!1)};return k.jsxs(k.Fragment,{children:[k.jsx("div",{className:"h-[100vh] w-[100vw] fixed  z-50 top-0 left-0 bg-[rgba(0,0,0,0.9)]"}),k.jsxs("div",{className:"bg-white fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[40vw] md:h-[50vh] w-[80vw] h-[50vh]  rounded-xl p-5 flex flex-col justify-center",children:[k.jsx("button",{className:"absolute top-2 right-2",onClick:()=>l(),children:k.jsx(Hr,{className:"w-10 h-10 text-red-600 hover:text-red-700"})}),k.jsxs("div",{className:"flex flex-col justify-between p-5 items-center gap-2 flex-1",children:[k.jsx("h1",{className:"text-3xl font-bold text-center mt-5 text-black",children:"Recordar palabras"}),k.jsxs("div",{className:"flex flex-col ",children:[k.jsx("p",{className:"text-5xl font-bold text-center text-blue-950 ",children:c.word}),S&&k.jsx("p",{className:"text-3xl font-bold text-center text-orange-500",children:c.translate})]}),k.jsxs("div",{className:"flex justify-center items-center w-full gap-2",children:[S?k.jsx("button",{onClick:R,className:"bg-blue-600 w-1/2 cursor-pointer hover:bg-blue-700 text-white font-bold p-3 rounded-full text-center",children:"Siguiente"}):k.jsx("button",{onClick:E,className:"bg-blue-600 w-1/2 cursor-pointer hover:bg-blue-700 text-white font-bold p-3 rounded-full text-center",children:"Lo se"}),!S&&k.jsx("buttton",{onClick:()=>_(!0),className:"bg-red-600 w-1/2 cursor-pointer hover:bg-red-700 text-white font-bold p-3 rounded-full text-center",children:"No lo se"})]})]})]})]})},Kt=({children:i})=>k.jsx("div",{className:"fixed z-50 justify-center w-full md:w-1/4 items-center gap-2 flex p-2 bg-slate-200  rounded-lg top-0 left-1/2 -translate-x-1/2",children:i==="No hay palabras guardadas"||i==="La palabra ya existe"||i==="Introduce una palabra valida"?k.jsxs(k.Fragment,{children:[k.jsx(Hr,{className:"w-10 h-10 mr-2 text-red-600 hover:text-red-700"}),k.jsx("p",{className:"text-sm text-center",children:i})]}):k.jsxs(k.Fragment,{children:[k.jsx(lp,{className:"w-10 h-10 mr-2 text-green-600 hover:text-green-700"}),k.jsx("p",{className:"text-sm text-center",children:i})]})});var kc;(function(i){i.STRING="string",i.NUMBER="number",i.INTEGER="integer",i.BOOLEAN="boolean",i.ARRAY="array",i.OBJECT="object"})(kc||(kc={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sc;(function(i){i.LANGUAGE_UNSPECIFIED="language_unspecified",i.PYTHON="python"})(Sc||(Sc={}));var Ec;(function(i){i.OUTCOME_UNSPECIFIED="outcome_unspecified",i.OUTCOME_OK="outcome_ok",i.OUTCOME_FAILED="outcome_failed",i.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(Ec||(Ec={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c=["user","model","function","system"];var Oc;(function(i){i.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",i.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",i.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",i.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",i.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(Oc||(Oc={}));var Cc;(function(i){i.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",i.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",i.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",i.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",i.BLOCK_NONE="BLOCK_NONE"})(Cc||(Cc={}));var Pc;(function(i){i.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",i.NEGLIGIBLE="NEGLIGIBLE",i.LOW="LOW",i.MEDIUM="MEDIUM",i.HIGH="HIGH"})(Pc||(Pc={}));var Nc;(function(i){i.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",i.SAFETY="SAFETY",i.OTHER="OTHER"})(Nc||(Nc={}));var Fr;(function(i){i.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",i.STOP="STOP",i.MAX_TOKENS="MAX_TOKENS",i.SAFETY="SAFETY",i.RECITATION="RECITATION",i.LANGUAGE="LANGUAGE",i.OTHER="OTHER"})(Fr||(Fr={}));var zc;(function(i){i.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",i.RETRIEVAL_QUERY="RETRIEVAL_QUERY",i.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",i.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",i.CLASSIFICATION="CLASSIFICATION",i.CLUSTERING="CLUSTERING"})(zc||(zc={}));var Tc;(function(i){i.MODE_UNSPECIFIED="MODE_UNSPECIFIED",i.AUTO="AUTO",i.ANY="ANY",i.NONE="NONE"})(Tc||(Tc={}));var Rc;(function(i){i.MODE_UNSPECIFIED="MODE_UNSPECIFIED",i.MODE_DYNAMIC="MODE_DYNAMIC"})(Rc||(Rc={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Error{constructor(s){super(`[GoogleGenerativeAI Error]: ${s}`)}}class Qt extends nn{constructor(s,l){super(s),this.response=l}}class Wc extends nn{constructor(s,l,c,f){super(s),this.status=l,this.statusText=c,this.errorDetails=f}}class st extends nn{}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep="https://generativelanguage.googleapis.com",_p="v1beta",Op="0.21.0",Cp="genai-js";var kt;(function(i){i.GENERATE_CONTENT="generateContent",i.STREAM_GENERATE_CONTENT="streamGenerateContent",i.COUNT_TOKENS="countTokens",i.EMBED_CONTENT="embedContent",i.BATCH_EMBED_CONTENTS="batchEmbedContents"})(kt||(kt={}));class Pp{constructor(s,l,c,f,m){this.model=s,this.task=l,this.apiKey=c,this.stream=f,this.requestOptions=m}toString(){var s,l;const c=((s=this.requestOptions)===null||s===void 0?void 0:s.apiVersion)||_p;let m=`${((l=this.requestOptions)===null||l===void 0?void 0:l.baseUrl)||Ep}/${c}/${this.model}:${this.task}`;return this.stream&&(m+="?alt=sse"),m}}function Np(i){const s=[];return i!=null&&i.apiClient&&s.push(i.apiClient),s.push(`${Cp}/${Op}`),s.join(" ")}async function zp(i){var s;const l=new Headers;l.append("Content-Type","application/json"),l.append("x-goog-api-client",Np(i.requestOptions)),l.append("x-goog-api-key",i.apiKey);let c=(s=i.requestOptions)===null||s===void 0?void 0:s.customHeaders;if(c){if(!(c instanceof Headers))try{c=new Headers(c)}catch(f){throw new st(`unable to convert customHeaders value ${JSON.stringify(c)} to Headers: ${f.message}`)}for(const[f,m]of c.entries()){if(f==="x-goog-api-key")throw new st(`Cannot set reserved header name ${f}`);if(f==="x-goog-api-client")throw new st(`Header name ${f} can only be set using the apiClient field`);l.append(f,m)}}return l}async function Tp(i,s,l,c,f,m){const b=new Pp(i,s,l,c,m);return{url:b.toString(),fetchOptions:Object.assign(Object.assign({},Dp(m)),{method:"POST",headers:await zp(b),body:f})}}async function Br(i,s,l,c,f,m={},b=fetch){const{url:S,fetchOptions:_}=await Tp(i,s,l,c,f,m);return Rp(S,_,b)}async function Rp(i,s,l=fetch){let c;try{c=await l(i,s)}catch(f){Mp(f,i)}return c.ok||await jp(c,i),c}function Mp(i,s){let l=i;throw i instanceof Wc||i instanceof st||(l=new nn(`Error fetching from ${s.toString()}: ${i.message}`),l.stack=i.stack),l}async function jp(i,s){let l="",c;try{const f=await i.json();l=f.error.message,f.error.details&&(l+=` ${JSON.stringify(f.error.details)}`,c=f.error.details)}catch{}throw new Wc(`Error fetching from ${s.toString()}: [${i.status} ${i.statusText}] ${l}`,i.status,i.statusText,c)}function Dp(i){const s={};if((i==null?void 0:i.signal)!==void 0||(i==null?void 0:i.timeout)>=0){const l=new AbortController;(i==null?void 0:i.timeout)>=0&&setTimeout(()=>l.abort(),i.timeout),i!=null&&i.signal&&i.signal.addEventListener("abort",()=>{l.abort()}),s.signal=l.signal}return s}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(i){return i.text=()=>{if(i.candidates&&i.candidates.length>0){if(i.candidates.length>1&&console.warn(`This response had ${i.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),hi(i.candidates[0]))throw new Qt(`${lt(i)}`,i);return Ap(i)}else if(i.promptFeedback)throw new Qt(`Text not available. ${lt(i)}`,i);return""},i.functionCall=()=>{if(i.candidates&&i.candidates.length>0){if(i.candidates.length>1&&console.warn(`This response had ${i.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),hi(i.candidates[0]))throw new Qt(`${lt(i)}`,i);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),Mc(i)[0]}else if(i.promptFeedback)throw new Qt(`Function call not available. ${lt(i)}`,i)},i.functionCalls=()=>{if(i.candidates&&i.candidates.length>0){if(i.candidates.length>1&&console.warn(`This response had ${i.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),hi(i.candidates[0]))throw new Qt(`${lt(i)}`,i);return Mc(i)}else if(i.promptFeedback)throw new Qt(`Function call not available. ${lt(i)}`,i)},i}function Ap(i){var s,l,c,f;const m=[];if(!((l=(s=i.candidates)===null||s===void 0?void 0:s[0].content)===null||l===void 0)&&l.parts)for(const b of(f=(c=i.candidates)===null||c===void 0?void 0:c[0].content)===null||f===void 0?void 0:f.parts)b.text&&m.push(b.text),b.executableCode&&m.push("\n```"+b.executableCode.language+`
`+b.executableCode.code+"\n```\n"),b.codeExecutionResult&&m.push("\n```\n"+b.codeExecutionResult.output+"\n```\n");return m.length>0?m.join(""):""}function Mc(i){var s,l,c,f;const m=[];if(!((l=(s=i.candidates)===null||s===void 0?void 0:s[0].content)===null||l===void 0)&&l.parts)for(const b of(f=(c=i.candidates)===null||c===void 0?void 0:c[0].content)===null||f===void 0?void 0:f.parts)b.functionCall&&m.push(b.functionCall);if(m.length>0)return m}const Ip=[Fr.RECITATION,Fr.SAFETY,Fr.LANGUAGE];function hi(i){return!!i.finishReason&&Ip.includes(i.finishReason)}function lt(i){var s,l,c;let f="";if((!i.candidates||i.candidates.length===0)&&i.promptFeedback)f+="Response was blocked",!((s=i.promptFeedback)===null||s===void 0)&&s.blockReason&&(f+=` due to ${i.promptFeedback.blockReason}`),!((l=i.promptFeedback)===null||l===void 0)&&l.blockReasonMessage&&(f+=`: ${i.promptFeedback.blockReasonMessage}`);else if(!((c=i.candidates)===null||c===void 0)&&c[0]){const m=i.candidates[0];hi(m)&&(f+=`Candidate was blocked due to ${m.finishReason}`,m.finishMessage&&(f+=`: ${m.finishMessage}`))}return f}function Ur(i){return this instanceof Ur?(this.v=i,this):new Ur(i)}function Lp(i,s,l){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var c=l.apply(i,s||[]),f,m=[];return f={},b("next"),b("throw"),b("return"),f[Symbol.asyncIterator]=function(){return this},f;function b(j){c[j]&&(f[j]=function(M){return new Promise(function(C,w){m.push([j,M,C,w])>1||S(j,M)})})}function S(j,M){try{_(c[j](M))}catch(C){I(m[0][3],C)}}function _(j){j.value instanceof Ur?Promise.resolve(j.value.v).then(E,R):I(m[0][2],j)}function E(j){S("next",j)}function R(j){S("throw",j)}function I(j,M){j(M),m.shift(),m.length&&S(m[0][0],m[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function Fp(i){const s=i.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),l=Hp(s),[c,f]=l.tee();return{stream:qp(c),response:Up(f)}}async function Up(i){const s=[],l=i.getReader();for(;;){const{done:c,value:f}=await l.read();if(c)return yl($p(s));s.push(f)}}function qp(i){return Lp(this,arguments,function*(){const l=i.getReader();for(;;){const{value:c,done:f}=yield Ur(l.read());if(f)break;yield yield Ur(yl(c))}})}function Hp(i){const s=i.getReader();return new ReadableStream({start(c){let f="";return m();function m(){return s.read().then(({value:b,done:S})=>{if(S){if(f.trim()){c.error(new nn("Failed to parse stream"));return}c.close();return}f+=b;let _=f.match(jc),E;for(;_;){try{E=JSON.parse(_[1])}catch{c.error(new nn(`Error parsing JSON response: "${_[1]}"`));return}c.enqueue(E),f=f.substring(_[0].length),_=f.match(jc)}return m()})}}})}function $p(i){const s=i[i.length-1],l={promptFeedback:s==null?void 0:s.promptFeedback};for(const c of i){if(c.candidates)for(const f of c.candidates){const m=f.index;if(l.candidates||(l.candidates=[]),l.candidates[m]||(l.candidates[m]={index:f.index}),l.candidates[m].citationMetadata=f.citationMetadata,l.candidates[m].groundingMetadata=f.groundingMetadata,l.candidates[m].finishReason=f.finishReason,l.candidates[m].finishMessage=f.finishMessage,l.candidates[m].safetyRatings=f.safetyRatings,f.content&&f.content.parts){l.candidates[m].content||(l.candidates[m].content={role:f.content.role||"user",parts:[]});const b={};for(const S of f.content.parts)S.text&&(b.text=S.text),S.functionCall&&(b.functionCall=S.functionCall),S.executableCode&&(b.executableCode=S.executableCode),S.codeExecutionResult&&(b.codeExecutionResult=S.codeExecutionResult),Object.keys(b).length===0&&(b.text=""),l.candidates[m].content.parts.push(b)}}c.usageMetadata&&(l.usageMetadata=c.usageMetadata)}return l}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vc(i,s,l,c){const f=await Br(s,kt.STREAM_GENERATE_CONTENT,i,!0,JSON.stringify(l),c);return Fp(f)}async function Gc(i,s,l,c){const m=await(await Br(s,kt.GENERATE_CONTENT,i,!1,JSON.stringify(l),c)).json();return{response:yl(m)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(i){if(i!=null){if(typeof i=="string")return{role:"system",parts:[{text:i}]};if(i.text)return{role:"system",parts:[i]};if(i.parts)return i.role?i:{role:"system",parts:i.parts}}}function qr(i){let s=[];if(typeof i=="string")s=[{text:i}];else for(const l of i)typeof l=="string"?s.push({text:l}):s.push(l);return Bp(s)}function Bp(i){const s={role:"user",parts:[]},l={role:"function",parts:[]};let c=!1,f=!1;for(const m of i)"functionResponse"in m?(l.parts.push(m),f=!0):(s.parts.push(m),c=!0);if(c&&f)throw new nn("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!c&&!f)throw new nn("No content is provided for sending chat message.");return c?s:l}function Wp(i,s){var l;let c={model:s==null?void 0:s.model,generationConfig:s==null?void 0:s.generationConfig,safetySettings:s==null?void 0:s.safetySettings,tools:s==null?void 0:s.tools,toolConfig:s==null?void 0:s.toolConfig,systemInstruction:s==null?void 0:s.systemInstruction,cachedContent:(l=s==null?void 0:s.cachedContent)===null||l===void 0?void 0:l.name,contents:[]};const f=i.generateContentRequest!=null;if(i.contents){if(f)throw new st("CountTokensRequest must have one of contents or generateContentRequest, not both.");c.contents=i.contents}else if(f)c=Object.assign(Object.assign({},c),i.generateContentRequest);else{const m=qr(i);c.contents=[m]}return{generateContentRequest:c}}function Dc(i){let s;return i.contents?s=i:s={contents:[qr(i)]},i.systemInstruction&&(s.systemInstruction=Kc(i.systemInstruction)),s}function Vp(i){return typeof i=="string"||Array.isArray(i)?{content:qr(i)}:i}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],Gp={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function Kp(i){let s=!1;for(const l of i){const{role:c,parts:f}=l;if(!s&&c!=="user")throw new nn(`First content should be with role 'user', got ${c}`);if(!_c.includes(c))throw new nn(`Each item should include role field. Got ${c} but valid roles are: ${JSON.stringify(_c)}`);if(!Array.isArray(f))throw new nn("Content should have 'parts' property with an array of Parts");if(f.length===0)throw new nn("Each Content should have at least one part");const m={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const S of f)for(const _ of Ac)_ in S&&(m[_]+=1);const b=Gp[c];for(const S of Ac)if(!b.includes(S)&&m[S]>0)throw new nn(`Content with role '${c}' can't contain '${S}' part`);s=!0}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="SILENT_ERROR";class Qp{constructor(s,l,c,f={}){this.model=l,this.params=c,this._requestOptions=f,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=s,c!=null&&c.history&&(Kp(c.history),this._history=c.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(s,l={}){var c,f,m,b,S,_;await this._sendPromise;const E=qr(s),R={safetySettings:(c=this.params)===null||c===void 0?void 0:c.safetySettings,generationConfig:(f=this.params)===null||f===void 0?void 0:f.generationConfig,tools:(m=this.params)===null||m===void 0?void 0:m.tools,toolConfig:(b=this.params)===null||b===void 0?void 0:b.toolConfig,systemInstruction:(S=this.params)===null||S===void 0?void 0:S.systemInstruction,cachedContent:(_=this.params)===null||_===void 0?void 0:_.cachedContent,contents:[...this._history,E]},I=Object.assign(Object.assign({},this._requestOptions),l);let j;return this._sendPromise=this._sendPromise.then(()=>Gc(this._apiKey,this.model,R,I)).then(M=>{var C;if(M.response.candidates&&M.response.candidates.length>0){this._history.push(E);const w=Object.assign({parts:[],role:"model"},(C=M.response.candidates)===null||C===void 0?void 0:C[0].content);this._history.push(w)}else{const w=lt(M.response);w&&console.warn(`sendMessage() was unsuccessful. ${w}. Inspect response object for details.`)}j=M}),await this._sendPromise,j}async sendMessageStream(s,l={}){var c,f,m,b,S,_;await this._sendPromise;const E=qr(s),R={safetySettings:(c=this.params)===null||c===void 0?void 0:c.safetySettings,generationConfig:(f=this.params)===null||f===void 0?void 0:f.generationConfig,tools:(m=this.params)===null||m===void 0?void 0:m.tools,toolConfig:(b=this.params)===null||b===void 0?void 0:b.toolConfig,systemInstruction:(S=this.params)===null||S===void 0?void 0:S.systemInstruction,cachedContent:(_=this.params)===null||_===void 0?void 0:_.cachedContent,contents:[...this._history,E]},I=Object.assign(Object.assign({},this._requestOptions),l),j=Vc(this._apiKey,this.model,R,I);return this._sendPromise=this._sendPromise.then(()=>j).catch(M=>{throw new Error(Ic)}).then(M=>M.response).then(M=>{if(M.candidates&&M.candidates.length>0){this._history.push(E);const C=Object.assign({},M.candidates[0].content);C.role||(C.role="model"),this._history.push(C)}else{const C=lt(M);C&&console.warn(`sendMessageStream() was unsuccessful. ${C}. Inspect response object for details.`)}}).catch(M=>{M.message!==Ic&&console.error(M)}),j}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yp(i,s,l,c){return(await Br(s,kt.COUNT_TOKENS,i,!1,JSON.stringify(l),c)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xp(i,s,l,c){return(await Br(s,kt.EMBED_CONTENT,i,!1,JSON.stringify(l),c)).json()}async function Jp(i,s,l,c){const f=l.requests.map(b=>Object.assign(Object.assign({},b),{model:s}));return(await Br(s,kt.BATCH_EMBED_CONTENTS,i,!1,JSON.stringify({requests:f}),c)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(s,l,c={}){this.apiKey=s,this._requestOptions=c,l.model.includes("/")?this.model=l.model:this.model=`models/${l.model}`,this.generationConfig=l.generationConfig||{},this.safetySettings=l.safetySettings||[],this.tools=l.tools,this.toolConfig=l.toolConfig,this.systemInstruction=Kc(l.systemInstruction),this.cachedContent=l.cachedContent}async generateContent(s,l={}){var c;const f=Dc(s),m=Object.assign(Object.assign({},this._requestOptions),l);return Gc(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(c=this.cachedContent)===null||c===void 0?void 0:c.name},f),m)}async generateContentStream(s,l={}){var c;const f=Dc(s),m=Object.assign(Object.assign({},this._requestOptions),l);return Vc(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(c=this.cachedContent)===null||c===void 0?void 0:c.name},f),m)}startChat(s){var l;return new Qp(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(l=this.cachedContent)===null||l===void 0?void 0:l.name},s),this._requestOptions)}async countTokens(s,l={}){const c=Wp(s,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),f=Object.assign(Object.assign({},this._requestOptions),l);return Yp(this.apiKey,this.model,c,f)}async embedContent(s,l={}){const c=Vp(s),f=Object.assign(Object.assign({},this._requestOptions),l);return Xp(this.apiKey,this.model,c,f)}async batchEmbedContents(s,l={}){const c=Object.assign(Object.assign({},this._requestOptions),l);return Jp(this.apiKey,this.model,s,c)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(s){this.apiKey=s}getGenerativeModel(s,l){if(!s.model)throw new nn("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new Lc(this.apiKey,s,l)}getGenerativeModelFromCachedContent(s,l,c){if(!s.name)throw new st("Cached content must contain a `name` field.");if(!s.model)throw new st("Cached content must contain a `model` field.");const f=["model","systemInstruction"];for(const b of f)if(l!=null&&l[b]&&s[b]&&(l==null?void 0:l[b])!==s[b]){if(b==="model"){const S=l.model.startsWith("models/")?l.model.replace("models/",""):l.model,_=s.model.startsWith("models/")?s.model.replace("models/",""):s.model;if(S===_)continue}throw new st(`Different value for "${b}" specified in modelParams (${l[b]}) and cachedContent (${s[b]})`)}const m=Object.assign(Object.assign({},l),{model:s.model,tools:s.tools,toolConfig:s.toolConfig,systemInstruction:s.systemInstruction,cachedContent:s});return new Lc(this.apiKey,m,c)}}const eh="AIzaSyC7LNMgLOyFJv8otHR0BjY9Sz8PcMyoNhg";async function Qc(i){const l=new Zp(eh).getGenerativeModel({model:"gemini-1.5-flash"}),c=`
Devuelve información sobre la palabra "${i}" en formato JSON estructurado. 
Si la palabra esta en español, traducela a inglés.
Solo incluye lo siguiente:
{
    "word": "string (la palabra en inglés)",
    "translate": "string (traduce la palabra en español)",
    "examples": [
        {
            "sentence": "string (una oración de ejemplo en inglés)",
            "translation": "string (la traducción al español de la oración)"
        },
        ...
    ],
    "usage": "string (cómo se utiliza la palabra en un contexto general)"
}
No incluyas ninguna explicación adicional, solo devuelve el JSON.
`;return(await l.generateContent(c)).response.text()}function je(i,s){s===void 0&&(s={});var l=s.insertAt;if(i&&typeof document<"u"){var c=document.head||document.getElementsByTagName("head")[0],f=document.createElement("style");f.type="text/css",l==="top"&&c.firstChild?c.insertBefore(f,c.firstChild):c.appendChild(f),f.styleSheet?f.styleSheet.cssText=i:f.appendChild(document.createTextNode(i))}}je(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var ee=function(){return ee=Object.assign||function(i){for(var s,l=1,c=arguments.length;l<c;l++)for(var f in s=arguments[l])Object.prototype.hasOwnProperty.call(s,f)&&(i[f]=s[f]);return i},ee.apply(this,arguments)};function mi(i){return mi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},mi(i)}var nh=/^\s+/,th=/\s+$/;function $(i,s){if(s=s||{},(i=i||"")instanceof $)return i;if(!(this instanceof $))return new $(i,s);var l=function(c){var f={r:0,g:0,b:0},m=1,b=null,S=null,_=null,E=!1,R=!1;typeof c=="string"&&(c=function(C){C=C.replace(nh,"").replace(th,"").toLowerCase();var w,L=!1;if(gl[C])C=gl[C],L=!0;else if(C=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(w=Sn.rgb.exec(C))?{r:w[1],g:w[2],b:w[3]}:(w=Sn.rgba.exec(C))?{r:w[1],g:w[2],b:w[3],a:w[4]}:(w=Sn.hsl.exec(C))?{h:w[1],s:w[2],l:w[3]}:(w=Sn.hsla.exec(C))?{h:w[1],s:w[2],l:w[3],a:w[4]}:(w=Sn.hsv.exec(C))?{h:w[1],s:w[2],v:w[3]}:(w=Sn.hsva.exec(C))?{h:w[1],s:w[2],v:w[3],a:w[4]}:(w=Sn.hex8.exec(C))?{r:sn(w[1]),g:sn(w[2]),b:sn(w[3]),a:Bc(w[4]),format:L?"name":"hex8"}:(w=Sn.hex6.exec(C))?{r:sn(w[1]),g:sn(w[2]),b:sn(w[3]),format:L?"name":"hex"}:(w=Sn.hex4.exec(C))?{r:sn(w[1]+""+w[1]),g:sn(w[2]+""+w[2]),b:sn(w[3]+""+w[3]),a:Bc(w[4]+""+w[4]),format:L?"name":"hex8"}:(w=Sn.hex3.exec(C))?{r:sn(w[1]+""+w[1]),g:sn(w[2]+""+w[2]),b:sn(w[3]+""+w[3]),format:L?"name":"hex"}:!1}(c)),mi(c)=="object"&&(Fn(c.r)&&Fn(c.g)&&Fn(c.b)?(I=c.r,j=c.g,M=c.b,f={r:255*we(I,255),g:255*we(j,255),b:255*we(M,255)},E=!0,R=String(c.r).substr(-1)==="%"?"prgb":"rgb"):Fn(c.h)&&Fn(c.s)&&Fn(c.v)?(b=Lr(c.s),S=Lr(c.v),f=function(C,w,L){C=6*we(C,360),w=we(w,100),L=we(L,100);var Q=Math.floor(C),le=C-Q,ie=L*(1-w),de=L*(1-le*w),ke=L*(1-(1-le)*w),he=Q%6,ve=[L,de,ie,ie,ke,L][he],ze=[ke,L,L,de,ie,ie][he],Oe=[ie,ie,ke,L,L,de][he];return{r:255*ve,g:255*ze,b:255*Oe}}(c.h,b,S),E=!0,R="hsv"):Fn(c.h)&&Fn(c.s)&&Fn(c.l)&&(b=Lr(c.s),_=Lr(c.l),f=function(C,w,L){var Q,le,ie;function de(ve,ze,Oe){return Oe<0&&(Oe+=1),Oe>1&&(Oe-=1),Oe<1/6?ve+6*(ze-ve)*Oe:Oe<.5?ze:Oe<2/3?ve+(ze-ve)*(2/3-Oe)*6:ve}if(C=we(C,360),w=we(w,100),L=we(L,100),w===0)Q=le=ie=L;else{var ke=L<.5?L*(1+w):L+w-L*w,he=2*L-ke;Q=de(he,ke,C+1/3),le=de(he,ke,C),ie=de(he,ke,C-1/3)}return{r:255*Q,g:255*le,b:255*ie}}(c.h,b,_),E=!0,R="hsl"),c.hasOwnProperty("a")&&(m=c.a));var I,j,M;return m=Yc(m),{ok:E,format:c.format||R,r:Math.min(255,Math.max(f.r,0)),g:Math.min(255,Math.max(f.g,0)),b:Math.min(255,Math.max(f.b,0)),a:m}}(i);this._originalInput=i,this._r=l.r,this._g=l.g,this._b=l.b,this._a=l.a,this._roundA=Math.round(100*this._a)/100,this._format=s.format||l.format,this._gradientType=s.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=l.ok}function Fc(i,s,l){i=we(i,255),s=we(s,255),l=we(l,255);var c,f,m=Math.max(i,s,l),b=Math.min(i,s,l),S=(m+b)/2;if(m==b)c=f=0;else{var _=m-b;switch(f=S>.5?_/(2-m-b):_/(m+b),m){case i:c=(s-l)/_+(s<l?6:0);break;case s:c=(l-i)/_+2;break;case l:c=(i-s)/_+4}c/=6}return{h:c,s:f,l:S}}function Uc(i,s,l){i=we(i,255),s=we(s,255),l=we(l,255);var c,f,m=Math.max(i,s,l),b=Math.min(i,s,l),S=m,_=m-b;if(f=m===0?0:_/m,m==b)c=0;else{switch(m){case i:c=(s-l)/_+(s<l?6:0);break;case s:c=(l-i)/_+2;break;case l:c=(i-s)/_+4}c/=6}return{h:c,s:f,v:S}}function qc(i,s,l,c){var f=[En(Math.round(i).toString(16)),En(Math.round(s).toString(16)),En(Math.round(l).toString(16))];return c&&f[0].charAt(0)==f[0].charAt(1)&&f[1].charAt(0)==f[1].charAt(1)&&f[2].charAt(0)==f[2].charAt(1)?f[0].charAt(0)+f[1].charAt(0)+f[2].charAt(0):f.join("")}function Hc(i,s,l,c){return[En(Xc(c)),En(Math.round(i).toString(16)),En(Math.round(s).toString(16)),En(Math.round(l).toString(16))].join("")}function rh(i,s){s=s===0?0:s||10;var l=$(i).toHsl();return l.s-=s/100,l.s=gi(l.s),$(l)}function oh(i,s){s=s===0?0:s||10;var l=$(i).toHsl();return l.s+=s/100,l.s=gi(l.s),$(l)}function ih(i){return $(i).desaturate(100)}function ah(i,s){s=s===0?0:s||10;var l=$(i).toHsl();return l.l+=s/100,l.l=gi(l.l),$(l)}function lh(i,s){s=s===0?0:s||10;var l=$(i).toRgb();return l.r=Math.max(0,Math.min(255,l.r-Math.round(-s/100*255))),l.g=Math.max(0,Math.min(255,l.g-Math.round(-s/100*255))),l.b=Math.max(0,Math.min(255,l.b-Math.round(-s/100*255))),$(l)}function sh(i,s){s=s===0?0:s||10;var l=$(i).toHsl();return l.l-=s/100,l.l=gi(l.l),$(l)}function uh(i,s){var l=$(i).toHsl(),c=(l.h+s)%360;return l.h=c<0?360+c:c,$(l)}function ch(i){var s=$(i).toHsl();return s.h=(s.h+180)%360,$(s)}function $c(i,s){if(isNaN(s)||s<=0)throw new Error("Argument to polyad must be a positive number");for(var l=$(i).toHsl(),c=[$(i)],f=360/s,m=1;m<s;m++)c.push($({h:(l.h+m*f)%360,s:l.s,l:l.l}));return c}function dh(i){var s=$(i).toHsl(),l=s.h;return[$(i),$({h:(l+72)%360,s:s.s,l:s.l}),$({h:(l+216)%360,s:s.s,l:s.l})]}function fh(i,s,l){s=s||6,l=l||30;var c=$(i).toHsl(),f=360/l,m=[$(i)];for(c.h=(c.h-(f*s>>1)+720)%360;--s;)c.h=(c.h+f)%360,m.push($(c));return m}function ph(i,s){s=s||6;for(var l=$(i).toHsv(),c=l.h,f=l.s,m=l.v,b=[],S=1/s;s--;)b.push($({h:c,s:f,v:m})),m=(m+S)%1;return b}$.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var i=this.toRgb();return(299*i.r+587*i.g+114*i.b)/1e3},getLuminance:function(){var i,s,l,c=this.toRgb();return i=c.r/255,s=c.g/255,l=c.b/255,.2126*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))+.7152*(s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4))+.0722*(l<=.03928?l/12.92:Math.pow((l+.055)/1.055,2.4))},setAlpha:function(i){return this._a=Yc(i),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var i=Uc(this._r,this._g,this._b);return{h:360*i.h,s:i.s,v:i.v,a:this._a}},toHsvString:function(){var i=Uc(this._r,this._g,this._b),s=Math.round(360*i.h),l=Math.round(100*i.s),c=Math.round(100*i.v);return this._a==1?"hsv("+s+", "+l+"%, "+c+"%)":"hsva("+s+", "+l+"%, "+c+"%, "+this._roundA+")"},toHsl:function(){var i=Fc(this._r,this._g,this._b);return{h:360*i.h,s:i.s,l:i.l,a:this._a}},toHslString:function(){var i=Fc(this._r,this._g,this._b),s=Math.round(360*i.h),l=Math.round(100*i.s),c=Math.round(100*i.l);return this._a==1?"hsl("+s+", "+l+"%, "+c+"%)":"hsla("+s+", "+l+"%, "+c+"%, "+this._roundA+")"},toHex:function(i){return qc(this._r,this._g,this._b,i)},toHexString:function(i){return"#"+this.toHex(i)},toHex8:function(i){return function(s,l,c,f,m){var b=[En(Math.round(s).toString(16)),En(Math.round(l).toString(16)),En(Math.round(c).toString(16)),En(Xc(f))];return m&&b[0].charAt(0)==b[0].charAt(1)&&b[1].charAt(0)==b[1].charAt(1)&&b[2].charAt(0)==b[2].charAt(1)&&b[3].charAt(0)==b[3].charAt(1)?b[0].charAt(0)+b[1].charAt(0)+b[2].charAt(0)+b[3].charAt(0):b.join("")}(this._r,this._g,this._b,this._a,i)},toHex8String:function(i){return"#"+this.toHex8(i)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*we(this._r,255))+"%",g:Math.round(100*we(this._g,255))+"%",b:Math.round(100*we(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*we(this._r,255))+"%, "+Math.round(100*we(this._g,255))+"%, "+Math.round(100*we(this._b,255))+"%)":"rgba("+Math.round(100*we(this._r,255))+"%, "+Math.round(100*we(this._g,255))+"%, "+Math.round(100*we(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(hh[qc(this._r,this._g,this._b,!0)]||!1)},toFilter:function(i){var s="#"+Hc(this._r,this._g,this._b,this._a),l=s,c=this._gradientType?"GradientType = 1, ":"";if(i){var f=$(i);l="#"+Hc(f._r,f._g,f._b,f._a)}return"progid:DXImageTransform.Microsoft.gradient("+c+"startColorstr="+s+",endColorstr="+l+")"},toString:function(i){var s=!!i;i=i||this._format;var l=!1,c=this._a<1&&this._a>=0;return s||!c||i!=="hex"&&i!=="hex6"&&i!=="hex3"&&i!=="hex4"&&i!=="hex8"&&i!=="name"?(i==="rgb"&&(l=this.toRgbString()),i==="prgb"&&(l=this.toPercentageRgbString()),i!=="hex"&&i!=="hex6"||(l=this.toHexString()),i==="hex3"&&(l=this.toHexString(!0)),i==="hex4"&&(l=this.toHex8String(!0)),i==="hex8"&&(l=this.toHex8String()),i==="name"&&(l=this.toName()),i==="hsl"&&(l=this.toHslString()),i==="hsv"&&(l=this.toHsvString()),l||this.toHexString()):i==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return $(this.toString())},_applyModification:function(i,s){var l=i.apply(null,[this].concat([].slice.call(s)));return this._r=l._r,this._g=l._g,this._b=l._b,this.setAlpha(l._a),this},lighten:function(){return this._applyModification(ah,arguments)},brighten:function(){return this._applyModification(lh,arguments)},darken:function(){return this._applyModification(sh,arguments)},desaturate:function(){return this._applyModification(rh,arguments)},saturate:function(){return this._applyModification(oh,arguments)},greyscale:function(){return this._applyModification(ih,arguments)},spin:function(){return this._applyModification(uh,arguments)},_applyCombination:function(i,s){return i.apply(null,[this].concat([].slice.call(s)))},analogous:function(){return this._applyCombination(fh,arguments)},complement:function(){return this._applyCombination(ch,arguments)},monochromatic:function(){return this._applyCombination(ph,arguments)},splitcomplement:function(){return this._applyCombination(dh,arguments)},triad:function(){return this._applyCombination($c,[3])},tetrad:function(){return this._applyCombination($c,[4])}},$.fromRatio=function(i,s){if(mi(i)=="object"){var l={};for(var c in i)i.hasOwnProperty(c)&&(l[c]=c==="a"?i[c]:Lr(i[c]));i=l}return $(i,s)},$.equals=function(i,s){return!(!i||!s)&&$(i).toRgbString()==$(s).toRgbString()},$.random=function(){return $.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},$.mix=function(i,s,l){l=l===0?0:l||50;var c=$(i).toRgb(),f=$(s).toRgb(),m=l/100;return $({r:(f.r-c.r)*m+c.r,g:(f.g-c.g)*m+c.g,b:(f.b-c.b)*m+c.b,a:(f.a-c.a)*m+c.a})},$.readability=function(i,s){var l=$(i),c=$(s);return(Math.max(l.getLuminance(),c.getLuminance())+.05)/(Math.min(l.getLuminance(),c.getLuminance())+.05)},$.isReadable=function(i,s,l){var c,f,m=$.readability(i,s);switch(f=!1,(c=function(b){var S,_;return S=((b=b||{level:"AA",size:"small"}).level||"AA").toUpperCase(),_=(b.size||"small").toLowerCase(),S!=="AA"&&S!=="AAA"&&(S="AA"),_!=="small"&&_!=="large"&&(_="small"),{level:S,size:_}}(l)).level+c.size){case"AAsmall":case"AAAlarge":f=m>=4.5;break;case"AAlarge":f=m>=3;break;case"AAAsmall":f=m>=7}return f},$.mostReadable=function(i,s,l){var c,f,m,b,S=null,_=0;f=(l=l||{}).includeFallbackColors,m=l.level,b=l.size;for(var E=0;E<s.length;E++)(c=$.readability(i,s[E]))>_&&(_=c,S=$(s[E]));return $.isReadable(i,S,{level:m,size:b})||!f?S:(l.includeFallbackColors=!1,$.mostReadable(i,["#fff","#000"],l))};var gl=$.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},hh=$.hexNames=function(i){var s={};for(var l in i)i.hasOwnProperty(l)&&(s[i[l]]=l);return s}(gl);function Yc(i){return i=parseFloat(i),(isNaN(i)||i<0||i>1)&&(i=1),i}function we(i,s){(function(c){return typeof c=="string"&&c.indexOf(".")!=-1&&parseFloat(c)===1})(i)&&(i="100%");var l=function(c){return typeof c=="string"&&c.indexOf("%")!=-1}(i);return i=Math.min(s,Math.max(0,parseFloat(i))),l&&(i=parseInt(i*s,10)/100),Math.abs(i-s)<1e-6?1:i%s/parseFloat(s)}function gi(i){return Math.min(1,Math.max(0,i))}function sn(i){return parseInt(i,16)}function En(i){return i.length==1?"0"+i:""+i}function Lr(i){return i<=1&&(i=100*i+"%"),i}function Xc(i){return Math.round(255*parseFloat(i)).toString(16)}function Bc(i){return sn(i)/255}var at,li,si,Sn=(li="[\\s|\\(]+("+(at="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+at+")[,|\\s]+("+at+")\\s*\\)?",si="[\\s|\\(]+("+at+")[,|\\s]+("+at+")[,|\\s]+("+at+")[,|\\s]+("+at+")\\s*\\)?",{CSS_UNIT:new RegExp(at),rgb:new RegExp("rgb"+li),rgba:new RegExp("rgba"+si),hsl:new RegExp("hsl"+li),hsla:new RegExp("hsla"+si),hsv:new RegExp("hsv"+li),hsva:new RegExp("hsva"+si),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function Fn(i){return!!Sn.CSS_UNIT.exec(i)}var Wr=function(i,s){var l=(typeof i=="string"?parseInt(i):i)||0;if(l>=-5&&l<=5){var c=l,f=parseFloat(s),m=f+c*(f/5)*-1;return(m==0||m<=Number.EPSILON)&&(m=.1),{animationPeriod:m+"s"}}return{animationPeriod:s}},Vr=function(i,s){var l=i||{},c="";switch(s){case"small":c="12px";break;case"medium":c="16px";break;case"large":c="20px";break;default:c=void 0}var f={};if(l.fontSize){var m=l.fontSize;f=function(b,S){var _={};for(var E in b)Object.prototype.hasOwnProperty.call(b,E)&&S.indexOf(E)<0&&(_[E]=b[E]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function"){var R=0;for(E=Object.getOwnPropertySymbols(b);R<E.length;R++)S.indexOf(E[R])<0&&Object.prototype.propertyIsEnumerable.call(b,E[R])&&(_[E[R]]=b[E[R]])}return _}(l,["fontSize"]),c=m}return{fontSize:c,styles:f}},mh={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Gr=function(i){var s=i.className,l=i.text,c=i.textColor,f=i.staticText,m=i.style;return l?ae.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(s||"").trim(),style:ee(ee(ee({},f&&mh),c&&{color:c,mixBlendMode:"unset"}),m&&m)},typeof l=="string"&&l.length?l:"loading"):null},Un="rgb(50, 205, 50)";function Kr(i,s){s===void 0&&(s=0);var l=[];return function c(f,m){return m===void 0&&(m=0),l.push.apply(l,f),l.length<m&&c(l,m),l.slice(0,m)}(i,s)}je(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6de;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6ex, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6g6;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6h4;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6e7, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6ex {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes u1qz6e7 {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes u1qz6de {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes u1qz6fj {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes u1qz6g6 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes u1qz6h4 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);$(Un).toRgb();Array.from({length:4},function(i,s){return"--atom-phase".concat(s+1,"-rgb")});je(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite u1qz6k3;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: u1qz6j2 var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6j2 {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6k3 {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(i,s){return"--commet-phase".concat(s+1,"-color")});je(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: u1qz6pz calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite u1qz6r6, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6sy;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6pz {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6r6 {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes u1qz6sy {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);var ui=Array.from({length:4},function(i,s){return"--OP-annulus-phase".concat(s+1,"-color")}),gh=function(i){var s,l=Vr(i==null?void 0:i.style,i==null?void 0:i.size),c=l.styles,f=l.fontSize,m=i==null?void 0:i.easing,b=Wr(i==null?void 0:i.speedPlus,"1.5s").animationPeriod,S=function(E){var R={},I=ui.length;if(E instanceof Array){for(var j=Kr(E,I),M=0;M<j.length&&!(M>=4);M++)R[ui[M]]=j[M];return R}try{if(typeof E!="string")throw new Error("Color String expected");for(var C=0;C<I;C++)R[ui[C]]=E}catch(w){for(w instanceof Error?console.warn("[".concat(w.message,']: Received "').concat(typeof E,'" instead with value, ').concat(JSON.stringify(E))):console.warn("".concat(JSON.stringify(E),' received in <OrbitProgress variant="disc" /> indicator cannot be processed. Using default instead!')),C=0;C<I;C++)R[ui[C]]=Un}return R}((s=i==null?void 0:i.color)!==null&&s!==void 0?s:""),_=i!=null&&i.dense?4.3:2.9;return ae.createElement("span",{className:"rli-d-i-b OP-annulus-rli-bounding-box",style:ee(ee(ee(ee(ee({},f&&{fontSize:f}),b&&{"--rli-animation-duration":b}),m&&{"--rli-animation-function":m}),S),c),role:"status","aria-live":"polite","aria-label":"Loading"},ae.createElement("span",{className:"rli-d-i-b OP-annulus-indicator"},ae.createElement("svg",{className:"whirl",viewBox:"25 25 50 50"},ae.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:_,strokeMiterlimit:"10"})),ae.createElement(Gr,{className:"OP-annulus-text",text:i==null?void 0:i.text,textColor:i==null?void 0:i.textColor})))};function ml(i){return i&&i.Math===Math&&i}je(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite u1qz6qy, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6s0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6qy {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes u1qz6s0 {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);var Yt=ml(typeof window=="object"&&window)||ml(typeof self=="object"&&self)||ml(typeof global=="object"&&global)||function(){return this}()||Function("return this")();function Jc(){var i,s;return!((i=Yt==null?void 0:Yt.crypto)===null||i===void 0)&&i.randomUUID?Yt.crypto.randomUUID():!((s=Yt==null?void 0:Yt.btoa)===null||s===void 0)&&s.name?Yt.btoa(new Date(Math.ceil(1e13*Math.random())).getTime()+""):Date.now().toString(36)+Math.random().toString(36).substring(0)}var ci=Array.from({length:4},function(i,s){return"--OP-dotted-phase".concat(s+1,"-color")}),vh=function(i){var s,l=Vr(i==null?void 0:i.style,i==null?void 0:i.size),c=l.styles,f=l.fontSize,m=i==null?void 0:i.easing,b=Wr(i==null?void 0:i.speedPlus,"1.2s").animationPeriod,S=function(E){var R={},I=ci.length;if(E instanceof Array){for(var j=Kr(E,I),M=0;M<j.length&&!(M>=4);M++)R[ci[M]]=j[M];return R}try{if(typeof E!="string")throw new Error("Color String expected");for(var C=0;C<I;C++)R[ci[C]]=E}catch(w){for(w instanceof Error?console.warn("[".concat(w.message,']: Received "').concat(typeof E,'" with value, ').concat(JSON.stringify(E))):console.warn("".concat(JSON.stringify(E),' received in <OrbitProgress variant="dotted" /> indicator cannot be processed. Using default instead!')),C=0;C<I;C++)R[ci[C]]=Un}return R}((s=i==null?void 0:i.color)!==null&&s!==void 0?s:""),_=i!=null&&i.dense?16:12;return ae.createElement("span",{className:"rli-d-i-b OP-dotted-rli-bounding-box",style:ee(ee(ee(ee(ee({},f&&{fontSize:f}),b&&{"--rli-animation-duration":b}),m&&{"--rli-animation-function":m}),S),c),role:"status","aria-live":"polite","aria-label":"Loading"},ae.createElement("span",{className:"rli-d-i-b OP-dotted-indicator"},Array.from({length:_}).map(function(E,R){var I=function(C,w,L){if(w===16){var Q=360*C/w,le=w-C,ie=Number.parseFloat(L)/w*le*-1;return{transform:"rotate(".concat(Q,"deg)"),animationDelay:"".concat(ie,"s")}}return{transform:"",animationDelay:""}}(R,_,b),j=I.animationDelay,M=I.transform;return ae.createElement("span",{key:Jc(),className:"rli-d-i-b dot-shape-holder",style:M?{transform:M}:void 0},ae.createElement("span",{className:"dot",style:j?{animationDelay:j}:void 0}))}),ae.createElement(Gr,{className:"OP-dotted-text",text:i==null?void 0:i.text,textColor:i==null?void 0:i.textColor})))};je(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite u1qz6sz, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6t3;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6sz {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes u1qz6t3 {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);var di=Array.from({length:4},function(i,s){return"--OP-spokes-phase".concat(s+1,"-color")}),yh=function(i){var s,l=Vr(i==null?void 0:i.style,i==null?void 0:i.size),c=l.styles,f=l.fontSize,m=i==null?void 0:i.easing,b=Wr(i==null?void 0:i.speedPlus,"1.2s").animationPeriod,S=function(E){var R={},I=di.length;if(E instanceof Array){for(var j=Kr(E,I),M=0;M<j.length&&!(M>=4);M++)R[di[M]]=j[M];return R}try{if(typeof E!="string")throw new Error("Color String expected");for(var C=0;C<I;C++)R[di[C]]=E}catch(w){for(w instanceof Error?console.warn("[".concat(w.message,']: Received "').concat(typeof E,'" instead with value, ').concat(JSON.stringify(E))):console.warn("".concat(JSON.stringify(E),' received in <OrbitProgress variant="spokes" /> indicator cannot be processed. Using default instead!')),C=0;C<I;C++)R[di[C]]=Un}return R}((s=i==null?void 0:i.color)!==null&&s!==void 0?s:""),_=i!=null&&i.dense?16:12;return ae.createElement("span",{className:"rli-d-i-b OP-spokes-rli-bounding-box",style:ee(ee(ee(ee(ee({},f&&{fontSize:f}),b&&{"--rli-animation-duration":b}),m&&{"--rli-animation-function":m}),S),c),role:"status","aria-live":"polite","aria-label":"Loading"},ae.createElement("span",{className:"rli-d-i-b OP-spokes-indicator"},Array.from({length:_},function(E,R){return ae.createElement("span",{key:Jc(),className:"rli-d-i-b spoke",style:bh(R,_,b)})})),ae.createElement(Gr,{text:i==null?void 0:i.text,textColor:i==null?void 0:i.textColor}))};function bh(i,s,l){if(s===16){var c=s-i,f=Number.parseFloat(l)/s;return{transform:"rotate(".concat(360*i/s,"deg) translate(-50%, ").concat("-1.56em",")"),animationDelay:"".concat((c-1)*f*-1,"s")}}}je(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite u1qz6t5, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite u1qz6uw;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6t5 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6uw {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);var fi=Array.from({length:4},function(i,s){return"--OP-annulus-dual-sectors-phase".concat(s+1,"-color")}),xh=function(i){var s,l=Vr(i==null?void 0:i.style,i==null?void 0:i.size),c=l.styles,f=l.fontSize,m=i==null?void 0:i.easing,b=Wr(i==null?void 0:i.speedPlus,"1.2s").animationPeriod,S=function(E){var R={},I=fi.length;if(E instanceof Array){for(var j=Kr(E,I),M=0;M<j.length&&!(M>=4);M++)R[fi[M]]=j[M];return R}try{if(typeof E!="string")throw new Error("Color String expected");for(var C=0;C<I;C++)R[fi[C]]=E}catch(w){for(w instanceof Error?console.warn("[".concat(w.message,']: Received "').concat(typeof E,'" with value, ').concat(JSON.stringify(E))):console.warn("".concat(JSON.stringify(E),' received in <OrbitProgress variant="annulus-splits" /> indicator cannot be processed. Using default instead!')),C=0;C<I;C++)R[fi[C]]=Un}return R}((s=i==null?void 0:i.color)!==null&&s!==void 0?s:""),_=i.dense?"0.45em":"";return ae.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-rli-bounding-box",style:ee(ee(ee(ee(ee({},f&&{fontSize:f}),b&&{"--rli-animation-duration":b}),m&&{"--rli-animation-function":m}),S),c),role:"status","aria-live":"polite","aria-label":"Loading"},ae.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-indicator"},ae.createElement("span",{className:"rli-d-i-b annulus-sectors",style:ee({},_&&{borderWidth:_})}),ae.createElement(Gr,{className:"OP-annulus-dual-sectors-text",text:i==null?void 0:i.text,textColor:i==null?void 0:i.textColor})))};je(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6tq, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6v8;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6tq {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6v8 {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);var Ir=Array.from({length:4},function(i,s){return["--OP-annulus-track-phase".concat(s+1,"-color"),"--OP-annulus-sector-phase".concat(s+1,"-color")]}),pi=function(i){return i===void 0&&(i=1),.25*i},wh=function(i){var s,l=Vr(i==null?void 0:i.style,i==null?void 0:i.size),c=l.styles,f=l.fontSize,m=i==null?void 0:i.easing,b=Wr(i==null?void 0:i.speedPlus,"1s").animationPeriod,S=function(E){var R={},I=Ir.length;if(E instanceof Array){for(var j=Kr(E,I),M=0;M<j.length&&!(M>=4);M++){var C=Ir[M];try{if(!(Q=$(j[M])).isValid())throw new Error("Invalid Color: ".concat(Q.getOriginalInput()));var w=Q.setAlpha(pi(Q.getAlpha())).toRgbString(),L=j[M];R[C[0]]=w,R[C[1]]=L}catch{L=Un,w=(Q=$(Un)).setAlpha(pi(Q.getAlpha())).toRgbString(),R[C[0]]=w,R[C[1]]=L}}return R}try{var Q=$(E);if(typeof E!="string")throw new Error("Color String expected");if(!Q.isValid())throw new Error("Invalid Color: ".concat(Q.getOriginalInput()));L=E,w=Q.setAlpha(pi(Q.getAlpha())).toRgbString();for(var le=0;le<I;le++)R[(C=Ir[le])[0]]=w,R[C[1]]=L}catch(ie){for(ie instanceof Error?console.warn("[".concat(ie.message,']: Received "').concat(typeof E,'" with value, ').concat(JSON.stringify(E))):console.warn("".concat(JSON.stringify(E),' received in <OrbitProgress variant="annulus-track" /> indicator cannot be processed. Using default instead!')),L=Un,w=(Q=$(Un)).setAlpha(pi(Q.getAlpha())).toRgbString(),le=0;le<Ir.length;le++)R[(C=Ir[le])[0]]=w,R[C[1]]=L}return R}((s=i==null?void 0:i.color)!==null&&s!==void 0?s:""),_=i.dense?"0.45em":"";return ae.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-rli-bounding-box",style:ee(ee(ee(ee(ee({},f&&{fontSize:f}),b&&{"--rli-animation-duration":b}),m&&{"--rli-animation-function":m}),S),c),role:"status","aria-live":"polite","aria-label":"Loading"},ae.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-indicator"},ae.createElement("span",{className:"rli-d-i-b annulus-track-ring",style:ee({},_&&{borderWidth:_})}),ae.createElement(Gr,{className:"OP-annulus-sector-text",text:i==null?void 0:i.text,textColor:i==null?void 0:i.textColor})))},Zc=function(i){var s=Object(i).variant,l=s===void 0?"disc":s;return l==="dotted"?ae.createElement(vh,ee({},i)):l==="spokes"?ae.createElement(yh,ee({},i)):l==="disc"?ae.createElement(gh,ee({},i)):l==="split-disc"?ae.createElement(xh,ee({},i)):l==="track-disc"?ae.createElement(wh,ee({},i)):null};je(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6cv, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6e3;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: u1qz6cr var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6cv {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes u1qz6cr {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes u1qz6e3 {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(i,s){return"--four-square-phase".concat(s+1,"-color")});je(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: u1qz6bl, u1qz6c9;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6bl {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes u1qz6c9 {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(i,s){return"--mosaic-phase".concat(s+1,"-color")});je(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6mm, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6og;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6mm {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes u1qz6og {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(i,s){return"--riple-phase".concat(s+1,"-color")});je(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6uj, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6vi;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6uj {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes u1qz6vi {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},function(i,s){return"--TD-pulsate-phase".concat(s+1,"-color")});je(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite u1qz6w1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite u1qz6x5;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6w1 {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes u1qz6x5 {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},function(i,s){return"--TD-brick-stack-phase".concat(s+1,"-color")});je(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite u1qz6wd, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite u1qz6xx;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6wd {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes u1qz6xx {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},function(i,s){return"--TD-bob-phase".concat(s+1,"-color")});je(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6yl, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite u1qz6zs;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6z4;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes u1qz6yl {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes u1qz6z4 {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes u1qz6zs {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},function(i,s){return"--TD-bounce-phase".concat(s+1,"-color")});je(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: u1qz6i2, u1qz6js;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6i2 {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes u1qz6js {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(i,s){return"--shape-phase".concat(s+1,"-color")});je(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: u1qz6nk var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, u1qz6op calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, u1qz6pg calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes u1qz6nk {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes u1qz6op {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes u1qz6pg {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(i,s){return"--trophySpin-phase".concat(s+1,"-color")});je(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite u1qz6km, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite u1qz6lk;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes u1qz6km {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes u1qz6lk {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(i,s){return"--slab-phase".concat(s+1,"-color")});je(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite u1qz6lr, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite u1qz6m8;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes u1qz6lr {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes u1qz6m8 {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(i,s){return"--life-line-phase".concat(s+1,"-color")});const kh=()=>{const{selectedWord:i,closeMoreDetails:s}=$r(),[l,c]=J.useState(null),[f,m]=J.useState(!1);return J.useEffect(()=>{console.log(i),(async()=>{m(!0);try{const _=(await Qc(i.word)).slice(7,-5),E=JSON.parse(_);m(!1),c(E)}catch(S){console.log(S)}})()},[]),k.jsxs(k.Fragment,{children:[f&&k.jsx("div",{className:"p-5 absolute flex justify-center items-center z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen ",children:k.jsx(Zc,{variant:"track-disc",color:"#000",size:"large",text:"Loading..",textColor:""})}),l&&k.jsxs(k.Fragment,{children:[k.jsx("div",{className:" fixed w-screen z-30 h-screen top-0 left-0 bg-[rgba(0,0,0,0.7)]"}),k.jsxs("div",{className:"bg-white p-5 fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[60vw] rounded-lg",children:[k.jsx("button",{className:"absolute top-2 right-2",onClick:()=>s(),children:k.jsx(Hr,{className:"w-10 h-10 text-red-600 hover:text-red-700"})}),k.jsxs("div",{className:"flex flex-col gap-2 py-2 px-4 w-full h-full overflow-auto ",children:[k.jsx("h1",{className:"font-bold text-xl",children:"Traduccion"}),k.jsx("p",{className:" text-lg font-bold text-blue-900",children:l.translate}),k.jsx("h2",{className:"font-bold text-lg",children:"Ejemplos:"}),k.jsx("div",{className:"px-4",children:k.jsx(k.Fragment,{children:l.examples.map((b,S)=>k.jsxs("div",{className:"text-lg text-blue-900",children:[k.jsx("p",{className:"font-bold",children:b.sentence}),k.jsx("p",{className:"text-gray-500",children:b.translation})]},S))})}),k.jsx("p",{className:"text-lg text-gray-500",children:l.usage})]})]})]})]})};function Sh(){const{words:i,showcard:s,showMoreDetails:l,warning:c,playMemory:f,showFormCard:m,setWarning:b,addClickWord:S,setShowFormCard:_,showDetailCard:E,setPlayMemory:R}=$r(),[I,j]=J.useState(!1),[M,C]=J.useState(""),[w,L]=J.useState(""),[Q,le]=J.useState(null),[ie,de]=J.useState(!1),[ke,he]=J.useState(!1);J.useEffect(()=>{s&&j(!0)},[s]),J.useEffect(()=>{localStorage.setItem("words",JSON.stringify(i))},[i]),J.useEffect(()=>{c.boolean&&setTimeout(()=>{b("",!1)},2e3)},[c]);const ve=se=>{se.preventDefault(),C(se.target.value)},ze=i.filter(se=>se.word.toLowerCase().includes(M.toLowerCase())),Oe=async se=>{if(se.preventDefault(),w===""){b("search",!0);return}de(!0);try{const Be=(await Qc(w)).slice(7,-5),Ke=JSON.parse(Be);de(!1),le(Ke),L("")}catch(Se){console.log(Se)}},mn=se=>{const Se=se.word,Be=se.translate,Ke={word:Se,translate:Be};if(i.find(ye=>ye.word===Se)){b("addWrong",!0);return}S(Ke),b("addSuccess",!0)},zn=()=>{i.length>0?R():b("play",!0)};return k.jsxs(k.Fragment,{children:[f&&k.jsx(Sp,{}),l!==""&&k.jsx(kh,{}),c.type==="addWrong"&&c.boolean&&k.jsx(Kt,{children:"La palabra ya existe"}),c.type=="play"&&c.boolean&&k.jsx(Kt,{children:"No hay palabras guardadas"}),c.type=="addSuccess"&&c.boolean&&k.jsx(Kt,{children:"Palabra añadida correctamente"}),c.type=="delete"&&c.boolean&&k.jsx(Kt,{children:"Palabra eliminada correctamente"}),c.type=="successPlay"&&c.boolean&&k.jsx(Kt,{children:"Has completado el juego de memoria"}),c.type=="search"&&c.boolean&&k.jsx(Kt,{children:"Introduce una palabra valida"}),m&&k.jsx(wp,{}),k.jsxs("div",{className:"flex justify-center px-4 py-4 md:px-8 md:p-0 flex-col md:flex-row items-center w-full h-full gap-4",children:[k.jsxs("div",{className:"md:flex-[1] w-full h-96 md:h-[90vh] bg-slate-100 rounded-xl flex p-6 flex-col justify-center items-center",children:[k.jsxs("h1",{className:"text-2xl text-center text-blue-800 mb-2",children:[" ","Palabras guardadas"]}),k.jsx("form",{onChange:ve,className:"w-full mb-5",children:k.jsx("input",{className:"p-2 w-full bg-white rounded-lg border border-blue-700",id:"name",name:"name",placeholder:"Buscar palabra",value:M})}),k.jsx("div",{className:"flex flex-col w-full h-full gap-2 overflow-auto",children:ze.map((se,Se)=>k.jsx("button",{className:"bg-white hover:bg-gray-100 transition-all shadow-lg rounded-xl p-4 text-lg text-center text-blue-600",onClick:()=>E(se.word,se.translate),children:se.word},Se))})]}),k.jsxs("div",{className:"flex-[3] w-full flex flex-col h-full md:h-[90vh] gap-2",children:[k.jsxs("div",{className:"flex flex-col  md:flex-row w-full h-2/5 justify-center items-center gap-2",children:[k.jsx("div",{className:"w-full md:w-1/2 h-full",children:s&&k.jsx("div",{className:`transition-transform  transform duration-300 ease-out ${I?"scale-100":"scale-0"} w-full h-full flex flex-col justify-between p-4 gap-4  bg-slate-100 rounded-xl shadow-md`,children:k.jsx(kp,{})})}),k.jsxs("div",{className:"w-full md:w-1/2 h-full flex flex-col gap-2",children:[k.jsxs("button",{onClick:()=>zn(),className:"bg-green-500 w-full h-1/2 hover:bg-green-600 text-white font-bold px-6 py-4 rounded-xl flex justify-center items-center gap-2",children:[k.jsx(up,{height:40,width:40}),"Recordar"]}),k.jsxs("button",{className:"bg-blue-600 w-full h-1/2 hover:bg-blue-700 text-white font-bold px-6 py-4 rounded-xl  flex justify-center items-center gap-2",onClick:()=>_(),children:[k.jsx(dp,{height:40,width:40,className:"hover:animate-spin"})," ","Añadir palabras"]})]})]}),k.jsxs("div",{className:`flex flex-col w-full h-3/5 ${Q?"bg-white":"bg-transparent"} ${Q?"rounded-xl":"rounded-none"}`,children:[k.jsxs("div",{className:"relative w-full md:flex-[1] h-16",children:[k.jsx("button",{onClick:()=>he(!0),className:`absolute z-30 w-full md:w-1/2 right-0 bg-blue-700 hover:bg-blue-800 text-white p-4 rounded-xl transition-all duration-500 ease-in-out ${ke?"opacity-0 pointer-events-none":"opacity-100"}`,children:"Buscar palabras por IA"}),k.jsxs("form",{className:`absolute z-20 w-full right-0 flex gap-2 items-center bg-white p-2 rounded-xl transition-all duration-500 ease-in-out ${ke?"translate-x-0 opacity-100":"translate-x-full opacity-0"}`,onSubmit:Oe,children:[k.jsx("label",{className:"text-blue-700 font-bold",children:"Buscar:"}),k.jsx("input",{className:"p-2 w-full text-lg bg-white rounded-lg border border-blue-900",placeholder:"Buscar traducción de palabra ingles o español",type:"text",name:"search",id:"search",value:w,onChange:se=>L(se.target.value)}),k.jsx("button",{className:"bg-blue-600 hover:bg-blue-700 text-white font-bold p-3 rounded-lg",type:"submit",children:"Buscar"})]})]}),k.jsxs("div",{className:`flex-[4.8] relative flex flex-col ${Q?"bg-white":"bg-transparent"}  rounded-xl overflow-auto`,children:[ie&&k.jsx("div",{className:"h-full w-full absolute top-0 left-0 flex justify-center items-center",children:k.jsx(Zc,{variant:"track-disc",color:"#000",size:"large",text:"Loading..",textColor:""})}),Q&&k.jsxs(k.Fragment,{children:[k.jsx("button",{className:"absolute top-2 right-2 z-[25] py-2 px-4 text-white bg-blue-900 hover:bg-blue-800 rounded-lg",onClick:()=>mn(Q),children:"Añadir palabra"}),k.jsxs("div",{className:"flex flex-col gap-2 py-2 px-4 w-full h-full overflow-auto ",children:[k.jsx("div",{className:"bg-orange-500 w-32 p-0.5 text-white rounded-full ",children:k.jsx("p",{className:"text-lg text-center",children:"Traducción:"})}),k.jsx("p",{className:" text-lg font-bold ml-2 text-blue-900",children:Q.translate}),k.jsx("h2",{className:"font-bold ml-1 text-lg",children:"Ejemplos:"}),k.jsx("div",{className:"mx-6",children:k.jsx(k.Fragment,{children:Q.examples.map((se,Se)=>k.jsxs("div",{className:"text-lg text-blue-900",children:[k.jsx("p",{className:"font-bold",children:se.sentence}),k.jsx("p",{className:"text-gray-500",children:se.translation})]},Se))})}),k.jsx("p",{className:"text-lg text-gray-500",children:Q.usage})]})]})]})]})]})]})]})}ip.createRoot(document.getElementById("root")).render(k.jsx(J.StrictMode,{children:k.jsx(Sh,{})}));
