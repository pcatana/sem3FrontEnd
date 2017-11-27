if (self.CavalryLogger) { CavalryLogger.start_js(["rZobJ"]); }

__d("VideoPauseWhenBackgrounded",["invariant","Event","SubscriptionsHandler","VideoPlayerReason","VideoPlayerStates","Visibility"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();function i(){this.$VideoPauseWhenBackgrounded1=new(c("SubscriptionsHandler"))();this.$VideoPauseWhenBackgrounded3=false}i.prototype.enable=function(j){!this.$VideoPauseWhenBackgrounded2||h(0);this.$VideoPauseWhenBackgrounded1.engage();this.$VideoPauseWhenBackgrounded2=j;this.$VideoPauseWhenBackgrounded1.addSubscriptions(c("Event").listen(window,"blur",this.$VideoPauseWhenBackgrounded4.bind(this)),c("Event").listen(window,"focus",this.$VideoPauseWhenBackgrounded5.bind(this)),c("Visibility").addListener(c("Visibility").HIDDEN,this.$VideoPauseWhenBackgrounded4.bind(this)),c("Visibility").addListener(c("Visibility").VISIBLE,this.$VideoPauseWhenBackgrounded5.bind(this)))};i.prototype.disable=function(){this.$VideoPauseWhenBackgrounded1.release();this.$VideoPauseWhenBackgrounded2=null};i.prototype.$VideoPauseWhenBackgrounded4=function(){this.pauseVideo(c("VideoPlayerReason").PAGE_VISIBILITY)};i.prototype.$VideoPauseWhenBackgrounded5=function(){this.playVideo(c("VideoPlayerReason").PAGE_VISIBILITY)};i.prototype.playVideo=function(j){var k=this.$VideoPauseWhenBackgrounded2;k||h(0);if(k.isState(c("VideoPlayerStates").PAUSED)&&this.$VideoPauseWhenBackgrounded3)k.play(j);this.$VideoPauseWhenBackgrounded3=false};i.prototype.pauseVideo=function(j){var k=this.$VideoPauseWhenBackgrounded2;k||h(0);if(k.isState(c("VideoPlayerStates").PLAYING)){k.pause(j);this.$VideoPauseWhenBackgrounded3=true}};f.exports=i}),null);
__d("VideoCTAEndscreen",["cx","Arbiter","AttachmentRelatedShareConstants","CSS","Event","Focus","SubscriptionsHandler","VideoCTALoggingConfig","VideoPlayerReason","VideoPlayerLoggerEvent","logVideosClickTracking"],(function a(b,c,d,e,f,g,h){__p&&__p();function i(j,k){"use strict";__p&&__p();this.$VideoCTAEndscreen1=j;this.$VideoCTAEndscreen2=k.endscreenElement;this.$VideoCTAEndscreen3=k.replayElement;this.$VideoCTAEndscreen4=k.ctaElement;this.$VideoCTAEndscreen5=k.isPausescreen;this.$VideoCTAEndscreen6=new(c("SubscriptionsHandler"))();this.$VideoCTAEndscreen6.addSubscriptions(c("Event").listen(this.$VideoCTAEndscreen3,"click",function(){return this.$VideoCTAEndscreen7()}.bind(this)),j.addListener("beginPlayback",function(){return this.$VideoCTAEndscreen8()}.bind(this)),j.addListener("VideoChannelController/exitChannel",function(){if(j.isState("finished"))this.$VideoCTAEndscreen9()}.bind(this)));if(this.$VideoCTAEndscreen4)this.$VideoCTAEndscreen6.addSubscriptions(c("Event").listen(this.$VideoCTAEndscreen4,"click",function(){return this.$VideoCTAEndscreen10()}.bind(this)));if(this.$VideoCTAEndscreen5)this.$VideoCTAEndscreen6.addSubscriptions(j.addListener("pausePlayback",function(){return this.$VideoCTAEndscreen11()}.bind(this)));else this.$VideoCTAEndscreen6.addSubscriptions(j.addListener("finishPlayback",function(){return this.$VideoCTAEndscreen9()}.bind(this)))}i.prototype.$VideoCTAEndscreen7=function(){"use strict";__p&&__p();var j={reason:c("VideoPlayerReason").USER};this.$VideoCTAEndscreen1.clickVideo();if(this.$VideoCTAEndscreen1.isState("paused")){if(c("VideoCTALoggingConfig").shouldLogUnpausedEvent)this.$VideoCTAEndscreen1.logEvent(c("VideoPlayerLoggerEvent").UNPAUSED,j)}else if(this.$VideoCTAEndscreen1.isState("finished"))this.$VideoCTAEndscreen1.logEvent(c("VideoPlayerLoggerEvent").REPLAYED,j);var k=this.$VideoCTAEndscreen1.getVideoNode();c("logVideosClickTracking")(k);c("Focus").set(k)};i.prototype.$VideoCTAEndscreen10=function(){"use strict";c("Arbiter").inform(c("AttachmentRelatedShareConstants").FBVIDEO_CLICK,{attachment:this.$VideoCTAEndscreen1.getRootNode(),fbvideo_id:this.$VideoCTAEndscreen1.getVideoID()})};i.prototype.$VideoCTAEndscreen9=function(){"use strict";if(!this.$VideoCTAEndscreen1.getIsInChannel())this.$VideoCTAEndscreen11()};i.prototype.$VideoCTAEndscreen11=function(){"use strict";c("CSS").addClass(this.$VideoCTAEndscreen2,"_1qbf")};i.prototype.$VideoCTAEndscreen8=function(){"use strict";c("CSS").removeClass(this.$VideoCTAEndscreen2,"_1qbf")};f.exports=i}),null);