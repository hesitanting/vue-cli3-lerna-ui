(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a0476358"],{"2bdc":function(a,t,e){"use strict";var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("h-table",{attrs:{data:a.data,stripe:!0,border:!0,caption:a.caption,shadow:!0,"head-style":"default"}},[e("h-table-column",{attrs:{prop:"para",label:"参数",width:80}}),e("h-table-column",{attrs:{prop:"native",label:"是否是原生属性",width:120}}),e("h-table-column",{attrs:{prop:"desc",label:"描述",width:450}}),e("h-table-column",{attrs:{prop:"type",label:"类型",width:100}}),e("h-table-column",{attrs:{prop:"option",label:"可选值",width:300}}),e("h-table-column",{attrs:{prop:"default",label:"默认值",width:100}})],1)},i=[],o={name:"propsTable",props:{data:Array,caption:String}},n=o,l=e("2877"),d=Object(l["a"])(n,r,i,!1,null,null,null);t["a"]=d.exports},6000:function(a,t,e){"use strict";e.r(t);var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("h3",[a._v("基础类型")]),e("h-radio",{attrs:{"native-value":"One"},model:{value:a.radio,callback:function(t){a.radio=t},expression:"radio"}}),e("h-radio",{attrs:{"native-value":"Two"},model:{value:a.radio,callback:function(t){a.radio=t},expression:"radio"}}),e("h-radio",{attrs:{"native-value":"Disabled",disabled:!0},model:{value:a.radio,callback:function(t){a.radio=t},expression:"radio"}}),e("h3",[a._v("单选框组")]),e("h-radio-group",{attrs:{radius:"large",size:"large"},model:{value:a.radioGroup,callback:function(t){a.radioGroup=t},expression:"radioGroup"}},[e("h-radio",{attrs:{"native-value":"One",disabled:!0}}),e("h-radio",{attrs:{"native-value":"Two"}}),e("h-radio",{attrs:{"native-value":"Disabled",disabled:!0}})],1),e("h3",[a._v("按钮式单选框组")]),e("h5",[a._v("基础样式")]),e("h-radio-group",{model:{value:a.radioBtnGroup,callback:function(t){a.radioBtnGroup=t},expression:"radioBtnGroup"}},[e("h-radio-btn",{attrs:{"native-value":"One"}}),e("h-radio-btn",{attrs:{"native-value":"Two"}}),e("h-radio-btn",{attrs:{"native-value":"Disabled",disabled:!0}})],1),e("h5",[a._v("阴影")]),e("h-radio-group",{attrs:{shadow:!0},model:{value:a.radioBtnGroup,callback:function(t){a.radioBtnGroup=t},expression:"radioBtnGroup"}},[e("h-radio-btn",{attrs:{"native-value":"One"}}),e("h-radio-btn",{attrs:{"native-value":"Two"}}),e("h-radio-btn",{attrs:{"native-value":"Disabled",disabled:!0}})],1),e("h5",[a._v("圆角类型")]),e("h-radio-group",{attrs:{radius:"small"},model:{value:a.radioBtnGroup,callback:function(t){a.radioBtnGroup=t},expression:"radioBtnGroup"}},[e("h-radio-btn",{attrs:{"native-value":"One"}}),e("h-radio-btn",{attrs:{"native-value":"Two"}}),e("h-radio-btn",{attrs:{"native-value":"Three"}})],1),e("h-radio-group",{attrs:{radius:"large"},model:{value:a.radioBtnGroup,callback:function(t){a.radioBtnGroup=t},expression:"radioBtnGroup"}},[e("h-radio-btn",{attrs:{"native-value":"One"}}),e("h-radio-btn",{attrs:{"native-value":"Two"}}),e("h-radio-btn",{attrs:{"native-value":"Three"}})],1),e("h-radio-group",{attrs:{radius:"circle"},model:{value:a.radioBtnGroup,callback:function(t){a.radioBtnGroup=t},expression:"radioBtnGroup"}},[e("h-radio-btn",{attrs:{"native-value":"One"}}),e("h-radio-btn",{attrs:{"native-value":"Two"}}),e("h-radio-btn",{attrs:{"native-value":"Three"}})],1),e("h5",[a._v("大小")]),e("h-radio-group",{attrs:{size:"large"},model:{value:a.radioBtnGroup,callback:function(t){a.radioBtnGroup=t},expression:"radioBtnGroup"}},[e("h-radio-btn",{attrs:{"native-value":"One"}}),e("h-radio-btn",{attrs:{"native-value":"Two"}}),e("h-radio-btn",{attrs:{"native-value":"Three"}})],1),e("h-radio-group",{model:{value:a.radioBtnGroup,callback:function(t){a.radioBtnGroup=t},expression:"radioBtnGroup"}},[e("h-radio-btn",{attrs:{"native-value":"One"}}),e("h-radio-btn",{attrs:{"native-value":"Two"}}),e("h-radio-btn",{attrs:{"native-value":"Three"}})],1),e("h-radio-group",{attrs:{size:"small"},model:{value:a.radioBtnGroup,callback:function(t){a.radioBtnGroup=t},expression:"radioBtnGroup"}},[e("h-radio-btn",{attrs:{"native-value":"One"}}),e("h-radio-btn",{attrs:{"native-value":"Two"}}),e("h-radio-btn",{attrs:{"native-value":"Three"}})],1),e("h3",[a._v("语义类型")]),e("h5",[a._v("基础类型")]),e("h-radio",{attrs:{"native-value":"Default"},model:{value:a.radioSemantic,callback:function(t){a.radioSemantic=t},expression:"radioSemantic"}}),e("h-radio",{attrs:{"native-value":"Primary",semantic:"primary"},model:{value:a.radioSemantic,callback:function(t){a.radioSemantic=t},expression:"radioSemantic"}}),e("h-radio",{attrs:{"native-value":"Success",semantic:"success"},model:{value:a.radioSemantic,callback:function(t){a.radioSemantic=t},expression:"radioSemantic"}}),e("h-radio",{attrs:{"native-value":"Info",semantic:"info"},model:{value:a.radioSemantic,callback:function(t){a.radioSemantic=t},expression:"radioSemantic"}}),e("h-radio",{attrs:{"native-value":"Warning",semantic:"warning"},model:{value:a.radioSemantic,callback:function(t){a.radioSemantic=t},expression:"radioSemantic"}}),e("h-radio",{attrs:{"native-value":"Danger",semantic:"danger"},model:{value:a.radioSemantic,callback:function(t){a.radioSemantic=t},expression:"radioSemantic"}}),e("h5",[a._v("按钮类型")]),e("h-radio-group",{model:{value:a.radioBtnGroup,callback:function(t){a.radioBtnGroup=t},expression:"radioBtnGroup"}},[e("h-radio-btn",{attrs:{"native-value":"Default"}}),e("h-radio-btn",{attrs:{"native-value":"Primary",semantic:"primary"}}),e("h-radio-btn",{attrs:{"native-value":"Info",semantic:"info"}}),e("h-radio-btn",{attrs:{"native-value":"Success",semantic:"success"}}),e("h-radio-btn",{attrs:{"native-value":"Warning",semantic:"warning"}}),e("h-radio-btn",{attrs:{"native-value":"Danger",semantic:"danger",icon:"fa fa-spinner fa-spin"}})],1),e("h3",[a._v("参数示例")]),e("props-table",{attrs:{data:a.props,caption:"单选框参数"}}),e("props-table",{attrs:{data:a.groupProps,caption:"单选框组参数"}}),e("props-table",{attrs:{data:a.groupEvents,caption:"单选框组事件"}})],1)},i=[],o=e("2bdc"),n={name:"radio",components:{propsTable:o["a"]},data:function(){return{radio:"Disabled",radioGroup:"One",radioBtnGroup:"One",radioSemantic:"Default",props:[{para:"v-model",native:"false",desc:"Radio的绑定值",type:"String/Number/Boolean",option:"-",default:"-"},{para:"native-value",native:"true",desc:" Radio的原生value属性",type:"String/Number/Boolean",option:"-",default:"-"},{para:"disabled",native:"true",desc:" Radio的原生disabled属性",type:"Boolean",option:"false、true",default:"false"},{para:"semantic",native:"false",desc:"语义类型",type:"String",option:"primary、success、info、warning、danger、text",default:"-"},{para:"icon",native:"false",desc:"图标(推荐使用font-awesome的图标库)",type:"String",option:"-",default:"-"}],groupProps:[{para:"v-model",native:"false",desc:"Radio的绑定值",type:"String/Number/Boolean",option:"-",default:"-"},{para:"disabled",native:"true",desc:" Radio的原生disabled属性",type:"Boolean",option:"false、true",default:"false"},{para:"radius",native:"false",desc:"圆角(按钮式单选框组有效)",type:"String",option:"small、large、circle",default:"-"},{para:"size",native:"false",desc:"尺寸(按钮式单选框组有效)",type:"String",option:"small、large",default:"-"},{para:"shadow",native:"false",desc:"阴影",type:"Boolean",option:"false、true",default:"false"}],groupEvents:[{para:"change",native:"false",desc:"v-model值变化监听事件",type:"Function(newValue)",option:"-",default:"-"}]}}},l=n,d=e("2877"),s=Object(d["a"])(l,r,i,!1,null,null,null);t["default"]=s.exports}}]);
//# sourceMappingURL=chunk-a0476358.b30788e7.js.map