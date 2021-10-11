(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{36:function(e,t,n){},38:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(20),s=n.n(r),c=(n(36),n(3)),i=n.n(c),u=n(6),o=(n(38),n(4)),l=n(11),d=n(13),p=n(28),j="https://hasura-amhr.onrender.com/v1/graphql",b=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a,r=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=3,fetch(j,{method:"POST",body:JSON.stringify({query:t,variables:n})});case 3:return a=e.sent,e.next=6,a.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=n(12),f=n(10),O=n(1);var h=function(e){var t=e.item,n=e.onClick,a=e.handleDeleteTask;return Object(O.jsxs)("div",{className:"item pointer ".concat(t.status?"done":""),onClick:function(){return n(t)},children:[Object(O.jsx)("div",{className:"itemContent",children:t.name}),Object(O.jsx)(m.a,{className:"deleteBtn",icon:f.d,color:"red",onClick:function(e){return a(e,t.id)}})]})};var v=function(){var e=Object(o.f)(),t=JSON.parse(localStorage.getItem("token")),n=Object(d.c)((function(e){return e.todoList})),r=Object(d.b)(),s=Object(a.useState)(""),c=Object(l.a)(s,2),j=c[0],v=c[1],x=Object(a.useCallback)((function(){var e;t&&r((e=t.id,function(){var t=Object(u.a)(i.a.mark((function t(n){var a,r,s,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={id:e},t.next=4,b('\n      query MyQuery($id: uuid = "") {\n        users_by_pk(id: $id) {\n          id\n          name\n          password\n          todos(order_by: {created_at: asc}) {\n            id\n            name\n            status\n            created_at\n            updated_at\n            userId\n          }\n        }\n      }\n    ',a);case 4:r=t.sent,s=r.errors,c=r.data,s?console.log(s):n({type:"UPDATE_TODOLIST",payload:c.users_by_pk.todos});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}),[r]);Object(a.useEffect)((function(){x()}),[x]);var g=function(e){var t,a,s,c=n.find((function(t){return t.id===e.id}));r((t=c.id,a=!c.status,s=n,function(){var e=Object(u.a)(i.a.mark((function e(n){var r,c,u,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={id:t,status:a},e.next=4,b('\n      mutation MyMutation($id: uuid = "", $status: Boolean = false) {\n        update_todos_by_pk(pk_columns: {id: $id}, _set: {status: $status}) {\n          id\n          name\n          status\n          userId\n          created_at\n          updated_at\n        }\n      }\n    ',r);case 4:c=e.sent,(u=c.errors)?console.log(u):(o=s.map((function(e){return e.id===t?Object(p.a)(Object(p.a)({},e),{},{status:!e.status}):e})),n({type:"UPDATE_TODOLIST",payload:o}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},N=function(){var e,n;v(""),r((e=j,n=t.id,function(){var t=Object(u.a)(i.a.mark((function t(a){var r,s,c,u;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={name:e,userId:n},t.next=4,b('\n      mutation MyMutation($name: String = "", $userId: uuid = "") {\n        insert_todos_one(object: {name: $name, userId: $userId}) {\n          id\n          name\n          status\n          userId\n          created_at\n          updated_at\n        }\n      }\n    ',r);case 4:s=t.sent,c=s.errors,u=s.data,c?console.log(c):a({type:"INSERT_TODOLIST",payload:u.insert_todos_one});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))},y=function(e,t){e.stopPropagation(),r(function(e,t){return function(){var n=Object(u.a)(i.a.mark((function n(a){var r,s,c,u;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={id:e},n.next=4,b('\n      mutation MyMutation($id: uuid = "") {\n        delete_todos_by_pk(id: $id) {\n          id\n          name\n          status\n          userId\n          created_at\n          updated_at\n        }\n      }\n    ',r);case 4:s=n.sent,(c=s.errors)?console.log(c):(u=t,t.forEach((function(t,n){t.id===e&&u.splice(n,1)})),a({type:"UPDATE_TODOLIST",payload:u}));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(t,n))};return Object(O.jsxs)("div",{className:"todoList",children:[Object(O.jsxs)("div",{className:"btn-logout pointer",onClick:function(){return localStorage.removeItem("token"),void e.push("/TestHasura/login")},children:[Object(O.jsx)("div",{children:"Log out"}),Object(O.jsx)(m.a,{className:"logout-icon",icon:f.c,color:"red",onClick:function(e){}})]}),Object(O.jsxs)("div",{className:"card",children:[Object(O.jsx)("div",{className:"title",children:"TO DO"}),n.map((function(e){return Object(O.jsx)(h,{item:e,onClick:g,handleDeleteTask:y},e.id)})),Object(O.jsx)("hr",{className:"horizontal_divider"}),Object(O.jsxs)("div",{className:"addTask",children:[Object(O.jsx)("input",{className:"addInput",type:"text",placeholder:"+ New task",value:j,onChange:function(e){return v(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&N()}}),Object(O.jsx)("button",{className:"addBtn",onClick:N,children:"Add"})]})]})]})},x=n(14),g="https://hasura-amhr.onrender.com/v1/graphql",N=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a,r=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=3,fetch(g,{method:"POST",body:JSON.stringify({query:t,variables:n})});case 3:return a=e.sent,e.next=6,a.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(e,t){return function(){var n=Object(u.a)(i.a.mark((function n(a){var r,s,c,u,o;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"\n        query MyQuery {\n            users {\n            id\n            name\n            userName\n            password\n            }\n        }\n    ",n.next=3,N("\n        query MyQuery {\n            users {\n            id\n            name\n            userName\n            password\n            }\n        }\n    ");case 3:if(r=n.sent,s=r.errors,c=r.data,u=c.users.find((function(n){return e===n.userName&&n.password===t})),!s){n.next=10;break}console.log(s),n.next=17;break;case 10:if(!u){n.next=16;break}return o=JSON.stringify(u),n.next=14,localStorage.setItem("token",o);case 14:n.next=17;break;case 16:alert("Sai t\xe0i kho\u1ea3n ho\u1eb7c m\u1eadt kh\u1ea9u!");case 17:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},k=function(e,t,n){return function(){var a=Object(u.a)(i.a.mark((function a(r){var s,c,u,o,l;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s={name:e,userName:t,password:n},'\n      mutation MyMutation($name: String = "", $userName: String = "", $password: String = "") {\n        insert_users_one(object: {name: $name, userName: $userName, password: $password}) {\n          id\n          name\n          userName\n          password\n        }\n      }\n    ',a.next=4,N('\n      mutation MyMutation($name: String = "", $userName: String = "", $password: String = "") {\n        insert_users_one(object: {name: $name, userName: $userName, password: $password}) {\n          id\n          name\n          userName\n          password\n        }\n      }\n    ',s);case 4:if(c=a.sent,u=c.errors,o=c.data,!u){a.next=11;break}u.some((function(e){return'Uniqueness violation. duplicate key value violates unique constraint "users_username_key"'===e.message}))?alert("T\xean \u0111\u0103ng nh\u1eadp n\xe0y \u0111\xe3 t\u1ed3n t\u1ea1i. Vui l\xf2ng \u0111\u1ed5i t\xean \u0111\u0103ng nh\u1eadp kh\xe1c!"):console.log(u),a.next=14;break;case 11:return l=JSON.stringify(o.insert_users_one),a.next=14,localStorage.setItem("token",l);case 14:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()};var w=function(){var e=Object(o.f)(),t=Object(a.useState)(!1),n=Object(l.a)(t,2),r=n[0],s=n[1],c=Object(a.useState)(""),p=Object(l.a)(c,2),j=p[0],b=p[1],h=Object(a.useState)(""),v=Object(l.a)(h,2),g=v[0],N=v[1],k=Object(d.b)(),w=function(){var t=Object(u.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,k(y(j,g));case 3:localStorage.getItem("token")&&e.push("/TestHasura");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"card card-center",children:[Object(O.jsx)("h1",{className:"title",children:"Login"}),Object(O.jsxs)("form",{className:"form",children:[Object(O.jsx)("div",{className:"label-input",children:"User name:"}),Object(O.jsxs)("div",{className:"Icon-inside",children:[Object(O.jsx)("input",{className:"input-field",type:"text",value:j,onChange:function(e){return b(e.target.value)}}),Object(O.jsx)(m.a,{className:"input-icon",icon:f.e})]}),Object(O.jsx)("div",{className:"label-input mt",children:"Password:"}),Object(O.jsxs)("div",{className:"Icon-inside",children:[Object(O.jsx)("input",{className:"input-field",id:"password",type:r?"text":"password",value:g,onChange:function(e){return N(e.target.value)}}),Object(O.jsx)(m.a,{className:"input-icon pointer",icon:r?f.b:f.a,onClick:function(){s(!r)}})]}),Object(O.jsx)("button",{className:"btn-login pointer",onClick:function(e){w(e)},children:"Login"}),Object(O.jsx)(x.b,{className:"switch-login-register",to:"/TestHasura/register",children:"Register"})]})]})};var _=function(){var e=Object(o.f)(),t=Object(a.useState)(!1),n=Object(l.a)(t,2),r=n[0],s=n[1],c=Object(a.useState)(""),p=Object(l.a)(c,2),j=p[0],b=p[1],h=Object(a.useState)(""),v=Object(l.a)(h,2),g=v[0],N=v[1],y=Object(a.useState)(""),w=Object(l.a)(y,2),_=w[0],S=w[1],T=Object(d.b)(),I=function(){var t=Object(u.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,T(k(j,g,_));case 3:localStorage.getItem("token")&&e.push("/TestHasura");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"card card-center",children:[Object(O.jsx)("h1",{className:"title",children:"Register"}),Object(O.jsxs)("form",{className:"form",children:[Object(O.jsx)("div",{className:"label-input",children:"Name:"}),Object(O.jsx)("div",{className:"Icon-inside",children:Object(O.jsx)("input",{className:"input-field",type:"text",value:j,onChange:function(e){return b(e.target.value)}})}),Object(O.jsx)("div",{className:"label-input mt",children:"User name:"}),Object(O.jsxs)("div",{className:"Icon-inside",children:[Object(O.jsx)("input",{className:"input-field",type:"text",value:g,onChange:function(e){return N(e.target.value)}}),Object(O.jsx)(m.a,{className:"input-icon",icon:f.e})]}),Object(O.jsx)("div",{className:"label-input mt",children:"Password:"}),Object(O.jsxs)("div",{className:"Icon-inside",children:[Object(O.jsx)("input",{className:"input-field",id:"password",type:r?"text":"password",value:_,onChange:function(e){return S(e.target.value)}}),Object(O.jsx)(m.a,{className:"input-icon pointer",icon:r?f.b:f.a,onClick:function(){s(!r)}})]}),Object(O.jsx)("button",{className:"btn-login pointer",onClick:function(e){I(e)},children:"Register"}),Object(O.jsx)(x.b,{className:"switch-login-register",to:"/TestHasura/login",children:"Back"})]})]})},S=[{path:"/TestHasura",exact:!0,main:function(){return Object(O.jsx)(v,{})}},{path:"/TestHasura/login",exact:!0,main:function(){return Object(O.jsx)(w,{})}},{path:"/TestHasura/register",exact:!0,main:function(){return Object(O.jsx)(_,{})}}];var T=function(){var e=Object(o.f)();return Object(a.useEffect)((function(){var t=function(){var t=Object(u.a)(i.a.mark((function t(){var n,a,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=["/login","/register"],t.next=3,localStorage.getItem("token");case 3:a=t.sent,S.some((function(t){return t.path===e.location.pathname}))?(r=n.some((function(t){return t===e.location.pathname})),a&&r&&e.push("/TestHasura"),a||r||e.push("/TestHasura/login")):a?e.push("/TestHasura"):e.push("/TestHasura/login");case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e]),Object(O.jsx)("div",{className:"all",children:Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(o.c,{children:function(e){var t=null;return e.length>0&&(t=e.map((function(e,t){return Object(O.jsx)(o.a,{path:e.path,exact:e.exact,component:e.main},t)}))),t}(S)})})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))},$=n(17),C=n(31),D=n(27),L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_TODOLIST":return Object(D.a)(t.payload);case"INSERT_TODOLIST":return[].concat(Object(D.a)(e),[t.payload]);default:return e}},M=Object($.b)({todoList:L}),H=Object($.c)(M,Object($.a)(C.a));s.a.render(Object(O.jsx)(d.a,{store:H,children:Object(O.jsx)(x.a,{children:Object(O.jsx)(T,{})})}),document.getElementById("root")),I()}},[[54,1,2]]]);
//# sourceMappingURL=main.12a4ee7d.chunk.js.map