(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2095bf"],{a95f:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{attrs:{id:"slider-demo"}},[l("slider-default"),l("slider-color"),l("slider-ticks"),l("slider-range"),l("slider-icon"),l("slider-text-fixed"),l("slider-change-method")],1)},n=[],s=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("vx-card",{attrs:{title:"Default","code-toggler":""}},[l("p",[e._v("To implement a "),l("strong",[e._v("Slider")]),e._v(" we have the "),l("code",[e._v("vs-slider")]),e._v(" component")]),l("div",{staticClass:"mt-5"},[l("vs-slider",{model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),l("vs-slider",{attrs:{disabled:"true"},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}}),l("vs-slider",{attrs:{max:"200"},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}})],1),l("template",{slot:"codeContainer"},[e._v('\n<template>\n  <vs-slider v-model="value1" />\n  <vs-slider disabled="true" v-model="value2" />\n  <vs-slider max=200 v-model="value3" />\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      value1: 67,\n      value2: 34,\n      value3: 60\n    }\n  }\n}\n<\/script>\n        ')])],2)},r=[],o={data:function(){return{value1:67,value2:34,value3:60}}},i=o,c=l("2877"),u=Object(c["a"])(i,s,r,!1,null,null,null),v=u.exports,d=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("vx-card",{attrs:{title:"Color","code-toggler":""}},[l("p",[e._v("You can change the slider's color with the property color. You can also add the main "),l("code",[e._v("colors")]),e._v(" like: "),l("code",[e._v("primary")]),e._v(", "),l("code",[e._v("success")]),e._v(", "),l("code",[e._v("danger")]),e._v(", "),l("code",[e._v("warning")]),e._v(", "),l("code",[e._v("dark")])]),l("div",{staticClass:"mt-5"},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.colorx,expression:"colorx"}],attrs:{type:"color",name:""},domProps:{value:e.colorx},on:{input:function(t){t.target.composing||(e.colorx=t.target.value)}}}),l("vs-slider",{attrs:{color:e.colorx},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),l("template",{slot:"codeContainer"},[e._v('\n<template>\n  <input type="color" v-model="colorx" name="" >\n  <vs-slider :color="colorx" v-model="value1"/>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      colorx:\'#db7d12\',\n      value1:24,\n    }\n  }\n}\n<\/script>\n        ')])],2)},p=[],m={data:function(){return{colorx:"#db7d12",value1:24}}},x=m,h=Object(c["a"])(x,d,p,!1,null,null,null),f=h.exports,_=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("vx-card",{attrs:{title:"Ticks","code-toggler":""}},[l("p",[e._v("With Ticks you can allow the user to select a value inside a range of allowed values. With the property "),l("strong",[e._v("step")]),e._v(" you can change the distance between each Tick")]),l("div",{staticClass:"mt-5"},[l("vs-slider",{attrs:{step:"10"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),l("vs-slider",{attrs:{ticks:"",step:"25"},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}}),l("vs-slider",{attrs:{ticks:"",step:"0.5","step-decimals":!0},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}})],1),l("template",{slot:"codeContainer"},[e._v('\n<template>\n  <vs-slider step=10 v-model="value1"/>\n  <vs-slider ticks step=25 v-model="value2"/>\n  <vs-slider ticks step=0.5 :step-decimals="true" v-model="value3"/>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      value1:60,\n      value2:25,\n      value3: 25.5\n    }\n  }\n}\n<\/script>\n        ')])],2)},g=[],b={data:function(){return{value1:60,value2:25,value3:50.5}}},k=b,w=Object(c["a"])(k,_,g,!1,null,null,null),y=w.exports,C=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("vx-card",{attrs:{title:"Range","code-toggler":""}},[l("p",[e._v("With Range you can allow the user to select a range inside a range of allowed values. You can use the v-model property with "),l("strong",[e._v("Array")]),e._v(" and a minimum and maximum value represented as: "),l("code",[e._v("[min, max]")])]),l("div",{staticClass:"mt-5"},[l("vs-slider",{attrs:{color:"warning"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),l("vs-slider",{attrs:{color:"danger",ticks:"",step:"10"},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1),l("template",{slot:"codeContainer"},[e._v('\n<template>\n  <vs-slider color="warning" v-model="value1"/>\n  <vs-slider color="danger" ticks step=10 v-model="value2"/>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      value1:[60,90],\n      value2:[30,40]\n    }\n  }\n}\n<\/script>\n        ')])],2)},j=[],S={data:function(){return{value1:[60,90],value2:[30,40]}}},E=S,O=Object(c["a"])(E,C,j,!1,null,null,null),$=O.exports,M=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("vx-card",{attrs:{title:"Icon","code-toggler":""}},[l("p",[e._v("You can add an icon with the "),l("code",[e._v("icon")]),e._v(" property to better representation the sliders to the user")]),l("vs-alert",{staticClass:"mt-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[l("p",[e._v("Vuesax uses the Google Material Icons font library by default. For a list of all available icons, visit the official "),l("a",{attrs:{href:"https://material.io/icons/",target:"_blank"}},[e._v("Material Icons page")]),e._v(".")]),l("p",[e._v("FontAwesome and other fonts library are supported. Simply use the icon-pack with fa or fas. You still need to include the Font Awesome icons in your project.")])]),l("div",{staticClass:"mt-5"},[l("vs-slider",{attrs:{icon:"volume_up",max:"10"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),l("vs-slider",{attrs:{icon:"group_add",ticks:"",step:"25"},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}}),l("vs-slider",{attrs:{icon:"star",ticks:"",max:"5"},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}})],1),l("template",{slot:"codeContainer"},[e._v('\n<template>\n  <vs-slider icon="volume_up" max=10 v-model="value1"/>\n  <vs-slider icon="group_add" ticks step=25 v-model="value2"/>\n  <vs-slider icon="star" ticks max=5 v-model="value3"/>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      value1:6,\n      value2:25,\n      value3:[2,4]\n    }\n  }\n}\n<\/script>\n        ')])],2)},T=[],Y={data:function(){return{value1:6,value2:25,value3:[2,4]}}},F=Y,I=Object(c["a"])(F,M,T,!1,null,null,null),A=I.exports,D=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("vx-card",{attrs:{title:"Text Fixed","code-toggler":""}},[l("p",[e._v("Determine the text that will be fixed next to the value with the property "),l("code",[e._v("text-fixed")])]),l("div",{staticClass:"mt-5"},[l("vs-slider",{attrs:{color:"success","text-fixed":"%"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),l("vs-slider",{attrs:{color:"danger","text-fixed":"Min",ticks:"",step:"25"},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}}),l("vs-slider",{attrs:{color:"dark","text-fixed":"K",ticks:"",max:"5"},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}})],1),l("template",{slot:"codeContainer"},[e._v('\n<template>\n  <vs-slider color="success" text-fixed=% v-model="value1"/>\n  <vs-slider color="danger" text-fixed=Min ticks step=25 v-model="value2"/>\n  <vs-slider color="dark" text-fixed=K ticks max=5 v-model="value3"/>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      value1:6,\n      value2:25,\n      value3:[2,4]\n    }\n  }\n}\n<\/script>\n        ')])],2)},R=[],W={data:function(){return{value1:6,value2:25,value3:[2,4]}}},J=W,K=Object(c["a"])(J,D,R,!1,null,null,null),G=K.exports,N=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("vx-card",{attrs:{title:"Change Method","code-toggler":""}},[l("p",[e._v("You can add a function that will be triggered every time the value changes with "),l("code",[e._v('@change="MyFunction"')])]),l("vs-alert",{staticClass:"mt-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[l("p",[e._v("You can change the minimum or maximum number admitted with the properties: "),l("code",[e._v("min")]),e._v(", "),l("code",[e._v("max")])])]),l("div",{staticClass:"mt-5"},[l("vs-slider",{attrs:{min:50,color:"rgb(45, 208, 129)"},on:{change:e.cambio},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),l("div",{staticClass:"p-2 bg-success rounded text-white flex items-center justify-center",style:{width:e.widthx+"px",height:e.heightx+"px"}},[e._v(" "+e._s(e.value1)+" ")])],1),l("template",{slot:"codeContainer"},[e._v('\n<template>\n  <vs-slider :min="50" @change="cambio" color="rgb(45, 208, 129)" v-model="value1"/>\n  <div :style="{\'width\':widthx+\'px\',\'height\':heightx+\'px\'}" class="box"> '+e._s(e.value1)+" </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      value1:55,\n      widthx:55,\n      heightx:55\n    }\n  },\n  methods:{\n    cambio(value){\n      this.widthx = value\n      this.heightx = value\n    }\n  }\n}\n<\/script>\n        ")])],2)},P=[],V={data:function(){return{value1:55,widthx:55,heightx:55}},methods:{cambio:function(e){this.widthx=e,this.heightx=e}}},q=V,z=Object(c["a"])(q,N,P,!1,null,null,null),B=z.exports,H={components:{SliderDefault:v,SliderColor:f,SliderTicks:y,SliderRange:$,SliderIcon:A,SliderTextFixed:G,SliderChangeMethod:B}},L=H,Q=Object(c["a"])(L,a,n,!1,null,null,null);t["default"]=Q.exports}}]);
//# sourceMappingURL=chunk-2d2095bf.d6b722db.js.map