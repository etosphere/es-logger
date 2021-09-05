(this["webpackJsonpes-logger"]=this["webpackJsonpes-logger"]||[]).push([[0],{278:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),r=n(12),a=n.n(r),l=n(148),c=n(348),s=n(349),h=n(347),d=n(350),u=n(27),b=n(17),p=n(14),m=n(35),j=n(34),g=n(16),f=n(102),O=n.n(f),x=n(329),y=n(335),v=n(330),C=n(334),k=n(345),T=n(346),w=n(15),R=Symbol("block-begin"),S=Symbol("block-end"),F=Symbol("action"),I=Symbol("command"),L=Symbol("comment"),E=Symbol("eof"),N=function e(t,n,o,i){Object(g.a)(this,e),this.id=t,this.type=n,this.roleID=o,this.content=i},M=function e(t,n,o,i){Object(g.a)(this,e),this.id=t,this.name=n,this.type=o,this.color=i},D=function(){function e(){Object(g.a)(this,e),this.table={},this.nextRoleID=0}return Object(b.a)(e,[{key:"getName",value:function(e){if(e>=0&&e<this.nextRoleID)return this.table[e].name}},{key:"setName",value:function(e,t){e>=0&&e<this.nextRoleID&&(this.table[e].name=t)}},{key:"getType",value:function(e){if(e>=0&&e<this.nextRoleID)return this.table[e].type}},{key:"setType",value:function(e,t){e>=0&&e<this.nextRoleID&&(this.table[e].type=t)}},{key:"getColor",value:function(e){if(e>=0&&e<this.nextRoleID)return this.table[e].color}},{key:"setColor",value:function(e,t){e>=0&&e<this.nextRoleID&&(this.table[e].color=t)}},{key:"getRoleIdByName",value:function(e){for(var t=Object.values(this.table),n=0;n<t.length;n++)if(t[n].name===e)return t[n].id;return null}},{key:"addRole",value:function(e,t,n){var o=this.getRoleIdByName(e);return o||0===o?o:(this.table[this.nextRoleID]=new M(this.nextRoleID,e,t,n),this.nextRoleID+=1,this.nextRoleID-1)}}]),e}(),B=n(141),W=function(e,t,n,o,i,r,a,l){var c=function(e,t){return Math.round(Math.random()*(t-e))+e},s=c(e,t),h=c(n,o),d=c(i,r),u=c(100*a,100*l)/100;return"hsl(".concat(s,", ").concat(h,"%, ").concat(d,"%, ").concat(u,")")},q=function(){function e(t){Object(g.a)(this,e),this.rawLogData=t,this.tokenSequence=[],this.header={title:null,color:{},kp:null,dicer:null,show_command:!1,show_comment:!1},this.roleTable=new D}return Object(b.a)(e,[{key:"analyze",value:function(){var e=this,t=this.rawLogData.split("\n"),n=0,o="",i="",r=0;if("---"===t[0].trim())for(var a="",l=1;l<t.length;l++)"---"===t[l].trim()?(r=l+1,this.header=B.a.load(a)):a+=t[l]+"\n";if(t.slice(r).map((function(e){return e.trim()})).filter((function(e){return e})).forEach((function(t,r){var a=t.match(/<.+>/);if(a){if(""!==o){var l=e.roleTable.addRole(o,"pc",W(0,360,20,80,0,75,1,1));e.tokenSequence.push(new N(n,F,l,i)),i="",o="",n+=1}var c=(a=a[0]).slice(1,a.length-1);if("{"===c)e.tokenSequence.push(new N(n,R,null,null));else if("}"===c)e.tokenSequence.push(new N(n,S,null,null));else{var s=t.split(">")[1].trim(),h=e.roleTable.addRole(c,"pc",W(0,360,20,80,0,75,1,1));"("===s[0]||"\uff08"===s[0]?(e.tokenSequence.push(new N(n,L,h,s)),o=""):"."===s[0]?(e.tokenSequence.push(new N(n,I,h,s)),o=""):(i+=s,o=c,n-=1)}}else{var d=e.roleTable.addRole(o,"pc",W(0,360,20,80,0,75,1,1));"("===t[0]||"\uff08"===t[0]?(""!==i&&(e.tokenSequence.push(new N(n,F,d,i)),i="",n+=1),e.tokenSequence.push(new N(n,L,d,t))):"."===t[0]?(""!==i&&(e.tokenSequence.push(new N(n,F,d,i)),i=""),e.tokenSequence.push(new N(n,I,d,t))):(i+=""!==i?"\n"+t:t,n-=1)}n+=1})),""!==i){var c=this.roleTable.addRole(o,"pc",W(0,360,20,80,0,75,1,1));this.tokenSequence.push(new N(n,F,c,i)),i=""}return this.tokenSequence.push(new N(n+1,E,null,null)),this.header.color&&Object.entries(this.header.color).forEach((function(t){var n=Object(w.a)(t,2),o=n[0],i=n[1],r=e.roleTable.getRoleIdByName(o);null!==r&&e.roleTable.setColor(r,i)})),this.header.kp&&this.header.kp.forEach((function(t){var n=e.roleTable.getRoleIdByName(t);null!==n&&e.roleTable.setType(n,"kp")})),this.header.dicer&&this.header.dicer.forEach((function(t){var n=e.roleTable.getRoleIdByName(t);null!==n&&e.roleTable.setType(n,"dicer")})),this.tokenSequence}}]),e}(),P=n(325),z=n(279),A=n(326),H=n(353),U=n(327),K=n(282),_=n(287),V=n(285),G=n(280),J=n(354),Y=n(331),Q=n(332),$=n(283),X=n(328),Z=n(333),ee=n(7),te=n(336),ne=n(37),oe=n(320),ie=n(352),re=n(324),ae=n(147),le=n(80),ce=n.n(le),se=n(4),he=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(e){var o;return Object(g.a)(this,n),(o=t.call(this,e)).handleChange=function(e){o.setState({color:e.hex})},o.state={color:o.props.color},o}return Object(b.a)(n,[{key:"render",value:function(){var e=this;return Object(se.jsx)(ce.a,{variant:"popover",popupId:"color-picker-popup-popover",children:function(t){return Object(se.jsxs)("div",{children:[Object(se.jsx)(oe.a,Object(ne.a)(Object(ne.a)({style:{color:e.state.color,padding:9},edge:"end","aria-label":"change color",component:"span"},Object(le.bindTrigger)(t)),{},{children:Object(se.jsx)(re.a,{})})),Object(se.jsx)(ie.a,Object(ne.a)(Object(ne.a)({},Object(le.bindPopover)(t)),{},{anchorOrigin:{vertical:"top",horizontal:"center"},transformOrigin:{vertical:"bottom",horizontal:"center"},children:Object(se.jsx)(ae.a,{color:e.state.color,onChange:e.handleChange,onChangeComplete:e.props.onChangeComplete})}))]})}})}}]),n}(i.a.Component),de={PaperProps:{style:{maxHeight:272,width:250}}},ue=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(e){var o;Object(g.a)(this,n),o=t.call(this,e);var i=[],r=[];return Object.values(o.props.roleTable.table).forEach((function(e){"kp"===e.type?i.push(e.id):"dicer"===e.type&&r.push(e.id)})),o.state={kpList:i,dicerList:r},o.handleKpChange=o.handleKpChange.bind(Object(p.a)(o)),o.handleDicerChange=o.handleDicerChange.bind(Object(p.a)(o)),o.handleRoleNameChange=o.handleRoleNameChange.bind(Object(p.a)(o)),o.handleColorChange=o.handleColorChange.bind(Object(p.a)(o)),o.handleRoleFilterChange=o.handleRoleFilterChange.bind(Object(p.a)(o)),o.handleCommandFilterChange=o.handleCommandFilterChange.bind(Object(p.a)(o)),o.handleCommentFilterChange=o.handleCommentFilterChange.bind(Object(p.a)(o)),o}return Object(b.a)(n,[{key:"handleKpChange",value:function(e){var t=this,n=this.props.roleTable,o=e.target.value;Object.keys(n.table).forEach((function(e){n.setType(e,"pc")})),o.forEach((function(e){n.setType(e,"kp")})),this.state.dicerList.forEach((function(e){n.setType(e,"dicer")})),this.setState({kpList:o},(function(){t.props.onRoleTableChange(n)}))}},{key:"handleDicerChange",value:function(e){var t=this,n=this.props.roleTable,o=e.target.value;Object.keys(n.table).forEach((function(e){n.setType(e,"pc")})),this.state.kpList.forEach((function(e){n.setType(e,"kp")})),o.forEach((function(e){n.setType(e,"dicer")})),this.setState({dicerList:o},(function(){t.props.onRoleTableChange(n)}))}},{key:"handleRoleNameChange",value:function(e,t){var n=this.props.roleTable;n.setName(e,t),this.props.onRoleTableChange(n)}},{key:"handleColorChange",value:function(e,t){var n=this.props.roleTable;n.setColor(e,t),this.props.onRoleTableChange(n)}},{key:"handleRoleFilterChange",value:function(e){var t=this.props.logFilter;t.role[e]=!t.role[e],this.props.onFilterChange(t)}},{key:"handleCommandFilterChange",value:function(){var e=this.props.logFilter;e.command=!e.command,this.props.onFilterChange(e),this.setState({logFilter:e})}},{key:"handleCommentFilterChange",value:function(){var e=this.props.logFilter;e.comment=!e.comment,this.props.onFilterChange(e)}},{key:"render",value:function(){var e=this,t=this.props.classes,n=Object.keys(this.props.roleTable.table).filter((function(t){return"kp"===e.props.roleTable.getType(t)})),o=Object.keys(this.props.roleTable.table).filter((function(t){return"dicer"===e.props.roleTable.getType(t)})),i=Object.keys(this.props.roleTable.table).filter((function(t){return"pc"===e.props.roleTable.getType(t)})),r=function(t){return Object(se.jsx)(P.a,{in:!0,timeout:1500,mountOnEnter:!0,unmountOnExit:!0,children:Object(se.jsxs)(z.a,{style:{justifyContent:"center"},children:[Object(se.jsx)(A.a,{style:{minWidth:0,paddingLeft:9,paddingRight:9},children:Object(se.jsx)(H.a,{edge:"start",onClick:function(){return e.handleRoleFilterChange(t)},checked:e.props.logFilter.role[t]})}),Object(se.jsx)(U.a,{id:"text-field-role"+t,color:"secondary",InputProps:{style:{color:e.props.roleTable.getColor(t)}},fullWidth:!0,error:!e.props.roleTable.getName(t),value:e.props.roleTable.getName(t),onChange:function(n){e.handleRoleNameChange(t,n.target.value)}},"text-"+t),Object(se.jsx)(A.a,{style:{minWidth:0,paddingLeft:9,paddingRight:9},children:Object(se.jsx)(he,{id:t,color:e.props.roleTable.getColor(t),onChangeComplete:function(n){e.handleColorChange(t,n.hex)}})},"icon-"+t)]},t)},t)};return[Object(se.jsxs)(x.a,{container:!0,children:[Object(se.jsx)(x.a,{item:!0,xs:!0,align:"right",children:Object(se.jsx)(v.a,{in:!0,timeout:1500,children:Object(se.jsxs)(K.a,{className:t.formControl,children:[Object(se.jsx)(_.a,{id:"kp-selection-checkbox-label",children:"Select KP"}),Object(se.jsx)(V.a,{labelId:"kp-selection-checkbox-label",id:"kp-selection-checkbox",multiple:!0,error:0===this.state.kpList.length,value:this.state.kpList,onChange:this.handleKpChange,input:Object(se.jsx)(G.a,{}),renderValue:function(n){return Object(se.jsx)("div",{className:t.chips,children:n.map((function(n){return Object(se.jsx)(J.a,{label:e.props.roleTable.getName(n),className:t.chip,size:"small"},n)}))})},MenuProps:de,children:Object.keys(this.props.roleTable.table).map((function(t){return e.state.dicerList.includes(t)?null:Object(se.jsxs)(Y.a,{value:t,children:[Object(se.jsx)(H.a,{checked:e.state.kpList.includes(t)}),Object(se.jsx)(Q.a,{primary:e.props.roleTable.getName(t)})]},t)}))}),Object(se.jsx)($.a,{error:!0,hidden:0!==this.state.kpList.length,children:"Must set at least one kp."})]})})}),Object(se.jsx)(x.a,{item:!0,xs:!0,align:"left",children:Object(se.jsx)(v.a,{in:!0,timeout:1500,children:Object(se.jsxs)(K.a,{className:t.formControl,children:[Object(se.jsx)(_.a,{id:"dicer-selection-checkbox-label",children:"Select dicer"}),Object(se.jsx)(V.a,{labelId:"dicer-selection-checkbox-label",id:"dicer-selection-checkbox",multiple:!0,error:0===this.state.dicerList.length,value:this.state.dicerList,onChange:this.handleDicerChange,input:Object(se.jsx)(G.a,{}),renderValue:function(n){return Object(se.jsx)("div",{className:t.chips,children:n.map((function(n){return Object(se.jsx)(J.a,{label:e.props.roleTable.getName(n),className:t.chip,size:"small"},n)}))})},MenuProps:de,children:Object.keys(this.props.roleTable.table).map((function(t){return e.state.kpList.includes(t)?null:Object(se.jsxs)(Y.a,{value:t,children:[Object(se.jsx)(H.a,{checked:e.state.dicerList.includes(t)}),Object(se.jsx)(Q.a,{primary:e.props.roleTable.getName(t)})]},t)}))}),Object(se.jsx)($.a,{error:!0,hidden:0!==this.state.dicerList.length,children:"Must set at least one dicer."})]})})})]},"kp-and-dicer-configurator-grid"),Object(se.jsx)(x.a,{container:!0,children:Object(se.jsx)(x.a,{item:!0,xs:!0,align:"center",children:Object(se.jsx)(v.a,{in:!0,timeout:1500,children:Object(se.jsxs)(X.a,{dense:!0,style:{maxWidth:"360px"},children:[0!==n.length&&Object(se.jsx)(v.a,{in:!0,timeout:1500,mountOnEnter:!0,unmountOnExit:!0,children:Object(se.jsx)(Z.a,{disableSticky:!0,style:{lineHeight:"28px"},children:"KP"},"kp")},"kp"),n.map((function(e){return r(e)})),0!==o.length&&Object(se.jsx)(v.a,{in:!0,timeout:1500,mountOnEnter:!0,unmountOnExit:!0,children:Object(se.jsx)(Z.a,{disableSticky:!0,style:{lineHeight:"28px"},children:"Dicer"},"dicer")},"dicer"),o.map((function(e){return r(e)})),0!==i.length&&Object(se.jsx)(v.a,{in:!0,timeout:1500,mountOnEnter:!0,unmountOnExit:!0,children:Object(se.jsx)(Z.a,{disableSticky:!0,style:{lineHeight:"28px"},children:"PC"},"pc")},"pc"),i.map((function(e){return r(e)})),Object(se.jsx)(C.a,{variant:"middle"},"divider"),Object(se.jsx)(P.a,{in:!0,timeout:1500,mountOnEnter:!0,unmountOnExit:!0,children:Object(se.jsxs)(z.a,{button:!0,onClick:this.handleCommandFilterChange,children:[Object(se.jsx)(A.a,{children:Object(se.jsx)(H.a,{edge:"start",checked:this.props.logFilter.command},"command-checkbox")},"command-icon"),Object(se.jsx)(Q.a,{id:"label-command",primary:"Show Command"},"label-command")]},"command")},"command-checkbox"),Object(se.jsx)(P.a,{in:!0,timeout:1500,mountOnEnter:!0,unmountOnExit:!0,children:Object(se.jsxs)(z.a,{button:!0,onClick:this.handleCommentFilterChange,children:[Object(se.jsx)(A.a,{children:Object(se.jsx)(H.a,{edge:"start",checked:this.props.logFilter.comment},"comment-checkbox")},"comment-icon"),Object(se.jsx)(Q.a,{id:"label-comment",primary:"Show Comment"},"label-comment")]},"comment")},"comment-checkbox")]})})})},"name-and-color-configurator-grid"),Object(se.jsx)(x.a,{container:!0,style:{marginBottom:"1em"},children:Object(se.jsx)(x.a,{item:!0,xs:!0,align:"center",children:Object(se.jsx)(y.a,{variant:0===this.state.kpList.length&&0===this.state.dicerList.length?"outlined":"contained",color:"secondary",disabled:0===this.state.kpList.length||0===this.state.dicerList.length,endIcon:Object(se.jsx)(te.a,{}),onClick:this.props.onSubmit,children:"Render"},"render-button")})},"apply-button-grid")]}}]),n}(i.a.Component),be=Object(ee.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120,maxWidth:240},chips:{display:"flex",flexWrap:"wrap"},chip:{marginTop:2,marginRight:2,marginBottom:2,maxWidth:100,overflow:"hidden",label:{overflow:"hidden"}},noLabel:{marginTop:e.spacing(3)}}}),{withTheme:!0})(ue),pe=n(57),me=n(355),je=n(337),ge=n(338),fe=n(339),Oe=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this,t=this.props.classes,n=Object(ee.a)({root:{"&.MuiTreeItem-root:focus > .MuiTreeItem-content .MuiTreeItem-label":{background:"transparent"},"&.Mui-selected > .MuiTreeItem-content .MuiTreeItem-label":{background:"transparent"},"&.MuiTreeItem-root > .MuiTreeItem-content:hover":{background:"transparent"},"&.MuiTreeItem-root > .MuiTreeItem-content:hover > .MuiTreeItem-label":{background:"transparent"}},group:{marginLeft:7,paddingLeft:18,borderLeft:"1px dashed #33333333"}})(me.a);return this.props.node?[this.props.header.title&&Object(se.jsx)("h1",{children:this.props.header.title},"title"),Object(se.jsx)(je.a,{className:t.root,defaultCollapseIcon:Object(se.jsx)(ge.a,{}),defaultExpanded:["root"],defaultExpandIcon:Object(se.jsx)(fe.a,{}),disableSelection:!0,style:{marginBottom:"48px"},children:function t(o){if(o.type===Le){if(Array.isArray(o.children)){if(o.collapsed){var i=o.role.map((function(t){return"pc"===e.props.roleTable.getType(t)?e.props.roleTable.getName(t):null})).filter((function(e){return e})),r=Object(se.jsx)(pe.a,{style:{color:"#a2a2a2"},children:"{".concat(i.join(", "),"}")});return Object(se.jsx)(n,{nodeId:o.id.toString(),label:r,children:o.children.map((function(e){return t(e)}))},o.id)}return o.children.map((function(e){return t(e)}))}return null}if(o.content)return Object(se.jsx)(pe.a,{style:{color:e.props.roleTable.getColor(o.role),whiteSpace:"pre-line"},children:"<".concat(e.props.roleTable.getName(o.role),"> ").concat(o.content)},o.id)}(this.props.node)},"render-tree")]:null}}]),n}(i.a.Component),xe=Object(ee.a)((function(e){return{"@global":{".MuiTreeItem-root.Mui-selected > .MuiTreeItem-content .MuiTreeItem-label":{backgroundColor:"white"},".MuiTreeItem-root.Mui-selected > .MuiTreeItem-content .MuiTreeItem-label:hover, .MuiTreeItem-root.Mui-selected:focus > .MuiTreeItem-content .MuiTreeItem-label":{backgroundColor:"gray"}}}}),{withTheme:!0})(Oe),ye=n(340),ve=n(341),Ce=n(342),ke=n(343),Te=n(344),we=Object(ye.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(3),right:e.spacing(3)}}}));function Re(e){var t=e.children,n=we(),o=Object(ve.a)({disableHysteresis:!0,threshold:100});return Object(se.jsx)(Ce.a,{in:o,children:Object(se.jsx)("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:n.root,children:t})})}function Se(e){return Object(se.jsx)(Re,Object(ne.a)(Object(ne.a)({},e),{},{children:Object(se.jsx)(ke.a,{color:"secondary",size:"small","aria-label":"scroll back to top",children:Object(se.jsx)(Te.a,{})})}))}var Fe=Symbol("Start"),Ie=Symbol("Start'"),Le=Symbol("Block"),Ee=Symbol("block-begin"),Ne=Symbol("block-end"),Me=Symbol("ACC"),De=Symbol("action"),Be=Symbol("command"),We=Symbol("comment"),qe=function e(t,n){var o=this;Object(g.a)(this,e),this.addChild=function(e){o.children.push(e)},this.type=t,this.content=n,this.children=[]},Pe=function e(t,n,o,i){var r=this;Object(g.a)(this,e),this.addChild=function(e){r.children.push(e)},this.id=t,this.type=n,this.role=o,this.content=i,this.children=[]},ze=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(e){var o;return Object(g.a)(this,n),(o=t.call(this,e)).header={show_command:!1,show_comment:!1},o.state={selectedFile:null,parseTreeRoot:null,syntaxTreeRoot:null,filteredTreeRoot:null,roleTable:null,logFilter:{},showRoleConfigurator:!1,showLogRender:!1},o.handleFileChange=o.handleFileChange.bind(Object(p.a)(o)),o.handleFileRead=o.handleFileRead.bind(Object(p.a)(o)),o.handleFileUpload=o.handleFileUpload.bind(Object(p.a)(o)),o.handleRoleTableChange=o.handleRoleTableChange.bind(Object(p.a)(o)),o.handleLogFilterChange=o.handleLogFilterChange.bind(Object(p.a)(o)),o.filterNodeByRole=o.filterNodeByRole.bind(Object(p.a)(o)),o}return Object(b.a)(n,[{key:"parse",value:function(e){var t=0,n=function(){return e[t]},o=function(){return t+=1},i=function e(t){var o=n();if(o.type===R){if(t.addChild(new qe(Le,null)),r(t.children[0]))return t.addChild(new qe(Ie,null)),e(t.children[1])}else{if(o.type!==F&&o.type!==I&&o.type!==L)return!0;if(t.addChild(new qe(Me,null)),a(t.children[0]))return t.addChild(new qe(Ie,null)),e(t.children[1])}},r=function(e){var t=n();if(t.type===R){if(e.addChild(new qe(Ee,t)),o(),e.addChild(new qe(Ie,null)),i(e.children[1])){if(e.addChild(new qe(Ne,n())),n().type===S)return o(),!0;console.log("Error parsing at ".concat(n(),", should be <block-end>."))}}else console.log("Error parsing at ".concat(n(),", should be <block-begin>."))},a=function(e){var t=n();return t.type===F?(e.addChild(new qe(De,t)),o(),!0):t.type===I?(e.addChild(new qe(Be,t)),o(),!0):t.type===L?(e.addChild(new qe(We,t)),o(),!0):(console.log("Error parsing at ".concat(t,", should be <action> or <command> or <comment>.")),!1)},l=new qe(Fe);if(function(e){var t=n();if(t.type===R){if(e.addChild(new qe(Le,null)),r(e.children[0]))return e.addChild(new qe(Ie,null)),i(e.children[1])}else{if(t.type!==F&&t.type!==I&&t.type!==L)return console.log("Error parsing at ".concat(t,".")),!1;if(e.addChild(new qe(Me,null)),a(e.children[0]))return e.addChild(new qe(Ie,null)),i(e.children[1])}}(l))return l;console.log("Failed to parse the code.")}},{key:"buildSyntaxTree",value:function(e){var t=1,n=new Pe(0,Le,[],null);return function e(n,o){if(n){var i=function(e,n){if(e.type===Le)n.addChild(new Pe(t,Le,[],null));else{if(e.type!==De&&e.type!==Be&&e.type!==We)return!1;n.addChild(new Pe(t,e.type,e.content.roleID,e.content.content))}return t+=1,n.children[n.children.length-1]}(n,o);i?n.children.forEach((function(t,n){return e(t,i)})):n.children.forEach((function(t,n){return e(t,o)}))}}(e,n),n}},{key:"updateRole",value:function(e){var t=this;if(e){if(e.type===Le){var n=e.role;e.children.forEach((function(e,o){return n=n.concat(t.updateRole(e))})),e.role=Object(u.a)(new Set(n)).sort()}return e.role}return[]}},{key:"initializeLogFilter",value:function(){var e={};return this.state.syntaxTreeRoot.role.forEach((function(t){return e[t]=!0})),{role:e,command:this.header.show_command,comment:this.header.show_comment}}},{key:"handleFileChange",value:function(e){this.setState({selectedFile:e.target.files[0]})}},{key:"handleFileRead",value:function(e){var t=this,n=e.target.result,o=new q(n),i=o.analyze();this.header=o.header;var r=this.parse(i),a=this.buildSyntaxTree(r);this.setState({parseTreeRoot:r,syntaxTreeRoot:a,roleTable:o.roleTable},(function(){t.updateRole(t.state.syntaxTreeRoot);var e=t.initializeLogFilter();t.setState({logFilter:e,showRoleConfigurator:!0})}))}},{key:"handleFileUpload",value:function(){var e=new FileReader;e.onload=this.handleFileRead,e.readAsText(this.state.selectedFile)}},{key:"handleRoleTableChange",value:function(e){this.setState({roleTable:e})}},{key:"handleLogFilterChange",value:function(e){this.setState({logFilter:e})}},{key:"filterNodeByRole",value:function(){var e=this,t=[];Object.keys(this.state.logFilter.role).forEach((function(n){"pc"===e.state.roleTable.getType(n)&&e.state.logFilter.role[n]&&t.push(n)})),t=t.map((function(e){return parseInt(e)}));var n=O.a.cloneDeep(this.state.syntaxTreeRoot);!function n(o,i){if(o)if(o.children.slice(0).forEach((function(e,t){return n(e,o)})),o.type===Le){if(o.collapsed=(l=t,c=o.role,!l.every((function(e){return c.includes(e)}))),0===o.children.length&&i||function(e,t){return!e.map((function(e){return t.includes(e)})).includes(!0)}(o.role,t)){var r=i.children.findIndex((function(e){return e.id===o.id}));i.children.splice(r,1),o=null}}else if(o.collapsed=!1,o.type===Be&&!e.state.logFilter.command||o.type===We&&!e.state.logFilter.comment){var a=i.children.findIndex((function(e){return e.id===o.id}));i.children.splice(a,1),o=null}var l,c}(n,null),this.updateRole(n),this.setState({filteredTreeRoot:n,showLogRender:!0})}},{key:"render",value:function(){return[Object(se.jsx)("div",{id:"back-to-top-anchor"},"back-to-top-anchor"),Object(se.jsx)(Se,{},"back-to-top-button"),Object(se.jsxs)(x.a,{container:!0,spacing:1,direction:"column",style:{marginBottom:24},children:[Object(se.jsxs)(x.a,{item:!0,xs:!0,align:"center",children:[Object(se.jsx)("input",{hidden:!0,id:"contained-button-file",accept:"text/plain,.log",type:"file",onChange:this.handleFileChange}),Object(se.jsx)("label",{htmlFor:"contained-button-file",children:Object(se.jsx)(y.a,{variant:"outlined",color:"primary",component:"span",endIcon:Object(se.jsx)(k.a,{}),children:"Browse"})})]}),this.state.selectedFile&&Object(se.jsx)(v.a,{in:!0,timeout:1500,children:Object(se.jsx)(x.a,{item:!0,xs:!0,align:"center",children:Object(se.jsx)(y.a,{variant:"contained",color:"primary",component:"span",endIcon:Object(se.jsx)(T.a,{}),onClick:this.handleFileUpload,children:"Submit"})})})]},"handle-file-grid"),Object(se.jsx)(x.a,{container:!0,children:this.state.showRoleConfigurator&&Object(se.jsx)(be,{roleTable:O.a.cloneDeep(this.state.roleTable),logFilter:this.state.logFilter,header:this.header,onRoleTableChange:this.handleRoleTableChange,onFilterChange:this.handleLogFilterChange,onSubmit:this.filterNodeByRole},"role-configurator")},"role-configurator-grid"),Object(se.jsx)(C.a,{hidden:!this.state.showLogRender},"divider"),Object(se.jsx)(h.a,{maxWidth:"md",children:this.state.showLogRender&&Object(se.jsx)(xe,{node:this.state.filteredTreeRoot,roleTable:this.state.roleTable,header:this.header},"render")},"log-render-container")]}}]),n}(i.a.Component),Ae=n(351),He=Object(l.a)({overrides:{MuiCssBaseline:{"@global":{body:{height:"100%",minHeight:"100%",width:"100%",fontFamily:"-apple-system, 'Helvetica Neue', Helvetica ,Arial, 'PingFang SC', 'Hiragino Sans GB', 'WenQuanYi Micro Hei', 'Microsoft Yahei', sans-serif","-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale"},code:{fontFamily:"source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace"},header:{textAlign:"center",marginTop:"3em",marginBottom:"3em"},footer:{padding:"1.5em",marginTop:"auto",width:"100%",textAlign:"center"}}},Grid:{alignItems:"center",justifyContent:"center"},MuiDivider:{root:{margin:"12px"}}},palette:{primary:{main:"#717bd6"},secondary:{main:"#e8618c"}}});var Ue=function(){return Object(se.jsxs)(c.a,{theme:He,children:[Object(se.jsx)(s.a,{}),Object(se.jsxs)(h.a,{maxWidth:"md",style:{minHeight:"82vh"},children:[Object(se.jsxs)("header",{children:[Object(se.jsx)("h1",{children:"es-logger"}),Object(se.jsx)("h3",{children:"A simple logger for CoC."})]}),Object(se.jsx)(ze,{})]}),Object(se.jsxs)("footer",{id:"footer",className:"footer",children:[Object(se.jsx)(d.a,{href:"https://github.com/etosphere/es-logger",style:{color:"#907da2"},children:Object(se.jsx)(Ae.a,{fontSize:"small"})}),Object(se.jsx)("div",{style:{color:"#907da2"},children:"\xa9\xa02021\xa0ES"})]})]})},Ke=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _e(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Ve=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,356)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),o(e),i(e),r(e),a(e)}))};a.a.render(Object(se.jsx)(Ue,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");Ke?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_e(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):_e(t,e)}))}}(),Ve()}},[[278,1,2]]]);
//# sourceMappingURL=main.3e14de0d.chunk.js.map