(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{295:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__14aIE",col_1:"Dialogs_col_1__utUM0",col_2:"Dialogs_col_2__HhYbw",textarea:"Dialogs_textarea__yPbgB",textarea__inner:"Dialogs_textarea__inner__4U9ir"}},296:function(e,a,t){e.exports={col_2:"DialogMessage_col_2__1mdNK",col_2_item_logo:"DialogMessage_col_2_item_logo__3eSUo",col_2_item:"DialogMessage_col_2_item__3jvp4",col_2_item_logo_inner:"DialogMessage_col_2_item_logo_inner__u0ezY",col_2_item_text:"DialogMessage_col_2_item_text__2Igtq",item__inner:"DialogMessage_item__inner__3BIgz"}},297:function(e,a,t){e.exports={col_1_item:"DialogContact_col_1_item__42Jyt",img:"DialogContact_img___VBC9"}},302:function(e,a,t){"use strict";t.r(a);var i=t(0),l=t.n(i),n=t(129),_=t(295),o=t.n(_),c=t(296),m=t.n(c),s=function(e){var a=e.img;return l.a.createElement("div",{className:m.a.col_2_item},l.a.createElement("div",{className:m.a.item__inner},l.a.createElement("div",{className:m.a.col_2_item_logo_inner},l.a.createElement("img",{className:m.a.col_2_item_logo,src:a,alt:""}),l.a.createElement("p",{className:m.a.col_2_item_name},e.name)),l.a.createElement("div",{className:m.a.col_2_item_text},l.a.createElement("p",null,e.message))))},r=t(297),g=t.n(r),d=t(12),u=function(e){var a="/dialogs/"+e.id,t=e.img;return l.a.createElement("div",{className:g.a.inner},l.a.createElement("p",{className:g.a.col_1_item+" "+g.a.active},l.a.createElement("span",{className:g.a.img},l.a.createElement("img",{className:g.a.img,src:t,alt:""})),l.a.createElement(d.b,{to:a},e.name)))},E=t(90),p=t(130),D=t(37),N=t(50),b=Object(N.a)(50),f=Object(p.a)({form:"AddDialog"})((function(e){return l.a.createElement("form",{className:o.a.textarea__inner,onSubmit:e.handleSubmit},l.a.createElement(E.a,{className:o.a.textarea,name:"AddDialogField",placeholder:"Write message",component:D.b,validate:[N.b,b]}),l.a.createElement("button",{className:o.a.textarea}," Send message"))})),v=function(e){var a=e.dialogsPage.dialogsData.map((function(e){return l.a.createElement(u,{key:e.id,name:e.name,id:e.id,img:e.img})})),t=e.dialogsPage.dialogsMessage.map((function(e){return l.a.createElement(s,{key:e.id,id:e.id,name:e.name,message:e.message,img:e.img})}));return l.a.createElement("div",null,l.a.createElement("div",{className:o.a.dialogs},l.a.createElement("div",{className:o.a.col_1},l.a.createElement("h1",{className:o.a.title},"Dialogs"),l.a.createElement("div",null,a)),l.a.createElement("div",{className:o.a.col_2},l.a.createElement(f,{onSubmit:function(a){e.addDialogActionCreator(a.AddDialogField)}}),t)))},x=t(13),M=t(141),h=t(8);a.default=Object(h.d)(Object(x.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{addDialogActionCreator:function(a){e(Object(n.a)(a))}}})),M.a)(v)}}]);
//# sourceMappingURL=4.b986e606.chunk.js.map