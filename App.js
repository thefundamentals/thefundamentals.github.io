webpackJsonp([1],{0:function(t,e,n){(function(t){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(){f["default"].render(t.createElement(p.Provider,{store:d["default"]},t.createElement(y,null)),document.getElementById("application-container"))}var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();n(110);var s=n(19),c=n(60),f=e(c),p=n(116),l=n(94),d=e(l),h=n(96);e(h);n(97);var y=function(e){function n(){return r(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,e),a(n,[{key:"render",value:function(){return t.createElement("div",{role:"main"},t.createElement("h1",null,"The Fundamentals"),"Official webpage. Coming soon.")}}]),n}(s.Component);d["default"].subscribe(u),u()}).call(e,n(19))},61:function(t,e,n){"use strict";e.__esModule=!0;var r=n(19);e["default"]=r.PropTypes.shape({subscribe:r.PropTypes.func.isRequired,dispatch:r.PropTypes.func.isRequired,getState:r.PropTypes.func.isRequired})},62:function(t,e){"use strict";function n(t){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(t);try{throw new Error(t)}catch(e){}}e.__esModule=!0,e["default"]=n},89:function(t,e){"use strict";function n(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];if(0===e.length)return function(t){return t};if(1===e.length)return e[0];var r=e[e.length-1],o=e.slice(0,-1);return function(){return o.reduceRight(function(t,e){return e(t)},r.apply(void 0,arguments))}}e.__esModule=!0,e["default"]=n},90:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e,n){function r(){b===v&&(b=v.slice())}function i(){return y}function a(t){if("function"!=typeof t)throw new Error("Expected listener to be a function.");var e=!0;return r(),b.push(t),function(){if(e){e=!1,r();var n=b.indexOf(t);b.splice(n,1)}}}function f(t){if(!(0,u["default"])(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"==typeof t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(P)throw new Error("Reducers may not dispatch actions.");try{P=!0,y=h(y,t)}finally{P=!1}for(var e=v=b,n=0;n<e.length;n++)e[n]();return t}function p(t){if("function"!=typeof t)throw new Error("Expected the nextReducer to be a function.");h=t,f({type:c.INIT})}function l(){var t,e=a;return t={subscribe:function(t){function n(){t.next&&t.next(i())}if("object"!=typeof t)throw new TypeError("Expected the observer to be an object.");n();var r=e(n);return{unsubscribe:r}}},t[s["default"]]=function(){return this},t}var d;if("function"==typeof e&&"undefined"==typeof n&&(n=e,e=void 0),"undefined"!=typeof n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(o)(t,e)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var h=t,y=e,v=[],b=v,P=!1;return f({type:c.INIT}),d={dispatch:f,subscribe:a,getState:i,replaceReducer:p},d[s["default"]]=l,d}e.__esModule=!0,e.ActionTypes=void 0,e["default"]=o;var i=n(93),u=r(i),a=n(193),s=r(a),c=e.ActionTypes={INIT:"@@redux/INIT"}},91:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0,e.compose=e.applyMiddleware=e.bindActionCreators=e.combineReducers=e.createStore=void 0;var o=n(90),i=r(o),u=n(189),a=r(u),s=n(188),c=r(s),f=n(187),p=r(f),l=n(89),d=r(l),h=n(92);r(h);e.createStore=i["default"],e.combineReducers=a["default"],e.bindActionCreators=c["default"],e.applyMiddleware=p["default"],e.compose=d["default"]},92:function(t,e){"use strict";function n(t){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(t);try{throw new Error(t)}catch(e){}}e.__esModule=!0,e["default"]=n},93:function(t,e,n){function r(t){if(!i(t)||l.call(t)!=u)return!1;var e=o(t);if(null===e)return!0;var n=f.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&c.call(n)==p}var o=n(190),i=n(192),u="[object Object]",a=Function.prototype,s=Object.prototype,c=a.toString,f=s.hasOwnProperty,p=c.call(Object),l=s.toString;t.exports=r},94:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(91),i=n(95),u=r(i),a=(0,o.combineReducers)({app:u["default"]});e["default"]=(0,o.createStore)(a)},95:function(t,e){"use strict";function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1];return{loaded:r(t.loaded,e),lang:o(t.lang,e)}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n;var r=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments[1];switch(e.type){case"LOAD_APPLICATION":return!0;default:return t}},o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en",e=arguments[1];switch(e.type){case"CHANGE_LANG":return e.lang;default:return t}}},96:function(t,e){"use strict";function n(t){return Object.keys(t).filter(function(e){return"undefined"!==e&&t[e]}).join(" ")}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n},97:function(t,e){},110:function(t,e,n){t.exports=n.p+"favicon.ico"},111:function(t,e){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,arguments:!0,arity:!0},o="function"==typeof Object.getOwnPropertySymbols;t.exports=function(t,e,i){if("string"!=typeof e){var u=Object.getOwnPropertyNames(e);o&&(u=u.concat(Object.getOwnPropertySymbols(e)));for(var a=0;a<u.length;++a)if(!(n[u[a]]||r[u[a]]||i&&i[u[a]]))try{t[u[a]]=e[u[a]]}catch(s){}}return t}},112:function(t,e,n){"use strict";var r=function(t,e,n,r,o,i,u,a){if(!t){var s;if(void 0===e)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,u,a],f=0;s=new Error(e.replace(/%s/g,function(){return c[f++]})),s.name="Invariant Violation"}throw s.framesToPop=1,s}};t.exports=r},114:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0,e["default"]=void 0;var a=n(19),s=n(61),c=r(s),f=n(62),p=(r(f),function(t){function e(n,r){o(this,e);var u=i(this,t.call(this,n,r));return u.store=n.store,u}return u(e,t),e.prototype.getChildContext=function(){return{store:this.store}},e.prototype.render=function(){var t=this.props.children;return a.Children.only(t)},e}(a.Component));e["default"]=p,p.propTypes={store:c["default"].isRequired,children:a.PropTypes.element.isRequired},p.childContextTypes={store:c["default"].isRequired}},115:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){return t.displayName||t.name||"Component"}function s(t,e){try{return t.apply(e)}catch(n){return E.value=n,E}}function c(t,e,n){var r=arguments.length<=3||void 0===arguments[3]?{}:arguments[3],c=Boolean(t),l=t||S,h=void 0;h="function"==typeof e?e:e?(0,b["default"])(e):j;var v=n||M,P=r.pure,w=void 0===P||P,g=r.withRef,O=void 0!==g&&g,C=w&&v!==M,x=T++;return function(t){function e(t,e,n){var r=v(t,e,n);return r}var n="Connect("+a(t)+")",r=function(r){function a(t,e){o(this,a);var u=i(this,r.call(this,t,e));u.version=x,u.store=t.store||e.store,(0,_["default"])(u.store,'Could not find "store" in either the context or '+('props of "'+n+'". ')+"Either wrap the root component in a <Provider>, "+('or explicitly pass "store" as a prop to "'+n+'".'));var s=u.store.getState();return u.state={storeState:s},u.clearCache(),u}return u(a,r),a.prototype.shouldComponentUpdate=function(){return!w||this.haveOwnPropsChanged||this.hasStoreStateChanged},a.prototype.computeStateProps=function(t,e){if(!this.finalMapStateToProps)return this.configureFinalMapState(t,e);var n=t.getState(),r=this.doStatePropsDependOnOwnProps?this.finalMapStateToProps(n,e):this.finalMapStateToProps(n);return r},a.prototype.configureFinalMapState=function(t,e){var n=l(t.getState(),e),r="function"==typeof n;return this.finalMapStateToProps=r?n:l,this.doStatePropsDependOnOwnProps=1!==this.finalMapStateToProps.length,r?this.computeStateProps(t,e):n},a.prototype.computeDispatchProps=function(t,e){if(!this.finalMapDispatchToProps)return this.configureFinalMapDispatch(t,e);var n=t.dispatch,r=this.doDispatchPropsDependOnOwnProps?this.finalMapDispatchToProps(n,e):this.finalMapDispatchToProps(n);return r},a.prototype.configureFinalMapDispatch=function(t,e){var n=h(t.dispatch,e),r="function"==typeof n;return this.finalMapDispatchToProps=r?n:h,this.doDispatchPropsDependOnOwnProps=1!==this.finalMapDispatchToProps.length,r?this.computeDispatchProps(t,e):n},a.prototype.updateStatePropsIfNeeded=function(){var t=this.computeStateProps(this.store,this.props);return(!this.stateProps||!(0,y["default"])(t,this.stateProps))&&(this.stateProps=t,!0)},a.prototype.updateDispatchPropsIfNeeded=function(){var t=this.computeDispatchProps(this.store,this.props);return(!this.dispatchProps||!(0,y["default"])(t,this.dispatchProps))&&(this.dispatchProps=t,!0)},a.prototype.updateMergedPropsIfNeeded=function(){var t=e(this.stateProps,this.dispatchProps,this.props);return!(this.mergedProps&&C&&(0,y["default"])(t,this.mergedProps))&&(this.mergedProps=t,!0)},a.prototype.isSubscribed=function(){return"function"==typeof this.unsubscribe},a.prototype.trySubscribe=function(){c&&!this.unsubscribe&&(this.unsubscribe=this.store.subscribe(this.handleChange.bind(this)),this.handleChange())},a.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null)},a.prototype.componentDidMount=function(){this.trySubscribe()},a.prototype.componentWillReceiveProps=function(t){w&&(0,y["default"])(t,this.props)||(this.haveOwnPropsChanged=!0)},a.prototype.componentWillUnmount=function(){this.tryUnsubscribe(),this.clearCache()},a.prototype.clearCache=function(){this.dispatchProps=null,this.stateProps=null,this.mergedProps=null,this.haveOwnPropsChanged=!0,this.hasStoreStateChanged=!0,this.haveStatePropsBeenPrecalculated=!1,this.statePropsPrecalculationError=null,this.renderedElement=null,this.finalMapDispatchToProps=null,this.finalMapStateToProps=null},a.prototype.handleChange=function(){if(this.unsubscribe){var t=this.store.getState(),e=this.state.storeState;if(!w||e!==t){if(w&&!this.doStatePropsDependOnOwnProps){var n=s(this.updateStatePropsIfNeeded,this);if(!n)return;n===E&&(this.statePropsPrecalculationError=E.value),this.haveStatePropsBeenPrecalculated=!0}this.hasStoreStateChanged=!0,this.setState({storeState:t})}}},a.prototype.getWrappedInstance=function(){return(0,_["default"])(O,"To access the wrapped instance, you need to specify { withRef: true } as the fourth argument of the connect() call."),this.refs.wrappedInstance},a.prototype.render=function(){var e=this.haveOwnPropsChanged,n=this.hasStoreStateChanged,r=this.haveStatePropsBeenPrecalculated,o=this.statePropsPrecalculationError,i=this.renderedElement;if(this.haveOwnPropsChanged=!1,this.hasStoreStateChanged=!1,this.haveStatePropsBeenPrecalculated=!1,this.statePropsPrecalculationError=null,o)throw o;var u=!0,a=!0;w&&i&&(u=n||e&&this.doStatePropsDependOnOwnProps,a=e&&this.doDispatchPropsDependOnOwnProps);var s=!1,c=!1;r?s=!0:u&&(s=this.updateStatePropsIfNeeded()),a&&(c=this.updateDispatchPropsIfNeeded());var l=!0;return l=!!(s||c||e)&&this.updateMergedPropsIfNeeded(),!l&&i?i:(O?this.renderedElement=(0,p.createElement)(t,f({},this.mergedProps,{ref:"wrappedInstance"})):this.renderedElement=(0,p.createElement)(t,this.mergedProps),this.renderedElement)},a}(p.Component);return r.displayName=n,r.WrappedComponent=t,r.contextTypes={store:d["default"]},r.propTypes={store:d["default"]},(0,m["default"])(r,t)}}var f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.__esModule=!0,e["default"]=c;var p=n(19),l=n(61),d=r(l),h=n(117),y=r(h),v=n(118),b=r(v),P=n(62),w=(r(P),n(122)),g=(r(w),n(111)),m=r(g),O=n(112),_=r(O),S=function(t){return{}},j=function(t){return{dispatch:t}},M=function(t,e,n){return f({},n,t,e)},E={value:null},T=0},116:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0,e.connect=e.Provider=void 0;var o=n(114),i=r(o),u=n(115),a=r(u);e.Provider=i["default"],e.connect=a["default"]},117:function(t,e){"use strict";function n(t,e){if(t===e)return!0;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(var o=Object.prototype.hasOwnProperty,i=0;i<n.length;i++)if(!o.call(e,n[i])||t[n[i]]!==e[n[i]])return!1;return!0}e.__esModule=!0,e["default"]=n},118:function(t,e,n){"use strict";function r(t){return function(e){return(0,o.bindActionCreators)(t,e)}}e.__esModule=!0,e["default"]=r;var o=n(91)},119:function(t,e,n){var r=n(120),o=r(Object.getPrototypeOf,Object);t.exports=o},120:function(t,e){function n(t,e){return function(n){return t(e(n))}}t.exports=n},121:function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n},122:function(t,e,n){function r(t){if(!i(t)||l.call(t)!=u)return!1;var e=o(t);if(null===e)return!0;var n=f.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&c.call(n)==p}var o=n(119),i=n(121),u="[object Object]",a=Function.prototype,s=Object.prototype,c=a.toString,f=s.hasOwnProperty,p=c.call(Object),l=s.toString;t.exports=r},187:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return function(n,r,o){var u=t(n,r,o),s=u.dispatch,c=[],f={getState:u.getState,dispatch:function(t){return s(t)}};return c=e.map(function(t){return t(f)}),s=a["default"].apply(void 0,c)(u.dispatch),i({},u,{dispatch:s})}}}e.__esModule=!0;var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e["default"]=o;var u=n(89),a=r(u)},188:function(t,e){"use strict";function n(t,e){return function(){return e(t.apply(void 0,arguments))}}function r(t,e){if("function"==typeof t)return n(t,e);if("object"!=typeof t||null===t)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===t?"null":typeof t)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var r=Object.keys(t),o={},i=0;i<r.length;i++){var u=r[i],a=t[u];"function"==typeof a&&(o[u]=n(a,e))}return o}e.__esModule=!0,e["default"]=r},189:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){var n=e&&e.type,r=n&&'"'+n.toString()+'"'||"an action";return"Given action "+r+', reducer "'+t+'" returned undefined. To ignore an action, you must explicitly return the previous state.'}function i(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:a.ActionTypes.INIT});if("undefined"==typeof r)throw new Error('Reducer "'+e+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');var o="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if("undefined"==typeof n(void 0,{type:o}))throw new Error('Reducer "'+e+'" returned undefined when probed with a random type. '+("Don't try to handle "+a.ActionTypes.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")})}function u(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var u=e[r];"function"==typeof t[u]&&(n[u]=t[u])}var a,s=Object.keys(n);try{i(n)}catch(c){a=c}return function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=arguments[1];if(a)throw a;for(var r=!1,i={},u=0;u<s.length;u++){var c=s[u],f=n[c],p=t[c],l=f(p,e);if("undefined"==typeof l){var d=o(c,e);throw new Error(d)}i[c]=l,r=r||l!==p}return r?i:t}}e.__esModule=!0,e["default"]=u;var a=n(90),s=n(93),c=(r(s),n(92));r(c)},190:function(t,e,n){var r=n(191),o=r(Object.getPrototypeOf,Object);t.exports=o},191:function(t,e){function n(t,e){return function(n){return t(e(n))}}t.exports=n},192:function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n},193:function(t,e,n){t.exports=n(194)},194:function(t,e,n){(function(t){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(195),i=r(o),u=void 0;"undefined"!=typeof t?u=t:"undefined"!=typeof window&&(u=window);var a=(0,i["default"])(u);e["default"]=a}).call(e,function(){return this}())},195:function(t,e){"use strict";function n(t){var e,n=t.Symbol;return"function"==typeof n?n.observable?e=n.observable:(e=n("observable"),n.observable=e):e="@@observable",e}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n}});
//# sourceMappingURL=App.js.map?e9bc3b68c89ce2af188e