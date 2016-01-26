"use strict";define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,r,a,n){var d=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,d=t["default"].Application.extend({modulePrefix:n["default"].modulePrefix,podModulePrefix:n["default"].podModulePrefix,Resolver:r["default"]}),(0,a["default"])(d,n["default"].modulePrefix),e["default"]=d}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,r){var a=r["default"].APP.name,n=r["default"].APP.version;e["default"]=t["default"].extend({version:n,name:a})}),define("dummy/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/controllers/route-with-query-params-reset",["exports","ember"],function(e,t){var r=t["default"].Controller,a=t["default"].set;e["default"]=r.extend({queryParams:["aParam"],actions:{addQueryParam:function(){a(this,"aParam","test")}}})}),define("dummy/controllers/route-without-query-params-reset",["exports","ember"],function(e,t){var r=t["default"].Controller,a=t["default"].set;e["default"]=r.extend({queryParams:["aParam"],actions:{addQueryParam:function(){a(this,"aParam","test")}}})}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,r){e["default"]={name:"App Version",initialize:(0,t["default"])(r["default"].APP.name,r["default"].APP.version)}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,r){function a(){var e=arguments[1]||arguments[0];if(r["default"].exportApplicationGlobal!==!1){var a,n=r["default"].exportApplicationGlobal;a="string"==typeof n?n:t["default"].String.classify(r["default"].modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,r){var a=t["default"].Router.extend({location:r["default"].locationType});a.map(function(){this.route("route-without-query-params-reset"),this.route("route-with-query-params-reset")}),e["default"]=a}),define("dummy/routes/route-with-query-params-reset",["exports","ember","ember-query-params-reset/mixins/query-params-reset-route"],function(e,t,r){var a=t["default"].Route;e["default"]=a.extend(r["default"])}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.12",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createElement("h2");e.setAttribute(r,"id","title");var a=e.createTextNode("Welcome to Ember");e.appendChild(r,a),e.appendChild(t,r);var r=e.createTextNode("\n\n");e.appendChild(t,r);var r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var a=new Array(1);return a[0]=e.createMorphAt(t,2,2,r),a},statements:[["content","outlet",["loc",[null,[3,0],[3,10]]]]],locals:[],templates:[]}}())}),define("dummy/templates/index",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.12",loc:{source:null,start:{line:1,column:0},end:{line:15,column:0}},moduleName:"dummy/templates/index.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createElement("div"),a=e.createTextNode("\n  ");e.appendChild(r,a);var a=e.createComment("");e.appendChild(r,a);var a=e.createTextNode("\n ");e.appendChild(r,a),e.appendChild(t,r);var r=e.createTextNode("\n ");e.appendChild(t,r);var r=e.createElement("div"),a=e.createTextNode("\n  ");e.appendChild(r,a);var a=e.createComment("");e.appendChild(r,a);var a=e.createTextNode("\n ");e.appendChild(r,a),e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var a=new Array(2);return a[0]=e.createMorphAt(e.childAt(t,[0]),1,1),a[1]=e.createMorphAt(e.childAt(t,[2]),1,1),a},statements:[["inline","link-to",["route-without-query-params-reset","route-without-query-params-reset"],["id","route-without-query-params-reset"],["loc",[null,[2,2],[6,4]]]],["inline","link-to",["route-with-query-params-reset","route-with-query-params-reset"],["id","route-with-query-params-reset"],["loc",[null,[9,2],[13,4]]]]],locals:[],templates:[]}}())}),define("dummy/templates/route-with-query-params-reset",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.12",loc:{source:null,start:{line:1,column:0},end:{line:10,column:0}},moduleName:"dummy/templates/route-with-query-params-reset.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createElement("div"),a=e.createTextNode("\n  ");e.appendChild(r,a);var a=e.createElement("button"),n=e.createTextNode("\n    Add a query param\n  ");e.appendChild(a,n),e.appendChild(r,a);var a=e.createTextNode("\n");e.appendChild(r,a),e.appendChild(t,r);var r=e.createTextNode("\n\n");e.appendChild(t,r);var r=e.createElement("div"),a=e.createTextNode("\n  ");e.appendChild(r,a);var a=e.createComment("");e.appendChild(r,a);var a=e.createTextNode("\n");e.appendChild(r,a),e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var a=e.childAt(t,[0,1]),n=new Array(2);return n[0]=e.createElementMorph(a),n[1]=e.createMorphAt(e.childAt(t,[2]),1,1),n},statements:[["element","action",["addQueryParam"],[],["loc",[null,[2,10],[2,36]]]],["inline","link-to",["Back","index"],[],["loc",[null,[8,2],[8,28]]]]],locals:[],templates:[]}}())}),define("dummy/templates/route-without-query-params-reset",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.12",loc:{source:null,start:{line:1,column:0},end:{line:10,column:0}},moduleName:"dummy/templates/route-without-query-params-reset.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createElement("div"),a=e.createTextNode("\n  ");e.appendChild(r,a);var a=e.createElement("button"),n=e.createTextNode("\n    Add a query param\n  ");e.appendChild(a,n),e.appendChild(r,a);var a=e.createTextNode("\n");e.appendChild(r,a),e.appendChild(t,r);var r=e.createTextNode("\n\n");e.appendChild(t,r);var r=e.createElement("div"),a=e.createTextNode("\n  ");e.appendChild(r,a);var a=e.createComment("");e.appendChild(r,a);var a=e.createTextNode("\n");e.appendChild(r,a),e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var a=e.childAt(t,[0,1]),n=new Array(2);return n[0]=e.createElementMorph(a),n[1]=e.createMorphAt(e.childAt(t,[2]),1,1),n},statements:[["element","action",["addQueryParam"],[],["loc",[null,[2,10],[2,36]]]],["inline","link-to",["Back","index"],[],["loc",[null,[8,2],[8,28]]]]],locals:[],templates:[]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var r=t+"/config/environment",a=e["default"].$('meta[name="'+r+'"]').attr("content"),n=JSON.parse(unescape(a));return{"default":n}}catch(d){throw new Error('Could not read config from meta tag with name "'+r+'".')}}),runningTests||require("dummy/app")["default"].create({name:"ember-query-params-reset",version:"0.0.1+fd0521a2"});