/*
script(src="https://gnjo.github.io/quest/underscore.js?v=1.83")
script(src="https://gnjo.github.io/quest/q.util.runner.js?v=1.3")
script(src="https://gnjo.github.io/quest/q.util.addr.js")
script(src="https://gnjo.github.io/quest/q.util.dung.js")
script(src="https://gnjo.github.io/quest/q.util.fn.js?v=1.1")
script(src="https://gnjo.github.io/quest/q.util.mapview.js")
script(src="https://gnjo.github.io/quest/q.util.rand.js")
script(src="https://gnjo.github.io/quest/q.util.numable.js?v=1.1")
script(src="https://gnjo.github.io/quest/q.util.xxx.js?v=1.5")
script(src="https://gnjo.github.io/quest/q.core.run.js?v=1.3")
script(src="https://gnjo.github.io/quest/q.core.lex.js?v=1.1")
script(src="https://gnjo.github.io/quest/q.core.red.js?v=1.0")
script(src="https://gnjo.github.io/quest/q.core.loo.js?v=1.2")


*/
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map

/*****/
/*histry
v1.0 make
v1.1 bugfix object unmapping
v1.2 bugfix seek null is not run
*/
;(function(root){

 ;
 function entry(o/*bj*/){
  //let o=obj||{}
  o.__run={};
  o.addon=function(seek,name,fn){   
   o[name]=fn
   if(seek) o.__run[name]=seek;
   return o;
  }
  o.test=function(){
   //let ary=Array.from(arguments)
   let ary=_.keys(o.__run).map(k=>{return {name:k,seek:o.__run[k],fn:o[k]} })
    _.sortBy(ary,a=>a.seek).map(d=>console.log(`${d.seek} ${d.name}`))
   //.map(d=>d.fn.apply(o,ary))
   return o;   
  }
  o.run=function(){
   let arg=_(arguments).map(d=>d)
   let ary=_.keys(o.__run).map(k=>{return {name:k,seek:o.__run[k],fn:o[k]} })
    _.sortBy(ary,(a)=>a.seek).map(d=>d.fn.apply(o,arg))
   return o;
  }
  return o//_.extend({},o,obj)
 }
 ;
 root.runner=entry
 ;
 /*
let x={}
,a=(d)=>{console.log(d,'aaa')}
,b=(d)=>{console.log(d,'bbb')}
,c=(d)=>{console.log(d,'ccc')}

let r=runner(x)
r.addon(10,'a',a)
r.addon(20,'c',c)
r.addon(30,'b',b)
r.run('aaaa') 
 */
})(this);

