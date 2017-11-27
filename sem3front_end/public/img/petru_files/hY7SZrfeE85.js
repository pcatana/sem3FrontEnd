if (self.CavalryLogger) { CavalryLogger.start_js(["cDpF\/"]); }

__d("PrivacyEdDialog.react",["DOMContainer.react","LayerHideOnBlur","React","XUIContextualDialog.react","XUIContextualDialogBody.react"],(function a(b,c,d,e,f,g){__p&&__p();var h,i,j=c("React").PropTypes;h=babelHelpers.inherits(k,c("React").Component);i=h&&h.prototype;k.prototype.render=function(){"use strict";return c("React").createElement(c("XUIContextualDialog.react"),{context:this.props.context,shown:true,position:"below",alignment:"center",width:300,behaviors:{LayerHideOnBlur:c("LayerHideOnBlur")}},c("React").createElement(c("XUIContextualDialogBody.react"),null,c("React").createElement(c("DOMContainer.react"),null,this.props.dialogContent)))};function k(){"use strict";h.apply(this,arguments)}k.propTypes={context:j.object,dialogContent:j.object};f.exports=k}),null);
__d("MetaComposerEdDialog",["Arbiter","AsyncRequest","DOM","ReactRenderer","PrivacyEdDialog.react","Vector"],(function a(b,c,d,e,f,g){__p&&__p();var h=null;function i(j){this._dialog=null;this.config=j;this._text_container=j.text_container;this._container=j.dialog_container;this._init()}i.init=function(j){if(h){h.config.show_audience=j.show_audience;return}h=new i(j)};Object.assign(i.prototype,{_init:function j(){__p&&__p();c("Arbiter").subscribe(["ComposerXStatusAttachment/ready","ReactComposerStatusLazyAttachment/mounted","ReactComposerStatusEagerAttachment/mounted","composer/ready"],function(){if(this.config.show_audience){this._sendEducationRequest({},"/ajax/composer/audience/education",this._handlerCustomDuration.bind(this,6e3));this.config.show_audience=false}}.bind(this));if(this.config.show_sticky)c("Arbiter").subscribe(["composer/mutate","ComposerXBootloadStatusAttachment/mutate","ReactComposerStatusEagerAttachment/mounted"],function(k,l){this._sendEducationRequest({sticky_num:this.config.n_sticky_shown},"/ajax/composer/audience/sticky_education",this._handler.bind(this))}.bind(this));if(this.config.show_tags)c("Arbiter").subscribe(["SelectedPrivacyOption/changed","PrivacySelectorBase/changed"],function(k,l){this._sendEducationRequest({ids:l.tags,from:"WithTagger",hasEvent:l.hasEvent,type:l.privacy,tag_num:this.config.n_tag_shown},"/ajax/composer/audience/tag_education",this._handler.bind(this))}.bind(this))},_sendEducationRequest:function j(k,l,m){if(!this._getContext())return;this._async&&this._async.abort();this._async=new(c("AsyncRequest"))(l);this._async.setData(k).setHandler(m).send()},_getContext:function j(){var k=c("DOM").scry(document.body,"div.composerAudienceWrapper"),l=void 0,m=void 0;for(var n=0;n<k.length;n++){l=k[n];m=c("Vector").getElementPosition(l);if(l&&m.x>0&&m.y>0)return l}return null},_handler:function j(k){this._handlerCustomDuration(1500,k)},_handlerCustomDuration:function j(k,l){var m=l.payload,n=this._getContext();if(!m||!n)return;this._dialog=c("ReactRenderer").constructAndRenderComponent(c("PrivacyEdDialog.react"),{context:n,dialogContent:this._text_container},this._container);c("DOM").setContent(this._text_container,m)}});f.exports=i}),null);