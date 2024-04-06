"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[861],{89994:function(n,e,r){var t=r(42982),i=r(6473),a=r(10499),o=r(70816),l=r.n(o),u={generic:function(n){return i.nK().label(n)},string:function(n,e){e=e||{};var r=i.Z_().transform((function(n,e){return""===e?null:n})).nullable(!0).trim().label(n);return e.required&&(r=r.required()),(e.min||0===e.min)&&(r=r.min(e.min)),e.max&&(r=r.max(e.max)),e.matches&&(r=r.matches(e.matches)),r},boolean:function(n,e){return i.Xg().default(!1).label(n)},relationToOne:function(n,e){e=e||{};var r=i.nK().nullable(!0).label(n).transform((function(n,e){return e?e.id:null}));return e.required&&(r=r.required()),r},stringArray:function(n,e){e=e||{};var r=i.IX().compact().ensure().of(i.Z_().transform((function(n,e){return""===e?null:n})).trim()).label(n);return(e.required||e.min)&&(r=r.required()),e.min||0===e.min?r=r.min(e.min):e.required&&(r=r.min(1)),e.max&&(r=r.max(e.max)),r},relationToMany:function(n,e){e=e||{};var r=i.IX().nullable(!0).label(n).transform((function(n,e){return e&&e.length?e.map((function(n){return n.id})):[]}));return(e.required||e.min)&&(r=r.required()),e.min||0===e.min?r=r.min(e.min):e.required&&(r=r.min(1)),e.max&&(r=r.max(e.max)),r},integer:function(n,e){e=e||{};var r=i.Rx().transform((function(n,e){return""===e?null:n})).integer().nullable(!0).label(n);return e.required&&(r=r.required()),(e.min||0===e.min)&&(r=r.min(e.min)),e.max&&(r=r.max(e.max)),r},images:function(n,e){e=e||{};var r=i.IX().nullable(!0).label(n);return(e.required||e.min)&&(r=r.required()),e.min||0===e.min?r=r.min(e.min):e.required&&(r=r.min(1)),e.max&&(r=r.max(e.max)),r},files:function(n,e){e=e||{};var r=i.IX().compact().ensure().nullable(!0).label(n);return(e.required||e.min)&&(r=r.required()),e.min||0===e.min?r=r.min(e.min):e.required&&(r=r.min(1)),e.max&&(r=r.max(e.max)),r},enumerator:function(n,e){e=e||{};var r=i.Z_().transform((function(n,e){return""===e?null:n})).label(n).nullable(!0).oneOf([null].concat((0,t.Z)(e.options||[])));return e.required&&(r=r.required((0,a.ag)("validation.string.selected"))),r},email:function(n,e){e=e||{};var r=i.Z_().transform((function(n,e){return""===e?null:n})).nullable(!0).trim().label(n).email();return e.required&&(r=r.required()),(e.min||0===e.min)&&(r=r.min(e.min)),e.max&&(r=r.max(e.max)),e.matches&&(r=r.matches(e.matches)),r},decimal:function(n,e){e=e||{};var r=i.Rx().transform((function(n,e){return""===e?null:n})).nullable(!0).label(n);return e.required&&(r=r.required()),(e.min||0===e.min)&&(r=r.min(e.min)),e.max&&(r=r.max(e.max)),r},datetime:function(n,e){e=e||{};var r=i.nK().nullable(!0).label(n).transform((function(n,e){return n?l()(e,"YYYY-MM-DD HH:mm").toISOString():null}));return e.required&&(r=r.required()),r},date:function(n,e){e=e||{};var r=i.nK().nullable(!0).label(n).test("is-date",(0,a.ag)("validation.mixed.default"),(function(n){return!n||l()(n,"YYYY-MM-DD").isValid()})).transform((function(n){return n?l()(n).format("YYYY-MM-DD"):null}));return e.required&&(r=r.required()),r}};e.Z=u},47921:function(n,e,r){var t=r(76747),i=function(n){return n.user.form},a=(0,t.P1)([i],(function(n){return n.user})),o={selectInitLoading:(0,t.P1)([i],(function(n){return Boolean(n.initLoading)})),selectSaveLoading:(0,t.P1)([i],(function(n){return Boolean(n.saveLoading)})),selectUser:a,selectRaw:i};e.Z=o},63442:function(n,e,r){var t=r(17366),i={status:["active","empty-permissions"],genre:["male","female"],roles:Object.keys(t.Z.values)};e.Z=i},11550:function(n,e,r){r.d(e,{Z:function(){return l}});var t=r(15671),i=r(43144),a=r(10499),o=function(){function n(){(0,t.Z)(this,n)}return(0,i.Z)(n,null,[{key:"values",get:function(){return{"c\xe9l\xe9bataire":"c\xe9l\xe9bataire","mari\xe9":"mari\xe9"}}},{key:"labelOf",value:function(n){return this.values[n]?(0,a.ag)("".concat(n)):n}},{key:"descriptionOf",value:function(n){return this.values[n]?(0,a.ag)("etat.".concat(n,".description")):n}}]),n}(),l={Etat:Object.keys(o.values)}},5284:function(n,e,r){r.d(e,{Z:function(){return l}});var t=r(15671),i=r(43144),a=r(10499),o=function(){function n(){(0,t.Z)(this,n)}return(0,i.Z)(n,null,[{key:"values",get:function(){return{AGRO_ALIMENTAIRE:"AGRO-ALIMENTAIRE",ASSURANCES:"ASSURANCES",AUDIOVISUEL:"AUDIOVISUEL",BANCAIRE:"BANCAIRE",CHIMIE:"CHIMIE",COMPOSANTS_AUTOMOBILES:"COMPOSANTS AUTOMOBILES",DISTRIBUTION:"DISTRIBUTION",DISTRIBUTION_AUTOMOBILE:"DISTRIBUTION AUTOMOBILE",DIVERS:"DIVERS",FINANCIER:"FINANCIER",HOLDING:"HOLDING",IMMOBILIER:"IMMOBILIER",INDUSTRIEL:"INDUSTRIEL",LEASING:"LEASING",LOGISTIQUE_TRANSPORT:"LOGISTIQUE ET TRANSPORT",PHARMACEUTIQUE:"PHARMACEUTIQUE","SANT\xc9":"SANT\xc9",TOURSIME:"TOURSIME",INFORMATION_TECHNOLOGY:"INFORMATION TECHNOLOGY"}}},{key:"labelOf",value:function(n){return this.values[n]?(0,a.ag)("secteur.".concat(n,".label")):n}},{key:"descriptionOf",value:function(n){return this.values[n]?(0,a.ag)("secteur.".concat(n,".description")):n}}]),n}(),l={secteur:Object.keys(o.values)}},27829:function(n,e,r){var t,i=r(30168),a=r(38269).ZP.div(t||(t=(0,i.Z)(["\n  margin-top: 16px;\n  padding: 24px;\n  background-color: white;\n  width: 100%;\n  border-radius: 5px;\n  border: 1px solid #dee2e6 !important;\n  .card-stats .card-body {\n    padding: 15px !important;\n  }\n  .text-center {\n    text-align: center !important;\n  }\n  .card-stats .icon-big.icon-danger, .card-stats .icon-big.icon-default, .card-stats .icon-big.icon-info, .card-stats .icon-big.icon-primary, .card-stats .icon-big.icon-secondary, .card-stats .icon-big.icon-success, .card-stats .icon-big.icon-warning {\n    border-radius: 5px;\n}\n.card-stats .icon-big.icon-danger i, .card-stats .icon-big.icon-default i, .card-stats .icon-big.icon-info i, .card-stats .icon-big.icon-primary i, .card-stats .icon-big.icon-secondary i, .card-stats .icon-big.icon-success i, .card-stats .icon-big.icon-warning i {\n  color: #fff!important;\n}\n  .pb-3,\n  .py-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pt-3,\n  .py-3 {\n    padding-top: 1rem !important;\n  }\n  .d-inline-block {\n    display: inline-block !important;\n  }\n  .pl-3, .px-3 {\n    padding-left: 1rem !important;\n  }\n  .card-stats .icon-big {\n    width: 100%;\n    height: 100%;\n    font-size: 2.2em;\n    min-height: 64px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  \n  }\n  .bubble-shadow-small {\n  position: relative; \n  }\n\n  .card-title {\n    margin: 0;\n    color: #575962;\n    font-size: 18px;\n    font-weight: 400;\n    line-height: 1.6;\n  }\n  .card-stats .icon-big.icon-primary {\n    background: #177dff;\n  .mt-3,\n  .my-3 {\n    margin-top: 1rem !important;\n  }\n  "])));e.Z=a},53852:function(n,e,r){var t,i=r(30168),a=(r(47313),r(28303)),o=r(38269),l=r(46417),u=o.ZP.nav(t||(t=(0,i.Z)(["\n  .breadcrumb {\n    font-size: 13px;\n    margin: 0px;\n    padding: 0px;\n    background-color: transparent;\n  }\n\n  .breadcrumb-item:not(.active) a {\n    color: rgba(0, 0, 0, 0.45);\n  }\n"])));e.Z=function(n){var e=function(n){return n.length>1};return(0,l.jsx)(u,{children:(0,l.jsx)("ol",{className:"breadcrumb",children:n.items.map((function(r,t){return(0,l.jsx)("li",{className:"breadcrumb-item ".concat(n.items.length-1===t?"active":""),children:e(r)?(0,l.jsx)(a.rU,{to:r[1],children:r[0]}):r[0]},r[0])}))})})}},95748:function(n,e,r){r(47313);var t=r(46417);e.Z=function(n){return n.loading?(0,t.jsx)("span",{className:"spinner-border spinner-border-sm"}):n.iconClass?(0,t.jsx)("i",{className:n.iconClass}):null}},49384:function(n,e,r){r.d(e,{Z:function(){return a}});var t=r(15671),i=r(43144),a=function(){function n(){(0,t.Z)(this,n)}return(0,i.Z)(n,null,[{key:"errorMessage",value:function(n,e,r,t){var i,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(a)return a;if(!t&&!r[n])return null;var o=e[n];return(null===o||void 0===o||null===(i=o[0])||void 0===i?void 0:i.message)||(null===o||void 0===o?void 0:o.message)||o||null}}]),n}()},47575:function(n,e,r){r(47313);var t=r(43270),i=r(49384),a=r(46417);function o(n){var e=n.label,r=n.description,o=n.name,l=n.hint,u=n.type,c=n.placeholder,s=n.autoFocus,d=n.autoComplete,m=n.required,f=n.externalErrorMessage,p=n.disabled,g=n.endAdornment,b=(0,t.Gc)(),v=b.register,x=b.errors,h=b.formState,I=h.touched,N=h.isSubmitted,Z=i.Z.errorMessage(o,x,I,N,f);return(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsxs)("div",{className:g?"input-group":"",children:[Boolean(e)&&(0,a.jsx)("label",{className:"col-form-label ".concat(m?"required":null),htmlFor:o,children:e}),r,(0,a.jsx)("input",{id:o,name:o,type:u,ref:v,onChange:function(e){n.onChange&&n.onChange(e.target.value)},onBlur:function(e){n.onBlur&&n.onBlur(e)},placeholder:c||void 0,autoFocus:s||void 0,autoComplete:d||void 0,disabled:p,className:"form-control ".concat(Z?"is-invalid":"")}),g&&(0,a.jsx)("div",{className:"input-group-append",children:(0,a.jsx)("span",{className:"input-group-text",children:g})})]}),(0,a.jsx)("div",{className:"invalid-feedback",children:Z}),Boolean(l)&&(0,a.jsx)("small",{className:"form-text text-muted",children:l})]})}o.defaultProps={type:"text",required:!1},e.Z=o},5544:function(n,e,r){var t=r(1413),i=r(47313),a=r(73622),o=r(10499),l=r(43270),u=r(49384),c=r(46417);function s(n){var e=n.label,r=n.name,s=n.hint,d=n.options,m=n.required,f=n.mode,p=n.placeholder,g=n.isClearable,b=n.externalErrorMessage,v=(0,l.Gc)(),x=v.register,h=v.errors,I=v.formState,N=I.touched,Z=I.isSubmitted,O=v.setValue,E=v.watch,C=u.Z.errorMessage(r,h,N,Z,b),y=E(r);(0,i.useEffect)((function(){x({name:r})}),[x,r]);var S=function(){return y?y.map((function(n){return d.find((function(e){return e.value===n}))})):[]},A=function(){var e=n.options;return null!=y?e.find((function(n){return n.value===y})):null},T=function(e){if(!e)return O(r,[],{shouldValidate:!0,shouldDirty:!0}),void(n.onChange&&n.onChange([]));var t=e.map((function(n){return n?n.value:n})).filter((function(n){return null!=n}));O(r,t,{shouldValidate:!0,shouldDirty:!0}),n.onChange&&n.onChange(t)},R=function(e){if(!e)return O(r,null,{shouldValidate:!0,shouldDirty:!0}),void(n.onChange&&n.onChange(null));O(r,e.value,{shouldValidate:!0,shouldDirty:!0}),n.onChange&&n.onChange(e.value)},q=Boolean(C)?{container:function(n){return(0,t.Z)((0,t.Z)({},n),{},{color:"hsl(0,0%,20%)"})},control:function(n){return(0,t.Z)((0,t.Z)({},n),{},{borderColor:"red"})}}:{container:function(n){return(0,t.Z)((0,t.Z)({},n),{},{color:"hsl(0,0%,20%)"})}};return(0,c.jsxs)("div",{className:"form-group",children:[Boolean(e)&&(0,c.jsx)("label",{className:"col-form-label ".concat(m?"required":null),children:e}),(0,c.jsx)("br",{}),(0,c.jsx)(a.ZP,{className:"w-100",value:"multiple"===n.mode?S():A(),onChange:function(e){return"multiple"===n.mode?T(e):R(e)},onBlur:function(e){n.onBlur&&n.onBlur(e)},id:r,name:r,options:d,isMulti:"multiple"===f,placeholder:p||"",isClearable:g,styles:q,loadingMessage:function(){return(0,o.ag)("autocomplete.loading")},noOptionsMessage:function(){return(0,o.ag)("autocomplete.noOptions")}}),(0,c.jsx)("div",{className:"invalid-feedback",children:C}),Boolean(s)&&(0,c.jsx)("small",{className:"form-text text-muted",children:s})]})}s.defaultProps={required:!1,isClearable:!0},e.Z=s},68160:function(n,e,r){var t,i=r(30168),a=r(38269).ZP.div(t||(t=(0,i.Z)(["\n  padding-top: 0;\n  padding-bottom: 0;\n\n  label.required::before {\n    display: inline-block;\n    margin-right: 4px;\n    content: '*';\n    line-height: 1;\n    font-size: 13px;\n    color: #f5222d;\n  }\n  .app__specification {\n    padding: 14px;\n  }\n  .react-datepicker-wrapper {\n    width: 100%;\n  }\n  i {\n    padding-right: 4px;\n    font-size: 14px;\n  }\n  .adherent-control {\n    z-index: 0;\n  }\n\n  .invalid-feedback {\n    display: block;\n  }\n\n  .form-buttons {\n    padding-top: 16px;\n\n    .btn {\n      margin-right: 8px;\n      margin-bottom: 8px;\n    }\n  }\n"])));e.Z=a},75352:function(n,e,r){var t,i=r(30168),a=r(38269).ZP.h1(t||(t=(0,i.Z)(["\n  margin-bottom: 24px;\n"])));e.Z=a},31616:function(n,e,r){var t=r(70885),i=r(1413),a=r(45987),o=r(46123),l=r.n(o),u=r(47313),c=r(68524),s=r(46417),d=["as","bsPrefix","className"],m=["className"];var f=u.forwardRef((function(n,e){var r=function(n){var e=n.as,r=n.bsPrefix,t=n.className,o=(0,a.Z)(n,d);r=(0,c.vE)(r,"col");var u=(0,c.pi)(),s=(0,c.zG)(),m=[],f=[];return u.forEach((function(n){var e,t,i,a=o[n];delete o[n],"object"===typeof a&&null!=a?(e=a.span,t=a.offset,i=a.order):e=a;var l=n!==s?"-".concat(n):"";e&&m.push(!0===e?"".concat(r).concat(l):"".concat(r).concat(l,"-").concat(e)),null!=i&&f.push("order".concat(l,"-").concat(i)),null!=t&&f.push("offset".concat(l,"-").concat(t))})),[(0,i.Z)((0,i.Z)({},o),{},{className:l().apply(void 0,[t].concat(m,f))}),{as:e,bsPrefix:r,spans:m}]}(n),o=(0,t.Z)(r,2),u=o[0],f=u.className,p=(0,a.Z)(u,m),g=o[1],b=g.as,v=void 0===b?"div":b,x=g.bsPrefix,h=g.spans;return(0,s.jsx)(v,(0,i.Z)((0,i.Z)({},p),{},{ref:e,className:l()(f,!h.length&&x)}))}));f.displayName="Col",e.Z=f},63849:function(n,e,r){var t=r(1413),i=r(45987),a=r(46123),o=r.n(a),l=r(47313),u=r(68524),c=r(46417),s=["bsPrefix","className","as"],d=l.forwardRef((function(n,e){var r=n.bsPrefix,a=n.className,l=n.as,d=void 0===l?"div":l,m=(0,i.Z)(n,s),f=(0,u.vE)(r,"row"),p=(0,u.pi)(),g=(0,u.zG)(),b="".concat(f,"-cols"),v=[];return p.forEach((function(n){var e,r=m[n];delete m[n],e=null!=r&&"object"===typeof r?r.cols:r;var t=n!==g?"-".concat(n):"";null!=e&&v.push("".concat(b).concat(t,"-").concat(e))})),(0,c.jsx)(d,(0,t.Z)((0,t.Z)({ref:e},m),{},{className:o().apply(void 0,[a,f].concat(v))}))}));d.displayName="Row",e.Z=d},68524:function(n,e,r){r.d(e,{pi:function(){return l},vE:function(){return o},zG:function(){return u}});var t=r(47313),i=(r(46417),["xxl","xl","lg","md","sm","xs"]),a=t.createContext({prefixes:{},breakpoints:i,minBreakpoint:"xs"});a.Consumer,a.Provider;function o(n,e){var r=(0,t.useContext)(a).prefixes;return n||r[e]||e}function l(){return(0,t.useContext)(a).breakpoints}function u(){return(0,t.useContext)(a).minBreakpoint}},73622:function(n,e,r){r(47313),r(83235),r(1168);var t=r(85732),i=(r(96312),r(71902),r(87201));r(94297);var a=(0,i.m)(t.S);e.ZP=a}}]);