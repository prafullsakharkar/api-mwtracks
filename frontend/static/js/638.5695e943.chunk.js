"use strict";(self.webpackChunkmwtracks=self.webpackChunkmwtracks||[]).push([[638],{87638:function(e,r,t){t.r(r),t.d(r,{default:function(){return ee}});var n=t(29439),s=t(94560),a=t(5531),o=t(47313),i=t(22408),c=t(58467),u=t(83508),l=t(17592),d=t(30242),p=t(3394),f=t(47131),h=t(64013),v=t(46417);var m=function(e){return(0,i.I0)(),(0,v.jsxs)("div",{className:"flex flex-col flex-auto",children:[(0,v.jsx)(f.Z,{className:"absolute top-0 right-0 my-16 mx-32 z-10",sx:{color:"white"},component:p.Z,to:"/accounts/users",size:"large",children:(0,v.jsx)(h.Z,{children:"heroicons-outline:x"})}),(0,v.jsx)(c.j3,{})]})},Z=t(63585),x=t(71263),j=t(89600),g=t(39300),y=t(68941),b=t(61113),w=t(74748),C=t(85582),S=t(51405),k=t(14560),N=t(31095),P=t(83213),A=t(1413),R=t(45987),U=t(93433),M=t(75908),T=t(66149),I=t(4117),O=t(96467),F=t(48310),_=t(20527),D=t(44758),G=t(73428),K=t(54641),z=t(19536),L=t(9289),E=t(42719),H=["onClose","value","open","selectedUserIds"];function W(e,r){return e.filter((function(e){return-1===r.indexOf(e)}))}var Y=function(e){var r=(0,i.I0)(),t=e.onClose,s=e.value,a=e.open,c=e.selectedUserIds,u=(0,R.Z)(e,H),l=(0,i.v9)((function(e){var r,t=e.core;return null===t||void 0===t||null===(r=t.projects)||void 0===r?void 0:r.ids}))||[],d=(0,i.v9)((function(e){return e.userApp.users.entities})),p=(0,i.v9)((function(e){return e.userApp.groups.entities})),h=E.Z&&Object.keys(E.Z)||[],m=(0,o.useState)([]),Z=(0,n.Z)(m,2),j=Z[0],y=Z[1],C=(0,o.useState)([]),S=(0,n.Z)(C,2),k=S[0],Y=S[1],V=(0,o.useState)(null),B=(0,n.Z)(V,2),q=B[0],J=B[1],Q=(0,o.useState)(null),X=(0,n.Z)(Q,2),$=X[0],ee=X[1];(0,o.useEffect)((function(){if(a&&c){if("Deactivate Users"==s){var e=c.map((function(e){return d[e].username}));y(e),Y(e),ee("Users")}else if(["Add To Projects","Remove From Projects"].includes(s))y(l),ee("Projects");else if(["Add To Groups","Remove From Groups"].includes(s)){var r=Object.values(p).filter((function(e){return!h.includes(e.name)})).map((function(e){return e.name}));y(r),ee("Groups")}J(s.startsWith("Deactivate")?"Deactivate":s.startsWith("Add")?"Add":"Remove")}}),[s,a,c]);var re=function(){t(),Y([])},te=function(e){return(r=k,t=e,r.filter((function(e){return-1!==t.indexOf(e)}))).length;var r,t},ne=function(e){return function(){var r=k.indexOf(e),t=(0,U.Z)(k);-1===r?t.push(e):t.splice(r,1),Y(t)}};function se(e){if(e.preventDefault(),"Deactivate Users"===s){var t=Object.values(d).filter((function(e){return k.includes(e.username)})).map((function(e){return e.id}));r((0,g.bz)(t))}else if("Add To Projects"===s){var n={projects:l.filter((function(e){return k.includes(e)})),users:c};r((0,g.oY)(n))}else if("Remove From Projects"===s){var a={projects:l.filter((function(e){return k.includes(e)})),users:c};r((0,g.IY)(a))}else if("Add To Groups"===s){var o={groups:Object.values(p).filter((function(e){return k.includes(e.name)})).map((function(e){return e.id})),users:c};r((0,g.tI)(o))}else if("Remove From Groups"===s){var i={groups:Object.values(p).filter((function(e){return k.includes(e.name)})).map((function(e){return e.id})),users:c};r((0,g.lP)(i))}re()}return(0,v.jsxs)(T.Z,(0,A.Z)((0,A.Z)({classes:{paper:"m-24 rounded-16"},open:a},u),{},{fullWidth:!0,maxWidth:"xs",children:[(0,v.jsx)(M.Z,{position:"static",className:"shadow-md",children:(0,v.jsx)(L.Z,{className:"flex w-full",children:(0,v.jsx)(b.Z,{variant:"subtitle1",color:"inherit",children:s})})}),(0,v.jsxs)("form",{noValidate:!0,onSubmit:se,className:"flex flex-col md:overflow-hidden",children:[(0,v.jsx)(O.Z,{className:"p-24",children:(0,v.jsx)("div",{className:"flex flex-1 justify-between",children:(0,v.jsxs)(G.Z,{className:"w-full",children:[(0,v.jsx)(K.Z,{avatar:(0,v.jsx)(D.Z,{onClick:function(e){return function(){var r,t;te(e)===e.length?Y(W(k,e)):Y((r=k,t=e,[].concat((0,U.Z)(r),(0,U.Z)(W(t,r)))))}}(j),checked:te(j)===j.length&&0!==j.length,indeterminate:te(j)!==j.length&&0!==te(j),disabled:0===j.length,inputProps:{"aria-label":"all items selected"}}),title:"".concat($," (").concat(te(j),"/").concat(j.length," selected)"),subheader:(0,v.jsx)("p",{children:k.join(", ")})}),(0,v.jsx)(z.Z,{}),(0,v.jsxs)(F.Z,{dense:!0,component:"div",role:"list",children:[j.map((function(e){var r="transfer-list-all-item-".concat(e,"-label");return(0,v.jsxs)(_.ZP,{role:"listitem",onClick:ne(e),children:[(0,v.jsx)(w.Z,{children:(0,v.jsx)(D.Z,{checked:-1!==k.indexOf(e),tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":r}})}),(0,v.jsx)(P.Z,{id:r,primary:e})]},e)})),(0,v.jsx)(_.ZP,{})]})]})})}),(0,v.jsxs)(I.Z,{className:"justify-between pl-16",children:[(0,v.jsx)(N.Z,{variant:"contained",color:"primary",onClick:se,type:"submit",disabled:!(k.length>0),children:q}),(0,v.jsx)(f.Z,{onClick:re,children:(0,v.jsx)(x.Z,{children:"close"})})]})]})]}))};var V=function(e){(0,i.I0)();var r=e.selectedUserIds,t=(0,o.useState)(null),s=(0,n.Z)(t,2),a=s[0],c=s[1],u=(0,o.useState)(!1),l=(0,n.Z)(u,2),d=l[0],p=l[1],f=(0,o.useState)("Deactivate Users"),h=(0,n.Z)(f,2),m=h[0],Z=h[1],j=function(e){e&&Z(e),p(!0)};function g(){c(null)}return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(N.Z,{color:"secondary","aria-owns":a?"selectedUserMenu":null,"aria-haspopup":"true",disabled:!r.length,onClick:function(e){c(e.currentTarget)},variant:"contained",children:"Action Menu"}),(0,v.jsx)(C.Z,{id:"selectedUserMenu",anchorEl:a,open:Boolean(a),onClose:g,children:(0,v.jsxs)(k.Z,{children:[(0,v.jsxs)(S.Z,{onClick:function(){j("Deactivate Users"),g()},children:[(0,v.jsx)(w.Z,{className:"min-w-40",children:(0,v.jsx)(x.Z,{children:"delete"})}),(0,v.jsx)(P.Z,{primary:"Deactivate Users"})]}),(0,v.jsxs)(S.Z,{onClick:function(){j("Add To Projects"),g()},children:[(0,v.jsx)(w.Z,{className:"min-w-40",children:(0,v.jsx)(x.Z,{children:"movie"})}),(0,v.jsx)(P.Z,{primary:"Add To Projects"})]}),(0,v.jsxs)(S.Z,{onClick:function(){j("Remove From Projects"),g()},children:[(0,v.jsx)(w.Z,{className:"min-w-40",children:(0,v.jsx)(x.Z,{children:"movie"})}),(0,v.jsx)(P.Z,{primary:"Remove From Projects"})]}),(0,v.jsxs)(S.Z,{onClick:function(){j("Add To Groups"),g()},children:[(0,v.jsx)(w.Z,{className:"min-w-40",children:(0,v.jsx)(x.Z,{children:"group"})}),(0,v.jsx)(P.Z,{primary:"Add To Groups"})]}),(0,v.jsxs)(S.Z,{onClick:function(){j("Remove From Groups"),g()},children:[(0,v.jsx)(w.Z,{className:"min-w-40",children:(0,v.jsx)(x.Z,{children:"group"})}),(0,v.jsx)(P.Z,{primary:"Remove From Groups"})]})]})}),(0,v.jsx)(Y,{id:"action-menu",keepMounted:!0,open:d,onClose:function(e){p(!1),e&&Z(e)},value:m,selectedUserIds:r})]})};var B=function(e){var r=(0,i.v9)(g.YN)||[],t=(0,i.v9)((function(e){return e.userApp.users.isLoading})),n=o.useMemo((function(){return[{header:"Id",accessorKey:"id",size:60},{header:"Avatar",accessorKey:"avatar",Cell:function(e){var r=e.row;return(0,v.jsx)(Z.Z,{className:"mx-8",alt:r.original.name,src:r.original.avatar,sx:{width:32,height:32}})},size:80},{header:"User Name",accessorKey:"username",size:120},{header:"First Name",accessorKey:"first_name"},{header:"Last Name",accessorKey:"last_name"},{header:"Role",accessorKey:"role",size:100},{header:"Email",accessorKey:"email",size:250},{header:"Active",accessorKey:"is_active",Cell:function(e){return e.cell.getValue()?(0,v.jsx)(x.Z,{className:"text-green text-20",children:"check_circle"}):(0,v.jsx)(x.Z,{className:"text-red text-20",children:"remove_circle"})},size:80},{header:"Joining Date",accessorKey:"date_joined",Cell:function(e){var r=e.cell;return(0,v.jsx)("span",{children:r.getValue()&&(0,j.Z)(new Date(r.getValue()),"dd-MM-y hh:mm:ss")})}},{header:"Last Login",accessorKey:"last_login",sortable:!0,Cell:function(e){var r=e.cell;return(0,v.jsx)("span",{children:r.getValue()&&(0,j.Z)(new Date(r.getValue()),"dd-MM-y hh:mm:ss")})}}]}),[]);return 0==r.length?(0,v.jsx)("div",{className:"flex flex-1 items-center justify-center h-full",children:(0,v.jsx)(b.Z,{color:"text.secondary",variant:"h5",children:"There are no users!"})}):(0,v.jsx)(y.Z,{isLoading:t,data:r,columns:n,renderTopToolbarCustomActions:function(e){var r=e.table;return(0,v.jsx)(V,{selectedUserIds:r.getSelectedRowModel().rows.map((function(e){return e.original.id}))})}})},q=t(9038),J=t(50786),Q=(0,q.UY)({users:g.ZP,groups:J.ZP}),X=t(11266),$=(0,l.ZP)(s.Z)((function(e){var r=e.theme;return{"& .PageSimple-header":{backgroundColor:r.palette.background.paper,borderBottomWidth:1,borderStyle:"solid",borderColor:r.palette.divider},"& .PageSimple-toolbar":{},"& .PageSimple-content":{},"& .PageSimple-sidebarHeader":{},"& .PageSimple-sidebarContent":{}}}));var ee=(0,a.Z)("userApp",Q)((function(e){var r=(0,i.I0)(),t=(0,o.useRef)(null),s=(0,c.UO)(),a=(0,o.useState)(!1),l=(0,n.Z)(a,2),p=l[0],f=l[1],h=(0,d.Z)((function(e){return e.breakpoints.down("lg")}));return(0,u.KW)((function(){r((0,g.Rf)()),r((0,J.jA)())}),[r]),(0,o.useEffect)((function(){f(Boolean(s.id))}),[s]),(0,v.jsx)($,{header:(0,v.jsx)(X.Z,{pageLayout:t,entity:"Users"}),content:(0,v.jsx)(B,{}),ref:t,rightSidebarContent:(0,v.jsx)(m,{}),rightSidebarOpen:p,rightSidebarOnClose:function(){return f(!1)},rightSidebarWidth:480,scroll:h?"normal":"content"})}))},39300:function(e,r,t){t.d(r,{IY:function(){return h},Ls:function(){return b},Nq:function(){return p},Rf:function(){return l},YN:function(){return y},bz:function(){return x},cn:function(){return d},lP:function(){return m},oY:function(){return f},tI:function(){return v}});var n,s=t(4942),a=t(74165),o=t(15861),i=t(80827),c=t(56573),u="/api/v1/account/users/",l=(0,i.hg)("userApp/users/getUsers",function(){var e=(0,o.Z)((0,a.Z)().mark((function e(r,t){var n,s,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.getState,n=null===r||void 0===r?void 0:r.id,s=null===r||void 0===r?void 0:r.entity,o="group"===s&&n?"/api/v1/user/group/"+n+"/users/":"project"===s&&n?"/api/v1/entity/project/"+n+"/users/":u,null===r||void 0===r||delete r.id,null===r||void 0===r||delete r.entity,e.next=8,c.Z.get(o,{params:r}).then((function(e){return e.data})).catch((function(e){console.error(e)}));case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()),d=(0,i.hg)("userApp/users/addUser",function(){var e=(0,o.Z)((0,a.Z)().mark((function e(r,t){var n,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch,t.getState,delete r.avatar,console.log(r),e.next=5,c.Z.post(u,r);case 5:return n=e.sent,e.next=8,n.data;case 8:return s=e.sent,e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()),p=(0,i.hg)("userApp/users/updateUser",function(){var e=(0,o.Z)((0,a.Z)().mark((function e(r,t){var n,s,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch,t.getState,n=r.id,delete r.id,e.next=5,c.Z.patch(u+n+"/",r);case 5:return s=e.sent,e.next=8,s.data;case 8:return o=e.sent,e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()),f=(0,i.hg)("userApp/users/addUserToProject",function(){var e=(0,o.Z)((0,a.Z)().mark((function e(r,t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.dispatch,t.getState,r.projects.forEach((function(e,t){c.Z.post("/api/v1/entity/project/"+e+"/add_users/",r.users).data}));case 2:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()),h=(0,i.hg)("userApp/users/removeUserFromProjects",function(){var e=(0,o.Z)((0,a.Z)().mark((function e(r,t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.dispatch,t.getState,r.projects.forEach((function(e,t){c.Z.post("/api/v1/entity/project/"+e+"/remove_users/",r.users).data}));case 2:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()),v=(0,i.hg)("userApp/users/addUserToGroups",function(){var e=(0,o.Z)((0,a.Z)().mark((function e(r,t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.dispatch,t.getState,r.users.forEach((function(e,t){c.Z.post(u+e+"/add_groups/",r.groups).data}));case 2:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()),m=(0,i.hg)("userApp/users/removeUserFromGroups",function(){var e=(0,o.Z)((0,a.Z)().mark((function e(r,t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.dispatch,t.getState,r.users.forEach((function(e,t){c.Z.post(u+e+"/remove_groups/",r.groups).data}));case 2:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()),Z=(0,i.hg)("userApp/users/removeUser",function(){var e=(0,o.Z)((0,a.Z)().mark((function e(r,t){var n,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch,t.getState,e.next=3,c.Z.delete(u+r+"/");case 3:return n=e.sent,e.next=6,n.data;case 6:return s=e.sent,e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()),x=(0,i.hg)("userApp/users/removeUsers",function(){var e=(0,o.Z)((0,a.Z)().mark((function e(r,t){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.dispatch,t.getState,r.forEach((function(e,r){n(p({id:e,is_active:!1}))}));case 2:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()),j=(0,i.HF)({}),g=j.getSelectors((function(e){return e.userApp.users})),y=g.selectAll,b=g.selectById,w=(0,i.oM)({name:"userApp/users",initialState:j.getInitialState({totalCount:0,isLoading:!0}),extraReducers:(n={},(0,s.Z)(n,Z.fulfilled,j.removeOne),(0,s.Z)(n,p.fulfilled,j.upsertOne),(0,s.Z)(n,d.fulfilled,j.addOne),(0,s.Z)(n,l.pending,(function(e,r){e.isLoading=!0})),(0,s.Z)(n,l.fulfilled,(function(e,r){var t=r.payload;j.setAll(e,(null===t||void 0===t?void 0:t.results)||t),e.totalCount=(null===t||void 0===t?void 0:t.count)||t.length,e.isLoading=!1})),n)});r.ZP=w.reducer},73428:function(e,r,t){t.d(r,{Z:function(){return Z}});var n=t(87462),s=t(63366),a=t(47313),o=t(2197),i=t(21921),c=t(17592),u=t(77342),l=t(70501),d=t(77430),p=t(32298);function f(e){return(0,p.Z)("MuiCard",e)}(0,d.Z)("MuiCard",["root"]);var h=t(46417),v=["className","raised"],m=(0,c.ZP)(l.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,r){return r.root}})((function(){return{overflow:"hidden"}})),Z=a.forwardRef((function(e,r){var t=(0,u.Z)({props:e,name:"MuiCard"}),a=t.className,c=t.raised,l=void 0!==c&&c,d=(0,s.Z)(t,v),p=(0,n.Z)({},t,{raised:l}),Z=function(e){var r=e.classes;return(0,i.Z)({root:["root"]},f,r)}(p);return(0,h.jsx)(m,(0,n.Z)({className:(0,o.Z)(Z.root,a),elevation:l?8:void 0,ref:r,ownerState:p},d))}))},54641:function(e,r,t){t.d(r,{Z:function(){return b}});var n=t(4942),s=t(63366),a=t(87462),o=t(47313),i=t(2197),c=t(21921),u=t(61113),l=t(77342),d=t(17592),p=t(77430),f=t(32298);function h(e){return(0,f.Z)("MuiCardHeader",e)}var v=(0,p.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),m=t(46417),Z=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],x=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,r){var t;return(0,a.Z)((t={},(0,n.Z)(t,"& .".concat(v.title),r.title),(0,n.Z)(t,"& .".concat(v.subheader),r.subheader),t),r.root)}})({display:"flex",alignItems:"center",padding:16}),j=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,r){return r.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),g=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,r){return r.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),y=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,r){return r.content}})({flex:"1 1 auto"}),b=o.forwardRef((function(e,r){var t=(0,l.Z)({props:e,name:"MuiCardHeader"}),n=t.action,o=t.avatar,d=t.className,p=t.component,f=void 0===p?"div":p,v=t.disableTypography,b=void 0!==v&&v,w=t.subheader,C=t.subheaderTypographyProps,S=t.title,k=t.titleTypographyProps,N=(0,s.Z)(t,Z),P=(0,a.Z)({},t,{component:f,disableTypography:b}),A=function(e){var r=e.classes;return(0,c.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,r)}(P),R=S;null==R||R.type===u.Z||b||(R=(0,m.jsx)(u.Z,(0,a.Z)({variant:o?"body2":"h5",className:A.title,component:"span",display:"block"},k,{children:R})));var U=w;return null==U||U.type===u.Z||b||(U=(0,m.jsx)(u.Z,(0,a.Z)({variant:o?"body2":"body1",className:A.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:U}))),(0,m.jsxs)(x,(0,a.Z)({className:(0,i.Z)(A.root,d),as:f,ref:r,ownerState:P},N,{children:[o&&(0,m.jsx)(j,{className:A.avatar,ownerState:P,children:o}),(0,m.jsxs)(y,{className:A.content,ownerState:P,children:[R,U]}),n&&(0,m.jsx)(g,{className:A.action,ownerState:P,children:n})]}))}))}}]);