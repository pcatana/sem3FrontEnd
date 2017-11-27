if (self.CavalryLogger) { CavalryLogger.start_js(["q9\/NU"]); }

__d("CreditCardTypeEnum",[],(function a(b,c,d,e,f,g){f.exports={DINERSCLUB:64,AMERICANEXPRESS:65,DISCOVER:68,JCB:74,MASTERCARD:77,CUP:80,UNKNOWN:85,VISA:86}}),null);
__d("AdsSelectedAccountGetter",["AdsGetter"],(function a(b,c,d,e,f,g){"use strict";var h,i;h=babelHelpers.inherits(j,c("AdsGetter"));i=h&&h.prototype;j.getPath=function(){return"selected_account"};function j(){h.apply(this,arguments)}f.exports=j}),null);
__d("IntegrityAPIConversions",["AdContentFeedbackTypes","AdsImageUtils","AdsUtils","CROWAdDisapprovalReasons","CROWCompsType","IntegrityAPIConversionsConstants","Map"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=c("IntegrityAPIConversionsConstants").TEXT_OVERLAY_REASONS,i=Object.freeze({PROACTIVE_AD:"uncategorized",PROACTIVE_AD_ACCOUNT:"account_id",PROACTIVE_AD_BODY_TEXT:"body",PROACTIVE_AD_CAMPAIGN:"campaign_id",PROACTIVE_AD_IMAGE:"image_hash",PROACTIVE_AD_LANDING_PAGE:"link_url",PROACTIVE_AD_TARGET_SPEC:"targeting",PROACTIVE_AD_TITLE_TEXT:"title"}),j=function(){var j={};Object.keys(i).forEach(function(m){j[i[m]]=m});return j}(),k=new(c("Map"))(),l={getApprovedFeedback:function m(n){return{adHash:n,data:{},warningData:{},feedback:c("AdContentFeedbackTypes").APPROVE,imageUniqueIdentifierToBoxesAndPolicy:k,creativeID:null}},fromAPIErrorData:function m(n,o,p){var q=l._getImageUniqueIdentifier(p);return this.fromAPIErrorDataWithIdentifier(n,o,q)},fromAPIErrorDataWithIdentifier:function m(n,o,p){var q=n.feedback_data,r=n.creative_id,s=l._divideImageWarnings(q,h),t=s[0],u=s[1],v=Object.keys(t).length>0?c("AdContentFeedbackTypes").REJECT:c("AdContentFeedbackTypes").APPROVE;return{adHash:o,creativeID:r,data:t,warningData:u,feedback:v,imageUniqueIdentifierToBoxesAndPolicy:l._getTextOverlayPolicyInfo(p,q)}},_divideImageWarnings:function m(n,o){__p&&__p();var p={};if(!n||!n[c("CROWCompsType").PROACTIVE_AD_IMAGE])return[n,p];if(Object.keys(n[c("CROWCompsType").PROACTIVE_AD_IMAGE]).length===0)return[n,p];var q=c("AdsUtils").clone(n),r=q[c("CROWCompsType").PROACTIVE_AD_IMAGE];delete q[c("CROWCompsType").PROACTIVE_AD_IMAGE];Object.keys(r).forEach(function(t){if(o.has(t)){p[t]=r[t];delete r[t]}});if(Object.keys(r).length>0)q[c("CROWCompsType").PROACTIVE_AD_IMAGE]=r;var s={};if(Object.keys(p).length>0)s[c("CROWCompsType").PROACTIVE_AD_IMAGE]=p;return[q,s]},_getTextOverlayPolicyInfo:function m(n,o){__p&&__p();if(!o[c("CROWCompsType").PROACTIVE_AD_IMAGE])return k;var p=o[c("CROWCompsType").PROACTIVE_AD_IMAGE],q=c("CROWAdDisapprovalReasons").UNKNOWN,r=null;Object.keys(p).forEach(function(w){if(h.has(w)){r=p[w];q=w}});if(!r||!r.metadata||!r.metadata.image_url_to_penalty_info)return k;var s=r.metadata.image_url_to_penalty_info;if(Object.keys(s).length===0)return k;if(q===c("CROWAdDisapprovalReasons").UNKNOWN)return k;var t=new(c("Map"))();if(n&&Object.keys(s).length===1){var u=Object.keys(s)[0],v=s[u];this._addImageToPolicyInfo(n,v,t,q)}else Object.keys(s).forEach(function(w){var v=s[w];this._addImageToPolicyInfo(w,v,t,q)}.bind(this));return t},_addImageToPolicyInfo:function m(n,o,p,q){var r={penaltyInfo:o,policyWarning:q};p.set(n,r)},_getImageUniqueIdentifier:function m(n){var o=c("AdsImageUtils").getImageHash(n);if(o)return o;var p=c("AdsImageUtils").getImageURL(n);return p?p:null}};f.exports={fromAPIErrorDataWithIdentifier:l.fromAPIErrorDataWithIdentifier,getApprovedFeedback:l.getApprovedFeedback,fromAPIErrorData:l.fromAPIErrorData,compTypeToField:i,fieldToCompType:j}}),null);
__d("LocalDateInterval",["invariant","DateConsts","LocalDate","PeriodUnit","TimeInterval","Timezone"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i=c("Timezone").UTC;function j(k,l){k.compare(l)<=0||h(0);this.start=k;this.end=l}j.create=function(k,l){return new j(k,l)};j.prototype.equals=function(k){return this.start.equals(k.start)&&this.end.equals(k.end)};j.prototype.hashCode=function(){return this.start.hashCode()+this.end.hashCode()};j.prototype.join=function(k){return j.create(this.start.min(k.start),this.end.max(k.end))};j.prototype.contains=function(k){return this.start.isBeforeOrEqual(k)&&k.isBefore(this.end)};j.prototype.measure=function(k){return this.measureDateBasedUnit(k)};j.prototype.measureDateBasedUnit=function(k){__p&&__p();var l=this.start,m=this.end,n=void 0;switch(k){case c("PeriodUnit").year:n=m.getYear()-l.getYear();return l.addYears(n).compare(m)<=0?n:n-1;case c("PeriodUnit").month:n=m.getYear()-l.getYear();var o=m.getMonth()-l.getMonth(),p=12*n+o;for(var q=p;Math.max(0,p-2)<q;q-=1)if(l.addMonths(q).compare(m)<=0)break;return q;case c("PeriodUnit").week:return Math.floor(this.measureDateBasedUnit(c("PeriodUnit").day)/c("DateConsts").DAYS_PER_WEEK);case c("PeriodUnit").day:return Math.round((m.toInstant(i)-l.toInstant(i))/c("DateConsts").SEC_PER_DAY);default:h(0)}};j.prototype.toDuration=function(){return c("DateConsts").SEC_PER_DAY*this.measure("day")};j.prototype.toPeriod=function(){return this.toPeriodIn(c("PeriodUnit").canonicalDateUnits)};j.prototype.toPeriodIn=function(k){if(k.length===0)return{};else{var l=k[0],m={};m[l]=this.measure(l);Object.assign(m,j.create(this.start.add(m),this.end).toPeriodIn(k.slice(1)));return m}};j.fromDateTimes=function(k,l){return new j(c("LocalDate").fromDateTime(k),c("LocalDate").fromDateTime(l))};j.fromStrings=function(k,l){return new j(c("LocalDate").fromISOString(k),c("LocalDate").fromISOString(l))};j.fromTimeInterval=function(k){return j.fromDateTimes(k.getStartDateTime(),k.getEndDateTime())};j.prototype.toTimeInterval=function(k){return c("TimeInterval").create(this.start.toInstant(k),this.end.toInstant(k),k)};j.prototype.toString=function(){return"("+this.start.toString()+", "+this.end.toString()+")"};f.exports=j}),null);
__d("BUIDateRangePresets",["fbt","LocalDateInterval"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i={TODAY:{calculateInterval:function j(k){return new(c("LocalDateInterval"))(k,k.addDays(1))},text:h._("Today"),value:"today"},YESTERDAY:{calculateInterval:function j(k){return new(c("LocalDateInterval"))(k.subtractDays(1),k)},text:h._("Yesterday"),value:"yesterday"},LAST_7D:{calculateInterval:function j(k){return new(c("LocalDateInterval"))(k.subtractDays(7),k)},text:h._("Last 7 days"),value:"last_7d"},LAST_14D:{calculateInterval:function j(k){return new(c("LocalDateInterval"))(k.subtractDays(14),k)},text:h._("Last 14 days"),value:"last_14d"},LAST_28D:{calculateInterval:function j(k){return new(c("LocalDateInterval"))(k.subtractDays(28),k)},text:h._("Last 28 days"),value:"last_28d"},LAST_30D:{calculateInterval:function j(k){return new(c("LocalDateInterval"))(k.subtractDays(30),k)},text:h._("Last 30 days"),value:"last_30d"},LAST_7_DAYS:{calculateInterval:function j(k){return new(c("LocalDateInterval"))(k.subtractDays(7),k)},calculateIntervalIncludingToday:function j(k){return new(c("LocalDateInterval"))(k.subtractDays(7),k.addDays(1))},text:h._("Last 7 days"),value:"last_7_days"},LAST_14_DAYS:{calculateInterval:function j(k){return new(c("LocalDateInterval"))(k.subtractDays(14),k)},calculateIntervalIncludingToday:function j(k){return new(c("LocalDateInterval"))(k.subtractDays(14),k.addDays(1))},text:h._("Last 14 days"),value:"last_14_days"},LAST_28_DAYS:{calculateInterval:function j(k){return new(c("LocalDateInterval"))(k.subtractDays(28),k)},calculateIntervalIncludingToday:function j(k){return new(c("LocalDateInterval"))(k.subtractDays(28),k.addDays(1))},text:h._("Last 28 days"),value:"last_28_days"},THIS_MONTH:{calculateInterval:function j(k){var l=k.startOfMonth();return new(c("LocalDateInterval"))(l,k.addDays(1))},text:h._("This month"),value:"this_month"},THIS_QUARTER:{calculateInterval:function j(k){var l=k.startOfMonth();return new(c("LocalDateInterval"))(l.addMonths(-(k.month-1)%3),k.addDays(1))},text:h._("This quarter"),value:"this_quarter"},THIS_YEAR:{calculateInterval:function j(k){return new(c("LocalDateInterval"))(k.startOfYear(),k.addDays(1))},text:h._("This year"),value:"this_year"}};f.exports=i}),null);
__d("MessengerMessageRequestsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(){this.clear()}h.prototype.log=function(){c("GeneratedLoggerUtils").log("logger:MessengerMessageRequestsLoggerConfig",this.$MessengerMessageRequestsTypedLogger1,c("Banzai").BASIC)};h.prototype.logVital=function(){c("GeneratedLoggerUtils").log("logger:MessengerMessageRequestsLoggerConfig",this.$MessengerMessageRequestsTypedLogger1,c("Banzai").VITAL)};h.prototype.clear=function(){this.$MessengerMessageRequestsTypedLogger1={};return this};h.prototype.updateData=function(j){this.$MessengerMessageRequestsTypedLogger1=babelHelpers["extends"]({},this.$MessengerMessageRequestsTypedLogger1,j);return this};h.prototype.setAction=function(j){this.$MessengerMessageRequestsTypedLogger1.action=j;return this};h.prototype.setAppID=function(j){this.$MessengerMessageRequestsTypedLogger1.appid=j;return this};h.prototype.setAppversion=function(j){this.$MessengerMessageRequestsTypedLogger1.appversion=j;return this};h.prototype.setClienttime=function(j){this.$MessengerMessageRequestsTypedLogger1.clienttime=j;return this};h.prototype.setContainermodule=function(j){this.$MessengerMessageRequestsTypedLogger1.containermodule=j;return this};h.prototype.setCountry=function(j){this.$MessengerMessageRequestsTypedLogger1.country=j;return this};h.prototype.setEntryPoint=function(j){this.$MessengerMessageRequestsTypedLogger1.entry_point=j;return this};h.prototype.setExtraClientData=function(j){this.$MessengerMessageRequestsTypedLogger1.extra_client_data=j;return this};h.prototype.setFolderType=function(j){this.$MessengerMessageRequestsTypedLogger1.folder_type=j;return this};h.prototype.setName=function(j){this.$MessengerMessageRequestsTypedLogger1.name=j;return this};h.prototype.setSurface=function(j){this.$MessengerMessageRequestsTypedLogger1.surface=j;return this};h.prototype.setThreadID=function(j){this.$MessengerMessageRequestsTypedLogger1.thread_id=j;return this};h.prototype.setThreadKey=function(j){this.$MessengerMessageRequestsTypedLogger1.thread_key=j;return this};h.prototype.setThreadKeyList=function(j){this.$MessengerMessageRequestsTypedLogger1.thread_key_list=j;return this};h.prototype.setVC=function(j){this.$MessengerMessageRequestsTypedLogger1.vc=j;return this};h.prototype.updateExtraData=function(j){j=c("nullthrows")(c("GeneratedLoggerUtils").serializeMap(j));c("GeneratedLoggerUtils").checkExtraDataFieldNames(j,i);this.$MessengerMessageRequestsTypedLogger1=babelHelpers["extends"]({},this.$MessengerMessageRequestsTypedLogger1,j);return this};h.prototype.addToExtraData=function(j,k){var l={};l[j]=k;return this.updateExtraData(l)};var i={action:true,appid:true,appversion:true,clienttime:true,containermodule:true,country:true,entry_point:true,extra_client_data:true,folder_type:true,name:true,surface:true,thread_id:true,thread_key:true,thread_key_list:true,vc:true};f.exports=h}),null);
__d("messengerIterateEmoji",["MessengerSupportedEmoji"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(i,j,k,l){__p&&__p();var m=String(i);while(m){var n=c("MessengerSupportedEmoji").getEmojiMatchObj(m);if(n){var o=n.offset+n.length,p=m.substr(0,n.is_supported?n.offset:o);k(p);if(n.is_supported)j(n.emoji_str,n.emoji_key,l);var q=m.substr(o);m=q}else break}k(m)}f.exports=h}),null);
__d("messengerIterateEmoticons",["EmoticonEmojiList"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(i,j,k,l){__p&&__p();var m,n,o,p,q,r=String(i);while(r){var s=c("EmoticonEmojiList").regexp.exec(r);if(s){m=s.index+s[1].length;n=r.substr(0,m);o=s[2];p=r.substr(m+o.length);q=c("EmoticonEmojiList").names[o];k(n);j(o,q,l);r=p}else break}k(r)}f.exports=h}),null);
__d("MessengerTextWithEmoticons.react",["cx","fbt","BaseTextWithDecoration.react","EmojiImageURL","EmoticonEmojiList","Image.react","React","messengerIterateEmoji","messengerIterateEmoticons"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k,l=c("React").PropTypes;function m(q,r,s){var t=s?128:16,u=c("EmojiImageURL").getMessengerURL(r,t),v=s?"_1ift _5m3a":"_1ift _2560";return c("React").createElement(c("Image.react"),{alt:q,className:v,src:u})}function n(q,r,s){var t=s?128:16,u=c("EmoticonEmojiList").emote2emojis[r],v=u?c("EmojiImageURL").getMessengerURL(u,t):null;if(v){var w=String.fromCodePoint(parseInt(u,t)),x=s?"_1ift _5m3a":"_1ift _2560";return c("React").createElement(c("Image.react"),{alt:w,className:x,src:v})}var y=i._("{emoticonName} emoticon",[i.param("emoticonName",r)]);return c("React").createElement("span",{"aria-label":y},q)}function o(q,r,s){return function(t,u,v){var w=function w(x,y,s){u(r(x,y,s))};q(String(t),w,v,s)}}j=babelHelpers.inherits(p,c("React").Component);k=j&&j.prototype;p.prototype.shouldComponentUpdate=function(q){return q.text!==this.props.text};p.prototype.render=function(){var q=[o(c("messengerIterateEmoji"),m,this.props.customSize),o(c("messengerIterateEmoticons"),n,this.props.customSize)];return c("React").createElement(c("BaseTextWithDecoration.react"),babelHelpers["extends"]({},this.props,{text:this.props.text,decorators:q}))};function p(){j.apply(this,arguments)}p.propTypes={text:l.string,customSize:l.bool};f.exports=p}),null);
__d("MercuryThreadTitle.react",["fbt","MercuryIDs","MessengerTextWithEmoticons.react","MercuryParticipantListRenderer","MercuryParticipants","React","TextWithEmoticons.react"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i=c("React").PropTypes,j=c("React").createClass({displayName:"MercuryThreadTitle",propTypes:{isNewThread:i.bool,thread:i.object.isRequired,viewer:i.string.isRequired,showUnreadCount:i.bool,useShortName:i.bool,useAndSeparator:i.bool},getDefaultProps:function k(){return{isNewThread:false,showUnreadCount:false,useShortName:false,useAndSeparator:false}},getInitialState:function k(){return{participantNames:""}},componentDidMount:function k(){this._renderParticipantsList(this.props)},componentWillReceiveProps:function k(l){this._renderParticipantsList(l)},render:function k(){return c("React").createElement("span",{className:this.props.className},this.props.thread.name?this._renderThreadTitle():this.state.participantNames,this.props.children)},getTitle:function k(){return this.state.participantNames},_renderThreadTitle:function k(){var l=this.props.thread,m=c("React").createElement(c("MessengerTextWithEmoticons.react"),{renderEmoticons:true,renderEmoji:true,text:l.name});if(!l.unread_count||!this.props.showUnreadCount)return m;return this._renderTitleWithUnreadCount(m,l.unread_count)},_renderParticipantsList:function k(l){__p&&__p();if(l.thread.name)return;this.setState({participantNames:""});var m=c("MercuryIDs").getParticipantIDFromUserID(l.viewer),n=l.thread.participants||[];if(n.length>1)n=n.filter(function(o){return o!=m});c("MercuryParticipants").getMulti(n,function(o){if(!this.isMounted())return;var p=n.map(function(s){return o[s]}),q=l.thread.custom_nickname?{}:null,r=c("MessengerTextWithEmoticons.react");if(q)for(var s in l.thread.custom_nickname)q[s]=c("React").createElement(r,{renderEmoticons:true,renderEmoji:true,text:l.thread.custom_nickname[s]});var t=new(c("MercuryParticipantListRenderer"))().setUseShortName(l.useShortName).setUseAndSeparator(l.useAndSeparator).setIsNewThread(l.isNewThread).setNickname(q).renderParticipantList(p),u=l.showUnreadCount&&l.thread.unread_count?this._renderTitleWithUnreadCount(t,l.thread.unread_count):t;this.setState({participantNames:u})}.bind(this))},_renderTitleWithUnreadCount:function k(l,m){return h._("{conversation-title} ({unread-count})",[h.param("conversation-title",l),h.param("unread-count",m)])}});f.exports=j}),null);
__d("PhotoStoreCore",[],(function a(b,c,d,e,f,g){__p&&__p();var h={actions:{UPDATE:"update"},_photoCache:{},_postCreateCallbacks:{},getPhotoCache:function i(j){if(!this._photoCache[j])throw new Error("Photo cache requested for unknown set ID");return this._photoCache[j]},hasBeenCreated:function i(j){return!!this._photoCache[j]},clearSetCache:function i(j){delete this._photoCache[j];delete this._postCreateCallbacks[j]},getByIndex:function i(j,k,l){this.getPhotoCache(j).getItemAtIndex(k,l)},getByIndexImmediate:function i(j,k){if(this._photoCache[j])return this._photoCache[j].getItemAtIndexImmediate(k);return undefined},getItemsInAvailableRange:function i(j){var k=this.getAvailableRange(j),l=[];for(var m=k.offset;m<k.length;m++)l.push(this.getByIndexImmediate(j,m));return l},getItemsAfterIndex:function i(j,k,l,m){var n=this.getCursorByIndexImmediate(j,k);this.fetchForward(j,n,l,m)},getAllByIDImmediate:function i(j){var k=Object.keys(this._photoCache);return k.map(function(l){return this.getByIndexImmediate(l,this.getIndexForID(l,j))}.bind(this)).filter(function(l){return!!l})},getIndexForID:function i(j,k){if(this._photoCache[j])return this._photoCache[j].getIndexForID(k);return undefined},getEndIndex:function i(j){var k=this.getAvailableRange(j);return k.offset+k.length-1},getCursorByIndexImmediate:function i(j,k){var l=this.getByIndexImmediate(j,k);if(l)return this._photoCache[j].getCursorForID(l.id);return undefined},hasNextPage:function i(j){var k=this.getCursorByIndexImmediate(j,this.getEndIndex(j));return this.getPhotoCache(j).hasNextPage(k)},getAvailableRange:function i(j){return this.getPhotoCache(j).getAvailableRange()},hasLooped:function i(j){return this.getPhotoCache(j).hasLooped()},fetchForward:function i(j,k,l,m){this.getPhotoCache(j).getItemsAfterCursor(k,l,m)},fetchBackward:function i(j,k,l,m){this.getPhotoCache(j).getItemsBeforeCursor(k,l,m)},executePostCreate:function i(j,k){if(this._photoCache[j])k&&k();else this._postCreateCallbacks[j]=k},runPostCreateCallback:function i(j){var k=this._postCreateCallbacks[j];if(k){k();delete this._postCreateCallbacks[j]}},setPreFetchCallback:function i(j,k){this.getPhotoCache(j).setPreFetchCallback(k)},updateData:function i(j){var k=j.set_id;if(!this._photoCache[k]){this._photoCache[k]=new j.cache_class(j);this.runPostCreateCallback(k)}else if(j.query_metadata.action==h.actions.UPDATE)this._photoCache[k].updateData(j);else this._photoCache[k].addData(j)},updateFeedbackData:function i(j){var k=Object.keys(j);k.forEach(function(l){return h.getAllByIDImmediate(l).forEach(function(m){m.feedback=j[l].feedback})})},reset:function i(){Object.keys(this._photoCache).forEach(function(j){return this.clearSetCache(j)}.bind(this))}};f.exports=h}),null);
__d("PhotoStore",["Arbiter","PhotoStoreCore"],(function a(b,c,d,e,f,g){c("Arbiter").subscribe("update-photos",function(h,i){c("PhotoStoreCore").updateData(i)});f.exports=c("PhotoStoreCore")}),null);
__d("ShareDialogAudienceTypes",["getObjectValues","ShareModeConst"],(function a(b,c,d,e,f,g){__p&&__p();var h={OWN:c("ShareModeConst").SELF_POST,PERSON:c("ShareModeConst").FRIEND,GROUP:c("ShareModeConst").GROUP,EVENT:c("ShareModeConst").EVENT,PAGE:c("ShareModeConst").PAGE,FUNDRAISER:c("ShareModeConst").FUNDRAISER,MESSAGE:c("ShareModeConst").MESSAGE},i=c("getObjectValues")(h);function j(k){return i.some(function(l){return l===k})}f.exports=h;f.exports.ALL=i;f.exports.isValid=j;f.exports.propType=function(k,l){if(!j(k[l]))throw new Error("Invalid audience "+k[l])}}),null);
__d("trim",["invariant"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();function i(j,k){k.length===1||h(0);if(j==="")return j;while(j.charAt(0)===k)j=j.slice(1);while(j.charAt(j.length-1)===k)j=j.slice(0,-1);return j}f.exports=i}),null);
__d("createCharacterList",["CharacterMetadata","immutable"],(function a(b,c,d,e,f,g){"use strict";var h=c("immutable").List;function i(j,k){var l=j.map(function(m,n){var o=k[n];return c("CharacterMetadata").create({style:m,entity:o})});return h(l)}f.exports=i}),null);
__d("decodeEntityRanges",["UnicodeUtils"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=c("UnicodeUtils").substr;function i(j,k){var l=Array(j.length).fill(null);if(k)k.forEach(function(m){var n=h(j,0,m.offset).length,o=n+h(j,m.offset,m.length).length;for(var p=n;p<o;p++)l[p]=m.key});return l}f.exports=i}),null);
__d("decodeInlineStyleRanges",["immutable","UnicodeUtils"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=c("immutable").OrderedSet,i=c("UnicodeUtils").substr,j=h();function k(l,m){var n=Array(l.length).fill(j);if(m)m.forEach(function(o){var p=i(l,0,o.offset).length,q=p+i(l,o.offset,o.length).length;while(p<q){n[p]=n[p].add(o.style);p++}});return n}f.exports=k}),null);
__d("convertFromRawToDraftState",["invariant","ContentBlock","ContentBlockNode","ContentState","DraftEntity","immutable","SelectionState","createCharacterList","decodeEntityRanges","decodeInlineStyleRanges","generateRandomKey"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i=c("immutable").List,j=c("immutable").Map,k=c("immutable").OrderedMap,l=function l(u,v){var w=u.key,x=u.type,y=u.data,z=u.text,A=u.depth,B={text:z,depth:A||0,type:x||"unstyled",key:w||c("generateRandomKey")(),data:j(y),characterList:m(u,v)};return B},m=function m(u,v){var w=u.text,x=u.entityRanges,y=u.inlineStyleRanges,z=x||[],A=y||[];return c("createCharacterList")(c("decodeInlineStyleRanges")(w,A),c("decodeEntityRanges")(w,z.filter(function(B){return Object.prototype.hasOwnProperty.call(v,B.key)}).map(function(B){return babelHelpers["extends"]({},B,{key:v[B.key]})})))},n=function n(u){return babelHelpers["extends"]({},u,{key:u.key||c("generateRandomKey")()})},o=function o(u,v,w){var x=v.map(function(y){return babelHelpers["extends"]({},y,{parentRef:w})});return u.concat(x.reverse())},p=function p(u,v){__p&&__p();return u.map(n).reduce(function(w,x,y){__p&&__p();Array.isArray(x.children)||h(0);var z=x.children.map(n),A=new(c("ContentBlockNode"))(babelHelpers["extends"]({},l(x,v),{prevSibling:y===0?null:u[y-1].key,nextSibling:y===u.length-1?null:u[y+1].key,children:i(z.map(function(J){return J.key}))}));w=w.set(A.getKey(),A);var B=o([],z,A);while(B.length>0){var C=B.pop(),D=C.parentRef,E=D.getChildKeys(),F=E.indexOf(C.key),G=Array.isArray(C.children);if(!G){G||h(0);break}var H=C.children.map(n),I=new(c("ContentBlockNode"))(babelHelpers["extends"]({},l(C,v),{parent:D.getKey(),children:i(H.map(function(J){return J.key})),prevSibling:F===0?null:E.get(F-1),nextSibling:F===E.size-1?null:E.get(F+1)}));w=w.set(I.getKey(),I);B=o(B,H,I)}return w},k())},q=function q(u,v){return k(u.map(function(w){var x=new(c("ContentBlock"))(l(w,v));return[x.getKey(),x]}))},r=function r(u,v){var w=u.blocks;if(!Array.isArray(w[0].children))return q(w,v);return p(w,v)},s=function s(u){var v=u.entityMap,w={};Object.keys(v).forEach(function(x){var y=v[x],z=y.type,A=y.mutability,B=y.data;w[x]=c("DraftEntity").__create(z,A,B||{})});return w},t=function t(u){Array.isArray(u.blocks)||h(0);var v=s(u),w=r(u,v),x=w.isEmpty()?new(c("SelectionState"))():c("SelectionState").createEmpty(w.first().getKey());return new(c("ContentState"))({blockMap:w,entityMap:v,selectionBefore:x,selectionAfter:x})};f.exports=t}),null);
__d("decodeBlocks",["ComposedBlockType","ComposedInlineStyle","convertFromRawToDraftState","mapObject"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(k,l){var m=k.map(function(o){var p=o.type,q=o.inlineStyleRanges,r=babelHelpers.objectWithoutProperties(o,["type","inlineStyleRanges"]);return babelHelpers["extends"]({type:i[p]||"unstyled",inlineStyleRanges:(q||[]).map(function(s){return babelHelpers["extends"]({},s,{style:j[s.style]})})},r)}),n=c("mapObject")(l,function(o){return{type:o.getType(),mutability:o.getMutability(),data:o.getData()}});return c("convertFromRawToDraftState")({blocks:m,entityMap:n})}var i={};i[c("ComposedBlockType").UNSTYLED]="unstyled";i[c("ComposedBlockType").PARAGRAPH]="paragraph";i[c("ComposedBlockType").BLOCKQUOTE]="blockquote";i[c("ComposedBlockType").ORDERED_LIST_ITEM]="ordered-list-item";i[c("ComposedBlockType").UNORDERED_LIST_ITEM]="unordered-list-item";i[c("ComposedBlockType").CODE]="code-block";i[c("ComposedBlockType").HEADER_ONE]="header-one";i[c("ComposedBlockType").HEADER_TWO]="header-two";i[c("ComposedBlockType").MEDIA]="atomic";i[c("ComposedBlockType").PULLQUOTE]="pullquote";var j={};j[c("ComposedInlineStyle").BOLD]="BOLD";j[c("ComposedInlineStyle").CODE]="CODE";j[c("ComposedInlineStyle").ITALIC]="ITALIC";j[c("ComposedInlineStyle").STRIKETHROUGH]="STRIKETHROUGH";j[c("ComposedInlineStyle").UNDERLINE]="UNDERLINE";f.exports=h}),null);
__d("CreditCardFormParam",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({ACCOUNT_ID:"account_id",ACCOUNT_COUNTRY_CODE:"account_country_code",APP_ID:"app_id",CARD_EXPIRATION:"exp",CARD_FBID:"cc_fbid",CARD_ID:"cc_id",CARD_TYPE:"cardType",CITY:"city",CONTEXT_ID:"context_id",COUNTRY:"country",CSC_LENGTH:"csc_length",EMAIL:"email",FIRST_NAME:"firstName",TRACKING_ID:"tracking_id",JSFAIL_SOURCE:"jsfail_source",KEYPRESS_TIMES:"kpts",LAST_NAME:"lastName",MONTH:"month",STATE:"state",STREET:"street",STREET_2:"street2",VALIDATE_ADDRESS:"validate_address",VALIDATE_NAME:"validate_name",VALIDATE_ZIP:"validate_zip",YEAR:"year",ZIP:"zip",VALIDATOR_CHECKS:"checks",CARD_NUMBER:"creditCardNumber",CSC:"csc",CARD_NUMBER_FIRST_6:"creditCardNumber_first6",CARD_NUMBER_LAST_4:"creditCardNumber_last4",CARD_NUMBER_TOKEN:"creditCardNumber_token",CSC_TOKEN:"csc_token",AUTH_LEVEL_FLAG:"auth_level",AUTH_AMOUNT:"auth_amount",AUTH_CURRENCY:"auth_currency",AUTO_EXPAND_AUTH_LEVEL_FLAG:"auto_expand_auth_level",PAYMENT_ITEM_TYPE:"payment_item_type",COMBINED_PAYMENT_TYPE:"combined_payment_type",RECEIVER_ID:"receiver_id",CREDENTIAL_ID:"credential_id",IS_STORED_BALANCE:"is_stored_balance",IS_CHECKOUT_ELIGIBLE:"is_checkout_eligible",CHECKOUT_SAVE_CC_WITH_AUTH:"checkout_save_cc_with_auth",CHECKOUT_FUND_AMOUNT:"checkout_fund_amount",FLOW_PLACEMENT:"flow_placement",FLOW_TYPE:"flow_type",STORED_BALANCE_STATUS:"stored_balance_status",SESSION_ID:"session_id"})}),null);
__d("CreditCardTypeField",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({UNKNOWN:"unknown",VISA:"visa",MASTERCARD:"mastercard",DISCOVER:"discover",AMERICAN_EXPRESS:"american_express",JCB:"jcb",DINERS_CLUB:"diners_club"})}),null);
__d("MNAdsLoggerEventEnum",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({LINK_CLICK:"messenger_ads_link_click",LINK_CLICK_CTA:"messenger_ads_link_click_cta",MESSAGE_SEEN_THREAD:"messenger_ads_message_seen_thread",MESSAGE_SEEN_INBOX:"messenger_ads_message_seen_inbox",MESSAGE_SEEN_REQUEST:"messenger_ads_message_seen_request",QUICK_REPLY_TAPPED:"messenger_ads_quick_reply_tapped"})}),null);
__d("OfferAvailabilityLocation",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({ONLINE:"online",OFFLINE:"offline",BOTH:"both"})}),null);
__d("XPaymentsCreditCardMutationType",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({CREATE:"create",UPDATE:"update",CACHE_CVV:"cache_cvv"})}),null);
__d("XPaymentsCreditCardMutatorParam",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({AUTH_LOG_ID:"auth_log_id",MUTATION_TYPE:"mutation_type",CARD_FBID:"cc_fbid",CACHE_TOKEN:"cache_token",ERRORS:"errors",GENERAL_ERROR:"general",FIELD_ERRORS:"fields",ERROR_CODE:"code",ERROR_MSG:"message",ERROR_TITLE:"title"})}),null);
__d("glyph",[],(function a(b,c,d,e,f,g){f.exports=function h(i){throw new Error("glyph: Unexpected glyph call.")}}),null);
__d("BootloadOnInteraction.react",["BootloadOnRender.react","React"],(function a(b,c,d,e,f,g){__p&&__p();var h,i;h=babelHelpers.inherits(j,c("React").Component);i=h&&h.prototype;function j(k){"use strict";i.constructor.call(this,k);this.$BootloadOnInteraction1=function(){this.setState({hadUserInteraction:true})}.bind(this);this.state={hadUserInteraction:false}}j.prototype.render=function(){"use strict";if(!this.state.hadUserInteraction)return c("React").cloneElement(this.props.placeholder,{onFocus:this.$BootloadOnInteraction1,onMouseOver:this.$BootloadOnInteraction1,onClick:this.$BootloadOnInteraction1});var k=this.props,l=k.loader,m=k.component,n=k.placeholder;return c("React").createElement(c("BootloadOnRender.react"),{placeholder:n,loader:l,component:m})};f.exports=j}),null);
__d("create-react-class",["React","create-react-class/factory"],(function a(b,c,d,e,f,g){"use strict";var h=new(c("React").Component)().updater;f.exports=c("create-react-class/factory")(c("React").Component,c("React").isValidElement,h)}),null);
__d("PaymentMethodUtils",["fbt","ix","CreditCardTypeEnum","CreditCardTypeField"],(function a(b,c,d,e,f,g,h,i){__p&&__p();var j=16,k=4,l=[{pattern:/^5[1-5]|^2(2(2[1-9]|[3-9])|[3-6]|7([01]|20))/,name:"mc",cscDigits:3,digits:16,supported:true,code:77,type:c("CreditCardTypeField").MASTERCARD},{pattern:/^4/,name:"visa",cscDigits:3,digits:16,supported:true,code:86,type:c("CreditCardTypeField").VISA},{pattern:/^3[47]/,name:"amex",cscDigits:4,digits:15,supported:true,code:65,type:c("CreditCardTypeField").AMERICAN_EXPRESS},{pattern:/^35(2[8-9]|[3-8])/,name:"jcb",cscDigits:3,digits:16,supported:true,code:74,type:c("CreditCardTypeField").JCB},{pattern:/^62/,name:"cup",cscDigits:3,digits:16,supported:true,code:80,type:"china_union_pay"},{pattern:/^(6011|65|64[4-9])/,name:"disc",cscDigits:3,digits:16,supported:true,code:68,type:c("CreditCardTypeField").DISCOVER},{pattern:/^30[0-5]/,name:"diners",digits:14,cscDigits:3,supported:false,code:64,type:c("CreditCardTypeField").DINERS_CLUB},{name:"unknown",pattern:null,digits:16,cscDigits:3,supported:false,code:85,type:c("CreditCardTypeField").UNKNOWN}],m=function m(o){return o.replace(/[iIl]/g,"1").replace(/[Oo]/g,"0").replace(/[^\d]/gi,"")},n={getCardType:function o(p){p=m(p);p=p.substr(0,6);for(var q=0;q<l.length;q++)if(l[q].pattern&&p.match(l[q].pattern))return l[q];return l[l.length-1]},getCardTypeFromFieldType:function o(p){var q=l.find(function(q){return p===q.type})||l[l.length-1];return q},getCardTypeFromCode:function o(p){for(var q=0;q<l.length;q++)if(p==l[q].code)return l[q];return null},isValidCCNumber:function o(p){p=m(p);var q=n.getCardType(p);if(q.digits!==p.length)return false;if(!q.supported)return false;return n.isValidLuhn(p)},isValidLuhn:function o(p){__p&&__p();p=m(p);var q=p.split("").reverse(),r="";for(var s=0;s<q.length;s++){var t=parseInt(q[s],10);if(s%2!==0)t=t*2;r=r+t}var u=0;for(s=0;s<r.length;s++)u=u+parseInt(r.charAt(s),10);return!!(u!==0&&u%10===0)},getMaxCardLength:function o(p){return j},getMaxCSCLength:function o(){return k},getImageForCard:function o(p){return this.getImageForCardType(p.name)},getImageForCardType:function o(p){switch(p){case"visa":return i("95533");case"mc":return i("95531");case"amex":return i("95528");case"disc":return i("95529");case"jcb":return i("95530");default:return i("95526")}},getImageForPayPal:function o(){return i("95532")},getCreditCardString:function o(p){switch(p){case c("CreditCardTypeEnum").VISA:return h._("Visa");case c("CreditCardTypeEnum").MASTERCARD:return h._("MasterCard");case c("CreditCardTypeEnum").DISCOVER:return h._("Discover");case c("CreditCardTypeEnum").AMERICANEXPRESS:return h._("AMEX");case c("CreditCardTypeEnum").JCB:return h._("JCB");case c("CreditCardTypeEnum").DINERSCLUB:return h._("Diners");default:return h._("Credit Card")}}};f.exports=n}),null);
__d("PaymentTokenProxyUtils",["CurrentEnvironment","URI"],(function a(b,c,d,e,f,g){__p&&__p();var h={getURI:function i(j){__p&&__p();var k=arguments.length<=1||arguments[1]===undefined?null:arguments[1],l=new(c("URI"))("/ajax/payment/token_proxy.php").setDomain(window.location.hostname).setProtocol("https").addQueryData(j),m=l.getDomain().split(".");if(m.indexOf("secure")<0){m.splice(1,0,"secure");if(k==="www"||k==="secure"){if(m[0]!=="secure")m.shift()}else if(k!==null)if(m[0]==="secure")m.splice(0,0,k);else m[0]=k;else if(m[0]=="www")m.shift();l.setDomain(m.join("."))}if(c("CurrentEnvironment").messengerdotcom){var n=l.getDomain();n=n.replace("messenger.com","facebook.com");l.setDomain(n)}return l}};f.exports=h}),null);
__d("createReactClass_DEPRECATED",["create-react-class"],(function a(b,c,d,e,f,g){"use strict";f.exports=c("create-react-class")}),null);
__d("XPaymentsCreditCardMutatorController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/payments/credit_card/mutator/{mutation_type}/",{mutation_type:{type:"Enum",enumType:1}})}),null);
__d("XShareDialogSubmitController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/share/dialog/submit/",{post_id:{type:"Int"},share_type:{type:"Int"},url:{type:"String"},audience_type:{type:"String"},owner_id:{type:"Int"},app_id:{type:"Int"},message:{type:"String"},shared_ad_id:{type:"Int"},sharer_id:{type:"Int"},source:{type:"String"},composer_session_id:{type:"String"},audience_targets:{type:"IntVector"},album_id:{type:"Int"},ephemeral_ttl_mode:{type:"Int"},tagged_people:{type:"IntVector"},tagged_place:{type:"Int"},tagged_action:{type:"Int"},tagged_object:{type:"Int"},tagged_object_str:{type:"String"},tagged_action_icon:{type:"Int"},tagged_feed_topics:{type:"StringVector"},attribution:{type:"Int"},privacy:{type:"String"},messaging_tags:{type:"StringVector"},ft:{type:"StringToStringMap"},internalextra:{type:"StringToStringMap"},internal_preview_image_id:{type:"Int"},share_now:{type:"Bool",defaultValue:false},is_forced_reshare_of_post:{type:"Bool",defaultValue:false},is_throwback_post:{type:"Bool",defaultValue:false},targeted_privacy_data:{type:"HackType"},unpublished_content_type:{type:"Enum",enumType:0},branded_content_repost_root:{type:"Int"},share_to_group_as_page:{type:"Bool",defaultValue:false},shared_to_group_id:{type:"Int"},civic_product_source:{type:"String"},holiday_card_source:{type:"Enum",enumType:1}})}),null);