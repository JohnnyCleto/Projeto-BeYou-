/*! For license information please see main.578acb64.js.LICENSE.txt */
(()=>{var e={4:(e,t,n)=>{"use strict";var r=n(853),a=n(43),o=n(950);function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}var s=Symbol.for("react.element"),c=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),m=Symbol.for("react.consumer"),g=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),b=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),w=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var j=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var k=Symbol.for("react.memo_cache_sentinel"),S=Symbol.iterator;function C(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=S&&e[S]||e["@@iterator"])?e:null}var E=Symbol.for("react.client.reference");function _(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===E?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case d:return"Fragment";case u:return"Portal";case f:return"Profiler";case p:return"StrictMode";case v:return"Suspense";case b:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case g:return(e.displayName||"Context")+".Provider";case m:return(e._context.displayName||"Context")+".Consumer";case x:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case y:return null!==(t=e.displayName||null)?t:_(e.type)||"Memo";case w:t=e._payload,e=e._init;try{return _(e(t))}catch(n){}}return null}var P,O,N=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=Object.assign;function T(e){if(void 0===P)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);P=t&&t[1]||"",O=-1<n.stack.indexOf("\n    at")?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+P+e+O}var D=!1;function A(e,t){if(!e||D)return"";D=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(a){var r=a}Reflect.construct(e,[],n)}else{try{n.call()}catch(o){r=o}e.call(n.prototype)}}else{try{throw Error()}catch(i){r=i}(n=e())&&"function"===typeof n.catch&&n.catch((function(){}))}}catch(l){if(l&&r&&"string"===typeof l.stack)return[l.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=r.DetermineComponentFrameRoot(),i=o[0],l=o[1];if(i&&l){var s=i.split("\n"),c=l.split("\n");for(a=r=0;r<s.length&&!s[r].includes("DetermineComponentFrameRoot");)r++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(r===s.length||a===c.length)for(r=s.length-1,a=c.length-1;1<=r&&0<=a&&s[r]!==c[a];)a--;for(;1<=r&&0<=a;r--,a--)if(s[r]!==c[a]){if(1!==r||1!==a)do{if(r--,0>--a||s[r]!==c[a]){var u="\n"+s[r].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=r&&0<=a);break}}}finally{D=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?T(n):""}function L(e){switch(e.tag){case 26:case 27:case 5:return T(e.type);case 16:return T("Lazy");case 13:return T("Suspense");case 19:return T("SuspenseList");case 0:case 15:return e=A(e.type,!1);case 11:return e=A(e.type.render,!1);case 1:return e=A(e.type,!0);default:return""}}function R(e){try{var t="";do{t+=L(e),e=e.return}while(e);return t}catch(n){return"\nError generating stack: "+n.message+"\n"+n.stack}}function F(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function I(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function M(e){if(F(e)!==e)throw Error(i(188))}function $(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=$(e)))return t;e=e.sibling}return null}var B=Array.isArray,U=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},W=[],H=-1;function q(e){return{current:e}}function V(e){0>H||(e.current=W[H],W[H]=null,H--)}function K(e,t){H++,W[H]=e.current,e.current=t}var Q=q(null),G=q(null),J=q(null),X=q(null);function Z(e,t){switch(K(J,t),K(G,e),K(Q,null),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)&&(t=t.namespaceURI)?Gu(t):0;break;default:if(t=(e=8===e?t.parentNode:t).tagName,e=e.namespaceURI)t=Ju(e=Gu(e),t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}V(Q),K(Q,t)}function ee(){V(Q),V(G),V(J)}function te(e){null!==e.memoizedState&&K(X,e);var t=Q.current,n=Ju(t,e.type);t!==n&&(K(G,e),K(Q,n))}function ne(e){G.current===e&&(V(Q),V(G)),X.current===e&&(V(X),Rd._currentValue=Y)}var re=Object.prototype.hasOwnProperty,ae=r.unstable_scheduleCallback,oe=r.unstable_cancelCallback,ie=r.unstable_shouldYield,le=r.unstable_requestPaint,se=r.unstable_now,ce=r.unstable_getCurrentPriorityLevel,ue=r.unstable_ImmediatePriority,de=r.unstable_UserBlockingPriority,pe=r.unstable_NormalPriority,fe=r.unstable_LowPriority,he=r.unstable_IdlePriority,me=r.log,ge=r.unstable_setDisableYieldValue,xe=null,ve=null;function be(e){if("function"===typeof me&&ge(e),ve&&"function"===typeof ve.setStrictMode)try{ve.setStrictMode(xe,e)}catch(t){}}var ye=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(we(e)/je|0)|0},we=Math.log,je=Math.LN2;var ke=128,Se=4194304;function Ce(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194176&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ee(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes,i=e.warmLanes;e=0!==e.finishedLanes;var l=134217727&n;return 0!==l?0!==(n=l&~a)?r=Ce(n):0!==(o&=l)?r=Ce(o):e||0!==(i=l&~i)&&(r=Ce(i)):0!==(l=n&~a)?r=Ce(l):0!==o?r=Ce(o):e||0!==(i=n&~i)&&(r=Ce(i)),0===r?0:0!==t&&t!==r&&0===(t&a)&&((a=r&-r)>=(i=t&-t)||32===a&&0!==(4194176&i))?t:r}function _e(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function Pe(e,t){switch(e){case 1:case 2:case 4:case 8:return t+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Oe(){var e=ke;return 0===(4194176&(ke<<=1))&&(ke=128),e}function Ne(){var e=Se;return 0===(62914560&(Se<<=1))&&(Se=4194304),e}function ze(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Te(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function De(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-ye(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|4194218&n}function Ae(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ye(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}function Le(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function Re(){var e=U.p;return 0!==e?e:void 0===(e=window.event)?32:Jd(e.type)}var Fe=Math.random().toString(36).slice(2),Ie="__reactFiber$"+Fe,Me="__reactProps$"+Fe,$e="__reactContainer$"+Fe,Be="__reactEvents$"+Fe,Ue="__reactListeners$"+Fe,Ye="__reactHandles$"+Fe,We="__reactResources$"+Fe,He="__reactMarker$"+Fe;function qe(e){delete e[Ie],delete e[Me],delete e[Be],delete e[Ue],delete e[Ye]}function Ve(e){var t=e[Ie];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$e]||n[Ie]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=sd(e);null!==e;){if(n=e[Ie])return n;e=sd(e)}return t}n=(e=n).parentNode}return null}function Ke(e){if(e=e[Ie]||e[$e]){var t=e.tag;if(5===t||6===t||13===t||26===t||27===t||3===t)return e}return null}function Qe(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(i(33))}function Ge(e){var t=e[We];return t||(t=e[We]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[He]=!0}var Xe=new Set,Ze={};function et(e,t){tt(e,t),tt(e+"Capture",t)}function tt(e,t){for(Ze[e]=t,e=0;e<t.length;e++)Xe.add(t[e])}var nt=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),rt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},ot={};function it(e,t,n){if(a=t,re.call(ot,a)||!re.call(at,a)&&(rt.test(a)?ot[a]=!0:(at[a]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var a}function lt(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function st(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ut(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function dt(e){e._valueTracker||(e._valueTracker=function(e){var t=ut(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function pt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ut(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ft(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var ht=/[\n"\\]/g;function mt(e){return e.replace(ht,(function(e){return"\\"+e.charCodeAt(0).toString(16)+" "}))}function gt(e,t,n,r,a,o,i,l){e.name="",null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i?e.type=i:e.removeAttribute("type"),null!=t?"number"===i?(0===t&&""===e.value||e.value!=t)&&(e.value=""+ct(t)):e.value!==""+ct(t)&&(e.value=""+ct(t)):"submit"!==i&&"reset"!==i||e.removeAttribute("value"),null!=t?vt(e,i,ct(t)):null!=n?vt(e,i,ct(n)):null!=r&&e.removeAttribute("value"),null==a&&null!=o&&(e.defaultChecked=!!o),null!=a&&(e.checked=a&&"function"!==typeof a&&"symbol"!==typeof a),null!=l&&"function"!==typeof l&&"symbol"!==typeof l&&"boolean"!==typeof l?e.name=""+ct(l):e.removeAttribute("name")}function xt(e,t,n,r,a,o,i,l){if(null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o&&(e.type=o),null!=t||null!=n){if(!("submit"!==o&&"reset"!==o||void 0!==t&&null!==t))return;n=null!=n?""+ct(n):"",t=null!=t?""+ct(t):n,l||t===e.value||(e.value=t),e.defaultValue=t}r="function"!==typeof(r=null!=r?r:a)&&"symbol"!==typeof r&&!!r,e.checked=l?e.checked:!!r,e.defaultChecked=!!r,null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i&&(e.name=i)}function vt(e,t,n){"number"===t&&ft(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function bt(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ct(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function yt(e,t,n){null==t||((t=""+ct(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+ct(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function wt(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(i(92));if(B(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}null==n&&(n=""),t=n}n=ct(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r)}function jt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var kt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function St(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!==typeof n||0===n||kt.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ct(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(i(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="");for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&St(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&St(e,o,t[o])}function Et(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _t=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ot(e){return Pt.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Nt=null;function zt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Tt=null,Dt=null;function At(e){var t=Ke(e);if(t&&(e=t.stateNode)){var n=e[Me]||null;e:switch(e=t.stateNode,t.type){case"input":if(gt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+mt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[Me]||null;if(!a)throw Error(i(90));gt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&pt(r)}break e;case"textarea":yt(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&bt(e,!!n.multiple,t,!1)}}}var Lt=!1;function Rt(e,t,n){if(Lt)return e(t,n);Lt=!0;try{return e(t)}finally{if(Lt=!1,(null!==Tt||null!==Dt)&&(Ic(),Tt&&(t=Tt,e=Dt,Dt=Tt=null,At(t),e)))for(t=0;t<e.length;t++)At(e[t])}}function Ft(e,t){var n=e.stateNode;if(null===n)return null;var r=n[Me]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(i(231,t,typeof n));return n}var It=!1;if(nt)try{var Mt={};Object.defineProperty(Mt,"passive",{get:function(){It=!0}}),window.addEventListener("test",Mt,Mt),window.removeEventListener("test",Mt,Mt)}catch(wp){It=!1}var $t=null,Bt=null,Ut=null;function Yt(){if(Ut)return Ut;var e,t,n=Bt,r=n.length,a="value"in $t?$t.value:$t.textContent,o=a.length;for(e=0;e<r&&n[e]===a[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===a[o-t];t++);return Ut=a.slice(e,1<t?1-t:void 0)}function Wt(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Ht(){return!0}function qt(){return!1}function Vt(e){function t(t,n,r,a,o){for(var i in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(a):a[i]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?Ht:qt,this.isPropagationStopped=qt,this}return z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Ht)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Ht)},persist:function(){},isPersistent:Ht}),t}var Kt,Qt,Gt,Jt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xt=Vt(Jt),Zt=z({},Jt,{view:0,detail:0}),en=Vt(Zt),tn=z({},Zt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gt&&(Gt&&"mousemove"===e.type?(Kt=e.screenX-Gt.screenX,Qt=e.screenY-Gt.screenY):Qt=Kt=0,Gt=e),Kt)},movementY:function(e){return"movementY"in e?e.movementY:Qt}}),nn=Vt(tn),rn=Vt(z({},tn,{dataTransfer:0})),an=Vt(z({},Zt,{relatedTarget:0})),on=Vt(z({},Jt,{animationName:0,elapsedTime:0,pseudoElement:0})),ln=Vt(z({},Jt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),sn=Vt(z({},Jt,{data:0})),cn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},un={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=dn[e])&&!!t[e]}function fn(){return pn}var hn=Vt(z({},Zt,{key:function(e){if(e.key){var t=cn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Wt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?un[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fn,charCode:function(e){return"keypress"===e.type?Wt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Wt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),mn=Vt(z({},tn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),gn=Vt(z({},Zt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fn})),xn=Vt(z({},Jt,{propertyName:0,elapsedTime:0,pseudoElement:0})),vn=Vt(z({},tn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),bn=Vt(z({},Jt,{newState:0,oldState:0})),yn=[9,13,27,32],wn=nt&&"CompositionEvent"in window,jn=null;nt&&"documentMode"in document&&(jn=document.documentMode);var kn=nt&&"TextEvent"in window&&!jn,Sn=nt&&(!wn||jn&&8<jn&&11>=jn),Cn=String.fromCharCode(32),En=!1;function _n(e,t){switch(e){case"keyup":return-1!==yn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var On=!1;var Nn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Nn[e.type]:"textarea"===t}function Tn(e,t,n,r){Tt?Dt?Dt.push(r):Dt=[r]:Tt=r,0<(t=Ru(t,"onChange")).length&&(n=new Xt("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Dn=null,An=null;function Ln(e){Pu(e,0)}function Rn(e){if(pt(Qe(e)))return e}function Fn(e,t){if("change"===e)return t}var In=!1;if(nt){var Mn;if(nt){var $n="oninput"in document;if(!$n){var Bn=document.createElement("div");Bn.setAttribute("oninput","return;"),$n="function"===typeof Bn.oninput}Mn=$n}else Mn=!1;In=Mn&&(!document.documentMode||9<document.documentMode)}function Un(){Dn&&(Dn.detachEvent("onpropertychange",Yn),An=Dn=null)}function Yn(e){if("value"===e.propertyName&&Rn(An)){var t=[];Tn(t,An,e,zt(e)),Rt(Ln,t)}}function Wn(e,t,n){"focusin"===e?(Un(),An=n,(Dn=t).attachEvent("onpropertychange",Yn)):"focusout"===e&&Un()}function Hn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Rn(An)}function qn(e,t){if("click"===e)return Rn(t)}function Vn(e,t){if("input"===e||"change"===e)return Rn(t)}var Kn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function Qn(e,t){if(Kn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!re.call(t,a)||!Kn(e[a],t[a]))return!1}return!0}function Gn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jn(e,t){var n,r=Gn(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Gn(r)}}function Xn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Xn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function Zn(e){for(var t=ft((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=ft((e=t.contentWindow).document)}return t}function er(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function tr(e,t){var n=Zn(t);t=e.focusedElem;var r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Xn(t.ownerDocument.documentElement,t)){if(null!==r&&er(t))if(e=r.start,void 0===(n=r.end)&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if((n=(e=t.ownerDocument||document)&&e.defaultView||window).getSelection){n=n.getSelection();var a=t.textContent.length,o=Math.min(r.start,a);r=void 0===r.end?o:Math.min(r.end,a),!n.extend&&o>r&&(a=r,r=o,o=a),a=Jn(t,o);var i=Jn(t,r);a&&i&&(1!==n.rangeCount||n.anchorNode!==a.node||n.anchorOffset!==a.offset||n.focusNode!==i.node||n.focusOffset!==i.offset)&&((e=e.createRange()).setStart(a.node,a.offset),n.removeAllRanges(),o>r?(n.addRange(e),n.extend(i.node,i.offset)):(e.setEnd(i.node,i.offset),n.addRange(e)))}for(e=[],n=t;n=n.parentNode;)1===n.nodeType&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for("function"===typeof t.focus&&t.focus(),t=0;t<e.length;t++)(n=e[t]).element.scrollLeft=n.left,n.element.scrollTop=n.top}}var nr=nt&&"documentMode"in document&&11>=document.documentMode,rr=null,ar=null,or=null,ir=!1;function lr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;ir||null==rr||rr!==ft(r)||("selectionStart"in(r=rr)&&er(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},or&&Qn(or,r)||(or=r,0<(r=Ru(ar,"onSelect")).length&&(t=new Xt("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rr)))}function sr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cr={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionrun:sr("Transition","TransitionRun"),transitionstart:sr("Transition","TransitionStart"),transitioncancel:sr("Transition","TransitionCancel"),transitionend:sr("Transition","TransitionEnd")},ur={},dr={};function pr(e){if(ur[e])return ur[e];if(!cr[e])return e;var t,n=cr[e];for(t in n)if(n.hasOwnProperty(t)&&t in dr)return ur[e]=n[t];return e}nt&&(dr=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);var fr=pr("animationend"),hr=pr("animationiteration"),mr=pr("animationstart"),gr=pr("transitionrun"),xr=pr("transitionstart"),vr=pr("transitioncancel"),br=pr("transitionend"),yr=new Map,wr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function jr(e,t){yr.set(e,t),et(t,[e])}var kr=[],Sr=0,Cr=0;function Er(){for(var e=Sr,t=Cr=Sr=0;t<e;){var n=kr[t];kr[t++]=null;var r=kr[t];kr[t++]=null;var a=kr[t];kr[t++]=null;var o=kr[t];if(kr[t++]=null,null!==r&&null!==a){var i=r.pending;null===i?a.next=a:(a.next=i.next,i.next=a),r.pending=a}0!==o&&Nr(n,a,o)}}function _r(e,t,n,r){kr[Sr++]=e,kr[Sr++]=t,kr[Sr++]=n,kr[Sr++]=r,Cr|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function Pr(e,t,n,r){return _r(e,t,n,r),zr(e)}function Or(e,t){return _r(e,null,null,t),zr(e)}function Nr(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var a=!1,o=e.return;null!==o;)o.childLanes|=n,null!==(r=o.alternate)&&(r.childLanes|=n),22===o.tag&&(null===(e=o.stateNode)||1&e._visibility||(a=!0)),e=o,o=o.return;a&&null!==t&&3===e.tag&&(o=e.stateNode,a=31-ye(n),null===(e=(o=o.hiddenUpdates)[a])?o[a]=[t]:e.push(t),t.lane=536870912|n)}function zr(e){if(50<Pc)throw Pc=0,Oc=null,Error(i(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var Tr={},Dr=new WeakMap;function Ar(e,t){if("object"===typeof e&&null!==e){var n=Dr.get(e);return void 0!==n?n:(t={value:e,source:t,stack:R(t)},Dr.set(e,t),t)}return{value:e,source:t,stack:R(t)}}var Lr=[],Rr=0,Fr=null,Ir=0,Mr=[],$r=0,Br=null,Ur=1,Yr="";function Wr(e,t){Lr[Rr++]=Ir,Lr[Rr++]=Fr,Fr=e,Ir=t}function Hr(e,t,n){Mr[$r++]=Ur,Mr[$r++]=Yr,Mr[$r++]=Br,Br=e;var r=Ur;e=Yr;var a=32-ye(r)-1;r&=~(1<<a),n+=1;var o=32-ye(t)+a;if(30<o){var i=a-a%5;o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,Ur=1<<32-ye(t)+a|n<<a|r,Yr=o+e}else Ur=1<<o|n<<a|r,Yr=e}function qr(e){null!==e.return&&(Wr(e,1),Hr(e,1,0))}function Vr(e){for(;e===Fr;)Fr=Lr[--Rr],Lr[Rr]=null,Ir=Lr[--Rr],Lr[Rr]=null;for(;e===Br;)Br=Mr[--$r],Mr[$r]=null,Yr=Mr[--$r],Mr[$r]=null,Ur=Mr[--$r],Mr[$r]=null}var Kr=null,Qr=null,Gr=!1,Jr=null,Xr=!1,Zr=Error(i(519));function ea(e){throw oa(Ar(Error(i(418,"")),e)),Zr}function ta(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Ie]=e,t[Me]=r,n){case"dialog":Ou("cancel",t),Ou("close",t);break;case"iframe":case"object":case"embed":Ou("load",t);break;case"video":case"audio":for(n=0;n<Eu.length;n++)Ou(Eu[n],t);break;case"source":Ou("error",t);break;case"img":case"image":case"link":Ou("error",t),Ou("load",t);break;case"details":Ou("toggle",t);break;case"input":Ou("invalid",t),xt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),dt(t);break;case"select":Ou("invalid",t);break;case"textarea":Ou("invalid",t),wt(t,r.value,r.defaultValue,r.children),dt(t)}"string"!==typeof(n=r.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||Uu(t.textContent,n)?(null!=r.popover&&(Ou("beforetoggle",t),Ou("toggle",t)),null!=r.onScroll&&Ou("scroll",t),null!=r.onScrollEnd&&Ou("scrollend",t),null!=r.onClick&&(t.onclick=Yu),t=!0):t=!1,t||ea(e)}function na(e){for(Kr=e.return;Kr;)switch(Kr.tag){case 3:case 27:return void(Xr=!0);case 5:case 13:return void(Xr=!1);default:Kr=Kr.return}}function ra(e){if(e!==Kr)return!1;if(!Gr)return na(e),Gr=!0,!1;var t,n=!1;if((t=3!==e.tag&&27!==e.tag)&&((t=5===e.tag)&&(t=!("form"!==(t=e.type)&&"button"!==t)||Xu(e.type,e.memoizedProps)),t=!t),t&&(n=!0),n&&Qr&&ea(e),na(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,n=0;e;){if(8===e.nodeType)if("/$"===(t=e.data)){if(0===n){Qr=ld(e.nextSibling);break e}n--}else"$"!==t&&"$!"!==t&&"$?"!==t||n++;e=e.nextSibling}Qr=null}}else Qr=Kr?ld(e.stateNode.nextSibling):null;return!0}function aa(){Qr=Kr=null,Gr=!1}function oa(e){null===Jr?Jr=[e]:Jr.push(e)}var ia=Error(i(460)),la=Error(i(474)),sa={then:function(){}};function ca(e){return"fulfilled"===(e=e.status)||"rejected"===e}function ua(){}function da(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(ua,ua),t=n),t.status){case"fulfilled":return t.value;case"rejected":if((e=t.reason)===ia)throw Error(i(483));throw e;default:if("string"===typeof t.status)t.then(ua,ua);else{if(null!==(e=tc)&&100<e.shellSuspendCounter)throw Error(i(482));(e=t).status="pending",e.then((function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}}),(function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}}))}switch(t.status){case"fulfilled":return t.value;case"rejected":if((e=t.reason)===ia)throw Error(i(483));throw e}throw pa=t,ia}}var pa=null;function fa(){if(null===pa)throw Error(i(459));var e=pa;return pa=null,e}var ha=null,ma=0;function ga(e){var t=ma;return ma+=1,null===ha&&(ha=[]),da(ha,e,t)}function xa(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function va(e,t){if(t.$$typeof===s)throw Error(i(525));throw e=Object.prototype.toString.call(t),Error(i(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ba(e){return(0,e._init)(e._payload)}function ya(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function a(e,t){return(e=Fs(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=33554434,n):r:(t.flags|=33554434,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=33554434),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Us(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function p(e,t,n,r){var o=n.type;return o===d?h(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===w&&ba(o)===t.type)?(xa(t=a(t,n.props),n),t.return=e,t):(xa(t=Ms(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function f(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Ys(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function h(e,t,n,r,o){return null===t||7!==t.tag?((t=$s(n,e.mode,r,o)).return=e,t):((t=a(t,n)).return=e,t)}function m(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=Us(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case c:return xa(n=Ms(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case u:return(t=Ys(t,e.mode,n)).return=e,t;case w:return m(e,t=(0,t._init)(t._payload),n)}if(B(t)||C(t))return(t=$s(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return m(e,ga(t),n);if(t.$$typeof===g)return m(e,El(e,t),n);va(e,t)}return null}function x(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case c:return n.key===a?p(e,t,n,r):null;case u:return n.key===a?f(e,t,n,r):null;case w:return x(e,t,n=(a=n._init)(n._payload),r)}if(B(n)||C(n))return null!==a?null:h(e,t,n,r,null);if("function"===typeof n.then)return x(e,t,ga(n),r);if(n.$$typeof===g)return x(e,t,El(e,n),r);va(e,n)}return null}function v(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case c:return p(t,e=e.get(null===r.key?n:r.key)||null,r,a);case u:return f(t,e=e.get(null===r.key?n:r.key)||null,r,a);case w:return v(e,t,n,r=(0,r._init)(r._payload),a)}if(B(r)||C(r))return h(t,e=e.get(n)||null,r,a,null);if("function"===typeof r.then)return v(e,t,n,ga(r),a);if(r.$$typeof===g)return v(e,t,n,El(t,r),a);va(t,r)}return null}function b(s,p,f,h){if("object"===typeof f&&null!==f&&f.type===d&&null===f.key&&(f=f.props.children),"object"===typeof f&&null!==f){switch(f.$$typeof){case c:e:{for(var y=f.key;null!==p;){if(p.key===y){if((y=f.type)===d){if(7===p.tag){n(s,p.sibling),(h=a(p,f.props.children)).return=s,s=h;break e}}else if(p.elementType===y||"object"===typeof y&&null!==y&&y.$$typeof===w&&ba(y)===p.type){n(s,p.sibling),xa(h=a(p,f.props),f),h.return=s,s=h;break e}n(s,p);break}t(s,p),p=p.sibling}f.type===d?((h=$s(f.props.children,s.mode,h,f.key)).return=s,s=h):(xa(h=Ms(f.type,f.key,f.props,null,s.mode,h),f),h.return=s,s=h)}return l(s);case u:e:{for(y=f.key;null!==p;){if(p.key===y){if(4===p.tag&&p.stateNode.containerInfo===f.containerInfo&&p.stateNode.implementation===f.implementation){n(s,p.sibling),(h=a(p,f.children||[])).return=s,s=h;break e}n(s,p);break}t(s,p),p=p.sibling}(h=Ys(f,s.mode,h)).return=s,s=h}return l(s);case w:return b(s,p,f=(y=f._init)(f._payload),h)}if(B(f))return function(a,i,l,s){for(var c=null,u=null,d=i,p=i=0,f=null;null!==d&&p<l.length;p++){d.index>p?(f=d,d=null):f=d.sibling;var h=x(a,d,l[p],s);if(null===h){null===d&&(d=f);break}e&&d&&null===h.alternate&&t(a,d),i=o(h,i,p),null===u?c=h:u.sibling=h,u=h,d=f}if(p===l.length)return n(a,d),Gr&&Wr(a,p),c;if(null===d){for(;p<l.length;p++)null!==(d=m(a,l[p],s))&&(i=o(d,i,p),null===u?c=d:u.sibling=d,u=d);return Gr&&Wr(a,p),c}for(d=r(d);p<l.length;p++)null!==(f=v(d,a,p,l[p],s))&&(e&&null!==f.alternate&&d.delete(null===f.key?p:f.key),i=o(f,i,p),null===u?c=f:u.sibling=f,u=f);return e&&d.forEach((function(e){return t(a,e)})),Gr&&Wr(a,p),c}(s,p,f,h);if(C(f)){if("function"!==typeof(y=C(f)))throw Error(i(150));return function(a,l,s,c){if(null==s)throw Error(i(151));for(var u=null,d=null,p=l,f=l=0,h=null,g=s.next();null!==p&&!g.done;f++,g=s.next()){p.index>f?(h=p,p=null):h=p.sibling;var b=x(a,p,g.value,c);if(null===b){null===p&&(p=h);break}e&&p&&null===b.alternate&&t(a,p),l=o(b,l,f),null===d?u=b:d.sibling=b,d=b,p=h}if(g.done)return n(a,p),Gr&&Wr(a,f),u;if(null===p){for(;!g.done;f++,g=s.next())null!==(g=m(a,g.value,c))&&(l=o(g,l,f),null===d?u=g:d.sibling=g,d=g);return Gr&&Wr(a,f),u}for(p=r(p);!g.done;f++,g=s.next())null!==(g=v(p,a,f,g.value,c))&&(e&&null!==g.alternate&&p.delete(null===g.key?f:g.key),l=o(g,l,f),null===d?u=g:d.sibling=g,d=g);return e&&p.forEach((function(e){return t(a,e)})),Gr&&Wr(a,f),u}(s,p,f=y.call(f),h)}if("function"===typeof f.then)return b(s,p,ga(f),h);if(f.$$typeof===g)return b(s,p,El(s,f),h);va(s,f)}return"string"===typeof f&&""!==f||"number"===typeof f||"bigint"===typeof f?(f=""+f,null!==p&&6===p.tag?(n(s,p.sibling),(h=a(p,f)).return=s,s=h):(n(s,p),(h=Us(f,s.mode,h)).return=s,s=h),l(s)):n(s,p)}return function(e,t,n,r){try{ma=0;var a=b(e,t,n,r);return ha=null,a}catch(i){if(i===ia)throw i;var o=Ls(29,i,null,e.mode);return o.lanes=r,o.return=e,o}}}var wa=ya(!0),ja=ya(!1),ka=q(null),Sa=q(0);function Ca(e,t){K(Sa,e=cc),K(ka,t),cc=e|t.baseLanes}function Ea(){K(Sa,cc),K(ka,ka.current)}function _a(){cc=Sa.current,V(ka),V(Sa)}var Pa=q(null),Oa=null;function Na(e){var t=e.alternate;K(Aa,1&Aa.current),K(Pa,e),null===Oa&&(null===t||null!==ka.current||null!==t.memoizedState)&&(Oa=e)}function za(e){if(22===e.tag){if(K(Aa,Aa.current),K(Pa,e),null===Oa){var t=e.alternate;null!==t&&null!==t.memoizedState&&(Oa=e)}}else Ta()}function Ta(){K(Aa,Aa.current),K(Pa,Pa.current)}function Da(e){V(Pa),Oa===e&&(Oa=null),V(Aa)}var Aa=q(0);function La(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ra="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach((function(e){return e()}))}},Fa=r.unstable_scheduleCallback,Ia=r.unstable_NormalPriority,Ma={$$typeof:g,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $a(){return{controller:new Ra,data:new Map,refCount:0}}function Ba(e){e.refCount--,0===e.refCount&&Fa(Ia,(function(){e.controller.abort()}))}var Ua=null,Ya=0,Wa=0,Ha=null;function qa(){if(0===--Ya&&null!==Ua){null!==Ha&&(Ha.status="fulfilled");var e=Ua;Ua=null,Wa=0,Ha=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var Va=N.S;N.S=function(e,t){"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===Ua){var n=Ua=[];Ya=0,Wa=wu(),Ha={status:"pending",value:void 0,then:function(e){n.push(e)}}}Ya++,t.then(qa,qa)}(0,t),null!==Va&&Va(e,t)};var Ka=q(null);function Qa(){var e=Ka.current;return null!==e?e:tc.pooledCache}function Ga(e,t){K(Ka,null===t?Ka.current:t.pool)}function Ja(){var e=Qa();return null===e?null:{parent:Ma._currentValue,pool:e}}var Xa=0,Za=null,eo=null,to=null,no=!1,ro=!1,ao=!1,oo=0,io=0,lo=null,so=0;function co(){throw Error(i(321))}function uo(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Kn(e[n],t[n]))return!1;return!0}function po(e,t,n,r,a,o){return Xa=o,Za=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=null===e||null===e.memoizedState?Ei:_i,ao=!1,o=n(r,a),ao=!1,ro&&(o=ho(t,n,r,a)),fo(e),o}function fo(e){N.H=Ci;var t=null!==eo&&null!==eo.next;if(Xa=0,to=eo=Za=null,no=!1,io=0,lo=null,t)throw Error(i(300));null===e||Wi||null!==(e=e.dependencies)&&kl(e)&&(Wi=!0)}function ho(e,t,n,r){Za=e;var a=0;do{if(ro&&(lo=null),io=0,ro=!1,25<=a)throw Error(i(301));if(a+=1,to=eo=null,null!=e.updateQueue){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,null!=o.memoCache&&(o.memoCache.index=0)}N.H=Pi,o=t(n,r)}while(ro);return o}function mo(){var e=N.H,t=e.useState()[0];return t="function"===typeof t.then?wo(t):t,e=e.useState()[0],(null!==eo?eo.memoizedState:null)!==e&&(Za.flags|=1024),t}function go(){var e=0!==oo;return oo=0,e}function xo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function vo(e){if(no){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}no=!1}Xa=0,to=eo=Za=null,ro=!1,io=oo=0,lo=null}function bo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===to?Za.memoizedState=to=e:to=to.next=e,to}function yo(){if(null===eo){var e=Za.alternate;e=null!==e?e.memoizedState:null}else e=eo.next;var t=null===to?Za.memoizedState:to.next;if(null!==t)to=t,eo=e;else{if(null===e){if(null===Za.alternate)throw Error(i(467));throw Error(i(310))}e={memoizedState:(eo=e).memoizedState,baseState:eo.baseState,baseQueue:eo.baseQueue,queue:eo.queue,next:null},null===to?Za.memoizedState=to=e:to=to.next=e}return to}function wo(e){var t=io;return io+=1,null===lo&&(lo=[]),e=da(lo,e,t),t=Za,null===(null===to?t.memoizedState:to.next)&&(t=t.alternate,N.H=null===t||null===t.memoizedState?Ei:_i),e}function jo(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return wo(e);if(e.$$typeof===g)return Cl(e)}throw Error(i(438,String(e)))}function ko(e){var t=null,n=Za.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=Za.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map((function(e){return e.slice()})),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},Za.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=k;return t.index++,n}function So(e,t){return"function"===typeof t?t(e):t}function Co(e){return Eo(yo(),eo,e)}function Eo(e,t,n){var r=e.queue;if(null===r)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(null!==o){if(null!==a){var l=a.next;a.next=o.next,o.next=l}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,null===a)e.memoizedState=o;else{var s=l=null,c=null,u=t=a.next,d=!1;do{var p=-536870913&u.lane;if(p!==u.lane?(rc&p)===p:(Xa&p)===p){var f=u.revertLane;if(0===f)null!==c&&(c=c.next={lane:0,revertLane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),p===Wa&&(d=!0);else{if((Xa&f)===f){u=u.next,f===Wa&&(d=!0);continue}p={lane:0,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(s=c=p,l=o):c=c.next=p,Za.lanes|=f,dc|=f}p=u.action,ao&&n(o,p),o=u.hasEagerState?u.eagerState:n(o,p)}else f={lane:p,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(s=c=f,l=o):c=c.next=f,Za.lanes|=p,dc|=p;u=u.next}while(null!==u&&u!==t);if(null===c?l=o:c.next=s,!Kn(o,e.memoizedState)&&(Wi=!0,d&&null!==(n=Ha)))throw n;e.memoizedState=o,e.baseState=l,e.baseQueue=c,r.lastRenderedState=o}return null===a&&(r.lanes=0),[e.memoizedState,r.dispatch]}function _o(e){var t=yo(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(null!==a){n.pending=null;var l=a=a.next;do{o=e(o,l.action),l=l.next}while(l!==a);Kn(o,t.memoizedState)||(Wi=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Po(e,t,n){var r=Za,a=yo(),o=Gr;if(o){if(void 0===n)throw Error(i(407));n=n()}else n=t();var l=!Kn((eo||a).memoizedState,n);if(l&&(a.memoizedState=n,Wi=!0),a=a.queue,Zo(zo.bind(null,r,a,e),[e]),a.getSnapshot!==t||l||null!==to&&1&to.memoizedState.tag){if(r.flags|=2048,Ko(9,No.bind(null,r,a,n,t),{destroy:void 0},null),null===tc)throw Error(i(349));o||0!==(60&Xa)||Oo(r,t,n)}return n}function Oo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=Za.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},Za.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function No(e,t,n,r){t.value=n,t.getSnapshot=r,To(t)&&Do(e)}function zo(e,t,n){return n((function(){To(t)&&Do(e)}))}function To(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Kn(e,n)}catch(r){return!0}}function Do(e){var t=Or(e,2);null!==t&&Tc(t,e,2)}function Ao(e){var t=bo();if("function"===typeof e){var n=e;if(e=n(),ao){be(!0);try{n()}finally{be(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:So,lastRenderedState:e},t}function Lo(e,t,n,r){return e.baseState=n,Eo(e,eo,"function"===typeof r?r:So)}function Ro(e,t,n,r,a){if(ji(e))throw Error(i(485));if(null!==(e=t.action)){var o={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};null!==N.T?n(!0):o.isTransition=!1,r(o),null===(n=t.pending)?(o.next=t.pending=o,Fo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Fo(e,t){var n=t.action,r=t.payload,a=e.state;if(t.isTransition){var o=N.T,i={};N.T=i;try{var l=n(a,r),s=N.S;null!==s&&s(i,l),Io(e,t,l)}catch(c){$o(e,t,c)}finally{N.T=o}}else try{Io(e,t,o=n(a,r))}catch(u){$o(e,t,u)}}function Io(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then((function(n){Mo(e,t,n)}),(function(n){return $o(e,t,n)})):Mo(e,t,n)}function Mo(e,t,n){t.status="fulfilled",t.value=n,Bo(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,Fo(e,n)))}function $o(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,Bo(t),t=t.next}while(t!==r)}e.action=null}function Bo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Uo(e,t){return t}function Yo(e,t){if(Gr){var n=tc.formState;if(null!==n){e:{var r=Za;if(Gr){if(Qr){t:{for(var a=Qr,o=Xr;8!==a.nodeType;){if(!o){a=null;break t}if(null===(a=ld(a.nextSibling))){a=null;break t}}a="F!"===(o=a.data)||"F"===o?a:null}if(a){Qr=ld(a.nextSibling),r="F!"===a.data;break e}}ea(r)}r=!1}r&&(t=n[0])}}return(n=bo()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Uo,lastRenderedState:t},n.queue=r,n=bi.bind(null,Za,r),r.dispatch=n,r=Ao(!1),o=wi.bind(null,Za,!1,r.queue),a={state:t,dispatch:null,action:e,pending:null},(r=bo()).queue=a,n=Ro.bind(null,Za,a,o,n),a.dispatch=n,r.memoizedState=e,[t,n,!1]}function Wo(e){return Ho(yo(),eo,e)}function Ho(e,t,n){t=Eo(e,t,Uo)[0],e=Co(So)[0],t="object"===typeof t&&null!==t&&"function"===typeof t.then?wo(t):t;var r=yo(),a=r.queue,o=a.dispatch;return n!==r.memoizedState&&(Za.flags|=2048,Ko(9,qo.bind(null,a,n),{destroy:void 0},null)),[t,o,e]}function qo(e,t){e.action=t}function Vo(e){var t=yo(),n=eo;if(null!==n)return Ho(t,n,e);yo(),t=t.memoizedState;var r=(n=yo()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Ko(e,t,n,r){return e={tag:e,create:t,inst:n,deps:r,next:null},null===(t=Za.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},Za.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Qo(){return yo().memoizedState}function Go(e,t,n,r){var a=bo();Za.flags|=e,a.memoizedState=Ko(1|t,n,{destroy:void 0},void 0===r?null:r)}function Jo(e,t,n,r){var a=yo();r=void 0===r?null:r;var o=a.memoizedState.inst;null!==eo&&null!==r&&uo(r,eo.memoizedState.deps)?a.memoizedState=Ko(t,n,o,r):(Za.flags|=e,a.memoizedState=Ko(1|t,n,o,r))}function Xo(e,t){Go(8390656,8,e,t)}function Zo(e,t){Jo(2048,8,e,t)}function ei(e,t){return Jo(4,2,e,t)}function ti(e,t){return Jo(4,4,e,t)}function ni(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function ri(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,Jo(4,4,ni.bind(null,t,e),n)}function ai(){}function oi(e,t){var n=yo();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&uo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ii(e,t){var n=yo();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&uo(t,r[1]))return r[0];if(r=e(),ao){be(!0);try{e()}finally{be(!1)}}return n.memoizedState=[r,t],r}function li(e,t,n){return void 0===n||0!==(1073741824&Xa)?e.memoizedState=t:(e.memoizedState=n,e=zc(),Za.lanes|=e,dc|=e,n)}function si(e,t,n,r){return Kn(n,t)?n:null!==ka.current?(e=li(e,n,r),Kn(e,t)||(Wi=!0),e):0===(42&Xa)?(Wi=!0,e.memoizedState=n):(e=zc(),Za.lanes|=e,dc|=e,t)}function ci(e,t,n,r,a){var o=U.p;U.p=0!==o&&8>o?o:8;var i=N.T,l={};N.T=l,wi(e,!1,t,n);try{var s=a(),c=N.S;if(null!==c&&c(l,s),null!==s&&"object"===typeof s&&"function"===typeof s.then)yi(e,t,function(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then((function(){r.status="fulfilled",r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)}),(function(e){for(r.status="rejected",r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)})),r}(s,r),Nc());else yi(e,t,r,Nc())}catch(u){yi(e,t,{then:function(){},status:"rejected",reason:u},Nc())}finally{U.p=o,N.T=i}}function ui(){}function di(e,t,n,r){if(5!==e.tag)throw Error(i(476));var a=pi(e).queue;ci(e,a,t,Y,null===n?ui:function(){return fi(e),n(r)})}function pi(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:So,lastRenderedState:Y},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:So,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function fi(e){yi(e,pi(e).next.queue,{},Nc())}function hi(){return Cl(Rd)}function mi(){return yo().memoizedState}function gi(){return yo().memoizedState}function xi(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=Nc(),r=Tl(t,e=zl(n),n);return null!==r&&(Tc(r,t,n),Dl(r,t,n)),t={cache:$a()},void(e.payload=t)}t=t.return}}function vi(e,t,n){var r=Nc();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},ji(e)?ki(t,n):null!==(n=Pr(e,t,n,r))&&(Tc(n,e,r),Si(n,t,r))}function bi(e,t,n){yi(e,t,n,Nc())}function yi(e,t,n,r){var a={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(ji(e))ki(t,a);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=o(i,n);if(a.hasEagerState=!0,a.eagerState=l,Kn(l,i))return _r(e,t,a,0),null===tc&&Er(),!1}catch(s){}if(null!==(n=Pr(e,t,a,r)))return Tc(n,e,r),Si(n,t,r),!0}return!1}function wi(e,t,n,r){if(r={lane:2,revertLane:wu(),action:r,hasEagerState:!1,eagerState:null,next:null},ji(e)){if(t)throw Error(i(479))}else null!==(t=Pr(e,n,r,2))&&Tc(t,e,2)}function ji(e){var t=e.alternate;return e===Za||null!==t&&t===Za}function ki(e,t){ro=no=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Si(e,t,n){if(0!==(4194176&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Ae(e,n)}}var Ci={readContext:Cl,use:jo,useCallback:co,useContext:co,useEffect:co,useImperativeHandle:co,useLayoutEffect:co,useInsertionEffect:co,useMemo:co,useReducer:co,useRef:co,useState:co,useDebugValue:co,useDeferredValue:co,useTransition:co,useSyncExternalStore:co,useId:co};Ci.useCacheRefresh=co,Ci.useMemoCache=co,Ci.useHostTransitionStatus=co,Ci.useFormState=co,Ci.useActionState=co,Ci.useOptimistic=co;var Ei={readContext:Cl,use:jo,useCallback:function(e,t){return bo().memoizedState=[e,void 0===t?null:t],e},useContext:Cl,useEffect:Xo,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,Go(4194308,4,ni.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Go(4194308,4,e,t)},useInsertionEffect:function(e,t){Go(4,2,e,t)},useMemo:function(e,t){var n=bo();t=void 0===t?null:t;var r=e();if(ao){be(!0);try{e()}finally{be(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=bo();if(void 0!==n){var a=n(t);if(ao){be(!0);try{n(t)}finally{be(!1)}}}else a=t;return r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},r.queue=e,e=e.dispatch=vi.bind(null,Za,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},bo().memoizedState=e},useState:function(e){var t=(e=Ao(e)).queue,n=bi.bind(null,Za,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ai,useDeferredValue:function(e,t){return li(bo(),e,t)},useTransition:function(){var e=Ao(!1);return e=ci.bind(null,Za,e.queue,!0,!1),bo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=Za,a=bo();if(Gr){if(void 0===n)throw Error(i(407));n=n()}else{if(n=t(),null===tc)throw Error(i(349));0!==(60&rc)||Oo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Xo(zo.bind(null,r,o,e),[e]),r.flags|=2048,Ko(9,No.bind(null,r,o,n,t),{destroy:void 0},null),n},useId:function(){var e=bo(),t=tc.identifierPrefix;if(Gr){var n=Yr;t=":"+t+"R"+(n=(Ur&~(1<<32-ye(Ur)-1)).toString(32)+n),0<(n=oo++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=so++).toString(32)+":";return e.memoizedState=t},useCacheRefresh:function(){return bo().memoizedState=xi.bind(null,Za)}};Ei.useMemoCache=ko,Ei.useHostTransitionStatus=hi,Ei.useFormState=Yo,Ei.useActionState=Yo,Ei.useOptimistic=function(e){var t=bo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=wi.bind(null,Za,!0,n),n.dispatch=t,[e,t]};var _i={readContext:Cl,use:jo,useCallback:oi,useContext:Cl,useEffect:Zo,useImperativeHandle:ri,useInsertionEffect:ei,useLayoutEffect:ti,useMemo:ii,useReducer:Co,useRef:Qo,useState:function(){return Co(So)},useDebugValue:ai,useDeferredValue:function(e,t){return si(yo(),eo.memoizedState,e,t)},useTransition:function(){var e=Co(So)[0],t=yo().memoizedState;return["boolean"===typeof e?e:wo(e),t]},useSyncExternalStore:Po,useId:mi};_i.useCacheRefresh=gi,_i.useMemoCache=ko,_i.useHostTransitionStatus=hi,_i.useFormState=Wo,_i.useActionState=Wo,_i.useOptimistic=function(e,t){return Lo(yo(),0,e,t)};var Pi={readContext:Cl,use:jo,useCallback:oi,useContext:Cl,useEffect:Zo,useImperativeHandle:ri,useInsertionEffect:ei,useLayoutEffect:ti,useMemo:ii,useReducer:_o,useRef:Qo,useState:function(){return _o(So)},useDebugValue:ai,useDeferredValue:function(e,t){var n=yo();return null===eo?li(n,e,t):si(n,eo.memoizedState,e,t)},useTransition:function(){var e=_o(So)[0],t=yo().memoizedState;return["boolean"===typeof e?e:wo(e),t]},useSyncExternalStore:Po,useId:mi};function Oi(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:z({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}Pi.useCacheRefresh=gi,Pi.useMemoCache=ko,Pi.useHostTransitionStatus=hi,Pi.useFormState=Vo,Pi.useActionState=Vo,Pi.useOptimistic=function(e,t){var n=yo();return null!==eo?Lo(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])};var Ni={isMounted:function(e){return!!(e=e._reactInternals)&&F(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Nc(),a=zl(r);a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=Tl(e,a,r))&&(Tc(t,e,r),Dl(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Nc(),a=zl(r);a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=Tl(e,a,r))&&(Tc(t,e,r),Dl(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Nc(),r=zl(n);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=Tl(e,r,n))&&(Tc(t,e,n),Dl(t,e,n))}};function zi(e,t,n,r,a,o,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,i):!t.prototype||!t.prototype.isPureReactComponent||(!Qn(n,r)||!Qn(a,o))}function Ti(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ni.enqueueReplaceState(t,t.state,null)}function Di(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var a in n===t&&(n=z({},n)),e)void 0===n[a]&&(n[a]=e[a]);return n}var Ai="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function Li(e){Ai(e)}function Ri(e){console.error(e)}function Fi(e){Ai(e)}function Ii(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout((function(){throw n}))}}function Mi(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout((function(){throw r}))}}function $i(e,t,n){return(n=zl(n)).tag=3,n.payload={element:null},n.callback=function(){Ii(e,t)},n}function Bi(e){return(e=zl(e)).tag=3,e}function Ui(e,t,n,r){var a=n.type.getDerivedStateFromError;if("function"===typeof a){var o=r.value;e.payload=function(){return a(o)},e.callback=function(){Mi(t,n,r)}}var i=n.stateNode;null!==i&&"function"===typeof i.componentDidCatch&&(e.callback=function(){Mi(t,n,r),"function"!==typeof a&&(null===jc?jc=new Set([this]):jc.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var Yi=Error(i(461)),Wi=!1;function Hi(e,t,n,r){t.child=null===e?ja(t,null,n,r):wa(t,e.child,n,r)}function qi(e,t,n,r,a){n=n.render;var o=t.ref;if("ref"in r){var i={};for(var l in r)"ref"!==l&&(i[l]=r[l])}else i=r;return Sl(t),r=po(e,t,n,i,o,a),l=go(),null===e||Wi?(Gr&&l&&qr(t),t.flags|=1,Hi(e,t,r,a),t.child):(xo(e,t,a),pl(e,t,a))}function Vi(e,t,n,r,a){if(null===e){var o=n.type;return"function"!==typeof o||Rs(o)||void 0!==o.defaultProps||null!==n.compare?((e=Ms(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Ki(e,t,o,r,a))}if(o=e.child,!fl(e,a)){var i=o.memoizedProps;if((n=null!==(n=n.compare)?n:Qn)(i,r)&&e.ref===t.ref)return pl(e,t,a)}return t.flags|=1,(e=Fs(o,r)).ref=t.ref,e.return=t,t.child=e}function Ki(e,t,n,r,a){if(null!==e){var o=e.memoizedProps;if(Qn(o,r)&&e.ref===t.ref){if(Wi=!1,t.pendingProps=r=o,!fl(e,a))return t.lanes=e.lanes,pl(e,t,a);0!==(131072&e.flags)&&(Wi=!0)}}return Xi(e,t,n,r,a)}function Qi(e,t,n){var r=t.pendingProps,a=r.children,o=0!==(2&t.stateNode._pendingVisibility),i=null!==e?e.memoizedState:null;if(Ji(e,t),"hidden"===r.mode||o){if(0!==(128&t.flags)){if(r=null!==i?i.baseLanes|n:n,null!==e){for(a=t.child=e.child,o=0;null!==a;)o=o|a.lanes|a.childLanes,a=a.sibling;t.childLanes=o&~r}else t.childLanes=0,t.child=null;return Gi(e,t,r,n)}if(0===(536870912&n))return t.lanes=t.childLanes=536870912,Gi(e,t,null!==i?i.baseLanes|n:n,n);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Ga(0,null!==i?i.cachePool:null),null!==i?Ca(t,i):Ea(),za(t)}else null!==i?(Ga(0,i.cachePool),Ca(t,i),Ta(),t.memoizedState=null):(null!==e&&Ga(0,null),Ea(),Ta());return Hi(e,t,a,n),t.child}function Gi(e,t,n,r){var a=Qa();return a=null===a?null:{parent:Ma._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},null!==e&&Ga(0,null),Ea(),za(t),null!==e&&jl(e,t,r,!0),null}function Ji(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=2097664);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(i(284));null!==e&&e.ref===n||(t.flags|=2097664)}}function Xi(e,t,n,r,a){return Sl(t),n=po(e,t,n,r,void 0,a),r=go(),null===e||Wi?(Gr&&r&&qr(t),t.flags|=1,Hi(e,t,n,a),t.child):(xo(e,t,a),pl(e,t,a))}function Zi(e,t,n,r,a,o){return Sl(t),t.updateQueue=null,n=ho(t,r,n,a),fo(e),r=go(),null===e||Wi?(Gr&&r&&qr(t),t.flags|=1,Hi(e,t,n,o),t.child):(xo(e,t,o),pl(e,t,o))}function el(e,t,n,r,a){if(Sl(t),null===t.stateNode){var o=Tr,i=n.contextType;"object"===typeof i&&null!==i&&(o=Cl(i)),o=new n(r,o),t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,o.updater=Ni,t.stateNode=o,o._reactInternals=t,(o=t.stateNode).props=r,o.state=t.memoizedState,o.refs={},Ol(t),i=n.contextType,o.context="object"===typeof i&&null!==i?Cl(i):Tr,o.state=t.memoizedState,"function"===typeof(i=n.getDerivedStateFromProps)&&(Oi(t,n,i,r),o.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(i=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),i!==o.state&&Ni.enqueueReplaceState(o,o.state,null),Fl(t,r,o,a),Rl(),o.state=t.memoizedState),"function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){o=t.stateNode;var l=t.memoizedProps,s=Di(n,l);o.props=s;var c=o.context,u=n.contextType;i=Tr,"object"===typeof u&&null!==u&&(i=Cl(u));var d=n.getDerivedStateFromProps;u="function"===typeof d||"function"===typeof o.getSnapshotBeforeUpdate,l=t.pendingProps!==l,u||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l||c!==i)&&Ti(t,o,r,i),Pl=!1;var p=t.memoizedState;o.state=p,Fl(t,r,o,a),Rl(),c=t.memoizedState,l||p!==c||Pl?("function"===typeof d&&(Oi(t,n,d,r),c=t.memoizedState),(s=Pl||zi(t,n,s,r,p,c,i))?(u||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=i,r=s):("function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Nl(e,t),u=Di(n,i=t.memoizedProps),o.props=u,d=t.pendingProps,p=o.context,c=n.contextType,s=Tr,"object"===typeof c&&null!==c&&(s=Cl(c)),(c="function"===typeof(l=n.getDerivedStateFromProps)||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(i!==d||p!==s)&&Ti(t,o,r,s),Pl=!1,p=t.memoizedState,o.state=p,Fl(t,r,o,a),Rl();var f=t.memoizedState;i!==d||p!==f||Pl||null!==e&&null!==e.dependencies&&kl(e.dependencies)?("function"===typeof l&&(Oi(t,n,l,r),f=t.memoizedState),(u=Pl||zi(t,n,u,r,p,f,s)||null!==e&&null!==e.dependencies&&kl(e.dependencies))?(c||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(r,f,s),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,f,s)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=f),o.props=r,o.state=f,o.context=s,r=u):("function"!==typeof o.componentDidUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return o=r,Ji(e,t),r=0!==(128&t.flags),o||r?(o=t.stateNode,n=r&&"function"!==typeof n.getDerivedStateFromError?null:o.render(),t.flags|=1,null!==e&&r?(t.child=wa(t,e.child,null,a),t.child=wa(t,null,n,a)):Hi(e,t,n,a),t.memoizedState=o.state,e=t.child):e=pl(e,t,a),e}function tl(e,t,n,r){return aa(),t.flags|=256,Hi(e,t,n,r),t.child}var nl={dehydrated:null,treeContext:null,retryLane:0};function rl(e){return{baseLanes:e,cachePool:Ja()}}function al(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=hc),e}function ol(e,t,n){var r,a=t.pendingProps,o=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&Aa.current)),r&&(o=!0,t.flags&=-129),r=0!==(32&t.flags),t.flags&=-33,null===e){if(Gr){if(o?Na(t):Ta(),Gr){var s,c=Qr;if(s=c){e:{for(s=c,c=Xr;8!==s.nodeType;){if(!c){c=null;break e}if(null===(s=ld(s.nextSibling))){c=null;break e}}c=s}null!==c?(t.memoizedState={dehydrated:c,treeContext:null!==Br?{id:Ur,overflow:Yr}:null,retryLane:536870912},(s=Ls(18,null,null,0)).stateNode=c,s.return=t,t.child=s,Kr=t,Qr=null,s=!0):s=!1}s||ea(t)}if(null!==(c=t.memoizedState)&&null!==(c=c.dehydrated))return"$!"===c.data?t.lanes=16:t.lanes=536870912,null;Da(t)}return c=a.children,a=a.fallback,o?(Ta(),c=ll({mode:"hidden",children:c},o=t.mode),a=$s(a,o,n,null),c.return=t,a.return=t,c.sibling=a,t.child=c,(o=t.child).memoizedState=rl(n),o.childLanes=al(e,r,n),t.memoizedState=nl,a):(Na(t),il(t,c))}if(null!==(s=e.memoizedState)&&null!==(c=s.dehydrated)){if(l)256&t.flags?(Na(t),t.flags&=-257,t=sl(e,t,n)):null!==t.memoizedState?(Ta(),t.child=e.child,t.flags|=128,t=null):(Ta(),o=a.fallback,c=t.mode,a=ll({mode:"visible",children:a.children},c),(o=$s(o,c,n,null)).flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,wa(t,e.child,null,n),(a=t.child).memoizedState=rl(n),a.childLanes=al(e,r,n),t.memoizedState=nl,t=o);else if(Na(t),"$!"===c.data){if(r=c.nextSibling&&c.nextSibling.dataset)var u=r.dgst;r=u,(a=Error(i(419))).stack="",a.digest=r,oa({value:a,source:null,stack:null}),t=sl(e,t,n)}else if(Wi||jl(e,t,n,!1),r=0!==(n&e.childLanes),Wi||r){if(null!==(r=tc)){if(0!==(42&(a=n&-n)))a=1;else switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=64;break;case 268435456:a=134217728;break;default:a=0}if(0!==(a=0!==(a&(r.suspendedLanes|n))?0:a)&&a!==s.retryLane)throw s.retryLane=a,Or(e,a),Tc(r,e,a),Yi}"$?"===c.data||Wc(),t=sl(e,t,n)}else"$?"===c.data?(t.flags|=128,t.child=e.child,t=lu.bind(null,e),c._reactRetry=t,t=null):(e=s.treeContext,Qr=ld(c.nextSibling),Kr=t,Gr=!0,Jr=null,Xr=!1,null!==e&&(Mr[$r++]=Ur,Mr[$r++]=Yr,Mr[$r++]=Br,Ur=e.id,Yr=e.overflow,Br=t),(t=il(t,a.children)).flags|=4096);return t}return o?(Ta(),o=a.fallback,c=t.mode,u=(s=e.child).sibling,(a=Fs(s,{mode:"hidden",children:a.children})).subtreeFlags=31457280&s.subtreeFlags,null!==u?o=Fs(u,o):(o=$s(o,c,n,null)).flags|=2,o.return=t,a.return=t,a.sibling=o,t.child=a,a=o,o=t.child,null===(c=e.child.memoizedState)?c=rl(n):(null!==(s=c.cachePool)?(u=Ma._currentValue,s=s.parent!==u?{parent:u,pool:u}:s):s=Ja(),c={baseLanes:c.baseLanes|n,cachePool:s}),o.memoizedState=c,o.childLanes=al(e,r,n),t.memoizedState=nl,a):(Na(t),e=(n=e.child).sibling,(n=Fs(n,{mode:"visible",children:a.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function il(e,t){return(t=ll({mode:"visible",children:t},e.mode)).return=e,e.child=t}function ll(e,t){return Bs(e,t,0,null)}function sl(e,t,n){return wa(t,e.child,null,n),(e=il(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function cl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),yl(e.return,t,n)}function ul(e,t,n,r,a){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=a)}function dl(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;if(Hi(e,t,r.children,n),0!==(2&(r=Aa.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&cl(e,n,t);else if(19===e.tag)cl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(K(Aa,r),a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===La(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),ul(t,!1,a,n,o);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===La(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}ul(t,!0,n,null,o);break;case"together":ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function pl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),dc|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(jl(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(n=Fs(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Fs(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function fl(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!kl(e))}function hl(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)Wi=!0;else{if(!fl(e,n)&&0===(128&t.flags))return Wi=!1,function(e,t,n){switch(t.tag){case 3:Z(t,t.stateNode.containerInfo),vl(t,Ma,e.memoizedState.cache),aa();break;case 27:case 5:te(t);break;case 4:Z(t,t.stateNode.containerInfo);break;case 10:vl(t,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(null!==r)return null!==r.dehydrated?(Na(t),t.flags|=128,null):0!==(n&t.child.childLanes)?ol(e,t,n):(Na(t),null!==(e=pl(e,t,n))?e.sibling:null);Na(t);break;case 19:var a=0!==(128&e.flags);if((r=0!==(n&t.childLanes))||(jl(e,t,n,!1),r=0!==(n&t.childLanes)),a){if(r)return dl(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),K(Aa,Aa.current),r)break;return null;case 22:case 23:return t.lanes=0,Qi(e,t,n);case 24:vl(t,Ma,e.memoizedState.cache)}return pl(e,t,n)}(e,t,n);Wi=0!==(131072&e.flags)}else Wi=!1,Gr&&0!==(1048576&t.flags)&&Hr(t,Ir,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var r=t.elementType,a=r._init;if(r=a(r._payload),t.type=r,"function"!==typeof r){if(void 0!==r&&null!==r){if((a=r.$$typeof)===x){t.tag=11,t=qi(null,t,r,e,n);break e}if(a===y){t.tag=14,t=Vi(null,t,r,e,n);break e}}throw t=_(r)||r,Error(i(306,t,""))}Rs(r)?(e=Di(r,e),t.tag=1,t=el(null,t,r,e,n)):(t.tag=0,t=Xi(null,t,r,e,n))}return t;case 0:return Xi(e,t,t.type,t.pendingProps,n);case 1:return el(e,t,r=t.type,a=Di(r,t.pendingProps),n);case 3:e:{if(Z(t,t.stateNode.containerInfo),null===e)throw Error(i(387));var o=t.pendingProps;r=(a=t.memoizedState).element,Nl(e,t),Fl(t,o,null,n);var l=t.memoizedState;if(o=l.cache,vl(t,Ma,o),o!==a.cache&&wl(t,[Ma],n,!0),Rl(),o=l.element,a.isDehydrated){if(a={element:o,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=tl(e,t,o,n);break e}if(o!==r){oa(r=Ar(Error(i(424)),t)),t=tl(e,t,o,n);break e}for(Qr=ld(t.stateNode.containerInfo.firstChild),Kr=t,Gr=!0,Jr=null,Xr=!0,n=ja(t,null,o,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(aa(),o===r){t=pl(e,t,n);break e}Hi(e,t,o,n)}t=t.child}return t;case 26:return Ji(e,t),null===e?(n=gd(t.type,null,t.pendingProps,null))?t.memoizedState=n:Gr||(n=t.type,e=t.pendingProps,(r=Qu(J.current).createElement(n))[Ie]=t,r[Me]=e,qu(r,n,e),Je(r),t.stateNode=r):t.memoizedState=gd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return te(t),null===e&&Gr&&(r=t.stateNode=cd(t.type,t.pendingProps,J.current),Kr=t,Xr=!0,Qr=ld(r.firstChild)),r=t.pendingProps.children,null!==e||Gr?Hi(e,t,r,n):t.child=wa(t,null,r,n),Ji(e,t),t.child;case 5:return null===e&&Gr&&((a=r=Qr)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[He])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(o=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(o!==a.rel||e.getAttribute("href")!==(null==a.href?null:a.href)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin)||e.getAttribute("title")!==(null==a.title?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((o=e.getAttribute("src"))!==(null==a.src?null:a.src)||e.getAttribute("type")!==(null==a.type?null:a.type)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var o=null==a.name?null:""+a.name;if("hidden"===a.type&&e.getAttribute("name")===o)return e}if(null===(e=ld(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,Xr))?(t.stateNode=r,Kr=t,Qr=ld(r.firstChild),Xr=!1,a=!0):a=!1),a||ea(t)),te(t),a=t.type,o=t.pendingProps,l=null!==e?e.memoizedProps:null,r=o.children,Xu(a,o)?r=null:null!==l&&Xu(a,l)&&(t.flags|=32),null!==t.memoizedState&&(a=po(e,t,mo,null,null,n),Rd._currentValue=a),Ji(e,t),Hi(e,t,r,n),t.child;case 6:return null===e&&Gr&&((e=n=Qr)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=ld(e.nextSibling)))return null}return e}(n,t.pendingProps,Xr))?(t.stateNode=n,Kr=t,Qr=null,e=!0):e=!1),e||ea(t)),null;case 13:return ol(e,t,n);case 4:return Z(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wa(t,null,r,n):Hi(e,t,r,n),t.child;case 11:return qi(e,t,t.type,t.pendingProps,n);case 7:return Hi(e,t,t.pendingProps,n),t.child;case 8:case 12:return Hi(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,vl(t,t.type,r.value),Hi(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Sl(t),r=r(a=Cl(a)),t.flags|=1,Hi(e,t,r,n),t.child;case 14:return Vi(e,t,t.type,t.pendingProps,n);case 15:return Ki(e,t,t.type,t.pendingProps,n);case 19:return dl(e,t,n);case 22:return Qi(e,t,n);case 24:return Sl(t),r=Cl(Ma),null===e?(null===(a=Qa())&&(a=tc,o=$a(),a.pooledCache=o,o.refCount++,null!==o&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ol(t),vl(t,Ma,a)):(0!==(e.lanes&n)&&(Nl(e,t),Fl(t,null,null,n),Rl()),a=e.memoizedState,o=t.memoizedState,a.parent!==r?(a={parent:r,cache:r},t.memoizedState=a,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=a),vl(t,Ma,r)):(r=o.cache,vl(t,Ma,r),r!==a.cache&&wl(t,[Ma],n,!0))),Hi(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}var ml=q(null),gl=null,xl=null;function vl(e,t,n){K(ml,t._currentValue),t._currentValue=n}function bl(e){e._currentValue=ml.current,V(ml)}function yl(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function wl(e,t,n,r){var a=e.child;for(null!==a&&(a.return=e);null!==a;){var o=a.dependencies;if(null!==o){var l=a.child;o=o.firstContext;e:for(;null!==o;){var s=o;o=a;for(var c=0;c<t.length;c++)if(s.context===t[c]){o.lanes|=n,null!==(s=o.alternate)&&(s.lanes|=n),yl(o.return,n,e),r||(l=null);break e}o=s.next}}else if(18===a.tag){if(null===(l=a.return))throw Error(i(341));l.lanes|=n,null!==(o=l.alternate)&&(o.lanes|=n),yl(l,n,e),l=null}else l=a.child;if(null!==l)l.return=a;else for(l=a;null!==l;){if(l===e){l=null;break}if(null!==(a=l.sibling)){a.return=l.return,l=a;break}l=l.return}a=l}}function jl(e,t,n,r){e=null;for(var a=t,o=!1;null!==a;){if(!o)if(0!==(524288&a.flags))o=!0;else if(0!==(262144&a.flags))break;if(10===a.tag){var l=a.alternate;if(null===l)throw Error(i(387));if(null!==(l=l.memoizedProps)){var s=a.type;Kn(a.pendingProps.value,l.value)||(null!==e?e.push(s):e=[s])}}else if(a===X.current){if(null===(l=a.alternate))throw Error(i(387));l.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(null!==e?e.push(Rd):e=[Rd])}a=a.return}null!==e&&wl(t,e,n,r),t.flags|=262144}function kl(e){for(e=e.firstContext;null!==e;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Sl(e){gl=e,xl=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function Cl(e){return _l(gl,e)}function El(e,t){return null===gl&&Sl(e),_l(e,t)}function _l(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===xl){if(null===e)throw Error(i(308));xl=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else xl=xl.next=t;return n}var Pl=!1;function Ol(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function zl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Tl(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&ec)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,t=zr(e),Nr(e,null,n),t}return _r(e,r,t,n),zr(e)}function Dl(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194176&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Ae(e,n)}}function Al(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var i={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===o?a=o=i:o=o.next=i,n=n.next}while(null!==n);null===o?a=o=t:o=o.next=t}else a=o=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ll=!1;function Rl(){if(Ll){if(null!==Ha)throw Ha}}function Fl(e,t,n,r){Ll=!1;var a=e.updateQueue;Pl=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,c=s.next;s.next=null,null===i?o=c:i.next=c,i=s;var u=e.alternate;null!==u&&((l=(u=u.updateQueue).lastBaseUpdate)!==i&&(null===l?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(null!==o){var d=a.baseState;for(i=0,u=c=s=null,l=o;;){var p=-536870913&l.lane,f=p!==l.lane;if(f?(rc&p)===p:(r&p)===p){0!==p&&p===Wa&&(Ll=!0),null!==u&&(u=u.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var h=e,m=l;p=t;var g=n;switch(m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(g,d,p);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(p="function"===typeof(h=m.payload)?h.call(g,d,p):h)||void 0===p)break e;d=z({},d,p);break e;case 2:Pl=!0}}null!==(p=l.callback)&&(e.flags|=64,f&&(e.flags|=8192),null===(f=a.callbacks)?a.callbacks=[p]:f.push(p))}else f={lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===u?(c=u=f,s=d):u=u.next=f,i|=p;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(f=l).next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}null===u&&(s=d),a.baseState=s,a.firstBaseUpdate=c,a.lastBaseUpdate=u,null===o&&(a.shared.lanes=0),dc|=i,e.lanes=i,e.memoizedState=d}}function Il(e,t){if("function"!==typeof e)throw Error(i(191,e));e.call(t)}function Ml(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)Il(n[e],t)}function $l(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var a=r.next;n=a;do{if((n.tag&e)===e){r=void 0;var o=n.create,i=n.inst;r=o(),i.destroy=r}n=n.next}while(n!==a)}}catch(l){ru(t,t.return,l)}}function Bl(e,t,n){try{var r=t.updateQueue,a=null!==r?r.lastEffect:null;if(null!==a){var o=a.next;r=o;do{if((r.tag&e)===e){var i=r.inst,l=i.destroy;if(void 0!==l){i.destroy=void 0,a=t;var s=n;try{l()}catch(c){ru(a,s,c)}}}r=r.next}while(r!==o)}}catch(c){ru(t,t.return,c)}}function Ul(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{Ml(t,n)}catch(r){ru(e,e.return,r)}}}function Yl(e,t,n){n.props=Di(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){ru(e,t,r)}}function Wl(e,t){try{var n=e.ref;if(null!==n){var r=e.stateNode;switch(e.tag){case 26:case 27:case 5:var a=r;break;default:a=r}"function"===typeof n?e.refCleanup=n(a):n.current=a}}catch(o){ru(e,t,o)}}function Hl(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"===typeof r)try{r()}catch(a){ru(e,t,a)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(o){ru(e,t,o)}else n.current=null}function ql(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(a){ru(e,e.return,a)}}function Vl(e,t,n){try{var r=e.stateNode;!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,o=null,l=null,s=null,c=null,u=null,d=null;for(h in n){var p=n[h];if(n.hasOwnProperty(h)&&null!=p)switch(h){case"checked":case"value":break;case"defaultValue":c=p;default:r.hasOwnProperty(h)||Wu(e,t,h,null,r,p)}}for(var f in r){var h=r[f];if(p=n[f],r.hasOwnProperty(f)&&(null!=h||null!=p))switch(f){case"type":o=h;break;case"name":a=h;break;case"checked":u=h;break;case"defaultChecked":d=h;break;case"value":l=h;break;case"defaultValue":s=h;break;case"children":case"dangerouslySetInnerHTML":if(null!=h)throw Error(i(137,t));break;default:h!==p&&Wu(e,t,f,h,r,p)}}return void gt(e,l,s,c,u,d,o,a);case"select":for(o in h=l=s=f=null,n)if(c=n[o],n.hasOwnProperty(o)&&null!=c)switch(o){case"value":break;case"multiple":h=c;default:r.hasOwnProperty(o)||Wu(e,t,o,null,r,c)}for(a in r)if(o=r[a],c=n[a],r.hasOwnProperty(a)&&(null!=o||null!=c))switch(a){case"value":f=o;break;case"defaultValue":s=o;break;case"multiple":l=o;default:o!==c&&Wu(e,t,a,o,r,c)}return t=s,n=l,r=h,void(null!=f?bt(e,!!n,f,!1):!!r!==!!n&&(null!=t?bt(e,!!n,t,!0):bt(e,!!n,n?[]:"",!1)));case"textarea":for(s in h=f=null,n)if(a=n[s],n.hasOwnProperty(s)&&null!=a&&!r.hasOwnProperty(s))switch(s){case"value":case"children":break;default:Wu(e,t,s,null,r,a)}for(l in r)if(a=r[l],o=n[l],r.hasOwnProperty(l)&&(null!=a||null!=o))switch(l){case"value":f=a;break;case"defaultValue":h=a;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=a)throw Error(i(91));break;default:a!==o&&Wu(e,t,l,a,r,o)}return void yt(e,f,h);case"option":for(var m in n)if(f=n[m],n.hasOwnProperty(m)&&null!=f&&!r.hasOwnProperty(m))if("selected"===m)e.selected=!1;else Wu(e,t,m,null,r,f);for(c in r)if(f=r[c],h=n[c],r.hasOwnProperty(c)&&f!==h&&(null!=f||null!=h))if("selected"===c)e.selected=f&&"function"!==typeof f&&"symbol"!==typeof f;else Wu(e,t,c,f,r,h);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)f=n[g],n.hasOwnProperty(g)&&null!=f&&!r.hasOwnProperty(g)&&Wu(e,t,g,null,r,f);for(u in r)if(f=r[u],h=n[u],r.hasOwnProperty(u)&&f!==h&&(null!=f||null!=h))switch(u){case"children":case"dangerouslySetInnerHTML":if(null!=f)throw Error(i(137,t));break;default:Wu(e,t,u,f,r,h)}return;default:if(Et(t)){for(var x in n)f=n[x],n.hasOwnProperty(x)&&void 0!==f&&!r.hasOwnProperty(x)&&Hu(e,t,x,void 0,r,f);for(d in r)f=r[d],h=n[d],!r.hasOwnProperty(d)||f===h||void 0===f&&void 0===h||Hu(e,t,d,f,r,h);return}}for(var v in n)f=n[v],n.hasOwnProperty(v)&&null!=f&&!r.hasOwnProperty(v)&&Wu(e,t,v,null,r,f);for(p in r)f=r[p],h=n[p],!r.hasOwnProperty(p)||f===h||null==f&&null==h||Wu(e,t,p,f,r,h)}(r,e.type,n,t),r[Me]=t}catch(a){ru(e,e.return,a)}}function Kl(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag||4===e.tag}function Ql(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||Kl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&27!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function Gl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Yu));else if(4!==r&&27!==r&&null!==(e=e.child))for(Gl(e,t,n),e=e.sibling;null!==e;)Gl(e,t,n),e=e.sibling}function Jl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&27!==r&&null!==(e=e.child))for(Jl(e,t,n),e=e.sibling;null!==e;)Jl(e,t,n),e=e.sibling}var Xl=!1,Zl=!1,es=!1,ts="function"===typeof WeakSet?WeakSet:Set,ns=null,rs=!1;function as(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xs(e,n),4&r&&$l(5,n);break;case 1:if(xs(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(l){ru(n,n.return,l)}else{var a=Di(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){ru(n,n.return,s)}}64&r&&Ul(n),512&r&&Wl(n,n.return);break;case 3:if(xs(e,n),64&r&&null!==(r=n.updateQueue)){if(e=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:e=n.child.stateNode}try{Ml(r,e)}catch(l){ru(n,n.return,l)}}break;case 26:xs(e,n),512&r&&Wl(n,n.return);break;case 27:case 5:xs(e,n),null===t&&4&r&&ql(n),512&r&&Wl(n,n.return);break;case 12:default:xs(e,n);break;case 13:xs(e,n),4&r&&us(e,n);break;case 22:if(!(a=null!==n.memoizedState||Xl)){t=null!==t&&null!==t.memoizedState||Zl;var o=Xl,i=Zl;Xl=a,(Zl=t)&&!i?bs(e,n,0!==(8772&n.subtreeFlags)):xs(e,n),Xl=o,Zl=i}512&r&&("manual"===n.memoizedProps.mode?Wl(n,n.return):Hl(n,n.return))}}function os(e){var t=e.alternate;null!==t&&(e.alternate=null,os(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&qe(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var is=null,ls=!1;function ss(e,t,n){for(n=n.child;null!==n;)cs(e,t,n),n=n.sibling}function cs(e,t,n){if(ve&&"function"===typeof ve.onCommitFiberUnmount)try{ve.onCommitFiberUnmount(xe,n)}catch(i){}switch(n.tag){case 26:Zl||Hl(n,t),ss(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:Zl||Hl(n,t);var r=is,a=ls;for(is=n.stateNode,ss(e,t,n),t=(n=n.stateNode).attributes;t.length;)n.removeAttributeNode(t[0]);qe(n),is=r,ls=a;break;case 5:Zl||Hl(n,t);case 6:a=is;var o=ls;if(is=null,ss(e,t,n),ls=o,null!==(is=a))if(ls)try{e=is,r=n.stateNode,8===e.nodeType?e.parentNode.removeChild(r):e.removeChild(r)}catch(l){ru(n,t,l)}else try{is.removeChild(n.stateNode)}catch(l){ru(n,t,l)}break;case 18:null!==is&&(ls?(t=is,n=n.stateNode,8===t.nodeType?od(t.parentNode,n):1===t.nodeType&&od(t,n),mp(t)):od(is,n.stateNode));break;case 4:r=is,a=ls,is=n.stateNode.containerInfo,ls=!0,ss(e,t,n),is=r,ls=a;break;case 0:case 11:case 14:case 15:Zl||Bl(2,n,t),Zl||Bl(4,n,t),ss(e,t,n);break;case 1:Zl||(Hl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount&&Yl(n,t,r)),ss(e,t,n);break;case 21:ss(e,t,n);break;case 22:Zl||Hl(n,t),Zl=(r=Zl)||null!==n.memoizedState,ss(e,t,n),Zl=r;break;default:ss(e,t,n)}}function us(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{mp(e)}catch(n){ru(t,t.return,n)}}function ds(e,t){var n=function(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new ts),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new ts),t;default:throw Error(i(435,e.tag))}}(e);t.forEach((function(t){var r=su.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}function ps(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r],o=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 27:case 5:is=s.stateNode,ls=!1;break e;case 3:case 4:is=s.stateNode.containerInfo,ls=!0;break e}s=s.return}if(null===is)throw Error(i(160));cs(o,l,a),is=null,ls=!1,null!==(o=a.alternate)&&(o.return=null),a.return=null}if(13878&t.subtreeFlags)for(t=t.child;null!==t;)hs(t,e),t=t.sibling}var fs=null;function hs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ps(t,e),ms(e),4&r&&(Bl(3,e,e.return),$l(3,e),Bl(5,e,e.return));break;case 1:ps(t,e),ms(e),512&r&&(Zl||null===n||Hl(n,n.return)),64&r&&Xl&&(null!==(e=e.updateQueue)&&(null!==(r=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?r:n.concat(r))));break;case 26:var a=fs;if(ps(t,e),ms(e),512&r&&(Zl||null===n||Hl(n,n.return)),4&r){var o=null!==n?n.memoizedState:null;if(r=e.memoizedState,null===n)if(null===r)if(null===e.stateNode){e:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(r){case"title":(!(o=a.getElementsByTagName("title")[0])||o[He]||o[Ie]||"http://www.w3.org/2000/svg"===o.namespaceURI||o.hasAttribute("itemprop"))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector("head > title"))),qu(o,r,n),o[Ie]=e,Je(o),r=o;break e;case"link":var l=_d("link","href",a).get(r+(n.href||""));if(l)for(var s=0;s<l.length;s++)if((o=l[s]).getAttribute("href")===(null==n.href?null:n.href)&&o.getAttribute("rel")===(null==n.rel?null:n.rel)&&o.getAttribute("title")===(null==n.title?null:n.title)&&o.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){l.splice(s,1);break t}qu(o=a.createElement(r),r,n),a.head.appendChild(o);break;case"meta":if(l=_d("meta","content",a).get(r+(n.content||"")))for(s=0;s<l.length;s++)if((o=l[s]).getAttribute("content")===(null==n.content?null:""+n.content)&&o.getAttribute("name")===(null==n.name?null:n.name)&&o.getAttribute("property")===(null==n.property?null:n.property)&&o.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&o.getAttribute("charset")===(null==n.charSet?null:n.charSet)){l.splice(s,1);break t}qu(o=a.createElement(r),r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[Ie]=e,Je(o),r=o}e.stateNode=r}else Pd(a,e.type,e.stateNode);else e.stateNode=jd(a,r,e.memoizedProps);else o!==r?(null===o?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):o.count--,null===r?Pd(a,e.type,e.stateNode):jd(a,r,e.memoizedProps)):null===r&&null!==e.stateNode&&Vl(e,e.memoizedProps,n.memoizedProps)}break;case 27:if(4&r&&null===e.alternate){a=e.stateNode,o=e.memoizedProps;try{for(var c=a.firstChild;c;){var u=c.nextSibling,d=c.nodeName;c[He]||"HEAD"===d||"BODY"===d||"SCRIPT"===d||"STYLE"===d||"LINK"===d&&"stylesheet"===c.rel.toLowerCase()||a.removeChild(c),c=u}for(var p=e.type,f=a.attributes;f.length;)a.removeAttributeNode(f[0]);qu(a,p,o),a[Ie]=e,a[Me]=o}catch(m){ru(e,e.return,m)}}case 5:if(ps(t,e),ms(e),512&r&&(Zl||null===n||Hl(n,n.return)),32&e.flags){a=e.stateNode;try{jt(a,"")}catch(m){ru(e,e.return,m)}}4&r&&null!=e.stateNode&&Vl(e,a=e.memoizedProps,null!==n?n.memoizedProps:a),1024&r&&(es=!0);break;case 6:if(ps(t,e),ms(e),4&r){if(null===e.stateNode)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(m){ru(e,e.return,m)}}break;case 3:if(Ed=null,a=fs,fs=pd(t.containerInfo),ps(t,e),fs=a,ms(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{mp(t.containerInfo)}catch(m){ru(e,e.return,m)}es&&(es=!1,gs(e));break;case 4:r=fs,fs=pd(e.stateNode.containerInfo),ps(t,e),ms(e),fs=r;break;case 12:ps(t,e),ms(e);break;case 13:ps(t,e),ms(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==n&&null!==n.memoizedState)&&(bc=se()),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,ds(e,r)));break;case 22:if(512&r&&(Zl||null===n||Hl(n,n.return)),c=null!==e.memoizedState,u=null!==n&&null!==n.memoizedState,Xl=(d=Xl)||c,Zl=(p=Zl)||u,ps(t,e),Zl=p,Xl=d,ms(e),(t=e.stateNode)._current=e,t._visibility&=-3,t._visibility|=2&t._pendingVisibility,8192&r&&(t._visibility=c?-2&t._visibility:1|t._visibility,c&&(t=Xl||Zl,null===n||u||t||vs(e)),null===e.memoizedProps||"manual"!==e.memoizedProps.mode))e:for(n=null,t=e;;){if(5===t.tag||26===t.tag||27===t.tag){if(null===n){u=n=t;try{if(a=u.stateNode,c)"function"===typeof(o=a.style).setProperty?o.setProperty("display","none","important"):o.display="none";else{l=u.stateNode;var h=void 0!==(s=u.memoizedProps.style)&&null!==s&&s.hasOwnProperty("display")?s.display:null;l.style.display=null==h||"boolean"===typeof h?"":(""+h).trim()}}catch(m){ru(u,u.return,m)}}}else if(6===t.tag){if(null===n){u=t;try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(m){ru(u,u.return,m)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&r&&(null!==(r=e.updateQueue)&&(null!==(n=r.retryQueue)&&(r.retryQueue=null,ds(e,n))));break;case 19:ps(t,e),ms(e),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,ds(e,r)));break;case 21:break;default:ps(t,e),ms(e)}}function ms(e){var t=e.flags;if(2&t){try{if(27!==e.tag){e:{for(var n=e.return;null!==n;){if(Kl(n)){var r=n;break e}n=n.return}throw Error(i(160))}switch(r.tag){case 27:var a=r.stateNode;Jl(e,Ql(e),a);break;case 5:var o=r.stateNode;32&r.flags&&(jt(o,""),r.flags&=-33),Jl(e,Ql(e),o);break;case 3:case 4:var l=r.stateNode.containerInfo;Gl(e,Ql(e),l);break;default:throw Error(i(161))}}}catch(s){ru(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function gs(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;gs(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function xs(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)as(e,t.alternate,t),t=t.sibling}function vs(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Bl(4,t,t.return),vs(t);break;case 1:Hl(t,t.return);var n=t.stateNode;"function"===typeof n.componentWillUnmount&&Yl(t,t.return,n),vs(t);break;case 26:case 27:case 5:Hl(t,t.return),vs(t);break;case 22:Hl(t,t.return),null===t.memoizedState&&vs(t);break;default:vs(t)}e=e.sibling}}function bs(e,t,n){for(n=n&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,a=e,o=t,i=o.flags;switch(o.tag){case 0:case 11:case 15:bs(a,o,n),$l(4,o);break;case 1:if(bs(a,o,n),"function"===typeof(a=(r=o).stateNode).componentDidMount)try{a.componentDidMount()}catch(c){ru(r,r.return,c)}if(null!==(a=(r=o).updateQueue)){var l=r.stateNode;try{var s=a.shared.hiddenCallbacks;if(null!==s)for(a.shared.hiddenCallbacks=null,a=0;a<s.length;a++)Il(s[a],l)}catch(c){ru(r,r.return,c)}}n&&64&i&&Ul(o),Wl(o,o.return);break;case 26:case 27:case 5:bs(a,o,n),n&&null===r&&4&i&&ql(o),Wl(o,o.return);break;case 12:default:bs(a,o,n);break;case 13:bs(a,o,n),n&&4&i&&us(a,o);break;case 22:null===o.memoizedState&&bs(a,o,n),Wl(o,o.return)}t=t.sibling}}function ys(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&Ba(n))}function ws(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Ba(e))}function js(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)ks(e,t,n,r),t=t.sibling}function ks(e,t,n,r){var a=t.flags;switch(t.tag){case 0:case 11:case 15:js(e,t,n,r),2048&a&&$l(9,t);break;case 3:js(e,t,n,r),2048&a&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Ba(e)));break;case 12:if(2048&a){js(e,t,n,r),e=t.stateNode;try{var o=t.memoizedProps,i=o.id,l=o.onPostCommit;"function"===typeof l&&l(i,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(s){ru(t,t.return,s)}}else js(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,null!==t.memoizedState?4&o._visibility?js(e,t,n,r):Cs(e,t):4&o._visibility?js(e,t,n,r):(o._visibility|=4,Ss(e,t,n,r,0!==(10256&t.subtreeFlags))),2048&a&&ys(t.alternate,t);break;case 24:js(e,t,n,r),2048&a&&ws(t.alternate,t);break;default:js(e,t,n,r)}}function Ss(e,t,n,r,a){for(a=a&&0!==(10256&t.subtreeFlags),t=t.child;null!==t;){var o=e,i=t,l=n,s=r,c=i.flags;switch(i.tag){case 0:case 11:case 15:Ss(o,i,l,s,a),$l(8,i);break;case 23:break;case 22:var u=i.stateNode;null!==i.memoizedState?4&u._visibility?Ss(o,i,l,s,a):Cs(o,i):(u._visibility|=4,Ss(o,i,l,s,a)),a&&2048&c&&ys(i.alternate,i);break;case 24:Ss(o,i,l,s,a),a&&2048&c&&ws(i.alternate,i);break;default:Ss(o,i,l,s,a)}t=t.sibling}}function Cs(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,a=r.flags;switch(r.tag){case 22:Cs(n,r),2048&a&&ys(r.alternate,r);break;case 24:Cs(n,r),2048&a&&ws(r.alternate,r);break;default:Cs(n,r)}t=t.sibling}}var Es=8192;function _s(e){if(e.subtreeFlags&Es)for(e=e.child;null!==e;)Ps(e),e=e.sibling}function Ps(e){switch(e.tag){case 26:_s(e),e.flags&Es&&null!==e.memoizedState&&function(e,t,n){if(null===Nd)throw Error(i(475));var r=Nd;if("stylesheet"===t.type&&("string"!==typeof n.media||!1!==matchMedia(n.media).matches)&&0===(4&t.state.loading)){if(null===t.instance){var a=xd(n.href),o=e.querySelector(vd(a));if(o)return null!==(e=o._p)&&"object"===typeof e&&"function"===typeof e.then&&(r.count++,r=Td.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=o,void Je(o);o=e.ownerDocument||e,n=bd(n),(a=ud.get(a))&&Sd(n,a),Je(o=o.createElement("link"));var l=o;l._p=new Promise((function(e,t){l.onload=e,l.onerror=t})),qu(o,"link",n),t.instance=o}null===r.stylesheets&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&0===(3&t.state.loading)&&(r.count++,t=Td.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}(fs,e.memoizedState,e.memoizedProps);break;case 5:default:_s(e);break;case 3:case 4:var t=fs;fs=pd(e.stateNode.containerInfo),_s(e),fs=t;break;case 22:null===e.memoizedState&&(null!==(t=e.alternate)&&null!==t.memoizedState?(t=Es,Es=16777216,_s(e),Es=t):_s(e))}}function Os(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function Ns(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];ns=r,Ds(r,e)}Os(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)zs(e),e=e.sibling}function zs(e){switch(e.tag){case 0:case 11:case 15:Ns(e),2048&e.flags&&Bl(9,e,e.return);break;case 3:case 12:default:Ns(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&4&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-5,Ts(e)):Ns(e)}}function Ts(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];ns=r,Ds(r,e)}Os(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:Bl(8,t,t.return),Ts(t);break;case 22:4&(n=t.stateNode)._visibility&&(n._visibility&=-5,Ts(t));break;default:Ts(t)}e=e.sibling}}function Ds(e,t){for(;null!==ns;){var n=ns;switch(n.tag){case 0:case 11:case 15:Bl(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:Ba(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,ns=r;else e:for(n=e;null!==ns;){var a=(r=ns).sibling,o=r.return;if(os(r),r===n){ns=null;break e}if(null!==a){a.return=o,ns=a;break e}ns=o}}}function As(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ls(e,t,n,r){return new As(e,t,n,r)}function Rs(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Fs(e,t){var n=e.alternate;return null===n?((n=Ls(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=31457280&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Is(e,t){e.flags&=31457282;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ms(e,t,n,r,a,o){var l=0;if(r=e,"function"===typeof e)Rs(e)&&(l=1);else if("string"===typeof e)l=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,Q.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case d:return $s(n.children,a,o,t);case p:l=8,a|=24;break;case f:return(e=Ls(12,n,t,2|a)).elementType=f,e.lanes=o,e;case v:return(e=Ls(13,n,t,a)).elementType=v,e.lanes=o,e;case b:return(e=Ls(19,n,t,a)).elementType=b,e.lanes=o,e;case j:return Bs(n,a,o,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case h:case g:l=10;break e;case m:l=9;break e;case x:l=11;break e;case y:l=14;break e;case w:l=16,r=null;break e}l=29,n=Error(i(130,null===e?"null":typeof e,"")),r=null}return(t=Ls(l,n,t,a)).elementType=e,t.type=r,t.lanes=o,t}function $s(e,t,n,r){return(e=Ls(7,e,r,t)).lanes=n,e}function Bs(e,t,n,r){(e=Ls(22,e,r,t)).elementType=j,e.lanes=n;var a={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var e=a._current;if(null===e)throw Error(i(456));if(0===(2&a._pendingVisibility)){var t=Or(e,2);null!==t&&(a._pendingVisibility|=2,Tc(t,e,2))}},attach:function(){var e=a._current;if(null===e)throw Error(i(456));if(0!==(2&a._pendingVisibility)){var t=Or(e,2);null!==t&&(a._pendingVisibility&=-3,Tc(t,e,2))}}};return e.stateNode=a,e}function Us(e,t,n){return(e=Ls(6,e,null,t)).lanes=n,e}function Ys(e,t,n){return(t=Ls(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ws(e){e.flags|=4}function Hs(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!Od(t)){if(null!==(t=Pa.current)&&((4194176&rc)===rc?null!==Oa:(62914560&rc)!==rc&&0===(536870912&rc)||t!==Oa))throw pa=sa,la;e.flags|=8192}}function qs(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?Ne():536870912,e.lanes|=t,mc|=t)}function Vs(e,t){if(!Gr)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ks(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=31457280&a.subtreeFlags,r|=31457280&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Qs(e,t,n){var r=t.pendingProps;switch(Vr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return Ks(t),null;case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),bl(Ma),ee(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(ra(t)?Ws(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==Jr&&(Ac(Jr),Jr=null))),Ks(t),null;case 26:return n=t.memoizedState,null===e?(Ws(t),null!==n?(Ks(t),Hs(t,n)):(Ks(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Ws(t),Ks(t),Hs(t,n)):(Ks(t),t.flags&=-16777217):(e.memoizedProps!==r&&Ws(t),Ks(t),t.flags&=-16777217),null;case 27:ne(t),n=J.current;var a=t.type;if(null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Ws(t);else{if(!r){if(null===t.stateNode)throw Error(i(166));return Ks(t),null}e=Q.current,ra(t)?ta(t):(e=cd(a,r,n),t.stateNode=e,Ws(t))}return Ks(t),null;case 5:if(ne(t),n=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Ws(t);else{if(!r){if(null===t.stateNode)throw Error(i(166));return Ks(t),null}if(e=Q.current,ra(t))ta(t);else{switch(a=Qu(J.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":(e=a.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e="string"===typeof r.is?a.createElement("select",{is:r.is}):a.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e="string"===typeof r.is?a.createElement(n,{is:r.is}):a.createElement(n)}}e[Ie]=t,e[Me]=r;e:for(a=t.child;null!==a;){if(5===a.tag||6===a.tag)e.appendChild(a.stateNode);else if(4!==a.tag&&27!==a.tag&&null!==a.child){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;null===a.sibling;){if(null===a.return||a.return===t)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e;e:switch(qu(e,n,r),n){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Ws(t)}}return Ks(t),t.flags&=-16777217,null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&Ws(t);else{if("string"!==typeof r&&null===t.stateNode)throw Error(i(166));if(e=J.current,ra(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(a=Kr))switch(a.tag){case 27:case 5:r=a.memoizedProps}e[Ie]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||Uu(e.nodeValue,n)))||ea(t)}else(e=Qu(e).createTextNode(r))[Ie]=t,t.stateNode=e}return Ks(t),null;case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(a=ra(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(i(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(i(317));a[Ie]=t}else aa(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Ks(t),a=!1}else null!==Jr&&(Ac(Jr),Jr=null),a=!0;if(!a)return 256&t.flags?(Da(t),t):(Da(t),null)}if(Da(t),0!==(128&t.flags))return t.lanes=n,t;if(n=null!==r,e=null!==e&&null!==e.memoizedState,n){a=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(a=r.alternate.memoizedState.cachePool.pool);var o=null;null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),qs(t,t.updateQueue),Ks(t),null;case 4:return ee(),null===e&&Tu(t.stateNode.containerInfo),Ks(t),null;case 10:return bl(t.type),Ks(t),null;case 19:if(V(Aa),null===(a=t.memoizedState))return Ks(t),null;if(r=0!==(128&t.flags),null===(o=a.rendering))if(r)Vs(a,!1);else{if(0!==uc||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(o=La(e))){for(t.flags|=128,Vs(a,!1),e=o.updateQueue,t.updateQueue=e,qs(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)Is(n,e),n=n.sibling;return K(Aa,1&Aa.current|2),t.child}e=e.sibling}null!==a.tail&&se()>yc&&(t.flags|=128,r=!0,Vs(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=La(o))){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,qs(t,e),Vs(a,!0),null===a.tail&&"hidden"===a.tailMode&&!o.alternate&&!Gr)return Ks(t),null}else 2*se()-a.renderingStartTime>yc&&536870912!==n&&(t.flags|=128,r=!0,Vs(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(null!==(e=a.last)?e.sibling=o:t.child=o,a.last=o)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=se(),t.sibling=null,e=Aa.current,K(Aa,r?1&e|2:1&e),t):(Ks(t),null);case 22:case 23:return Da(t),_a(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?0!==(536870912&n)&&0===(128&t.flags)&&(Ks(t),6&t.subtreeFlags&&(t.flags|=8192)):Ks(t),null!==(n=t.updateQueue)&&qs(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&V(Ka),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),bl(Ma),Ks(t),null;case 25:return null}throw Error(i(156,t.tag))}function Gs(e,t){switch(Vr(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return bl(Ma),ee(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return ne(t),null;case 13:if(Da(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(i(340));aa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return V(Aa),null;case 4:return ee(),null;case 10:return bl(t.type),null;case 22:case 23:return Da(t),_a(),null!==e&&V(Ka),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return bl(Ma),null;default:return null}}function Js(e,t){switch(Vr(t),t.tag){case 3:bl(Ma),ee();break;case 26:case 27:case 5:ne(t);break;case 4:ee();break;case 13:Da(t);break;case 19:V(Aa);break;case 10:bl(t.type);break;case 22:case 23:Da(t),_a(),null!==e&&V(Ka);break;case 24:bl(Ma)}}var Xs={getCacheForType:function(e){var t=Cl(Ma),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n}},Zs="function"===typeof WeakMap?WeakMap:Map,ec=0,tc=null,nc=null,rc=0,ac=0,oc=null,ic=!1,lc=!1,sc=!1,cc=0,uc=0,dc=0,pc=0,fc=0,hc=0,mc=0,gc=null,xc=null,vc=!1,bc=0,yc=1/0,wc=null,jc=null,kc=!1,Sc=null,Cc=0,Ec=0,_c=null,Pc=0,Oc=null;function Nc(){if(0!==(2&ec)&&0!==rc)return rc&-rc;if(null!==N.T){return 0!==Wa?Wa:wu()}return Re()}function zc(){0===hc&&(hc=0===(536870912&rc)||Gr?Oe():536870912);var e=Pa.current;return null!==e&&(e.flags|=32),hc}function Tc(e,t,n){(e===tc&&2===ac||null!==e.cancelPendingCommit)&&($c(e,0),Fc(e,rc,hc,!1)),Te(e,n),0!==(2&ec)&&e===tc||(e===tc&&(0===(2&ec)&&(pc|=n),4===uc&&Fc(e,rc,hc,!1)),mu(e))}function Dc(e,t,n){if(0!==(6&ec))throw Error(i(327));for(var r=!n&&0===(60&t)&&0===(t&e.expiredLanes)||_e(e,t),a=r?function(e,t){var n=ec;ec|=2;var r=Uc(),a=Yc();tc!==e||rc!==t?(wc=null,yc=se()+500,$c(e,t)):lc=_e(e,t);e:for(;;)try{if(0!==ac&&null!==nc){t=nc;var o=oc;t:switch(ac){case 1:ac=0,oc=null,Gc(e,t,o,1);break;case 2:if(ca(o)){ac=0,oc=null,Qc(t);break}t=function(){2===ac&&tc===e&&(ac=7),mu(e)},o.then(t,t);break e;case 3:ac=7;break e;case 4:ac=5;break e;case 7:ca(o)?(ac=0,oc=null,Qc(t)):(ac=0,oc=null,Gc(e,t,o,7));break;case 5:var l=null;switch(nc.tag){case 26:l=nc.memoizedState;case 5:case 27:var s=nc;if(!l||Od(l)){ac=0,oc=null;var c=s.sibling;if(null!==c)nc=c;else{var u=s.return;null!==u?(nc=u,Jc(u)):nc=null}break t}}ac=0,oc=null,Gc(e,t,o,5);break;case 6:ac=0,oc=null,Gc(e,t,o,6);break;case 8:Mc(),uc=6;break e;default:throw Error(i(462))}}Vc();break}catch(d){Bc(e,d)}return xl=gl=null,N.H=r,N.A=a,ec=n,null!==nc?0:(tc=null,rc=0,Er(),uc)}(e,t):Hc(e,t,!0),o=r;;){if(0===a){lc&&!r&&Fc(e,t,0,!1);break}if(6===a)Fc(e,t,0,!ic);else{if(n=e.current.alternate,o&&!Rc(n)){a=Hc(e,t,!1),o=!1;continue}if(2===a){if(o=t,e.errorRecoveryDisabledLanes&o)var l=0;else l=0!==(l=-536870913&e.pendingLanes)?l:536870912&l?536870912:0;if(0!==l){t=l;e:{var s=e;a=gc;var c=s.current.memoizedState.isDehydrated;if(c&&($c(s,l).flags|=256),2!==(l=Hc(s,l,!1))){if(sc&&!c){s.errorRecoveryDisabledLanes|=o,pc|=o,a=4;break e}o=xc,xc=a,null!==o&&Ac(o)}a=l}if(o=!1,2!==a)continue}}if(1===a){$c(e,0),Fc(e,t,0,!0);break}e:{switch(r=e,a){case 0:case 1:throw Error(i(345));case 4:if((4194176&t)===t){Fc(r,t,hc,!ic);break e}break;case 2:xc=null;break;case 3:case 5:break;default:throw Error(i(329))}if(r.finishedWork=n,r.finishedLanes=t,(62914560&t)===t&&10<(o=bc+300-se())){if(Fc(r,t,hc,!ic),0!==Ee(r,0))break e;r.timeoutHandle=ed(Lc.bind(null,r,n,xc,wc,vc,t,hc,pc,mc,ic,2,-0,0),o)}else Lc(r,n,xc,wc,vc,t,hc,pc,mc,ic,0,-0,0)}}break}mu(e)}function Ac(e){null===xc?xc=e:xc.push.apply(xc,e)}function Lc(e,t,n,r,a,o,l,s,c,u,d,p,f){var h=t.subtreeFlags;if((8192&h||16785408===(16785408&h))&&(Nd={stylesheets:null,count:0,unsuspend:zd},Ps(t),null!==(t=function(){if(null===Nd)throw Error(i(475));var e=Nd;return e.stylesheets&&0===e.count&&Ad(e,e.stylesheets),0<e.count?function(t){var n=setTimeout((function(){if(e.stylesheets&&Ad(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}),6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}())))return e.cancelPendingCommit=t(Zc.bind(null,e,n,r,a,l,s,c,1,p,f)),void Fc(e,o,l,!u);Zc(e,n,r,a,l,s,c,d,p,f)}function Rc(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!Kn(o(),a))return!1}catch(i){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Fc(e,t,n,r){t&=~fc,t&=~pc,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var a=t;0<a;){var o=31-ye(a),i=1<<o;r[o]=-1,a&=~i}0!==n&&De(e,n,t)}function Ic(){return 0!==(6&ec)||(gu(0,!1),!1)}function Mc(){if(null!==nc){if(0===ac)var e=nc.return;else xl=gl=null,vo(e=nc),ha=null,ma=0,e=nc;for(;null!==e;)Js(e.alternate,e),e=e.return;nc=null}}function $c(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,td(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Mc(),tc=e,nc=n=Fs(e.current,null),rc=t,ac=0,oc=null,ic=!1,lc=_e(e,t),sc=!1,mc=hc=fc=pc=dc=uc=0,xc=gc=null,vc=!1,0!==(8&t)&&(t|=32&t);var r=e.entangledLanes;if(0!==r)for(e=e.entanglements,r&=t;0<r;){var a=31-ye(r),o=1<<a;t|=e[a],r&=~o}return cc=t,Er(),n}function Bc(e,t){Za=null,N.H=Ci,t===ia?(t=fa(),ac=3):t===la?(t=fa(),ac=4):ac=t===Yi?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,oc=t,null===nc&&(uc=1,Ii(e,Ar(t,e.current)))}function Uc(){var e=N.H;return N.H=Ci,null===e?Ci:e}function Yc(){var e=N.A;return N.A=Xs,e}function Wc(){uc=4,ic||(4194176&rc)!==rc&&null!==Pa.current||(lc=!0),0===(134217727&dc)&&0===(134217727&pc)||null===tc||Fc(tc,rc,hc,!1)}function Hc(e,t,n){var r=ec;ec|=2;var a=Uc(),o=Yc();tc===e&&rc===t||(wc=null,$c(e,t)),t=!1;var i=uc;e:for(;;)try{if(0!==ac&&null!==nc){var l=nc,s=oc;switch(ac){case 8:Mc(),i=6;break e;case 3:case 2:case 6:null===Pa.current&&(t=!0);var c=ac;if(ac=0,oc=null,Gc(e,l,s,c),n&&lc){i=0;break e}break;default:c=ac,ac=0,oc=null,Gc(e,l,s,c)}}qc(),i=uc;break}catch(u){Bc(e,u)}return t&&e.shellSuspendCounter++,xl=gl=null,ec=r,N.H=a,N.A=o,null===nc&&(tc=null,rc=0,Er()),i}function qc(){for(;null!==nc;)Kc(nc)}function Vc(){for(;null!==nc&&!ie();)Kc(nc)}function Kc(e){var t=hl(e.alternate,e,cc);e.memoizedProps=e.pendingProps,null===t?Jc(e):nc=t}function Qc(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Zi(n,t,t.pendingProps,t.type,void 0,rc);break;case 11:t=Zi(n,t,t.pendingProps,t.type.render,t.ref,rc);break;case 5:vo(t);default:Js(n,t),t=hl(n,t=nc=Is(t,cc),cc)}e.memoizedProps=e.pendingProps,null===t?Jc(e):nc=t}function Gc(e,t,n,r){xl=gl=null,vo(t),ha=null,ma=0;var a=t.return;try{if(function(e,t,n,r,a){if(n.flags|=32768,null!==r&&"object"===typeof r&&"function"===typeof r.then){if(null!==(t=n.alternate)&&jl(t,n,a,!0),null!==(n=Pa.current)){switch(n.tag){case 13:return null===Oa?Wc():null===n.alternate&&0===uc&&(uc=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===sa?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),au(e,r,a)),!1;case 22:return n.flags|=65536,r===sa?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),au(e,r,a)),!1}throw Error(i(435,n.tag))}return au(e,r,a),Wc(),!1}if(Gr)return null!==(t=Pa.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Zr&&oa(Ar(e=Error(i(422),{cause:r}),n))):(r!==Zr&&oa(Ar(t=Error(i(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,a&=-a,e.lanes|=a,r=Ar(r,n),Al(e,a=$i(e.stateNode,r,a)),4!==uc&&(uc=2)),!1;var o=Error(i(520),{cause:r});if(o=Ar(o,n),null===gc?gc=[o]:gc.push(o),4!==uc&&(uc=2),null===t)return!0;r=Ar(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,Al(n,e=$i(n.stateNode,r,e)),!1;case 1:if(t=n.type,o=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==o&&"function"===typeof o.componentDidCatch&&(null===jc||!jc.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,Ui(a=Bi(a),e,n,r),Al(n,a),!1}n=n.return}while(null!==n);return!1}(e,a,t,n,rc))return uc=1,Ii(e,Ar(n,e.current)),void(nc=null)}catch(o){if(null!==a)throw nc=a,o;return uc=1,Ii(e,Ar(n,e.current)),void(nc=null)}32768&t.flags?(Gr||1===r?e=!0:lc||0!==(536870912&rc)?e=!1:(ic=e=!0,(2===r||3===r||6===r)&&(null!==(r=Pa.current)&&13===r.tag&&(r.flags|=16384))),Xc(t,e)):Jc(t)}function Jc(e){var t=e;do{if(0!==(32768&t.flags))return void Xc(t,ic);e=t.return;var n=Qs(t.alternate,t,cc);if(null!==n)return void(nc=n);if(null!==(t=t.sibling))return void(nc=t);nc=t=e}while(null!==t);0===uc&&(uc=5)}function Xc(e,t){do{var n=Gs(e.alternate,e);if(null!==n)return n.flags&=32767,void(nc=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(nc=e);nc=e=n}while(null!==e);uc=6,nc=null}function Zc(e,t,n,r,a,o,l,s,c,u){var d=N.T,p=U.p;try{U.p=2,N.T=null,function(e,t,n,r,a,o,l,s){do{tu()}while(null!==Sc);if(0!==(6&ec))throw Error(i(327));var c=e.finishedWork;if(r=e.finishedLanes,null===c)return null;if(e.finishedWork=null,e.finishedLanes=0,c===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var u=c.lanes|c.childLanes;if(function(e,t,n,r,a,o){var i=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var l=e.entanglements,s=e.expirationTimes,c=e.hiddenUpdates;for(n=i&~n;0<n;){var u=31-ye(n),d=1<<u;l[u]=0,s[u]=-1;var p=c[u];if(null!==p)for(c[u]=null,u=0;u<p.length;u++){var f=p[u];null!==f&&(f.lane&=-536870913)}n&=~d}0!==r&&De(e,r,0),0!==o&&0===a&&0!==e.tag&&(e.suspendedLanes|=o&~(i&~t))}(e,r,u|=Cr,o,l,s),e===tc&&(nc=tc=null,rc=0),0===(10256&c.subtreeFlags)&&0===(10256&c.flags)||kc||(kc=!0,Ec=u,_c=n,function(e,t){ae(e,t)}(pe,(function(){return tu(),null}))),n=0!==(15990&c.flags),0!==(15990&c.subtreeFlags)||n?(n=N.T,N.T=null,o=U.p,U.p=2,l=ec,ec|=4,function(e,t){if(e=e.containerInfo,Vu=Wd,er(e=Zn(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(g){n=null;break e}var l=0,s=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var h;p!==n||0!==a&&3!==p.nodeType||(s=l+a),p!==o||0!==r&&3!==p.nodeType||(c=l+r),3===p.nodeType&&(l+=p.nodeValue.length),null!==(h=p.firstChild);)f=p,p=h;for(;;){if(p===e)break t;if(f===n&&++u===a&&(s=l),f===o&&++d===r&&(c=l),null!==(h=p.nextSibling))break;f=(p=f).parentNode}p=h}n=-1===s||-1===c?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ku={focusedElem:e,selectionRange:n},Wd=!1,ns=t;null!==ns;)if(e=(t=ns).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,ns=e;else for(;null!==ns;){switch(o=(t=ns).alternate,e=t.flags,t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==o){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var m=Di(n.type,a,(n.elementType,n.type));e=r.getSnapshotBeforeUpdate(m,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(x){ru(n,n.return,x)}}break;case 3:if(0!==(1024&e))if(9===(n=(e=t.stateNode.containerInfo).nodeType))id(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":id(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(i(163))}if(null!==(e=t.sibling)){e.return=t.return,ns=e;break}ns=t.return}m=rs,rs=!1}(e,c),hs(c,e),tr(Ku,e.containerInfo),Wd=!!Vu,Ku=Vu=null,e.current=c,as(e,c.alternate,c),le(),ec=l,U.p=o,N.T=n):e.current=c,kc?(kc=!1,Sc=e,Cc=r):eu(e,u),u=e.pendingLanes,0===u&&(jc=null),function(e){if(ve&&"function"===typeof ve.onCommitFiberRoot)try{ve.onCommitFiberRoot(xe,e,void 0,128===(128&e.current.flags))}catch(t){}}(c.stateNode),mu(e),null!==t)for(a=e.onRecoverableError,c=0;c<t.length;c++)u=t[c],a(u.value,{componentStack:u.stack});0!==(3&Cc)&&tu(),u=e.pendingLanes,0!==(4194218&r)&&0!==(42&u)?e===Oc?Pc++:(Pc=0,Oc=e):Pc=0,gu(0,!1)}(e,t,n,r,p,a,o,l)}finally{N.T=d,U.p=p}}function eu(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,Ba(t)))}function tu(){if(null!==Sc){var e=Sc,t=Ec;Ec=0;var n=Le(Cc),r=N.T,a=U.p;try{if(U.p=32>n?32:n,N.T=null,null===Sc)var o=!1;else{n=_c,_c=null;var l=Sc,s=Cc;if(Sc=null,Cc=0,0!==(6&ec))throw Error(i(331));var c=ec;if(ec|=4,zs(l.current),ks(l,l.current,s,n),ec=c,gu(0,!1),ve&&"function"===typeof ve.onPostCommitFiberRoot)try{ve.onPostCommitFiberRoot(xe,l)}catch(u){}o=!0}return o}finally{U.p=a,N.T=r,eu(e,t)}}return!1}function nu(e,t,n){t=Ar(n,t),null!==(e=Tl(e,t=$i(e.stateNode,t,2),2))&&(Te(e,2),mu(e))}function ru(e,t,n){if(3===e.tag)nu(e,e,n);else for(;null!==t;){if(3===t.tag){nu(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===jc||!jc.has(r))){e=Ar(n,e),null!==(r=Tl(t,n=Bi(2),2))&&(Ui(n,r,t,e),Te(r,2),mu(r));break}}t=t.return}}function au(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new Zs;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(sc=!0,a.add(n),e=ou.bind(null,e,t,n),t.then(e,e))}function ou(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,tc===e&&(rc&n)===n&&(4===uc||3===uc&&(62914560&rc)===rc&&300>se()-bc?0===(2&ec)&&$c(e,0):fc|=n,mc===rc&&(mc=0)),mu(e)}function iu(e,t){0===t&&(t=Ne()),null!==(e=Or(e,t))&&(Te(e,t),mu(e))}function lu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),iu(e,n)}function su(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}null!==r&&r.delete(t),iu(e,n)}var cu=null,uu=null,du=!1,pu=!1,fu=!1,hu=0;function mu(e){var t;e!==uu&&null===e.next&&(null===uu?cu=uu=e:uu=uu.next=e),pu=!0,du||(du=!0,t=xu,rd((function(){0!==(6&ec)?ae(ue,t):t()})))}function gu(e,t){if(!fu&&pu){fu=!0;do{for(var n=!1,r=cu;null!==r;){if(!t)if(0!==e){var a=r.pendingLanes;if(0===a)var o=0;else{var i=r.suspendedLanes,l=r.pingedLanes;o=(1<<31-ye(42|e)+1)-1,o=201326677&(o&=a&~(i&~l))?201326677&o|1:o?2|o:0}0!==o&&(n=!0,yu(r,o))}else o=rc,0===(3&(o=Ee(r,r===tc?o:0)))||_e(r,o)||(n=!0,yu(r,o));r=r.next}}while(n);fu=!1}}function xu(){pu=du=!1;var e=0;0!==hu&&(function(){var e=window.event;if(e&&"popstate"===e.type)return e!==Zu&&(Zu=e,!0);return Zu=null,!1}()&&(e=hu),hu=0);for(var t=se(),n=null,r=cu;null!==r;){var a=r.next,o=vu(r,t);0===o?(r.next=null,null===n?cu=a:n.next=a,null===a&&(uu=n)):(n=r,(0!==e||0!==(3&o))&&(pu=!0)),r=a}gu(e,!1)}function vu(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=-62914561&e.pendingLanes;0<o;){var i=31-ye(o),l=1<<i,s=a[i];-1===s?0!==(l&n)&&0===(l&r)||(a[i]=Pe(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}if(n=rc,n=Ee(e,e===(t=tc)?n:0),r=e.callbackNode,0===n||e===t&&2===ac||null!==e.cancelPendingCommit)return null!==r&&null!==r&&oe(r),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||_e(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&oe(r),Le(n)){case 2:case 8:n=de;break;case 32:default:n=pe;break;case 268435456:n=he}return r=bu.bind(null,e),n=ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&oe(r),e.callbackPriority=2,e.callbackNode=null,2}function bu(e,t){var n=e.callbackNode;if(tu()&&e.callbackNode!==n)return null;var r=rc;return 0===(r=Ee(e,e===tc?r:0))?null:(Dc(e,r,t),vu(e,se()),null!=e.callbackNode&&e.callbackNode===n?bu.bind(null,e):null)}function yu(e,t){if(tu())return null;Dc(e,t,!0)}function wu(){return 0===hu&&(hu=Oe()),hu}function ju(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:Ot(""+e)}function ku(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var Su=0;Su<wr.length;Su++){var Cu=wr[Su];jr(Cu.toLowerCase(),"on"+(Cu[0].toUpperCase()+Cu.slice(1)))}jr(fr,"onAnimationEnd"),jr(hr,"onAnimationIteration"),jr(mr,"onAnimationStart"),jr("dblclick","onDoubleClick"),jr("focusin","onFocus"),jr("focusout","onBlur"),jr(gr,"onTransitionRun"),jr(xr,"onTransitionStart"),jr(vr,"onTransitionCancel"),jr(br,"onTransitionEnd"),tt("onMouseEnter",["mouseout","mouseover"]),tt("onMouseLeave",["mouseout","mouseover"]),tt("onPointerEnter",["pointerout","pointerover"]),tt("onPointerLeave",["pointerout","pointerover"]),et("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),et("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),et("onBeforeInput",["compositionend","keypress","textInput","paste"]),et("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_u=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Eu));function Pu(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==o&&a.isPropagationStopped())break e;o=l,a.currentTarget=c;try{o(a)}catch(u){Ai(u)}a.currentTarget=null,o=s}else for(i=0;i<r.length;i++){if(s=(l=r[i]).instance,c=l.currentTarget,l=l.listener,s!==o&&a.isPropagationStopped())break e;o=l,a.currentTarget=c;try{o(a)}catch(u){Ai(u)}a.currentTarget=null,o=s}}}}function Ou(e,t){var n=t[Be];void 0===n&&(n=t[Be]=new Set);var r=e+"__bubble";n.has(r)||(Du(t,e,2,!1),n.add(r))}function Nu(e,t,n){var r=0;t&&(r|=4),Du(n,e,r,t)}var zu="_reactListening"+Math.random().toString(36).slice(2);function Tu(e){if(!e[zu]){e[zu]=!0,Xe.forEach((function(t){"selectionchange"!==t&&(_u.has(t)||Nu(t,!1,e),Nu(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[zu]||(t[zu]=!0,Nu("selectionchange",!1,t))}}function Du(e,t,n,r){switch(Jd(t)){case 2:var a=Hd;break;case 8:a=qd;break;default:a=Vd}n=a.bind(null,t,n,e),a=void 0,!It||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Au(e,t,n,r,a){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var i=r.tag;if(3===i||4===i){var l=r.stateNode.containerInfo;if(l===a||8===l.nodeType&&l.parentNode===a)break;if(4===i)for(i=r.return;null!==i;){var s=i.tag;if((3===s||4===s)&&((s=i.stateNode.containerInfo)===a||8===s.nodeType&&s.parentNode===a))return;i=i.return}for(;null!==l;){if(null===(i=Ve(l)))return;if(5===(s=i.tag)||6===s||26===s||27===s){r=o=i;continue e}l=l.parentNode}}r=r.return}Rt((function(){var r=o,a=zt(n),i=[];e:{var l=yr.get(e);if(void 0!==l){var s=Xt,c=e;switch(e){case"keypress":if(0===Wt(n))break e;case"keydown":case"keyup":s=hn;break;case"focusin":c="focus",s=an;break;case"focusout":c="blur",s=an;break;case"beforeblur":case"afterblur":s=an;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=nn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=rn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=gn;break;case fr:case hr:case mr:s=on;break;case br:s=xn;break;case"scroll":case"scrollend":s=en;break;case"wheel":s=vn;break;case"copy":case"cut":case"paste":s=ln;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=mn;break;case"toggle":case"beforetoggle":s=bn}var u=0!==(4&t),d=!u&&("scroll"===e||"scrollend"===e),p=u?null!==l?l+"Capture":null:l;u=[];for(var f,h=r;null!==h;){var m=h;if(f=m.stateNode,5!==(m=m.tag)&&26!==m&&27!==m||null===f||null===p||null!=(m=Ft(h,p))&&u.push(Lu(h,m,f)),d)break;h=h.return}0<u.length&&(l=new s(l,c,null,n,a),i.push({event:l,listeners:u}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===Nt||!(c=n.relatedTarget||n.fromElement)||!Ve(c)&&!c[$e])&&(s||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(c=(c=n.relatedTarget||n.toElement)?Ve(c):null)&&(d=F(c),u=c.tag,c!==d||5!==u&&27!==u&&6!==u)&&(c=null)):(s=null,c=r),s!==c)){if(u=nn,m="onMouseLeave",p="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(u=mn,m="onPointerLeave",p="onPointerEnter",h="pointer"),d=null==s?l:Qe(s),f=null==c?l:Qe(c),(l=new u(m,h+"leave",s,n,a)).target=d,l.relatedTarget=f,m=null,Ve(a)===r&&((u=new u(p,h+"enter",c,n,a)).target=f,u.relatedTarget=d,m=u),d=m,s&&c)e:{for(p=c,h=0,f=u=s;f;f=Fu(f))h++;for(f=0,m=p;m;m=Fu(m))f++;for(;0<h-f;)u=Fu(u),h--;for(;0<f-h;)p=Fu(p),f--;for(;h--;){if(u===p||null!==p&&u===p.alternate)break e;u=Fu(u),p=Fu(p)}u=null}else u=null;null!==s&&Iu(i,l,s,u,!1),null!==c&&null!==d&&Iu(i,d,c,u,!0)}if("select"===(s=(l=r?Qe(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=Fn;else if(zn(l))if(In)g=Vn;else{g=Hn;var x=Wn}else!(s=l.nodeName)||"input"!==s.toLowerCase()||"checkbox"!==l.type&&"radio"!==l.type?r&&Et(r.elementType)&&(g=Fn):g=qn;switch(g&&(g=g(e,r))?Tn(i,g,n,a):(x&&x(e,l,r),"focusout"===e&&r&&"number"===l.type&&null!=r.memoizedProps.value&&vt(l,"number",l.value)),x=r?Qe(r):window,e){case"focusin":(zn(x)||"true"===x.contentEditable)&&(rr=x,ar=r,or=null);break;case"focusout":or=ar=rr=null;break;case"mousedown":ir=!0;break;case"contextmenu":case"mouseup":case"dragend":ir=!1,lr(i,n,a);break;case"selectionchange":if(nr)break;case"keydown":case"keyup":lr(i,n,a)}var v;if(wn)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else On?_n(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(Sn&&"ko"!==n.locale&&(On||"onCompositionStart"!==b?"onCompositionEnd"===b&&On&&(v=Yt()):(Bt="value"in($t=a)?$t.value:$t.textContent,On=!0)),0<(x=Ru(r,b)).length&&(b=new sn(b,e,null,n,a),i.push({event:b,listeners:x}),v?b.data=v:null!==(v=Pn(n))&&(b.data=v))),(v=kn?function(e,t){switch(e){case"compositionend":return Pn(t);case"keypress":return 32!==t.which?null:(En=!0,Cn);case"textInput":return(e=t.data)===Cn&&En?null:e;default:return null}}(e,n):function(e,t){if(On)return"compositionend"===e||!wn&&_n(e,t)?(e=Yt(),Ut=Bt=$t=null,On=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(b=Ru(r,"onBeforeInput")).length&&(x=new sn("onBeforeInput","beforeinput",null,n,a),i.push({event:x,listeners:b}),x.data=v)),function(e,t,n,r,a){if("submit"===t&&n&&n.stateNode===a){var o=ju((a[Me]||null).action),i=r.submitter;i&&null!==(t=(t=i[Me]||null)?ju(t.formAction):i.getAttribute("formAction"))&&(o=t,i=null);var l=new Xt("action","action",null,r,a);e.push({event:l,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==hu){var e=i?ku(a,i):new FormData(a);di(n,{pending:!0,data:e,method:a.method,action:o},null,e)}}else"function"===typeof o&&(l.preventDefault(),e=i?ku(a,i):new FormData(a),di(n,{pending:!0,data:e,method:a.method,action:o},o,e))},currentTarget:a}]})}}(i,e,r,n,a)}Pu(i,t)}))}function Lu(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ru(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,o=a.stateNode;5!==(a=a.tag)&&26!==a&&27!==a||null===o||(null!=(a=Ft(e,n))&&r.unshift(Lu(e,a,o)),null!=(a=Ft(e,t))&&r.push(Lu(e,a,o))),e=e.return}return r}function Fu(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function Iu(e,t,n,r,a){for(var o=t._reactName,i=[];null!==n&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(l=l.tag,null!==s&&s===r)break;5!==l&&26!==l&&27!==l||null===c||(s=c,a?null!=(c=Ft(n,o))&&i.unshift(Lu(n,c,s)):a||null!=(c=Ft(n,o))&&i.push(Lu(n,c,s))),n=n.return}0!==i.length&&e.push({event:t,listeners:i})}var Mu=/\r\n?/g,$u=/\u0000|\uFFFD/g;function Bu(e){return("string"===typeof e?e:""+e).replace(Mu,"\n").replace($u,"")}function Uu(e,t){return t=Bu(t),Bu(e)===t}function Yu(){}function Wu(e,t,n,r,a,o){switch(n){case"children":"string"===typeof r?"body"===t||"textarea"===t&&""===r||jt(e,r):("number"===typeof r||"bigint"===typeof r)&&"body"!==t&&jt(e,""+r);break;case"className":lt(e,"class",r);break;case"tabIndex":lt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":lt(e,n,r);break;case"style":Ct(e,r,o);break;case"data":if("object"!==t){lt(e,"data",r);break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==r||"function"===typeof r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=Ot(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if("function"===typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof o&&("formAction"===n?("input"!==t&&Wu(e,t,"name",a.name,a,null),Wu(e,t,"formEncType",a.formEncType,a,null),Wu(e,t,"formMethod",a.formMethod,a,null),Wu(e,t,"formTarget",a.formTarget,a,null)):(Wu(e,t,"encType",a.encType,a,null),Wu(e,t,"method",a.method,a,null),Wu(e,t,"target",a.target,a,null))),null==r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=Ot(""+r),e.setAttribute(n,r);break;case"onClick":null!=r&&(e.onclick=Yu);break;case"onScroll":null!=r&&Ou("scroll",e);break;case"onScrollEnd":null!=r&&Ou("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(i(61));if(null!=(n=r.__html)){if(null!=a.children)throw Error(i(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"muted":e.muted=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==r||"function"===typeof r||"boolean"===typeof r||"symbol"===typeof r){e.removeAttribute("xlink:href");break}n=Ot(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=r&&"function"!==typeof r&&"symbol"!==typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":null==r||"function"===typeof r||"symbol"===typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Ou("beforetoggle",e),Ou("toggle",e),it(e,"popover",r);break;case"xlinkActuate":st(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":st(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":st(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":st(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":st(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":st(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":st(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":st(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":st(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":it(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&it(e,n=_t.get(n)||n,r)}}function Hu(e,t,n,r,a,o){switch(n){case"style":Ct(e,r,o);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(i(61));if(null!=(n=r.__html)){if(null!=a.children)throw Error(i(60));e.innerHTML=n}}break;case"children":"string"===typeof r?jt(e,r):("number"===typeof r||"bigint"===typeof r)&&jt(e,""+r);break;case"onScroll":null!=r&&Ou("scroll",e);break;case"onScrollEnd":null!=r&&Ou("scrollend",e);break;case"onClick":null!=r&&(e.onclick=Yu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:Ze.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),"function"===typeof(o=null!=(o=e[Me]||null)?o[n]:null)&&e.removeEventListener(t,o,a),"function"!==typeof r)?n in e?e[n]=r:!0===r?e.setAttribute(n,""):it(e,n,r):("function"!==typeof o&&null!==o&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a)))}}function qu(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ou("error",e),Ou("load",e);var r,a=!1,o=!1;for(r in n)if(n.hasOwnProperty(r)){var l=n[r];if(null!=l)switch(r){case"src":a=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Wu(e,t,r,l,n,null)}}return o&&Wu(e,t,"srcSet",n.srcSet,n,null),void(a&&Wu(e,t,"src",n.src,n,null));case"input":Ou("invalid",e);var s=r=l=o=null,c=null,u=null;for(a in n)if(n.hasOwnProperty(a)){var d=n[a];if(null!=d)switch(a){case"name":o=d;break;case"type":l=d;break;case"checked":c=d;break;case"defaultChecked":u=d;break;case"value":r=d;break;case"defaultValue":s=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(i(137,t));break;default:Wu(e,t,a,d,n,null)}}return xt(e,r,s,c,u,l,o,!1),void dt(e);case"select":for(o in Ou("invalid",e),a=l=r=null,n)if(n.hasOwnProperty(o)&&null!=(s=n[o]))switch(o){case"value":r=s;break;case"defaultValue":l=s;break;case"multiple":a=s;default:Wu(e,t,o,s,n,null)}return t=r,n=l,e.multiple=!!a,void(null!=t?bt(e,!!a,t,!1):null!=n&&bt(e,!!a,n,!0));case"textarea":for(l in Ou("invalid",e),r=o=a=null,n)if(n.hasOwnProperty(l)&&null!=(s=n[l]))switch(l){case"value":a=s;break;case"defaultValue":o=s;break;case"children":r=s;break;case"dangerouslySetInnerHTML":if(null!=s)throw Error(i(91));break;default:Wu(e,t,l,s,n,null)}return wt(e,a,o,r),void dt(e);case"option":for(c in n)if(n.hasOwnProperty(c)&&null!=(a=n[c]))if("selected"===c)e.selected=a&&"function"!==typeof a&&"symbol"!==typeof a;else Wu(e,t,c,a,n,null);return;case"dialog":Ou("cancel",e),Ou("close",e);break;case"iframe":case"object":Ou("load",e);break;case"video":case"audio":for(a=0;a<Eu.length;a++)Ou(Eu[a],e);break;case"image":Ou("error",e),Ou("load",e);break;case"details":Ou("toggle",e);break;case"embed":case"source":case"link":Ou("error",e),Ou("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&null!=(a=n[u]))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Wu(e,t,u,a,n,null)}return;default:if(Et(t)){for(d in n)n.hasOwnProperty(d)&&(void 0!==(a=n[d])&&Hu(e,t,d,a,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(null!=(a=n[s])&&Wu(e,t,s,a,n,null))}var Vu=null,Ku=null;function Qu(e){return 9===e.nodeType?e:e.ownerDocument}function Gu(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ju(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function Xu(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var Zu=null;var ed="function"===typeof setTimeout?setTimeout:void 0,td="function"===typeof clearTimeout?clearTimeout:void 0,nd="function"===typeof Promise?Promise:void 0,rd="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof nd?function(e){return nd.resolve(null).then(e).catch(ad)}:ed;function ad(e){setTimeout((function(){throw e}))}function od(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void mp(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=a}while(n);mp(t)}function id(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":id(n),qe(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function ld(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"F!"===t||"F"===t)break;if("/$"===t)return null}}return e}function sd(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}function cd(e,t,n){switch(t=Qu(n),e){case"html":if(!(e=t.documentElement))throw Error(i(452));return e;case"head":if(!(e=t.head))throw Error(i(453));return e;case"body":if(!(e=t.body))throw Error(i(454));return e;default:throw Error(i(451))}}var ud=new Map,dd=new Set;function pd(e){return"function"===typeof e.getRootNode?e.getRootNode():e.ownerDocument}var fd=U.d;U.d={f:function(){var e=fd.f(),t=Ic();return e||t},r:function(e){var t=Ke(e);null!==t&&5===t.tag&&"form"===t.type?fi(t):fd.r(e)},D:function(e){fd.D(e),md("dns-prefetch",e,null)},C:function(e,t){fd.C(e,t),md("preconnect",e,t)},L:function(e,t,n){fd.L(e,t,n);var r=hd;if(r&&e&&t){var a='link[rel="preload"][as="'+mt(t)+'"]';"image"===t&&n&&n.imageSrcSet?(a+='[imagesrcset="'+mt(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(a+='[imagesizes="'+mt(n.imageSizes)+'"]')):a+='[href="'+mt(e)+'"]';var o=a;switch(t){case"style":o=xd(e);break;case"script":o=yd(e)}ud.has(o)||(e=z({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),ud.set(o,e),null!==r.querySelector(a)||"style"===t&&r.querySelector(vd(o))||"script"===t&&r.querySelector(wd(o))||(qu(t=r.createElement("link"),"link",e),Je(t),r.head.appendChild(t)))}},m:function(e,t){fd.m(e,t);var n=hd;if(n&&e){var r=t&&"string"===typeof t.as?t.as:"script",a='link[rel="modulepreload"][as="'+mt(r)+'"][href="'+mt(e)+'"]',o=a;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=yd(e)}if(!ud.has(o)&&(e=z({rel:"modulepreload",href:e},t),ud.set(o,e),null===n.querySelector(a))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(wd(o)))return}qu(r=n.createElement("link"),"link",e),Je(r),n.head.appendChild(r)}}},X:function(e,t){fd.X(e,t);var n=hd;if(n&&e){var r=Ge(n).hoistableScripts,a=yd(e),o=r.get(a);o||((o=n.querySelector(wd(a)))||(e=z({src:e,async:!0},t),(t=ud.get(a))&&Cd(e,t),Je(o=n.createElement("script")),qu(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(a,o))}},S:function(e,t,n){fd.S(e,t,n);var r=hd;if(r&&e){var a=Ge(r).hoistableStyles,o=xd(e);t=t||"default";var i=a.get(o);if(!i){var l={loading:0,preload:null};if(i=r.querySelector(vd(o)))l.loading=5;else{e=z({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ud.get(o))&&Sd(e,n);var s=i=r.createElement("link");Je(s),qu(s,"link",e),s._p=new Promise((function(e,t){s.onload=e,s.onerror=t})),s.addEventListener("load",(function(){l.loading|=1})),s.addEventListener("error",(function(){l.loading|=2})),l.loading|=4,kd(i,t,r)}i={type:"stylesheet",instance:i,count:1,state:l},a.set(o,i)}}},M:function(e,t){fd.M(e,t);var n=hd;if(n&&e){var r=Ge(n).hoistableScripts,a=yd(e),o=r.get(a);o||((o=n.querySelector(wd(a)))||(e=z({src:e,async:!0,type:"module"},t),(t=ud.get(a))&&Cd(e,t),Je(o=n.createElement("script")),qu(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(a,o))}}};var hd="undefined"===typeof document?null:document;function md(e,t,n){var r=hd;if(r&&"string"===typeof t&&t){var a=mt(t);a='link[rel="'+e+'"][href="'+a+'"]',"string"===typeof n&&(a+='[crossorigin="'+n+'"]'),dd.has(a)||(dd.add(a),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(a)&&(qu(t=r.createElement("link"),"link",e),Je(t),r.head.appendChild(t)))}}function gd(e,t,n,r){var a,o,l,s,c=(c=J.current)?pd(c):null;if(!c)throw Error(i(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(t=xd(n.href),(r=(n=Ge(c).hoistableStyles).get(t))||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=xd(n.href);var u=Ge(c).hoistableStyles,d=u.get(e);if(d||(c=c.ownerDocument||c,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,d),(u=c.querySelector(vd(e)))&&!u._p&&(d.instance=u,d.state.loading=5),ud.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ud.set(e,n),u||(a=c,o=e,l=n,s=d.state,a.querySelector('link[rel="preload"][as="style"]['+o+"]")?s.loading=1:(o=a.createElement("link"),s.preload=o,o.addEventListener("load",(function(){return s.loading|=1})),o.addEventListener("error",(function(){return s.loading|=2})),qu(o,"link",l),Je(o),a.head.appendChild(o))))),t&&null===r)throw Error(i(528,""));return d}if(t&&null!==r)throw Error(i(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=yd(n),(r=(n=Ge(c).hoistableScripts).get(t))||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,e))}}function xd(e){return'href="'+mt(e)+'"'}function vd(e){return'link[rel="stylesheet"]['+e+"]"}function bd(e){return z({},e,{"data-precedence":e.precedence,precedence:null})}function yd(e){return'[src="'+mt(e)+'"]'}function wd(e){return"script[async]"+e}function jd(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+mt(n.href)+'"]');if(r)return t.instance=r,Je(r),r;var a=z({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return Je(r=(e.ownerDocument||e).createElement("style")),qu(r,"style",a),kd(r,n.precedence,e),t.instance=r;case"stylesheet":a=xd(n.href);var o=e.querySelector(vd(a));if(o)return t.state.loading|=4,t.instance=o,Je(o),o;r=bd(n),(a=ud.get(a))&&Sd(r,a),Je(o=(e.ownerDocument||e).createElement("link"));var l=o;return l._p=new Promise((function(e,t){l.onload=e,l.onerror=t})),qu(o,"link",r),t.state.loading|=4,kd(o,n.precedence,e),t.instance=o;case"script":return o=yd(n.src),(a=e.querySelector(wd(o)))?(t.instance=a,Je(a),a):(r=n,(a=ud.get(o))&&Cd(r=z({},n),a),Je(a=(e=e.ownerDocument||e).createElement("script")),qu(a,"link",r),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(i(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,kd(r,n.precedence,e));return t.instance}function kd(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=r.length?r[r.length-1]:null,o=a,i=0;i<r.length;i++){var l=r[i];if(l.dataset.precedence===t)o=l;else if(o!==a)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function Sd(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function Cd(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var Ed=null;function _d(e,t,n){if(null===Ed){var r=new Map,a=Ed=new Map;a.set(n,r)}else(r=(a=Ed).get(n))||(r=new Map,a.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var o=n[a];if(!(o[He]||o[Ie]||"link"===e&&"stylesheet"===o.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==o.namespaceURI){var i=o.getAttribute(t)||"";i=e+i;var l=r.get(i);l?l.push(o):r.set(i,[o])}}return r}function Pd(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function Od(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var Nd=null;function zd(){}function Td(){if(this.count--,0===this.count)if(this.stylesheets)Ad(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var Dd=null;function Ad(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,Dd=new Map,t.forEach(Ld,e),Dd=null,Td.call(e))}function Ld(e,t){if(!(4&t.state.loading)){var n=Dd.get(e);if(n)var r=n.get(null);else{n=new Map,Dd.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<a.length;o++){var i=a[o];"LINK"!==i.nodeName&&"not all"===i.getAttribute("media")||(n.set(i.dataset.precedence,i),r=i)}r&&n.set(null,r)}i=(a=t.instance).getAttribute("data-precedence"),(o=n.get(i)||r)===r&&n.set(null,a),n.set(i,a),this.count++,r=Td.bind(this),a.addEventListener("load",r),a.addEventListener("error",r),o?o.parentNode.insertBefore(a,o.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(a,e.firstChild),t.state.loading|=4}}var Rd={$$typeof:g,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function Fd(e,t,n,r,a,o,i,l){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ze(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ze(0),this.hiddenUpdates=ze(null),this.identifierPrefix=r,this.onUncaughtError=a,this.onCaughtError=o,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function Id(e,t,n,r,a,o,i,l,s,c,u,d){return e=new Fd(e,t,n,i,l,s,c,d),t=1,!0===o&&(t|=24),o=Ls(3,null,null,t),e.current=o,o.stateNode=e,(t=$a()).refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:r,isDehydrated:n,cache:t},Ol(o),e}function Md(e){return e?e=Tr:Tr}function $d(e,t,n,r,a,o){a=Md(a),null===r.context?r.context=a:r.pendingContext=a,(r=zl(t)).payload={element:n},null!==(o=void 0===o?null:o)&&(r.callback=o),null!==(n=Tl(e,r,t))&&(Tc(n,0,t),Dl(n,e,t))}function Bd(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Ud(e,t){Bd(e,t),(e=e.alternate)&&Bd(e,t)}function Yd(e){if(13===e.tag){var t=Or(e,67108864);null!==t&&Tc(t,0,67108864),Ud(e,67108864)}}var Wd=!0;function Hd(e,t,n,r){var a=N.T;N.T=null;var o=U.p;try{U.p=2,Vd(e,t,n,r)}finally{U.p=o,N.T=a}}function qd(e,t,n,r){var a=N.T;N.T=null;var o=U.p;try{U.p=8,Vd(e,t,n,r)}finally{U.p=o,N.T=a}}function Vd(e,t,n,r){if(Wd){var a=Kd(r);if(null===a)Au(e,t,r,Qd,n),ip(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return Zd=lp(Zd,e,t,n,r,a),!0;case"dragenter":return ep=lp(ep,e,t,n,r,a),!0;case"mouseover":return tp=lp(tp,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return np.set(o,lp(np.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":return o=a.pointerId,rp.set(o,lp(rp.get(o)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(ip(e,r),4&t&&-1<op.indexOf(e)){for(;null!==a;){var o=Ke(a);if(null!==o)switch(o.tag){case 3:if((o=o.stateNode).current.memoizedState.isDehydrated){var i=Ce(o.pendingLanes);if(0!==i){var l=o;for(l.pendingLanes|=2,l.entangledLanes|=2;i;){var s=1<<31-ye(i);l.entanglements[1]|=s,i&=~s}mu(o),0===(6&ec)&&(yc=se()+500,gu(0,!1))}}break;case 13:null!==(l=Or(o,2))&&Tc(l,0,2),Ic(),Ud(o,2)}if(null===(o=Kd(r))&&Au(e,t,r,Qd,n),o===a)break;a=o}null!==a&&r.stopPropagation()}else Au(e,t,r,null,n)}}function Kd(e){return Gd(e=zt(e))}var Qd=null;function Gd(e){if(Qd=null,null!==(e=Ve(e))){var t=F(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=I(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Qd=e,null}function Jd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ce()){case ue:return 2;case de:return 8;case pe:case fe:return 32;case he:return 268435456;default:return 32}default:return 32}}var Xd=!1,Zd=null,ep=null,tp=null,np=new Map,rp=new Map,ap=[],op="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ip(e,t){switch(e){case"focusin":case"focusout":Zd=null;break;case"dragenter":case"dragleave":ep=null;break;case"mouseover":case"mouseout":tp=null;break;case"pointerover":case"pointerout":np.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":rp.delete(t.pointerId)}}function lp(e,t,n,r,a,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},null!==t&&(null!==(t=Ke(t))&&Yd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function sp(e){var t=Ve(e.target);if(null!==t){var n=F(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=I(n)))return e.blockedOn=t,void function(e,t){var n=U.p;try{return U.p=e,t()}finally{U.p=n}}(e.priority,(function(){if(13===n.tag){var e=Nc(),t=Or(n,e);null!==t&&Tc(t,0,e),Ud(n,e)}}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function cp(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Kd(e.nativeEvent);if(null!==n)return null!==(t=Ke(n))&&Yd(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);Nt=r,n.target.dispatchEvent(r),Nt=null,t.shift()}return!0}function up(e,t,n){cp(e)&&n.delete(t)}function dp(){Xd=!1,null!==Zd&&cp(Zd)&&(Zd=null),null!==ep&&cp(ep)&&(ep=null),null!==tp&&cp(tp)&&(tp=null),np.forEach(up),rp.forEach(up)}function pp(e,t){e.blockedOn===t&&(e.blockedOn=null,Xd||(Xd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,dp)))}var fp=null;function hp(e){fp!==e&&(fp=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,(function(){fp===e&&(fp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],a=e[t+2];if("function"!==typeof r){if(null===Gd(r||n))continue;break}var o=Ke(n);null!==o&&(e.splice(t,3),t-=3,di(o,{pending:!0,data:a,method:n.method,action:r},r,a))}})))}function mp(e){function t(t){return pp(t,e)}null!==Zd&&pp(Zd,e),null!==ep&&pp(ep,e),null!==tp&&pp(tp,e),np.forEach(t),rp.forEach(t);for(var n=0;n<ap.length;n++){var r=ap[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<ap.length&&null===(n=ap[0]).blockedOn;)sp(n),null===n.blockedOn&&ap.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var a=n[r],o=n[r+1],i=a[Me]||null;if("function"===typeof o)i||hp(n);else if(i){var l=null;if(o&&o.hasAttribute("formAction")){if(a=o,i=o[Me]||null)l=i.formAction;else if(null!==Gd(a))continue}else l=i.action;"function"===typeof l?n[r+1]=l:(n.splice(r,3),r-=3),hp(n)}}}function gp(e){this._internalRoot=e}function xp(e){this._internalRoot=e}xp.prototype.render=gp.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(i(409));$d(t.current,Nc(),e,t,null,null)},xp.prototype.unmount=gp.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;0===e.tag&&tu(),$d(e.current,2,null,e,null,null),Ic(),t[$e]=null}},xp.prototype.unstable_scheduleHydration=function(e){if(e){var t=Re();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ap.length&&0!==t&&t<ap[n].priority;n++);ap.splice(n,0,e),0===n&&sp(e)}};var vp=a.version;if("19.0.0"!==vp)throw Error(i(527,vp,"19.0.0"));U.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw e=Object.keys(e).join(","),Error(i(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=F(e)))throw Error(i(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var o=a.alternate;if(null===o){if(null!==(r=a.return)){n=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return M(a),e;if(o===r)return M(a),t;o=o.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=o;else{for(var l=!1,s=a.child;s;){if(s===n){l=!0,n=a,r=o;break}if(s===r){l=!0,r=a,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=a;break}if(s===r){l=!0,r=o,n=a;break}s=s.sibling}if(!l)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(3!==n.tag)throw Error(i(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?$(e):null)?null:e.stateNode};var bp={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:N,findFiberByHostInstance:Ve,reconcilerVersion:"19.0.0"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var yp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yp.isDisabled&&yp.supportsFiber)try{xe=yp.inject(bp),ve=yp}catch(jp){}}t.createRoot=function(e,t){if(!l(e))throw Error(i(299));var n=!1,r="",a=Li,o=Ri,s=Fi;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(a=t.onUncaughtError),void 0!==t.onCaughtError&&(o=t.onCaughtError),void 0!==t.onRecoverableError&&(s=t.onRecoverableError),void 0!==t.unstable_transitionCallbacks&&t.unstable_transitionCallbacks),t=Id(e,1,!1,null,0,n,r,a,o,s,0,null),e[$e]=t.current,Tu(8===e.nodeType?e.parentNode:e),new gp(t)},t.hydrateRoot=function(e,t,n){if(!l(e))throw Error(i(299));var r=!1,a="",o=Li,s=Ri,c=Fi,u=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onUncaughtError&&(o=n.onUncaughtError),void 0!==n.onCaughtError&&(s=n.onCaughtError),void 0!==n.onRecoverableError&&(c=n.onRecoverableError),void 0!==n.unstable_transitionCallbacks&&n.unstable_transitionCallbacks,void 0!==n.formState&&(u=n.formState)),(t=Id(e,1,!0,t,0,r,a,o,s,c,0,u)).context=Md(null),n=t.current,(a=zl(r=Nc())).callback=null,Tl(n,a,r),t.current.lanes=r,Te(t,r),mu(t),e[$e]=t.current,Tu(e),new xp(t)},t.version="19.0.0"},43:(e,t,n)=>{"use strict";e.exports=n(288)},149:e=>{"use strict";const t=(e,t,r,a)=>{if("length"===r||"prototype"===r)return;if("arguments"===r||"caller"===r)return;const o=Object.getOwnPropertyDescriptor(e,r),i=Object.getOwnPropertyDescriptor(t,r);!n(o,i)&&a||Object.defineProperty(e,r,i)},n=function(e,t){return void 0===e||e.configurable||e.writable===t.writable&&e.enumerable===t.enumerable&&e.configurable===t.configurable&&(e.writable||e.value===t.value)},r=(e,t)=>`/* Wrapped ${e}*/\n${t}`,a=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),o=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name");e.exports=function(e,n){let{ignoreNonConfigurable:i=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{name:l}=e;for(const r of Reflect.ownKeys(n))t(e,n,r,i);return((e,t)=>{const n=Object.getPrototypeOf(t);n!==Object.getPrototypeOf(e)&&Object.setPrototypeOf(e,n)})(e,n),((e,t,n)=>{const i=""===n?"":`with ${n.trim()}() `,l=r.bind(null,i,t.toString());Object.defineProperty(l,"name",o),Object.defineProperty(e,"toString",{...a,value:l})})(e,n,l),e}},175:(e,t)=>{"use strict";const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,r=/^[\u0021-\u003A\u003C-\u007E]*$/,a=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,o=/^[\u0020-\u003A\u003D-\u007E]*$/,i=Object.prototype.toString,l=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function s(e,t,n){do{const n=e.charCodeAt(t);if(32!==n&&9!==n)return t}while(++t<n);return n}function c(e,t,n){for(;t>n;){const n=e.charCodeAt(--t);if(32!==n&&9!==n)return t+1}return n}function u(e){if(-1===e.indexOf("%"))return e;try{return decodeURIComponent(e)}catch(t){return e}}},288:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function v(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=x.prototype;var y=b.prototype=new v;y.constructor=b,m(y,x.prototype),y.isPureReactComponent=!0;var w=Array.isArray,j={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function S(e,t,r,a,o,i){return r=i.ref,{$$typeof:n,type:e,key:t,ref:void 0!==r?r:null,props:i}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function _(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(){}function O(e,t,a,o,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s,c,u=!1;if(null===e)u=!0;else switch(l){case"bigint":case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0;break;case p:return O((u=e._init)(e._payload),t,a,o,i)}}if(u)return i=i(e),u=""===o?"."+_(e,0):o,w(i)?(a="",null!=u&&(a=u.replace(E,"$&/")+"/"),O(i,t,a,"",(function(e){return e}))):null!=i&&(C(i)&&(s=i,c=a+(null==i.key||e&&e.key===i.key?"":(""+i.key).replace(E,"$&/")+"/")+u,i=S(s.type,c,void 0,0,0,s.props)),t.push(i)),1;u=0;var d,h=""===o?".":o+":";if(w(e))for(var m=0;m<e.length;m++)u+=O(o=e[m],t,a,l=h+_(o,m),i);else if("function"===typeof(m=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=f&&d[f]||d["@@iterator"])?d:null))for(e=m.call(e),m=0;!(o=e.next()).done;)u+=O(o=o.value,t,a,l=h+_(o,m++),i);else if("object"===l){if("function"===typeof e.then)return O(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(P,P):(e.status="pending",e.then((function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)}),(function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)}))),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,a,o,i);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return u}function N(e,t,n){if(null==e)return e;var r=[],a=0;return O(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function z(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function D(){}t.Children={map:N,forEach:function(e,t,n){N(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return N(e,(function(){t++})),t},toArray:function(e){return N(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=x,t.Fragment=a,t.Profiler=i,t.PureComponent=b,t.StrictMode=o,t.Suspense=u,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=j,t.act=function(){throw Error("act(...) is not supported in production builds of React.")},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var r=m({},e.props),a=e.key;if(null!=t)for(o in void 0!==t.ref&&void 0,void 0!==t.key&&(a=""+t.key),t)!k.call(t,o)||"key"===o||"__self"===o||"__source"===o||"ref"===o&&void 0===t.ref||(r[o]=t[o]);var o=arguments.length-2;if(1===o)r.children=n;else if(1<o){for(var i=Array(o),l=0;l<o;l++)i[l]=arguments[l+2];r.children=i}return S(e.type,a,void 0,0,0,r)},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:l,_context:e},e},t.createElement=function(e,t,n){var r,a={},o=null;if(null!=t)for(r in void 0!==t.key&&(o=""+t.key),t)k.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(a[r]=t[r]);var i=arguments.length-2;if(1===i)a.children=n;else if(1<i){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+2];a.children=l}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===a[r]&&(a[r]=i[r]);return S(e,o,void 0,0,0,a)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:z}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=j.T,n={};j.T=n;try{var r=e(),a=j.S;null!==a&&a(n,r),"object"===typeof r&&null!==r&&"function"===typeof r.then&&r.then(D,T)}catch(o){T(o)}finally{j.T=t}},t.unstable_useCacheRefresh=function(){return j.H.useCacheRefresh()},t.use=function(e){return j.H.use(e)},t.useActionState=function(e,t,n){return j.H.useActionState(e,t,n)},t.useCallback=function(e,t){return j.H.useCallback(e,t)},t.useContext=function(e){return j.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return j.H.useDeferredValue(e,t)},t.useEffect=function(e,t){return j.H.useEffect(e,t)},t.useId=function(){return j.H.useId()},t.useImperativeHandle=function(e,t,n){return j.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return j.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return j.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return j.H.useMemo(e,t)},t.useOptimistic=function(e,t){return j.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return j.H.useReducer(e,t,n)},t.useRef=function(e){return j.H.useRef(e)},t.useState=function(e){return j.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return j.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return j.H.useTransition()},t.version="19.0.0"},324:e=>{e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<o.length;s++){var c=o[s];if(!l(c))return!1;var u=e[c],d=t[c];if(!1===(a=n?n.call(r,u,d,c):void 0)||void 0===a&&u!==d)return!1}return!0}},391:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(4)},457:e=>{"use strict";e.exports=()=>{const e={};return e.promise=new Promise(((t,n)=>{e.resolve=t,e.reject=n})),e}},579:(e,t,n)=>{"use strict";e.exports=n(799)},672:(e,t,n)=>{"use strict";var r=n(43);function a(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var i={d:{f:o,r:function(){throw Error(a(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},l=Symbol.for("react.portal");var s=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(a(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:l,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,i.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&i.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin),a="string"===typeof t.integrity?t.integrity:void 0,o="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?i.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):"script"===n&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&i.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else i.d.m(e)},t.requestFormReset=function(e){i.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},t.useFormStatus=function(){return s.H.useHostTransitionStatus()},t.version="19.0.0"},788:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{s(r.next(e))}catch(t){o(t)}}function l(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){e.done?a(e.value):new n((function(t){t(e.value)})).then(i,l)}s((r=r.apply(e,t||[])).next())}))},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(457));function i(e){let t,n,a,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"maxAge";const l=()=>r(this,void 0,void 0,(function*(){if(void 0!==t)return;const l=l=>r(this,void 0,void 0,(function*(){a=o.default();const r=l[1][i]-Date.now();return r<=0?(e.delete(l[0]),void a.resolve()):(t=l[0],n=setTimeout((()=>{e.delete(l[0]),a&&a.resolve()}),r),"function"===typeof n.unref&&n.unref(),a.promise)}));try{for(const t of e)yield l(t)}catch(s){}t=void 0})),s=e.set.bind(e);return e.set=(r,o)=>{e.has(r)&&e.delete(r);const i=s(r,o);return t&&t===r&&(t=void 0,void 0!==n&&(clearTimeout(n),n=void 0),void 0!==a&&(a.reject(void 0),a=void 0)),l(),i},l(),e}t.default=i,e.exports=i,e.exports.default=i},799:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function a(e,t,r){var a=null;if(void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),"key"in t)for(var o in r={},t)"key"!==o&&(r[o]=t[o]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:a,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=a,t.jsxs=a},853:(e,t,n)=>{"use strict";e.exports=n(896)},896:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<o(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,i=a>>>1;r<i;){var l=2*(r+1)-1,s=e[l],c=l+1,u=e[c];if(0>o(s,n))c<a&&0>o(u,s)?(e[r]=u,e[c]=n,r=c):(e[r]=s,e[l]=n,r=l);else{if(!(c<a&&0>o(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var c=[],u=[],d=1,p=null,f=3,h=!1,m=!1,g=!1,x="function"===typeof setTimeout?setTimeout:null,v="function"===typeof clearTimeout?clearTimeout:null,b="undefined"!==typeof setImmediate?setImmediate:null;function y(e){for(var t=r(u);null!==t;){if(null===t.callback)a(u);else{if(!(t.startTime<=e))break;a(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function w(e){if(g=!1,y(e),!m)if(null!==r(c))m=!0,z();else{var t=r(u);null!==t&&T(w,t.startTime-e)}}var j,k=!1,S=-1,C=5,E=-1;function _(){return!(t.unstable_now()-E<C)}function P(){if(k){var e=t.unstable_now();E=e;var n=!0;try{e:{m=!1,g&&(g=!1,v(S),S=-1),h=!0;var o=f;try{t:{for(y(e),p=r(c);null!==p&&!(p.expirationTime>e&&_());){var i=p.callback;if("function"===typeof i){p.callback=null,f=p.priorityLevel;var l=i(p.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof l){p.callback=l,y(e),n=!0;break t}p===r(c)&&a(c),y(e)}else a(c);p=r(c)}if(null!==p)n=!0;else{var s=r(u);null!==s&&T(w,s.startTime-e),n=!1}}break e}finally{p=null,f=o,h=!1}n=void 0}}finally{n?j():k=!1}}}if("function"===typeof b)j=function(){b(P)};else if("undefined"!==typeof MessageChannel){var O=new MessageChannel,N=O.port2;O.port1.onmessage=P,j=function(){N.postMessage(null)}}else j=function(){x(P,0)};function z(){k||(k=!0,j())}function T(e,n){S=x((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,z())},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},t.unstable_scheduleCallback=function(e,a,o){var i=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?i+o:i:o=i,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:o,expirationTime:l=o+l,sortIndex:-1},o>i?(e.sortIndex=o,n(u,e),null===r(c)&&e===r(u)&&(g?(v(S),S=-1):g=!0,T(w,o-i))):(e.sortIndex=l,n(c,e),m||h||(m=!0,z())),e},t.unstable_shouldYield=_,t.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}},922:(e,t,n)=>{"use strict";const r=n(149),a=n(788),o=new WeakMap,i=new WeakMap,l=function(e){let{cacheKey:t,cache:n=new Map,maxAge:o}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"number"===typeof o&&a(n);const l=function(){for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];const l=t?t(a):a[0],s=n.get(l);if(s)return s.data;const c=e.apply(this,a);return n.set(l,{data:c,maxAge:o?Date.now()+o:Number.POSITIVE_INFINITY}),c};return r(l,e,{ignoreNonConfigurable:!0}),i.set(l,n),l};l.decorator=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(t,n,r)=>{const a=t[n];if("function"!==typeof a)throw new TypeError("The decorated value must be a function");delete r.value,delete r.writable,r.get=function(){if(!o.has(this)){const t=l(a,e);return o.set(this,t),t}return o.get(this)}}},l.clear=e=>{const t=i.get(e);if(!t)throw new TypeError("Can't clear a function that was not memoized!");if("function"!==typeof t.clear)throw new TypeError("The cache Map can't be cleared!");t.clear()},e.exports=l},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(672)}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".0e5d4217.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="beyoureact:";n.l=(r,a,o,i)=>{if(e[r])e[r].push(a);else{var l,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){l=d;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+o),l.src=r),e[r]=[a];var p=(t,n)=>{l.onerror=l.onload=null,clearTimeout(f);var a=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(n))),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={792:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise(((n,r)=>a=e[t]=[n,r]));r.push(a[2]=o);var i=n.p+n.u(t),l=new Error;n.l(i,(r=>{if(n.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,a[1](l)}}),"chunk-"+t,t)}};var t=(t,r)=>{var a,o,i=r[0],l=r[1],s=r[2],c=0;if(i.some((t=>0!==e[t]))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(s)s(n)}for(t&&t(r);c<i.length;c++)o=i[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkbeyoureact=self.webpackChunkbeyoureact||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e=n(43),t=n(391),r=(n(175),"popstate");function a(){return d((function(e,t){let{pathname:n,search:r,hash:a}=e.location;return s("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:c(t)}),null,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function o(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function i(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function l(e,t){return{usr:e.state,key:e.key,idx:t}}function s(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?u(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10)}}function c(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function u(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function d(e,t,n){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:i=document.defaultView,v5Compat:u=!1}=a,d=i.history,p="POP",f=null,h=m();function m(){return(d.state||{idx:null}).idx}function g(){p="POP";let e=m(),t=null==e?null:e-h;h=e,f&&f({action:p,location:v.location,delta:t})}function x(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"===typeof e?e:c(e);return n=n.replace(/ $/,"%20"),o(t,`No window.location.(origin|href) available to create URL for href: ${n}`),new URL(n,t)}null==h&&(h=0,d.replaceState({...d.state,idx:h},""));let v={get action(){return p},get location(){return e(i,d)},listen(e){if(f)throw new Error("A history only accepts one active listener");return i.addEventListener(r,g),f=e,()=>{i.removeEventListener(r,g),f=null}},createHref:e=>t(i,e),createURL:x,encodeLocation(e){let t=x(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){p="PUSH";let r=s(v.location,e,t);n&&n(r,e),h=m()+1;let a=l(r,h),o=v.createHref(r);try{d.pushState(a,"",o)}catch(c){if(c instanceof DOMException&&"DataCloneError"===c.name)throw c;i.location.assign(o)}u&&f&&f({action:p,location:v.location,delta:1})},replace:function(e,t){p="REPLACE";let r=s(v.location,e,t);n&&n(r,e),h=m();let a=l(r,h),o=v.createHref(r);d.replaceState(a,"",o),u&&f&&f({action:p,location:v.location,delta:0})},go:e=>d.go(e)};return v}new WeakMap;function p(e,t){return f(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function f(e,t,n,r){let a=_(("string"===typeof t?u(t):t).pathname||"/",n);if(null==a)return null;let o=h(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(o);let i=null;for(let l=0;null==i&&l<o.length;++l){let e=E(a);i=S(o[l],e,r)}return i}function h(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=(e,a,i)=>{let l={relativePath:void 0===i?e.path||"":i,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};l.relativePath.startsWith("/")&&(o(l.relativePath.startsWith(r),`Absolute route path "${l.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(r.length));let s=T([r,l.relativePath]),c=n.concat(l);e.children&&e.children.length>0&&(o(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${s}".`),h(e.children,t,c,s)),(null!=e.path||e.index)&&t.push({path:s,score:k(s,e.index),routesMeta:c})};return e.forEach(((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of m(e.path))a(e,t,n);else a(e,t)})),t}function m(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,a=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return a?[o,""]:[o];let i=m(r.join("/")),l=[];return l.push(...i.map((e=>""===e?o:[o,e].join("/")))),a&&l.push(...i),l.map((t=>e.startsWith("/")&&""===t?"/":t))}var g=/^:[\w-]+$/,x=3,v=2,b=1,y=10,w=-2,j=e=>"*"===e;function k(e,t){let n=e.split("/"),r=n.length;return n.some(j)&&(r+=w),t&&(r+=v),n.filter((e=>!j(e))).reduce(((e,t)=>e+(g.test(t)?x:""===t?b:y)),r)}function S(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:r}=e,a={},o="/",i=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,c="/"===o?t:t.slice(o.length)||"/",u=C({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},c),d=e.route;if(!u&&s&&n&&!r[r.length-1].route.index&&(u=C({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(a,u.params),i.push({params:a,pathname:T([o,u.pathname]),pathnameBase:D(T([o,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(o=T([o,u.pathnameBase]))}return i}function C(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];i("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))");let o=new RegExp(a,t?void 0:"i");return[o,r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],l=o.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=s[n]||"";l=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const i=s[n];return e[r]=a&&!i?void 0:(i||"").replace(/%2F/g,"/"),e}),{}),pathname:o,pathnameBase:l,pattern:e}}function E(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return i(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function _(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function P(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function O(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function N(e){let t=O(e);return t.map(((e,n)=>n===t.length-1?e.pathname:e.pathnameBase))}function z(e,t,n){let r,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?r=u(e):(r={...e},o(!r.pathname||!r.pathname.includes("?"),P("?","pathname","search",r)),o(!r.pathname||!r.pathname.includes("#"),P("#","pathname","hash",r)),o(!r.search||!r.search.includes("#"),P("#","search","hash",r)));let i,l=""===e||""===r.pathname,s=l?"/":r.pathname;if(null==s)i=n;else{let e=t.length-1;if(!a&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}i=e>=0?t[e]:"/"}let c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:n,search:r="",hash:a=""}="string"===typeof e?u(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:A(r),hash:L(a)}}(r,i),d=s&&"/"!==s&&s.endsWith("/"),p=(l||"."===s)&&n.endsWith("/");return c.pathname.endsWith("/")||!d&&!p||(c.pathname+="/"),c}var T=e=>e.join("/").replace(/\/\/+/g,"/"),D=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),A=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",L=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function R(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}var F=["POST","PUT","PATCH","DELETE"],I=(new Set(F),["GET",...F]);new Set(I),Symbol("ResetLoaderData");var M=e.createContext(null);M.displayName="DataRouter";var $=e.createContext(null);$.displayName="DataRouterState";var B=e.createContext({isTransitioning:!1});B.displayName="ViewTransition";var U=e.createContext(new Map);U.displayName="Fetchers";var Y=e.createContext(null);Y.displayName="Await";var W=e.createContext(null);W.displayName="Navigation";var H=e.createContext(null);H.displayName="Location";var q=e.createContext({outlet:null,matches:[],isDataRoute:!1});q.displayName="Route";var V=e.createContext(null);V.displayName="RouteError";function K(){return null!=e.useContext(H)}function Q(){return o(K(),"useLocation() may be used only in the context of a <Router> component."),e.useContext(H).location}var G="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function J(t){e.useContext(W).static||e.useLayoutEffect(t)}function X(){let{isDataRoute:t}=e.useContext(q);return t?function(){let{router:t}=le("useNavigate"),n=ce("useNavigate"),r=e.useRef(!1);J((()=>{r.current=!0}));let a=e.useCallback((async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(r.current,G),r.current&&("number"===typeof e?t.navigate(e):await t.navigate(e,{fromRouteId:n,...a}))}),[t,n]);return a}():function(){o(K(),"useNavigate() may be used only in the context of a <Router> component.");let t=e.useContext(M),{basename:n,navigator:r}=e.useContext(W),{matches:a}=e.useContext(q),{pathname:l}=Q(),s=JSON.stringify(N(a)),c=e.useRef(!1);J((()=>{c.current=!0}));let u=e.useCallback((function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(i(c.current,G),!c.current)return;if("number"===typeof e)return void r.go(e);let o=z(e,JSON.parse(s),l,"path"===a.relative);null==t&&"/"!==n&&(o.pathname="/"===o.pathname?n:T([n,o.pathname])),(a.replace?r.replace:r.push)(o,a.state,a)}),[n,r,s,l,t]);return u}()}e.createContext(null);function Z(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:r}=e.useContext(q),{pathname:a}=Q(),o=JSON.stringify(N(r));return e.useMemo((()=>z(t,JSON.parse(o),a,"path"===n)),[t,o,a,n])}function ee(t,n,r,a){o(K(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:s}=e.useContext(W),{matches:c}=e.useContext(q),d=c[c.length-1],f=d?d.params:{},h=d?d.pathname:"/",m=d?d.pathnameBase:"/",g=d&&d.route;{let e=g&&g.path||"";pe(h,!g||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let x,v=Q();if(n){let e="string"===typeof n?u(n):n;o("/"===m||e.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${e.pathname}" was given in the \`location\` prop.`),x=e}else x=v;let b=x.pathname||"/",y=b;if("/"!==m){let e=m.replace(/^\//,"").split("/");y="/"+b.replace(/^\//,"").split("/").slice(e.length).join("/")}let w=!s&&r&&r.matches&&r.matches.length>0?r.matches:p(t,{pathname:y});i(g||null!=w,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),i(null==w||void 0!==w[w.length-1].route.element||void 0!==w[w.length-1].route.Component||void 0!==w[w.length-1].route.lazy,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let j=oe(w&&w.map((e=>Object.assign({},e,{params:Object.assign({},f,e.params),pathname:T([m,l.encodeLocation?l.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?m:T([m,l.encodeLocation?l.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),c,r,a);return n&&j?e.createElement(H.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},j):j}function te(){let t=ue(),n=R(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},i={padding:"2px 4px",backgroundColor:a},l=null;return console.error("Error handled by React Router default ErrorBoundary:",t),l=e.createElement(e.Fragment,null,e.createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),e.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",e.createElement("code",{style:i},"ErrorBoundary")," or"," ",e.createElement("code",{style:i},"errorElement")," prop on your route.")),e.createElement(e.Fragment,null,e.createElement("h2",null,"Unexpected Application Error!"),e.createElement("h3",{style:{fontStyle:"italic"}},n),r?e.createElement("pre",{style:o},r):null,l)}var ne=e.createElement(te,null),re=class extends e.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?e.createElement(q.Provider,{value:this.props.routeContext},e.createElement(V.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ae(t){let{routeContext:n,match:r,children:a}=t,o=e.useContext(M);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),e.createElement(q.Provider,{value:n},a)}function oe(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(null==t){if(!r)return null;if(r.errors)t=r.matches;else{if(0!==n.length||r.initialized||!(r.matches.length>0))return null;t=r.matches}}let a=t,i=r?.errors;if(null!=i){let e=a.findIndex((e=>e.route.id&&void 0!==i?.[e.route.id]));o(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),a=a.slice(0,Math.min(a.length,e+1))}let l=!1,s=-1;if(r)for(let e=0;e<a.length;e++){let t=a[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:n}=r,o=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!n||void 0===n[t.route.id]);if(t.route.lazy||o){l=!0,a=s>=0?a.slice(0,s+1):[a[0]];break}}}return a.reduceRight(((t,o,c)=>{let u,d=!1,p=null,f=null;r&&(u=i&&o.route.id?i[o.route.id]:void 0,p=o.route.errorElement||ne,l&&(s<0&&0===c?(pe("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,f=null):s===c&&(d=!0,f=o.route.hydrateFallbackElement||null)));let h=n.concat(a.slice(0,c+1)),m=()=>{let n;return n=u?p:d?f:o.route.Component?e.createElement(o.route.Component,null):o.route.element?o.route.element:t,e.createElement(ae,{match:o,routeContext:{outlet:t,matches:h,isDataRoute:null!=r},children:n})};return r&&(o.route.ErrorBoundary||o.route.errorElement||0===c)?e.createElement(re,{location:r.location,revalidation:r.revalidation,component:p,error:u,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()}),null)}function ie(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function le(t){let n=e.useContext(M);return o(n,ie(t)),n}function se(t){let n=e.useContext($);return o(n,ie(t)),n}function ce(t){let n=function(t){let n=e.useContext(q);return o(n,ie(t)),n}(t),r=n.matches[n.matches.length-1];return o(r.route.id,`${t} can only be used on routes that contain a unique "id"`),r.route.id}function ue(){let t=e.useContext(V),n=se("useRouteError"),r=ce("useRouteError");return void 0!==t?t:n.errors?.[r]}var de={};function pe(e,t,n){t||de[e]||(de[e]=!0,i(!1,n))}e.memo((function(e){let{routes:t,future:n,state:r}=e;return ee(t,void 0,r,n)}));function fe(e){o(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function he(t){let{basename:n="/",children:r=null,location:a,navigationType:l="POP",navigator:s,static:c=!1}=t;o(!K(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),p=e.useMemo((()=>({basename:d,navigator:s,static:c,future:{}})),[d,s,c]);"string"===typeof a&&(a=u(a));let{pathname:f="/",search:h="",hash:m="",state:g=null,key:x="default"}=a,v=e.useMemo((()=>{let e=_(f,d);return null==e?null:{location:{pathname:e,search:h,hash:m,state:g,key:x},navigationType:l}}),[d,f,h,m,g,x,l]);return i(null!=v,`<Router basename="${d}"> is not able to match the URL "${f}${h}${m}" because it does not start with the basename, so the <Router> won't render anything.`),null==v?null:e.createElement(W.Provider,{value:p},e.createElement(H.Provider,{children:r,value:v}))}function me(e){let{children:t,location:n}=e;return ee(ge(t),n)}e.Component;function ge(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=[];return e.Children.forEach(t,((t,a)=>{if(!e.isValidElement(t))return;let i=[...n,a];if(t.type===e.Fragment)return void r.push.apply(r,ge(t.props.children,i));o(t.type===fe,`[${"string"===typeof t.type?t.type:t.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),o(!t.props.index||!t.props.children,"An index route cannot have child routes.");let l={id:t.props.id||i.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,hydrateFallbackElement:t.props.hydrateFallbackElement,HydrateFallback:t.props.HydrateFallback,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:!0===t.props.hasErrorBoundary||null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(l.children=ge(t.props.children,i)),r.push(l)})),r}var xe="get",ve="application/x-www-form-urlencoded";function be(e){return null!=e&&"string"===typeof e.tagName}var ye=null;var we=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function je(e){return null==e||we.has(e)?e:(i(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ve}"`),null)}function ke(e,t){let n,r,a,o,i;if(be(l=e)&&"form"===l.tagName.toLowerCase()){let i=e.getAttribute("action");r=i?_(i,t):null,n=e.getAttribute("method")||xe,a=je(e.getAttribute("enctype"))||ve,o=new FormData(e)}else if(function(e){return be(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return be(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let i=e.form;if(null==i)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||i.getAttribute("action");if(r=l?_(l,t):null,n=e.getAttribute("formmethod")||i.getAttribute("method")||xe,a=je(e.getAttribute("formenctype"))||je(i.getAttribute("enctype"))||ve,o=new FormData(i,e),!function(){if(null===ye)try{new FormData(document.createElement("form"),0),ye=!1}catch(e){ye=!0}return ye}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";o.append(`${e}x`,"0"),o.append(`${e}y`,"0")}else t&&o.append(t,r)}}else{if(be(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=xe,r=null,a=ve,i=e}var l;return o&&"text/plain"===a&&(i=o,o=void 0),{action:r,method:n.toLowerCase(),encType:a,formData:o,body:i}}function Se(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}async function Ce(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise((()=>{}))}}function Ee(e){return null!=e&&"string"===typeof e.page}function _e(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function Pe(e,t,n,r,a,o){let i=(e,t)=>!n[t]||e.route.id!==n[t].route.id,l=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===o?t.filter(((e,t)=>i(e,t)||l(e,t))):"data"===o?t.filter(((t,o)=>{let s=r.routes[t.route.id];if(!s||!s.hasLoader)return!1;if(i(t,o)||l(t,o))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof r)return r}return!0})):[]}function Oe(e,t){let{includeHydrateFallback:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r=e.map((e=>{let r=t.routes[e.route.id];if(!r)return[];let a=[r.module];return r.clientActionModule&&(a=a.concat(r.clientActionModule)),r.clientLoaderModule&&(a=a.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(a=a.concat(r.hydrateFallbackModule)),r.imports&&(a=a.concat(r.imports)),a})).flat(1),[...new Set(r)];var r}function Ne(e,t){let n=new Set,r=new Set(t);return e.reduce(((e,a)=>{if(t&&!Ee(a)&&"script"===a.as&&a.href&&r.has(a.href))return e;let o=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(a));return n.has(o)||(n.add(o),e.push({key:o,link:a})),e}),[])}function ze(e){return{__html:e}}Symbol("SingleFetchRedirect");function Te(e,t){let n="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return"/"===n.pathname?n.pathname="_root.data":t&&"/"===_(n.pathname,t)?n.pathname=`${t.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}e.Component;function De(t){let{error:n,isOutsideRemixApp:r}=t;console.error(n);let a,o=e.createElement("script",{dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."\n        );\n      '}});if(R(n))return e.createElement(Ae,{title:"Unhandled Thrown Response!"},e.createElement("h1",{style:{fontSize:"24px"}},n.status," ",n.statusText),o);if(n instanceof Error)0;else{let e=null==n?"Unknown Error":"object"===typeof n&&"toString"in n?n.toString():JSON.stringify(n);new Error(e)}return e.createElement(Ae,{title:"Application Error!",isOutsideRemixApp:r},e.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),e.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},a.stack),o)}function Ae(t){let{title:n,renderScripts:r,isOutsideRemixApp:a,children:o}=t,{routeModules:i}=Me();return i.root?.Layout&&!a?o:e.createElement("html",{lang:"en"},e.createElement("head",null,e.createElement("meta",{charSet:"utf-8"}),e.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),e.createElement("title",null,n)),e.createElement("body",null,e.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},o,r?e.createElement(qe,null):null)))}function Le(e){return!0===e}function Re(){let t=e.useContext(M);return Se(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function Fe(){let t=e.useContext($);return Se(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Ie=e.createContext(void 0);function Me(){let t=e.useContext(Ie);return Se(t,"You must render this element inside a <HydratedRouter> element"),t}function $e(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Be(e,t,n){if(n&&!He)return[e[0]];if(t){let n=e.findIndex((e=>void 0!==t[e.route.id]));return e.slice(0,n+1)}return e}function Ue(t){let{page:n,...r}=t,{router:a}=Re(),o=e.useMemo((()=>p(a.routes,n,a.basename)),[a.routes,n,a.basename]);return o?e.createElement(We,{page:n,matches:o,...r}):null}function Ye(t){let{manifest:n,routeModules:r}=Me(),[a,o]=e.useState([]);return e.useEffect((()=>{let e=!1;return async function(e,t,n){let r=await Promise.all(e.map((async e=>{let r=t.routes[e.route.id];if(r){let e=await Ce(r,n);return e.links?e.links():[]}return[]})));return Ne(r.flat(1).filter(_e).filter((e=>"stylesheet"===e.rel||"preload"===e.rel)).map((e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"})))}(t,n,r).then((t=>{e||o(t)})),()=>{e=!0}}),[t,n,r]),a}function We(t){let{page:n,matches:r,...a}=t,o=Q(),{manifest:i,routeModules:l}=Me(),{basename:s}=Re(),{loaderData:c,matches:u}=Fe(),d=e.useMemo((()=>Pe(n,r,u,i,o,"data")),[n,r,u,i,o]),p=e.useMemo((()=>Pe(n,r,u,i,o,"assets")),[n,r,u,i,o]),f=e.useMemo((()=>{if(n===o.pathname+o.search+o.hash)return[];let e=new Set,t=!1;if(r.forEach((n=>{let r=i.routes[n.route.id];r&&r.hasLoader&&(!d.some((e=>e.route.id===n.route.id))&&n.route.id in c&&l[n.route.id]?.shouldRevalidate||r.hasClientLoader?t=!0:e.add(n.route.id))})),0===e.size)return[];let a=Te(n,s);return t&&e.size>0&&a.searchParams.set("_routes",r.filter((t=>e.has(t.route.id))).map((e=>e.route.id)).join(",")),[a.pathname+a.search]}),[s,c,o,i,d,r,n,l]),h=e.useMemo((()=>Oe(p,i)),[p,i]),m=Ye(p);return e.createElement(e.Fragment,null,f.map((t=>e.createElement("link",{key:t,rel:"prefetch",as:"fetch",href:t,...a}))),h.map((t=>e.createElement("link",{key:t,rel:"modulepreload",href:t,...a}))),m.map((t=>{let{key:n,link:r}=t;return e.createElement("link",{key:n,...r})})))}Ie.displayName="FrameworkContext";var He=!1;function qe(t){let{manifest:n,serverHandoffString:r,isSpaMode:a,ssr:o,renderMeta:i}=Me(),{router:l,static:s,staticContext:c}=Re(),{matches:u}=Fe(),d=Le(o);i&&(i.didRenderScripts=!0);let f=Be(u,null,a);e.useEffect((()=>{0}),[]);let h=e.useMemo((()=>{let a=c?`window.__reactRouterContext = ${r};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",o=s?`${n.hmr?.runtime?`import ${JSON.stringify(n.hmr.runtime)};`:""}${d?"":`import ${JSON.stringify(n.url)}`};\n${f.map(((e,t)=>{let r=`route${t}`,a=n.routes[e.route.id];Se(a,`Route ${e.route.id} not found in manifest`);let{clientActionModule:o,clientLoaderModule:i,hydrateFallbackModule:l,module:s}=a,c=[...o?[{module:o,varName:`${r}_clientAction`}]:[],...i?[{module:i,varName:`${r}_clientLoader`}]:[],...l?[{module:l,varName:`${r}_HydrateFallback`}]:[],{module:s,varName:`${r}_main`}];return 1===c.length?`import * as ${r} from ${JSON.stringify(s)};`:[c.map((e=>`import * as ${e.varName} from "${e.module}";`)).join("\n"),`const ${r} = {${c.map((e=>`...${e.varName}`)).join(",")}};`].join("\n")})).join("\n")}\n  ${d?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let n=new Set(t.state.matches.map((e=>e.route.id))),r=t.state.location.pathname.split("/").filter(Boolean),a=["/"];for(r.pop();r.length>0;)a.push(`/${r.join("/")}`),r.pop();a.forEach((e=>{let r=p(t.routes,e,t.basename);r&&r.forEach((e=>n.add(e.route.id)))}));let o=[...n].reduce(((t,n)=>Object.assign(t,{[n]:e.routes[n]})),{});return{...e,routes:o}}(n,l),null,2)};`:""}\n  window.__reactRouterRouteModules = {${f.map(((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`)).join(",")}};\n\nimport(${JSON.stringify(n.entry.module)});`:" ";return e.createElement(e.Fragment,null,e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:ze(a),type:void 0}),e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:ze(o),type:"module",async:!0}))}),[]),m=He?[]:n.entry.imports.concat(Oe(f,n,{includeHydrateFallback:!0}));return He?null:e.createElement(e.Fragment,null,d?null:e.createElement("link",{rel:"modulepreload",href:n.url,crossOrigin:t.crossOrigin}),e.createElement("link",{rel:"modulepreload",href:n.entry.module,crossOrigin:t.crossOrigin}),[...new Set(g)].map((n=>e.createElement("link",{key:n,rel:"modulepreload",href:n,crossOrigin:t.crossOrigin}))),h);var g}function Ve(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach((t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)}))}}var Ke="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{Ke&&(window.__reactRouterVersion="7.4.0")}catch(Ph){}function Qe(t){let{basename:n,children:r,window:o}=t,i=e.useRef();null==i.current&&(i.current=a({window:o,v5Compat:!0}));let l=i.current,[s,c]=e.useState({action:l.action,location:l.location}),u=e.useCallback((t=>{e.startTransition((()=>c(t)))}),[c]);return e.useLayoutEffect((()=>l.listen(u)),[l,u]),e.createElement(he,{basename:n,children:r,location:s.location,navigationType:s.action,navigator:l})}var Ge=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Je=e.forwardRef((function(t,n){let r,{onClick:a,discover:l="render",prefetch:s="none",relative:u,reloadDocument:d,replace:p,state:f,target:h,to:m,preventScrollReset:g,viewTransition:x,...v}=t,{basename:b}=e.useContext(W),y="string"===typeof m&&Ge.test(m),w=!1;if("string"===typeof m&&y&&(r=m,Ke))try{let e=new URL(window.location.href),t=m.startsWith("//")?new URL(e.protocol+m):new URL(m),n=_(t.pathname,b);t.origin===e.origin&&null!=n?m=n+t.search+t.hash:w=!0}catch(Ph){i(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let j=function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(K(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:a}=e.useContext(W),{hash:i,pathname:l,search:s}=Z(t,{relative:n}),c=l;return"/"!==r&&(c="/"===l?r:T([r,l])),a.createHref({pathname:c,search:s,hash:i})}(m,{relative:u}),[k,S,C]=function(t,n){let r=e.useContext(Ie),[a,o]=e.useState(!1),[i,l]=e.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:u,onMouseLeave:d,onTouchStart:p}=n,f=e.useRef(null);e.useEffect((()=>{if("render"===t&&l(!0),"viewport"===t){let e=new IntersectionObserver((e=>{e.forEach((e=>{l(e.isIntersecting)}))}),{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}}),[t]),e.useEffect((()=>{if(a){let e=setTimeout((()=>{l(!0)}),100);return()=>{clearTimeout(e)}}}),[a]);let h=()=>{o(!0)},m=()=>{o(!1),l(!1)};return r?"intent"!==t?[i,f,{}]:[i,f,{onFocus:$e(s,h),onBlur:$e(c,m),onMouseEnter:$e(u,h),onMouseLeave:$e(d,m),onTouchStart:$e(p,h)}]:[!1,f,{}]}(s,v),E=function(t){let{target:n,replace:r,state:a,preventScrollReset:o,relative:i,viewTransition:l}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=X(),u=Q(),d=Z(t,{relative:i});return e.useCallback((e=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(e,n)){e.preventDefault();let n=void 0!==r?r:c(u)===c(d);s(t,{replace:n,state:a,preventScrollReset:o,relative:i,viewTransition:l})}}),[u,s,d,r,a,n,t,o,i,l])}(m,{replace:p,state:f,target:h,preventScrollReset:g,relative:u,viewTransition:x});let P=e.createElement("a",{...v,...C,href:r||j,onClick:w||d?a:function(e){a&&a(e),e.defaultPrevented||E(e)},ref:Ve(n,S),target:h,"data-discover":y||"render"!==l?void 0:"true"});return k&&!y?e.createElement(e.Fragment,null,P,e.createElement(Ue,{page:j})):P}));Je.displayName="Link";var Xe=e.forwardRef((function(t,n){let{"aria-current":r="page",caseSensitive:a=!1,className:i="",end:l=!1,style:s,to:c,viewTransition:u,children:d,...p}=t,f=Z(c,{relative:p.relative}),h=Q(),m=e.useContext($),{navigator:g,basename:x}=e.useContext(W),v=null!=m&&function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.useContext(B);o(null!=r,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=tt("useViewTransitionState"),i=Z(t,{relative:n.relative});if(!r.isTransitioning)return!1;let l=_(r.currentLocation.pathname,a)||r.currentLocation.pathname,s=_(r.nextLocation.pathname,a)||r.nextLocation.pathname;return null!=C(i.pathname,s)||null!=C(i.pathname,l)}(f)&&!0===u,b=g.encodeLocation?g.encodeLocation(f).pathname:f.pathname,y=h.pathname,w=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;a||(y=y.toLowerCase(),w=w?w.toLowerCase():null,b=b.toLowerCase()),w&&x&&(w=_(w,x)||w);const j="/"!==b&&b.endsWith("/")?b.length-1:b.length;let k,S=y===b||!l&&y.startsWith(b)&&"/"===y.charAt(j),E=null!=w&&(w===b||!l&&w.startsWith(b)&&"/"===w.charAt(b.length)),P={isActive:S,isPending:E,isTransitioning:v},O=S?r:void 0;k="function"===typeof i?i(P):[i,S?"active":null,E?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let N="function"===typeof s?s(P):s;return e.createElement(Je,{...p,"aria-current":O,className:k,ref:n,style:N,to:c,viewTransition:u},"function"===typeof d?d(P):d)}));Xe.displayName="NavLink";var Ze=e.forwardRef(((t,n)=>{let{discover:r="render",fetcherKey:a,navigate:i,reloadDocument:l,replace:s,state:u,method:d=xe,action:p,onSubmit:f,relative:h,preventScrollReset:m,viewTransition:g,...x}=t,v=at(),b=function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:r}=e.useContext(W),a=e.useContext(q);o(a,"useFormAction must be used inside a RouteContext");let[i]=a.matches.slice(-1),l={...Z(t||".",{relative:n})},s=Q();if(null==t){l.search=s.search;let e=new URLSearchParams(l.search),t=e.getAll("index"),n=t.some((e=>""===e));if(n){e.delete("index"),t.filter((e=>e)).forEach((t=>e.append("index",t)));let n=e.toString();l.search=n?`?${n}`:""}}t&&"."!==t||!i.route.index||(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index");"/"!==r&&(l.pathname="/"===l.pathname?r:T([r,l.pathname]));return c(l)}(p,{relative:h}),y="get"===d.toLowerCase()?"get":"post",w="string"===typeof p&&Ge.test(p);return e.createElement("form",{ref:n,method:y,action:b,onSubmit:l?f:e=>{if(f&&f(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=t?.getAttribute("formmethod")||d;v(t||e.currentTarget,{fetcherKey:a,method:n,navigate:i,replace:s,state:u,relative:h,preventScrollReset:m,viewTransition:g})},...x,"data-discover":w||"render"!==r?void 0:"true"})}));function et(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function tt(t){let n=e.useContext(M);return o(n,et(t)),n}Ze.displayName="Form";var nt=0,rt=()=>`__${String(++nt)}__`;function at(){let{router:t}=tt("useSubmit"),{basename:n}=e.useContext(W),r=ce("useRouteId");return e.useCallback((async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:o,method:i,encType:l,formData:s,body:c}=ke(e,n);if(!1===a.navigate){let e=a.fetcherKey||rt();await t.fetch(e,r,a.action||o,{preventScrollReset:a.preventScrollReset,formData:s,body:c,formMethod:a.method||i,formEncType:a.encType||l,flushSync:a.flushSync})}else await t.navigate(a.action||o,{preventScrollReset:a.preventScrollReset,formData:s,body:c,formMethod:a.method||i,formEncType:a.encType||l,replace:a.replace,state:a.state,fromRouteId:r,flushSync:a.flushSync,viewTransition:a.viewTransition})}),[t,n,r])}new TextEncoder;var ot=function(){return ot=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},ot.apply(this,arguments)};Object.create;function it(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var lt=n(324),st=n.n(lt),ct="-ms-",ut="-moz-",dt="-webkit-",pt="comm",ft="rule",ht="decl",mt="@keyframes",gt=Math.abs,xt=String.fromCharCode,vt=Object.assign;function bt(e){return e.trim()}function yt(e,t){return(e=t.exec(e))?e[0]:e}function wt(e,t,n){return e.replace(t,n)}function jt(e,t,n){return e.indexOf(t,n)}function kt(e,t){return 0|e.charCodeAt(t)}function St(e,t,n){return e.slice(t,n)}function Ct(e){return e.length}function Et(e){return e.length}function _t(e,t){return t.push(e),e}function Pt(e,t){return e.filter((function(e){return!yt(e,t)}))}var Ot=1,Nt=1,zt=0,Tt=0,Dt=0,At="";function Lt(e,t,n,r,a,o,i,l){return{value:e,root:t,parent:n,type:r,props:a,children:o,line:Ot,column:Nt,length:i,return:"",siblings:l}}function Rt(e,t){return vt(Lt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Ft(e){for(;e.root;)e=Rt(e.root,{children:[e]});_t(e,e.siblings)}function It(){return Dt=Tt>0?kt(At,--Tt):0,Nt--,10===Dt&&(Nt=1,Ot--),Dt}function Mt(){return Dt=Tt<zt?kt(At,Tt++):0,Nt++,10===Dt&&(Nt=1,Ot++),Dt}function $t(){return kt(At,Tt)}function Bt(){return Tt}function Ut(e,t){return St(At,e,t)}function Yt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Wt(e){return Ot=Nt=1,zt=Ct(At=e),Tt=0,[]}function Ht(e){return At="",e}function qt(e){return bt(Ut(Tt-1,Qt(91===e?e+2:40===e?e+1:e)))}function Vt(e){for(;(Dt=$t())&&Dt<33;)Mt();return Yt(e)>2||Yt(Dt)>3?"":" "}function Kt(e,t){for(;--t&&Mt()&&!(Dt<48||Dt>102||Dt>57&&Dt<65||Dt>70&&Dt<97););return Ut(e,Bt()+(t<6&&32==$t()&&32==Mt()))}function Qt(e){for(;Mt();)switch(Dt){case e:return Tt;case 34:case 39:34!==e&&39!==e&&Qt(Dt);break;case 40:41===e&&Qt(e);break;case 92:Mt()}return Tt}function Gt(e,t){for(;Mt()&&e+Dt!==57&&(e+Dt!==84||47!==$t()););return"/*"+Ut(t,Tt-1)+"*"+xt(47===e?e:Mt())}function Jt(e){for(;!Yt($t());)Mt();return Ut(e,Tt)}function Xt(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Zt(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case ht:return e.return=e.return||e.value;case pt:return"";case mt:return e.return=e.value+"{"+Xt(e.children,r)+"}";case ft:if(!Ct(e.value=e.props.join(",")))return""}return Ct(n=Xt(e.children,r))?e.return=e.value+"{"+n+"}":""}function en(e,t,n){switch(function(e,t){return 45^kt(e,0)?(((t<<2^kt(e,0))<<2^kt(e,1))<<2^kt(e,2))<<2^kt(e,3):0}(e,t)){case 5103:return dt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return dt+e+e;case 4789:return ut+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return dt+e+ut+e+ct+e+e;case 5936:switch(kt(e,t+11)){case 114:return dt+e+ct+wt(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return dt+e+ct+wt(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return dt+e+ct+wt(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return dt+e+ct+e+e;case 6165:return dt+e+ct+"flex-"+e+e;case 5187:return dt+e+wt(e,/(\w+).+(:[^]+)/,dt+"box-$1$2"+ct+"flex-$1$2")+e;case 5443:return dt+e+ct+"flex-item-"+wt(e,/flex-|-self/g,"")+(yt(e,/flex-|baseline/)?"":ct+"grid-row-"+wt(e,/flex-|-self/g,""))+e;case 4675:return dt+e+ct+"flex-line-pack"+wt(e,/align-content|flex-|-self/g,"")+e;case 5548:return dt+e+ct+wt(e,"shrink","negative")+e;case 5292:return dt+e+ct+wt(e,"basis","preferred-size")+e;case 6060:return dt+"box-"+wt(e,"-grow","")+dt+e+ct+wt(e,"grow","positive")+e;case 4554:return dt+wt(e,/([^-])(transform)/g,"$1"+dt+"$2")+e;case 6187:return wt(wt(wt(e,/(zoom-|grab)/,dt+"$1"),/(image-set)/,dt+"$1"),e,"")+e;case 5495:case 3959:return wt(e,/(image-set\([^]*)/,dt+"$1$`$1");case 4968:return wt(wt(e,/(.+:)(flex-)?(.*)/,dt+"box-pack:$3"+ct+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+dt+e+e;case 4200:if(!yt(e,/flex-|baseline/))return ct+"grid-column-align"+St(e,t)+e;break;case 2592:case 3360:return ct+wt(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,yt(e.props,/grid-\w+-end/)}))?~jt(e+(n=n[t].value),"span",0)?e:ct+wt(e,"-start","")+e+ct+"grid-row-span:"+(~jt(n,"span",0)?yt(n,/\d+/):+yt(n,/\d+/)-+yt(e,/\d+/))+";":ct+wt(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return yt(e.props,/grid-\w+-start/)}))?e:ct+wt(wt(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return wt(e,/(.+)-inline(.+)/,dt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ct(e)-1-t>6)switch(kt(e,t+1)){case 109:if(45!==kt(e,t+4))break;case 102:return wt(e,/(.+:)(.+)-([^]+)/,"$1"+dt+"$2-$3$1"+ut+(108==kt(e,t+3)?"$3":"$2-$3"))+e;case 115:return~jt(e,"stretch",0)?en(wt(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return wt(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,a,o,i,l){return ct+n+":"+r+l+(a?ct+n+"-span:"+(o?i:+i-+r)+l:"")+e}));case 4949:if(121===kt(e,t+6))return wt(e,":",":"+dt)+e;break;case 6444:switch(kt(e,45===kt(e,14)?18:11)){case 120:return wt(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+dt+(45===kt(e,14)?"inline-":"")+"box$3$1"+dt+"$2$3$1"+ct+"$2box$3")+e;case 100:return wt(e,":",":"+ct)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return wt(e,"scroll-","scroll-snap-")+e}return e}function tn(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ht:return void(e.return=en(e.value,e.length,n));case mt:return Xt([Rt(e,{value:wt(e.value,"@","@"+dt)})],r);case ft:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(yt(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ft(Rt(e,{props:[wt(t,/:(read-\w+)/,":-moz-$1")]})),Ft(Rt(e,{props:[t]})),vt(e,{props:Pt(n,r)});break;case"::placeholder":Ft(Rt(e,{props:[wt(t,/:(plac\w+)/,":"+dt+"input-$1")]})),Ft(Rt(e,{props:[wt(t,/:(plac\w+)/,":-moz-$1")]})),Ft(Rt(e,{props:[wt(t,/:(plac\w+)/,ct+"input-$1")]})),Ft(Rt(e,{props:[t]})),vt(e,{props:Pt(n,r)})}return""}))}}function nn(e){return Ht(rn("",null,null,null,[""],e=Wt(e),0,[0],e))}function rn(e,t,n,r,a,o,i,l,s){for(var c=0,u=0,d=i,p=0,f=0,h=0,m=1,g=1,x=1,v=0,b="",y=a,w=o,j=r,k=b;g;)switch(h=v,v=Mt()){case 40:if(108!=h&&58==kt(k,d-1)){-1!=jt(k+=wt(qt(v),"&","&\f"),"&\f",gt(c?l[c-1]:0))&&(x=-1);break}case 34:case 39:case 91:k+=qt(v);break;case 9:case 10:case 13:case 32:k+=Vt(h);break;case 92:k+=Kt(Bt()-1,7);continue;case 47:switch($t()){case 42:case 47:_t(on(Gt(Mt(),Bt()),t,n,s),s);break;default:k+="/"}break;case 123*m:l[c++]=Ct(k)*x;case 125*m:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:-1==x&&(k=wt(k,/\f/g,"")),f>0&&Ct(k)-d&&_t(f>32?ln(k+";",r,n,d-1,s):ln(wt(k," ","")+";",r,n,d-2,s),s);break;case 59:k+=";";default:if(_t(j=an(k,t,n,c,u,a,l,b,y=[],w=[],d,o),o),123===v)if(0===u)rn(k,t,j,j,y,o,d,l,w);else switch(99===p&&110===kt(k,3)?100:p){case 100:case 108:case 109:case 115:rn(e,j,j,r&&_t(an(e,j,j,0,0,a,l,b,a,y=[],d,w),w),a,w,d,l,r?y:w);break;default:rn(k,j,j,j,[""],w,0,l,w)}}c=u=f=0,m=x=1,b=k="",d=i;break;case 58:d=1+Ct(k),f=h;default:if(m<1)if(123==v)--m;else if(125==v&&0==m++&&125==It())continue;switch(k+=xt(v),v*m){case 38:x=u>0?1:(k+="\f",-1);break;case 44:l[c++]=(Ct(k)-1)*x,x=1;break;case 64:45===$t()&&(k+=qt(Mt())),p=$t(),u=d=Ct(b=k+=Jt(Bt())),v++;break;case 45:45===h&&2==Ct(k)&&(m=0)}}return o}function an(e,t,n,r,a,o,i,l,s,c,u,d){for(var p=a-1,f=0===a?o:[""],h=Et(f),m=0,g=0,x=0;m<r;++m)for(var v=0,b=St(e,p+1,p=gt(g=i[m])),y=e;v<h;++v)(y=bt(g>0?f[v]+" "+b:wt(b,/&\f/g,f[v])))&&(s[x++]=y);return Lt(e,t,n,0===a?ft:l,s,c,u,d)}function on(e,t,n,r){return Lt(e,t,n,pt,xt(Dt),St(e,2,-2),0,r)}function ln(e,t,n,r,a){return Lt(e,t,n,ht,St(e,0,r),St(e,r+1,-1),r,a)}var sn={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},cn="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",un="active",dn="data-styled-version",pn="6.1.17",fn="/*!sc*/\n",hn="undefined"!=typeof window&&"HTMLElement"in window,mn=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),gn={},xn=(new Set,Object.freeze([])),vn=Object.freeze({});function bn(e,t,n){return void 0===n&&(n=vn),e.theme!==n.theme&&e.theme||t||n.theme}var yn=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),wn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,jn=/(^-|-$)/g;function kn(e){return e.replace(wn,"-").replace(jn,"")}var Sn=/(a)(d)/gi,Cn=function(e){return String.fromCharCode(e+(e>25?39:97))};function En(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Cn(t%52)+n;return(Cn(t%52)+n).replace(Sn,"$1-$2")}var _n,Pn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},On=function(e){return Pn(5381,e)};function Nn(e){return En(On(e)>>>0)}function zn(e){return e.displayName||e.name||"Component"}function Tn(e){return"string"==typeof e&&!0}var Dn="function"==typeof Symbol&&Symbol.for,An=Dn?Symbol.for("react.memo"):60115,Ln=Dn?Symbol.for("react.forward_ref"):60112,Rn={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Fn={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},In={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Mn=((_n={})[Ln]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_n[An]=In,_n);function $n(e){return("type"in(t=e)&&t.type.$$typeof)===An?In:"$$typeof"in e?Mn[e.$$typeof]:Rn;var t}var Bn=Object.defineProperty,Un=Object.getOwnPropertyNames,Yn=Object.getOwnPropertySymbols,Wn=Object.getOwnPropertyDescriptor,Hn=Object.getPrototypeOf,qn=Object.prototype;function Vn(e,t,n){if("string"!=typeof t){if(qn){var r=Hn(t);r&&r!==qn&&Vn(e,r,n)}var a=Un(t);Yn&&(a=a.concat(Yn(t)));for(var o=$n(e),i=$n(t),l=0;l<a.length;++l){var s=a[l];if(!(s in Fn||n&&n[s]||i&&s in i||o&&s in o)){var c=Wn(t,s);try{Bn(e,s,c)}catch(e){}}}}return e}function Kn(e){return"function"==typeof e}function Qn(e){return"object"==typeof e&&"styledComponentId"in e}function Gn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Jn(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Xn(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Zn(e,t,n){if(void 0===n&&(n=!1),!n&&!Xn(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Zn(e[r],t[r]);else if(Xn(t))for(var r in t)e[r]=Zn(e[r],t[r]);return e}function er(e,t){Object.defineProperty(e,"toString",{value:t})}function tr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var nr=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)if((a<<=1)<0)throw tr(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var o=r;o<a;o++)this.groupSizes[o]=0}for(var i=this.indexOfGroup(e+1),l=(o=0,t.length);o<l;o++)this.tag.insertRule(i,t[o])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,o=r;o<a;o++)t+="".concat(this.tag.getRule(o)).concat(fn);return t},e}(),rr=new Map,ar=new Map,or=1,ir=function(e){if(rr.has(e))return rr.get(e);for(;ar.has(or);)or++;var t=or++;return rr.set(e,t),ar.set(t,e),t},lr=function(e,t){or=t+1,rr.set(e,t),ar.set(t,e)},sr="style[".concat(cn,"][").concat(dn,'="').concat(pn,'"]'),cr=new RegExp("^".concat(cn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ur=function(e,t,n){for(var r,a=n.split(","),o=0,i=a.length;o<i;o++)(r=a[o])&&e.registerName(t,r)},dr=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(fn),a=[],o=0,i=r.length;o<i;o++){var l=r[o].trim();if(l){var s=l.match(cr);if(s){var c=0|parseInt(s[1],10),u=s[2];0!==c&&(lr(u,c),ur(e,u,s[3]),e.getTag().insertRules(c,a)),a.length=0}else a.push(l)}}},pr=function(e){for(var t=document.querySelectorAll(sr),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(cn)!==un&&(dr(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function fr(){return n.nc}var hr=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(cn,"]")));return t[t.length-1]}(n),o=void 0!==a?a.nextSibling:null;r.setAttribute(cn,un),r.setAttribute(dn,pn);var i=fr();return i&&r.setAttribute("nonce",i),n.insertBefore(r,o),r},mr=function(){function e(e){this.element=hr(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}throw tr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),gr=function(){function e(e){this.element=hr(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),xr=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),vr=hn,br={isServer:!hn,useCSSOMInjection:!mn},yr=function(){function e(e,t,n){void 0===e&&(e=vn),void 0===t&&(t={});var r=this;this.options=ot(ot({},br),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&hn&&vr&&(vr=!1,pr(this)),er(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=function(n){var a=function(e){return ar.get(e)}(n);if(void 0===a)return"continue";var o=e.names.get(a),i=t.getGroup(n);if(void 0===o||!o.size||0===i.length)return"continue";var l="".concat(cn,".g").concat(n,'[id="').concat(a,'"]'),s="";void 0!==o&&o.forEach((function(e){e.length>0&&(s+="".concat(e,","))})),r+="".concat(i).concat(l,'{content:"').concat(s,'"}').concat(fn)},o=0;o<n;o++)a(o);return r}(r)}))}return e.registerId=function(e){return ir(e)},e.prototype.rehydrate=function(){!this.server&&hn&&pr(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(ot(ot({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new xr(n):t?new mr(n):new gr(n)}(this.options),new nr(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(ir(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(ir(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(ir(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),wr=/&/g,jr=/^\s*\/\/.*$/gm;function kr(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=kr(e.children,t)),e}))}function Sr(e){var t,n,r,a=void 0===e?vn:e,o=a.options,i=void 0===o?vn:o,l=a.plugins,s=void 0===l?xn:l,c=function(e,r,a){return a.startsWith(n)&&a.endsWith(n)&&a.replaceAll(n,"").length>0?".".concat(t):e},u=s.slice();u.push((function(e){e.type===ft&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(wr,n).replace(r,c))})),i.prefix&&u.push(tn),u.push(Zt);var d=function(e,a,o,l){void 0===a&&(a=""),void 0===o&&(o=""),void 0===l&&(l="&"),t=l,n=a,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(jr,""),c=nn(o||a?"".concat(o," ").concat(a," { ").concat(s," }"):s);i.namespace&&(c=kr(c,i.namespace));var d,p=[];return Xt(c,function(e){var t=Et(e);return function(n,r,a,o){for(var i="",l=0;l<t;l++)i+=e[l](n,r,a,o)||"";return i}}(u.concat((d=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),p};return d.hash=s.length?s.reduce((function(e,t){return t.name||tr(15),Pn(e,t.name)}),5381).toString():"",d}var Cr=new yr,Er=Sr(),_r=e.createContext({shouldForwardProp:void 0,styleSheet:Cr,stylis:Er}),Pr=(_r.Consumer,e.createContext(void 0));function Or(){return(0,e.useContext)(_r)}function Nr(t){var n=(0,e.useState)(t.stylisPlugins),r=n[0],a=n[1],o=Or().styleSheet,i=(0,e.useMemo)((function(){var e=o;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target,o]),l=(0,e.useMemo)((function(){return Sr({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:r})}),[t.enableVendorPrefixes,t.namespace,r]);(0,e.useEffect)((function(){st()(r,t.stylisPlugins)||a(t.stylisPlugins)}),[t.stylisPlugins]);var s=(0,e.useMemo)((function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:i,stylis:l}}),[t.shouldForwardProp,i,l]);return e.createElement(_r.Provider,{value:s},e.createElement(Pr.Provider,{value:l},t.children))}var zr=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Er);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,er(this,(function(){throw tr(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Er),this.name+e.hash},e}(),Tr=function(e){return e>="A"&&e<="Z"};function Dr(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Tr(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Ar=function(e){return null==e||!1===e||""===e},Lr=function(e){var t,n,r=[];for(var a in e){var o=e[a];e.hasOwnProperty(a)&&!Ar(o)&&(Array.isArray(o)&&o.isCss||Kn(o)?r.push("".concat(Dr(a),":"),o,";"):Xn(o)?r.push.apply(r,it(it(["".concat(a," {")],Lr(o),!1),["}"],!1)):r.push("".concat(Dr(a),": ").concat((t=a,null==(n=o)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in sn||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Rr(e,t,n,r){return Ar(e)?[]:Qn(e)?[".".concat(e.styledComponentId)]:Kn(e)?!Kn(a=e)||a.prototype&&a.prototype.isReactComponent||!t?[e]:Rr(e(t),t,n,r):e instanceof zr?n?(e.inject(n,r),[e.getName(r)]):[e]:Xn(e)?Lr(e):Array.isArray(e)?Array.prototype.concat.apply(xn,e.map((function(e){return Rr(e,t,n,r)}))):[e.toString()];var a}function Fr(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Kn(n)&&!Qn(n))return!1}return!0}var Ir=On(pn),Mr=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Fr(e),this.componentId=t,this.baseHash=Pn(Ir,t),this.baseStyle=n,yr.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Gn(r,this.staticRulesId);else{var a=Jn(Rr(this.rules,e,t,n)),o=En(Pn(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,o)){var i=n(a,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,i)}r=Gn(r,o),this.staticRulesId=o}else{for(var l=Pn(this.baseHash,n.hash),s="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)s+=u;else if(u){var d=Jn(Rr(u,e,t,n));l=Pn(l,d+c),s+=d}}if(s){var p=En(l>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,n(s,".".concat(p),void 0,this.componentId)),r=Gn(r,p)}}return r},e}(),$r=e.createContext(void 0);$r.Consumer;var Br={};new Set;function Ur(t,n,r){var a=Qn(t),o=t,i=!Tn(t),l=n.attrs,s=void 0===l?xn:l,c=n.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":kn(e);Br[n]=(Br[n]||0)+1;var r="".concat(n,"-").concat(Nn(pn+n+Br[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):c,d=n.displayName,p=void 0===d?function(e){return Tn(e)?"styled.".concat(e):"Styled(".concat(zn(e),")")}(t):d,f=n.displayName&&n.componentId?"".concat(kn(n.displayName),"-").concat(n.componentId):n.componentId||u,h=a&&o.attrs?o.attrs.concat(s).filter(Boolean):s,m=n.shouldForwardProp;if(a&&o.shouldForwardProp){var g=o.shouldForwardProp;if(n.shouldForwardProp){var x=n.shouldForwardProp;m=function(e,t){return g(e,t)&&x(e,t)}}else m=g}var v=new Mr(r,f,a?o.componentStyle:void 0);function b(t,n){return function(t,n,r){var a=t.attrs,o=t.componentStyle,i=t.defaultProps,l=t.foldedComponentIds,s=t.styledComponentId,c=t.target,u=e.useContext($r),d=Or(),p=t.shouldForwardProp||d.shouldForwardProp,f=bn(n,u,i)||vn,h=function(e,t,n){for(var r,a=ot(ot({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var i=Kn(r=e[o])?r(a):r;for(var l in i)a[l]="className"===l?Gn(a[l],i[l]):"style"===l?ot(ot({},a[l]),i[l]):i[l]}return t.className&&(a.className=Gn(a.className,t.className)),a}(a,n,f),m=h.as||c,g={};for(var x in h)void 0===h[x]||"$"===x[0]||"as"===x||"theme"===x&&h.theme===f||("forwardedAs"===x?g.as=h.forwardedAs:p&&!p(x,m)||(g[x]=h[x]));var v=function(e,t){var n=Or();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,h),b=Gn(l,s);return v&&(b+=" "+v),h.className&&(b+=" "+h.className),g[Tn(m)&&!yn.has(m)?"class":"className"]=b,r&&(g.ref=r),(0,e.createElement)(m,g)}(y,t,n)}b.displayName=p;var y=e.forwardRef(b);return y.attrs=h,y.componentStyle=v,y.displayName=p,y.shouldForwardProp=m,y.foldedComponentIds=a?Gn(o.foldedComponentIds,o.styledComponentId):"",y.styledComponentId=f,y.target=a?o.target:t,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,a=t;r<a.length;r++)Zn(e,a[r],!0);return e}({},o.defaultProps,e):e}}),er(y,(function(){return".".concat(y.styledComponentId)})),i&&Vn(y,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function Yr(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var Wr=function(e){return Object.assign(e,{isCss:!0})};function Hr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Kn(e)||Xn(e))return Wr(Rr(Yr(xn,it([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Rr(r):Wr(Rr(Yr(r,t)))}function qr(e,t,n){if(void 0===n&&(n=vn),!t)throw tr(1,t);var r=function(r){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,Hr.apply(void 0,it([r],a,!1)))};return r.attrs=function(r){return qr(e,t,ot(ot({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return qr(e,t,ot(ot({},n),r))},r}var Vr=function(e){return qr(Ur,e)},Kr=Vr;yn.forEach((function(e){Kr[e]=Vr(e)}));var Qr=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Fr(e),yr.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var a=r(Jn(Rr(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&yr.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function Gr(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var a=Hr.apply(void 0,it([t],n,!1)),o="sc-global-".concat(Nn(JSON.stringify(a))),i=new Qr(a,o),l=function(t){var n=Or(),r=e.useContext($r),a=e.useRef(n.styleSheet.allocateGSInstance(o)).current;return n.styleSheet.server&&s(a,t,n.styleSheet,r,n.stylis),e.useLayoutEffect((function(){if(!n.styleSheet.server)return s(a,t,n.styleSheet,r,n.stylis),function(){return i.removeStyles(a,n.styleSheet)}}),[a,t,n.styleSheet,r,n.stylis]),null};function s(e,t,n,r,a){if(i.isStatic)i.renderStyles(e,gn,n,a);else{var o=ot(ot({},t),{theme:bn(t,r,l.defaultProps)});i.renderStyles(e,o,n,a)}}return e.memo(l)}(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=fr(),r=Jn([n&&'nonce="'.concat(n,'"'),"".concat(cn,'="true"'),"".concat(dn,'="').concat(pn,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw tr(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw tr(2);var r=t.instance.toString();if(!r)return[];var a=((n={})[cn]="",n[dn]=pn,n.dangerouslySetInnerHTML={__html:r},n),o=fr();return o&&(a.nonce=o),[e.createElement("style",ot({},a,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new yr({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw tr(2);return e.createElement(Nr,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw tr(3)}})(),"__sc-".concat(cn,"__");const Jr=Kr.div`
  background-image: url("/img/BackgroundImage.jpg"); 
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center; 
  align-items: center; 
  width: 100vw;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`,Xr=Kr.div`
  background-color: rgba(255, 255, 255, 0.95); 
  padding: 50px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  color: black;
  border: solid 2px #6c4539;
  border-radius: 15px; 
  display: flex;
  flex-direction: column; 
  margin-right: 50px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);

  @media (max-width: 1024px) {
    margin-right: 0px;
  }

  @media (max-width: 768px) {
    padding: 30px;
    margin: 0;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`,Zr=Kr.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #FF69B4;
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`,ea=Kr.button`
  background-color: #f45bf4;
  color: white;
  padding: 12px 24px;
  border: solid 2px #6c4539;
  cursor: pointer;
  width: 50%;
  opacity: 0.8;
  font-size: 1rem;
  margin-top: 30px;
  border-radius: 30px; 
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
  font-family: 'Poppins', sans-serif;
  align-self: center;

  &:hover {
    opacity: 1;
    background-color: hsl(300, 99%, 64%);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 0.95rem;
  }
`,ta=Kr.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;

  strong {
    color: #FF69B4;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`,na=Gr`
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #ffe4ec;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #ff69b4;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #ff1493;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
`;var ra=n(579);const aa=()=>{const e=X();return(0,ra.jsxs)(Jr,{children:[(0,ra.jsx)(na,{}),(0,ra.jsxs)(Xr,{children:[(0,ra.jsx)(Zr,{children:"Sobre N\xf3s"}),(0,ra.jsxs)(ta,{children:["A Be You nasceu para simplificar a conex\xe3o entre clientes e estabelecimentos de beleza. ",(0,ra.jsx)("br",{})," ",(0,ra.jsx)("br",{}),"Nossa plataforma centraliza servi\xe7os, pre\xe7os e promo\xe7\xf5es em um s\xf3 lugar, facilitando agendamentos e otimizando a experi\xeancia dos usu\xe1rios. ",(0,ra.jsx)("br",{}),(0,ra.jsx)("br",{}),"Para os sal\xf5es, oferecemos uma ferramenta completa para gerenciar agendas, divulgar ofertas e atrair mais clientes. ",(0,ra.jsx)("br",{}),(0,ra.jsx)("br",{}),"Para os consumidores, garantimos acesso r\xe1pido a op\xe7\xf5es de beleza de qualidade, tornando o processo mais \xe1gil e eficiente.",(0,ra.jsx)("br",{})," ",(0,ra.jsx)("br",{}),(0,ra.jsx)("strong",{children:"Be You: conectando beleza e praticidade em um s\xf3 clique!"})]}),(0,ra.jsx)(ea,{onClick:()=>e("/cadastro"),children:"Cadastro de Usu\xe1rio"}),(0,ra.jsx)(ea,{onClick:()=>e("/cadastroloja"),children:"Cadastro de Loja"})]})]})},oa=Kr.div`
  background-image: url("/img/BackgroundImage.jpg");
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
`,ia=Kr.div`
  position: absolute;
  right: 0;
  margin: 20px;
  margin-right: 150px;
  max-width: 500px;
  padding: 20px;
  background-color: white;
  color: black;
  border: solid 2px #6c4539;

  @media (max-width: 1024px) {
    margin-right: 50px;
    max-width: 90%;
  }

  @media (max-width: 768px) {
    position: relative;
    margin: 20px auto;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    padding: 15px;
    max-width: 95%;
  }
`,la=Kr.h1`
  margin-bottom: 10px;
  color: hsl(321, 100.00%, 58.00%);
  font-size: 2rem;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`,sa=Kr.input`
  width: 100%;
  padding: 15px;
  margin: 15px 0 10px 0;
  border: solid 1px #6c4539;
  background-color: #ffecfc;
  border-radius: 50px;

  &:focus {
    background-color: #ffecfc;
    outline: none;
  }
`,ca=Kr.div`
  color: #f45bf4;
  font-style: none;
  display: block;
  text-align: center;
  text-decoration: none;
`,ua=Kr.input`
  margin-top: 10px;
  margin-right: 10px;
`,da=Kr.label`
  font-size: 15px;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`,pa=Kr.a`
  color: #f45bf4;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: hsl(300, 99%, 64%);
  }
`,fa=Kr.button`
  background-color: #f45bf4;
  color: white;
  padding: 12px 24px;
  border: solid 2px #6c4539;
  cursor: pointer;
  width: 60%;
  opacity: 0.8;
  font-size: 20px;
  margin-top: 20px;
  margin-left: 90px;
  border-radius: 30px;
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
  font-family: 'Poppins', sans-serif;

  &:hover {
    opacity: 1;
    background-color: hsl(300, 99%, 64%);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 10px 20px;
  }
`,ha=()=>{const[t,n]=(0,e.useState)({nome:"",email:"",senha:"",confirmarSenha:"",concordo:!1}),r=X(),a=e=>{const{name:r,value:a,type:o,checked:i}=e.target;n({...t,[r]:"checkbox"===o?i:a})};return(0,ra.jsx)(oa,{children:(0,ra.jsxs)(ia,{children:[(0,ra.jsx)(la,{children:"Cadastro"}),(0,ra.jsxs)("form",{onSubmit:e=>{e.preventDefault(),t.senha===t.confirmarSenha?(alert("Cadastro realizado com sucesso!"),r("/login")):alert("As senhas n\xe3o coincidem")},children:[(0,ra.jsx)("label",{htmlFor:"nome",children:(0,ra.jsx)("b",{children:"Nome"})}),(0,ra.jsx)(sa,{type:"text",placeholder:"Digite seu nome",name:"nome",required:!0,value:t.nome,onChange:a}),(0,ra.jsx)("label",{htmlFor:"email",children:(0,ra.jsx)("b",{children:"E-mail"})}),(0,ra.jsx)(sa,{type:"text",placeholder:"Digite seu e-mail",name:"email",required:!0,value:t.email,onChange:a}),(0,ra.jsx)("label",{htmlFor:"senha",children:(0,ra.jsx)("b",{children:"Senha"})}),(0,ra.jsx)(sa,{type:"password",placeholder:"Digite sua senha",name:"senha",required:!0,value:t.senha,onChange:a}),(0,ra.jsx)("label",{htmlFor:"confirmarSenha",children:(0,ra.jsx)("b",{children:"Confirmar senha"})}),(0,ra.jsx)(sa,{type:"password",placeholder:"Confirme sua senha",name:"confirmarSenha",required:!0,value:t.confirmarSenha,onChange:a}),(0,ra.jsxs)(ca,{children:[(0,ra.jsx)(ua,{type:"checkbox",id:"concordo",name:"concordo",required:!0,checked:t.concordo,onChange:a}),(0,ra.jsxs)(da,{htmlFor:"concordo",children:["Li e concordo com os ",(0,ra.jsx)(pa,{onClick:()=>r("/TermosdeUso"),target:"_blank",children:"termos de uso"})]})]}),(0,ra.jsx)(fa,{type:"submit",children:"Cadastrar"})]})]})})},ma=Kr.div`
  background-image: url("/img/BackgroundImage.jpg");
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`,ga=Kr.div`
  position: absolute;
  right: 0;
  margin: 5px;
  margin-right: 150px;
  max-width: 500px;
  padding: 15px;
  background-color: white;
  color: black;
  border: solid 2px #6c4539;
  border-radius: 12px;

  @media (max-width: 1024px) {
    margin-right: 50px;
    max-width: 90%;
  }

  @media (max-width: 768px) {
    position: static;
    margin: 0 auto;
    width: 100%;
    max-width: 90%;
  }
`,xa=Kr.h1`
  margin-bottom: 10px;
  color: hsl(321, 100%, 58%);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,va=Kr.input`
  width: 100%;
  padding: 15px;
  margin: 8px 0;
  border: solid 1px #6c4539;
  background-color: #ffecfc;
  border-radius: 50px;
  font-size: 1rem;

  &:focus {
    background-color: #ffecfc;
    outline: none;
  }

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 0.95rem;
  }
`,ba=Kr.div`
  color: #f45bf4;
  font-style: none;
  display: block;
  text-align: center;
  text-decoration: none;
  margin-top: 10px;
`,ya=Kr.input`
  margin-top: 10px;
  margin-right: 10px;
`,wa=Kr.label`
  font-size: 15px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`,ja=Kr.a`
  color: #f45bf4;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: hsl(300, 99%, 64%);
  }
`,ka=Kr.button`
  background-color: #f45bf4;
  color: white;
  padding: 12px 24px;
  border: solid 2px #6c4539;
  cursor: pointer;
  width: 60%;
  opacity: 0.8;
  font-size: 20px;
  margin-top: 10px;
  margin-left: 90px;
  border-radius: 30px;
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
  font-family: 'Poppins', sans-serif;

  &:hover {
    opacity: 1;
    background-color: hsl(300, 99%, 64%);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  @media (max-width: 768px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    display: block;
    font-size: 16px;
  }
`,Sa=()=>{const[t,n]=(0,e.useState)({nomeLoja:"",cnpj:"",email:"",senha:"",confirmarSenha:"",concordo:!1}),r=X(),a=e=>{const{name:r,value:a,type:o,checked:i}=e.target;n({...t,[r]:"checkbox"===o?i:a})};return(0,ra.jsx)(ma,{children:(0,ra.jsxs)(ga,{children:[(0,ra.jsx)(xa,{children:"Cadastro da Loja"}),(0,ra.jsxs)("form",{onSubmit:e=>{e.preventDefault(),t.senha===t.confirmarSenha?(alert("Cadastro realizado com sucesso!"),r("/loginloja")):alert("As senhas n\xe3o coincidem")},children:[(0,ra.jsx)("label",{htmlFor:"nomeLoja",children:(0,ra.jsx)("b",{children:"Nome da Loja"})}),(0,ra.jsx)(va,{type:"text",placeholder:"Digite o nome da loja",name:"nomeLoja",required:!0,value:t.nomeLoja,onChange:a}),(0,ra.jsx)("label",{htmlFor:"cnpj",children:(0,ra.jsx)("b",{children:"CNPJ"})}),(0,ra.jsx)(va,{type:"text",placeholder:"Digite o CNPJ",name:"cnpj",required:!0,value:t.cnpj,onChange:a}),(0,ra.jsx)("label",{htmlFor:"email",children:(0,ra.jsx)("b",{children:"E-mail"})}),(0,ra.jsx)(va,{type:"text",placeholder:"Digite seu e-mail",name:"email",required:!0,value:t.email,onChange:a}),(0,ra.jsx)("label",{htmlFor:"senha",children:(0,ra.jsx)("b",{children:"Senha"})}),(0,ra.jsx)(va,{type:"password",placeholder:"Digite sua senha",name:"senha",required:!0,value:t.senha,onChange:a}),(0,ra.jsx)("label",{htmlFor:"confirmarSenha",children:(0,ra.jsx)("b",{children:"Confirmar senha"})}),(0,ra.jsx)(va,{type:"password",placeholder:"Confirme sua senha",name:"confirmarSenha",required:!0,value:t.confirmarSenha,onChange:a}),(0,ra.jsxs)(ba,{children:[(0,ra.jsx)(ya,{type:"checkbox",id:"concordo",name:"concordo",required:!0,checked:t.concordo,onChange:a}),(0,ra.jsxs)(wa,{htmlFor:"concordo",children:["Li e concordo com os ",(0,ra.jsx)(ja,{onClick:()=>r("/TermosdeUso"),target:"_blank",children:"termos de uso"})]})]}),(0,ra.jsx)(ka,{type:"submit",children:"Cadastrar"})]})]})})},Ca=e=>{const t=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,((e,t,n)=>n?n.toUpperCase():t.toLowerCase())))(e);return t.charAt(0).toUpperCase()+t.slice(1)},Ea=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(((e,t,n)=>Boolean(e)&&""!==e.trim()&&n.indexOf(e)===t)).join(" ").trim()};var _a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Pa=(0,e.forwardRef)(((t,n)=>{let{color:r="currentColor",size:a=24,strokeWidth:o=2,absoluteStrokeWidth:i,className:l="",children:s,iconNode:c,...u}=t;return(0,e.createElement)("svg",{ref:n,..._a,width:a,height:a,stroke:r,strokeWidth:i?24*Number(o)/Number(a):o,className:Ea("lucide",l),...u},[...c.map((t=>{let[n,r]=t;return(0,e.createElement)(n,r)})),...Array.isArray(s)?s:[s]])})),Oa=(t,n)=>{const r=(0,e.forwardRef)(((r,a)=>{let{className:o,...i}=r;return(0,e.createElement)(Pa,{ref:a,iconNode:n,className:Ea(`lucide-${l=Ca(t),l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${t}`,o),...i});var l}));return r.displayName=Ca(t),r},Na=Oa("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),za=Oa("bell",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]),Ta=Oa("log-out",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),Da=Oa("minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]),Aa=Oa("plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),La=Oa("trash-2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),Ra=Oa("heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);var Fa={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ia=e.createContext&&e.createContext(Fa),Ma=["attr","size","title"];function $a(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Ba(){return Ba=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ba.apply(this,arguments)}function Ua(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ya(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ua(Object(n),!0).forEach((function(t){Wa(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ua(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Wa(e,t,n){return t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ha(t){return t&&t.map(((t,n)=>e.createElement(t.tag,Ya({key:n},t.attr),Ha(t.child))))}function qa(t){return n=>e.createElement(Va,Ba({attr:Ya({},t.attr)},n),Ha(t.child))}function Va(t){var n=n=>{var r,{attr:a,size:o,title:i}=t,l=$a(t,Ma),s=o||n.size||"1em";return n.className&&(r=n.className),t.className&&(r=(r?r+" ":"")+t.className),e.createElement("svg",Ba({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,a,l,{className:r,style:Ya(Ya({color:t.color||n.color},n.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&e.createElement("title",null,i),t.children)};return void 0!==Ia?e.createElement(Ia.Consumer,null,(e=>n(e))):n(Fa)}function Ka(e){return qa({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(e)}function Qa(e){return qa({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function Ga(e){return qa({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(e)}function Ja(e){return qa({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(e)}const Xa=Kr.div`
    background-color:rgb(255, 228, 230);
`,Za=Kr.header`
    background-image: url("/img/Textura_Rosa.jpg");
    min-height: 100%; 
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover;
    position: relative;
    color: #6c4539;
    padding: 10px 20px;
    display: flex; 
    align-items: center;
    justify-content: space-between;
    border: 0.5px solid #6c4539;
`,eo=Kr.div`
    display: flex;
    align-items: center;
`,to=Kr.img`
    width: 60px;
    height: auto;
    border-radius: 50%;
    border: 2px solid #6c4539;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`,no=Kr.input`
    width: 30%;
    padding: 12px 18px;
    border: 2px solid hsl(300, 99%, 64%);
    border-radius: 20px;
    font-size: 16px;
    color: #6c4539;
    outline: none;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);

    &::placeholder {
        color: #6c4539;
        font-style: italic;
    }

    &:focus {
      border: 2px solid hsl(300, 99%, 64%);
    }

    &:hover {
    box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`,ro=Kr.div`
  overflow: hidden;
`,ao=Kr.a`
  float: left;
  font-size: 15px;
  color: #6c4539;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  border: 1px #FFC9E9;
  display: inline-block;
  line-height: normal;
  margin-left: 15px;
  margin-right: 15px;
  &:hover {
    background-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: hsl(300, 99%, 64%);
    cursor: pointer;
    transform: scale(1.1);
  }
`,oo=Kr.div`
    display: flex;
    overflow: hidden;
    justify-content: flex-end;
    gap: 16px;
`,io=Kr.div`
    display: flex;
    align-items: center;
    overflow: hidden;
`,lo=Kr.div`
    display: flex;
    align-items: center;
    overflow: hidden;
`,so=Kr.div`
    display: flex;
    align-items: center;
    overflow: hidden;
`,co=Kr.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    border: none;
    background-color: transparent;
    color: #6c4539;
    overflow: hidden;
    text-decoration: none;

    &:hover {
      transform: scale(1.1);
      text-decoration: underline;
      color: hsl(300, 99%, 64%);
    }
`,uo=Kr.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    border: none;
    background-color: transparent;
    color: #6c4539;
    text-decoration: none;

    &:hover {
      transform: scale(1.1);
      text-decoration: underline;
      color: hsl(300, 99%, 64%);
    }
`,po=Kr.button`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 32px;
    height: 32px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    border: none;
    background-color: transparent;
    color: #6c4539;
    
    &:hover {
      transform: scale(1.1);
      text-decoration: underline;
      color: hsl(300, 99%, 64%);
    }
`,fo=Kr.h1`
    text-align: left;
    color: #6c4539;
    font-style: bold;
    list-style: none;
    font-size: 40px;
    margin-bottom: 20px;
    margin-left: 50px;
    margin-top: 20px;
`,ho=Kr.div`
  margin-right: 100px;
  margin-top: 30px;
  margin-bottom: 50px;
  background-color: white;
  display: flex;
  align-items: center;
  border: solid 2px #6c4539;
  width: 80%;
  border-radius: 20px;
  padding: 15px;
`,mo=Kr.label`
  display: flex;
  align-items: center;
  gap: 20px;
  color: #6c4539;
  font-weight: bold;
  font-size: 30px;
  width: 100%;
  justify-content: space-between;
`,go=Kr.p`
  color: green;
  font-weight: bold;
  font-size: 30px;
`,xo=Kr.button`
  cursor: pointer;
  border-radius: 30px; 
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
  font-family: 'Poppins', sans-serif;
  padding: 12px 20px;
  background-color: #f45bf4;
  color: white;
  border: solid 2px #6c4539;
  opacity: 0.8;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: #6c4539;
    font-style: italic;
  }

  &:focus {
    border: 2px solid hsl(300, 99%, 64%);
  }

  &:hover {
    box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);
    transform: translateY(-2px);
    transform: scale(1.1);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`,vo=Kr.div`
  width: 80%;
  margin: 20px auto;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`,bo=Kr.div`
  margin-top: 20px;
  padding: 15px;
  background-color: white;
  border: 2px solid #6c4539;
  border-radius: 10px;
  text-align: left;

  h2 {
    color: #6c4539;
  }
`,yo=Kr.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
  padding: 12px;
  background-color: #f9f9f9;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  gap: 10px;

  input[type="checkbox"] {
    margin-right: 10px;
  }
`,wo=Kr.div`
  display: flex;
  align-items: left;
  gap: 10px;
  margin-left: 2px;
`,jo=Kr.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-right: 5px;
`,ko=Kr.span`
    font-weight: bold;
`,So=Kr.input`
    margin-right: 10px;
`,Co=Kr.input`
    margin-right: 10px;
`,Eo=Kr.img`
  width: 30px;
  margin-top: 2px;
`,_o=Kr.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Po=Kr.button`
  width: 18px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  background-color: #ffc9e9;
  color: #6c4539;
  border: solid 1px #6c4539;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);

    &:hover {
    box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);
    transform: translateY(-2px);
    background-color:hsl(300, 99%, 64%);
    color: #6c4539;
    transform: scale(1.1);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`,Oo=Kr.span`
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  backdrop-filter: blur(8px);
  color: #6c4539;

  &:hover {
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    transform: scale(1.1);
    color: hsl(300, 99%, 64%);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`,No=Kr.span`
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  color: #6c4539;
  backdrop-filter: blur(8px);

  &:hover {
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    transform: scale(1.1);
    color: hsl(300, 99%, 64%);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`,zo=(Kr.img`
  width: 50px;
`,Kr.div`
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f8d7da;
  color: #721c24;
  padding: 10px;
  border-radius: 5px;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 0.9;
`),To=Kr.div`
  background-color: #FFC9E9;
  display: flex;
  color: white;
  padding: 40px 80px;
  display: flex; /*conteiner manipulavel*/
  flex-wrap: wrap;
  justify-content: space-between;
  border: 3px solid #6c4539;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
`,Do=Kr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;
`,Ao=Kr.a`
  font-size: 15px;
  color: #6c4539;
  text-decoration: none;
  font-weight: bold;
  border: 1px #FFC9E9;
  display: inline-block;
  line-height: normal;
  text-decoration: none;
  margin: 10px 0;
  text-align: center;
  &:hover {
    background-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: hsl(300, 99%, 64%);
    cursor: pointer;
    transform: scale(1.1);
  }
`,Lo=Kr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; 
  flex: 1;
  min-width: 200px;
`,Ro=Kr.div`
  display: flex;
  gap: 15px;
  font-size: 22px;
  width: 20px;
  justify-content: center;
`,Fo=Kr.div`
  display: flex;
  gap: 30px;
  cursor: pointer;
  color: #6c4539;
  flex-wrap: wrap;
  margin-top: 20px;
`,Io=Kr.div`
  width: 100%;
  border-top: 1px solid #6c4539;
  text-align: center;
  padding-top: 10px;
  margin-top: 20px;
`,Mo=Kr.p`
  font-size: 12px;
  color: #6c4539;
`,$o=Kr.img`
  width: 100px;
  margin-bottom: 20px;
  margin-top: 20px;
`,Bo=Kr.h3`
    text-align: center;
    color: #6c4539;
    font-style: bold;
    list-style: none;
    margin-bottom: 10px;
    font-size: 40px;
`,Uo=Gr`
  ::-webkit-scrollbar {
    width: 10px;
    max-height: 400px;
    overflow-y: auto;
  }
  ::-webkit-scrollbar-track {
    background: #ffe4ec;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #ff69b4;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #ff1493;
  }
`;const Yo=function(){const t=X(),[n,r]=(0,e.useState)(!1),[a,o]=(0,e.useState)([{nome:"Bellus Esmaltaria",selecionada:!1,itens:[{nome:"Esmalte em Gel - Preto",preco:10,selecionado:!1,quantidade:1,favorito:!1,imagem:"/img/esmalte_preto.webp"},{nome:"Esmalte em Gel - Azul",preco:10,selecionado:!1,quantidade:1,favorito:!1,imagem:"/img/esmalte_azul.webp"}]},{nome:"Marcia Travessoni",selecionada:!1,itens:[{nome:"Creme de Pentear - Elseve",preco:30,selecionado:!1,quantidade:1,favorito:!1,imagem:"/img/creme_pentear.jpeg"}]},{nome:"Monisatti",selecionada:!1,itens:[{nome:"M\xe1scara Capilar - Eudora",preco:75,selecionado:!1,quantidade:1,favorito:!1,imagem:"/img/mascara_capilar.jpeg"}]}]),[i,l]=(0,e.useState)(""),s=(e,t,n)=>{o((r=>{const a=[...r],o=a[e].itens[t];return"+"===n&&o.quantidade<10&&o.quantidade++,"-"===n&&o.quantidade>1&&o.quantidade--,a}))};return(0,ra.jsxs)(Xa,{children:[(0,ra.jsx)(Uo,{}),(0,ra.jsxs)(Za,{children:[(0,ra.jsx)(eo,{children:(0,ra.jsx)(to,{onClick:e=>{e.preventDefault(),t("/PaginaInicial")},src:"/img/new_logo.jpg",alt:"Logo"})}),(0,ra.jsxs)(ro,{children:[(0,ra.jsx)(ao,{onClick:()=>t("/PaginaInicial"),children:"Inicio"}),(0,ra.jsx)(ao,{onClick:()=>t("/Carrinho"),children:"Meu Carrinho"}),(0,ra.jsx)(ao,{onClick:()=>t("/Pesquisar"),children:"Pesquisar"}),(0,ra.jsx)(ao,{onClick:()=>t("/Agendamentos"),children:"Agendamentos"}),(0,ra.jsx)(ao,{onClick:()=>t("/FAvoritos_perfil"),children:"Favoritos"})]}),(0,ra.jsx)(no,{type:"text",placeholder:"Busque por item ou loja"}),(0,ra.jsxs)(oo,{children:[(0,ra.jsx)(io,{children:(0,ra.jsx)(co,{onClick:()=>t("/MeuPerfil"),children:(0,ra.jsx)(Na,{className:"icone"})})}),(0,ra.jsx)(lo,{children:(0,ra.jsx)(uo,{onClick:()=>t("/notificacoes_perfil"),children:(0,ra.jsx)(za,{className:"icone"})})}),(0,ra.jsx)(so,{children:(0,ra.jsx)(po,{onClick:()=>{t("/bemvindo")},children:(0,ra.jsx)(Ta,{className:"icone"})})})]})]}),(0,ra.jsx)("main",{children:(0,ra.jsxs)(vo,{children:[(0,ra.jsxs)(ho,{children:[(0,ra.jsx)("input",{type:"checkbox",id:"concordo",checked:n,onChange:()=>{const e=!n;r(e),o(a.map((t=>({...t,selecionada:e,itens:t.itens.map((t=>({...t,selecionado:e})))}))))}}),(0,ra.jsxs)(mo,{children:[(0,ra.jsx)(ko,{children:n?"Desmarcar tudo":"Selecionar tudo"}),(0,ra.jsxs)(go,{children:["R$",a.reduce(((e,t)=>e+t.itens.reduce(((e,t)=>e+(t.selecionado?t.preco*t.quantidade:0)),0)),0),",00"]}),(0,ra.jsx)(xo,{children:"Continuar"})]})]}),i&&(0,ra.jsx)(zo,{children:i}),a.map(((e,t)=>(0,ra.jsxs)(bo,{children:[(0,ra.jsx)(Eo,{src:"/img/casinha.jpg"}),(0,ra.jsx)(fo,{children:e.nome}),(0,ra.jsx)(So,{type:"checkbox",checked:e.selecionada,onChange:()=>{return e=t,void o((t=>{const n=[...t];return n[e].selecionada=!n[e].selecionada,n[e].itens=n[e].itens.map((t=>({...t,selecionado:n[e].selecionada}))),n}));var e}}),(0,ra.jsx)(ko,{children:e.selecionada?"Desmarcar Tudo":"Selecionar Tudo"}),e.itens.map(((e,n)=>(0,ra.jsxs)(yo,{children:[(0,ra.jsxs)(wo,{children:[(0,ra.jsx)("img",{src:e.imagem,alt:e.nome,style:{width:"50px",height:"50px",marginRight:"10px"}}),(0,ra.jsx)(Co,{type:"checkbox",checked:e.selecionado,onChange:()=>((e,t)=>{o((n=>{const a=[...n];return a[e].itens[t].selecionado=!a[e].itens[t].selecionado,a[e].selecionada=a[e].itens.every((e=>e.selecionado)),r(a.every((e=>e.selecionada))),a}))})(t,n)}),e.nome," (R$",e.preco,",00)"]}),(0,ra.jsxs)(jo,{children:[(0,ra.jsxs)(_o,{children:[(0,ra.jsx)(Po,{onClick:()=>s(t,n,"-"),children:(0,ra.jsx)(Da,{size:16,strokeWidth:3})}),e.quantidade,(0,ra.jsx)(Po,{onClick:()=>s(t,n,"+"),children:(0,ra.jsx)(Aa,{size:16,strokeWidth:3})})]}),(0,ra.jsx)(Oo,{onClick:()=>((e,t)=>{o((n=>{const r=[...n];return r[e].itens.splice(t,1),r}))})(t,n),children:(0,ra.jsx)(La,{})}),(0,ra.jsx)(No,{onClick:()=>((e,t)=>{const n=[...a],r=n[e].itens[t];r.favorito=!r.favorito,o(n),r.favorito?l("Adicionado aos favoritos"):l("Removido dos favoritos"),setTimeout((()=>l("")),2e3)})(t,n),style:{color:e.favorito?"hotpink":"#6c4539"},children:(0,ra.jsx)(Ra,{fill:e.favorito?"hotpink":"none"})})]})]},n)))]},t)))]})}),(0,ra.jsx)(To,{children:(0,ra.jsxs)(Do,{children:[(0,ra.jsxs)(Lo,{children:[(0,ra.jsx)(Bo,{children:"BeYou"}),(0,ra.jsx)(Ao,{children:"Site Institucional"}),(0,ra.jsx)(Ao,{children:"Fale Conosco"}),(0,ra.jsx)(Ao,{children:"Conta e Seguran\xe7a"}),(0,ra.jsx)(Ao,{children:"Carreiras"}),(0,ra.jsx)(Ao,{children:"Entregadores"})]}),(0,ra.jsxs)(Lo,{children:[(0,ra.jsx)(Bo,{children:"Descubra"}),(0,ra.jsx)(Ao,{children:"Cadastre sua loja"}),(0,ra.jsx)(Ao,{children:"Beyou Shop"}),(0,ra.jsx)(Ao,{children:"BeYou Empresas"}),(0,ra.jsx)(Ao,{children:"Blog BeYou Empresas"})]}),(0,ra.jsxs)(Lo,{children:[(0,ra.jsx)(Bo,{children:"Social"}),(0,ra.jsxs)(Ro,{children:[(0,ra.jsx)(Ao,{children:(0,ra.jsx)(Ka,{})}),(0,ra.jsx)(Ao,{children:(0,ra.jsx)(Ga,{})}),(0,ra.jsx)(Ao,{children:(0,ra.jsx)(Ja,{})}),(0,ra.jsx)(Ao,{children:(0,ra.jsx)(Qa,{})})]})]}),(0,ra.jsxs)(Io,{children:[(0,ra.jsx)($o,{src:"/img/new_logo.jpg",alt:"BeYou Logo"}),(0,ra.jsx)(Mo,{children:"\xa9 Copyright 2025 - BeYou. Todos os direitos reservados."}),(0,ra.jsx)("br",{}),(0,ra.jsx)(Mo,{children:"CNPJ 00.000.000/0000-00 / Endere\xe7o fict\xedcio - Cidade/Estado - CEP 00000-000"})]}),(0,ra.jsxs)(Fo,{children:[(0,ra.jsx)(Ao,{children:"Termos e Condi\xe7\xf5es de Uso"})," | ",(0,ra.jsx)(Ao,{children:"Codigo de Conduta"})," | ",(0,ra.jsx)(Ao,{children:"Privacidade"})," | ",(0,ra.jsx)(Ao,{children:"Dicas de Seguran\xe7a"})]})]})})]})},Wo=Kr.div`
    background-color:rgb(255, 228, 230);
`,Ho=Kr.header`
    background-image: url("/img/Textura_Rosa.jpg");
    min-height: 100%; 
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover;
    position: relative;
    color: #6c4539;
    padding: 10px 20px;
    display: flex; 
    align-items: center;
    justify-content: space-between;
    border: 0.5px solid #6c4539;
`,qo=Kr.div`
    display: flex;
    align-items: center;
`,Vo=Kr.img`
    width: 60px;
    height: auto;
    border-radius: 50%;
    border: 2px solid #6c4539;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`,Ko=Kr.input`
    width: 30%;
    padding: 10px;
    border: 2px solid hsl(300, 99%, 64%);
    border-radius: 20px;
    font-size: 16px;
    color: #6c4539;
    outline: none;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &::placeholder {
        color: #6c4539;
    }
`,Qo=Kr.div`
  overflow: hidden;
`,Go=Kr.a`
  float: left;
  font-size: 15px;
  color: #6c4539;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  border: 1px #FFC9E9;
  display: inline-block;
  line-height: normal;
  margin-left: 15px;
  margin-right: 15px;
  &:hover {
    background-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: hsl(300, 99%, 64%);
    cursor: pointer;
    transform: scale(1.1);
  }
`,Jo=Kr.div`
    display: flex;
    overflow: hidden;
    justify-content: flex-end;
    gap: 16px;
`,Xo=Kr.div`
    display: flex;
    align-items: center;
    overflow: hidden;
`,Zo=Kr.div`
    display: flex;
    align-items: center;
    overflow: hidden;
`,ei=Kr.div`
    display: flex;
    align-items: center;
    overflow: hidden;
`,ti=Kr.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    border: none;
    background-color: transparent;
    color: #6c4539;
    overflow: hidden;
    text-decoration: none;

    &:hover {
      transform: scale(1.1);
      text-decoration: underline;
      color: hsl(300, 99%, 64%);
    }
`,ni=Kr.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    border: none;
    background-color: transparent;
    color: #6c4539;
    text-decoration: none;

    &:hover {
      transform: scale(1.1);
      text-decoration: underline;
      color: hsl(300, 99%, 64%);
    }
`,ri=Kr.button`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 32px;
    height: 32px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    border: none;
    background-color: transparent;
    color: #6c4539;
    
    &:hover {
      transform: scale(1.1);
      text-decoration: underline;
      color: hsl(300, 99%, 64%);
    }
`,ai=(Kr.div`
    text-align: left;
    color: #6c4539;
    font-style: bold;
    list-style: none;
    font-size: 40px;
    margin-bottom: 20px;
    margin-left: 50px;
    margin-top: 20px;
    
`,Kr.div`
  background-color: #FFC9E9;
  display: flex;
  color: white;
  padding: 40px 80px;
  display: flex; /*conteiner manipulavel*/
  flex-wrap: wrap;
  justify-content: space-between;
  border: 3px solid #6c4539;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
`),oi=Kr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;
`,ii=Kr.a`
  font-size: 15px;
  color: #6c4539;
  text-decoration: none;
  font-weight: bold;
  border: 1px #FFC9E9;
  display: inline-block;
  line-height: normal;
  text-decoration: none;
  margin: 10px 0;
  text-align: center;
  &:hover {
    background-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: hsl(300, 99%, 64%);
    cursor: pointer;
    transform: scale(1.1);
  }
`,li=Kr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; 
  flex: 1;
  min-width: 200px;
`,si=Kr.div`
  display: flex;
  gap: 15px;
  font-size: 22px;
  width: 20px;
  justify-content: center;
`,ci=Kr.div`
  display: flex;
  gap: 30px;
  cursor: pointer;
  color: #6c4539;
  flex-wrap: wrap;
  margin-top: 20px;
`,ui=Kr.div`
  width: 100%;
  border-top: 1px solid #6c4539;
  text-align: center;
  padding-top: 10px;
  margin-top: 20px;
`,di=Kr.p`
  font-size: 12px;
  color: #6c4539;
`,pi=Kr.img`
  width: 100px;
  margin-bottom: 20px;
  margin-top: 20px;
`,fi=Kr.h3`
    text-align: center;
    color: #6c4539;
    font-style: bold;
    list-style: none;
    margin-bottom: 10px;
    font-size: 40px;
`,hi=Kr.div`
  color: #6c4539;
  font-style: bold;
  list-style: none;
  font-size: 40px;
  margin-bottom: 20px;
  margin-left: 50px;
  margin-top: 20px;

`,mi=Kr.div`
  color: #6c4539;
  width: 1000px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.38);
  opacity: 90%;
  border-radius: 12px;
  border: 1px solid #6c4539;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
    transform: scale(1.05);
  }
`,gi=Kr.div`
  font-size: 30px;
  font-weight: bold;
`,xi=Kr.div`
  font-size: 20x;
  font-weight: normal;
  margin-top: 10px;
  display: ${e=>e.visivel?"block":"none"};
  line-height: 1.5; /* Espaçamento entre as linhas */
  text-align: justify; /* Justificação do texto */
`,vi=Kr.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 20px;
  white-space: pre-line; /* permite que \n funcione como quebra de linha */
`,bi=Kr.div`
  font-size: 20px;
  gap: 8px;
  margin: 5px 0;
`,yi=Kr.textarea`
  width: 100%;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px;
  font-size: 14px;
  resize: none;
`,wi=Kr.button`
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  border: none;
  background-color: #fd99d5;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  transform: scale(1);

  &:hover {
    background-color: #fd99d5;
  }

  &:active {
    transform: scale(0.95); /* Simula o botão sendo pressionado */
    background-color: #fd99d5;
  }
`;function ji(e){let{ativo:t,setItemAtivo:n}=e;return(0,ra.jsxs)(mi,{onClick:n,children:[(0,ra.jsx)(gi,{children:"Termos e Condi\xe7\xf5es"}),(0,ra.jsxs)(xi,{visivel:t,children:[(0,ra.jsx)("b",{children:"Bem-vindo ao BeYou!"}),"Antes de utilizar nossos servi\xe7os, \xe9 essencial que voc\xea leia e compreenda nossos ",(0,ra.jsx)("b",{children:"Termos e Condi\xe7\xf5es"}),". Este documento estabelece as diretrizes para o uso da plataforma, garantindo uma experi\xeancia segura e transparente para todos os usu\xe1rios.",(0,ra.jsx)("br",{}),(0,ra.jsx)("br",{}),"Nosso aplicativo tem como objetivo conectar clientes a sal\xf5es de beleza de maneira simples e eficiente, permitindo que voc\xea encontre e agende servi\xe7os pr\xf3ximos de sua localiza\xe7\xe3o. Ao acessar e utilizar nossa plataforma, voc\xea concorda com as regras estabelecidas, incluindo:",(0,ra.jsx)("br",{}),(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"\ud83d\udccc Cadastro e Responsabilidade do Usu\xe1rio"})," \u2013 Para utilizar alguns dos recursos do aplicativo, pode ser necess\xe1rio criar uma conta e fornecer informa\xe7\xf5es pessoais. Voc\xea \xe9 respons\xe1vel pela veracidade dos dados informados e pela seguran\xe7a de suas credenciais de acesso.",(0,ra.jsx)("br",{}),(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"\ud83d\udd17 Funcionamento do Aplicativo"})," \u2013 A plataforma atua como intermediadora entre clientes e sal\xf5es de beleza, mas n\xe3o se responsabiliza diretamente pelos servi\xe7os prestados pelos estabelecimentos cadastrados.",(0,ra.jsx)("br",{}),(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"\ud83d\udcb3 Pagamentos e Cancelamentos"})," \u2013 Dependendo das funcionalidades dispon\xedveis, o aplicativo pode permitir o pagamento antecipado de servi\xe7os. Informa\xe7\xf5es sobre reembolsos, cancelamentos e taxas ser\xe3o descritas nesta se\xe7\xe3o.",(0,ra.jsx)("br",{}),(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"\u2696\ufe0f Conduta do Usu\xe1rio"})," \u2013 O uso da plataforma deve ser feito de maneira \xe9tica e respeitosa. Qualquer comportamento abusivo, fraudulento ou que viole nossas diretrizes pode resultar na suspens\xe3o da conta.",(0,ra.jsx)("br",{}),(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"\ud83d\udce2 Altera\xe7\xf5es nos Termos"})," \u2013 Podemos atualizar os Termos e Condi\xe7\xf5es periodicamente para aprimorar nossa plataforma e atender a requisitos legais. Sempre notificaremos os usu\xe1rios sobre mudan\xe7as relevantes.",(0,ra.jsx)("br",{}),(0,ra.jsx)("br",{}),"Caso tenha d\xfavidas ou precise de mais informa\xe7\xf5es, consulte o documento completo de ",(0,ra.jsx)("b",{children:"Termos e Condi\xe7\xf5es"})," diretamente no aplicativo ou entre em contato com nossa equipe de suporte."]})]})}function ki(e){let{ativo:t,setItemAtivo:n}=e;return(0,ra.jsxs)(mi,{onClick:n,children:[(0,ra.jsx)(gi,{children:"Politica de Privacidade"}),(0,ra.jsxs)(xi,{visivel:t,children:["A sua privacidade \xe9 uma de nossas prioridades. No ",(0,ra.jsx)("b",{children:"BeYou"}),", garantimos que seus dados pessoais sejam tratados com responsabilidade e transpar\xeancia. Nossa ",(0,ra.jsx)("b",{children:"Pol\xedtica de Privacidade"})," detalha como coletamos, utilizamos, armazenamos e protegemos suas informa\xe7\xf5es.",(0,ra.jsx)("br",{}),(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"1. Coleta de Informa\xe7\xf5es"}),(0,ra.jsx)("br",{}),"Coletamos dados essenciais para o funcionamento da plataforma, incluindo:",(0,ra.jsx)("br",{}),(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"Informa\xe7\xf5es de Cadastro:"})," Nome, e-mail, telefone e outras informa\xe7\xf5es fornecidas durante a cria\xe7\xe3o da conta.",(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"Localiza\xe7\xe3o:"})," Para facilitar a busca por sal\xf5es pr\xf3ximos, podemos solicitar permiss\xe3o para acessar sua localiza\xe7\xe3o.",(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"Hist\xf3rico de Uso:"})," Registramos suas intera\xe7\xf5es com o aplicativo, como servi\xe7os agendados, avalia\xe7\xf5es feitas e prefer\xeancias selecionadas.",(0,ra.jsx)("br",{}),(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"2. Uso dos Dados"}),(0,ra.jsx)("br",{}),"Seus dados s\xe3o utilizados para:",(0,ra.jsx)("br",{}),(0,ra.jsx)("br",{}),"\u2714\ufe0f Personalizar sua experi\xeancia, recomendando sal\xf5es e servi\xe7os que possam te interessar.",(0,ra.jsx)("br",{}),"\u2714\ufe0f Melhorar o funcionamento do aplicativo com base no comportamento dos usu\xe1rios.",(0,ra.jsx)("br",{}),"\u2714\ufe0f Garantir a seguran\xe7a da plataforma e evitar fraudes.",(0,ra.jsx)("br",{}),"\u2714\ufe0f Enviar notifica\xe7\xf5es sobre promo\xe7\xf5es, novidades e atualiza\xe7\xf5es (caso voc\xea autorize).",(0,ra.jsx)("br",{}),(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"3. Compartilhamento de Informa\xe7\xf5es"}),(0,ra.jsx)("br",{}),"O ",(0,ra.jsx)("b",{children:"BeYou"})," n\xe3o vende ou compartilha seus dados pessoais com terceiros sem sua permiss\xe3o. No entanto, algumas informa\xe7\xf5es podem ser compartilhadas com os sal\xf5es de beleza cadastrados quando voc\xea agenda um servi\xe7o, garantindo que sua reserva seja processada corretamente.",(0,ra.jsx)("br",{}),(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"4. Seguran\xe7a e Armazenamento"}),(0,ra.jsx)("br",{}),"Adotamos medidas de seguran\xe7a para proteger suas informa\xe7\xf5es contra acessos n\xe3o autorizados, vazamentos ou uso indevido. Seus dados s\xe3o armazenados em servidores seguros e respeitamos todas as regulamenta\xe7\xf5es de prote\xe7\xe3o de dados vigentes.",(0,ra.jsx)("br",{}),(0,ra.jsx)("br",{}),"Caso tenha d\xfavidas ou queira saber mais detalhes, consulte nossa ",(0,ra.jsx)("b",{children:"Pol\xedtica de Privacidade"})," completa no aplicativo."]})]})}function Si(e){let{ativo:t,setItemAtivo:n}=e;return(0,ra.jsxs)(mi,{onClick:n,children:[(0,ra.jsx)(gi,{children:"Sobre"}),(0,ra.jsxs)(xi,{visivel:t,children:["O BeYou foi criado com um prop\xf3sito claro: facilitar a busca e o agendamento de servi\xe7os de beleza,",(0,ra.jsx)("br",{}),"tornando a experi\xeancia dos usu\xe1rios mais r\xe1pida, intuitiva e agrad\xe1vel.",(0,ra.jsx)("br",{}),(0,ra.jsx)("br",{}),"Sabemos que encontrar um sal\xe3o de beleza de confian\xe7a pode ser um desafio, especialmente em cidades grandes onde h\xe1 diversas op\xe7\xf5es dispon\xedveis.",(0,ra.jsx)("br",{}),"Nosso objetivo \xe9 simplificar essa jornada, permitindo que voc\xea descubra sal\xf5es pr\xf3ximos, compare servi\xe7os e fa\xe7a agendamentos com poucos toques na tela.",(0,ra.jsx)("br",{}),(0,ra.jsx)("br",{}),"\ud83d\udd0d ",(0,ra.jsx)("b",{children:"Busca Inteligente"})," \u2013 Encontre sal\xf5es de beleza perto de voc\xea de forma r\xe1pida e pr\xe1tica.",(0,ra.jsx)("br",{}),"\u2b50 ",(0,ra.jsx)("b",{children:"Avalia\xe7\xf5es e Feedbacks"})," \u2013 Consulte opini\xf5es de outros usu\xe1rios para escolher o melhor servi\xe7o.",(0,ra.jsx)("br",{}),"\ud83d\udcc5 ",(0,ra.jsx)("b",{children:"Agendamento Online"})," \u2013 Marque hor\xe1rios diretamente pelo aplicativo, sem precisar ligar para o sal\xe3o.",(0,ra.jsx)("br",{}),"\ud83d\udcb0 ",(0,ra.jsx)("b",{children:"Promo\xe7\xf5es e Ofertas"})," \u2013 Descubra descontos e pacotes especiais oferecidos pelos estabelecimentos parceiros.",(0,ra.jsx)("br",{}),(0,ra.jsx)("br",{}),"Nosso compromisso \xe9 oferecer uma plataforma confi\xe1vel e acess\xedvel para clientes e profissionais da beleza, ajudando a criar conex\xf5es e facilitar o acesso a servi\xe7os de qualidade.",(0,ra.jsx)("br",{}),(0,ra.jsx)("br",{}),"Seja bem-vindo ao ",(0,ra.jsx)("b",{children:"BeYou"}),", a sua nova forma de encontrar sal\xf5es de beleza com facilidade e praticidade!"]})]})}function Ci(e){let{ativo:t,setItemAtivo:n}=e;return(0,ra.jsxs)(mi,{onClick:n,children:[(0,ra.jsx)(gi,{children:"Perguntas Frequentes (FAQ)"}),(0,ra.jsxs)(xi,{visivel:t,children:[(0,ra.jsx)("b",{children:"Perguntas Frequentes (FAQ)"}),(0,ra.jsx)("br",{}),(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"1. Como fa\xe7o para agendar um servi\xe7o pelo BeYou?"}),(0,ra.jsx)("br",{}),"Basta fazer login, escolher um sal\xe3o de beleza, selecionar o servi\xe7o desejado e o hor\xe1rio dispon\xedvel. Em poucos cliques, seu agendamento estar\xe1 confirmado!",(0,ra.jsx)("br",{}),(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"2. Preciso pagar pelo servi\xe7o direto no aplicativo?"}),(0,ra.jsx)("br",{}),"Alguns sal\xf5es permitem o pagamento online, enquanto outros preferem o pagamento no local. As op\xe7\xf5es dispon\xedveis aparecer\xe3o no momento do agendamento.",(0,ra.jsx)("br",{}),(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"3. Posso remarcar ou cancelar um agendamento?"}),(0,ra.jsx)("br",{}),"Sim! Acesse a \xe1rea \u201cMeus Agendamentos\u201d, escolha o servi\xe7o desejado e selecione \u201cRemarcar\u201d ou \u201cCancelar\u201d. Lembre-se de verificar a pol\xedtica do sal\xe3o sobre cancelamentos.",(0,ra.jsx)("br",{}),(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"4. O aplicativo \xe9 gratuito?"}),(0,ra.jsx)("br",{}),"Sim, o uso do BeYou \xe9 totalmente gratuito para os clientes. Voc\xea s\xf3 paga pelos servi\xe7os que contratar nos sal\xf5es.",(0,ra.jsx)("br",{}),(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"5. Como os sal\xf5es s\xe3o avaliados?"}),(0,ra.jsx)("br",{}),"Ap\xf3s realizar um servi\xe7o, voc\xea pode deixar sua avalia\xe7\xe3o e coment\xe1rio. Isso ajuda outros usu\xe1rios e tamb\xe9m os sal\xf5es a melhorarem cada vez mais.",(0,ra.jsx)("br",{}),(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"6. Preciso permitir o acesso \xe0 minha localiza\xe7\xe3o?"}),(0,ra.jsx)("br",{}),"Voc\xea pode usar o BeYou sem ativar a localiza\xe7\xe3o, mas ao permitir o acesso, conseguimos mostrar sal\xf5es mais pr\xf3ximos e sugest\xf5es personalizadas.",(0,ra.jsx)("br",{}),(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"7. Meus dados est\xe3o seguros no BeYou?"}),(0,ra.jsx)("br",{}),"Sim! Levamos a privacidade muito a s\xe9rio. Seus dados s\xe3o protegidos e utilizados apenas conforme descrito em nossa ",(0,ra.jsx)("b",{children:"Pol\xedtica de Privacidade"}),".",(0,ra.jsx)("br",{}),(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"8. Posso indicar o BeYou para sal\xf5es que conhe\xe7o?"}),(0,ra.jsx)("br",{}),"Claro! Incentivamos que voc\xea indique o BeYou para sal\xf5es e profissionais da sua confian\xe7a. Assim, a comunidade cresce com qualidade.",(0,ra.jsx)("br",{}),(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"Ficou com mais d\xfavidas?"}),(0,ra.jsx)("br",{}),"Entre em contato com nosso suporte atrav\xe9s do aplicativo ou envie um e-mail para ",(0,ra.jsx)("i",{children:"suporte@beyou.app"}),". Estamos aqui para te ajudar! \ud83d\udc9c"]})]})}function Ei(t){let{ativo:n,setItemAtivo:r}=t;const[a,o]=(0,e.useState)("pt");return(0,ra.jsxs)(mi,{onClick:r,children:[(0,ra.jsx)(gi,{children:"Idiomas"}),n&&(0,ra.jsxs)(xi,{visivel:n,children:[(0,ra.jsx)("p",{children:(0,ra.jsx)("b",{children:"Selecione o idioma:"})}),(0,ra.jsxs)(bi,{children:[(0,ra.jsx)("input",{type:"radio",id:"portugues",name:"idioma",value:"pt",checked:"pt"===a,onChange:()=>o("pt")}),(0,ra.jsx)("label",{htmlFor:"portugues",children:"Portugu\xeas"})]}),(0,ra.jsxs)(bi,{children:[(0,ra.jsx)("input",{type:"radio",id:"ingles",name:"idioma",value:"en",checked:"en"===a,onChange:()=>o("en")}),(0,ra.jsx)("label",{htmlFor:"ingles",children:"Ingl\xeas"})]}),(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"Idioma selecionado:"})," ","pt"===a?"Portugu\xeas":"Ingl\xeas"]})]})}function _i(t){let{ativo:n,setItemAtivo:r}=t;const[a,o]=(0,e.useState)(!0),[i,l]=(0,e.useState)({email:!1,push:!0,sistema:!0}),[s,c]=(0,e.useState)("imediato"),[u,d]=(0,e.useState)({mensagens:!1,atualizacoes:!1,promocoes:!1,lembretes:!1}),[p,f]=(0,e.useState)("08:00 - 22:00"),[h,m]=(0,e.useState)(!1),[g,x]=(0,e.useState)("som");return(0,ra.jsxs)(mi,{onClick:r,children:[(0,ra.jsx)(gi,{children:"Configura\xe7\xf5es de Notifica\xe7\xf5es"}),n&&(0,ra.jsx)(xi,{visivel:n,onClick:e=>e.stopPropagation(),children:(0,ra.jsxs)("form",{className:"config-form",children:[(0,ra.jsxs)("fieldset",{children:[(0,ra.jsx)("legend",{children:"\ud83d\udd14 Notifica\xe7\xf5es Gerais"}),(0,ra.jsxs)("label",{children:[(0,ra.jsx)("input",{type:"checkbox",checked:a,onChange:()=>o(!a)}),"Ativar/Desativar"]})]}),(0,ra.jsxs)("fieldset",{children:[(0,ra.jsx)("legend",{children:"\ud83d\udcec Tipo de Notifica\xe7\xe3o"}),Object.entries(i).map((e=>{let[t,n]=e;return(0,ra.jsxs)("label",{children:[(0,ra.jsx)("input",{type:"checkbox",checked:n,onChange:()=>l({...i,[t]:!n})}),"email"===t?"\ud83d\udce9 E-mail":"push"===t?"\ud83d\udcf1 Push":"\ud83d\udd14 Sistema"]},t)}))]}),(0,ra.jsxs)("fieldset",{children:[(0,ra.jsx)("legend",{children:"\u23f1 Frequ\xeancia"}),["imediato","diario","semanal"].map((e=>(0,ra.jsxs)("label",{children:[(0,ra.jsx)("input",{type:"radio",name:"frequencia",value:e,checked:s===e,onChange:()=>c(e)}),e.charAt(0).toUpperCase()+e.slice(1)]},e)))]}),(0,ra.jsxs)("fieldset",{children:[(0,ra.jsx)("legend",{children:"\ud83c\udfaf Notifica\xe7\xf5es Espec\xedficas"}),Object.keys(u).map((e=>(0,ra.jsxs)("label",{children:[(0,ra.jsx)("input",{type:"checkbox",checked:u[e],onChange:()=>d({...u,[e]:!u[e]})}),e.charAt(0).toUpperCase()+e.slice(1)]},e)))]}),(0,ra.jsxs)("fieldset",{children:[(0,ra.jsx)("legend",{children:"\ud83d\udd57 Hor\xe1rio de Notifica\xe7\xe3o"}),(0,ra.jsx)("input",{type:"text",value:p,onChange:e=>f(e.target.value),className:"horario-input"}),(0,ra.jsxs)("label",{children:[(0,ra.jsx)("input",{type:"checkbox",checked:h,onChange:()=>m(!h)}),"Ativar Modo N\xe3o Perturbe"]})]}),(0,ra.jsxs)("fieldset",{children:[(0,ra.jsx)("legend",{children:"\ud83c\udfb5 Som ou Vibra\xe7\xe3o"}),["som","vibracao","silencioso"].map((e=>(0,ra.jsxs)("label",{children:[(0,ra.jsx)("input",{type:"radio",name:"somVibracao",value:e,checked:g===e,onChange:()=>x(e)}),e.charAt(0).toUpperCase()+e.slice(1)]},e)))]})]})})]})}function Pi(t){let{ativo:n,setItemAtivo:r}=t;const[a,o]=(0,e.useState)("");return(0,ra.jsxs)(mi,{onClick:r,children:[(0,ra.jsx)(gi,{children:"Relatar Problema"}),(0,ra.jsxs)(xi,{visivel:n,onClick:e=>e.stopPropagation(),children:[(0,ra.jsx)(yi,{value:a,onChange:e=>o(e.target.value),placeholder:"Descreva o problema aqui..."}),(0,ra.jsx)(wi,{onClick:e=>{e.stopPropagation(),alert("Problema enviado!")},children:"Enviar"})]})]})}const Oi=function(){const t=X(),[n,r]=(0,e.useState)(null);return(0,ra.jsxs)(Wo,{children:[(0,ra.jsxs)(Ho,{children:[(0,ra.jsx)(qo,{children:(0,ra.jsx)(Vo,{onClick:e=>{e.preventDefault(),t("/PaginaInicial")},src:"/img/new_logo.jpg",alt:"Logo"})}),(0,ra.jsxs)(Qo,{children:[(0,ra.jsx)(Go,{onClick:()=>t("/PaginaInicial"),children:"Inicio"}),(0,ra.jsx)(Go,{onClick:()=>t("/Carrinho"),children:"Meu Carrinho"}),(0,ra.jsx)(Go,{onClick:()=>t("/Pesquisar"),children:"Pesquisar"}),(0,ra.jsx)(Go,{onClick:()=>t("/Agendamentos"),children:"Agendamentos"}),(0,ra.jsx)(Go,{onClick:()=>t("/FAvoritos_perfil"),children:"Favoritos"})]}),(0,ra.jsx)(Ko,{type:"text",placeholder:"Busque por item ou loja"}),(0,ra.jsxs)(Jo,{children:[(0,ra.jsx)(Xo,{children:(0,ra.jsx)(ti,{onClick:()=>t("/MeuPerfil"),children:(0,ra.jsx)(Na,{className:"icone"})})}),(0,ra.jsx)(Zo,{children:(0,ra.jsx)(ni,{onClick:()=>t("/notificacoes_perfil"),children:(0,ra.jsx)(za,{className:"icone"})})}),(0,ra.jsx)(ei,{children:(0,ra.jsx)(ri,{onClick:()=>{t("/login")},children:(0,ra.jsx)(Ta,{className:"icone"})})})]})]}),(0,ra.jsx)("main",{children:(0,ra.jsxs)(vi,{children:[(0,ra.jsx)(hi,{children:"Configura\xe7\xf5es"}),(0,ra.jsx)(ji,{ativo:"termos"===n,setItemAtivo:()=>r("termos"===n?null:"termos")}),(0,ra.jsx)(ki,{ativo:"privacidade"===n,setItemAtivo:()=>r("privacidade"===n?null:"privacidade")}),(0,ra.jsx)(Si,{ativo:"sobre"===n,setItemAtivo:()=>r("sobre"===n?null:"sobre")}),(0,ra.jsx)(Ci,{ativo:"faq"===n,setItemAtivo:()=>r("faq"===n?null:"faq")}),(0,ra.jsx)(Ei,{ativo:"idiomas"===n,setItemAtivo:()=>r("idiomas"===n?null:"idiomas")}),(0,ra.jsx)(_i,{ativo:"notificacoes"===n,setItemAtivo:()=>r("notificacoes"===n?null:"notificacoes")}),(0,ra.jsx)(Pi,{ativo:"problema"===n,setItemAtivo:()=>r("problema"===n?null:"problema")})]})}),(0,ra.jsx)(ai,{children:(0,ra.jsxs)(oi,{children:[(0,ra.jsxs)(li,{children:[(0,ra.jsx)(fi,{children:"BeYou"}),(0,ra.jsx)(ii,{children:"Site Institucional"}),(0,ra.jsx)(ii,{children:"Fale Conosco"}),(0,ra.jsx)(ii,{children:"Conta e Seguran\xe7a"}),(0,ra.jsx)(ii,{children:"Carreiras"}),(0,ra.jsx)(ii,{children:"Entregadores"})]}),(0,ra.jsxs)(li,{children:[(0,ra.jsx)(fi,{children:"Descubra"}),(0,ra.jsx)(ii,{children:"Cadastre sua loja"}),(0,ra.jsx)(ii,{children:"Beyou Shop"}),(0,ra.jsx)(ii,{children:"BeYou Empresas"}),(0,ra.jsx)(ii,{children:"Blog BeYou Empresas"})]}),(0,ra.jsxs)(li,{children:[(0,ra.jsx)(fi,{children:"Social"}),(0,ra.jsxs)(si,{children:[(0,ra.jsx)(ii,{children:(0,ra.jsx)(Ka,{})}),(0,ra.jsx)(ii,{children:(0,ra.jsx)(Ga,{})}),(0,ra.jsx)(ii,{children:(0,ra.jsx)(Ja,{})}),(0,ra.jsx)(ii,{children:(0,ra.jsx)(Qa,{})})]})]}),(0,ra.jsxs)(ui,{children:[(0,ra.jsx)(pi,{src:"/img/new_logo.jpg",alt:"BeYou Logo"}),(0,ra.jsx)(di,{children:"\xa9 Copyright 2025 - BeYou. Todos os direitos reservados."}),(0,ra.jsx)("br",{}),(0,ra.jsx)(di,{children:"CNPJ 00.000.000/0000-00 / Endere\xe7o fict\xedcio - Cidade/Estado - CEP 00000-000"})]}),(0,ra.jsxs)(ci,{children:[(0,ra.jsx)(ii,{children:"Termos e Condi\xe7\xf5es de Uso"})," | ",(0,ra.jsx)(ii,{children:"Codigo de Conduta"})," | ",(0,ra.jsx)(ii,{children:"Privacidade"})," | ",(0,ra.jsx)(ii,{children:"Dicas de Seguran\xe7a"})]})]})})]})},Ni=Kr.div`
  background-color: rgb(255, 228, 230);
`,zi=Kr.header`
  background-image: url("/img/Textura_Rosa.jpg");
  min-height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  color: #6c4539;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0.5px solid #6c4539;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`,Ti=Kr.div`
  display: flex;
  align-items: center;
`,Di=Kr.img`
  width: 60px;
  height: auto;
  border-radius: 50%;
  border: 2px solid #6c4539;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`,Ai=Kr.input`
  width: 30%;
  padding: 12px 18px;
  border: 2px solid hsl(300, 99%, 64%);
  border-radius: 20px;
  font-size: 16px;
  color: #6c4539;
  outline: none;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);

  &::placeholder {
    color: #6c4539;
    font-style: italic;
  }

  &:focus {
    border: 2px solid hsl(300, 99%, 64%);
  }

  &:hover {
    box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`,Li=Kr.div`
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`,Ri=Kr.a`
  font-size: 15px;
  color: #6c4539;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  margin: 0 10px;
  &:hover {
    background-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: hsl(300, 99%, 64%);
    cursor: pointer;
    transform: scale(1.1);
  }
`,Fi=Kr.div`
  display: flex;
  overflow: hidden;
  justify-content: flex-end;
  gap: 16px;
  @media (max-width: 768px) {
    justify-content: center;
  }
`,Ii=Kr.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`,Mi=Kr.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`,$i=Kr.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`,Bi=Kr.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  background-color: transparent;
  color: #6c4539;
  text-decoration: none;
  &:hover {
    transform: scale(1.1);
    text-decoration: underline;
    color: hsl(300, 99%, 64%);
  }
`,Ui=Kr.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  background-color: transparent;
  color: #6c4539;
  text-decoration: none;
  &:hover {
    transform: scale(1.1);
    text-decoration: underline;
    color: hsl(300, 99%, 64%);
  }
`,Yi=Kr.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  background-color: transparent;
  color: #6c4539;
  border: none;
  &:hover {
    transform: scale(1.1);
    text-decoration: underline;
    color: hsl(300, 99%, 64%);
  }
`,Wi=Kr.h1`
  font-size: 40px;
  color: #6c4539;
  cursor: pointer;
  margin: 30px 50px 10px;
  @media (max-width: 768px) {
    font-size: 28px;
    margin: 20px;
  }
`,Hi=Kr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0 50px;
  @media (max-width: 768px) {
    margin: 0 20px;
  }
`,qi=Kr.button`
  cursor: pointer;
  border-radius: 15px; 
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
  font-family: 'Poppins', sans-serif;
  padding: 10px 15px;
  background-color: #f45bf4;
  color: white;
  border: solid 2px #6c4539;
  opacity: 0.8;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: #6c4539;
    font-style: italic;
  }

  &:focus {
    border: 2px solid hsl(300, 99%, 64%);
  }

  &:hover {
    box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);
    transform: translateY(-2px);
    transform: scale(1.1);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`,Vi=Kr.input`
  margin: 20px 50px;
  width: calc(100% - 100px);

  padding: 12px 18px;
  border: 2px solid hsl(300, 99%, 64%);
  border-radius: 20px;
  font-size: 16px;
  color: #6c4539;
  outline: none;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);

  &::placeholder {
    color: #6c4539;
    font-style: italic;
  }

  &:focus {
    border: 2px solid hsl(300, 99%, 64%);
  }

  &:hover {
    box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`,Ki=Kr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 20px 50px;
  justify-content: flex-start;
  @media (max-width: 768px) {
    justify-content: center;
    padding: 20px;
  }
`,Qi=Kr.div`
  width: 300px;
  background-color: white;
  border: 2px solid #6c4539;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,Gi=Kr.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`,Ji=Kr.div`
  padding: 15px;
  color: #6c4539;
`,Xi=Kr.h2`
  font-size: 20px;
  margin: 5px 0;
`,Zi=Kr.p`
  font-size: 16px;
  font-weight: bold;
  color: #9b4d8c;
`,el=Kr.p`
  font-size: 16px;
  color: #d68aff;
`,tl=Kr.p`
  font-size: 18px;
  font-weight: bold;
  margin: 5px 0;
`,nl=Kr.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`,rl=Kr.button`
  flex: 1;
  padding: 8px;
  font-size: 10px;

  cursor: pointer;
  border-radius: 15px; 
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
  font-family: 'Poppins', sans-serif;
  background-color: #f45bf4;
  color: white;
  border: solid 2px #6c4539;
  opacity: 0.8;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: #6c4539;
    font-style: italic;
  }

  &:focus {
    border: 2px solid hsl(300, 99%, 64%);
  }

  &:hover {
    box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);
    transform: translateY(-2px);
    transform: scale(1.1);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`,al=Kr.div`
  text-align: center;
  margin-top: 50px;
  color: #6c4539;
  img {
    width: 200px;
    margin-bottom: 20px;
  }
  p {
    font-size: 20px;
    font-weight: bold;
  }
`,ol=Kr.button`
  border-radius: 15px;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 50px;
  margin-bottom: 30px;

  transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
  font-family: 'Poppins', sans-serif;
  padding: 10px 15px;
  background-color: #f45bf4;
  color: white;
  border: solid 2px #6c4539;
  opacity: 0.8;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: #6c4539;
    font-style: italic;
  }

  &:focus {
    border: 2px solid hsl(300, 99%, 64%);
  }

  &:hover {
    box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);
    transform: translateY(-2px);
    transform: scale(1.1);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`,il=Kr.div`
  background-color: #FFC9E9;
  display: flex;
  color: white;
  padding: 40px 80px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
`,ll=Kr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;
`,sl=Kr.a`
  font-size: 15px;
  color: #6c4539;
  text-decoration: none;
  font-weight: bold;
  margin: 10px 0;
  text-align: center;
  &:hover {
    background-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: hsl(300, 99%, 64%);
    cursor: pointer;
    transform: scale(1.1);
  }
`,cl=Kr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,ul=Kr.div`
  display: flex;
  gap: 30px;
  cursor: pointer;
  color: #6c4539;
  flex-wrap: wrap;
  margin-top: 20px;
`,dl=Kr.div`
  display: flex;
  gap: 15px;
  font-size: 22px;
  width: 20px;
  justify-content: center;
`,pl=Kr.img`
  width: 100px;
  margin-bottom: 20px;
  margin-top: 20px;
`,fl=Kr.div`
  width: 100%;
  border-top: 1px solid #6c4539;
  text-align: center;
  padding-top: 10px;
  margin-top: 20px;
`,hl=Kr.h3`
    text-align: center;
    color: #6c4539;
    font-style: bold;
    list-style: none;
    margin-bottom: 10px;
    font-size: 40px;
`,ml=Kr.p`
  font-size: 12px;
  color: #6c4539;
`,gl=Gr`
  ::-webkit-scrollbar {
    width: 8px;
    max-height: 400px;
    overflow-y: auto;
  }
  ::-webkit-scrollbar-track {
    background: #ffe4ec;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #ff69b4;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #ff1493;
  }
`;const xl=function(){const t=X(),[n,r]=(0,e.useState)(""),[a,o]=(0,e.useState)("todos"),[i,l]=(0,e.useState)([{id:"servico-01",tipo:"servico",nome:"Corte de Cabelo Masculino",categoria:"Servi\xe7o",imagem:"/img/servico_corte.jpeg",avaliacoes:128,preco:45},{id:"produto-01",tipo:"produto",nome:"Shampoo Hidratante",categoria:"Produto de Beleza",imagem:"/img/shampoo.jpeg",avaliacoes:212,preco:29.9},{id:"profissional-01",tipo:"profissional",nome:"Julia Fernandes",categoria:"Cabeleireira",imagem:"/img/julia_fernandes.jpeg",avaliacoes:342},{id:"servico-02",tipo:"servico",nome:"Design de Sobrancelhas",categoria:"Servi\xe7o",imagem:"/img/sobrancelhas.jpeg",avaliacoes:87,preco:30},{id:"produto-02",tipo:"produto",nome:"Creme P\xf3s-Barba Refrescante",categoria:"Produto Masculino",imagem:"/img/creme_barba.jpeg",avaliacoes:90,preco:19.9},{id:"profissional-02",tipo:"profissional",nome:"Beto Oliveira",categoria:"Barbeiro",imagem:"/img/carlos_oliveira.jpeg",avaliacoes:120}]),s=i.filter((e=>e.nome.toLowerCase().includes(n.toLowerCase())&&("todos"===a||e.tipo===a)));return(0,ra.jsxs)(Ni,{children:[(0,ra.jsx)(gl,{}),(0,ra.jsxs)(zi,{children:[(0,ra.jsx)(Ti,{children:(0,ra.jsx)(Di,{onClick:e=>{e.preventDefault(),t("/PaginaInicial")},src:"/img/new_logo.jpg",alt:"Logo"})}),(0,ra.jsxs)(Li,{children:[(0,ra.jsx)(Ri,{onClick:()=>t("/PaginaInicial"),children:"Inicio"}),(0,ra.jsx)(Ri,{onClick:()=>t("/Carrinho"),children:"Meu Carrinho"}),(0,ra.jsx)(Ri,{onClick:()=>t("/Pesquisar"),children:"Pesquisar"}),(0,ra.jsx)(Ri,{onClick:()=>t("/Agendamentos"),children:"Agendamentos"}),(0,ra.jsx)(Ri,{onClick:()=>t("/FAvoritos_perfil"),children:"Favoritos"})]}),(0,ra.jsx)(Ai,{type:"text",placeholder:"Busque por item ou loja"}),(0,ra.jsxs)(Fi,{children:[(0,ra.jsx)(Ii,{children:(0,ra.jsx)(Bi,{onClick:()=>t("/MeuPerfil"),children:(0,ra.jsx)(Na,{className:"icone"})})}),(0,ra.jsx)(Mi,{children:(0,ra.jsx)(Ui,{onClick:()=>t("/notificacoes_perfil"),children:(0,ra.jsx)(za,{className:"icone"})})}),(0,ra.jsx)($i,{children:(0,ra.jsx)(Yi,{onClick:()=>{t("/bemvindo")},children:(0,ra.jsx)(Ta,{className:"icone"})})})]})]}),(0,ra.jsxs)("main",{children:[(0,ra.jsx)(Wi,{children:"Meus Favoritos \ud83d\udc96"}),(0,ra.jsx)(Vi,{type:"text",placeholder:"Buscar entre seus favoritos...",value:n,onChange:e=>r(e.target.value)}),(0,ra.jsx)(ol,{onClick:()=>{l([])},children:"Limpar Tudo"}),(0,ra.jsxs)(Hi,{children:[(0,ra.jsx)(qi,{onClick:()=>o("servico"),children:"Servi\xe7os"}),(0,ra.jsx)(qi,{onClick:()=>o("profissional"),children:"Profissionais"}),(0,ra.jsx)(qi,{onClick:()=>o("produto"),children:"Produtos"}),(0,ra.jsx)(qi,{onClick:()=>o("todos"),children:"Todos"})]}),0===s.length?(0,ra.jsxs)(al,{children:[(0,ra.jsx)("img",{src:"/img/vazio.png",alt:"Nenhum favorito"}),(0,ra.jsx)("p",{children:"Voc\xea ainda n\xe3o favoritou nada\u2026 Que tal explorar a loja?"})]}):(0,ra.jsx)(Ki,{children:s.map((e=>(0,ra.jsxs)(Qi,{children:[(0,ra.jsx)(Gi,{src:e.imagem,alt:e.nome}),(0,ra.jsxs)(Ji,{children:[(0,ra.jsx)(Xi,{children:e.nome}),(0,ra.jsx)(Zi,{children:e.categoria}),(0,ra.jsxs)(el,{children:["\u2b50\u2b50\u2b50\u2b50\u2b50 (",e.avaliacoes,")"]}),e.preco&&(0,ra.jsxs)(tl,{children:["R$ ",e.preco.toFixed(2)]}),(0,ra.jsxs)(nl,{children:[(0,ra.jsx)(rl,{onClick:()=>t(`/detalhes/${e.id}`),children:"Ver Detalhes"}),"servico"===e.tipo&&(0,ra.jsx)(rl,{onClick:()=>t(`/agendar/${e.id}`),children:"Agendar"}),(0,ra.jsx)(rl,{onClick:()=>{return t=e.id,void l((e=>e.filter((e=>e.id!==t))));var t},children:"Remover \u2764\ufe0f"})]})]})]},e.id)))})]}),(0,ra.jsx)(il,{children:(0,ra.jsxs)(ll,{children:[(0,ra.jsxs)(cl,{children:[(0,ra.jsx)(hl,{children:"BeYou"}),(0,ra.jsx)(sl,{children:"Site Institucional"}),(0,ra.jsx)(sl,{children:"Fale Conosco"}),(0,ra.jsx)(sl,{children:"Conta e Seguran\xe7a"}),(0,ra.jsx)(sl,{children:"Carreiras"}),(0,ra.jsx)(sl,{children:"Entregadores"})]}),(0,ra.jsxs)(cl,{children:[(0,ra.jsx)(hl,{children:"Descubra"}),(0,ra.jsx)(sl,{children:"Cadastre sua loja"}),(0,ra.jsx)(sl,{children:"Beyou Shop"}),(0,ra.jsx)(sl,{children:"BeYou Empresas"}),(0,ra.jsx)(sl,{children:"Blog BeYou Empresas"})]}),(0,ra.jsxs)(cl,{children:[(0,ra.jsx)(hl,{children:"Social"}),(0,ra.jsxs)(dl,{children:[(0,ra.jsx)(sl,{children:(0,ra.jsx)(Ka,{})}),(0,ra.jsx)(sl,{children:(0,ra.jsx)(Ga,{})}),(0,ra.jsx)(sl,{children:(0,ra.jsx)(Ja,{})}),(0,ra.jsx)(sl,{children:(0,ra.jsx)(Qa,{})})]})]}),(0,ra.jsxs)(fl,{children:[(0,ra.jsx)(pl,{src:"/img/new_logo.jpg",alt:"BeYou Logo"}),(0,ra.jsx)(ml,{children:"\xa9 Copyright 2025 - BeYou. Todos os direitos reservados."}),(0,ra.jsx)("br",{}),(0,ra.jsx)(ml,{children:"CNPJ 00.000.000/0000-00 / Endere\xe7o fict\xedcio - Cidade/Estado - CEP 00000-000"})]}),(0,ra.jsxs)(ul,{children:[(0,ra.jsx)(sl,{children:"Termos e Condi\xe7\xf5es de Uso"})," | ",(0,ra.jsx)(sl,{children:"Codigo de Conduta"})," | ",(0,ra.jsx)(sl,{children:"Privacidade"})," | ",(0,ra.jsx)(sl,{children:"Dicas de Seguran\xe7a"})]})]})})]})},vl=Kr.div`
  background-image: url("/img/BackgroundImage.jpg");
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`,bl=Kr.div`
  position: absolute;
  right: 0;
  margin: 40px;
  margin-right: 150px;
  max-width: 500px;
  width: 100%;
  padding: 20px;
  background-color: white;
  color: black;
  border: solid 2px #6c4539;

  @media (max-width: 1024px) {
    margin-right: 80px;
    max-width: 450px;
  }

  @media (max-width: 768px) {
    margin: 20px;
    right: auto;
    left: auto;
    max-width: 90%;
    position: relative;
  }

  @media (max-width: 480px) {
    margin: 10px;
    padding: 15px;
    max-width: 100%;
  }
`,yl=Kr.h1`
  margin-bottom: 20px;
  color: hsl(321, 100.00%, 58.00%);
  font-size: 28px;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`,wl=Kr.input`
  width: 100%;
  padding: 15px;
  margin: 15px 0 25px 0;
  border: solid 1px #6c4539;
  background-color: #ffecfc;
  border-radius: 50px;

  &:focus {
    background-color: #ffecfc;
    outline: none;
  }
`,jl=Kr.a`
  color: hsl(300, 99%, 64%);
  text-decoration: none;
  margin-left: 10px;

  &:hover {
    text-decoration: underline;
    color: hsl(321, 100.00%, 58.00%);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`,kl=Kr.div`
  font-size: 20px;
  color: hsl(300, 99%, 64%);
  display: flex;
  text-align: center;
  margin-top: 10px;

  @media (max-width: 480px) {
    font-size: 16px;
    justify-content: center;
  }
`,Sl=Kr.button`
  background-color: #f45bf4;
  color: white;
  padding: 12px 24px;
  border: solid 2px #6c4539;
  cursor: pointer;
  width: 50%;
  opacity: 0.8;
  font-size: 20px;
  margin-left: 90px;
  margin-top: 30px;
  border-radius: 30px;
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
  font-family: 'Poppins', sans-serif;

  &:hover {
    opacity: 1;
    background-color: hsl(300, 99%, 64%);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  @media (max-width: 768px) {
    margin-left: 25%;
    width: 50%;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-left: 0;
  }
`,Cl=Kr(Sl)`
  margin-top: 20px;
`,El=()=>{const[t,n]=(0,e.useState)({email:"",senha:""}),r=X(),a=e=>{const{name:t,value:r}=e.target;n((e=>({...e,[t]:r})))};return(0,ra.jsx)(vl,{children:(0,ra.jsxs)(bl,{children:[(0,ra.jsx)(yl,{children:"Login"}),(0,ra.jsxs)("form",{onSubmit:e=>{e.preventDefault(),t.email&&t.senha?(alert("Login realizado com sucesso!"),r("/PaginaInicial")):alert("Por favor, preencha todos os campos.")},children:[(0,ra.jsx)("label",{htmlFor:"email",children:(0,ra.jsx)("b",{children:"E-mail"})}),(0,ra.jsx)(wl,{type:"text",placeholder:"Digite seu e-mail",name:"email",required:!0,value:t.email,onChange:a}),(0,ra.jsx)("label",{htmlFor:"senha",children:(0,ra.jsx)("b",{children:"Senha"})}),(0,ra.jsx)(wl,{type:"password",placeholder:"Digite sua senha",name:"senha",required:!0,value:t.senha,onChange:a}),(0,ra.jsx)(kl,{children:(0,ra.jsx)(jl,{href:"#",children:"Esqueci minha senha"})}),(0,ra.jsx)(Sl,{type:"submit",children:"Entrar"}),(0,ra.jsx)(Cl,{type:"button",onClick:()=>r("/Cadastro"),children:"Cadastrar"})]})]})})},_l=Kr.div`
  background-image: url("/img/BackgroundImage.jpg");
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`,Pl=Kr.div`
  position: absolute;
  right: 0;
  margin: 40px;
  margin-right: 150px;
  max-width: 500px;
  padding: 20px;
  background-color: white;
  color: black;
  border: solid 2px #6c4539;

  @media (max-width: 1024px) {
    margin-right: 60px;
  }

  @media (max-width: 768px) {
    position: static;
    margin: 20px auto;
    width: 90%;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    padding: 15px;
    margin: 10px;
  }
`,Ol=Kr.h1`
  margin-bottom: 20px;
  color: hsl(321, 100%, 58%);
  font-size: 2rem;

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`,Nl=Kr.input`
  width: 100%;
  padding: 15px;
  margin: 15px 0 25px 0;
  border: solid 1px #6c4539;
  background-color: #ffecfc;
  border-radius: 50px;
  font-size: 1rem;

  &:focus {
    background-color: #ffecfc;
    outline: none;
  }
`,zl=Kr.a`
  color: hsl(300, 99%, 64%);
  text-decoration: none;
  margin-left: 10px;
  font-size: 0.95rem;

  &:hover {
    text-decoration: underline;
    color: hsl(321, 100%, 58%);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`,Tl=Kr.div`
  font-size: 20px;
  color: hsl(300, 99%, 64%);
  display: flex;
  justify-content: center;
  margin-top: 10px;

  &:focus {
    text-decoration: underline;
    color: hsl(321, 100%, 58%);
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`,Dl=Kr.button`
  background-color: #f45bf4;
  color: white;
  padding: 12px 24px;
  border: solid 2px #6c4539;
  cursor: pointer;
  width: 50%;
  opacity: 0.8;
  font-size: 20px;
  margin: 30px auto 0 auto;
  border-radius: 30px;
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
  font-family: 'Poppins', sans-serif;
  display: block;

  &:hover {
    opacity: 1;
    background-color: hsl(300, 99%, 64%);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  @media (max-width: 480px) {
    width: 80%;
    font-size: 16px;
    padding: 10px 20px;
  }
`,Al=Kr(Dl)``,Ll=Kr(Dl)``,Rl=()=>{const[t,n]=(0,e.useState)({cnpj:"",senha:""}),r=X(),a=e=>{const{name:t,value:r}=e.target;n((e=>({...e,[t]:r})))};return(0,ra.jsx)(_l,{children:(0,ra.jsxs)(Pl,{children:[(0,ra.jsx)(Ol,{children:"Login"}),(0,ra.jsxs)("form",{onSubmit:e=>{e.preventDefault(),t.cnpj&&t.senha?(alert("Login realizado com sucesso!"),r("/PaginaInicial")):alert("Por favor, preencha todos os campos.")},children:[(0,ra.jsx)("label",{htmlFor:"cnpj",children:(0,ra.jsx)("b",{children:"CNPJ"})}),(0,ra.jsx)(Nl,{type:"text",placeholder:"Digite seu CNPJ",name:"cnpj",required:!0,value:t.cnpj,onChange:a}),(0,ra.jsx)("label",{htmlFor:"senha",children:(0,ra.jsx)("b",{children:"Senha"})}),(0,ra.jsx)(Nl,{type:"password",placeholder:"Digite sua senha",name:"senha",required:!0,value:t.senha,onChange:a}),(0,ra.jsx)(Tl,{children:(0,ra.jsx)(zl,{href:"#",children:"Esqueci minha senha"})}),(0,ra.jsx)(Al,{type:"submit",children:"Entrar"}),(0,ra.jsx)(Ll,{type:"button",onClick:()=>r("/Cadastroloja"),children:"Cadastrar"})]})]})})},Fl=Kr.div`
    background-color:rgb(255, 228, 230);
`,Il=Kr.header`
    background-image: url("/img/Textura_Rosa.jpg");
    min-height: 100%; 
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover;
    position: relative;
    color: #6c4539;
    padding: 10px 20px;
    display: flex; 
    align-items: center;
    justify-content: space-between;
    border: 0.5px solid #6c4539;
`,Ml=Kr.div`
    display: flex;
    align-items: center;
`,$l=Kr.img`
    width: 60px;
    height: auto;
    border-radius: 50%;
    border: 2px solid #6c4539;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`,Bl=Kr.input`
    width: 30%;
    padding: 10px;
    border: 2px solid hsl(300, 99%, 64%);
    border-radius: 20px;
    font-size: 16px;
    color: #6c4539;
    outline: none;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &::placeholder {
        color: #6c4539;
    }
`,Ul=Kr.div`
  overflow: hidden;
`,Yl=Kr.a`
  float: left;
  font-size: 15px;
  color: #6c4539;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  border: 1px #FFC9E9;
  display: inline-block;
  line-height: normal;
  margin-left: 15px;
  margin-right: 15px;
  &:hover {
    background-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: hsl(300, 99%, 64%);
    cursor: pointer;
    transform: scale(1.1);
  }
`,Wl=Kr.div`
    display: flex;
    overflow: hidden;
    justify-content: flex-end;
    gap: 16px;
`,Hl=Kr.div`
    display: flex;
    align-items: center;
    overflow: hidden;
`,ql=Kr.div`
    display: flex;
    align-items: center;
    overflow: hidden;
`,Vl=Kr.div`
    display: flex;
    align-items: center;
    overflow: hidden;
`,Kl=Kr.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    border: none;
    background-color: transparent;
    color: #6c4539;
    overflow: hidden;
    text-decoration: none;

    &:hover {
      transform: scale(1.1);
      text-decoration: underline;
      color: hsl(300, 99%, 64%);
    }
`,Ql=Kr.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    border: none;
    background-color: transparent;
    color: #6c4539;
    text-decoration: none;

    &:hover {
      transform: scale(1.1);
      text-decoration: underline;
      color: hsl(300, 99%, 64%);
    }
`,Gl=Kr.button`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 32px;
    height: 32px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    border: none;
    background-color: transparent;
    color: #6c4539;
    
    &:hover {
      transform: scale(1.1);
      text-decoration: underline;
      color: hsl(300, 99%, 64%);
    }
`,Jl=(Kr.div`
    text-align: left;
    color: #6c4539;
    font-style: bold;
    list-style: none;
    font-size: 40px;
    margin-bottom: 20px;
    margin-left: 50px;
    margin-top: 20px;
`,Kr.div`
    text-align: center;
    background-color: #FFC9E9;
    padding: 50px;
    margin: 50px auto;
    width: 50%;
    border-radius: 20px;
    margin-top: 75px;
`),Xl=Kr.img`
    margin-top: 0px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 3px solid #6c4539;
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);
    cursor: pointer;

    &:hover {
      box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
      box-shadow: none;
    }
`,Zl=Kr.h1`
    color:rgb(78, 50, 41);
    font-size: 50px;
    font-weight: bold;
    margin-top: 20px;
`,es=Kr.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 150px;
    flex-wrap: wrap;
    overflow: auto;
    white-space: nowrap;
    scrollbar-width: none;
    text-align: center;
`,ts=Kr.div`
    margin-top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    overflow: auto;
    white-space: nowrap;
    scrollbar-width: none;
    text-align: center;
`,ns=Kr.img`
    width: 170px;
    height: 170px;
    transition: transform 0.3s ease, opacity 0.3s ease;
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);

    &::placeholder {
        color: #6c4539;
        font-style: italic;
    }

    &:focus {
      border: 2px solid hsl(300, 99%, 64%);
    }

    &:hover {
      box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
      box-shadow: none;
    }
`,rs=Kr.div`
    margin-top: 120px;
    white-space: nowrap;
    scrollbar-width: none;
    flex-wrap: wrap;
    display: flex;  
`,as=Kr.img`
    margin-bottom: 50px;
    width: 300px;
    height: 300px;
    margin-left: 75px;
    border-radius: 20%;
    border: solid 2px #6c4539;

    &:hover {
        filter: brightness(0.8);;
        cursor: pointer;
`,os=Kr.div`
    position: absolute;
    top: 800px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    padding: 5px 10px;
    font-size: 30px; /* Reduzi um pouco para melhor encaixe */
    font-weight: bold;
    white-space: nowrap;
    color:rgb(78, 50, 41);
    margin-top: 100px;
`,is=Kr.div`
    width: 100%;
    height: 2px;
    background-color: #6c4539;
    margin: 50px auto;
`,ls=Kr.div`
  background-color: #FFC9E9;
  display: flex;
  color: white;
  padding: 40px 80px;
  display: flex; /*conteiner manipulavel*/
  flex-wrap: wrap;
  justify-content: space-between;
  border: 3px solid #6c4539;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
`,ss=Kr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;
`,cs=Kr.a`
  font-size: 15px;
  color: #6c4539;
  text-decoration: none;
  font-weight: bold;
  border: 1px #FFC9E9;
  display: inline-block;
  line-height: normal;
  text-decoration: none;
  margin: 10px 0;
  text-align: center;
  &:hover {
    background-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: hsl(300, 99%, 64%);
    cursor: pointer;
    transform: scale(1.1);
  }
`,us=Kr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; 
  flex: 1;
  min-width: 200px;
`,ds=Kr.div`
  display: flex;
  gap: 15px;
  font-size: 22px;
  width: 20px;
  justify-content: center;
`,ps=Kr.div`
  display: flex;
  gap: 30px;
  cursor: pointer;
  color: #6c4539;
  flex-wrap: wrap;
  margin-top: 20px;
`,fs=Kr.div`
  width: 100%;
  border-top: 1px solid #6c4539;
  text-align: center;
  padding-top: 10px;
  margin-top: 20px;
`,hs=Kr.p`
  font-size: 12px;
  color: #6c4539;
`,ms=Kr.img`
  width: 100px;
  margin-bottom: 20px;
  margin-top: 20px;
`,gs=Kr.h3`
    text-align: center;
    color: #6c4539;
    font-style: bold;
    list-style: none;
    margin-bottom: 10px;
    font-size: 40px;
`,xs=Gr`
  ::-webkit-scrollbar {
    width: 8px;
    max-height: 400px;
    overflow-y: auto;
  }
  ::-webkit-scrollbar-track {
    background: #ffe4ec;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #ff69b4;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #ff1493;
  }
`;const vs=function(){const e=X();return(0,ra.jsxs)(Fl,{children:[(0,ra.jsx)(xs,{}),(0,ra.jsxs)(Il,{children:[(0,ra.jsx)(Ml,{children:(0,ra.jsx)($l,{onClick:t=>{t.preventDefault(),e("/PaginaInicial")},src:"/img/new_logo.jpg",alt:"Logo"})}),(0,ra.jsxs)(Ul,{children:[(0,ra.jsx)(Yl,{onClick:()=>e("/PaginaInicial"),children:"Inicio"}),(0,ra.jsx)(Yl,{onClick:()=>e("/Carrinho"),children:"Meu Carrinho"}),(0,ra.jsx)(Yl,{onClick:()=>e("/Pesquisar"),children:"Pesquisar"}),(0,ra.jsx)(Yl,{onClick:()=>e("/Agendamentos"),children:"Agendamentos"}),(0,ra.jsx)(Yl,{onClick:()=>e("/FAvoritos_perfil"),children:"Favoritos"})]}),(0,ra.jsx)(Bl,{type:"text",placeholder:"Busque por item ou loja"}),(0,ra.jsxs)(Wl,{children:[(0,ra.jsx)(Hl,{children:(0,ra.jsx)(Kl,{onClick:()=>e("/MeuPerfil"),children:(0,ra.jsx)(Na,{className:"icone"})})}),(0,ra.jsx)(ql,{children:(0,ra.jsx)(Ql,{onClick:()=>e("/notificacoes_perfil"),children:(0,ra.jsx)(za,{className:"icone"})})}),(0,ra.jsx)(Vl,{children:(0,ra.jsx)(Gl,{onClick:()=>{e("/bemvindo")},children:(0,ra.jsx)(Ta,{className:"icone"})})})]})]}),(0,ra.jsxs)("main",{children:[(0,ra.jsxs)(Jl,{children:[(0,ra.jsx)(Xl,{src:"/img/perfil.eu.jpg",alt:"Foto de perfil"}),(0,ra.jsx)(Zl,{children:"Sky Crizosti"})]}),(0,ra.jsx)(ts,{children:(0,ra.jsxs)(es,{children:[(0,ra.jsx)("a",{href:"/favoritos_perfil",children:(0,ra.jsx)(ns,{src:"/img/favoritos.png",alt:"Favoritos"})}),(0,ra.jsx)("a",{href:"/configuracao_perfil",children:(0,ra.jsx)(ns,{src:"/img/configuracao.png",alt:"Configura\xe7\xe3o"})}),(0,ra.jsx)("a",{href:"/DadosPerfil",children:(0,ra.jsx)(ns,{src:"/img/dados_perfil.png",alt:"Perfil"})}),(0,ra.jsx)("a",{href:"/notificacoes_perfil",children:(0,ra.jsx)(ns,{src:"/img/notificacao.png",alt:"notifica\xe7\xf5es"})})]})}),(0,ra.jsxs)(rs,{children:[(0,ra.jsx)(is,{}),(0,ra.jsx)(os,{children:"Visto por ultimo"}),(0,ra.jsx)(as,{src:"/img/visto1.jpg",alt:""}),(0,ra.jsx)(as,{src:"/img/promocao_produto1.jpg",alt:""}),(0,ra.jsx)(as,{src:"/img/promocao_produto2.jpg",alt:""}),(0,ra.jsx)(as,{src:"/img/promocao2.jpg",alt:""}),(0,ra.jsx)(as,{src:"/img/visto2.jpg",alt:""}),(0,ra.jsx)(as,{src:"/img/visto3.jpg",alt:""}),(0,ra.jsx)(as,{src:"/img/visto4.jpg",alt:""}),(0,ra.jsx)(as,{src:"/img/visto5.jpg",alt:""}),(0,ra.jsx)(as,{src:"/img/visto6.jpg",alt:""}),(0,ra.jsx)(as,{src:"/img/voce_sabia2.jpg",alt:""}),(0,ra.jsx)(as,{src:"/img/voce_sabia3.jpg",alt:""}),(0,ra.jsx)(as,{src:"/img/visto7.jpg",alt:""}),(0,ra.jsx)(as,{src:"/img/promocao1.jpg",alt:""}),(0,ra.jsx)(as,{src:"/img/promocao_produto3.jpg",alt:""}),(0,ra.jsx)(as,{src:"/img/voce_sabia1.jpg",alt:""})]})]}),(0,ra.jsx)(ls,{children:(0,ra.jsxs)(ss,{children:[(0,ra.jsxs)(us,{children:[(0,ra.jsx)(gs,{children:"BeYou"}),(0,ra.jsx)(cs,{children:"Site Institucional"}),(0,ra.jsx)(cs,{children:"Fale Conosco"}),(0,ra.jsx)(cs,{children:"Conta e Seguran\xe7a"}),(0,ra.jsx)(cs,{children:"Carreiras"}),(0,ra.jsx)(cs,{children:"Entregadores"})]}),(0,ra.jsxs)(us,{children:[(0,ra.jsx)(gs,{children:"Descubra"}),(0,ra.jsx)(cs,{children:"Cadastre sua loja"}),(0,ra.jsx)(cs,{children:"Beyou Shop"}),(0,ra.jsx)(cs,{children:"BeYou Empresas"}),(0,ra.jsx)(cs,{children:"Blog BeYou Empresas"})]}),(0,ra.jsxs)(us,{children:[(0,ra.jsx)(gs,{children:"Social"}),(0,ra.jsxs)(ds,{children:[(0,ra.jsx)(cs,{children:(0,ra.jsx)(Ka,{})}),(0,ra.jsx)(cs,{children:(0,ra.jsx)(Ga,{})}),(0,ra.jsx)(cs,{children:(0,ra.jsx)(Ja,{})}),(0,ra.jsx)(cs,{children:(0,ra.jsx)(Qa,{})})]})]}),(0,ra.jsxs)(fs,{children:[(0,ra.jsx)(ms,{src:"/img/new_logo.jpg",alt:"BeYou Logo"}),(0,ra.jsx)(hs,{children:"\xa9 Copyright 2025 - BeYou. Todos os direitos reservados."}),(0,ra.jsx)("br",{}),(0,ra.jsx)(hs,{children:"CNPJ 00.000.000/0000-00 / Endere\xe7o fict\xedcio - Cidade/Estado - CEP 00000-000"})]}),(0,ra.jsxs)(ps,{children:[(0,ra.jsx)(cs,{children:"Termos e Condi\xe7\xf5es de Uso"})," | ",(0,ra.jsx)(cs,{children:"Codigo de Conduta"})," | ",(0,ra.jsx)(cs,{children:"Privacidade"})," | ",(0,ra.jsx)(cs,{children:"Dicas de Seguran\xe7a"})]})]})})]})},bs=Kr.div`
    background-color:rgb(255, 228, 230);
`,ys=Kr.header`
    background-image: url("/img/Textura_Rosa.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 20px 40px;
    border-bottom: 4px solid #e6b2d4;
    border-radius: 0 0 30px 30px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #6c4539;
`,ws=Kr.div`
    display: flex;
    align-items: center;
`,js=Kr.img`
    width: 60px;
    height: auto;
    border-radius: 50%;
    border: 2px solid #6c4539;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`,ks=Kr.input`
    width: 30%;
    padding: 12px 18px;
    border: 2px solid hsl(300, 99%, 64%);
    border-radius: 20px;
    font-size: 16px;
    color: #6c4539;
    outline: none;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);

    &::placeholder {
        color: #6c4539;
        font-style: italic;
    }

    &:focus {
      border: 2px solid hsl(300, 99%, 64%);
    }

    &:hover {
    box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`,Ss=Kr.div`
  overflow: hidden;
`,Cs=Kr.a`
  float: left;
  font-size: 15px;
  color: #6c4539;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  border: 1px #FFC9E9;
  display: inline-block;
  line-height: normal;
  margin-left: 15px;
  margin-right: 15px;
  &:hover {
    background-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: hsl(300, 99%, 64%);
    cursor: pointer;
    transform: scale(1.1);
  }
`,Es=Kr.div`
    display: flex;
    overflow: hidden;
    justify-content: flex-end;
    gap: 16px;
`,_s=Kr.div`
    display: flex;
    align-items: center;
    overflow: hidden;
`,Ps=Kr.div`
    display: flex;
    align-items: center;
    overflow: hidden;
`,Os=Kr.div`
    display: flex;
    align-items: center;
    overflow: hidden;
`,Ns=Kr.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    border: none;
    background-color: transparent;
    color: #6c4539;
    overflow: hidden;
    text-decoration: none;

    &:hover {
      transform: scale(1.1);
      text-decoration: underline;
      color: hsl(300, 99%, 64%);
    }
`,zs=Kr.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    border: none;
    background-color: transparent;
    color: #6c4539;
    text-decoration: none;

    &:hover {
      transform: scale(1.1);
      text-decoration: underline;
      color: hsl(300, 99%, 64%);
    }
`,Ts=Kr.button`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 32px;
    height: 32px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    border: none;
    background-color: transparent;
    color: #6c4539;
    
    &:hover {
      transform: scale(1.1);
      text-decoration: underline;
      color: hsl(300, 99%, 64%);
    }
`,Ds=Kr.div`
  text-align: left;
  color: #6c4539;
  font-size: 40px;
  margin: 20px 50px;

  @media (max-width: 768px) {
    font-size: 28px;
    margin: 20px;
  }
`,As=Kr.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 10px;
  padding: 10px;
  background: rgba(249, 249, 249, 0);
  border-radius: 10px;
`,Ls=Kr.div`
  padding: 12px 16px;
  background: ${e=>{let{read:t}=e;return t?"#f0e6e9":"#fff"}};
  border: 1px solid #e8c2d9;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #ffe9f3;
    transform: scale(1.01);
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`,Rs=(Kr.div`
  margin-top: 20px;
  font-weight: bold;
`,Kr.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: gray;
`),Fs=Kr.div`
  flex-grow: 1;
`,Is=Kr.p`
  margin: 0;
  font-size: 14px;
`,Ms=Kr.span`
  font-size: 12px;
  color: gray;
`,$s=(Kr.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 20px;

  .filter-container {
    display: flex;
    align-items: center;
    gap: 12px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }

    label {
      font-size: 1rem;
      font-weight: 500;
    }

    select {
      padding: 8px 12px;
      border-radius: 8px;
      border: 1px solid #ccc;
      font-size: 1rem;
      background-color: #fff5f9;
    }
  }

  button {
    align-self: flex-start;
  }
`,Kr.button`
  background: linear-gradient(to right, #ffb6c1, #db7093);
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s ease;
  font-weight: bold;

  &:hover {
    background: linear-gradient(to right, #db7093, #c71585);
    transform: translateY(-1px);
  }
`),Bs=Kr.button`
  background: #ff516f;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 10px;

  &:hover {
    background: darkred;
  }
`,Us=Kr.div`
  font-size: 16px;
  font-weight: bold;
  color: #6c4539;
  margin: 20px 10px 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid #d6a7c2;
`,Ys=Kr.div`
  background-color: #FFC9E9;
  display: flex;
  flex-wrap: wrap;
  color: white;
  padding: 40px 20px;
  border: 3px solid #6c4539;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
`,Ws=Kr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,Hs=Kr.a`
  font-size: 15px;
  color: #6c4539;
  text-decoration: none;
  font-weight: bold;
  margin: 10px 0;
  text-align: center;

  &:hover {
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: hsl(300, 99%, 64%);
    cursor: pointer;
    transform: scale(1.1);
  }
`,qs=Kr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; 
  flex: 1;
  min-width: 200px;

  @media (max-width: 768px) {
    width: 100%;
  }
`,Vs=Kr.div`
  display: flex;
  gap: 15px;
  font-size: 22px;
  width: 20px;
  justify-content: center;
`,Ks=Kr.div`
  display: flex;
  gap: 30px;
  cursor: pointer;
  color: #6c4539;
  flex-wrap: wrap;
  margin-top: 20px;
`,Qs=Kr.div`
  width: 100%;
  border-top: 1px solid #6c4539;
  text-align: center;
  padding-top: 10px;
  margin-top: 20px;
`,Gs=Kr.p`
  font-size: 12px;
  color: #6c4539;
`,Js=Kr.img`
  width: 100px;
  margin-bottom: 20px;
  margin-top: 20px;
`,Xs=Kr.h3`
    text-align: center;
    color: #6c4539;
    font-style: bold;
    list-style: none;
    margin-bottom: 10px;
    font-size: 40px;
`;const Zs=function(){const t=X(),[n,r]=(0,e.useState)("todos"),[a,o]=(0,e.useState)({hoje:[{id:1,tipo:"agendamento",icone:"\ud83d\udcc5",img:"/img/user1.jpeg",titulo:"Agendamento Confirmado",text:"Seu hor\xe1rio com a Marina (Cabeleireira) foi confirmado para amanh\xe3 \xe0s 14h.",time:"1h atr\xe1s",lida:!1},{id:2,tipo:"pedido",icone:"\ud83d\udce6",img:"/img/user2.webp",titulo:"Pedido Enviado",text:"Seu pedido foi enviado! A previs\xe3o de entrega \xe9 04/04.",time:"3h atr\xe1s",lida:!1}],semana:[{id:3,tipo:"promocao",icone:"\ud83c\udf89",img:"/img/user3.jpg",titulo:"Semana do Cliente",text:"Servi\xe7os com at\xe9 50% de desconto!",time:"2 dias atr\xe1s",lida:!1},{id:4,tipo:"recomendacao",icone:"\u2728",img:"/img/user4.jpeg",titulo:"Novidades para voc\xea",text:"\xd3leo capilar e esfoliante facial, baseados nos seus gostos!",time:"5 dias atr\xe1s",lida:!1},{id:5,tipo:"social",icone:"\u2764\ufe0f",img:"/img/user5.jpg",titulo:"Intera\xe7\xe3o Social",text:"Mariana tamb\xe9m favoritou o Shampoo Detox que voc\xea curtiu!",time:"5 dias atr\xe1s",lida:!1}]}),i=(e,t)=>{const r=(e=>"todos"===n?e:e.filter((e=>e.tipo===n)))(t);return 0===r.length?null:(0,ra.jsxs)(ra.Fragment,{children:[(0,ra.jsx)(Us,{children:e}),(0,ra.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:r.map((e=>(0,ra.jsxs)(Ls,{read:e.lida,className:"bg-white shadow-md rounded-lg p-4 flex items-start gap-4 h-full",children:[(0,ra.jsx)(Rs,{src:e.img,className:"w-14 h-14 object-cover rounded-full"}),(0,ra.jsxs)(Fs,{className:"flex-1",children:[(0,ra.jsxs)(Is,{className:"font-semibold",children:[e.icone," ",e.titulo]}),(0,ra.jsx)(Is,{children:e.text}),(0,ra.jsx)(Ms,{className:"text-sm text-gray-500",children:e.time})]}),!e.lida&&(0,ra.jsx)($s,{onClick:()=>(e=>{const t={};for(const n in a)t[n]=a[n].map((t=>t.id===e?{...t,lida:!0}:t));o(t)})(e.id),children:"Marcar como lida"})]},e.id)))})]})},l=Object.values(a).every((e=>0===e.length));return(0,ra.jsxs)(bs,{children:[(0,ra.jsxs)(ys,{children:[(0,ra.jsx)(ws,{children:(0,ra.jsx)(js,{onClick:()=>t("/PaginaInicial"),src:"/img/new_logo.jpg",alt:"Logo"})}),(0,ra.jsxs)(Ss,{children:[(0,ra.jsx)(Cs,{onClick:()=>t("/PaginaInicial"),children:"Inicio"}),(0,ra.jsx)(Cs,{onClick:()=>t("/Carrinho"),children:"Meu Carrinho"}),(0,ra.jsx)(Cs,{onClick:()=>t("/Pesquisar"),children:"Pesquisar"}),(0,ra.jsx)(Cs,{onClick:()=>t("/Agendamentos"),children:"Agendamentos"}),(0,ra.jsx)(Cs,{onClick:()=>t("/FAvoritos_perfil"),children:"Favoritos"})]}),(0,ra.jsx)(ks,{type:"text",placeholder:"Busque por item ou loja"}),(0,ra.jsxs)(Es,{children:[(0,ra.jsx)(_s,{children:(0,ra.jsxs)(Ns,{onClick:()=>t("/MeuPerfil"),children:[" ",(0,ra.jsx)(Na,{className:"icone"})," "]})}),(0,ra.jsx)(Ps,{children:(0,ra.jsxs)(zs,{onClick:()=>t("/notificacoes_perfil"),children:[" ",(0,ra.jsx)(za,{className:"icone"})," "]})}),(0,ra.jsx)(Os,{children:(0,ra.jsx)(Ts,{onClick:()=>t("/bemvindo"),children:(0,ra.jsx)(Ta,{className:"icone"})})})]})]}),(0,ra.jsxs)("main",{className:"p-5",children:[(0,ra.jsx)(Ds,{children:"Notifica\xe7\xf5es \u2728"}),(0,ra.jsxs)("div",{className:"filter-section",children:[(0,ra.jsx)($s,{onClick:()=>{const e={};for(const t in a)e[t]=a[t].map((e=>({...e,lida:!0})));o(e)},children:"Marcar todas como lidas"}),(0,ra.jsxs)("div",{className:"filter-container",children:[(0,ra.jsx)("label",{htmlFor:"filtro",children:"Filtrar por tipo \ud83e\uddfc:"}),(0,ra.jsx)("select",{id:"filtro",value:n,onChange:e=>r(e.target.value),children:Object.entries({todos:"Todos",promocao:"Promo\xe7\xf5es & Ofertas",agendamento:"Agendamentos",pedido:"Status de Pedido",recomendacao:"Recomenda\xe7\xf5es",social:"Sociais"}).map((e=>{let[t,n]=e;return(0,ra.jsx)("option",{value:t,children:n},t)}))})]})]}),(0,ra.jsx)(As,{children:l?(0,ra.jsxs)("div",{className:"text-center mt-10 opacity-80",children:[(0,ra.jsx)("img",{src:"/img/vazio.png",alt:"Sem notifica\xe7\xf5es",className:"w-24 mx-auto"}),(0,ra.jsx)("p",{className:"mt-2",children:"\u2728 Voc\xea est\xe1 por dentro de tudo! Assim que houver novidades, a gente te avisa por aqui \ud83d\udc96"})]}):(0,ra.jsxs)(ra.Fragment,{children:[i("Hoje",a.hoje),i("Essa Semana",a.semana)]})}),(0,ra.jsx)("div",{className:"text-center mt-6",children:(0,ra.jsx)(Bs,{onClick:()=>o({hoje:[],semana:[]}),children:"Limpar tudo"})})]}),(0,ra.jsx)(Ys,{children:(0,ra.jsxs)(Ws,{children:[(0,ra.jsxs)(qs,{children:[(0,ra.jsx)(Xs,{children:"BeYou"}),(0,ra.jsx)(Hs,{children:"Site Institucional"}),(0,ra.jsx)(Hs,{children:"Fale Conosco"}),(0,ra.jsx)(Hs,{children:"Conta e Seguran\xe7a"}),(0,ra.jsx)(Hs,{children:"Carreiras"}),(0,ra.jsx)(Hs,{children:"Entregadores"})]}),(0,ra.jsxs)(qs,{children:[(0,ra.jsx)(Xs,{children:"Descubra"}),(0,ra.jsx)(Hs,{children:"Cadastre sua loja"}),(0,ra.jsx)(Hs,{children:"Beyou Shop"}),(0,ra.jsx)(Hs,{children:"BeYou Empresas"}),(0,ra.jsx)(Hs,{children:"Blog BeYou Empresas"})]}),(0,ra.jsxs)(qs,{children:[(0,ra.jsx)(Xs,{children:"Social"}),(0,ra.jsxs)(Vs,{children:[(0,ra.jsx)(Hs,{children:(0,ra.jsx)(Ka,{})}),(0,ra.jsx)(Hs,{children:(0,ra.jsx)(Ga,{})}),(0,ra.jsx)(Hs,{children:(0,ra.jsx)(Ja,{})}),(0,ra.jsx)(Hs,{children:(0,ra.jsx)(Qa,{})})]})]}),(0,ra.jsxs)(Qs,{children:[(0,ra.jsx)(Js,{src:"/img/new_logo.jpg",alt:"BeYou Logo"}),(0,ra.jsx)(Gs,{children:"\xa9 Copyright 2025 - BeYou. Todos os direitos reservados."}),(0,ra.jsx)("br",{}),(0,ra.jsx)(Gs,{children:"CNPJ 00.000.000/0000-00 / Endere\xe7o fict\xedcio - Cidade/Estado - CEP 00000-000"})]}),(0,ra.jsxs)(Ks,{children:[(0,ra.jsx)(Hs,{children:"Termos e Condi\xe7\xf5es de Uso"})," | ",(0,ra.jsx)(Hs,{children:"Codigo de Conduta"})," | ",(0,ra.jsx)(Hs,{children:"Privacidade"})," | ",(0,ra.jsx)(Hs,{children:"Dicas de Seguran\xe7a"})]})]})})]})},ec=Kr.div`
    background-color:rgb(255, 228, 230);
`,tc=Kr.header`
    background-image: url("/img/Textura_Rosa.jpg");
    min-height: 100%; 
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover;
    position: relative;
    color: #6c4539;
    padding: 10px 20px;
    display: flex; 
    align-items: center;
    justify-content: space-between;
    border: 0.5px solid #6c4539;
`,nc=Kr.div`
    display: flex;
    align-items: center;
`,rc=Kr.img`
    width: 60px;
    height: auto;
    border-radius: 50%;
    border: 2px solid #6c4539;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`,ac=Kr.input`
    width: 30%;
    padding: 12px 18px;
    border: 2px solid hsl(300, 99%, 64%);
    border-radius: 20px;
    font-size: 16px;
    color: #6c4539;
    outline: none;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);

    &::placeholder {
        color: #6c4539;
        font-style: italic;
    }

    &:focus {
      border: 2px solid hsl(300, 99%, 64%);
    }

    &:hover {
    box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`,oc=Kr.div`
  overflow: hidden;
`,ic=Kr.a`
  float: left;
  font-size: 15px;
  color: #6c4539;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  border: 1px #FFC9E9;
  display: inline-block;
  line-height: normal;
  margin-left: 15px;
  margin-right: 15px;
  &:hover {
    background-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: hsl(300, 99%, 64%);
    cursor: pointer;
    transform: scale(1.1);
  }
`,lc=Kr.div`
    display: flex;
    overflow: hidden;
    justify-content: flex-end;
    gap: 16px;
`,sc=Kr.div`
    display: flex;
    align-items: center;
    overflow: hidden;
`,cc=Kr.div`
    display: flex;
    align-items: center;
    overflow: hidden;
`,uc=Kr.div`
    display: flex;
    align-items: center;
    overflow: hidden;
`,dc=Kr.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    border: none;
    background-color: transparent;
    color: #6c4539;
    overflow: hidden;
    text-decoration: none;

    &:hover {
      transform: scale(1.1);
      text-decoration: underline;
      color: hsl(300, 99%, 64%);
    }
`,pc=Kr.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    border: none;
    background-color: transparent;
    color: #6c4539;
    text-decoration: none;

    &:hover {
      transform: scale(1.1);
      text-decoration: underline;
      color: hsl(300, 99%, 64%);
    }
`,fc=Kr.button`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 32px;
    height: 32px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    border: none;
    background-color: transparent;
    color: #6c4539;
    
    &:hover {
      transform: scale(1.1);
      text-decoration: underline;
      color: hsl(300, 99%, 64%);
    }
`,hc="\n  margin-top: 30px;\n  overflow-x: auto;\n  white-space: nowrap;\n  scrollbar-width: none;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n",mc=Kr.div`${hc}`,gc=Kr.div`${hc}`,xc=Kr.div`${hc}`,vc=Kr.div`${hc}`,bc="\n  width: 200px;\n  height: 200px;\n  margin-left: 20px;\n  border-radius: 20%;\n  border: solid 2px #6c4539;\n  transition: all 0.3s ease;\n\n  &:hover {\n    filter: brightness(0.8);\n    cursor: pointer;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n    transform: translateY(-2px);\n  }\n\n  &:active {\n    transform: translateY(0);\n    box-shadow: none;\n  }\n\n  @media (max-width: 480px) {\n    width: 150px;\n    height: 150px;\n    margin-left: 10px;\n  }\n",yc=Kr.img`${bc}`,wc=(Kr.img`${bc}`,Kr.img`${bc}`),jc=Kr.img`${bc}`,kc=Kr.img`
  width: 150px;
  height: 150px;
  margin-left: 20px;
  border-radius: 100%;
  border: solid 2px #6c4539;

  &:hover {
    filter: brightness(0.8);
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
    margin-left: 10px;
  }
`,Sc=Kr.div`
  text-align: left;
  color: #6c4539;
  font-style: bold;
  font-size: 30px;
  margin-left: 50px;
  margin-top: 20px;

  @media (max-width: 480px) {
    font-size: 22px;
    margin-left: 20px;
  }
`,Cc=Kr.div`
  background-color: #FFC9E9;
  display: flex;
  color: white;
  padding: 40px 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 3px solid #6c4539;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
`,Ec=Kr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;
`,_c=Kr.a`
  font-size: 15px;
  color: #6c4539;
  text-decoration: none;
  font-weight: bold;
  margin: 10px 0;
  text-align: center;

  &:hover {
    background-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: hsl(300, 99%, 64%);
    cursor: pointer;
    transform: scale(1.1);
  }
`,Pc=Kr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  min-width: 200px;
`,Oc=Kr.div`
  display: flex;
  gap: 15px;
  font-size: 22px;
  justify-content: center;
`,Nc=Kr.div`
  display: flex;
  gap: 30px;
  cursor: pointer;
  color: #6c4539;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: center;
`,zc=Kr.div`
  width: 100%;
  border-top: 1px solid #6c4539;
  text-align: center;
  padding-top: 10px;
  color: #6c4539;
  font-size: 12px;

  @media (max-width: 480px) {
    font-size: 10px;
  }
`,Tc=Kr.img`
  width: 100px;
  margin-bottom: 20px;
  margin-top: 20px;
`,Dc=Kr.h3`
    text-align: center;
    color: #6c4539;
    font-style: bold;
    list-style: none;
    margin-bottom: 10px;
    font-size: 40px;
`,Ac=(Kr.div`
  font-size: 24px;
  cursor: pointer;
  display: none;
  padding: 10px;
  color: #6c4539;

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    color: hsl(300, 99%, 64%);
    transform: scale(1.1);
  }
`,Kr.p`
  font-size: 12px;
  color: #6c4539;
`),Lc=Gr`
  ::-webkit-scrollbar {
    width: 8px;
    max-height: 400px;
    overflow-y: auto;
  }
  ::-webkit-scrollbar-track {
    background: #ffe4ec;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #ff69b4;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #ff1493;
  }
`;const Rc=function(){const e=X();return(0,ra.jsxs)(ec,{children:[(0,ra.jsx)(Lc,{}),(0,ra.jsxs)(tc,{children:[(0,ra.jsx)(nc,{children:(0,ra.jsx)(rc,{onClick:t=>{t.preventDefault(),e("/PaginaInicial")},src:"/img/new_logo.jpg",alt:"Logo"})}),(0,ra.jsxs)(oc,{children:[(0,ra.jsx)(ic,{onClick:()=>e("/PaginaInicial"),children:"Inicio"}),(0,ra.jsx)(ic,{onClick:()=>e("/Carrinho"),children:"Meu Carrinho"}),(0,ra.jsx)(ic,{onClick:()=>e("/Pesquisar"),children:"Pesquisar"}),(0,ra.jsx)(ic,{onClick:()=>e("/Agendamentos"),children:"Agendamentos"}),(0,ra.jsx)(ic,{onClick:()=>e("/FAvoritos_perfil"),children:"Favoritos"})]}),(0,ra.jsx)(ac,{type:"text",placeholder:"Busque por item ou loja"}),(0,ra.jsxs)(lc,{children:[(0,ra.jsx)(sc,{children:(0,ra.jsx)(dc,{onClick:()=>e("/MeuPerfil"),children:(0,ra.jsx)(Na,{className:"icone"})})}),(0,ra.jsx)(cc,{children:(0,ra.jsx)(pc,{onClick:()=>e("/notificacoes_perfil"),children:(0,ra.jsx)(za,{className:"icone"})})}),(0,ra.jsx)(uc,{children:(0,ra.jsx)(fc,{onClick:()=>{e("/bemvindo")},children:(0,ra.jsx)(Ta,{className:"icone"})})})]})]}),(0,ra.jsxs)("main",{children:[(0,ra.jsxs)(mc,{children:[(0,ra.jsx)(Sc,{children:"Promo\xe7\xf5es de Servi\xe7os"}),(0,ra.jsx)(yc,{src:"/img/promocao1.jpg",alt:"prom\xe7\xe3o de alongamento de unha"}),(0,ra.jsx)(yc,{src:"/img/promocao2.jpg",alt:"promo\xe7\xe3o de progressiva"}),(0,ra.jsx)(yc,{src:"/img/promocao3.jpeg",alt:"promo\xe7\xe3o de corte"}),(0,ra.jsx)(yc,{src:"/img/promo\xe7ao4.jpg",alt:"promo\xe7\xe3o de tran\xe7as"}),(0,ra.jsx)(yc,{src:"/img/promocao5.jpeg",alt:"promo\xe7\xe3o de  massagem"}),(0,ra.jsx)(yc,{src:"/img/promocao6.jpeg",alt:""}),(0,ra.jsx)(yc,{src:"/img/promocao7.jpeg",alt:""}),(0,ra.jsx)(yc,{src:"/img/promocao8.jpeg",alt:""}),(0,ra.jsx)(yc,{src:"/img/promocao9.jpeg",alt:""}),(0,ra.jsx)(yc,{src:"/img/promocao10.jpeg",alt:""}),(0,ra.jsx)(yc,{src:"/img/promocao11.jpeg",alt:""}),(0,ra.jsx)(yc,{src:"/img/promocao12.jpeg",alt:""}),(0,ra.jsx)(yc,{src:"/img/promocao13.jpeg",alt:""})]}),(0,ra.jsxs)(gc,{children:[(0,ra.jsx)(Sc,{children:"Promo\xe7\xf5es de Produtos"}),(0,ra.jsx)(wc,{src:"/img/promocao_produto1.jpg",alt:""}),(0,ra.jsx)(wc,{src:"/img/promocao_produto2.jpg",alt:"progressiva"}),(0,ra.jsx)(wc,{src:"/img/promocao_produto3.jpg",alt:""}),(0,ra.jsx)(wc,{src:"/img/imgnv1.jpg",alt:""}),(0,ra.jsx)(wc,{src:"/img/imgnova.jpg",alt:""}),(0,ra.jsx)(wc,{src:"/img/produto6.jpeg",alt:""}),(0,ra.jsx)(wc,{src:"/img/produto7.jpeg",alt:""}),(0,ra.jsx)(wc,{src:"/img/produto8.jpeg",alt:""}),(0,ra.jsx)(wc,{src:"/img/produto9.jpeg",alt:""}),(0,ra.jsx)(wc,{src:"/img/produto10.jpeg",alt:""}),(0,ra.jsx)(wc,{src:"/img/produto11.jpeg",alt:""}),(0,ra.jsx)(wc,{src:"/img/produto12.jpeg",alt:""}),(0,ra.jsx)(wc,{src:"/img/produto13.jpeg",alt:""}),(0,ra.jsx)(wc,{src:"/img/produto14.jpeg",alt:""}),(0,ra.jsx)(wc,{src:"/img/produto15.jpeg",alt:""})]}),(0,ra.jsxs)(xc,{children:[(0,ra.jsx)(Sc,{children:"Lojas em destaque"}),(0,ra.jsx)(kc,{src:"/img/loja1.jpg",alt:""}),(0,ra.jsx)(kc,{src:"/img/loja2.jpg",alt:""}),(0,ra.jsx)(kc,{src:"/img/loja3.jpg",alt:""}),(0,ra.jsx)(kc,{src:"/img/loja5.jpg",alt:""}),(0,ra.jsx)(kc,{src:"/img/loja6.jpg",alt:""}),(0,ra.jsx)(kc,{src:"/img/loja7.jpg",alt:""}),(0,ra.jsx)(kc,{src:"/img/loja7.png",alt:""}),(0,ra.jsx)(kc,{src:"/img/loja8.jpeg",alt:""}),(0,ra.jsx)(kc,{src:"/img/loja9.jpeg",alt:""}),(0,ra.jsx)(kc,{src:"/img/loja10.png",alt:""}),(0,ra.jsx)(kc,{src:"/img/loja11.jpeg",alt:""}),(0,ra.jsx)(kc,{src:"/img/loja12.jpeg",alt:""}),(0,ra.jsx)(kc,{src:"/img/loja13.jpeg",alt:""}),(0,ra.jsx)(kc,{src:"/img/loja14.png",alt:""}),(0,ra.jsx)(kc,{src:"/img/loja15.png",alt:""}),(0,ra.jsx)(kc,{src:"/img/loja16.png",alt:""}),(0,ra.jsx)(kc,{src:"/img/loja17.png",alt:""}),(0,ra.jsx)(kc,{src:"/img/loja18.jpeg",alt:""})]}),(0,ra.jsxs)(vc,{children:[(0,ra.jsx)(Sc,{children:"Voc\xea sabia...?"}),(0,ra.jsx)(jc,{src:"/img/voce_sabia1.jpg",alt:""}),(0,ra.jsx)(jc,{src:"/img/voce_sabia2.jpg",alt:""}),(0,ra.jsx)(jc,{src:"/img/voce_sabia3.jpg",alt:""}),(0,ra.jsx)(jc,{src:"/img/voce_sabia4.jpg",alt:""}),(0,ra.jsx)(jc,{src:"/img/voce_sabia5.jpg",alt:""}),(0,ra.jsx)(jc,{src:"/img/sabia6.jpeg",alt:""}),(0,ra.jsx)(jc,{src:"/img/sabia7.jpeg",alt:""}),(0,ra.jsx)(jc,{src:"/img/sabia8.jpeg",alt:""}),(0,ra.jsx)(jc,{src:"/img/sabia9.jpeg",alt:""}),(0,ra.jsx)(jc,{src:"/img/sabia10.jpeg",alt:""}),(0,ra.jsx)(jc,{src:"/img/sabia11.png",alt:""}),(0,ra.jsx)(jc,{src:"/img/sabia12.jpeg",alt:""}),(0,ra.jsx)(jc,{src:"/img/sabia13.jpeg",alt:""}),(0,ra.jsx)(jc,{src:"/img/sabia14.jpeg",alt:""}),(0,ra.jsx)(jc,{src:"/img/sabia15.jpeg",alt:""}),(0,ra.jsx)(jc,{src:"/img/sabia17.jpeg",alt:""}),(0,ra.jsx)(jc,{src:"/img/sabia18.jpeg",alt:""})]})]}),(0,ra.jsx)(Cc,{children:(0,ra.jsxs)(Ec,{children:[(0,ra.jsxs)(Pc,{children:[(0,ra.jsx)(Dc,{children:"BeYou"}),(0,ra.jsx)(_c,{children:"Site Institucional"}),(0,ra.jsx)(_c,{children:"Fale Conosco"}),(0,ra.jsx)(_c,{children:"Conta e Seguran\xe7a"}),(0,ra.jsx)(_c,{children:"Carreiras"}),(0,ra.jsx)(_c,{children:"Entregadores"})]}),(0,ra.jsxs)(Pc,{children:[(0,ra.jsx)(Dc,{children:"Descubra"}),(0,ra.jsx)(_c,{children:"Cadastre sua loja"}),(0,ra.jsx)(_c,{children:"Beyou Shop"}),(0,ra.jsx)(_c,{children:"BeYou Empresas"}),(0,ra.jsx)(_c,{children:"Blog BeYou Empresas"})]}),(0,ra.jsxs)(Pc,{children:[(0,ra.jsx)(Dc,{children:"Social"}),(0,ra.jsxs)(Oc,{children:[(0,ra.jsx)(_c,{children:(0,ra.jsx)(Ka,{})}),(0,ra.jsx)(_c,{children:(0,ra.jsx)(Ga,{})}),(0,ra.jsx)(_c,{children:(0,ra.jsx)(Ja,{})}),(0,ra.jsx)(_c,{children:(0,ra.jsx)(Qa,{})})]})]}),(0,ra.jsxs)(zc,{children:[(0,ra.jsx)(Tc,{src:"/img/new_logo.jpg",alt:"BeYou Logo"}),(0,ra.jsx)(Ac,{children:"\xa9 Copyright 2025 - BeYou. Todos os direitos reservados."}),(0,ra.jsx)("br",{}),(0,ra.jsx)(Ac,{children:"CNPJ 00.000.000/0000-00 / Endere\xe7o fict\xedcio - Cidade/Estado - CEP 00000-000"})]}),(0,ra.jsxs)(Nc,{children:[(0,ra.jsx)(_c,{children:"Termos e Condi\xe7\xf5es de Uso"})," | ",(0,ra.jsx)(_c,{children:"Codigo de Conduta"})," | ",(0,ra.jsx)(_c,{children:"Privacidade"})," | ",(0,ra.jsx)(_c,{children:"Dicas de Seguran\xe7a"})]})]})})]})},Fc=Kr.div`
    background-color:rgb(255, 228, 230);
`,Ic=Kr.header`
    background-image: url("/img/Textura_Rosa.jpg");
    min-height: 100%; 
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover;
    position: relative;
    color: #6c4539;
    padding: 10px 20px;
    display: flex; 
    align-items: center;
    justify-content: space-between;
    border: 0.5px solid #6c4539;
`,Mc=Kr.div`
    display: flex;
    align-items: center;
`,$c=Kr.img`
    width: 60px;
    height: auto;
    border-radius: 50%;
    border: 2px solid #6c4539;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`,Bc=Kr.input`
    width: 30%;
    padding: 12px 18px;
    border: 2px solid hsl(300, 99%, 64%);
    border-radius: 20px;
    font-size: 16px;
    color: #6c4539;
    outline: none;
 
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);

    &::placeholder {
        color: #6c4539;
        font-style: italic;
    }

    &:focus {
      border: 2px solid hsl(300, 99%, 64%);
    }

    &:hover {
    box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`,Uc=Kr.div`
  overflow: hidden;
`,Yc=Kr.a`
  float: left;
  font-size: 15px;
  color: #6c4539;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  border: 1px #FFC9E9;
  display: inline-block;
  line-height: normal;
  margin-left: 15px;
  margin-right: 15px;
  &:hover {
    background-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: hsl(300, 99%, 64%);
    cursor: pointer;
    transform: scale(1.1);
  }
`,Wc=Kr.div`
    display: flex;
    overflow: hidden;
    justify-content: flex-end;
    gap: 16px;
`,Hc=Kr.div`
    display: flex;
    align-items: center;
    overflow: hidden;
`,qc=Kr.div`
    display: flex;
    align-items: center;
    overflow: hidden;
`,Vc=Kr.div`
    display: flex;
    align-items: center;
    overflow: hidden;
`,Kc=Kr.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    border: none;
    background-color: transparent;
    color: #6c4539;
    overflow: hidden;
    text-decoration: none;

    &:hover {
      transform: scale(1.1);
      text-decoration: underline;
      color: hsl(300, 99%, 64%);
    }
`,Qc=Kr.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    border: none;
    background-color: transparent;
    color: #6c4539;
    text-decoration: none;

    &:hover {
      transform: scale(1.1);
      text-decoration: underline;
      color: hsl(300, 99%, 64%);
    }
`,Gc=Kr.button`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 32px;
    height: 32px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    border: none;
    background-color: transparent;
    color: #6c4539;
    
    &:hover {
      transform: scale(1.1);
      text-decoration: underline;
      color: hsl(300, 99%, 64%);
    }
`,Jc=Kr.div`
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
`,Xc=Kr.h2`
  font-size: 32px;
  margin-bottom: 20px;
  color: #6c4539;
  text-align: center;
`,Zc=Kr.select`
  padding: 12px 18px;
  border-radius: 20px;
  border: 2px solid hsl(300, 99%, 64%);
  outline: none;
  color: #6c4539;
  width: 100%;
  max-width: 400px;
  margin: 0 auto 40px;
  display: block;
  font-size: 16px;
  background-color: white;
  color: #6c4539;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);

  &::placeholder {
    color: #6c4539;
    font-style: italic;
  }

  &:focus {
    border: 2px solid hsl(300, 99%, 64%);
  }

  &:hover {
    box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`,eu=Kr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
`,tu=Kr.div`
  border: 2px solid #6c4539;
  border-radius: 20px;
  overflow: hidden;
  transition: 0.3s;
  cursor: pointer;
  background-color: white;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);

  &::placeholder {
    color: #6c4539;
    font-style: italic;
  }

  &:focus {
    border: 2px solid hsl(300, 99%, 64%);
  }

  &:hover {
    box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`,nu=Kr.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  aspect-ratio: 16/9;
`,ru=Kr.p`
  text-align: center;
  font-size: 18px;
  color: #6c4539;
  padding: 15px;
  font-weight: bold;
  background-color:rgb(255, 233, 247);
`,au=Kr.div`
  background-color: #FFC9E9;
  display: flex;
  color: white;
  padding: 40px 80px;
  display: flex; /*conteiner manipulavel*/
  flex-wrap: wrap;
  justify-content: space-between;
  border: 3px solid #6c4539;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
`,ou=Kr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;
`,iu=Kr.a`
  font-size: 15px;
  color: #6c4539;
  text-decoration: none;
  font-weight: bold;
  border: 1px #FFC9E9;
  display: inline-block;
  line-height: normal;
  text-decoration: none;
  margin: 10px 0;
  text-align: center;
  &:hover {
    background-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: hsl(300, 99%, 64%);
    cursor: pointer;
    transform: scale(1.1);
  }
`,lu=Kr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; 
  flex: 1;
  min-width: 200px;
`,su=Kr.div`
  display: flex;
  gap: 15px;
  font-size: 22px;
  width: 20px;
  justify-content: center;
`,cu=Kr.div`
  display: flex;
  gap: 30px;
  cursor: pointer;
  color: #6c4539;
  flex-wrap: wrap;
  margin-top: 20px;
`,uu=Kr.div`
  width: 100%;
  border-top: 1px solid #6c4539;
  text-align: center;
  padding-top: 10px;
  margin-top: 20px;
`,du=Kr.p`
  font-size: 12px;
  color: #6c4539;
`,pu=Kr.img`
  width: 100px;
  margin-bottom: 20px;
  margin-top: 20px;
`,fu=Kr.h3`
    text-align: center;
    color: #6c4539;
    font-style: bold;
    list-style: none;
    margin-bottom: 10px;
    font-size: 40px;
`,hu=Gr`
  ::-webkit-scrollbar {
    width: 10px;
    max-height: 400px;
    overflow-y: auto;
  }
  ::-webkit-scrollbar-track {
    background: #ffe4ec;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #ff69b4;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #ff1493;
  }
`,mu=()=>{const t=X(),n=[{nome:"Sobrancelha",imagem:"/img/categoria_sobrancelha.jpg"},{nome:"Unhas",imagem:"/img/categoria_unhas.avif"},{nome:"Colora\xe7\xe3o",imagem:"/img/categoria_coloracao.webp"},{nome:"Tran\xe7as",imagem:"/img/categoria_trancas.webp"},{nome:"Cilios",imagem:"/img/categoria_cilios.jpg"},{nome:"Depila\xe7\xe3o",imagem:"/img/categoria_depilacao.jpeg"},{nome:"Massagem",imagem:"/img/categoria_massagem.jpg"},{nome:"Luzes",imagem:"/img/categoria_luzes.jpeg"},{nome:"Escova",imagem:"/img/categoria_escova.jpg"},{nome:"Maquiagem",imagem:"/img/categoria_make.jpg"},{nome:"Micropigmenta\xe7\xe3o",imagem:"/img/categoria_micropigmentacao.jpeg"},{nome:"Limpeza",imagem:"/img/categoria_limpeza.jpg"},{nome:"Corte",imagem:"/img/categoria_corte.jpeg"},{nome:"Hidrata\xe7\xe3o",imagem:"/img/categoria_hidratacao.jpeg"},{nome:"Mega Hair",imagem:"/img/categoria_mega.jpeg"}],[r,a]=(0,e.useState)(""),o=r?n.filter((e=>e.nome===r)):n;return(0,ra.jsxs)(Fc,{children:[(0,ra.jsx)(hu,{}),(0,ra.jsxs)(Ic,{children:[(0,ra.jsx)(Mc,{children:(0,ra.jsx)($c,{onClick:e=>{e.preventDefault(),t("/PaginaInicial")},src:"/img/new_logo.jpg",alt:"Logo"})}),(0,ra.jsxs)(Uc,{children:[(0,ra.jsx)(Yc,{onClick:()=>t("/PaginaInicial"),children:"Inicio"}),(0,ra.jsx)(Yc,{onClick:()=>t("/Carrinho"),children:"Meu Carrinho"}),(0,ra.jsx)(Yc,{onClick:()=>t("/Pesquisar"),children:"Pesquisar"}),(0,ra.jsx)(Yc,{onClick:()=>t("/Agendamentos"),children:"Agendamentos"}),(0,ra.jsx)(Yc,{onClick:()=>t("/FAvoritos_perfil"),children:"Favoritos"})]}),(0,ra.jsx)(Bc,{type:"text",placeholder:"Busque por item ou loja"}),(0,ra.jsxs)(Wc,{children:[(0,ra.jsx)(Hc,{children:(0,ra.jsx)(Kc,{onClick:()=>t("/MeuPerfil"),children:(0,ra.jsx)(Na,{className:"icone"})})}),(0,ra.jsx)(qc,{children:(0,ra.jsx)(Qc,{onClick:()=>t("/notificacoes_perfil"),children:(0,ra.jsx)(za,{className:"icone"})})}),(0,ra.jsx)(Vc,{children:(0,ra.jsx)(Gc,{onClick:()=>{t("/bemvindo")},children:(0,ra.jsx)(Ta,{className:"icone"})})})]})]}),(0,ra.jsx)("main",{children:(0,ra.jsxs)(Jc,{children:[(0,ra.jsx)(Xc,{children:"Selecione uma categoria"}),(0,ra.jsxs)(Zc,{value:r,onChange:e=>a(e.target.value),children:[(0,ra.jsx)("option",{value:"",children:"Todas as categorias"}),n.map(((e,t)=>(0,ra.jsx)("option",{value:e.nome,children:e.nome},t)))]}),(0,ra.jsx)(eu,{children:o.map(((e,t)=>(0,ra.jsxs)(tu,{children:[(0,ra.jsx)(nu,{src:e.imagem,alt:e.nome}),(0,ra.jsx)(ru,{children:e.nome})]},t)))})]})}),(0,ra.jsx)(au,{children:(0,ra.jsxs)(ou,{children:[(0,ra.jsxs)(lu,{children:[(0,ra.jsx)(fu,{children:"BeYou"}),(0,ra.jsx)(iu,{children:"Site Institucional"}),(0,ra.jsx)(iu,{children:"Fale Conosco"}),(0,ra.jsx)(iu,{children:"Conta e Seguran\xe7a"}),(0,ra.jsx)(iu,{children:"Carreiras"}),(0,ra.jsx)(iu,{children:"Entregadores"})]}),(0,ra.jsxs)(lu,{children:[(0,ra.jsx)(fu,{children:"Descubra"}),(0,ra.jsx)(iu,{children:"Cadastre sua loja"}),(0,ra.jsx)(iu,{children:"Beyou Shop"}),(0,ra.jsx)(iu,{children:"BeYou Empresas"}),(0,ra.jsx)(iu,{children:"Blog BeYou Empresas"})]}),(0,ra.jsxs)(lu,{children:[(0,ra.jsx)(fu,{children:"Social"}),(0,ra.jsxs)(su,{children:[(0,ra.jsx)(iu,{children:(0,ra.jsx)(Ka,{})}),(0,ra.jsx)(iu,{children:(0,ra.jsx)(Ga,{})}),(0,ra.jsx)(iu,{children:(0,ra.jsx)(Ja,{})}),(0,ra.jsx)(iu,{children:(0,ra.jsx)(Qa,{})})]})]}),(0,ra.jsxs)(uu,{children:[(0,ra.jsx)(pu,{src:"/img/new_logo.jpg",alt:"BeYou Logo"}),(0,ra.jsx)(du,{children:"\xa9 Copyright 2025 - BeYou. Todos os direitos reservados."}),(0,ra.jsx)(du,{children:"CNPJ 00.000.000/0000-00 / Endere\xe7o fict\xedcio - Cidade/Estado - CEP 00000-000"})]}),(0,ra.jsxs)(cu,{children:[(0,ra.jsx)(iu,{children:"Termos e Condi\xe7\xf5es de Uso"}),(0,ra.jsx)(iu,{children:"C\xf3digo de Conduta"}),(0,ra.jsx)(iu,{children:"Privacidade"}),(0,ra.jsx)(iu,{children:"Dicas de Seguran\xe7a"})]})]})})]})},gu=Kr.div`
  background-color: rgb(255, 228, 230);
`,xu=Kr.header`
  background-image: url("/img/Textura_Rosa.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 20px 40px;
  border-bottom: 4px solid #e6b2d4;
  border-radius: 0 0 30px 30px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #6c4539;
`,vu=Kr.div`
  display: flex;
  align-items: center;
`,bu=Kr.img`
  width: 60px;
  height: auto;
  border-radius: 50%;
  border: 2px solid #6c4539;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`,yu=Kr.input`
  width: 30%;
  padding: 12px 18px;
  border: 2px solid hsl(300, 99%, 64%);
  border-radius: 20px;
  font-size: 16px;
  color: #6c4539;
  outline: none;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);

  &::placeholder {
    color: #6c4539;
    font-style: italic;
  }

  &:hover {
    box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`,wu=Kr.div`
  overflow: hidden;
`,ju=Kr.a`
  float: left;
  font-size: 15px;
  color: #6c4539;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  border: 1px #FFC9E9;
  display: inline-block;
  margin: 0 15px;

  &:hover {
    background-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: hsl(300, 99%, 64%);
    cursor: pointer;
    transform: scale(1.1);
  }
`,ku=Kr.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`,Su=Kr.div`
  display: flex;
  align-items: center;
`,Cu=Kr.div`
  display: flex;
  align-items: center;
`,Eu=Kr.div`
  display: flex;
  align-items: center;
`,_u=Kr.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  background-color: transparent;
  color: #6c4539;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
    text-decoration: underline;
    color: hsl(300, 99%, 64%);
  }
`,Pu=Kr(_u)``,Ou=Kr.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  border: none;
  background-color: transparent;
  color: #6c4539;

  &:hover {
    transform: scale(1.1);
    text-decoration: underline;
    color: hsl(300, 99%, 64%);
  }
`,Nu=(Kr.section`
  padding: 20px;
  margin: 10px 0;
`,Kr.div`
  text-align: left;
  color: #6c4539;
  font-size: 40px;
  margin: 20px 50px;
`,Kr.label`
  display: block;
  font-weight: bold;
  margin-top: 10px;
  color: #6c4539;
`),zu=Kr.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 16px;
`,Tu=Kr.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 16px;
  resize: none;
`,Du=Kr.button`
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  border: none;
  background-color: #fd99d5;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #fd99d5;
  }

  &:active {
    transform: scale(0.95);
  }
`,Au=Kr(Du)`
  background-color: #ff4d4d;

  &:hover {
    background-color: #ff6666;
  }

  &:active {
    background-color: #cc0000;
  }
`,Lu=(Kr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px;
  white-space: pre-line;
`,Kr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px;
`),Ru=Kr.div`
  color: #6c4539;
  width: 1000px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.38);
  opacity: 90%;
  border-radius: 12px;
  border: 1px solid #6c4539;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
    transform: scale(1.05);
  }
`,Fu=Kr.div`
  font-size: 20px;
  margin-top: 10px;
  display: ${e=>e.visivel?"block":"none"};
  text-align: justify;
  line-height: 1.5;
`,Iu=Kr.div`
  color: #6c4539;
  font-size: 40px;
  margin: 20px 50px;
`,Mu=Kr.div`
  background-color: #FFC9E9;
  display: flex;
  flex-direction: column;
  color: white;
  padding: 40px 80px;
  border: 3px solid #6c4539;
  align-items: center;
  width: 100%;
  margin-top: 50px;
`,$u=Kr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;
`,Bu=Kr.a`
  font-size: 15px;
  color: #6c4539;
  text-decoration: none;
  font-weight: bold;
  margin: 10px 0;

  &:hover {
    color: hsl(300, 99%, 64%);
    transform: scale(1.1);
  }
`,Uu=Kr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 200px;
`,Yu=Kr.div`
  display: flex;
  gap: 15px;
`,Wu=Kr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 20px;
  color: #6c4539;
`,Hu=Kr.div`
  width: 100%;
  border-top: 1px solid #6c4539;
  text-align: center;
  padding-top: 10px;
  margin-top: 20px;
`,qu=Kr.p`
  font-size: 12px;
  color: #6c4539;
`,Vu=Kr.img`
  width: 100px;
  margin: 20px 0;
`,Ku=Kr.h3`
  text-align: center;
  color: #6c4539;
  font-size: 40px;
  margin-bottom: 10px;
`;function Qu(){const[t,n]=(0,e.useState)(!1);return(0,ra.jsxs)(Ru,{children:[(0,ra.jsx)(Iu,{onClick:()=>n(!t),children:"Dados Pessoais"}),(0,ra.jsxs)(Fu,{visivel:t,onClick:e=>e.stopPropagation(),children:[(0,ra.jsx)("b",{children:"\ud83d\udcdd Nome completo:"})," Sky Oliveira da Silva",(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"\ud83c\udf08 Nome social:"})," Sky",(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"\ud83c\udf82 Data de nascimento:"})," 12/03/2005",(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"\ud83d\udeba G\xeanero:"})," Feminino",(0,ra.jsx)("br",{}),(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"\ud83c\udd94 CPF / CNPJ:"})," 123.456.789-00",(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"\ud83e\udeaa RG:"})," 12.345.678-9",(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"\ud83d\udcf8 Foto de perfil:"})," sky_foto_perfil.jpg"]})]})}function Gu(){const[t,n]=(0,e.useState)(!1);return(0,ra.jsxs)(Ru,{children:[(0,ra.jsx)(Iu,{onClick:()=>n(!t),children:"Contato"}),(0,ra.jsxs)(Fu,{visivel:t,onClick:e=>e.stopPropagation(),children:[(0,ra.jsx)("b",{children:"\ud83d\udce7 E-mail principal:"})," usuaria@email.com",(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"\ud83d\udce8 E-mail alternativo:"})," usuaria.alternativo@email.com",(0,ra.jsx)("br",{}),(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"\ud83d\udcf1 Telefone celular:"})," (11) 91234-5678",(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"\u260e Telefone fixo:"})," (11) 3456-7890",(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"\ud83d\udcac WhatsApp:"})," (11) 91234-5678"]})]})}function Ju(){const[t,n]=(0,e.useState)(!1);return(0,ra.jsxs)(Ru,{children:[(0,ra.jsx)(Iu,{onClick:()=>n(!t),children:"Endere\xe7o"}),(0,ra.jsxs)(Fu,{visivel:t,onClick:e=>e.stopPropagation(),children:[(0,ra.jsx)("b",{children:"\ud83c\udfe0 Endere\xe7o principal:"})," Rua das Flores, 123",(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"\ud83d\udccd M\xfaltiplos endere\xe7os:"})," Av. Central, 456 \u2013 Sala 7, Rua Secund\xe1ria, 789",(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"\u2b50 Endere\xe7o padr\xe3o:"})," Sim",(0,ra.jsx)("br",{}),(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"\ud83d\udd22 CEP:"})," 01234-567",(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"\ud83c\udfd9 Bairro:"})," Jardim das Rosas",(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"\ud83c\udf06 Cidade:"})," S\xe3o Paulo",(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"\ud83d\uddfa Estado:"})," SP",(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"\ud83c\udf0d Pa\xeds:"})," Brasil"]})]})}function Xu(){const[t,n]=(0,e.useState)(!1),[r,a]=(0,e.useState)(!1);return(0,ra.jsxs)(Ru,{children:[(0,ra.jsx)(Iu,{onClick:()=>n(!t),children:"Seguran\xe7a da Conta"}),(0,ra.jsxs)(Fu,{visivel:t,onClick:e=>e.stopPropagation(),children:[(0,ra.jsx)(Du,{type:"button",onClick:()=>a(!r),children:"\ud83d\udd12 Alterar senha"}),r&&(0,ra.jsxs)(ra.Fragment,{children:[(0,ra.jsx)(Nu,{htmlFor:"senhaAtual",children:"Senha atual"}),(0,ra.jsx)(zu,{type:"password",id:"senhaAtual",name:"senhaAtual"}),(0,ra.jsx)(Nu,{htmlFor:"novaSenha",children:"Nova senha"}),(0,ra.jsx)(zu,{type:"password",id:"novaSenha",name:"novaSenha"}),(0,ra.jsx)(Nu,{htmlFor:"confirmarSenha",children:"Confirmar nova senha"}),(0,ra.jsx)(zu,{type:"password",id:"confirmarSenha",name:"confirmarSenha"}),(0,ra.jsx)(Du,{type:"submit",children:"Salvar nova senha"})]}),(0,ra.jsx)("br",{}),(0,ra.jsx)(Du,{type:"button",children:"\ud83d\udce7 Confirmar e-mail"}),(0,ra.jsx)("br",{}),(0,ra.jsx)(Du,{type:"button",children:"\ud83d\udd10 Ativar autentica\xe7\xe3o em dois fatores"}),(0,ra.jsx)("br",{}),(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"\ud83d\udcc5 Hist\xf3rico de login:"})," ",(0,ra.jsx)("em",{children:"\xfaltimo acesso em 10/04/2025"}),(0,ra.jsx)("br",{}),(0,ra.jsx)("b",{children:"\ud83d\udcbb Dispositivos conectados:"})," ",(0,ra.jsx)("em",{children:"2 dispositivos ativos"})]})]})}function Zu(){const[t,n]=(0,e.useState)(!1);return(0,ra.jsxs)(Ru,{children:[(0,ra.jsx)(Iu,{onClick:()=>n(!t),children:"Excluir Conta"}),(0,ra.jsxs)(Fu,{visivel:t,onClick:e=>e.stopPropagation(),children:[(0,ra.jsxs)("p",{children:["\ud83d\uddd1 Solicita\xe7\xe3o de exclus\xe3o de dados pessoais conforme a ",(0,ra.jsx)("b",{children:"LGPD"}),"."]}),(0,ra.jsx)("br",{}),(0,ra.jsx)(Nu,{htmlFor:"senhaConfirmacao",children:"\ud83d\udd12 Confirme sua senha para continuar:"}),(0,ra.jsx)(zu,{type:"password",id:"senhaConfirmacao",name:"senhaConfirmacao"}),(0,ra.jsx)("br",{}),(0,ra.jsx)(Nu,{htmlFor:"motivoSaida",children:"\ud83d\udcac Por que voc\xea est\xe1 saindo?"}),(0,ra.jsx)(Tu,{id:"motivoSaida",name:"motivoSaida",placeholder:"Deixe seu feedback (opcional)"}),(0,ra.jsx)("br",{}),(0,ra.jsx)(Au,{type:"submit",children:"\ud83d\udea8 Excluir minha conta"})]})]})}function ed(){return(0,ra.jsxs)(Lu,{children:[(0,ra.jsx)(Qu,{}),(0,ra.jsx)(Gu,{}),(0,ra.jsx)(Ju,{}),(0,ra.jsx)(Xu,{}),(0,ra.jsx)(Zu,{})]})}const td=function(){const[t,n]=(0,e.useState)(!1),r=X();return(0,ra.jsxs)(gu,{children:[(0,ra.jsxs)(xu,{children:[(0,ra.jsx)(vu,{children:(0,ra.jsx)(bu,{onClick:e=>{e.preventDefault(),window.location.reload()},src:"/img/new_logo.jpg",alt:"Logo"})}),(0,ra.jsxs)(wu,{children:[(0,ra.jsx)(ju,{onClick:()=>r("/PaginaInicial"),children:"In\xedcio"}),(0,ra.jsx)(ju,{onClick:()=>r("/Carrinho"),children:"Meu Carrinho"}),(0,ra.jsx)(ju,{onClick:()=>r("/Pesquisar"),children:"Pesquisar"}),(0,ra.jsx)(ju,{onClick:()=>r("/Agendamentos"),children:"Agendamentos"}),(0,ra.jsx)(ju,{onClick:()=>r("/Favoritos_perfil"),children:"Favoritos"})]}),(0,ra.jsx)(yu,{type:"text",placeholder:"Busque por item ou loja"}),(0,ra.jsxs)(ku,{children:[(0,ra.jsx)(Su,{children:(0,ra.jsx)(_u,{onClick:()=>r("/MeuPerfil"),children:(0,ra.jsx)(Na,{className:"icone"})})}),(0,ra.jsx)(Cu,{children:(0,ra.jsx)(Pu,{onClick:()=>r("/notificacoes_perfil"),children:(0,ra.jsx)(za,{className:"icone"})})}),(0,ra.jsx)(Eu,{children:(0,ra.jsx)(Ou,{onClick:()=>{r("/")},children:(0,ra.jsx)(Ta,{className:"icone"})})})]})]}),(0,ra.jsx)("main",{children:(0,ra.jsx)(ed,{})}),(0,ra.jsx)(Mu,{children:(0,ra.jsxs)($u,{children:[(0,ra.jsxs)(Uu,{children:[(0,ra.jsx)(Ku,{children:"BeYou"}),(0,ra.jsx)(Bu,{children:"Site Institucional"}),(0,ra.jsx)(Bu,{children:"Fale Conosco"}),(0,ra.jsx)(Bu,{children:"Conta e Seguran\xe7a"}),(0,ra.jsx)(Bu,{children:"Carreiras"}),(0,ra.jsx)(Bu,{children:"Entregadores"})]}),(0,ra.jsxs)(Uu,{children:[(0,ra.jsx)(Ku,{children:"Descubra"}),(0,ra.jsx)(Bu,{children:"Cadastre sua loja"}),(0,ra.jsx)(Bu,{children:"Beyou Shop"}),(0,ra.jsx)(Bu,{children:"BeYou Empresas"}),(0,ra.jsx)(Bu,{children:"Blog BeYou Empresas"})]}),(0,ra.jsxs)(Uu,{children:[(0,ra.jsx)(Ku,{children:"Social"}),(0,ra.jsxs)(Yu,{children:[(0,ra.jsx)(Bu,{children:(0,ra.jsx)(Ka,{})}),(0,ra.jsx)(Bu,{children:(0,ra.jsx)(Ga,{})}),(0,ra.jsx)(Bu,{children:(0,ra.jsx)(Ja,{})}),(0,ra.jsx)(Bu,{children:(0,ra.jsx)(Qa,{})})]})]}),(0,ra.jsxs)(Hu,{children:[(0,ra.jsx)(Vu,{src:"/img/new_logo.jpg",alt:"BeYou Logo"}),(0,ra.jsx)(qu,{children:"\xa9 Copyright 2025 - BeYou. Todos os direitos reservados."}),(0,ra.jsx)("br",{}),(0,ra.jsx)(qu,{children:"CNPJ 00.000.000/0000-00 / Endere\xe7o fict\xedcio - Cidade/Estado - CEP 00000-000"})]}),(0,ra.jsxs)(Wu,{children:[(0,ra.jsx)(Bu,{children:"Termos e Condi\xe7\xf5es de Uso"})," | ",(0,ra.jsx)(Bu,{children:"Codigo de Conduta"})," | ",(0,ra.jsx)(Bu,{children:"Privacidade"})," | ",(0,ra.jsx)(Bu,{children:"Dicas de Seguran\xe7a"})]})]})})]})};function nd(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=nd(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}const rd=function(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=nd(e))&&(r&&(r+=" "),r+=t);return r};var ad=n(922);function od(e){return"string"===typeof e}function id(e,t,n){return n.indexOf(e)===t}function ld(e){return-1===e.indexOf(",")?e:e.split(",")}function sd(e){if(!e)return e;if("C"===e||"posix"===e||"POSIX"===e)return"en-US";if(-1!==e.indexOf(".")){var t=e.split(".")[0];return sd(void 0===t?"":t)}if(-1!==e.indexOf("@")){var n=e.split("@")[0];return sd(void 0===n?"":n)}if(-1===e.indexOf("-")||(r=e).toLowerCase()!==r)return e;var r,a=e.split("-"),o=a[0],i=a[1],l=void 0===i?"":i;return"".concat(o,"-").concat(l.toUpperCase())}var cd=ad((function(e){var t=void 0===e?{}:e,n=t.useFallbackLocale,r=void 0===n||n,a=t.fallbackLocale,o=void 0===a?"en-US":a,i=[];if("undefined"!==typeof navigator){for(var l=[],s=0,c=navigator.languages||[];s<c.length;s++){var u=c[s];l=l.concat(ld(u))}var d=navigator.language,p=d?ld(d):d;i=i.concat(l,p)}return r&&i.push(o),i.filter(od).map(sd).filter(id)}),{cacheKey:JSON.stringify});var ud=ad((function(e){return cd(e)[0]||null}),{cacheKey:JSON.stringify});const dd=ud;function pd(e,t,n){return function(r,a){void 0===a&&(a=n);var o=e(r)+a;return t(o)}}function fd(e){return function(t){return new Date(e(t).getTime()-1)}}function hd(e,t){return function(n){return[e(n),t(n)]}}function md(e){if(e instanceof Date)return e.getFullYear();if("number"===typeof e)return e;var t=parseInt(e,10);if("string"===typeof e&&!isNaN(t))return t;throw new Error("Failed to get year from date: ".concat(e,"."))}function gd(e){if(e instanceof Date)return e.getMonth();throw new Error("Failed to get month from date: ".concat(e,"."))}function xd(e){if(e instanceof Date)return e.getDate();throw new Error("Failed to get year from date: ".concat(e,"."))}function vd(e){var t=md(e),n=t+(1-t)%100,r=new Date;return r.setFullYear(n,0,1),r.setHours(0,0,0,0),r}var bd=pd(md,vd,-100),yd=pd(md,vd,100),wd=fd(yd),jd=pd(md,wd,-100),kd=(pd(md,wd,100),hd(vd,wd));function Sd(e){var t=md(e),n=t+(1-t)%10,r=new Date;return r.setFullYear(n,0,1),r.setHours(0,0,0,0),r}var Cd=pd(md,Sd,-10),Ed=pd(md,Sd,10),_d=fd(Ed),Pd=pd(md,_d,-10),Od=(pd(md,_d,10),hd(Sd,_d));function Nd(e){var t=md(e),n=new Date;return n.setFullYear(t,0,1),n.setHours(0,0,0,0),n}var zd=pd(md,Nd,-1),Td=pd(md,Nd,1),Dd=fd(Td),Ad=pd(md,Dd,-1),Ld=(pd(md,Dd,1),hd(Nd,Dd));function Rd(e,t){return function(n,r){void 0===r&&(r=t);var a=md(n),o=gd(n)+r,i=new Date;return i.setFullYear(a,o,1),i.setHours(0,0,0,0),e(i)}}function Fd(e){var t=md(e),n=gd(e),r=new Date;return r.setFullYear(t,n,1),r.setHours(0,0,0,0),r}var Id=Rd(Fd,-1),Md=Rd(Fd,1),$d=fd(Md),Bd=Rd($d,-1),Ud=(Rd($d,1),hd(Fd,$d));function Yd(e,t){return function(n,r){void 0===r&&(r=t);var a=md(n),o=gd(n),i=xd(n)+r,l=new Date;return l.setFullYear(a,o,i),l.setHours(0,0,0,0),e(l)}}function Wd(e){var t=md(e),n=gd(e),r=xd(e),a=new Date;return a.setFullYear(t,n,r),a.setHours(0,0,0,0),a}Yd(Wd,-1);var Hd=fd(Yd(Wd,1)),qd=(Yd(Hd,-1),Yd(Hd,1),hd(Wd,Hd));function Vd(e){return xd($d(e))}var Kd="gregory",Qd="hebrew",Gd="islamic",Jd="iso8601",Xd={gregory:["en-CA","en-US","es-AR","es-BO","es-CL","es-CO","es-CR","es-DO","es-EC","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PR","es-SV","es-VE","pt-BR"],hebrew:["he","he-IL"],islamic:["ar","ar-AE","ar-BH","ar-DZ","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LY","ar-OM","ar-QA","ar-SA","ar-SD","ar-SY","ar-YE","dv","dv-MV","ps","ps-AR"]},Zd=[0,1,2,3,4,5,6],ep=new Map;function tp(e){return function(t,n){return function(e){return function(t,n){var r=t||dd();ep.has(r)||ep.set(r,new Map);var a=ep.get(r);return a.has(e)||a.set(e,new Intl.DateTimeFormat(r||void 0,e).format),a.get(e)(n)}}(e)(t,function(e){var t=new Date(e);return new Date(t.setHours(12))}(n))}}tp({day:"numeric",month:"numeric",year:"numeric"});var np=tp({day:"numeric"}),rp=tp({day:"numeric",month:"long",year:"numeric"}),ap=tp({month:"long"}),op=tp({month:"long",year:"numeric"}),ip=tp({weekday:"short"}),lp=tp({weekday:"long"}),sp=tp({year:"numeric"}),cp=Zd[0],up=Zd[5],dp=Zd[6];function pp(e,t){void 0===t&&(t=Jd);var n=e.getDay();switch(t){case Jd:return(n+6)%7;case Gd:return(n+1)%7;case Qd:case Kd:return n;default:throw new Error("Unsupported calendar type.")}}function fp(e,t){void 0===t&&(t=Jd);var n=md(e),r=gd(e),a=e.getDate()-pp(e,t);return new Date(n,r,a)}function hp(e,t){switch(e){case"century":return vd(t);case"decade":return Sd(t);case"year":return Nd(t);case"month":return Fd(t);case"day":return Wd(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function mp(e,t){switch(e){case"century":return yd(t);case"decade":return Ed(t);case"year":return Td(t);case"month":return Md(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function gp(e,t){switch(e){case"century":return wd(t);case"decade":return _d(t);case"year":return Dd(t);case"month":return $d(t);case"day":return Hd(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function xp(e,t){switch(e){case"century":return kd(t);case"decade":return Od(t);case"year":return Ld(t);case"month":return Ud(t);case"day":return qd(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function vp(e,t,n){return n.map((function(n){return(t||sp)(e,n)})).join(" \u2013 ")}function bp(e,t,n){return vp(e,t,Od(n))}function yp(e,t){void 0===t&&(t=Jd);var n=e.getDay();switch(t){case Gd:case Qd:return n===up||n===dp;case Jd:case Kd:return n===dp||n===cp;default:throw new Error("Unsupported calendar type.")}}var wp="react-calendar__navigation";function jp(e){var t=e.activeStartDate,n=e.drillUp,r=e.formatMonthYear,a=void 0===r?op:r,o=e.formatYear,i=void 0===o?sp:o,l=e.locale,s=e.maxDate,c=e.minDate,u=e.navigationAriaLabel,d=void 0===u?"":u,p=e.navigationAriaLive,f=e.navigationLabel,h=e.next2AriaLabel,m=void 0===h?"":h,g=e.next2Label,x=void 0===g?"\xbb":g,v=e.nextAriaLabel,b=void 0===v?"":v,y=e.nextLabel,w=void 0===y?"\u203a":y,j=e.prev2AriaLabel,k=void 0===j?"":j,S=e.prev2Label,C=void 0===S?"\xab":S,E=e.prevAriaLabel,_=void 0===E?"":E,P=e.prevLabel,O=void 0===P?"\u2039":P,N=e.setActiveStartDate,z=e.showDoubleView,T=e.view,D=e.views.indexOf(T)>0,A="century"!==T,L=function(e,t){switch(e){case"century":return bd(t);case"decade":return Cd(t);case"year":return zd(t);case"month":return Id(t);default:throw new Error("Invalid rangeType: ".concat(e))}}(T,t),R=A?function(e,t){switch(e){case"decade":return Cd(t,-100);case"year":return zd(t,-10);case"month":return Id(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}(T,t):void 0,F=mp(T,t),I=A?function(e,t){switch(e){case"decade":return Ed(t,100);case"year":return Td(t,10);case"month":return Md(t,12);default:throw new Error("Invalid rangeType: ".concat(e))}}(T,t):void 0,M=function(){if(L.getFullYear()<0)return!0;var e=function(e,t){switch(e){case"century":return jd(t);case"decade":return Pd(t);case"year":return Ad(t);case"month":return Bd(t);default:throw new Error("Invalid rangeType: ".concat(e))}}(T,t);return c&&c>=e}(),$=A&&function(){if(R.getFullYear()<0)return!0;var e=function(e,t){switch(e){case"decade":return Pd(t,-100);case"year":return Ad(t,-10);case"month":return Bd(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}(T,t);return c&&c>=e}(),B=s&&s<F,U=A&&s&&s<I;function Y(e){var t=function(){switch(T){case"century":return function(e,t,n){return vp(e,t,kd(n))}(l,i,e);case"decade":return bp(l,i,e);case"year":return i(l,e);case"month":return a(l,e);default:throw new Error("Invalid view: ".concat(T,"."))}}();return f?f({date:e,label:t,locale:l||ud()||void 0,view:T}):t}return(0,ra.jsxs)("div",{className:wp,children:[null!==C&&A?(0,ra.jsx)("button",{"aria-label":k,className:"".concat(wp,"__arrow ").concat(wp,"__prev2-button"),disabled:$,onClick:function(){N(R,"prev2")},type:"button",children:C}):null,null!==O&&(0,ra.jsx)("button",{"aria-label":_,className:"".concat(wp,"__arrow ").concat(wp,"__prev-button"),disabled:M,onClick:function(){N(L,"prev")},type:"button",children:O}),function(){var e="".concat(wp,"__label");return(0,ra.jsxs)("button",{"aria-label":d,"aria-live":p,className:e,disabled:!D,onClick:n,style:{flexGrow:1},type:"button",children:[(0,ra.jsx)("span",{className:"".concat(e,"__labelText ").concat(e,"__labelText--from"),children:Y(t)}),z?(0,ra.jsxs)(ra.Fragment,{children:[(0,ra.jsx)("span",{className:"".concat(e,"__divider"),children:" \u2013 "}),(0,ra.jsx)("span",{className:"".concat(e,"__labelText ").concat(e,"__labelText--to"),children:Y(F)})]}):null]})}(),null!==w&&(0,ra.jsx)("button",{"aria-label":b,className:"".concat(wp,"__arrow ").concat(wp,"__next-button"),disabled:B,onClick:function(){N(F,"next")},type:"button",children:w}),null!==x&&A?(0,ra.jsx)("button",{"aria-label":m,className:"".concat(wp,"__arrow ").concat(wp,"__next2-button"),disabled:U,onClick:function(){N(I,"next2")},type:"button",children:x}):null]})}var kp=function(){return kp=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},kp.apply(this,arguments)},Sp=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function Cp(e){return"".concat(e,"%")}function Ep(t){var n=t.children,r=t.className,a=t.count,o=t.direction,i=t.offset,l=t.style,s=t.wrap,c=Sp(t,["children","className","count","direction","offset","style","wrap"]);return(0,ra.jsx)("div",kp({className:r,style:kp({display:"flex",flexDirection:o,flexWrap:s?"wrap":"nowrap"},l)},c,{children:e.Children.map(n,(function(t,n){var r=i&&0===n?Cp(100*i/a):null;return(0,e.cloneElement)(t,kp(kp({},t.props),{style:{flexBasis:Cp(100/a),flexShrink:0,flexGrow:0,overflow:"hidden",marginLeft:r,marginInlineStart:r,marginInlineEnd:0}}))}))}))}function _p(e,t){return t[0]<=e&&t[1]>=e}function Pp(e,t){return _p(e[0],t)||_p(e[1],t)}function Op(e,t,n){var r=[];if(Pp(t,e)){r.push(n);var a=_p(e[0],t),o=_p(e[1],t);a&&r.push("".concat(n,"Start")),o&&r.push("".concat(n,"End")),a&&o&&r.push("".concat(n,"BothEnds"))}return r}function Np(e){if(!e)throw new Error("args is required");var t=e.value,n=e.date,r=e.hover,a="react-calendar__tile",o=[a];if(!n)return o;var i=new Date,l=function(){if(Array.isArray(n))return n;var t=e.dateType;if(!t)throw new Error("dateType is required when date is not an array of two dates");return xp(t,n)}();if(_p(i,l)&&o.push("".concat(a,"--now")),!t||!function(e){return Array.isArray(e)?null!==e[0]&&null!==e[1]:null!==e}(t))return o;var s,c,u=function(){if(Array.isArray(t))return t;var n=e.valueType;if(!n)throw new Error("valueType is required when value is not an array of two dates");return xp(n,t)}();c=l,(s=u)[0]<=c[0]&&s[1]>=c[1]?o.push("".concat(a,"--active")):Pp(u,l)&&o.push("".concat(a,"--hasActive"));var d=Op(u,l,"".concat(a,"--range"));o.push.apply(o,d);var p=Array.isArray(t)?t:[t];if(r&&1===p.length){var f=Op(r>u[0]?[u[0],r]:[r,u[0]],l,"".concat(a,"--hover"));o.push.apply(o,f)}return o}function zp(e){for(var t=e.className,n=e.count,r=void 0===n?3:n,a=e.dateTransform,o=e.dateType,i=e.end,l=e.hover,s=e.offset,c=e.renderTile,u=e.start,d=e.step,p=void 0===d?1:d,f=e.value,h=e.valueType,m=[],g=u;g<=i;g+=p){var x=a(g);m.push(c({classes:Np({date:x,dateType:o,hover:l,value:f,valueType:h}),date:x}))}return(0,ra.jsx)(Ep,{className:t,count:r,offset:s,wrap:!0,children:m})}function Tp(t){var n=t.activeStartDate,r=t.children,a=t.classes,o=t.date,i=t.formatAbbr,l=t.locale,s=t.maxDate,c=t.maxDateTransform,u=t.minDate,d=t.minDateTransform,p=t.onClick,f=t.onMouseOver,h=t.style,m=t.tileClassName,g=t.tileContent,x=t.tileDisabled,v=t.view,b=(0,e.useMemo)((function(){return"function"===typeof m?m({activeStartDate:n,date:o,view:v}):m}),[n,o,m,v]),y=(0,e.useMemo)((function(){return"function"===typeof g?g({activeStartDate:n,date:o,view:v}):g}),[n,o,g,v]);return(0,ra.jsxs)("button",{className:rd(a,b),disabled:u&&d(u)>o||s&&c(s)<o||(null===x||void 0===x?void 0:x({activeStartDate:n,date:o,view:v})),onClick:p?function(e){return p(o,e)}:void 0,onFocus:f?function(){return f(o)}:void 0,onMouseOver:f?function(){return f(o)}:void 0,style:h,type:"button",children:[i?(0,ra.jsx)("abbr",{"aria-label":i(l,o),children:r}):r,y]})}var Dp=function(){return Dp=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},Dp.apply(this,arguments)},Ap=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},Lp="react-calendar__century-view__decades__decade";function Rp(e){var t=e.classes,n=void 0===t?[]:t,r=e.currentCentury,a=e.formatYear,o=void 0===a?sp:a,i=Ap(e,["classes","currentCentury","formatYear"]),l=i.date,s=i.locale,c=[];return n&&c.push.apply(c,n),Lp&&c.push(Lp),vd(l).getFullYear()!==r&&c.push("".concat(Lp,"--neighboringCentury")),(0,ra.jsx)(Tp,Dp({},i,{classes:c,maxDateTransform:_d,minDateTransform:Sd,view:"century",children:bp(s,o,l)}))}var Fp=function(){return Fp=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},Fp.apply(this,arguments)},Ip=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function Mp(e){var t=e.activeStartDate,n=e.hover,r=e.showNeighboringCentury,a=e.value,o=e.valueType,i=Ip(e,["activeStartDate","hover","showNeighboringCentury","value","valueType"]),l=md(vd(t)),s=l+(r?119:99);return(0,ra.jsx)(zp,{className:"react-calendar__century-view__decades",dateTransform:Sd,dateType:"decade",end:s,hover:n,renderTile:function(e){var n=e.date,r=Ip(e,["date"]);return(0,ra.jsx)(Rp,Fp({},i,r,{activeStartDate:t,currentCentury:l,date:n}),n.getTime())},start:l,step:10,value:a,valueType:o})}var $p=function(){return $p=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},$p.apply(this,arguments)};function Bp(e){return(0,ra.jsx)("div",{className:"react-calendar__century-view",children:(0,ra.jsx)(Mp,$p({},e))})}var Up=function(){return Up=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},Up.apply(this,arguments)},Yp=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},Wp="react-calendar__decade-view__years__year";function Hp(e){var t=e.classes,n=void 0===t?[]:t,r=e.currentDecade,a=e.formatYear,o=void 0===a?sp:a,i=Yp(e,["classes","currentDecade","formatYear"]),l=i.date,s=i.locale,c=[];return n&&c.push.apply(c,n),Wp&&c.push(Wp),Sd(l).getFullYear()!==r&&c.push("".concat(Wp,"--neighboringDecade")),(0,ra.jsx)(Tp,Up({},i,{classes:c,maxDateTransform:Dd,minDateTransform:Nd,view:"decade",children:o(s,l)}))}var qp=function(){return qp=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},qp.apply(this,arguments)},Vp=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function Kp(e){var t=e.activeStartDate,n=e.hover,r=e.showNeighboringDecade,a=e.value,o=e.valueType,i=Vp(e,["activeStartDate","hover","showNeighboringDecade","value","valueType"]),l=md(Sd(t)),s=l+(r?11:9);return(0,ra.jsx)(zp,{className:"react-calendar__decade-view__years",dateTransform:Nd,dateType:"year",end:s,hover:n,renderTile:function(e){var n=e.date,r=Vp(e,["date"]);return(0,ra.jsx)(Hp,qp({},i,r,{activeStartDate:t,currentDecade:l,date:n}),n.getTime())},start:l,value:a,valueType:o})}var Qp=function(){return Qp=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},Qp.apply(this,arguments)};function Gp(e){return(0,ra.jsx)("div",{className:"react-calendar__decade-view",children:(0,ra.jsx)(Kp,Qp({},e))})}var Jp=function(){return Jp=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},Jp.apply(this,arguments)},Xp=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},Zp=function(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))};function ef(e){var t=e.classes,n=void 0===t?[]:t,r=e.formatMonth,a=void 0===r?ap:r,o=e.formatMonthYear,i=void 0===o?op:o,l=Xp(e,["classes","formatMonth","formatMonthYear"]),s=l.date,c=l.locale;return(0,ra.jsx)(Tp,Jp({},l,{classes:Zp(Zp([],n,!0),["react-calendar__year-view__months__month"],!1),formatAbbr:i,maxDateTransform:$d,minDateTransform:Fd,view:"year",children:a(c,s)}))}var tf=function(){return tf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},tf.apply(this,arguments)},nf=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function rf(e){var t=e.activeStartDate,n=e.hover,r=e.value,a=e.valueType,o=nf(e,["activeStartDate","hover","value","valueType"]),i=md(t);return(0,ra.jsx)(zp,{className:"react-calendar__year-view__months",dateTransform:function(e){var t=new Date;return t.setFullYear(i,e,1),Fd(t)},dateType:"month",end:11,hover:n,renderTile:function(e){var n=e.date,r=nf(e,["date"]);return(0,ra.jsx)(ef,tf({},o,r,{activeStartDate:t,date:n}),n.getTime())},start:0,value:r,valueType:a})}var af=function(){return af=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},af.apply(this,arguments)};function of(e){return(0,ra.jsx)("div",{className:"react-calendar__year-view",children:(0,ra.jsx)(rf,af({},e))})}var lf=function(){return lf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},lf.apply(this,arguments)},sf=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},cf="react-calendar__month-view__days__day";function uf(e){var t=e.calendarType,n=e.classes,r=void 0===n?[]:n,a=e.currentMonthIndex,o=e.formatDay,i=void 0===o?np:o,l=e.formatLongDate,s=void 0===l?rp:l,c=sf(e,["calendarType","classes","currentMonthIndex","formatDay","formatLongDate"]),u=c.date,d=c.locale,p=[];return r&&p.push.apply(p,r),cf&&p.push(cf),yp(u,t)&&p.push("".concat(cf,"--weekend")),u.getMonth()!==a&&p.push("".concat(cf,"--neighboringMonth")),(0,ra.jsx)(Tp,lf({},c,{classes:p,formatAbbr:s,maxDateTransform:Hd,minDateTransform:Wd,view:"month",children:i(d,u)}))}var df=function(){return df=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},df.apply(this,arguments)},pf=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function ff(e){var t=e.activeStartDate,n=e.calendarType,r=e.hover,a=e.showFixedNumberOfWeeks,o=e.showNeighboringMonth,i=e.value,l=e.valueType,s=pf(e,["activeStartDate","calendarType","hover","showFixedNumberOfWeeks","showNeighboringMonth","value","valueType"]),c=md(t),u=gd(t),d=a||o,p=pp(t,n),f=d?0:p,h=1+(d?-p:0),m=function(){if(a)return h+42-1;var e=Vd(t);if(o){var r=new Date;return r.setFullYear(c,u,e),r.setHours(0,0,0,0),e+(7-pp(r,n)-1)}return e}();return(0,ra.jsx)(zp,{className:"react-calendar__month-view__days",count:7,dateTransform:function(e){var t=new Date;return t.setFullYear(c,u,e),Wd(t)},dateType:"day",hover:r,end:m,renderTile:function(e){var r=e.date,a=pf(e,["date"]);return(0,ra.jsx)(uf,df({},s,a,{activeStartDate:t,calendarType:n,currentMonthIndex:u,date:r}),r.getTime())},offset:f,start:h,value:i,valueType:l})}var hf="react-calendar__month-view__weekdays",mf="".concat(hf,"__weekday");function gf(e){for(var t,n=e.calendarType,r=e.formatShortWeekday,a=void 0===r?ip:r,o=e.formatWeekday,i=void 0===o?lp:o,l=e.locale,s=e.onMouseLeave,c=Fd(new Date),u=md(c),d=gd(c),p=[],f=1;f<=7;f+=1){var h=new Date(u,d,f-pp(c,n)),m=i(l,h);p.push((0,ra.jsx)("div",{className:rd(mf,(t=h,t.getDay()===(new Date).getDay()&&"".concat(mf,"--current")),yp(h,n)&&"".concat(mf,"--weekend")),children:(0,ra.jsx)("abbr",{"aria-label":m,title:m,children:a(l,h).replace(".","")})},f))}return(0,ra.jsx)(Ep,{className:hf,count:7,onFocus:s,onMouseOver:s,children:p})}var xf=function(){return xf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},xf.apply(this,arguments)},vf=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},bf="react-calendar__tile";function yf(e){var t=e.onClickWeekNumber,n=e.weekNumber,r=(0,ra.jsx)("span",{children:n});if(t){var a=e.date,o=e.onClickWeekNumber,i=e.weekNumber,l=vf(e,["date","onClickWeekNumber","weekNumber"]);return(0,ra.jsx)("button",xf({},l,{className:bf,onClick:function(e){return o(i,a,e)},type:"button",children:r}))}e.date,e.onClickWeekNumber,e.weekNumber,l=vf(e,["date","onClickWeekNumber","weekNumber"]);return(0,ra.jsx)("div",xf({},l,{className:bf,children:r}))}function wf(e){var t=e.activeStartDate,n=e.calendarType,r=e.onClickWeekNumber,a=e.onMouseLeave,o=e.showFixedNumberOfWeeks,i=function(){if(o)return 6;var e=Vd(t)-(7-pp(t,n));return 1+Math.ceil(e/7)}(),l=function(){for(var e=md(t),r=gd(t),a=xd(t),o=[],l=0;l<i;l+=1)o.push(fp(new Date(e,r,a+7*l),n));return o}(),s=l.map((function(e){return function(e,t){void 0===t&&(t=Jd);var n,r=t===Kd?Kd:Jd,a=fp(e,t),o=md(e)+1;do{n=fp(new Date(o,0,r===Jd?4:1),t),o-=1}while(e<n);return Math.round((a.getTime()-n.getTime())/6048e5)+1}(e,n)}));return(0,ra.jsx)(Ep,{className:"react-calendar__month-view__weekNumbers",count:i,direction:"column",onFocus:a,onMouseOver:a,style:{flexBasis:"calc(100% * (1 / 8)",flexShrink:0},children:s.map((function(e,t){var n=l[t];if(!n)throw new Error("date is not defined");return(0,ra.jsx)(yf,{date:n,onClickWeekNumber:r,weekNumber:e},e)}))})}var jf=function(){return jf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},jf.apply(this,arguments)},kf=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function Sf(e){var t=e.activeStartDate,n=e.locale,r=e.onMouseLeave,a=e.showFixedNumberOfWeeks,o=e.calendarType,i=void 0===o?function(e){if(e)for(var t=0,n=Object.entries(Xd);t<n.length;t++){var r=n[t],a=r[0];if(r[1].includes(e))return a}return Jd}(n):o,l=e.formatShortWeekday,s=e.formatWeekday,c=e.onClickWeekNumber,u=e.showWeekNumbers,d=kf(e,["calendarType","formatShortWeekday","formatWeekday","onClickWeekNumber","showWeekNumbers"]);var p="react-calendar__month-view";return(0,ra.jsx)("div",{className:rd(p,u?"".concat(p,"--weekNumbers"):""),children:(0,ra.jsxs)("div",{style:{display:"flex",alignItems:"flex-end"},children:[u?(0,ra.jsx)(wf,{activeStartDate:t,calendarType:i,onClickWeekNumber:c,onMouseLeave:r,showFixedNumberOfWeeks:a}):null,(0,ra.jsxs)("div",{style:{flexGrow:1,width:"100%"},children:[(0,ra.jsx)(gf,{calendarType:i,formatShortWeekday:l,formatWeekday:s,locale:n,onMouseLeave:r}),(0,ra.jsx)(ff,jf({calendarType:i},d))]})]})})}var Cf=function(){return Cf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},Cf.apply(this,arguments)},Ef="react-calendar",_f=["century","decade","year","month"],Pf=["decade","year","month","day"],Of=new Date;Of.setFullYear(1,0,1),Of.setHours(0,0,0,0);var Nf=new Date(864e13);function zf(e){return e instanceof Date?e:new Date(e)}function Tf(e,t){return _f.slice(_f.indexOf(e),_f.indexOf(t)+1)}function Df(e,t,n){return e&&function(e,t,n){return-1!==Tf(t,n).indexOf(e)}(e,t,n)?e:n}function Af(e){var t=_f.indexOf(e);return Pf[t]}function Lf(e,t){var n=e.value,r=e.minDate,a=e.maxDate,o=e.maxDetail,i=function(e,t){var n=Array.isArray(e)?e[t]:e;if(!n)return null;var r=zf(n);if(Number.isNaN(r.getTime()))throw new Error("Invalid date: ".concat(e));return r}(n,t);if(!i)return null;var l=Af(o);return function(e,t,n){return t&&t>e?t:n&&n<e?n:e}(function(){switch(t){case 0:return hp(l,i);case 1:return gp(l,i);default:throw new Error("Invalid index value: ".concat(t))}}(),r,a)}var Rf=function(e){return Lf(e,0)},Ff=function(e){return Lf(e,1)},If=function(e){return[Rf,Ff].map((function(t){return t(e)}))};function Mf(e){var t=e.maxDate,n=e.maxDetail,r=e.minDate,a=e.minDetail,o=e.value;return hp(Df(e.view,a,n),Rf({value:o,minDate:r,maxDate:t,maxDetail:n})||new Date)}function $f(e){return e&&(!Array.isArray(e)||1===e.length)}function Bf(e,t){return e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime()}var Uf=(0,e.forwardRef)((function(t,n){var r=t.activeStartDate,a=t.allowPartialRange,o=t.calendarType,i=t.className,l=t.defaultActiveStartDate,s=t.defaultValue,c=t.defaultView,u=t.formatDay,d=t.formatLongDate,p=t.formatMonth,f=t.formatMonthYear,h=t.formatShortWeekday,m=t.formatWeekday,g=t.formatYear,x=t.goToRangeStartOnSelect,v=void 0===x||x,b=t.inputRef,y=t.locale,w=t.maxDate,j=void 0===w?Nf:w,k=t.maxDetail,S=void 0===k?"month":k,C=t.minDate,E=void 0===C?Of:C,_=t.minDetail,P=void 0===_?"century":_,O=t.navigationAriaLabel,N=t.navigationAriaLive,z=t.navigationLabel,T=t.next2AriaLabel,D=t.next2Label,A=t.nextAriaLabel,L=t.nextLabel,R=t.onActiveStartDateChange,F=t.onChange,I=t.onClickDay,M=t.onClickDecade,$=t.onClickMonth,B=t.onClickWeekNumber,U=t.onClickYear,Y=t.onDrillDown,W=t.onDrillUp,H=t.onViewChange,q=t.prev2AriaLabel,V=t.prev2Label,K=t.prevAriaLabel,Q=t.prevLabel,G=t.returnValue,J=void 0===G?"start":G,X=t.selectRange,Z=t.showDoubleView,ee=t.showFixedNumberOfWeeks,te=t.showNavigation,ne=void 0===te||te,re=t.showNeighboringCentury,ae=t.showNeighboringDecade,oe=t.showNeighboringMonth,ie=void 0===oe||oe,le=t.showWeekNumbers,se=t.tileClassName,ce=t.tileContent,ue=t.tileDisabled,de=t.value,pe=t.view,fe=(0,e.useState)(l),he=fe[0],me=fe[1],ge=(0,e.useState)(null),xe=ge[0],ve=ge[1],be=(0,e.useState)(Array.isArray(s)?s.map((function(e){return null!==e?zf(e):null})):null!==s&&void 0!==s?zf(s):null),ye=be[0],we=be[1],je=(0,e.useState)(c),ke=je[0],Se=je[1],Ce=r||he||function(e){var t=e.activeStartDate,n=e.defaultActiveStartDate,r=e.defaultValue,a=e.defaultView,o=e.maxDate,i=e.maxDetail,l=e.minDate,s=e.minDetail,c=e.value,u=e.view,d=Df(u,s,i),p=t||n;return p?hp(d,p):Mf({maxDate:o,maxDetail:i,minDate:l,minDetail:s,value:c||r,view:u||a})}({activeStartDate:r,defaultActiveStartDate:l,defaultValue:s,defaultView:c,maxDate:j,maxDetail:S,minDate:E,minDetail:P,value:de,view:pe}),Ee=function(){var e=X&&$f(ye)?ye:void 0!==de?de:ye;return e?Array.isArray(e)?e.map((function(e){return null!==e?zf(e):null})):null!==e?zf(e):null:null}(),_e=Af(S),Pe=Df(pe||ke,P,S),Oe=Tf(P,S),Ne=X?xe:null,ze=Oe.indexOf(Pe)<Oe.length-1,Te=Oe.indexOf(Pe)>0,De=(0,e.useCallback)((function(e){return function(){switch(J){case"start":return Rf;case"end":return Ff;case"range":return If;default:throw new Error("Invalid returnValue.")}}()({maxDate:j,maxDetail:S,minDate:E,value:e})}),[j,S,E,J]),Ae=(0,e.useCallback)((function(e,t){me(e);var n={action:t,activeStartDate:e,value:Ee,view:Pe};R&&!Bf(Ce,e)&&R(n)}),[Ce,R,Ee,Pe]),Le=(0,e.useCallback)((function(e,t){var n=function(){switch(Pe){case"century":return M;case"decade":return U;case"year":return $;case"month":return I;default:throw new Error("Invalid view: ".concat(Pe,"."))}}();n&&n(e,t)}),[I,M,$,U,Pe]),Re=(0,e.useCallback)((function(e,t){if(ze){Le(e,t);var n=Oe[Oe.indexOf(Pe)+1];if(!n)throw new Error("Attempted to drill down from the lowest view.");me(e),Se(n);var r={action:"drillDown",activeStartDate:e,value:Ee,view:n};R&&!Bf(Ce,e)&&R(r),H&&Pe!==n&&H(r),Y&&Y(r)}}),[Ce,ze,R,Le,Y,H,Ee,Pe,Oe]),Fe=(0,e.useCallback)((function(){if(Te){var e=Oe[Oe.indexOf(Pe)-1];if(!e)throw new Error("Attempted to drill up from the highest view.");var t=hp(e,Ce);me(t),Se(e);var n={action:"drillUp",activeStartDate:t,value:Ee,view:e};R&&!Bf(Ce,t)&&R(n),H&&Pe!==e&&H(n),W&&W(n)}}),[Ce,Te,R,W,H,Ee,Pe,Oe]),Ie=(0,e.useCallback)((function(e,t){var n=Ee;Le(e,t);var r,o=X&&!$f(n);if(X)if(o)r=hp(_e,e);else{if(!n)throw new Error("previousValue is required");if(Array.isArray(n))throw new Error("previousValue must not be an array");r=function(e,t,n){var r=[t,n].sort((function(e,t){return e.getTime()-t.getTime()}));return[hp(e,r[0]),gp(e,r[1])]}(_e,n,e)}else r=De(e);var i=!X||o||v?Mf({maxDate:j,maxDetail:S,minDate:E,minDetail:P,value:r,view:Pe}):null;t.persist(),me(i),we(r);var l={action:"onChange",activeStartDate:i,value:r,view:Pe};if(R&&!Bf(Ce,i)&&R(l),F)if(X)if($f(r)){if(a){if(Array.isArray(r))throw new Error("value must not be an array");F([r||null,null],t)}}else F(r||null,t);else F(r||null,t)}),[Ce,a,De,v,j,S,E,P,R,F,Le,X,Ee,_e,Pe]);function Me(e){ve(e)}function $e(){ve(null)}function Be(e){var t={activeStartDate:e?mp(Pe,Ce):hp(Pe,Ce),hover:Ne,locale:y,maxDate:j,minDate:E,onClick:ze?Re:Ie,onMouseOver:X?Me:void 0,tileClassName:se,tileContent:ce,tileDisabled:ue,value:Ee,valueType:_e};switch(Pe){case"century":return(0,ra.jsx)(Bp,Cf({formatYear:g,showNeighboringCentury:re},t));case"decade":return(0,ra.jsx)(Gp,Cf({formatYear:g,showNeighboringDecade:ae},t));case"year":return(0,ra.jsx)(of,Cf({formatMonth:p,formatMonthYear:f},t));case"month":return(0,ra.jsx)(Sf,Cf({calendarType:o,formatDay:u,formatLongDate:d,formatShortWeekday:h,formatWeekday:m,onClickWeekNumber:B,onMouseLeave:X?$e:void 0,showFixedNumberOfWeeks:"undefined"!==typeof ee?ee:Z,showNeighboringMonth:ie,showWeekNumbers:le},t));default:throw new Error("Invalid view: ".concat(Pe,"."))}}(0,e.useImperativeHandle)(n,(function(){return{activeStartDate:Ce,drillDown:Re,drillUp:Fe,onChange:Ie,setActiveStartDate:Ae,value:Ee,view:Pe}}),[Ce,Re,Fe,Ie,Ae,Ee,Pe]);var Ue=Array.isArray(Ee)?Ee:[Ee];return(0,ra.jsxs)("div",{className:rd(Ef,X&&1===Ue.length&&"".concat(Ef,"--selectRange"),Z&&"".concat(Ef,"--doubleView"),i),ref:b,children:[ne?(0,ra.jsx)(jp,{activeStartDate:Ce,drillUp:Fe,formatMonthYear:f,formatYear:g,locale:y,maxDate:j,minDate:E,navigationAriaLabel:O,navigationAriaLive:N,navigationLabel:z,next2AriaLabel:T,next2Label:D,nextAriaLabel:A,nextLabel:L,prev2AriaLabel:q,prev2Label:V,prevAriaLabel:K,prevLabel:Q,setActiveStartDate:Ae,showDoubleView:Z,view:Pe,views:Oe}):null,(0,ra.jsxs)("div",{className:"".concat(Ef,"__viewContainer"),onBlur:X?$e:void 0,onMouseLeave:X?$e:void 0,children:[Be(),Z?Be(!0):null]})]})}));const Yf=Uf,Wf=Kr.div`
    background-color: rgb(255, 228, 230);
`,Hf=Kr.header`
    background-image: url("/img/Textura_Rosa.jpg");
    min-height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    color: #6c4539;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 0.5px solid #6c4539;
`,qf=Kr.div`
    display: flex;
    align-items: center;
`,Vf=Kr.img`
    width: 60px;
    height: auto;
    border-radius: 50%;
    border: 2px solid #6c4539;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`,Kf=Kr.input`
    width: 30%;
    padding: 10px;
    border: 2px solid hsl(300, 99%, 64%);
    border-radius: 20px;
    font-size: 16px;
    color: #6c4539;
    outline: none;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);


    &::placeholder {
        color: #6c4539;
    }
`,Qf=Kr.div`
    overflow: hidden;
`,Gf=Kr.a`
    float: left;
    font-size: 15px;
    color: #6c4539;
    text-align: center;
    text-decoration: none;
    font-weight: bold;
    margin-left: 15px;
    margin-right: 15px;
    &:hover {
        background-color: transparent;
        -webkit-background-clip: text;
        -webkit-text-fill-color: hsl(300, 99%, 64%);
        cursor: pointer;
        transform: scale(1.1);
    }
`,Jf=Kr.div`
    display: flex;
    overflow: hidden;
    justify-content: flex-end;
    gap: 16px;
`,Xf=Kr.div`
    display: flex;
    align-items: center;
`,Zf=Kr.div`
    display: flex;
    align-items: center;
`,eh=Kr.div`
    display: flex;
    align-items: center;
`,th=Kr.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`,nh=Kr.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 50%;
    margin-top: 20px;


    select {
        width: 100%; /* Garantindo que todos os selects ocupem 100% da largura do container */
        padding: 10px;
        border: 2px solid hsl(300, 99%, 64%);  /* Cor semelhante à SearchBar */
        border-radius: 20px;
        font-size: 16px;
        color: #6c4539; /* Cor do texto */
        outline: none;
        background-color: rgba(255, 255, 255, 0.5); /* Fundo transparente */
        backdrop-filter: blur(5px); /* Efeito de desfocagem */
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombrinha suave */
        margin-top: 10px;
        cursor:pointer;
        transition: all 0.3s ease-in-out; /* Adicionando transição suave para hover e clique */


        &::placeholder {
            color: #6c4539; /* Cor do texto do placeholder */
        }


        &:hover {
            border-color: hsl(300, 99%, 50%); /* Cor de borda mais escura no hover */
            background-color: rgb(255, 255, 255); /* Fundo um pouco mais opaco no hover */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); /* Sombrinha mais destacada */
            color: #f45bf4;
            transform: translateY(-5px);
        }


        &:focus {
            border-color:rgb(247, 6, 247); /* Cor de borda ao focar no select */
            background-color: rgba(255, 255, 255, 0.9); /* Fundo mais claro no foco */
            box-shadow: 0 0 10px rgba(244, 91, 244, 0.3); /* Sombrinha com cor de destaque */
        }
    }


    h3 {
        font-size: 18px;
        color: #6c4539; /* Cor marrom para os textos */
    }


    button {
        width: 70%;
        padding: 20px;
        background-color: #f45bf4;
        color: white;
        font-size: 1rem;
        font-family: 'Poppins', sans-serif;
        border: solid 2px #6c4539;
        border-radius: 15px;
        cursor: pointer;
        opacity: 0.8;
        margin-top: 7px;
        margin-bottom: 10px;
        align-self: center;
        transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s; /* Transições para hover e clique */


        &:hover {
            background-color: #e044e0; /* Cor de fundo mais escura ao passar o mouse */
            transform: translateY(-2px); /* Eleva o botão um pouco */
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); /* Sombrinha mais destacada */
        }


        &:active {
            transform: translateY(5px); /* Efeito de clique, movendo o botão para baixo */
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2); /* Sombrinha mais suave ao clicar */
        }
    }
`,rh=Kr.div`
  text-align: center;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 25px;
  width: 400px;
  transition: transform 0.2s ease-in-out;


  &:hover {
    transform: translateY(-4px);
  }
`,ah=Kr.button`
  margin: 5px;
  margin-top: 10px;
  background-color: #f45bf4;
  border: solid 1px #6c4539;
  border-radius: 20px;
  padding: 5px;
  color: white;
  cursor: pointer;


  &:hover {
    background-color: #e044e0;
  }
`,oh=Kr.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    background-color: transparent;
    color: #6c4539;
    text-decoration: none;


    &:hover {
        transform: scale(1.1);
        text-decoration: underline;
        color: hsl(300, 99%, 64%);
    }
`,ih=Kr.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    background-color: transparent;
    color: #6c4539;
    text-decoration: none;


    &:hover {
        transform: scale(1.1);
        text-decoration: underline;
        color: hsl(300, 99%, 64%);
    }
`,lh=Kr.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    background-color: transparent;
    color: #6c4539;
   
    &:hover {
        transform: scale(1.1);
        text-decoration: underline;
        color: hsl(300, 99%, 64%);
    }
`,sh=Kr.h1`
    text-align: left;
    color: #6c4539;
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 20px;
    margin-left: 50px;
    margin-top: 20px;
`,ch=Kr(Yf)`
  width: 100%;
  max-width: 500px;
  background: white;
  border-radius: 16px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;


  .react-calendar__navigation button {
    color: #00796b;
    font-weight: bold;
    min-width: 44px;
    background: none;
    font-size: 1.2rem;
    margin-top: 8px;
  }


  .react-calendar__tile {
    height: 80px;
    border-radius: 50%;
    text-align: center;
    padding: 0.5rem;
    transition: 0.3s all;
  }


  .react-calendar__tile--now {
    background: #e0f7fa;
    color: #00796b;
  }


  .react-calendar__tile--active {
    background: #00796b;
    color: white;
  }


  .highlight {
    background: #ffeb3b;
    color: black;
    font-weight: bold;
  }
`,uh=Kr.h2`
  margin-top: 100px;
`,dh=Kr.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  gap: 60px;
`,ph=Kr.div`
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin: 25px auto;
  width: 400px;
  transition: transform 0.2s ease-in-out;


  &:hover {
    transform: translateY(-4px);
  }
`,fh=Kr.p`
  text-align: center;
  font-size: 1rem;
  color: #333;
  margin: 8px 0;
  padding: 5px;


  strong {
    color: #555;
    font-weight: 600;
  }
`,hh=Kr.div`
  height: 8px;
  width: 8px;
  background-color: #FF5733;
  border-radius: 50%;
  margin: 0 auto;
  margin-top: 2px;
`,mh=Kr.div`
  background-color: #FFC9E9;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 40px 80px;
  border: 3px solid #6c4539;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
`,gh=Kr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;
`,xh=Kr.a`
  font-size: 15px;
  color: #6c4539;
  text-decoration: none;
  font-weight: bold;
  border: 1px #FFC9E9;
  display: inline-block;
  line-height: normal;
  text-align: center;
  margin: 10px 0;
  &:hover {
    background-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: hsl(300, 99%, 64%);
    cursor: pointer;
    transform: scale(1.1);
  }
`,vh=Kr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  min-width: 200px;
`,bh=Kr.div`
  display: flex;
  gap: 15px;
  font-size: 22px;
  width: 20px;
  justify-content: center;
`,yh=Kr.div`
  display: flex;
  gap: 30px;
  cursor: pointer;
  color: #6c4539;
  flex-wrap: wrap;
  margin-top: 20px;
`,wh=Kr.div`
  width: 100%;
  border-top: 1px solid #6c4539;
  text-align: center;
  padding-top: 10px;
  margin-top: 20px;
`,jh=Kr.p`
  font-size: 12px;
  color: #6c4539;
`,kh=Kr.img`
  width: 100px;
  margin-bottom: 20px;
  margin-top: 20px;
`,Sh=Kr.h3`
    text-align: center;
    color: #6c4539;
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 40px;
`;Gr`
  ::-webkit-scrollbar {
    width: 10px;
    max-height: 400px;
    overflow-y: auto;
  }
  ::-webkit-scrollbar-track {
    background: #ffe4ec;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #ff69b4;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #ff1493;
  }
`;const Ch=function(){var t;const n=X(),[r,a]=(0,e.useState)([{loja:"Barbearia Alpha",metodo:"Corte de cabelo",data:"Segunda, 5 de setembro de 2025",rua:"Rua Amaral Peixoto",horario:"13:00",valor:"R$50,00",avaliar:70},{loja:"Unhas de ouro",metodo:"Manicure",data:"Sexta, 9 de outubro de 2025",rua:"Rua Roberto Silveira",horario:"16:00",valor:"R$70,00",avaliar:70}]),[o,i]=(0,e.useState)(new Date),[l,s]=(0,e.useState)(""),[c,u]=(0,e.useState)(""),[d,p]=(0,e.useState)(""),[f,h]=(0,e.useState)({hoje:[]}),[m,g]=(0,e.useState)(null),x={"Corte de Cabelo":["Barbearia Alpha","Studio Look","HairMaster"],Manicure:["Unhas de Ouro","Beauty Nails","Nail Center","Top Unhas"],"Massagem Relaxante":["Spa Vida","Bem-Estar Massagens"]},v=e=>e.toISOString().split("T")[0];return(0,ra.jsxs)(Wf,{children:[(0,ra.jsxs)(Hf,{children:[(0,ra.jsx)(qf,{children:(0,ra.jsx)(Vf,{onClick:e=>{e.preventDefault(),n("/PaginaInicial")},src:"/img/new_logo.jpg",alt:"Logo"})}),(0,ra.jsxs)(Qf,{children:[(0,ra.jsx)(Gf,{onClick:()=>n("/PaginaInicial"),children:"Inicio"}),(0,ra.jsx)(Gf,{onClick:()=>n("/Carrinho"),children:"Meu Carrinho"}),(0,ra.jsx)(Gf,{onClick:()=>n("/Pesquisar"),children:"Pesquisar"}),(0,ra.jsx)(Gf,{onClick:()=>n("/Agendamentos"),children:"Agendamentos"}),(0,ra.jsx)(Gf,{onClick:()=>n("/FAvoritos_perfil"),children:"Favoritos"})]}),(0,ra.jsx)(Kf,{type:"text",placeholder:"Busque por item ou loja"}),(0,ra.jsxs)(Jf,{children:[(0,ra.jsx)(Xf,{children:(0,ra.jsx)(oh,{onClick:()=>n("/MeuPerfil"),children:(0,ra.jsx)(Na,{className:"icone"})})}),(0,ra.jsx)(Zf,{children:(0,ra.jsx)(ih,{onClick:()=>n("/notificacoes_perfil"),children:(0,ra.jsx)(za,{className:"icone"})})}),(0,ra.jsx)(eh,{children:(0,ra.jsx)(lh,{onClick:()=>n("/bemvindo"),children:(0,ra.jsx)(Ta,{className:"icone"})})})]})]}),(0,ra.jsxs)(th,{children:[(0,ra.jsxs)("div",{style:{textAlign:"center"},children:[(0,ra.jsxs)(sh,{children:["Agendar Servi\xe7o para ",o.toLocaleDateString()]}),(0,ra.jsx)(ch,{onChange:i,value:o,tileContent:e=>{let{date:t}=e;const n=v(t);return f.hoje.some((e=>e.data===n))?(0,ra.jsx)(hh,{}):null},tileDisabled:e=>{let{date:t}=e;return(e=>{const t=new Date;return t.setHours(0,0,0,0),e<t})(t)}}),(0,ra.jsxs)(nh,{children:[(0,ra.jsxs)("div",{children:[(0,ra.jsx)("h3",{children:"Selecione o hor\xe1rio desejado"}),(0,ra.jsxs)("select",{value:l,onChange:e=>s(e.target.value),children:[(0,ra.jsx)("option",{value:"",children:"Selecione"}),(()=>{const e=[];for(let t=8;t<20;t++)for(let n=0;n<60;n+=30)e.push(`${t.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`);return e})().map((e=>(0,ra.jsx)("option",{value:e,children:e},e)))]})]}),(0,ra.jsxs)("div",{children:[(0,ra.jsx)("h3",{children:"Selecione o servi\xe7o que precisa"}),(0,ra.jsxs)("select",{value:c,onChange:e=>{u(e.target.value),p("")},children:[(0,ra.jsx)("option",{value:"",children:"Selecione"}),Object.keys(x).map((e=>(0,ra.jsx)("option",{value:e,children:e},e)))]})]}),(0,ra.jsxs)("div",{children:[(0,ra.jsx)("h3",{children:"Escolha sua unidade de atendimento"}),(0,ra.jsxs)("select",{value:d,onChange:e=>p(e.target.value),children:[(0,ra.jsx)("option",{value:"",children:"Selecione"}),c&&(null===(t=x[c])||void 0===t?void 0:t.map((e=>(0,ra.jsx)("option",{value:e,children:e},e))))]})]}),(0,ra.jsx)("h3",{children:m?"Atualizar Agendamento":"Confirme seu agendamento"}),(0,ra.jsx)("button",{onClick:()=>{if(!l||!c||!d)return void alert("Por favor, preencha todos os campos!");const e=v(o);if(f.hoje.some((t=>t.data===e&&t.hora===l)))return void alert("Voc\xea j\xe1 tem um agendamento para este hor\xe1rio! Por favor, escolha outro hor\xe1rio.");const t={id:m||(new Date).getTime(),tipo:"agendamento",icone:"\ud83d\uddd3\ufe0f",img:"/img/user1.jpeg",titulo:"Agendamento Confirmado",text:`Seu hor\xe1rio para ${c} foi agendado na ${d} para ${o.toLocaleDateString()} \xe0s ${l}.`,lida:!1,data:e,hora:l,servico:c,loja:d};h((e=>{let n=e.hoje.filter((e=>e.id!==m));return{...e,hoje:[t,...n]}})),s(""),u(""),p(""),g(null),alert("Agendamento confirmado!")},children:m?"Salvar Altera\xe7\xf5es":"Confirmar Agendamento"})]})]}),(0,ra.jsx)("div",{children:f.hoje.map((e=>(0,ra.jsxs)(rh,{children:[(0,ra.jsxs)("p",{children:[e.icone," ",e.titulo]}),(0,ra.jsx)("p",{children:e.text}),(0,ra.jsx)("p",{children:e.time}),(0,ra.jsxs)("div",{children:[(0,ra.jsx)(ah,{onClick:()=>(e=>{const t=f.hoje.find((t=>t.id===e));t&&(i(new Date(t.data)),s(t.hora),u(t.servico),p(t.loja),g(e))})(e.id),children:"Editar"}),(0,ra.jsx)(ah,{onClick:()=>{return t=e.id,void(window.confirm("Deseja cancelar este agendamento?")&&h((e=>({...e,hoje:e.hoje.filter((e=>e.id!==t))}))));var t},children:"Cancelar"})]})]},e.id)))}),(0,ra.jsx)(uh,{children:"Hist\xf3rico de agendamentos"}),(0,ra.jsx)(dh,{children:r.map(((e,t)=>(0,ra.jsxs)(ph,{children:[(0,ra.jsxs)(fh,{children:[(0,ra.jsx)("strong",{children:"Loja:"})," ",e.loja]}),(0,ra.jsxs)(fh,{children:[(0,ra.jsx)("strong",{children:"Servi\xe7o:"})," ",e.metodo]}),(0,ra.jsxs)(fh,{children:[(0,ra.jsx)("strong",{children:"Data:"})," ",e.data]}),(0,ra.jsxs)(fh,{children:[(0,ra.jsx)("strong",{children:"Hor\xe1rio:"})," ",e.horario]}),(0,ra.jsxs)(fh,{children:[(0,ra.jsx)("strong",{children:"Endere\xe7o:"})," ",e.rua]}),(0,ra.jsxs)(fh,{children:[(0,ra.jsx)("strong",{children:"Valor:"})," ",e.valor]}),(0,ra.jsxs)(fh,{children:[(0,ra.jsx)("strong",{children:"Avalia\xe7\xe3o:"})," ","\u2b50".repeat(Math.round(e.avaliar/20))+"\u2606".repeat(5-Math.round(e.avaliar/20))]})]},t)))})]}),(0,ra.jsx)(mh,{children:(0,ra.jsxs)(gh,{children:[(0,ra.jsxs)(vh,{children:[(0,ra.jsx)(Sh,{children:"BeYou"}),(0,ra.jsx)(xh,{children:"Site Institucional"}),(0,ra.jsx)(xh,{children:"Fale Conosco"}),(0,ra.jsx)(xh,{children:"Conta e Seguran\xe7a"}),(0,ra.jsx)(xh,{children:"Carreiras"}),(0,ra.jsx)(xh,{children:"Entregadores"})]}),(0,ra.jsxs)(vh,{children:[(0,ra.jsx)(Sh,{children:"Descubra"}),(0,ra.jsx)(xh,{children:"Cadastre sua loja"}),(0,ra.jsx)(xh,{children:"Beyou Shop"}),(0,ra.jsx)(xh,{children:"BeYou Empresas"}),(0,ra.jsx)(xh,{children:"Blog BeYou Empresas"})]}),(0,ra.jsxs)(vh,{children:[(0,ra.jsx)(Sh,{children:"Social"}),(0,ra.jsxs)(bh,{children:[(0,ra.jsx)(xh,{children:(0,ra.jsx)(Ka,{})}),(0,ra.jsx)(xh,{children:(0,ra.jsx)(Ga,{})}),(0,ra.jsx)(xh,{children:(0,ra.jsx)(Ja,{})}),(0,ra.jsx)(xh,{children:(0,ra.jsx)(Qa,{})})]})]}),(0,ra.jsxs)(wh,{children:[(0,ra.jsx)(kh,{src:"/img/new_logo.jpg",alt:"BeYou Logo"}),(0,ra.jsx)(jh,{children:"\xa9 Copyright 2025 - BeYou. Todos os direitos reservados."}),(0,ra.jsx)(jh,{children:"CNPJ 00.000.000/0000-00 / Endere\xe7o fict\xedcio - Cidade/Estado - CEP 00000-000"})]}),(0,ra.jsxs)(yh,{children:[(0,ra.jsx)(xh,{children:"Termos e Condi\xe7\xf5es de Uso"})," | ",(0,ra.jsx)(xh,{children:"Codigo de Conduta"})," | ",(0,ra.jsx)(xh,{children:"Privacidade"})," | ",(0,ra.jsx)(xh,{children:"Dicas de Seguran\xe7a"})]})]})})]})};const Eh=function(){const[t,n]=(0,e.useState)(null);return(0,e.useEffect)((()=>{fetch("http://localhost:8000/api/MeuPerfil").then((e=>{if(!e.ok)throw new Error("Erro ao buscar dados");return e.json()})).then((e=>n(e))).catch((e=>console.error(e)))}),[]),t?(0,ra.jsxs)(me,{children:[(0,ra.jsx)(fe,{path:"/Cadastro",element:(0,ra.jsx)(ha,{})}),(0,ra.jsx)(fe,{path:"/login",element:(0,ra.jsx)(El,{})}),(0,ra.jsx)(fe,{path:"/PaginaInicial",element:(0,ra.jsx)(Rc,{})}),(0,ra.jsx)(fe,{path:"/Carrinho",element:(0,ra.jsx)(Yo,{})}),(0,ra.jsx)(fe,{path:"/MeuPerfil",element:(0,ra.jsx)(vs,{perfil:t})}),(0,ra.jsx)(fe,{path:"/Cadastroloja",element:(0,ra.jsx)(Sa,{})}),(0,ra.jsx)(fe,{path:"/loginloja",element:(0,ra.jsx)(Rl,{})}),(0,ra.jsx)(fe,{path:"/notificacoes_perfil",element:(0,ra.jsx)(Zs,{})}),(0,ra.jsx)(fe,{path:"/configuracao_perfil",element:(0,ra.jsx)(Oi,{})}),(0,ra.jsx)(fe,{path:"/FAvoritos_perfil",element:(0,ra.jsx)(xl,{})}),(0,ra.jsx)(fe,{path:"/bemvindo",element:(0,ra.jsx)(aa,{})}),(0,ra.jsx)(fe,{path:"/Pesquisar",element:(0,ra.jsx)(mu,{})}),(0,ra.jsx)(fe,{path:"/dadosperfil",element:(0,ra.jsx)(td,{})}),(0,ra.jsx)(fe,{path:"/Agendamentos",element:(0,ra.jsx)(Ch,{})})]}):(0,ra.jsx)("div",{children:"Carregando..."})},_h=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,453)).then((t=>{let{getCLS:n,getFID:r,getFCP:a,getLCP:o,getTTFB:i}=t;n(e),r(e),a(e),o(e),i(e)}))};t.createRoot(document.getElementById("root")).render((0,ra.jsx)(Qe,{children:(0,ra.jsx)(Eh,{})})),_h()})()})();
//# sourceMappingURL=main.578acb64.js.map