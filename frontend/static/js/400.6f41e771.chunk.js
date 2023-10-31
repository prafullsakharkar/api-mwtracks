"use strict";(self.webpackChunkmwtracks=self.webpackChunkmwtracks||[]).push([[400],{50786:function(e,t,r){r.d(t,{$I:function(){return Z},BN:function(){return f},Gr:function(){return x},Kv:function(){return w},Rp:function(){return d},SA:function(){return y},jA:function(){return c},mD:function(){return g},xB:function(){return v}});var n,a=r(4942),i=r(74165),o=r(15861),l=r(80827),s=r(56573),p="/api/v1/account/groups/",c=(0,l.hg)("groupApp/groups/getGroups",(0,o.Z)((0,i.Z)().mark((function e(){var t,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get(p);case 2:return t=e.sent,e.next=5,t.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))),u=(0,l.hg)("groupApp/groups/getGroup",function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){var n,a,o,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch,n=r.getState,t=t||n().groupApp.groups.routeParams,a=t.uid,e.next=5,s.Z.get(p+a+"/");case 5:return o=e.sent,e.next=8,o.data;case 8:return l=e.sent,e.abrupt("return",{data:l,routeParams:t});case 10:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),d=(0,l.hg)("groupApp/groups/addGroup",function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){var n,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch,r.getState,e.next=3,s.Z.post(p,t);case 3:return n=e.sent,e.next=6,n.data;case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),g=(0,l.hg)("groupApp/groups/updateGroup",function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){var n,a,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch,r.getState,n=t.id,delete t.id,e.next=5,s.Z.patch(p+n+"/",t);case 5:return a=e.sent,e.next=8,a.data;case 8:return o=e.sent,e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),f=(0,l.hg)("groupApp/groups/removeGroup",function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch,r.getState,e.next=3,s.Z.delete(p+t+"/");case 3:return n=e.sent,e.next=6,n.data;case 6:return e.sent,e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),h=(0,l.HF)({}),m=h.getSelectors((function(e){return e.groupApp.groups})),x=m.selectAll,b=(m.selectById,(0,l.oM)({name:"groupApp/groups",initialState:h.getInitialState({searchText:"",routeParams:{},groupDialog:{type:"new",props:{open:!1},data:null}}),reducers:{setGroupsSearchText:{reducer:function(e,t){e.searchText=t.payload},prepare:function(e){return{payload:e.target.value||""}}},resetGroupsSearchText:function(e,t){e.searchText=""},openNewGroupDialog:function(e,t){e.groupDialog={type:"new",props:{open:!0},data:null}},closeNewGroupDialog:function(e,t){e.groupDialog={type:"new",props:{open:!1},data:null}},openEditGroupDialog:function(e,t){e.groupDialog={type:"edit",props:{open:!0},data:t.payload}},closeEditGroupDialog:function(e,t){e.groupDialog={type:"edit",props:{open:!1},data:null}}},extraReducers:(n={},(0,a.Z)(n,f.fulfilled,(function(e,t){h.removeOne(e,t.payload)})),(0,a.Z)(n,g.fulfilled,(function(e,t){t.payload.length>0?h.upsertMany(e,t.payload):h.upsertOne(e,t.payload)})),(0,a.Z)(n,d.fulfilled,(function(e,t){t.payload.length>0?h.upsertMany(e,t.payload):h.upsertOne(e,t.payload)})),(0,a.Z)(n,u.fulfilled,(function(e,t){var r=t.payload,n=r.data,a=r.routeParams;h.upsertOne(e,n),e.routeParams=a,e.searchText=""})),(0,a.Z)(n,c.fulfilled,(function(e,t){h.setAll(e,t.payload),e.searchText=""})),n)})),S=b.actions,v=(S.setGroupsSearchText,S.resetGroupsSearchText,S.openNewGroupDialog),Z=S.closeNewGroupDialog,w=S.openEditGroupDialog,y=S.closeEditGroupDialog;t.ZP=b.reducer},11266:function(e,t,r){var n=r(61113),a=r(70501),i=r(56605),o=r(31095),l=(r(47313),r(2135)),s=r(65503),p=r(64013),c=r(3394),u=r(22408),d=r(46417);t.Z=function(e){var t=(0,u.I0)(),r=s.Z.location.pathname,g=e.openNewDialog,f=e.entity,h=e.searchText,m=e.setSearchText;return(0,d.jsxs)("div",{className:"flex flex-col sm:flex-row space-y-16 sm:space-y-0 flex-1 w-full items-center justify-between py-8 px-16 md:px-16",children:[(0,d.jsx)(n.Z,{component:l.rU,to:r,role:"button",initial:{x:-20},animate:{x:0,transition:{delay:.2}},delay:300,className:"text-24 font-bold tracking-tight",children:f}),(0,d.jsxs)("div",{className:"flex flex-col w-full sm:w-auto sm:flex-row space-y-16 sm:space-y-0 flex-1 items-center justify-end space-x-8",children:[m&&(0,d.jsxs)(a.Z,{className:"flex items-center w-full sm:max-w-256 space-x-8 px-16 rounded-full border-1 shadow-0",children:[(0,d.jsx)(i.Z,{placeholder:"Search project",className:"flex flex-1",disableUnderline:!0,fullWidth:!0,value:h,inputProps:{"aria-label":"Search"},onChange:function(e){return t(m(e))}}),(0,d.jsx)(p.Z,{color:"disabled",children:"heroicons-solid:search"})]}),g?(0,d.jsxs)(o.Z,{variant:"contained",color:"secondary",onClick:function(e){e.stopPropagation(),t(g)},children:[(0,d.jsx)(p.Z,{size:20,children:"heroicons-outline:plus"}),(0,d.jsx)("span",{className:"mx-8",children:"Create"})]}):(0,d.jsxs)(o.Z,{variant:"contained",color:"secondary",component:c.Z,to:"new/edit",children:[(0,d.jsx)(p.Z,{size:20,children:"heroicons-outline:plus"}),(0,d.jsx)("span",{className:"mx-8",children:"Create"})]})]})]})}},94560:function(e,t,r){r.d(t,{Z:function(){return W}});var n=r(30168),a=r(4942),i=r(1413),o=r(45987),l=r(31835),s=r(17592),p=r(83061),c=r(47313),u=r(52437),d=r(46417);var g=function(e){return(0,d.jsx)("div",{className:(0,p.Z)("PageSimple-header",e.className),children:(0,d.jsx)("div",{className:"container",children:e.header&&e.header})})},f=r(29439),h=r(33947),m=r(57451),x=r(60211),b=r(22408),S=r(19860),v=r(6396),Z=r(95227);var w=function(e){var t=(0,S.Z)(),r=(0,b.v9)((0,Z.lK)(t.palette.primary.main));return(0,d.jsxs)(l.Z,{enable:e.innerScroll,children:[e.header&&(0,d.jsx)(v.Z,{theme:r,children:(0,d.jsx)("div",{className:(0,p.Z)("PageSimple-sidebarHeader",e.variant),children:e.header})}),e.content&&(0,d.jsx)("div",{className:"PageSimple-sidebarContent",children:e.content})]})},y=(0,c.forwardRef)((function(e,t){var r=e.open,n=e.position,a=e.variant,o=(e.rootRef,e.sidebarWidth),l=(0,c.useState)(r),s=(0,f.Z)(l,2),u=s[0],g=s[1];(0,c.useImperativeHandle)(t,(function(){return{toggleSidebar:b}}));var b=(0,c.useCallback)((function(e){g(e)}),[]);return(0,c.useEffect)((function(){b(r)}),[b,r]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(m.Z,{lgUp:"permanent"===a,children:(0,d.jsx)(x.Z,{variant:"temporary",anchor:n,open:u,onOpen:function(e){},onClose:function(){return null===e||void 0===e?void 0:e.onClose()},disableSwipeToOpen:!0,classes:{root:(0,p.Z)("PageSimple-sidebarWrapper",a),paper:(0,p.Z)("PageSimple-sidebar",a,"left"===n?"PageSimple-leftSidebar":"PageSimple-rightSidebar")},sx:{"& .MuiPaper-root":{width:o,maxWidth:"100%"}},ModalProps:{keepMounted:!0},BackdropProps:{classes:{root:"PageSimple-backdrop"}},style:{position:"absolute"},children:(0,d.jsx)(w,(0,i.Z)({},e))})}),"permanent"===a&&(0,d.jsx)(m.Z,{lgDown:!0,children:(0,d.jsx)(h.ZP,{variant:"permanent",anchor:n,className:(0,p.Z)("PageSimple-sidebarWrapper",a,u?"opened":"closed","left"===n?"PageSimple-leftSidebar":"PageSimple-rightSidebar"),open:u,onClose:null===e||void 0===e?void 0:e.onClose,classes:{paper:(0,p.Z)("PageSimple-sidebar border-0",a)},children:(0,d.jsx)(w,(0,i.Z)({},e))})})]})}));y.defaultProps={open:!0};var P,j=y,k=["theme"],C=(0,s.ZP)("div")((function(e){var t=e.theme,r=(0,o.Z)(e,k);return{display:"flex",flexDirection:"column",minWidth:0,minHeight:"100%",position:"relative",flex:"1 1 auto",width:"100%",height:"auto",backgroundColor:t.palette.background.default,"&.PageSimple-scroll-content":{height:"100%"},"& .PageSimple-wrapper":(0,i.Z)({display:"flex",flexDirection:"row",flex:"1 1 auto",zIndex:2,minWidth:0,height:"100%",backgroundColor:t.palette.background.default},"content"===r.scroll&&{position:"absolute",top:0,bottom:0,right:0,left:0,overflow:"hidden"}),"& .PageSimple-header":{display:"flex",flex:"0 0 auto",backgroundSize:"cover"},"& .PageSimple-topBg":{position:"absolute",left:0,right:0,top:0,height:N,pointerEvents:"none"},"& .PageSimple-contentWrapper":{display:"flex",flexDirection:"column",width:"100%",flex:"1 1 auto",overflow:"hidden",zIndex:9999},"& .PageSimple-toolbar":{height:D,minHeight:D,display:"flex",alignItems:"center"},"& .PageSimple-content":{display:"flex",flex:"1 1 auto",alignItems:"start",minHeight:0,overflowY:"auto"},"& .PageSimple-sidebarWrapper":{overflow:"hidden",backgroundColor:"transparent",position:"absolute","&.permanent":(0,a.Z)({},t.breakpoints.up("lg"),{position:"relative",marginLeft:0,marginRight:0,transition:t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),"&.closed":{transition:t.transitions.create("margin",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen}),"&.PageSimple-leftSidebar":{marginLeft:-r.leftsidebarwidth},"&.PageSimple-rightSidebar":{marginRight:-r.rightsidebarwidth}}})},"& .PageSimple-sidebar":{position:"absolute",backgroundColor:t.palette.background.paper,color:t.palette.text.primary,"&.permanent":(0,a.Z)({},t.breakpoints.up("lg"),{position:"relative"}),maxWidth:"100%",height:"100%"},"& .PageSimple-leftSidebar":(0,a.Z)({width:r.leftsidebarwidth},t.breakpoints.up("lg"),{borderRight:"1px solid ".concat(t.palette.divider),borderLeft:0}),"& .PageSimple-rightSidebar":(0,a.Z)({width:r.rightsidebarwidth},t.breakpoints.up("lg"),{borderLeft:"1px solid ".concat(t.palette.divider),borderRight:0}),"& .PageSimple-sidebarHeader":{height:N,minHeight:N,backgroundColor:t.palette.primary.dark,color:t.palette.primary.contrastText},"& .PageSimple-sidebarHeaderInnerSidebar":{backgroundColor:"transparent",color:"inherit",height:"auto",minHeight:"auto"},"& .PageSimple-sidebarContent":{display:"flex",flexDirection:"column",minHeight:"100%"},"& .PageSimple-backdrop":{position:"absolute"}}})),N=120,D=64,R=(0,c.forwardRef)((function(e,t){var r=(0,c.useRef)(null),n=(0,c.useRef)(null),a=(0,c.useRef)(null);return(0,c.useImperativeHandle)(t,(function(){return{rootRef:a,toggleLeftSidebar:function(e){r.current.toggleSidebar(e)},toggleRightSidebar:function(e){n.current.toggleSidebar(e)}}})),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(u.Z,{styles:function(t){return(0,i.Z)((0,i.Z)({},"page"!==e.scroll&&{"#core-toolbar":{position:"static"},"#core-footer":{position:"static"}}),"page"===e.scroll&&{"#core-toolbar":{position:"sticky",top:0},"#core-footer":{position:"sticky",bottom:0}})}}),(0,d.jsx)(C,{className:(0,p.Z)("PageSimple-root","PageSimple-scroll-".concat(e.scroll),e.className),ref:a,scroll:e.scroll,leftsidebarwidth:e.leftSidebarWidth,rightsidebarwidth:e.rightSidebarWidth,children:(0,d.jsx)("div",{className:"flex flex-auto flex-col z-10 h-full",children:(0,d.jsxs)("div",{className:"PageSimple-wrapper",children:[e.leftSidebarContent&&(0,d.jsx)(j,{position:"left",content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",ref:r,rootRef:a,open:e.leftSidebarOpen,onClose:e.leftSidebarOnClose,sidebarWidth:e.leftSidebarWidth}),(0,d.jsxs)("div",{className:"PageSimple-contentWrapper",children:[e.header&&(0,d.jsx)(g,{header:e.header}),e.content&&(0,d.jsx)(l.Z,{enable:"content"===e.scroll,className:(0,p.Z)("PageSimple-content container"),children:e.content})]}),e.rightSidebarContent&&(0,d.jsx)(j,{position:"right",content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",ref:n,rootRef:a,open:e.rightSidebarOpen,onClose:e.rightSidebarOnClose,sidebarWidth:e.rightSidebarWidth})]})})})]})}));R.defaultProps={classes:{},scroll:"page",leftSidebarOpen:!1,rightSidebarOpen:!1,rightSidebarWidth:240,leftSidebarWidth:240};var W=(0,c.memo)((0,s.ZP)(R)(P||(P=(0,n.Z)([""]))))},68941:function(e,t,r){var n=r(1413),a=r(64013),i=r(72034),o=r(3394),l=r(88064),s=r(9506),p=r(47131),c=r(46417);t.Z=function(e){var t=e.isLoading;return(0,c.jsx)(i.E.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},className:"flex flex-col flex-auto w-full max-h-full",children:(0,c.jsx)(l.ZP,(0,n.Z)({enableFullScreenToggle:!1,enableColumnResizing:!0,enableColumnOrdering:!0,enablePinning:!0,enableColumnDragging:!1,enableRowSelection:!0,enableRowActions:!0,enableStickyHeader:!0,muiTableContainerProps:{sx:{maxHeight:document.documentElement.offsetHeight-250}},state:{isLoading:t,showSkeletons:t},displayColumnDefOptions:{"mrt-row-actions":{header:"Actions",size:70}},renderRowActions:function(e){var t=e.row;e.table;return(0,c.jsx)(s.Z,{sx:{display:"flex",flexWrap:"nowrap",gap:"8px"},children:(0,c.jsx)(p.Z,{variant:"contained",color:"secondary",component:o.Z,to:t.original.id+"/edit",children:(0,c.jsx)(a.Z,{size:20,children:"heroicons-outline:pencil-alt"})})})},positionToolbarAlertBanner:"bottom"},e))})}}}]);