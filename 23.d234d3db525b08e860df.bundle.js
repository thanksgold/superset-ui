(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1005:function(module,exports,__webpack_require__){var api=__webpack_require__(169),content=__webpack_require__(1006);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1},exported=(api(content,options),content.locals?content.locals:{});module.exports=exported},1006:function(module,exports,__webpack_require__){(exports=__webpack_require__(170)(!1)).push([module.i,'/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n.superset-legacy-chart-table {\n  margin: 0px auto;\n}\n.superset-legacy-chart-table table {\n  width: 100%;\n}\n.superset-legacy-chart-table .dt-metric {\n  text-align: right;\n}\n.superset-legacy-chart-table div.dataTables_wrapper div.dataTables_paginate {\n  line-height: 0;\n}\n.superset-legacy-chart-table div.dataTables_wrapper div.dataTables_paginate ul.pagination {\n  margin-top: 0.5em;\n}\n\n.superset-legacy-chart-table table.table thead th.sorting:after,\n.superset-legacy-chart-table table.table thead th.sorting_asc:after,\n.superset-legacy-chart-table table.table thead th.sorting_desc:after {\n  top: auto;\n  bottom: 6px;\n}\n.superset-legacy-chart-table td {\n  white-space: pre-wrap;\n}\n',""]),module.exports=exports},1072:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return ReactDataTable}));var _superset_ui_translation__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(790),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),react_dom_server__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(999),react_dom_server__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__),_superset_ui_number_format__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(74),_superset_ui_number_format__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(400),_superset_ui_time_format__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(401),xss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1001),jquery__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(866),jquery__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__),datatables_net_bs_js_dataTables_bootstrap__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(899),datatables_net_bs_js_dataTables_bootstrap__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(datatables_net_bs_js_dataTables_bootstrap__WEBPACK_IMPORTED_MODULE_8__);__webpack_require__(900),__webpack_require__(1005);datatables_net_bs_js_dataTables_bootstrap__WEBPACK_IMPORTED_MODULE_8___default.a.$||datatables_net_bs_js_dataTables_bootstrap__WEBPACK_IMPORTED_MODULE_8___default()(window,jquery__WEBPACK_IMPORTED_MODULE_7___default.a);const{PERCENT_3_POINT:PERCENT_3_POINT}=_superset_ui_number_format__WEBPACK_IMPORTED_MODULE_3__.a;function ReactDataTable(props){const{data:data,height:height,alignPositiveNegative:alignPositiveNegative=!1,colorPositiveNegative:colorPositiveNegative=!1,columns:columns,includeSearch:includeSearch=!1,metrics:aggMetrics,pageLength:pageLength,percentMetrics:percentMetrics,showCellBars:showCellBars=!0,tableTimestampFormat:tableTimestampFormat}=props,formatTimestamp=Object(_superset_ui_time_format__WEBPACK_IMPORTED_MODULE_5__.c)(tableTimestampFormat),metrics=(aggMetrics||[]).concat(percentMetrics||[]).filter(m=>data[0]&&"number"==typeof data[0][m]),metricsSet=new Set(aggMetrics),percentMetricsSet=new Set(percentMetrics),maxes={},mins={};columns.forEach(({key:key})=>{const vals=data.map(row=>row[key]);if(metrics.includes(key)){const nums=vals;alignPositiveNegative?maxes[key]=Math.max(...nums.map(Math.abs)):(maxes[key]=Math.max(...nums),mins[key]=Math.min(...nums))}});const viewportHeight=Math.min(height,window.innerHeight),pageLengthChoices=[10,25,40,50,75,100,150,200],hasPagination=pageLength>0,rootElem=Object(react__WEBPACK_IMPORTED_MODULE_1__.createRef)();function cellBar(key,val){const r=colorPositiveNegative&&val<0?150:0;if(alignPositiveNegative){const perc=Math.abs(Math.round(val/maxes[key]*100));return`linear-gradient(to right, rgba(${r},0,0,0.2), rgba(${r},0,0,0.2) ${perc}%, `+`rgba(0,0,0,0.01) ${perc}%, rgba(0,0,0,0.001) 100%)`}const posExtent=Math.abs(Math.max(maxes[key],0)),negExtent=Math.abs(Math.min(mins[key],0)),tot=posExtent+negExtent,perc1=Math.round(Math.min(negExtent+val,negExtent)/tot*100),perc2=Math.round(Math.abs(val)/tot*100);return`linear-gradient(to right, rgba(0,0,0,0.01), rgba(0,0,0,0.001) ${perc1}%, `+`rgba(${r},0,0,0.2) ${perc1}%, rgba(${r},0,0,0.2) ${perc1+perc2}%, `+`rgba(0,0,0,0.01) ${perc1+perc2}%, rgba(0,0,0,0.001) 100%)`}const options={aaSorting:[],autoWidth:!1,paging:hasPagination,pagingType:"first_last_numbers",pageLength:pageLength,lengthMenu:[[...pageLengthChoices,-1],[...pageLengthChoices,Object(_superset_ui_translation__WEBPACK_IMPORTED_MODULE_0__.b)("All")]],searching:includeSearch,language:{paginate:{first:Object(_superset_ui_translation__WEBPACK_IMPORTED_MODULE_0__.b)("First"),last:Object(_superset_ui_translation__WEBPACK_IMPORTED_MODULE_0__.b)("Last"),previous:Object(_superset_ui_translation__WEBPACK_IMPORTED_MODULE_0__.b)("Previous"),next:Object(_superset_ui_translation__WEBPACK_IMPORTED_MODULE_0__.b)("Next")}},bInfo:!1,scrollY:`${viewportHeight}px`,scrollCollapse:!0,scrollX:!0,drawCallback:function drawCallback(){const root=rootElem.current;jquery__WEBPACK_IMPORTED_MODULE_7___default()(".pagination",root).addClass("pagination-sm"),jquery__WEBPACK_IMPORTED_MODULE_7___default()("tr",root).css("display","")}};Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{const $root=jquery__WEBPACK_IMPORTED_MODULE_7___default()(rootElem.current),dataTable=$root.find("table").DataTable(options),scrollHeadHeight=$root.find(".dataTables_scrollHead").height()||0,paginationHeight=$root.find(".dataTables_paginate").height()||0,searchBarHeight=$root.find(".dataTables_length,.dataTables_filter").closest(".row").height()||0,scrollBodyHeight=viewportHeight-scrollHeadHeight-paginationHeight-searchBarHeight;return $root.find(".dataTables_scrollBody").css("max-height",scrollBodyHeight),()=>{try{dataTable.destroy(),$root.find(".dataTables_scrollBody").css("max-height","")}catch(error){}}});const tableElement=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table",{className:"table table-striped table-condensed table-hover"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr",null,columns.map(col=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th",{key:col.key,className:"sorting",title:col.label},col.label)))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody",null,data.map((record,i)=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr",{key:i,style:{display:pageLength>0&&i>=pageLength?"none":void 0}},columns.map(({key:key,format:format})=>{const val=record[key],keyIsMetric=metricsSet.has(key),text=function cellText(key,format,val){if("__timestamp"===key){let value=val;return"string"==typeof val&&(value=val.match(/T(\d{2}:){2}\d{2}$/)?`${val}Z`:val,value=new Date(value)),formatTimestamp(value)}return"string"==typeof val?Object(xss__WEBPACK_IMPORTED_MODULE_6__.filterXSS)(val,{stripIgnoreTag:!0}):percentMetricsSet.has(key)?Object(_superset_ui_number_format__WEBPACK_IMPORTED_MODULE_4__.b)(format||PERCENT_3_POINT,val):metricsSet.has(key)?Object(_superset_ui_number_format__WEBPACK_IMPORTED_MODULE_4__.b)(format,val):String(val)}(key,format,val),isHtml=!keyIsMetric&&(text=>/<[^>]+>/.test(text))(text),showCellBar=keyIsMetric&&showCellBars;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td",{key:key,dangerouslySetInnerHTML:isHtml?{__html:text}:void 0,"data-sort":val,className:keyIsMetric?"text-right":"",style:{backgroundImage:showCellBar?cellBar(key,val):void 0},title:keyIsMetric||percentMetricsSet.has(key)?String(val):""},isHtml?null:text)})))));return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{dangerouslySetInnerHTML:{__html:react_dom_server__WEBPACK_IMPORTED_MODULE_2___default.a.renderToStaticMarkup(tableElement)},ref:rootElem,className:"superset-legacy-chart-table"})}}}]);
//# sourceMappingURL=23.d234d3db525b08e860df.bundle.js.map