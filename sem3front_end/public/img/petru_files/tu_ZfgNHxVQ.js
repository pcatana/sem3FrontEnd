if (self.CavalryLogger) { CavalryLogger.start_js(["yaFo+"]); }

__d("AdsTargetingLocationLoggingEvents",[],(function a(b,c,d,e,f,g){"use strict";var h=Object.freeze({GEO_LOCATION_SELECT:"select_geo_location",GEO_LOCATION_SELECT_EXCLUDE:"select_exclude_geo_location",GEO_LOCATION_START_TYPING:"geo_location_start_typing",GEO_LOCATION_CLICK_INCLUDE:"geo_location_click_include",GEO_LOCATION_CLICK_EXCLUDE:"geo_location_click_exclude",GEO_LOCATION_USE_EXCLUDE:"geo_location_use_exclude",GEO_LOCATION_CHANGE_RADIUS:"geo_location_change_radius",GEO_LOCATION_CLICK_XOUT:"geo_location_click_xout",GEO_LOCATION_NO_MATCH:"geo_location_no_match",GEO_LOCATION_UNSUPPORTED:"geo_location_unsupported",GEO_LOCATION_EXPLORE_TARGETING_TYPE:"geo_location_explore_targeting_type",GEO_LOCATION_CHANGE_TARGETING_TYPE:"geo_location_change_targeting_type",GEO_LOCATION_COPY_PASTE:"geo_location_copy_paste",GEO_LOCATION_ABANDONED_SEARCH:"abandoned_search",GEO_LOCATION_GEOCODE_FAIL:"geo_location_geocode_fail",GEO_LOCATION_CLOSE_NUX:"geo_location_close_nux",GEO_LOCATION_CLICK_RADIUS_EDITOR:"geo_location_click_radius_editor",GEO_LOCATION_COMPONENT_LOADING_TIME:"geo_location_component_loading_time",GEO_LOCATION_TYPEAHEAD_NO_INTERACTION:"geo_location_typeahead_no_interaction",GEO_LOCATION_CHANGE_TO_WORLDWIDE_ON_MCLAL_CHANGE:"geo_location_change_to_worldwide_on_mclal_change",GEO_LOCATION_DISMISS_CHANGE_TO_WORLDWIDE_NOTICE:"geo_location_dismiss_to_worldwide_notice",GEO_LOCATION_OPEN_MULTICITY_CHEVRON_MENU:"geo_location_multi_city_open_chevron_menu",GEO_LOCATION_INCLUDE_CITIES_ONLY:"geo_location_multi_city_include_cities_only",GEO_LOCATION_EXCLUDE_CITIES_ONLY:"geo_location_multi_city_exclude_cities_only",GEO_LOCATION_INCLUDE_ALL_AREAS:"geo_location_multi_city_include_all_areas",GEO_LOCATION_CHANGE_CITY_POPULATION_FILTER:"geo_location_multi_city_change_population_filter",GEO_LOCATION_MULTICITY_SUGGESTION_TOOLTIP_SURFACED:"geo_location_multi_city_location_suggested_tooltip",GEO_LOCATION_MULTICITY_SUGGESTION_TOOLTIP_CLICKED:"geo_location_multi_city_location_suggested_tooltip_clicked",GEO_LOCATION_COUNTRYGROUP_SUGGESTION_TOOLTIP_SURFACED:"geo_location_country_group_location_suggested_tooltip",GEO_LOCATION_COUNTRYGROUP_SUGGESTION_TOOLTIP_CLICKED:"geo_location_country_group_location_suggested_tooltip_clicked",GEO_LOCATION_BROWSE_LIST_OPEN:"geo_location_browse_list_open",GEO_LOCATION_BROWSE_LIST_REMOVE_ENTRY:"geo_location_browse_list_remove_entry",GEO_LOCATION_BROWSE_LIST_ADD_ENTRY:"geo_location_browse_list_add_entry",GEO_LOCATION_MAP_ADD_LOCATION:"geo_location_map_add_location",GEO_LOCATION_MAP_ZOOM_IN:"geo_location_map_zoom_in",GEO_LOCATION_MAP_ZOOM_OUT:"geo_location_map_zoom_out",GEO_LOCATION_MAP_ZOOM_TO_FIT:"geo_location_map_zoom_to_fit",GEO_LOCATION_MAP_COLLAPSE:"geo_location_map_collapse",GEO_LOCATION_MAP_EXPAND:"geo_location_map_expand",GEO_LOCATION_MAP_INCLUDE:"geo_location_map_include",GEO_LOCATION_MAP_EXCLUDE:"geo_location_map_exclude",GEO_LOCATION_MAP_DELETE:"geo_location_map_delete",GEO_LOCATION_MAP_MOUNTING_TIME:"geo_location_map_mounting_time",GEO_LOCATION_MAP_DATA_LOADING_TIME:"geo_location_map_data_loading_time",GEO_LOCATION_MAP_REPORT_ISSUE:"geo_location_map_report_issue",GEO_LOCATION_BLIP_OPEN_BULK_DIALOG:"geo_location_blip_open_bulk_dialog",GEO_LOCATION_BLIP_ADD_LOCATIONS:"geo_location_blip_add_locations",GEO_LOCATION_BLIP_REMOVE_LOCATION:"geo_location_blip_remove_location",GEO_LOCATION_BLIP_UPDATE_LOCATION:"geo_location_blip_update_location",GEO_LOCATION_BLIP_UPDATE_DEFAULT_RADIUS:"geo_location_blip_update_default_radius",GEO_LOCATION_BLIP_UPDATE_DEFAULT_ZIP_COUNTRY:"geo_location_blip_update_default_zip_country",GEO_LOCATION_BLIP_FINISH_VALIDATION:"geo_location_blip_finish_validation",TARGETING_TYPE_SWITCH:"targeting_type_switch",SAVED_LOCATION_CREATED:"saved_location_created",SAVED_LOCATION_DISPLAY_NAME_INPUT_DIALOG:"saved_location_display_name_input_dialog",SAVED_LOCATION_SHOW_SAVE_OPTION:"saved_location_show_save_option",SAVED_LOCATION_CREATE_ERROR:"saved_location_create_error"});f.exports=h}),null);
__d("AdsSelectedAccountCurrencyGetter",["AdsGetter"],(function a(b,c,d,e,f,g){"use strict";var h,i;h=babelHelpers.inherits(j,c("AdsGetter"));i=h&&h.prototype;j.getPath=function(){return"selected_account_currency"};function j(){h.apply(this,arguments)}f.exports=j}),null);
__d("SignalsHomeActionTypes",["keyMirrorRecursive"],(function a(b,c,d,e,f,g){"use strict";var h=c("keyMirrorRecursive")({INITIALIZE:"",INITIALIZE_PIXEL_TAB_SELECTION:"",SET_SELECTED_SECTION:"",SET_SELECTED_ADACCOUNT:"",NAME_EDIT:{START:"",CANCEL:"",UPDATE:"",FINISH:"",SUCCESS:"",FAILURE:""},ADACCOUNT_CUSTOM_CONVERSION_CREATE:{FINISH:""},BUSINESS_CUSTOM_CONVERSION_CREATE:{FINISH:""},BUSINESS_CUSTOM_CONVERSION_DELETE:{FINISH:""},CUSTOM_CONVERSION_NAME_EDIT:{FINISH:""},CUSTOM_CONVERSION_DESCRIPTION_EDIT:{FINISH:""},CUSTOM_CONVERSION_CONVERSION_VALUE_EDIT:{FINISH:""},CUSTOM_CONVERSION_DELETE:{FINISH:""},INSPECT_PIXEL:"",INSPECT_CUSTOM_CONVERSION:"",INSPECT_DATA_SET:"",INSPECT_APP:"",INSPECT_PARTNER:"",NAVIGATE_TO_DATA_SET_UPLOADER:"",BACK_TO_DATA_SOURCES:"",BACK_TO_PARTNER_INTEGRATIONS:"",BACK_TO_CUSTOM_CONVERSION_SCREEN:"",LOAD_AUDIENCE:{SUCCESS:"",FAILURE:""},LOAD_AUDIENCE_LIST:{SUCCESS:"",FAILURE:"",UPDATE:""},LOAD_CUSTOM_CONVERSION:{SUCCESS:"",FAILURE:""},LOAD_CUSTOM_CONVERSION_LIST:{SUCCESS:"",FAILURE:"",UPDATE:""},NOTICE:{ADD:"",REMOVE:"",REMOVE_ALL:""},PIXEL_CREATE:{SUCCESS:"",ERROR:""},SELECT_PIXEL:"",REQUEST_TOS_SCREEN:"",TOGGLE_INFERRED_EVENTS_USAGE:"",VIEW_ANALYTICS:"",QUERY_ANALYTICS_USAGE:"",MEGAPHONE:{CLOSE_START:"",CLOSED:"",VIEWED:"",SHOW:""},URL_CHANGE:""});f.exports=h}),null);
__d("BUIAdoptionSelector.react",["BIGAdoptionConfig","BUIAdoptionWrapper.react","React","SUIBusinessTheme","SUISelector.react","XUISelector.react","XUISingleSelector.react"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i,j=c("React").PropTypes;h=babelHelpers.inherits(k,c("React").Component);i=h&&h.prototype;k.prototype.getChildContext=function(){return{sui_selector_button_adoption:c("BIGAdoptionConfig").sui_selector_adoption}};k.prototype.render=function(){return c("React").createElement(c("BUIAdoptionWrapper.react"),{enabled:c("BIGAdoptionConfig").sui_selector_adoption,fallback:this.props.canSelectMultiple?c("React").createElement(c("XUISelector.react"),k.convertSUIPropsToXUIProps(this.props),this.props.children):c("React").createElement(c("XUISingleSelector.react"),k.convertSUIPropsToXUIProps(this.props),this.props.children)},c("React").createElement(c("SUISelector.react"),babelHelpers["extends"]({theme:c("SUIBusinessTheme")},this.props),this.props.children))};k.convertSUIPropsToXUIProps=function(l){__p&&__p();var m=c("SUISelector.react").defaultProps.menuVerticalAlignment;if(l.menuVerticalAlignment==="above")m="above";else if(l.menuHorizontalAlignment==="right")m="right";return babelHelpers["extends"]({},l,{customButton:l.button,className:l.className_DEPRECATED,layerBehaviors:Object.values(l.contextualLayerBehaviors),maxheight:l.maxHeight,maxwidth:typeof l.width==="number"?l.width:undefined,multiple:l.canSelectMultiple,position:m,defaultValue:l.value==null?l.value:undefined,value:l.value!=null?l.value:undefined,onChange:function n(o){if(l.canSelectMultiple)l.onChange(o.map(function(p){var q=p.value;return q}));else l.onChange(o.value)}})};function k(){h.apply(this,arguments)}k.defaultProps=c("SUISelector.react").defaultProps;k.childContextTypes={sui_selector_button_adoption:j.bool};f.exports=k}),null);
__d("BUIAdoptionSelectorOption.react",["BIGAdoptionConfig","BUIAdoptionWrapper.react","React","SUIBusinessTheme","SUISelectorOption.react","TooltipData","XUISelector.react"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i=c("XUISelector.react").Option,j=void 0;if(c("BIGAdoptionConfig").sui_selector_adoption){var k,l;j=(l=k=function(){__p&&__p();var o,p;o=babelHelpers.inherits(q,c("React").Component);p=o&&o.prototype;q.prototype.render=function(){"use strict";return c("React").createElement(c("BUIAdoptionWrapper.react"),{enabled:c("BIGAdoptionConfig").sui_selector_adoption,fallback:c("React").createElement("span",null)},c("React").createElement(c("SUISelectorOption.react"),babelHelpers["extends"]({theme:c("SUIBusinessTheme")},this.props),this.props.children))};function q(){"use strict";o.apply(this,arguments)}return q}(),k.defaultProps=c("SUISelectorOption.react").defaultProps,l)}else{var m,n;(function(){__p&&__p();function o(p){var q=p.canSelectMultiple,r=p.className_DEPRECATED,s=p.tooltip,t=babelHelpers.objectWithoutProperties(p,["canSelectMultiple","className_DEPRECATED","tooltip"]);return babelHelpers["extends"]({},t,{className:r,multiple:q},c("TooltipData").propsFor(s))}j=(n=m=function(){var p,q;p=babelHelpers.inherits(r,i);q=p&&p.prototype;function r(s){"use strict";q.constructor.call(this,o(s))}return r}(),m.defaultProps=c("SUISelectorOption.react").defaultProps,n)})()}f.exports=j}),null);
__d("AdsTargetingNumberSelector.react",["cx","BUIAdoptionSelector.react","BUIAdoptionSelectorOption.react","BUIAdoptionUtils","React"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j,k=c("React").PropTypes;i=babelHelpers.inherits(l,c("React").Component);j=i&&i.prototype;l.prototype.render=function(){var m=this.props,n=[];for(var o=m.minimum;o<=m.maximum;++o){var p=o;if(m.customMaxLabel&&o===m.maximum)p=m.customMaxLabel;n.push(c("React").createElement(c("BUIAdoptionSelectorOption.react"),{key:o,value:o},p))}return c("React").createElement("div",{className:"_5tpo"},c("React").createElement(c("BUIAdoptionSelector.react"),{maxHeight:200,value:m.selectedValue,width:42,onChange:c("BUIAdoptionUtils").convertSelectorXUIOnChangeToSUIOnChange(m.onDataUpdate)},n))};function l(){i.apply(this,arguments)}l.propTypes={customMaxLabel:k.string,maximum:k.number.isRequired,minimum:k.number.isRequired,selectedValue:k.number.isRequired,size:k.string,onDataUpdate:k.func.isRequired};f.exports=l}),null);
__d("ReadToggle.react",["cx","Event","Keys","React","emptyFunction","joinClasses"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j,k=c("React").PropTypes;i=babelHelpers.inherits(l,c("React").Component);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.$ReadToggle2=function(event){if(c("Event").getKeyCode(event)===c("Keys").RETURN)this.props.onClick()}.bind(this),n}l.prototype.render=function(){if(this.props.isRead)return c("React").createElement("div",{"aria-label":this.props.readLabel,className:this.$ReadToggle1(),"data-hover":"tooltip","data-tooltip-alignh":"center","data-tooltip-content":this.props.readLabel,onClick:this.props.onClick,onKeyDown:this.$ReadToggle2,role:"button",tabIndex:0});else return c("React").createElement("div",{"aria-label":this.props.unreadLabel,className:this.$ReadToggle1(),"data-hover":"tooltip","data-tooltip-alignh":"center","data-tooltip-content":this.props.unreadLabel,onClick:this.props.onClick,onKeyDown:this.$ReadToggle2,role:"button",tabIndex:"0"})};l.prototype.$ReadToggle1=function(){return c("joinClasses")(this.props.className,(!this.props.isRead?"_5c9q":"")+(this.props.isRead?" _5c9_":""))};l.propTypes={isRead:k.bool.isRequired,onClick:k.func.isRequired,readLabel:k.node.isRequired,unreadLabel:k.node.isRequired};l.defaultProps={onClick:c("emptyFunction")};f.exports=l}),null);
__d("StarsInput.react",["cx","fbt","invariant","React","TooltipLink.react","joinClasses"],(function a(b,c,d,e,f,g,h,i,j){"use strict";__p&&__p();var k,l,m=Object.freeze({CUMULATIVE:"CUMULATIVE",SINGLE:"SINGLE"}),n=Object.freeze({STAR:"STAR",BOX:"BOX"});k=babelHelpers.inherits(o,c("React").Component);l=k&&k.prototype;function o(p){l.constructor.call(this,p);if(p.initialStars)Number.isInteger(p.initialStars)||j(0);this.state={starRating:p.initialStars!=undefined?p.initialStars:p.count,starsShown:p.initialStars!=undefined?p.initialStars:p.count,canUpdate:true}}o.prototype.onMouseEnter=function(p,event){if(this.state.canUpdate){this.setState({starsShown:p});this.props.onMouseEnter&&this.props.onMouseEnter(p)}};o.prototype.onMouseLeave=function(p,event){if(this.state.canUpdate){var q=this.state.starRating;this.setState({starsShown:q});this.props.onMouseLeave&&this.props.onMouseLeave(p)}};o.prototype.onClick=function(p,event){if(this.state.canUpdate){this.setState({starRating:p,starsShown:p,canUpdate:this.props.allowMultipleSubmissions});this.props.onClick(p)}};o.prototype.$StarsInput1=function(p,q,r){if(this.props.displayMode==m.SINGLE)return r?p+1==q:true;else return r?p<q:p>=q};o.prototype.$StarsInput2=function(p,q){var r="mls _22mm"+(!this.state.canUpdate?" _1g87":"");if(this.props.shape==n.BOX){var s="_5fx1"+(this.$StarsInput1(p,q,false)?" _5fx2":"")+(this.$StarsInput1(p,q,true)?" _5fx3":"");return c("joinClasses")(r,s)}else{var t=(this.props.large?"_1vr2":"")+(this.$StarsInput1(p,q,false)?" _22mn":"")+(this.$StarsInput1(p,q,true)?" _22mo":"");return c("joinClasses")(r,t)}};o.prototype.getStars=function(){if(!this.props.starLabels)return[];var p=this.props.starLabels.length,q=[],r=this.state.starsShown?this.state.starsShown:0;for(var s=0;s<p;s++){var t=s+1;q.push(c("React").createElement(c("TooltipLink.react"),{className:this.$StarsInput2(s,r),key:s,tooltip:this.props.starLabels&&this.props.starLabels[s],onMouseEnter:this.onMouseEnter.bind(this,t),onMouseLeave:this.onMouseLeave.bind(this,t),onClick:this.onClick.bind(this,t),position:"above",alignH:"center"}))}return q};o.prototype.render=function(){return c("React").createElement("div",{className:this.props.className},this.getStars())};o.defaultProps={allowMultipleSubmissions:false,count:0,large:false,starLabels:[i._("Poor"),i._("Fair"),i._("Good"),i._("Very Good"),i._("Excellent")],displayMode:m.CUMULATIVE,shape:n.STAR,className:undefined,initialStars:undefined,onMouseEnter:undefined,onMouseLeave:undefined};f.exports=o}),null);
__d("FBCheckbox.react",["cx","Keys","React","joinClasses"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j,k=c("React").PropTypes;i=babelHelpers.inherits(l,c("React").Component);j=i&&i.prototype;function l(){__p&&__p();var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.$FBCheckbox1=function(){if(this.props.disabled)return;if(this.props.onToggle)this.props.onToggle(!this.props.checked)}.bind(this),this.$FBCheckbox2=function(event){switch(event.keyCode){case c("Keys").SPACE:event.preventDefault();this.$FBCheckbox1();break;default:break}}.bind(this),n}l.prototype.render=function(){var m="_kx6"+(this.props.checked?" _kx7":"")+(this.props.disabled?" _kx8":"")+(this.props.hovered?" _kx9":"")+(!this.props.checked?" _kxa":"");return c("React").createElement("div",{"aria-checked":this.props.checked?"true":"false","aria-disabled":this.props.disabled?"true":"false",className:c("joinClasses")(m,this.props.className),onClick:this.$FBCheckbox1,onKeyDown:this.$FBCheckbox2,role:"checkbox",tabIndex:"0"})};l.propTypes={checked:k.bool.isRequired,className:k.string,disabled:k.bool,hovered:k.bool,onToggle:k.func};f.exports=l}),null);
__d("FBConfirmDialog.react",["fbt","React","XUIDialog.react","XUIDialogBody.react","XUIDialogFooter.react","XUIDialogButton.react","XUIDialogTitle.react"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j,k=c("React").PropTypes;i=babelHelpers.inherits(l,c("React").Component);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.$FBConfirmDialog1=function(){if(!this.props.shown)return null;return c("React").createElement("div",null,this.props.content)}.bind(this),this.$FBConfirmDialog2=function(){return c("React").createElement(c("XUIDialogButton.react"),{onClick:this.props.onCancel,label:this.props.cancelButtonText?this.props.cancelButtonText:h._("Cancel")})}.bind(this),this.$FBConfirmDialog3=function(){return c("React").createElement(c("XUIDialogButton.react"),{action:"confirm",use:"confirm",onClick:this.props.onConfirm,label:this.props.confirmButtonText?this.props.confirmButtonText:h._("Confirm"),disabled:this.props.disableConfirmButton})}.bind(this),n}l.prototype.render=function(){return c("React").createElement(c("XUIDialog.react"),babelHelpers["extends"]({},this.props,{modal:true}),c("React").createElement(c("XUIDialogTitle.react"),null,this.props.title),c("React").createElement(c("XUIDialogBody.react"),null,this.$FBConfirmDialog1()),c("React").createElement(c("XUIDialogFooter.react"),null,this.$FBConfirmDialog2(),this.$FBConfirmDialog3()))};l.propTypes=babelHelpers["extends"]({},c("XUIDialog.react").propTypes,{title:k.node.isRequired,content:k.node.isRequired,onCancel:k.func.isRequired,onConfirm:k.func.isRequired,cancelButtonText:k.node,confirmButtonText:k.node,disableConfirmButton:k.bool});l.defaultProps={width:400,disableConfirmButton:false};f.exports=l}),null);
__d("Date.react",["DateTime","React","formatDate"],(function a(b,c,d,e,f,g){__p&&__p();var h,i,j=c("React").PropTypes;h=babelHelpers.inherits(k,c("React").Component);i=h&&h.prototype;k.prototype.render=function(){"use strict";if(this.props.date instanceof c("DateTime"))return c("React").createElement("span",{className:this.props.className},this.props.date.format(this.props.format,this.props.options));return c("React").createElement("span",{className:this.props.className},c("formatDate")(this.props.date,this.props.format,this.props.options))};function k(){"use strict";h.apply(this,arguments)}k.defaultProps={options:{}};k.propTypes={className:j.string,date:j.oneOfType([j.number,j.instanceOf(Date),j.instanceOf(c("DateTime"))]).isRequired,format:j.oneOfType([j.object,j.string]).isRequired,options:j.object};f.exports=k}),null);
__d("configureTimezones",["RulesTimezoneTransitionProvider","Timezone","TimezoneNamesData","TimezoneRulesFrom2009"],(function a(b,c,d,e,f,g){"use strict";function h(){c("Timezone").registerNamesModule(c("TimezoneNamesData"));c("Timezone").registerRulesModule(c("RulesTimezoneTransitionProvider"),c("TimezoneRulesFrom2009"))}f.exports=h}),null);
__d("resolveWindow",[],(function a(b,c,d,e,f,g){__p&&__p();function h(i){__p&&__p();var j=window,k=i.split(".");try{for(var l=0;l<k.length;l++){var m=k[l],n=/^frames\[[\'\"]?([a-zA-Z0-9\-_]+)[\'\"]?\]$/.exec(m);if(n)j=j.frames[n[1]];else if(m==="opener"||m==="parent"||m==="top")j=j[m];else return null}}catch(o){return null}return j}f.exports=h}),null);
__d("XD",["Arbiter","DOM","DOMDimensions","Log","PHPQuerySerializer","URI","Queue","isFacebookURI","isInIframe","resolveWindow"],(function a(b,c,d,e,f,g){__p&&__p();var h="fb_xdm_frame_"+location.protocol.replace(":",""),i={_callbacks:[],_opts:{autoResize:false,allowShrink:true,channelUrl:null,hideOverflow:false,resizeTimeout:1e3,resizeWidth:false,expectResizeAck:false,resizeAckTimeout:6e3},_lastResizeAckId:0,_resizeCount:0,_resizeTimestamp:0,_shrinker:null,init:function k(l){this._opts=babelHelpers["extends"]({},this._opts,l);if(this._opts.autoResize)this._startResizeMonitor();c("Arbiter").subscribe("Connect.Unsafe.resize.ack",function(m,n){if(!n.id)n.id=this._resizeCount;if(n.id>this._lastResizeAckId)this._lastResizeAckId=n.id}.bind(this))},getQueue:function k(){if(!this._queue)this._queue=new(c("Queue"))();return this._queue},setChannelUrl:function k(l){this.getQueue().start(function(m){return this.send(m,l)}.bind(this))},send:function k(l,m){__p&&__p();m=m||this._opts.channelUrl;if(!m){this.getQueue().enqueue(l);return}var n={},o=new(c("URI"))(m);Object.assign(n,l,c("PHPQuerySerializer").deserialize(o.getFragment()));var p=new(c("URI"))(n.origin).getOrigin(),q=c("resolveWindow")(n.relation.replace(/^parent\./,"")),r=50,s=function s(){var t=q.frames[h];try{t.proxyMessage(c("PHPQuerySerializer").serialize(n),p)}catch(u){if(--r)setTimeout(s,100);else c("Log").warn('No such frame "'+h+'" to proxyMessage to')}};s()},_computeSize:function k(){__p&&__p();var l=c("DOMDimensions").getDocumentDimensions(),m=0;if(this._opts.resizeWidth){var n=document.body;if(n.clientWidth<n.scrollWidth)m=l.width;else{var o=n.childNodes;for(var p=0;p<o.length;p++){var q=o[p],r=q.offsetLeft+q.offsetWidth;if(r>m)m=r}}m=Math.max(m,i.forced_min_width)}l.width=m;if(this._opts.allowShrink){if(!this._shrinker)this._shrinker=c("DOM").create("div");c("DOM").appendContent(document.body,this._shrinker);l.height=Math.max(this._shrinker.offsetTop,0)}return l},_startResizeMonitor:function k(){__p&&__p();var l,m=document.documentElement;if(this._opts.hideOverflow){m.style.overflow="hidden";document.body.style.overflow="hidden"}var n=function(){__p&&__p();var o=this._computeSize(),p=Date.now(),q=this._lastResizeAckId<this._resizeCount&&p-this._resizeTimestamp>this._opts.resizeAckTimeout;if(!l||this._opts.expectResizeAck&&q||this._opts.allowShrink&&l.width!=o.width||!this._opts.allowShrink&&l.width<o.width||this._opts.allowShrink&&l.height!=o.height||!this._opts.allowShrink&&l.height<o.height){l=o;this._resizeCount++;this._resizeTimestamp=p;var r={type:"resize",height:o.height,ackData:{id:this._resizeCount}};if(o.width&&o.width!=0)r.width=o.width;try{if(c("isFacebookURI")(new(c("URI"))(document.referrer))&&c("isInIframe")()&&window.name&&window.parent.location&&window.parent.location.toString&&c("isFacebookURI")(new(c("URI"))(window.parent.location))){var s=window.parent.document.getElementsByTagName("iframe");for(var t=0;t<s.length;t=t+1)if(s[t].name==window.name){if(this._opts.resizeWidth)s[t].style.width=r.width+"px";s[t].style.height=r.height+"px"}}this.send(r)}catch(u){this.send(r)}}}.bind(this);n();setInterval(n,this._opts.resizeTimeout)}},j=babelHelpers["extends"]({},i);f.exports.UnverifiedXD=j;f.exports.XD=i;b.UnverifiedXD=j;b.XD=i}),null);
__d("UnverifiedXD",["XD"],(function a(b,c,d,e,f,g){var h=c("XD").UnverifiedXD;f.exports=h}),null);
__d("AdsLeadGenFormConditionalAnswerSet",[],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(j,k){this.$AdsLeadGenFormConditionalAnswerSet1=j;this.$AdsLeadGenFormConditionalAnswerSet2=k;this.$AdsLeadGenFormConditionalAnswerSet3=i(this.$AdsLeadGenFormConditionalAnswerSet2)}h.prototype.getID=function(){return this.$AdsLeadGenFormConditionalAnswerSet1};h.prototype.getQuestionCount=function(){return this.$AdsLeadGenFormConditionalAnswerSet3};h.prototype.getNextAnswerValues=function(j){return this.$AdsLeadGenFormConditionalAnswerSet4(j).map(function(k){return k.value})};h.prototype.$AdsLeadGenFormConditionalAnswerSet4=function(j){var k=this.$AdsLeadGenFormConditionalAnswerSet2;j.forEach(function(l){var m=k.findIndex(function(n){return n.value===l});k=m===-1?[]:k[m].next_question_choices||[]});return k||[]};var i=function i(j){var k=j,l=0;while(k!=null&&k.length){l++;k=k[0].next_question_choices}return l};f.exports=h}),null);
__d("AdsLeadGenWebdriverIDs",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({ADS_LEADGEN_CREATE_NEW_FORM_BUTTON:"ADS_LEADGEN_CREATE_NEW_FORM_BUTTON",ADS_LEADGEN_FORM_EDITOR:"ADS_LEADGEN_FORM_EDITOR",ADS_LEADGEN_FORM_EDITOR_CONTEXT_CARD_SWITCH:"ADS_LEADGEN_FORM_EDITOR_CONTEXT_CARD_SWITCH",ADS_LEADGEN_FORM_EDITOR_CONTEXT_CARD_HEADER:"ADS_LEADGEN_FORM_EDITOR_CONTEXT_CARD_HEADER",ADS_LEADGEN_FORM_EDITOR_PRIVACY_CARD_HEADER:"ADS_LEADGEN_FORM_EDITOR_PRIVACY_CARD_HEADER",ADS_LEADGEN_FORM_EDITOR_PRIVACY_CARD_URL:"ADS_LEADGEN_FORM_EDITOR_PRIVACY_CARD_URL",ADS_LEADGEN_FORM_EDITOR_PUBLISH_FORM_BUTTON:"ADS_LEADGEN_FORM_EDITOR_PUBLISH_FORM_BUTTON",ADS_LEADGEN_FORM_EDITOR_THANK_YOU_PAGE_HEADER:"ADS_LEADGEN_FORM_EDITOR_THANK_YOU_PAGE_HEADER",ADS_LEADGEN_FORM_EDITOR_THANK_YOU_PAGE_TITLE_TEXT_INPUT:"ADS_LEADGEN_FORM_EDITOR_THANK_YOU_PAGE_TITLE_TEXT_INPUT",ADS_LEADGEN_FORM_EDITOR_THANK_YOU_PAGE_URL_TEXT_INPUT:"ADS_LEADGEN_FORM_EDITOR_THANK_YOU_PAGE_URL_TEXT_INPUT",ADS_LEADGEN_FORM_EDITOR_FORM_TYPE_HEADER:"ADS_LEADGEN_FORM_EDITOR_FORM_TYPE_HEADER",ADS_LEADGEN_FORM_EDITOR_FORM_TYPE_HIGH_VOLUME_SWITCH:"ADS_LEADGEN_FORM_EDITOR_FORM_TYPE_HIGH_VOLUME_SWITCH",ADS_LEADGEN_INLINE_FORM_SELECTOR_TABLE:"ADS_LEADGEN_INLINE_FORM_SELECTOR_TABLE",ADS_LEADGEN_INLINE_CRM_ON_PAGE_TYPEAHEAD:"ADS_LEADGEN_INLINE_CRM_ON_PAGE_TYPEAHEAD",ADS_LEADGEN_LEAD_DOWNLOAD_DIALOG_SELECTOR:"ADS_LEADGEN_LEAD_DOWNLOAD_DIALOG_SELECTOR",ADS_LEADGEN_PAGE_PUBLISHING_TOOLS_DOWNLOAD_BUTTON:"ADS_LEADGEN_PAGE_PUBLISHING_TOOLS_DOWNLOAD_BUTTON",ADS_LEADGEN_DESKTOP_CONTEXT_CARD_CTA:"ADS_LEADGEN_DESKTOP_CONTEXT_CARD_CTA",ADS_LEADGEN_DESKTOP_FORM_SUBMISSION_BUTTON:"ADS_LEADGEN_DESKTOP_FORM_SUBMISSION_BUTTON",ADS_LEADGEN_DESKTOP_DISCLAIMER_CTA:"ADS_LEADGEN_DESKTOP_DISCLAIMER_CTA",ADS_LEADGEN_DESKTOP_OFFSITE_CLICK:"ADS_LEADGEN_DESKTOP_OFFSITE_CLICK",ADS_LEADGEN_FORMS_LIBRARY_HEADER:"ADS_LEADGEN_FORMS_LIBRARY_HEADER"})}),null);
__d("XAdsManagerCampaignGroupPageController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/ads/manage/summary/campaign/",{business_id:{type:"Int"},campaign_id:{type:"Int",required:true},level:{type:"Enum",defaultValue:"ad_set",enumType:1},time_start:{type:"String"},time_end:{type:"String"},offset:{type:"Int",defaultValue:0},status:{type:"Enum",enumType:0},sort_key:{type:"Int"},sort_dir:{type:"String"},show_adgroup_id:{type:"Int"},can_use_campaign_spend_cap:{type:"Bool",defaultValue:false},source:{type:"Enum",enumType:1}})}),null);