if (self.CavalryLogger) { CavalryLogger.start_js(["NSOHi"]); }

__d("GroupChatMessageBlockAlert",["fbt","DialogX","GenderConst","MercuryParticipants","React","XUIDialogBody.react","XUIDialogButton.react","XUIDialogFooter.react","XUIDialogTitle.react"],(function a(b,c,d,e,f,g,h){__p&&__p();var i={show:function j(k,l,m){var n=new(c("DialogX"))({width:445},c("React").createElement("div",null,c("React").createElement(c("XUIDialogTitle.react"),null,h._("See Conversations?")),c("React").createElement(c("XUIDialogBody.react"),null,this.dialogBodyText(k)),c("React").createElement(c("XUIDialogFooter.react"),null,c("React").createElement(c("XUIDialogButton.react"),{action:"cancel",label:this.leaveGroupButton(),onClick:function o(){return m()}}),c("React").createElement(c("XUIDialogButton.react"),{use:"confirm",action:"cancel",label:this.openChatButton(),onClick:function o(){return l()}}))));n.show()},openChatButton:function j(){return h._("See Conversation")},leaveGroupButton:function j(){return h._("Leave Group")},dialogBodyText:function j(k){__p&&__p();if(k.length!==1)return h._("People you've blocked are in this conversation. If you can see this conversation, you'll receive each other's messages to the group.");else{var l="";c("MercuryParticipants").get(k.pop(),function(m){switch(m.gender){case c("GenderConst").FEMALE_SINGULAR:l=h._("{name} is in this group conversation, but you've blocked her. If you can see this conversation, you'll see her messages to the group and she'll see yours.",[h.param("name",m.short_name)]);break;case c("GenderConst").MALE_SINGULAR:l=h._("{name} is in this group conversation, but you've blocked him. If you can see this conversation, you'll see his messages to the group and he'll see yours.",[h.param("name",m.short_name)]);break;default:l=h._("{name} is in this group conversation, but you've blocked them. If you can see this conversation, you'll see their messages to the group and they'll see yours.",[h.param("name",m.short_name)])}});return l}}};f.exports=i}),null);
__d("IgnoreMessagesLoggingEvent",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({IGNORE_CLICKED:"ignore_clicked",IGNORE_CONFIRMED:"ignore_confirmed",BLOCK_CLICKED:"block_clicked",BLOCK_CONFIRMED:"block_confirmed",GROUP_WITH_IGNORED_PERSON_WARNING:"group_with_ignored_person_warning",GROUP_WITH_BLOCKED_PERSON_WARNING:"group_with_blocked_person_warning",MESSAGE_IGNORED:"message_ignored"})}),null);
__d("IgnoreMessagesPlatforms",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({MOBILE:"mobile",CHAT_TABS:"chat_tabs",MESSENGERDOTCOM:"messengerdotcom"})}),null);
__d("GroupChatMessageIgnoreAlert",["cx","fbt","DialogX","IgnoreMessagesLoggingEvent","IgnoreMessagesPlatforms","IgnoreMessagesTypedLogger","MercuryParticipants","React","XUIDialogBody.react","XUIDialogButton.react","XUIDialogFooter.react","XUIDialogTitle.react","intlList"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j={show:function k(l,m,n,o){var p=new(c("DialogX"))({width:445},c("React").createElement("div",null,c("React").createElement(c("XUIDialogTitle.react"),null,i._("Ignore group?")),c("React").createElement(c("XUIDialogBody.react"),null,c("React").createElement("div",null,this._getDialogBodyPeopleInGroupText(l)),c("React").createElement("div",{className:"_3-8x"},this._getDialogBodyEffectText(l))),c("React").createElement(c("XUIDialogFooter.react"),null,c("React").createElement(c("XUIDialogButton.react"),{action:"cancel",label:this._getIgnoreGroupButton(),onClick:function q(){return o()}}),c("React").createElement(c("XUIDialogButton.react"),{use:"confirm",action:"cancel",label:this._getOpenChatButton(),onClick:function q(){return n()}}))));p.show();new(c("IgnoreMessagesTypedLogger"))().setEvent(c("IgnoreMessagesLoggingEvent").GROUP_WITH_IGNORED_PERSON_WARNING).setThreadID(m).setPlatform(c("IgnoreMessagesPlatforms").CHAT_TABS).log()},_getOpenChatButton:function k(){return i._("See Group")},_getIgnoreGroupButton:function k(){return i._("Ignore Group")},_getDialogBodyEffectText:function k(){return i._("If you ignore this group, you can find it in Filtered messages.")},_getDialogBodyPeopleInGroupText:function k(l){if(l.length===0)return i._("People you've ignored are in this group.");var m="";c("MercuryParticipants").getMulti(l,function(n){var o=Object.values(n);o=o;m=i._("This group has members, {Message sender's names}, whose messages you've ignored.",[i.param("Message sender's names",c("intlList")(o.map(function(p){return p.name})))])});return m}};f.exports=j}),null);
__d("ConversationNubCollapsedSelectorMenu.react",["cx","fbt","ConversationNubUtils","LeftRight.react","PinnedConversationNubsConfig","PopoverMenu.react","PopoverMenuOverlappingBorder","React","ReactMenu","Tooltip.react","XUIBadge.react"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k,l=c("ReactMenu").Item,m=300;j=babelHelpers.inherits(n,c("React").Component);k=j&&j.prototype;function n(o){k.constructor.call(this,o);this.state={hasTooltip:true};this.$ConversationNubCollapsedSelectorMenu1=false}n.prototype.componentDidMount=function(){this.$ConversationNubCollapsedSelectorMenu2(this.props.menuTabs)};n.prototype.componentDidUpdate=function(o){this.$ConversationNubCollapsedSelectorMenu2(this.$ConversationNubCollapsedSelectorMenu3(o,this.props))};n.prototype.$ConversationNubCollapsedSelectorMenu2=function(o){o.forEach(c("ConversationNubUtils").informShouldRecheckTabVisibility)};n.prototype.$ConversationNubCollapsedSelectorMenu3=function(o,p){var q=o.menuTabs,r=p.menuTabs,s={};q.forEach(function(t){s[t.getTabID()]=t});return r.filter(function(t){return s[t.getTabID()]!==t})};n.prototype.$ConversationNubCollapsedSelectorMenu4=function(){var o=this.props.menuTabs;return o.map(function(p){return p.getBadgeCount()}).reduce(function(p,q){return p+(q||0)},0)};n.prototype.$ConversationNubCollapsedSelectorMenu5=function(o,p){if(o)return c("React").createElement(c("XUIBadge.react"),{type:"special",count:o,className:"_4frs"+(p?" _30ql":""),"aria-hidden":p});return null};n.prototype.$ConversationNubCollapsedSelectorMenu6=function(){var o=this.$ConversationNubCollapsedSelectorMenu4();return this.$ConversationNubCollapsedSelectorMenu5(o,false)};n.prototype.$ConversationNubCollapsedSelectorMenu7=function(o,p){var q=this.$ConversationNubCollapsedSelectorMenu5(p,true),r=this.$ConversationNubCollapsedSelectorMenu5(o,false),s=null;if(r)s=c("React").createElement("span",{className:"_2ja6"},r);return c("React").createElement("span",{className:"_2ja7"},q,s)};n.prototype.$ConversationNubCollapsedSelectorMenu8=function(o,p){__p&&__p();var q=o.getTabID(),r=o.getFeedbackTargetID(),s=o.getTitle(),t=o.getBadgeCount(),u=this.$ConversationNubCollapsedSelectorMenu7(t,p),v=false;return c("React").createElement(l,{key:q,className:"_30qm",onclick:function(){if(v){v=false;return}this.$ConversationNubCollapsedSelectorMenu1=false;this.refs.menu.hidePopover();this.props.onTabSelected&&this.props.onTabSelected(o)}.bind(this)},c("React").createElement(c("LeftRight.react"),null,c("React").createElement("span",null,u,c("React").createElement("span",null,s)),c("React").createElement("i",{className:"_30qn uiCloseButton uiCloseButtonSmall",onClick:function(w){w.stopPropagation();w.preventDefault();if(this.props.menuTabs.length>1)this.$ConversationNubCollapsedSelectorMenu1=true;c("ConversationNubUtils").informShouldCloseTab(q,r,c("ConversationNubUtils").CLOSE_REASON_OVERFLOW_X_OUT)}.bind(this),onMouseDown:function w(){v=true},role:"button",tabIndex:"0"})))};n.prototype.$ConversationNubCollapsedSelectorMenu9=function(){var o=this.props.menuTabs;return o.reduce(function(p,q){return Math.max(p,q.getBadgeCount())},1)};n.prototype.$ConversationNubCollapsedSelectorMenu10=function(){var o=this.props.menuTabs,p=this.$ConversationNubCollapsedSelectorMenu9(),q=o.map(function(r){return this.$ConversationNubCollapsedSelectorMenu8(r,p)}.bind(this));return c("React").createElement(c("ReactMenu"),{maxheight:m},q)};n.prototype.$ConversationNubCollapsedSelectorMenu11=function(){return i._("Posts")};n.prototype.$ConversationNubCollapsedSelectorMenu12=function(){var o=this.$ConversationNubCollapsedSelectorMenu6(),p=c("React").createElement("div",{className:"_4fs1"},o,c("React").createElement("i",{className:"_4fs2"}));if(this.state.hasTooltip)p=c("React").createElement(c("Tooltip.react"),{tooltip:this.$ConversationNubCollapsedSelectorMenu11(),display:"block",alignH:"right"},p);return c("React").createElement("div",{className:"_2ja9"},p)};n.prototype.render=function(){var o=this.$ConversationNubCollapsedSelectorMenu10(),p=c("PinnedConversationNubsConfig").pinnedToLeft?"left":"right";return c("React").createElement(c("PopoverMenu.react"),{menu:o,ref:"menu",position:"above",alignh:p,behaviors:[c("PopoverMenuOverlappingBorder")],onShow:function(){this.$ConversationNubCollapsedSelectorMenu1=false;this.setState({hasTooltip:false})}.bind(this),onHide:function(){if(this.$ConversationNubCollapsedSelectorMenu1){this.$ConversationNubCollapsedSelectorMenu1=false;this.refs.menu.showPopover()}else this.setState({hasTooltip:true})}.bind(this)},this.$ConversationNubCollapsedSelectorMenu12())};f.exports=n}),null);
__d("NotificationJewelReminderDialog.react",["cx","fbt","invariant","Arbiter","Image.react","ImageBlock.react","LayerFadeOnHide","LayerFadeOnShow","React","SubscriptionsHandler","XUIContextualDialog.react","ifRequired","intlList","setTimeoutAcrossTransitions"],(function a(b,c,d,e,f,g,h,i,j){"use strict";__p&&__p();var k,l;k=babelHelpers.inherits(m,c("React").Component);l=k&&k.prototype;function m(){__p&&__p();var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=l.constructor).call.apply(n,[this].concat(q)),this.$NotificationJewelReminderDialog2=new(c("SubscriptionsHandler"))(),this.state={shown:true},this.$NotificationJewelReminderDialog3=function(){clearTimeout(this.$NotificationJewelReminderDialog1)}.bind(this),this.$NotificationJewelReminderDialog4=function(s){this.$NotificationJewelReminderDialog5();this.props.onClick&&this.props.onClick(s)}.bind(this),this.$NotificationJewelReminderDialog6=function(){this.$NotificationJewelReminderDialog3()}.bind(this),this.$NotificationJewelReminderDialog7=function(){this.$NotificationJewelReminderDialog5()}.bind(this),this.$NotificationJewelReminderDialog5=function(){this.setState({shown:false},function(){this.props.onHide&&this.props.onHide()}.bind(this))}.bind(this),o}m.prototype.componentWillMount=function(){this.$NotificationJewelReminderDialog1=c("setTimeoutAcrossTransitions")(this.$NotificationJewelReminderDialog5,this.props.showTime);this.$NotificationJewelReminderDialog2.addSubscriptions(c("Arbiter").subscribe("layer_shown",function(n,o){if(o&&o.type==="Jewel")this.$NotificationJewelReminderDialog5()}.bind(this)),{remove:this.$NotificationJewelReminderDialog3});c("ifRequired")("ClientChromeStore",function(n){this.$NotificationJewelReminderDialog2.addSubscriptions({remove:n.subscribe(function(){var o=n.getState();if(o.bluebar.activeFlyout.type!=null)this.$NotificationJewelReminderDialog5()}.bind(this))})}.bind(this))};m.prototype.componentWillUnmount=function(){this.$NotificationJewelReminderDialog3();this.$NotificationJewelReminderDialog2.release()};m.prototype.$NotificationJewelReminderDialog8=function(){__p&&__p();var n=this.props.names.map(function(p){return c("React").createElement("strong",null,p)});switch(this.props.jewelType){case"notification":return i._({"*":"New notifications from {list of notification senders}","_1":"New notification from {list of notification senders}"},[i.plural(this.props.reminderCount),i.param("list of notification senders",c("intlList")(n))]);case"request":var o=this.props.reminderCount-n.length;if(o>0){if(n.length===0)return i._({"*":"{number of friend requests} friend requests","_1":"1 friend request"},[i.plural(this.props.reminderCount,"number of friend requests")]);else if(n.length===1)return i._({"*":{"*":"{number of friend requests} friend requests from {name of person} and {number of unnamed people} others","_1":"{number of friend requests} friend requests from {name of person} and 1 other"},"_1":{"*":"1 friend request from {name of person} and {number of unnamed people} others","_1":"1 friend request from {name of person} and 1 other"}},[i.plural(this.props.reminderCount,"number of friend requests"),i.param("name of person",n[0]),i.plural(o,"number of unnamed people")]);else if(n.length>=2)return i._({"*":{"*":"{number of friend requests} friend requests from {name of first person}, {name of second person} and {number of unnamed people} others","_1":"{number of friend requests} friend requests from {name of first person}, {name of second person} and 1 other"},"_1":{"*":"1 friend request from {name of first person}, {name of second person} and {number of unnamed people} others","_1":"1 friend request from {name of first person}, {name of second person} and 1 other"}},[i.plural(this.props.reminderCount,"number of friend requests"),i.param("name of first person",n[0]),i.param("name of second person",n[1]),i.plural(o,"number of unnamed people")])}else return i._({"*":"{number of friend requests} friend requests from {list of friend request senders}","_1":"1 friend request from {list of friend request senders}"},[i.plural(this.props.reminderCount,"number of friend requests"),i.param("list of friend request senders",c("intlList")(n))]);default:j(0)}};m.prototype.render=function(){var n=this.props.jewelType==="request"?i._({"*":"New friend requests","_1":"New friend request"},[i.plural(this.props.reminderCount)]):i._({"*":"New notifications","_1":"New notification"},[i.plural(this.props.reminderCount)]);return c("React").createElement(c("XUIContextualDialog.react"),{alignment:"right",autoFocus:false,behaviors:{LayerFadeOnShow:c("LayerFadeOnShow"),LayerFadeOnHide:c("LayerFadeOnHide")},context:this.props.context,dialogRole:"alert",focusContextOnHide:false,label:n,offsetY:-10,position:"below",shown:this.state.shown,width:210},c("React").createElement("div",{className:"_5bov",onClick:this.$NotificationJewelReminderDialog4,onMouseEnter:this.$NotificationJewelReminderDialog6,onMouseLeave:this.$NotificationJewelReminderDialog7,role:"presentation"},c("React").createElement(c("ImageBlock.react"),null,c("React").createElement(c("Image.react"),{className:"_5bow",src:this.props.photoURI}),c("React").createElement("div",null,this.$NotificationJewelReminderDialog8()))))};f.exports=m}),null);
__d("NotificationJewelReminder",["WorkFocusModeController","DOMQuery","NotificationJewelReminderDialog.react","React","ReactDOM","Toggler","ifRequired","ge"],(function a(b,c,d,e,f,g){__p&&__p();var h=c("WorkFocusModeController").WorkFocusMode,i="fbNotificationsJewel",j="fbRequestsJewel";function k(o,p,q,r,s,t){__p&&__p();var u=c("ge")(r);if(u==null||c("Toggler").getInstance(c("ge")(i)).isShown()||c("Toggler").getInstance(c("ge")(j)).isShown()){if(t)t();return}c("ReactDOM").render(c("React").createElement(c("NotificationJewelReminderDialog.react"),{context:c("DOMQuery").scry(u,".jewelButton")[0],jewelType:r===i?"notification":"request",names:p,onClick:function v(){c("Toggler").show(u);c("ifRequired")("ClientChromeStore",function(w){w.dispatch({type:"UPDATE_ACTIVE_FLYOUT",data:r===i?"notification":"request"})})},onHide:t,photoURI:o,reminderCount:q,showTime:s}),document.createElement("div"))}function l(o,p){k(o.friendRequestData.pics[0],o.friendRequestData.names,o.friendRequestData.count,j,o.showTimeMs,p)}function m(o){k(o.notificationData.photoURI,o.notificationData.names,o.notificationData.names.length,i,o.showTimeMs)}var n={init:function o(p){if(h&&h.currentViewerInFocusMode())return;if(p.friendRequestData)l(p,function(){if(p.notificationData)m(p)});else if(p.notificationData)m(p)}};f.exports=n}),null);