(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{317:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},318:function(e,t,n){"use strict";var r=n(4),a=n.n(r),s=n(319),o=n.n(s),i=n(3),c=n.n(i),l=n(5),u=n.n(l),h=n(6),m=n.n(h),f=n(7),p=n.n(f),d=n(2),v=n.n(d),g=n(8),y=n.n(g),b=n(0),E=n.n(b);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var O=function(e){function t(e){var n;return c()(this,t),(n=m()(this,p()(t).call(this,e))).state={elementStyles:[]},window.stylesModule=v()(n),window.stylesModuleResolve(v()(n)),n}return y()(t,e),u()(t,[{key:"addElementStyles",value:function(e,t){if(t){var n=!1,r=o()(this.state.elementStyles);r.forEach((function(r){r.elementId===e&&(n=!0,r.styles=t)})),n||r.push({elementId:e,styles:t}),this.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},this.state,{elementStyles:r}))}}},{key:"render",value:function(){return E.a.createElement("div",{className:"styles-container"},this.state.elementStyles.map((function(e){return E.a.createElement("style",{"data-styles-id":e.elementId,key:e.elementId},e.styles)})))}}]),t}(b.Component);t.a=O},319:function(e,t,n){var r=n(320),a=n(321),s=n(322),o=n(323);e.exports=function(e){return r(e)||a(e)||s(e)||o()}},320:function(e,t,n){var r=n(317);e.exports=function(e){if(Array.isArray(e))return r(e)}},321:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},322:function(e,t,n){var r=n(317);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},323:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},325:function(e,t,n){e.exports=n(326)},326:function(e,t,n){var r=function(e){"use strict";var t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",s=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag";function i(e,t,n,r){var a=t&&t.prototype instanceof u?t:u,s=Object.create(a.prototype),o=new O(r||[]);return s._invoke=function(e,t,n){var r="suspendedStart";return function(a,s){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw s;return k()}for(n.method=a,n.arg=s;;){var o=n.delegate;if(o){var i=b(o,n);if(i){if(i===l)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=c(e,t,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(e,n,o),s}function c(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=i;var l={};function u(){}function h(){}function m(){}var f={};f[a]=function(){return this};var p=Object.getPrototypeOf,d=p&&p(p(j([])));d&&d!==t&&n.call(d,a)&&(f=d);var v=m.prototype=u.prototype=Object.create(f);function g(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function y(e,t){var r;this._invoke=function(a,s){function o(){return new t((function(r,o){!function r(a,s,o,i){var l=c(e[a],e,s);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?t.resolve(h.__await).then((function(e){r("next",e,o,i)}),(function(e){r("throw",e,o,i)})):t.resolve(h).then((function(e){u.value=e,o(u)}),(function(e){return r("throw",e,o,i)}))}i(l.arg)}(a,s,r,o)}))}return r=r?r.then(o,o):o()}}function b(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=c(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,l;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,s=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return s.next=s}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=v.constructor=m,m.constructor=h,m[o]=h.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,o in e||(e[o]="GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},g(y.prototype),y.prototype[s]=function(){return this},e.AsyncIterator=y,e.async=function(t,n,r,a,s){void 0===s&&(s=Promise);var o=new y(i(t,n,r,a),s);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},g(v),v[o]="Generator",v[a]=function(){return this},v.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return o.type="throw",o.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var s=this.tryEntries[a],o=s.completion;if("root"===s.tryLoc)return r("end");if(s.tryLoc<=this.prev){var i=n.call(s,"catchLoc"),c=n.call(s,"finallyLoc");if(i&&c){if(this.prev<s.catchLoc)return r(s.catchLoc,!0);if(this.prev<s.finallyLoc)return r(s.finallyLoc)}else if(i){if(this.prev<s.catchLoc)return r(s.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return r(s.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var s=a;break}}s&&("break"===e||"continue"===e)&&s.tryLoc<=t&&t<=s.finallyLoc&&(s=null);var o=s?s.completion:{};return o.type=e,o.arg=t,s?(this.method="next",this.next=s.finallyLoc,l):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),w(n),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;w(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},e}(e.exports);try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}},327:function(e,t){function n(e,t,n,r,a,s,o){try{var i=e[s](o),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,a)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(a,s){var o=e.apply(t,r);function i(e){n(o,a,s,i,c,"next",e)}function c(e){n(o,a,s,i,c,"throw",e)}i(void 0)}))}}},328:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n.n(r),s=n(3),o=n.n(s),i=n(5),c=n.n(i),l=n(6),u=n.n(l),h=n(7),m=n.n(h),f=n(2),p=n.n(f),d=n(8),v=n.n(d),g=n(0),y=n.n(g),b=(n(128),function e(t){o()(this,e),this.modules=t}),E=n(13),w=function(e){function t(){return o()(this,t),u()(this,m()(t).apply(this,arguments))}return v()(t,e),c()(t,[{key:"parseData",value:function(e,t){var n=[],r=new(window.elementsManager.getElementClass(e.name));if(e.children&&e.children.length){var a=!0,s=!1,o=void 0;try{for(var i,c=e.children[Symbol.iterator]();!(a=(i=c.next()).done);a=!0){var l=i.value;n.push(this.parseData(l,r))}}catch(e){s=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(s)throw o}}}return r.id=e.id,r.children=n,r.settings=0===e.settings.length?{}:e.settings,t&&(r.parent=t),r}},{key:"duplicateElement",value:function(e,t){var n=this._duplicateElement(e);t.insertNewChildAfter(e.getId(),n);var r=Object(E.b)().modules.templateDataStorage;return r.elementsIds=_.union(r.elementsIds,n.getIds()),n}},{key:"_duplicateElement",value:function(e){var t=this,n=new(elementsManager.getElementClass(e.getName())),r=[];return e.children.map((function(e){var a=t._duplicateElement(e);a.setParent(n),r.push(a)})),n.component=new n.setChildren(r),n.settings=_.cloneDeep(e.settings),n.children=r,n}}]),t}(b),O=function(){function e(t){if(o()(this,e),this.route=t.route,!this.route)throw"Нужен URL"}return c()(e,[{key:"get",value:function(e){if(!e)throw'Get only by "id"';var t=this.route+"/"+e;return fetch(t,{method:"get",headers:{"Content-Type":"application/json"}}).then((function(e){return!1===e.ok?Promise.reject(e.text(),e.status):e.json()}))}},{key:"getAll",value:function(){var e=this.route;return fetch(e,{method:"get",headers:{"Content-Type":"application/json"}}).then((function(e){return!1===e.ok?Promise.reject(e.text(),e.status):e.json()}))}},{key:"post",value:function(e,t){e._token=_token,t=t||{"Content-Type":"application/json"};var n={method:"POST",body:JSON.stringify(e),headers:t};return fetch(this.route,n).then((function(e){return!1===e.ok?Promise.reject(e.text(),e.status):e.json()}))}},{key:"postFiles",value:function(e,t){String(Math.random()).slice(2);t=t||"image";var n={"X-CSRF-TOKEN":_token},r=new FormData;console.log(e);for(var a=0;a<e.length;a++)e[a].size>10485760||0!==e[a].type.indexOf(t)?console.log(e[a]):r.append("files[".concat(a,"]"),e[a]);var s={method:"POST",body:r,headers:n};return fetch(this.route,s).then((function(e){return!1===e.ok?Promise.reject(e.text(),e.status):e.json()}))}},{key:"put",value:function(e,t){t._token=_token;var n={method:"put",body:JSON.stringify(t),headers:{"X-CSRF-TOKEN":_token,"Content-Type":"application/json"}},r=this.route+"/"+e;return fetch(r,n).then((function(e){return!1===e.ok?Promise.reject(e.text(),e.status):e.json()}))}},{key:"delete",value:function(e){var t={method:"delete",headers:{"X-CSRF-TOKEN":_token,"Content-Type":"application/json"}},n=this.route+"/"+e;return fetch(n,t).then((function(e){return!1===e.ok?Promise.reject(e.text(),e.status):e.json()}))}},{key:"getOptions",value:function(){var e=this.route+"/options";return fetch(e,{method:"get",headers:{"Content-Type":"application/json"}}).then((function(e){return!1===e.ok?Promise.reject(e.text(),e.status):e.json()}))}}]),e}(),j=n(54),k=n(19),P=n(32),S=function(e){function t(e){var n;return o()(this,t),(n=u()(this,m()(t).call(this,e))).resource=new O({route:"/admin/ajax/templates"}),n}return v()(t,e),c()(t,[{key:"load",value:function(){var e=this;if(this.template_id=Object(E.e)(),k.a.dispatch(Object(P.b)(E.a.TEMPLATE_SAVING)),this.template_id)this.resource.get(this.template_id).then((function(t){var n=JSON.parse(t.data),r=e.modules.elementsFactory.parseData(n),a=Object(E.b)().modules.templateDataStorage;a.replaceAll(r),a.setTitle(t.title),a.setName(t.name),Object(E.b)().endLoading(),k.a.dispatch(Object(P.b)(E.a.TEMPLATE_UPDATED))})).catch((function(e){console.error(e),k.a.dispatch(Object(P.b)(E.a.TEMPLATE_UPDATED))}))}},{key:"saveTemplate",value:function(){k.a.dispatch(Object(P.b)(E.a.TEMPLATE_SAVING));var e=Object(E.b)().modules.templateDataStorage.getTemplateDataForSave();this.resource.put(this.template_id,e).then((function(e){k.a.dispatch(Object(P.b)(E.a.TEMPLATE_UPDATED))})).catch((function(e){console.error(e),k.a.dispatch(Object(P.b)(E.a.TEMPLATE_UPDATED))}))}}]),t}(b),N=function e(){o()(this,e)},T=function e(){o()(this,e)},A=n(57),x=n(16),C=n(56),D=n(35),M=function(e){function t(e){var n;return o()(this,t),(n=u()(this,m()(t).call(this,e))).elementsIds=[],n}return v()(t,e),c()(t,[{key:"replaceAll",value:function(e){if(!e instanceof j.a)throw"Expect Root Element as root element;)";this.rootElement=e,this.elementsIds=e.getIds(),this.setCurrentRootElement()}},{key:"getTemplateData",value:function(){return this.rootElement.toObject()}},{key:"getTemplateDataForSave",value:function(){var e={};return e.data=this.getTemplateData(),e.title=this.title||"testtitle",e.name=this.name||"testname",console.log(this),e}},{key:"setTitle",value:function(e){console.log(e),this.title=e,console.log(this)}},{key:"setName",value:function(e){console.log(e),this.name=e,console.log(this)}},{key:"setCurrentRootElement",value:function(){return this.currentElement=this.rootElement,k.a.dispatch(Object(A.b)(this.currentElement)),this.currentElement}},{key:"setCurrentElement",value:function(e){if(!e instanceof x.a)throw"Only Base Element Can Be Set as Default";this.currentElement=e,k.a.dispatch(Object(A.b)(e))}},{key:"getCurrentElement",value:function(){return this.currentElement?this.currentElement:this.setCurrentRootElement()}},{key:"getRootElement",value:function(){return this.rootElement}},{key:"addWidgetInSection",value:function(e){var t=new C.a;this.elementsIds.push(t.getId());var n=new D.a;this.elementsIds.push(n.getId());var r=new(window.elementsManager.getElementClass(e));this.elementsIds.push(r.getId()),n.appendWidget(r),t.appendColumn(n),this.rootElement.appendNewSection(t),this.setCurrentElement(r),k.a.dispatch(Object(P.b)(E.a.TEMPLATE_NEED_UPDATE)),Object(E.b)().showSettingsPanel()}}]),t}(b),L=function(){function e(t){o()(this,e),this.elementsFactory=new w(this),this.saveImportModule=new S(this),this.settingsChangeModule=new N(this),this.templateSettingsChangeModule=new T(this),this.templateDataStorage=new M(this)}return c()(e,[{key:"loaded",value:function(){this.saveImportModule.load()}}]),e}(),z=n(26),I=function(e){function t(e){var n;return o()(this,t),(n=u()(this,m()(t).call(this,e))).state={element:n.props.element},n.onDragStart=n.onDragStart.bind(p()(n)),n}return v()(t,e),c()(t,[{key:"onDragStart",value:function(e){k.a.dispatch(Object(z.c)(null)),e.dataTransfer.effectAllowed="copy",e.dataTransfer.setData("text/plain",this.state.element.getName())}},{key:"render",value:function(){if(!this.state.element instanceof x.a)throw"Widget Component must has Element in props";return(y.a.createElement("div",{className:"widget-icon",draggable:"true",onDragStart:this.onDragStart},y.a.createElement(this.state.element.getIconComponent(),{height:35}),y.a.createElement("div",{className:"widget-icon__title"},this.state.element.getTitle())))}}]),t}(g.Component),R=function(e){function t(e){var n;return o()(this,t),(n=u()(this,m()(t).call(this,e))).state={widgets:window.elementsManager.getWidgetsList()},n}return v()(t,e),c()(t,[{key:"render",value:function(){return y.a.createElement("div",{className:"widget-panel"},this.state.widgets.map((function(e){return y.a.createElement(I,{element:e,key:e.getName()})})))}}]),t}(g.Component),F=n(12),H=n(121),B=n(9),G=n.n(B),V=n(10),U=n.n(V),W=function(e){e.styles;var t=U()(e,["styles"]);return(y.a.createElement("svg",G()({width:"20",height:"19",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),y.a.createElement("path",{d:"M5.6 15.883c0-1.136-.835-2.08-1.929-2.276V1.317A.419.419 0 003.25.9a.419.419 0 00-.421.417v12.29C1.735 13.803.9 14.747.9 15.883c0 1.279 1.055 2.317 2.35 2.317 1.295 0 2.35-1.038 2.35-2.317zm-2.35 1.484a1.497 1.497 0 01-1.507-1.484c0-.816.675-1.483 1.507-1.483.832 0 1.507.667 1.507 1.483 0 .817-.675 1.484-1.507 1.484zM11.9 9.484a2.376 2.376 0 00-1.873-2.33V1.317A.414.414 0 009.615.9a.414.414 0 00-.413.417v5.812A2.375 2.375 0 007.2 9.484c0 1.193.87 2.185 2.002 2.356v5.943c0 .23.184.417.413.417a.414.414 0 00.412-.417v-5.968a2.376 2.376 0 001.873-2.33zm-2.35 1.55a1.54 1.54 0 01-1.526-1.55A1.54 1.54 0 019.55 7.936c.84 0 1.526.693 1.526 1.548a1.54 1.54 0 01-1.526 1.55zM19.1 3.217C19.1 1.938 18.044.9 16.75.9S14.4 1.938 14.4 3.217c0 1.136.835 2.08 1.929 2.276v12.29c0 .232.19.417.421.417a.419.419 0 00.421-.417V5.493c1.094-.196 1.929-1.14 1.929-2.276zM16.75 4.7a1.497 1.497 0 01-1.507-1.483c0-.817.675-1.484 1.507-1.484.832 0 1.507.667 1.507 1.484 0 .816-.675 1.483-1.507 1.483z",fill:"#343B4C",stroke:"#343B4C",strokeWidth:".2"})))},J=n(122),K=n(1),X=function(e){e.styles;var t=U()(e,["styles"]);return(y.a.createElement("svg",G()({width:"10",height:"7",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),y.a.createElement("path",{d:"M1 6l3.5-4 4 4",stroke:"#343B4C",strokeWidth:"1.5"})))},Y=n(129);function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var q=function(e){function t(e){var n;return o()(this,t),(n=u()(this,m()(t).call(this,e))).state={open:e.open},n.toggle=n.toggle.bind(p()(n)),n}return v()(t,e),c()(t,[{key:"toggle",value:function(){this.setState({open:!this.state.open})}},{key:"render",value:function(){var e=this.props.controls||[],t="settings-section "+(this.state.open?"open":"");return y.a.createElement("div",{className:t},y.a.createElement("div",{className:"settings-section__title d-flex ",onClick:this.toggle},y.a.createElement("div",{className:"settings-section__icon d-flex "},y.a.createElement(X,null)),y.a.createElement("div",{className:"settings-section__label"},this.props.label)),y.a.createElement("div",{className:"controllers-wrapper"},e.map((function(e){var t=window.controllersManager.getController(e.type);return y.a.createElement(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{key:e.controlId,controller:new Y.a(e)}))}))))}}]),t}(g.Component);function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var Z=function(e){function t(){return o()(this,t),u()(this,m()(t).apply(this,arguments))}return v()(t,e),c()(t,[{key:"render",value:function(){var e=this.props.sections||[];return(y.a.createElement("div",{className:"settings-controllers"},e.map((function(e,t){return y.a.createElement(q,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{key:e.sectionId,open:0===t}))}))))}}]),t}(g.Component);function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var te=function(e){function t(e){var n;return o()(this,t),(n=u()(this,m()(t).call(this,e))).state={activeTab:"content"},n}return v()(t,e),c()(t,[{key:"setActiveTab",value:function(e){this.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},this.state,{activeTab:e}))}},{key:"render",value:function(){var e=this,t=window.controllersManager,n=[];this.props.currentElement.getName&&(n=t.getControls(this.props.currentElement.getName())[this.state.activeTab]||[]);var r="panel-tab d-flex "+(this.state.activeTab===K.s?"active":""),a="panel-tab d-flex "+(this.state.activeTab===K.t?"active":""),s="panel-tab d-flex "+(this.state.activeTab===K.r?"active":"");return y.a.createElement("div",{className:"panel settings-panel d-flex"},y.a.createElement("div",{className:"panel-tabs d-flex"},y.a.createElement("button",{className:r,onClick:function(){return e.setActiveTab(K.s)}},y.a.createElement("span",{className:"panel-tab__icon"},y.a.createElement(H.a,null)),y.a.createElement("span",{className:"panel-tab__text"},"Content")),y.a.createElement("button",{className:a,onClick:function(){return e.setActiveTab(K.t)}},y.a.createElement("span",{className:"panel-tab__icon"},y.a.createElement(W,null)),y.a.createElement("span",{className:"panel-tab__text"},"Style")),y.a.createElement("button",{className:s,onClick:function(){return e.setActiveTab(K.r)}},y.a.createElement("span",{className:"panel-tab__icon"},y.a.createElement(J.a,null)),y.a.createElement("span",{className:"panel-tab__text"},"Advanced"))),y.a.createElement(Z,{sections:n}))}}]),t}(g.Component);var ne=Object(F.b)((function(e){return{currentElement:e.currentElement.currentElement}}))(te),re=function(e){function t(e){var n;return o()(this,t),(n=u()(this,m()(t).call(this,e))).state={},n}return v()(t,e),c()(t,[{key:"render",value:function(){return y.a.createElement("div",{className:"editor-window"},y.a.createElement("iframe",{src:"/admin/editor-content"}))}}]),t}(g.Component),ae=function(e){e.styles;var t=U()(e,["styles"]);return(y.a.createElement("svg",G()({width:"17",height:"15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),y.a.createElement("path",{d:"M15 0H1.364C.612 0 0 .612 0 1.364v9.545c0 .752.612 1.364 1.364 1.364h4.774c-.014.544-.118 1.414-.508 1.824a.67.67 0 01-.516.221.34.34 0 100 .682h6.136a.34.34 0 100-.682.668.668 0 01-.515-.22c-.39-.409-.494-1.28-.509-1.825H15c.752 0 1.364-.612 1.364-1.364V1.364C16.364.612 15.752 0 15 0zM8.182 11.593a.685.685 0 010-1.368.685.685 0 010 1.368zM1.364 9.545V1.364H15v8.181H1.365z",fill:"#8E94AA"})))},se=function(e){e.styles;var t=U()(e,["styles"]);return(y.a.createElement("svg",G()({width:"97",height:"35",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),y.a.createElement("path",{d:"M20.245 8.309l-3.747 9.57c0 2.31.476 4.088 1.443 5.31.318.41.808.796 1.483 1.154l-1.086 3.398c-.966-.358-1.8-.982-2.516-1.885a11.593 11.593 0 01-1.257-2.057c-.848 1.42-1.801 2.402-2.887 2.92-.82.411-1.827.61-3.032.61-2.423 0-4.449-.862-6.05-2.601C.86 22.883 0 20.388 0 17.228c0-1.101.066-2.097.199-2.96.132-.862.37-1.685.701-2.455.702-1.566 1.642-2.76 2.847-3.584 1.205-.823 2.595-1.234 4.184-1.234 1.47 0 2.74.292 3.813.863 1.51.796 2.622 2.097 3.31 3.902l2.212-4.858 2.979 1.407zm-7.163 9.53c.026-.093.04-.252.04-.464v-.293a.602.602 0 00-.04-.212c0-1.686-.477-3.185-1.417-4.5-.953-1.313-2-1.964-3.151-1.964-1.364 0-2.476.584-3.31 1.765-.914 1.275-1.364 3.053-1.364 5.35 0 2.097.463 3.703 1.403 4.804.834.983 1.894 1.487 3.165 1.487.887 0 1.615-.265 2.158-.796.9-.903 1.748-2.615 2.516-5.177zM38.874 27.05h-3.92l-4.077-11.162-.967-3.066-1.006 3.146-3.959 11.083h-4.184l7.203-19.14a72.897 72.897 0 01-.755-2.018c-.172-.451-.304-.756-.397-.902-.503-.797-1.31-1.195-2.41-1.195-.384 0-1.125.12-2.237.358l.437-3.69a13.272 13.272 0 011.35-.358A5.454 5.454 0 0124.985 0c2.065 0 3.68 1.075 4.833 3.212.437.743 1.032 2.177 1.8 4.3l7.256 19.539zM55.054 10.804h-5.587v10.579c0 .77.026 1.261.066 1.487.053.212.185.411.437.584.238.12.556.185.94.185.291 0 .847-.066 1.695-.185l.582 3.504c-.437.093-1.033.186-1.8.252-.769.066-1.298.106-1.59.106-1.204 0-2.144-.186-2.833-.557-.688-.372-1.178-.916-1.496-1.646-.146-.359-.252-.836-.318-1.447-.066-.597-.106-1.42-.106-2.456V10.804l-2.595-.04c-.556 0-1.072.253-1.55.757-.145.173-.33.438-.582.796l-2.515-2.561c.476-.65.887-1.128 1.231-1.447 1.06-.969 2.198-1.447 3.43-1.447l12.604.04v3.902h-.013zM73.578 11.56c.648 1.567.966 3.372.966 5.416 0 2.124-.344 3.956-1.046 5.495-.702 1.54-1.721 2.761-3.059 3.65-1.35.89-2.793 1.341-4.356 1.341-.94 0-1.681-.093-2.237-.292-.768-.265-1.55-.783-2.344-1.553v9.026h-4.356l.04-18.53c0-3.73 1.258-6.41 3.786-8.016 1.563-.983 3.337-1.487 5.336-1.487 1.655 0 3.112.425 4.383 1.288 1.245.849 2.211 2.07 2.886 3.663zm-4.357-.079c-.9-1.101-1.972-1.659-3.244-1.659-1.244 0-2.356.584-3.31 1.765-.45.585-.807 1.394-1.059 2.443a14.626 14.626 0 00-.384 3.41c0 2.31.45 4.01 1.364 5.098.913 1.088 2 1.62 3.244 1.62 1.297 0 2.41-.558 3.35-1.66.45-.584.807-1.354 1.059-2.35.251-.982.384-2.07.384-3.251 0-1.182-.12-2.23-.344-3.146-.226-.903-.583-1.66-1.06-2.27zM97 10.725l-2.158-.04-.04 16.366h-4.078V10.698h-6.7v16.366h-3.998V10.738c-.239 0-.53.093-.887.265-.345.186-.755.505-1.205.956l-2.662-2.668c.98-.969 1.854-1.593 2.596-1.898.74-.305 1.588-.451 2.515-.451H97v3.783z",fill:"#fff"})))},oe=function(e){e.styles;var t=U()(e,["styles"]);return(y.a.createElement("svg",G()({width:"15",height:"15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),y.a.createElement("path",{d:"M14.437 4.1L7.218 0 0 4.1l7.218 4.124 7.219-4.125z",fill:"#fff"}),y.a.createElement("path",{d:"M7.218 8.933l-4.867-2.78L0 7.487l7.218 4.124 7.219-4.124-2.351-1.336-4.868 2.781z",fill:"#fff"}),y.a.createElement("path",{d:"M7.218 12.322L2.351 9.54 0 10.876 7.218 15l7.219-4.124-2.351-1.335-4.868 2.78z",fill:"#fff"})))},ie=n(127),ce=function(e){e.styles;var t=U()(e,["styles"]);return(y.a.createElement("svg",G()({width:"17",height:"10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),y.a.createElement("path",{d:"M8.388 0C5.183 0 2.276 1.754.131 4.602a.664.664 0 000 .793C2.276 8.246 5.183 10 8.388 10s6.112-1.754 8.257-4.602a.664.664 0 000-.793C14.5 1.754 11.593 0 8.388 0zm.23 8.52a3.53 3.53 0 01-3.751-3.75 3.536 3.536 0 013.291-3.29 3.53 3.53 0 013.75 3.75 3.548 3.548 0 01-3.29 3.29zM8.51 6.895a1.897 1.897 0 01-2.017-2.018 1.908 1.908 0 011.774-1.774 1.897 1.897 0 012.018 2.018 1.908 1.908 0 01-1.774 1.774z",fill:"#8E94AA"})))},le=n(82),ue=function(e){e.styles;var t=U()(e,["styles"]);return(y.a.createElement("svg",G()({width:"13",height:"13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),y.a.createElement("path",{fill:"#fff",d:"M0 10h3v3H0zM5 10h3v3H5zM10 10h3v3h-3zM0 0h3v3H0zM5 0h3v3H5zM10 0h3v3h-3zM0 5h3v3H0zM5 5h3v3H5zM10 5h3v3h-3z"})))},he=function(e){e.styles;var t=U()(e,["styles"]);return(y.a.createElement("svg",G()({width:"19",height:"14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),y.a.createElement("path",{fill:"#fff",d:"M0 0h19v2H0zM0 6h19v2H0V6zM0 12h19v2H0z"})))},me=(g.Component,function(e){function t(e){var n;return o()(this,t),(n=u()(this,m()(t).call(this,e))).saveTemplate=n.saveTemplate.bind(p()(n)),n}return v()(t,e),c()(t,[{key:"saveTemplate",value:function(e){Object(E.b)().modules.saveImportModule.saveTemplate()}},{key:"render",value:function(){var e="btn font_montserrat font_500 btn_grey";switch(this.props.templateStatus){case E.a.TEMPLATE_UPDATED:e+=" btn_disabled ";break;case E.a.TEMPLATE_NEED_UPDATE:e+=" btn_active "}return(y.a.createElement("div",{className:"control-group d-flex"},y.a.createElement("button",{className:e,onClick:this.saveTemplate},"UPDATE"),y.a.createElement("button",{className:"btn btn_grey"},y.a.createElement(X,{className:"icon"}))))}}]),t}(g.Component));var fe=Object(F.b)((function(e){return{templateStatus:e.templateStatus.status}}))(me),pe=(n(318),n(325)),de=n.n(pe),ve=n(327),ge=n.n(ve),ye=n(78),be=n(41);function Ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ee(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Oe=function(e){function t(){var e;return o()(this,t),(e=u()(this,m()(t).call(this))).tabClick=e.tabClick.bind(p()(e)),e.toggleBrowser=e.toggleBrowser.bind(p()(e)),e.selectAsset=e.selectAsset.bind(p()(e)),e.chooseAsset=e.chooseAsset.bind(p()(e)),e.state={activeTab:"media",tabs:[{name:"icons",title:"Icons Library"},{name:"media",title:"Media Library"}],assets:e.getAssets("media"),selectedAsset:null,mediaAssets:[]},e.mediaResource=new O({route:"/admin/ajax/media"}),e}var n;return v()(t,e),c()(t,[{key:"componentDidMount",value:(n=ge()(de.a.mark((function e(){var t;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.mediaResource.getAll();case 2:t=e.sent,this.setState((function(e){return"media"===(e=we({},e,{mediaAssets:t})).activeTab&&(e.assets=t),e}));case 4:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"getAssets",value:function(e){switch(e||(e=this.state.activeTab),e){case"icons":return Object(E.f)().getIconsList();case"media":return this.state?this.state.mediaAssets:[]}return[]}},{key:"selectAsset",value:function(e){var t=e.currentTarget.dataset.assetname;this.setState((function(e){return we({},e,{selectedAsset:t})}))}},{key:"tabClick",value:function(e){this.setActiveTab(e.target.dataset.tab)}},{key:"setActiveTab",value:function(e){var t=this;this.setState((function(n){return we({},n,{activeTab:e,assets:t.getAssets(e)})}))}},{key:"toggleBrowser",value:function(){this.setState((function(e){return we({},e,{selectedAsset:null})})),this.props.dispatch(Object(be.d)())}},{key:"chooseAsset",value:function(){var e,t=this;if(this.state.assets.forEach((function(n){n.name===t.state.selectedAsset&&(e=n)})),!e)throw"Asset with name ".concat(this.state.selectedAsset," not found in Assets Browser (").concat(this.state.activeTab,")!");this.props.onChoose(e),this.setState((function(e){return we({},e,{selectedAsset:null})})),this.props.dispatch(Object(be.d)())}},{key:"render",value:function(){var e=this,t="assets-browser";this.props.active&&(t+=" assets-browser_active");var n="btn btn_success";return this.state.selectedAsset||(n+=" btn_disabled"),React.createElement("div",{className:t},React.createElement("div",{className:"assets-browser__bg",onClick:this.toggleBrowser}),React.createElement("div",{className:"assets-browser-content"},React.createElement("div",{className:"assets-browser-top"},React.createElement("div",{className:"caption"},"Append Media"),React.createElement("button",{className:"btn btn_bare assets-browser__close"},React.createElement(ye.a,{className:"icon",onClick:this.toggleBrowser})),React.createElement("div",{className:"assets-browser-nav"},this.state.tabs.map((function(t){var n="assets-browser__tab";return e.state.activeTab===t.name&&(n+=" assets-browser__tab_active"),React.createElement("button",{className:n,onClick:e.tabClick,key:t.name,"data-tab":t.name},t.title)})))),this.state.assets.length?React.createElement("div",{className:"assets-browser-choose-frame"},this.state.assets.map((function(t){var n,r="asset-choose",a={className:"asset-choose__content"};return"icons"===e.state.activeTab&&(n=t.iconComponent,r+=" asset-choose_icon",a.width="20",a.height="20"),"media"===e.state.activeTab&&(n="img",a.src=t.url,r+=" asset-choose_media",t.name=t.filename,t.assetType="media"),e.state.selectedAsset===t.name&&(r+=" asset-choose_selected"),React.createElement("div",{className:r,"data-assetname":t.name,key:t.name,onClick:e.selectAsset},React.createElement(n,a))}))):"",React.createElement("div",{className:"assets-browser-bottom"},React.createElement("button",{className:n,onClick:this.chooseAsset},"Choose"))))}}]),t}(Component);var je,ke=Object(F.b)((function(e){return we({},e.assetsManagerSettings)}))(Oe);function Pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Pe(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}je=function(e){function t(e){var n;return o()(this,t),n=u()(this,m()(t).call(this,e)),window.altrpEditor=p()(n),n.state={activePanel:"settings",templateStatus:E.a.TEMPLATE_UPDATED},n.openPageSettings=n.openPageSettings.bind(p()(n)),n.showSettingsPanel=n.showSettingsPanel.bind(p()(n)),n.showWidgetsPanel=n.showWidgetsPanel.bind(p()(n)),n.onDragEnd=n.onDragEnd.bind(p()(n)),k.a.subscribe(n.templateStatus.bind(p()(n))),n}return v()(t,e),c()(t,[{key:"templateStatus",value:function(){var e=k.a.getState().templateStatus.status;e!==this.state.templateStatus&&this.setState(Se({},this.state,{templateStatus:e}))}},{key:"initModules",value:function(){this.modules=new L(this),this.modules.loaded()}},{key:"showWidgetsPanel",value:function(){this.setState(Se({},this.state,{activePanel:"widgets"}))}},{key:"showSettingsPanel",value:function(){this.setState(Se({},this.state,{activePanel:"settings"}))}},{key:"onDragEnd",value:function(){var e=k.a.getState().elementDrag.element;e&&e.stopDrag&&(console.log("stop"),e.stopDrag()),k.a.dispatch(Object(z.d)())}},{key:"endLoading",value:function(){console.log("editor loaded")}},{key:"componentDidMount",value:function(){this.initModules()}},{key:"openPageSettings",value:function(){this.modules.templateDataStorage.setCurrentRootElement(),this.showSettingsPanel()}},{key:"render",value:function(){var e="",t="editor ";return this.state.templateStatus===E.a.TEMPLATE_SAVING&&(t+=" editor_saving"),k.a.getState().currentElement.currentElement.getType&&"root-element"===k.a.getState().currentElement.currentElement.getType()&&"settings"===this.state.activePanel&&(e=" active"),y.a.createElement(F.a,{store:k.a},y.a.createElement("div",{className:t,onDragEnd:this.onDragEnd},y.a.createElement("div",{className:"left-panel"},y.a.createElement("div",{className:"editor-top-panel"},y.a.createElement("button",{className:"btn btn_hamburger"},y.a.createElement(he,{className:"icon"})),y.a.createElement("div",{className:"logo"},y.a.createElement(se,{viewBox:"0 0 97 35"})),y.a.createElement("button",{className:"btn btn_dots",onClick:this.showWidgetsPanel},y.a.createElement(ue,{className:"icon"}))),y.a.createElement("div",{className:"left-panel-main"},"widgets"===this.state.activePanel&&y.a.createElement(R,null),"settings"===this.state.activePanel&&y.a.createElement(ne,null)),y.a.createElement("div",{className:"editor-bottom-panel d-flex align-content-center justify-center"},y.a.createElement("button",{className:"btn btn_settings"+e,onClick:this.openPageSettings},y.a.createElement(le.a,{className:"icon"})),y.a.createElement("button",{className:"btn "},y.a.createElement(oe,{className:"icon"})),y.a.createElement("button",{className:"btn "},y.a.createElement(ie.a,{className:"icon"})),y.a.createElement("button",{className:"btn "},y.a.createElement(ae,{className:"icon"})),y.a.createElement("button",{className:"btn "},y.a.createElement(ce,{className:"icon"})),y.a.createElement(fe,null))),y.a.createElement("div",{className:"right-panel"},y.a.createElement(re,null))),y.a.createElement(ke,null))}}]),t}(g.Component);t.default=je}}]);
//# sourceMappingURL=1.editor.js.map