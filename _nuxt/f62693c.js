(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{329:function(e,t,r){var content=r(348);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(61).default)("687793fa",content,!0,{sourceMap:!1})},347:function(e,t,r){"use strict";r(329)},348:function(e,t,r){var n=r(60)(!1);n.push([e.i,"#back{position:absolute;top:5;left:5}#back .v-icon:hover{color:#000}#title{margin-top:20px;text-align:center}tbody tr:hover{background-color:rgba(0,0,0,.13333)!important;cursor:pointer}",""]),e.exports=n},413:function(e,t,r){"use strict";r.r(t);var n=r(15),o=(r(81),r(14),r(18),{data:function(){return{loaded:!1,search:"",repos:[],headers:[{text:"Name",value:"name"},{text:"Description",value:"description",sortable:!1},{text:"Primary Language",value:"language"},{text:"Last Push",value:"pushed_at"}]}},methods:{clickRow:function(e){window.open(e.html_url)}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var data,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.github.com/users/evad1n/repos");case 2:return data=t.sent,t.next=5,data.json();case 5:(r=(r=t.sent).filter((function(e){return!e.archived}))).sort((function(a,b){return a.pushed_at>b.pushed_at?-1:1})),e.repos=r,e.loaded=!0;case 10:case"end":return t.stop()}}),t)})))()}}),c=(r(347),r(55)),l=r(77),d=r.n(l),v=r(330),h=r(274),f=r(269),m=r(272),w=r(412),x=r(277),_=r(270),k=r(407),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:""}},[r("div",{attrs:{id:"back"}},[r("nuxt-link",{attrs:{to:"/"}},[r("v-icon",{attrs:{large:""}},[e._v("mdi-arrow-left")])],1)],1),e._v(" "),r("v-row",[r("v-col",[r("h1",{attrs:{id:"title"}},[e._v("My Repositories")])])],1),e._v(" "),r("v-row",[r("v-col",[r("v-card",{staticClass:"primary"},[r("v-card-title",[r("v-text-field",{attrs:{"append-icon":"mdi-magnify",color:"secondary",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),r("v-data-table",{staticClass:"elevation-1 primary",attrs:{headers:e.headers,items:e.repos,search:e.search,"items-per-page":15,"no-results-text":"No matching repositories",loading:"loaded","loading-text":"Crunching the latest data...."},on:{"click:row":e.clickRow},scopedSlots:e._u([{key:"item.pushed_at",fn:function(t){var r=t.item;return[e._v("\n                        "+e._s(new Date(r.pushed_at).toLocaleDateString())+"\n                    ")]}}])})],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VCard:v.a,VCardTitle:h.b,VCol:f.a,VContainer:m.a,VDataTable:w.a,VIcon:x.a,VRow:_.a,VTextField:k.a})}}]);