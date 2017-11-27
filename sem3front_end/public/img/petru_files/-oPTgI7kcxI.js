if (self.CavalryLogger) { CavalryLogger.start_js(["GCn9f"]); }

__d("EmbeddedVideoWatchAndScrollControl.react",["ix","cx","fbt","AbstractButton.react","CurrentUser","Image.react","Locale","React","ReactDOM","TooltipData","VideoWebDriverIDs","VideoPlayerExperiments","XUIAmbientNUX.react","fbglyph","shallowCompare"],(function a(b,c,d,e,f,g,h,i,j){"use strict";__p&&__p();var k,l,m=c("React").PropTypes;k=babelHelpers.inherits(n,c("React").Component);l=k&&k.prototype;function n(){var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=l.constructor).call.apply(o,[this].concat(r)),this.$EmbeddedVideoWatchAndScrollControl1=function(){if(typeof this.props.onWNSNUXClose==="function")this.props.onWNSNUXClose()}.bind(this),p}n.prototype.shouldComponentUpdate=function(o,p){return c("shallowCompare")(this,o,p)};n.prototype.onMouseOut=function(o){c("ReactDOM").findDOMNode(this.refs.button).blur()};n.prototype.onButtonClick=function(){if(this.props.showWNSNUX)this.$EmbeddedVideoWatchAndScrollControl1();this.props.onEnterWatchAndScroll&&this.props.onEnterWatchAndScroll()};n.prototype.getIconSrc=function(){__p&&__p();var o=c("VideoPlayerExperiments").rhcWNSEnabled,p=c("Locale").isRTL();if(o&&!p||!o&&p){var q=c("VideoPlayerExperiments").pipEntryIcon;if(q)return q;if(this.props.isSlidingWNSEligible)return h("282887");return h("282515")}if(this.props.isSlidingWNSEligible)return h("134816");return h("115593")};n.prototype.render=function(){var o=c("React").createElement(c("Image.react"),{className:"_5i0o",src:this.getIconSrc()}),p=c("CurrentUser").isWorkUser()?j._("Continue watching while you use Workplace"):j._("Continue watching while you use Facebook"),q=c("React").createElement(c("AbstractButton.react"),babelHelpers["extends"]({},c("TooltipData").propsFor(p,"above"),{className:"_3u33","data-testid":c("VideoWebDriverIDs").WNS_CONTROL,disabled:this.props.disabled,image:o,label:j._("Enter Watch and Scroll"),labelIsHidden:true,onClick:this.onButtonClick.bind(this),onMouseOut:this.onMouseOut.bind(this),ref:"button",tabIndex:this.props.tabIndex,type:"button"})),r=j._("Video not playing?"),s=j._("Click to load the video while you continue using Facebook"),t=c("React").createElement(c("XUIAmbientNUX.react"),{alignment:"right",contextRef:function(){return this.refs.button}.bind(this),customwidth:250,onCloseButtonClick:this.$EmbeddedVideoWatchAndScrollControl1,shown:this.props.showWNSNUX,position:"above",width:"custom"},c("React").createElement("div",{className:"_302j"},r),s);return c("React").createElement("span",null,q,t)};n.propTypes={onEnterWatchAndScroll:m.func,tabIndex:m.string};f.exports=n}),null);