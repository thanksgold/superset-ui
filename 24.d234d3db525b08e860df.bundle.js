(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{244:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _TimeFormats__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(84);__webpack_require__.d(__webpack_exports__,"TimeFormats",(function(){return _TimeFormats__WEBPACK_IMPORTED_MODULE_0__.b})),__webpack_require__.d(__webpack_exports__,"LOCAL_PREFIX",(function(){return _TimeFormats__WEBPACK_IMPORTED_MODULE_0__.a}));var _TimeFormatter__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(129);__webpack_require__.d(__webpack_exports__,"TimeFormatter",(function(){return _TimeFormatter__WEBPACK_IMPORTED_MODULE_1__.b})),__webpack_require__.d(__webpack_exports__,"PREVIEW_TIME",(function(){return _TimeFormatter__WEBPACK_IMPORTED_MODULE_1__.a}));var _TimeFormatterRegistrySingleton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(401);__webpack_require__.d(__webpack_exports__,"getTimeFormatterRegistry",(function(){return _TimeFormatterRegistrySingleton__WEBPACK_IMPORTED_MODULE_2__.a})),__webpack_require__.d(__webpack_exports__,"formatTime",(function(){return _TimeFormatterRegistrySingleton__WEBPACK_IMPORTED_MODULE_2__.b})),__webpack_require__.d(__webpack_exports__,"getTimeFormatter",(function(){return _TimeFormatterRegistrySingleton__WEBPACK_IMPORTED_MODULE_2__.c}));var _factories_createD3TimeFormatter__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(265);__webpack_require__.d(__webpack_exports__,"createD3TimeFormatter",(function(){return _factories_createD3TimeFormatter__WEBPACK_IMPORTED_MODULE_3__.a}));var _factories_createMultiFormatter__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(159);__webpack_require__.d(__webpack_exports__,"createMultiFormatter",(function(){return _factories_createMultiFormatter__WEBPACK_IMPORTED_MODULE_4__.a}));var _formatters_smartDate__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(804);__webpack_require__.d(__webpack_exports__,"smartDateFormatter",(function(){return _formatters_smartDate__WEBPACK_IMPORTED_MODULE_5__.a}));var _formatters_smartDateVerbose__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(805);__webpack_require__.d(__webpack_exports__,"smartDateVerboseFormatter",(function(){return _formatters_smartDateVerbose__WEBPACK_IMPORTED_MODULE_6__.a}))},396:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"NumberFormats",(function(){return NumberFormats.a})),__webpack_require__.d(__webpack_exports__,"NumberFormatter",(function(){return NumberFormatter.b})),__webpack_require__.d(__webpack_exports__,"PREVIEW_VALUE",(function(){return NumberFormatter.a})),__webpack_require__.d(__webpack_exports__,"getNumberFormatterRegistry",(function(){return NumberFormatterRegistrySingleton.a})),__webpack_require__.d(__webpack_exports__,"formatNumber",(function(){return NumberFormatterRegistrySingleton.b})),__webpack_require__.d(__webpack_exports__,"getNumberFormatter",(function(){return NumberFormatterRegistrySingleton.c})),__webpack_require__.d(__webpack_exports__,"createD3NumberFormatter",(function(){return createD3NumberFormatter.a})),__webpack_require__.d(__webpack_exports__,"createDurationFormatter",(function(){return createDurationFormatter})),__webpack_require__.d(__webpack_exports__,"createSiAtMostNDigitFormatter",(function(){return createSiAtMostNDigitFormatter}));var NumberFormats=__webpack_require__(74),NumberFormatter=__webpack_require__(126),NumberFormatterRegistrySingleton=__webpack_require__(400),createD3NumberFormatter=__webpack_require__(268),pretty_ms=__webpack_require__(1015),pretty_ms_default=__webpack_require__.n(pretty_ms),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function createDurationFormatter(config={}){const{description:description,id:id,label:label,multiplier:multiplier=1}=config,prettyMsOptions=__rest(config,["description","id","label","multiplier"]);return new NumberFormatter.b({description:description,formatFunc:value=>pretty_ms_default()(value*multiplier,prettyMsOptions),id:null!=id?id:"duration_format",label:null!=label?label:"Duration formatter"})}var defaultLocale=__webpack_require__(240);function createSiAtMostNDigitFormatter(config={}){const{description:description,n:n=3,id:id,label:label}=config,siFormatter=Object(defaultLocale.a)(`.${n}s`);return new NumberFormatter.b({description:description,formatFunc:value=>{const si=siFormatter(value);return si.slice(-1)<"A"?parseFloat(si).toString():si},id:null!=id?id:`si_at_most_${n}_digit`,label:null!=label?label:`SI with at most ${n} significant digits`})}},792:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"CategoricalColorNamespace",(function(){return CategoricalColorNamespace_namespaceObject})),__webpack_require__.d(__webpack_exports__,"CategoricalColorScale",(function(){return src_CategoricalColorScale})),__webpack_require__.d(__webpack_exports__,"CategoricalScheme",(function(){return CategoricalScheme.a})),__webpack_require__.d(__webpack_exports__,"getCategoricalSchemeRegistry",(function(){return CategoricalSchemeRegistrySingleton.a})),__webpack_require__.d(__webpack_exports__,"getSequentialSchemeRegistry",(function(){return SequentialSchemeRegistrySingleton.a})),__webpack_require__.d(__webpack_exports__,"SequentialScheme",(function(){return SequentialScheme.a})),__webpack_require__.d(__webpack_exports__,"BRAND_COLOR",(function(){return BRAND_COLOR}));var CategoricalColorNamespace_namespaceObject={};__webpack_require__.r(CategoricalColorNamespace_namespaceObject),__webpack_require__.d(CategoricalColorNamespace_namespaceObject,"default",(function(){return CategoricalColorNamespace_CategoricalColorNamespace})),__webpack_require__.d(CategoricalColorNamespace_namespaceObject,"DEFAULT_NAMESPACE",(function(){return DEFAULT_NAMESPACE})),__webpack_require__.d(CategoricalColorNamespace_namespaceObject,"getNamespace",(function(){return getNamespace})),__webpack_require__.d(CategoricalColorNamespace_namespaceObject,"getColor",(function(){return getColor})),__webpack_require__.d(CategoricalColorNamespace_namespaceObject,"getScale",(function(){return getScale}));var ExtensibleFunction=__webpack_require__(395),ordinal=__webpack_require__(820);function stringifyAndTrim(value){return String(value).trim()}class CategoricalColorScale_CategoricalColorScale extends ExtensibleFunction.a{constructor(colors,parentForcedColors){super(value=>this.getColor(value)),this.colors=colors,this.scale=Object(ordinal.a)(),this.scale.range(colors),this.parentForcedColors=parentForcedColors,this.forcedColors={}}getColor(value){const cleanedValue=stringifyAndTrim(value),parentColor=this.parentForcedColors&&this.parentForcedColors[cleanedValue];if(parentColor)return parentColor;const forcedColor=this.forcedColors[cleanedValue];return forcedColor||this.scale(cleanedValue)}setColor(value,forcedColor){return this.forcedColors[stringifyAndTrim(value)]=forcedColor,this}getColorMap(){const colorMap={};return this.scale.domain().forEach(value=>{colorMap[value.toString()]=this.scale(value)}),Object.assign(Object.assign(Object.assign({},colorMap),this.forcedColors),this.parentForcedColors)}copy(){const copy=new CategoricalColorScale_CategoricalColorScale(this.scale.range(),this.parentForcedColors);return copy.forcedColors=Object.assign({},this.forcedColors),copy.domain(this.domain()),copy.unknown(this.unknown()),copy}domain(newDomain){return void 0===newDomain?this.scale.domain():(this.scale.domain(newDomain),this)}range(newRange){return void 0===newRange?this.scale.range():(this.colors=newRange,this.scale.range(newRange),this)}unknown(value){return void 0===value?this.scale.unknown():(this.scale.unknown(value),this)}}var src_CategoricalColorScale=CategoricalColorScale_CategoricalColorScale,CategoricalSchemeRegistrySingleton=__webpack_require__(791);class CategoricalColorNamespace_CategoricalColorNamespace{constructor(name){this.name=name,this.scales={},this.forcedItems={}}getScale(schemeId){var _a,_b;const id=null!==(_a=null!=schemeId?schemeId:Object(CategoricalSchemeRegistrySingleton.a)().getDefaultKey())&&void 0!==_a?_a:"",scale=this.scales[id];if(scale)return scale;const scheme=Object(CategoricalSchemeRegistrySingleton.a)().get(id),newScale=new src_CategoricalColorScale(null!==(_b=null==scheme?void 0:scheme.colors)&&void 0!==_b?_b:[],this.forcedItems);return this.scales[id]=newScale,newScale}setColor(value,forcedColor){return this.forcedItems[stringifyAndTrim(value)]=forcedColor,this}}const namespaces={},DEFAULT_NAMESPACE="GLOBAL";function getNamespace(name=DEFAULT_NAMESPACE){const instance=namespaces[name];if(instance)return instance;const newInstance=new CategoricalColorNamespace_CategoricalColorNamespace(name);return namespaces[name]=newInstance,newInstance}function getColor(value,schemeId,namespace){return getNamespace(namespace).getScale(schemeId).getColor(value)}function getScale(scheme,namespace){return getNamespace(namespace).getScale(scheme)}var CategoricalScheme=__webpack_require__(55),SequentialSchemeRegistrySingleton=__webpack_require__(793),SequentialScheme=__webpack_require__(124);const BRAND_COLOR="#00A699"}}]);
//# sourceMappingURL=24.d234d3db525b08e860df.bundle.js.map