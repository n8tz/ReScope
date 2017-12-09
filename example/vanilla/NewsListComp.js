!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="/",e(0)}({0:function(t,e,n){n(102),t.exports=n(119)},14:function(t,e,n){"use strict";function r(){f=!1}function i(t){if(!t)return void(c!==p&&(c=p,r()));if(t!==c){if(t.length!==p.length)throw new Error("Custom alphabet for shortid must be "+p.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter(function(t,e,n){return e!==n.lastIndexOf(t)});if(e.length)throw new Error("Custom alphabet for shortid must be "+p.length+" unique characters. These characters were not unique: "+e.join(", "));c=t,r()}}function o(t){return i(t),c}function s(t){_.seed(t),h!==t&&(r(),h=t)}function a(){c||i(p);for(var t,e=c.split(""),n=[],r=_.nextValue();e.length>0;)r=_.nextValue(),t=Math.floor(r*e.length),n.push(e.splice(t,1)[0]);return n.join("")}function u(){return f?f:f=a()}function l(t){var e=u();return e[t]}var c,h,f,_=n(65),p="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";t.exports={characters:o,seed:s,lookup:l,shuffled:u}},16:function(t,e){"use strict";/**!
	 * is
	 * the definitive JavaScript type testing library
	 *
	 * @copyright 2013-2014 Enrico Marino / Jordan Harband
	 * @license MIT
	 */
var n,r=Object.prototype,i=r.hasOwnProperty,o=r.toString;"function"==typeof Symbol&&(n=Symbol.prototype.valueOf);var s=function(t){return t!==t},a={boolean:1,number:1,string:1,undefined:1},u=/^([A-Za-z0-9+\/]{4})*([A-Za-z0-9+\/]{4}|[A-Za-z0-9+\/]{3}=|[A-Za-z0-9+\/]{2}==)$/,l=/^[A-Fa-f0-9]+$/,c={};c.a=c.type=function(t,e){return typeof t===e},c.defined=function(t){return"undefined"!=typeof t},c.empty=function(t){var e,n=o.call(t);if("[object Array]"===n||"[object Arguments]"===n||"[object String]"===n)return 0===t.length;if("[object Object]"===n){for(e in t)if(i.call(t,e))return!1;return!0}return!t},c.equal=function(t,e){if(t===e)return!0;var n,r=o.call(t);if(r!==o.call(e))return!1;if("[object Object]"===r){for(n in t)if(!(c.equal(t[n],e[n])&&n in e))return!1;for(n in e)if(!(c.equal(t[n],e[n])&&n in t))return!1;return!0}if("[object Array]"===r){if(n=t.length,n!==e.length)return!1;for(;n--;)if(!c.equal(t[n],e[n]))return!1;return!0}return"[object Function]"===r?t.prototype===e.prototype:"[object Date]"===r&&t.getTime()===e.getTime()},c.hosted=function(t,e){var n=typeof e[t];return"object"===n?!!e[t]:!a[n]},c.instance=c.instanceof=function(t,e){return t instanceof e},c.nil=c.null=function(t){return null===t},c.undef=c.undefined=function(t){return"undefined"==typeof t},c.args=c.arguments=function(t){var e="[object Arguments]"===o.call(t),n=!c.array(t)&&c.arraylike(t)&&c.object(t)&&c.fn(t.callee);return e||n},c.array=Array.isArray||function(t){return"[object Array]"===o.call(t)},c.args.empty=function(t){return c.args(t)&&0===t.length},c.array.empty=function(t){return c.array(t)&&0===t.length},c.arraylike=function(t){return!!t&&!c.bool(t)&&i.call(t,"length")&&isFinite(t.length)&&c.number(t.length)&&t.length>=0},c.bool=c.boolean=function(t){return"[object Boolean]"===o.call(t)},c.false=function(t){return c.bool(t)&&Boolean(Number(t))===!1},c.true=function(t){return c.bool(t)&&Boolean(Number(t))===!0},c.date=function(t){return"[object Date]"===o.call(t)},c.date.valid=function(t){return c.date(t)&&!isNaN(Number(t))},c.element=function(t){return void 0!==t&&"undefined"!=typeof HTMLElement&&t instanceof HTMLElement&&1===t.nodeType},c.error=function(t){return"[object Error]"===o.call(t)},c.fn=c.function=function(t){var e="undefined"!=typeof window&&t===window.alert;if(e)return!0;var n=o.call(t);return"[object Function]"===n||"[object GeneratorFunction]"===n||"[object AsyncFunction]"===n},c.number=function(t){return"[object Number]"===o.call(t)},c.infinite=function(t){return t===1/0||t===-(1/0)},c.decimal=function(t){return c.number(t)&&!s(t)&&!c.infinite(t)&&t%1!==0},c.divisibleBy=function(t,e){var n=c.infinite(t),r=c.infinite(e),i=c.number(t)&&!s(t)&&c.number(e)&&!s(e)&&0!==e;return n||r||i&&t%e===0},c.integer=c.int=function(t){return c.number(t)&&!s(t)&&t%1===0},c.maximum=function(t,e){if(s(t))throw new TypeError("NaN is not a valid value");if(!c.arraylike(e))throw new TypeError("second argument must be array-like");for(var n=e.length;--n>=0;)if(t<e[n])return!1;return!0},c.minimum=function(t,e){if(s(t))throw new TypeError("NaN is not a valid value");if(!c.arraylike(e))throw new TypeError("second argument must be array-like");for(var n=e.length;--n>=0;)if(t>e[n])return!1;return!0},c.nan=function(t){return!c.number(t)||t!==t},c.even=function(t){return c.infinite(t)||c.number(t)&&t===t&&t%2===0},c.odd=function(t){return c.infinite(t)||c.number(t)&&t===t&&t%2!==0},c.ge=function(t,e){if(s(t)||s(e))throw new TypeError("NaN is not a valid value");return!c.infinite(t)&&!c.infinite(e)&&t>=e},c.gt=function(t,e){if(s(t)||s(e))throw new TypeError("NaN is not a valid value");return!c.infinite(t)&&!c.infinite(e)&&t>e},c.le=function(t,e){if(s(t)||s(e))throw new TypeError("NaN is not a valid value");return!c.infinite(t)&&!c.infinite(e)&&t<=e},c.lt=function(t,e){if(s(t)||s(e))throw new TypeError("NaN is not a valid value");return!c.infinite(t)&&!c.infinite(e)&&t<e},c.within=function(t,e,n){if(s(t)||s(e)||s(n))throw new TypeError("NaN is not a valid value");if(!c.number(t)||!c.number(e)||!c.number(n))throw new TypeError("all arguments must be numbers");var r=c.infinite(t)||c.infinite(e)||c.infinite(n);return r||t>=e&&t<=n},c.object=function(t){return"[object Object]"===o.call(t)},c.primitive=function(t){return!t||!("object"==typeof t||c.object(t)||c.fn(t)||c.array(t))},c.hash=function(t){return c.object(t)&&t.constructor===Object&&!t.nodeType&&!t.setInterval},c.regexp=function(t){return"[object RegExp]"===o.call(t)},c.string=function(t){return"[object String]"===o.call(t)},c.base64=function(t){return c.string(t)&&(!t.length||u.test(t))},c.hex=function(t){return c.string(t)&&(!t.length||l.test(t))},c.symbol=function(t){return"function"==typeof Symbol&&"[object Symbol]"===o.call(t)&&"symbol"==typeof n.call(t)},t.exports=c},19:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(24),o=r(i),s=n(40),a=r(s);o.default.Store=a.default,e.default={Store:a.default,Context:o.default},t.exports=e.default},24:function(t,e,n){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),l=n(16),c=n(25),h=n(30),f=function(t,e,n){var r=function(){};r.prototype=n?new n["_"+e]:t[e]||{},t[e]=new r,t["_"+e]=r},_={},p=function(t){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.id,i=n.parent,a=n.state,u=n.data,l=(n.name,n.incrementId),c=n.defaultMaxListeners,p=n.persistenceTm,d=n.autoDestroy,v=n.rootEmitter;o(this,e);var y=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));if(y._maxListeners=c||y.constructor.defaultMaxListeners,r=r||"_____"+h.generate(),_[r]&&!l){var b;return y._id=r,_[r].register(t),b=_[r],s(y,b)}if(_[r]&&l){for(var m=-1;_[r+"/"+ ++m];);r=r+"/"+m}if(y._id=r,_[r]=y,y._isLocalId=!0,y._persistenceTm=p||y.constructor.persistenceTm,y.stores={},y.state={},y.data={},i&&i.dead)throw new Error("Can't use a dead context as parent !");return f(y,"stores",i),f(y,"state",i),f(y,"data",i),y.parent=i,y.sources=[],y._childContexts=[],y._childContextsList=[],y._unStableChilds=0,y.__retains={all:0},y.__locks={all:1},y.__listening={},y.__context={},y.__mixed=[],y.__mixedList=[],y._followers=[],i&&(i.retain("isMyParent"),v?i.on(y.__parentList={update:function(t){return y._propag()}}):(!i._stable&&y.wait("waitingParent"),i.on(y.__parentList={stable:function(t){return y.release("waitingParent")},unstable:function(t){return y.wait("waitingParent")},update:function(t){return y._propag()}}))),y.register(t,a,u),y.__locks.all--,y._stable=!y.__locks.all,i&&i._addChild(y),d&&setTimeout(function(t){y.retain("autoDestroy"),y.dispose("autoDestroy")}),y}return a(e,t),u(e,null,[{key:"getContext",value:function(t){var n=l.array(t)?t.sort(function(t,e){return t.firstname<e.firstname?-1:t.firstname>e.firstname?1:0}).join("::"):t;return _[n]=_[n]||new e({},{id:n})}}]),u(e,[{key:"mount",value:function(t,e,n){var r=this;return l.array(t)?t.forEach(function(t){return r._mount(t,e&&e[t],n&&n[t])}):this._mount.apply(this,arguments),this}},{key:"_mount",value:function(t,e,n){if("string"!=typeof t&&(this.register(i({},t.name,t.store)),t=t.name),!this.__context[t]){var r;if(this.__mixed.reduce(function(r,i){return r||i._mount(t,e,n)},!1)||!this.parent)return;return(r=this.parent)._mount.apply(r,arguments)}var o=this.__context[t];return l.fn(o)?this.__context[t]=new o(this,{state:e,data:n}):(void 0!==e&&void 0===n?o.setState(e):void 0!==e&&(o.state=e),void 0!==n&&o.push(n)),this._watchStore(t),this.__context[t]}},{key:"_watchStore",value:function(t,e,n){var r=this;if(!this.__context[t]){var i;if(this.__mixed.reduce(function(r,i){return r||i._watchStore(t,e,n)},!1)||!this.parent)return;return(i=this.parent)._watchStore.apply(i,arguments)}return this.__listening[t]||l.fn(this.__context[t])||(!this.__context[t].isStable()&&this.wait(t),this.__context[t].on(this.__listening[t]={destroy:function(e){delete r.__listening[t],r.__context[t]=r.__context[t].constructor},update:function(t){return r.propag()},stable:function(e){return r.release(t)},unstable:function(e){return r.wait(t)}})),!0}},{key:"mixin",value:function(t){var e=this,n=this.parent,r=void 0;this.__mixed.push(t),t.retain("mixedTo"),t._stable||this.wait(t._id),this.__mixedList.push(r={stable:function(n){return e.release(t._id)},unstable:function(n){return e.wait(t._id)},update:function(t){return e._propag()}}),this.stores={},this.state={},this.data={},t.on(r),f(this,"stores",n),f(this,"state",n),f(this,"data",n),this.relink(this.__context,this,!1,!0),this.__mixed.forEach(function(t){f(e,"stores"),f(e,"state"),f(e,"data"),t.relink(t.__context,e,!0,!0)})}},{key:"register",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.relink(t,this,!1,!1),Object.keys(t).forEach(function(i){t[i].singleton||l.fn(t[i])&&(n[i]||r[i])?e._mount(i,n[i],r[i]):n[i]||r[i]?r[i]?(n[i]&&(e.stores[i].state=n[i]),e.stores[i].push(r[i])):n[i]&&e.stores[i].setState(n[i]):e._watchStore(i)})}},{key:"relink",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,n=this,r=arguments[2],i=arguments[3],o=e._stores.prototype;Object.keys(t).forEach(function(s){if(!(!i&&e.__context[s]===t[s]||e.__context[s]&&e.__context[s].constructor===t[s])){if(!i&&e.__context[s])return r||l.fn(e.__context[s])||(console.info("Rescope Store : ",s," already exist in this context ! ( try __proto__ hot patch )"),e.__context[s].__proto__=t[s].prototype),void(!r&&l.fn(e.__context[s])&&(e.__context[s]=t[s]));i||r||(n.__context[s]=t[s]),Object.defineProperty(o,s,{get:function(){return n.__context[s]}}),Object.defineProperty(e._state.prototype,s,{get:function(){return n.__context[s]&&n.__context[s].state},set:function(t){return n._mount(s,t)}}),Object.defineProperty(e._data.prototype,s,{get:function(){return n.__context[s]&&n.__context[s].data},set:function(t){return n._mount(s,void 0,t)}})}})}},{key:"bind",value:function(t,e,n){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=void 0,s=void 0,a=void 0;if(e&&!l.array(e)&&(e=[e]),n!==!1&&n!==!0||(r=n,n=null),a=e.map(function(t){return l.string(t)?t:t.name}),this._followers.push([t,e,n||void 0,o=a&&a.reduce(function(t,e){return t[e]=0,t},{})]),this.mount(e),r&&this._stable){if(s=this.getUpdates(o),!s)return;"function"!=typeof t?n?t.setState(i({},n,s)):t.setState(s):t(s)}return this}},{key:"unBind",value:function(t,e,n){for(var r=this._followers,i=r&&r.length;r&&i--;)if(r[i][0]===t&&""+r[i][1]==""+e&&r[i][2]==n)return r.splice(i,1)}},{key:"map",value:function(t,e){var n=this,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=this.constructor.Store;if(e=l.array(e)?e:[e],this.mount(e),r&&t instanceof i)i.map(t,e,this,this,!1);else if(r){this.bind(t,e,void 0,!1);var o=void 0,s=t.isReactComponent?"componentWillUnmount":"destroy";t.hasOwnProperty(s)&&(o=t[s]),t[s]=function(){return delete t[s],o&&(t[s]=o),n.unBind(t,e),t[s]&&t[s].apply(t,arguments)}}return e.reduce(function(t,e){return l.string(e)||(e=e.name),e=e.split(":"),e[0]=e[0].split("."),t[e[1]||e[0][e[0].length-1]]=n.stores[e[0][0]]&&n.stores[e[0][0]].retrieve&&n.stores[e[0][0]].retrieve(e[0].splice(1)),t},{})}},{key:"retrieve",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t=l.string(t)?t.split("."):t,t&&this.stores[t[0]]&&this.stores[t[0]].retrieve(t.splice(1))}},{key:"getStoresRevs",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1],n=this.__context;return t||(t={}),Object.keys(n).forEach(function(e){l.fn(n[e])?t.hasOwnProperty(e)||(t[e]=!1):t[e]=n[e]._rev}),e||(this.__mixed.reduce(function(e,n){return n.getStoresRevs(t),t},t),this.parent&&this.parent.getStoresRevs(t)),t}},{key:"getUpdates",value:function(t,e,n){var r=this,i=this.__context;return e=e||{},Object.keys(i).forEach(function(o){e[o]||t&&(!t.hasOwnProperty(o)||void 0!==t[o])&&(!t.hasOwnProperty(o)||i[o]._rev<=t[o])||(n=!0,e[o]=r.data[o],t&&void 0!==t[o]&&(t[o]=i[o]._rev))}),n=this.__mixed.reduce(function(n,r){return r.getUpdates(t,e,n)||n},n),n=this.parent&&this.parent.getUpdates(t,e,n)||n,n&&e}},{key:"serialize",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/.*/,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:/.*/,r=this.__context,i={state:{},data:{}};return l.array(e)&&e.forEach(function(e){return i.state[e]=t.state[e]}),l.array(n)&&n.forEach(function(e){return i.data[e]=t.data[e]}),l.array(n)||l.array(e)||Object.keys(r).forEach(function(o){if(!l.fn(r[o])){var s=r[o].constructor.flags;s=l.array(s)?s:[s||""],s.reduce(function(t,n){return t||e.test(n)},!1)&&(i.state[o]=t.state[o]),s.reduce(function(t,e){return t||n.test(e)},!1)&&(i.data[o]=t.data[o])}}),i}},{key:"dispatch",value:function(t,e){var n=this;return Object.keys(this.__context).forEach(function(r){l.fn(n.__context[r])||n.__context[r].trigger(t,e)}),this.__mixed.forEach(function(n){return n.dispatch(t,e)}),this.parent&&this.parent.dispatch(t,e),this}},{key:"then",value:function(t){var e=this;return this._stable?t(null,this.data):void this.once("stable",function(n){return t(null,e.data)})}},{key:"restore",value:function(t,e){var n=t.state,r=t.data,i=this.__context;Object.keys(r).forEach(function(t){e?i.data=r[t]:i.push(r[t])}),Object.keys(n).forEach(function(t){e?i.state=n[t]:i.setState(n[t])})}},{key:"retainStores",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments[1];e.forEach(function(e){return t.stores[e]&&t.stores[e].retain&&t.stores[e].retain(n)})}},{key:"disposeStores",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments[1];e.forEach(function(e){return t.stores[e]&&t.stores[e].dispose&&t.stores[e].dispose(n)})}},{key:"wait",value:function(t){this._stable&&!this.__locks.all&&this.emit("unstable",this),this._stable=!1,this.__locks.all++,t&&(this.__locks[t]=this.__locks[t]||0,this.__locks[t]++)}},{key:"release",value:function(t){var e=this;t&&(0==this.__locks[t]&&console.error("Release more than locking !",t),this.__locks[t]=this.__locks[t]||0,this.__locks[t]--),t||0!=this.__locks.all||console.error("Release more than locking !"),this.__locks.all--,this.__locks.all||(this._stabilizerTM&&clearTimeout(this._stabilizerTM),this._stabilizerTM=setTimeout(function(t){e._stabilizerTM=null,e.__locks.all||(e._propagTM&&clearTimeout(e._propagTM),e._stable=!0,e.emit("stable",e),!e.dead&&e._propag())}))}},{key:"propag",value:function(){var t=this;this._propagTM&&clearTimeout(this._propagTM),this._propagTM=setTimeout(function(e){t._propagTM=null,t._propag()},2)}},{key:"_propag",value:function(){var t=this;this._followers.length&&this._followers.forEach(function(e){var n=e[0],o=(e[1],e[2]),s=e[3],a=t.getUpdates(s);a&&("function"!=typeof n?o?n.setState(i({},o,a)):n.setState(a):n(a,s&&[].concat(r(s))||"no revs"))}),this.emit("update",this.getUpdates())}},{key:"isStable",value:function(){return this._stable}},{key:"_addChild",value:function(t){var e=this;this._childContexts.push(t);var n={stable:function(t){e._unStableChilds--,e._unStableChilds||e.emit("stableTree",e)},unstable:function(t){e._unStableChilds++,1==e._unStableChilds&&e.emit("unstableTree",e)},stableTree:function(t){e._unStableChilds--,e._unStableChilds||e.emit("stableTree",e)},unstableTree:function(t){e._unStableChilds++,1==e._unStableChilds&&e.emit("unstableTree",e)},destroy:function(t){t._unStableChilds&&e._unStableChilds--,t.isStable()||e._unStableChilds--,e._unStableChilds||e.emit("stableTree",e)}},r=this._unStableChilds;
//!ctx.isStable() && console.warn('add unstable child');
!t.isStable()&&this._unStableChilds++,t._unStableChilds&&this._unStableChilds++,this._childContextsList.push(n),!r&&this._unStableChilds&&this.emit("unstableTree",this),t.on(n)}},{key:"_rmChild",value:function(t){var e=this._childContexts.indexOf(t),n=this._unStableChilds;e!=-1&&(this._childContexts.splice(e,1),!t.isStable()&&this._unStableChilds--,t._unStableChilds&&this._unStableChilds--,t.un(this._childContextsList.splice(e,1)[0]),n&&!this._unStableChilds&&this.emit("stableTree"))}},{key:"retain",value:function(t){this.__retains.all++,t&&(this.__retains[t]=this.__retains[t]||0,this.__retains[t]++)}},{key:"dispose",value:function(t){var e=this;if(t){if(!this.__retains[t])throw new Error("Dispose more than retaining : "+t);this.__retains[t]--}if(!this.__retains.all)throw new Error("Dispose more than retaining !");this.__retains.all--,this.__retains.all||(this._persistenceTm?(this._destroyTM&&clearTimeout(this._destroyTM),this._destroyTM=setTimeout(function(t){e.then(function(t){!e.__retains.all&&e.destroy()})},this._persistenceTm)):this.then(function(t){return!e.__retains.all&&e.destroy()}))}},{key:"destroy",value:function(){var t=this;this.__context;for(this.dead=!0,this.emit("destroy",this),Object.keys(this.__listening).forEach(function(e){return t.__context[e].removeListener(t.__listening[e])}),this._stabilizerTM&&clearTimeout(this._stabilizerTM),this._propagTM&&clearTimeout(this._propagTM),this.__listening={},this._isLocalId&&delete _[this._id],this._followers.length=0;this.__mixedList.length;)this.__mixed[0].removeListener(this.__mixedList.shift()),this.__mixed.shift().dispose("mixedTo");this.__parentList&&(this.parent._rmChild(this),this.parent.removeListener(this.__parentList),this.parent.dispose("isMyParent"),this.__parentList=null),this.__mixed=this.data=this.state=this.context=this.stores=null,this._data=this._state=this._stores=null}},{key:"datas",get:function(){return this.data}}]),e}(c);p.persistenceTm=1,p.Store=null,p.contexts=_,e.default=p,t.exports=e.default},25:function(t,e,n){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=n(16),a=function(){function t(){i(this,t),this._events={}}return o(t,[{key:"on",value:function(t,e){var n=this;return!s.string(t)&&t?Object.keys(t).forEach(function(e){return n.on(e,t[e])}):(this._events[t]=this._events[t]||[],void this._events[t].push(e))}},{key:"un",value:function(t,e){var n=this;if(!s.string(t)&&t)return Object.keys(t).forEach(function(e){return n.un(e,t[e])});if(this._events[t]){var r=this._events[t].indexOf(e);this._events[t].splice(r,1)}}},{key:"emit",value:function(t){if(this._events[t]){for(var e=[].concat(r(this._events[t])),n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];for(var s=0;s<e.length;s++)e[s].apply(e,i)}}},{key:"addListener",value:function(){this.on.apply(this,arguments)}},{key:"removeListener",value:function(){this.un.apply(this,arguments)}},{key:"removeAllListeners",value:function(){this._events={}}},{key:"once",value:function(t,e){var n=this,r=void 0;this.on(t,r=function(){n.un(t,r),e.apply(void 0,arguments)})}}]),t}();e.default=a,t.exports=e.default},30:function(t,e,n){"use strict";t.exports=n(62)},31:function(t,e,n){"use strict";function r(t,e){for(var n,r=0,o="";!n;)o+=t(e>>4*r&15|i()),n=e<Math.pow(16,r+1),r++;return o}var i=n(64);t.exports=r},40:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=function t(e,n,r){null===e&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,n);if(void 0===i){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,n,r)}if("value"in i)return i.value;var s=i.get;if(void 0!==s)return s.call(r)},h=n(16),f=n(24),_=n(25),p=n(30),d=Object.getPrototypeOf({}),v=function(t){function e(){var t,n;o(this,e);var r=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this)),a=[].concat(Array.prototype.slice.call(arguments)),l=r.constructor,c=a[0]instanceof f?a.shift():l.context?f.getContext(l.context):h.string(a[0])?f.getContext(a.shift()):l.staticContext,_=!a[0]||h.array(a[0])||h.string(a[0])?{}:a.shift(),d=h.string(a[0])?a[0]:_.name||l.name,v=h.array(a[0])?a.shift():_.use||[],y=h.fn(a[0])?a.shift():_.apply||null,b=l.state||l.initialState;return r._uid=_._uid||p.generate(),r.__retains={all:0},r.__locks={all:0},r._onStabilize=[],r._persistenceTm=_.persistenceTm||r.constructor.persistenceTm,h.string(a[0])&&(c.__context[d]&&console.warn("ReScope: Overwriting an existing static named store ( %s ) !!",d),c.__context[d]=r),_&&_.on&&r.on(_.on),r.name=d,c.stores?(r.contextObj=c,r.context=c.stores):(r.contextObj=new f(c),r.context=c.stores),r._rev=0,r._revs={},r.stores={},r._require=[],h.array(l.use)?r._use=[].concat(i(v),i((l.use||[]).map(function(t){var e=t.match(/^(\!?)([^\:]*)(?:\:(.*))?$/);if(e[1]){var n=e[2].split(".");r._require.push(e[3]||n[n.length-1])}return e[2]}))):r._use=[].concat(i(v),i(l.use?Object.keys(l.use).map(function(t){var e=t.match(/^(\!?)(.*)$/);return e[1]&&r._require.push(l.use[t]),e[2]+":"+l.use[t]}):[])),l.require&&(t=r._require).push.apply(t,i(l.require)),_.require&&(n=r._require).push.apply(n,i(_.require)),r._followers=[],void 0!==l.data&&(r.data=u({},l.data)),_.hasOwnProperty("data")&&void 0!==_.data&&(r.data=_.data),_.hasOwnProperty("state")&&void 0!==_.state&&(b=u({},b,_.state)),y&&(r.apply=y),(b||r._use.length)&&(r.state=u({},b||{},c.map(r,r._use)),r.shouldApply(r.state)&&void 0===r.data?(r.data=r.apply(r.data,r.state,r.state),r._stable=!r.__locks.all,!r.__locks.all&&r._rev++):r._stable=!1),void 0===r.data||r._stable||r.__locks.all?(r._stable=!1,l.managed||r.state||r._use&&r._use.length||console.warn("Rescope store '",r.name,"' have no initial data, state or use. It can't stabilize...")):(r._stable=!0,r._rev++),!r._stable&&r.emit("unstable",r.state),r}return a(e,t),l(e,[{key:"shouldPropag",value:function(t){var e,n=(this.constructor,this.data);return e=!n&&t,n&&Object.keys(n).forEach(function(r){e=e||(t?n[r]!==t[r]:n&&n[r])}),t&&Object.keys(t).forEach(function(r){e=e||(t?n[r]!==t[r]:n&&n[r])}),!!e}},{key:"shouldApply",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state,n=this.constructor;return!!this.isComplete(e)&&(h.array(n.follow)?n.follow.reduce(function(t,n){return t||e&&e[n]},!1):!n.follow||Object.keys(n.follow).reduce(function(r,i){return r||e&&h.fn(n.follow[i])&&n.follow[i].call(t,e[i])||n.follow[i]&&e[i]!==t.state[i]},!1))}},{key:"apply",value:function(t,e,n){return e=e||this.state,this.refine?this.refine.apply(this,arguments):t&&t.__proto__===d&&e.__proto__===d?u({},t,e):e}},{key:"refine",value:function(t,e,n){return e=e||this.state,t&&t.__proto__===d&&e.__proto__===d?u({},t,e):e}},{key:"stabilize",value:function(t){var e=this;t&&this.once("stable",t),this._stable&&this.emit("unstable",this.state,this.data),this._stable=!1,this._stabilizer&&clearTimeout(this._stabilizer),this._stabilizer=setTimeout(this.push.bind(this,null,function(){var t=e._stable;e._stable=!0,!t&&e.emit("stable",e.state,e.data),e._stabilizer=null}))}},{key:"retrieve",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.data;return t=h.string(t)?t.split("."):t,n&&t&&t.length?t.length==e+1?n[t[e]]:this.retrieve(t,e+1,n[t[e]]):n}},{key:"dispatch",value:function(t){for(var e,n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];(e=this.contextObj).dispatch.apply(e,[t].concat(r))}},{key:"trigger",value:function(t){var e=this.constructor.actions,n=void 0;if(e&&e[t]){for(var r,i=arguments.length,o=Array(i>1?i-1:0),s=1;s<i;s++)o[s-1]=arguments[s];n=(r=e[t]).call.apply(r,[this].concat(o)),n&&this.setState(n)}}},{key:"pull",value:function(t,e,n){var r=this,i=this.contextObj.map(this,t);return e&&(this.wait(),t.forEach(function(t){return r.context[t]&&r.wait(r.context[t])}),this.release()),i}},{key:"push",value:function(t,e,n){n=e===!0?n:e,e=e===!0;var r=!t&&u({},this.state,this._changesSW)||this.state,i=t||this.apply(this.data,r,this._changesSW);return this.state=r,e||(this.data||this.data!==i)&&this.shouldPropag(i)?(this.data=i,this._changesSW={},this.wait(),void this.release(n)):(n&&n(),!1)}},{key:"setState",value:function(t,e,n){var r,i=this._changesSW=this._changesSW||{};for(var o in t)(!this.state||t.hasOwnProperty(o)&&(t[o]!=this.state[o]||this.state[o]&&t[o]&&t[o]._rev!=this._revs[o]))&&(r=!0,this._revs[o]=t[o]&&t[o]._rev||!0,i[o]=t[o]);if(this.shouldApply(u({},this.state,i)))return n?(this.push(),e&&e()):r?this.stabilize(e):e&&e(),this}},{key:"setStateSync",value:function(t){var e,n=this._changesSW=this._changesSW||{};for(var r in t)(!this.state||t.hasOwnProperty(r)&&(t[r]!=this.state[r]||this.state[r]&&t[r]&&t[r]._rev!=this._revs[r]))&&(e=!0,this._revs[r]=t[r]&&t[r]._rev||!0,n[r]=t[r]);return this.shouldApply(u({},this.state||{},n))&&this.push(),this.data}},{key:"replaceState",value:function(t,e){this.state=t,this.stabilize(e)}},{key:"as",value:function(t){return{store:this,name:t}}},{key:"on",value:function(t){var n=this;!h.string(t)&&t?Object.keys(t).forEach(function(r){return c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"on",n).call(n,r,t[r])}):c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"on",this).apply(this,arguments)}},{key:"removeListener",value:function(t){var n=this;!h.string(t)&&t?Object.keys(t).forEach(function(r){return c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"removeListener",n).call(n,r,t[r])}):c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"removeListener",this).apply(this,arguments)}},{key:"relink",value:function(t){var e=this,n=this.contextObj,r=this.constructor;r.use&&this.pull(r.use,!1,t),this._require&&this._require.forEach(function(t){return e.wait(n.__context[t])})}},{key:"isComplete",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state;this.constructor;return!this._require||!this._require.length||t&&this._require.reduce(function(e,n){return e&&t[n]},!0)}},{key:"isStable",value:function(){return this._stable}},{key:"unBind",value:function(t,e,n){for(var r=this._followers,i=r&&r.length;r&&i--;)if(r[i][0]===t&&r[i][1]===e&&r[i][2]===n)return r.splice(i,1)}},{key:"bind",value:function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments[3];if(this._followers.push([t,e,i]),n&&this.data&&this._stable){var o=i?this.retrieve(i):this.data;"function"!=typeof t?e?t.setState(r({},e,o)):t.setState(o):t(o)}}},{key:"then",value:function(t){var e=this;return this._stable?t(null,this.data):void this.once("stable",function(n){return t(null,e.data)})}},{key:"wait",value:function(t){if("number"==typeof t)return this.__locks.all+=t;if(h.array(t))return t.map(this.wait.bind(this));this._stable&&this.emit("unstable",this.state,this.data),this._stable=!1,this.__locks.all++;var e=h.string(t)?t:null;return e&&(this.__locks[e]=this.__locks[e]||0,this.__locks[e]++),t&&h.fn(t.then)&&t.then(this.release.bind(this,null)),this}},{key:"release",value:function(t,e){var n=this,i=(this.constructor,this._stable);return h.fn(t)&&(e=t,t=null),t&&(0==this.__locks[t]&&console.error("Release more than locking !",t),this.__locks[t]=this.__locks[t]||0,this.__locks[t]--),t||0!=this.__locks.all||console.error("Release more than locking !"),!--this.__locks.all&&this.data&&this.isComplete()?(this._stable=!0,this._rev++,this._followers.length&&this._followers.forEach(function(t){var e=t[2]?n.retrieve(t[2]):n.data;e&&("function"==typeof t[0]?t[0](e):t[0].setState(t[1]?r({},t[1],e):e))}),!i&&this.emit("stable",this.data),this.emit("update",this.data),e&&e()):e&&this.then(e),this}},{key:"retain",value:function(t){this.__retains.all++,t&&(this.__retains[t]=this.__retains[t]||0,this.__retains[t]++)}},{key:"dispose",value:function(t){var e=this;if(t){if(!this.__retains[t])throw new Error("Dispose more than retaining : "+t);this.__retains[t]--}if(0==this.__retains.all)throw new Error("Dispose more than retaining !");this.__retains.all--,this.__retains.all||(this._persistenceTm?(this._destroyTM&&clearTimeout(this._destroyTM),this._destroyTM=setTimeout(function(t){e._destroyTM=null,e.then(function(t){!e.__retains.all&&e.destroy()})},this._persistenceTm)):this.then(function(t){return!e.__retains.all&&e.destroy()}))}},{key:"destroy",value:function(){this.emit("destroy",this),this._stabilizer&&clearTimeout(this._stabilizer),this._followers.length&&this._followers.forEach(function(t){"function"!=typeof t[0]&&t[0].stores&&delete t[0].stores[t[1]]}),this._followers.length=0,this.dead=!0,this._revs=this.data=this.state=this.context=null,this.removeAllListeners()}},{key:"datas",get:function(){return this.data},set:function(t){console.log("Rescope store : Setting datas is depreciated, use data",(new Error).stack),this.data=t}}],[{key:"as",value:function(t){return{store:this,name:t}}},{key:"map",value:function(t,n,r,o){var s=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=t._revs||{},u=t.stores||(t.stores={}),l={};n=h.array(n)?[].concat(i(n)):[n],r=r||e.staticContext,n=n.filter(function(e){if(!e)return console.error("Not a mappable store item '"+e+"' in "+o+" !!"),!1;var n=void 0,i=void 0,c=void 0,f=void 0;return e.store&&e.name?(i=n=e.name,f=e.store):h.fn(e)?(n=i=e.name||e.defaultName,f=e):(e=e.match(/([\w_]+)((?:\.[\w_]+)*)(?:\:([\w_]+))?/),n=e[1],c=e[2]&&e[2].split(".").slice(1),f=r.stores[e[1]],i=e[3]||c&&c[c.length-1]||e[1]),!a[n]&&(f?(h.fn(f)?(r._mount(n),r.stores[n].bind(t,i,s,c)):f.bind(t,i,s,c),a[i]=a[i]||!0,!u[n]&&(u[n]=r.stores[n]),r.stores[n].hasOwnProperty("data")&&(l[n]=r.data[n]),!0):(console.error("Not a mappable store item '"+n+"/"+i+"' in "+o+" !!",f),!1))});var c,f=t.isReactComponent?"componentWillUnmount":"destroy";return t.hasOwnProperty(f)&&(c=t[f]),t[f]=function(){return delete t[f],c&&(t[f]=c),n.map(function(e){var n=void 0,i=void 0,o=void 0,s=void 0;e.store&&e.name?(i=n=e.name,s=e.store):h.fn(e)?(n=i=e.name||e.defaultName,s=r.stores[n]):(e=e.match(/([\w_]+)((?:\.[\w_]+)*)(?:\:([\w_]+))?/),n=e[1],o=e[2]&&e[2].split("."),s=r.stores[e[1]],i=e[3]||o&&o[o.length-1]||e[1]),s&&!h.fn(s)&&s.unBind(t,i,o)}),t[f]&&t[f].apply(t,arguments)},l}}]),e}(_);v.use=[],v.staticContext=new f({},{id:"static"}),v.state=void 0,v.persistenceTm=!1,e.default=v,t.exports=e.default},41:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s,a,u,l,c,h,f,_,p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},d=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),v=n(19),y=n(42),b=new(a=s=function(t){function e(){return r(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return o(e,t),e}(v.Store),s.context="static",s.state={},s.actions={userEvents:function(t){return{userEvents:t}},currentUser:function(t){return{currentUser:t}}},a),m={status:b,appState:(l=u=function(t){function e(){return r(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return o(e,t),e}(v.Store),u.state={currentUserId:"MrNice"},l),currentUser:(h=c=function(t){function e(){return r(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return o(e,t),d(e,[{key:"apply",value:function(t,e,n){var r=this,i=e.appState.currentUserId,o=t&&t._id;return console.info("currentUser state updated : ",n),i!=o&&(this.wait(),setTimeout(function(){r.push({_id:i,login:i},function(){b.trigger("currentUser",JSON.stringify(r.data))}),r.release()},500),b.trigger("currentUser","user id change ! doing some async...")),t}}]),e}(v.Store),c.use=["appState"],h),userEvents:(_=f=function(t){function e(){return r(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return o(e,t),d(e,[{key:"apply",value:function(t,e,n){var r=this,i=e.myUserId,o=t||{},s=o.cUserId,a=void 0===s?void 0:s;return i!=a&&(this.wait(),setTimeout(function(){r.push({userId:i,count:y[i].length,events:y[i],eventsByType:y[i].reduce(function(t,e){return t[e.type]=t[e.type]||[t[e.type]],t[e.type].push(e),t},{})},function(){b.trigger("userEvents",y[i].length+" events")}),r.release()},500),b.trigger("userEvents","user data change ! doing some async...")),t}}]),e}(v.Store),f.use={"!currentUser._id":"myUserId"},_)};e.default=p({},m),t.exports=e.default},42:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={MrNice:[{type:"event",text:"nice event"},{type:"news",text:"nice news"},{type:"poke",text:"some poke"},{type:"event",text:"another event"},{type:"comment",text:"another comment"}],MissTick:[{type:"event",text:"some events"},{type:"news",text:"some news"},{type:"poke",text:"some poke"},{type:"event",text:"another event"}]},t.exports=e.default},60:function(t,e,n){"use strict";function r(t){var e="",n=Math.floor(.001*(Date.now()-u));return n===o?i++:(i=0,o=n),e+=s(a.lookup,l),e+=s(a.lookup,t),i>0&&(e+=s(a.lookup,i)),e+=s(a.lookup,n)}var i,o,s=n(31),a=n(14),u=1459707606518,l=6;t.exports=r},61:function(t,e,n){"use strict";function r(t){var e=i.shuffled();return{version:15&e.indexOf(t.substr(0,1)),worker:15&e.indexOf(t.substr(1,1))}}var i=n(14);t.exports=r},62:function(t,e,n){"use strict";function r(e){return a.seed(e),t.exports}function i(e){return h=e,t.exports}function o(t){return void 0!==t&&a.characters(t),a.shuffled()}function s(){return l(h)}var a=n(14),u=(n(31),n(61)),l=n(60),c=n(63),h=n(66)||0;t.exports=s,t.exports.generate=s,t.exports.seed=r,t.exports.worker=i,t.exports.characters=o,t.exports.decode=u,t.exports.isValid=c},63:function(t,e,n){"use strict";function r(t){if(!t||"string"!=typeof t||t.length<6)return!1;for(var e=i.characters(),n=t.length,r=0;r<n;r++)if(e.indexOf(t[r])===-1)return!1;return!0}var i=n(14);t.exports=r},64:function(t,e){"use strict";function n(){if(!r||!r.getRandomValues)return 48&Math.floor(256*Math.random());var t=new Uint8Array(1);return r.getRandomValues(t),48&t[0]}var r="object"==typeof window&&(window.crypto||window.msCrypto);t.exports=n},65:function(t,e){"use strict";function n(){return i=(9301*i+49297)%233280,i/233280}function r(t){i=t}var i=1;t.exports={nextValue:n,seed:r}},66:function(t,e){"use strict";t.exports=0},102:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.createElement("div");this.setState=function(e){console.log("redraw"),t.innerHTML=e.userEvents&&e.userEvents.events&&e.userEvents.events.map(function(t){return'\n                                    <div style="border: solid 1px lightgrey;border-radius: 3px">\n                                        <b><u><center>Event type : '+t.type+"</center></u></b>\n                                        <p>"+t.text+"</p>\n                                    </div>"}).join()||"<b><u><center>Loading...</center></u></b>"},this.node=t}Object.defineProperty(e,"__esModule",{value:!0});var o=n(19),s=r(o),a=n(41),u=r(a);window.Rescope=s.default,window.StoreContext=u.default,window.NewsListComp=i,e.default=i,t.exports=e.default},119:function(t,e,n){t.exports=n.p+"example/vanilla/index.html"}});
//# sourceMappingURL=NewsListComp.js.map