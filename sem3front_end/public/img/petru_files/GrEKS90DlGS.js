if (self.CavalryLogger) { CavalryLogger.start_js(["6bDdu"]); }

__d("LegacyMentionsInput.react",["cx","FocusListener","Bootloader","TypeaheadMetricsConfig","Event","Keys","React","ReactDOM"],(function a(b,c,d,e,f,g,h){__p&&__p();var i,j;c("FocusListener");var k=c("React").PropTypes;i=babelHelpers.inherits(l,c("React").Component);j=i&&i.prototype;function l(){__p&&__p();var m,n;"use strict";for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.hasEnteredText=function(){return!!(this.$ReactLegacyMentionsInput2&&this.$ReactLegacyMentionsInput2.getValue().trim())}.bind(this),this.submitComment=function(event){__p&&__p();var r;if(event)r=event.target.value&&event.target.value.trim();else{var s=c("ReactDOM").findDOMNode(this.refs.textarea);if(s.value&&s.value!==s.placeholder)r=s.value}r=r||"";var t={visibleValue:r,encodedValue:r};if(this.$ReactLegacyMentionsInput2)t.encodedValue=this.$ReactLegacyMentionsInput2.getRawValue().trim();var u=this.props.onEnterSubmit(t,event);if(u&&this.$ReactLegacyMentionsInput2){this.$ReactLegacyMentionsInput2.reset();event&&event.preventDefault()}}.bind(this),this.$ReactLegacyMentionsInput3=function(event){var r=event.nativeEvent,s=c("Event").getKeyCode(r)==c("Keys").RETURN&&!c("Event").$E(r).getModifiers().any,t=this.$ReactLegacyMentionsInput2&&this.$ReactLegacyMentionsInput2.getTypeahead().getView().getSelection();if(this.props.onEnterSubmit&&s&&!t)this.submitComment(event)}.bind(this),this.$ReactLegacyMentionsInput4=function(){this.props.onFocus&&this.props.onFocus();this.$ReactLegacyMentionsInput1(c("ReactDOM").findDOMNode(this.refs.root))}.bind(this),this.$ReactLegacyMentionsInput5=function(){this.props.onBlur&&this.props.onBlur()}.bind(this),this.$ReactLegacyMentionsInput1=function(r){__p&&__p();if(this.props.disableInitTextarea||this.$ReactLegacyMentionsInput2||this.$ReactLegacyMentionsInput6)return;this.$ReactLegacyMentionsInput6=true;c("Bootloader").loadModules(["CompactTypeaheadRenderer","ContextualTypeaheadView","InputSelection","MentionsInput","TextAreaControl","Typeahead","TypeaheadAreaCore","TypeaheadBestName","TypeaheadHoistFriends","TypeaheadMetrics","TypeaheadMetricsX","TypingDetector","UFIComments"],function(s,t,u,v,w,x,y,z,A,B,C,D,E){__p&&__p();var F=c("ReactDOM").findDOMNode(this.refs.textarea);new w(F);if(this.props.onTypingStateChange){var G=new D(F);G.init();G.subscribe("change",this.props.onTypingStateChange)}var H={autoSelect:true,renderer:s,causalElement:F,autoflip:this.props.autoflip};if(this.props.viewOptionsTypeObjects)H.typeObjects=this.props.viewOptionsTypeObjects;if(this.props.viewOptionsTypeObjectsOrder)H.typeObjectsOrder=this.props.viewOptionsTypeObjectsOrder;var I=new x(this.props.datasource,{ctor:t,options:H},{ctor:y},c("ReactDOM").findDOMNode(this.refs.typeahead)),J=[z,A];if(c("TypeaheadMetricsConfig").gkResults){var K=new C({extraData:{event_name:"mention_metric_x"}});K.init(I)}var L=new B({extraData:{event_name:"mentions",from_location:"comments"}});x.initNow(I,J,L);this.$ReactLegacyMentionsInput2=new v(r,I,F,{hashtags:this.props.hashtags});this.$ReactLegacyMentionsInput2.init({},this.props.initialData);if(this.props.initialData)u.set(F,F.value.length);if(this.props.onPaste)c("Event").listen(F,"paste",this.props.onPaste);if(this.props.onContentChange)this.$ReactLegacyMentionsInput7=this.$ReactLegacyMentionsInput2.subscribe("valueUpdate",function(M,N){var O=N.value;this.props.onContentChange(O)}.bind(this));this.$ReactLegacyMentionsInput6=false}.bind(this),"LegacyMentionsInput.react")}.bind(this),this.focus=function(){try{c("ReactDOM").findDOMNode(this.refs.textarea).focus()}catch(r){}}.bind(this),n}l.prototype.componentDidMount=function(){"use strict";this.props.initialData&&this.$ReactLegacyMentionsInput1(c("ReactDOM").findDOMNode(this))};l.prototype.getText=function(){"use strict";return this.$ReactLegacyMentionsInput2&&this.$ReactLegacyMentionsInput2.getRawValue().trim()};l.prototype.componentWillUnmount=function(){"use strict";if(this.$ReactLegacyMentionsInput2&&this.$ReactLegacyMentionsInput7)this.$ReactLegacyMentionsInput2.unsubscribe(this.$ReactLegacyMentionsInput7)};l.prototype.render=function(){"use strict";var m="textInput mentionsTextarea uiTextareaAutogrow uiTextareaNoResize UFIAddCommentInput _2xww";return c("React").createElement("div",{ref:"root",className:"uiMentionsInput textBoxContainer ReactLegacyMentionsInput _2xwx"},c("React").createElement("div",{className:"highlighter"},c("React").createElement("div",null,c("React").createElement("span",{className:"highlighterContent hidden_elem"}))),c("React").createElement("div",{ref:"typeahead",className:"uiTypeahead mentionsTypeahead"},c("React").createElement("div",{className:"wrap"},c("React").createElement("input",{type:"hidden",autoComplete:"off",className:"hiddenInput"}),c("React").createElement("div",{className:"innerWrap"},c("React").createElement("textarea",{ref:"textarea",name:"add_comment_text",className:m,title:this.props.placeholder,placeholder:this.props.placeholder,onFocus:this.$ReactLegacyMentionsInput4,onBlur:this.$ReactLegacyMentionsInput5,onKeyDown:this.$ReactLegacyMentionsInput3})))),c("React").createElement("input",{type:"hidden",autoComplete:"off",className:"mentionsHidden",defaultValue:""}))};l.propTypes={initialData:k.object,disableInitTextarea:k.bool,placeholder:k.string,datasource:k.object,ref:k.string,viewOptionsTypeObjects:k.object,viewOptionsTypeObjectsOrder:k.array,hashtags:k.bool,autoflip:k.bool,onEnterSubmit:k.func,onFocus:k.func,onBlur:k.func,onContentChange:k.func,onTypingStateChange:k.func,onPaste:k.func};f.exports=l}),null);
__d("PagesOpenNowDisplayDecision",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({SHOW_AVAILABLE:0,SHOW_UNAVAILABLE:1,SHOW_UNDETERMINED:2,NO_SHOW:3,SHOW_PERMANENTLY_CLOSED:4})}),null);
__d("AbstractRating.react",["cx","fbt","invariant","React"],(function a(b,c,d,e,f,g,h,i,j){__p&&__p();var k,l;k=babelHelpers.inherits(m,c("React").Component);l=k&&k.prototype;m.prototype.render=function(){"use strict";this.props.rating>=0||j(0);this.props.maxRating>0||j(0);this.props.maxRating===parseInt(this.props.maxRating,10)||j(0);this.props.rating<=this.props.maxRating||j(0);var n=[];for(var o=1;o<=this.props.maxRating;o++)n.push(this.$AbstractRating1(o));return c("React").createElement("div",{"aria-label":this.$AbstractRating2(),className:"_2dh6",onMouseOut:this.props.onMouseOut},n)};m.prototype.$AbstractRating2=function(){"use strict";return i._("{rating} out of {max rating} rating",[i.param("rating",this.props.rating),i.param("max rating",this.props.maxRating)])};m.prototype.$AbstractRating1=function(n){"use strict";var o=Math.min(Math.max(0,this.props.rating-n+1),1),p=c("React").createElement("div",null,this.props.emptyItem,c("React").createElement("div",{className:"_1v_j",style:{width:o*100+"%"}},this.props.filledItem));return c("React").cloneElement(p,{className:"_1v_k",key:n,onClick:function(){return this.props.onClick&&this.props.onClick(n)}.bind(this),onMouseOver:function(){return this.props.onMouseOver&&this.props.onMouseOver(n)}.bind(this)})};function m(){"use strict";k.apply(this,arguments)}f.exports=m}),null);
__d("StarRatingEmptyStar.react",["cx","invariant","ix","Image.react","React","fbglyph"],(function a(b,c,d,e,f,g,h,i,j){__p&&__p();var k=function k(l){__p&&__p();var m=null,n=l.color?l.color:"fig-light-20";typeof l.size==="string"||i(0);switch(n){case"fig-light-20":switch(l.size){case"12":m=j("126811");break;case"16":m=j("126812");break;case"20":m=j("126813");break;case"24":m=j("126814");break}break;case"contextual-recommendations-orange":switch(l.size){case"24":m=j("94640");break}break}m!==null||i(0);return c("React").createElement(c("Image.react"),babelHelpers["extends"]({},l,{className:"_55e6",src:m}))};f.exports=k}),null);
__d("StarRatingFilledStar.react",["ix","cx","invariant","Image.react","React","fbglyph"],(function a(b,c,d,e,f,g,h,i,j){__p&&__p();var k=function k(l){__p&&__p();var m=null,n=l.color?l.color:"accent-blue";typeof l.size==="string"||j(0);switch(n){case"accent-blue":switch(l.size){case"12":m=h("139627");break;case"16":m=h("139628");break;case"20":m=h("139629");break;case"24":m=h("139630");break}break;case"fig-blue":switch(l.size){case"12":m=h("117199");break;case"16":m=h("117200");break;case"20":m=h("117201");break;case"24":m=h("117202");break}break;case"fig-white":switch(l.size){case"24":m=h("26062");break}break;case"big-yellow":switch(l.size){case"24":m=h("133222");break}break}m!==null||j(0);return c("React").createElement(c("Image.react"),babelHelpers["extends"]({},l,{className:"_55e6",src:m}))};f.exports=k}),null);
__d("StarRating.react",["cx","fbt","AbstractRating.react","React","StarRatingEmptyStar.react","StarRatingFilledStar.react","intlNumUtils"],(function a(b,c,d,e,f,g,h,i){__p&&__p();var j,k;j=babelHelpers.inherits(l,c("React").Component);k=j&&j.prototype;l.prototype.render=function(){"use strict";return c("React").createElement("div",{className:"_8jy"},this.$StarRating1(),c("React").createElement(c("AbstractRating.react"),{emptyItem:c("React").createElement(c("StarRatingEmptyStar.react"),{size:this.props.size,color:this.props.emptyColor}),filledItem:c("React").createElement(c("StarRatingFilledStar.react"),{size:this.props.size,color:this.props.fillColor}),rating:this.props.rating,maxRating:this.props.maxRating}))};l.prototype.$StarRating1=function(){"use strict";if(!this.props.showLabel)return null;return c("React").createElement("span",{className:"_4c4u _405z"+(this.props.size==="12"?" _h9x":"")+(this.props.size==="16"?" _4c4w":"")+(this.props.size==="20"?" _4c4x":"")+(this.props.size==="24"?" _4c4y":"")},i._({"*":"{rating}"},[i.param("rating",c("intlNumUtils").formatNumber(this.props.rating,1),[0,this.props.rating])]))};function l(){"use strict";j.apply(this,arguments)}l.defaultProps={maxRating:5,showLabel:true,size:"20",emptyColor:"fig-light-20",fillColor:"accent-blue"};f.exports=l}),null);
__d("XPagesProfileReviewsController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/{page_token}/reviews/",{page_token:{type:"String",required:true},business_id:{type:"Int"},selected_snippet:{type:"String"},__nodl:{type:"Exists",defaultValue:false},qr:{type:"String"},ref:{type:"String"},mt_nav:{type:"Bool",defaultValue:false},_sref_:{type:"Int"},_vref_:{type:"Int"}})}),null);
__d("PagesMetabox.react",["cx","fbt","Link.react","PagesOpenNowDisplayDecision","React","StarRating.react","XPagesProfileReviewsController"],(function a(b,c,d,e,f,g,h,i){__p&&__p();var j,k;j=babelHelpers.inherits(l,c("React").Component);k=j&&j.prototype;function l(){var m,n;"use strict";for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=k.constructor).call.apply(m,[this].concat(p)),this.state={nuxShown:false},n}l.prototype.$PagesMetabox1=function(){"use strict";var m=this.props,n=m.pageURIToken,o=m.rating;if(o===0)return null;var p=c("XPagesProfileReviewsController").getURIBuilder().setString("page_token",n).getURI();return c("React").createElement("span",{className:"_1b__ _3koq",key:"rating"},c("React").createElement(c("Link.react"),{href:p},c("React").createElement(c("StarRating.react"),{fillColor:"fig-blue",rating:o,size:"16"})))};l.prototype.$PagesMetabox2=function(){"use strict";var m=this.props,n=m.openStatus,o=m.openStatusLabel;o=n===c("PagesOpenNowDisplayDecision").SHOW_UNAVAILABLE?i._("Closed now"):o;if(o===null)return null;return c("React").createElement("span",{className:"_1c00"+(n===c("PagesOpenNowDisplayDecision").SHOW_AVAILABLE?" _14-3":"")+(n===c("PagesOpenNowDisplayDecision").SHOW_UNDETERMINED?" _14-4":"")+(n===c("PagesOpenNowDisplayDecision").NO_SHOW||n===c("PagesOpenNowDisplayDecision").SHOW_UNAVAILABLE||n===c("PagesOpenNowDisplayDecision").SHOW_PERMANENTLY_CLOSED?" _14-5":""),key:"open-status"},o)};l.prototype.$PagesMetabox3=function(){"use strict";if(this.props.openStatusLabel===null||!this.props.isHoliday)return null;return c("React").createElement("div",{className:"_2q9t"},i._("Today is a holiday. Open hours may be different."))};l.prototype.render=function(){"use strict";__p&&__p();var m=this.props,n=m.categoryLabel,o=m.locationLabel,p=m.prepositionLabel,q=this.$PagesMetabox2(),r=this.$PagesMetabox1(),s=null,t=[r,q].filter(function(w){return w});if(t.length==0)t=null;else{for(var u=t.length-1;u>=1;u--)t.splice(u,0," \xb7 ");t=c("React").createElement("div",{className:"_v6p"},t);s=this.$PagesMetabox3()}var v=null;if(o!==null)v=i._("{prepositionLabel}{space}{locationLabel}",[i.param("prepositionLabel",p),i.param("space"," "),i.param("locationLabel",o)]);return c("React").createElement("div",{className:"_1c02"},c("React").createElement("div",{className:"_1c03"},n," ",v),t,s)};f.exports=l}),null);