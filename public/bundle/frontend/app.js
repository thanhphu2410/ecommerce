/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

/*!
 * Bootstrap v4.6.0 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function(t, e) {
    "object" == typeof exports && "undefined" != typeof module
        ? e(exports, require("jquery"))
        : "function" == typeof define && define.amd
        ? define(["exports", "jquery"], e)
        : e(
              ((t =
                  "undefined" != typeof globalThis
                      ? globalThis
                      : t || self).bootstrap = {}),
              t.jQuery
          );
})(this, function(t, e) {
    "use strict";
    function n(t) {
        return t && "object" == typeof t && "default" in t ? t : { default: t };
    }
    var i = n(e);
    function o(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i);
        }
    }
    function r(t, e, n) {
        return e && o(t.prototype, e), n && o(t, n), t;
    }
    function a() {
        return (a =
            Object.assign ||
            function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) &&
                            (t[i] = n[i]);
                }
                return t;
            }).apply(this, arguments);
    }
    function s(t) {
        var e = this,
            n = !1;
        return (
            i.default(this).one(l.TRANSITION_END, function() {
                n = !0;
            }),
            setTimeout(function() {
                n || l.triggerTransitionEnd(e);
            }, t),
            this
        );
    }
    var l = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(t) {
            do {
                t += ~~(1e6 * Math.random());
            } while (document.getElementById(t));
            return t;
        },
        getSelectorFromElement: function(t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : "";
            }
            try {
                return document.querySelector(e) ? e : null;
            } catch (t) {
                return null;
            }
        },
        getTransitionDurationFromElement: function(t) {
            if (!t) return 0;
            var e = i.default(t).css("transition-duration"),
                n = i.default(t).css("transition-delay"),
                o = parseFloat(e),
                r = parseFloat(n);
            return o || r
                ? ((e = e.split(",")[0]),
                  (n = n.split(",")[0]),
                  1e3 * (parseFloat(e) + parseFloat(n)))
                : 0;
        },
        reflow: function(t) {
            return t.offsetHeight;
        },
        triggerTransitionEnd: function(t) {
            i.default(t).trigger("transitionend");
        },
        supportsTransitionEnd: function() {
            return Boolean("transitionend");
        },
        isElement: function(t) {
            return (t[0] || t).nodeType;
        },
        typeCheckConfig: function(t, e, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i],
                        r = e[i],
                        a =
                            r && l.isElement(r)
                                ? "element"
                                : null === (s = r) || "undefined" == typeof s
                                ? "" + s
                                : {}.toString
                                      .call(s)
                                      .match(/\s([a-z]+)/i)[1]
                                      .toLowerCase();
                    if (!new RegExp(o).test(a))
                        throw new Error(
                            t.toUpperCase() +
                                ': Option "' +
                                i +
                                '" provided type "' +
                                a +
                                '" but expected type "' +
                                o +
                                '".'
                        );
                }
            var s;
        },
        findShadowRoot: function(t) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
                var e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null;
            }
            return t instanceof ShadowRoot
                ? t
                : t.parentNode
                ? l.findShadowRoot(t.parentNode)
                : null;
        },
        jQueryDetection: function() {
            if ("undefined" == typeof i.default)
                throw new TypeError(
                    "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
                );
            var t = i.default.fn.jquery.split(" ")[0].split(".");
            if (
                (t[0] < 2 && t[1] < 9) ||
                (1 === t[0] && 9 === t[1] && t[2] < 1) ||
                t[0] >= 4
            )
                throw new Error(
                    "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
                );
        }
    };
    l.jQueryDetection(),
        (i.default.fn.emulateTransitionEnd = s),
        (i.default.event.special[l.TRANSITION_END] = {
            bindType: "transitionend",
            delegateType: "transitionend",
            handle: function(t) {
                if (i.default(t.target).is(this))
                    return t.handleObj.handler.apply(this, arguments);
            }
        });
    var u = "alert",
        f = i.default.fn[u],
        d = (function() {
            function t(t) {
                this._element = t;
            }
            var e = t.prototype;
            return (
                (e.close = function(t) {
                    var e = this._element;
                    t && (e = this._getRootElement(t)),
                        this._triggerCloseEvent(e).isDefaultPrevented() ||
                            this._removeElement(e);
                }),
                (e.dispose = function() {
                    i.default.removeData(this._element, "bs.alert"),
                        (this._element = null);
                }),
                (e._getRootElement = function(t) {
                    var e = l.getSelectorFromElement(t),
                        n = !1;
                    return (
                        e && (n = document.querySelector(e)),
                        n || (n = i.default(t).closest(".alert")[0]),
                        n
                    );
                }),
                (e._triggerCloseEvent = function(t) {
                    var e = i.default.Event("close.bs.alert");
                    return i.default(t).trigger(e), e;
                }),
                (e._removeElement = function(t) {
                    var e = this;
                    if (
                        (i.default(t).removeClass("show"),
                        i.default(t).hasClass("fade"))
                    ) {
                        var n = l.getTransitionDurationFromElement(t);
                        i.default(t)
                            .one(l.TRANSITION_END, function(n) {
                                return e._destroyElement(t, n);
                            })
                            .emulateTransitionEnd(n);
                    } else this._destroyElement(t);
                }),
                (e._destroyElement = function(t) {
                    i.default(t)
                        .detach()
                        .trigger("closed.bs.alert")
                        .remove();
                }),
                (t._jQueryInterface = function(e) {
                    return this.each(function() {
                        var n = i.default(this),
                            o = n.data("bs.alert");
                        o || ((o = new t(this)), n.data("bs.alert", o)),
                            "close" === e && o[e](this);
                    });
                }),
                (t._handleDismiss = function(t) {
                    return function(e) {
                        e && e.preventDefault(), t.close(this);
                    };
                }),
                r(t, null, [
                    {
                        key: "VERSION",
                        get: function() {
                            return "4.6.0";
                        }
                    }
                ]),
                t
            );
        })();
    i
        .default(document)
        .on(
            "click.bs.alert.data-api",
            '[data-dismiss="alert"]',
            d._handleDismiss(new d())
        ),
        (i.default.fn[u] = d._jQueryInterface),
        (i.default.fn[u].Constructor = d),
        (i.default.fn[u].noConflict = function() {
            return (i.default.fn[u] = f), d._jQueryInterface;
        });
    var c = i.default.fn.button,
        h = (function() {
            function t(t) {
                (this._element = t), (this.shouldAvoidTriggerChange = !1);
            }
            var e = t.prototype;
            return (
                (e.toggle = function() {
                    var t = !0,
                        e = !0,
                        n = i
                            .default(this._element)
                            .closest('[data-toggle="buttons"]')[0];
                    if (n) {
                        var o = this._element.querySelector(
                            'input:not([type="hidden"])'
                        );
                        if (o) {
                            if ("radio" === o.type)
                                if (
                                    o.checked &&
                                    this._element.classList.contains("active")
                                )
                                    t = !1;
                                else {
                                    var r = n.querySelector(".active");
                                    r && i.default(r).removeClass("active");
                                }
                            t &&
                                (("checkbox" !== o.type &&
                                    "radio" !== o.type) ||
                                    (o.checked = !this._element.classList.contains(
                                        "active"
                                    )),
                                this.shouldAvoidTriggerChange ||
                                    i.default(o).trigger("change")),
                                o.focus(),
                                (e = !1);
                        }
                    }
                    this._element.hasAttribute("disabled") ||
                        this._element.classList.contains("disabled") ||
                        (e &&
                            this._element.setAttribute(
                                "aria-pressed",
                                !this._element.classList.contains("active")
                            ),
                        t && i.default(this._element).toggleClass("active"));
                }),
                (e.dispose = function() {
                    i.default.removeData(this._element, "bs.button"),
                        (this._element = null);
                }),
                (t._jQueryInterface = function(e, n) {
                    return this.each(function() {
                        var o = i.default(this),
                            r = o.data("bs.button");
                        r || ((r = new t(this)), o.data("bs.button", r)),
                            (r.shouldAvoidTriggerChange = n),
                            "toggle" === e && r[e]();
                    });
                }),
                r(t, null, [
                    {
                        key: "VERSION",
                        get: function() {
                            return "4.6.0";
                        }
                    }
                ]),
                t
            );
        })();
    i
        .default(document)
        .on("click.bs.button.data-api", '[data-toggle^="button"]', function(t) {
            var e = t.target,
                n = e;
            if (
                (i.default(e).hasClass("btn") ||
                    (e = i.default(e).closest(".btn")[0]),
                !e ||
                    e.hasAttribute("disabled") ||
                    e.classList.contains("disabled"))
            )
                t.preventDefault();
            else {
                var o = e.querySelector('input:not([type="hidden"])');
                if (
                    o &&
                    (o.hasAttribute("disabled") ||
                        o.classList.contains("disabled"))
                )
                    return void t.preventDefault();
                ("INPUT" !== n.tagName && "LABEL" === e.tagName) ||
                    h._jQueryInterface.call(
                        i.default(e),
                        "toggle",
                        "INPUT" === n.tagName
                    );
            }
        })
        .on(
            "focus.bs.button.data-api blur.bs.button.data-api",
            '[data-toggle^="button"]',
            function(t) {
                var e = i.default(t.target).closest(".btn")[0];
                i.default(e).toggleClass("focus", /^focus(in)?$/.test(t.type));
            }
        ),
        i.default(window).on("load.bs.button.data-api", function() {
            for (
                var t = [].slice.call(
                        document.querySelectorAll(
                            '[data-toggle="buttons"] .btn'
                        )
                    ),
                    e = 0,
                    n = t.length;
                e < n;
                e++
            ) {
                var i = t[e],
                    o = i.querySelector('input:not([type="hidden"])');
                o.checked || o.hasAttribute("checked")
                    ? i.classList.add("active")
                    : i.classList.remove("active");
            }
            for (
                var r = 0,
                    a = (t = [].slice.call(
                        document.querySelectorAll('[data-toggle="button"]')
                    )).length;
                r < a;
                r++
            ) {
                var s = t[r];
                "true" === s.getAttribute("aria-pressed")
                    ? s.classList.add("active")
                    : s.classList.remove("active");
            }
        }),
        (i.default.fn.button = h._jQueryInterface),
        (i.default.fn.button.Constructor = h),
        (i.default.fn.button.noConflict = function() {
            return (i.default.fn.button = c), h._jQueryInterface;
        });
    var p = "carousel",
        m = ".bs.carousel",
        g = i.default.fn[p],
        v = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        _ = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        b = { TOUCH: "touch", PEN: "pen" },
        y = (function() {
            function t(t, e) {
                (this._items = null),
                    (this._interval = null),
                    (this._activeElement = null),
                    (this._isPaused = !1),
                    (this._isSliding = !1),
                    (this.touchTimeout = null),
                    (this.touchStartX = 0),
                    (this.touchDeltaX = 0),
                    (this._config = this._getConfig(e)),
                    (this._element = t),
                    (this._indicatorsElement = this._element.querySelector(
                        ".carousel-indicators"
                    )),
                    (this._touchSupported =
                        "ontouchstart" in document.documentElement ||
                        navigator.maxTouchPoints > 0),
                    (this._pointerEvent = Boolean(
                        window.PointerEvent || window.MSPointerEvent
                    )),
                    this._addEventListeners();
            }
            var e = t.prototype;
            return (
                (e.next = function() {
                    this._isSliding || this._slide("next");
                }),
                (e.nextWhenVisible = function() {
                    var t = i.default(this._element);
                    !document.hidden &&
                        t.is(":visible") &&
                        "hidden" !== t.css("visibility") &&
                        this.next();
                }),
                (e.prev = function() {
                    this._isSliding || this._slide("prev");
                }),
                (e.pause = function(t) {
                    t || (this._isPaused = !0),
                        this._element.querySelector(
                            ".carousel-item-next, .carousel-item-prev"
                        ) &&
                            (l.triggerTransitionEnd(this._element),
                            this.cycle(!0)),
                        clearInterval(this._interval),
                        (this._interval = null);
                }),
                (e.cycle = function(t) {
                    t || (this._isPaused = !1),
                        this._interval &&
                            (clearInterval(this._interval),
                            (this._interval = null)),
                        this._config.interval &&
                            !this._isPaused &&
                            (this._updateInterval(),
                            (this._interval = setInterval(
                                (document.visibilityState
                                    ? this.nextWhenVisible
                                    : this.next
                                ).bind(this),
                                this._config.interval
                            )));
                }),
                (e.to = function(t) {
                    var e = this;
                    this._activeElement = this._element.querySelector(
                        ".active.carousel-item"
                    );
                    var n = this._getItemIndex(this._activeElement);
                    if (!(t > this._items.length - 1 || t < 0))
                        if (this._isSliding)
                            i.default(this._element).one(
                                "slid.bs.carousel",
                                function() {
                                    return e.to(t);
                                }
                            );
                        else {
                            if (n === t) return this.pause(), void this.cycle();
                            var o = t > n ? "next" : "prev";
                            this._slide(o, this._items[t]);
                        }
                }),
                (e.dispose = function() {
                    i.default(this._element).off(m),
                        i.default.removeData(this._element, "bs.carousel"),
                        (this._items = null),
                        (this._config = null),
                        (this._element = null),
                        (this._interval = null),
                        (this._isPaused = null),
                        (this._isSliding = null),
                        (this._activeElement = null),
                        (this._indicatorsElement = null);
                }),
                (e._getConfig = function(t) {
                    return (t = a({}, v, t)), l.typeCheckConfig(p, t, _), t;
                }),
                (e._handleSwipe = function() {
                    var t = Math.abs(this.touchDeltaX);
                    if (!(t <= 40)) {
                        var e = t / this.touchDeltaX;
                        (this.touchDeltaX = 0),
                            e > 0 && this.prev(),
                            e < 0 && this.next();
                    }
                }),
                (e._addEventListeners = function() {
                    var t = this;
                    this._config.keyboard &&
                        i
                            .default(this._element)
                            .on("keydown.bs.carousel", function(e) {
                                return t._keydown(e);
                            }),
                        "hover" === this._config.pause &&
                            i
                                .default(this._element)
                                .on("mouseenter.bs.carousel", function(e) {
                                    return t.pause(e);
                                })
                                .on("mouseleave.bs.carousel", function(e) {
                                    return t.cycle(e);
                                }),
                        this._config.touch && this._addTouchEventListeners();
                }),
                (e._addTouchEventListeners = function() {
                    var t = this;
                    if (this._touchSupported) {
                        var e = function(e) {
                                t._pointerEvent &&
                                b[e.originalEvent.pointerType.toUpperCase()]
                                    ? (t.touchStartX = e.originalEvent.clientX)
                                    : t._pointerEvent ||
                                      (t.touchStartX =
                                          e.originalEvent.touches[0].clientX);
                            },
                            n = function(e) {
                                t._pointerEvent &&
                                    b[
                                        e.originalEvent.pointerType.toUpperCase()
                                    ] &&
                                    (t.touchDeltaX =
                                        e.originalEvent.clientX -
                                        t.touchStartX),
                                    t._handleSwipe(),
                                    "hover" === t._config.pause &&
                                        (t.pause(),
                                        t.touchTimeout &&
                                            clearTimeout(t.touchTimeout),
                                        (t.touchTimeout = setTimeout(function(
                                            e
                                        ) {
                                            return t.cycle(e);
                                        },
                                        500 + t._config.interval)));
                            };
                        i
                            .default(
                                this._element.querySelectorAll(
                                    ".carousel-item img"
                                )
                            )
                            .on("dragstart.bs.carousel", function(t) {
                                return t.preventDefault();
                            }),
                            this._pointerEvent
                                ? (i
                                      .default(this._element)
                                      .on("pointerdown.bs.carousel", function(
                                          t
                                      ) {
                                          return e(t);
                                      }),
                                  i
                                      .default(this._element)
                                      .on("pointerup.bs.carousel", function(t) {
                                          return n(t);
                                      }),
                                  this._element.classList.add("pointer-event"))
                                : (i
                                      .default(this._element)
                                      .on("touchstart.bs.carousel", function(
                                          t
                                      ) {
                                          return e(t);
                                      }),
                                  i
                                      .default(this._element)
                                      .on("touchmove.bs.carousel", function(e) {
                                          return (function(e) {
                                              e.originalEvent.touches &&
                                              e.originalEvent.touches.length > 1
                                                  ? (t.touchDeltaX = 0)
                                                  : (t.touchDeltaX =
                                                        e.originalEvent
                                                            .touches[0]
                                                            .clientX -
                                                        t.touchStartX);
                                          })(e);
                                      }),
                                  i
                                      .default(this._element)
                                      .on("touchend.bs.carousel", function(t) {
                                          return n(t);
                                      }));
                    }
                }),
                (e._keydown = function(t) {
                    if (!/input|textarea/i.test(t.target.tagName))
                        switch (t.which) {
                            case 37:
                                t.preventDefault(), this.prev();
                                break;
                            case 39:
                                t.preventDefault(), this.next();
                        }
                }),
                (e._getItemIndex = function(t) {
                    return (
                        (this._items =
                            t && t.parentNode
                                ? [].slice.call(
                                      t.parentNode.querySelectorAll(
                                          ".carousel-item"
                                      )
                                  )
                                : []),
                        this._items.indexOf(t)
                    );
                }),
                (e._getItemByDirection = function(t, e) {
                    var n = "next" === t,
                        i = "prev" === t,
                        o = this._getItemIndex(e),
                        r = this._items.length - 1;
                    if (
                        ((i && 0 === o) || (n && o === r)) &&
                        !this._config.wrap
                    )
                        return e;
                    var a = (o + ("prev" === t ? -1 : 1)) % this._items.length;
                    return -1 === a
                        ? this._items[this._items.length - 1]
                        : this._items[a];
                }),
                (e._triggerSlideEvent = function(t, e) {
                    var n = this._getItemIndex(t),
                        o = this._getItemIndex(
                            this._element.querySelector(".active.carousel-item")
                        ),
                        r = i.default.Event("slide.bs.carousel", {
                            relatedTarget: t,
                            direction: e,
                            from: o,
                            to: n
                        });
                    return i.default(this._element).trigger(r), r;
                }),
                (e._setActiveIndicatorElement = function(t) {
                    if (this._indicatorsElement) {
                        var e = [].slice.call(
                            this._indicatorsElement.querySelectorAll(".active")
                        );
                        i.default(e).removeClass("active");
                        var n = this._indicatorsElement.children[
                            this._getItemIndex(t)
                        ];
                        n && i.default(n).addClass("active");
                    }
                }),
                (e._updateInterval = function() {
                    var t =
                        this._activeElement ||
                        this._element.querySelector(".active.carousel-item");
                    if (t) {
                        var e = parseInt(t.getAttribute("data-interval"), 10);
                        e
                            ? ((this._config.defaultInterval =
                                  this._config.defaultInterval ||
                                  this._config.interval),
                              (this._config.interval = e))
                            : (this._config.interval =
                                  this._config.defaultInterval ||
                                  this._config.interval);
                    }
                }),
                (e._slide = function(t, e) {
                    var n,
                        o,
                        r,
                        a = this,
                        s = this._element.querySelector(
                            ".active.carousel-item"
                        ),
                        u = this._getItemIndex(s),
                        f = e || (s && this._getItemByDirection(t, s)),
                        d = this._getItemIndex(f),
                        c = Boolean(this._interval);
                    if (
                        ("next" === t
                            ? ((n = "carousel-item-left"),
                              (o = "carousel-item-next"),
                              (r = "left"))
                            : ((n = "carousel-item-right"),
                              (o = "carousel-item-prev"),
                              (r = "right")),
                        f && i.default(f).hasClass("active"))
                    )
                        this._isSliding = !1;
                    else if (
                        !this._triggerSlideEvent(f, r).isDefaultPrevented() &&
                        s &&
                        f
                    ) {
                        (this._isSliding = !0),
                            c && this.pause(),
                            this._setActiveIndicatorElement(f),
                            (this._activeElement = f);
                        var h = i.default.Event("slid.bs.carousel", {
                            relatedTarget: f,
                            direction: r,
                            from: u,
                            to: d
                        });
                        if (i.default(this._element).hasClass("slide")) {
                            i.default(f).addClass(o),
                                l.reflow(f),
                                i.default(s).addClass(n),
                                i.default(f).addClass(n);
                            var p = l.getTransitionDurationFromElement(s);
                            i.default(s)
                                .one(l.TRANSITION_END, function() {
                                    i
                                        .default(f)
                                        .removeClass(n + " " + o)
                                        .addClass("active"),
                                        i
                                            .default(s)
                                            .removeClass(
                                                "active " + o + " " + n
                                            ),
                                        (a._isSliding = !1),
                                        setTimeout(function() {
                                            return i
                                                .default(a._element)
                                                .trigger(h);
                                        }, 0);
                                })
                                .emulateTransitionEnd(p);
                        } else
                            i.default(s).removeClass("active"),
                                i.default(f).addClass("active"),
                                (this._isSliding = !1),
                                i.default(this._element).trigger(h);
                        c && this.cycle();
                    }
                }),
                (t._jQueryInterface = function(e) {
                    return this.each(function() {
                        var n = i.default(this).data("bs.carousel"),
                            o = a({}, v, i.default(this).data());
                        "object" == typeof e && (o = a({}, o, e));
                        var r = "string" == typeof e ? e : o.slide;
                        if (
                            (n ||
                                ((n = new t(this, o)),
                                i.default(this).data("bs.carousel", n)),
                            "number" == typeof e)
                        )
                            n.to(e);
                        else if ("string" == typeof r) {
                            if ("undefined" == typeof n[r])
                                throw new TypeError(
                                    'No method named "' + r + '"'
                                );
                            n[r]();
                        } else o.interval && o.ride && (n.pause(), n.cycle());
                    });
                }),
                (t._dataApiClickHandler = function(e) {
                    var n = l.getSelectorFromElement(this);
                    if (n) {
                        var o = i.default(n)[0];
                        if (o && i.default(o).hasClass("carousel")) {
                            var r = a(
                                    {},
                                    i.default(o).data(),
                                    i.default(this).data()
                                ),
                                s = this.getAttribute("data-slide-to");
                            s && (r.interval = !1),
                                t._jQueryInterface.call(i.default(o), r),
                                s &&
                                    i
                                        .default(o)
                                        .data("bs.carousel")
                                        .to(s),
                                e.preventDefault();
                        }
                    }
                }),
                r(t, null, [
                    {
                        key: "VERSION",
                        get: function() {
                            return "4.6.0";
                        }
                    },
                    {
                        key: "Default",
                        get: function() {
                            return v;
                        }
                    }
                ]),
                t
            );
        })();
    i
        .default(document)
        .on(
            "click.bs.carousel.data-api",
            "[data-slide], [data-slide-to]",
            y._dataApiClickHandler
        ),
        i.default(window).on("load.bs.carousel.data-api", function() {
            for (
                var t = [].slice.call(
                        document.querySelectorAll('[data-ride="carousel"]')
                    ),
                    e = 0,
                    n = t.length;
                e < n;
                e++
            ) {
                var o = i.default(t[e]);
                y._jQueryInterface.call(o, o.data());
            }
        }),
        (i.default.fn[p] = y._jQueryInterface),
        (i.default.fn[p].Constructor = y),
        (i.default.fn[p].noConflict = function() {
            return (i.default.fn[p] = g), y._jQueryInterface;
        });
    var w = "collapse",
        E = i.default.fn[w],
        T = { toggle: !0, parent: "" },
        C = { toggle: "boolean", parent: "(string|element)" },
        S = (function() {
            function t(t, e) {
                (this._isTransitioning = !1),
                    (this._element = t),
                    (this._config = this._getConfig(e)),
                    (this._triggerArray = [].slice.call(
                        document.querySelectorAll(
                            '[data-toggle="collapse"][href="#' +
                                t.id +
                                '"],[data-toggle="collapse"][data-target="#' +
                                t.id +
                                '"]'
                        )
                    ));
                for (
                    var n = [].slice.call(
                            document.querySelectorAll(
                                '[data-toggle="collapse"]'
                            )
                        ),
                        i = 0,
                        o = n.length;
                    i < o;
                    i++
                ) {
                    var r = n[i],
                        a = l.getSelectorFromElement(r),
                        s = [].slice
                            .call(document.querySelectorAll(a))
                            .filter(function(e) {
                                return e === t;
                            });
                    null !== a &&
                        s.length > 0 &&
                        ((this._selector = a), this._triggerArray.push(r));
                }
                (this._parent = this._config.parent ? this._getParent() : null),
                    this._config.parent ||
                        this._addAriaAndCollapsedClass(
                            this._element,
                            this._triggerArray
                        ),
                    this._config.toggle && this.toggle();
            }
            var e = t.prototype;
            return (
                (e.toggle = function() {
                    i.default(this._element).hasClass("show")
                        ? this.hide()
                        : this.show();
                }),
                (e.show = function() {
                    var e,
                        n,
                        o = this;
                    if (
                        !this._isTransitioning &&
                        !i.default(this._element).hasClass("show") &&
                        (this._parent &&
                            0 ===
                                (e = [].slice
                                    .call(
                                        this._parent.querySelectorAll(
                                            ".show, .collapsing"
                                        )
                                    )
                                    .filter(function(t) {
                                        return "string" ==
                                            typeof o._config.parent
                                            ? t.getAttribute("data-parent") ===
                                                  o._config.parent
                                            : t.classList.contains("collapse");
                                    })).length &&
                            (e = null),
                        !(
                            e &&
                            (n = i
                                .default(e)
                                .not(this._selector)
                                .data("bs.collapse")) &&
                            n._isTransitioning
                        ))
                    ) {
                        var r = i.default.Event("show.bs.collapse");
                        if (
                            (i.default(this._element).trigger(r),
                            !r.isDefaultPrevented())
                        ) {
                            e &&
                                (t._jQueryInterface.call(
                                    i.default(e).not(this._selector),
                                    "hide"
                                ),
                                n || i.default(e).data("bs.collapse", null));
                            var a = this._getDimension();
                            i
                                .default(this._element)
                                .removeClass("collapse")
                                .addClass("collapsing"),
                                (this._element.style[a] = 0),
                                this._triggerArray.length &&
                                    i
                                        .default(this._triggerArray)
                                        .removeClass("collapsed")
                                        .attr("aria-expanded", !0),
                                this.setTransitioning(!0);
                            var s =
                                    "scroll" +
                                    (a[0].toUpperCase() + a.slice(1)),
                                u = l.getTransitionDurationFromElement(
                                    this._element
                                );
                            i
                                .default(this._element)
                                .one(l.TRANSITION_END, function() {
                                    i
                                        .default(o._element)
                                        .removeClass("collapsing")
                                        .addClass("collapse show"),
                                        (o._element.style[a] = ""),
                                        o.setTransitioning(!1),
                                        i
                                            .default(o._element)
                                            .trigger("shown.bs.collapse");
                                })
                                .emulateTransitionEnd(u),
                                (this._element.style[a] =
                                    this._element[s] + "px");
                        }
                    }
                }),
                (e.hide = function() {
                    var t = this;
                    if (
                        !this._isTransitioning &&
                        i.default(this._element).hasClass("show")
                    ) {
                        var e = i.default.Event("hide.bs.collapse");
                        if (
                            (i.default(this._element).trigger(e),
                            !e.isDefaultPrevented())
                        ) {
                            var n = this._getDimension();
                            (this._element.style[n] =
                                this._element.getBoundingClientRect()[n] +
                                "px"),
                                l.reflow(this._element),
                                i
                                    .default(this._element)
                                    .addClass("collapsing")
                                    .removeClass("collapse show");
                            var o = this._triggerArray.length;
                            if (o > 0)
                                for (var r = 0; r < o; r++) {
                                    var a = this._triggerArray[r],
                                        s = l.getSelectorFromElement(a);
                                    if (null !== s)
                                        i
                                            .default(
                                                [].slice.call(
                                                    document.querySelectorAll(s)
                                                )
                                            )
                                            .hasClass("show") ||
                                            i
                                                .default(a)
                                                .addClass("collapsed")
                                                .attr("aria-expanded", !1);
                                }
                            this.setTransitioning(!0);
                            this._element.style[n] = "";
                            var u = l.getTransitionDurationFromElement(
                                this._element
                            );
                            i.default(this._element)
                                .one(l.TRANSITION_END, function() {
                                    t.setTransitioning(!1),
                                        i
                                            .default(t._element)
                                            .removeClass("collapsing")
                                            .addClass("collapse")
                                            .trigger("hidden.bs.collapse");
                                })
                                .emulateTransitionEnd(u);
                        }
                    }
                }),
                (e.setTransitioning = function(t) {
                    this._isTransitioning = t;
                }),
                (e.dispose = function() {
                    i.default.removeData(this._element, "bs.collapse"),
                        (this._config = null),
                        (this._parent = null),
                        (this._element = null),
                        (this._triggerArray = null),
                        (this._isTransitioning = null);
                }),
                (e._getConfig = function(t) {
                    return (
                        ((t = a({}, T, t)).toggle = Boolean(t.toggle)),
                        l.typeCheckConfig(w, t, C),
                        t
                    );
                }),
                (e._getDimension = function() {
                    return i.default(this._element).hasClass("width")
                        ? "width"
                        : "height";
                }),
                (e._getParent = function() {
                    var e,
                        n = this;
                    l.isElement(this._config.parent)
                        ? ((e = this._config.parent),
                          "undefined" != typeof this._config.parent.jquery &&
                              (e = this._config.parent[0]))
                        : (e = document.querySelector(this._config.parent));
                    var o =
                            '[data-toggle="collapse"][data-parent="' +
                            this._config.parent +
                            '"]',
                        r = [].slice.call(e.querySelectorAll(o));
                    return (
                        i.default(r).each(function(e, i) {
                            n._addAriaAndCollapsedClass(
                                t._getTargetFromElement(i),
                                [i]
                            );
                        }),
                        e
                    );
                }),
                (e._addAriaAndCollapsedClass = function(t, e) {
                    var n = i.default(t).hasClass("show");
                    e.length &&
                        i
                            .default(e)
                            .toggleClass("collapsed", !n)
                            .attr("aria-expanded", n);
                }),
                (t._getTargetFromElement = function(t) {
                    var e = l.getSelectorFromElement(t);
                    return e ? document.querySelector(e) : null;
                }),
                (t._jQueryInterface = function(e) {
                    return this.each(function() {
                        var n = i.default(this),
                            o = n.data("bs.collapse"),
                            r = a(
                                {},
                                T,
                                n.data(),
                                "object" == typeof e && e ? e : {}
                            );
                        if (
                            (!o &&
                                r.toggle &&
                                "string" == typeof e &&
                                /show|hide/.test(e) &&
                                (r.toggle = !1),
                            o ||
                                ((o = new t(this, r)),
                                n.data("bs.collapse", o)),
                            "string" == typeof e)
                        ) {
                            if ("undefined" == typeof o[e])
                                throw new TypeError(
                                    'No method named "' + e + '"'
                                );
                            o[e]();
                        }
                    });
                }),
                r(t, null, [
                    {
                        key: "VERSION",
                        get: function() {
                            return "4.6.0";
                        }
                    },
                    {
                        key: "Default",
                        get: function() {
                            return T;
                        }
                    }
                ]),
                t
            );
        })();
    i
        .default(document)
        .on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(
            t
        ) {
            "A" === t.currentTarget.tagName && t.preventDefault();
            var e = i.default(this),
                n = l.getSelectorFromElement(this),
                o = [].slice.call(document.querySelectorAll(n));
            i.default(o).each(function() {
                var t = i.default(this),
                    n = t.data("bs.collapse") ? "toggle" : e.data();
                S._jQueryInterface.call(t, n);
            });
        }),
        (i.default.fn[w] = S._jQueryInterface),
        (i.default.fn[w].Constructor = S),
        (i.default.fn[w].noConflict = function() {
            return (i.default.fn[w] = E), S._jQueryInterface;
        });
    var D =
            "undefined" != typeof window &&
            "undefined" != typeof document &&
            "undefined" != typeof navigator,
        N = (function() {
            for (
                var t = ["Edge", "Trident", "Firefox"], e = 0;
                e < t.length;
                e += 1
            )
                if (D && navigator.userAgent.indexOf(t[e]) >= 0) return 1;
            return 0;
        })();
    var k =
        D && window.Promise
            ? function(t) {
                  var e = !1;
                  return function() {
                      e ||
                          ((e = !0),
                          window.Promise.resolve().then(function() {
                              (e = !1), t();
                          }));
                  };
              }
            : function(t) {
                  var e = !1;
                  return function() {
                      e ||
                          ((e = !0),
                          setTimeout(function() {
                              (e = !1), t();
                          }, N));
                  };
              };
    function A(t) {
        return t && "[object Function]" === {}.toString.call(t);
    }
    function I(t, e) {
        if (1 !== t.nodeType) return [];
        var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
        return e ? n[e] : n;
    }
    function O(t) {
        return "HTML" === t.nodeName ? t : t.parentNode || t.host;
    }
    function x(t) {
        if (!t) return document.body;
        switch (t.nodeName) {
            case "HTML":
            case "BODY":
                return t.ownerDocument.body;
            case "#document":
                return t.body;
        }
        var e = I(t),
            n = e.overflow,
            i = e.overflowX,
            o = e.overflowY;
        return /(auto|scroll|overlay)/.test(n + o + i) ? t : x(O(t));
    }
    function j(t) {
        return t && t.referenceNode ? t.referenceNode : t;
    }
    var L = D && !(!window.MSInputMethodContext || !document.documentMode),
        P = D && /MSIE 10/.test(navigator.userAgent);
    function F(t) {
        return 11 === t ? L : 10 === t ? P : L || P;
    }
    function R(t) {
        if (!t) return document.documentElement;
        for (
            var e = F(10) ? document.body : null, n = t.offsetParent || null;
            n === e && t.nextElementSibling;

        )
            n = (t = t.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i
            ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) &&
              "static" === I(n, "position")
                ? R(n)
                : n
            : t
            ? t.ownerDocument.documentElement
            : document.documentElement;
    }
    function H(t) {
        return null !== t.parentNode ? H(t.parentNode) : t;
    }
    function M(t, e) {
        if (!(t && t.nodeType && e && e.nodeType))
            return document.documentElement;
        var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? t : e,
            o = n ? e : t,
            r = document.createRange();
        r.setStart(i, 0), r.setEnd(o, 0);
        var a,
            s,
            l = r.commonAncestorContainer;
        if ((t !== l && e !== l) || i.contains(o))
            return "BODY" === (s = (a = l).nodeName) ||
                ("HTML" !== s && R(a.firstElementChild) !== a)
                ? R(l)
                : l;
        var u = H(t);
        return u.host ? M(u.host, e) : M(t, H(e).host);
    }
    function q(t) {
        var e =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "top",
            n = "top" === e ? "scrollTop" : "scrollLeft",
            i = t.nodeName;
        if ("BODY" === i || "HTML" === i) {
            var o = t.ownerDocument.documentElement,
                r = t.ownerDocument.scrollingElement || o;
            return r[n];
        }
        return t[n];
    }
    function B(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = q(e, "top"),
            o = q(e, "left"),
            r = n ? -1 : 1;
        return (
            (t.top += i * r),
            (t.bottom += i * r),
            (t.left += o * r),
            (t.right += o * r),
            t
        );
    }
    function Q(t, e) {
        var n = "x" === e ? "Left" : "Top",
            i = "Left" === n ? "Right" : "Bottom";
        return (
            parseFloat(t["border" + n + "Width"]) +
            parseFloat(t["border" + i + "Width"])
        );
    }
    function W(t, e, n, i) {
        return Math.max(
            e["offset" + t],
            e["scroll" + t],
            n["client" + t],
            n["offset" + t],
            n["scroll" + t],
            F(10)
                ? parseInt(n["offset" + t]) +
                      parseInt(
                          i["margin" + ("Height" === t ? "Top" : "Left")]
                      ) +
                      parseInt(
                          i["margin" + ("Height" === t ? "Bottom" : "Right")]
                      )
                : 0
        );
    }
    function U(t) {
        var e = t.body,
            n = t.documentElement,
            i = F(10) && getComputedStyle(n);
        return { height: W("Height", e, n, i), width: W("Width", e, n, i) };
    }
    var V = function(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
        },
        Y = (function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(t, i.key, i);
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e;
            };
        })(),
        z = function(t, e, n) {
            return (
                e in t
                    ? Object.defineProperty(t, e, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0
                      })
                    : (t[e] = n),
                t
            );
        },
        X =
            Object.assign ||
            function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) &&
                            (t[i] = n[i]);
                }
                return t;
            };
    function K(t) {
        return X({}, t, { right: t.left + t.width, bottom: t.top + t.height });
    }
    function G(t) {
        var e = {};
        try {
            if (F(10)) {
                e = t.getBoundingClientRect();
                var n = q(t, "top"),
                    i = q(t, "left");
                (e.top += n), (e.left += i), (e.bottom += n), (e.right += i);
            } else e = t.getBoundingClientRect();
        } catch (t) {}
        var o = {
                left: e.left,
                top: e.top,
                width: e.right - e.left,
                height: e.bottom - e.top
            },
            r = "HTML" === t.nodeName ? U(t.ownerDocument) : {},
            a = r.width || t.clientWidth || o.width,
            s = r.height || t.clientHeight || o.height,
            l = t.offsetWidth - a,
            u = t.offsetHeight - s;
        if (l || u) {
            var f = I(t);
            (l -= Q(f, "x")), (u -= Q(f, "y")), (o.width -= l), (o.height -= u);
        }
        return K(o);
    }
    function $(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = F(10),
            o = "HTML" === e.nodeName,
            r = G(t),
            a = G(e),
            s = x(t),
            l = I(e),
            u = parseFloat(l.borderTopWidth),
            f = parseFloat(l.borderLeftWidth);
        n &&
            o &&
            ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
        var d = K({
            top: r.top - a.top - u,
            left: r.left - a.left - f,
            width: r.width,
            height: r.height
        });
        if (((d.marginTop = 0), (d.marginLeft = 0), !i && o)) {
            var c = parseFloat(l.marginTop),
                h = parseFloat(l.marginLeft);
            (d.top -= u - c),
                (d.bottom -= u - c),
                (d.left -= f - h),
                (d.right -= f - h),
                (d.marginTop = c),
                (d.marginLeft = h);
        }
        return (
            (i && !n ? e.contains(s) : e === s && "BODY" !== s.nodeName) &&
                (d = B(d, e)),
            d
        );
    }
    function J(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = t.ownerDocument.documentElement,
            i = $(t, n),
            o = Math.max(n.clientWidth, window.innerWidth || 0),
            r = Math.max(n.clientHeight, window.innerHeight || 0),
            a = e ? 0 : q(n),
            s = e ? 0 : q(n, "left"),
            l = {
                top: a - i.top + i.marginTop,
                left: s - i.left + i.marginLeft,
                width: o,
                height: r
            };
        return K(l);
    }
    function Z(t) {
        var e = t.nodeName;
        if ("BODY" === e || "HTML" === e) return !1;
        if ("fixed" === I(t, "position")) return !0;
        var n = O(t);
        return !!n && Z(n);
    }
    function tt(t) {
        if (!t || !t.parentElement || F()) return document.documentElement;
        for (var e = t.parentElement; e && "none" === I(e, "transform"); )
            e = e.parentElement;
        return e || document.documentElement;
    }
    function et(t, e, n, i) {
        var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            r = { top: 0, left: 0 },
            a = o ? tt(t) : M(t, j(e));
        if ("viewport" === i) r = J(a, o);
        else {
            var s = void 0;
            "scrollParent" === i
                ? "BODY" === (s = x(O(e))).nodeName &&
                  (s = t.ownerDocument.documentElement)
                : (s = "window" === i ? t.ownerDocument.documentElement : i);
            var l = $(s, a, o);
            if ("HTML" !== s.nodeName || Z(a)) r = l;
            else {
                var u = U(t.ownerDocument),
                    f = u.height,
                    d = u.width;
                (r.top += l.top - l.marginTop),
                    (r.bottom = f + l.top),
                    (r.left += l.left - l.marginLeft),
                    (r.right = d + l.left);
            }
        }
        var c = "number" == typeof (n = n || 0);
        return (
            (r.left += c ? n : n.left || 0),
            (r.top += c ? n : n.top || 0),
            (r.right -= c ? n : n.right || 0),
            (r.bottom -= c ? n : n.bottom || 0),
            r
        );
    }
    function nt(t) {
        return t.width * t.height;
    }
    function it(t, e, n, i, o) {
        var r =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf("auto")) return t;
        var a = et(n, i, r, o),
            s = {
                top: { width: a.width, height: e.top - a.top },
                right: { width: a.right - e.right, height: a.height },
                bottom: { width: a.width, height: a.bottom - e.bottom },
                left: { width: e.left - a.left, height: a.height }
            },
            l = Object.keys(s)
                .map(function(t) {
                    return X({ key: t }, s[t], { area: nt(s[t]) });
                })
                .sort(function(t, e) {
                    return e.area - t.area;
                }),
            u = l.filter(function(t) {
                var e = t.width,
                    i = t.height;
                return e >= n.clientWidth && i >= n.clientHeight;
            }),
            f = u.length > 0 ? u[0].key : l[0].key,
            d = t.split("-")[1];
        return f + (d ? "-" + d : "");
    }
    function ot(t, e, n) {
        var i =
                arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : null,
            o = i ? tt(e) : M(e, j(n));
        return $(n, o, i);
    }
    function rt(t) {
        var e = t.ownerDocument.defaultView.getComputedStyle(t),
            n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
            i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
        return { width: t.offsetWidth + i, height: t.offsetHeight + n };
    }
    function at(t) {
        var e = { left: "right", right: "left", bottom: "top", top: "bottom" };
        return t.replace(/left|right|bottom|top/g, function(t) {
            return e[t];
        });
    }
    function st(t, e, n) {
        n = n.split("-")[0];
        var i = rt(t),
            o = { width: i.width, height: i.height },
            r = -1 !== ["right", "left"].indexOf(n),
            a = r ? "top" : "left",
            s = r ? "left" : "top",
            l = r ? "height" : "width",
            u = r ? "width" : "height";
        return (
            (o[a] = e[a] + e[l] / 2 - i[l] / 2),
            (o[s] = n === s ? e[s] - i[u] : e[at(s)]),
            o
        );
    }
    function lt(t, e) {
        return Array.prototype.find ? t.find(e) : t.filter(e)[0];
    }
    function ut(t, e, n) {
        return (
            (void 0 === n
                ? t
                : t.slice(
                      0,
                      (function(t, e, n) {
                          if (Array.prototype.findIndex)
                              return t.findIndex(function(t) {
                                  return t[e] === n;
                              });
                          var i = lt(t, function(t) {
                              return t[e] === n;
                          });
                          return t.indexOf(i);
                      })(t, "name", n)
                  )
            ).forEach(function(t) {
                t.function &&
                    console.warn(
                        "`modifier.function` is deprecated, use `modifier.fn`!"
                    );
                var n = t.function || t.fn;
                t.enabled &&
                    A(n) &&
                    ((e.offsets.popper = K(e.offsets.popper)),
                    (e.offsets.reference = K(e.offsets.reference)),
                    (e = n(e, t)));
            }),
            e
        );
    }
    function ft() {
        if (!this.state.isDestroyed) {
            var t = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            (t.offsets.reference = ot(
                this.state,
                this.popper,
                this.reference,
                this.options.positionFixed
            )),
                (t.placement = it(
                    this.options.placement,
                    t.offsets.reference,
                    this.popper,
                    this.reference,
                    this.options.modifiers.flip.boundariesElement,
                    this.options.modifiers.flip.padding
                )),
                (t.originalPlacement = t.placement),
                (t.positionFixed = this.options.positionFixed),
                (t.offsets.popper = st(
                    this.popper,
                    t.offsets.reference,
                    t.placement
                )),
                (t.offsets.popper.position = this.options.positionFixed
                    ? "fixed"
                    : "absolute"),
                (t = ut(this.modifiers, t)),
                this.state.isCreated
                    ? this.options.onUpdate(t)
                    : ((this.state.isCreated = !0), this.options.onCreate(t));
        }
    }
    function dt(t, e) {
        return t.some(function(t) {
            var n = t.name;
            return t.enabled && n === e;
        });
    }
    function ct(t) {
        for (
            var e = [!1, "ms", "Webkit", "Moz", "O"],
                n = t.charAt(0).toUpperCase() + t.slice(1),
                i = 0;
            i < e.length;
            i++
        ) {
            var o = e[i],
                r = o ? "" + o + n : t;
            if ("undefined" != typeof document.body.style[r]) return r;
        }
        return null;
    }
    function ht() {
        return (
            (this.state.isDestroyed = !0),
            dt(this.modifiers, "applyStyle") &&
                (this.popper.removeAttribute("x-placement"),
                (this.popper.style.position = ""),
                (this.popper.style.top = ""),
                (this.popper.style.left = ""),
                (this.popper.style.right = ""),
                (this.popper.style.bottom = ""),
                (this.popper.style.willChange = ""),
                (this.popper.style[ct("transform")] = "")),
            this.disableEventListeners(),
            this.options.removeOnDestroy &&
                this.popper.parentNode.removeChild(this.popper),
            this
        );
    }
    function pt(t) {
        var e = t.ownerDocument;
        return e ? e.defaultView : window;
    }
    function mt(t, e, n, i) {
        (n.updateBound = i),
            pt(t).addEventListener("resize", n.updateBound, { passive: !0 });
        var o = x(t);
        return (
            (function t(e, n, i, o) {
                var r = "BODY" === e.nodeName,
                    a = r ? e.ownerDocument.defaultView : e;
                a.addEventListener(n, i, { passive: !0 }),
                    r || t(x(a.parentNode), n, i, o),
                    o.push(a);
            })(o, "scroll", n.updateBound, n.scrollParents),
            (n.scrollElement = o),
            (n.eventsEnabled = !0),
            n
        );
    }
    function gt() {
        this.state.eventsEnabled ||
            (this.state = mt(
                this.reference,
                this.options,
                this.state,
                this.scheduleUpdate
            ));
    }
    function vt() {
        var t, e;
        this.state.eventsEnabled &&
            (cancelAnimationFrame(this.scheduleUpdate),
            (this.state =
                ((t = this.reference),
                (e = this.state),
                pt(t).removeEventListener("resize", e.updateBound),
                e.scrollParents.forEach(function(t) {
                    t.removeEventListener("scroll", e.updateBound);
                }),
                (e.updateBound = null),
                (e.scrollParents = []),
                (e.scrollElement = null),
                (e.eventsEnabled = !1),
                e)));
    }
    function _t(t) {
        return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
    }
    function bt(t, e) {
        Object.keys(e).forEach(function(n) {
            var i = "";
            -1 !==
                ["width", "height", "top", "right", "bottom", "left"].indexOf(
                    n
                ) &&
                _t(e[n]) &&
                (i = "px"),
                (t.style[n] = e[n] + i);
        });
    }
    var yt = D && /Firefox/i.test(navigator.userAgent);
    function wt(t, e, n) {
        var i = lt(t, function(t) {
                return t.name === e;
            }),
            o =
                !!i &&
                t.some(function(t) {
                    return t.name === n && t.enabled && t.order < i.order;
                });
        if (!o) {
            var r = "`" + e + "`",
                a = "`" + n + "`";
            console.warn(
                a +
                    " modifier is required by " +
                    r +
                    " modifier in order to work, be sure to include it before " +
                    r +
                    "!"
            );
        }
        return o;
    }
    var Et = [
            "auto-start",
            "auto",
            "auto-end",
            "top-start",
            "top",
            "top-end",
            "right-start",
            "right",
            "right-end",
            "bottom-end",
            "bottom",
            "bottom-start",
            "left-end",
            "left",
            "left-start"
        ],
        Tt = Et.slice(3);
    function Ct(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = Tt.indexOf(t),
            i = Tt.slice(n + 1).concat(Tt.slice(0, n));
        return e ? i.reverse() : i;
    }
    var St = "flip",
        Dt = "clockwise",
        Nt = "counterclockwise";
    function kt(t, e, n, i) {
        var o = [0, 0],
            r = -1 !== ["right", "left"].indexOf(i),
            a = t.split(/(\+|\-)/).map(function(t) {
                return t.trim();
            }),
            s = a.indexOf(
                lt(a, function(t) {
                    return -1 !== t.search(/,|\s/);
                })
            );
        a[s] &&
            -1 === a[s].indexOf(",") &&
            console.warn(
                "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
            );
        var l = /\s*,\s*|\s+/,
            u =
                -1 !== s
                    ? [
                          a.slice(0, s).concat([a[s].split(l)[0]]),
                          [a[s].split(l)[1]].concat(a.slice(s + 1))
                      ]
                    : [a];
        return (
            (u = u.map(function(t, i) {
                var o = (1 === i ? !r : r) ? "height" : "width",
                    a = !1;
                return t
                    .reduce(function(t, e) {
                        return "" === t[t.length - 1] &&
                            -1 !== ["+", "-"].indexOf(e)
                            ? ((t[t.length - 1] = e), (a = !0), t)
                            : a
                            ? ((t[t.length - 1] += e), (a = !1), t)
                            : t.concat(e);
                    }, [])
                    .map(function(t) {
                        return (function(t, e, n, i) {
                            var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                r = +o[1],
                                a = o[2];
                            if (!r) return t;
                            if (0 === a.indexOf("%")) {
                                var s = void 0;
                                switch (a) {
                                    case "%p":
                                        s = n;
                                        break;
                                    case "%":
                                    case "%r":
                                    default:
                                        s = i;
                                }
                                return (K(s)[e] / 100) * r;
                            }
                            if ("vh" === a || "vw" === a)
                                return (
                                    (("vh" === a
                                        ? Math.max(
                                              document.documentElement
                                                  .clientHeight,
                                              window.innerHeight || 0
                                          )
                                        : Math.max(
                                              document.documentElement
                                                  .clientWidth,
                                              window.innerWidth || 0
                                          )) /
                                        100) *
                                    r
                                );
                            return r;
                        })(t, o, e, n);
                    });
            })).forEach(function(t, e) {
                t.forEach(function(n, i) {
                    _t(n) && (o[e] += n * ("-" === t[i - 1] ? -1 : 1));
                });
            }),
            o
        );
    }
    var At = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function(t) {
                        var e = t.placement,
                            n = e.split("-")[0],
                            i = e.split("-")[1];
                        if (i) {
                            var o = t.offsets,
                                r = o.reference,
                                a = o.popper,
                                s = -1 !== ["bottom", "top"].indexOf(n),
                                l = s ? "left" : "top",
                                u = s ? "width" : "height",
                                f = {
                                    start: z({}, l, r[l]),
                                    end: z({}, l, r[l] + r[u] - a[u])
                                };
                            t.offsets.popper = X({}, a, f[i]);
                        }
                        return t;
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function(t, e) {
                        var n = e.offset,
                            i = t.placement,
                            o = t.offsets,
                            r = o.popper,
                            a = o.reference,
                            s = i.split("-")[0],
                            l = void 0;
                        return (
                            (l = _t(+n) ? [+n, 0] : kt(n, r, a, s)),
                            "left" === s
                                ? ((r.top += l[0]), (r.left -= l[1]))
                                : "right" === s
                                ? ((r.top += l[0]), (r.left += l[1]))
                                : "top" === s
                                ? ((r.left += l[0]), (r.top -= l[1]))
                                : "bottom" === s &&
                                  ((r.left += l[0]), (r.top += l[1])),
                            (t.popper = r),
                            t
                        );
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function(t, e) {
                        var n = e.boundariesElement || R(t.instance.popper);
                        t.instance.reference === n && (n = R(n));
                        var i = ct("transform"),
                            o = t.instance.popper.style,
                            r = o.top,
                            a = o.left,
                            s = o[i];
                        (o.top = ""), (o.left = ""), (o[i] = "");
                        var l = et(
                            t.instance.popper,
                            t.instance.reference,
                            e.padding,
                            n,
                            t.positionFixed
                        );
                        (o.top = r),
                            (o.left = a),
                            (o[i] = s),
                            (e.boundaries = l);
                        var u = e.priority,
                            f = t.offsets.popper,
                            d = {
                                primary: function(t) {
                                    var n = f[t];
                                    return (
                                        f[t] < l[t] &&
                                            !e.escapeWithReference &&
                                            (n = Math.max(f[t], l[t])),
                                        z({}, t, n)
                                    );
                                },
                                secondary: function(t) {
                                    var n = "right" === t ? "left" : "top",
                                        i = f[n];
                                    return (
                                        f[t] > l[t] &&
                                            !e.escapeWithReference &&
                                            (i = Math.min(
                                                f[n],
                                                l[t] -
                                                    ("right" === t
                                                        ? f.width
                                                        : f.height)
                                            )),
                                        z({}, n, i)
                                    );
                                }
                            };
                        return (
                            u.forEach(function(t) {
                                var e =
                                    -1 !== ["left", "top"].indexOf(t)
                                        ? "primary"
                                        : "secondary";
                                f = X({}, f, d[e](t));
                            }),
                            (t.offsets.popper = f),
                            t
                        );
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function(t) {
                        var e = t.offsets,
                            n = e.popper,
                            i = e.reference,
                            o = t.placement.split("-")[0],
                            r = Math.floor,
                            a = -1 !== ["top", "bottom"].indexOf(o),
                            s = a ? "right" : "bottom",
                            l = a ? "left" : "top",
                            u = a ? "width" : "height";
                        return (
                            n[s] < r(i[l]) &&
                                (t.offsets.popper[l] = r(i[l]) - n[u]),
                            n[l] > r(i[s]) && (t.offsets.popper[l] = r(i[s])),
                            t
                        );
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(t, e) {
                        var n;
                        if (!wt(t.instance.modifiers, "arrow", "keepTogether"))
                            return t;
                        var i = e.element;
                        if ("string" == typeof i) {
                            if (!(i = t.instance.popper.querySelector(i)))
                                return t;
                        } else if (!t.instance.popper.contains(i))
                            return (
                                console.warn(
                                    "WARNING: `arrow.element` must be child of its popper element!"
                                ),
                                t
                            );
                        var o = t.placement.split("-")[0],
                            r = t.offsets,
                            a = r.popper,
                            s = r.reference,
                            l = -1 !== ["left", "right"].indexOf(o),
                            u = l ? "height" : "width",
                            f = l ? "Top" : "Left",
                            d = f.toLowerCase(),
                            c = l ? "left" : "top",
                            h = l ? "bottom" : "right",
                            p = rt(i)[u];
                        s[h] - p < a[d] &&
                            (t.offsets.popper[d] -= a[d] - (s[h] - p)),
                            s[d] + p > a[h] &&
                                (t.offsets.popper[d] += s[d] + p - a[h]),
                            (t.offsets.popper = K(t.offsets.popper));
                        var m = s[d] + s[u] / 2 - p / 2,
                            g = I(t.instance.popper),
                            v = parseFloat(g["margin" + f]),
                            _ = parseFloat(g["border" + f + "Width"]),
                            b = m - t.offsets.popper[d] - v - _;
                        return (
                            (b = Math.max(Math.min(a[u] - p, b), 0)),
                            (t.arrowElement = i),
                            (t.offsets.arrow =
                                (z((n = {}), d, Math.round(b)),
                                z(n, c, ""),
                                n)),
                            t
                        );
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function(t, e) {
                        if (dt(t.instance.modifiers, "inner")) return t;
                        if (t.flipped && t.placement === t.originalPlacement)
                            return t;
                        var n = et(
                                t.instance.popper,
                                t.instance.reference,
                                e.padding,
                                e.boundariesElement,
                                t.positionFixed
                            ),
                            i = t.placement.split("-")[0],
                            o = at(i),
                            r = t.placement.split("-")[1] || "",
                            a = [];
                        switch (e.behavior) {
                            case St:
                                a = [i, o];
                                break;
                            case Dt:
                                a = Ct(i);
                                break;
                            case Nt:
                                a = Ct(i, !0);
                                break;
                            default:
                                a = e.behavior;
                        }
                        return (
                            a.forEach(function(s, l) {
                                if (i !== s || a.length === l + 1) return t;
                                (i = t.placement.split("-")[0]), (o = at(i));
                                var u = t.offsets.popper,
                                    f = t.offsets.reference,
                                    d = Math.floor,
                                    c =
                                        ("left" === i &&
                                            d(u.right) > d(f.left)) ||
                                        ("right" === i &&
                                            d(u.left) < d(f.right)) ||
                                        ("top" === i &&
                                            d(u.bottom) > d(f.top)) ||
                                        ("bottom" === i &&
                                            d(u.top) < d(f.bottom)),
                                    h = d(u.left) < d(n.left),
                                    p = d(u.right) > d(n.right),
                                    m = d(u.top) < d(n.top),
                                    g = d(u.bottom) > d(n.bottom),
                                    v =
                                        ("left" === i && h) ||
                                        ("right" === i && p) ||
                                        ("top" === i && m) ||
                                        ("bottom" === i && g),
                                    _ = -1 !== ["top", "bottom"].indexOf(i),
                                    b =
                                        !!e.flipVariations &&
                                        ((_ && "start" === r && h) ||
                                            (_ && "end" === r && p) ||
                                            (!_ && "start" === r && m) ||
                                            (!_ && "end" === r && g)),
                                    y =
                                        !!e.flipVariationsByContent &&
                                        ((_ && "start" === r && p) ||
                                            (_ && "end" === r && h) ||
                                            (!_ && "start" === r && g) ||
                                            (!_ && "end" === r && m)),
                                    w = b || y;
                                (c || v || w) &&
                                    ((t.flipped = !0),
                                    (c || v) && (i = a[l + 1]),
                                    w &&
                                        (r = (function(t) {
                                            return "end" === t
                                                ? "start"
                                                : "start" === t
                                                ? "end"
                                                : t;
                                        })(r)),
                                    (t.placement = i + (r ? "-" + r : "")),
                                    (t.offsets.popper = X(
                                        {},
                                        t.offsets.popper,
                                        st(
                                            t.instance.popper,
                                            t.offsets.reference,
                                            t.placement
                                        )
                                    )),
                                    (t = ut(t.instance.modifiers, t, "flip")));
                            }),
                            t
                        );
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport",
                    flipVariations: !1,
                    flipVariationsByContent: !1
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function(t) {
                        var e = t.placement,
                            n = e.split("-")[0],
                            i = t.offsets,
                            o = i.popper,
                            r = i.reference,
                            a = -1 !== ["left", "right"].indexOf(n),
                            s = -1 === ["top", "left"].indexOf(n);
                        return (
                            (o[a ? "left" : "top"] =
                                r[n] - (s ? o[a ? "width" : "height"] : 0)),
                            (t.placement = at(e)),
                            (t.offsets.popper = K(o)),
                            t
                        );
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(t) {
                        if (
                            !wt(t.instance.modifiers, "hide", "preventOverflow")
                        )
                            return t;
                        var e = t.offsets.reference,
                            n = lt(t.instance.modifiers, function(t) {
                                return "preventOverflow" === t.name;
                            }).boundaries;
                        if (
                            e.bottom < n.top ||
                            e.left > n.right ||
                            e.top > n.bottom ||
                            e.right < n.left
                        ) {
                            if (!0 === t.hide) return t;
                            (t.hide = !0),
                                (t.attributes["x-out-of-boundaries"] = "");
                        } else {
                            if (!1 === t.hide) return t;
                            (t.hide = !1),
                                (t.attributes["x-out-of-boundaries"] = !1);
                        }
                        return t;
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function(t, e) {
                        var n = e.x,
                            i = e.y,
                            o = t.offsets.popper,
                            r = lt(t.instance.modifiers, function(t) {
                                return "applyStyle" === t.name;
                            }).gpuAcceleration;
                        void 0 !== r &&
                            console.warn(
                                "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
                            );
                        var a = void 0 !== r ? r : e.gpuAcceleration,
                            s = R(t.instance.popper),
                            l = G(s),
                            u = { position: o.position },
                            f = (function(t, e) {
                                var n = t.offsets,
                                    i = n.popper,
                                    o = n.reference,
                                    r = Math.round,
                                    a = Math.floor,
                                    s = function(t) {
                                        return t;
                                    },
                                    l = r(o.width),
                                    u = r(i.width),
                                    f =
                                        -1 !==
                                        ["left", "right"].indexOf(t.placement),
                                    d = -1 !== t.placement.indexOf("-"),
                                    c = e
                                        ? f || d || l % 2 == u % 2
                                            ? r
                                            : a
                                        : s,
                                    h = e ? r : s;
                                return {
                                    left: c(
                                        l % 2 == 1 && u % 2 == 1 && !d && e
                                            ? i.left - 1
                                            : i.left
                                    ),
                                    top: h(i.top),
                                    bottom: h(i.bottom),
                                    right: c(i.right)
                                };
                            })(t, window.devicePixelRatio < 2 || !yt),
                            d = "bottom" === n ? "top" : "bottom",
                            c = "right" === i ? "left" : "right",
                            h = ct("transform"),
                            p = void 0,
                            m = void 0;
                        if (
                            ((m =
                                "bottom" === d
                                    ? "HTML" === s.nodeName
                                        ? -s.clientHeight + f.bottom
                                        : -l.height + f.bottom
                                    : f.top),
                            (p =
                                "right" === c
                                    ? "HTML" === s.nodeName
                                        ? -s.clientWidth + f.right
                                        : -l.width + f.right
                                    : f.left),
                            a && h)
                        )
                            (u[h] = "translate3d(" + p + "px, " + m + "px, 0)"),
                                (u[d] = 0),
                                (u[c] = 0),
                                (u.willChange = "transform");
                        else {
                            var g = "bottom" === d ? -1 : 1,
                                v = "right" === c ? -1 : 1;
                            (u[d] = m * g),
                                (u[c] = p * v),
                                (u.willChange = d + ", " + c);
                        }
                        var _ = { "x-placement": t.placement };
                        return (
                            (t.attributes = X({}, _, t.attributes)),
                            (t.styles = X({}, u, t.styles)),
                            (t.arrowStyles = X(
                                {},
                                t.offsets.arrow,
                                t.arrowStyles
                            )),
                            t
                        );
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function(t) {
                        var e, n;
                        return (
                            bt(t.instance.popper, t.styles),
                            (e = t.instance.popper),
                            (n = t.attributes),
                            Object.keys(n).forEach(function(t) {
                                !1 !== n[t]
                                    ? e.setAttribute(t, n[t])
                                    : e.removeAttribute(t);
                            }),
                            t.arrowElement &&
                                Object.keys(t.arrowStyles).length &&
                                bt(t.arrowElement, t.arrowStyles),
                            t
                        );
                    },
                    onLoad: function(t, e, n, i, o) {
                        var r = ot(o, e, t, n.positionFixed),
                            a = it(
                                n.placement,
                                r,
                                e,
                                t,
                                n.modifiers.flip.boundariesElement,
                                n.modifiers.flip.padding
                            );
                        return (
                            e.setAttribute("x-placement", a),
                            bt(e, {
                                position: n.positionFixed ? "fixed" : "absolute"
                            }),
                            n
                        );
                    },
                    gpuAcceleration: void 0
                }
            }
        },
        It = (function() {
            function t(e, n) {
                var i = this,
                    o =
                        arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {};
                V(this, t),
                    (this.scheduleUpdate = function() {
                        return requestAnimationFrame(i.update);
                    }),
                    (this.update = k(this.update.bind(this))),
                    (this.options = X({}, t.Defaults, o)),
                    (this.state = {
                        isDestroyed: !1,
                        isCreated: !1,
                        scrollParents: []
                    }),
                    (this.reference = e && e.jquery ? e[0] : e),
                    (this.popper = n && n.jquery ? n[0] : n),
                    (this.options.modifiers = {}),
                    Object.keys(
                        X({}, t.Defaults.modifiers, o.modifiers)
                    ).forEach(function(e) {
                        i.options.modifiers[e] = X(
                            {},
                            t.Defaults.modifiers[e] || {},
                            o.modifiers ? o.modifiers[e] : {}
                        );
                    }),
                    (this.modifiers = Object.keys(this.options.modifiers)
                        .map(function(t) {
                            return X({ name: t }, i.options.modifiers[t]);
                        })
                        .sort(function(t, e) {
                            return t.order - e.order;
                        })),
                    this.modifiers.forEach(function(t) {
                        t.enabled &&
                            A(t.onLoad) &&
                            t.onLoad(
                                i.reference,
                                i.popper,
                                i.options,
                                t,
                                i.state
                            );
                    }),
                    this.update();
                var r = this.options.eventsEnabled;
                r && this.enableEventListeners(),
                    (this.state.eventsEnabled = r);
            }
            return (
                Y(t, [
                    {
                        key: "update",
                        value: function() {
                            return ft.call(this);
                        }
                    },
                    {
                        key: "destroy",
                        value: function() {
                            return ht.call(this);
                        }
                    },
                    {
                        key: "enableEventListeners",
                        value: function() {
                            return gt.call(this);
                        }
                    },
                    {
                        key: "disableEventListeners",
                        value: function() {
                            return vt.call(this);
                        }
                    }
                ]),
                t
            );
        })();
    (It.Utils = ("undefined" != typeof window ? window : global).PopperUtils),
        (It.placements = Et),
        (It.Defaults = At);
    var Ot = "dropdown",
        xt = i.default.fn[Ot],
        jt = new RegExp("38|40|27"),
        Lt = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null
        },
        Pt = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string",
            popperConfig: "(null|object)"
        },
        Ft = (function() {
            function t(t, e) {
                (this._element = t),
                    (this._popper = null),
                    (this._config = this._getConfig(e)),
                    (this._menu = this._getMenuElement()),
                    (this._inNavbar = this._detectNavbar()),
                    this._addEventListeners();
            }
            var e = t.prototype;
            return (
                (e.toggle = function() {
                    if (
                        !this._element.disabled &&
                        !i.default(this._element).hasClass("disabled")
                    ) {
                        var e = i.default(this._menu).hasClass("show");
                        t._clearMenus(), e || this.show(!0);
                    }
                }),
                (e.show = function(e) {
                    if (
                        (void 0 === e && (e = !1),
                        !(
                            this._element.disabled ||
                            i.default(this._element).hasClass("disabled") ||
                            i.default(this._menu).hasClass("show")
                        ))
                    ) {
                        var n = { relatedTarget: this._element },
                            o = i.default.Event("show.bs.dropdown", n),
                            r = t._getParentFromElement(this._element);
                        if (
                            (i.default(r).trigger(o), !o.isDefaultPrevented())
                        ) {
                            if (!this._inNavbar && e) {
                                if ("undefined" == typeof It)
                                    throw new TypeError(
                                        "Bootstrap's dropdowns require Popper (https://popper.js.org)"
                                    );
                                var a = this._element;
                                "parent" === this._config.reference
                                    ? (a = r)
                                    : l.isElement(this._config.reference) &&
                                      ((a = this._config.reference),
                                      "undefined" !=
                                          typeof this._config.reference
                                              .jquery &&
                                          (a = this._config.reference[0])),
                                    "scrollParent" !== this._config.boundary &&
                                        i
                                            .default(r)
                                            .addClass("position-static"),
                                    (this._popper = new It(
                                        a,
                                        this._menu,
                                        this._getPopperConfig()
                                    ));
                            }
                            "ontouchstart" in document.documentElement &&
                                0 ===
                                    i.default(r).closest(".navbar-nav")
                                        .length &&
                                i
                                    .default(document.body)
                                    .children()
                                    .on("mouseover", null, i.default.noop),
                                this._element.focus(),
                                this._element.setAttribute("aria-expanded", !0),
                                i.default(this._menu).toggleClass("show"),
                                i
                                    .default(r)
                                    .toggleClass("show")
                                    .trigger(
                                        i.default.Event("shown.bs.dropdown", n)
                                    );
                        }
                    }
                }),
                (e.hide = function() {
                    if (
                        !this._element.disabled &&
                        !i.default(this._element).hasClass("disabled") &&
                        i.default(this._menu).hasClass("show")
                    ) {
                        var e = { relatedTarget: this._element },
                            n = i.default.Event("hide.bs.dropdown", e),
                            o = t._getParentFromElement(this._element);
                        i.default(o).trigger(n),
                            n.isDefaultPrevented() ||
                                (this._popper && this._popper.destroy(),
                                i.default(this._menu).toggleClass("show"),
                                i
                                    .default(o)
                                    .toggleClass("show")
                                    .trigger(
                                        i.default.Event("hidden.bs.dropdown", e)
                                    ));
                    }
                }),
                (e.dispose = function() {
                    i.default.removeData(this._element, "bs.dropdown"),
                        i.default(this._element).off(".bs.dropdown"),
                        (this._element = null),
                        (this._menu = null),
                        null !== this._popper &&
                            (this._popper.destroy(), (this._popper = null));
                }),
                (e.update = function() {
                    (this._inNavbar = this._detectNavbar()),
                        null !== this._popper && this._popper.scheduleUpdate();
                }),
                (e._addEventListeners = function() {
                    var t = this;
                    i.default(this._element).on("click.bs.dropdown", function(
                        e
                    ) {
                        e.preventDefault(), e.stopPropagation(), t.toggle();
                    });
                }),
                (e._getConfig = function(t) {
                    return (
                        (t = a(
                            {},
                            this.constructor.Default,
                            i.default(this._element).data(),
                            t
                        )),
                        l.typeCheckConfig(Ot, t, this.constructor.DefaultType),
                        t
                    );
                }),
                (e._getMenuElement = function() {
                    if (!this._menu) {
                        var e = t._getParentFromElement(this._element);
                        e && (this._menu = e.querySelector(".dropdown-menu"));
                    }
                    return this._menu;
                }),
                (e._getPlacement = function() {
                    var t = i.default(this._element.parentNode),
                        e = "bottom-start";
                    return (
                        t.hasClass("dropup")
                            ? (e = i
                                  .default(this._menu)
                                  .hasClass("dropdown-menu-right")
                                  ? "top-end"
                                  : "top-start")
                            : t.hasClass("dropright")
                            ? (e = "right-start")
                            : t.hasClass("dropleft")
                            ? (e = "left-start")
                            : i
                                  .default(this._menu)
                                  .hasClass("dropdown-menu-right") &&
                              (e = "bottom-end"),
                        e
                    );
                }),
                (e._detectNavbar = function() {
                    return (
                        i.default(this._element).closest(".navbar").length > 0
                    );
                }),
                (e._getOffset = function() {
                    var t = this,
                        e = {};
                    return (
                        "function" == typeof this._config.offset
                            ? (e.fn = function(e) {
                                  return (
                                      (e.offsets = a(
                                          {},
                                          e.offsets,
                                          t._config.offset(
                                              e.offsets,
                                              t._element
                                          ) || {}
                                      )),
                                      e
                                  );
                              })
                            : (e.offset = this._config.offset),
                        e
                    );
                }),
                (e._getPopperConfig = function() {
                    var t = {
                        placement: this._getPlacement(),
                        modifiers: {
                            offset: this._getOffset(),
                            flip: { enabled: this._config.flip },
                            preventOverflow: {
                                boundariesElement: this._config.boundary
                            }
                        }
                    };
                    return (
                        "static" === this._config.display &&
                            (t.modifiers.applyStyle = { enabled: !1 }),
                        a({}, t, this._config.popperConfig)
                    );
                }),
                (t._jQueryInterface = function(e) {
                    return this.each(function() {
                        var n = i.default(this).data("bs.dropdown");
                        if (
                            (n ||
                                ((n = new t(
                                    this,
                                    "object" == typeof e ? e : null
                                )),
                                i.default(this).data("bs.dropdown", n)),
                            "string" == typeof e)
                        ) {
                            if ("undefined" == typeof n[e])
                                throw new TypeError(
                                    'No method named "' + e + '"'
                                );
                            n[e]();
                        }
                    });
                }),
                (t._clearMenus = function(e) {
                    if (
                        !e ||
                        (3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                    )
                        for (
                            var n = [].slice.call(
                                    document.querySelectorAll(
                                        '[data-toggle="dropdown"]'
                                    )
                                ),
                                o = 0,
                                r = n.length;
                            o < r;
                            o++
                        ) {
                            var a = t._getParentFromElement(n[o]),
                                s = i.default(n[o]).data("bs.dropdown"),
                                l = { relatedTarget: n[o] };
                            if (
                                (e && "click" === e.type && (l.clickEvent = e),
                                s)
                            ) {
                                var u = s._menu;
                                if (
                                    i.default(a).hasClass("show") &&
                                    !(
                                        e &&
                                        (("click" === e.type &&
                                            /input|textarea/i.test(
                                                e.target.tagName
                                            )) ||
                                            ("keyup" === e.type &&
                                                9 === e.which)) &&
                                        i.default.contains(a, e.target)
                                    )
                                ) {
                                    var f = i.default.Event(
                                        "hide.bs.dropdown",
                                        l
                                    );
                                    i.default(a).trigger(f),
                                        f.isDefaultPrevented() ||
                                            ("ontouchstart" in
                                                document.documentElement &&
                                                i
                                                    .default(document.body)
                                                    .children()
                                                    .off(
                                                        "mouseover",
                                                        null,
                                                        i.default.noop
                                                    ),
                                            n[o].setAttribute(
                                                "aria-expanded",
                                                "false"
                                            ),
                                            s._popper && s._popper.destroy(),
                                            i.default(u).removeClass("show"),
                                            i
                                                .default(a)
                                                .removeClass("show")
                                                .trigger(
                                                    i.default.Event(
                                                        "hidden.bs.dropdown",
                                                        l
                                                    )
                                                ));
                                }
                            }
                        }
                }),
                (t._getParentFromElement = function(t) {
                    var e,
                        n = l.getSelectorFromElement(t);
                    return (
                        n && (e = document.querySelector(n)), e || t.parentNode
                    );
                }),
                (t._dataApiKeydownHandler = function(e) {
                    if (
                        !(/input|textarea/i.test(e.target.tagName)
                            ? 32 === e.which ||
                              (27 !== e.which &&
                                  ((40 !== e.which && 38 !== e.which) ||
                                      i
                                          .default(e.target)
                                          .closest(".dropdown-menu").length))
                            : !jt.test(e.which)) &&
                        !this.disabled &&
                        !i.default(this).hasClass("disabled")
                    ) {
                        var n = t._getParentFromElement(this),
                            o = i.default(n).hasClass("show");
                        if (o || 27 !== e.which) {
                            if (
                                (e.preventDefault(),
                                e.stopPropagation(),
                                !o || 27 === e.which || 32 === e.which)
                            )
                                return (
                                    27 === e.which &&
                                        i
                                            .default(
                                                n.querySelector(
                                                    '[data-toggle="dropdown"]'
                                                )
                                            )
                                            .trigger("focus"),
                                    void i.default(this).trigger("click")
                                );
                            var r = [].slice
                                .call(
                                    n.querySelectorAll(
                                        ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
                                    )
                                )
                                .filter(function(t) {
                                    return i.default(t).is(":visible");
                                });
                            if (0 !== r.length) {
                                var a = r.indexOf(e.target);
                                38 === e.which && a > 0 && a--,
                                    40 === e.which && a < r.length - 1 && a++,
                                    a < 0 && (a = 0),
                                    r[a].focus();
                            }
                        }
                    }
                }),
                r(t, null, [
                    {
                        key: "VERSION",
                        get: function() {
                            return "4.6.0";
                        }
                    },
                    {
                        key: "Default",
                        get: function() {
                            return Lt;
                        }
                    },
                    {
                        key: "DefaultType",
                        get: function() {
                            return Pt;
                        }
                    }
                ]),
                t
            );
        })();
    i
        .default(document)
        .on(
            "keydown.bs.dropdown.data-api",
            '[data-toggle="dropdown"]',
            Ft._dataApiKeydownHandler
        )
        .on(
            "keydown.bs.dropdown.data-api",
            ".dropdown-menu",
            Ft._dataApiKeydownHandler
        )
        .on(
            "click.bs.dropdown.data-api keyup.bs.dropdown.data-api",
            Ft._clearMenus
        )
        .on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function(
            t
        ) {
            t.preventDefault(),
                t.stopPropagation(),
                Ft._jQueryInterface.call(i.default(this), "toggle");
        })
        .on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
            t.stopPropagation();
        }),
        (i.default.fn[Ot] = Ft._jQueryInterface),
        (i.default.fn[Ot].Constructor = Ft),
        (i.default.fn[Ot].noConflict = function() {
            return (i.default.fn[Ot] = xt), Ft._jQueryInterface;
        });
    var Rt = i.default.fn.modal,
        Ht = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        Mt = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        qt = (function() {
            function t(t, e) {
                (this._config = this._getConfig(e)),
                    (this._element = t),
                    (this._dialog = t.querySelector(".modal-dialog")),
                    (this._backdrop = null),
                    (this._isShown = !1),
                    (this._isBodyOverflowing = !1),
                    (this._ignoreBackdropClick = !1),
                    (this._isTransitioning = !1),
                    (this._scrollbarWidth = 0);
            }
            var e = t.prototype;
            return (
                (e.toggle = function(t) {
                    return this._isShown ? this.hide() : this.show(t);
                }),
                (e.show = function(t) {
                    var e = this;
                    if (!this._isShown && !this._isTransitioning) {
                        i.default(this._element).hasClass("fade") &&
                            (this._isTransitioning = !0);
                        var n = i.default.Event("show.bs.modal", {
                            relatedTarget: t
                        });
                        i.default(this._element).trigger(n),
                            this._isShown ||
                                n.isDefaultPrevented() ||
                                ((this._isShown = !0),
                                this._checkScrollbar(),
                                this._setScrollbar(),
                                this._adjustDialog(),
                                this._setEscapeEvent(),
                                this._setResizeEvent(),
                                i
                                    .default(this._element)
                                    .on(
                                        "click.dismiss.bs.modal",
                                        '[data-dismiss="modal"]',
                                        function(t) {
                                            return e.hide(t);
                                        }
                                    ),
                                i
                                    .default(this._dialog)
                                    .on(
                                        "mousedown.dismiss.bs.modal",
                                        function() {
                                            i.default(e._element).one(
                                                "mouseup.dismiss.bs.modal",
                                                function(t) {
                                                    i
                                                        .default(t.target)
                                                        .is(e._element) &&
                                                        (e._ignoreBackdropClick = !0);
                                                }
                                            );
                                        }
                                    ),
                                this._showBackdrop(function() {
                                    return e._showElement(t);
                                }));
                    }
                }),
                (e.hide = function(t) {
                    var e = this;
                    if (
                        (t && t.preventDefault(),
                        this._isShown && !this._isTransitioning)
                    ) {
                        var n = i.default.Event("hide.bs.modal");
                        if (
                            (i.default(this._element).trigger(n),
                            this._isShown && !n.isDefaultPrevented())
                        ) {
                            this._isShown = !1;
                            var o = i.default(this._element).hasClass("fade");
                            if (
                                (o && (this._isTransitioning = !0),
                                this._setEscapeEvent(),
                                this._setResizeEvent(),
                                i.default(document).off("focusin.bs.modal"),
                                i.default(this._element).removeClass("show"),
                                i
                                    .default(this._element)
                                    .off("click.dismiss.bs.modal"),
                                i
                                    .default(this._dialog)
                                    .off("mousedown.dismiss.bs.modal"),
                                o)
                            ) {
                                var r = l.getTransitionDurationFromElement(
                                    this._element
                                );
                                i.default(this._element)
                                    .one(l.TRANSITION_END, function(t) {
                                        return e._hideModal(t);
                                    })
                                    .emulateTransitionEnd(r);
                            } else this._hideModal();
                        }
                    }
                }),
                (e.dispose = function() {
                    [window, this._element, this._dialog].forEach(function(t) {
                        return i.default(t).off(".bs.modal");
                    }),
                        i.default(document).off("focusin.bs.modal"),
                        i.default.removeData(this._element, "bs.modal"),
                        (this._config = null),
                        (this._element = null),
                        (this._dialog = null),
                        (this._backdrop = null),
                        (this._isShown = null),
                        (this._isBodyOverflowing = null),
                        (this._ignoreBackdropClick = null),
                        (this._isTransitioning = null),
                        (this._scrollbarWidth = null);
                }),
                (e.handleUpdate = function() {
                    this._adjustDialog();
                }),
                (e._getConfig = function(t) {
                    return (
                        (t = a({}, Ht, t)), l.typeCheckConfig("modal", t, Mt), t
                    );
                }),
                (e._triggerBackdropTransition = function() {
                    var t = this,
                        e = i.default.Event("hidePrevented.bs.modal");
                    if (
                        (i.default(this._element).trigger(e),
                        !e.isDefaultPrevented())
                    ) {
                        var n =
                            this._element.scrollHeight >
                            document.documentElement.clientHeight;
                        n || (this._element.style.overflowY = "hidden"),
                            this._element.classList.add("modal-static");
                        var o = l.getTransitionDurationFromElement(
                            this._dialog
                        );
                        i.default(this._element).off(l.TRANSITION_END),
                            i
                                .default(this._element)
                                .one(l.TRANSITION_END, function() {
                                    t._element.classList.remove("modal-static"),
                                        n ||
                                            i
                                                .default(t._element)
                                                .one(
                                                    l.TRANSITION_END,
                                                    function() {
                                                        t._element.style.overflowY =
                                                            "";
                                                    }
                                                )
                                                .emulateTransitionEnd(
                                                    t._element,
                                                    o
                                                );
                                })
                                .emulateTransitionEnd(o),
                            this._element.focus();
                    }
                }),
                (e._showElement = function(t) {
                    var e = this,
                        n = i.default(this._element).hasClass("fade"),
                        o = this._dialog
                            ? this._dialog.querySelector(".modal-body")
                            : null;
                    (this._element.parentNode &&
                        this._element.parentNode.nodeType ===
                            Node.ELEMENT_NODE) ||
                        document.body.appendChild(this._element),
                        (this._element.style.display = "block"),
                        this._element.removeAttribute("aria-hidden"),
                        this._element.setAttribute("aria-modal", !0),
                        this._element.setAttribute("role", "dialog"),
                        i
                            .default(this._dialog)
                            .hasClass("modal-dialog-scrollable") && o
                            ? (o.scrollTop = 0)
                            : (this._element.scrollTop = 0),
                        n && l.reflow(this._element),
                        i.default(this._element).addClass("show"),
                        this._config.focus && this._enforceFocus();
                    var r = i.default.Event("shown.bs.modal", {
                            relatedTarget: t
                        }),
                        a = function() {
                            e._config.focus && e._element.focus(),
                                (e._isTransitioning = !1),
                                i.default(e._element).trigger(r);
                        };
                    if (n) {
                        var s = l.getTransitionDurationFromElement(
                            this._dialog
                        );
                        i.default(this._dialog)
                            .one(l.TRANSITION_END, a)
                            .emulateTransitionEnd(s);
                    } else a();
                }),
                (e._enforceFocus = function() {
                    var t = this;
                    i.default(document)
                        .off("focusin.bs.modal")
                        .on("focusin.bs.modal", function(e) {
                            document !== e.target &&
                                t._element !== e.target &&
                                0 ===
                                    i.default(t._element).has(e.target)
                                        .length &&
                                t._element.focus();
                        });
                }),
                (e._setEscapeEvent = function() {
                    var t = this;
                    this._isShown
                        ? i
                              .default(this._element)
                              .on("keydown.dismiss.bs.modal", function(e) {
                                  t._config.keyboard && 27 === e.which
                                      ? (e.preventDefault(), t.hide())
                                      : t._config.keyboard ||
                                        27 !== e.which ||
                                        t._triggerBackdropTransition();
                              })
                        : this._isShown ||
                          i
                              .default(this._element)
                              .off("keydown.dismiss.bs.modal");
                }),
                (e._setResizeEvent = function() {
                    var t = this;
                    this._isShown
                        ? i.default(window).on("resize.bs.modal", function(e) {
                              return t.handleUpdate(e);
                          })
                        : i.default(window).off("resize.bs.modal");
                }),
                (e._hideModal = function() {
                    var t = this;
                    (this._element.style.display = "none"),
                        this._element.setAttribute("aria-hidden", !0),
                        this._element.removeAttribute("aria-modal"),
                        this._element.removeAttribute("role"),
                        (this._isTransitioning = !1),
                        this._showBackdrop(function() {
                            i.default(document.body).removeClass("modal-open"),
                                t._resetAdjustments(),
                                t._resetScrollbar(),
                                i
                                    .default(t._element)
                                    .trigger("hidden.bs.modal");
                        });
                }),
                (e._removeBackdrop = function() {
                    this._backdrop &&
                        (i.default(this._backdrop).remove(),
                        (this._backdrop = null));
                }),
                (e._showBackdrop = function(t) {
                    var e = this,
                        n = i.default(this._element).hasClass("fade")
                            ? "fade"
                            : "";
                    if (this._isShown && this._config.backdrop) {
                        if (
                            ((this._backdrop = document.createElement("div")),
                            (this._backdrop.className = "modal-backdrop"),
                            n && this._backdrop.classList.add(n),
                            i.default(this._backdrop).appendTo(document.body),
                            i
                                .default(this._element)
                                .on("click.dismiss.bs.modal", function(t) {
                                    e._ignoreBackdropClick
                                        ? (e._ignoreBackdropClick = !1)
                                        : t.target === t.currentTarget &&
                                          ("static" === e._config.backdrop
                                              ? e._triggerBackdropTransition()
                                              : e.hide());
                                }),
                            n && l.reflow(this._backdrop),
                            i.default(this._backdrop).addClass("show"),
                            !t)
                        )
                            return;
                        if (!n) return void t();
                        var o = l.getTransitionDurationFromElement(
                            this._backdrop
                        );
                        i.default(this._backdrop)
                            .one(l.TRANSITION_END, t)
                            .emulateTransitionEnd(o);
                    } else if (!this._isShown && this._backdrop) {
                        i.default(this._backdrop).removeClass("show");
                        var r = function() {
                            e._removeBackdrop(), t && t();
                        };
                        if (i.default(this._element).hasClass("fade")) {
                            var a = l.getTransitionDurationFromElement(
                                this._backdrop
                            );
                            i.default(this._backdrop)
                                .one(l.TRANSITION_END, r)
                                .emulateTransitionEnd(a);
                        } else r();
                    } else t && t();
                }),
                (e._adjustDialog = function() {
                    var t =
                        this._element.scrollHeight >
                        document.documentElement.clientHeight;
                    !this._isBodyOverflowing &&
                        t &&
                        (this._element.style.paddingLeft =
                            this._scrollbarWidth + "px"),
                        this._isBodyOverflowing &&
                            !t &&
                            (this._element.style.paddingRight =
                                this._scrollbarWidth + "px");
                }),
                (e._resetAdjustments = function() {
                    (this._element.style.paddingLeft = ""),
                        (this._element.style.paddingRight = "");
                }),
                (e._checkScrollbar = function() {
                    var t = document.body.getBoundingClientRect();
                    (this._isBodyOverflowing =
                        Math.round(t.left + t.right) < window.innerWidth),
                        (this._scrollbarWidth = this._getScrollbarWidth());
                }),
                (e._setScrollbar = function() {
                    var t = this;
                    if (this._isBodyOverflowing) {
                        var e = [].slice.call(
                                document.querySelectorAll(
                                    ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
                                )
                            ),
                            n = [].slice.call(
                                document.querySelectorAll(".sticky-top")
                            );
                        i.default(e).each(function(e, n) {
                            var o = n.style.paddingRight,
                                r = i.default(n).css("padding-right");
                            i.default(n)
                                .data("padding-right", o)
                                .css(
                                    "padding-right",
                                    parseFloat(r) + t._scrollbarWidth + "px"
                                );
                        }),
                            i.default(n).each(function(e, n) {
                                var o = n.style.marginRight,
                                    r = i.default(n).css("margin-right");
                                i.default(n)
                                    .data("margin-right", o)
                                    .css(
                                        "margin-right",
                                        parseFloat(r) - t._scrollbarWidth + "px"
                                    );
                            });
                        var o = document.body.style.paddingRight,
                            r = i.default(document.body).css("padding-right");
                        i.default(document.body)
                            .data("padding-right", o)
                            .css(
                                "padding-right",
                                parseFloat(r) + this._scrollbarWidth + "px"
                            );
                    }
                    i.default(document.body).addClass("modal-open");
                }),
                (e._resetScrollbar = function() {
                    var t = [].slice.call(
                        document.querySelectorAll(
                            ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
                        )
                    );
                    i.default(t).each(function(t, e) {
                        var n = i.default(e).data("padding-right");
                        i.default(e).removeData("padding-right"),
                            (e.style.paddingRight = n || "");
                    });
                    var e = [].slice.call(
                        document.querySelectorAll(".sticky-top")
                    );
                    i.default(e).each(function(t, e) {
                        var n = i.default(e).data("margin-right");
                        "undefined" != typeof n &&
                            i
                                .default(e)
                                .css("margin-right", n)
                                .removeData("margin-right");
                    });
                    var n = i.default(document.body).data("padding-right");
                    i.default(document.body).removeData("padding-right"),
                        (document.body.style.paddingRight = n || "");
                }),
                (e._getScrollbarWidth = function() {
                    var t = document.createElement("div");
                    (t.className = "modal-scrollbar-measure"),
                        document.body.appendChild(t);
                    var e = t.getBoundingClientRect().width - t.clientWidth;
                    return document.body.removeChild(t), e;
                }),
                (t._jQueryInterface = function(e, n) {
                    return this.each(function() {
                        var o = i.default(this).data("bs.modal"),
                            r = a(
                                {},
                                Ht,
                                i.default(this).data(),
                                "object" == typeof e && e ? e : {}
                            );
                        if (
                            (o ||
                                ((o = new t(this, r)),
                                i.default(this).data("bs.modal", o)),
                            "string" == typeof e)
                        ) {
                            if ("undefined" == typeof o[e])
                                throw new TypeError(
                                    'No method named "' + e + '"'
                                );
                            o[e](n);
                        } else r.show && o.show(n);
                    });
                }),
                r(t, null, [
                    {
                        key: "VERSION",
                        get: function() {
                            return "4.6.0";
                        }
                    },
                    {
                        key: "Default",
                        get: function() {
                            return Ht;
                        }
                    }
                ]),
                t
            );
        })();
    i
        .default(document)
        .on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
            var e,
                n = this,
                o = l.getSelectorFromElement(this);
            o && (e = document.querySelector(o));
            var r = i.default(e).data("bs.modal")
                ? "toggle"
                : a({}, i.default(e).data(), i.default(this).data());
            ("A" !== this.tagName && "AREA" !== this.tagName) ||
                t.preventDefault();
            var s = i.default(e).one("show.bs.modal", function(t) {
                t.isDefaultPrevented() ||
                    s.one("hidden.bs.modal", function() {
                        i.default(n).is(":visible") && n.focus();
                    });
            });
            qt._jQueryInterface.call(i.default(e), r, this);
        }),
        (i.default.fn.modal = qt._jQueryInterface),
        (i.default.fn.modal.Constructor = qt),
        (i.default.fn.modal.noConflict = function() {
            return (i.default.fn.modal = Rt), qt._jQueryInterface;
        });
    var Bt = [
            "background",
            "cite",
            "href",
            "itemtype",
            "longdesc",
            "poster",
            "src",
            "xlink:href"
        ],
        Qt = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        Wt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
        Ut = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    function Vt(t, e, n) {
        if (0 === t.length) return t;
        if (n && "function" == typeof n) return n(t);
        for (
            var i = new window.DOMParser().parseFromString(t, "text/html"),
                o = Object.keys(e),
                r = [].slice.call(i.body.querySelectorAll("*")),
                a = function(t, n) {
                    var i = r[t],
                        a = i.nodeName.toLowerCase();
                    if (-1 === o.indexOf(i.nodeName.toLowerCase()))
                        return i.parentNode.removeChild(i), "continue";
                    var s = [].slice.call(i.attributes),
                        l = [].concat(e["*"] || [], e[a] || []);
                    s.forEach(function(t) {
                        (function(t, e) {
                            var n = t.nodeName.toLowerCase();
                            if (-1 !== e.indexOf(n))
                                return (
                                    -1 === Bt.indexOf(n) ||
                                    Boolean(
                                        t.nodeValue.match(Wt) ||
                                            t.nodeValue.match(Ut)
                                    )
                                );
                            for (
                                var i = e.filter(function(t) {
                                        return t instanceof RegExp;
                                    }),
                                    o = 0,
                                    r = i.length;
                                o < r;
                                o++
                            )
                                if (n.match(i[o])) return !0;
                            return !1;
                        })(t, l) || i.removeAttribute(t.nodeName);
                    });
                },
                s = 0,
                l = r.length;
            s < l;
            s++
        )
            a(s);
        return i.body.innerHTML;
    }
    var Yt = "tooltip",
        zt = i.default.fn[Yt],
        Xt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        Kt = ["sanitize", "whiteList", "sanitizeFn"],
        Gt = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
            popperConfig: "(null|object)"
        },
        $t = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        Jt = {
            animation: !0,
            template:
                '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: Qt,
            popperConfig: null
        },
        Zt = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip"
        },
        te = (function() {
            function t(t, e) {
                if ("undefined" == typeof It)
                    throw new TypeError(
                        "Bootstrap's tooltips require Popper (https://popper.js.org)"
                    );
                (this._isEnabled = !0),
                    (this._timeout = 0),
                    (this._hoverState = ""),
                    (this._activeTrigger = {}),
                    (this._popper = null),
                    (this.element = t),
                    (this.config = this._getConfig(e)),
                    (this.tip = null),
                    this._setListeners();
            }
            var e = t.prototype;
            return (
                (e.enable = function() {
                    this._isEnabled = !0;
                }),
                (e.disable = function() {
                    this._isEnabled = !1;
                }),
                (e.toggleEnabled = function() {
                    this._isEnabled = !this._isEnabled;
                }),
                (e.toggle = function(t) {
                    if (this._isEnabled)
                        if (t) {
                            var e = this.constructor.DATA_KEY,
                                n = i.default(t.currentTarget).data(e);
                            n ||
                                ((n = new this.constructor(
                                    t.currentTarget,
                                    this._getDelegateConfig()
                                )),
                                i.default(t.currentTarget).data(e, n)),
                                (n._activeTrigger.click = !n._activeTrigger
                                    .click),
                                n._isWithActiveTrigger()
                                    ? n._enter(null, n)
                                    : n._leave(null, n);
                        } else {
                            if (
                                i.default(this.getTipElement()).hasClass("show")
                            )
                                return void this._leave(null, this);
                            this._enter(null, this);
                        }
                }),
                (e.dispose = function() {
                    clearTimeout(this._timeout),
                        i.default.removeData(
                            this.element,
                            this.constructor.DATA_KEY
                        ),
                        i.default(this.element).off(this.constructor.EVENT_KEY),
                        i
                            .default(this.element)
                            .closest(".modal")
                            .off("hide.bs.modal", this._hideModalHandler),
                        this.tip && i.default(this.tip).remove(),
                        (this._isEnabled = null),
                        (this._timeout = null),
                        (this._hoverState = null),
                        (this._activeTrigger = null),
                        this._popper && this._popper.destroy(),
                        (this._popper = null),
                        (this.element = null),
                        (this.config = null),
                        (this.tip = null);
                }),
                (e.show = function() {
                    var t = this;
                    if ("none" === i.default(this.element).css("display"))
                        throw new Error("Please use show on visible elements");
                    var e = i.default.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        i.default(this.element).trigger(e);
                        var n = l.findShadowRoot(this.element),
                            o = i.default.contains(
                                null !== n
                                    ? n
                                    : this.element.ownerDocument
                                          .documentElement,
                                this.element
                            );
                        if (e.isDefaultPrevented() || !o) return;
                        var r = this.getTipElement(),
                            a = l.getUID(this.constructor.NAME);
                        r.setAttribute("id", a),
                            this.element.setAttribute("aria-describedby", a),
                            this.setContent(),
                            this.config.animation &&
                                i.default(r).addClass("fade");
                        var s =
                                "function" == typeof this.config.placement
                                    ? this.config.placement.call(
                                          this,
                                          r,
                                          this.element
                                      )
                                    : this.config.placement,
                            u = this._getAttachment(s);
                        this.addAttachmentClass(u);
                        var f = this._getContainer();
                        i.default(r).data(this.constructor.DATA_KEY, this),
                            i.default.contains(
                                this.element.ownerDocument.documentElement,
                                this.tip
                            ) || i.default(r).appendTo(f),
                            i
                                .default(this.element)
                                .trigger(this.constructor.Event.INSERTED),
                            (this._popper = new It(
                                this.element,
                                r,
                                this._getPopperConfig(u)
                            )),
                            i.default(r).addClass("show"),
                            i.default(r).addClass(this.config.customClass),
                            "ontouchstart" in document.documentElement &&
                                i
                                    .default(document.body)
                                    .children()
                                    .on("mouseover", null, i.default.noop);
                        var d = function() {
                            t.config.animation && t._fixTransition();
                            var e = t._hoverState;
                            (t._hoverState = null),
                                i
                                    .default(t.element)
                                    .trigger(t.constructor.Event.SHOWN),
                                "out" === e && t._leave(null, t);
                        };
                        if (i.default(this.tip).hasClass("fade")) {
                            var c = l.getTransitionDurationFromElement(
                                this.tip
                            );
                            i.default(this.tip)
                                .one(l.TRANSITION_END, d)
                                .emulateTransitionEnd(c);
                        } else d();
                    }
                }),
                (e.hide = function(t) {
                    var e = this,
                        n = this.getTipElement(),
                        o = i.default.Event(this.constructor.Event.HIDE),
                        r = function() {
                            "show" !== e._hoverState &&
                                n.parentNode &&
                                n.parentNode.removeChild(n),
                                e._cleanTipClass(),
                                e.element.removeAttribute("aria-describedby"),
                                i
                                    .default(e.element)
                                    .trigger(e.constructor.Event.HIDDEN),
                                null !== e._popper && e._popper.destroy(),
                                t && t();
                        };
                    if (
                        (i.default(this.element).trigger(o),
                        !o.isDefaultPrevented())
                    ) {
                        if (
                            (i.default(n).removeClass("show"),
                            "ontouchstart" in document.documentElement &&
                                i
                                    .default(document.body)
                                    .children()
                                    .off("mouseover", null, i.default.noop),
                            (this._activeTrigger.click = !1),
                            (this._activeTrigger.focus = !1),
                            (this._activeTrigger.hover = !1),
                            i.default(this.tip).hasClass("fade"))
                        ) {
                            var a = l.getTransitionDurationFromElement(n);
                            i.default(n)
                                .one(l.TRANSITION_END, r)
                                .emulateTransitionEnd(a);
                        } else r();
                        this._hoverState = "";
                    }
                }),
                (e.update = function() {
                    null !== this._popper && this._popper.scheduleUpdate();
                }),
                (e.isWithContent = function() {
                    return Boolean(this.getTitle());
                }),
                (e.addAttachmentClass = function(t) {
                    i.default(this.getTipElement()).addClass("bs-tooltip-" + t);
                }),
                (e.getTipElement = function() {
                    return (
                        (this.tip =
                            this.tip || i.default(this.config.template)[0]),
                        this.tip
                    );
                }),
                (e.setContent = function() {
                    var t = this.getTipElement();
                    this.setElementContent(
                        i.default(t.querySelectorAll(".tooltip-inner")),
                        this.getTitle()
                    ),
                        i.default(t).removeClass("fade show");
                }),
                (e.setElementContent = function(t, e) {
                    "object" != typeof e || (!e.nodeType && !e.jquery)
                        ? this.config.html
                            ? (this.config.sanitize &&
                                  (e = Vt(
                                      e,
                                      this.config.whiteList,
                                      this.config.sanitizeFn
                                  )),
                              t.html(e))
                            : t.text(e)
                        : this.config.html
                        ? i
                              .default(e)
                              .parent()
                              .is(t) || t.empty().append(e)
                        : t.text(i.default(e).text());
                }),
                (e.getTitle = function() {
                    var t = this.element.getAttribute("data-original-title");
                    return (
                        t ||
                            (t =
                                "function" == typeof this.config.title
                                    ? this.config.title.call(this.element)
                                    : this.config.title),
                        t
                    );
                }),
                (e._getPopperConfig = function(t) {
                    var e = this;
                    return a(
                        {},
                        {
                            placement: t,
                            modifiers: {
                                offset: this._getOffset(),
                                flip: {
                                    behavior: this.config.fallbackPlacement
                                },
                                arrow: { element: ".arrow" },
                                preventOverflow: {
                                    boundariesElement: this.config.boundary
                                }
                            },
                            onCreate: function(t) {
                                t.originalPlacement !== t.placement &&
                                    e._handlePopperPlacementChange(t);
                            },
                            onUpdate: function(t) {
                                return e._handlePopperPlacementChange(t);
                            }
                        },
                        this.config.popperConfig
                    );
                }),
                (e._getOffset = function() {
                    var t = this,
                        e = {};
                    return (
                        "function" == typeof this.config.offset
                            ? (e.fn = function(e) {
                                  return (
                                      (e.offsets = a(
                                          {},
                                          e.offsets,
                                          t.config.offset(
                                              e.offsets,
                                              t.element
                                          ) || {}
                                      )),
                                      e
                                  );
                              })
                            : (e.offset = this.config.offset),
                        e
                    );
                }),
                (e._getContainer = function() {
                    return !1 === this.config.container
                        ? document.body
                        : l.isElement(this.config.container)
                        ? i.default(this.config.container)
                        : i.default(document).find(this.config.container);
                }),
                (e._getAttachment = function(t) {
                    return $t[t.toUpperCase()];
                }),
                (e._setListeners = function() {
                    var t = this;
                    this.config.trigger.split(" ").forEach(function(e) {
                        if ("click" === e)
                            i.default(t.element).on(
                                t.constructor.Event.CLICK,
                                t.config.selector,
                                function(e) {
                                    return t.toggle(e);
                                }
                            );
                        else if ("manual" !== e) {
                            var n =
                                    "hover" === e
                                        ? t.constructor.Event.MOUSEENTER
                                        : t.constructor.Event.FOCUSIN,
                                o =
                                    "hover" === e
                                        ? t.constructor.Event.MOUSELEAVE
                                        : t.constructor.Event.FOCUSOUT;
                            i.default(t.element)
                                .on(n, t.config.selector, function(e) {
                                    return t._enter(e);
                                })
                                .on(o, t.config.selector, function(e) {
                                    return t._leave(e);
                                });
                        }
                    }),
                        (this._hideModalHandler = function() {
                            t.element && t.hide();
                        }),
                        i
                            .default(this.element)
                            .closest(".modal")
                            .on("hide.bs.modal", this._hideModalHandler),
                        this.config.selector
                            ? (this.config = a({}, this.config, {
                                  trigger: "manual",
                                  selector: ""
                              }))
                            : this._fixTitle();
                }),
                (e._fixTitle = function() {
                    var t = typeof this.element.getAttribute(
                        "data-original-title"
                    );
                    (this.element.getAttribute("title") || "string" !== t) &&
                        (this.element.setAttribute(
                            "data-original-title",
                            this.element.getAttribute("title") || ""
                        ),
                        this.element.setAttribute("title", ""));
                }),
                (e._enter = function(t, e) {
                    var n = this.constructor.DATA_KEY;
                    (e = e || i.default(t.currentTarget).data(n)) ||
                        ((e = new this.constructor(
                            t.currentTarget,
                            this._getDelegateConfig()
                        )),
                        i.default(t.currentTarget).data(n, e)),
                        t &&
                            (e._activeTrigger[
                                "focusin" === t.type ? "focus" : "hover"
                            ] = !0),
                        i.default(e.getTipElement()).hasClass("show") ||
                        "show" === e._hoverState
                            ? (e._hoverState = "show")
                            : (clearTimeout(e._timeout),
                              (e._hoverState = "show"),
                              e.config.delay && e.config.delay.show
                                  ? (e._timeout = setTimeout(function() {
                                        "show" === e._hoverState && e.show();
                                    }, e.config.delay.show))
                                  : e.show());
                }),
                (e._leave = function(t, e) {
                    var n = this.constructor.DATA_KEY;
                    (e = e || i.default(t.currentTarget).data(n)) ||
                        ((e = new this.constructor(
                            t.currentTarget,
                            this._getDelegateConfig()
                        )),
                        i.default(t.currentTarget).data(n, e)),
                        t &&
                            (e._activeTrigger[
                                "focusout" === t.type ? "focus" : "hover"
                            ] = !1),
                        e._isWithActiveTrigger() ||
                            (clearTimeout(e._timeout),
                            (e._hoverState = "out"),
                            e.config.delay && e.config.delay.hide
                                ? (e._timeout = setTimeout(function() {
                                      "out" === e._hoverState && e.hide();
                                  }, e.config.delay.hide))
                                : e.hide());
                }),
                (e._isWithActiveTrigger = function() {
                    for (var t in this._activeTrigger)
                        if (this._activeTrigger[t]) return !0;
                    return !1;
                }),
                (e._getConfig = function(t) {
                    var e = i.default(this.element).data();
                    return (
                        Object.keys(e).forEach(function(t) {
                            -1 !== Kt.indexOf(t) && delete e[t];
                        }),
                        "number" ==
                            typeof (t = a(
                                {},
                                this.constructor.Default,
                                e,
                                "object" == typeof t && t ? t : {}
                            )).delay &&
                            (t.delay = { show: t.delay, hide: t.delay }),
                        "number" == typeof t.title &&
                            (t.title = t.title.toString()),
                        "number" == typeof t.content &&
                            (t.content = t.content.toString()),
                        l.typeCheckConfig(Yt, t, this.constructor.DefaultType),
                        t.sanitize &&
                            (t.template = Vt(
                                t.template,
                                t.whiteList,
                                t.sanitizeFn
                            )),
                        t
                    );
                }),
                (e._getDelegateConfig = function() {
                    var t = {};
                    if (this.config)
                        for (var e in this.config)
                            this.constructor.Default[e] !== this.config[e] &&
                                (t[e] = this.config[e]);
                    return t;
                }),
                (e._cleanTipClass = function() {
                    var t = i.default(this.getTipElement()),
                        e = t.attr("class").match(Xt);
                    null !== e && e.length && t.removeClass(e.join(""));
                }),
                (e._handlePopperPlacementChange = function(t) {
                    (this.tip = t.instance.popper),
                        this._cleanTipClass(),
                        this.addAttachmentClass(
                            this._getAttachment(t.placement)
                        );
                }),
                (e._fixTransition = function() {
                    var t = this.getTipElement(),
                        e = this.config.animation;
                    null === t.getAttribute("x-placement") &&
                        (i.default(t).removeClass("fade"),
                        (this.config.animation = !1),
                        this.hide(),
                        this.show(),
                        (this.config.animation = e));
                }),
                (t._jQueryInterface = function(e) {
                    return this.each(function() {
                        var n = i.default(this),
                            o = n.data("bs.tooltip"),
                            r = "object" == typeof e && e;
                        if (
                            (o || !/dispose|hide/.test(e)) &&
                            (o ||
                                ((o = new t(this, r)), n.data("bs.tooltip", o)),
                            "string" == typeof e)
                        ) {
                            if ("undefined" == typeof o[e])
                                throw new TypeError(
                                    'No method named "' + e + '"'
                                );
                            o[e]();
                        }
                    });
                }),
                r(t, null, [
                    {
                        key: "VERSION",
                        get: function() {
                            return "4.6.0";
                        }
                    },
                    {
                        key: "Default",
                        get: function() {
                            return Jt;
                        }
                    },
                    {
                        key: "NAME",
                        get: function() {
                            return Yt;
                        }
                    },
                    {
                        key: "DATA_KEY",
                        get: function() {
                            return "bs.tooltip";
                        }
                    },
                    {
                        key: "Event",
                        get: function() {
                            return Zt;
                        }
                    },
                    {
                        key: "EVENT_KEY",
                        get: function() {
                            return ".bs.tooltip";
                        }
                    },
                    {
                        key: "DefaultType",
                        get: function() {
                            return Gt;
                        }
                    }
                ]),
                t
            );
        })();
    (i.default.fn[Yt] = te._jQueryInterface),
        (i.default.fn[Yt].Constructor = te),
        (i.default.fn[Yt].noConflict = function() {
            return (i.default.fn[Yt] = zt), te._jQueryInterface;
        });
    var ee = "popover",
        ne = i.default.fn[ee],
        ie = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        oe = a({}, te.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template:
                '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        re = a({}, te.DefaultType, { content: "(string|element|function)" }),
        ae = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover"
        },
        se = (function(t) {
            var e, n;
            function o() {
                return t.apply(this, arguments) || this;
            }
            (n = t),
                ((e = o).prototype = Object.create(n.prototype)),
                (e.prototype.constructor = e),
                (e.__proto__ = n);
            var a = o.prototype;
            return (
                (a.isWithContent = function() {
                    return this.getTitle() || this._getContent();
                }),
                (a.addAttachmentClass = function(t) {
                    i.default(this.getTipElement()).addClass("bs-popover-" + t);
                }),
                (a.getTipElement = function() {
                    return (
                        (this.tip =
                            this.tip || i.default(this.config.template)[0]),
                        this.tip
                    );
                }),
                (a.setContent = function() {
                    var t = i.default(this.getTipElement());
                    this.setElementContent(
                        t.find(".popover-header"),
                        this.getTitle()
                    );
                    var e = this._getContent();
                    "function" == typeof e && (e = e.call(this.element)),
                        this.setElementContent(t.find(".popover-body"), e),
                        t.removeClass("fade show");
                }),
                (a._getContent = function() {
                    return (
                        this.element.getAttribute("data-content") ||
                        this.config.content
                    );
                }),
                (a._cleanTipClass = function() {
                    var t = i.default(this.getTipElement()),
                        e = t.attr("class").match(ie);
                    null !== e && e.length > 0 && t.removeClass(e.join(""));
                }),
                (o._jQueryInterface = function(t) {
                    return this.each(function() {
                        var e = i.default(this).data("bs.popover"),
                            n = "object" == typeof t ? t : null;
                        if (
                            (e || !/dispose|hide/.test(t)) &&
                            (e ||
                                ((e = new o(this, n)),
                                i.default(this).data("bs.popover", e)),
                            "string" == typeof t)
                        ) {
                            if ("undefined" == typeof e[t])
                                throw new TypeError(
                                    'No method named "' + t + '"'
                                );
                            e[t]();
                        }
                    });
                }),
                r(o, null, [
                    {
                        key: "VERSION",
                        get: function() {
                            return "4.6.0";
                        }
                    },
                    {
                        key: "Default",
                        get: function() {
                            return oe;
                        }
                    },
                    {
                        key: "NAME",
                        get: function() {
                            return ee;
                        }
                    },
                    {
                        key: "DATA_KEY",
                        get: function() {
                            return "bs.popover";
                        }
                    },
                    {
                        key: "Event",
                        get: function() {
                            return ae;
                        }
                    },
                    {
                        key: "EVENT_KEY",
                        get: function() {
                            return ".bs.popover";
                        }
                    },
                    {
                        key: "DefaultType",
                        get: function() {
                            return re;
                        }
                    }
                ]),
                o
            );
        })(te);
    (i.default.fn[ee] = se._jQueryInterface),
        (i.default.fn[ee].Constructor = se),
        (i.default.fn[ee].noConflict = function() {
            return (i.default.fn[ee] = ne), se._jQueryInterface;
        });
    var le = "scrollspy",
        ue = i.default.fn[le],
        fe = { offset: 10, method: "auto", target: "" },
        de = { offset: "number", method: "string", target: "(string|element)" },
        ce = (function() {
            function t(t, e) {
                var n = this;
                (this._element = t),
                    (this._scrollElement = "BODY" === t.tagName ? window : t),
                    (this._config = this._getConfig(e)),
                    (this._selector =
                        this._config.target +
                        " .nav-link," +
                        this._config.target +
                        " .list-group-item," +
                        this._config.target +
                        " .dropdown-item"),
                    (this._offsets = []),
                    (this._targets = []),
                    (this._activeTarget = null),
                    (this._scrollHeight = 0),
                    i
                        .default(this._scrollElement)
                        .on("scroll.bs.scrollspy", function(t) {
                            return n._process(t);
                        }),
                    this.refresh(),
                    this._process();
            }
            var e = t.prototype;
            return (
                (e.refresh = function() {
                    var t = this,
                        e =
                            this._scrollElement === this._scrollElement.window
                                ? "offset"
                                : "position",
                        n =
                            "auto" === this._config.method
                                ? e
                                : this._config.method,
                        o = "position" === n ? this._getScrollTop() : 0;
                    (this._offsets = []),
                        (this._targets = []),
                        (this._scrollHeight = this._getScrollHeight()),
                        [].slice
                            .call(document.querySelectorAll(this._selector))
                            .map(function(t) {
                                var e,
                                    r = l.getSelectorFromElement(t);
                                if ((r && (e = document.querySelector(r)), e)) {
                                    var a = e.getBoundingClientRect();
                                    if (a.width || a.height)
                                        return [i.default(e)[n]().top + o, r];
                                }
                                return null;
                            })
                            .filter(function(t) {
                                return t;
                            })
                            .sort(function(t, e) {
                                return t[0] - e[0];
                            })
                            .forEach(function(e) {
                                t._offsets.push(e[0]), t._targets.push(e[1]);
                            });
                }),
                (e.dispose = function() {
                    i.default.removeData(this._element, "bs.scrollspy"),
                        i.default(this._scrollElement).off(".bs.scrollspy"),
                        (this._element = null),
                        (this._scrollElement = null),
                        (this._config = null),
                        (this._selector = null),
                        (this._offsets = null),
                        (this._targets = null),
                        (this._activeTarget = null),
                        (this._scrollHeight = null);
                }),
                (e._getConfig = function(t) {
                    if (
                        "string" !=
                            typeof (t = a(
                                {},
                                fe,
                                "object" == typeof t && t ? t : {}
                            )).target &&
                        l.isElement(t.target)
                    ) {
                        var e = i.default(t.target).attr("id");
                        e ||
                            ((e = l.getUID(le)),
                            i.default(t.target).attr("id", e)),
                            (t.target = "#" + e);
                    }
                    return l.typeCheckConfig(le, t, de), t;
                }),
                (e._getScrollTop = function() {
                    return this._scrollElement === window
                        ? this._scrollElement.pageYOffset
                        : this._scrollElement.scrollTop;
                }),
                (e._getScrollHeight = function() {
                    return (
                        this._scrollElement.scrollHeight ||
                        Math.max(
                            document.body.scrollHeight,
                            document.documentElement.scrollHeight
                        )
                    );
                }),
                (e._getOffsetHeight = function() {
                    return this._scrollElement === window
                        ? window.innerHeight
                        : this._scrollElement.getBoundingClientRect().height;
                }),
                (e._process = function() {
                    var t = this._getScrollTop() + this._config.offset,
                        e = this._getScrollHeight(),
                        n = this._config.offset + e - this._getOffsetHeight();
                    if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
                        var i = this._targets[this._targets.length - 1];
                        this._activeTarget !== i && this._activate(i);
                    } else {
                        if (
                            this._activeTarget &&
                            t < this._offsets[0] &&
                            this._offsets[0] > 0
                        )
                            return (
                                (this._activeTarget = null), void this._clear()
                            );
                        for (var o = this._offsets.length; o--; ) {
                            this._activeTarget !== this._targets[o] &&
                                t >= this._offsets[o] &&
                                ("undefined" == typeof this._offsets[o + 1] ||
                                    t < this._offsets[o + 1]) &&
                                this._activate(this._targets[o]);
                        }
                    }
                }),
                (e._activate = function(t) {
                    (this._activeTarget = t), this._clear();
                    var e = this._selector.split(",").map(function(e) {
                            return (
                                e +
                                '[data-target="' +
                                t +
                                '"],' +
                                e +
                                '[href="' +
                                t +
                                '"]'
                            );
                        }),
                        n = i.default(
                            [].slice.call(
                                document.querySelectorAll(e.join(","))
                            )
                        );
                    n.hasClass("dropdown-item")
                        ? (n
                              .closest(".dropdown")
                              .find(".dropdown-toggle")
                              .addClass("active"),
                          n.addClass("active"))
                        : (n.addClass("active"),
                          n
                              .parents(".nav, .list-group")
                              .prev(".nav-link, .list-group-item")
                              .addClass("active"),
                          n
                              .parents(".nav, .list-group")
                              .prev(".nav-item")
                              .children(".nav-link")
                              .addClass("active")),
                        i
                            .default(this._scrollElement)
                            .trigger("activate.bs.scrollspy", {
                                relatedTarget: t
                            });
                }),
                (e._clear = function() {
                    [].slice
                        .call(document.querySelectorAll(this._selector))
                        .filter(function(t) {
                            return t.classList.contains("active");
                        })
                        .forEach(function(t) {
                            return t.classList.remove("active");
                        });
                }),
                (t._jQueryInterface = function(e) {
                    return this.each(function() {
                        var n = i.default(this).data("bs.scrollspy");
                        if (
                            (n ||
                                ((n = new t(this, "object" == typeof e && e)),
                                i.default(this).data("bs.scrollspy", n)),
                            "string" == typeof e)
                        ) {
                            if ("undefined" == typeof n[e])
                                throw new TypeError(
                                    'No method named "' + e + '"'
                                );
                            n[e]();
                        }
                    });
                }),
                r(t, null, [
                    {
                        key: "VERSION",
                        get: function() {
                            return "4.6.0";
                        }
                    },
                    {
                        key: "Default",
                        get: function() {
                            return fe;
                        }
                    }
                ]),
                t
            );
        })();
    i.default(window).on("load.bs.scrollspy.data-api", function() {
        for (
            var t = [].slice.call(
                    document.querySelectorAll('[data-spy="scroll"]')
                ),
                e = t.length;
            e--;

        ) {
            var n = i.default(t[e]);
            ce._jQueryInterface.call(n, n.data());
        }
    }),
        (i.default.fn[le] = ce._jQueryInterface),
        (i.default.fn[le].Constructor = ce),
        (i.default.fn[le].noConflict = function() {
            return (i.default.fn[le] = ue), ce._jQueryInterface;
        });
    var he = i.default.fn.tab,
        pe = (function() {
            function t(t) {
                this._element = t;
            }
            var e = t.prototype;
            return (
                (e.show = function() {
                    var t = this;
                    if (
                        !(
                            (this._element.parentNode &&
                                this._element.parentNode.nodeType ===
                                    Node.ELEMENT_NODE &&
                                i.default(this._element).hasClass("active")) ||
                            i.default(this._element).hasClass("disabled")
                        )
                    ) {
                        var e,
                            n,
                            o = i
                                .default(this._element)
                                .closest(".nav, .list-group")[0],
                            r = l.getSelectorFromElement(this._element);
                        if (o) {
                            var a =
                                "UL" === o.nodeName || "OL" === o.nodeName
                                    ? "> li > .active"
                                    : ".active";
                            n = (n = i.default.makeArray(i.default(o).find(a)))[
                                n.length - 1
                            ];
                        }
                        var s = i.default.Event("hide.bs.tab", {
                                relatedTarget: this._element
                            }),
                            u = i.default.Event("show.bs.tab", {
                                relatedTarget: n
                            });
                        if (
                            (n && i.default(n).trigger(s),
                            i.default(this._element).trigger(u),
                            !u.isDefaultPrevented() && !s.isDefaultPrevented())
                        ) {
                            r && (e = document.querySelector(r)),
                                this._activate(this._element, o);
                            var f = function() {
                                var e = i.default.Event("hidden.bs.tab", {
                                        relatedTarget: t._element
                                    }),
                                    o = i.default.Event("shown.bs.tab", {
                                        relatedTarget: n
                                    });
                                i.default(n).trigger(e),
                                    i.default(t._element).trigger(o);
                            };
                            e ? this._activate(e, e.parentNode, f) : f();
                        }
                    }
                }),
                (e.dispose = function() {
                    i.default.removeData(this._element, "bs.tab"),
                        (this._element = null);
                }),
                (e._activate = function(t, e, n) {
                    var o = this,
                        r = (!e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
                            ? i.default(e).children(".active")
                            : i.default(e).find("> li > .active"))[0],
                        a = n && r && i.default(r).hasClass("fade"),
                        s = function() {
                            return o._transitionComplete(t, r, n);
                        };
                    if (r && a) {
                        var u = l.getTransitionDurationFromElement(r);
                        i.default(r)
                            .removeClass("show")
                            .one(l.TRANSITION_END, s)
                            .emulateTransitionEnd(u);
                    } else s();
                }),
                (e._transitionComplete = function(t, e, n) {
                    if (e) {
                        i.default(e).removeClass("active");
                        var o = i
                            .default(e.parentNode)
                            .find("> .dropdown-menu .active")[0];
                        o && i.default(o).removeClass("active"),
                            "tab" === e.getAttribute("role") &&
                                e.setAttribute("aria-selected", !1);
                    }
                    if (
                        (i.default(t).addClass("active"),
                        "tab" === t.getAttribute("role") &&
                            t.setAttribute("aria-selected", !0),
                        l.reflow(t),
                        t.classList.contains("fade") && t.classList.add("show"),
                        t.parentNode &&
                            i.default(t.parentNode).hasClass("dropdown-menu"))
                    ) {
                        var r = i.default(t).closest(".dropdown")[0];
                        if (r) {
                            var a = [].slice.call(
                                r.querySelectorAll(".dropdown-toggle")
                            );
                            i.default(a).addClass("active");
                        }
                        t.setAttribute("aria-expanded", !0);
                    }
                    n && n();
                }),
                (t._jQueryInterface = function(e) {
                    return this.each(function() {
                        var n = i.default(this),
                            o = n.data("bs.tab");
                        if (
                            (o || ((o = new t(this)), n.data("bs.tab", o)),
                            "string" == typeof e)
                        ) {
                            if ("undefined" == typeof o[e])
                                throw new TypeError(
                                    'No method named "' + e + '"'
                                );
                            o[e]();
                        }
                    });
                }),
                r(t, null, [
                    {
                        key: "VERSION",
                        get: function() {
                            return "4.6.0";
                        }
                    }
                ]),
                t
            );
        })();
    i
        .default(document)
        .on(
            "click.bs.tab.data-api",
            '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
            function(t) {
                t.preventDefault(),
                    pe._jQueryInterface.call(i.default(this), "show");
            }
        ),
        (i.default.fn.tab = pe._jQueryInterface),
        (i.default.fn.tab.Constructor = pe),
        (i.default.fn.tab.noConflict = function() {
            return (i.default.fn.tab = he), pe._jQueryInterface;
        });
    var me = i.default.fn.toast,
        ge = { animation: "boolean", autohide: "boolean", delay: "number" },
        ve = { animation: !0, autohide: !0, delay: 500 },
        _e = (function() {
            function t(t, e) {
                (this._element = t),
                    (this._config = this._getConfig(e)),
                    (this._timeout = null),
                    this._setListeners();
            }
            var e = t.prototype;
            return (
                (e.show = function() {
                    var t = this,
                        e = i.default.Event("show.bs.toast");
                    if (
                        (i.default(this._element).trigger(e),
                        !e.isDefaultPrevented())
                    ) {
                        this._clearTimeout(),
                            this._config.animation &&
                                this._element.classList.add("fade");
                        var n = function() {
                            t._element.classList.remove("showing"),
                                t._element.classList.add("show"),
                                i.default(t._element).trigger("shown.bs.toast"),
                                t._config.autohide &&
                                    (t._timeout = setTimeout(function() {
                                        t.hide();
                                    }, t._config.delay));
                        };
                        if (
                            (this._element.classList.remove("hide"),
                            l.reflow(this._element),
                            this._element.classList.add("showing"),
                            this._config.animation)
                        ) {
                            var o = l.getTransitionDurationFromElement(
                                this._element
                            );
                            i.default(this._element)
                                .one(l.TRANSITION_END, n)
                                .emulateTransitionEnd(o);
                        } else n();
                    }
                }),
                (e.hide = function() {
                    if (this._element.classList.contains("show")) {
                        var t = i.default.Event("hide.bs.toast");
                        i.default(this._element).trigger(t),
                            t.isDefaultPrevented() || this._close();
                    }
                }),
                (e.dispose = function() {
                    this._clearTimeout(),
                        this._element.classList.contains("show") &&
                            this._element.classList.remove("show"),
                        i.default(this._element).off("click.dismiss.bs.toast"),
                        i.default.removeData(this._element, "bs.toast"),
                        (this._element = null),
                        (this._config = null);
                }),
                (e._getConfig = function(t) {
                    return (
                        (t = a(
                            {},
                            ve,
                            i.default(this._element).data(),
                            "object" == typeof t && t ? t : {}
                        )),
                        l.typeCheckConfig(
                            "toast",
                            t,
                            this.constructor.DefaultType
                        ),
                        t
                    );
                }),
                (e._setListeners = function() {
                    var t = this;
                    i.default(this._element).on(
                        "click.dismiss.bs.toast",
                        '[data-dismiss="toast"]',
                        function() {
                            return t.hide();
                        }
                    );
                }),
                (e._close = function() {
                    var t = this,
                        e = function() {
                            t._element.classList.add("hide"),
                                i
                                    .default(t._element)
                                    .trigger("hidden.bs.toast");
                        };
                    if (
                        (this._element.classList.remove("show"),
                        this._config.animation)
                    ) {
                        var n = l.getTransitionDurationFromElement(
                            this._element
                        );
                        i.default(this._element)
                            .one(l.TRANSITION_END, e)
                            .emulateTransitionEnd(n);
                    } else e();
                }),
                (e._clearTimeout = function() {
                    clearTimeout(this._timeout), (this._timeout = null);
                }),
                (t._jQueryInterface = function(e) {
                    return this.each(function() {
                        var n = i.default(this),
                            o = n.data("bs.toast");
                        if (
                            (o ||
                                ((o = new t(this, "object" == typeof e && e)),
                                n.data("bs.toast", o)),
                            "string" == typeof e)
                        ) {
                            if ("undefined" == typeof o[e])
                                throw new TypeError(
                                    'No method named "' + e + '"'
                                );
                            o[e](this);
                        }
                    });
                }),
                r(t, null, [
                    {
                        key: "VERSION",
                        get: function() {
                            return "4.6.0";
                        }
                    },
                    {
                        key: "DefaultType",
                        get: function() {
                            return ge;
                        }
                    },
                    {
                        key: "Default",
                        get: function() {
                            return ve;
                        }
                    }
                ]),
                t
            );
        })();
    (i.default.fn.toast = _e._jQueryInterface),
        (i.default.fn.toast.Constructor = _e),
        (i.default.fn.toast.noConflict = function() {
            return (i.default.fn.toast = me), _e._jQueryInterface;
        }),
        (t.Alert = d),
        (t.Button = h),
        (t.Carousel = y),
        (t.Collapse = S),
        (t.Dropdown = Ft),
        (t.Modal = qt),
        (t.Popover = se),
        (t.Scrollspy = ce),
        (t.Tab = pe),
        (t.Toast = _e),
        (t.Tooltip = te),
        (t.Util = l),
        Object.defineProperty(t, "__esModule", { value: !0 });
});
//# sourceMappingURL=bootstrap.bundle.min.js.map

window.FontAwesomeKitConfig = {
    asyncLoading: { enabled: false },
    autoA11y: { enabled: true },
    baseUrl: "https://ka-f.fontawesome.com",
    baseUrlKit: "https://kit.fontawesome.com",
    detectConflictsUntil: null,
    iconUploads: {},
    id: 103879976,
    license: "free",
    method: "css",
    minify: { enabled: true },
    token: "5ea815c1d0",
    v4FontFaceShim: { enabled: true },
    v4shim: { enabled: true },
    version: "5.15.3"
};
!(function(t) {
    "function" == typeof define && define.amd ? define("kit-loader", t) : t();
})(function() {
    "use strict";
    function t(e) {
        return (t =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function(t) {
                      return typeof t;
                  }
                : function(t) {
                      return t &&
                          "function" == typeof Symbol &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? "symbol"
                          : typeof t;
                  })(e);
    }
    function e(t, e, n) {
        return (
            e in t
                ? Object.defineProperty(t, e, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[e] = n),
            t
        );
    }
    function n(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e &&
                (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })),
                n.push.apply(n, r);
        }
        return n;
    }
    function r(t) {
        for (var r = 1; r < arguments.length; r++) {
            var o = null != arguments[r] ? arguments[r] : {};
            r % 2
                ? n(Object(o), !0).forEach(function(n) {
                      e(t, n, o[n]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(o)
                  )
                : n(Object(o)).forEach(function(e) {
                      Object.defineProperty(
                          t,
                          e,
                          Object.getOwnPropertyDescriptor(o, e)
                      );
                  });
        }
        return t;
    }
    function o(t, e) {
        return (
            (function(t) {
                if (Array.isArray(t)) return t;
            })(t) ||
            (function(t, e) {
                if (
                    "undefined" == typeof Symbol ||
                    !(Symbol.iterator in Object(t))
                )
                    return;
                var n = [],
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (
                        var c, a = t[Symbol.iterator]();
                        !(r = (c = a.next()).done) &&
                        (n.push(c.value), !e || n.length !== e);
                        r = !0
                    );
                } catch (t) {
                    (o = !0), (i = t);
                } finally {
                    try {
                        r || null == a.return || a.return();
                    } finally {
                        if (o) throw i;
                    }
                }
                return n;
            })(t, e) ||
            (function(t, e) {
                if (!t) return;
                if ("string" == typeof t) return i(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === n && t.constructor && (n = t.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(t);
                if (
                    "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                )
                    return i(t, e);
            })(t, e) ||
            (function() {
                throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
            })()
        );
    }
    function i(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
    }
    function c(t, e) {
        var n = (e && e.addOn) || "",
            r = (e && e.baseFilename) || t.license + n,
            o = e && e.minify ? ".min" : "",
            i = (e && e.fileSuffix) || t.method,
            c = (e && e.subdir) || t.method;
        return (
            t.baseUrl +
            "/releases/" +
            ("latest" === t.version ? "latest" : "v".concat(t.version)) +
            "/" +
            c +
            "/" +
            r +
            o +
            "." +
            i
        );
    }
    function a(t) {
        return t.baseUrlKit + "/" + t.token + "/" + t.id + "/kit-upload.css";
    }
    function u(t, e) {
        var n = e || ["fa"],
            r = "." + Array.prototype.join.call(n, ",."),
            o = t.querySelectorAll(r);
        Array.prototype.forEach.call(o, function(e) {
            var n = e.getAttribute("title");
            e.setAttribute("aria-hidden", "true");
            var r =
                !e.nextElementSibling ||
                !e.nextElementSibling.classList.contains("sr-only");
            if (n && r) {
                var o = t.createElement("span");
                (o.innerHTML = n),
                    o.classList.add("sr-only"),
                    e.parentNode.insertBefore(o, e.nextSibling);
            }
        });
    }
    var f,
        s = function() {},
        d =
            "undefined" != typeof global &&
            void 0 !== global.process &&
            "function" == typeof global.process.emit,
        l = "undefined" == typeof setImmediate ? setTimeout : setImmediate,
        h = [];
    function m() {
        for (var t = 0; t < h.length; t++) h[t][0](h[t][1]);
        (h = []), (f = !1);
    }
    function p(t, e) {
        h.push([t, e]), f || ((f = !0), l(m, 0));
    }
    function y(t) {
        var e = t.owner,
            n = e._state,
            r = e._data,
            o = t[n],
            i = t.then;
        if ("function" == typeof o) {
            n = "fulfilled";
            try {
                r = o(r);
            } catch (t) {
                w(i, t);
            }
        }
        b(i, r) || ("fulfilled" === n && v(i, r), "rejected" === n && w(i, r));
    }
    function b(e, n) {
        var r;
        try {
            if (e === n)
                throw new TypeError(
                    "A promises callback cannot return that same promise."
                );
            if (n && ("function" == typeof n || "object" === t(n))) {
                var o = n.then;
                if ("function" == typeof o)
                    return (
                        o.call(
                            n,
                            function(t) {
                                r || ((r = !0), n === t ? g(e, t) : v(e, t));
                            },
                            function(t) {
                                r || ((r = !0), w(e, t));
                            }
                        ),
                        !0
                    );
            }
        } catch (t) {
            return r || w(e, t), !0;
        }
        return !1;
    }
    function v(t, e) {
        (t !== e && b(t, e)) || g(t, e);
    }
    function g(t, e) {
        "pending" === t._state &&
            ((t._state = "settled"), (t._data = e), p(S, t));
    }
    function w(t, e) {
        "pending" === t._state &&
            ((t._state = "settled"), (t._data = e), p(O, t));
    }
    function A(t) {
        t._then = t._then.forEach(y);
    }
    function S(t) {
        (t._state = "fulfilled"), A(t);
    }
    function O(t) {
        (t._state = "rejected"),
            A(t),
            !t._handled &&
                d &&
                global.process.emit("unhandledRejection", t._data, t);
    }
    function j(t) {
        global.process.emit("rejectionHandled", t);
    }
    function E(t) {
        if ("function" != typeof t)
            throw new TypeError("Promise resolver " + t + " is not a function");
        if (this instanceof E == !1)
            throw new TypeError(
                "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
            );
        (this._then = []),
            (function(t, e) {
                function n(t) {
                    w(e, t);
                }
                try {
                    t(function(t) {
                        v(e, t);
                    }, n);
                } catch (t) {
                    n(t);
                }
            })(t, this);
    }
    (E.prototype = {
        constructor: E,
        _state: "pending",
        _then: null,
        _data: void 0,
        _handled: !1,
        then: function(t, e) {
            var n = {
                owner: this,
                then: new this.constructor(s),
                fulfilled: t,
                rejected: e
            };
            return (
                (!e && !t) ||
                    this._handled ||
                    ((this._handled = !0),
                    "rejected" === this._state && d && p(j, this)),
                "fulfilled" === this._state || "rejected" === this._state
                    ? p(y, n)
                    : this._then.push(n),
                n.then
            );
        },
        catch: function(t) {
            return this.then(null, t);
        }
    }),
        (E.all = function(t) {
            if (!Array.isArray(t))
                throw new TypeError("You must pass an array to Promise.all().");
            return new E(function(e, n) {
                var r = [],
                    o = 0;
                function i(t) {
                    return (
                        o++,
                        function(n) {
                            (r[t] = n), --o || e(r);
                        }
                    );
                }
                for (var c, a = 0; a < t.length; a++)
                    (c = t[a]) && "function" == typeof c.then
                        ? c.then(i(a), n)
                        : (r[a] = c);
                o || e(r);
            });
        }),
        (E.race = function(t) {
            if (!Array.isArray(t))
                throw new TypeError(
                    "You must pass an array to Promise.race()."
                );
            return new E(function(e, n) {
                for (var r, o = 0; o < t.length; o++)
                    (r = t[o]) && "function" == typeof r.then
                        ? r.then(e, n)
                        : e(r);
            });
        }),
        (E.resolve = function(e) {
            return e && "object" === t(e) && e.constructor === E
                ? e
                : new E(function(t) {
                      t(e);
                  });
        }),
        (E.reject = function(t) {
            return new E(function(e, n) {
                n(t);
            });
        });
    var _ = "function" == typeof Promise ? Promise : E;
    function P(t, e) {
        var n = e.fetch,
            r = e.XMLHttpRequest,
            o = e.token,
            i = t;
        return (
            "URLSearchParams" in window
                ? (i = new URL(t)).searchParams.set("token", o)
                : (i = i + "?token=" + encodeURIComponent(o)),
            (i = i.toString()),
            new _(function(t, e) {
                if ("function" == typeof n)
                    n(i, { mode: "cors", cache: "default" })
                        .then(function(t) {
                            if (t.ok) return t.text();
                            throw new Error("");
                        })
                        .then(function(e) {
                            t(e);
                        })
                        .catch(e);
                else if ("function" == typeof r) {
                    var o = new r();
                    o.addEventListener("loadend", function() {
                        this.responseText
                            ? t(this.responseText)
                            : e(new Error(""));
                    });
                    ["abort", "error", "timeout"].map(function(t) {
                        o.addEventListener(t, function() {
                            e(new Error(""));
                        });
                    }),
                        o.open("GET", i),
                        o.send();
                } else {
                    e(new Error(""));
                }
            })
        );
    }
    function C(t, e, n) {
        var r = t;
        return (
            [
                [
                    /(url\("?)\.\.\/\.\.\/\.\./g,
                    function(t, n) {
                        return "".concat(n).concat(e);
                    }
                ],
                [
                    /(url\("?)\.\.\/webfonts/g,
                    function(t, r) {
                        return ""
                            .concat(r)
                            .concat(e, "/releases/v")
                            .concat(n, "/webfonts");
                    }
                ],
                [
                    /(url\("?)https:\/\/kit-free([^.])*\.fontawesome\.com/g,
                    function(t, n) {
                        return "".concat(n).concat(e);
                    }
                ]
            ].forEach(function(t) {
                var e = o(t, 2),
                    n = e[0],
                    i = e[1];
                r = r.replace(n, i);
            }),
            r
        );
    }
    function F(t, e) {
        var n =
                arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : function() {},
            o = e.document || o,
            i = u.bind(u, o, ["fa", "fab", "fas", "far", "fal", "fad", "fak"]),
            f = Object.keys(t.iconUploads || {}).length > 0;
        t.autoA11y.enabled && n(i);
        var s = [{ id: "fa-main", addOn: void 0 }];
        t.v4shim.enabled && s.push({ id: "fa-v4-shims", addOn: "-v4-shims" }),
            t.v4FontFaceShim.enabled &&
                s.push({ id: "fa-v4-font-face", addOn: "-v4-font-face" }),
            f && s.push({ id: "fa-kit-upload", customCss: !0 });
        var d = s.map(function(n) {
            return new _(function(o, i) {
                P(
                    n.customCss
                        ? a(t)
                        : c(t, { addOn: n.addOn, minify: t.minify.enabled }),
                    e
                )
                    .then(function(i) {
                        o(
                            U(
                                i,
                                r(
                                    r({}, e),
                                    {},
                                    {
                                        baseUrl: t.baseUrl,
                                        version: t.version,
                                        id: n.id,
                                        contentFilter: function(t, e) {
                                            return C(t, e.baseUrl, e.version);
                                        }
                                    }
                                )
                            )
                        );
                    })
                    .catch(i);
            });
        });
        return _.all(d);
    }
    function U(t, e) {
        var n =
                e.contentFilter ||
                function(t, e) {
                    return t;
                },
            r = document.createElement("style"),
            o = document.createTextNode(n(t, e));
        return (
            r.appendChild(o),
            (r.media = "all"),
            e.id && r.setAttribute("id", e.id),
            e &&
                e.detectingConflicts &&
                e.detectionIgnoreAttr &&
                r.setAttributeNode(
                    document.createAttribute(e.detectionIgnoreAttr)
                ),
            r
        );
    }
    function k(t, e) {
        (e.autoA11y = t.autoA11y.enabled),
            "pro" === t.license &&
                ((e.autoFetchSvg = !0),
                (e.fetchSvgFrom =
                    t.baseUrl +
                    "/releases/" +
                    ("latest" === t.version
                        ? "latest"
                        : "v".concat(t.version)) +
                    "/svgs"),
                (e.fetchUploadedSvgFrom = t.uploadsUrl));
        var n = [];
        return (
            t.v4shim.enabled &&
                n.push(
                    new _(function(n, o) {
                        P(
                            c(t, {
                                addOn: "-v4-shims",
                                minify: t.minify.enabled
                            }),
                            e
                        )
                            .then(function(t) {
                                n(I(t, r(r({}, e), {}, { id: "fa-v4-shims" })));
                            })
                            .catch(o);
                    })
                ),
            n.push(
                new _(function(n, o) {
                    P(c(t, { minify: t.minify.enabled }), e)
                        .then(function(t) {
                            var o = I(t, r(r({}, e), {}, { id: "fa-main" }));
                            n(
                                (function(t, e) {
                                    var n =
                                            e && void 0 !== e.autoFetchSvg
                                                ? e.autoFetchSvg
                                                : void 0,
                                        r =
                                            e && void 0 !== e.autoA11y
                                                ? e.autoA11y
                                                : void 0;
                                    void 0 !== r &&
                                        t.setAttribute(
                                            "data-auto-a11y",
                                            r ? "true" : "false"
                                        );
                                    n &&
                                        (t.setAttributeNode(
                                            document.createAttribute(
                                                "data-auto-fetch-svg"
                                            )
                                        ),
                                        t.setAttribute(
                                            "data-fetch-svg-from",
                                            e.fetchSvgFrom
                                        ),
                                        t.setAttribute(
                                            "data-fetch-uploaded-svg-from",
                                            e.fetchUploadedSvgFrom
                                        ));
                                    return t;
                                })(o, e)
                            );
                        })
                        .catch(o);
                })
            ),
            _.all(n)
        );
    }
    function I(t, e) {
        var n = document.createElement("SCRIPT"),
            r = document.createTextNode(t);
        return (
            n.appendChild(r),
            (n.referrerPolicy = "strict-origin"),
            e.id && n.setAttribute("id", e.id),
            e &&
                e.detectingConflicts &&
                e.detectionIgnoreAttr &&
                n.setAttributeNode(
                    document.createAttribute(e.detectionIgnoreAttr)
                ),
            n
        );
    }
    function L(t) {
        var e,
            n = [],
            r = document,
            o = r.documentElement.doScroll,
            i = (o ? /^loaded|^c/ : /^loaded|^i|^c/).test(r.readyState);
        i ||
            r.addEventListener(
                "DOMContentLoaded",
                (e = function() {
                    for (
                        r.removeEventListener("DOMContentLoaded", e), i = 1;
                        (e = n.shift());

                    )
                        e();
                })
            ),
            i ? setTimeout(t, 0) : n.push(t);
    }
    function T(t) {
        "undefined" != typeof MutationObserver &&
            new MutationObserver(t).observe(document, {
                childList: !0,
                subtree: !0
            });
    }
    try {
        if (window.FontAwesomeKitConfig) {
            var x = window.FontAwesomeKitConfig,
                M = {
                    detectingConflicts:
                        x.detectConflictsUntil &&
                        new Date() <= new Date(x.detectConflictsUntil),
                    detectionIgnoreAttr: "data-fa-detection-ignore",
                    fetch: window.fetch,
                    token: x.token,
                    XMLHttpRequest: window.XMLHttpRequest,
                    document: document
                },
                D = document.currentScript,
                N = D ? D.parentElement : document.head;
            (function() {
                var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {},
                    e =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {};
                return "js" === t.method
                    ? k(t, e)
                    : "css" === t.method
                    ? F(t, e, function(t) {
                          L(t), T(t);
                      })
                    : void 0;
            })(x, M)
                .then(function(t) {
                    t.map(function(t) {
                        try {
                            N.insertBefore(t, D ? D.nextSibling : null);
                        } catch (e) {
                            N.appendChild(t);
                        }
                    }),
                        M.detectingConflicts &&
                            D &&
                            L(function() {
                                D.setAttributeNode(
                                    document.createAttribute(
                                        M.detectionIgnoreAttr
                                    )
                                );
                                var t = (function(t, e) {
                                    var n = document.createElement("script");
                                    return (
                                        e &&
                                            e.detectionIgnoreAttr &&
                                            n.setAttributeNode(
                                                document.createAttribute(
                                                    e.detectionIgnoreAttr
                                                )
                                            ),
                                        (n.src = c(t, {
                                            baseFilename: "conflict-detection",
                                            fileSuffix: "js",
                                            subdir: "js",
                                            minify: t.minify.enabled
                                        })),
                                        n
                                    );
                                })(x, M);
                                document.body.appendChild(t);
                            });
                })
                .catch(function(t) {
                    console.error(
                        "".concat("Font Awesome Kit:", " ").concat(t)
                    );
                });
        }
    } catch (t) {
        console.error("".concat("Font Awesome Kit:", " ").concat(t));
    }
});

/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by HernÃ¡n Sartorio  */
!(function (e) {
  e.fn.niceSelect = function (t) {
    function s(t) {
      t.after(
        e("<div></div>")
          .addClass("nice-select")
          .addClass(t.attr("class") || "")
          .addClass(t.attr("disabled") ? "disabled" : "")
          .attr("tabindex", t.attr("disabled") ? null : "0")
          .html('<span class="current"></span><ul class="list"></ul>')
      );
      var s = t.next(),
        n = t.find("option"),
        i = t.find("option:selected");
      s.find(".current").html(i.data("display") || i.text()),
        n.each(function (t) {
          var n = e(this),
            i = n.data("display");
          s.find("ul").append(
            e("<li></li>")
              .attr("data-value", n.val())
              .attr("data-display", i || null)
              .addClass(
                "option" +
                  (n.is(":selected") ? " selected" : "") +
                  (n.is(":disabled") ? " disabled" : "")
              )
              .html(n.text())
          );
        });
    }
    if ("string" == typeof t)
      return (
        "update" == t
          ? this.each(function () {
              var t = e(this),
                n = e(this).next(".nice-select"),
                i = n.hasClass("open");
              n.length && (n.remove(), s(t), i && t.next().trigger("click"));
            })
          : "destroy" == t
          ? (this.each(function () {
              var t = e(this),
                s = e(this).next(".nice-select");
              s.length && (s.remove(), t.css("display", ""));
            }),
            0 == e(".nice-select").length && e(document).off(".nice_select"))
          : console.log('Method "' + t + '" does not exist.'),
        this
      );
    this.hide(),
      this.each(function () {
        var t = e(this);
        t.next().hasClass("nice-select") || s(t);
      }),
      e(document).off(".nice_select"),
      e(document).on("click.nice_select", ".nice-select", function (t) {
        var s = e(this);
        e(".nice-select").not(s).removeClass("open"),
          s.toggleClass("open"),
          s.hasClass("open")
            ? (s.find(".option"),
              s.find(".focus").removeClass("focus"),
              s.find(".selected").addClass("focus"))
            : s.focus();
      }),
      e(document).on("click.nice_select", function (t) {
        0 === e(t.target).closest(".nice-select").length &&
          e(".nice-select").removeClass("open").find(".option");
      }),
      e(document).on(
        "click.nice_select",
        ".nice-select .option:not(.disabled)",
        function (t) {
          var s = e(this),
            n = s.closest(".nice-select");
          n.find(".selected").removeClass("selected"), s.addClass("selected");
          var i = s.data("display") || s.text();
          n.find(".current").text(i),
            n.prev("select").val(s.data("value")).trigger("change");
        }
      ),
      e(document).on("keydown.nice_select", ".nice-select", function (t) {
        var s = e(this),
          n = e(s.find(".focus") || s.find(".list .option.selected"));
        if (32 == t.keyCode || 13 == t.keyCode)
          return (
            s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1
          );
        if (40 == t.keyCode) {
          if (s.hasClass("open")) {
            var i = n.nextAll(".option:not(.disabled)").first();
            i.length > 0 &&
              (s.find(".focus").removeClass("focus"), i.addClass("focus"));
          } else s.trigger("click");
          return !1;
        }
        if (38 == t.keyCode) {
          if (s.hasClass("open")) {
            var l = n.prevAll(".option:not(.disabled)").first();
            l.length > 0 &&
              (s.find(".focus").removeClass("focus"), l.addClass("focus"));
          } else s.trigger("click");
          return !1;
        }
        if (27 == t.keyCode) s.hasClass("open") && s.trigger("click");
        else if (9 == t.keyCode && s.hasClass("open")) return !1;
      });
    var n = document.createElement("a").style;
    return (
      (n.cssText = "pointer-events:auto"),
      "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"),
      this
    );
  };
})(jQuery);

/* jquery.nicescroll v3.7.6 InuYaksa - MIT - https://nicescroll.areaaperta.com */
!(function(e) {
    "function" == typeof define && define.amd
        ? define(["jquery"], e)
        : "object" == typeof exports
        ? (module.exports = e(require("jquery")))
        : e(jQuery);
})(function(e) {
    "use strict";
    var o = !1,
        t = !1,
        r = 0,
        i = 2e3,
        s = 0,
        n = e,
        l = document,
        a = window,
        c = n(a),
        d = [],
        u =
            a.requestAnimationFrame ||
            a.webkitRequestAnimationFrame ||
            a.mozRequestAnimationFrame ||
            !1,
        h =
            a.cancelAnimationFrame ||
            a.webkitCancelAnimationFrame ||
            a.mozCancelAnimationFrame ||
            !1;
    if (u) a.cancelAnimationFrame || (h = function(e) {});
    else {
        var p = 0;
        (u = function(e, o) {
            var t = new Date().getTime(),
                r = Math.max(0, 16 - (t - p)),
                i = a.setTimeout(function() {
                    e(t + r);
                }, r);
            return (p = t + r), i;
        }),
            (h = function(e) {
                a.clearTimeout(e);
            });
    }
    var m = a.MutationObserver || a.WebKitMutationObserver || !1,
        f =
            Date.now ||
            function() {
                return new Date().getTime();
            },
        g = {
            zindex: "auto",
            cursoropacitymin: 0,
            cursoropacitymax: 1,
            cursorcolor: "#424242",
            cursorwidth: "6px",
            cursorborder: "1px solid #fff",
            cursorborderradius: "5px",
            scrollspeed: 40,
            mousescrollstep: 27,
            touchbehavior: !1,
            emulatetouch: !1,
            hwacceleration: !0,
            usetransition: !0,
            boxzoom: !1,
            dblclickzoom: !0,
            gesturezoom: !0,
            grabcursorenabled: !0,
            autohidemode: !0,
            background: "",
            iframeautoresize: !0,
            cursorminheight: 32,
            preservenativescrolling: !0,
            railoffset: !1,
            railhoffset: !1,
            bouncescroll: !0,
            spacebarenabled: !0,
            railpadding: { top: 0, right: 0, left: 0, bottom: 0 },
            disableoutline: !0,
            horizrailenabled: !0,
            railalign: "right",
            railvalign: "bottom",
            enabletranslate3d: !0,
            enablemousewheel: !0,
            enablekeyboard: !0,
            smoothscroll: !0,
            sensitiverail: !0,
            enablemouselockapi: !0,
            cursorfixedheight: !1,
            directionlockdeadzone: 6,
            hidecursordelay: 400,
            nativeparentscrolling: !0,
            enablescrollonselection: !0,
            overflowx: !0,
            overflowy: !0,
            cursordragspeed: 0.3,
            rtlmode: "auto",
            cursordragontouch: !1,
            oneaxismousemode: "auto",
            scriptpath: (function() {
                var e =
                        l.currentScript ||
                        (function() {
                            var e = l.getElementsByTagName("script");
                            return !!e.length && e[e.length - 1];
                        })(),
                    o = e ? e.src.split("?")[0] : "";
                return o.split("/").length > 0
                    ? o
                          .split("/")
                          .slice(0, -1)
                          .join("/") + "/"
                    : "";
            })(),
            preventmultitouchscrolling: !0,
            disablemutationobserver: !1,
            enableobserver: !0,
            scrollbarid: !1
        },
        v = !1,
        w = function() {
            if (v) return v;
            var e = l.createElement("DIV"),
                o = e.style,
                t = navigator.userAgent,
                r = navigator.platform,
                i = {};
            return (
                (i.haspointerlock =
                    "pointerLockElement" in l ||
                    "webkitPointerLockElement" in l ||
                    "mozPointerLockElement" in l),
                (i.isopera = "opera" in a),
                (i.isopera12 = i.isopera && "getUserMedia" in navigator),
                (i.isoperamini =
                    "[object OperaMini]" ===
                    Object.prototype.toString.call(a.operamini)),
                (i.isie = "all" in l && "attachEvent" in e && !i.isopera),
                (i.isieold = i.isie && !("msInterpolationMode" in o)),
                (i.isie7 =
                    i.isie &&
                    !i.isieold &&
                    (!("documentMode" in l) || 7 === l.documentMode)),
                (i.isie8 =
                    i.isie && "documentMode" in l && 8 === l.documentMode),
                (i.isie9 =
                    i.isie && "performance" in a && 9 === l.documentMode),
                (i.isie10 =
                    i.isie && "performance" in a && 10 === l.documentMode),
                (i.isie11 = "msRequestFullscreen" in e && l.documentMode >= 11),
                (i.ismsedge = "msCredentials" in a),
                (i.ismozilla = "MozAppearance" in o),
                (i.iswebkit = !i.ismsedge && "WebkitAppearance" in o),
                (i.ischrome = i.iswebkit && "chrome" in a),
                (i.ischrome38 = i.ischrome && "touchAction" in o),
                (i.ischrome22 =
                    !i.ischrome38 && i.ischrome && i.haspointerlock),
                (i.ischrome26 =
                    !i.ischrome38 && i.ischrome && "transition" in o),
                (i.cantouch =
                    "ontouchstart" in l.documentElement || "ontouchstart" in a),
                (i.hasw3ctouch =
                    (a.PointerEvent || !1) &&
                    (navigator.maxTouchPoints > 0 ||
                        navigator.msMaxTouchPoints > 0)),
                (i.hasmstouch = !i.hasw3ctouch && (a.MSPointerEvent || !1)),
                (i.ismac = /^mac$/i.test(r)),
                (i.isios = i.cantouch && /iphone|ipad|ipod/i.test(r)),
                (i.isios4 = i.isios && !("seal" in Object)),
                (i.isios7 = i.isios && "webkitHidden" in l),
                (i.isios8 = i.isios && "hidden" in l),
                (i.isios10 = i.isios && a.Proxy),
                (i.isandroid = /android/i.test(t)),
                (i.haseventlistener = "addEventListener" in e),
                (i.trstyle = !1),
                (i.hastransform = !1),
                (i.hastranslate3d = !1),
                (i.transitionstyle = !1),
                (i.hastransition = !1),
                (i.transitionend = !1),
                (i.trstyle = "transform"),
                (i.hastransform =
                    "transform" in o ||
                    (function() {
                        for (
                            var e = [
                                    "msTransform",
                                    "webkitTransform",
                                    "MozTransform",
                                    "OTransform"
                                ],
                                t = 0,
                                r = e.length;
                            t < r;
                            t++
                        )
                            if (void 0 !== o[e[t]]) {
                                i.trstyle = e[t];
                                break;
                            }
                        i.hastransform = !!i.trstyle;
                    })()),
                i.hastransform &&
                    ((o[i.trstyle] = "translate3d(1px,2px,3px)"),
                    (i.hastranslate3d = /translate3d/.test(o[i.trstyle]))),
                (i.transitionstyle = "transition"),
                (i.prefixstyle = ""),
                (i.transitionend = "transitionend"),
                (i.hastransition =
                    "transition" in o ||
                    (function() {
                        i.transitionend = !1;
                        for (
                            var e = [
                                    "webkitTransition",
                                    "msTransition",
                                    "MozTransition",
                                    "OTransition",
                                    "OTransition",
                                    "KhtmlTransition"
                                ],
                                t = [
                                    "-webkit-",
                                    "-ms-",
                                    "-moz-",
                                    "-o-",
                                    "-o",
                                    "-khtml-"
                                ],
                                r = [
                                    "webkitTransitionEnd",
                                    "msTransitionEnd",
                                    "transitionend",
                                    "otransitionend",
                                    "oTransitionEnd",
                                    "KhtmlTransitionEnd"
                                ],
                                s = 0,
                                n = e.length;
                            s < n;
                            s++
                        )
                            if (e[s] in o) {
                                (i.transitionstyle = e[s]),
                                    (i.prefixstyle = t[s]),
                                    (i.transitionend = r[s]);
                                break;
                            }
                        i.ischrome26 && (i.prefixstyle = t[1]),
                            (i.hastransition = i.transitionstyle);
                    })()),
                (i.cursorgrabvalue = (function() {
                    var e = ["grab", "-webkit-grab", "-moz-grab"];
                    ((i.ischrome && !i.ischrome38) || i.isie) && (e = []);
                    for (var t = 0, r = e.length; t < r; t++) {
                        var s = e[t];
                        if (((o.cursor = s), o.cursor == s)) return s;
                    }
                    return "url(https://cdnjs.cloudflare.com/ajax/libs/slider-pro/1.3.0/css/images/openhand.cur),n-resize";
                })()),
                (i.hasmousecapture = "setCapture" in e),
                (i.hasMutationObserver = !1 !== m),
                (e = null),
                (v = i),
                i
            );
        },
        b = function(e, p) {
            function v() {
                var e = T.doc.css(P.trstyle);
                return (
                    !(!e || "matrix" != e.substr(0, 6)) &&
                    e
                        .replace(/^.*\((.*)\)$/g, "$1")
                        .replace(/px/g, "")
                        .split(/, +/)
                );
            }
            function b() {
                var e = T.win;
                if ("zIndex" in e) return e.zIndex();
                for (; e.length > 0; ) {
                    if (9 == e[0].nodeType) return !1;
                    var o = e.css("zIndex");
                    if (!isNaN(o) && 0 !== o) return parseInt(o);
                    e = e.parent();
                }
                return !1;
            }
            function x(e, o, t) {
                var r = e.css(o),
                    i = parseFloat(r);
                if (isNaN(i)) {
                    var s =
                        3 == (i = I[r] || 0)
                            ? t
                                ? T.win.outerHeight() - T.win.innerHeight()
                                : T.win.outerWidth() - T.win.innerWidth()
                            : 1;
                    return T.isie8 && i && (i += 1), s ? i : 0;
                }
                return i;
            }
            function S(e, o, t, r) {
                T._bind(
                    e,
                    o,
                    function(r) {
                        var i = {
                            original: (r = r || a.event),
                            target: r.target || r.srcElement,
                            type: "wheel",
                            deltaMode: "MozMousePixelScroll" == r.type ? 0 : 1,
                            deltaX: 0,
                            deltaZ: 0,
                            preventDefault: function() {
                                return (
                                    r.preventDefault
                                        ? r.preventDefault()
                                        : (r.returnValue = !1),
                                    !1
                                );
                            },
                            stopImmediatePropagation: function() {
                                r.stopImmediatePropagation
                                    ? r.stopImmediatePropagation()
                                    : (r.cancelBubble = !0);
                            }
                        };
                        return (
                            "mousewheel" == o
                                ? (r.wheelDeltaX &&
                                      (i.deltaX = -0.025 * r.wheelDeltaX),
                                  r.wheelDeltaY &&
                                      (i.deltaY = -0.025 * r.wheelDeltaY),
                                  !i.deltaY &&
                                      !i.deltaX &&
                                      (i.deltaY = -0.025 * r.wheelDelta))
                                : (i.deltaY = r.detail),
                            t.call(e, i)
                        );
                    },
                    r
                );
            }
            function z(e, o, t, r) {
                T.scrollrunning ||
                    ((T.newscrolly = T.getScrollTop()),
                    (T.newscrollx = T.getScrollLeft()),
                    (D = f()));
                var i = f() - D;
                if (
                    ((D = f()),
                    i > 350 ? (A = 1) : (A += (2 - A) / 10),
                    (e = (e * A) | 0),
                    (o = (o * A) | 0),
                    e)
                ) {
                    if (r)
                        if (e < 0) {
                            if (T.getScrollLeft() >= T.page.maxw) return !0;
                        } else if (T.getScrollLeft() <= 0) return !0;
                    var s = e > 0 ? 1 : -1;
                    X !== s &&
                        (T.scrollmom && T.scrollmom.stop(),
                        (T.newscrollx = T.getScrollLeft()),
                        (X = s)),
                        (T.lastdeltax -= e);
                }
                if (o) {
                    if (
                        (function() {
                            var e = T.getScrollTop();
                            if (o < 0) {
                                if (e >= T.page.maxh) return !0;
                            } else if (e <= 0) return !0;
                        })()
                    ) {
                        if (
                            M.nativeparentscrolling &&
                            t &&
                            !T.ispage &&
                            !T.zoomactive
                        )
                            return !0;
                        var n = T.view.h >> 1;
                        T.newscrolly < -n
                            ? ((T.newscrolly = -n), (o = -1))
                            : T.newscrolly > T.page.maxh + n
                            ? ((T.newscrolly = T.page.maxh + n), (o = 1))
                            : (o = 0);
                    }
                    var l = o > 0 ? 1 : -1;
                    B !== l &&
                        (T.scrollmom && T.scrollmom.stop(),
                        (T.newscrolly = T.getScrollTop()),
                        (B = l)),
                        (T.lastdeltay -= o);
                }
                (o || e) &&
                    T.synched("relativexy", function() {
                        var e = T.lastdeltay + T.newscrolly;
                        T.lastdeltay = 0;
                        var o = T.lastdeltax + T.newscrollx;
                        (T.lastdeltax = 0), T.rail.drag || T.doScrollPos(o, e);
                    });
            }
            function k(e, o, t) {
                var r, i;
                return (
                    !(t || !q) ||
                    (0 === e.deltaMode
                        ? ((r = (-e.deltaX * (M.mousescrollstep / 54)) | 0),
                          (i = (-e.deltaY * (M.mousescrollstep / 54)) | 0))
                        : 1 === e.deltaMode &&
                          ((r =
                              ((-e.deltaX * M.mousescrollstep * 50) / 80) | 0),
                          (i =
                              ((-e.deltaY * M.mousescrollstep * 50) / 80) | 0)),
                    o &&
                        M.oneaxismousemode &&
                        0 === r &&
                        i &&
                        ((r = i),
                        (i = 0),
                        t &&
                            (r < 0
                                ? T.getScrollLeft() >= T.page.maxw
                                : T.getScrollLeft() <= 0) &&
                            ((i = r), (r = 0))),
                    T.isrtlmode && (r = -r),
                    z(r, i, t, !0)
                        ? void (t && (q = !0))
                        : ((q = !1),
                          e.stopImmediatePropagation(),
                          e.preventDefault()))
                );
            }
            var T = this;
            (this.version = "3.7.6"), (this.name = "nicescroll"), (this.me = p);
            var E = n("body"),
                M = (this.opt = { doc: E, win: !1 });
            if ((n.extend(M, g), (M.snapbackspeed = 80), e))
                for (var L in M) void 0 !== e[L] && (M[L] = e[L]);
            if (
                (M.disablemutationobserver && (m = !1),
                (this.doc = M.doc),
                (this.iddoc =
                    this.doc && this.doc[0] ? this.doc[0].id || "" : ""),
                (this.ispage = /^BODY|HTML/.test(
                    M.win ? M.win[0].nodeName : this.doc[0].nodeName
                )),
                (this.haswrapper = !1 !== M.win),
                (this.win = M.win || (this.ispage ? c : this.doc)),
                (this.docscroll =
                    this.ispage && !this.haswrapper ? c : this.win),
                (this.body = E),
                (this.viewport = !1),
                (this.isfixed = !1),
                (this.iframe = !1),
                (this.isiframe =
                    "IFRAME" == this.doc[0].nodeName &&
                    "IFRAME" == this.win[0].nodeName),
                (this.istextarea = "TEXTAREA" == this.win[0].nodeName),
                (this.forcescreen = !1),
                (this.canshowonmouseevent = "scroll" != M.autohidemode),
                (this.onmousedown = !1),
                (this.onmouseup = !1),
                (this.onmousemove = !1),
                (this.onmousewheel = !1),
                (this.onkeypress = !1),
                (this.ongesturezoom = !1),
                (this.onclick = !1),
                (this.onscrollstart = !1),
                (this.onscrollend = !1),
                (this.onscrollcancel = !1),
                (this.onzoomin = !1),
                (this.onzoomout = !1),
                (this.view = !1),
                (this.page = !1),
                (this.scroll = { x: 0, y: 0 }),
                (this.scrollratio = { x: 0, y: 0 }),
                (this.cursorheight = 20),
                (this.scrollvaluemax = 0),
                "auto" == M.rtlmode)
            ) {
                var C = this.win[0] == a ? this.body : this.win,
                    N =
                        C.css("writing-mode") ||
                        C.css("-webkit-writing-mode") ||
                        C.css("-ms-writing-mode") ||
                        C.css("-moz-writing-mode");
                "horizontal-tb" == N || "lr-tb" == N || "" === N
                    ? ((this.isrtlmode = "rtl" == C.css("direction")),
                      (this.isvertical = !1))
                    : ((this.isrtlmode =
                          "vertical-rl" == N ||
                          "tb" == N ||
                          "tb-rl" == N ||
                          "rl-tb" == N),
                      (this.isvertical =
                          "vertical-rl" == N || "tb" == N || "tb-rl" == N));
            } else (this.isrtlmode = !0 === M.rtlmode), (this.isvertical = !1);
            if (
                ((this.scrollrunning = !1),
                (this.scrollmom = !1),
                (this.observer = !1),
                (this.observerremover = !1),
                (this.observerbody = !1),
                !1 !== M.scrollbarid)
            )
                this.id = M.scrollbarid;
            else
                do {
                    this.id = "ascrail" + i++;
                } while (l.getElementById(this.id));
            (this.rail = !1),
                (this.cursor = !1),
                (this.cursorfreezed = !1),
                (this.selectiondrag = !1),
                (this.zoom = !1),
                (this.zoomactive = !1),
                (this.hasfocus = !1),
                (this.hasmousefocus = !1),
                (this.railslocked = !1),
                (this.locked = !1),
                (this.hidden = !1),
                (this.cursoractive = !0),
                (this.wheelprevented = !1),
                (this.overflowx = M.overflowx),
                (this.overflowy = M.overflowy),
                (this.nativescrollingarea = !1),
                (this.checkarea = 0),
                (this.events = []),
                (this.saved = {}),
                (this.delaylist = {}),
                (this.synclist = {}),
                (this.lastdeltax = 0),
                (this.lastdeltay = 0),
                (this.detected = w());
            var P = n.extend({}, this.detected);
            (this.canhwscroll = P.hastransform && M.hwacceleration),
                (this.ishwscroll = this.canhwscroll && T.haswrapper),
                this.isrtlmode
                    ? this.isvertical
                        ? (this.hasreversehr = !(
                              P.iswebkit ||
                              P.isie ||
                              P.isie11
                          ))
                        : (this.hasreversehr = !(
                              P.iswebkit ||
                              (P.isie && !P.isie10 && !P.isie11)
                          ))
                    : (this.hasreversehr = !1),
                (this.istouchcapable = !1),
                P.cantouch || (!P.hasw3ctouch && !P.hasmstouch)
                    ? !P.cantouch ||
                      P.isios ||
                      P.isandroid ||
                      (!P.iswebkit && !P.ismozilla) ||
                      (this.istouchcapable = !0)
                    : (this.istouchcapable = !0),
                M.enablemouselockapi ||
                    ((P.hasmousecapture = !1), (P.haspointerlock = !1)),
                (this.debounced = function(e, o, t) {
                    T &&
                        (T.delaylist[e] ||
                            !1 ||
                            ((T.delaylist[e] = {
                                h: u(function() {
                                    T.delaylist[e].fn.call(T),
                                        (T.delaylist[e] = !1);
                                }, t)
                            }),
                            o.call(T)),
                        (T.delaylist[e].fn = o));
                }),
                (this.synched = function(e, o) {
                    T.synclist[e]
                        ? (T.synclist[e] = o)
                        : ((T.synclist[e] = o),
                          u(function() {
                              T &&
                                  (T.synclist[e] && T.synclist[e].call(T),
                                  (T.synclist[e] = null));
                          }));
                }),
                (this.unsynched = function(e) {
                    T.synclist[e] && (T.synclist[e] = !1);
                }),
                (this.css = function(e, o) {
                    for (var t in o)
                        T.saved.css.push([e, t, e.css(t)]), e.css(t, o[t]);
                }),
                (this.scrollTop = function(e) {
                    return void 0 === e ? T.getScrollTop() : T.setScrollTop(e);
                }),
                (this.scrollLeft = function(e) {
                    return void 0 === e
                        ? T.getScrollLeft()
                        : T.setScrollLeft(e);
                });
            var R = function(e, o, t, r, i, s, n) {
                (this.st = e),
                    (this.ed = o),
                    (this.spd = t),
                    (this.p1 = r || 0),
                    (this.p2 = i || 1),
                    (this.p3 = s || 0),
                    (this.p4 = n || 1),
                    (this.ts = f()),
                    (this.df = o - e);
            };
            if (
                ((R.prototype = {
                    B2: function(e) {
                        return 3 * (1 - e) * (1 - e) * e;
                    },
                    B3: function(e) {
                        return 3 * (1 - e) * e * e;
                    },
                    B4: function(e) {
                        return e * e * e;
                    },
                    getPos: function() {
                        return (f() - this.ts) / this.spd;
                    },
                    getNow: function() {
                        var e = (f() - this.ts) / this.spd,
                            o = this.B2(e) + this.B3(e) + this.B4(e);
                        return e >= 1 ? this.ed : (this.st + this.df * o) | 0;
                    },
                    update: function(e, o) {
                        return (
                            (this.st = this.getNow()),
                            (this.ed = e),
                            (this.spd = o),
                            (this.ts = f()),
                            (this.df = this.ed - this.st),
                            this
                        );
                    }
                }),
                this.ishwscroll)
            ) {
                (this.doc.translate = { x: 0, y: 0, tx: "0px", ty: "0px" }),
                    P.hastranslate3d &&
                        P.isios &&
                        this.doc.css("-webkit-backface-visibility", "hidden"),
                    (this.getScrollTop = function(e) {
                        if (!e) {
                            var o = v();
                            if (o) return 16 == o.length ? -o[13] : -o[5];
                            if (T.timerscroll && T.timerscroll.bz)
                                return T.timerscroll.bz.getNow();
                        }
                        return T.doc.translate.y;
                    }),
                    (this.getScrollLeft = function(e) {
                        if (!e) {
                            var o = v();
                            if (o) return 16 == o.length ? -o[12] : -o[4];
                            if (T.timerscroll && T.timerscroll.bh)
                                return T.timerscroll.bh.getNow();
                        }
                        return T.doc.translate.x;
                    }),
                    (this.notifyScrollEvent = function(e) {
                        var o = l.createEvent("UIEvents");
                        o.initUIEvent("scroll", !1, !1, a, 1),
                            (o.niceevent = !0),
                            e.dispatchEvent(o);
                    });
                var _ = this.isrtlmode ? 1 : -1;
                P.hastranslate3d && M.enabletranslate3d
                    ? ((this.setScrollTop = function(e, o) {
                          (T.doc.translate.y = e),
                              (T.doc.translate.ty = -1 * e + "px"),
                              T.doc.css(
                                  P.trstyle,
                                  "translate3d(" +
                                      T.doc.translate.tx +
                                      "," +
                                      T.doc.translate.ty +
                                      ",0)"
                              ),
                              o || T.notifyScrollEvent(T.win[0]);
                      }),
                      (this.setScrollLeft = function(e, o) {
                          (T.doc.translate.x = e),
                              (T.doc.translate.tx = e * _ + "px"),
                              T.doc.css(
                                  P.trstyle,
                                  "translate3d(" +
                                      T.doc.translate.tx +
                                      "," +
                                      T.doc.translate.ty +
                                      ",0)"
                              ),
                              o || T.notifyScrollEvent(T.win[0]);
                      }))
                    : ((this.setScrollTop = function(e, o) {
                          (T.doc.translate.y = e),
                              (T.doc.translate.ty = -1 * e + "px"),
                              T.doc.css(
                                  P.trstyle,
                                  "translate(" +
                                      T.doc.translate.tx +
                                      "," +
                                      T.doc.translate.ty +
                                      ")"
                              ),
                              o || T.notifyScrollEvent(T.win[0]);
                      }),
                      (this.setScrollLeft = function(e, o) {
                          (T.doc.translate.x = e),
                              (T.doc.translate.tx = e * _ + "px"),
                              T.doc.css(
                                  P.trstyle,
                                  "translate(" +
                                      T.doc.translate.tx +
                                      "," +
                                      T.doc.translate.ty +
                                      ")"
                              ),
                              o || T.notifyScrollEvent(T.win[0]);
                      }));
            } else
                (this.getScrollTop = function() {
                    return T.docscroll.scrollTop();
                }),
                    (this.setScrollTop = function(e) {
                        T.docscroll.scrollTop(e);
                    }),
                    (this.getScrollLeft = function() {
                        return T.hasreversehr
                            ? T.detected.ismozilla
                                ? T.page.maxw -
                                  Math.abs(T.docscroll.scrollLeft())
                                : T.page.maxw - T.docscroll.scrollLeft()
                            : T.docscroll.scrollLeft();
                    }),
                    (this.setScrollLeft = function(e) {
                        return setTimeout(function() {
                            if (T)
                                return (
                                    T.hasreversehr &&
                                        (e = T.detected.ismozilla
                                            ? -(T.page.maxw - e)
                                            : T.page.maxw - e),
                                    T.docscroll.scrollLeft(e)
                                );
                        }, 1);
                    });
            (this.getTarget = function(e) {
                return (
                    !!e &&
                    (e.target ? e.target : !!e.srcElement && e.srcElement)
                );
            }),
                (this.hasParent = function(e, o) {
                    if (!e) return !1;
                    for (
                        var t = e.target || e.srcElement || e || !1;
                        t && t.id != o;

                    )
                        t = t.parentNode || !1;
                    return !1 !== t;
                });
            var I = { thin: 1, medium: 3, thick: 5 };
            (this.getDocumentScrollOffset = function() {
                return {
                    top: a.pageYOffset || l.documentElement.scrollTop,
                    left: a.pageXOffset || l.documentElement.scrollLeft
                };
            }),
                (this.getOffset = function() {
                    if (T.isfixed) {
                        var e = T.win.offset(),
                            o = T.getDocumentScrollOffset();
                        return (e.top -= o.top), (e.left -= o.left), e;
                    }
                    var t = T.win.offset();
                    if (!T.viewport) return t;
                    var r = T.viewport.offset();
                    return { top: t.top - r.top, left: t.left - r.left };
                }),
                (this.updateScrollBar = function(e) {
                    var o, t;
                    if (T.ishwscroll)
                        T.rail.css({
                            height:
                                T.win.innerHeight() -
                                (M.railpadding.top + M.railpadding.bottom)
                        }),
                            T.railh &&
                                T.railh.css({
                                    width:
                                        T.win.innerWidth() -
                                        (M.railpadding.left +
                                            M.railpadding.right)
                                });
                    else {
                        var r = T.getOffset();
                        if (
                            ((o = {
                                top: r.top,
                                left:
                                    r.left -
                                    (M.railpadding.left + M.railpadding.right)
                            }),
                            (o.top += x(T.win, "border-top-width", !0)),
                            (o.left += T.rail.align
                                ? T.win.outerWidth() -
                                  x(T.win, "border-right-width") -
                                  T.rail.width
                                : x(T.win, "border-left-width")),
                            (t = M.railoffset) &&
                                (t.top && (o.top += t.top),
                                t.left && (o.left += t.left)),
                            T.railslocked ||
                                T.rail.css({
                                    top: o.top,
                                    left: o.left,
                                    height:
                                        (e ? e.h : T.win.innerHeight()) -
                                        (M.railpadding.top +
                                            M.railpadding.bottom)
                                }),
                            T.zoom &&
                                T.zoom.css({
                                    top: o.top + 1,
                                    left:
                                        1 == T.rail.align
                                            ? o.left - 20
                                            : o.left + T.rail.width + 4
                                }),
                            T.railh && !T.railslocked)
                        ) {
                            (o = { top: r.top, left: r.left }),
                                (t = M.railhoffset) &&
                                    (t.top && (o.top += t.top),
                                    t.left && (o.left += t.left));
                            var i = T.railh.align
                                    ? o.top +
                                      x(T.win, "border-top-width", !0) +
                                      T.win.innerHeight() -
                                      T.railh.height
                                    : o.top + x(T.win, "border-top-width", !0),
                                s = o.left + x(T.win, "border-left-width");
                            T.railh.css({
                                top:
                                    i -
                                    (M.railpadding.top + M.railpadding.bottom),
                                left: s,
                                width: T.railh.width
                            });
                        }
                    }
                }),
                (this.doRailClick = function(e, o, t) {
                    var r, i, s, n;
                    T.railslocked ||
                        (T.cancelEvent(e),
                        "pageY" in e ||
                            ((e.pageX =
                                e.clientX + l.documentElement.scrollLeft),
                            (e.pageY =
                                e.clientY + l.documentElement.scrollTop)),
                        o
                            ? ((r = t ? T.doScrollLeft : T.doScrollTop),
                              (s = t
                                  ? (e.pageX -
                                        T.railh.offset().left -
                                        T.cursorwidth / 2) *
                                    T.scrollratio.x
                                  : (e.pageY -
                                        T.rail.offset().top -
                                        T.cursorheight / 2) *
                                    T.scrollratio.y),
                              T.unsynched("relativexy"),
                              r(0 | s))
                            : ((r = t ? T.doScrollLeftBy : T.doScrollBy),
                              (s = t ? T.scroll.x : T.scroll.y),
                              (n = t
                                  ? e.pageX - T.railh.offset().left
                                  : e.pageY - T.rail.offset().top),
                              (i = t ? T.view.w : T.view.h),
                              r(s >= n ? i : -i)));
                }),
                (T.newscrolly = T.newscrollx = 0),
                (T.hasanimationframe = "requestAnimationFrame" in a),
                (T.hascancelanimationframe = "cancelAnimationFrame" in a),
                (T.hasborderbox = !1),
                (this.init = function() {
                    if (((T.saved.css = []), P.isoperamini)) return !0;
                    if (P.isandroid && !("hidden" in l)) return !0;
                    (M.emulatetouch = M.emulatetouch || M.touchbehavior),
                        (T.hasborderbox =
                            a.getComputedStyle &&
                            "border-box" ===
                                a.getComputedStyle(l.body)["box-sizing"]);
                    var e = { "overflow-y": "hidden" };
                    if (
                        ((P.isie11 || P.isie10) &&
                            (e["-ms-overflow-style"] = "none"),
                        T.ishwscroll &&
                            (this.doc.css(
                                P.transitionstyle,
                                P.prefixstyle + "transform 0ms ease-out"
                            ),
                            P.transitionend &&
                                T.bind(
                                    T.doc,
                                    P.transitionend,
                                    T.onScrollTransitionEnd,
                                    !1
                                )),
                        (T.zindex = "auto"),
                        T.ispage || "auto" != M.zindex
                            ? (T.zindex = M.zindex)
                            : (T.zindex = b() || "auto"),
                        !T.ispage &&
                            "auto" != T.zindex &&
                            T.zindex > s &&
                            (s = T.zindex),
                        T.isie &&
                            0 === T.zindex &&
                            "auto" == M.zindex &&
                            (T.zindex = "auto"),
                        !T.ispage || !P.isieold)
                    ) {
                        var i = T.docscroll;
                        T.ispage && (i = T.haswrapper ? T.win : T.doc),
                            T.css(i, e),
                            T.ispage &&
                                (P.isie11 || P.isie) &&
                                T.css(n("html"), e),
                            !P.isios ||
                                T.ispage ||
                                T.haswrapper ||
                                T.css(E, {
                                    "-webkit-overflow-scrolling": "touch"
                                });
                        var d = n(l.createElement("div"));
                        d.css({
                            position: "relative",
                            top: 0,
                            float: "right",
                            width: M.cursorwidth,
                            height: 0,
                            "background-color": M.cursorcolor,
                            border: M.cursorborder,
                            "background-clip": "padding-box",
                            "-webkit-border-radius": M.cursorborderradius,
                            "-moz-border-radius": M.cursorborderradius,
                            "border-radius": M.cursorborderradius
                        }),
                            d.addClass("nicescroll-cursors"),
                            (T.cursor = d);
                        var u = n(l.createElement("div"));
                        u.attr("id", T.id),
                            u.addClass("nicescroll-rails nicescroll-rails-vr");
                        var h,
                            p,
                            f = ["left", "right", "top", "bottom"];
                        for (var g in f)
                            (p = f[g]),
                                (h = M.railpadding[p] || 0) &&
                                    u.css("padding-" + p, h + "px");
                        u.append(d),
                            (u.width = Math.max(
                                parseFloat(M.cursorwidth),
                                d.outerWidth()
                            )),
                            u.css({
                                width: u.width + "px",
                                zIndex: T.zindex,
                                background: M.background,
                                cursor: "default"
                            }),
                            (u.visibility = !0),
                            (u.scrollable = !0),
                            (u.align = "left" == M.railalign ? 0 : 1),
                            (T.rail = u),
                            (T.rail.drag = !1);
                        var v = !1;
                        !M.boxzoom ||
                            T.ispage ||
                            P.isieold ||
                            ((v = l.createElement("div")),
                            T.bind(v, "click", T.doZoom),
                            T.bind(v, "mouseenter", function() {
                                T.zoom.css("opacity", M.cursoropacitymax);
                            }),
                            T.bind(v, "mouseleave", function() {
                                T.zoom.css("opacity", M.cursoropacitymin);
                            }),
                            (T.zoom = n(v)),
                            T.zoom.css({
                                cursor: "pointer",
                                zIndex: T.zindex,
                                backgroundImage:
                                    "url(" + M.scriptpath + "zoomico.png)",
                                height: 18,
                                width: 18,
                                backgroundPosition: "0 0"
                            }),
                            M.dblclickzoom &&
                                T.bind(T.win, "dblclick", T.doZoom),
                            P.cantouch &&
                                M.gesturezoom &&
                                ((T.ongesturezoom = function(e) {
                                    return (
                                        e.scale > 1.5 && T.doZoomIn(e),
                                        e.scale < 0.8 && T.doZoomOut(e),
                                        T.cancelEvent(e)
                                    );
                                }),
                                T.bind(T.win, "gestureend", T.ongesturezoom))),
                            (T.railh = !1);
                        var w;
                        if (
                            (M.horizrailenabled &&
                                (T.css(i, { overflowX: "hidden" }),
                                (d = n(l.createElement("div"))).css({
                                    position: "absolute",
                                    top: 0,
                                    height: M.cursorwidth,
                                    width: 0,
                                    backgroundColor: M.cursorcolor,
                                    border: M.cursorborder,
                                    backgroundClip: "padding-box",
                                    "-webkit-border-radius":
                                        M.cursorborderradius,
                                    "-moz-border-radius": M.cursorborderradius,
                                    "border-radius": M.cursorborderradius
                                }),
                                P.isieold && d.css("overflow", "hidden"),
                                d.addClass("nicescroll-cursors"),
                                (T.cursorh = d),
                                (w = n(l.createElement("div"))).attr(
                                    "id",
                                    T.id + "-hr"
                                ),
                                w.addClass(
                                    "nicescroll-rails nicescroll-rails-hr"
                                ),
                                (w.height = Math.max(
                                    parseFloat(M.cursorwidth),
                                    d.outerHeight()
                                )),
                                w.css({
                                    height: w.height + "px",
                                    zIndex: T.zindex,
                                    background: M.background
                                }),
                                w.append(d),
                                (w.visibility = !0),
                                (w.scrollable = !0),
                                (w.align = "top" == M.railvalign ? 0 : 1),
                                (T.railh = w),
                                (T.railh.drag = !1)),
                            T.ispage)
                        )
                            u.css({
                                position: "fixed",
                                top: 0,
                                height: "100%"
                            }),
                                u.css(u.align ? { right: 0 } : { left: 0 }),
                                T.body.append(u),
                                T.railh &&
                                    (w.css({
                                        position: "fixed",
                                        left: 0,
                                        width: "100%"
                                    }),
                                    w.css(w.align ? { bottom: 0 } : { top: 0 }),
                                    T.body.append(w));
                        else {
                            if (T.ishwscroll) {
                                "static" == T.win.css("position") &&
                                    T.css(T.win, { position: "relative" });
                                var x =
                                    "HTML" == T.win[0].nodeName
                                        ? T.body
                                        : T.win;
                                n(x)
                                    .scrollTop(0)
                                    .scrollLeft(0),
                                    T.zoom &&
                                        (T.zoom.css({
                                            position: "absolute",
                                            top: 1,
                                            right: 0,
                                            "margin-right": u.width + 4
                                        }),
                                        x.append(T.zoom)),
                                    u.css({ position: "absolute", top: 0 }),
                                    u.css(u.align ? { right: 0 } : { left: 0 }),
                                    x.append(u),
                                    w &&
                                        (w.css({
                                            position: "absolute",
                                            left: 0,
                                            bottom: 0
                                        }),
                                        w.css(
                                            w.align ? { bottom: 0 } : { top: 0 }
                                        ),
                                        x.append(w));
                            } else {
                                T.isfixed = "fixed" == T.win.css("position");
                                var S = T.isfixed ? "fixed" : "absolute";
                                T.isfixed ||
                                    (T.viewport = T.getViewport(T.win[0])),
                                    T.viewport &&
                                        ((T.body = T.viewport),
                                        /fixed|absolute/.test(
                                            T.viewport.css("position")
                                        ) ||
                                            T.css(T.viewport, {
                                                position: "relative"
                                            })),
                                    u.css({ position: S }),
                                    T.zoom && T.zoom.css({ position: S }),
                                    T.updateScrollBar(),
                                    T.body.append(u),
                                    T.zoom && T.body.append(T.zoom),
                                    T.railh &&
                                        (w.css({ position: S }),
                                        T.body.append(w));
                            }
                            P.isios &&
                                T.css(T.win, {
                                    "-webkit-tap-highlight-color":
                                        "rgba(0,0,0,0)",
                                    "-webkit-touch-callout": "none"
                                }),
                                M.disableoutline &&
                                    (P.isie && T.win.attr("hideFocus", "true"),
                                    P.iswebkit && T.win.css("outline", "none"));
                        }
                        if (
                            (!1 === M.autohidemode
                                ? ((T.autohidedom = !1),
                                  T.rail.css({ opacity: M.cursoropacitymax }),
                                  T.railh &&
                                      T.railh.css({
                                          opacity: M.cursoropacitymax
                                      }))
                                : !0 === M.autohidemode ||
                                  "leave" === M.autohidemode
                                ? ((T.autohidedom = n().add(T.rail)),
                                  P.isie8 &&
                                      (T.autohidedom = T.autohidedom.add(
                                          T.cursor
                                      )),
                                  T.railh &&
                                      (T.autohidedom = T.autohidedom.add(
                                          T.railh
                                      )),
                                  T.railh &&
                                      P.isie8 &&
                                      (T.autohidedom = T.autohidedom.add(
                                          T.cursorh
                                      )))
                                : "scroll" == M.autohidemode
                                ? ((T.autohidedom = n().add(T.rail)),
                                  T.railh &&
                                      (T.autohidedom = T.autohidedom.add(
                                          T.railh
                                      )))
                                : "cursor" == M.autohidemode
                                ? ((T.autohidedom = n().add(T.cursor)),
                                  T.railh &&
                                      (T.autohidedom = T.autohidedom.add(
                                          T.cursorh
                                      )))
                                : "hidden" == M.autohidemode &&
                                  ((T.autohidedom = !1),
                                  T.hide(),
                                  (T.railslocked = !1)),
                            P.cantouch ||
                                T.istouchcapable ||
                                M.emulatetouch ||
                                P.hasmstouch)
                        ) {
                            T.scrollmom = new y(T);
                            (T.ontouchstart = function(e) {
                                if (T.locked) return !1;
                                if (
                                    e.pointerType &&
                                    ("mouse" === e.pointerType ||
                                        e.pointerType ===
                                            e.MSPOINTER_TYPE_MOUSE)
                                )
                                    return !1;
                                if (
                                    ((T.hasmoving = !1),
                                    T.scrollmom.timer &&
                                        (T.triggerScrollEnd(),
                                        T.scrollmom.stop()),
                                    !T.railslocked)
                                ) {
                                    var o = T.getTarget(e);
                                    if (
                                        o &&
                                        /INPUT/i.test(o.nodeName) &&
                                        /range/i.test(o.type)
                                    )
                                        return T.stopPropagation(e);
                                    var t = "mousedown" === e.type;
                                    if (
                                        (!("clientX" in e) &&
                                            "changedTouches" in e &&
                                            ((e.clientX =
                                                e.changedTouches[0].clientX),
                                            (e.clientY =
                                                e.changedTouches[0].clientY)),
                                        T.forcescreen)
                                    ) {
                                        var r = e;
                                        ((e = {
                                            original: e.original
                                                ? e.original
                                                : e
                                        }).clientX = r.screenX),
                                            (e.clientY = r.screenY);
                                    }
                                    if (
                                        ((T.rail.drag = {
                                            x: e.clientX,
                                            y: e.clientY,
                                            sx: T.scroll.x,
                                            sy: T.scroll.y,
                                            st: T.getScrollTop(),
                                            sl: T.getScrollLeft(),
                                            pt: 2,
                                            dl: !1,
                                            tg: o
                                        }),
                                        T.ispage || !M.directionlockdeadzone)
                                    )
                                        T.rail.drag.dl = "f";
                                    else {
                                        var i = { w: c.width(), h: c.height() },
                                            s = T.getContentSize(),
                                            l = s.h - i.h,
                                            a = s.w - i.w;
                                        T.rail.scrollable && !T.railh.scrollable
                                            ? (T.rail.drag.ck = l > 0 && "v")
                                            : !T.rail.scrollable &&
                                              T.railh.scrollable
                                            ? (T.rail.drag.ck = a > 0 && "h")
                                            : (T.rail.drag.ck = !1);
                                    }
                                    if (
                                        M.emulatetouch &&
                                        T.isiframe &&
                                        P.isie
                                    ) {
                                        var d = T.win.position();
                                        (T.rail.drag.x += d.left),
                                            (T.rail.drag.y += d.top);
                                    }
                                    if (
                                        ((T.hasmoving = !1),
                                        (T.lastmouseup = !1),
                                        T.scrollmom.reset(e.clientX, e.clientY),
                                        o && t)
                                    ) {
                                        if (
                                            !/INPUT|SELECT|BUTTON|TEXTAREA/i.test(
                                                o.nodeName
                                            )
                                        )
                                            return (
                                                P.hasmousecapture &&
                                                    o.setCapture(),
                                                M.emulatetouch
                                                    ? (o.onclick &&
                                                          !o._onclick &&
                                                          ((o._onclick =
                                                              o.onclick),
                                                          (o.onclick = function(
                                                              e
                                                          ) {
                                                              if (T.hasmoving)
                                                                  return !1;
                                                              o._onclick.call(
                                                                  this,
                                                                  e
                                                              );
                                                          })),
                                                      T.cancelEvent(e))
                                                    : T.stopPropagation(e)
                                            );
                                        /SUBMIT|CANCEL|BUTTON/i.test(
                                            n(o).attr("type")
                                        ) &&
                                            (T.preventclick = {
                                                tg: o,
                                                click: !1
                                            });
                                    }
                                }
                            }),
                                (T.ontouchend = function(e) {
                                    if (!T.rail.drag) return !0;
                                    if (2 == T.rail.drag.pt) {
                                        if (
                                            e.pointerType &&
                                            ("mouse" === e.pointerType ||
                                                e.pointerType ===
                                                    e.MSPOINTER_TYPE_MOUSE)
                                        )
                                            return !1;
                                        T.rail.drag = !1;
                                        var o = "mouseup" === e.type;
                                        if (
                                            T.hasmoving &&
                                            (T.scrollmom.doMomentum(),
                                            (T.lastmouseup = !0),
                                            T.hideCursor(),
                                            P.hasmousecapture &&
                                                l.releaseCapture(),
                                            o)
                                        )
                                            return T.cancelEvent(e);
                                    } else if (1 == T.rail.drag.pt)
                                        return T.onmouseup(e);
                                });
                            var z =
                                    M.emulatetouch &&
                                    T.isiframe &&
                                    !P.hasmousecapture,
                                k = (0.3 * M.directionlockdeadzone) | 0;
                            (T.ontouchmove = function(e, o) {
                                if (!T.rail.drag) return !0;
                                if (
                                    e.targetTouches &&
                                    M.preventmultitouchscrolling &&
                                    e.targetTouches.length > 1
                                )
                                    return !0;
                                if (
                                    e.pointerType &&
                                    ("mouse" === e.pointerType ||
                                        e.pointerType ===
                                            e.MSPOINTER_TYPE_MOUSE)
                                )
                                    return !0;
                                if (2 == T.rail.drag.pt) {
                                    "changedTouches" in e &&
                                        ((e.clientX =
                                            e.changedTouches[0].clientX),
                                        (e.clientY =
                                            e.changedTouches[0].clientY));
                                    var t, r;
                                    if (((r = t = 0), z && !o)) {
                                        var i = T.win.position();
                                        (r = -i.left), (t = -i.top);
                                    }
                                    var s = e.clientY + t,
                                        n = s - T.rail.drag.y,
                                        a = e.clientX + r,
                                        c = a - T.rail.drag.x,
                                        d = T.rail.drag.st - n;
                                    if (T.ishwscroll && M.bouncescroll)
                                        d < 0
                                            ? (d = Math.round(d / 2))
                                            : d > T.page.maxh &&
                                              (d =
                                                  T.page.maxh +
                                                  Math.round(
                                                      (d - T.page.maxh) / 2
                                                  ));
                                    else if (
                                        (d < 0
                                            ? ((d = 0), (s = 0))
                                            : d > T.page.maxh &&
                                              ((d = T.page.maxh), (s = 0)),
                                        0 === s && !T.hasmoving)
                                    )
                                        return (
                                            T.ispage || (T.rail.drag = !1), !0
                                        );
                                    var u = T.getScrollLeft();
                                    if (
                                        (T.railh &&
                                            T.railh.scrollable &&
                                            ((u = T.isrtlmode
                                                ? c - T.rail.drag.sl
                                                : T.rail.drag.sl - c),
                                            T.ishwscroll && M.bouncescroll
                                                ? u < 0
                                                    ? (u = Math.round(u / 2))
                                                    : u > T.page.maxw &&
                                                      (u =
                                                          T.page.maxw +
                                                          Math.round(
                                                              (u -
                                                                  T.page.maxw) /
                                                                  2
                                                          ))
                                                : (u < 0 && ((u = 0), (a = 0)),
                                                  u > T.page.maxw &&
                                                      ((u = T.page.maxw),
                                                      (a = 0)))),
                                        !T.hasmoving)
                                    ) {
                                        if (
                                            T.rail.drag.y === e.clientY &&
                                            T.rail.drag.x === e.clientX
                                        )
                                            return T.cancelEvent(e);
                                        var h = Math.abs(n),
                                            p = Math.abs(c),
                                            m = M.directionlockdeadzone;
                                        if (
                                            (T.rail.drag.ck
                                                ? "v" == T.rail.drag.ck
                                                    ? p > m && h <= k
                                                        ? (T.rail.drag = !1)
                                                        : h > m &&
                                                          (T.rail.drag.dl = "v")
                                                    : "h" == T.rail.drag.ck &&
                                                      (h > m && p <= k
                                                          ? (T.rail.drag = !1)
                                                          : p > m &&
                                                            (T.rail.drag.dl =
                                                                "h"))
                                                : h > m && p > m
                                                ? (T.rail.drag.dl = "f")
                                                : h > m
                                                ? (T.rail.drag.dl =
                                                      p > k ? "f" : "v")
                                                : p > m &&
                                                  (T.rail.drag.dl =
                                                      h > k ? "f" : "h"),
                                            !T.rail.drag.dl)
                                        )
                                            return T.cancelEvent(e);
                                        T.triggerScrollStart(
                                            e.clientX,
                                            e.clientY,
                                            0,
                                            0,
                                            0
                                        ),
                                            (T.hasmoving = !0);
                                    }
                                    return (
                                        T.preventclick &&
                                            !T.preventclick.click &&
                                            ((T.preventclick.click =
                                                T.preventclick.tg.onclick ||
                                                !1),
                                            (T.preventclick.tg.onclick =
                                                T.onpreventclick)),
                                        T.rail.drag.dl &&
                                            ("v" == T.rail.drag.dl
                                                ? (u = T.rail.drag.sl)
                                                : "h" == T.rail.drag.dl &&
                                                  (d = T.rail.drag.st)),
                                        T.synched("touchmove", function() {
                                            T.rail.drag &&
                                                2 == T.rail.drag.pt &&
                                                (T.prepareTransition &&
                                                    T.resetTransition(),
                                                T.rail.scrollable &&
                                                    T.setScrollTop(d),
                                                T.scrollmom.update(a, s),
                                                T.railh && T.railh.scrollable
                                                    ? (T.setScrollLeft(u),
                                                      T.showCursor(d, u))
                                                    : T.showCursor(d),
                                                P.isie10 &&
                                                    l.selection.clear());
                                        }),
                                        T.cancelEvent(e)
                                    );
                                }
                                return 1 == T.rail.drag.pt
                                    ? T.onmousemove(e)
                                    : void 0;
                            }),
                                (T.ontouchstartCursor = function(e, o) {
                                    if (!T.rail.drag || 3 == T.rail.drag.pt) {
                                        if (T.locked) return T.cancelEvent(e);
                                        T.cancelScroll(),
                                            (T.rail.drag = {
                                                x: e.touches[0].clientX,
                                                y: e.touches[0].clientY,
                                                sx: T.scroll.x,
                                                sy: T.scroll.y,
                                                pt: 3,
                                                hr: !!o
                                            });
                                        var t = T.getTarget(e);
                                        return (
                                            !T.ispage &&
                                                P.hasmousecapture &&
                                                t.setCapture(),
                                            T.isiframe &&
                                                !P.hasmousecapture &&
                                                ((T.saved.csspointerevents = T.doc.css(
                                                    "pointer-events"
                                                )),
                                                T.css(T.doc, {
                                                    "pointer-events": "none"
                                                })),
                                            T.cancelEvent(e)
                                        );
                                    }
                                }),
                                (T.ontouchendCursor = function(e) {
                                    if (T.rail.drag) {
                                        if (
                                            (P.hasmousecapture &&
                                                l.releaseCapture(),
                                            T.isiframe &&
                                                !P.hasmousecapture &&
                                                T.doc.css(
                                                    "pointer-events",
                                                    T.saved.csspointerevents
                                                ),
                                            3 != T.rail.drag.pt)
                                        )
                                            return;
                                        return (
                                            (T.rail.drag = !1), T.cancelEvent(e)
                                        );
                                    }
                                }),
                                (T.ontouchmoveCursor = function(e) {
                                    if (T.rail.drag) {
                                        if (3 != T.rail.drag.pt) return;
                                        if (
                                            ((T.cursorfreezed = !0),
                                            T.rail.drag.hr)
                                        ) {
                                            (T.scroll.x =
                                                T.rail.drag.sx +
                                                (e.touches[0].clientX -
                                                    T.rail.drag.x)),
                                                T.scroll.x < 0 &&
                                                    (T.scroll.x = 0);
                                            var o = T.scrollvaluemaxw;
                                            T.scroll.x > o && (T.scroll.x = o);
                                        } else {
                                            (T.scroll.y =
                                                T.rail.drag.sy +
                                                (e.touches[0].clientY -
                                                    T.rail.drag.y)),
                                                T.scroll.y < 0 &&
                                                    (T.scroll.y = 0);
                                            var t = T.scrollvaluemax;
                                            T.scroll.y > t && (T.scroll.y = t);
                                        }
                                        return (
                                            T.synched("touchmove", function() {
                                                T.rail.drag &&
                                                    3 == T.rail.drag.pt &&
                                                    (T.showCursor(),
                                                    T.rail.drag.hr
                                                        ? T.doScrollLeft(
                                                              Math.round(
                                                                  T.scroll.x *
                                                                      T
                                                                          .scrollratio
                                                                          .x
                                                              ),
                                                              M.cursordragspeed
                                                          )
                                                        : T.doScrollTop(
                                                              Math.round(
                                                                  T.scroll.y *
                                                                      T
                                                                          .scrollratio
                                                                          .y
                                                              ),
                                                              M.cursordragspeed
                                                          ));
                                            }),
                                            T.cancelEvent(e)
                                        );
                                    }
                                });
                        }
                        if (
                            ((T.onmousedown = function(e, o) {
                                if (!T.rail.drag || 1 == T.rail.drag.pt) {
                                    if (T.railslocked) return T.cancelEvent(e);
                                    T.cancelScroll(),
                                        (T.rail.drag = {
                                            x: e.clientX,
                                            y: e.clientY,
                                            sx: T.scroll.x,
                                            sy: T.scroll.y,
                                            pt: 1,
                                            hr: o || !1
                                        });
                                    var t = T.getTarget(e);
                                    return (
                                        P.hasmousecapture && t.setCapture(),
                                        T.isiframe &&
                                            !P.hasmousecapture &&
                                            ((T.saved.csspointerevents = T.doc.css(
                                                "pointer-events"
                                            )),
                                            T.css(T.doc, {
                                                "pointer-events": "none"
                                            })),
                                        (T.hasmoving = !1),
                                        T.cancelEvent(e)
                                    );
                                }
                            }),
                            (T.onmouseup = function(e) {
                                if (T.rail.drag)
                                    return (
                                        1 != T.rail.drag.pt ||
                                        (P.hasmousecapture &&
                                            l.releaseCapture(),
                                        T.isiframe &&
                                            !P.hasmousecapture &&
                                            T.doc.css(
                                                "pointer-events",
                                                T.saved.csspointerevents
                                            ),
                                        (T.rail.drag = !1),
                                        (T.cursorfreezed = !1),
                                        T.hasmoving && T.triggerScrollEnd(),
                                        T.cancelEvent(e))
                                    );
                            }),
                            (T.onmousemove = function(e) {
                                if (T.rail.drag) {
                                    if (1 !== T.rail.drag.pt) return;
                                    if (P.ischrome && 0 === e.which)
                                        return T.onmouseup(e);
                                    if (
                                        ((T.cursorfreezed = !0),
                                        T.hasmoving ||
                                            T.triggerScrollStart(
                                                e.clientX,
                                                e.clientY,
                                                0,
                                                0,
                                                0
                                            ),
                                        (T.hasmoving = !0),
                                        T.rail.drag.hr)
                                    ) {
                                        (T.scroll.x =
                                            T.rail.drag.sx +
                                            (e.clientX - T.rail.drag.x)),
                                            T.scroll.x < 0 && (T.scroll.x = 0);
                                        var o = T.scrollvaluemaxw;
                                        T.scroll.x > o && (T.scroll.x = o);
                                    } else {
                                        (T.scroll.y =
                                            T.rail.drag.sy +
                                            (e.clientY - T.rail.drag.y)),
                                            T.scroll.y < 0 && (T.scroll.y = 0);
                                        var t = T.scrollvaluemax;
                                        T.scroll.y > t && (T.scroll.y = t);
                                    }
                                    return (
                                        T.synched("mousemove", function() {
                                            T.cursorfreezed &&
                                                (T.showCursor(),
                                                T.rail.drag.hr
                                                    ? T.scrollLeft(
                                                          Math.round(
                                                              T.scroll.x *
                                                                  T.scrollratio
                                                                      .x
                                                          )
                                                      )
                                                    : T.scrollTop(
                                                          Math.round(
                                                              T.scroll.y *
                                                                  T.scrollratio
                                                                      .y
                                                          )
                                                      ));
                                        }),
                                        T.cancelEvent(e)
                                    );
                                }
                                T.checkarea = 0;
                            }),
                            P.cantouch || M.emulatetouch)
                        )
                            (T.onpreventclick = function(e) {
                                if (T.preventclick)
                                    return (
                                        (T.preventclick.tg.onclick =
                                            T.preventclick.click),
                                        (T.preventclick = !1),
                                        T.cancelEvent(e)
                                    );
                            }),
                                (T.onclick =
                                    !P.isios &&
                                    function(e) {
                                        return (
                                            !T.lastmouseup ||
                                            ((T.lastmouseup = !1),
                                            T.cancelEvent(e))
                                        );
                                    }),
                                M.grabcursorenabled &&
                                    P.cursorgrabvalue &&
                                    (T.css(T.ispage ? T.doc : T.win, {
                                        cursor: P.cursorgrabvalue
                                    }),
                                    T.css(T.rail, {
                                        cursor: P.cursorgrabvalue
                                    }));
                        else {
                            var L = function(e) {
                                if (T.selectiondrag) {
                                    if (e) {
                                        var o = T.win.outerHeight(),
                                            t = e.pageY - T.selectiondrag.top;
                                        t > 0 && t < o && (t = 0),
                                            t >= o && (t -= o),
                                            (T.selectiondrag.df = t);
                                    }
                                    if (0 !== T.selectiondrag.df) {
                                        var r =
                                            ((-2 * T.selectiondrag.df) / 6) | 0;
                                        T.doScrollBy(r),
                                            T.debounced(
                                                "doselectionscroll",
                                                function() {
                                                    L();
                                                },
                                                50
                                            );
                                    }
                                }
                            };
                            (T.hasTextSelected =
                                "getSelection" in l
                                    ? function() {
                                          return (
                                              l.getSelection().rangeCount > 0
                                          );
                                      }
                                    : "selection" in l
                                    ? function() {
                                          return "None" != l.selection.type;
                                      }
                                    : function() {
                                          return !1;
                                      }),
                                (T.onselectionstart = function(e) {
                                    T.ispage ||
                                        (T.selectiondrag = T.win.offset());
                                }),
                                (T.onselectionend = function(e) {
                                    T.selectiondrag = !1;
                                }),
                                (T.onselectiondrag = function(e) {
                                    T.selectiondrag &&
                                        T.hasTextSelected() &&
                                        T.debounced(
                                            "selectionscroll",
                                            function() {
                                                L(e);
                                            },
                                            250
                                        );
                                });
                        }
                        if (
                            (P.hasw3ctouch
                                ? (T.css(T.ispage ? n("html") : T.win, {
                                      "touch-action": "none"
                                  }),
                                  T.css(T.rail, { "touch-action": "none" }),
                                  T.css(T.cursor, { "touch-action": "none" }),
                                  T.bind(T.win, "pointerdown", T.ontouchstart),
                                  T.bind(l, "pointerup", T.ontouchend),
                                  T.delegate(l, "pointermove", T.ontouchmove))
                                : P.hasmstouch
                                ? (T.css(T.ispage ? n("html") : T.win, {
                                      "-ms-touch-action": "none"
                                  }),
                                  T.css(T.rail, { "-ms-touch-action": "none" }),
                                  T.css(T.cursor, {
                                      "-ms-touch-action": "none"
                                  }),
                                  T.bind(
                                      T.win,
                                      "MSPointerDown",
                                      T.ontouchstart
                                  ),
                                  T.bind(l, "MSPointerUp", T.ontouchend),
                                  T.delegate(l, "MSPointerMove", T.ontouchmove),
                                  T.bind(T.cursor, "MSGestureHold", function(
                                      e
                                  ) {
                                      e.preventDefault();
                                  }),
                                  T.bind(T.cursor, "contextmenu", function(e) {
                                      e.preventDefault();
                                  }))
                                : P.cantouch &&
                                  (T.bind(
                                      T.win,
                                      "touchstart",
                                      T.ontouchstart,
                                      !1,
                                      !0
                                  ),
                                  T.bind(l, "touchend", T.ontouchend, !1, !0),
                                  T.bind(
                                      l,
                                      "touchcancel",
                                      T.ontouchend,
                                      !1,
                                      !0
                                  ),
                                  T.delegate(
                                      l,
                                      "touchmove",
                                      T.ontouchmove,
                                      !1,
                                      !0
                                  )),
                            M.emulatetouch &&
                                (T.bind(
                                    T.win,
                                    "mousedown",
                                    T.ontouchstart,
                                    !1,
                                    !0
                                ),
                                T.bind(l, "mouseup", T.ontouchend, !1, !0),
                                T.bind(l, "mousemove", T.ontouchmove, !1, !0)),
                            (M.cursordragontouch ||
                                (!P.cantouch && !M.emulatetouch)) &&
                                (T.rail.css({ cursor: "default" }),
                                T.railh && T.railh.css({ cursor: "default" }),
                                T.jqbind(T.rail, "mouseenter", function() {
                                    if (!T.ispage && !T.win.is(":visible"))
                                        return !1;
                                    T.canshowonmouseevent && T.showCursor(),
                                        (T.rail.active = !0);
                                }),
                                T.jqbind(T.rail, "mouseleave", function() {
                                    (T.rail.active = !1),
                                        T.rail.drag || T.hideCursor();
                                }),
                                M.sensitiverail &&
                                    (T.bind(T.rail, "click", function(e) {
                                        T.doRailClick(e, !1, !1);
                                    }),
                                    T.bind(T.rail, "dblclick", function(e) {
                                        T.doRailClick(e, !0, !1);
                                    }),
                                    T.bind(T.cursor, "click", function(e) {
                                        T.cancelEvent(e);
                                    }),
                                    T.bind(T.cursor, "dblclick", function(e) {
                                        T.cancelEvent(e);
                                    })),
                                T.railh &&
                                    (T.jqbind(
                                        T.railh,
                                        "mouseenter",
                                        function() {
                                            if (
                                                !T.ispage &&
                                                !T.win.is(":visible")
                                            )
                                                return !1;
                                            T.canshowonmouseevent &&
                                                T.showCursor(),
                                                (T.rail.active = !0);
                                        }
                                    ),
                                    T.jqbind(T.railh, "mouseleave", function() {
                                        (T.rail.active = !1),
                                            T.rail.drag || T.hideCursor();
                                    }),
                                    M.sensitiverail &&
                                        (T.bind(T.railh, "click", function(e) {
                                            T.doRailClick(e, !1, !0);
                                        }),
                                        T.bind(T.railh, "dblclick", function(
                                            e
                                        ) {
                                            T.doRailClick(e, !0, !0);
                                        }),
                                        T.bind(T.cursorh, "click", function(e) {
                                            T.cancelEvent(e);
                                        }),
                                        T.bind(T.cursorh, "dblclick", function(
                                            e
                                        ) {
                                            T.cancelEvent(e);
                                        })))),
                            M.cursordragontouch &&
                                (this.istouchcapable || P.cantouch) &&
                                (T.bind(
                                    T.cursor,
                                    "touchstart",
                                    T.ontouchstartCursor
                                ),
                                T.bind(
                                    T.cursor,
                                    "touchmove",
                                    T.ontouchmoveCursor
                                ),
                                T.bind(
                                    T.cursor,
                                    "touchend",
                                    T.ontouchendCursor
                                ),
                                T.cursorh &&
                                    T.bind(T.cursorh, "touchstart", function(
                                        e
                                    ) {
                                        T.ontouchstartCursor(e, !0);
                                    }),
                                T.cursorh &&
                                    T.bind(
                                        T.cursorh,
                                        "touchmove",
                                        T.ontouchmoveCursor
                                    ),
                                T.cursorh &&
                                    T.bind(
                                        T.cursorh,
                                        "touchend",
                                        T.ontouchendCursor
                                    )),
                            M.emulatetouch || P.isandroid || P.isios
                                ? (T.bind(
                                      P.hasmousecapture ? T.win : l,
                                      "mouseup",
                                      T.ontouchend
                                  ),
                                  T.onclick && T.bind(l, "click", T.onclick),
                                  M.cursordragontouch
                                      ? (T.bind(
                                            T.cursor,
                                            "mousedown",
                                            T.onmousedown
                                        ),
                                        T.bind(
                                            T.cursor,
                                            "mouseup",
                                            T.onmouseup
                                        ),
                                        T.cursorh &&
                                            T.bind(
                                                T.cursorh,
                                                "mousedown",
                                                function(e) {
                                                    T.onmousedown(e, !0);
                                                }
                                            ),
                                        T.cursorh &&
                                            T.bind(
                                                T.cursorh,
                                                "mouseup",
                                                T.onmouseup
                                            ))
                                      : (T.bind(T.rail, "mousedown", function(
                                            e
                                        ) {
                                            e.preventDefault();
                                        }),
                                        T.railh &&
                                            T.bind(
                                                T.railh,
                                                "mousedown",
                                                function(e) {
                                                    e.preventDefault();
                                                }
                                            )))
                                : (T.bind(
                                      P.hasmousecapture ? T.win : l,
                                      "mouseup",
                                      T.onmouseup
                                  ),
                                  T.bind(l, "mousemove", T.onmousemove),
                                  T.onclick && T.bind(l, "click", T.onclick),
                                  T.bind(T.cursor, "mousedown", T.onmousedown),
                                  T.bind(T.cursor, "mouseup", T.onmouseup),
                                  T.railh &&
                                      (T.bind(T.cursorh, "mousedown", function(
                                          e
                                      ) {
                                          T.onmousedown(e, !0);
                                      }),
                                      T.bind(
                                          T.cursorh,
                                          "mouseup",
                                          T.onmouseup
                                      )),
                                  !T.ispage &&
                                      M.enablescrollonselection &&
                                      (T.bind(
                                          T.win[0],
                                          "mousedown",
                                          T.onselectionstart
                                      ),
                                      T.bind(l, "mouseup", T.onselectionend),
                                      T.bind(
                                          T.cursor,
                                          "mouseup",
                                          T.onselectionend
                                      ),
                                      T.cursorh &&
                                          T.bind(
                                              T.cursorh,
                                              "mouseup",
                                              T.onselectionend
                                          ),
                                      T.bind(
                                          l,
                                          "mousemove",
                                          T.onselectiondrag
                                      )),
                                  T.zoom &&
                                      (T.jqbind(
                                          T.zoom,
                                          "mouseenter",
                                          function() {
                                              T.canshowonmouseevent &&
                                                  T.showCursor(),
                                                  (T.rail.active = !0);
                                          }
                                      ),
                                      T.jqbind(
                                          T.zoom,
                                          "mouseleave",
                                          function() {
                                              (T.rail.active = !1),
                                                  T.rail.drag || T.hideCursor();
                                          }
                                      ))),
                            M.enablemousewheel &&
                                (T.isiframe ||
                                    T.mousewheel(
                                        P.isie && T.ispage ? l : T.win,
                                        T.onmousewheel
                                    ),
                                T.mousewheel(T.rail, T.onmousewheel),
                                T.railh &&
                                    T.mousewheel(T.railh, T.onmousewheelhr)),
                            T.ispage ||
                                P.cantouch ||
                                /HTML|^BODY/.test(T.win[0].nodeName) ||
                                (T.win.attr("tabindex") ||
                                    T.win.attr({ tabindex: ++r }),
                                T.bind(T.win, "focus", function(e) {
                                    (o =
                                        T.getTarget(e).id ||
                                        T.getTarget(e) ||
                                        !1),
                                        (T.hasfocus = !0),
                                        T.canshowonmouseevent &&
                                            T.noticeCursor();
                                }),
                                T.bind(T.win, "blur", function(e) {
                                    (o = !1), (T.hasfocus = !1);
                                }),
                                T.bind(T.win, "mouseenter", function(e) {
                                    (t =
                                        T.getTarget(e).id ||
                                        T.getTarget(e) ||
                                        !1),
                                        (T.hasmousefocus = !0),
                                        T.canshowonmouseevent &&
                                            T.noticeCursor();
                                }),
                                T.bind(T.win, "mouseleave", function(e) {
                                    (t = !1),
                                        (T.hasmousefocus = !1),
                                        T.rail.drag || T.hideCursor();
                                })),
                            (T.onkeypress = function(e) {
                                if (T.railslocked && 0 === T.page.maxh)
                                    return !0;
                                e = e || a.event;
                                var r = T.getTarget(e);
                                if (
                                    r &&
                                    /INPUT|TEXTAREA|SELECT|OPTION/.test(
                                        r.nodeName
                                    ) &&
                                    (!(
                                        r.getAttribute("type") ||
                                        r.type ||
                                        !1
                                    ) ||
                                        !/submit|button|cancel/i.tp)
                                )
                                    return !0;
                                if (n(r).attr("contenteditable")) return !0;
                                if (
                                    T.hasfocus ||
                                    (T.hasmousefocus && !o) ||
                                    (T.ispage && !o && !t)
                                ) {
                                    var i = e.keyCode;
                                    if (T.railslocked && 27 != i)
                                        return T.cancelEvent(e);
                                    var s = e.ctrlKey || !1,
                                        l = e.shiftKey || !1,
                                        c = !1;
                                    switch (i) {
                                        case 38:
                                        case 63233:
                                            T.doScrollBy(72), (c = !0);
                                            break;
                                        case 40:
                                        case 63235:
                                            T.doScrollBy(-72), (c = !0);
                                            break;
                                        case 37:
                                        case 63232:
                                            T.railh &&
                                                (s
                                                    ? T.doScrollLeft(0)
                                                    : T.doScrollLeftBy(72),
                                                (c = !0));
                                            break;
                                        case 39:
                                        case 63234:
                                            T.railh &&
                                                (s
                                                    ? T.doScrollLeft(
                                                          T.page.maxw
                                                      )
                                                    : T.doScrollLeftBy(-72),
                                                (c = !0));
                                            break;
                                        case 33:
                                        case 63276:
                                            T.doScrollBy(T.view.h), (c = !0);
                                            break;
                                        case 34:
                                        case 63277:
                                            T.doScrollBy(-T.view.h), (c = !0);
                                            break;
                                        case 36:
                                        case 63273:
                                            T.railh && s
                                                ? T.doScrollPos(0, 0)
                                                : T.doScrollTo(0),
                                                (c = !0);
                                            break;
                                        case 35:
                                        case 63275:
                                            T.railh && s
                                                ? T.doScrollPos(
                                                      T.page.maxw,
                                                      T.page.maxh
                                                  )
                                                : T.doScrollTo(T.page.maxh),
                                                (c = !0);
                                            break;
                                        case 32:
                                            M.spacebarenabled &&
                                                (l
                                                    ? T.doScrollBy(T.view.h)
                                                    : T.doScrollBy(-T.view.h),
                                                (c = !0));
                                            break;
                                        case 27:
                                            T.zoomactive &&
                                                (T.doZoom(), (c = !0));
                                    }
                                    if (c) return T.cancelEvent(e);
                                }
                            }),
                            M.enablekeyboard &&
                                T.bind(
                                    l,
                                    P.isopera && !P.isopera12
                                        ? "keypress"
                                        : "keydown",
                                    T.onkeypress
                                ),
                            T.bind(l, "keydown", function(e) {
                                (e.ctrlKey || !1) && (T.wheelprevented = !0);
                            }),
                            T.bind(l, "keyup", function(e) {
                                e.ctrlKey || !1 || (T.wheelprevented = !1);
                            }),
                            T.bind(a, "blur", function(e) {
                                T.wheelprevented = !1;
                            }),
                            T.bind(a, "resize", T.onscreenresize),
                            T.bind(a, "orientationchange", T.onscreenresize),
                            T.bind(a, "load", T.lazyResize),
                            P.ischrome && !T.ispage && !T.haswrapper)
                        ) {
                            var C = T.win.attr("style"),
                                N = parseFloat(T.win.css("width")) + 1;
                            T.win.css("width", N),
                                T.synched("chromefix", function() {
                                    T.win.attr("style", C);
                                });
                        }
                        if (
                            ((T.onAttributeChange = function(e) {
                                T.lazyResize(T.isieold ? 250 : 30);
                            }),
                            M.enableobserver &&
                                (T.isie11 ||
                                    !1 === m ||
                                    ((T.observerbody = new m(function(e) {
                                        if (
                                            (e.forEach(function(e) {
                                                if ("attributes" == e.type)
                                                    return E.hasClass(
                                                        "modal-open"
                                                    ) &&
                                                        E.hasClass(
                                                            "modal-dialog"
                                                        ) &&
                                                        !n.contains(
                                                            n(
                                                                ".modal-dialog"
                                                            )[0],
                                                            T.doc[0]
                                                        )
                                                        ? T.hide()
                                                        : T.show();
                                            }),
                                            T.me.clientWidth != T.page.width ||
                                                T.me.clientHeight !=
                                                    T.page.height)
                                        )
                                            return T.lazyResize(30);
                                    })),
                                    T.observerbody.observe(l.body, {
                                        childList: !0,
                                        subtree: !0,
                                        characterData: !1,
                                        attributes: !0,
                                        attributeFilter: ["class"]
                                    })),
                                !T.ispage && !T.haswrapper))
                        ) {
                            var R = T.win[0];
                            !1 !== m
                                ? ((T.observer = new m(function(e) {
                                      e.forEach(T.onAttributeChange);
                                  })),
                                  T.observer.observe(R, {
                                      childList: !0,
                                      characterData: !1,
                                      attributes: !0,
                                      subtree: !1
                                  }),
                                  (T.observerremover = new m(function(e) {
                                      e.forEach(function(e) {
                                          if (e.removedNodes.length > 0)
                                              for (var o in e.removedNodes)
                                                  if (
                                                      T &&
                                                      e.removedNodes[o] === R
                                                  )
                                                      return T.remove();
                                      });
                                  })),
                                  T.observerremover.observe(R.parentNode, {
                                      childList: !0,
                                      characterData: !1,
                                      attributes: !1,
                                      subtree: !1
                                  }))
                                : (T.bind(
                                      R,
                                      P.isie && !P.isie9
                                          ? "propertychange"
                                          : "DOMAttrModified",
                                      T.onAttributeChange
                                  ),
                                  P.isie9 &&
                                      R.attachEvent(
                                          "onpropertychange",
                                          T.onAttributeChange
                                      ),
                                  T.bind(R, "DOMNodeRemoved", function(e) {
                                      e.target === R && T.remove();
                                  }));
                        }
                        !T.ispage &&
                            M.boxzoom &&
                            T.bind(a, "resize", T.resizeZoom),
                            T.istextarea &&
                                (T.bind(T.win, "keydown", T.lazyResize),
                                T.bind(T.win, "mouseup", T.lazyResize)),
                            T.lazyResize(30);
                    }
                    if ("IFRAME" == this.doc[0].nodeName) {
                        var _ = function() {
                            T.iframexd = !1;
                            var o;
                            try {
                                (o =
                                    "contentDocument" in this
                                        ? this.contentDocument
                                        : this.contentWindow._doc).domain;
                            } catch (e) {
                                (T.iframexd = !0), (o = !1);
                            }
                            if (T.iframexd)
                                return (
                                    "console" in a &&
                                        console.log(
                                            "NiceScroll error: policy restriced iframe"
                                        ),
                                    !0
                                );
                            if (
                                ((T.forcescreen = !0),
                                T.isiframe &&
                                    ((T.iframe = {
                                        doc: n(o),
                                        html: T.doc.contents().find("html")[0],
                                        body: T.doc.contents().find("body")[0]
                                    }),
                                    (T.getContentSize = function() {
                                        return {
                                            w: Math.max(
                                                T.iframe.html.scrollWidth,
                                                T.iframe.body.scrollWidth
                                            ),
                                            h: Math.max(
                                                T.iframe.html.scrollHeight,
                                                T.iframe.body.scrollHeight
                                            )
                                        };
                                    }),
                                    (T.docscroll = n(T.iframe.body))),
                                !P.isios && M.iframeautoresize && !T.isiframe)
                            ) {
                                T.win.scrollTop(0), T.doc.height("");
                                var t = Math.max(
                                    o.getElementsByTagName("html")[0]
                                        .scrollHeight,
                                    o.body.scrollHeight
                                );
                                T.doc.height(t);
                            }
                            T.lazyResize(30),
                                T.css(n(T.iframe.body), e),
                                P.isios &&
                                    T.haswrapper &&
                                    T.css(n(o.body), {
                                        "-webkit-transform":
                                            "translate3d(0,0,0)"
                                    }),
                                "contentWindow" in this
                                    ? T.bind(
                                          this.contentWindow,
                                          "scroll",
                                          T.onscroll
                                      )
                                    : T.bind(o, "scroll", T.onscroll),
                                M.enablemousewheel &&
                                    T.mousewheel(o, T.onmousewheel),
                                M.enablekeyboard &&
                                    T.bind(
                                        o,
                                        P.isopera ? "keypress" : "keydown",
                                        T.onkeypress
                                    ),
                                P.cantouch
                                    ? (T.bind(o, "touchstart", T.ontouchstart),
                                      T.bind(o, "touchmove", T.ontouchmove))
                                    : M.emulatetouch &&
                                      (T.bind(o, "mousedown", T.ontouchstart),
                                      T.bind(o, "mousemove", function(e) {
                                          return T.ontouchmove(e, !0);
                                      }),
                                      M.grabcursorenabled &&
                                          P.cursorgrabvalue &&
                                          T.css(n(o.body), {
                                              cursor: P.cursorgrabvalue
                                          })),
                                T.bind(o, "mouseup", T.ontouchend),
                                T.zoom &&
                                    (M.dblclickzoom &&
                                        T.bind(o, "dblclick", T.doZoom),
                                    T.ongesturezoom &&
                                        T.bind(
                                            o,
                                            "gestureend",
                                            T.ongesturezoom
                                        ));
                        };
                        this.doc[0].readyState &&
                            "complete" === this.doc[0].readyState &&
                            setTimeout(function() {
                                _.call(T.doc[0], !1);
                            }, 500),
                            T.bind(this.doc, "load", _);
                    }
                }),
                (this.showCursor = function(e, o) {
                    if (
                        (T.cursortimeout &&
                            (clearTimeout(T.cursortimeout),
                            (T.cursortimeout = 0)),
                        T.rail)
                    ) {
                        if (
                            (T.autohidedom &&
                                (T.autohidedom
                                    .stop()
                                    .css({ opacity: M.cursoropacitymax }),
                                (T.cursoractive = !0)),
                            (T.rail.drag && 1 == T.rail.drag.pt) ||
                                (void 0 !== e &&
                                    !1 !== e &&
                                    (T.scroll.y = (e / T.scrollratio.y) | 0),
                                void 0 !== o &&
                                    (T.scroll.x = (o / T.scrollratio.x) | 0)),
                            T.cursor.css({
                                height: T.cursorheight,
                                top: T.scroll.y
                            }),
                            T.cursorh)
                        ) {
                            var t = T.hasreversehr
                                ? T.scrollvaluemaxw - T.scroll.x
                                : T.scroll.x;
                            T.cursorh.css({
                                width: T.cursorwidth,
                                left:
                                    !T.rail.align && T.rail.visibility
                                        ? t + T.rail.width
                                        : t
                            }),
                                (T.cursoractive = !0);
                        }
                        T.zoom &&
                            T.zoom.stop().css({ opacity: M.cursoropacitymax });
                    }
                }),
                (this.hideCursor = function(e) {
                    T.cursortimeout ||
                        (T.rail &&
                            T.autohidedom &&
                            ((T.hasmousefocus && "leave" === M.autohidemode) ||
                                (T.cursortimeout = setTimeout(function() {
                                    (T.rail.active && T.showonmouseevent) ||
                                        (T.autohidedom.stop().animate({
                                            opacity: M.cursoropacitymin
                                        }),
                                        T.zoom &&
                                            T.zoom.stop().animate({
                                                opacity: M.cursoropacitymin
                                            }),
                                        (T.cursoractive = !1)),
                                        (T.cursortimeout = 0);
                                }, e || M.hidecursordelay))));
                }),
                (this.noticeCursor = function(e, o, t) {
                    T.showCursor(o, t), T.rail.active || T.hideCursor(e);
                }),
                (this.getContentSize = T.ispage
                    ? function() {
                          return {
                              w: Math.max(
                                  l.body.scrollWidth,
                                  l.documentElement.scrollWidth
                              ),
                              h: Math.max(
                                  l.body.scrollHeight,
                                  l.documentElement.scrollHeight
                              )
                          };
                      }
                    : T.haswrapper
                    ? function() {
                          return {
                              w: T.doc[0].offsetWidth,
                              h: T.doc[0].offsetHeight
                          };
                      }
                    : function() {
                          return {
                              w: T.docscroll[0].scrollWidth,
                              h: T.docscroll[0].scrollHeight
                          };
                      }),
                (this.onResize = function(e, o) {
                    if (!T || !T.win) return !1;
                    var t = T.page.maxh,
                        r = T.page.maxw,
                        i = T.view.h,
                        s = T.view.w;
                    if (
                        ((T.view = {
                            w: T.ispage ? T.win.width() : T.win[0].clientWidth,
                            h: T.ispage ? T.win.height() : T.win[0].clientHeight
                        }),
                        (T.page = o || T.getContentSize()),
                        (T.page.maxh = Math.max(0, T.page.h - T.view.h)),
                        (T.page.maxw = Math.max(0, T.page.w - T.view.w)),
                        T.page.maxh == t &&
                            T.page.maxw == r &&
                            T.view.w == s &&
                            T.view.h == i)
                    ) {
                        if (T.ispage) return T;
                        var n = T.win.offset();
                        if (T.lastposition) {
                            var l = T.lastposition;
                            if (l.top == n.top && l.left == n.left) return T;
                        }
                        T.lastposition = n;
                    }
                    return (
                        0 === T.page.maxh
                            ? (T.hideRail(),
                              (T.scrollvaluemax = 0),
                              (T.scroll.y = 0),
                              (T.scrollratio.y = 0),
                              (T.cursorheight = 0),
                              T.setScrollTop(0),
                              T.rail && (T.rail.scrollable = !1))
                            : ((T.page.maxh -=
                                  M.railpadding.top + M.railpadding.bottom),
                              (T.rail.scrollable = !0)),
                        0 === T.page.maxw
                            ? (T.hideRailHr(),
                              (T.scrollvaluemaxw = 0),
                              (T.scroll.x = 0),
                              (T.scrollratio.x = 0),
                              (T.cursorwidth = 0),
                              T.setScrollLeft(0),
                              T.railh && (T.railh.scrollable = !1))
                            : ((T.page.maxw -=
                                  M.railpadding.left + M.railpadding.right),
                              T.railh &&
                                  (T.railh.scrollable = M.horizrailenabled)),
                        (T.railslocked =
                            T.locked ||
                            (0 === T.page.maxh && 0 === T.page.maxw)),
                        T.railslocked
                            ? (T.ispage || T.updateScrollBar(T.view), !1)
                            : (T.hidden ||
                                  (T.rail.visibility || T.showRail(),
                                  T.railh &&
                                      !T.railh.visibility &&
                                      T.showRailHr()),
                              T.istextarea &&
                                  T.win.css("resize") &&
                                  "none" != T.win.css("resize") &&
                                  (T.view.h -= 20),
                              (T.cursorheight = Math.min(
                                  T.view.h,
                                  Math.round(T.view.h * (T.view.h / T.page.h))
                              )),
                              (T.cursorheight = M.cursorfixedheight
                                  ? M.cursorfixedheight
                                  : Math.max(
                                        M.cursorminheight,
                                        T.cursorheight
                                    )),
                              (T.cursorwidth = Math.min(
                                  T.view.w,
                                  Math.round(T.view.w * (T.view.w / T.page.w))
                              )),
                              (T.cursorwidth = M.cursorfixedheight
                                  ? M.cursorfixedheight
                                  : Math.max(M.cursorminheight, T.cursorwidth)),
                              (T.scrollvaluemax =
                                  T.view.h -
                                  T.cursorheight -
                                  (M.railpadding.top + M.railpadding.bottom)),
                              T.hasborderbox ||
                                  (T.scrollvaluemax -=
                                      T.cursor[0].offsetHeight -
                                      T.cursor[0].clientHeight),
                              T.railh &&
                                  ((T.railh.width =
                                      T.page.maxh > 0
                                          ? T.view.w - T.rail.width
                                          : T.view.w),
                                  (T.scrollvaluemaxw =
                                      T.railh.width -
                                      T.cursorwidth -
                                      (M.railpadding.left +
                                          M.railpadding.right))),
                              T.ispage || T.updateScrollBar(T.view),
                              (T.scrollratio = {
                                  x: T.page.maxw / T.scrollvaluemaxw,
                                  y: T.page.maxh / T.scrollvaluemax
                              }),
                              T.getScrollTop() > T.page.maxh
                                  ? T.doScrollTop(T.page.maxh)
                                  : ((T.scroll.y =
                                        (T.getScrollTop() / T.scrollratio.y) |
                                        0),
                                    (T.scroll.x =
                                        (T.getScrollLeft() / T.scrollratio.x) |
                                        0),
                                    T.cursoractive && T.noticeCursor()),
                              T.scroll.y &&
                                  0 === T.getScrollTop() &&
                                  T.doScrollTo(
                                      (T.scroll.y * T.scrollratio.y) | 0
                                  ),
                              T)
                    );
                }),
                (this.resize = T.onResize);
            var O = 0;
            (this.onscreenresize = function(e) {
                clearTimeout(O);
                var o = !T.ispage && !T.haswrapper;
                o && T.hideRails(),
                    (O = setTimeout(function() {
                        T && (o && T.showRails(), T.resize()), (O = 0);
                    }, 120));
            }),
                (this.lazyResize = function(e) {
                    return (
                        clearTimeout(O),
                        (e = isNaN(e) ? 240 : e),
                        (O = setTimeout(function() {
                            T && T.resize(), (O = 0);
                        }, e)),
                        T
                    );
                }),
                (this.jqbind = function(e, o, t) {
                    T.events.push({ e: e, n: o, f: t, q: !0 }), n(e).on(o, t);
                }),
                (this.mousewheel = function(e, o, t) {
                    var r = "jquery" in e ? e[0] : e;
                    if ("onwheel" in l.createElement("div"))
                        T._bind(r, "wheel", o, t || !1);
                    else {
                        var i =
                            void 0 !== l.onmousewheel
                                ? "mousewheel"
                                : "DOMMouseScroll";
                        S(r, i, o, t || !1),
                            "DOMMouseScroll" == i &&
                                S(r, "MozMousePixelScroll", o, t || !1);
                    }
                });
            var Y = !1;
            if (P.haseventlistener) {
                try {
                    var H = Object.defineProperty({}, "passive", {
                        get: function() {
                            Y = !0;
                        }
                    });
                    a.addEventListener("test", null, H);
                } catch (e) {}
                (this.stopPropagation = function(e) {
                    return (
                        !!e &&
                        ((e = e.original ? e.original : e).stopPropagation(),
                        !1)
                    );
                }),
                    (this.cancelEvent = function(e) {
                        return (
                            e.cancelable && e.preventDefault(),
                            e.stopImmediatePropagation(),
                            e.preventManipulation && e.preventManipulation(),
                            !1
                        );
                    });
            } else
                (Event.prototype.preventDefault = function() {
                    this.returnValue = !1;
                }),
                    (Event.prototype.stopPropagation = function() {
                        this.cancelBubble = !0;
                    }),
                    (a.constructor.prototype.addEventListener = l.constructor.prototype.addEventListener = Element.prototype.addEventListener = function(
                        e,
                        o,
                        t
                    ) {
                        this.attachEvent("on" + e, o);
                    }),
                    (a.constructor.prototype.removeEventListener = l.constructor.prototype.removeEventListener = Element.prototype.removeEventListener = function(
                        e,
                        o,
                        t
                    ) {
                        this.detachEvent("on" + e, o);
                    }),
                    (this.cancelEvent = function(e) {
                        return (
                            (e = e || a.event) &&
                                ((e.cancelBubble = !0),
                                (e.cancel = !0),
                                (e.returnValue = !1)),
                            !1
                        );
                    }),
                    (this.stopPropagation = function(e) {
                        return (e = e || a.event) && (e.cancelBubble = !0), !1;
                    });
            (this.delegate = function(e, o, t, r, i) {
                var s = d[o] || !1;
                s ||
                    ((s = {
                        a: [],
                        l: [],
                        f: function(e) {
                            for (
                                var o = s.l, t = !1, r = o.length - 1;
                                r >= 0;
                                r--
                            )
                                if (!1 === (t = o[r].call(e.target, e)))
                                    return !1;
                            return t;
                        }
                    }),
                    T.bind(e, o, s.f, r, i),
                    (d[o] = s)),
                    T.ispage
                        ? ((s.a = [T.id].concat(s.a)), (s.l = [t].concat(s.l)))
                        : (s.a.push(T.id), s.l.push(t));
            }),
                (this.undelegate = function(e, o, t, r, i) {
                    var s = d[o] || !1;
                    if (s && s.l)
                        for (var n = 0, l = s.l.length; n < l; n++)
                            s.a[n] === T.id &&
                                (s.a.splice(n),
                                s.l.splice(n),
                                0 === s.a.length &&
                                    (T._unbind(e, o, s.l.f), (d[o] = null)));
                }),
                (this.bind = function(e, o, t, r, i) {
                    var s = "jquery" in e ? e[0] : e;
                    T._bind(s, o, t, r || !1, i || !1);
                }),
                (this._bind = function(e, o, t, r, i) {
                    T.events.push({ e: e, n: o, f: t, b: r, q: !1 }),
                        Y && i
                            ? e.addEventListener(o, t, {
                                  passive: !1,
                                  capture: r
                              })
                            : e.addEventListener(o, t, r || !1);
                }),
                (this._unbind = function(e, o, t, r) {
                    d[o]
                        ? T.undelegate(e, o, t, r)
                        : e.removeEventListener(o, t, r);
                }),
                (this.unbindAll = function() {
                    for (var e = 0; e < T.events.length; e++) {
                        var o = T.events[e];
                        o.q
                            ? o.e.unbind(o.n, o.f)
                            : T._unbind(o.e, o.n, o.f, o.b);
                    }
                }),
                (this.showRails = function() {
                    return T.showRail().showRailHr();
                }),
                (this.showRail = function() {
                    return (
                        0 === T.page.maxh ||
                            (!T.ispage && "none" == T.win.css("display")) ||
                            ((T.rail.visibility = !0),
                            T.rail.css("display", "block")),
                        T
                    );
                }),
                (this.showRailHr = function() {
                    return (
                        T.railh &&
                            (0 === T.page.maxw ||
                                (!T.ispage && "none" == T.win.css("display")) ||
                                ((T.railh.visibility = !0),
                                T.railh.css("display", "block"))),
                        T
                    );
                }),
                (this.hideRails = function() {
                    return T.hideRail().hideRailHr();
                }),
                (this.hideRail = function() {
                    return (
                        (T.rail.visibility = !1),
                        T.rail.css("display", "none"),
                        T
                    );
                }),
                (this.hideRailHr = function() {
                    return (
                        T.railh &&
                            ((T.railh.visibility = !1),
                            T.railh.css("display", "none")),
                        T
                    );
                }),
                (this.show = function() {
                    return (T.hidden = !1), (T.railslocked = !1), T.showRails();
                }),
                (this.hide = function() {
                    return (T.hidden = !0), (T.railslocked = !0), T.hideRails();
                }),
                (this.toggle = function() {
                    return T.hidden ? T.show() : T.hide();
                }),
                (this.remove = function() {
                    T.stop(), T.cursortimeout && clearTimeout(T.cursortimeout);
                    for (var e in T.delaylist)
                        T.delaylist[e] && h(T.delaylist[e].h);
                    T.doZoomOut(),
                        T.unbindAll(),
                        P.isie9 &&
                            T.win[0].detachEvent(
                                "onpropertychange",
                                T.onAttributeChange
                            ),
                        !1 !== T.observer && T.observer.disconnect(),
                        !1 !== T.observerremover &&
                            T.observerremover.disconnect(),
                        !1 !== T.observerbody && T.observerbody.disconnect(),
                        (T.events = null),
                        T.cursor && T.cursor.remove(),
                        T.cursorh && T.cursorh.remove(),
                        T.rail && T.rail.remove(),
                        T.railh && T.railh.remove(),
                        T.zoom && T.zoom.remove();
                    for (var o = 0; o < T.saved.css.length; o++) {
                        var t = T.saved.css[o];
                        t[0].css(t[1], void 0 === t[2] ? "" : t[2]);
                    }
                    (T.saved = !1), T.me.data("__nicescroll", "");
                    var r = n.nicescroll;
                    r.each(function(e) {
                        if (this && this.id === T.id) {
                            delete r[e];
                            for (var o = ++e; o < r.length; o++, e++)
                                r[e] = r[o];
                            --r.length && delete r[r.length];
                        }
                    });
                    for (var i in T) (T[i] = null), delete T[i];
                    T = null;
                }),
                (this.scrollstart = function(e) {
                    return (this.onscrollstart = e), T;
                }),
                (this.scrollend = function(e) {
                    return (this.onscrollend = e), T;
                }),
                (this.scrollcancel = function(e) {
                    return (this.onscrollcancel = e), T;
                }),
                (this.zoomin = function(e) {
                    return (this.onzoomin = e), T;
                }),
                (this.zoomout = function(e) {
                    return (this.onzoomout = e), T;
                }),
                (this.isScrollable = function(e) {
                    var o = e.target ? e.target : e;
                    if ("OPTION" == o.nodeName) return !0;
                    for (
                        ;
                        o &&
                        1 == o.nodeType &&
                        o !== this.me[0] &&
                        !/^BODY|HTML/.test(o.nodeName);

                    ) {
                        var t = n(o),
                            r =
                                t.css("overflowY") ||
                                t.css("overflowX") ||
                                t.css("overflow") ||
                                "";
                        if (/scroll|auto/.test(r))
                            return o.clientHeight != o.scrollHeight;
                        o = !!o.parentNode && o.parentNode;
                    }
                    return !1;
                }),
                (this.getViewport = function(e) {
                    for (
                        var o = !(!e || !e.parentNode) && e.parentNode;
                        o && 1 == o.nodeType && !/^BODY|HTML/.test(o.nodeName);

                    ) {
                        var t = n(o);
                        if (/fixed|absolute/.test(t.css("position"))) return t;
                        var r =
                            t.css("overflowY") ||
                            t.css("overflowX") ||
                            t.css("overflow") ||
                            "";
                        if (
                            /scroll|auto/.test(r) &&
                            o.clientHeight != o.scrollHeight
                        )
                            return t;
                        if (t.getNiceScroll().length > 0) return t;
                        o = !!o.parentNode && o.parentNode;
                    }
                    return !1;
                }),
                (this.triggerScrollStart = function(e, o, t, r, i) {
                    if (T.onscrollstart) {
                        var s = {
                            type: "scrollstart",
                            current: { x: e, y: o },
                            request: { x: t, y: r },
                            end: { x: T.newscrollx, y: T.newscrolly },
                            speed: i
                        };
                        T.onscrollstart.call(T, s);
                    }
                }),
                (this.triggerScrollEnd = function() {
                    if (T.onscrollend) {
                        var e = T.getScrollLeft(),
                            o = T.getScrollTop(),
                            t = {
                                type: "scrollend",
                                current: { x: e, y: o },
                                end: { x: e, y: o }
                            };
                        T.onscrollend.call(T, t);
                    }
                });
            var B = 0,
                X = 0,
                D = 0,
                A = 1,
                q = !1;
            if (
                ((this.onmousewheel = function(e) {
                    if (T.wheelprevented || T.locked) return !1;
                    if (T.railslocked)
                        return T.debounced("checkunlock", T.resize, 250), !1;
                    if (T.rail.drag) return T.cancelEvent(e);
                    if (
                        ("auto" === M.oneaxismousemode &&
                            0 !== e.deltaX &&
                            (M.oneaxismousemode = !1),
                        M.oneaxismousemode &&
                            0 === e.deltaX &&
                            !T.rail.scrollable)
                    )
                        return (
                            !T.railh ||
                            !T.railh.scrollable ||
                            T.onmousewheelhr(e)
                        );
                    var o = f(),
                        t = !1;
                    if (
                        (M.preservenativescrolling &&
                            T.checkarea + 600 < o &&
                            ((T.nativescrollingarea = T.isScrollable(e)),
                            (t = !0)),
                        (T.checkarea = o),
                        T.nativescrollingarea)
                    )
                        return !0;
                    var r = k(e, !1, t);
                    return r && (T.checkarea = 0), r;
                }),
                (this.onmousewheelhr = function(e) {
                    if (!T.wheelprevented) {
                        if (T.railslocked || !T.railh.scrollable) return !0;
                        if (T.rail.drag) return T.cancelEvent(e);
                        var o = f(),
                            t = !1;
                        return (
                            M.preservenativescrolling &&
                                T.checkarea + 600 < o &&
                                ((T.nativescrollingarea = T.isScrollable(e)),
                                (t = !0)),
                            (T.checkarea = o),
                            !!T.nativescrollingarea ||
                                (T.railslocked ? T.cancelEvent(e) : k(e, !0, t))
                        );
                    }
                }),
                (this.stop = function() {
                    return (
                        T.cancelScroll(),
                        T.scrollmon && T.scrollmon.stop(),
                        (T.cursorfreezed = !1),
                        (T.scroll.y = Math.round(
                            T.getScrollTop() * (1 / T.scrollratio.y)
                        )),
                        T.noticeCursor(),
                        T
                    );
                }),
                (this.getTransitionSpeed = function(e) {
                    return (80 + (e / 72) * M.scrollspeed) | 0;
                }),
                M.smoothscroll)
            )
                if (
                    T.ishwscroll &&
                    P.hastransition &&
                    M.usetransition &&
                    M.smoothscroll
                ) {
                    var j = "";
                    (this.resetTransition = function() {
                        (j = ""),
                            T.doc.css(
                                P.prefixstyle + "transition-duration",
                                "0ms"
                            );
                    }),
                        (this.prepareTransition = function(e, o) {
                            var t = o ? e : T.getTransitionSpeed(e),
                                r = t + "ms";
                            return (
                                j !== r &&
                                    ((j = r),
                                    T.doc.css(
                                        P.prefixstyle + "transition-duration",
                                        r
                                    )),
                                t
                            );
                        }),
                        (this.doScrollLeft = function(e, o) {
                            var t = T.scrollrunning
                                ? T.newscrolly
                                : T.getScrollTop();
                            T.doScrollPos(e, t, o);
                        }),
                        (this.doScrollTop = function(e, o) {
                            var t = T.scrollrunning
                                ? T.newscrollx
                                : T.getScrollLeft();
                            T.doScrollPos(t, e, o);
                        }),
                        (this.cursorupdate = {
                            running: !1,
                            start: function() {
                                var e = this;
                                if (!e.running) {
                                    e.running = !0;
                                    var o = function() {
                                        e.running && u(o),
                                            T.showCursor(
                                                T.getScrollTop(),
                                                T.getScrollLeft()
                                            ),
                                            T.notifyScrollEvent(T.win[0]);
                                    };
                                    u(o);
                                }
                            },
                            stop: function() {
                                this.running = !1;
                            }
                        }),
                        (this.doScrollPos = function(e, o, t) {
                            var r = T.getScrollTop(),
                                i = T.getScrollLeft();
                            if (
                                (((T.newscrolly - r) * (o - r) < 0 ||
                                    (T.newscrollx - i) * (e - i) < 0) &&
                                    T.cancelScroll(),
                                M.bouncescroll
                                    ? (o < 0
                                          ? (o = (o / 2) | 0)
                                          : o > T.page.maxh &&
                                            (o =
                                                (T.page.maxh +
                                                    (o - T.page.maxh) / 2) |
                                                0),
                                      e < 0
                                          ? (e = (e / 2) | 0)
                                          : e > T.page.maxw &&
                                            (e =
                                                (T.page.maxw +
                                                    (e - T.page.maxw) / 2) |
                                                0))
                                    : (o < 0
                                          ? (o = 0)
                                          : o > T.page.maxh &&
                                            (o = T.page.maxh),
                                      e < 0
                                          ? (e = 0)
                                          : e > T.page.maxw &&
                                            (e = T.page.maxw)),
                                T.scrollrunning &&
                                    e == T.newscrollx &&
                                    o == T.newscrolly)
                            )
                                return !1;
                            (T.newscrolly = o), (T.newscrollx = e);
                            var s = T.getScrollTop(),
                                n = T.getScrollLeft(),
                                l = {};
                            (l.x = e - n), (l.y = o - s);
                            var a = 0 | Math.sqrt(l.x * l.x + l.y * l.y),
                                c = T.prepareTransition(a);
                            T.scrollrunning ||
                                ((T.scrollrunning = !0),
                                T.triggerScrollStart(n, s, e, o, c),
                                T.cursorupdate.start()),
                                (T.scrollendtrapped = !0),
                                P.transitionend ||
                                    (T.scrollendtrapped &&
                                        clearTimeout(T.scrollendtrapped),
                                    (T.scrollendtrapped = setTimeout(
                                        T.onScrollTransitionEnd,
                                        c
                                    ))),
                                T.setScrollTop(T.newscrolly),
                                T.setScrollLeft(T.newscrollx);
                        }),
                        (this.cancelScroll = function() {
                            if (!T.scrollendtrapped) return !0;
                            var e = T.getScrollTop(),
                                o = T.getScrollLeft();
                            return (
                                (T.scrollrunning = !1),
                                P.transitionend ||
                                    clearTimeout(P.transitionend),
                                (T.scrollendtrapped = !1),
                                T.resetTransition(),
                                T.setScrollTop(e),
                                T.railh && T.setScrollLeft(o),
                                T.timerscroll &&
                                    T.timerscroll.tm &&
                                    clearInterval(T.timerscroll.tm),
                                (T.timerscroll = !1),
                                (T.cursorfreezed = !1),
                                T.cursorupdate.stop(),
                                T.showCursor(e, o),
                                T
                            );
                        }),
                        (this.onScrollTransitionEnd = function() {
                            if (T.scrollendtrapped) {
                                var e = T.getScrollTop(),
                                    o = T.getScrollLeft();
                                if (
                                    (e < 0
                                        ? (e = 0)
                                        : e > T.page.maxh && (e = T.page.maxh),
                                    o < 0
                                        ? (o = 0)
                                        : o > T.page.maxw && (o = T.page.maxw),
                                    e != T.newscrolly || o != T.newscrollx)
                                )
                                    return T.doScrollPos(o, e, M.snapbackspeed);
                                T.scrollrunning && T.triggerScrollEnd(),
                                    (T.scrollrunning = !1),
                                    (T.scrollendtrapped = !1),
                                    T.resetTransition(),
                                    (T.timerscroll = !1),
                                    T.setScrollTop(e),
                                    T.railh && T.setScrollLeft(o),
                                    T.cursorupdate.stop(),
                                    T.noticeCursor(!1, e, o),
                                    (T.cursorfreezed = !1);
                            }
                        });
                } else
                    (this.doScrollLeft = function(e, o) {
                        var t = T.scrollrunning
                            ? T.newscrolly
                            : T.getScrollTop();
                        T.doScrollPos(e, t, o);
                    }),
                        (this.doScrollTop = function(e, o) {
                            var t = T.scrollrunning
                                ? T.newscrollx
                                : T.getScrollLeft();
                            T.doScrollPos(t, e, o);
                        }),
                        (this.doScrollPos = function(e, o, t) {
                            var r = T.getScrollTop(),
                                i = T.getScrollLeft();
                            ((T.newscrolly - r) * (o - r) < 0 ||
                                (T.newscrollx - i) * (e - i) < 0) &&
                                T.cancelScroll();
                            var s = !1;
                            if (
                                ((T.bouncescroll && T.rail.visibility) ||
                                    (o < 0
                                        ? ((o = 0), (s = !0))
                                        : o > T.page.maxh &&
                                          ((o = T.page.maxh), (s = !0))),
                                (T.bouncescroll && T.railh.visibility) ||
                                    (e < 0
                                        ? ((e = 0), (s = !0))
                                        : e > T.page.maxw &&
                                          ((e = T.page.maxw), (s = !0))),
                                T.scrollrunning &&
                                    T.newscrolly === o &&
                                    T.newscrollx === e)
                            )
                                return !0;
                            (T.newscrolly = o),
                                (T.newscrollx = e),
                                (T.dst = {}),
                                (T.dst.x = e - i),
                                (T.dst.y = o - r),
                                (T.dst.px = i),
                                (T.dst.py = r);
                            var n =
                                    0 |
                                    Math.sqrt(
                                        T.dst.x * T.dst.x + T.dst.y * T.dst.y
                                    ),
                                l = T.getTransitionSpeed(n);
                            T.bzscroll = {};
                            var a = s ? 1 : 0.58;
                            (T.bzscroll.x = new R(
                                i,
                                T.newscrollx,
                                l,
                                0,
                                0,
                                a,
                                1
                            )),
                                (T.bzscroll.y = new R(
                                    r,
                                    T.newscrolly,
                                    l,
                                    0,
                                    0,
                                    a,
                                    1
                                ));
                            f();
                            var c = function() {
                                if (T.scrollrunning) {
                                    var e = T.bzscroll.y.getPos();
                                    T.setScrollLeft(T.bzscroll.x.getNow()),
                                        T.setScrollTop(T.bzscroll.y.getNow()),
                                        e <= 1
                                            ? (T.timer = u(c))
                                            : ((T.scrollrunning = !1),
                                              (T.timer = 0),
                                              T.triggerScrollEnd());
                                }
                            };
                            T.scrollrunning ||
                                (T.triggerScrollStart(i, r, e, o, l),
                                (T.scrollrunning = !0),
                                (T.timer = u(c)));
                        }),
                        (this.cancelScroll = function() {
                            return (
                                T.timer && h(T.timer),
                                (T.timer = 0),
                                (T.bzscroll = !1),
                                (T.scrollrunning = !1),
                                T
                            );
                        });
            else
                (this.doScrollLeft = function(e, o) {
                    var t = T.getScrollTop();
                    T.doScrollPos(e, t, o);
                }),
                    (this.doScrollTop = function(e, o) {
                        var t = T.getScrollLeft();
                        T.doScrollPos(t, e, o);
                    }),
                    (this.doScrollPos = function(e, o, t) {
                        var r = e > T.page.maxw ? T.page.maxw : e;
                        r < 0 && (r = 0);
                        var i = o > T.page.maxh ? T.page.maxh : o;
                        i < 0 && (i = 0),
                            T.synched("scroll", function() {
                                T.setScrollTop(i), T.setScrollLeft(r);
                            });
                    }),
                    (this.cancelScroll = function() {});
            (this.doScrollBy = function(e, o) {
                z(0, e);
            }),
                (this.doScrollLeftBy = function(e, o) {
                    z(e, 0);
                }),
                (this.doScrollTo = function(e, o) {
                    var t = o ? Math.round(e * T.scrollratio.y) : e;
                    t < 0 ? (t = 0) : t > T.page.maxh && (t = T.page.maxh),
                        (T.cursorfreezed = !1),
                        T.doScrollTop(e);
                }),
                (this.checkContentSize = function() {
                    var e = T.getContentSize();
                    (e.h == T.page.h && e.w == T.page.w) || T.resize(!1, e);
                }),
                (T.onscroll = function(e) {
                    T.rail.drag ||
                        T.cursorfreezed ||
                        T.synched("scroll", function() {
                            (T.scroll.y = Math.round(
                                T.getScrollTop() / T.scrollratio.y
                            )),
                                T.railh &&
                                    (T.scroll.x = Math.round(
                                        T.getScrollLeft() / T.scrollratio.x
                                    )),
                                T.noticeCursor();
                        });
                }),
                T.bind(T.docscroll, "scroll", T.onscroll),
                (this.doZoomIn = function(e) {
                    if (!T.zoomactive) {
                        (T.zoomactive = !0), (T.zoomrestore = { style: {} });
                        var o = [
                                "position",
                                "top",
                                "left",
                                "zIndex",
                                "backgroundColor",
                                "marginTop",
                                "marginBottom",
                                "marginLeft",
                                "marginRight"
                            ],
                            t = T.win[0].style;
                        for (var r in o) {
                            var i = o[r];
                            T.zoomrestore.style[i] =
                                void 0 !== t[i] ? t[i] : "";
                        }
                        (T.zoomrestore.style.width = T.win.css("width")),
                            (T.zoomrestore.style.height = T.win.css("height")),
                            (T.zoomrestore.padding = {
                                w: T.win.outerWidth() - T.win.width(),
                                h: T.win.outerHeight() - T.win.height()
                            }),
                            P.isios4 &&
                                ((T.zoomrestore.scrollTop = c.scrollTop()),
                                c.scrollTop(0)),
                            T.win.css({
                                position: P.isios4 ? "absolute" : "fixed",
                                top: 0,
                                left: 0,
                                zIndex: s + 100,
                                margin: 0
                            });
                        var n = T.win.css("backgroundColor");
                        return (
                            ("" === n ||
                                /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(
                                    n
                                )) &&
                                T.win.css("backgroundColor", "#fff"),
                            T.rail.css({ zIndex: s + 101 }),
                            T.zoom.css({ zIndex: s + 102 }),
                            T.zoom.css("backgroundPosition", "0 -18px"),
                            T.resizeZoom(),
                            T.onzoomin && T.onzoomin.call(T),
                            T.cancelEvent(e)
                        );
                    }
                }),
                (this.doZoomOut = function(e) {
                    if (T.zoomactive)
                        return (
                            (T.zoomactive = !1),
                            T.win.css("margin", ""),
                            T.win.css(T.zoomrestore.style),
                            P.isios4 && c.scrollTop(T.zoomrestore.scrollTop),
                            T.rail.css({ "z-index": T.zindex }),
                            T.zoom.css({ "z-index": T.zindex }),
                            (T.zoomrestore = !1),
                            T.zoom.css("backgroundPosition", "0 0"),
                            T.onResize(),
                            T.onzoomout && T.onzoomout.call(T),
                            T.cancelEvent(e)
                        );
                }),
                (this.doZoom = function(e) {
                    return T.zoomactive ? T.doZoomOut(e) : T.doZoomIn(e);
                }),
                (this.resizeZoom = function() {
                    if (T.zoomactive) {
                        var e = T.getScrollTop();
                        T.win.css({
                            width: c.width() - T.zoomrestore.padding.w + "px",
                            height: c.height() - T.zoomrestore.padding.h + "px"
                        }),
                            T.onResize(),
                            T.setScrollTop(Math.min(T.page.maxh, e));
                    }
                }),
                this.init(),
                n.nicescroll.push(this);
        },
        y = function(e) {
            var o = this;
            (this.nc = e),
                (this.lastx = 0),
                (this.lasty = 0),
                (this.speedx = 0),
                (this.speedy = 0),
                (this.lasttime = 0),
                (this.steptime = 0),
                (this.snapx = !1),
                (this.snapy = !1),
                (this.demulx = 0),
                (this.demuly = 0),
                (this.lastscrollx = -1),
                (this.lastscrolly = -1),
                (this.chkx = 0),
                (this.chky = 0),
                (this.timer = 0),
                (this.reset = function(e, t) {
                    o.stop(),
                        (o.steptime = 0),
                        (o.lasttime = f()),
                        (o.speedx = 0),
                        (o.speedy = 0),
                        (o.lastx = e),
                        (o.lasty = t),
                        (o.lastscrollx = -1),
                        (o.lastscrolly = -1);
                }),
                (this.update = function(e, t) {
                    var r = f();
                    (o.steptime = r - o.lasttime), (o.lasttime = r);
                    var i = t - o.lasty,
                        s = e - o.lastx,
                        n = o.nc.getScrollTop() + i,
                        l = o.nc.getScrollLeft() + s;
                    (o.snapx = l < 0 || l > o.nc.page.maxw),
                        (o.snapy = n < 0 || n > o.nc.page.maxh),
                        (o.speedx = s),
                        (o.speedy = i),
                        (o.lastx = e),
                        (o.lasty = t);
                }),
                (this.stop = function() {
                    o.nc.unsynched("domomentum2d"),
                        o.timer && clearTimeout(o.timer),
                        (o.timer = 0),
                        (o.lastscrollx = -1),
                        (o.lastscrolly = -1);
                }),
                (this.doSnapy = function(e, t) {
                    var r = !1;
                    t < 0
                        ? ((t = 0), (r = !0))
                        : t > o.nc.page.maxh &&
                          ((t = o.nc.page.maxh), (r = !0)),
                        e < 0
                            ? ((e = 0), (r = !0))
                            : e > o.nc.page.maxw &&
                              ((e = o.nc.page.maxw), (r = !0)),
                        r
                            ? o.nc.doScrollPos(e, t, o.nc.opt.snapbackspeed)
                            : o.nc.triggerScrollEnd();
                }),
                (this.doMomentum = function(e) {
                    var t = f(),
                        r = e ? t + e : o.lasttime,
                        i = o.nc.getScrollLeft(),
                        s = o.nc.getScrollTop(),
                        n = o.nc.page.maxh,
                        l = o.nc.page.maxw;
                    (o.speedx = l > 0 ? Math.min(60, o.speedx) : 0),
                        (o.speedy = n > 0 ? Math.min(60, o.speedy) : 0);
                    var a = r && t - r <= 60;
                    (s < 0 || s > n || i < 0 || i > l) && (a = !1);
                    var c = !(!o.speedy || !a) && o.speedy,
                        d = !(!o.speedx || !a) && o.speedx;
                    if (c || d) {
                        var u = Math.max(16, o.steptime);
                        if (u > 50) {
                            var h = u / 50;
                            (o.speedx *= h), (o.speedy *= h), (u = 50);
                        }
                        (o.demulxy = 0),
                            (o.lastscrollx = o.nc.getScrollLeft()),
                            (o.chkx = o.lastscrollx),
                            (o.lastscrolly = o.nc.getScrollTop()),
                            (o.chky = o.lastscrolly);
                        var p = o.lastscrollx,
                            m = o.lastscrolly,
                            g = function() {
                                var e = f() - t > 600 ? 0.04 : 0.02;
                                o.speedx &&
                                    ((p = Math.floor(
                                        o.lastscrollx -
                                            o.speedx * (1 - o.demulxy)
                                    )),
                                    (o.lastscrollx = p),
                                    (p < 0 || p > l) && (e = 0.1)),
                                    o.speedy &&
                                        ((m = Math.floor(
                                            o.lastscrolly -
                                                o.speedy * (1 - o.demulxy)
                                        )),
                                        (o.lastscrolly = m),
                                        (m < 0 || m > n) && (e = 0.1)),
                                    (o.demulxy = Math.min(1, o.demulxy + e)),
                                    o.nc.synched("domomentum2d", function() {
                                        if (o.speedx) {
                                            o.nc.getScrollLeft();
                                            (o.chkx = p), o.nc.setScrollLeft(p);
                                        }
                                        if (o.speedy) {
                                            o.nc.getScrollTop();
                                            (o.chky = m), o.nc.setScrollTop(m);
                                        }
                                        o.timer ||
                                            (o.nc.hideCursor(),
                                            o.doSnapy(p, m));
                                    }),
                                    o.demulxy < 1
                                        ? (o.timer = setTimeout(g, u))
                                        : (o.stop(),
                                          o.nc.hideCursor(),
                                          o.doSnapy(p, m));
                            };
                        g();
                    } else o.doSnapy(o.nc.getScrollLeft(), o.nc.getScrollTop());
                });
        },
        x = e.fn.scrollTop;
    (e.cssHooks.pageYOffset = {
        get: function(e, o, t) {
            var r = n.data(e, "__nicescroll") || !1;
            return r && r.ishwscroll ? r.getScrollTop() : x.call(e);
        },
        set: function(e, o) {
            var t = n.data(e, "__nicescroll") || !1;
            return (
                t && t.ishwscroll ? t.setScrollTop(parseInt(o)) : x.call(e, o),
                this
            );
        }
    }),
        (e.fn.scrollTop = function(e) {
            if (void 0 === e) {
                var o = !!this[0] && (n.data(this[0], "__nicescroll") || !1);
                return o && o.ishwscroll ? o.getScrollTop() : x.call(this);
            }
            return this.each(function() {
                var o = n.data(this, "__nicescroll") || !1;
                o && o.ishwscroll
                    ? o.setScrollTop(parseInt(e))
                    : x.call(n(this), e);
            });
        });
    var S = e.fn.scrollLeft;
    (n.cssHooks.pageXOffset = {
        get: function(e, o, t) {
            var r = n.data(e, "__nicescroll") || !1;
            return r && r.ishwscroll ? r.getScrollLeft() : S.call(e);
        },
        set: function(e, o) {
            var t = n.data(e, "__nicescroll") || !1;
            return (
                t && t.ishwscroll ? t.setScrollLeft(parseInt(o)) : S.call(e, o),
                this
            );
        }
    }),
        (e.fn.scrollLeft = function(e) {
            if (void 0 === e) {
                var o = !!this[0] && (n.data(this[0], "__nicescroll") || !1);
                return o && o.ishwscroll ? o.getScrollLeft() : S.call(this);
            }
            return this.each(function() {
                var o = n.data(this, "__nicescroll") || !1;
                o && o.ishwscroll
                    ? o.setScrollLeft(parseInt(e))
                    : S.call(n(this), e);
            });
        });
    var z = function(e) {
        var o = this;
        if (
            ((this.length = 0),
            (this.name = "nicescrollarray"),
            (this.each = function(e) {
                return n.each(o, e), o;
            }),
            (this.push = function(e) {
                (o[o.length] = e), o.length++;
            }),
            (this.eq = function(e) {
                return o[e];
            }),
            e)
        )
            for (var t = 0; t < e.length; t++) {
                var r = n.data(e[t], "__nicescroll") || !1;
                r && ((this[this.length] = r), this.length++);
            }
        return this;
    };
    !(function(e, o, t) {
        for (var r = 0, i = o.length; r < i; r++) t(e, o[r]);
    })(
        z.prototype,
        [
            "show",
            "hide",
            "toggle",
            "onResize",
            "resize",
            "remove",
            "stop",
            "doScrollPos"
        ],
        function(e, o) {
            e[o] = function() {
                var e = arguments;
                return this.each(function() {
                    this[o].apply(this, e);
                });
            };
        }
    ),
        (e.fn.getNiceScroll = function(e) {
            return void 0 === e
                ? new z(this)
                : (this[e] && n.data(this[e], "__nicescroll")) || !1;
        }),
        ((e.expr.pseudos || e.expr[":"]).nicescroll = function(e) {
            return void 0 !== n.data(e, "__nicescroll");
        }),
        (n.fn.niceScroll = function(e, o) {
            void 0 !== o ||
                "object" != typeof e ||
                "jquery" in e ||
                ((o = e), (e = !1));
            var t = new z();
            return (
                this.each(function() {
                    var r = n(this),
                        i = n.extend({}, o);
                    if (e) {
                        var s = n(e);
                        (i.doc = s.length > 1 ? n(e, r) : s), (i.win = r);
                    }
                    !("doc" in i) || "win" in i || (i.win = r);
                    var l = r.data("__nicescroll") || !1;
                    l ||
                        ((i.doc = i.doc || r),
                        (l = new b(i, r)),
                        r.data("__nicescroll", l)),
                        t.push(l);
                }),
                1 === t.length ? t[0] : t
            );
        }),
        (a.NiceScroll = {
            getjQuery: function() {
                return e;
            }
        }),
        n.nicescroll || ((n.nicescroll = new z()), (n.nicescroll.options = g));
});

(function($, document, window) {
    var defaults = {
            label: "MENU",
            duplicate: true,
            duration: 200,
            easingOpen: "swing",
            easingClose: "swing",
            closedSymbol: "&#9658;",
            openedSymbol: "&#9660;",
            prependTo: "body",
            appendTo: "",
            parentTag: "a",
            closeOnClick: false,
            allowParentLinks: false,
            nestedParentLinks: true,
            showChildren: false,
            removeIds: true,
            removeClasses: false,
            removeStyles: false,
            brand: "",
            animations: "jquery",
            init: function() {},
            beforeOpen: function() {},
            beforeClose: function() {},
            afterOpen: function() {},
            afterClose: function() {}
        },
        mobileMenu = "slicknav",
        prefix = "slicknav",
        Keyboard = {
            DOWN: 40,
            ENTER: 13,
            ESCAPE: 27,
            LEFT: 37,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        };
    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        if (!this.settings.duplicate && !options.hasOwnProperty("removeIds")) {
            this.settings.removeIds = false;
        }
        this._defaults = defaults;
        this._name = mobileMenu;
        this.init();
    }
    Plugin.prototype.init = function() {
        var $this = this,
            menu = $(this.element),
            settings = this.settings,
            iconClass,
            menuBar;
        if (settings.duplicate) {
            $this.mobileNav = menu.clone();
        } else {
            $this.mobileNav = menu;
        }
        if (settings.removeIds) {
            $this.mobileNav.removeAttr("id");
            $this.mobileNav.find("*").each(function(i, e) {
                $(e).removeAttr("id");
            });
        }
        if (settings.removeClasses) {
            $this.mobileNav.removeAttr("class");
            $this.mobileNav.find("*").each(function(i, e) {
                $(e).removeAttr("class");
            });
        }
        if (settings.removeStyles) {
            $this.mobileNav.removeAttr("style");
            $this.mobileNav.find("*").each(function(i, e) {
                $(e).removeAttr("style");
            });
        }
        iconClass = prefix + "_icon";
        if (settings.label === "") {
            iconClass += " " + prefix + "_no-text";
        }
        if (settings.parentTag == "a") {
            settings.parentTag = 'a href="#"';
        }
        $this.mobileNav.attr("class", prefix + "_nav");
        menuBar = $('<div class="' + prefix + '_menu"></div>');
        if (settings.brand !== "") {
            var brand = $(
                '<div class="' + prefix + '_brand">' + settings.brand + "</div>"
            );
            $(menuBar).append(brand);
        }
        $this.btn = $(
            [
                "<" +
                    settings.parentTag +
                    ' aria-haspopup="true" role="button" tabindex="0" class="' +
                    prefix +
                    "_btn " +
                    prefix +
                    '_collapsed">',
                '<span class="' +
                    prefix +
                    '_menutxt">' +
                    settings.label +
                    "</span>",
                '<span class="' + iconClass + '">',
                '<span class="' + prefix + '_icon-bar"></span>',
                '<span class="' + prefix + '_icon-bar"></span>',
                '<span class="' + prefix + '_icon-bar"></span>',
                "</span>",
                "</" + settings.parentTag + ">"
            ].join("")
        );
        $(menuBar).append($this.btn);
        if (settings.appendTo !== "") {
            $(settings.appendTo).append(menuBar);
        } else {
            $(settings.prependTo).prepend(menuBar);
        }
        menuBar.append($this.mobileNav);
        var items = $this.mobileNav.find("li");
        $(items).each(function() {
            var item = $(this),
                data = {};
            data.children = item.children("ul").attr("role", "menu");
            item.data("menu", data);
            if (data.children.length > 0) {
                var a = item.contents(),
                    containsAnchor = false,
                    nodes = [];
                $(a).each(function() {
                    if (!$(this).is("ul")) {
                        nodes.push(this);
                    } else {
                        return false;
                    }
                    if ($(this).is("a")) {
                        containsAnchor = true;
                    }
                });
                var wrapElement = $(
                    "<" +
                        settings.parentTag +
                        ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' +
                        prefix +
                        '_item"/>'
                );
                if (
                    !settings.allowParentLinks ||
                    settings.nestedParentLinks ||
                    !containsAnchor
                ) {
                    var $wrap = $(nodes)
                        .wrapAll(wrapElement)
                        .parent();
                    $wrap.addClass(prefix + "_row");
                } else
                    $(nodes)
                        .wrapAll(
                            '<span class="' +
                                prefix +
                                "_parent-link " +
                                prefix +
                                '_row"/>'
                        )
                        .parent();
                if (!settings.showChildren) {
                    item.addClass(prefix + "_collapsed");
                } else {
                    item.addClass(prefix + "_open");
                }
                item.addClass(prefix + "_parent");
                var arrowElement = $(
                    '<span class="' +
                        prefix +
                        '_arrow">' +
                        (settings.showChildren
                            ? settings.openedSymbol
                            : settings.closedSymbol) +
                        "</span>"
                );
                if (
                    settings.allowParentLinks &&
                    !settings.nestedParentLinks &&
                    containsAnchor
                )
                    arrowElement = arrowElement.wrap(wrapElement).parent();
                $(nodes)
                    .last()
                    .after(arrowElement);
            } else if (item.children().length === 0) {
                item.addClass(prefix + "_txtnode");
            }
            item.children("a")
                .attr("role", "menuitem")
                .click(function(event) {
                    if (
                        settings.closeOnClick &&
                        !$(event.target)
                            .parent()
                            .closest("li")
                            .hasClass(prefix + "_parent")
                    ) {
                        $($this.btn).click();
                    }
                });
            if (settings.closeOnClick && settings.allowParentLinks) {
                item.children("a")
                    .children("a")
                    .click(function(event) {
                        $($this.btn).click();
                    });
                item.find(
                    "." + prefix + "_parent-link a:not(." + prefix + "_item)"
                ).click(function(event) {
                    $($this.btn).click();
                });
            }
        });
        $(items).each(function() {
            var data = $(this).data("menu");
            if (!settings.showChildren) {
                $this._visibilityToggle(data.children, null, false, null, true);
            }
        });
        $this._visibilityToggle($this.mobileNav, null, false, "init", true);
        $this.mobileNav.attr("role", "menu");
        $(document).mousedown(function() {
            $this._outlines(false);
        });
        $(document).keyup(function() {
            $this._outlines(true);
        });
        $($this.btn).click(function(e) {
            e.preventDefault();
            $this._menuToggle();
        });
        $this.mobileNav.on("click", "." + prefix + "_item", function(e) {
            e.preventDefault();
            $this._itemClick($(this));
        });
        $($this.btn).keydown(function(e) {
            var ev = e || event;
            switch (ev.keyCode) {
                case Keyboard.ENTER:
                case Keyboard.SPACE:
                case Keyboard.DOWN:
                    e.preventDefault();
                    if (
                        ev.keyCode !== Keyboard.DOWN ||
                        !$($this.btn).hasClass(prefix + "_open")
                    ) {
                        $this._menuToggle();
                    }
                    $($this.btn)
                        .next()
                        .find('[role="menuitem"]')
                        .first()
                        .focus();
                    break;
            }
        });
        $this.mobileNav.on("keydown", "." + prefix + "_item", function(e) {
            var ev = e || event;
            switch (ev.keyCode) {
                case Keyboard.ENTER:
                    e.preventDefault();
                    $this._itemClick($(e.target));
                    break;
                case Keyboard.RIGHT:
                    e.preventDefault();
                    if (
                        $(e.target)
                            .parent()
                            .hasClass(prefix + "_collapsed")
                    ) {
                        $this._itemClick($(e.target));
                    }
                    $(e.target)
                        .next()
                        .find('[role="menuitem"]')
                        .first()
                        .focus();
                    break;
            }
        });
        $this.mobileNav.on("keydown", '[role="menuitem"]', function(e) {
            var ev = e || event;
            switch (ev.keyCode) {
                case Keyboard.DOWN:
                    e.preventDefault();
                    var allItems = $(e.target)
                        .parent()
                        .parent()
                        .children()
                        .children('[role="menuitem"]:visible');
                    var idx = allItems.index(e.target);
                    var nextIdx = idx + 1;
                    if (allItems.length <= nextIdx) {
                        nextIdx = 0;
                    }
                    var next = allItems.eq(nextIdx);
                    next.focus();
                    break;
                case Keyboard.UP:
                    e.preventDefault();
                    var allItems = $(e.target)
                        .parent()
                        .parent()
                        .children()
                        .children('[role="menuitem"]:visible');
                    var idx = allItems.index(e.target);
                    var next = allItems.eq(idx - 1);
                    next.focus();
                    break;
                case Keyboard.LEFT:
                    e.preventDefault();
                    if (
                        $(e.target)
                            .parent()
                            .parent()
                            .parent()
                            .hasClass(prefix + "_open")
                    ) {
                        var parent = $(e.target)
                            .parent()
                            .parent()
                            .prev();
                        parent.focus();
                        $this._itemClick(parent);
                    } else if (
                        $(e.target)
                            .parent()
                            .parent()
                            .hasClass(prefix + "_nav")
                    ) {
                        $this._menuToggle();
                        $($this.btn).focus();
                    }
                    break;
                case Keyboard.ESCAPE:
                    e.preventDefault();
                    $this._menuToggle();
                    $($this.btn).focus();
                    break;
            }
        });
        if (settings.allowParentLinks && settings.nestedParentLinks) {
            $("." + prefix + "_item a").click(function(e) {
                e.stopImmediatePropagation();
            });
        }
    };
    Plugin.prototype._menuToggle = function(el) {
        var $this = this;
        var btn = $this.btn;
        var mobileNav = $this.mobileNav;
        if (btn.hasClass(prefix + "_collapsed")) {
            btn.removeClass(prefix + "_collapsed");
            btn.addClass(prefix + "_open");
        } else {
            btn.removeClass(prefix + "_open");
            btn.addClass(prefix + "_collapsed");
        }
        btn.addClass(prefix + "_animating");
        $this._visibilityToggle(mobileNav, btn.parent(), true, btn);
    };
    Plugin.prototype._itemClick = function(el) {
        var $this = this;
        var settings = $this.settings;
        var data = el.data("menu");
        if (!data) {
            data = {};
            data.arrow = el.children("." + prefix + "_arrow");
            data.ul = el.next("ul");
            data.parent = el.parent();
            if (data.parent.hasClass(prefix + "_parent-link")) {
                data.parent = el.parent().parent();
                data.ul = el.parent().next("ul");
            }
            el.data("menu", data);
        }
        if (data.parent.hasClass(prefix + "_collapsed")) {
            data.arrow.html(settings.openedSymbol);
            data.parent.removeClass(prefix + "_collapsed");
            data.parent.addClass(prefix + "_open");
            data.parent.addClass(prefix + "_animating");
            $this._visibilityToggle(data.ul, data.parent, true, el);
        } else {
            data.arrow.html(settings.closedSymbol);
            data.parent.addClass(prefix + "_collapsed");
            data.parent.removeClass(prefix + "_open");
            data.parent.addClass(prefix + "_animating");
            $this._visibilityToggle(data.ul, data.parent, true, el);
        }
    };
    Plugin.prototype._visibilityToggle = function(
        el,
        parent,
        animate,
        trigger,
        init
    ) {
        var $this = this;
        var settings = $this.settings;
        var items = $this._getActionItems(el);
        var duration = 0;
        if (animate) {
            duration = settings.duration;
        }
        function afterOpen(trigger, parent) {
            $(trigger).removeClass(prefix + "_animating");
            $(parent).removeClass(prefix + "_animating");
            if (!init) {
                settings.afterOpen(trigger);
            }
        }
        function afterClose(trigger, parent) {
            el.attr("aria-hidden", "true");
            items.attr("tabindex", "-1");
            $this._setVisAttr(el, true);
            el.hide();
            $(trigger).removeClass(prefix + "_animating");
            $(parent).removeClass(prefix + "_animating");
            if (!init) {
                settings.afterClose(trigger);
            } else if (trigger == "init") {
                settings.init();
            }
        }
        if (el.hasClass(prefix + "_hidden")) {
            el.removeClass(prefix + "_hidden");
            if (!init) {
                settings.beforeOpen(trigger);
            }
            if (settings.animations === "jquery") {
                el.stop(true, true).slideDown(
                    duration,
                    settings.easingOpen,
                    function() {
                        afterOpen(trigger, parent);
                    }
                );
            } else if (settings.animations === "velocity") {
                el.velocity("finish").velocity("slideDown", {
                    duration: duration,
                    easing: settings.easingOpen,
                    complete: function() {
                        afterOpen(trigger, parent);
                    }
                });
            }
            el.attr("aria-hidden", "false");
            items.attr("tabindex", "0");
            $this._setVisAttr(el, false);
        } else {
            el.addClass(prefix + "_hidden");
            if (!init) {
                settings.beforeClose(trigger);
            }
            if (settings.animations === "jquery") {
                el.stop(true, true).slideUp(
                    duration,
                    this.settings.easingClose,
                    function() {
                        afterClose(trigger, parent);
                    }
                );
            } else if (settings.animations === "velocity") {
                el.velocity("finish").velocity("slideUp", {
                    duration: duration,
                    easing: settings.easingClose,
                    complete: function() {
                        afterClose(trigger, parent);
                    }
                });
            }
        }
    };
    Plugin.prototype._setVisAttr = function(el, hidden) {
        var $this = this;
        var nonHidden = el
            .children("li")
            .children("ul")
            .not("." + prefix + "_hidden");
        if (!hidden) {
            nonHidden.each(function() {
                var ul = $(this);
                ul.attr("aria-hidden", "false");
                var items = $this._getActionItems(ul);
                items.attr("tabindex", "0");
                $this._setVisAttr(ul, hidden);
            });
        } else {
            nonHidden.each(function() {
                var ul = $(this);
                ul.attr("aria-hidden", "true");
                var items = $this._getActionItems(ul);
                items.attr("tabindex", "-1");
                $this._setVisAttr(ul, hidden);
            });
        }
    };
    Plugin.prototype._getActionItems = function(el) {
        var data = el.data("menu");
        if (!data) {
            data = {};
            var items = el.children("li");
            var anchors = items.find("a");
            data.links = anchors.add(items.find("." + prefix + "_item"));
            el.data("menu", data);
        }
        return data.links;
    };
    Plugin.prototype._outlines = function(state) {
        if (!state) {
            $("." + prefix + "_item, ." + prefix + "_btn").css(
                "outline",
                "none"
            );
        } else {
            $("." + prefix + "_item, ." + prefix + "_btn").css("outline", "");
        }
    };
    Plugin.prototype.toggle = function() {
        var $this = this;
        $this._menuToggle();
    };
    Plugin.prototype.open = function() {
        var $this = this;
        if ($this.btn.hasClass(prefix + "_collapsed")) {
            $this._menuToggle();
        }
    };
    Plugin.prototype.close = function() {
        var $this = this;
        if ($this.btn.hasClass(prefix + "_open")) {
            $this._menuToggle();
        }
    };
    $.fn[mobileMenu] = function(options) {
        var args = arguments;
        if (options === undefined || typeof options === "object") {
            return this.each(function() {
                if (!$.data(this, "plugin_" + mobileMenu)) {
                    $.data(
                        this,
                        "plugin_" + mobileMenu,
                        new Plugin(this, options)
                    );
                }
            });
        } else if (
            typeof options === "string" &&
            options[0] !== "_" &&
            options !== "init"
        ) {
            var returns;
            this.each(function() {
                var instance = $.data(this, "plugin_" + mobileMenu);
                if (
                    instance instanceof Plugin &&
                    typeof instance[options] === "function"
                ) {
                    returns = instance[options].apply(
                        instance,
                        Array.prototype.slice.call(args, 1)
                    );
                }
            });
            return returns !== undefined ? returns : this;
        }
    };
})(jQuery, document, window);

/**!
 * MixItUp v3.3.1
 * A high-performance, dependency-free library for animated filtering, sorting and more
 * Build 94e0fbf6-cd0b-4987-b3c0-14b59b67b8a0
 *
 * @copyright Copyright 2014-2018 KunkaLabs Limited.
 * @author    KunkaLabs Limited.
 * @link      https://www.kunkalabs.com/mixitup/
 *
 * @license   Commercial use requires a commercial license.
 *            https://www.kunkalabs.com/mixitup/licenses/
 *
 *            Non-commercial use permitted under same terms as CC BY-NC 3.0 license.
 *            http://creativecommons.org/licenses/by-nc/3.0/
 */
!(function(t) {
    "use strict";
    var e = null,
        n = null;
    !(function() {
        var e = ["webkit", "moz", "o", "ms"],
            n = t.document.createElement("div"),
            a = -1;
        for (a = 0; a < e.length && !t.requestAnimationFrame; a++)
            t.requestAnimationFrame = t[e[a] + "RequestAnimationFrame"];
        "undefined" == typeof n.nextElementSibling &&
            Object.defineProperty(t.Element.prototype, "nextElementSibling", {
                get: function() {
                    for (var t = this.nextSibling; t; ) {
                        if (1 === t.nodeType) return t;
                        t = t.nextSibling;
                    }
                    return null;
                }
            }),
            (function(t) {
                t.matches =
                    t.matches ||
                    t.machesSelector ||
                    t.mozMatchesSelector ||
                    t.msMatchesSelector ||
                    t.oMatchesSelector ||
                    t.webkitMatchesSelector ||
                    function(t) {
                        return (
                            Array.prototype.indexOf.call(
                                this.parentElement.querySelectorAll(t),
                                this
                            ) > -1
                        );
                    };
            })(t.Element.prototype),
            Object.keys ||
                (Object.keys = (function() {
                    var t = Object.prototype.hasOwnProperty,
                        e = !1,
                        n = [],
                        a = -1;
                    return (
                        (e = !{ toString: null }.propertyIsEnumerable(
                            "toString"
                        )),
                        (n = [
                            "toString",
                            "toLocaleString",
                            "valueOf",
                            "hasOwnProperty",
                            "isPrototypeOf",
                            "propertyIsEnumerable",
                            "constructor"
                        ]),
                        (a = n.length),
                        function(i) {
                            var o = [],
                                r = "",
                                s = -1;
                            if (
                                "object" != typeof i &&
                                ("function" != typeof i || null === i)
                            )
                                throw new TypeError(
                                    "Object.keys called on non-object"
                                );
                            for (r in i) t.call(i, r) && o.push(r);
                            if (e)
                                for (s = 0; s < a; s++)
                                    t.call(i, n[s]) && o.push(n[s]);
                            return o;
                        }
                    );
                })()),
            Array.isArray ||
                (Array.isArray = function(t) {
                    return (
                        "[object Array]" === Object.prototype.toString.call(t)
                    );
                }),
            "function" != typeof Object.create &&
                (Object.create = (function(t) {
                    var e = function() {};
                    return function(n, a) {
                        if (n !== Object(n) && null !== n)
                            throw TypeError(
                                "Argument must be an object, or null"
                            );
                        e.prototype = n || {};
                        var i = new e();
                        return (
                            (e.prototype = null),
                            a !== t && Object.defineProperties(i, a),
                            null === n && (i.__proto__ = null),
                            i
                        );
                    };
                })()),
            String.prototype.trim ||
                (String.prototype.trim = function() {
                    return this.replace(
                        /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                        ""
                    );
                }),
            Array.prototype.indexOf ||
                (Array.prototype.indexOf = function(t) {
                    var e, n, a, i;
                    if (null === this) throw new TypeError();
                    if (((a = Object(this)), (i = a.length >>> 0), 0 === i))
                        return -1;
                    if (
                        ((e = 0),
                        arguments.length > 1 &&
                            ((e = Number(arguments[1])),
                            e !== e
                                ? (e = 0)
                                : 0 !== e &&
                                  e !== 1 / 0 &&
                                  e !== -(1 / 0) &&
                                  (e =
                                      (e > 0 || -1) * Math.floor(Math.abs(e)))),
                        e >= i)
                    )
                        return -1;
                    for (
                        n = e >= 0 ? e : Math.max(i - Math.abs(e), 0);
                        n < i;
                        n++
                    )
                        if (n in a && a[n] === t) return n;
                    return -1;
                }),
            Function.prototype.bind ||
                (Function.prototype.bind = function(t) {
                    var e, n, a, i;
                    if ("function" != typeof this) throw new TypeError();
                    return (
                        (e = Array.prototype.slice.call(arguments, 1)),
                        (n = this),
                        (a = function() {}),
                        (i = function() {
                            return n.apply(
                                this instanceof a ? this : t,
                                e.concat(Array.prototype.slice.call(arguments))
                            );
                        }),
                        this.prototype && (a.prototype = this.prototype),
                        (i.prototype = new a()),
                        i
                    );
                }),
            t.Element.prototype.dispatchEvent ||
                (t.Element.prototype.dispatchEvent = function(t) {
                    try {
                        return this.fireEvent("on" + t.type, t);
                    } catch (e) {}
                });
    })(),
        (e = function(a, i, o) {
            var r = null,
                s = !1,
                l = null,
                c = null,
                u = null,
                f = null,
                h = [],
                d = "",
                m = [],
                g = -1;
            if (
                ((u = o || t.document),
                (s = arguments[3]) && (s = "boolean" == typeof s),
                "string" == typeof a)
            )
                m = u.querySelectorAll(a);
            else if (a && "object" == typeof a && n.isElement(a, u)) m = [a];
            else {
                if (!a || "object" != typeof a || !a.length)
                    throw new Error(e.messages.errorFactoryInvalidContainer());
                m = a;
            }
            if (m.length < 1)
                throw new Error(e.messages.errorFactoryContainerNotFound());
            for (g = 0; (r = m[g]) && (!(g > 0) || s); g++)
                r.id
                    ? (d = r.id)
                    : ((d = "MixItUp" + n.randomHex()), (r.id = d)),
                    e.instances[d] instanceof e.Mixer
                        ? ((l = e.instances[d]),
                          (!i ||
                              (i && i.debug && i.debug.showWarnings !== !1)) &&
                              console.warn(
                                  e.messages.warningFactoryPreexistingInstance()
                              ))
                        : ((l = new e.Mixer()),
                          l.attach(r, u, d, i),
                          (e.instances[d] = l)),
                    (c = new e.Facade(l)),
                    i && i.debug && i.debug.enable ? h.push(l) : h.push(c);
            return (f = s ? new e.Collection(h) : h[0]);
        }),
        (e.use = function(t) {
            e.Base.prototype.callActions.call(e, "beforeUse", arguments),
                "function" == typeof t && "mixitup-extension" === t.TYPE
                    ? "undefined" == typeof e.extensions[t.NAME] &&
                      (t(e), (e.extensions[t.NAME] = t))
                    : t.fn && t.fn.jquery && (e.libraries.$ = t),
                e.Base.prototype.callActions.call(e, "afterUse", arguments);
        }),
        (e.instances = {}),
        (e.extensions = {}),
        (e.libraries = {}),
        (n = {
            hasClass: function(t, e) {
                return !!t.className.match(
                    new RegExp("(\\s|^)" + e + "(\\s|$)")
                );
            },
            addClass: function(t, e) {
                this.hasClass(t, e) ||
                    (t.className += t.className ? " " + e : e);
            },
            removeClass: function(t, e) {
                if (this.hasClass(t, e)) {
                    var n = new RegExp("(\\s|^)" + e + "(\\s|$)");
                    t.className = t.className.replace(n, " ").trim();
                }
            },
            extend: function(t, e, n, a) {
                var i = [],
                    o = "",
                    r = -1;
                (n = n || !1), (a = a || !1);
                try {
                    if (Array.isArray(e))
                        for (r = 0; r < e.length; r++) i.push(r);
                    else e && (i = Object.keys(e));
                    for (r = 0; r < i.length; r++)
                        (o = i[r]),
                            !n ||
                            "object" != typeof e[o] ||
                            this.isElement(e[o])
                                ? (t[o] = e[o])
                                : Array.isArray(e[o])
                                ? (t[o] || (t[o] = []),
                                  this.extend(t[o], e[o], n, a))
                                : (t[o] || (t[o] = {}),
                                  this.extend(t[o], e[o], n, a));
                } catch (s) {
                    if (!a) throw s;
                    this.handleExtendError(s, t);
                }
                return t;
            },
            handleExtendError: function(t, n) {
                var a = /property "?(\w*)"?[,:] object/i,
                    i = null,
                    o = "",
                    r = "",
                    s = "",
                    l = "",
                    c = "",
                    u = -1,
                    f = -1;
                if (t instanceof TypeError && (i = a.exec(t.message))) {
                    o = i[1];
                    for (c in n) {
                        for (
                            f = 0;
                            f < o.length && o.charAt(f) === c.charAt(f);

                        )
                            f++;
                        f > u && ((u = f), (l = c));
                    }
                    throw (u > 1 &&
                        (s = e.messages.errorConfigInvalidPropertySuggestion({
                            probableMatch: l
                        })),
                    (r = e.messages.errorConfigInvalidProperty({
                        erroneous: o,
                        suggestion: s
                    })),
                    new TypeError(r));
                }
                throw t;
            },
            template: function(t) {
                for (
                    var e = /\${([\w]*)}/g, n = {}, a = null;
                    (a = e.exec(t));

                )
                    n[a[1]] = new RegExp("\\${" + a[1] + "}", "g");
                return function(e) {
                    var a = "",
                        i = t;
                    e = e || {};
                    for (a in n)
                        i = i.replace(
                            n[a],
                            "undefined" != typeof e[a] ? e[a] : ""
                        );
                    return i;
                };
            },
            on: function(e, n, a, i) {
                e &&
                    (e.addEventListener
                        ? e.addEventListener(n, a, i)
                        : e.attachEvent &&
                          ((e["e" + n + a] = a),
                          (e[n + a] = function() {
                              e["e" + n + a](t.event);
                          }),
                          e.attachEvent("on" + n, e[n + a])));
            },
            off: function(t, e, n) {
                t &&
                    (t.removeEventListener
                        ? t.removeEventListener(e, n, !1)
                        : t.detachEvent &&
                          (t.detachEvent("on" + e, t[e + n]),
                          (t[e + n] = null)));
            },
            getCustomEvent: function(e, n, a) {
                var i = null;
                return (
                    (a = a || t.document),
                    "function" == typeof t.CustomEvent
                        ? (i = new t.CustomEvent(e, {
                              detail: n,
                              bubbles: !0,
                              cancelable: !0
                          }))
                        : "function" == typeof a.createEvent
                        ? ((i = a.createEvent("CustomEvent")),
                          i.initCustomEvent(e, !0, !0, n))
                        : ((i = a.createEventObject()),
                          (i.type = e),
                          (i.returnValue = !1),
                          (i.cancelBubble = !1),
                          (i.detail = n)),
                    i
                );
            },
            getOriginalEvent: function(t) {
                return t.touches && t.touches.length
                    ? t.touches[0]
                    : t.changedTouches && t.changedTouches.length
                    ? t.changedTouches[0]
                    : t;
            },
            index: function(t, e) {
                for (var n = 0; null !== (t = t.previousElementSibling); )
                    (e && !t.matches(e)) || ++n;
                return n;
            },
            camelCase: function(t) {
                return t.toLowerCase().replace(/([_-][a-z])/g, function(t) {
                    return t.toUpperCase().replace(/[_-]/, "");
                });
            },
            pascalCase: function(t) {
                return (
                    (t = this.camelCase(t)).charAt(0).toUpperCase() + t.slice(1)
                );
            },
            dashCase: function(t) {
                return t
                    .replace(/([A-Z])/g, "-$1")
                    .replace(/^-/, "")
                    .toLowerCase();
            },
            isElement: function(e, n) {
                return (
                    (n = n || t.document),
                    !!(t.HTMLElement && e instanceof t.HTMLElement) ||
                        !!(
                            n.defaultView &&
                            n.defaultView.HTMLElement &&
                            e instanceof n.defaultView.HTMLElement
                        ) ||
                        (null !== e &&
                            1 === e.nodeType &&
                            "string" == typeof e.nodeName)
                );
            },
            createElement: function(e, n) {
                var a = null,
                    i = null;
                for (
                    n = n || t.document,
                        a = n.createDocumentFragment(),
                        i = n.createElement("div"),
                        i.innerHTML = e.trim();
                    i.firstChild;

                )
                    a.appendChild(i.firstChild);
                return a;
            },
            removeWhitespace: function(t) {
                for (var e; t && "#text" === t.nodeName; )
                    (e = t),
                        (t = t.previousSibling),
                        e.parentElement && e.parentElement.removeChild(e);
            },
            isEqualArray: function(t, e) {
                var n = t.length;
                if (n !== e.length) return !1;
                for (; n--; ) if (t[n] !== e[n]) return !1;
                return !0;
            },
            deepEquals: function(t, e) {
                var n;
                if ("object" == typeof t && t && "object" == typeof e && e) {
                    if (Object.keys(t).length !== Object.keys(e).length)
                        return !1;
                    for (n in t)
                        if (
                            !e.hasOwnProperty(n) ||
                            !this.deepEquals(t[n], e[n])
                        )
                            return !1;
                } else if (t !== e) return !1;
                return !0;
            },
            arrayShuffle: function(t) {
                for (
                    var e = t.slice(), n = e.length, a = n, i = -1, o = [];
                    a--;

                )
                    (i = ~~(Math.random() * n)),
                        (o = e[a]),
                        (e[a] = e[i]),
                        (e[i] = o);
                return e;
            },
            arrayFromList: function(t) {
                var e, n;
                try {
                    return Array.prototype.slice.call(t);
                } catch (a) {
                    for (e = [], n = 0; n < t.length; n++) e.push(t[n]);
                    return e;
                }
            },
            debounce: function(t, e, n) {
                var a;
                return function() {
                    var i = this,
                        o = arguments,
                        r = n && !a,
                        s = null;
                    (s = function() {
                        (a = null), n || t.apply(i, o);
                    }),
                        clearTimeout(a),
                        (a = setTimeout(s, e)),
                        r && t.apply(i, o);
                };
            },
            position: function(t) {
                for (var e = 0, n = 0, a = t; t; )
                    (e -= t.scrollLeft),
                        (n -= t.scrollTop),
                        t === a &&
                            ((e += t.offsetLeft),
                            (n += t.offsetTop),
                            (a = t.offsetParent)),
                        (t = t.parentElement);
                return { x: e, y: n };
            },
            getHypotenuse: function(t, e) {
                var n = t.x - e.x,
                    a = t.y - e.y;
                return (
                    (n = n < 0 ? n * -1 : n),
                    (a = a < 0 ? a * -1 : a),
                    Math.sqrt(Math.pow(n, 2) + Math.pow(a, 2))
                );
            },
            getIntersectionRatio: function(t, e) {
                var n = t.width * t.height,
                    a = -1,
                    i = -1,
                    o = -1,
                    r = -1;
                return (
                    (a = Math.max(
                        0,
                        Math.min(t.left + t.width, e.left + e.width) -
                            Math.max(t.left, e.left)
                    )),
                    (i = Math.max(
                        0,
                        Math.min(t.top + t.height, e.top + e.height) -
                            Math.max(t.top, e.top)
                    )),
                    (o = i * a),
                    (r = o / n)
                );
            },
            closestParent: function(e, n, a, i) {
                var o = e.parentNode;
                if (((i = i || t.document), a && e.matches(n))) return e;
                for (; o && o != i.body; ) {
                    if (o.matches && o.matches(n)) return o;
                    if (!o.parentNode) return null;
                    o = o.parentNode;
                }
                return null;
            },
            children: function(e, n, a) {
                var i = [],
                    o = "";
                return (
                    (a = a || t.doc),
                    e &&
                        (e.id ||
                            ((o = "Temp" + this.randomHexKey()), (e.id = o)),
                        (i = a.querySelectorAll("#" + e.id + " > " + n)),
                        o && e.removeAttribute("id")),
                    i
                );
            },
            clean: function(t) {
                var e = [],
                    n = -1;
                for (n = 0; n < t.length; n++) "" !== t[n] && e.push(t[n]);
                return e;
            },
            defer: function(n) {
                var a = null,
                    i = null,
                    o = null;
                return (
                    (i = new this.Deferred()),
                    e.features.has.promises
                        ? (i.promise = new Promise(function(t, e) {
                              (i.resolve = t), (i.reject = e);
                          }))
                        : (o = t.jQuery || n.$) &&
                          "function" == typeof o.Deferred
                        ? ((a = o.Deferred()),
                          (i.promise = a.promise()),
                          (i.resolve = a.resolve),
                          (i.reject = a.reject))
                        : t.console &&
                          console.warn(
                              e.messages.warningNoPromiseImplementation()
                          ),
                    i
                );
            },
            all: function(n, a) {
                var i = null;
                return e.features.has.promises
                    ? Promise.all(n)
                    : (i = t.jQuery || a.$) && "function" == typeof i.when
                    ? i.when.apply(i, n).done(function() {
                          return arguments;
                      })
                    : (t.console &&
                          console.warn(
                              e.messages.warningNoPromiseImplementation()
                          ),
                      []);
            },
            getPrefix: function(t, e, a) {
                var i = -1,
                    o = "";
                if (n.dashCase(e) in t.style) return "";
                for (i = 0; (o = a[i]); i++)
                    if (o + e in t.style) return o.toLowerCase();
                return "unsupported";
            },
            randomHex: function() {
                return (
                    "00000" + ((16777216 * Math.random()) << 0).toString(16)
                )
                    .substr(-6)
                    .toUpperCase();
            },
            getDocumentState: function(e) {
                return (
                    (e = "object" == typeof e.body ? e : t.document),
                    {
                        scrollTop: t.pageYOffset,
                        scrollLeft: t.pageXOffset,
                        docHeight: e.documentElement.scrollHeight,
                        docWidth: e.documentElement.scrollWidth,
                        viewportHeight: e.documentElement.clientHeight,
                        viewportWidth: e.documentElement.clientWidth
                    }
                );
            },
            bind: function(t, e) {
                return function() {
                    return e.apply(t, arguments);
                };
            },
            isVisible: function(e) {
                var n = null;
                return (
                    !!e.offsetParent ||
                    ((n = t.getComputedStyle(e)),
                    "fixed" === n.position &&
                        "hidden" !== n.visibility &&
                        "0" !== n.opacity)
                );
            },
            seal: function(t) {
                "function" == typeof Object.seal && Object.seal(t);
            },
            freeze: function(t) {
                "function" == typeof Object.freeze && Object.freeze(t);
            },
            compareVersions: function(t, e) {
                var n = t.split("."),
                    a = e.split("."),
                    i = -1,
                    o = -1,
                    r = -1;
                for (r = 0; r < n.length; r++) {
                    if (
                        ((i = parseInt(n[r].replace(/[^\d.]/g, ""))),
                        (o = parseInt(a[r].replace(/[^\d.]/g, "") || 0)),
                        o < i)
                    )
                        return !1;
                    if (o > i) return !0;
                }
                return !0;
            },
            Deferred: function() {
                (this.promise = null),
                    (this.resolve = null),
                    (this.reject = null),
                    (this.id = n.randomHex());
            },
            isEmptyObject: function(t) {
                var e = "";
                if ("function" == typeof Object.keys)
                    return 0 === Object.keys(t).length;
                for (e in t) if (t.hasOwnProperty(e)) return !1;
                return !0;
            },
            getClassname: function(t, e, n) {
                var a = "";
                return (
                    (a += t.block),
                    a.length && (a += t.delineatorElement),
                    (a += t["element" + this.pascalCase(e)]),
                    n ? (a.length && (a += t.delineatorModifier), (a += n)) : a
                );
            },
            getProperty: function(t, e) {
                var n = e.split("."),
                    a = null,
                    i = "",
                    o = 0;
                if (!e) return t;
                for (
                    a = function(t) {
                        return t ? t[i] : null;
                    };
                    o < n.length;

                )
                    (i = n[o]), (t = a(t)), o++;
                return "undefined" != typeof t ? t : null;
            }
        }),
        (e.h = n),
        (e.Base = function() {}),
        (e.Base.prototype = {
            constructor: e.Base,
            callActions: function(t, e) {
                var a = this,
                    i = a.constructor.actions[t],
                    o = "";
                if (i && !n.isEmptyObject(i)) for (o in i) i[o].apply(a, e);
            },
            callFilters: function(t, e, a) {
                var i = this,
                    o = i.constructor.filters[t],
                    r = e,
                    s = "";
                if (!o || n.isEmptyObject(o)) return r;
                a = a || [];
                for (s in o)
                    (a = n.arrayFromList(a)),
                        a.unshift(r),
                        (r = o[s].apply(i, a));
                return r;
            }
        }),
        (e.BaseStatic = function() {
            (this.actions = {}),
                (this.filters = {}),
                (this.extend = function(t) {
                    n.extend(this.prototype, t);
                }),
                (this.registerAction = function(t, e, n) {
                    (this.actions[t] = this.actions[t] || {})[e] = n;
                }),
                (this.registerFilter = function(t, e, n) {
                    (this.filters[t] = this.filters[t] || {})[e] = n;
                });
        }),
        (e.Features = function() {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.boxSizingPrefix = ""),
                (this.transformPrefix = ""),
                (this.transitionPrefix = ""),
                (this.boxSizingPrefix = ""),
                (this.transformProp = ""),
                (this.transformRule = ""),
                (this.transitionProp = ""),
                (this.perspectiveProp = ""),
                (this.perspectiveOriginProp = ""),
                (this.has = new e.Has()),
                (this.canary = null),
                (this.BOX_SIZING_PROP = "boxSizing"),
                (this.TRANSITION_PROP = "transition"),
                (this.TRANSFORM_PROP = "transform"),
                (this.PERSPECTIVE_PROP = "perspective"),
                (this.PERSPECTIVE_ORIGIN_PROP = "perspectiveOrigin"),
                (this.VENDORS = ["Webkit", "moz", "O", "ms"]),
                (this.TWEENABLE = [
                    "opacity",
                    "width",
                    "height",
                    "marginRight",
                    "marginBottom",
                    "x",
                    "y",
                    "scale",
                    "translateX",
                    "translateY",
                    "translateZ",
                    "rotateX",
                    "rotateY",
                    "rotateZ"
                ]),
                this.callActions("afterConstruct");
        }),
        e.BaseStatic.call(e.Features),
        (e.Features.prototype = Object.create(e.Base.prototype)),
        n.extend(e.Features.prototype, {
            constructor: e.Features,
            init: function() {
                var t = this;
                t.callActions("beforeInit", arguments),
                    (t.canary = document.createElement("div")),
                    t.setPrefixes(),
                    t.runTests(),
                    t.callActions("beforeInit", arguments);
            },
            runTests: function() {
                var e = this;
                e.callActions("beforeRunTests", arguments),
                    (e.has.promises = "function" == typeof t.Promise),
                    (e.has.transitions = "unsupported" !== e.transitionPrefix),
                    e.callActions("afterRunTests", arguments),
                    n.freeze(e.has);
            },
            setPrefixes: function() {
                var t = this;
                t.callActions("beforeSetPrefixes", arguments),
                    (t.transitionPrefix = n.getPrefix(
                        t.canary,
                        "Transition",
                        t.VENDORS
                    )),
                    (t.transformPrefix = n.getPrefix(
                        t.canary,
                        "Transform",
                        t.VENDORS
                    )),
                    (t.boxSizingPrefix = n.getPrefix(
                        t.canary,
                        "BoxSizing",
                        t.VENDORS
                    )),
                    (t.boxSizingProp = t.boxSizingPrefix
                        ? t.boxSizingPrefix + n.pascalCase(t.BOX_SIZING_PROP)
                        : t.BOX_SIZING_PROP),
                    (t.transitionProp = t.transitionPrefix
                        ? t.transitionPrefix + n.pascalCase(t.TRANSITION_PROP)
                        : t.TRANSITION_PROP),
                    (t.transformProp = t.transformPrefix
                        ? t.transformPrefix + n.pascalCase(t.TRANSFORM_PROP)
                        : t.TRANSFORM_PROP),
                    (t.transformRule = t.transformPrefix
                        ? "-" + t.transformPrefix + "-" + t.TRANSFORM_PROP
                        : t.TRANSFORM_PROP),
                    (t.perspectiveProp = t.transformPrefix
                        ? t.transformPrefix + n.pascalCase(t.PERSPECTIVE_PROP)
                        : t.PERSPECTIVE_PROP),
                    (t.perspectiveOriginProp = t.transformPrefix
                        ? t.transformPrefix +
                          n.pascalCase(t.PERSPECTIVE_ORIGIN_PROP)
                        : t.PERSPECTIVE_ORIGIN_PROP),
                    t.callActions("afterSetPrefixes", arguments);
            }
        }),
        (e.Has = function() {
            (this.transitions = !1), (this.promises = !1), n.seal(this);
        }),
        (e.features = new e.Features()),
        e.features.init(),
        (e.ConfigAnimation = function() {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.enable = !0),
                (this.effects = "fade scale"),
                (this.effectsIn = ""),
                (this.effectsOut = ""),
                (this.duration = 600),
                (this.easing = "ease"),
                (this.applyPerspective = !0),
                (this.perspectiveDistance = "3000px"),
                (this.perspectiveOrigin = "50% 50%"),
                (this.queue = !0),
                (this.queueLimit = 3),
                (this.animateResizeContainer = !0),
                (this.animateResizeTargets = !1),
                (this.staggerSequence = null),
                (this.reverseOut = !1),
                (this.nudge = !0),
                (this.clampHeight = !0),
                (this.clampWidth = !0),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.ConfigAnimation),
        (e.ConfigAnimation.prototype = Object.create(e.Base.prototype)),
        (e.ConfigAnimation.prototype.constructor = e.ConfigAnimation),
        (e.ConfigBehavior = function() {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.liveSort = !1),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.ConfigBehavior),
        (e.ConfigBehavior.prototype = Object.create(e.Base.prototype)),
        (e.ConfigBehavior.prototype.constructor = e.ConfigBehavior),
        (e.ConfigCallbacks = function() {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.onMixStart = null),
                (this.onMixBusy = null),
                (this.onMixEnd = null),
                (this.onMixFail = null),
                (this.onMixClick = null),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.ConfigCallbacks),
        (e.ConfigCallbacks.prototype = Object.create(e.Base.prototype)),
        (e.ConfigCallbacks.prototype.constructor = e.ConfigCallbacks),
        (e.ConfigControls = function() {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.enable = !0),
                (this.live = !1),
                (this.scope = "global"),
                (this.toggleLogic = "or"),
                (this.toggleDefault = "all"),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.ConfigControls),
        (e.ConfigControls.prototype = Object.create(e.Base.prototype)),
        (e.ConfigControls.prototype.constructor = e.ConfigControls),
        (e.ConfigClassNames = function() {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.block = "mixitup"),
                (this.elementContainer = "container"),
                (this.elementFilter = "control"),
                (this.elementSort = "control"),
                (this.elementMultimix = "control"),
                (this.elementToggle = "control"),
                (this.modifierActive = "active"),
                (this.modifierDisabled = "disabled"),
                (this.modifierFailed = "failed"),
                (this.delineatorElement = "-"),
                (this.delineatorModifier = "-"),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.ConfigClassNames),
        (e.ConfigClassNames.prototype = Object.create(e.Base.prototype)),
        (e.ConfigClassNames.prototype.constructor = e.ConfigClassNames),
        (e.ConfigData = function() {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.uidKey = ""),
                (this.dirtyCheck = !1),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.ConfigData),
        (e.ConfigData.prototype = Object.create(e.Base.prototype)),
        (e.ConfigData.prototype.constructor = e.ConfigData),
        (e.ConfigDebug = function() {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.enable = !1),
                (this.showWarnings = !0),
                (this.fauxAsync = !1),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.ConfigDebug),
        (e.ConfigDebug.prototype = Object.create(e.Base.prototype)),
        (e.ConfigDebug.prototype.constructor = e.ConfigDebug),
        (e.ConfigLayout = function() {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.allowNestedTargets = !0),
                (this.containerClassName = ""),
                (this.siblingBefore = null),
                (this.siblingAfter = null),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.ConfigLayout),
        (e.ConfigLayout.prototype = Object.create(e.Base.prototype)),
        (e.ConfigLayout.prototype.constructor = e.ConfigLayout),
        (e.ConfigLoad = function() {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.filter = "all"),
                (this.sort = "default:asc"),
                (this.dataset = null),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.ConfigLoad),
        (e.ConfigLoad.prototype = Object.create(e.Base.prototype)),
        (e.ConfigLoad.prototype.constructor = e.ConfigLoad),
        (e.ConfigSelectors = function() {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.target = ".mix"),
                (this.control = ""),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.ConfigSelectors),
        (e.ConfigSelectors.prototype = Object.create(e.Base.prototype)),
        (e.ConfigSelectors.prototype.constructor = e.ConfigSelectors),
        (e.ConfigRender = function() {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.target = null),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.ConfigRender),
        (e.ConfigRender.prototype = Object.create(e.Base.prototype)),
        (e.ConfigRender.prototype.constructor = e.ConfigRender),
        (e.ConfigTemplates = function() {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.ConfigTemplates),
        (e.ConfigTemplates.prototype = Object.create(e.Base.prototype)),
        (e.ConfigTemplates.prototype.constructor = e.ConfigTemplates),
        (e.Config = function() {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.animation = new e.ConfigAnimation()),
                (this.behavior = new e.ConfigBehavior()),
                (this.callbacks = new e.ConfigCallbacks()),
                (this.controls = new e.ConfigControls()),
                (this.classNames = new e.ConfigClassNames()),
                (this.data = new e.ConfigData()),
                (this.debug = new e.ConfigDebug()),
                (this.layout = new e.ConfigLayout()),
                (this.load = new e.ConfigLoad()),
                (this.selectors = new e.ConfigSelectors()),
                (this.render = new e.ConfigRender()),
                (this.templates = new e.ConfigTemplates()),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.Config),
        (e.Config.prototype = Object.create(e.Base.prototype)),
        (e.Config.prototype.constructor = e.Config),
        (e.MixerDom = function() {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.document = null),
                (this.body = null),
                (this.container = null),
                (this.parent = null),
                (this.targets = []),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.MixerDom),
        (e.MixerDom.prototype = Object.create(e.Base.prototype)),
        (e.MixerDom.prototype.constructor = e.MixerDom),
        (e.UiClassNames = function() {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.base = ""),
                (this.active = ""),
                (this.disabled = ""),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.UiClassNames),
        (e.UiClassNames.prototype = Object.create(e.Base.prototype)),
        (e.UiClassNames.prototype.constructor = e.UiClassNames),
        (e.CommandDataset = function() {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.dataset = null),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.CommandDataset),
        (e.CommandDataset.prototype = Object.create(e.Base.prototype)),
        (e.CommandDataset.prototype.constructor = e.CommandDataset),
        (e.CommandMultimix = function() {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.filter = null),
                (this.sort = null),
                (this.insert = null),
                (this.remove = null),
                (this.changeLayout = null),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.CommandMultimix),
        (e.CommandMultimix.prototype = Object.create(e.Base.prototype)),
        (e.CommandMultimix.prototype.constructor = e.CommandMultimix),
        (e.CommandFilter = function() {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.selector = ""),
                (this.collection = null),
                (this.action = "show"),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.CommandFilter),
        (e.CommandFilter.prototype = Object.create(e.Base.prototype)),
        (e.CommandFilter.prototype.constructor = e.CommandFilter),
        (e.CommandSort = function() {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.sortString = ""),
                (this.attribute = ""),
                (this.order = "asc"),
                (this.collection = null),
                (this.next = null),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.CommandSort),
        (e.CommandSort.prototype = Object.create(e.Base.prototype)),
        (e.CommandSort.prototype.constructor = e.CommandSort),
        (e.CommandInsert = function() {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.index = 0),
                (this.collection = []),
                (this.position = "before"),
                (this.sibling = null),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.CommandInsert),
        (e.CommandInsert.prototype = Object.create(e.Base.prototype)),
        (e.CommandInsert.prototype.constructor = e.CommandInsert),
        (e.CommandRemove = function() {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.targets = []),
                (this.collection = []),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.CommandRemove),
        (e.CommandRemove.prototype = Object.create(e.Base.prototype)),
        (e.CommandRemove.prototype.constructor = e.CommandRemove),
        (e.CommandChangeLayout = function() {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.containerClassName = ""),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.CommandChangeLayout),
        (e.CommandChangeLayout.prototype = Object.create(e.Base.prototype)),
        (e.CommandChangeLayout.prototype.constructor = e.CommandChangeLayout),
        (e.ControlDefinition = function(t, a, i, o) {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.type = t),
                (this.selector = a),
                (this.live = i || !1),
                (this.parent = o || ""),
                this.callActions("afterConstruct"),
                n.freeze(this),
                n.seal(this);
        }),
        e.BaseStatic.call(e.ControlDefinition),
        (e.ControlDefinition.prototype = Object.create(e.Base.prototype)),
        (e.ControlDefinition.prototype.constructor = e.ControlDefinition),
        (e.controlDefinitions = []),
        e.controlDefinitions.push(
            new e.ControlDefinition("multimix", "[data-filter][data-sort]")
        ),
        e.controlDefinitions.push(
            new e.ControlDefinition("filter", "[data-filter]")
        ),
        e.controlDefinitions.push(
            new e.ControlDefinition("sort", "[data-sort]")
        ),
        e.controlDefinitions.push(
            new e.ControlDefinition("toggle", "[data-toggle]")
        ),
        (e.Control = function() {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.el = null),
                (this.selector = ""),
                (this.bound = []),
                (this.pending = -1),
                (this.type = ""),
                (this.status = "inactive"),
                (this.filter = ""),
                (this.sort = ""),
                (this.canDisable = !1),
                (this.handler = null),
                (this.classNames = new e.UiClassNames()),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.Control),
        (e.Control.prototype = Object.create(e.Base.prototype)),
        n.extend(e.Control.prototype, {
            constructor: e.Control,
            init: function(t, n, a) {
                var i = this;
                if (
                    (this.callActions("beforeInit", arguments),
                    (i.el = t),
                    (i.type = n),
                    (i.selector = a),
                    i.selector)
                )
                    i.status = "live";
                else
                    switch (
                        ((i.canDisable = "boolean" == typeof i.el.disable),
                        i.type)
                    ) {
                        case "filter":
                            i.filter = i.el.getAttribute("data-filter");
                            break;
                        case "toggle":
                            i.filter = i.el.getAttribute("data-toggle");
                            break;
                        case "sort":
                            i.sort = i.el.getAttribute("data-sort");
                            break;
                        case "multimix":
                            (i.filter = i.el.getAttribute("data-filter")),
                                (i.sort = i.el.getAttribute("data-sort"));
                    }
                i.bindClick(),
                    e.controls.push(i),
                    this.callActions("afterInit", arguments);
            },
            isBound: function(t) {
                var e = this,
                    n = !1;
                return (
                    this.callActions("beforeIsBound", arguments),
                    (n = e.bound.indexOf(t) > -1),
                    e.callFilters("afterIsBound", n, arguments)
                );
            },
            addBinding: function(t) {
                var e = this;
                this.callActions("beforeAddBinding", arguments),
                    e.isBound() || e.bound.push(t),
                    this.callActions("afterAddBinding", arguments);
            },
            removeBinding: function(t) {
                var n = this,
                    a = -1;
                this.callActions("beforeRemoveBinding", arguments),
                    (a = n.bound.indexOf(t)) > -1 && n.bound.splice(a, 1),
                    n.bound.length < 1 &&
                        (n.unbindClick(),
                        (a = e.controls.indexOf(n)),
                        e.controls.splice(a, 1),
                        "active" === n.status &&
                            n.renderStatus(n.el, "inactive")),
                    this.callActions("afterRemoveBinding", arguments);
            },
            bindClick: function() {
                var t = this;
                this.callActions("beforeBindClick", arguments),
                    (t.handler = function(e) {
                        t.handleClick(e);
                    }),
                    n.on(t.el, "click", t.handler),
                    this.callActions("afterBindClick", arguments);
            },
            unbindClick: function() {
                var t = this;
                this.callActions("beforeUnbindClick", arguments),
                    n.off(t.el, "click", t.handler),
                    (t.handler = null),
                    this.callActions("afterUnbindClick", arguments);
            },
            handleClick: function(t) {
                var a = this,
                    i = null,
                    o = null,
                    r = !1,
                    s = void 0,
                    l = {},
                    c = null,
                    u = [],
                    f = -1;
                if (
                    (this.callActions("beforeHandleClick", arguments),
                    (this.pending = 0),
                    (o = a.bound[0]),
                    (i = a.selector
                        ? n.closestParent(
                              t.target,
                              o.config.selectors.control + a.selector,
                              !0,
                              o.dom.document
                          )
                        : a.el),
                    !i)
                )
                    return void a.callActions("afterHandleClick", arguments);
                switch (a.type) {
                    case "filter":
                        l.filter = a.filter || i.getAttribute("data-filter");
                        break;
                    case "sort":
                        l.sort = a.sort || i.getAttribute("data-sort");
                        break;
                    case "multimix":
                        (l.filter = a.filter || i.getAttribute("data-filter")),
                            (l.sort = a.sort || i.getAttribute("data-sort"));
                        break;
                    case "toggle":
                        (l.filter = a.filter || i.getAttribute("data-toggle")),
                            (r =
                                "live" === a.status
                                    ? n.hasClass(i, a.classNames.active)
                                    : "active" === a.status);
                }
                for (f = 0; f < a.bound.length; f++)
                    (c = new e.CommandMultimix()), n.extend(c, l), u.push(c);
                for (
                    u = a.callFilters("commandsHandleClick", u, arguments),
                        a.pending = a.bound.length,
                        f = 0;
                    (o = a.bound[f]);
                    f++
                )
                    (l = u[f]),
                        l &&
                            (o.lastClicked || (o.lastClicked = i),
                            e.events.fire(
                                "mixClick",
                                o.dom.container,
                                {
                                    state: o.state,
                                    instance: o,
                                    originalEvent: t,
                                    control: o.lastClicked
                                },
                                o.dom.document
                            ),
                            ("function" ==
                                typeof o.config.callbacks.onMixClick &&
                                ((s = o.config.callbacks.onMixClick.call(
                                    o.lastClicked,
                                    o.state,
                                    t,
                                    o
                                )),
                                s === !1)) ||
                                ("toggle" === a.type
                                    ? r
                                        ? o.toggleOff(l.filter)
                                        : o.toggleOn(l.filter)
                                    : o.multimix(l)));
                this.callActions("afterHandleClick", arguments);
            },
            update: function(t, n) {
                var a = this,
                    i = new e.CommandMultimix();
                a.callActions("beforeUpdate", arguments),
                    a.pending--,
                    (a.pending = Math.max(0, a.pending)),
                    a.pending > 0 ||
                        ("live" === a.status
                            ? a.updateLive(t, n)
                            : ((i.sort = a.sort),
                              (i.filter = a.filter),
                              a.callFilters("actionsUpdate", i, arguments),
                              a.parseStatusChange(a.el, t, i, n)),
                        a.callActions("afterUpdate", arguments));
            },
            updateLive: function(t, n) {
                var a = this,
                    i = null,
                    o = null,
                    r = null,
                    s = -1;
                if ((a.callActions("beforeUpdateLive", arguments), a.el)) {
                    for (
                        i = a.el.querySelectorAll(a.selector), s = 0;
                        (r = i[s]);
                        s++
                    ) {
                        switch (((o = new e.CommandMultimix()), a.type)) {
                            case "filter":
                                o.filter = r.getAttribute("data-filter");
                                break;
                            case "sort":
                                o.sort = r.getAttribute("data-sort");
                                break;
                            case "multimix":
                                (o.filter = r.getAttribute("data-filter")),
                                    (o.sort = r.getAttribute("data-sort"));
                                break;
                            case "toggle":
                                o.filter = r.getAttribute("data-toggle");
                        }
                        (o = a.callFilters("actionsUpdateLive", o, arguments)),
                            a.parseStatusChange(r, t, o, n);
                    }
                    a.callActions("afterUpdateLive", arguments);
                }
            },
            parseStatusChange: function(t, e, n, a) {
                var i = this,
                    o = "",
                    r = "",
                    s = -1;
                switch (
                    (i.callActions("beforeParseStatusChange", arguments),
                    i.type)
                ) {
                    case "filter":
                        e.filter === n.filter
                            ? i.renderStatus(t, "active")
                            : i.renderStatus(t, "inactive");
                        break;
                    case "multimix":
                        e.sort === n.sort && e.filter === n.filter
                            ? i.renderStatus(t, "active")
                            : i.renderStatus(t, "inactive");
                        break;
                    case "sort":
                        e.sort.match(/:asc/g) &&
                            (o = e.sort.replace(/:asc/g, "")),
                            e.sort === n.sort || o === n.sort
                                ? i.renderStatus(t, "active")
                                : i.renderStatus(t, "inactive");
                        break;
                    case "toggle":
                        for (
                            a.length < 1 && i.renderStatus(t, "inactive"),
                                e.filter === n.filter &&
                                    i.renderStatus(t, "active"),
                                s = 0;
                            s < a.length;
                            s++
                        ) {
                            if (((r = a[s]), r === n.filter)) {
                                i.renderStatus(t, "active");
                                break;
                            }
                            i.renderStatus(t, "inactive");
                        }
                }
                i.callActions("afterParseStatusChange", arguments);
            },
            renderStatus: function(t, e) {
                var a = this;
                switch ((a.callActions("beforeRenderStatus", arguments), e)) {
                    case "active":
                        n.addClass(t, a.classNames.active),
                            n.removeClass(t, a.classNames.disabled),
                            a.canDisable && (a.el.disabled = !1);
                        break;
                    case "inactive":
                        n.removeClass(t, a.classNames.active),
                            n.removeClass(t, a.classNames.disabled),
                            a.canDisable && (a.el.disabled = !1);
                        break;
                    case "disabled":
                        a.canDisable && (a.el.disabled = !0),
                            n.addClass(t, a.classNames.disabled),
                            n.removeClass(t, a.classNames.active);
                }
                "live" !== a.status && (a.status = e),
                    a.callActions("afterRenderStatus", arguments);
            }
        }),
        (e.controls = []),
        (e.StyleData = function() {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.x = 0),
                (this.y = 0),
                (this.top = 0),
                (this.right = 0),
                (this.bottom = 0),
                (this.left = 0),
                (this.width = 0),
                (this.height = 0),
                (this.marginRight = 0),
                (this.marginBottom = 0),
                (this.opacity = 0),
                (this.scale = new e.TransformData()),
                (this.translateX = new e.TransformData()),
                (this.translateY = new e.TransformData()),
                (this.translateZ = new e.TransformData()),
                (this.rotateX = new e.TransformData()),
                (this.rotateY = new e.TransformData()),
                (this.rotateZ = new e.TransformData()),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.StyleData),
        (e.StyleData.prototype = Object.create(e.Base.prototype)),
        (e.StyleData.prototype.constructor = e.StyleData),
        (e.TransformData = function() {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.value = 0),
                (this.unit = ""),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.TransformData),
        (e.TransformData.prototype = Object.create(e.Base.prototype)),
        (e.TransformData.prototype.constructor = e.TransformData),
        (e.TransformDefaults = function() {
            e.StyleData.apply(this),
                this.callActions("beforeConstruct"),
                (this.scale.value = 0.01),
                (this.scale.unit = ""),
                (this.translateX.value = 20),
                (this.translateX.unit = "px"),
                (this.translateY.value = 20),
                (this.translateY.unit = "px"),
                (this.translateZ.value = 20),
                (this.translateZ.unit = "px"),
                (this.rotateX.value = 90),
                (this.rotateX.unit = "deg"),
                (this.rotateY.value = 90),
                (this.rotateY.unit = "deg"),
                (this.rotateX.value = 90),
                (this.rotateX.unit = "deg"),
                (this.rotateZ.value = 180),
                (this.rotateZ.unit = "deg"),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.TransformDefaults),
        (e.TransformDefaults.prototype = Object.create(e.StyleData.prototype)),
        (e.TransformDefaults.prototype.constructor = e.TransformDefaults),
        (e.transformDefaults = new e.TransformDefaults()),
        (e.EventDetail = function() {
            (this.state = null),
                (this.futureState = null),
                (this.instance = null),
                (this.originalEvent = null);
        }),
        (e.Events = function() {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.mixStart = null),
                (this.mixBusy = null),
                (this.mixEnd = null),
                (this.mixFail = null),
                (this.mixClick = null),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.Events),
        (e.Events.prototype = Object.create(e.Base.prototype)),
        (e.Events.prototype.constructor = e.Events),
        (e.Events.prototype.fire = function(t, a, i, o) {
            var r = this,
                s = null,
                l = new e.EventDetail();
            if (
                (r.callActions("beforeFire", arguments),
                "undefined" == typeof r[t])
            )
                throw new Error('Event type "' + t + '" not found.');
            (l.state = new e.State()),
                n.extend(l.state, i.state),
                i.futureState &&
                    ((l.futureState = new e.State()),
                    n.extend(l.futureState, i.futureState)),
                (l.instance = i.instance),
                i.originalEvent && (l.originalEvent = i.originalEvent),
                (s = n.getCustomEvent(t, l, o)),
                r.callFilters("eventFire", s, arguments),
                a.dispatchEvent(s);
        }),
        (e.events = new e.Events()),
        (e.QueueItem = function() {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.args = []),
                (this.instruction = null),
                (this.triggerElement = null),
                (this.deferred = null),
                (this.isToggling = !1),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.QueueItem),
        (e.QueueItem.prototype = Object.create(e.Base.prototype)),
        (e.QueueItem.prototype.constructor = e.QueueItem),
        (e.Mixer = function() {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.config = new e.Config()),
                (this.id = ""),
                (this.isBusy = !1),
                (this.isToggling = !1),
                (this.incPadding = !0),
                (this.controls = []),
                (this.targets = []),
                (this.origOrder = []),
                (this.cache = {}),
                (this.toggleArray = []),
                (this.targetsMoved = 0),
                (this.targetsImmovable = 0),
                (this.targetsBound = 0),
                (this.targetsDone = 0),
                (this.staggerDuration = 0),
                (this.effectsIn = null),
                (this.effectsOut = null),
                (this.transformIn = []),
                (this.transformOut = []),
                (this.queue = []),
                (this.state = null),
                (this.lastOperation = null),
                (this.lastClicked = null),
                (this.userCallback = null),
                (this.userDeferred = null),
                (this.dom = new e.MixerDom()),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.Mixer),
        (e.Mixer.prototype = Object.create(e.Base.prototype)),
        n.extend(e.Mixer.prototype, {
            constructor: e.Mixer,
            attach: function(a, i, o, r) {
                var s = this,
                    l = null,
                    c = -1;
                for (
                    s.callActions("beforeAttach", arguments),
                        s.id = o,
                        r && n.extend(s.config, r, !0, !0),
                        s.sanitizeConfig(),
                        s.cacheDom(a, i),
                        s.config.layout.containerClassName &&
                            n.addClass(
                                s.dom.container,
                                s.config.layout.containerClassName
                            ),
                        e.features.has.transitions ||
                            (s.config.animation.enable = !1),
                        "undefined" == typeof t.console &&
                            (s.config.debug.showWarnings = !1),
                        s.config.data.uidKey && (s.config.controls.enable = !1),
                        s.indexTargets(),
                        s.state = s.getInitialState(),
                        c = 0;
                    (l = s.lastOperation.toHide[c]);
                    c++
                )
                    l.hide();
                s.config.controls.enable &&
                    (s.initControls(),
                    s.buildToggleArray(null, s.state),
                    s.updateControls({
                        filter: s.state.activeFilter,
                        sort: s.state.activeSort
                    })),
                    s.parseEffects(),
                    s.callActions("afterAttach", arguments);
            },
            sanitizeConfig: function() {
                var t = this;
                t.callActions("beforeSanitizeConfig", arguments),
                    (t.config.controls.scope = t.config.controls.scope
                        .toLowerCase()
                        .trim()),
                    (t.config.controls.toggleLogic = t.config.controls.toggleLogic
                        .toLowerCase()
                        .trim()),
                    (t.config.controls.toggleDefault = t.config.controls.toggleDefault
                        .toLowerCase()
                        .trim()),
                    (t.config.animation.effects = t.config.animation.effects.trim()),
                    t.callActions("afterSanitizeConfig", arguments);
            },
            getInitialState: function() {
                var t = this,
                    n = new e.State(),
                    a = new e.Operation();
                if (
                    (t.callActions("beforeGetInitialState", arguments),
                    (n.activeContainerClassName =
                        t.config.layout.containerClassName),
                    t.config.load.dataset)
                ) {
                    if (
                        !t.config.data.uidKey ||
                        "string" != typeof t.config.data.uidKey
                    )
                        throw new TypeError(
                            e.messages.errorConfigDataUidKeyNotSet()
                        );
                    (a.startDataset = a.newDataset = n.activeDataset = t.config.load.dataset.slice()),
                        (a.startContainerClassName = a.newContainerClassName =
                            n.activeContainerClassName),
                        (a.show = t.targets.slice()),
                        (n = t.callFilters(
                            "stateGetInitialState",
                            n,
                            arguments
                        ));
                } else
                    (n.activeFilter = t.parseFilterArgs([
                        t.config.load.filter
                    ]).command),
                        (n.activeSort = t.parseSortArgs([
                            t.config.load.sort
                        ]).command),
                        (n.totalTargets = t.targets.length),
                        (n = t.callFilters(
                            "stateGetInitialState",
                            n,
                            arguments
                        )),
                        n.activeSort.collection ||
                        n.activeSort.attribute ||
                        "random" === n.activeSort.order ||
                        "desc" === n.activeSort.order
                            ? ((a.newSort = n.activeSort),
                              t.sortOperation(a),
                              t.printSort(!1, a),
                              (t.targets = a.newOrder))
                            : (a.startOrder = a.newOrder = t.targets),
                        (a.startFilter = a.newFilter = n.activeFilter),
                        (a.startSort = a.newSort = n.activeSort),
                        (a.startContainerClassName = a.newContainerClassName =
                            n.activeContainerClassName),
                        "all" === a.newFilter.selector
                            ? (a.newFilter.selector = t.config.selectors.target)
                            : "none" === a.newFilter.selector &&
                              (a.newFilter.selector = "");
                return (
                    (a = t.callFilters("operationGetInitialState", a, [n])),
                    (t.lastOperation = a),
                    a.newFilter && t.filterOperation(a),
                    (n = t.buildState(a))
                );
            },
            cacheDom: function(t, e) {
                var n = this;
                n.callActions("beforeCacheDom", arguments),
                    (n.dom.document = e),
                    (n.dom.body = n.dom.document.querySelector("body")),
                    (n.dom.container = t),
                    (n.dom.parent = t),
                    n.callActions("afterCacheDom", arguments);
            },
            indexTargets: function() {
                var t = this,
                    a = null,
                    i = null,
                    o = null,
                    r = -1;
                if (
                    (t.callActions("beforeIndexTargets", arguments),
                    (t.dom.targets = t.config.layout.allowNestedTargets
                        ? t.dom.container.querySelectorAll(
                              t.config.selectors.target
                          )
                        : n.children(
                              t.dom.container,
                              t.config.selectors.target,
                              t.dom.document
                          )),
                    (t.dom.targets = n.arrayFromList(t.dom.targets)),
                    (t.targets = []),
                    (o = t.config.load.dataset) &&
                        o.length !== t.dom.targets.length)
                )
                    throw new Error(
                        e.messages.errorDatasetPrerenderedMismatch()
                    );
                if (t.dom.targets.length) {
                    for (r = 0; (i = t.dom.targets[r]); r++)
                        (a = new e.Target()),
                            a.init(i, t, o ? o[r] : void 0),
                            (a.isInDom = !0),
                            t.targets.push(a);
                    t.dom.parent =
                        t.dom.targets[0].parentElement === t.dom.container
                            ? t.dom.container
                            : t.dom.targets[0].parentElement;
                }
                (t.origOrder = t.targets),
                    t.callActions("afterIndexTargets", arguments);
            },
            initControls: function() {
                var t = this,
                    n = "",
                    a = null,
                    i = null,
                    o = null,
                    r = null,
                    s = null,
                    l = -1,
                    c = -1;
                switch (
                    (t.callActions("beforeInitControls", arguments),
                    t.config.controls.scope)
                ) {
                    case "local":
                        o = t.dom.container;
                        break;
                    case "global":
                        o = t.dom.document;
                        break;
                    default:
                        throw new Error(
                            e.messages.errorConfigInvalidControlsScope()
                        );
                }
                for (l = 0; (n = e.controlDefinitions[l]); l++)
                    if (t.config.controls.live || n.live) {
                        if (n.parent) {
                            if (((r = t.dom[n.parent]), !r || r.length < 0))
                                continue;
                            "number" != typeof r.length && (r = [r]);
                        } else r = [o];
                        for (c = 0; (i = r[c]); c++)
                            (s = t.getControl(i, n.type, n.selector)),
                                t.controls.push(s);
                    } else
                        for (
                            a = o.querySelectorAll(
                                t.config.selectors.control + n.selector
                            ),
                                c = 0;
                            (i = a[c]);
                            c++
                        )
                            (s = t.getControl(i, n.type, "")),
                                s && t.controls.push(s);
                t.callActions("afterInitControls", arguments);
            },
            getControl: function(t, a, i) {
                var o = this,
                    r = null,
                    s = -1;
                if ((o.callActions("beforeGetControl", arguments), !i))
                    for (s = 0; (r = e.controls[s]); s++) {
                        if (r.el === t && r.isBound(o))
                            return o.callFilters(
                                "controlGetControl",
                                null,
                                arguments
                            );
                        if (r.el === t && r.type === a && r.selector === i)
                            return (
                                r.addBinding(o),
                                o.callFilters("controlGetControl", r, arguments)
                            );
                    }
                return (
                    (r = new e.Control()),
                    r.init(t, a, i),
                    (r.classNames.base = n.getClassname(
                        o.config.classNames,
                        a
                    )),
                    (r.classNames.active = n.getClassname(
                        o.config.classNames,
                        a,
                        o.config.classNames.modifierActive
                    )),
                    (r.classNames.disabled = n.getClassname(
                        o.config.classNames,
                        a,
                        o.config.classNames.modifierDisabled
                    )),
                    r.addBinding(o),
                    o.callFilters("controlGetControl", r, arguments)
                );
            },
            getToggleSelector: function() {
                var t = this,
                    e = "or" === t.config.controls.toggleLogic ? ", " : "",
                    a = "";
                return (
                    t.callActions("beforeGetToggleSelector", arguments),
                    (t.toggleArray = n.clean(t.toggleArray)),
                    (a = t.toggleArray.join(e)),
                    "" === a && (a = t.config.controls.toggleDefault),
                    t.callFilters("selectorGetToggleSelector", a, arguments)
                );
            },
            buildToggleArray: function(t, e) {
                var a = this,
                    i = "";
                if (
                    (a.callActions("beforeBuildToggleArray", arguments),
                    t && t.filter)
                )
                    i = t.filter.selector.replace(/\s/g, "");
                else {
                    if (!e) return;
                    i = e.activeFilter.selector.replace(/\s/g, "");
                }
                (i !== a.config.selectors.target && "all" !== i) || (i = ""),
                    "or" === a.config.controls.toggleLogic
                        ? (a.toggleArray = i.split(","))
                        : (a.toggleArray = a.splitCompoundSelector(i)),
                    (a.toggleArray = n.clean(a.toggleArray)),
                    a.callActions("afterBuildToggleArray", arguments);
            },
            splitCompoundSelector: function(t) {
                var e = t.split(/([\.\[])/g),
                    n = [],
                    a = "",
                    i = -1;
                for ("" === e[0] && e.shift(), i = 0; i < e.length; i++)
                    i % 2 === 0 && (a = ""),
                        (a += e[i]),
                        i % 2 !== 0 && n.push(a);
                return n;
            },
            updateControls: function(t) {
                var a = this,
                    i = null,
                    o = new e.CommandMultimix(),
                    r = -1;
                for (
                    a.callActions("beforeUpdateControls", arguments),
                        t.filter
                            ? (o.filter = t.filter.selector)
                            : (o.filter = a.state.activeFilter.selector),
                        t.sort
                            ? (o.sort = a.buildSortString(t.sort))
                            : (o.sort = a.buildSortString(a.state.activeSort)),
                        o.filter === a.config.selectors.target &&
                            (o.filter = "all"),
                        "" === o.filter && (o.filter = "none"),
                        n.freeze(o),
                        r = 0;
                    (i = a.controls[r]);
                    r++
                )
                    i.update(o, a.toggleArray);
                a.callActions("afterUpdateControls", arguments);
            },
            buildSortString: function(t) {
                var e = this,
                    n = "";
                return (
                    (n += t.sortString),
                    t.next && (n += " " + e.buildSortString(t.next)),
                    n
                );
            },
            insertTargets: function(t, a) {
                var i = this,
                    o = null,
                    r = -1,
                    s = null,
                    l = null,
                    c = null,
                    u = -1;
                if (
                    (i.callActions("beforeInsertTargets", arguments),
                    "undefined" == typeof t.index && (t.index = 0),
                    (o = i.getNextSibling(t.index, t.sibling, t.position)),
                    (s = i.dom.document.createDocumentFragment()),
                    (r = o
                        ? n.index(o, i.config.selectors.target)
                        : i.targets.length),
                    t.collection)
                ) {
                    for (u = 0; (c = t.collection[u]); u++) {
                        if (i.dom.targets.indexOf(c) > -1)
                            throw new Error(
                                e.messages.errorInsertPreexistingElement()
                            );
                        (c.style.display = "none"),
                            s.appendChild(c),
                            s.appendChild(i.dom.document.createTextNode(" ")),
                            n.isElement(c, i.dom.document) &&
                                c.matches(i.config.selectors.target) &&
                                ((l = new e.Target()),
                                l.init(c, i),
                                (l.isInDom = !0),
                                i.targets.splice(r, 0, l),
                                r++);
                    }
                    i.dom.parent.insertBefore(s, o);
                }
                (a.startOrder = i.origOrder = i.targets),
                    i.callActions("afterInsertTargets", arguments);
            },
            getNextSibling: function(t, e, n) {
                var a = this,
                    i = null;
                return (
                    (t = Math.max(t, 0)),
                    e && "before" === n
                        ? (i = e)
                        : e && "after" === n
                        ? (i = e.nextElementSibling || null)
                        : a.targets.length > 0 && "undefined" != typeof t
                        ? (i =
                              t < a.targets.length || !a.targets.length
                                  ? a.targets[t].dom.el
                                  : a.targets[a.targets.length - 1].dom.el
                                        .nextElementSibling)
                        : 0 === a.targets.length &&
                          a.dom.parent.children.length > 0 &&
                          (a.config.layout.siblingAfter
                              ? (i = a.config.layout.siblingAfter)
                              : a.config.layout.siblingBefore
                              ? (i =
                                    a.config.layout.siblingBefore
                                        .nextElementSibling)
                              : a.dom.parent.children[0]),
                    a.callFilters("elementGetNextSibling", i, arguments)
                );
            },
            filterOperation: function(t) {
                var e = this,
                    n = !1,
                    a = -1,
                    i = "",
                    o = null,
                    r = -1;
                for (
                    e.callActions("beforeFilterOperation", arguments),
                        i = t.newFilter.action,
                        r = 0;
                    (o = t.newOrder[r]);
                    r++
                )
                    (n = t.newFilter.collection
                        ? t.newFilter.collection.indexOf(o.dom.el) > -1
                        : "" !== t.newFilter.selector &&
                          o.dom.el.matches(t.newFilter.selector)),
                        e.evaluateHideShow(n, o, i, t);
                if (t.toRemove.length)
                    for (r = 0; (o = t.show[r]); r++)
                        t.toRemove.indexOf(o) > -1 &&
                            (t.show.splice(r, 1),
                            (a = t.toShow.indexOf(o)) > -1 &&
                                t.toShow.splice(a, 1),
                            t.toHide.push(o),
                            t.hide.push(o),
                            r--);
                (t.matching = t.show.slice()),
                    0 === t.show.length &&
                        "" !== t.newFilter.selector &&
                        0 !== e.targets.length &&
                        (t.hasFailed = !0),
                    e.callActions("afterFilterOperation", arguments);
            },
            evaluateHideShow: function(t, e, n, a) {
                var i = this,
                    o = !1,
                    r = Array.prototype.slice.call(arguments, 1);
                (o = i.callFilters("testResultEvaluateHideShow", t, r)),
                    i.callActions("beforeEvaluateHideShow", arguments),
                    (o === !0 && "show" === n) || (o === !1 && "hide" === n)
                        ? (a.show.push(e), !e.isShown && a.toShow.push(e))
                        : (a.hide.push(e), e.isShown && a.toHide.push(e)),
                    i.callActions("afterEvaluateHideShow", arguments);
            },
            sortOperation: function(t) {
                var a = this,
                    i = [],
                    o = null,
                    r = null,
                    s = -1;
                if (
                    (a.callActions("beforeSortOperation", arguments),
                    (t.startOrder = a.targets),
                    t.newSort.collection)
                ) {
                    for (i = [], s = 0; (r = t.newSort.collection[s]); s++) {
                        if (a.dom.targets.indexOf(r) < 0)
                            throw new Error(
                                e.messages.errorSortNonExistentElement()
                            );
                        (o = new e.Target()),
                            o.init(r, a),
                            (o.isInDom = !0),
                            i.push(o);
                    }
                    t.newOrder = i;
                } else
                    "random" === t.newSort.order
                        ? (t.newOrder = n.arrayShuffle(t.startOrder))
                        : "" === t.newSort.attribute
                        ? ((t.newOrder = a.origOrder.slice()),
                          "desc" === t.newSort.order && t.newOrder.reverse())
                        : ((t.newOrder = t.startOrder.slice()),
                          t.newOrder.sort(function(e, n) {
                              return a.compare(e, n, t.newSort);
                          }));
                n.isEqualArray(t.newOrder, t.startOrder) && (t.willSort = !1),
                    a.callActions("afterSortOperation", arguments);
            },
            compare: function(t, e, n) {
                var a = this,
                    i = n.order,
                    o = a.getAttributeValue(t, n.attribute),
                    r = a.getAttributeValue(e, n.attribute);
                return (
                    isNaN(1 * o) || isNaN(1 * r)
                        ? ((o = o.toLowerCase()), (r = r.toLowerCase()))
                        : ((o = 1 * o), (r = 1 * r)),
                    o < r
                        ? "asc" === i
                            ? -1
                            : 1
                        : o > r
                        ? "asc" === i
                            ? 1
                            : -1
                        : o === r && n.next
                        ? a.compare(t, e, n.next)
                        : 0
                );
            },
            getAttributeValue: function(t, n) {
                var a = this,
                    i = "";
                return (
                    (i = t.dom.el.getAttribute("data-" + n)),
                    null === i &&
                        a.config.debug.showWarnings &&
                        console.warn(
                            e.messages.warningInconsistentSortingAttributes({
                                attribute: "data-" + n
                            })
                        ),
                    a.callFilters("valueGetAttributeValue", i || 0, arguments)
                );
            },
            printSort: function(e, a) {
                var i = this,
                    o = e ? a.newOrder : a.startOrder,
                    r = e ? a.startOrder : a.newOrder,
                    s = o.length
                        ? o[o.length - 1].dom.el.nextElementSibling
                        : null,
                    l = t.document.createDocumentFragment(),
                    c = null,
                    u = null,
                    f = null,
                    h = -1;
                for (
                    i.callActions("beforePrintSort", arguments), h = 0;
                    (u = o[h]);
                    h++
                )
                    (f = u.dom.el),
                        "absolute" !== f.style.position &&
                            (n.removeWhitespace(f.previousSibling),
                            f.parentElement.removeChild(f));
                for (
                    c = s ? s.previousSibling : i.dom.parent.lastChild,
                        c && "#text" === c.nodeName && n.removeWhitespace(c),
                        h = 0;
                    (u = r[h]);
                    h++
                )
                    (f = u.dom.el),
                        n.isElement(l.lastChild) &&
                            l.appendChild(t.document.createTextNode(" ")),
                        l.appendChild(f);
                i.dom.parent.firstChild &&
                    i.dom.parent.firstChild !== s &&
                    l.insertBefore(
                        t.document.createTextNode(" "),
                        l.childNodes[0]
                    ),
                    s
                        ? (l.appendChild(t.document.createTextNode(" ")),
                          i.dom.parent.insertBefore(l, s))
                        : i.dom.parent.appendChild(l),
                    i.callActions("afterPrintSort", arguments);
            },
            parseSortString: function(t, a) {
                var i = this,
                    o = t.split(" "),
                    r = a,
                    s = [],
                    l = -1;
                for (l = 0; l < o.length; l++) {
                    switch (
                        ((s = o[l].split(":")),
                        (r.sortString = o[l]),
                        (r.attribute = n.dashCase(s[0])),
                        (r.order = s[1] || "asc"),
                        r.attribute)
                    ) {
                        case "default":
                            r.attribute = "";
                            break;
                        case "random":
                            (r.attribute = ""), (r.order = "random");
                    }
                    if (!r.attribute || "random" === r.order) break;
                    l < o.length - 1 &&
                        ((r.next = new e.CommandSort()),
                        n.freeze(r),
                        (r = r.next));
                }
                return i.callFilters("commandsParseSort", a, arguments);
            },
            parseEffects: function() {
                var t = this,
                    n = "",
                    a =
                        t.config.animation.effectsIn ||
                        t.config.animation.effects,
                    i =
                        t.config.animation.effectsOut ||
                        t.config.animation.effects;
                t.callActions("beforeParseEffects", arguments),
                    (t.effectsIn = new e.StyleData()),
                    (t.effectsOut = new e.StyleData()),
                    (t.transformIn = []),
                    (t.transformOut = []),
                    (t.effectsIn.opacity = t.effectsOut.opacity = 1),
                    t.parseEffect("fade", a, t.effectsIn, t.transformIn),
                    t.parseEffect("fade", i, t.effectsOut, t.transformOut, !0);
                for (n in e.transformDefaults)
                    e.transformDefaults[n] instanceof e.TransformData &&
                        (t.parseEffect(n, a, t.effectsIn, t.transformIn),
                        t.parseEffect(n, i, t.effectsOut, t.transformOut, !0));
                t.parseEffect("stagger", a, t.effectsIn, t.transformIn),
                    t.parseEffect(
                        "stagger",
                        i,
                        t.effectsOut,
                        t.transformOut,
                        !0
                    ),
                    t.callActions("afterParseEffects", arguments);
            },
            parseEffect: function(t, n, a, i, o) {
                var r = this,
                    s = /\(([^)]+)\)/,
                    l = -1,
                    c = "",
                    u = [],
                    f = "",
                    h = ["%", "px", "em", "rem", "vh", "vw", "deg"],
                    d = "",
                    m = -1;
                if (
                    (r.callActions("beforeParseEffect", arguments),
                    "string" != typeof n)
                )
                    throw new TypeError(
                        e.messages.errorConfigInvalidAnimationEffects()
                    );
                if (n.indexOf(t) < 0)
                    return void ("stagger" === t && (r.staggerDuration = 0));
                switch (
                    ((l = n.indexOf(t + "(")),
                    l > -1 &&
                        ((c = n.substring(l)), (u = s.exec(c)), (f = u[1])),
                    t)
                ) {
                    case "fade":
                        a.opacity = f ? parseFloat(f) : 0;
                        break;
                    case "stagger":
                        r.staggerDuration = f ? parseFloat(f) : 100;
                        break;
                    default:
                        if (
                            (o && r.config.animation.reverseOut && "scale" !== t
                                ? (a[t].value =
                                      (f
                                          ? parseFloat(f)
                                          : e.transformDefaults[t].value) * -1)
                                : (a[t].value = f
                                      ? parseFloat(f)
                                      : e.transformDefaults[t].value),
                            f)
                        ) {
                            for (m = 0; (d = h[m]); m++)
                                if (f.indexOf(d) > -1) {
                                    a[t].unit = d;
                                    break;
                                }
                        } else a[t].unit = e.transformDefaults[t].unit;
                        i.push(t + "(" + a[t].value + a[t].unit + ")");
                }
                r.callActions("afterParseEffect", arguments);
            },
            buildState: function(t) {
                var n = this,
                    a = new e.State(),
                    i = null,
                    o = -1;
                for (
                    n.callActions("beforeBuildState", arguments), o = 0;
                    (i = n.targets[o]);
                    o++
                )
                    (!t.toRemove.length || t.toRemove.indexOf(i) < 0) &&
                        a.targets.push(i.dom.el);
                for (o = 0; (i = t.matching[o]); o++) a.matching.push(i.dom.el);
                for (o = 0; (i = t.show[o]); o++) a.show.push(i.dom.el);
                for (o = 0; (i = t.hide[o]); o++)
                    (!t.toRemove.length || t.toRemove.indexOf(i) < 0) &&
                        a.hide.push(i.dom.el);
                return (
                    (a.id = n.id),
                    (a.container = n.dom.container),
                    (a.activeFilter = t.newFilter),
                    (a.activeSort = t.newSort),
                    (a.activeDataset = t.newDataset),
                    (a.activeContainerClassName = t.newContainerClassName),
                    (a.hasFailed = t.hasFailed),
                    (a.totalTargets = n.targets.length),
                    (a.totalShow = t.show.length),
                    (a.totalHide = t.hide.length),
                    (a.totalMatching = t.matching.length),
                    (a.triggerElement = t.triggerElement),
                    n.callFilters("stateBuildState", a, arguments)
                );
            },
            goMix: function(a, i) {
                var o = this,
                    r = null;
                return (
                    o.callActions("beforeGoMix", arguments),
                    (o.config.animation.duration &&
                        o.config.animation.effects &&
                        n.isVisible(o.dom.container)) ||
                        (a = !1),
                    i.toShow.length ||
                        i.toHide.length ||
                        i.willSort ||
                        i.willChangeLayout ||
                        (a = !1),
                    i.startState.show.length || i.show.length || (a = !1),
                    e.events.fire(
                        "mixStart",
                        o.dom.container,
                        {
                            state: i.startState,
                            futureState: i.newState,
                            instance: o
                        },
                        o.dom.document
                    ),
                    "function" == typeof o.config.callbacks.onMixStart &&
                        o.config.callbacks.onMixStart.call(
                            o.dom.container,
                            i.startState,
                            i.newState,
                            o
                        ),
                    n.removeClass(
                        o.dom.container,
                        n.getClassname(
                            o.config.classNames,
                            "container",
                            o.config.classNames.modifierFailed
                        )
                    ),
                    (r = o.userDeferred
                        ? o.userDeferred
                        : (o.userDeferred = n.defer(e.libraries))),
                    (o.isBusy = !0),
                    a && e.features.has.transitions
                        ? (t.pageYOffset !== i.docState.scrollTop &&
                              t.scrollTo(
                                  i.docState.scrollLeft,
                                  i.docState.scrollTop
                              ),
                          o.config.animation.applyPerspective &&
                              ((o.dom.parent.style[e.features.perspectiveProp] =
                                  o.config.animation.perspectiveDistance),
                              (o.dom.parent.style[
                                  e.features.perspectiveOriginProp
                              ] = o.config.animation.perspectiveOrigin)),
                          o.config.animation.animateResizeContainer &&
                              i.startHeight !== i.newHeight &&
                              i.viewportDeltaY !==
                                  i.startHeight - i.newHeight &&
                              (o.dom.parent.style.height =
                                  i.startHeight + "px"),
                          o.config.animation.animateResizeContainer &&
                              i.startWidth !== i.newWidth &&
                              i.viewportDeltaX !== i.startWidth - i.newWidth &&
                              (o.dom.parent.style.width = i.startWidth + "px"),
                          i.startHeight === i.newHeight &&
                              (o.dom.parent.style.height =
                                  i.startHeight + "px"),
                          i.startWidth === i.newWidth &&
                              (o.dom.parent.style.width = i.startWidth + "px"),
                          i.startHeight === i.newHeight &&
                              i.startWidth === i.newWidth &&
                              (o.dom.parent.style.overflow = "hidden"),
                          requestAnimationFrame(function() {
                              o.moveTargets(i);
                          }),
                          o.callFilters("promiseGoMix", r.promise, arguments))
                        : (o.config.debug.fauxAsync
                              ? setTimeout(function() {
                                    o.cleanUp(i);
                                }, o.config.animation.duration)
                              : o.cleanUp(i),
                          o.callFilters("promiseGoMix", r.promise, arguments))
                );
            },
            getStartMixData: function(n) {
                var a = this,
                    i = t.getComputedStyle(a.dom.parent),
                    o = a.dom.parent.getBoundingClientRect(),
                    r = null,
                    s = {},
                    l = -1,
                    c = i[e.features.boxSizingProp];
                for (
                    a.incPadding = "border-box" === c,
                        a.callActions("beforeGetStartMixData", arguments),
                        l = 0;
                    (r = n.show[l]);
                    l++
                )
                    (s = r.getPosData()),
                        (n.showPosData[l] = { startPosData: s });
                for (l = 0; (r = n.toHide[l]); l++)
                    (s = r.getPosData()),
                        (n.toHidePosData[l] = { startPosData: s });
                (n.startX = o.left),
                    (n.startY = o.top),
                    (n.startHeight = a.incPadding
                        ? o.height
                        : o.height -
                          parseFloat(i.paddingTop) -
                          parseFloat(i.paddingBottom) -
                          parseFloat(i.borderTop) -
                          parseFloat(i.borderBottom)),
                    (n.startWidth = a.incPadding
                        ? o.width
                        : o.width -
                          parseFloat(i.paddingLeft) -
                          parseFloat(i.paddingRight) -
                          parseFloat(i.borderLeft) -
                          parseFloat(i.borderRight)),
                    a.callActions("afterGetStartMixData", arguments);
            },
            setInter: function(t) {
                var e = this,
                    a = null,
                    i = -1;
                for (
                    e.callActions("beforeSetInter", arguments),
                        e.config.animation.clampHeight &&
                            ((e.dom.parent.style.height = t.startHeight + "px"),
                            (e.dom.parent.style.overflow = "hidden")),
                        e.config.animation.clampWidth &&
                            ((e.dom.parent.style.width = t.startWidth + "px"),
                            (e.dom.parent.style.overflow = "hidden")),
                        i = 0;
                    (a = t.toShow[i]);
                    i++
                )
                    a.show();
                t.willChangeLayout &&
                    (n.removeClass(e.dom.container, t.startContainerClassName),
                    n.addClass(e.dom.container, t.newContainerClassName)),
                    e.callActions("afterSetInter", arguments);
            },
            getInterMixData: function(t) {
                var e = this,
                    n = null,
                    a = -1;
                for (
                    e.callActions("beforeGetInterMixData", arguments), a = 0;
                    (n = t.show[a]);
                    a++
                )
                    t.showPosData[a].interPosData = n.getPosData();
                for (a = 0; (n = t.toHide[a]); a++)
                    t.toHidePosData[a].interPosData = n.getPosData();
                e.callActions("afterGetInterMixData", arguments);
            },
            setFinal: function(t) {
                var e = this,
                    n = null,
                    a = -1;
                for (
                    e.callActions("beforeSetFinal", arguments),
                        t.willSort && e.printSort(!1, t),
                        a = 0;
                    (n = t.toHide[a]);
                    a++
                )
                    n.hide();
                e.callActions("afterSetFinal", arguments);
            },
            getFinalMixData: function(e) {
                var a = this,
                    i = null,
                    o = null,
                    r = null,
                    s = -1;
                for (
                    a.callActions("beforeGetFinalMixData", arguments), s = 0;
                    (r = e.show[s]);
                    s++
                )
                    e.showPosData[s].finalPosData = r.getPosData();
                for (s = 0; (r = e.toHide[s]); s++)
                    e.toHidePosData[s].finalPosData = r.getPosData();
                for (
                    (a.config.animation.clampHeight ||
                        a.config.animation.clampWidth) &&
                        (a.dom.parent.style.height = a.dom.parent.style.width = a.dom.parent.style.overflow =
                            ""),
                        a.incPadding || (i = t.getComputedStyle(a.dom.parent)),
                        o = a.dom.parent.getBoundingClientRect(),
                        e.newX = o.left,
                        e.newY = o.top,
                        e.newHeight = a.incPadding
                            ? o.height
                            : o.height -
                              parseFloat(i.paddingTop) -
                              parseFloat(i.paddingBottom) -
                              parseFloat(i.borderTop) -
                              parseFloat(i.borderBottom),
                        e.newWidth = a.incPadding
                            ? o.width
                            : o.width -
                              parseFloat(i.paddingLeft) -
                              parseFloat(i.paddingRight) -
                              parseFloat(i.borderLeft) -
                              parseFloat(i.borderRight),
                        e.viewportDeltaX =
                            e.docState.viewportWidth -
                            this.dom.document.documentElement.clientWidth,
                        e.viewportDeltaY =
                            e.docState.viewportHeight -
                            this.dom.document.documentElement.clientHeight,
                        e.willSort && a.printSort(!0, e),
                        s = 0;
                    (r = e.toShow[s]);
                    s++
                )
                    r.hide();
                for (s = 0; (r = e.toHide[s]); s++) r.show();
                e.willChangeLayout &&
                    (n.removeClass(a.dom.container, e.newContainerClassName),
                    n.addClass(
                        a.dom.container,
                        a.config.layout.containerClassName
                    )),
                    a.callActions("afterGetFinalMixData", arguments);
            },
            getTweenData: function(t) {
                var n = this,
                    a = null,
                    i = null,
                    o = Object.getOwnPropertyNames(n.effectsIn),
                    r = "",
                    s = null,
                    l = -1,
                    c = -1,
                    u = -1,
                    f = -1;
                for (
                    n.callActions("beforeGetTweenData", arguments), u = 0;
                    (a = t.show[u]);
                    u++
                )
                    for (
                        i = t.showPosData[u],
                            i.posIn = new e.StyleData(),
                            i.posOut = new e.StyleData(),
                            i.tweenData = new e.StyleData(),
                            a.isShown
                                ? ((i.posIn.x =
                                      i.startPosData.x - i.interPosData.x),
                                  (i.posIn.y =
                                      i.startPosData.y - i.interPosData.y))
                                : (i.posIn.x = i.posIn.y = 0),
                            i.posOut.x = i.finalPosData.x - i.interPosData.x,
                            i.posOut.y = i.finalPosData.y - i.interPosData.y,
                            i.posIn.opacity = a.isShown
                                ? 1
                                : n.effectsIn.opacity,
                            i.posOut.opacity = 1,
                            i.tweenData.opacity =
                                i.posOut.opacity - i.posIn.opacity,
                            a.isShown ||
                                n.config.animation.nudge ||
                                ((i.posIn.x = i.posOut.x),
                                (i.posIn.y = i.posOut.y)),
                            i.tweenData.x = i.posOut.x - i.posIn.x,
                            i.tweenData.y = i.posOut.y - i.posIn.y,
                            n.config.animation.animateResizeTargets &&
                                ((i.posIn.width = i.startPosData.width),
                                (i.posIn.height = i.startPosData.height),
                                (l =
                                    (i.startPosData.width ||
                                        i.finalPosData.width) -
                                    i.interPosData.width),
                                (i.posIn.marginRight =
                                    i.startPosData.marginRight - l),
                                (c =
                                    (i.startPosData.height ||
                                        i.finalPosData.height) -
                                    i.interPosData.height),
                                (i.posIn.marginBottom =
                                    i.startPosData.marginBottom - c),
                                (i.posOut.width = i.finalPosData.width),
                                (i.posOut.height = i.finalPosData.height),
                                (l =
                                    (i.finalPosData.width ||
                                        i.startPosData.width) -
                                    i.interPosData.width),
                                (i.posOut.marginRight =
                                    i.finalPosData.marginRight - l),
                                (c =
                                    (i.finalPosData.height ||
                                        i.startPosData.height) -
                                    i.interPosData.height),
                                (i.posOut.marginBottom =
                                    i.finalPosData.marginBottom - c),
                                (i.tweenData.width =
                                    i.posOut.width - i.posIn.width),
                                (i.tweenData.height =
                                    i.posOut.height - i.posIn.height),
                                (i.tweenData.marginRight =
                                    i.posOut.marginRight - i.posIn.marginRight),
                                (i.tweenData.marginBottom =
                                    i.posOut.marginBottom -
                                    i.posIn.marginBottom)),
                            f = 0;
                        (r = o[f]);
                        f++
                    )
                        (s = n.effectsIn[r]),
                            s instanceof e.TransformData &&
                                s.value &&
                                ((i.posIn[r].value = s.value),
                                (i.posOut[r].value = 0),
                                (i.tweenData[r].value =
                                    i.posOut[r].value - i.posIn[r].value),
                                (i.posIn[r].unit = i.posOut[
                                    r
                                ].unit = i.tweenData[r].unit = s.unit));
                for (u = 0; (a = t.toHide[u]); u++)
                    for (
                        i = t.toHidePosData[u],
                            i.posIn = new e.StyleData(),
                            i.posOut = new e.StyleData(),
                            i.tweenData = new e.StyleData(),
                            i.posIn.x = a.isShown
                                ? i.startPosData.x - i.interPosData.x
                                : 0,
                            i.posIn.y = a.isShown
                                ? i.startPosData.y - i.interPosData.y
                                : 0,
                            i.posOut.x = n.config.animation.nudge
                                ? 0
                                : i.posIn.x,
                            i.posOut.y = n.config.animation.nudge
                                ? 0
                                : i.posIn.y,
                            i.tweenData.x = i.posOut.x - i.posIn.x,
                            i.tweenData.y = i.posOut.y - i.posIn.y,
                            n.config.animation.animateResizeTargets &&
                                ((i.posIn.width = i.startPosData.width),
                                (i.posIn.height = i.startPosData.height),
                                (l =
                                    i.startPosData.width -
                                    i.interPosData.width),
                                (i.posIn.marginRight =
                                    i.startPosData.marginRight - l),
                                (c =
                                    i.startPosData.height -
                                    i.interPosData.height),
                                (i.posIn.marginBottom =
                                    i.startPosData.marginBottom - c)),
                            i.posIn.opacity = 1,
                            i.posOut.opacity = n.effectsOut.opacity,
                            i.tweenData.opacity =
                                i.posOut.opacity - i.posIn.opacity,
                            f = 0;
                        (r = o[f]);
                        f++
                    )
                        (s = n.effectsOut[r]),
                            s instanceof e.TransformData &&
                                s.value &&
                                ((i.posIn[r].value = 0),
                                (i.posOut[r].value = s.value),
                                (i.tweenData[r].value =
                                    i.posOut[r].value - i.posIn[r].value),
                                (i.posIn[r].unit = i.posOut[
                                    r
                                ].unit = i.tweenData[r].unit = s.unit));
                n.callActions("afterGetTweenData", arguments);
            },
            moveTargets: function(t) {
                var a = this,
                    i = null,
                    o = null,
                    r = null,
                    s = "",
                    l = !1,
                    c = -1,
                    u = -1,
                    f = a.checkProgress.bind(a);
                for (
                    a.callActions("beforeMoveTargets", arguments), u = 0;
                    (i = t.show[u]);
                    u++
                )
                    (o = new e.IMoveData()),
                        (r = t.showPosData[u]),
                        (s = i.isShown ? "none" : "show"),
                        (l = a.willTransition(
                            s,
                            t.hasEffect,
                            r.posIn,
                            r.posOut
                        )),
                        l && c++,
                        i.show(),
                        (o.posIn = r.posIn),
                        (o.posOut = r.posOut),
                        (o.statusChange = s),
                        (o.staggerIndex = c),
                        (o.operation = t),
                        (o.callback = l ? f : null),
                        i.move(o);
                for (u = 0; (i = t.toHide[u]); u++)
                    (r = t.toHidePosData[u]),
                        (o = new e.IMoveData()),
                        (s = "hide"),
                        (l = a.willTransition(s, r.posIn, r.posOut)),
                        (o.posIn = r.posIn),
                        (o.posOut = r.posOut),
                        (o.statusChange = s),
                        (o.staggerIndex = u),
                        (o.operation = t),
                        (o.callback = l ? f : null),
                        i.move(o);
                a.config.animation.animateResizeContainer &&
                    ((a.dom.parent.style[e.features.transitionProp] =
                        "height " +
                        a.config.animation.duration +
                        "ms ease, width " +
                        a.config.animation.duration +
                        "ms ease "),
                    requestAnimationFrame(function() {
                        t.startHeight !== t.newHeight &&
                            t.viewportDeltaY !== t.startHeight - t.newHeight &&
                            (a.dom.parent.style.height = t.newHeight + "px"),
                            t.startWidth !== t.newWidth &&
                                t.viewportDeltaX !==
                                    t.startWidth - t.newWidth &&
                                (a.dom.parent.style.width = t.newWidth + "px");
                    })),
                    t.willChangeLayout &&
                        (n.removeClass(
                            a.dom.container,
                            a.config.layout.ContainerClassName
                        ),
                        n.addClass(a.dom.container, t.newContainerClassName)),
                    a.callActions("afterMoveTargets", arguments);
            },
            hasEffect: function() {
                var t = this,
                    e = [
                        "scale",
                        "translateX",
                        "translateY",
                        "translateZ",
                        "rotateX",
                        "rotateY",
                        "rotateZ"
                    ],
                    n = "",
                    a = null,
                    i = !1,
                    o = -1,
                    r = -1;
                if (1 !== t.effectsIn.opacity)
                    return t.callFilters("resultHasEffect", !0, arguments);
                for (r = 0; (n = e[r]); r++)
                    if (
                        ((a = t.effectsIn[n]),
                        (o = "undefined" !== a.value ? a.value : a),
                        0 !== o)
                    ) {
                        i = !0;
                        break;
                    }
                return t.callFilters("resultHasEffect", i, arguments);
            },
            willTransition: function(t, e, a, i) {
                var o = this,
                    r = !1;
                return (
                    (r =
                        !!n.isVisible(o.dom.container) &&
                        (!!(
                            ("none" !== t && e) ||
                            a.x !== i.x ||
                            a.y !== i.y
                        ) ||
                            (!!o.config.animation.animateResizeTargets &&
                                (a.width !== i.width ||
                                    a.height !== i.height ||
                                    a.marginRight !== i.marginRight ||
                                    a.marginTop !== i.marginTop)))),
                    o.callFilters("resultWillTransition", r, arguments)
                );
            },
            checkProgress: function(t) {
                var e = this;
                e.targetsDone++,
                    e.targetsBound === e.targetsDone && e.cleanUp(t);
            },
            cleanUp: function(t) {
                var a = this,
                    i = null,
                    o = null,
                    r = null,
                    s = null,
                    l = -1;
                for (
                    a.callActions("beforeCleanUp", arguments),
                        a.targetsMoved = a.targetsImmovable = a.targetsBound = a.targetsDone = 0,
                        l = 0;
                    (i = t.show[l]);
                    l++
                )
                    i.cleanUp(), i.show();
                for (l = 0; (i = t.toHide[l]); l++) i.cleanUp(), i.hide();
                if (
                    (t.willSort && a.printSort(!1, t),
                    (a.dom.parent.style[
                        e.features.transitionProp
                    ] = a.dom.parent.style.height = a.dom.parent.style.width = a.dom.parent.style.overflow = a.dom.parent.style[
                        e.features.perspectiveProp
                    ] = a.dom.parent.style[e.features.perspectiveOriginProp] =
                        ""),
                    t.willChangeLayout &&
                        (n.removeClass(
                            a.dom.container,
                            t.startContainerClassName
                        ),
                        n.addClass(a.dom.container, t.newContainerClassName)),
                    t.toRemove.length)
                ) {
                    for (l = 0; (i = a.targets[l]); l++)
                        t.toRemove.indexOf(i) > -1 &&
                            ((o = i.dom.el.previousSibling) &&
                                "#text" === o.nodeName &&
                                (r = i.dom.el.nextSibling) &&
                                "#text" === r.nodeName &&
                                n.removeWhitespace(o),
                            t.willSort || a.dom.parent.removeChild(i.dom.el),
                            a.targets.splice(l, 1),
                            (i.isInDom = !1),
                            l--);
                    a.origOrder = a.targets;
                }
                t.willSort && (a.targets = t.newOrder),
                    (a.state = t.newState),
                    (a.lastOperation = t),
                    (a.dom.targets = a.state.targets),
                    e.events.fire(
                        "mixEnd",
                        a.dom.container,
                        { state: a.state, instance: a },
                        a.dom.document
                    ),
                    "function" == typeof a.config.callbacks.onMixEnd &&
                        a.config.callbacks.onMixEnd.call(
                            a.dom.container,
                            a.state,
                            a
                        ),
                    t.hasFailed &&
                        (e.events.fire(
                            "mixFail",
                            a.dom.container,
                            { state: a.state, instance: a },
                            a.dom.document
                        ),
                        "function" == typeof a.config.callbacks.onMixFail &&
                            a.config.callbacks.onMixFail.call(
                                a.dom.container,
                                a.state,
                                a
                            ),
                        n.addClass(
                            a.dom.container,
                            n.getClassname(
                                a.config.classNames,
                                "container",
                                a.config.classNames.modifierFailed
                            )
                        )),
                    "function" == typeof a.userCallback &&
                        a.userCallback.call(a.dom.container, a.state, a),
                    "function" == typeof a.userDeferred.resolve &&
                        a.userDeferred.resolve(a.state),
                    (a.userCallback = null),
                    (a.userDeferred = null),
                    (a.lastClicked = null),
                    (a.isToggling = !1),
                    (a.isBusy = !1),
                    a.queue.length &&
                        (a.callActions("beforeReadQueueCleanUp", arguments),
                        (s = a.queue.shift()),
                        (a.userDeferred = s.deferred),
                        (a.isToggling = s.isToggling),
                        (a.lastClicked = s.triggerElement),
                        s.instruction.command instanceof e.CommandMultimix
                            ? a.multimix.apply(a, s.args)
                            : a.dataset.apply(a, s.args)),
                    a.callActions("afterCleanUp", arguments);
            },
            parseMultimixArgs: function(t) {
                var a = this,
                    i = new e.UserInstruction(),
                    o = null,
                    r = -1;
                for (
                    i.animate = a.config.animation.enable,
                        i.command = new e.CommandMultimix(),
                        r = 0;
                    r < t.length;
                    r++
                )
                    (o = t[r]),
                        null !== o &&
                            ("object" == typeof o
                                ? n.extend(i.command, o)
                                : "boolean" == typeof o
                                ? (i.animate = o)
                                : "function" == typeof o && (i.callback = o));
                return (
                    !i.command.insert ||
                        i.command.insert instanceof e.CommandInsert ||
                        (i.command.insert = a.parseInsertArgs([
                            i.command.insert
                        ]).command),
                    !i.command.remove ||
                        i.command.remove instanceof e.CommandRemove ||
                        (i.command.remove = a.parseRemoveArgs([
                            i.command.remove
                        ]).command),
                    !i.command.filter ||
                        i.command.filter instanceof e.CommandFilter ||
                        (i.command.filter = a.parseFilterArgs([
                            i.command.filter
                        ]).command),
                    !i.command.sort ||
                        i.command.sort instanceof e.CommandSort ||
                        (i.command.sort = a.parseSortArgs([
                            i.command.sort
                        ]).command),
                    !i.command.changeLayout ||
                        i.command.changeLayout instanceof
                            e.CommandChangeLayout ||
                        (i.command.changeLayout = a.parseChangeLayoutArgs([
                            i.command.changeLayout
                        ]).command),
                    (i = a.callFilters(
                        "instructionParseMultimixArgs",
                        i,
                        arguments
                    )),
                    n.freeze(i),
                    i
                );
            },
            parseFilterArgs: function(t) {
                var a = this,
                    i = new e.UserInstruction(),
                    o = null,
                    r = -1;
                for (
                    i.animate = a.config.animation.enable,
                        i.command = new e.CommandFilter(),
                        r = 0;
                    r < t.length;
                    r++
                )
                    (o = t[r]),
                        "string" == typeof o
                            ? (i.command.selector = o)
                            : null === o
                            ? (i.command.collection = [])
                            : "object" == typeof o &&
                              n.isElement(o, a.dom.document)
                            ? (i.command.collection = [o])
                            : "object" == typeof o &&
                              "undefined" != typeof o.length
                            ? (i.command.collection = n.arrayFromList(o))
                            : "object" == typeof o
                            ? n.extend(i.command, o)
                            : "boolean" == typeof o
                            ? (i.animate = o)
                            : "function" == typeof o && (i.callback = o);
                if (i.command.selector && i.command.collection)
                    throw new Error(e.messages.errorFilterInvalidArguments());
                return (
                    (i = a.callFilters(
                        "instructionParseFilterArgs",
                        i,
                        arguments
                    )),
                    n.freeze(i),
                    i
                );
            },
            parseSortArgs: function(t) {
                var a = this,
                    i = new e.UserInstruction(),
                    o = null,
                    r = "",
                    s = -1;
                for (
                    i.animate = a.config.animation.enable,
                        i.command = new e.CommandSort(),
                        s = 0;
                    s < t.length;
                    s++
                )
                    if (((o = t[s]), null !== o))
                        switch (typeof o) {
                            case "string":
                                r = o;
                                break;
                            case "object":
                                o.length &&
                                    (i.command.collection = n.arrayFromList(o));
                                break;
                            case "boolean":
                                i.animate = o;
                                break;
                            case "function":
                                i.callback = o;
                        }
                return (
                    r && (i.command = a.parseSortString(r, i.command)),
                    (i = a.callFilters(
                        "instructionParseSortArgs",
                        i,
                        arguments
                    )),
                    n.freeze(i),
                    i
                );
            },
            parseInsertArgs: function(t) {
                var a = this,
                    i = new e.UserInstruction(),
                    o = null,
                    r = -1;
                for (
                    i.animate = a.config.animation.enable,
                        i.command = new e.CommandInsert(),
                        r = 0;
                    r < t.length;
                    r++
                )
                    (o = t[r]),
                        null !== o &&
                            ("number" == typeof o
                                ? (i.command.index = o)
                                : "string" == typeof o &&
                                  ["before", "after"].indexOf(o) > -1
                                ? (i.command.position = o)
                                : "string" == typeof o
                                ? (i.command.collection = n.arrayFromList(
                                      n.createElement(o).childNodes
                                  ))
                                : "object" == typeof o &&
                                  n.isElement(o, a.dom.document)
                                ? i.command.collection.length
                                    ? (i.command.sibling = o)
                                    : (i.command.collection = [o])
                                : "object" == typeof o && o.length
                                ? i.command.collection.length
                                    ? (i.command.sibling = o[0])
                                    : (i.command.collection = o)
                                : "object" == typeof o &&
                                  o.childNodes &&
                                  o.childNodes.length
                                ? i.command.collection.length
                                    ? (i.command.sibling = o.childNodes[0])
                                    : (i.command.collection = n.arrayFromList(
                                          o.childNodes
                                      ))
                                : "object" == typeof o
                                ? n.extend(i.command, o)
                                : "boolean" == typeof o
                                ? (i.animate = o)
                                : "function" == typeof o && (i.callback = o));
                if (i.command.index && i.command.sibling)
                    throw new Error(e.messages.errorInsertInvalidArguments());
                return (
                    !i.command.collection.length &&
                        a.config.debug.showWarnings &&
                        console.warn(e.messages.warningInsertNoElements()),
                    (i = a.callFilters(
                        "instructionParseInsertArgs",
                        i,
                        arguments
                    )),
                    n.freeze(i),
                    i
                );
            },
            parseRemoveArgs: function(t) {
                var a = this,
                    i = new e.UserInstruction(),
                    o = null,
                    r = null,
                    s = -1;
                for (
                    i.animate = a.config.animation.enable,
                        i.command = new e.CommandRemove(),
                        s = 0;
                    s < t.length;
                    s++
                )
                    if (((r = t[s]), null !== r))
                        switch (typeof r) {
                            case "number":
                                a.targets[r] &&
                                    (i.command.targets[0] = a.targets[r]);
                                break;
                            case "string":
                                i.command.collection = n.arrayFromList(
                                    a.dom.parent.querySelectorAll(r)
                                );
                                break;
                            case "object":
                                r && r.length
                                    ? (i.command.collection = r)
                                    : n.isElement(r, a.dom.document)
                                    ? (i.command.collection = [r])
                                    : n.extend(i.command, r);
                                break;
                            case "boolean":
                                i.animate = r;
                                break;
                            case "function":
                                i.callback = r;
                        }
                if (i.command.collection.length)
                    for (s = 0; (o = a.targets[s]); s++)
                        i.command.collection.indexOf(o.dom.el) > -1 &&
                            i.command.targets.push(o);
                return (
                    !i.command.targets.length &&
                        a.config.debug.showWarnings &&
                        console.warn(e.messages.warningRemoveNoElements()),
                    n.freeze(i),
                    i
                );
            },
            parseDatasetArgs: function(t) {
                var a = this,
                    i = new e.UserInstruction(),
                    o = null,
                    r = -1;
                for (
                    i.animate = a.config.animation.enable,
                        i.command = new e.CommandDataset(),
                        r = 0;
                    r < t.length;
                    r++
                )
                    if (((o = t[r]), null !== o))
                        switch (typeof o) {
                            case "object":
                                Array.isArray(o) || "number" == typeof o.length
                                    ? (i.command.dataset = o)
                                    : n.extend(i.command, o);
                                break;
                            case "boolean":
                                i.animate = o;
                                break;
                            case "function":
                                i.callback = o;
                        }
                return n.freeze(i), i;
            },
            parseChangeLayoutArgs: function(t) {
                var a = this,
                    i = new e.UserInstruction(),
                    o = null,
                    r = -1;
                for (
                    i.animate = a.config.animation.enable,
                        i.command = new e.CommandChangeLayout(),
                        r = 0;
                    r < t.length;
                    r++
                )
                    if (((o = t[r]), null !== o))
                        switch (typeof o) {
                            case "string":
                                i.command.containerClassName = o;
                                break;
                            case "object":
                                n.extend(i.command, o);
                                break;
                            case "boolean":
                                i.animate = o;
                                break;
                            case "function":
                                i.callback = o;
                        }
                return n.freeze(i), i;
            },
            queueMix: function(t) {
                var a = this,
                    i = null,
                    o = "";
                return (
                    a.callActions("beforeQueueMix", arguments),
                    (i = n.defer(e.libraries)),
                    a.config.animation.queue &&
                    a.queue.length < a.config.animation.queueLimit
                        ? ((t.deferred = i),
                          a.queue.push(t),
                          a.config.controls.enable &&
                              (a.isToggling
                                  ? (a.buildToggleArray(t.instruction.command),
                                    (o = a.getToggleSelector()),
                                    a.updateControls({
                                        filter: { selector: o }
                                    }))
                                  : a.updateControls(t.instruction.command)))
                        : (a.config.debug.showWarnings &&
                              console.warn(
                                  e.messages.warningMultimixInstanceQueueFull()
                              ),
                          i.resolve(a.state),
                          e.events.fire(
                              "mixBusy",
                              a.dom.container,
                              { state: a.state, instance: a },
                              a.dom.document
                          ),
                          "function" == typeof a.config.callbacks.onMixBusy &&
                              a.config.callbacks.onMixBusy.call(
                                  a.dom.container,
                                  a.state,
                                  a
                              )),
                    a.callFilters("promiseQueueMix", i.promise, arguments)
                );
            },
            getDataOperation: function(t) {
                var a = this,
                    i = new e.Operation(),
                    o = [];
                if (
                    ((i = a.callFilters(
                        "operationUnmappedGetDataOperation",
                        i,
                        arguments
                    )),
                    a.dom.targets.length &&
                        !(o = a.state.activeDataset || []).length)
                )
                    throw new Error(e.messages.errorDatasetNotSet());
                return (
                    (i.id = n.randomHex()),
                    (i.startState = a.state),
                    (i.startDataset = o),
                    (i.newDataset = t.slice()),
                    a.diffDatasets(i),
                    (i.startOrder = a.targets),
                    (i.newOrder = i.show),
                    a.config.animation.enable &&
                        (a.getStartMixData(i),
                        a.setInter(i),
                        (i.docState = n.getDocumentState(a.dom.document)),
                        a.getInterMixData(i),
                        a.setFinal(i),
                        a.getFinalMixData(i),
                        a.parseEffects(),
                        (i.hasEffect = a.hasEffect()),
                        a.getTweenData(i)),
                    (a.targets = i.show.slice()),
                    (i.newState = a.buildState(i)),
                    Array.prototype.push.apply(a.targets, i.toRemove),
                    (i = a.callFilters(
                        "operationMappedGetDataOperation",
                        i,
                        arguments
                    ))
                );
            },
            diffDatasets: function(t) {
                var a = this,
                    i = [],
                    o = [],
                    r = [],
                    s = null,
                    l = null,
                    c = null,
                    u = null,
                    f = null,
                    h = {},
                    d = "",
                    m = -1;
                for (
                    a.callActions("beforeDiffDatasets", arguments), m = 0;
                    (s = t.newDataset[m]);
                    m++
                ) {
                    if (
                        "undefined" == typeof (d = s[a.config.data.uidKey]) ||
                        d.toString().length < 1
                    )
                        throw new TypeError(
                            e.messages.errorDatasetInvalidUidKey({
                                uidKey: a.config.data.uidKey
                            })
                        );
                    if (h[d])
                        throw new Error(
                            e.messages.errorDatasetDuplicateUid({ uid: d })
                        );
                    (h[d] = !0),
                        (l = a.cache[d]) instanceof e.Target
                            ? (a.config.data.dirtyCheck &&
                                  !n.deepEquals(s, l.data) &&
                                  ((c = l.render(s)),
                                  (l.data = s),
                                  c !== l.dom.el &&
                                      (l.isInDom &&
                                          (l.unbindEvents(),
                                          a.dom.parent.replaceChild(
                                              c,
                                              l.dom.el
                                          )),
                                      l.isShown || (c.style.display = "none"),
                                      (l.dom.el = c),
                                      l.isInDom && l.bindEvents())),
                              (c = l.dom.el))
                            : ((l = new e.Target()),
                              l.init(null, a, s),
                              l.hide()),
                        l.isInDom
                            ? ((f = l.dom.el.nextElementSibling),
                              o.push(d),
                              u &&
                                  (u.lastElementChild &&
                                      u.appendChild(
                                          a.dom.document.createTextNode(" ")
                                      ),
                                  a.insertDatasetFrag(u, l.dom.el, r),
                                  (u = null)))
                            : (u ||
                                  (u = a.dom.document.createDocumentFragment()),
                              u.lastElementChild &&
                                  u.appendChild(
                                      a.dom.document.createTextNode(" ")
                                  ),
                              u.appendChild(l.dom.el),
                              (l.isInDom = !0),
                              l.unbindEvents(),
                              l.bindEvents(),
                              l.hide(),
                              t.toShow.push(l),
                              r.push(l)),
                        t.show.push(l);
                }
                for (
                    u &&
                        ((f = f || a.config.layout.siblingAfter),
                        f && u.appendChild(a.dom.document.createTextNode(" ")),
                        a.insertDatasetFrag(u, f, r)),
                        m = 0;
                    (s = t.startDataset[m]);
                    m++
                )
                    (d = s[a.config.data.uidKey]),
                        (l = a.cache[d]),
                        t.show.indexOf(l) < 0
                            ? (t.hide.push(l),
                              t.toHide.push(l),
                              t.toRemove.push(l))
                            : i.push(d);
                n.isEqualArray(i, o) || (t.willSort = !0),
                    a.callActions("afterDiffDatasets", arguments);
            },
            insertDatasetFrag: function(t, e, a) {
                var i = this,
                    o = e
                        ? n.arrayFromList(i.dom.parent.children).indexOf(e)
                        : i.targets.length;
                for (i.dom.parent.insertBefore(t, e); a.length; )
                    i.targets.splice(o, 0, a.shift()), o++;
            },
            willSort: function(t, e) {
                var n = this,
                    a = !1;
                return (
                    (a =
                        !!(
                            n.config.behavior.liveSort ||
                            "random" === t.order ||
                            t.attribute !== e.attribute ||
                            t.order !== e.order ||
                            t.collection !== e.collection ||
                            (null === t.next && e.next) ||
                            (t.next && null === e.next)
                        ) ||
                        (!(!t.next || !e.next) && n.willSort(t.next, e.next))),
                    n.callFilters("resultWillSort", a, arguments)
                );
            },
            show: function() {
                var t = this;
                return t.filter("all");
            },
            hide: function() {
                var t = this;
                return t.filter("none");
            },
            isMixing: function() {
                var t = this;
                return t.isBusy;
            },
            filter: function() {
                var t = this,
                    e = t.parseFilterArgs(arguments);
                return t.multimix({ filter: e.command }, e.animate, e.callback);
            },
            toggleOn: function() {
                var t = this,
                    e = t.parseFilterArgs(arguments),
                    n = e.command.selector,
                    a = "";
                return (
                    (t.isToggling = !0),
                    t.toggleArray.indexOf(n) < 0 && t.toggleArray.push(n),
                    (a = t.getToggleSelector()),
                    t.multimix({ filter: a }, e.animate, e.callback)
                );
            },
            toggleOff: function() {
                var t = this,
                    e = t.parseFilterArgs(arguments),
                    n = e.command.selector,
                    a = t.toggleArray.indexOf(n),
                    i = "";
                return (
                    (t.isToggling = !0),
                    a > -1 && t.toggleArray.splice(a, 1),
                    (i = t.getToggleSelector()),
                    t.multimix({ filter: i }, e.animate, e.callback)
                );
            },
            sort: function() {
                var t = this,
                    e = t.parseSortArgs(arguments);
                return t.multimix({ sort: e.command }, e.animate, e.callback);
            },
            changeLayout: function() {
                var t = this,
                    e = t.parseChangeLayoutArgs(arguments);
                return t.multimix(
                    { changeLayout: e.command },
                    e.animate,
                    e.callback
                );
            },
            dataset: function() {
                var t = this,
                    n = t.parseDatasetArgs(arguments),
                    a = null,
                    i = null,
                    o = !1;
                return (
                    t.callActions("beforeDataset", arguments),
                    t.isBusy
                        ? ((i = new e.QueueItem()),
                          (i.args = arguments),
                          (i.instruction = n),
                          t.queueMix(i))
                        : (n.callback && (t.userCallback = n.callback),
                          (o =
                              n.animate ^ t.config.animation.enable
                                  ? n.animate
                                  : t.config.animation.enable),
                          (a = t.getDataOperation(n.command.dataset)),
                          t.goMix(o, a))
                );
            },
            multimix: function() {
                var t = this,
                    n = null,
                    a = !1,
                    i = null,
                    o = t.parseMultimixArgs(arguments);
                return (
                    t.callActions("beforeMultimix", arguments),
                    t.isBusy
                        ? ((i = new e.QueueItem()),
                          (i.args = arguments),
                          (i.instruction = o),
                          (i.triggerElement = t.lastClicked),
                          (i.isToggling = t.isToggling),
                          t.queueMix(i))
                        : ((n = t.getOperation(o.command)),
                          t.config.controls.enable &&
                              (o.command.filter &&
                                  !t.isToggling &&
                                  ((t.toggleArray.length = 0),
                                  t.buildToggleArray(n.command)),
                              t.queue.length < 1 &&
                                  t.updateControls(n.command)),
                          o.callback && (t.userCallback = o.callback),
                          (a =
                              o.animate ^ t.config.animation.enable
                                  ? o.animate
                                  : t.config.animation.enable),
                          t.callFilters("operationMultimix", n, arguments),
                          t.goMix(a, n))
                );
            },
            getOperation: function(t) {
                var a = this,
                    i = t.sort,
                    o = t.filter,
                    r = t.changeLayout,
                    s = t.remove,
                    l = t.insert,
                    c = new e.Operation();
                return (
                    (c = a.callFilters(
                        "operationUnmappedGetOperation",
                        c,
                        arguments
                    )),
                    (c.id = n.randomHex()),
                    (c.command = t),
                    (c.startState = a.state),
                    (c.triggerElement = a.lastClicked),
                    a.isBusy
                        ? (a.config.debug.showWarnings &&
                              console.warn(
                                  e.messages.warningGetOperationInstanceBusy()
                              ),
                          null)
                        : (l && a.insertTargets(l, c),
                          s && (c.toRemove = s.targets),
                          (c.startSort = c.newSort = c.startState.activeSort),
                          (c.startOrder = c.newOrder = a.targets),
                          i &&
                              ((c.startSort = c.startState.activeSort),
                              (c.newSort = i),
                              (c.willSort = a.willSort(
                                  i,
                                  c.startState.activeSort
                              )),
                              c.willSort && a.sortOperation(c)),
                          (c.startFilter = c.startState.activeFilter),
                          o
                              ? (c.newFilter = o)
                              : (c.newFilter = n.extend(
                                    new e.CommandFilter(),
                                    c.startFilter
                                )),
                          "all" === c.newFilter.selector
                              ? (c.newFilter.selector =
                                    a.config.selectors.target)
                              : "none" === c.newFilter.selector &&
                                (c.newFilter.selector = ""),
                          a.filterOperation(c),
                          (c.startContainerClassName =
                              c.startState.activeContainerClassName),
                          r
                              ? ((c.newContainerClassName =
                                    r.containerClassName),
                                c.newContainerClassName !==
                                    c.startContainerClassName &&
                                    (c.willChangeLayout = !0))
                              : (c.newContainerClassName =
                                    c.startContainerClassName),
                          a.config.animation.enable &&
                              (a.getStartMixData(c),
                              a.setInter(c),
                              (c.docState = n.getDocumentState(a.dom.document)),
                              a.getInterMixData(c),
                              a.setFinal(c),
                              a.getFinalMixData(c),
                              a.parseEffects(),
                              (c.hasEffect = a.hasEffect()),
                              a.getTweenData(c)),
                          c.willSort && (a.targets = c.newOrder),
                          (c.newState = a.buildState(c)),
                          a.callFilters(
                              "operationMappedGetOperation",
                              c,
                              arguments
                          ))
                );
            },
            tween: function(t, e) {
                var n = null,
                    a = null,
                    i = -1,
                    o = -1;
                for (
                    e = Math.min(e, 1), e = Math.max(e, 0), o = 0;
                    (n = t.show[o]);
                    o++
                )
                    (a = t.showPosData[o]), n.applyTween(a, e);
                for (o = 0; (n = t.hide[o]); o++)
                    n.isShown && n.hide(),
                        (i = t.toHide.indexOf(n)) > -1 &&
                            ((a = t.toHidePosData[i]),
                            n.isShown || n.show(),
                            n.applyTween(a, e));
            },
            insert: function() {
                var t = this,
                    e = t.parseInsertArgs(arguments);
                return t.multimix({ insert: e.command }, e.animate, e.callback);
            },
            insertBefore: function() {
                var t = this,
                    e = t.parseInsertArgs(arguments);
                return t.insert(
                    e.command.collection,
                    "before",
                    e.command.sibling,
                    e.animate,
                    e.callback
                );
            },
            insertAfter: function() {
                var t = this,
                    e = t.parseInsertArgs(arguments);
                return t.insert(
                    e.command.collection,
                    "after",
                    e.command.sibling,
                    e.animate,
                    e.callback
                );
            },
            prepend: function() {
                var t = this,
                    e = t.parseInsertArgs(arguments);
                return t.insert(0, e.command.collection, e.animate, e.callback);
            },
            append: function() {
                var t = this,
                    e = t.parseInsertArgs(arguments);
                return t.insert(
                    t.state.totalTargets,
                    e.command.collection,
                    e.animate,
                    e.callback
                );
            },
            remove: function() {
                var t = this,
                    e = t.parseRemoveArgs(arguments);
                return t.multimix({ remove: e.command }, e.animate, e.callback);
            },
            getConfig: function(t) {
                var e = this,
                    a = null;
                return (
                    (a = t ? n.getProperty(e.config, t) : e.config),
                    e.callFilters("valueGetConfig", a, arguments)
                );
            },
            configure: function(t) {
                var e = this;
                e.callActions("beforeConfigure", arguments),
                    n.extend(e.config, t, !0, !0),
                    e.callActions("afterConfigure", arguments);
            },
            getState: function() {
                var t = this,
                    a = null;
                return (
                    (a = new e.State()),
                    n.extend(a, t.state),
                    n.freeze(a),
                    t.callFilters("stateGetState", a, arguments)
                );
            },
            forceRefresh: function() {
                var t = this;
                t.indexTargets();
            },
            forceRender: function() {
                var t = this,
                    e = null,
                    n = null,
                    a = "";
                for (a in t.cache)
                    (e = t.cache[a]),
                        (n = e.render(e.data)),
                        n !== e.dom.el &&
                            (e.isInDom &&
                                (e.unbindEvents(),
                                t.dom.parent.replaceChild(n, e.dom.el)),
                            e.isShown || (n.style.display = "none"),
                            (e.dom.el = n),
                            e.isInDom && e.bindEvents());
                t.state = t.buildState(t.lastOperation);
            },
            destroy: function(t) {
                var n = this,
                    a = null,
                    i = null,
                    o = 0;
                for (
                    n.callActions("beforeDestroy", arguments), o = 0;
                    (a = n.controls[o]);
                    o++
                )
                    a.removeBinding(n);
                for (o = 0; (i = n.targets[o]); o++)
                    t && i.show(), i.unbindEvents();
                n.dom.container.id.match(/^MixItUp/) &&
                    n.dom.container.removeAttribute("id"),
                    delete e.instances[n.id],
                    n.callActions("afterDestroy", arguments);
            }
        }),
        (e.IMoveData = function() {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.posIn = null),
                (this.posOut = null),
                (this.operation = null),
                (this.callback = null),
                (this.statusChange = ""),
                (this.duration = -1),
                (this.staggerIndex = -1),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.IMoveData),
        (e.IMoveData.prototype = Object.create(e.Base.prototype)),
        (e.IMoveData.prototype.constructor = e.IMoveData),
        (e.TargetDom = function() {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.el = null),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.TargetDom),
        (e.TargetDom.prototype = Object.create(e.Base.prototype)),
        (e.TargetDom.prototype.constructor = e.TargetDom),
        (e.Target = function() {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.id = ""),
                (this.sortString = ""),
                (this.mixer = null),
                (this.callback = null),
                (this.isShown = !1),
                (this.isBound = !1),
                (this.isExcluded = !1),
                (this.isInDom = !1),
                (this.handler = null),
                (this.operation = null),
                (this.data = null),
                (this.dom = new e.TargetDom()),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.Target),
        (e.Target.prototype = Object.create(e.Base.prototype)),
        n.extend(e.Target.prototype, {
            constructor: e.Target,
            init: function(t, n, a) {
                var i = this,
                    o = "";
                if (
                    (i.callActions("beforeInit", arguments),
                    (i.mixer = n),
                    t || (t = i.render(a)),
                    i.cacheDom(t),
                    i.bindEvents(),
                    "none" !== i.dom.el.style.display && (i.isShown = !0),
                    a && n.config.data.uidKey)
                ) {
                    if (
                        "undefined" == typeof (o = a[n.config.data.uidKey]) ||
                        o.toString().length < 1
                    )
                        throw new TypeError(
                            e.messages.errorDatasetInvalidUidKey({
                                uidKey: n.config.data.uidKey
                            })
                        );
                    (i.id = o), (i.data = a), (n.cache[o] = i);
                }
                i.callActions("afterInit", arguments);
            },
            render: function(t) {
                var a = this,
                    i = null,
                    o = null,
                    r = null,
                    s = "";
                if (
                    (a.callActions("beforeRender", arguments),
                    (i = a.callFilters(
                        "renderRender",
                        a.mixer.config.render.target,
                        arguments
                    )),
                    "function" != typeof i)
                )
                    throw new TypeError(
                        e.messages.errorDatasetRendererNotSet()
                    );
                return (
                    (s = i(t)),
                    s && "object" == typeof s && n.isElement(s)
                        ? (o = s)
                        : "string" == typeof s &&
                          ((r = document.createElement("div")),
                          (r.innerHTML = s),
                          (o = r.firstElementChild)),
                    a.callFilters("elRender", o, arguments)
                );
            },
            cacheDom: function(t) {
                var e = this;
                e.callActions("beforeCacheDom", arguments),
                    (e.dom.el = t),
                    e.callActions("afterCacheDom", arguments);
            },
            getSortString: function(t) {
                var e = this,
                    n = e.dom.el.getAttribute("data-" + t) || "";
                e.callActions("beforeGetSortString", arguments),
                    (n = isNaN(1 * n) ? n.toLowerCase() : 1 * n),
                    (e.sortString = n),
                    e.callActions("afterGetSortString", arguments);
            },
            show: function() {
                var t = this;
                t.callActions("beforeShow", arguments),
                    t.isShown ||
                        ((t.dom.el.style.display = ""), (t.isShown = !0)),
                    t.callActions("afterShow", arguments);
            },
            hide: function() {
                var t = this;
                t.callActions("beforeHide", arguments),
                    t.isShown &&
                        ((t.dom.el.style.display = "none"), (t.isShown = !1)),
                    t.callActions("afterHide", arguments);
            },
            move: function(t) {
                var e = this;
                e.callActions("beforeMove", arguments),
                    e.isExcluded || e.mixer.targetsMoved++,
                    e.applyStylesIn(t),
                    requestAnimationFrame(function() {
                        e.applyStylesOut(t);
                    }),
                    e.callActions("afterMove", arguments);
            },
            applyTween: function(t, n) {
                var a = this,
                    i = "",
                    o = null,
                    r = t.posIn,
                    s = [],
                    l = new e.StyleData(),
                    c = -1;
                for (
                    a.callActions("beforeApplyTween", arguments),
                        l.x = r.x,
                        l.y = r.y,
                        0 === n ? a.hide() : a.isShown || a.show(),
                        c = 0;
                    (i = e.features.TWEENABLE[c]);
                    c++
                )
                    if (((o = t.tweenData[i]), "x" === i)) {
                        if (!o) continue;
                        l.x = r.x + o * n;
                    } else if ("y" === i) {
                        if (!o) continue;
                        l.y = r.y + o * n;
                    } else if (o instanceof e.TransformData) {
                        if (!o.value) continue;
                        (l[i].value = r[i].value + o.value * n),
                            (l[i].unit = o.unit),
                            s.push(i + "(" + l[i].value + o.unit + ")");
                    } else {
                        if (!o) continue;
                        (l[i] = r[i] + o * n), (a.dom.el.style[i] = l[i]);
                    }
                (l.x || l.y) &&
                    s.unshift("translate(" + l.x + "px, " + l.y + "px)"),
                    s.length &&
                        (a.dom.el.style[e.features.transformProp] = s.join(
                            " "
                        )),
                    a.callActions("afterApplyTween", arguments);
            },
            applyStylesIn: function(t) {
                var n = this,
                    a = t.posIn,
                    i = 1 !== n.mixer.effectsIn.opacity,
                    o = [];
                n.callActions("beforeApplyStylesIn", arguments),
                    o.push("translate(" + a.x + "px, " + a.y + "px)"),
                    n.mixer.config.animation.animateResizeTargets &&
                        ("show" !== t.statusChange &&
                            ((n.dom.el.style.width = a.width + "px"),
                            (n.dom.el.style.height = a.height + "px")),
                        (n.dom.el.style.marginRight = a.marginRight + "px"),
                        (n.dom.el.style.marginBottom = a.marginBottom + "px")),
                    i && (n.dom.el.style.opacity = a.opacity),
                    "show" === t.statusChange &&
                        (o = o.concat(n.mixer.transformIn)),
                    (n.dom.el.style[e.features.transformProp] = o.join(" ")),
                    n.callActions("afterApplyStylesIn", arguments);
            },
            applyStylesOut: function(t) {
                var n = this,
                    a = [],
                    i = [],
                    o = n.mixer.config.animation.animateResizeTargets,
                    r = "undefined" != typeof n.mixer.effectsIn.opacity;
                if (
                    (n.callActions("beforeApplyStylesOut", arguments),
                    a.push(
                        n.writeTransitionRule(
                            e.features.transformRule,
                            t.staggerIndex
                        )
                    ),
                    "none" !== t.statusChange &&
                        a.push(
                            n.writeTransitionRule(
                                "opacity",
                                t.staggerIndex,
                                t.duration
                            )
                        ),
                    o &&
                        (a.push(
                            n.writeTransitionRule(
                                "width",
                                t.staggerIndex,
                                t.duration
                            )
                        ),
                        a.push(
                            n.writeTransitionRule(
                                "height",
                                t.staggerIndex,
                                t.duration
                            )
                        ),
                        a.push(
                            n.writeTransitionRule(
                                "margin",
                                t.staggerIndex,
                                t.duration
                            )
                        )),
                    !t.callback)
                )
                    return (
                        n.mixer.targetsImmovable++,
                        void (
                            n.mixer.targetsMoved === n.mixer.targetsImmovable &&
                            n.mixer.cleanUp(t.operation)
                        )
                    );
                switch (
                    ((n.operation = t.operation),
                    (n.callback = t.callback),
                    !n.isExcluded && n.mixer.targetsBound++,
                    (n.isBound = !0),
                    n.applyTransition(a),
                    o &&
                        t.posOut.width > 0 &&
                        t.posOut.height > 0 &&
                        ((n.dom.el.style.width = t.posOut.width + "px"),
                        (n.dom.el.style.height = t.posOut.height + "px"),
                        (n.dom.el.style.marginRight =
                            t.posOut.marginRight + "px"),
                        (n.dom.el.style.marginBottom =
                            t.posOut.marginBottom + "px")),
                    n.mixer.config.animation.nudge ||
                        "hide" !== t.statusChange ||
                        i.push(
                            "translate(" +
                                t.posOut.x +
                                "px, " +
                                t.posOut.y +
                                "px)"
                        ),
                    t.statusChange)
                ) {
                    case "hide":
                        r &&
                            (n.dom.el.style.opacity =
                                n.mixer.effectsOut.opacity),
                            (i = i.concat(n.mixer.transformOut));
                        break;
                    case "show":
                        r && (n.dom.el.style.opacity = 1);
                }
                (n.mixer.config.animation.nudge ||
                    (!n.mixer.config.animation.nudge &&
                        "hide" !== t.statusChange)) &&
                    i.push(
                        "translate(" + t.posOut.x + "px, " + t.posOut.y + "px)"
                    ),
                    (n.dom.el.style[e.features.transformProp] = i.join(" ")),
                    n.callActions("afterApplyStylesOut", arguments);
            },
            writeTransitionRule: function(t, e, n) {
                var a = this,
                    i = a.getDelay(e),
                    o = "";
                return (
                    (o =
                        t +
                        " " +
                        (n > 0 ? n : a.mixer.config.animation.duration) +
                        "ms " +
                        i +
                        "ms " +
                        ("opacity" === t
                            ? "linear"
                            : a.mixer.config.animation.easing)),
                    a.callFilters("ruleWriteTransitionRule", o, arguments)
                );
            },
            getDelay: function(t) {
                var e = this,
                    n = -1;
                return (
                    "function" ==
                        typeof e.mixer.config.animation.staggerSequence &&
                        (t = e.mixer.config.animation.staggerSequence.call(
                            e,
                            t,
                            e.state
                        )),
                    (n = e.mixer.staggerDuration
                        ? t * e.mixer.staggerDuration
                        : 0),
                    e.callFilters("delayGetDelay", n, arguments)
                );
            },
            applyTransition: function(t) {
                var n = this,
                    a = t.join(", ");
                n.callActions("beforeApplyTransition", arguments),
                    (n.dom.el.style[e.features.transitionProp] = a),
                    n.callActions("afterApplyTransition", arguments);
            },
            handleTransitionEnd: function(t) {
                var e = this,
                    n = t.propertyName,
                    a = e.mixer.config.animation.animateResizeTargets;
                e.callActions("beforeHandleTransitionEnd", arguments),
                    e.isBound &&
                        t.target.matches(e.mixer.config.selectors.target) &&
                        (n.indexOf("transform") > -1 ||
                            n.indexOf("opacity") > -1 ||
                            (a && n.indexOf("height") > -1) ||
                            (a && n.indexOf("width") > -1) ||
                            (a && n.indexOf("margin") > -1)) &&
                        (e.callback.call(e, e.operation),
                        (e.isBound = !1),
                        (e.callback = null),
                        (e.operation = null)),
                    e.callActions("afterHandleTransitionEnd", arguments);
            },
            eventBus: function(t) {
                var e = this;
                switch ((e.callActions("beforeEventBus", arguments), t.type)) {
                    case "webkitTransitionEnd":
                    case "transitionend":
                        e.handleTransitionEnd(t);
                }
                e.callActions("afterEventBus", arguments);
            },
            unbindEvents: function() {
                var t = this;
                t.callActions("beforeUnbindEvents", arguments),
                    n.off(t.dom.el, "webkitTransitionEnd", t.handler),
                    n.off(t.dom.el, "transitionend", t.handler),
                    t.callActions("afterUnbindEvents", arguments);
            },
            bindEvents: function() {
                var t = this,
                    a = "";
                t.callActions("beforeBindEvents", arguments),
                    (a =
                        "webkit" === e.features.transitionPrefix
                            ? "webkitTransitionEnd"
                            : "transitionend"),
                    (t.handler = function(e) {
                        return t.eventBus(e);
                    }),
                    n.on(t.dom.el, a, t.handler),
                    t.callActions("afterBindEvents", arguments);
            },
            getPosData: function(n) {
                var a = this,
                    i = {},
                    o = null,
                    r = new e.StyleData();
                return (
                    a.callActions("beforeGetPosData", arguments),
                    (r.x = a.dom.el.offsetLeft),
                    (r.y = a.dom.el.offsetTop),
                    (a.mixer.config.animation.animateResizeTargets || n) &&
                        ((o = a.dom.el.getBoundingClientRect()),
                        (r.top = o.top),
                        (r.right = o.right),
                        (r.bottom = o.bottom),
                        (r.left = o.left),
                        (r.width = o.width),
                        (r.height = o.height)),
                    a.mixer.config.animation.animateResizeTargets &&
                        ((i = t.getComputedStyle(a.dom.el)),
                        (r.marginBottom = parseFloat(i.marginBottom)),
                        (r.marginRight = parseFloat(i.marginRight))),
                    a.callFilters("posDataGetPosData", r, arguments)
                );
            },
            cleanUp: function() {
                var t = this;
                t.callActions("beforeCleanUp", arguments),
                    (t.dom.el.style[e.features.transformProp] = ""),
                    (t.dom.el.style[e.features.transitionProp] = ""),
                    (t.dom.el.style.opacity = ""),
                    t.mixer.config.animation.animateResizeTargets &&
                        ((t.dom.el.style.width = ""),
                        (t.dom.el.style.height = ""),
                        (t.dom.el.style.marginRight = ""),
                        (t.dom.el.style.marginBottom = "")),
                    t.callActions("afterCleanUp", arguments);
            }
        }),
        (e.Collection = function(t) {
            var e = null,
                a = -1;
            for (this.callActions("beforeConstruct"), a = 0; (e = t[a]); a++)
                this[a] = e;
            (this.length = t.length),
                this.callActions("afterConstruct"),
                n.freeze(this);
        }),
        e.BaseStatic.call(e.Collection),
        (e.Collection.prototype = Object.create(e.Base.prototype)),
        n.extend(e.Collection.prototype, {
            constructor: e.Collection,
            mixitup: function(t) {
                var a = this,
                    i = null,
                    o = Array.prototype.slice.call(arguments),
                    r = [],
                    s = -1;
                for (
                    this.callActions("beforeMixitup"), o.shift(), s = 0;
                    (i = a[s]);
                    s++
                )
                    r.push(i[t].apply(i, o));
                return a.callFilters(
                    "promiseMixitup",
                    n.all(r, e.libraries),
                    arguments
                );
            }
        }),
        (e.Operation = function() {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.id = ""),
                (this.args = []),
                (this.command = null),
                (this.showPosData = []),
                (this.toHidePosData = []),
                (this.startState = null),
                (this.newState = null),
                (this.docState = null),
                (this.willSort = !1),
                (this.willChangeLayout = !1),
                (this.hasEffect = !1),
                (this.hasFailed = !1),
                (this.triggerElement = null),
                (this.show = []),
                (this.hide = []),
                (this.matching = []),
                (this.toShow = []),
                (this.toHide = []),
                (this.toMove = []),
                (this.toRemove = []),
                (this.startOrder = []),
                (this.newOrder = []),
                (this.startSort = null),
                (this.newSort = null),
                (this.startFilter = null),
                (this.newFilter = null),
                (this.startDataset = null),
                (this.newDataset = null),
                (this.viewportDeltaX = 0),
                (this.viewportDeltaY = 0),
                (this.startX = 0),
                (this.startY = 0),
                (this.startHeight = 0),
                (this.startWidth = 0),
                (this.newX = 0),
                (this.newY = 0),
                (this.newHeight = 0),
                (this.newWidth = 0),
                (this.startContainerClassName = ""),
                (this.startDisplay = ""),
                (this.newContainerClassName = ""),
                (this.newDisplay = ""),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.Operation),
        (e.Operation.prototype = Object.create(e.Base.prototype)),
        (e.Operation.prototype.constructor = e.Operation),
        (e.State = function() {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.id = ""),
                (this.activeFilter = null),
                (this.activeSort = null),
                (this.activeContainerClassName = ""),
                (this.container = null),
                (this.targets = []),
                (this.hide = []),
                (this.show = []),
                (this.matching = []),
                (this.totalTargets = -1),
                (this.totalShow = -1),
                (this.totalHide = -1),
                (this.totalMatching = -1),
                (this.hasFailed = !1),
                (this.triggerElement = null),
                (this.activeDataset = null),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.State),
        (e.State.prototype = Object.create(e.Base.prototype)),
        (e.State.prototype.constructor = e.State),
        (e.UserInstruction = function() {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.command = {}),
                (this.animate = !1),
                (this.callback = null),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.UserInstruction),
        (e.UserInstruction.prototype = Object.create(e.Base.prototype)),
        (e.UserInstruction.prototype.constructor = e.UserInstruction),
        (e.Messages = function() {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.ERROR_FACTORY_INVALID_CONTAINER =
                    "[MixItUp] An invalid selector or element reference was passed to the mixitup factory function"),
                (this.ERROR_FACTORY_CONTAINER_NOT_FOUND =
                    "[MixItUp] The provided selector yielded no container element"),
                (this.ERROR_CONFIG_INVALID_ANIMATION_EFFECTS =
                    "[MixItUp] Invalid value for `animation.effects`"),
                (this.ERROR_CONFIG_INVALID_CONTROLS_SCOPE =
                    "[MixItUp] Invalid value for `controls.scope`"),
                (this.ERROR_CONFIG_INVALID_PROPERTY =
                    '[MixitUp] Invalid configuration object property "${erroneous}"${suggestion}'),
                (this.ERROR_CONFIG_INVALID_PROPERTY_SUGGESTION =
                    '. Did you mean "${probableMatch}"?'),
                (this.ERROR_CONFIG_DATA_UID_KEY_NOT_SET =
                    "[MixItUp] To use the dataset API, a UID key must be specified using `data.uidKey`"),
                (this.ERROR_DATASET_INVALID_UID_KEY =
                    '[MixItUp] The specified UID key "${uidKey}" is not present on one or more dataset items'),
                (this.ERROR_DATASET_DUPLICATE_UID =
                    '[MixItUp] The UID "${uid}" was found on two or more dataset items. UIDs must be unique.'),
                (this.ERROR_INSERT_INVALID_ARGUMENTS =
                    "[MixItUp] Please provider either an index or a sibling and position to insert, not both"),
                (this.ERROR_INSERT_PREEXISTING_ELEMENT =
                    "[MixItUp] An element to be inserted already exists in the container"),
                (this.ERROR_FILTER_INVALID_ARGUMENTS =
                    "[MixItUp] Please provide either a selector or collection `.filter()`, not both"),
                (this.ERROR_DATASET_NOT_SET =
                    "[MixItUp] To use the dataset API with pre-rendered targets, a starting dataset must be set using `load.dataset`"),
                (this.ERROR_DATASET_PRERENDERED_MISMATCH =
                    "[MixItUp] `load.dataset` does not match pre-rendered targets"),
                (this.ERROR_DATASET_RENDERER_NOT_SET =
                    "[MixItUp] To insert an element via the dataset API, a target renderer function must be provided to `render.target`"),
                (this.ERROR_SORT_NON_EXISTENT_ELEMENT =
                    "[MixItUp] An element to be sorted does not already exist in the container"),
                (this.WARNING_FACTORY_PREEXISTING_INSTANCE =
                    "[MixItUp] WARNING: This element already has an active MixItUp instance. The provided configuration object will be ignored. If you wish to perform additional methods on this instance, please create a reference."),
                (this.WARNING_INSERT_NO_ELEMENTS =
                    "[MixItUp] WARNING: No valid elements were passed to `.insert()`"),
                (this.WARNING_REMOVE_NO_ELEMENTS =
                    "[MixItUp] WARNING: No valid elements were passed to `.remove()`"),
                (this.WARNING_MULTIMIX_INSTANCE_QUEUE_FULL =
                    "[MixItUp] WARNING: An operation was requested but the MixItUp instance was busy. The operation was rejected because the queue is full or queuing is disabled."),
                (this.WARNING_GET_OPERATION_INSTANCE_BUSY =
                    "[MixItUp] WARNING: Operations can be be created while the MixItUp instance is busy."),
                (this.WARNING_NO_PROMISE_IMPLEMENTATION =
                    "[MixItUp] WARNING: No Promise implementations could be found. If you wish to use promises with MixItUp please install an ES6 Promise polyfill."),
                (this.WARNING_INCONSISTENT_SORTING_ATTRIBUTES =
                    '[MixItUp] WARNING: The requested sorting data attribute "${attribute}" was not present on one or more target elements which may product unexpected sort output'),
                this.callActions("afterConstruct"),
                this.compileTemplates(),
                n.seal(this);
        }),
        e.BaseStatic.call(e.Messages),
        (e.Messages.prototype = Object.create(e.Base.prototype)),
        (e.Messages.prototype.constructor = e.Messages),
        (e.Messages.prototype.compileTemplates = function() {
            var t = "",
                e = "";
            for (t in this)
                "string" == typeof (e = this[t]) &&
                    (this[n.camelCase(t)] = n.template(e));
        }),
        (e.messages = new e.Messages()),
        (e.Facade = function(t) {
            e.Base.call(this),
                this.callActions("beforeConstruct", arguments),
                (this.configure = t.configure.bind(t)),
                (this.show = t.show.bind(t)),
                (this.hide = t.hide.bind(t)),
                (this.filter = t.filter.bind(t)),
                (this.toggleOn = t.toggleOn.bind(t)),
                (this.toggleOff = t.toggleOff.bind(t)),
                (this.sort = t.sort.bind(t)),
                (this.changeLayout = t.changeLayout.bind(t)),
                (this.multimix = t.multimix.bind(t)),
                (this.dataset = t.dataset.bind(t)),
                (this.tween = t.tween.bind(t)),
                (this.insert = t.insert.bind(t)),
                (this.insertBefore = t.insertBefore.bind(t)),
                (this.insertAfter = t.insertAfter.bind(t)),
                (this.prepend = t.prepend.bind(t)),
                (this.append = t.append.bind(t)),
                (this.remove = t.remove.bind(t)),
                (this.destroy = t.destroy.bind(t)),
                (this.forceRefresh = t.forceRefresh.bind(t)),
                (this.forceRender = t.forceRender.bind(t)),
                (this.isMixing = t.isMixing.bind(t)),
                (this.getOperation = t.getOperation.bind(t)),
                (this.getConfig = t.getConfig.bind(t)),
                (this.getState = t.getState.bind(t)),
                this.callActions("afterConstruct", arguments),
                n.freeze(this),
                n.seal(this);
        }),
        e.BaseStatic.call(e.Facade),
        (e.Facade.prototype = Object.create(e.Base.prototype)),
        (e.Facade.prototype.constructor = e.Facade),
        "object" == typeof exports && "object" == typeof module
            ? (module.exports = e)
            : "function" == typeof define && define.amd
            ? define(function() {
                  return e;
              })
            : ("undefined" != typeof t.mixitup &&
                  "function" == typeof t.mixitup) ||
              (t.mixitup = e),
        e.BaseStatic.call(e.constructor),
        (e.NAME = "mixitup"),
        (e.CORE_VERSION = "3.3.1");
})(window);

/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!(function (a, b, c, d) {
  function e(b, c) {
    (this.settings = null),
      (this.options = a.extend({}, e.Defaults, c)),
      (this.$element = a(b)),
      (this._handlers = {}),
      (this._plugins = {}),
      (this._supress = {}),
      (this._current = null),
      (this._speed = null),
      (this._coordinates = []),
      (this._breakpoint = null),
      (this._width = null),
      (this._items = []),
      (this._clones = []),
      (this._mergers = []),
      (this._widths = []),
      (this._invalidated = {}),
      (this._pipe = []),
      (this._drag = {
        time: null,
        target: null,
        pointer: null,
        stage: { start: null, current: null },
        direction: null,
      }),
      (this._states = {
        current: {},
        tags: {
          initializing: ["busy"],
          animating: ["busy"],
          dragging: ["interacting"],
        },
      }),
      a.each(
        ["onResize", "onThrottledResize"],
        a.proxy(function (b, c) {
          this._handlers[c] = a.proxy(this[c], this);
        }, this)
      ),
      a.each(
        e.Plugins,
        a.proxy(function (a, b) {
          this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
        }, this)
      ),
      a.each(
        e.Workers,
        a.proxy(function (b, c) {
          this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) });
        }, this)
      ),
      this.setup(),
      this.initialize();
  }
  (e.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    checkVisibility: !0,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: b,
    fallbackEasing: "swing",
    slideTransition: "",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    refreshClass: "owl-refresh",
    loadedClass: "owl-loaded",
    loadingClass: "owl-loading",
    rtlClass: "owl-rtl",
    responsiveClass: "owl-responsive",
    dragClass: "owl-drag",
    itemClass: "owl-item",
    stageClass: "owl-stage",
    stageOuterClass: "owl-stage-outer",
    grabClass: "owl-grab",
  }),
    (e.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
    (e.Type = { Event: "event", State: "state" }),
    (e.Plugins = {}),
    (e.Workers = [
      {
        filter: ["width", "settings"],
        run: function () {
          this._width = this.$element.width();
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          a.current = this._items && this._items[this.relative(this._current)];
        },
      },
      {
        filter: ["items", "settings"],
        run: function () {
          this.$stage.children(".cloned").remove();
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          var b = this.settings.margin || "",
            c = !this.settings.autoWidth,
            d = this.settings.rtl,
            e = {
              width: "auto",
              "margin-left": d ? b : "",
              "margin-right": d ? "" : b,
            };
          !c && this.$stage.children().css(e), (a.css = e);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          var b =
              (this.width() / this.settings.items).toFixed(3) -
              this.settings.margin,
            c = null,
            d = this._items.length,
            e = !this.settings.autoWidth,
            f = [];
          for (a.items = { merge: !1, width: b }; d--; )
            (c = this._mergers[d]),
              (c =
                (this.settings.mergeFit && Math.min(c, this.settings.items)) ||
                c),
              (a.items.merge = c > 1 || a.items.merge),
              (f[d] = e ? b * c : this._items[d].width());
          this._widths = f;
        },
      },
      {
        filter: ["items", "settings"],
        run: function () {
          var b = [],
            c = this._items,
            d = this.settings,
            e = Math.max(2 * d.items, 4),
            f = 2 * Math.ceil(c.length / 2),
            g = d.loop && c.length ? (d.rewind ? e : Math.max(e, f)) : 0,
            h = "",
            i = "";
          for (g /= 2; g > 0; )
            b.push(this.normalize(b.length / 2, !0)),
              (h += c[b[b.length - 1]][0].outerHTML),
              b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)),
              (i = c[b[b.length - 1]][0].outerHTML + i),
              (g -= 1);
          (this._clones = b),
            a(h).addClass("cloned").appendTo(this.$stage),
            a(i).addClass("cloned").prependTo(this.$stage);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function () {
          for (
            var a = this.settings.rtl ? 1 : -1,
              b = this._clones.length + this._items.length,
              c = -1,
              d = 0,
              e = 0,
              f = [];
            ++c < b;

          )
            (d = f[c - 1] || 0),
              (e = this._widths[this.relative(c)] + this.settings.margin),
              f.push(d + e * a);
          this._coordinates = f;
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function () {
          var a = this.settings.stagePadding,
            b = this._coordinates,
            c = {
              width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
              "padding-left": a || "",
              "padding-right": a || "",
            };
          this.$stage.css(c);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          var b = this._coordinates.length,
            c = !this.settings.autoWidth,
            d = this.$stage.children();
          if (c && a.items.merge)
            for (; b--; )
              (a.css.width = this._widths[this.relative(b)]),
                d.eq(b).css(a.css);
          else c && ((a.css.width = a.items.width), d.css(a.css));
        },
      },
      {
        filter: ["items"],
        run: function () {
          this._coordinates.length < 1 && this.$stage.removeAttr("style");
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          (a.current = a.current ? this.$stage.children().index(a.current) : 0),
            (a.current = Math.max(
              this.minimum(),
              Math.min(this.maximum(), a.current)
            )),
            this.reset(a.current);
        },
      },
      {
        filter: ["position"],
        run: function () {
          this.animate(this.coordinates(this._current));
        },
      },
      {
        filter: ["width", "position", "items", "settings"],
        run: function () {
          var a,
            b,
            c,
            d,
            e = this.settings.rtl ? 1 : -1,
            f = 2 * this.settings.stagePadding,
            g = this.coordinates(this.current()) + f,
            h = g + this.width() * e,
            i = [];
          for (c = 0, d = this._coordinates.length; c < d; c++)
            (a = this._coordinates[c - 1] || 0),
              (b = Math.abs(this._coordinates[c]) + f * e),
              ((this.op(a, "<=", g) && this.op(a, ">", h)) ||
                (this.op(b, "<", g) && this.op(b, ">", h))) &&
                i.push(c);
          this.$stage.children(".active").removeClass("active"),
            this.$stage
              .children(":eq(" + i.join("), :eq(") + ")")
              .addClass("active"),
            this.$stage.children(".center").removeClass("center"),
            this.settings.center &&
              this.$stage.children().eq(this.current()).addClass("center");
        },
      },
    ]),
    (e.prototype.initializeStage = function () {
      (this.$stage = this.$element.find("." + this.settings.stageClass)),
        this.$stage.length ||
          (this.$element.addClass(this.options.loadingClass),
          (this.$stage = a("<" + this.settings.stageElement + ">", {
            class: this.settings.stageClass,
          }).wrap(a("<div/>", { class: this.settings.stageOuterClass }))),
          this.$element.append(this.$stage.parent()));
    }),
    (e.prototype.initializeItems = function () {
      var b = this.$element.find(".owl-item");
      if (b.length)
        return (
          (this._items = b.get().map(function (b) {
            return a(b);
          })),
          (this._mergers = this._items.map(function () {
            return 1;
          })),
          void this.refresh()
        );
      this.replace(this.$element.children().not(this.$stage.parent())),
        this.isVisible() ? this.refresh() : this.invalidate("width"),
        this.$element
          .removeClass(this.options.loadingClass)
          .addClass(this.options.loadedClass);
    }),
    (e.prototype.initialize = function () {
      if (
        (this.enter("initializing"),
        this.trigger("initialize"),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth && !this.is("pre-loading"))
      ) {
        var a, b, c;
        (a = this.$element.find("img")),
          (b = this.settings.nestedItemSelector
            ? "." + this.settings.nestedItemSelector
            : d),
          (c = this.$element.children(b).width()),
          a.length && c <= 0 && this.preloadAutoWidthImages(a);
      }
      this.initializeStage(),
        this.initializeItems(),
        this.registerEventHandlers(),
        this.leave("initializing"),
        this.trigger("initialized");
    }),
    (e.prototype.isVisible = function () {
      return !this.settings.checkVisibility || this.$element.is(":visible");
    }),
    (e.prototype.setup = function () {
      var b = this.viewport(),
        c = this.options.responsive,
        d = -1,
        e = null;
      c
        ? (a.each(c, function (a) {
            a <= b && a > d && (d = Number(a));
          }),
          (e = a.extend({}, this.options, c[d])),
          "function" == typeof e.stagePadding &&
            (e.stagePadding = e.stagePadding()),
          delete e.responsive,
          e.responsiveClass &&
            this.$element.attr(
              "class",
              this.$element
                .attr("class")
                .replace(
                  new RegExp(
                    "(" + this.options.responsiveClass + "-)\\S+\\s",
                    "g"
                  ),
                  "$1" + d
                )
            ))
        : (e = a.extend({}, this.options)),
        this.trigger("change", { property: { name: "settings", value: e } }),
        (this._breakpoint = d),
        (this.settings = e),
        this.invalidate("settings"),
        this.trigger("changed", {
          property: { name: "settings", value: this.settings },
        });
    }),
    (e.prototype.optionsLogic = function () {
      this.settings.autoWidth &&
        ((this.settings.stagePadding = !1), (this.settings.merge = !1));
    }),
    (e.prototype.prepare = function (b) {
      var c = this.trigger("prepare", { content: b });
      return (
        c.data ||
          (c.data = a("<" + this.settings.itemElement + "/>")
            .addClass(this.options.itemClass)
            .append(b)),
        this.trigger("prepared", { content: c.data }),
        c.data
      );
    }),
    (e.prototype.update = function () {
      for (
        var b = 0,
          c = this._pipe.length,
          d = a.proxy(function (a) {
            return this[a];
          }, this._invalidated),
          e = {};
        b < c;

      )
        (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) &&
          this._pipe[b].run(e),
          b++;
      (this._invalidated = {}), !this.is("valid") && this.enter("valid");
    }),
    (e.prototype.width = function (a) {
      switch ((a = a || e.Width.Default)) {
        case e.Width.Inner:
        case e.Width.Outer:
          return this._width;
        default:
          return (
            this._width - 2 * this.settings.stagePadding + this.settings.margin
          );
      }
    }),
    (e.prototype.refresh = function () {
      this.enter("refreshing"),
        this.trigger("refresh"),
        this.setup(),
        this.optionsLogic(),
        this.$element.addClass(this.options.refreshClass),
        this.update(),
        this.$element.removeClass(this.options.refreshClass),
        this.leave("refreshing"),
        this.trigger("refreshed");
    }),
    (e.prototype.onThrottledResize = function () {
      b.clearTimeout(this.resizeTimer),
        (this.resizeTimer = b.setTimeout(
          this._handlers.onResize,
          this.settings.responsiveRefreshRate
        ));
    }),
    (e.prototype.onResize = function () {
      return (
        !!this._items.length &&
        this._width !== this.$element.width() &&
        !!this.isVisible() &&
        (this.enter("resizing"),
        this.trigger("resize").isDefaultPrevented()
          ? (this.leave("resizing"), !1)
          : (this.invalidate("width"),
            this.refresh(),
            this.leave("resizing"),
            void this.trigger("resized")))
      );
    }),
    (e.prototype.registerEventHandlers = function () {
      a.support.transition &&
        this.$stage.on(
          a.support.transition.end + ".owl.core",
          a.proxy(this.onTransitionEnd, this)
        ),
        !1 !== this.settings.responsive &&
          this.on(b, "resize", this._handlers.onThrottledResize),
        this.settings.mouseDrag &&
          (this.$element.addClass(this.options.dragClass),
          this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)),
          this.$stage.on(
            "dragstart.owl.core selectstart.owl.core",
            function () {
              return !1;
            }
          )),
        this.settings.touchDrag &&
          (this.$stage.on(
            "touchstart.owl.core",
            a.proxy(this.onDragStart, this)
          ),
          this.$stage.on(
            "touchcancel.owl.core",
            a.proxy(this.onDragEnd, this)
          ));
    }),
    (e.prototype.onDragStart = function (b) {
      var d = null;
      3 !== b.which &&
        (a.support.transform
          ? ((d = this.$stage
              .css("transform")
              .replace(/.*\(|\)| /g, "")
              .split(",")),
            (d = {
              x: d[16 === d.length ? 12 : 4],
              y: d[16 === d.length ? 13 : 5],
            }))
          : ((d = this.$stage.position()),
            (d = {
              x: this.settings.rtl
                ? d.left +
                  this.$stage.width() -
                  this.width() +
                  this.settings.margin
                : d.left,
              y: d.top,
            })),
        this.is("animating") &&
          (a.support.transform ? this.animate(d.x) : this.$stage.stop(),
          this.invalidate("position")),
        this.$element.toggleClass(
          this.options.grabClass,
          "mousedown" === b.type
        ),
        this.speed(0),
        (this._drag.time = new Date().getTime()),
        (this._drag.target = a(b.target)),
        (this._drag.stage.start = d),
        (this._drag.stage.current = d),
        (this._drag.pointer = this.pointer(b)),
        a(c).on(
          "mouseup.owl.core touchend.owl.core",
          a.proxy(this.onDragEnd, this)
        ),
        a(c).one(
          "mousemove.owl.core touchmove.owl.core",
          a.proxy(function (b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on(
              "mousemove.owl.core touchmove.owl.core",
              a.proxy(this.onDragMove, this)
            ),
              (Math.abs(d.x) < Math.abs(d.y) && this.is("valid")) ||
                (b.preventDefault(),
                this.enter("dragging"),
                this.trigger("drag"));
          }, this)
        ));
    }),
    (e.prototype.onDragMove = function (a) {
      var b = null,
        c = null,
        d = null,
        e = this.difference(this._drag.pointer, this.pointer(a)),
        f = this.difference(this._drag.stage.start, e);
      this.is("dragging") &&
        (a.preventDefault(),
        this.settings.loop
          ? ((b = this.coordinates(this.minimum())),
            (c = this.coordinates(this.maximum() + 1) - b),
            (f.x = ((((f.x - b) % c) + c) % c) + b))
          : ((b = this.settings.rtl
              ? this.coordinates(this.maximum())
              : this.coordinates(this.minimum())),
            (c = this.settings.rtl
              ? this.coordinates(this.minimum())
              : this.coordinates(this.maximum())),
            (d = this.settings.pullDrag ? (-1 * e.x) / 5 : 0),
            (f.x = Math.max(Math.min(f.x, b + d), c + d))),
        (this._drag.stage.current = f),
        this.animate(f.x));
    }),
    (e.prototype.onDragEnd = function (b) {
      var d = this.difference(this._drag.pointer, this.pointer(b)),
        e = this._drag.stage.current,
        f = (d.x > 0) ^ this.settings.rtl ? "left" : "right";
      a(c).off(".owl.core"),
        this.$element.removeClass(this.options.grabClass),
        ((0 !== d.x && this.is("dragging")) || !this.is("valid")) &&
          (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
          this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
          this.invalidate("position"),
          this.update(),
          (this._drag.direction = f),
          (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
            this._drag.target.one("click.owl.core", function () {
              return !1;
            })),
        this.is("dragging") &&
          (this.leave("dragging"), this.trigger("dragged"));
    }),
    (e.prototype.closest = function (b, c) {
      var e = -1,
        f = 30,
        g = this.width(),
        h = this.coordinates();
      return (
        this.settings.freeDrag ||
          a.each(
            h,
            a.proxy(function (a, i) {
              return (
                "left" === c && b > i - f && b < i + f
                  ? (e = a)
                  : "right" === c && b > i - g - f && b < i - g + f
                  ? (e = a + 1)
                  : this.op(b, "<", i) &&
                    this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) &&
                    (e = "left" === c ? a + 1 : a),
                -1 === e
              );
            }, this)
          ),
        this.settings.loop ||
          (this.op(b, ">", h[this.minimum()])
            ? (e = b = this.minimum())
            : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())),
        e
      );
    }),
    (e.prototype.animate = function (b) {
      var c = this.speed() > 0;
      this.is("animating") && this.onTransitionEnd(),
        c && (this.enter("animating"), this.trigger("translate")),
        a.support.transform3d && a.support.transition
          ? this.$stage.css({
              transform: "translate3d(" + b + "px,0px,0px)",
              transition:
                this.speed() / 1e3 +
                "s" +
                (this.settings.slideTransition
                  ? " " + this.settings.slideTransition
                  : ""),
            })
          : c
          ? this.$stage.animate(
              { left: b + "px" },
              this.speed(),
              this.settings.fallbackEasing,
              a.proxy(this.onTransitionEnd, this)
            )
          : this.$stage.css({ left: b + "px" });
    }),
    (e.prototype.is = function (a) {
      return this._states.current[a] && this._states.current[a] > 0;
    }),
    (e.prototype.current = function (a) {
      if (a === d) return this._current;
      if (0 === this._items.length) return d;
      if (((a = this.normalize(a)), this._current !== a)) {
        var b = this.trigger("change", {
          property: { name: "position", value: a },
        });
        b.data !== d && (a = this.normalize(b.data)),
          (this._current = a),
          this.invalidate("position"),
          this.trigger("changed", {
            property: { name: "position", value: this._current },
          });
      }
      return this._current;
    }),
    (e.prototype.invalidate = function (b) {
      return (
        "string" === a.type(b) &&
          ((this._invalidated[b] = !0),
          this.is("valid") && this.leave("valid")),
        a.map(this._invalidated, function (a, b) {
          return b;
        })
      );
    }),
    (e.prototype.reset = function (a) {
      (a = this.normalize(a)) !== d &&
        ((this._speed = 0),
        (this._current = a),
        this.suppress(["translate", "translated"]),
        this.animate(this.coordinates(a)),
        this.release(["translate", "translated"]));
    }),
    (e.prototype.normalize = function (a, b) {
      var c = this._items.length,
        e = b ? 0 : this._clones.length;
      return (
        !this.isNumeric(a) || c < 1
          ? (a = d)
          : (a < 0 || a >= c + e) &&
            (a = ((((a - e / 2) % c) + c) % c) + e / 2),
        a
      );
    }),
    (e.prototype.relative = function (a) {
      return (a -= this._clones.length / 2), this.normalize(a, !0);
    }),
    (e.prototype.maximum = function (a) {
      var b,
        c,
        d,
        e = this.settings,
        f = this._coordinates.length;
      if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
      else if (e.autoWidth || e.merge) {
        if ((b = this._items.length))
          for (
            c = this._items[--b].width(), d = this.$element.width();
            b-- && !((c += this._items[b].width() + this.settings.margin) > d);

          );
        f = b + 1;
      } else
        f = e.center ? this._items.length - 1 : this._items.length - e.items;
      return a && (f -= this._clones.length / 2), Math.max(f, 0);
    }),
    (e.prototype.minimum = function (a) {
      return a ? 0 : this._clones.length / 2;
    }),
    (e.prototype.items = function (a) {
      return a === d
        ? this._items.slice()
        : ((a = this.normalize(a, !0)), this._items[a]);
    }),
    (e.prototype.mergers = function (a) {
      return a === d
        ? this._mergers.slice()
        : ((a = this.normalize(a, !0)), this._mergers[a]);
    }),
    (e.prototype.clones = function (b) {
      var c = this._clones.length / 2,
        e = c + this._items.length,
        f = function (a) {
          return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2;
        };
      return b === d
        ? a.map(this._clones, function (a, b) {
            return f(b);
          })
        : a.map(this._clones, function (a, c) {
            return a === b ? f(c) : null;
          });
    }),
    (e.prototype.speed = function (a) {
      return a !== d && (this._speed = a), this._speed;
    }),
    (e.prototype.coordinates = function (b) {
      var c,
        e = 1,
        f = b - 1;
      return b === d
        ? a.map(
            this._coordinates,
            a.proxy(function (a, b) {
              return this.coordinates(b);
            }, this)
          )
        : (this.settings.center
            ? (this.settings.rtl && ((e = -1), (f = b + 1)),
              (c = this._coordinates[b]),
              (c += ((this.width() - c + (this._coordinates[f] || 0)) / 2) * e))
            : (c = this._coordinates[f] || 0),
          (c = Math.ceil(c)));
    }),
    (e.prototype.duration = function (a, b, c) {
      return 0 === c
        ? 0
        : Math.min(Math.max(Math.abs(b - a), 1), 6) *
            Math.abs(c || this.settings.smartSpeed);
    }),
    (e.prototype.to = function (a, b) {
      var c = this.current(),
        d = null,
        e = a - this.relative(c),
        f = (e > 0) - (e < 0),
        g = this._items.length,
        h = this.minimum(),
        i = this.maximum();
      this.settings.loop
        ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g),
          (a = c + e),
          (d = ((((a - h) % g) + g) % g) + h) !== a &&
            d - e <= i &&
            d - e > 0 &&
            ((c = d - e), (a = d), this.reset(c)))
        : this.settings.rewind
        ? ((i += 1), (a = ((a % i) + i) % i))
        : (a = Math.max(h, Math.min(i, a))),
        this.speed(this.duration(c, a, b)),
        this.current(a),
        this.isVisible() && this.update();
    }),
    (e.prototype.next = function (a) {
      (a = a || !1), this.to(this.relative(this.current()) + 1, a);
    }),
    (e.prototype.prev = function (a) {
      (a = a || !1), this.to(this.relative(this.current()) - 1, a);
    }),
    (e.prototype.onTransitionEnd = function (a) {
      if (
        a !== d &&
        (a.stopPropagation(),
        (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))
      )
        return !1;
      this.leave("animating"), this.trigger("translated");
    }),
    (e.prototype.viewport = function () {
      var d;
      return (
        this.options.responsiveBaseElement !== b
          ? (d = a(this.options.responsiveBaseElement).width())
          : b.innerWidth
          ? (d = b.innerWidth)
          : c.documentElement && c.documentElement.clientWidth
          ? (d = c.documentElement.clientWidth)
          : console.warn("Can not detect viewport width."),
        d
      );
    }),
    (e.prototype.replace = function (b) {
      this.$stage.empty(),
        (this._items = []),
        b && (b = b instanceof jQuery ? b : a(b)),
        this.settings.nestedItemSelector &&
          (b = b.find("." + this.settings.nestedItemSelector)),
        b
          .filter(function () {
            return 1 === this.nodeType;
          })
          .each(
            a.proxy(function (a, b) {
              (b = this.prepare(b)),
                this.$stage.append(b),
                this._items.push(b),
                this._mergers.push(
                  1 *
                    b
                      .find("[data-merge]")
                      .addBack("[data-merge]")
                      .attr("data-merge") || 1
                );
            }, this)
          ),
        this.reset(
          this.isNumeric(this.settings.startPosition)
            ? this.settings.startPosition
            : 0
        ),
        this.invalidate("items");
    }),
    (e.prototype.add = function (b, c) {
      var e = this.relative(this._current);
      (c = c === d ? this._items.length : this.normalize(c, !0)),
        (b = b instanceof jQuery ? b : a(b)),
        this.trigger("add", { content: b, position: c }),
        (b = this.prepare(b)),
        0 === this._items.length || c === this._items.length
          ? (0 === this._items.length && this.$stage.append(b),
            0 !== this._items.length && this._items[c - 1].after(b),
            this._items.push(b),
            this._mergers.push(
              1 *
                b
                  .find("[data-merge]")
                  .addBack("[data-merge]")
                  .attr("data-merge") || 1
            ))
          : (this._items[c].before(b),
            this._items.splice(c, 0, b),
            this._mergers.splice(
              c,
              0,
              1 *
                b
                  .find("[data-merge]")
                  .addBack("[data-merge]")
                  .attr("data-merge") || 1
            )),
        this._items[e] && this.reset(this._items[e].index()),
        this.invalidate("items"),
        this.trigger("added", { content: b, position: c });
    }),
    (e.prototype.remove = function (a) {
      (a = this.normalize(a, !0)) !== d &&
        (this.trigger("remove", { content: this._items[a], position: a }),
        this._items[a].remove(),
        this._items.splice(a, 1),
        this._mergers.splice(a, 1),
        this.invalidate("items"),
        this.trigger("removed", { content: null, position: a }));
    }),
    (e.prototype.preloadAutoWidthImages = function (b) {
      b.each(
        a.proxy(function (b, c) {
          this.enter("pre-loading"),
            (c = a(c)),
            a(new Image())
              .one(
                "load",
                a.proxy(function (a) {
                  c.attr("src", a.target.src),
                    c.css("opacity", 1),
                    this.leave("pre-loading"),
                    !this.is("pre-loading") &&
                      !this.is("initializing") &&
                      this.refresh();
                }, this)
              )
              .attr(
                "src",
                c.attr("src") || c.attr("data-src") || c.attr("data-src-retina")
              );
        }, this)
      );
    }),
    (e.prototype.destroy = function () {
      this.$element.off(".owl.core"),
        this.$stage.off(".owl.core"),
        a(c).off(".owl.core"),
        !1 !== this.settings.responsive &&
          (b.clearTimeout(this.resizeTimer),
          this.off(b, "resize", this._handlers.onThrottledResize));
      for (var d in this._plugins) this._plugins[d].destroy();
      this.$stage.children(".cloned").remove(),
        this.$stage.unwrap(),
        this.$stage.children().contents().unwrap(),
        this.$stage.children().unwrap(),
        this.$stage.remove(),
        this.$element
          .removeClass(this.options.refreshClass)
          .removeClass(this.options.loadingClass)
          .removeClass(this.options.loadedClass)
          .removeClass(this.options.rtlClass)
          .removeClass(this.options.dragClass)
          .removeClass(this.options.grabClass)
          .attr(
            "class",
            this.$element
              .attr("class")
              .replace(
                new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"),
                ""
              )
          )
          .removeData("owl.carousel");
    }),
    (e.prototype.op = function (a, b, c) {
      var d = this.settings.rtl;
      switch (b) {
        case "<":
          return d ? a > c : a < c;
        case ">":
          return d ? a < c : a > c;
        case ">=":
          return d ? a <= c : a >= c;
        case "<=":
          return d ? a >= c : a <= c;
      }
    }),
    (e.prototype.on = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    }),
    (e.prototype.off = function (a, b, c, d) {
      a.removeEventListener
        ? a.removeEventListener(b, c, d)
        : a.detachEvent && a.detachEvent("on" + b, c);
    }),
    (e.prototype.trigger = function (b, c, d, f, g) {
      var h = { item: { count: this._items.length, index: this.current() } },
        i = a.camelCase(
          a
            .grep(["on", b, d], function (a) {
              return a;
            })
            .join("-")
            .toLowerCase()
        ),
        j = a.Event(
          [b, "owl", d || "carousel"].join(".").toLowerCase(),
          a.extend({ relatedTarget: this }, h, c)
        );
      return (
        this._supress[b] ||
          (a.each(this._plugins, function (a, b) {
            b.onTrigger && b.onTrigger(j);
          }),
          this.register({ type: e.Type.Event, name: b }),
          this.$element.trigger(j),
          this.settings &&
            "function" == typeof this.settings[i] &&
            this.settings[i].call(this, j)),
        j
      );
    }),
    (e.prototype.enter = function (b) {
      a.each(
        [b].concat(this._states.tags[b] || []),
        a.proxy(function (a, b) {
          this._states.current[b] === d && (this._states.current[b] = 0),
            this._states.current[b]++;
        }, this)
      );
    }),
    (e.prototype.leave = function (b) {
      a.each(
        [b].concat(this._states.tags[b] || []),
        a.proxy(function (a, b) {
          this._states.current[b]--;
        }, this)
      );
    }),
    (e.prototype.register = function (b) {
      if (b.type === e.Type.Event) {
        if (
          (a.event.special[b.name] || (a.event.special[b.name] = {}),
          !a.event.special[b.name].owl)
        ) {
          var c = a.event.special[b.name]._default;
          (a.event.special[b.name]._default = function (a) {
            return !c ||
              !c.apply ||
              (a.namespace && -1 !== a.namespace.indexOf("owl"))
              ? a.namespace && a.namespace.indexOf("owl") > -1
              : c.apply(this, arguments);
          }),
            (a.event.special[b.name].owl = !0);
        }
      } else
        b.type === e.Type.State &&
          (this._states.tags[b.name]
            ? (this._states.tags[b.name] = this._states.tags[b.name].concat(
                b.tags
              ))
            : (this._states.tags[b.name] = b.tags),
          (this._states.tags[b.name] = a.grep(
            this._states.tags[b.name],
            a.proxy(function (c, d) {
              return a.inArray(c, this._states.tags[b.name]) === d;
            }, this)
          )));
    }),
    (e.prototype.suppress = function (b) {
      a.each(
        b,
        a.proxy(function (a, b) {
          this._supress[b] = !0;
        }, this)
      );
    }),
    (e.prototype.release = function (b) {
      a.each(
        b,
        a.proxy(function (a, b) {
          delete this._supress[b];
        }, this)
      );
    }),
    (e.prototype.pointer = function (a) {
      var c = { x: null, y: null };
      return (
        (a = a.originalEvent || a || b.event),
        (a =
          a.touches && a.touches.length
            ? a.touches[0]
            : a.changedTouches && a.changedTouches.length
            ? a.changedTouches[0]
            : a),
        a.pageX
          ? ((c.x = a.pageX), (c.y = a.pageY))
          : ((c.x = a.clientX), (c.y = a.clientY)),
        c
      );
    }),
    (e.prototype.isNumeric = function (a) {
      return !isNaN(parseFloat(a));
    }),
    (e.prototype.difference = function (a, b) {
      return { x: a.x - b.x, y: a.y - b.y };
    }),
    (a.fn.owlCarousel = function (b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return this.each(function () {
        var d = a(this),
          f = d.data("owl.carousel");
        f ||
          ((f = new e(this, "object" == typeof b && b)),
          d.data("owl.carousel", f),
          a.each(
            [
              "next",
              "prev",
              "to",
              "destroy",
              "refresh",
              "replace",
              "add",
              "remove",
            ],
            function (b, c) {
              f.register({ type: e.Type.Event, name: c }),
                f.$element.on(
                  c + ".owl.carousel.core",
                  a.proxy(function (a) {
                    a.namespace &&
                      a.relatedTarget !== this &&
                      (this.suppress([c]),
                      f[c].apply(this, [].slice.call(arguments, 1)),
                      this.release([c]));
                  }, f)
                );
            }
          )),
          "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c);
      });
    }),
    (a.fn.owlCarousel.Constructor = e);
})(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace && this._core.settings.autoRefresh && this.watch();
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
      (e.prototype.watch = function () {
        this._interval ||
          ((this._visible = this._core.isVisible()),
          (this._interval = b.setInterval(
            a.proxy(this.refresh, this),
            this._core.settings.autoRefreshInterval
          )));
      }),
      (e.prototype.refresh = function () {
        this._core.isVisible() !== this._visible &&
          ((this._visible = !this._visible),
          this._core.$element.toggleClass("owl-hidden", !this._visible),
          this._visible &&
            this._core.invalidate("width") &&
            this._core.refresh());
      }),
      (e.prototype.destroy = function () {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this))
          "function" != typeof this[c] && (this[c] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._loaded = []),
        (this._handlers = {
          "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(
            function (b) {
              if (
                b.namespace &&
                this._core.settings &&
                this._core.settings.lazyLoad &&
                ((b.property && "position" == b.property.name) ||
                  "initialized" == b.type)
              ) {
                var c = this._core.settings,
                  e = (c.center && Math.ceil(c.items / 2)) || c.items,
                  f = (c.center && -1 * e) || 0,
                  g =
                    (b.property && b.property.value !== d
                      ? b.property.value
                      : this._core.current()) + f,
                  h = this._core.clones().length,
                  i = a.proxy(function (a, b) {
                    this.load(b);
                  }, this);
                for (
                  c.lazyLoadEager > 0 &&
                  ((e += c.lazyLoadEager),
                  c.loop && ((g -= c.lazyLoadEager), e++));
                  f++ < e;

                )
                  this.load(h / 2 + this._core.relative(g)),
                    h && a.each(this._core.clones(this._core.relative(g)), i),
                    g++;
              }
            },
            this
          ),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
      (e.prototype.load = function (c) {
        var d = this._core.$stage.children().eq(c),
          e = d && d.find(".owl-lazy");
        !e ||
          a.inArray(d.get(0), this._loaded) > -1 ||
          (e.each(
            a.proxy(function (c, d) {
              var e,
                f = a(d),
                g =
                  (b.devicePixelRatio > 1 && f.attr("data-src-retina")) ||
                  f.attr("data-src") ||
                  f.attr("data-srcset");
              this._core.trigger("load", { element: f, url: g }, "lazy"),
                f.is("img")
                  ? f
                      .one(
                        "load.owl.lazy",
                        a.proxy(function () {
                          f.css("opacity", 1),
                            this._core.trigger(
                              "loaded",
                              { element: f, url: g },
                              "lazy"
                            );
                        }, this)
                      )
                      .attr("src", g)
                  : f.is("source")
                  ? f
                      .one(
                        "load.owl.lazy",
                        a.proxy(function () {
                          this._core.trigger(
                            "loaded",
                            { element: f, url: g },
                            "lazy"
                          );
                        }, this)
                      )
                      .attr("srcset", g)
                  : ((e = new Image()),
                    (e.onload = a.proxy(function () {
                      f.css({
                        "background-image": 'url("' + g + '")',
                        opacity: "1",
                      }),
                        this._core.trigger(
                          "loaded",
                          { element: f, url: g },
                          "lazy"
                        );
                    }, this)),
                    (e.src = g));
            }, this)
          ),
          this._loaded.push(d.get(0)));
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Lazy = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (c) {
      (this._core = c),
        (this._previousHeight = null),
        (this._handlers = {
          "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (
            a
          ) {
            a.namespace && this._core.settings.autoHeight && this.update();
          },
          this),
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.autoHeight &&
              "position" === a.property.name &&
              this.update();
          }, this),
          "loaded.owl.lazy": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.autoHeight &&
              a.element.closest("." + this._core.settings.itemClass).index() ===
                this._core.current() &&
              this.update();
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        (this._intervalId = null);
      var d = this;
      a(b).on("load", function () {
        d._core.settings.autoHeight && d.update();
      }),
        a(b).resize(function () {
          d._core.settings.autoHeight &&
            (null != d._intervalId && clearTimeout(d._intervalId),
            (d._intervalId = setTimeout(function () {
              d.update();
            }, 250)));
        });
    };
    (e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
      (e.prototype.update = function () {
        var b = this._core._current,
          c = b + this._core.settings.items,
          d = this._core.settings.lazyLoad,
          e = this._core.$stage.children().toArray().slice(b, c),
          f = [],
          g = 0;
        a.each(e, function (b, c) {
          f.push(a(c).height());
        }),
          (g = Math.max.apply(null, f)),
          g <= 1 && d && this._previousHeight && (g = this._previousHeight),
          (this._previousHeight = g),
          this._core.$stage
            .parent()
            .height(g)
            .addClass(this._core.settings.autoHeightClass);
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.register({
                type: "state",
                name: "playing",
                tags: ["interacting"],
              });
          }, this),
          "resize.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.video &&
              this.isInFullScreen() &&
              a.preventDefault();
          }, this),
          "refreshed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.is("resizing") &&
              this._core.$stage.find(".cloned .owl-video-frame").remove();
          }, this),
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              "position" === a.property.name &&
              this._playing &&
              this.stop();
          }, this),
          "prepared.owl.carousel": a.proxy(function (b) {
            if (b.namespace) {
              var c = a(b.content).find(".owl-video");
              c.length &&
                (c.css("display", "none"), this.fetch(c, a(b.content)));
            }
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          "click.owl.video",
          ".owl-video-play-icon",
          a.proxy(function (a) {
            this.play(a);
          }, this)
        );
    };
    (e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
      (e.prototype.fetch = function (a, b) {
        var c = (function () {
            return a.attr("data-vimeo-id")
              ? "vimeo"
              : a.attr("data-vzaar-id")
              ? "vzaar"
              : "youtube";
          })(),
          d =
            a.attr("data-vimeo-id") ||
            a.attr("data-youtube-id") ||
            a.attr("data-vzaar-id"),
          e = a.attr("data-width") || this._core.settings.videoWidth,
          f = a.attr("data-height") || this._core.settings.videoHeight,
          g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (
          ((d = g.match(
            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
          )),
          d[3].indexOf("youtu") > -1)
        )
          c = "youtube";
        else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
        else {
          if (!(d[3].indexOf("vzaar") > -1))
            throw new Error("Video URL not supported.");
          c = "vzaar";
        }
        (d = d[6]),
          (this._videos[g] = { type: c, id: d, width: e, height: f }),
          b.attr("data-video", g),
          this.thumbnail(a, this._videos[g]);
      }),
      (e.prototype.thumbnail = function (b, c) {
        var d,
          e,
          f,
          g =
            c.width && c.height
              ? "width:" + c.width + "px;height:" + c.height + "px;"
              : "",
          h = b.find("img"),
          i = "src",
          j = "",
          k = this._core.settings,
          l = function (c) {
            (e = '<div class="owl-video-play-icon"></div>'),
              (d = k.lazyLoad
                ? a("<div/>", { class: "owl-video-tn " + j, srcType: c })
                : a("<div/>", {
                    class: "owl-video-tn",
                    style: "opacity:1;background-image:url(" + c + ")",
                  })),
              b.after(d),
              b.after(e);
          };
        if (
          (b.wrap(a("<div/>", { class: "owl-video-wrapper", style: g })),
          this._core.settings.lazyLoad && ((i = "data-src"), (j = "owl-lazy")),
          h.length)
        )
          return l(h.attr(i)), h.remove(), !1;
        "youtube" === c.type
          ? ((f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg"), l(f))
          : "vimeo" === c.type
          ? a.ajax({
              type: "GET",
              url: "//vimeo.com/api/v2/video/" + c.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (a) {
                (f = a[0].thumbnail_large), l(f);
              },
            })
          : "vzaar" === c.type &&
            a.ajax({
              type: "GET",
              url: "//vzaar.com/api/videos/" + c.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (a) {
                (f = a.framegrab_url), l(f);
              },
            });
      }),
      (e.prototype.stop = function () {
        this._core.trigger("stop", null, "video"),
          this._playing.find(".owl-video-frame").remove(),
          this._playing.removeClass("owl-video-playing"),
          (this._playing = null),
          this._core.leave("playing"),
          this._core.trigger("stopped", null, "video");
      }),
      (e.prototype.play = function (b) {
        var c,
          d = a(b.target),
          e = d.closest("." + this._core.settings.itemClass),
          f = this._videos[e.attr("data-video")],
          g = f.width || "100%",
          h = f.height || this._core.$stage.height();
        this._playing ||
          (this._core.enter("playing"),
          this._core.trigger("play", null, "video"),
          (e = this._core.items(this._core.relative(e.index()))),
          this._core.reset(e.index()),
          (c = a(
            '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'
          )),
          c.attr("height", h),
          c.attr("width", g),
          "youtube" === f.type
            ? c.attr(
                "src",
                "//www.youtube.com/embed/" +
                  f.id +
                  "?autoplay=1&rel=0&v=" +
                  f.id
              )
            : "vimeo" === f.type
            ? c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1")
            : "vzaar" === f.type &&
              c.attr(
                "src",
                "//view.vzaar.com/" + f.id + "/player?autoplay=true"
              ),
          a(c)
            .wrap('<div class="owl-video-frame" />')
            .insertAfter(e.find(".owl-video")),
          (this._playing = e.addClass("owl-video-playing")));
      }),
      (e.prototype.isInFullScreen = function () {
        var b =
          c.fullscreenElement ||
          c.mozFullScreenElement ||
          c.webkitFullscreenElement;
        return b && a(b).parent().hasClass("owl-video-frame");
      }),
      (e.prototype.destroy = function () {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Video = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this.core = b),
        (this.core.options = a.extend({}, e.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = d),
        (this.next = d),
        (this.handlers = {
          "change.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              "position" == a.property.name &&
              ((this.previous = this.core.current()),
              (this.next = a.property.value));
          }, this),
          "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(
            function (a) {
              a.namespace && (this.swapping = "translated" == a.type);
            },
            this
          ),
          "translate.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap();
          }, this),
        }),
        this.core.$element.on(this.handlers);
    };
    (e.Defaults = { animateOut: !1, animateIn: !1 }),
      (e.prototype.swap = function () {
        if (
          1 === this.core.settings.items &&
          a.support.animation &&
          a.support.transition
        ) {
          this.core.speed(0);
          var b,
            c = a.proxy(this.clear, this),
            d = this.core.$stage.children().eq(this.previous),
            e = this.core.$stage.children().eq(this.next),
            f = this.core.settings.animateIn,
            g = this.core.settings.animateOut;
          this.core.current() !== this.previous &&
            (g &&
              ((b =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next)),
              d
                .one(a.support.animation.end, c)
                .css({ left: b + "px" })
                .addClass("animated owl-animated-out")
                .addClass(g)),
            f &&
              e
                .one(a.support.animation.end, c)
                .addClass("animated owl-animated-in")
                .addClass(f));
        }
      }),
      (e.prototype.clear = function (b) {
        a(b.target)
          .css({ left: "" })
          .removeClass("animated owl-animated-out owl-animated-in")
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd();
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Animate = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._call = null),
        (this._time = 0),
        (this._timeout = 0),
        (this._paused = !0),
        (this._handlers = {
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace && "settings" === a.property.name
              ? this._core.settings.autoplay
                ? this.play()
                : this.stop()
              : a.namespace &&
                "position" === a.property.name &&
                this._paused &&
                (this._time = 0);
          }, this),
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace && this._core.settings.autoplay && this.play();
          }, this),
          "play.owl.autoplay": a.proxy(function (a, b, c) {
            a.namespace && this.play(b, c);
          }, this),
          "stop.owl.autoplay": a.proxy(function (a) {
            a.namespace && this.stop();
          }, this),
          "mouseover.owl.autoplay": a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "mouseleave.owl.autoplay": a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.play();
          }, this),
          "touchstart.owl.core": a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "touchend.owl.core": a.proxy(function () {
            this._core.settings.autoplayHoverPause && this.play();
          }, this),
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = a.extend({}, e.Defaults, this._core.options));
    };
    (e.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1,
    }),
      (e.prototype._next = function (d) {
        (this._call = b.setTimeout(
          a.proxy(this._next, this, d),
          this._timeout * (Math.round(this.read() / this._timeout) + 1) -
            this.read()
        )),
          this._core.is("interacting") ||
            c.hidden ||
            this._core.next(d || this._core.settings.autoplaySpeed);
      }),
      (e.prototype.read = function () {
        return new Date().getTime() - this._time;
      }),
      (e.prototype.play = function (c, d) {
        var e;
        this._core.is("rotating") || this._core.enter("rotating"),
          (c = c || this._core.settings.autoplayTimeout),
          (e = Math.min(this._time % (this._timeout || c), c)),
          this._paused
            ? ((this._time = this.read()), (this._paused = !1))
            : b.clearTimeout(this._call),
          (this._time += (this.read() % c) - e),
          (this._timeout = c),
          (this._call = b.setTimeout(a.proxy(this._next, this, d), c - e));
      }),
      (e.prototype.stop = function () {
        this._core.is("rotating") &&
          ((this._time = 0),
          (this._paused = !0),
          b.clearTimeout(this._call),
          this._core.leave("rotating"));
      }),
      (e.prototype.pause = function () {
        this._core.is("rotating") &&
          !this._paused &&
          ((this._time = this.read()),
          (this._paused = !0),
          b.clearTimeout(this._call));
      }),
      (e.prototype.destroy = function () {
        var a, b;
        this.stop();
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.autoplay = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    var e = function (b) {
      (this._core = b),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to,
        }),
        (this._handlers = {
          "prepared.owl.carousel": a.proxy(function (b) {
            b.namespace &&
              this._core.settings.dotsData &&
              this._templates.push(
                '<div class="' +
                  this._core.settings.dotClass +
                  '">' +
                  a(b.content)
                    .find("[data-dot]")
                    .addBack("[data-dot]")
                    .attr("data-dot") +
                  "</div>"
              );
          }, this),
          "added.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(a.position, 0, this._templates.pop());
          }, this),
          "remove.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(a.position, 1);
          }, this),
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace && "position" == a.property.name && this.draw();
          }, this),
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              !this._initialized &&
              (this._core.trigger("initialize", null, "navigation"),
              this.initialize(),
              this.update(),
              this.draw(),
              (this._initialized = !0),
              this._core.trigger("initialized", null, "navigation"));
          }, this),
          "refreshed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._initialized &&
              (this._core.trigger("refresh", null, "navigation"),
              this.update(),
              this.draw(),
              this._core.trigger("refreshed", null, "navigation"));
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers);
    };
    (e.Defaults = {
      nav: !1,
      navText: [
        '<span aria-label="Previous">&#x2039;</span>',
        '<span aria-label="Next">&#x203a;</span>',
      ],
      navSpeed: !1,
      navElement: 'button type="button" role="presentation"',
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
    }),
      (e.prototype.initialize = function () {
        var b,
          c = this._core.settings;
        (this._controls.$relative = (c.navContainer
          ? a(c.navContainer)
          : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)
        ).addClass("disabled")),
          (this._controls.$previous = a("<" + c.navElement + ">")
            .addClass(c.navClass[0])
            .html(c.navText[0])
            .prependTo(this._controls.$relative)
            .on(
              "click",
              a.proxy(function (a) {
                this.prev(c.navSpeed);
              }, this)
            )),
          (this._controls.$next = a("<" + c.navElement + ">")
            .addClass(c.navClass[1])
            .html(c.navText[1])
            .appendTo(this._controls.$relative)
            .on(
              "click",
              a.proxy(function (a) {
                this.next(c.navSpeed);
              }, this)
            )),
          c.dotsData ||
            (this._templates = [
              a('<button role="button">')
                .addClass(c.dotClass)
                .append(a("<span>"))
                .prop("outerHTML"),
            ]),
          (this._controls.$absolute = (c.dotsContainer
            ? a(c.dotsContainer)
            : a("<div>").addClass(c.dotsClass).appendTo(this.$element)
          ).addClass("disabled")),
          this._controls.$absolute.on(
            "click",
            "button",
            a.proxy(function (b) {
              var d = a(b.target).parent().is(this._controls.$absolute)
                ? a(b.target).index()
                : a(b.target).parent().index();
              b.preventDefault(), this.to(d, c.dotsSpeed);
            }, this)
          );
        for (b in this._overrides) this._core[b] = a.proxy(this[b], this);
      }),
      (e.prototype.destroy = function () {
        var a, b, c, d, e;
        e = this._core.settings;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls)
          "$relative" === b && e.navContainer
            ? this._controls[b].html("")
            : this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this))
          "function" != typeof this[c] && (this[c] = null);
      }),
      (e.prototype.update = function () {
        var a,
          b,
          c,
          d = this._core.clones().length / 2,
          e = d + this._core.items().length,
          f = this._core.maximum(!0),
          g = this._core.settings,
          h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if (
          ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)),
          g.dots || "page" == g.slideBy)
        )
          for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
            if (b >= h || 0 === b) {
              if (
                (this._pages.push({
                  start: Math.min(f, a - d),
                  end: a - d + h - 1,
                }),
                Math.min(f, a - d) === f)
              )
                break;
              (b = 0), ++c;
            }
            b += this._core.mergers(this._core.relative(a));
          }
      }),
      (e.prototype.draw = function () {
        var b,
          c = this._core.settings,
          d = this._core.items().length <= c.items,
          e = this._core.relative(this._core.current()),
          f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d),
          c.nav &&
            (this._controls.$previous.toggleClass(
              "disabled",
              !f && e <= this._core.minimum(!0)
            ),
            this._controls.$next.toggleClass(
              "disabled",
              !f && e >= this._core.maximum(!0)
            )),
          this._controls.$absolute.toggleClass("disabled", !c.dots || d),
          c.dots &&
            ((b =
              this._pages.length - this._controls.$absolute.children().length),
            c.dotsData && 0 !== b
              ? this._controls.$absolute.html(this._templates.join(""))
              : b > 0
              ? this._controls.$absolute.append(
                  new Array(b + 1).join(this._templates[0])
                )
              : b < 0 && this._controls.$absolute.children().slice(b).remove(),
            this._controls.$absolute.find(".active").removeClass("active"),
            this._controls.$absolute
              .children()
              .eq(a.inArray(this.current(), this._pages))
              .addClass("active"));
      }),
      (e.prototype.onTrigger = function (b) {
        var c = this._core.settings;
        b.page = {
          index: a.inArray(this.current(), this._pages),
          count: this._pages.length,
          size:
            c &&
            (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items),
        };
      }),
      (e.prototype.current = function () {
        var b = this._core.relative(this._core.current());
        return a
          .grep(
            this._pages,
            a.proxy(function (a, c) {
              return a.start <= b && a.end >= b;
            }, this)
          )
          .pop();
      }),
      (e.prototype.getPosition = function (b) {
        var c,
          d,
          e = this._core.settings;
        return (
          "page" == e.slideBy
            ? ((c = a.inArray(this.current(), this._pages)),
              (d = this._pages.length),
              b ? ++c : --c,
              (c = this._pages[((c % d) + d) % d].start))
            : ((c = this._core.relative(this._core.current())),
              (d = this._core.items().length),
              b ? (c += e.slideBy) : (c -= e.slideBy)),
          c
        );
      }),
      (e.prototype.next = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
      }),
      (e.prototype.prev = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
      }),
      (e.prototype.to = function (b, c, d) {
        var e;
        !d && this._pages.length
          ? ((e = this._pages.length),
            a.proxy(this._overrides.to, this._core)(
              this._pages[((b % e) + e) % e].start,
              c
            ))
          : a.proxy(this._overrides.to, this._core)(b, c);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Navigation = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    var e = function (c) {
      (this._core = c),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function (c) {
            c.namespace &&
              "URLHash" === this._core.settings.startPosition &&
              a(b).trigger("hashchange.owl.navigation");
          }, this),
          "prepared.owl.carousel": a.proxy(function (b) {
            if (b.namespace) {
              var c = a(b.content)
                .find("[data-hash]")
                .addBack("[data-hash]")
                .attr("data-hash");
              if (!c) return;
              this._hashes[c] = b.content;
            }
          }, this),
          "changed.owl.carousel": a.proxy(function (c) {
            if (c.namespace && "position" === c.property.name) {
              var d = this._core.items(
                  this._core.relative(this._core.current())
                ),
                e = a
                  .map(this._hashes, function (a, b) {
                    return a === d ? b : null;
                  })
                  .join();
              if (!e || b.location.hash.slice(1) === e) return;
              b.location.hash = e;
            }
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        a(b).on(
          "hashchange.owl.navigation",
          a.proxy(function (a) {
            var c = b.location.hash.substring(1),
              e = this._core.$stage.children(),
              f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d &&
              f !== this._core.current() &&
              this._core.to(this._core.relative(f), !1, !0);
          }, this)
        );
    };
    (e.Defaults = { URLhashListener: !1 }),
      (e.prototype.destroy = function () {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this))
          "function" != typeof this[d] && (this[d] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Hash = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    function e(b, c) {
      var e = !1,
        f = b.charAt(0).toUpperCase() + b.slice(1);
      return (
        a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
          if (g[b] !== d) return (e = !c || b), !1;
        }),
        e
      );
    }
    function f(a) {
      return e(a, !0);
    }
    var g = a("<support>").get(0).style,
      h = "Webkit Moz O ms".split(" "),
      i = {
        transition: {
          end: {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            transition: "transitionend",
          },
        },
        animation: {
          end: {
            WebkitAnimation: "webkitAnimationEnd",
            MozAnimation: "animationend",
            OAnimation: "oAnimationEnd",
            animation: "animationend",
          },
        },
      },
      j = {
        csstransforms: function () {
          return !!e("transform");
        },
        csstransforms3d: function () {
          return !!e("perspective");
        },
        csstransitions: function () {
          return !!e("transition");
        },
        cssanimations: function () {
          return !!e("animation");
        },
      };
    j.csstransitions() &&
      ((a.support.transition = new String(f("transition"))),
      (a.support.transition.end = i.transition.end[a.support.transition])),
      j.cssanimations() &&
        ((a.support.animation = new String(f("animation"))),
        (a.support.animation.end = i.animation.end[a.support.animation])),
      j.csstransforms() &&
        ((a.support.transform = new String(f("transform"))),
        (a.support.transform3d = j.csstransforms3d()));
  })(window.Zepto || window.jQuery, window, document);

$(function() {
    $("#background").owlCarousel({
        loop: true,
        items: 1,
        smartSpeed: 1000,
        autoHeight: false,
        autoplayTimeout: 3000,
        autoplay: true,
        lazyLoad: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dotsEach: true
            },
            600: {
                items: 1,
                nav: true
            }
        }
    });

    $("#related-products").owlCarousel({
        loop: true,
        items: 4,
        autoplayTimeout: 3000,
        smartSpeed: 500,
        autoHeight: false,
        autoplay: true,
        lazyLoad: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            414: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    $("#best-seller").owlCarousel({
        loop: true,
        items: 4,
        autoplayTimeout: 3000,
        smartSpeed: 600,
        autoHeight: false,
        autoplay: true,
        lazyLoad: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            414: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    $("#new-arrivals").owlCarousel({
        loop: true,
        items: 4,
        autoplayTimeout: 4000,
        smartSpeed: 500,
        autoHeight: false,
        autoplay: true,
        lazyLoad: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            414: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    $("#hot-sales").owlCarousel({
        loop: true,
        items: 4,
        autoplayTimeout: 5000,
        smartSpeed: 500,
        autoHeight: false,
        autoplay: true,
        lazyLoad: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            414: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    $("#tab_image").owlCarousel({
        loop: false,
        items: 4,
        autoplay: false,
        nav: true
    });
});

$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

$("#province").on("change", function() {
    $.ajax({
        url: "/districts/" + $("#province").val(),
        type: "get",
        success: function(data) {
            $("#district ~ .nice-select .current").text("Select District");
            $("#district ~ .nice-select .list").empty();
            $("#district").empty();
            data.forEach(function(item) {
                $("#district ~ .nice-select .list").append(
                    "<li data-value='" +
                        item.id +
                        "' class='option'>" +
                        item.name +
                        "</li>"
                );
                $("#district").append(
                    "<option value='" + item.id + "'>" + item.name + "</option>"
                );
            });
        }
    });
});

$("#district").on("change", function() {
    $.ajax({
        url: "/wards/" + $("#district").val(),
        type: "get",
        success: function(data) {
            $("#ward ~ .nice-select .list").empty();
            $("#ward").empty();
            data.forEach(function(item) {
                $("#ward ~ .nice-select .current").text("Select Ward");
                $("#ward ~ .nice-select .list").append(
                    '<li data-value="' +
                        item.id +
                        '" class="option">' +
                        item.name +
                        "</li>"
                );
                $("#ward").append(
                    "<option value='" + item.id + "'>" + item.name + "</option>"
                );
            });
        }
    });
});

var btn = $("#button");

$(window).on("scroll", function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass("show");
    } else {
        btn.removeClass("show");
    }
});

btn.on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
});

$(document).on("click", "#close_success", function() {
    $("#liveToastSuccess").hide();
});

$("#apply_promos").on("click", function() {
    $("#apply_promos").html(
        '<div class="spinner-border spinner-border-sm" role="status">' +
            '<span class="sr-only">Loading...</span>' +
            "</div>"
    );
    $.ajax({
        url: "/find-promos/" + $("#promos_code").val(),
        type: "get",
        success: function(data) {
            $("#apply_promos").html("APPLY");
            $("#price").val($("#old_price").val());
            if (data) {
                let total =
                    parseFloat($("#price").val()) *
                    ((100 - parseFloat(data.discount)) / 100);
                $("#price").val(total);
                $("#discount").val(data.discount);
                $("#apply_promos").html("APPLIED");
                $("#order_discount").text(data.discount + "%");
                $("#order_total").text(
                    total.toLocaleString("en", {
                        style: "currency",
                        currency: "USD"
                    })
                );
                $("#liveToastSuccess").html(
                    "Promo code found" +
                        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
                        '<span aria-hidden="true">&times;</span>' +
                        "</button>"
                );
                $("#liveToastSuccess").show();
                $("#liveToastSuccess")
                    .delay(1000)
                    .slideUp(200, function() {
                        $(this).hide();
                    });
                updatePaypalBtn(total);
                return;
            }
            $("#discount").val(0);
            $("#order_discount").text("0%");
            $("#order_total").text(
                parseFloat($("#old_price").val()).toLocaleString("en", {
                    style: "currency",
                    currency: "USD"
                })
            );
            $("#promos_code").val("");
            $("#liveToastError").html(
                "Promo code not found" +
                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
                    '<span aria-hidden="true">&times;</span>' +
                    "</button>"
            );
            $("#liveToastError").show();
            $("#liveToastError")
                .delay(1000)
                .slideUp(200, function() {
                    $(this).hide();
                });
            updatePaypalBtn($("#old_price").val());
        }
    });
});

function updatePaypalBtn(total) {
    paypal.Button.render(
        {
            // Configure environment
            env: "sandbox",
            client: {
                sandbox:
                    "ARtU3c6GkSq_b4FqZGE0_2Sb2VCiOj4wjbyg3_m2CjeFzJaYnCraR8Qe8Bzcc0eN-uRBeFHzzv1TeZ7k",
                production: "demo_production_client_id"
            },
            // Customize button (optional)
            locale: "en_US",
            style: {
                size: "responsive",
                color: "black",
                shape: "rect",
                tagline: false
            },

            // Enable Pay Now checkout flow (optional)
            commit: true,

            // Set up a payment
            payment: function(data, actions) {
                return actions.payment.create({
                    payment: {
                        transactions: [
                            {
                                amount: {
                                    total: Math.round(total * 100) / 100,
                                    currency: "USD"
                                }
                            }
                        ]
                    },
                    experience: {
                        input_fields: {
                            no_shipping: 1
                        }
                    }
                });
            },
            // Execute the payment
            onAuthorize: function(data, actions) {
                return actions.payment
                    .execute()
                    .then(function() {
                        $.ajax({
                            url: "/paypal-paid",
                            type: "get",
                            dataType: "JSON"
                        });
                    })
                    .then(function() {
                        $("#checkout-form").submit();
                    });
            }
        },
        "#paypal-button"
    );
    $("#paypal-button > div")
        .get(0)
        .remove();
}

$(document).on("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
    }
});

$("#login_as_admin").on("click", function() {
    if ($("#login_as_admin").is(":checked")) {
        $("input[name='email']").val("thanhphu2410@gmail.com");
        $("input[name='password']").val("123456");
    } else {
        $("input[name='email']").val("");
        $("input[name='password']").val("");
    }
});

$("#paypal").on("click", function() {
    if ($("#paypal").is(":checked")) {
        $("#site-btn").css("display", "none");
        if ($("#paypal-button > div").length == 0) {
            paypal.Button.render(
                {
                    // Configure environment
                    env: "sandbox",
                    client: {
                        sandbox:
                            "ARtU3c6GkSq_b4FqZGE0_2Sb2VCiOj4wjbyg3_m2CjeFzJaYnCraR8Qe8Bzcc0eN-uRBeFHzzv1TeZ7k",
                        production: "demo_production_client_id"
                    },
                    // Customize button (optional)
                    locale: "en_US",
                    style: {
                        size: "responsive",
                        color: "black",
                        shape: "rect",
                        tagline: false
                    },

                    // Enable Pay Now checkout flow (optional)
                    commit: true,

                    // Set up a payment
                    payment: function(data, actions) {
                        return actions.payment.create({
                            payment: {
                                transactions: [
                                    {
                                        amount: {
                                            total:
                                                Math.round(
                                                    $("#old_price").val() * 100
                                                ) / 100,
                                            currency: "USD"
                                        }
                                    }
                                ]
                            },
                            experience: {
                                input_fields: {
                                    no_shipping: 1
                                }
                            }
                        });
                    },
                    // Execute the payment
                    onAuthorize: function(data, actions) {
                        return actions.payment
                            .execute()
                            .then(function() {
                                $.ajax({
                                    url: "/paypal-paid",
                                    type: "get",
                                    dataType: "JSON"
                                });
                            })
                            .then(function() {
                                $("#checkout-form").submit();
                            });
                    }
                },
                "#paypal-button"
            );
        }
        $("#paypal-button").css("display", "block");
    }
});

$("#cod").on("click", function() {
    if ($("#cod").is(":checked")) {
        $("#site-btn").css("display", "block");
        $("#paypal-button").css("display", "none");
    }
});

"use strict";

(function($) {
    /*------------------
        Background Set
    --------------------*/
    $(".set-bg").each(function() {
        var bg = $(this).data("setbg");
        $(this).css("background-image", "url(" + bg + ")");
    });

    //Search Switch
    $(".search-switch").on("click", function() {
        $(".search-model").fadeIn(400);
    });

    $(".search-close-switch").on("click", function() {
        $(".search-model").fadeOut(400, function() {
            $("#search-input").val("");
        });
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: "#mobile-menu-wrap",
        allowParentLinks: true
    });

    /*------------------
        Accordin Active
    --------------------*/
    $(".collapse").on("shown.bs.collapse", function() {
        $(this)
            .prev()
            .addClass("active");
    });

    $(".collapse").on("hidden.bs.collapse", function() {
        $(this)
            .prev()
            .removeClass("active");
    });

    //Canvas Menu
    var check = false;
    $(".canvas__open").on("click", function() {
        if (!check) {
            $(".offcanvas-menu-wrapper").addClass("active");
        } else {
            $(".offcanvas-menu-wrapper").removeClass("active");
        }
        check = !check;
    });

    /*--------------------------
        Select
    ----------------------------*/
    $("select").niceSelect();

    /*-------------------
		Radio Btn
	--------------------- */
    $(
        ".product__color__select label, .product__details__option__size label"
    ).on("click", function() {
        $(
            ".product__color__select label, .product__details__option__size label"
        ).removeClass("active");
        $(this).addClass("active");
    });

    /*-------------------
		Scroll
	--------------------- */
    $(".nice-scroll").niceScroll({
        cursorcolor: "#0d0d0d",
        cursorwidth: "5px",
        background: "#e5e5e5",
        cursorborder: "",
        autohidemode: true,
        horizrailenabled: false
    });

    /*------------------
		Magnific
	--------------------*/
    $(".video-popup").magnificPopup({
        type: "iframe"
    });

    /*-------------------
		Quantity change
	--------------------- */
    var proQty = $(".pro-qty");
    proQty.prepend('<span class="fa fa-angle-up dec qtybtn"></span>');
    proQty.append('<span class="fa fa-angle-down inc qtybtn"></span>');
    proQty.on("click", ".qtybtn", function() {
        var $button = $(this);
        var oldValue = $button
            .parent()
            .find("input")
            .val();
        if ($button.hasClass("inc")) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button
            .parent()
            .find("input")
            .val(newVal);
    });

    var proQty = $(".pro-qty-2");
    proQty.prepend('<span class="fa fa-angle-left dec qtybtn"></span>');
    proQty.append('<span class="fa fa-angle-right inc qtybtn"></span>');
    proQty.on("click", ".qtybtn", function() {
        var $button = $(this);
        var oldValue = $button
            .parent()
            .find("input")
            .val();
        if ($button.hasClass("inc")) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button
            .parent()
            .find("input")
            .val(newVal);
    });

    /*------------------
        Achieve Counter
    --------------------*/
    $(".cn_num").each(function() {
        $(this)
            .prop("Counter", 0)
            .animate(
                {
                    Counter: $(this).text()
                },
                {
                    duration: 4000,
                    easing: "swing",
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                    }
                }
            );
    });
})(jQuery);
