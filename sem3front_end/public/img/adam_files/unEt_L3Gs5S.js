if (self.CavalryLogger) { CavalryLogger.start_js(["shUpY"]); }

__d("ArtilleryReporting",["Artillery","Banzai"],(function a(b,c,d,e,f,g){var h="artillery_javascript_trace",i=false;f.exports.init=function(){if(i)return;i=true;c("Artillery").addRetroactiveListener("posttrace",function(j){if(c("Artillery").isEnabled())c("Banzai").post(h,j,{retry:true,delay:10*1e3})})}}),null);