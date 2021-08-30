(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{16:function(t,e,n){t.exports={filterContainer:"Filter_filterContainer__4gIma",filter:"Filter_filter__G6oKr",label:"Filter_label__1-tDa"}},19:function(t,e,n){t.exports={contactList:"ContactList_contactList__30NL7",notification:"ContactList_notification__2smGc"}},23:function(t,e,n){t.exports={section:"Section_section__21J-K"}},24:function(t,e,n){t.exports={container:"Container_container__26fzK"}},4:function(t,e,n){t.exports={form:"Form_form__3wtma",label:"Form_label__26cRa",field:"Form_field__1FHkg",invalid:"Form_invalid__Ygr3H",submit:"Form_submit__2tHzW",FieldIcon:"Form_FieldIcon__MbAXu",AddIcon:"Form_AddIcon__1Ade8"}},52:function(t,e,n){},53:function(t,e,n){"use strict";n.r(e);var r,a=n(0),c=n.n(a),o=n(9),i=n.n(o),l=n(3),s=n(22),u=function(t){return t.contacts.items},b=function(t){return t.contacts.filter},f=function(t){var e=u(t),n=b(t);return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},m=function(t){return t.contacts.items.length>0},j=n(15),d=(n(38),n(23)),O=n.n(d),h=n(24),p=n.n(h),v=n(1),x=function(t){var e=t.children;return Object(v.jsx)("div",{className:p.a.container,children:e})},g=function(t){var e=t.children;return Object(v.jsx)("section",{className:O.a.section,children:Object(v.jsx)(x,{children:e})})},_=n(7),y=n(20),w=n(12),C=n(5),I=n(25),N=n.n(I),L=Object(C.b)("contacts/add",(function(t){return{payload:Object(w.a)({id:N.a.generate()},t)}})),F=Object(C.b)("contacts/delete"),E=Object(C.b)("contacts/setFilter",(function(t){return{payload:t.toLowerCase()}})),k=["title","titleId"];function P(){return(P=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function S(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function A(t,e){var n=t.title,c=t.titleId,o=S(t,k);return a.createElement("svg",P({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18",ref:e,"aria-labelledby":c},o),n?a.createElement("title",{id:c},n):null,r||(r=a.createElement("path",{d:"M9 9C10.6575 9 12 7.6575 12 6C12 4.3425 10.6575 3 9 3C7.3425 3 6 4.3425 6 6C6 7.6575 7.3425 9 9 9ZM9 10.5C6.9975 10.5 3 11.505 3 13.5V14.25C3 14.6625 3.3375 15 3.75 15H14.25C14.6625 15 15 14.6625 15 14.25V13.5C15 11.505 11.0025 10.5 9 10.5Z"})))}var M,z=a.forwardRef(A),Z=(n.p,["title","titleId"]);function B(){return(B=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function R(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function H(t,e){var n=t.title,r=t.titleId,c=R(t,Z);return a.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18",ref:e,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,M||(M=a.createElement("path",{d:"M13.996 11.1226L12.1579 10.9127C11.7164 10.862 11.2822 11.014 10.971 11.3252L9.63945 12.6568C7.59144 11.6147 5.91251 9.94296 4.87041 7.8877L6.20922 6.54888C6.5204 6.2377 6.67237 5.80349 6.62171 5.36205L6.41185 3.53836C6.325 2.80745 5.70988 2.25745 4.97173 2.25745H3.71976C2.902 2.25745 2.22175 2.93771 2.2724 3.75547C2.65595 9.93572 7.59868 14.8712 13.7717 15.2548C14.5894 15.3054 15.2697 14.6252 15.2697 13.8074V12.5555C15.2769 11.8245 14.7269 11.2094 13.996 11.1226Z"})))}var J,D=a.forwardRef(H),K=(n.p,["title","titleId"]);function V(){return(V=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function W(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function Y(t,e){var n=t.title,r=t.titleId,c=W(t,K);return a.createElement("svg",V({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",ref:e,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,J||(J=a.createElement("path",{d:"M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"})))}var q,G=a.forwardRef(Y),$=(n.p,n(4)),Q=n.n($),T=function(){var t=Object(a.useState)(""),e=Object(y.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)(""),o=Object(y.a)(c,2),i=o[0],s=o[1],b=Object(l.c)(u),f=Object(l.b)(),m={name:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",number:"^\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}$"},d=function(t,e){var n=new RegExp(e);return""===t||n.test(t)},O=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":r(a);break;case"number":s(a);break;default:throw new Error("Wrong Input field name invoked!")}},h=function(){r(""),s("")},p=function(t,e){return[Q.a.label].concat(Object(_.a)(d(t,m[e])?[]:[Q.a.invalid])).join(" ")};return Object(v.jsxs)("form",{autoComplete:"off",className:Q.a.form,onSubmit:function(t){if(t.preventDefault(),b.some((function(t){return t.name.toLowerCase()===n.toLowerCase()})))return j.b.error('"'.concat(n,'" is already in contacts!'));f(L({name:n,number:i})),h()},children:[Object(v.jsxs)("label",{htmlFor:"name",className:p(n,"name"),children:["Name",Object(v.jsx)(z,{className:Q.a.FieldIcon,width:20,height:20}),Object(v.jsx)("input",{type:"text",name:"name",value:n,className:Q.a.field,onChange:O,pattern:m.name,title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(v.jsxs)("label",{htmlFor:"number",className:p(i,"number"),children:["Number",Object(v.jsx)(D,{className:Q.a.FieldIcon,width:20,height:20}),Object(v.jsx)("input",{type:"tel",name:"number",value:i,className:Q.a.field,onChange:O,pattern:m.number,title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(v.jsxs)("button",{type:"submit",className:[Q.a.submit].concat(Object(_.a)(n&&i&&d(n,m.name)&&d(i,m.number)?[]:[Q.a.invalid])).join(" "),children:[Object(v.jsx)(G,{className:Q.a.AddIcon,width:16,height:16}),"Add Contact"]})]})},U=n(16),X=n.n(U);function tt(){var t=Object(l.c)(b),e=Object(l.b)();return Object(v.jsxs)("div",{className:X.a.filterContainer,children:[Object(v.jsx)("label",{htmlFor:"name",className:X.a.label,children:"Find contacts by name"}),Object(v.jsx)("input",{type:"text",name:"filter",className:X.a.filter,value:t,onChange:function(t){return e(E(t.target.value))}})]})}var et=["title","titleId"];function nt(){return(nt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function rt(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function at(t,e){var n=t.title,r=t.titleId,c=rt(t,et);return a.createElement("svg",nt({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",ref:e,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,q||(q=a.createElement("path",{d:"M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"})))}var ct=a.forwardRef(at),ot=(n.p,n(8)),it=n.n(ot);var lt=function(t){var e=t.name,n=t.number,r=t.onDelete;return Object(v.jsxs)("li",{className:it.a.contactListItem,children:[Object(v.jsxs)("p",{className:it.a.contactMeta,children:[Object(v.jsx)("span",{className:it.a.name,children:e}),": ",Object(v.jsx)("span",{className:it.a.number,children:n})]}),Object(v.jsx)("button",{type:"button",className:it.a.button,onClick:r,children:Object(v.jsx)(ct,{className:it.a.CrossIcon,width:"12"})})]})},st=n(19),ut=n.n(st);function bt(){var t=Object(l.c)(f),e=Object(l.b)();return t.length?Object(v.jsx)("ul",{className:ut.a.contactList,children:t.map((function(t){var n=t.id,r=t.name,a=t.number;return Object(v.jsx)(lt,{id:n,name:r,number:a,onDelete:function(){return e(F(n))}},n)}))}):Object(v.jsx)("p",{className:ut.a.notification,children:"No contact found"})}var ft,mt=function(){var t=Object(l.c)(m);return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(g,{children:[Object(v.jsx)("h1",{children:"Phonebook"}),Object(v.jsx)(T,{})]}),Object(v.jsxs)(g,{children:[Object(v.jsx)("h2",{children:"Contacts"}),t?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(tt,{}),Object(v.jsx)(bt,{})]}):Object(v.jsx)("p",{children:"Phonebook is empty"})]}),Object(v.jsx)(j.a,{autoClose:3e3,theme:"light"})]})},jt=n(26),dt=n.n(jt),Ot=n(6),ht=n(27),pt=n.n(ht),vt=n(10),xt=n(2),gt=Object(C.c)([],(ft={},Object(vt.a)(ft,L,(function(t,e){var n=e.payload;return[].concat(Object(_.a)(t),[n])})),Object(vt.a)(ft,F,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),ft)),_t=Object(C.c)("",Object(vt.a)({},E,(function(t,e){return e.payload}))),yt=Object(xt.b)({items:gt,filter:_t}),wt={key:"contacts",storage:pt.a,blacklist:["filter"]},Ct=[].concat(Object(_.a)(Object(C.d)({serializableCheck:{ignoredActions:[Ot.a,Ot.f,Ot.b,Ot.c,Ot.d,Ot.e]}})),[dt.a]),It=Object(C.a)({reducer:{contacts:Object(Ot.g)(wt,yt)},middleware:Ct,devTools:!1}),Nt=Object(Ot.h)(It);n(51),n(52);i.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(l.a,{store:It,children:Object(v.jsx)(s.a,{loading:null,persistor:Nt,children:Object(v.jsx)(mt,{})})})}),document.getElementById("root"))},8:function(t,e,n){t.exports={contactListItem:"ContactListItem_contactListItem__5JiEj",contactMeta:"ContactListItem_contactMeta__16trm",name:"ContactListItem_name__3SNY6",number:"ContactListItem_number__2UzQ4",button:"ContactListItem_button__3W2s6",CrossIcon:"ContactListItem_CrossIcon__leZYv"}}},[[53,1,2]]]);
//# sourceMappingURL=main.87b57de3.chunk.js.map