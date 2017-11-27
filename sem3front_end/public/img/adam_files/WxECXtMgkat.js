if (self.CavalryLogger) { CavalryLogger.start_js(["qd0Lu"]); }

__d("XFriendJewelNotifsController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/friendjewel/friendconfirmednotifications/",{alert_ids:{type:"IntVector",required:true},action:{type:"String",required:true}})}),null);
__d("FriendConfirmedNotifs",["Event","shield","CSS","DOM","ge","DataStore","Arbiter","AsyncRequest","Parent","XFriendJewelNotifsController","RequestsJewelController"],(function a(b,c,d,e,f,g){__p&&__p();function h(i){"use strict";__p&&__p();this.$FriendConfirmedNotifs3=function(){if(!this.$FriendConfirmedNotifs2.length)return;this.$FriendConfirmedNotifs7(this.$FriendConfirmedNotifs2,"mark_read");this.$FriendConfirmedNotifs2=[]}.bind(this);this.$FriendConfirmedNotifs4=function(){};var j=i.close;for(var k=0;k<j.length;++k)c("Event").listen(j[k],"click",this.$FriendConfirmedNotifs1.bind(this));this.$FriendConfirmedNotifs2=i.unread_notifs;if(this.$FriendConfirmedNotifs2.length)if(c("RequestsJewelController").isOpen())this.$FriendConfirmedNotifs3();else{c("Arbiter").subscribeOnce("requestsJewel/opened",c("shield")(this.$FriendConfirmedNotifs3,this));c("Arbiter").subscribeOnce("requestsJewel/closed",c("shield")(this.$FriendConfirmedNotifs3,this))}c("Arbiter").subscribeOnce("requestsJewel/closed",c("shield")(this.$FriendConfirmedNotifs4,this));this.$FriendConfirmedNotifs5=i.notifids}h.prototype.$FriendConfirmedNotifs6=function(i){"use strict";__p&&__p();var j=false,k=c("ge")("fbRequestsJewel"),l=c("DOM").find(k,".requestsUnitTitle"),m=c("DOM").scry(i,".friendConfirmedNotifsUnitTitle")[0];if(!m){j=true;m=c("DOM").find(k,".friendConfirmedNotifsUnitTitle")}if(j){c("CSS").show(c("DOM").find(k,".requestsJewelLinks"));c("DOM").replace(m,l)}else c("CSS").hide(m)};h.prototype.$FriendConfirmedNotifs1=function(event){"use strict";__p&&__p();var i=event.getTarget(),j,k=[],l=c("Parent").byClass(i,"friendConfirmedNotifsUnitDisaggregated");if(l){k=c("DataStore").get(l,"notifids");j=l.parentElement.parentElement;c("CSS").hide(l)}var m=c("Parent").byClass(i,"friendConfirmedNotifsUnitAggregated");if(m){k=c("DataStore").get(m,"notifids");j=m.parentElement.parentElement;c("CSS").hide(m)}for(var n=0;n<k.length;++n){var o=this.$FriendConfirmedNotifs5.indexOf(k[n]);if(o>-1)this.$FriendConfirmedNotifs5.splice(o,1)}if(!this.$FriendConfirmedNotifs5.length)this.$FriendConfirmedNotifs6(j);this.$FriendConfirmedNotifs7(k,"xout")};h.prototype.$FriendConfirmedNotifs7=function(i,j){"use strict";var k=c("XFriendJewelNotifsController").getURIBuilder().setIntVector("alert_ids",i).setString("action",j).getURI();new(c("AsyncRequest"))().setURI(k).send()};f.exports=h}),null);
__d("FriendConfirmedNotifsClickLogging",["Event","AsyncSignal"],(function a(b,c,d,e,f,g){var h={addClickLoggingListener:function i(j,k){c("Event").listen(j,"click",function(){new(c("AsyncSignal"))(k).send()})}};f.exports=h}),null);
__d("XLtgPostTranslationController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/intl/see_translation/",{ftid:{type:"String",required:true},text_size:{type:"Enum",defaultValue:"medium",enumType:1}})}),null);
__d("LtgPostTranslation",["cx","Arbiter","AsyncRequest","ContentTranslationStrings","DOM","Event","LoadingIndicator.react","React","ReactDOM","UFIUIEvents","XLtgPostTranslationController","ge","highlight"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i={_renderTranslation:function j(k,l){var m=c("DOM").create("div",{className:"_63tb"},l||c("ContentTranslationStrings").NO_TRANSLATION_AVAILABLE);c("DOM").replace(k,m);if(l)c("highlight")(m)},bindListener:function j(k,l){__p&&__p();c("Event").listen(k,"click",function(event){__p&&__p();event.prevent();var m=c("ge")("translationSpinnerPlaceholder_"+l);if(m)c("ReactDOM").render(c("React").createElement(c("LoadingIndicator.react"),{size:"small",color:"white"}),m);var n=c("XLtgPostTranslationController").getURIBuilder().setString("ftid",l).getURI();new(c("AsyncRequest"))().setURI(n).setHandler(function(o){var p=o.getPayload();this._renderTranslation(k,p&&p.text);c("Arbiter").inform(c("UFIUIEvents").TranslationRendered)}.bind(this)).setErrorHandler(function(){this._renderTranslation(k,null)}.bind(this)).send()}.bind(this))}};f.exports=i}),null);
__d("FollowUpNotifEventTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(){this.clear()}h.prototype.log=function(){c("GeneratedLoggerUtils").log("logger:FollowUpNotifEventLoggerConfig",this.$FollowUpNotifEventTypedLogger1,c("Banzai").BASIC)};h.prototype.logVital=function(){c("GeneratedLoggerUtils").log("logger:FollowUpNotifEventLoggerConfig",this.$FollowUpNotifEventTypedLogger1,c("Banzai").VITAL)};h.prototype.clear=function(){this.$FollowUpNotifEventTypedLogger1={};return this};h.prototype.updateData=function(j){this.$FollowUpNotifEventTypedLogger1=babelHelpers["extends"]({},this.$FollowUpNotifEventTypedLogger1,j);return this};h.prototype.setNotifEvent=function(j){this.$FollowUpNotifEventTypedLogger1.notif_event=j;return this};h.prototype.setVC=function(j){this.$FollowUpNotifEventTypedLogger1.vc=j;return this};var i={notif_event:true,vc:true};f.exports=h}),null);
__d("FollowUpNotifEventUtils",["Event","ReactComposerActionTypes","ReactComposerDispatcher","FollowUpNotifEventTypedLogger"],(function a(b,c,d,e,f,g){var h={attachFollowUpClickListener:function i(j,k){c("Event").listen(j,"click",function(event){new(c("FollowUpNotifEventTypedLogger"))().setNotifEvent(k).log()})},attachFollowUpPostListener:function i(j){c("ReactComposerDispatcher").register(function(k){if(k.type===c("ReactComposerActionTypes").POST_STARTED)new(c("FollowUpNotifEventTypedLogger"))().setNotifEvent(j).log()})}};f.exports=h}),null);
__d("JewelFollowupUnit",["csx","DOM","Arbiter","CSS","FollowUpNotifEventTypedLogger"],(function a(b,c,d,e,f,g,h){__p&&__p();function i(j,k,l,m){__p&&__p();var n=arguments.length<=4||arguments[4]===undefined?null:arguments[4];this._followup=k;this._followup_event=n;this._parentContainer=this._followup.parentNode;this._friendRequest=this._parentContainer.firstChild;l&&c("Arbiter").subscribe(l,function(p,q){q.uid==j&&this._showFollowup()}.bind(this));var o=c("DOM").scry(this._parentContainer,"._e7")[0];o&&(o.onclick=this._hideFollowup.bind(this));m&&c("Arbiter").subscribe(m,function(p,q){q.uid==j&&this._hideFollowup()}.bind(this))}Object.assign(i.prototype,{_showFollowup:function j(){if(this._followup_event!==null)new(c("FollowUpNotifEventTypedLogger"))().setNotifEvent(this._followup_event).log();this._updateRequestAnimClass();c("CSS").addClass(this._followup,"active");c("CSS").addClass(this._parentContainer,"followupActivated")},_hideFollowup:function j(){this._updateRequestAnimClass();c("CSS").removeClass(this._followup,"active");c("CSS").removeClass(this._parentContainer,"followupActivated")},_updateRequestAnimClass:function j(){c("CSS").conditionClass(this._friendRequest,"animated",c("CSS").hasClass(this._followup,"animated"))}});f.exports=i}),null);
__d("InnerStickyArea",["cx","ContextualLayer","CSS","DataStore","DOM","Event","LayerHideOnTransition","Locale","Parent","Scroll","Style","Vector","removeFromArray"],(function a(b,c,d,e,f,g,h){__p&&__p();function i(l){var m=c("Parent").byClass(l,"scrollable")||c("Style").getScrollParent(l.parentNode);return m}function j(l){"use strict";var m=i(l);this.node=l;this._extracted=false;this._placeholder=c("DOM").create("div",{className:"_ptr"});k.getInstance(m).register(this)}j.prototype.update=function(){"use strict";if(this._extracted){c("Vector").getElementDimensions(this._placeholder).setElementWidth(this.node);c("Vector").getElementDimensions(this.node).setElementHeight(this._placeholder)}else c("Vector").getElementDimensions(this.node).setElementWidth(this.node).setElementHeight(this._placeholder);return this};j.prototype.setExtracted=function(l){"use strict";__p&&__p();if(l===this._extracted)return this;if(l){this.update();c("DOM").replace(this.node,this._placeholder)}else{c("Style").set(this.node,"height",null);c("Style").set(this.node,"width",null);if(this._placeholder.parentNode)c("DOM").replace(this._placeholder,this.node);else c("DOM").remove(this.node)}this._extracted=l;return this};j.prototype.getInlineNode=function(){"use strict";return this._extracted?this._placeholder:this.node};j.prototype.isDisplayed=function(){"use strict";var l=this.getInlineNode();return l.offsetWidth>0&&l.offsetHeight>0};j.prototype.getStickyContainer=function(){"use strict";return this._stickyContainer};j.prototype.updateContainer=function(){"use strict";var l=i(this.node);k.getInstance(l).register(this)};j.prototype.destroy=function(){"use strict";this.getStickyContainer().unregister(this)};j.getStickyContainer=function(l){"use strict";return k.getInstance(i(l))};function k(l){"use strict";__p&&__p();this.node=l;this._areas=[];this._fixTarget=null;this._fixedArea=null;this._initialized=false;this._layer=new(c("ContextualLayer"))({permanent:true},c("DOM").create("div")).setInsertParent(this.node.parentNode).disableBehavior(c("LayerHideOnTransition"));this._listener=c("Event").listen(l,"scroll",this.update.bind(this));c("CSS").addClass(l,"_pts");c("DataStore").set(l,"StickyContainer",this)}k.prototype.isDisplayed=function(){"use strict";return this.node.offsetWidth>0&&this.node.offsetHeight>0};k.prototype.register=function(l){"use strict";if(l.getStickyContainer())l.getStickyContainer().unregister(l);l._stickyContainer=this;this._areas.push(l);this.update();return this};k.prototype.unregister=function(l){"use strict";c("removeFromArray")(this._areas,l);this.update()};k.prototype.update=function(){"use strict";__p&&__p();if(!this.isDisplayed())return this;var l=null,m=this,n=c("Scroll").getTop(this.node),o;for(var p=0;p<this._areas.length;p++){var q=this._areas[p],r=q.getInlineNode();if(!q.isDisplayed())continue;if(!c("DOM").contains(this.node.parentNode,r))continue;var s=r.offsetTop;if(s<=n){if(o===undefined||s>o){l=q;o=s}}else if(l){var t=c("Vector").getElementDimensions(l.node).y;if(s-t<n)m=q;break}}if(this._fixedArea===l&&this._fixTarget===m)this._fixedArea&&this._fixedArea.update();else{if(this._fixedArea&&this._fixedArea!==l)this._unfixArea(this._fixedArea);if(l)this._fixAreaTo(l,m);this._fixedArea=l;this._fixTarget=m}return this};k.prototype.destroy=function(){"use strict";this._listener&&this._listener.remove();this._listener=null};k.prototype._fixAreaTo=function(l,m){"use strict";this._layer.hide();l.setExtracted(true);if(m instanceof k)this._layer.setInsertParent(this.node.parentNode).setAlignment(c("Locale").isRTL()?"right":"left").setContext(this.node);else this._layer.setInsertParent(this.node).setContext(m.node);this._layer.setContent(l.node).show();c("CSS").addClass(l.node,"_57kj")};k.prototype._unfixArea=function(l){"use strict";this._layer.hide();l.setExtracted(false);c("CSS").removeClass(l.node,"_57kj")};k.getInstance=function(l){"use strict";var m=c("DataStore").get(l,"StickyContainer");return m||new k(l)};f.exports=j}),null);