/*****/
;(function(root){

 let re={}
 re.main=/@\w+/
 re.sub=/#\w+/
 re.line=/:\w+/
 re.num=/:(\d+)/
 re.disit=/^\d+$/
 let is={}
 is.number = function(obj){return toString.call(obj) === '[object Number]'}
 ;
 function entry(str){
  let o={}
  let _main="@notfound"
  ,_sub="#entrypoint"
  ,_line=":0"
  ,_num=0
  o.main=_main
  o.sub=_sub
  o.line=_line
  o.num=_num
  ;
  o.set=(_str)=>{
   let str=_str
   if(re.disit.test(str)) str=':'+_str //special
   //
   o.main=re.main.test(str)?str.match(re.main).pop():o.main
   o.sub=re.sub.test(str)?str.match(re.sub).pop():o.sub
   o.line=re.line.test(str)?str.match(re.line).pop():o.line
   o.num=re.num.test(str)?parseInt(str.match(re.num).pop()):o.num
   return o;
  }
  o.get=(opt)=>{
   if(!opt)return o.main+o.sub+o.line
   //@#: or n
   if(opt==='n')return o.num;
   let s=''
   if(/@/.test(opt)) s+=o.main
   if(/#/.test(opt)) s+=o.sub
   if(/:/.test(opt)) s+=o.line
   return s;
  }
  //  
  return o.set(str)
 }
 root.addr=entry;
 /*usage
 addr('@xyz').get()//fulladdress //@xyz#entrypoint:0
 addr('@xyz').set('#aaa').get('@#') //@xyz#aaa
 */
})(this);

/*****/


/*interface

dung(seed,w,h,"・■上下")

*/

;(function(root){
 
 let dstr=`
0,1,0D4,0R1
1,1,1D5,1L0,1R2
2,1,2D6,2L1,2R3
3,1,3D7,3L2
4,2,4U0,4D8,4R5
5,2,5U1,5D9,5L4,5R6
6,2,6U2,6DA,6L5,6R7
7,2,7U3,7DB,7L6
8,3,8U4,8R9
9,3,9U5,9L8,9RA
A,3,AU6,AL9,ARB
B,3,BU7,BLA
`.trim()
 ;

 //16->10 paseInt(n,16)
 //10->16 n.toString(16)
 //console.log(dstr)
 let fn=root.fn||{}
 fn.d2h=(n)=>n.toString(16).toUpperCase()
 fn.h2d=(n)=>parseInt(n,16)
 fn.range=(l=0)=>{return Array.from({length:l})}
 fn.setary=(ary,key)=>{
  return (!key)?Array.from(new Set(ary)):ary.filter((a,b,c)=>(c.findIndex((d)=>(a[key]===d[key]))=== b))
 }
fn.crcTable=(function(){
  var c,crcTable = [];
  for(var n =0; n < 256; n++){
    c = n;
    for(var k =0; k < 8; k++){
      c = ((c&1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
    }
    crcTable[n] = c;
  }
  return crcTable;
})();//early gen
fn.crc32 = function(str,hex=true) {
  var crcTable = fn.crcTable,pad=( (d,l)=>('000000000000000000'+d).slice(-1*l))
  ,crc = 0 ^ (-1)
  ;
  for (var i = 0; i < str.length; i++ ) crc = (crc >>> 8) ^ crcTable[(crc ^ str.charCodeAt(i)) & 0xFF]
  ;
  crc = (crc ^ (-1)) >>> 0
  ;
  return (hex)?pad(crc.toString(16),8):crc
} 
 
  ;(function(root){
 function entry(_seed){
  let seed=_seed||999
  ,rand=(a,b)=>{
   seed=fn.crc32(seed.toString(),false)
   return (a&&b)?(seed%Math.abs(b-a)+a):(a)?seed%a:seed
  }
  return rand
 }
 root.Rand=entry
})(this);
 
 function roomer(_seed,_w,_h,str){
  let chspace=str.charAt(0)
  let chwall=str.charAt(1)
  let chtunnel=str.charAt(2)
  ;
  let seed=_seed||1345
  //let mt=new MersenneTwister(seed);
  //mt.rand=mt.nextInt
  let mt={rand:Rand(seed)}//new MersenneTwister(seed);
  //mt.rand=mt.nextInt
  //console.log(mt.rand(3))
  ;
  let fo=()=>{
   let v=mt.rand(3)
   return (v===2)?-1:v
  }
  let w=_w||15
  let h=_h||13
  let fs=(d,i)=>(i>0&&i%w===0)?'\n'+d:d 
  let view=fn.range(w*h).map(d=>chwall)
  //let rmin=7,rmax=11
  let wmin=parseInt(w/2),wmax=w-2
  let hmin=parseInt(h/2),hmax=h-2
  let rw=mt.rand(wmin,wmax)//mt.rand(rmin,rmax)
  let rh=mt.rand(hmin,hmax)//mt.rand(rmin,rmax)
  //console.log(rw,wmin,wmax)
  let ow=mt.rand(w-rw)
  let oh=mt.rand(h-rh)
  let gw=~~(rw/2) +fo()
  let gh=~~(rh/2) +fo()
  //udlr
  view=view.map((d,i)=>{
   let x=i%w,y=~~(i/w)

   let flg=(ow<x&&(ow+rw)>x),flg2=(oh<y&&(oh+rh)>y),flg3=(x===(ow+gw)&&y===(oh+gh))
   return (flg3)?'せ':(flg&&flg2)?chspace:d
  })
  return view;
 }

 function walker(_seed){
  //
  let seed=_seed||1345
//  let mt=new MersenneTwister(seed);
//  mt.rand=mt.nextInt
  let mt={rand:Rand(seed)}//new MersenneTwister(seed);
  //mt.rand=mt.nextInt
  
  ;
  
  let walkrule={}
  dstr.split('\n').map(d=>d.split(',')).map(d=>walkrule[d[0]]=d) 
  //

  let roommax=12
  let walknum=()=>mt.rand(roommax*2)+roommax
  let walkmax=walknum()
  let wk=fn.d2h(mt.rand(roommax)) //fake stairs
  let path=fn.range(walkmax).map((d,i)=>{
   let rs=walkrule[wk].slice(2)
   let ret=rs[mt.rand(16)%rs.length]
   wk=ret.charAt(2)
   return ret;
  })
  return path;
 }

 function viewer(path){
  let fs=(d,i)=>(i>0&&i%7===0)?'\n'+d:d
  let fr=(d)=>d.split("").reverse().join("").replace('L','R').replace('U','D')
  let fa=fn.setary
  let a=fa(path.map(d=>(/L|U/.test(d))?fr(d):d))
  let w=4
  let h=3
  let r=(w*2-1)*(h*2-1)
  let view=fn.range(r).map(d=>'*')
  a.map(d=>{
   let c0=d.charAt(0),c1=d.charAt(1),c2=d.charAt(2)
   ,f1=fn.h2d
   ,f=(d)=>( ~~( f1(d)/w) )*(w*2-1)*2 +(f1(d)%w)*2
   let tn=(c1==='R')?1:(w*2-1)
   //room
   view[f(c0)]=c0
   view[f(c2)]=c2  
   //tunnel
   view[f(c0)+tn]=(c1==='R')?'-':'|'
  })
  return view.map(fs).join('')
 }

 function halfpoint(x1,y1,x2,y2,_rate){
  let dx=x2-x1
  ,dy=y2-y1
  ,a=Math.atan2(dy,dx)
  ,s=Math.pow(dx*dx+dy*dy,0.5)
  ,rate=_rate||5 //rate 0-10
  ,l=s*rate/10
  ,xc=l*Math.cos(a)||dx
  ,yc=l*Math.sin(a)||dy
  return [x1+xc,y1+yc]
 }

 function pointarray(x1,y1,x2,y2,rate){
  let c=halfpoint(x1,y1,x2,y2,rate)
  ,f=Math.round,f1=Math.abs,fm=Math.min,fx=Math.max
  let xc=c[0],yc=c[1],dx=f1(x2-x1),dy=f1(y2-y1),mode=(dx<dy)?'D':'R'
  ,gain=0.1
  ,p=[]
  if(mode==='R'){
   //l1=y1(x1<x<xc),lc=xc(y1<y<yc),l2=y2(xc<x<x2)
   for(let i=x1;i<=xc;i+=gain) p.push( f(i)+'.'+f(y1) );
   if(!(y1===y2))
    for(let j=fm(y1,y2);j<=fx(y1,y2);j+=gain) p.push( f(xc)+'.'+f(j) );
   for(let k=xc;k<=x2;k+=gain) p.push( f(k)+'.'+f(y2) );
  }else{ //mode ==='D'
   //l1=x1(y1<y<yc),lc=yc(x1<x<xc),l2=x2(yc<y<y2)
   for(let i=y1;i<=yc;i+=gain) p.push( f(x1)+'.'+f(i) );
   if(!(x1===x2))  
    for(let j=fm(x1,x2);j<=fx(x1,x2);j+=gain) p.push( f(j)+'.'+f(yc) );
   for(let k=yc;k<=y2;k+=gain) p.push( f(x2)+'.'+f(k) );
  }
  let path=fn.setary(p).map(d=>d.split('.').map(d=>parseInt(d)))
  return path;
 }

 function entry(_seed,_bw,_bh,str){
  let time0=performance.now()
  let chspace=str.charAt(0)
  let chwall=str.charAt(1)
  let chtunnel=str.charAt(2)
  ;
  let seed=_seed||1345
  let mt={rand:Rand(seed)}//new MersenneTwister(seed);
  //mt.rand=mt.nextInt
  ;
  let path=walker(seed)
  //fn.q('.draw').textContent=viewer(path)

  let fr=(d)=>d.split("").reverse().join("").replace('L','R').replace('U','D')
  let fa=fn.setary
  let tunnel=fa(path.map(d=>(/L|U/.test(d))?fr(d):d))
  //fn.q('.test').textContent=tunnel
  let bw=_bw||60,bh=_bh||39
  let w=parseInt( (bw/*-6*/)/4 ),h=parseInt( (bh/*-5*/)/3)
  //console.log(bw,bh,w,h)
  let isroom=(num)=>~tunnel.join('').indexOf(fn.d2h(num))
  let rooms=fn.range(12).map(d=>roomer(mt.rand(),w,h,str))
  //let w=15,h=13
  let fs=(d,i)=>(i>0&&i%bw===0)?'\n'+d:d  
  let view=fn.range(bw*bh).map(d=>chwall)
  let fi=(x,y)=>y*bw+x
  let gs={}
  ;
  rooms.map((d,i)=>{
   if(!isroom(i))return;
   let v=d
   let ox=(i%4)*w,oy=~~(i/4)*h
   let room=fn.d2h(i)
   v.map((d,i)=>{
    let x=i%w +ox ,y=~~(i/w)+oy
    if(d==='せ') gs[room]=[x,y]
    view[fi(x,y)]=d
   })
  })

  tunnel.map(d=>{
   let rate=5
   let r1=gs[d.charAt(0)],r2=gs[d.charAt(2)]
   let x1=r1[0],y1=r1[1]
   let x2=r2[0],y2=r2[1]
   return pointarray(x1,y1,x2,y2,rate)
  }).map(d=>{
   d.map(d=>{
    let x=d[0],y=d[1]
    //console.log(view.length,bw*bh,x,y,fi(x,y))
    if(view[fi(x,y)]===chwall) view[fi(x,y)]=chtunnel
    if(view[fi(x,y)]==="せ") view[fi(x,y)]=chspace    
   })
  })

  let _view=view.map(fs).join('')
  let time1=performance.now()
  return {data:view,view:_view,time:time1-time0};
 }

 root.dung=entry;
})(this)

/*

let fn={};fn.q=(d)=>document.querySelector(d);

fn.q('.x').onclick=()=>{
 let seed=~~(Math.random()*9999)
 fn.q('.y').textContent=seed
 let d=dung(seed,60,40,'・　＋')
 fn.q('.draw2').textContent=d.view
 fn.q('.z').textContent= d.time +'ms'
}
*/

/*****/
//document element utility
/*history
v1.0 make
v1.1 wraptrim wraptrim2
*/
;(function(root){
 let fn=root.fn||{}
 ;
 function i3(d,doc=document){
  if(typeof d !=='string') return d
  var el=doc.createElement('table'); el.innerHTML=d.trim();
  var me=el.childNodes[0]
  el=void 0;
  return me
 }
 function fr(html='',doc=document){
  let flg = (typeof 'html' === 'string')
  ,e= (flg)?doc.createElement('table'): html||doc.createElement('table')
  ,fr=doc.createDocumentFragment()
  ;
  if(flg) e.innerHTML= html||'';
  ;[].slice.call(e.childNodes).forEach(d=>fr.appendChild(d))
  return fr;
 }
 ;
 fn.i3=i3
 fn.fr=fr
 fn.cfr=(doc=document)=>{return doc.createDocumentFragment()}
 fn.empty=(el)=>{while( el.firstChild ){el.removeChild( el.firstChild )} return el} 
 fn.g=(s,doc=document)=>{return doc.getElementById(s)};
 fn.gc=(s,doc=document)=>{return doc.getElementsByClassName(s)}
 fn.q=(s,doc=document)=>{return doc.querySelector(s)};
 fn.qa=(s,doc=document)=>{return [].slice.call(doc.querySelectorAll(s))}
 fn.r=(d)=>{return d.parentNode.removeChild(d)}
 fn.ce=(d,doc=document)=>{return doc.createElement(d)}
 fn.a2=function(me,p){p.appendChild(me);return me}
 fn.p2=function(me,p){p.insertBefore(me,p.firstElementChild/*p.firstChild*/); return me}
 fn.as2=function(me,p){p.parentNode.insertBefore(me,p.nextElementSibling/*nextSibling*/);return me}
 fn.ps2=function(me,p){p.parentNode.insertBefore(me,p);return me}
 ;
 fn.dde=(on,fn,cap)=>document.documentElement.addEventListener(on,fn,cap)

 /**/
 fn.nulltoX00=(d)=>{return (d)?d:'X00'}
 ;
 fn.p1x1=function p1x1(_c,w,h){
  //ex) red or #f00 or #f005 or #ff0000 or #00000000 or transparent
  let canvas=/*document.createElement*/fn.ce('canvas'),ctx=canvas.getContext('2d')
  let c=/^#/.test(_c)?c:'#'+_c
  ;
  canvas.width=w||1
  canvas.height=h||1
  ctx.fillStyle=c||"#000000"
  ctx.fillRect(0,0,canvas.width,canvas.height)
  ;
  return canvas.toDataURL("image/png") //output
 }
 ;
 fn.imax=Number.MAX_SAFE_INTEGER - (Number.MAX_SAFE_INTEGER%10)
 fn.safetick=(d)=>{return (d===fn.imax)?1:(++d)}
 fn.get4=(d)=>d.charAt(3) //MTH ch tar add jmp
 
 fn.trimwrap=(str)=>{
  let wraptrim=/(^\/\*)|(^\{\{\{)|(^\[\[\[)/ // /* ?
  ,x=str.trim()
  if(wraptrim.test(x)){
   let ary=x.split('\n')
   ary.pop();ary.shift()
   return ary.join('\n')
  }
  //silent pattern
  return str;
 }
 fn.trimwrap2=(str)=>{return str.slice(3,-3) /*line wrap*/} 
 
 root.fn=fn
})(this);


/*****/
;(function(root){
 /*https://codepen.io/gnjo/pen/vYBJERB?editors=1010*/
 /*need underscore.js*/
 function size(str){
  let ary=str.split('\n')
  return {w:ary.pop().length+1,h:ary.length}
 }
 function pos2len(mapw,maph,x,y){return mapw*y+x}
 function strrep(str, idx, val){return str.slice(0, idx) + val + str.slice(idx+val.length)}; 
 ;
 function entry(str){
  let o={}
  o.org=str;
  o.maps=str;
  o=Object.assign({},o,size(str))
  o.met=(x,y,orgflg)=>{
   let len=pos2len(o.w,o.h,x,y)
   return (orgflg)?o.org.charAt(len):o.maps.charAt(len)
  }
  o.mwr=(x,y,ch)=>{
   let len=pos2len(o.w,o.h,x,y)
   o.maps=strrep(o.maps,len,ch.charAt(0))
   return o.maps
  }
  o.view=(cx,cy,cw,ch)=>{
   //cw ch is odd value
   let left=parseInt( cx-( (cw-1)/2) )
   
   let top=parseInt( cy-( (ch-1)/2) )
   //console.log(left,top);
   //console.log(o.maps)
   let v='',span=_.range(cw).map(d=>'　').join('')
   for(let y=top;y<top+ch;y++){
    let len=pos2len(o.w,o.h,Math.max(left,0),y)
    if(y<0||len<0){
     v+=span+'\n'
    }else{
     let sub=o.maps.substr(len,cw).replace(/(?:\n.*)+$/,'')
     //console.log(len,sub)
     sub=(left<0)?(span.slice(0,Math.abs(left))+sub+span).slice(0,cw):(sub+span).slice(0,cw)
     v+= sub+'\n'
    }
    //console.log(v)
   }
   //console.log(v)
   return v;
  }

  return o;
 }
 root.mapview=entry;
})(this);

/*****/

;(function(root){
 let fn={}
 fn.crcTable=(function(){
  var c,crcTable = [];
  for(var n =0; n < 256; n++){
   c = n;
   for(var k =0; k < 8; k++){
    c = ((c&1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
   }
   crcTable[n] = c;
  }
  return crcTable;
 })();//early gen
 fn.crc32 = function(str,hex=true) {
  var crcTable = fn.crcTable,pad=( (d,l)=>('000000000000000000'+d).slice(-1*l))
  ,crc = 0 ^ (-1)
  ;
  for (var i = 0; i < str.length; i++ ) crc = (crc >>> 8) ^ crcTable[(crc ^ str.charCodeAt(i)) & 0xFF]
  ;
  crc = (crc ^ (-1)) >>> 0
  ;
  return (hex)?pad(crc.toString(16),8):crc
 }
 ;
 function entry(_seed){
  let seed=_seed||999
  ,rand=(a,b)=>{
   seed=fn.crc32(seed.toString(),false)
   return (a&&b)?(seed%Math.abs(b-a)+a):(a)?seed%a:seed
  }
  return rand
 }
 root.rand=entry
})(this);

/*****/
/*history
v1.0 make
v1.1 bugfix 001 issue. if def case, 001 is string.
*/
;(function(root){

 let re={}
 re.numunit=/^([-+]?(?:\d*[\.]\d+|\d+))/  //tail not end
 re.num=/^([-+]?(?:\d*[\.]\d+|\d+))$/
 re.headzero=/^0[0-9]/ //bugfix
 re.falsy=/^(false|0|no|n|null|undefined|NaN)$/i
 function modulo(obj,num){
  let v=Math.abs(parseInt(obj)%parseInt(num))
  return _.isNaN(v)?0:v
 }
 function b(obj){
  if(_.isEmpty(obj) )return 0
  if(_.isNumber(obj) )return modulo(obj,2)
  if(_.isString(obj)){
   if(re.falsy.test(obj))return 0
   if(re.numunit.test(obj))return modulo(obj,2)
   return 1;//obj is exist
  }
  return 1;//obj is exist
 }
 function f(obj){
  if(_.isNumber(obj)&&(!_.isNaN(obj)) )return obj
  if(!_.isString(obj))return 0
  return re.numunit.test(obj)?parseFloat(obj):0
 }
 function i(obj){
  if(_.isNumber(obj)&&(!_.isNaN(obj)) )return parseInt(obj)
  if(!_.isString(obj))return 0
  return re.numunit.test(obj)?parseInt(obj):0
 } 
 function def(obj){
  if(!_.isString(obj))return obj;
  ///^0[0-9]/.test('001') //string like a color code
  if(re.headzero.test(obj))return obj; //string ex.color code
  if(re.num.test(obj))return parseFloat(obj);//right number
  return obj;//string
 }
 ;
 function entry(obj,ch){
  if(ch==='b')return b(obj)
  if(ch==='f')return f(obj)
  if(ch==='i')return i(obj)  
  return def(obj)
 }
 root.numable=entry;
})(this);
/*
numable(obj,ch) //bfi //ch=null is right number change
*/

/*****/
/*history
v1.0 maked
v1.1 test url-> https://codepen.io/gnjo/pen/BaBdqQR
v1.2 hb: head bar
v1.3 change place https://gnjo.github.io/quest/q.util.xxx.js
v1.4 method delete head x. xrole->role xset->set
v1.5 bugfix
*/
;(function(root){
 let fn={}
 fn.q=(s,doc=document)=>{return doc.querySelector(s)};
 fn.gcs=(d)=>window.getComputedStyle(d)
 fn.r=(d=>d.parentNode.removeChild(d))
 fn.a2=function(me,p){p.appendChild(me);return me} 
 fn.i3=(d)=>{
  if(typeof d !=='string') return d
  var el=document.createElement('table'); el.innerHTML=d.trim();
  var me=el.childNodes[0]
  el=void 0;
  return me
 } 
 ;
 function xrole(query,_role,_w,_h){
  let q=fn.q//(d)=>document.querySelector(d)
  let gcs=fn.gcs//(d)=>window.getComputedStyle(d)
  let f=(d)=>d+'px'
  let op="fl,hb,tb,cb,bb,rs,rx,ls,lx"
  //fl :full layer
  //hb :head bar
  //tb :top bar
  //cb :center bar
  //bb :bottom bar
  //rs :right stand
  //rx :right stand big
  //ls :left stand
  //lx :left stand big
  let style={}
  ,tar=q(query)
  ,ary=op.split(',')
  ,role=ary.some(d=>d===_role)?_role:'fl'
  ,rw=parseFloat(_w||gcs(tar.parentElement).width)*0.1
  ,rh=parseFloat(_h||gcs(tar.parentElement).height)*0.1
  ,fs=parseFloat(gcs(tar.parentElement).fontSize||'16px')
  //console.log(rw,rh,fs)
  //3:7
  if(role==='fl')style={width:f(rw*10),height:f(rh*10),top:0,left:0}
  if(role==='hb')style={width:f(rw*10),height:f(rh*1),top:0,left:0}  //v1.2
  if(role==='tb')style={width:f(rw*10),height:f(rh*3),top:f(rh*1),left:0}
  if(role==='cb')style={width:f(rw*10),height:f(rh*3),top:f(rh*4),left:0}
  if(role==='bb')style={width:f(rw*10),height:f(rh*3),top:f(rh*7),left:0}
  if(role==='rs')style={width:f(rw*3),height:f(rh*10),top:0,left:f(rw*7)}
  if(role==='rx')style={width:f(rw*7),height:f(rh*10),top:0,left:0}
  if(role==='ls')style={width:f(rw*3),height:f(rh*10),top:0,left:0}
  if(role==='lx')style={width:f(rw*7),height:f(rh*10),top:0,left:f(rw*3)}

  // fl,tb,cb,bb,rs,rx,ls,lx
  if(!(role==='fl'))style.padding=`${fs/2}px ${fs}px`
  //20rings buffer 21
  if( (['tb','cb','bb'].some(d=>d===role))&&rw*10>fs*21 )style.padding=`${fs/2}px ${(rw*10-fs*21)/2}px`
  
  if(['cb','hb'].some(d=>d===role))style.textAlign='center'
  style.position='absolute'
  style.boxSizing='border-box'
  style.overflow='hidden'

  Object.assign(tar.style,style)
  return tar
 }
 function xset(query,_w,_h,_fs){
  let q=fn.q//(d)=>document.querySelector(d)
  ,f=(d)=>d+'px'
  ,fs=parseFloat(_fs)
  ,w=parseFloat(_w)
  ,h=parseFloat(_h)
  let style={}
  ,tar=q(query)
  ;
  style={width:f(w*fs),height:f(h*fs),position:'relative',/*fontSize:fs+'px'*/font:_fs}
  style.boxSizing="border-box"

  style.whiteSpace="pre-wrap"
  style.wordBreak="break-all"

  Object.assign(tar.style,style)
  return tar
 }
 ;
 function entry(alive,w,h,fs){
  if(!fn.q(alive))return console.warn('query not alive.')  
  let o={}
  o.parent=fn.q(alive)
  /*o.xrole -> o.role*/
  o.role=(query,_role,_w,_h)=>{
   if(!fn.q(query,o.parent)){
    let el=fn.i3(`<div class="${query.replace(/\./g,' ')}"></div>`)
    fn.a2(el,o.parent)
   }
   return xrole(query,_role,_w,_h);
  }
  /*o.xset -> o.set*/
  o.set=(query,_w,_h,_fs)=>{
   /*if(!fn.q(query)){
    let el=fn.i3(`<div class="${query.replace(/\./g,' ')}"></div>`)
    fn.a2(el,document.body)
   }*/
   return xset(query,_w,_h,_fs);
  }
  ;
  o.set(alive,w,h,fs) //xset->set
  return o;
 }
 root.xxx=entry;
})(this);
/*
//"fl,tb,cb,bb,rs,rx,ls,lx" and hb
let x=xxx('.x',30,20,'14px/1.0 consolas,monospace')
let mes=x.role('.y','bb')
let cb=x.role('.z','cb')
cb.textContent='保存しますか？\nはい　\nいいえ'
*/

/*****/
/*history
v1.0 make code
v1.1 clr
v1.2 def
v1.3 man
v1.4 cmd
*/
//call quest
;(function(root){
 root.quest=runner({cmds:{},mans:{}})
})(this);
//clr
;(function(q){
 let entry=function(){
  q.md={}
  q.sd={}
  q.db={}
  //console.log(q)
  return q;
 }
 q.addon(100,'clr',entry)
})(quest);

//def
;(function(q){
 let entry=function(cmd,fn,man){
  if(!cmd)return;
  if(!fn)return;
  q.mans[cmd]=man||cmd+" //: man command Nothing" //command help
  q.cmds[cmd]=fn//all command definitions
  //console.log('defined ',mdm.md.cmds,cmd)
  return q;
 }
 q.addon(void 0,'def',entry)
})(quest);

//man
;(function(q){
 //command help to return value.
 let entry=function(cmd){
  if(!cmd)return _.keys(q.mans).map(k=>q.mans[k]).join('\n')
  if(!q.mans[cmd])return cmd+'//: command not defined!'
  return q.mans[cmd]
 }
 q.addon(void 0,'man',entry)
})(quest);

//cmd done
;(function(q){
 let entry=function(cmd,ary){
  if(!cmd)return;
  try{
   q.sd['$00']=q.cmds[cmd].apply(q/*null*/,ary||[])
   //bug fix
  }catch(e){
   //cmd call error
   q.sd['$00']=void 0;
   console.error(e,q.sd['$$$'])
  }finally{
   return q.sd['$00']
  }
  //return mdm;
 }
 q.addon(void 0,'cmd',entry)
})(quest);

/*example
;(function(q){ 
 q.def('FOO',(cmd,ch,a,b,c)=>{
  return ''
 },'FOO //:test FOO')
})(quest);
*/

/*****/
/*
v1.0 make
v1.1 remove chunk
v1.2 with mac
*/
;(function(q){
 let re={}
 re.at=/^@/
 //re.cmds=/^([><\[\]\{\}\$0-9A-Z][><\[\]\{\}\$0-9A-Z][><\[\]\{\}\$0-9A-Z])(.{1}|$)(.*)+$/
 //re.cmds=/^([\%><\[\]\{\}\$0-9A-Z][\%><\[\]\{\}\$0-9A-Z][\%><\[\]\{\}\$0-9A-Z])(.{1}|$)(.*)+$/
 //re.comments=/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm
 re.comments=/([^\\:]|^)\/\/.*$/
 re.wraphead=/^\[\[\[|^\{\{\{/
 re.wraptail=/^\]\]\]|^\}\}\}/
 re.subaddr=/(?: )(#\w+)/
 re.jumpfrom=/^\<\<\</
 re.cmds=/^([\%><\[\]\{\}\$0-9A-Z][\%><\[\]\{\}\$0-9A-Z][\%><\[\]\{\}\$0-9A-Z])(.{1}|$)(.*)+$/
 //re.wrapstrhead=/^(\[\[\[)(.{1}|$)(.*)+$/
 //re.wrapstrtail=/^(\]\]\])(.{1}|$)(.*)+$/
 //re.wrapjshead=/^(\{\{\{)(.{1}|$)(.*)+$/
 //re.wrapjstail=/^(\}\}\})(.{1}|$)(.*)+$/
 //re.jumpfrom=/^(<<<)(.{1}|$)(.*)+$/
 //re.jumpto=/^(>>>)(.{1}|$)(.*)+$/
 re.mths=/^(\$[\$0-9A-Z][\$0-9A-Z])(.{1}|$)(.*)+$/
 re.dats=/^(\%[0-9A-Z][0-9A-Z])(.{1}|$)(.*)+$/
 re.lays=/^(X[0-9A-Z][0-9A-Z])(.{1}|$)(.*)+$/  //layer is X
 re.maps=/^(A[0-9A-Z][0-9A-Z])(.{1}|$)(.*)+$/

 let lex=function(str){
  let f=(d)=>d.replace(re.comments,'')
  let ff=(d)=>{return d.slice(0,3)+' [[['+d.slice(3,4)+']]] '+d.slice(4)}  
  let jumps={}
  //@ --> <<< @xyz#entrypoint
  let ary=str.split('\n')
  let headaddr=addr('')
  ary=ary.map((d,i)=>{
   if(!re.at.test(d))return d
   headaddr.set(d.replace(re.comments,'')).set(i)
   return `<<< ${headaddr.get('@#')}`
  })
  if(headaddr.get('@')==='@notfound') ary.unshift(`<<< ${headaddr.get('@#')}`)
  ;
  let wk=''
  //wrap to one
  ary=ary.map((d,i)=>{
   if( !(wk==='')&&(!re.wraptail.test(d)) ){
    wk+=d+'\n'
    return ''
   }
   if(re.wraphead.test(d)){
    wk+=f(d)+'\n'
    return ''
   }
   if(re.wraptail.test(d)){
    //console.log(d)
    let dd=wk+f(d)
    wk=''
    return dd;
   }
   if(!re.cmds.test(d)) return ''
   return f(d);
  })
  //jump address catch
  let base=headaddr.get('@')
  ary=ary.map((d,i)=>{
   if(re.wraphead.test(d)||d=='')return d;
   let dd=d.replace(re.subaddr,(x)=>' '+base+x.trim())
   if(re.jumpfrom.test(dd)) jumps[addr(dd).get('@#')]=i
   return dd;
  })
  //1st command change
  ary=ary.map(d=>{
   if(re.mths.test(d)||re.dats.test(d))return 'MHT '+ff(d)
   if(re.lays.test(d))return 'LAY '+ff(d)
   if(re.maps.test(d))return 'MAP '+ff(d)
   return d;
  })

  return {address:headaddr.get('@#'),macro:ary,jumps:jumps}
 }

 //console.log(lex(macro))
 q.addon(void 0,'lex',lex);

})(quest);

;(function(q){
 let mac=function(str,fps,lps){
  let d=q.lex(str),ad=addr(d.address).set(d.jumps[d.address])
  ;
  //console.log(d,q.md.macros)
  if(!q.md.macros){
   //most first
   q.md.macros={}
   q.md.n=0 //now line
   q.md.jumps={}
   q.md.jumpstack=[]   
  }
  q.md.macros[ad.get('@')]=d.macro
  q.md.jumps=_.extend({},q.md.jumps,d.jumps)
  q.md.n=q.md.jumps[d.address]||0
  q.md.nowmacro=ad.get('@')
  ;
  q.sd['$$$']=ad.get()
  q.sd['$00']=q.sd['$$$']
  //console.log(data)
  let re={}
  re.cmdlinesplit=/((\[\[\[(?:.*?)\]\]\])|(\{\{\{(?:.*?)\}\}\})|(>>>(?:.*?)>>>))|([^ ]+)/g //add the set back >>> cmd a b >>>

  //let x=d.macro.map(d=>d.match(re.cmdlinesplit)||[])
  //console.log(x)
  return q
 }
 q.addon(300,'mac',mac)
 
})(quest);

/*****/
;(function(q){
//red
 let red=function(_str){
  if(!_str)return;
  //mdm.md.readblock=1;
  let re={}
  re.cmdlinesplit=/((\[\[\[(?:.*?)\]\]\])|(\{\{\{(?:.*?)\}\}\})|(>>>(?:.*?)>>>))|([^ ]+)/g //add the set back >>> cmd a b >>>
  re.wrapjs=/^\{\{\{/
  re.wrapstring=/^\[\[\[/
  let str=_str
  ,ary=str.match(re.cmdlinesplit)||[] //str.split(' ').slice(1)
  ,cmd=ary[0]
  ;
  //[[[ and {{{ is special command %$xx changeed 
  //wrap case quick return
  if(re.wrapjs.test(str)&&(q.cmds['{{{'])){
   q.cmd('{{{',[fn.trimwrap(str)])
   return;
  }
  if(re.wrapstring.test(str)&&(q.cmds['[[['])){
   q.cmd('[[[',[fn.trimwrap(str)])
   return;
  }
  //do the oneline
  ary=ary.map((d,i)=>{
   if(i===0)return d;
   if(re.wrapstring.test(d)&&(q.cmds['[[['])){
    let a= q.cmd('[[[',[fn.trimwrap2(d)])
    return q.sd['$00']
   }
   if(re.wrapjs.test(d)&&(q.cmds['{{{'])){
    q.cmd('{{{',[fn.trimwrap2(d)])
    return q.sd['$00']
   }
   return d;
  })
  //other command case
  //console.log(mdm.md.cmds,mdm.md.cmds[cmd],cmd,ary)
  //console.log(q.cmds[cmd])
  if(q.cmds[cmd]) q.cmd(cmd,ary)
  return;
  //mdm.md.readblock=0;
 } 
 q.addon(void 0,'red',red)

})(quest); 

/*****/
/*loop history
v1.0 make loo into lop fop
v1.1 with end
v1.2 block and frame rate set the default.
*/

;(function(q){

 let end=function(){
  if(!q.md)return;
   clearInterval(q.md.cf)
   clearInterval(q.md.lf)
  console.log('end',q)
 }
 q.addon(void 0,'end',end)

 //frameloop on fps
 let fop=function(i){
  //console.log(i)
  //need q.md.layers
  if(!q.md.layers)return;
  _.map(q.md.layers).map(x=>{
   let el=x,d=el.className.replace('layer','').trim()
   if(!q.sd[d].flg)return;
   q.sd[d].flg=0//update complete;
   if(!(d==="XXX"))Object.assign(el,q.sd[d])   
   Object.assign(el.style,q.sd[d].style)
  })
 }
 //lineloop on lps
 let lop=function(i){
  if(q.md.readblock)return;
  let a=addr(q.sd['$$$']).set(q.md.n)
  //console.log(q.md.macros,a.get('@'),a.get('n'))
  let cmdline=q.md.macros[a.get('@')][a.get('n')]//||void 0
  ;
  //console.log(cmdline)
  if(cmdline==null) q.end()
  if(cmdline){
   q.sd['$$$']=a.get() //main+sub+':'+n
   q.red(cmdline) //read the macro on the lineloop
  }
  q.md.n+=1;
 } 
 q.addon(void 0,'fop',fop)
 q.addon(void 0,'lop',lop)
 //the loop 
 let loo=function(str,fps,lps){
  q.end();
  //if(q.md.cf)clearInterval(q.md.cf)
  //if(q.md.lf)clearInterval(q.md.lf)

  let safetick=fn.safetick
  q.md.fps=fps||q.md.fps||20
  q.md.lps=lps||q.md.lps||100
  q.md.f=0 //fps loop counter
  q.md.l=0 //lps loop counter
  q.md.readblock=0 //ready block
  q.md.keyblock=0  //ready block
  ;
  q.md.cf=setInterval(()=>{ 
   q.md.f=safetick(q.md.f)
   q.fop(q.md.f) //frameloop on fps
  },1000/q.md.fps)
  ;
  q.md.lf=setInterval(()=>{
   q.md.l=safetick(q.md.l)
   q.lop(q.md.l) //lineloop on lps 
  },1000/q.md.lps)

  return q
 }
 q.addon(400,'loo',loo)

})(quest);
